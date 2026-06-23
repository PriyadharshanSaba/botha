import { notFound } from "next/navigation";
import { db } from "@/app/lib/db";
import BlogEditor, { type EditorInitialValues } from "../../BlogEditor";
import "@/app/blogs/guide-article.css";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await db.getBlogBySlug(slug);
  if (!blog) notFound();

  // Reassemble preview + gated into a single raw HTML body for the textarea.
  // Embed customCss in a <style> block at the top so the server's
  // extractBlogMetadata pulls it back out on save. Without this re-embed the
  // edit-then-save flow would silently drop the article's custom styles.
  const styleBlock = blog.customCss
    ? `<style>${blog.customCss}</style>\n`
    : "";
  const rawHtml = styleBlock + blog.previewHtml + blog.gatedHtml;

  // Detect the boundary section from the FIRST section-tag in gatedHtml.
  // Fall back to 1 if absent (shouldn't happen — would imply zero gated sections).
  const firstGatedSection = parseFirstSectionNumber(blog.gatedHtml);
  const afterSection = firstGatedSection !== null ? firstGatedSection - 1 : 1;

  const initial: EditorInitialValues = {
    mode: "edit",
    slug: blog.slug,
    kicker: blog.kicker,
    title: blog.title,
    titleHtml: blog.titleHtml,
    deck: blog.deck,
    heroSub: blog.heroSub,
    heroBadge: blog.heroBadge ?? "",
    topbarBrand: blog.topbarBrand,
    topbarTag: blog.topbarTag,
    dateLabel: blog.dateLabel,
    readTime: blog.readTime,
    rawHtml,
    afterSection,
    customCss: blog.customCss ?? "",
    status: blog.status,
  };

  return <BlogEditor initial={initial} />;
}

function parseFirstSectionNumber(html: string): number | null {
  const m = html.match(/class="section-tag"[^>]*>\s*(\d{1,3})/);
  return m ? parseInt(m[1], 10) : null;
}
