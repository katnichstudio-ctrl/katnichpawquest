import type { Metadata } from "next";
import Link from "next/link";
import { privateClass } from "@/lib/packages";
import { LINE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ฝึกส่วนตัวกับครู | KatNich PawQuest",
  description: privateClass.tagline,
};

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-brand-navy/70">
      <span className="mt-0.5 text-brand-gold">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function PrivateClassPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-brand-navy px-6 py-16 text-center text-white sm:px-10 sm:py-20">
        <Link href="/#pricing" className="text-sm text-white/60 hover:text-white">
          ← กลับหน้าแพ็กเกจ
        </Link>
        <div className="mx-auto mt-4 max-w-2xl">
          <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-brand-navy">
            {privateClass.tag}
          </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            {privateClass.title}
          </h1>
          <p className="mt-3 text-white/70">{privateClass.tagline}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg font-bold text-brand-navy">รายละเอียดคอร์ส</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {privateClass.features.map((f) => (
              <Check key={f}>{f}</Check>
            ))}
          </ul>

          <h2 className="mt-8 text-lg font-bold text-brand-navy">
            บริการฟรี 🎁
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {privateClass.freebies.map((f) => (
              <Check key={f}>{f}</Check>
            ))}
          </ul>

          <p className="mt-4 text-xs text-brand-navy/50">
            {privateClass.note}
          </p>

          <div className="mt-8 rounded-xl bg-brand-cream/60 p-5">
            <p className="font-semibold text-brand-navy">เขตบริการ</p>
            <div className="mt-2 flex flex-col gap-1">
              {privateClass.zones.map((z) => (
                <p key={z.province} className="text-sm text-brand-navy/70">
                  {z.province}
                  {z.districts.length > 0 && (
                    <span className="text-brand-navy/50">
                      {" "}
                      — {z.districts.join(" · ")}
                    </span>
                  )}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-brand-cream px-6 py-5">
            <p className="text-3xl font-bold text-brand-terracotta">
              {privateClass.price}{" "}
              <span className="text-base font-medium text-brand-navy/60">
                บาท
              </span>
            </p>
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
      </section>
    </main>
  );
}
