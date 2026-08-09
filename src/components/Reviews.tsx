const reviews = Array.from(
  { length: 6 },
  (_, i) => `/reviews/review-${i + 1}.jpg`,
);

export default function Reviews() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`รีวิวจากผู้ปกครองน้องหมา ${i + 1}`}
          className="w-full rounded-2xl object-cover shadow-md"
        />
      ))}
    </div>
  );
}
