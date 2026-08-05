"use client";

import { useState } from "react";

const roles = [
  "บริหารสถาบัน DogBooster ประเทศไทย",
  "ให้คำปรึกษาและวิธีการเลี้ยง/การฝึกสุนัข",
];

const trainings = [
  "DogBooster Certified Professional Dog Trainer",
  "J-walking โดย Susan Garrett",
  "CPR & First Aid Workshop",
];

export default function TrainerAbout() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <img
        src="/about/katnich-tommam.jpg"
        alt="ครูแคทนิชและต้มมัด"
        className="mx-auto w-full max-w-sm rounded-2xl object-cover shadow-lg lg:max-w-none"
      />

      <div>
        <h2 className="text-3xl font-bold text-brand-navy sm:text-4xl">
          สวัสดีค่ะ เราคือ
          <br />
          PawQuest
        </h2>

        <p className="mt-4 text-brand-navy/80">
          <span className="font-bold text-brand-terracotta">แคทนิช</span>{" "}
          Managing Director &amp; Dog Trainer จาก DogBooster
        </p>

        <p className="mt-4 leading-7 text-brand-navy/80">
          เลี้ยงและชอบฝึกสุนัขมาตั้งแต่เด็ก และศึกษาการฝึกสุนัขมาเรื่อยๆ
          จุดเปลี่ยนการฝึกแนวทางฝึกจากบังคับมาเป็น Force-Free
          ได้เป็นลูกศิษย์ครูเข็ม DogBooster
          ลองศึกษาและทำตามรู้สึกว่าได้ผลจริงและไม่ต้องใช้อุปกรณ์บังคับเขา
          ฝึกมาเรื่อยๆจนสุนัขตัวเอง ต้มมัด (บีเกิ้ล) ที่แสนซนจนหยุดไม่อยู่
          เขามีพัฒนาการที่ดีขึ้น สงบกว่าเพื่อนที่อายุเท่ากัน และมีสติมากขึ้น
        </p>

        {expanded && (
          <>
            <p className="mt-4 leading-7 text-brand-navy/80">
              จึงเข้ามาช่วยประชาสัมพันธ์การฝึกแนวทางใหม่นี้ให้คนรู้จักเป็นวงกว้างมากขึ้น
              และร่วมเป็นครูฝึกใน DogBooster
            </p>

            <div className="mt-6 rounded-xl border-l-4 border-brand-gold bg-brand-cream/60 p-5">
              <p className="font-bold text-brand-navy">ประวัติครูฝึกสุนัข</p>

              <p className="mt-3 font-semibold text-brand-navy">
                ครูแคทนิช · นิชา สุบิน
              </p>
              <p className="text-sm text-brand-navy/70">
                Managing Director &amp; Dog Trainer
              </p>
              <a
                href="https://www.instagram.com/katnich.pawquest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-brand-terracotta underline decoration-brand-terracotta/40 underline-offset-4"
              >
                IG@katnich.pawquest
              </a>

              <ul className="mt-3 space-y-1 text-sm text-brand-navy/70">
                {roles.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>

              <p className="mt-4 font-semibold text-brand-navy">
                การอบรมหลักสูตร
              </p>
              <ul className="mt-2 space-y-1 text-sm text-brand-navy/70">
                {trainings.map((t) => (
                  <li key={t}>• {t}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-5 text-sm font-semibold text-brand-terracotta underline decoration-brand-terracotta/40 underline-offset-4"
        >
          {expanded ? "ย่อข้อความ" : "อ่านต่อ →"}
        </button>
      </div>
    </div>
  );
}
