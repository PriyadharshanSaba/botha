/**
 * R2-backed invoice PDF storage.
 *
 * Cloudflare R2 is S3-compatible — we use @aws-sdk/client-s3 pointed at the
 * R2 endpoint. Object key = `invoices/<invoiceId>.pdf`.
 *
 * Required env vars:
 *   R2_ACCOUNT_ID         — Cloudflare account id (R2 endpoint subdomain)
 *   R2_ACCESS_KEY_ID      — R2 access key
 *   R2_SECRET_ACCESS_KEY  — R2 secret
 *   R2_BUCKET             — e.g. "bodha-invoices"
 *
 * Failure mode: all functions throw on error. Callers degrade gracefully
 * (issuance still succeeds with pdf_object_key = NULL).
 */

import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

let _client: S3Client | null = null;

function getClient(): S3Client {
  if (_client) return _client;
  const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY } = process.env;
  if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
    throw new Error("R2 storage: missing env vars (R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY)");
  }
  _client = new S3Client({
    region: "auto",
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: R2_ACCESS_KEY_ID,
      secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
  });
  return _client;
}

function bucket(): string {
  const b = process.env.R2_BUCKET;
  if (!b) throw new Error("R2 storage: missing R2_BUCKET env var");
  return b;
}

export function invoicePdfObjectKey(invoiceId: string): string {
  return `invoices/${invoiceId}.pdf`;
}

export async function uploadInvoicePdf(invoiceId: string, pdfBuffer: Buffer): Promise<string> {
  const key = invoicePdfObjectKey(invoiceId);
  await getClient().send(
    new PutObjectCommand({
      Bucket: bucket(),
      Key: key,
      Body: pdfBuffer,
      ContentType: "application/pdf",
    })
  );
  return key;
}

/** Returns a time-limited signed URL for downloading the PDF. */
export async function getSignedInvoicePdfUrl(
  objectKey: string,
  ttlSeconds: number = 3600
): Promise<string> {
  return getSignedUrl(
    getClient(),
    new GetObjectCommand({ Bucket: bucket(), Key: objectKey }),
    { expiresIn: ttlSeconds }
  );
}
