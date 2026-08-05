import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "บทความความรู้ฝึกหมา | PawQuest",
  description: "รวมบทความความรู้ฝึกสุนัขจาก PawQuest",
};

export default function BlogPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-brand-navy px-6 py-16 text-center text-white sm:px-10 sm:py-20">
        <p className="text-sm font-semibold text-brand-gold">ความรู้ฝึกหมา</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">บทความทั้งหมด</h1>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-3">
          {posts.map((post) => (
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
                <h2 className="mt-2 font-bold text-brand-navy">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-brand-navy/60">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
