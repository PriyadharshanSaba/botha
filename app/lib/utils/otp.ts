import crypto from "crypto";

const TEST_EMAILS: string[] = process.env.TEST_EMAILS
  ? process.env.TEST_EMAILS.split(",").map((e) => e.trim().toLowerCase())
  : process.env.NODE_ENV === "production"
    ? []
    : ["hdamogha@gmail.com", "priyadharshan.97@gmail.com", "1@1"];

export function getTestEmails(): string[] {
  return TEST_EMAILS;
}

export function generateOTP(email?: string) {
  if (email && TEST_EMAILS.includes(email.toLowerCase())) {
    return "000000";
  }
  return crypto.randomInt(100000, 999999).toString();
}

export function isTestEmail(email: string) {
  return TEST_EMAILS.includes(email.toLowerCase());
}
