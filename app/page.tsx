// app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const logged = typeof window !== "undefined" ? localStorage.getItem("logged_in") : null;
    if (logged === "1") {
      setIsLoggedIn(true);
      router.push("/modules");
    }
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if ( email === "priyadharshan.97@gmail.com" && password === "password123" 
        || email === "amogh036@gmail.com" && password === "password123" 
        || email === "1@1" && password === "1") {
        setIsLoggedIn(true);
        localStorage.setItem("logged_in", "1");
        router.push("/modules");
      } else {
        setError("Invalid email or password.");
      }
    }, 700);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("logged_in");
    setEmail("");
    setPassword("");
    setError("");
  }

  return (
    <div className="page">
      <main className="card">
        {!isLoggedIn && (
          <form onSubmit={handleLogin} className="form">
            <h1 className="title">Welcome back</h1>

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              required
            />

            {error && <div className="error">{error}</div>}

            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
