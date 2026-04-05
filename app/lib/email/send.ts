import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOtpEmail(to: string, otp: string, firstName: string) {
  const { data, error } = await resend.emails.send({
    from: "Bodha Ventures <info@bodhaventures.in>",
    to,
    subject: "Your verification code",
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
        <h2 style="margin: 0 0 8px;">Hi ${firstName},</h2>
        <p style="color: #555; margin: 0 0 24px;">Use the code below to verify your identity. It expires in 5 minutes.</p>
        <div style="background: #f4f4f4; border-radius: 8px; padding: 24px; text-align: center;">
          <span style="font-size: 36px; font-weight: bold; letter-spacing: 12px;">${otp}</span>
        </div>
        <p style="color: #999; font-size: 12px; margin: 24px 0 0;">If you didn't request this, you can safely ignore this email.</p>
      </div>
    `,
  });

  if (error) {
    console.error("[Resend] Failed to send OTP email:", error);
  } else {
    console.log("[Resend] Email sent:", data?.id);
  }
}
