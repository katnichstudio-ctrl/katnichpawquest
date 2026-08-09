"use client";

import { useRef } from "react";

const reviews = Array.from(
  { length: 6 },
  (_, i) => `/reviews/review-${i + 1}.jpg`,
);

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]") as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 320) + 20;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative mt-10">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((src, i) => (
          <img
            key={src}
            data-card
            src={src}
            alt={`รีวิวจากผู้ปกครองน้องหมา ${i + 1}`}
            className="h-auto w-[80%] shrink-0 snap-center rounded-2xl object-contain shadow-md sm:w-[45%] lg:w-[30%]"
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="รีวิวก่อนหน้า"
        className="absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-navy shadow-md transition-colors hover:bg-brand-cream sm:flex"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="รีวิวถัดไป"
        className="absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-navy shadow-md transition-colors hover:bg-brand-cream sm:flex"
      >
        ›
      </button>
    </div>
  );
}
