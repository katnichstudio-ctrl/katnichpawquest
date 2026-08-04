"use client";

import { useState } from "react";

const LINE_URL = "https://lin.ee/sWym9mQ";

const privateFeatures = [
  "ฝึกที่บ้าน 4 ครั้ง",
  "ประเมินนิสัย + วางแผนเฉพาะตัว",
  "เลือกได้: ที่บ้านคุณ / หรือสถานที่ต่างๆ",
  "ครูสอนสัปดาห์ละ 1-2 ครั้ง · ครั้งละ 60 นาที",
  "ฝึกร่วมกับเจ้าของ",
];

const privateFreebies = [
  "ไม่มีค่าใช้จ่ายการเดินทาง ใน 15 กม.",
  "ปรึกษาออนไลน์ตลอดระยะเวลาฝึก",
  "รายงานพัฒนาการสุนัข",
  "กลุ่ม LINE ให้คำปรึกษาและสิทธิประโยชน์ต่างๆ ของนักเรียน DogBooster",
  "ส่วนลด 15% สำหรับคลาสอื่น",
];

const privateZones = [
  { province: "จังหวัดนครปฐม", districts: [] },
  {
    province: "จังหวัดนนทบุรี",
    districts: ["บางบัวทอง", "บางกรวย", "บางใหญ่", "ไทรน้อย"],
  },
  {
    province: "กรุงเทพฯ (ฝั่งธนบุรี)",
    districts: ["ตลิ่งชัน", "ทวีวัฒนา", "บางแค", "หนองแขม"],
  },
];

const phases = [
  {
    range: "30 วันแรก",
    title: "สร้างพื้นฐานสติ",
    desc: "ปูพื้นฐานความสงบ สร้างสติ ฝึกการหักห้ามใจและสมาธิเบื้องต้น ให้น้อง “นั่ง/คอยเองโดยไม่ต้องสั่ง” เรียนรู้ความสงบด้วยตัวเอง ลดความตื่นเต้นภายในบ้าน",
  },
  {
    range: "วันที่ 31–60",
    title: "นำสติมาใช้จริง",
    desc: "นำความสงบมาใช้กับกิจวัตรประจำวัน เพิ่มสมาธิ (Focus) ท่ามกลางสิ่งเร้า สร้างความเชื่อใจต่อผู้ฝึก รักษาสมาธิได้นานขึ้น มั่นใจสูงขึ้น เรียกสติกลับได้ไว นั่งรอ-หมอบคอยได้",
  },
  {
    range: "วันที่ 61–90",
    title: "Skill Selection",
    desc: "นำสติ 2 เดือนมาแก้ปัญหา/ฝึกทักษะเฉพาะที่เจ้าของต้องการ ปรับให้เข้ากับไลฟ์สไตล์ เช่น Recall · เดินในสายจูง · ลดความไวต่อสิ่งเร้า (เลือกตามความต้องการ)",
  },
];

const boardingDetails = [
  {
    title: "สุนัขแต่ละตัวมีพื้นฐานต่างกัน",
    desc: "ผลลัพธ์ของการฝึกอาจแตกต่างกันไปในแต่ละตัว ขึ้นกับนิสัย สภาพจิตใจ และความสามารถในการเรียนรู้",
  },
  {
    title: "ฝึกระยะสั้น (1–2 เดือน)",
    desc: "ครูเน้นสร้างพื้นฐานสมาธิ + มอบ “คู่มือ/แนวทางปฏิบัติ” ให้เจ้าของไปต่อยอดที่บ้าน เพราะความสำเร็จระยะยาวขึ้นกับสภาพแวดล้อมที่สอดคล้องกัน",
  },
  {
    title: "น้องที่เห่า / Reactive",
    desc: "ครูเน้นปรับพฤติกรรมเป็นอันดับแรก เริ่มจากบทเรียนพื้นฐานเพื่อลดความเครียดและสร้างความพร้อมในการเรียนรู้",
  },
  {
    title: "ฝึกต่อเนื่องระยะยาว",
    desc: "หากต้องการเน้นทักษะต่างๆ สามารถฝากฝึกต่อเนื่องได้ตามความต้องการ",
  },
];

