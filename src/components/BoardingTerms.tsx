"use client";

import { useState } from "react";
import { boarding } from "@/lib/packages";

export default function BoardingTerms() {
  const [open, setOpen] = useState(false);
  const { terms } = boarding;

  return (
    <div className="mt-10 rounded-2xl border border-brand-navy/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-bold text-brand-navy">
          📋 เงื่อนไขการรับฝากฝึก
        </span>
        <span className="text-brand-terracotta">
          {open ? "ย่อ ▲" : "ดูเงื่อนไข ▼"}
        </span>
      </button>

      {open && (
        <div className="border-t border-brand-navy/10 px-5 py-5">
          <p className="text-sm text-brand-navy/70">{terms.intro}</p>

          <div className="mt-6 flex flex-col gap-6">
            {terms.sections.map((s) => (
              <div key={s.title}>
                <p className="font-semibold text-brand-navy">{s.title}</p>

                {"intro" in s && s.intro && (
                  <p className="mt-2 text-sm text-brand-navy/70">
                    {s.intro}
                  </p>
                )}

                {"paragraphs" in s &&
                  s.paragraphs?.map((p) => (
                    <p key={p} className="mt-2 text-sm text-brand-navy/70">
                      {p}
                    </p>
                  ))}

                {"items" in s && s.items && (
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-brand-navy/70"
                      >
                        <span className="mt-0.5 text-brand-gold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {"note" in s && s.note && (
                  <p className="mt-2 text-xs text-brand-navy/50">{s.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
