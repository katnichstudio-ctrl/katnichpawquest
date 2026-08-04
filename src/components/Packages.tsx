import Link from "next/link";
import { privateClass, boarding, online } from "@/lib/packages";

const cards = [
  {
    ...privateClass,
    priceLabel: `${privateClass.price} บาท`,
  },
  {
    ...boarding,
    priceLabel: "สอบถามราคาทาง LINE",
  },
  {
    ...online,
    priceLabel: `ส่วนลด ${online.discountAmount} บาท`,
  },
];

export default function Packages() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          แพ็กเกจ &amp; ราคาฝึกสุนัข
        </h2>
        <p className="mt-3 text-white/60">
          เลือกรูปแบบที่เหมาะกับคุณและน้องหมา
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.slug}
            className="flex flex-col rounded-2xl bg-white p-6"
          >
            <span className="w-fit rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-brand-navy">
              {c.tag}
            </span>
            <h3 className="mt-3 text-xl font-bold text-brand-navy">
              {c.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-brand-navy/70">
              {c.tagline}
            </p>
            <p className="mt-4 font-semibold text-brand-terracotta">
              {c.priceLabel}
            </p>
            <Link
              href={`/packages/${c.slug}`}
              className="mt-4 flex h-11 items-center justify-center rounded-full border border-brand-navy/25 px-6 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy/5"
            >
              ดูรายละเอียด →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
