import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/blog";
import { LINE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  const seoTitle = post.seoTitle ?? `${post.title} | KatNich PawQuest`;

  return {
    title: seoTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: seoTitle,
      description: post.metaDescription,
      type: "article",
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: [post.image],
    author: { "@type": "Person", name: "ครูแคทนิช" },
    publisher: { "@type": "Organization", name: "KatNich PawQuest" },
  };

  const faqJsonLd = post.faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <section className="bg-brand-navy px-6 py-16 text-center text-white sm:px-10 sm:py-20">
        <Link href="/blog" className="text-sm text-white/60 hover:text-white">
          ← กลับหน้าบทความ
        </Link>
        <div className="mx-auto mt-4 max-w-2xl">
          <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-brand-navy">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      <img
        src={post.image}
        alt={post.title}
        className="mx-auto -mt-1 h-64 w-full max-w-3xl object-cover sm:h-96"
      />

      <section className="bg-white px-6 py-16 sm:px-10 sm:py-20">
        <article className="mx-auto max-w-2xl">
          {post.content.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="mt-8 text-xl font-bold text-brand-navy first:mt-0"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="mt-3 flex flex-col gap-1.5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-brand-navy/70"
                    >
                      <span className="mt-0.5 text-brand-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="mt-3 leading-7 text-brand-navy/70">
                {block.text}
              </p>
            );
          })}

          {post.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold text-brand-navy">
                คำถามที่พบบ่อย
              </h2>
              <div className="mt-4 flex flex-col gap-5">
                {post.faq.map((f) => (
                  <div key={f.q}>
                    <p className="font-semibold text-brand-navy">{f.q}</p>
                    <p className="mt-1 leading-7 text-brand-navy/70">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-brand-cream px-6 py-5">
            <p className="text-brand-navy/70">มีคำถามเกี่ยวกับน้องหมา?</p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-full bg-brand-gold px-6 text-base font-semibold text-brand-navy shadow-lg transition-transform hover:scale-105"
            >
              💬 แอด LINE ปรึกษาฟรี
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
