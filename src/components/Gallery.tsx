"use client";

import { useEffect, useState } from "react";

const images = Array.from(
  { length: 13 },
  (_, i) => `/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
);

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg">
      <div className="relative aspect-[4/3] sm:aspect-video">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`ภาพบรรยากาศการฝึกสุนัข ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="ภาพก่อนหน้า"
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="ภาพถัดไป"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`ไปที่ภาพ ${i + 1}`}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
