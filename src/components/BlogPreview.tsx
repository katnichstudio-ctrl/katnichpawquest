import Link from "next/link";
import { posts } from "@/lib/blog";

export default function BlogPreview() {
  const featured = posts.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-brand-terracotta">
            ความรู้ฝึกหมา
          </p>
          <h2 className="mt-1 text-3xl font-bold text-brand-navy sm:text-4xl">
            อ่านก่อนเริ่มฝึกหมา
          </h2>
        </div>
        <Link
          href="/blog"
          className="text-sm font-semibold text-brand-terracotta hover:underline"
        >
          ดูบทความทั้งหมด →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {featured.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-white"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold text-brand-terracotta">
                {post.category}
              </p>
              <h3 className="mt-2 font-bold text-brand-navy">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-brand-navy/60">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
