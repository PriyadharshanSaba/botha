/**
 * HTML → PDF rendering via headless Chromium.
 *
 * On Vercel / serverless runtimes uses @sparticuz/chromium (slim).
 * On local dev, set PUPPETEER_EXECUTABLE_PATH to a local Chrome/Chromium
 * binary to skip the slim bundle (faster cold start).
 *
 * Failure semantics: throws on error. Caller (issuance flow) catches and
 * degrades — invoice is still issued without PDF.
 */

import puppeteer, { type Browser } from "puppeteer-core";

async function launchBrowser(): Promise<Browser> {
  const localPath = process.env.PUPPETEER_EXECUTABLE_PATH;
  if (localPath) {
    return puppeteer.launch({
      executablePath: localPath,
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }

  // Serverless: use @sparticuz/chromium
  const chromium = (await import("@sparticuz/chromium")).default;
  return puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true,
  });
}

export async function htmlToPdfBuffer(html: string): Promise<Buffer> {
  const browser = await launchBrowser();
  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });
    return Buffer.from(pdf);
  } finally {
    await browser.close();
  }
}
