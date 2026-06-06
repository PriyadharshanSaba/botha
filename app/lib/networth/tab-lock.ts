"use client";

type LockResult = { acquired: boolean; release: () => void };

const CLAIM_WAIT_MS = 500;
const LEASE_REFRESH_MS = 2000;
const LEASE_DEAD_MS = 5000;

export async function acquireTabLock(userId: string): Promise<LockResult> {
  if (typeof window === "undefined") return { acquired: true, release: () => {} };

  if (typeof BroadcastChannel !== "undefined") {
    return acquireViaBroadcast(userId);
  }
  return acquireViaLease(userId);
}

function acquireViaBroadcast(userId: string): Promise<LockResult> {
  return new Promise((resolve) => {
    const channel = new BroadcastChannel(`nwt_lock_${userId}`);
    let owned = false;

    const onMessage = (event: MessageEvent) => {
      if (!event.data || typeof event.data !== "object") return;
      if (event.data.type === "claim?" && owned) {
        channel.postMessage({ type: "owned" });
      }
      if (event.data.type === "owned" && !owned) {
        // Another tab already owns.
        channel.removeEventListener("message", onMessage);
        channel.close();
        resolve({ acquired: false, release: () => {} });
      }
    };

    channel.addEventListener("message", onMessage);
    channel.postMessage({ type: "claim?" });

    setTimeout(() => {
      if (owned) return;
      owned = true;
      resolve({
        acquired: true,
        release: () => {
          owned = false;
          channel.removeEventListener("message", onMessage);
          channel.close();
        },
      });
    }, CLAIM_WAIT_MS);
  });
}

function acquireViaLease(userId: string): Promise<LockResult> {
  return new Promise((resolve) => {
    const key = `nwt_tab_${userId}`;
    const now = Date.now();
    const raw = localStorage.getItem(key);
    let parsed: { ownedAt: number } | null = null;
    try {
      parsed = raw ? (JSON.parse(raw) as { ownedAt: number }) : null;
    } catch {
      parsed = null;
    }

    if (parsed && now - parsed.ownedAt < LEASE_DEAD_MS) {
      resolve({ acquired: false, release: () => {} });
      return;
    }

    let lastWrite = now;
    localStorage.setItem(key, JSON.stringify({ ownedAt: lastWrite }));
    const interval = setInterval(() => {
      lastWrite = Date.now();
      localStorage.setItem(key, JSON.stringify({ ownedAt: lastWrite }));
    }, LEASE_REFRESH_MS);

    resolve({
      acquired: true,
      release: () => {
        clearInterval(interval);
        const cur = localStorage.getItem(key);
        if (!cur) return;
        try {
          const p = JSON.parse(cur) as { ownedAt: number };
          // Only delete if our last heartbeat is still the current value —
          // i.e. no other tab has overwritten the lease since.
          if (p && p.ownedAt === lastWrite) localStorage.removeItem(key);
        } catch {
          // unparseable — leave alone
        }
      },
    });
  });
}
