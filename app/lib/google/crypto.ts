import crypto from "crypto";

/** Symmetric key for encrypting the stored Google refresh token at rest. */
function getKey(): Buffer {
  const b64 = process.env.GOOGLE_TOKEN_ENC_KEY;
  if (!b64) throw new Error("GOOGLE_TOKEN_ENC_KEY is not set");
  const key = Buffer.from(b64, "base64");
  if (key.length !== 32) throw new Error("GOOGLE_TOKEN_ENC_KEY must decode to 32 bytes (base64 of a 256-bit key)");
  return key;
}

/** AES-256-GCM encrypt. Returns "iv.tag.ciphertext", each base64. */
export function encryptToken(plain: string): string {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", getKey(), iv);
  const enc = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return [iv, tag, enc].map((b) => b.toString("base64")).join(".");
}

export function decryptToken(payload: string): string {
  const [ivB64, tagB64, encB64] = payload.split(".");
  const iv = Buffer.from(ivB64, "base64");
  const tag = Buffer.from(tagB64, "base64");
  const enc = Buffer.from(encB64, "base64");
  const decipher = crypto.createDecipheriv("aes-256-gcm", getKey(), iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(enc), decipher.final()]).toString("utf8");
}
