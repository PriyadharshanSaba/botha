const TEST_EMAILS = ["hdamogha@gmail.com", "priyadharshan.97@gmail.com"];

export function generateOTP(email?: string) {
  if (email && TEST_EMAILS.includes(email.toLowerCase())) {
    return "000000";
  }
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function isTestEmail(email: string) {
  return TEST_EMAILS.includes(email.toLowerCase());
}