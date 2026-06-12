/**
 * Public blog article — DB-backed dynamic route.
 *
 * Next.js App Router prefers STATIC folder routes over dynamic [slug]
 * routes, so during the transition period (steps 1-5 of blogs-cms) the
 * legacy file-based blogs under app/blogs/<slug>/ continue to win for
 * their own slugs. This dynamic route serves any published DB-backed
 * blog whose slug does NOT collide with a folder.
 *
 * Step 7 will migrate the existing folder posts into the DB and delete
 * their folders, after which this route serves every published blog.
 *
 * Auth model mirrors the existing folder-based blogs:
 *   - read uid cookie
 *   - if a verified user exists, render preview + gated HTML
 *   - else render preview + <PaywallGate slug=...>
 *
 * The DB columns preview_html / gated_html are pre-sanitized at write
 * time (app/lib/blogs/sanitize.ts). They are the ONLY values fed to
 * dangerouslySetInnerHTML on this page.
 */

import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import { db } from "@/app/lib/db";
import BackBar from "@/app/blogs/components/BackBar";
import BlogFooter from "@/app/blogs/components/BlogFooter";
import PaywallGate from "@/app/components/PaywallGate";
import "@/app/blogs/guide-article.css";
import "@/app/landing.css";
import "@/app/blogs/paywall.css";

export const revalidate = 300;     // ISR: 5-min stale-while-revalidate

type Props = { params: Promise<{ slug: string }> };

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await db.getBlogBySlug(slug);
  if (!post || post.status !== "published") notFound();

  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  const user = uid ? await db.getUserById(uid) : null;
  const authed = !!user;

  return (
    <div className="blog-article-page">
      <BackBar />
      <article className="blog-post-body">
        <div dangerouslySetInnerHTML={{ __html: post.previewHtml }} />
        {authed ? (
          <div dangerouslySetInnerHTML={{ __html: post.gatedHtml }} />
        ) : (
          <PaywallGate slug={slug} />
        )}
      </article>
      <BlogFooter />
    </div>
  );
}

export async function generateStaticParams() {
  const blogs = await db.listPublishedBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await db.getBlogBySlug(slug);
  if (!post || post.status !== "published") {
    return { title: "Article not found" };
  }

  const title = post.title;
  const description = post.deck;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
