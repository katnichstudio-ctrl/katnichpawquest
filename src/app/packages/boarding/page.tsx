import type { Metadata } from "next";
import Link from "next/link";
import { boarding } from "@/lib/packages";
import { LINE_URL } from "@/lib/constants";
import BoardingTerms from "@/components/BoardingTerms";

export const metadata: Metadata = {
  title: "ฝากฝึก 30 วัน | KatNich PawQuest",
  description: boarding.tagline,
};

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-brand-navy/70">
      <span className="mt-0.5 text-brand-gold">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function BoardingPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-brand-navy px-6 py-16 text-center text-white sm:px-10 sm:py-20">
        <Link href="/#pricing" className="text-sm text-white/60 hover:text-white">
          ← กลับหน้าแพ็กเกจ
        </Link>
        <div className="mx-auto mt-4 max-w-2xl">
          <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-brand-navy">
            {boarding.tag}
          </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            {boarding.title}
          </h1>
          <p className="mt-3 font-medium text-brand-gold">
            {boarding.tagline}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl border border-brand-terracotta/30 bg-brand-terracotta/5 px-5 py-4">
            <p className="font-bold text-brand-terracotta">
              ⚠️ {boarding.limitedSlots.title}
            </p>
            <p className="mt-1 text-sm text-brand-navy/70">
              {boarding.limitedSlots.desc}
            </p>
          </div>

          <a
            href={boarding.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy underline decoration-brand-navy/30 underline-offset-4 hover:text-brand-terracotta"
          >
            📍 {boarding.location.name}
          </a>

          <p className="mt-8 font-semibold text-brand-navy">
            ฝากฝึกแบบ Home-style Training
          </p>
          {boarding.intro.slice(1).map((p) => (
            <p key={p} className="mt-3 leading-7 text-brand-navy/70">
              {p}
            </p>
          ))}

          <h2 className="mt-10 text-lg font-bold text-brand-navy">
            แผนการฝึก 90 วัน
          </h2>
          <div className="mt-5 flex flex-col gap-5">
            {boarding.phases.map((p, i) => (
              <div key={p.range} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-terracotta text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-brand-navy">
                    {p.range}{" "}
                    <span className="text-brand-terracotta">· {p.title}</span>
                  </p>
                  <p className="mt-1 text-sm text-brand-navy/60">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-lg font-bold text-brand-navy">
            รายละเอียดเพิ่มเติม
          </h2>
          <div className="mt-4 flex flex-col gap-5">
            {boarding.details.map((d) => (
              <div key={d.title}>
                <p className="font-semibold text-brand-navy">{d.title}</p>
                <p className="mt-1 text-sm text-brand-navy/70">{d.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-lg font-bold text-brand-navy">
            สิ่งที่ต้องเตรียมมา
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {boarding.prepItems.map((item) => (
              <Check key={item}>{item}</Check>
            ))}
          </ul>
          <p className="mt-3 text-sm text-brand-navy/60">
            {boarding.prepNote}
          </p>

          <h2 className="mt-10 text-lg font-bold text-brand-navy">
            บริการฟรี 🎁
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {boarding.freebies.map((item) => (
              <Check key={item}>{item}</Check>
            ))}
          </ul>

          <BoardingTerms />

          <div className="mt-10 rounded-2xl bg-brand-cream px-6 py-5">
            <p className="text-sm font-semibold text-brand-terracotta">
              🎉 ราคาเปิดตัว
            </p>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-3xl font-bold text-brand-terracotta">
                  {boarding.price.launch}{" "}
                  <span className="text-base font-medium text-brand-navy/60">
                    บาท
                  </span>
                </p>
                <p className="mt-1 text-sm text-brand-navy/50 line-through">
                  ราคาปกติ {boarding.price.normal} {boarding.price.unit}
                </p>
              </div>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-full bg-brand-gold px-6 text-base font-semibold text-brand-navy shadow-lg transition-transform hover:scale-105"
              >
                จองคอร์สนี้
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
