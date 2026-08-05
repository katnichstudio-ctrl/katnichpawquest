import type { Metadata } from "next";
import Link from "next/link";
import { online } from "@/lib/packages";

export const metadata: Metadata = {
  title: "เรียนออนไลน์ | PawQuest",
  description: online.tagline,
};

export default function OnlinePage() {
  return (
    <main className="flex flex-col">
      <section className="bg-brand-navy px-6 py-16 text-center text-white sm:px-10 sm:py-20">
        <Link href="/#pricing" className="text-sm text-white/60 hover:text-white">
          ← กลับหน้าแพ็กเกจ
        </Link>
        <div className="mx-auto mt-4 max-w-2xl">
          <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-brand-navy">
            {online.tag}
          </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            {online.title}
          </h1>
          <p className="mt-3 text-white/70">{online.tagline}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-brand-navy/70">
            เรียนคอร์สฝึกสุนัขแนวทาง Force-free ของ DogBooster
            ได้ทุกที่ทุกเวลา ผ่านระบบเรียนออนไลน์
          </p>

          <div className="mt-6 rounded-xl border border-brand-gold/40 bg-brand-gold/10 px-5 py-4">
            <p className="text-brand-navy">
              รับส่วนลด {online.discountAmount} บาท จากครูแคทนิช ใช้โค้ด{" "}
              <span className="font-bold text-brand-terracotta">
                {online.discountCode}
              </span>
            </p>
          </div>

          <div className="mt-8">
            <a
              href={online.courseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-gold px-6 text-base font-semibold text-brand-navy shadow-lg transition-transform hover:scale-105"
            >
              ดูคอร์สออนไลน์ →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
