import { cookies } from "next/headers";
import { db } from "@/app/lib/db";
import BackBar from "@/app/blogs/components/BackBar";
import BlogFooter from "@/app/blogs/components/BlogFooter";
import PaywallGate from "@/app/components/PaywallGate";
import { Preview } from "./preview";
import "@/app/blogs/paywall.css";

const SLUG = "india-e20-deep-dive";

export default async function Page() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  const user = uid ? await db.getUserById(uid) : null;
  const authed = !!user;

  const Gated = authed ? (await import("./gated")).Gated : null;

  return (
    <div className="blog-article-page">
      <BackBar />
      <article className="blog-post-body">
        <Preview />
        {Gated ? <Gated /> : <PaywallGate slug={SLUG} />}
      </article>
      <BlogFooter />
    </div>
  );
}
