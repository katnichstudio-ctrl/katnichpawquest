"use client";

import { useState } from "react";

const questCategories = [
  {
    tag: "Basic",
    title: "หมวดพื้นฐาน",
    quests: [
      { name: "Search Quest", desc: "หาสิ่งที่ชอบสุด" },
      { name: "It's yer choice Quest", desc: "เธอมีสิทธิ์เลือกทำ" },
      { name: "Hand Target Quest", desc: "แตะที่มือฉัน" },
      { name: "Collar Grab Quest", desc: "ขอจับตัวน่อย" },
      { name: "Hot Zone Quest", desc: "พื้นที่รัก" },
      { name: "Recall Quest", desc: "ชื่อของฉัน" },
      { name: "Calm Quest", desc: "ฝึกความสงบ" },
    ],
  },
  {
    tag: "J-Walking",
    title: "หมวดเดินดีในสายจูง",
    quests: [
      { name: "Beside Me Quest", desc: "มาอยู่ใกล้ๆฉัน" },
      { name: "Close Side Quest", desc: "สร้างตำแหน่งข้างตัว" },
      { name: "Choose Me Quest", desc: "เลือกฉัน" },
      { name: "Go Together Quest", desc: "เดินไปด้วยกัน" },
    ],
  },
  {
    tag: "DogsQuest Fitness",
    title: "หมวดออกกำลังกาย",
    quests: [
      { name: "Paws Up", desc: "สร้างกล้ามเนื้อขาหลัง" },
      { name: "Rear Paws Up", desc: "สร้างกล้ามเนื้อขาหน้า" },
      { name: "Pivot", desc: "สร้างกล้ามเนื้อสะโพก" },
      { name: "Weight Shift", desc: "ทรงตัวให้ดี" },
      { name: "Cavaletti Walk", desc: "ยกข้อขา" },
      { name: "Backing Up", desc: "เดินถอยหลัง" },
      { name: "Cookie Stretch", desc: "ยืดเหยียด" },
    ],
  },
  {
    tag: "Other",
    title: "หมวดอื่นๆ",
    quests: [
      { name: "Bring Me Quest", desc: "คาบของมาฉันหน่อย" },
      { name: "Get It Quest", desc: "ช่วยถือของให้หน่อย" },
    ],
  },
];

export default function QuestCatalog() {
  const [showAll, setShowAll] = useState(false);
  const categories = showAll
    ? questCategories
    : questCategories.filter((c) => c.tag === "Basic");

  return (
    <>
      <div className="mt-14 flex flex-col gap-10">
        {categories.map((cat) => (
          <div key={cat.tag}>
            <div className="grid gap-3 sm:grid-cols-2">
              {cat.quests.map((q) => (
                <div
                  key={q.name}
                  className="flex flex-col gap-1.5 rounded-xl border border-brand-navy/10 bg-white p-4"
                >
                  <span className="w-fit rounded-full bg-brand-gold px-2.5 py-0.5 text-[11px] font-semibold text-brand-navy">
                    {cat.tag}
                  </span>
                  <span className="font-semibold text-brand-terracotta">
                    {q.name}
                  </span>
                  <span className="text-sm text-brand-navy/60">
                    {q.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="inline-flex h-12 items-center justify-center rounded-full border border-brand-navy/25 px-6 text-base font-medium text-brand-navy transition-colors hover:bg-brand-navy/5"
        >
          {showAll ? "ย่อภารกิจ" : "ดูเกมอื่นเพิ่มเติม →"}
        </button>
      </div>
    </>
  );
}