const prepItems = [
  "อาหารหลัก",
  "ขนม / อาหารเสริม",
  "ชามอาหาร / ชามน้ำ",
  "สายจูง / ปลอกคอ / รัดอก",
  "ที่นอน / ผ้า",
  "ของเล่น",
  "ยาประจำตัว (ถ้ามี)",
  "สำเนาบัตรประชาชน",
  "สำเนาสมุดวัคซีน",
  "เลขไมโครชิพ (ถ้ามี)",
  "ผลตรวจสุขภาพ + โรคติดต่อ (อายุไม่เกิน 7 วัน)",
];

const boardingFreebies = [
  "รายงานความคืบหน้า รูป/วีดีโอ ระหว่างฝึก 2–3 ครั้ง ต่อสัปดาห์",
  "อาบน้ำฟรี ก่อนส่งมอบกลับบ้าน",
  "รายงานพัฒนาการของสุนัข",
  "ส่งต่อการฝึก/ดูแลสุนัขด้วยตนเอง วิธีการแก้ไขปัญหาเบื้องต้น",
  "ปรึกษาผ่านออนไลน์ต่อฟรี 30 วัน",
  "เข้ากลุ่ม LINE และสิทธิประโยชน์ต่างๆ ของนักเรียน DogBooster",
];

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-brand-navy/70">
      <span className="mt-0.5 text-brand-gold">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function Packages() {
  const [showBoardingDetails, setShowBoardingDetails] = useState(false);

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

      <div className="mt-12 flex flex-col gap-6">
        {/* 1. Private Class */}
        <div className="rounded-2xl bg-white p-6 sm:p-8">
          <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-brand-navy">
            Private Class
          </span>
          <h3 className="mt-3 text-2xl font-bold text-brand-navy">
            ฝึกส่วนตัวกับครู
          </h3>
          <p className="mt-2 text-brand-navy/70">
            ออกแบบโปรแกรม 1:1 แก้ไขปัญหาเฉพาะด้าน
            และช่วยจัดการสภาพแวดล้อมที่บ้าน
            เหมาะกับเจ้าของที่อยากปรึกษาส่วนตัวกับครู
          </p>

          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {privateFeatures.map((f) => (
              <Check key={f}>{f}</Check>
            ))}
          </ul>

          <p className="mt-5 font-semibold text-brand-navy">บริการฟรี 🎁</p>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {privateFreebies.map((f) => (
              <Check key={f}>{f}</Check>
            ))}
          </ul>

          <p className="mt-4 text-xs text-brand-navy/50">
            * เกิน 15 กม. คิดค่าเดินทาง 1,500–3,000 บาท/คอร์ส
          </p>

          <div className="mt-6 rounded-xl bg-brand-cream/60 p-4">
            <p className="font-semibold text-brand-navy">เขตบริการ</p>
            <div className="mt-2 flex flex-col gap-1">
              {privateZones.map((z) => (
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

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-3xl font-bold text-brand-terracotta">
              9,900 <span className="text-base font-medium text-brand-navy/60">บาท</span>
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

        {/* 2. Boarding 30 days */}
        <div className="rounded-2xl bg-white p-6 sm:p-8">
          <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-brand-navy">
            ฝากฝึก
          </span>
          <h3 className="mt-3 text-2xl font-bold text-brand-navy">
            ฝากฝึก 30 วัน
          </h3>
          <p className="mt-2 font-medium text-brand-terracotta">
            ไม่ใช่แค่รับฝึก แต่ฝึกให้ใช้ชีวิตกับคนได้จริง ตามหลัก Force-free
          </p>

          <p className="mt-4 font-semibold text-brand-navy">
            ฝากฝึกแบบ Home-style Training
          </p>
          <p className="mt-2 text-brand-navy/70">
            สุนัขจะได้เรียนรู้ใช้ชีวิตในบ้านจริงๆ อบอุ่น ปลอดภัย
            มีกิจวัตรเหมือนอยู่บ้าน ทั้งกิน นอน เล่น และฝึก
          </p>
          <p className="mt-3 text-brand-navy/70">
            ฝึกด้วยหลักการเชิงบวก เน้นสร้างความเข้าใจและอยากทำเอง ไม่บังคับ
            ไม่ลงโทษ ไม่ใช้อุปกรณ์กดขี่
          </p>
          <p className="mt-3 text-brand-navy/70">
            เพื่อให้น้องกลับไปเป็นสุนัขที่น่ารักและมีความสุขของคุณ
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {phases.map((p, i) => (
              <div key={p.range} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-terracotta text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-brand-navy">
                    {p.range} <span className="text-brand-terracotta">· {p.title}</span>
                  </p>
                  <p className="mt-1 text-sm text-brand-navy/60">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowBoardingDetails((v) => !v)}
            className="mt-6 text-sm font-semibold text-brand-terracotta underline decoration-brand-terracotta/40 underline-offset-4"
          >
            {showBoardingDetails ? "ย่อรายละเอียด" : "รายละเอียดเพิ่มเติม →"}
          </button>

          {showBoardingDetails && (
            <div className="mt-4 flex flex-col gap-5 rounded-xl bg-brand-cream/60 p-5">
              {boardingDetails.map((d) => (
                <div key={d.title}>
                  <p className="font-semibold text-brand-navy">{d.title}</p>
                  <p className="mt-1 text-sm text-brand-navy/70">{d.desc}</p>
                </div>
              ))}

              <div>
                <p className="font-semibold text-brand-navy">
                  สิ่งที่ต้องเตรียมมา
                </p>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {prepItems.map((item) => (
                    <Check key={item}>{item}</Check>
                  ))}
                </ul>
                <p className="mt-2 text-sm text-brand-navy/60">
                  ฝากซื้อได้ — อาหาร / ขนม / ของใช้ทั่วไป จ่ายตามราคาจริง
                </p>
              </div>

              <div>
                <p className="font-semibold text-brand-navy">บริการฟรี 🎁</p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {boardingFreebies.map((item) => (
                    <Check key={item}>{item}</Check>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-brand-navy/60">สอบถามราคาทาง LINE</p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-full bg-brand-gold px-6 text-base font-semibold text-brand-navy shadow-lg transition-transform hover:scale-105"
            >
              สอบถามเพิ่มเติม
            </a>
          </div>
        </div>

        {/* 3. Online */}
        <div className="rounded-2xl bg-white p-6 sm:p-8">
          <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-brand-navy">
            Online
          </span>
          <h3 className="mt-3 text-2xl font-bold text-brand-navy">
            เรียนออนไลน์
          </h3>
          <p className="mt-2 text-brand-navy/70">
            เรียนรู้แนวทาง Force-free ได้ทุกที่ทุกเวลา
            ผ่านคอร์สออนไลน์ของ DogBooster
          </p>

          <div className="mt-4 rounded-xl border border-brand-gold/40 bg-brand-gold/10 px-4 py-3">
            <p className="text-sm text-brand-navy">
              รับส่วนลด 500 บาท จากครูแคทนิช ใช้โค้ด{" "}
              <span className="font-bold text-brand-terracotta">
                katnich500
              </span>
            </p>
          </div>

          <div className="mt-6">
            <a
              href="https://www.dogbooster.net/school.html#class-detail"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-gold px-6 text-base font-semibold text-brand-navy shadow-lg transition-transform hover:scale-105"
            >
              ดูคอร์สออนไลน์ →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
