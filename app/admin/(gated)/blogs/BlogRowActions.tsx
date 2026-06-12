"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  slug: string;
  status: "draft" | "published";
};

export default function BlogRowActions({ slug, status }: Props) {
  const router = useRouter();
  const [busy, setBusy] = useState<null | "publish" | "unpublish" | "delete">(null);

  async function call(action: "publish" | "unpublish" | "delete") {
    if (action === "delete" && !confirm(`Delete "${slug}" permanently? This cannot be undone.`)) return;
    setBusy(action);
    try {
      const url =
        action === "delete"
          ? `/api/admin/blogs/${slug}`
          : `/api/admin/blogs/${slug}/${action}`;
      const res = await fetch(url, { method: action === "delete" ? "DELETE" : "POST" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        alert(`Failed: ${body.error ?? res.statusText}`);
        return;
      }
      router.refresh();
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="admin-blogs-actions">
      <Link href={`/admin/blogs/${slug}/edit`} className="admin-btn-link">Edit</Link>
      {status === "published" ? (
        <button
          onClick={() => call("unpublish")}
          disabled={busy !== null}
          className="admin-btn-link"
        >
          {busy === "unpublish" ? "…" : "Unpublish"}
        </button>
      ) : (
        <button
          onClick={() => call("publish")}
          disabled={busy !== null}
          className="admin-btn-link"
        >
          {busy === "publish" ? "…" : "Publish"}
        </button>
      )}
      <button
        onClick={() => call("delete")}
        disabled={busy !== null}
        className="admin-btn-link admin-btn-danger"
      >
        {busy === "delete" ? "…" : "Delete"}
      </button>
    </div>
  );
}
