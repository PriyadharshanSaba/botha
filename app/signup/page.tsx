"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [step, setStep] = useState<"form" | "otp">("form");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const [otp, setOtp] = useState("");

  async function handleSignup(e: any) {
    e.preventDefault();
    
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (!res.ok) {
      alert("Signup failed");
      return;
    }

    setStep("otp");
  }

  async function handleVerify(e: any) {
    e.preventDefault();

    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, otp })
    });

    if (!res.ok) {
      alert("Invalid OTP");
      return;
    }

    router.push("/modules");
  }

  return (
    <div className="page">
      <main className="card">
        {step === "form" && (
          <form onSubmit={handleSignup}>
            <h1>Create an Account</h1>

            <input
              placeholder="First name"
              value={form.firstName}
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
            />
            <input
              placeholder="Last name"
              value={form.lastName}
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
            />
            <input
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <button type="submit">Sign up</button>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={handleVerify}>
            <h1>Enter OTP</h1>

            <input
              placeholder="6-digit code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button type="submit">Verify</button>
          </form>
        )}
      </main>
    </div>
  );
}
