import "./blogs.css";
import "../landing.css";
import { db } from "@/app/lib/db";
import BlogsList, { type BlogCard } from "./BlogsList";

export const revalidate = 300;     // ISR: 5-min stale-while-revalidate

export default async function BlogsPage() {
  const rows = await db.listPublishedBlogs();
  const posts: BlogCard[] = rows.map((r) => ({
    slug: r.slug,
    kicker: r.kicker,
    title: r.title,
    deck: r.deck,
    dateLabel: r.dateLabel,
    readTime: r.readTime,
  }));
  return <BlogsList posts={posts} />;
}
