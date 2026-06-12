import Link from "next/link";
import { db } from "@/app/lib/db";
import BlogRowActions from "./BlogRowActions";

function fmtDate(d: Date | null) {
  if (!d) return "—";
  return new Date(d).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric", month: "short", day: "2-digit",
    hour: "2-digit", minute: "2-digit",
  });
}

export default async function BlogsAdminPage() {
  const blogs = await db.listAllBlogs();

  return (
    <main>
      <div className="admin-blogs-header">
        <div>
          <h1 className="admin-h1">Blogs</h1>
          <p className="admin-sub">{blogs.length} article{blogs.length === 1 ? "" : "s"}</p>
        </div>
        <Link href="/admin/blogs/new" className="admin-btn-primary">+ New blog</Link>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Slug</th>
              <th>Title</th>
              <th>Date</th>
              <th>Updated (IST)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length === 0 ? (
              <tr><td colSpan={6} className="admin-empty">No blogs yet — click <strong>+ New blog</strong> to publish your first.</td></tr>
            ) : (
              blogs.map((b) => (
                <tr key={b.slug}>
                  <td>
                    <span className={`admin-pill admin-pill-${b.status}`}>{b.status}</span>
                  </td>
                  <td className="mono">{b.slug}</td>
                  <td>{b.title}</td>
                  <td>{b.dateLabel}</td>
                  <td className="mono">{fmtDate(b.updatedAt)}</td>
                  <td>
                    <BlogRowActions slug={b.slug} status={b.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
