const LINE_URL = "https://lin.ee/sWym9mQ";

const features = [
  {
    icon: "📋",
    title: "ภารกิจประจำวัน",
    desc: "ให้อาหาร พาเดินเล่น แปรงขน แปลงกิจวัตรเลี้ยงสัตว์ให้กลายเป็นภารกิจน่าเล่นทุกวัน",
  },
  {
    icon: "⭐",
    title: "สะสมแต้ม เลเวลอัพ",
    desc: "ทำภารกิจครบรับ XP ปลดล็อกเลเวลใหม่ให้น้องหมาน้องแมวของคุณ",
  },
  {
    icon: "📊",
    title: "ติดตามสุขภาพ",
    desc: "บันทึกน้ำหนัก วัคซีน นัดหมายสัตวแพทย์ ไม่พลาดทุกกำหนดการสำคัญ",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-black/5 bg-white/90 px-6 py-4 backdrop-blur sm:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-blue text-lg shadow-sm">
            🐾
          </div>
          <span className="text-lg font-semibold text-foreground">
            KatNich <span className="text-brand-green-dark">PawQuest</span>
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 sm:flex">
          <a href="#features" className="transition-colors hover:text-brand-green-dark">
            ฟีเจอร์
          </a>
          <a href="#about" className="transition-colors hover:text-brand-green-dark">
            เกี่ยวกับ
          </a>
        </nav>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand-green px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-green/30 transition-transform hover:scale-105"
        >
          💬 แอด LINE
        </a>
      </header>

      <main className="flex flex-col">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#04241f] via-[#062e2a] to-[#0b1a3a] px-6 py-24 sm:px-10 sm:py-32">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-green/30 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-start gap-6">
            <span className="rounded-full border border-brand-green/40 bg-brand-green/10 px-4 py-1.5 text-sm font-medium text-brand-green">
              🎮 Pet Care, Gamified
            </span>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl sm:leading-tight">
              เลี้ยงน้องให้ปัง
              <br />
              <span className="bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent">
                ด้วยภารกิจสนุกทุกวัน
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-8 text-white/70">
              แอปเลี้ยงสัตว์แนวเควสต์ บันทึกกิจกรรม สะสมแต้ม
              เลเวลอัพไปพร้อมน้องหมาน้องแมวของคุณ
            </p>

            <p className="text-sm text-white/60">
              🐾 สำหรับทาสหมาทาสแมวทุกบ้าน — เริ่มเล่นได้ฟรี
            </p>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-green-dark px-6 text-base font-semibold text-white shadow-lg shadow-brand-green/30 transition-transform hover:scale-105"
              >
                💬 แอด LINE ปรึกษาฟรี
              </a>
              <a
                href="#features"
                className="flex h-12 items-center justify-center rounded-full border border-white/25 px-6 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                ดูฟีเจอร์
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                เลี้ยงสัตว์ให้เป็นเรื่องสนุก
              </h2>
              <p className="mt-3 text-foreground/60">
                ทุกกิจวัตรของน้องสัตว์เลี้ยง กลายเป็นเควสต์ที่เล่นได้ทุกวัน
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-black/5 bg-gradient-to-b from-brand-green/5 to-brand-blue/5 p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="bg-gradient-to-r from-brand-green-dark to-brand-blue-dark px-6 py-16 text-center sm:px-10"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            พร้อมเริ่มภารกิจกับน้องแล้วหรือยัง?
          </h2>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-semibold text-brand-green-dark shadow-lg transition-transform hover:scale-105"
          >
            💬 แอด LINE ปรึกษาฟรี
          </a>
        </section>
      </main>

      <footer className="border-t border-black/5 px-6 py-8 text-center text-sm text-foreground/50 sm:px-10">
        © {new Date().getFullYear()} KatNich PawQuest
      </footer>
    </div>
  );
}
