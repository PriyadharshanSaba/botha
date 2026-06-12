import Link from "next/link";

export default function BackBar() {
  return (
    <div className="blog-back-bar">
      <Link href="/blogs" className="blog-back-link">&#8592; All articles</Link>
    </div>
  );
}
