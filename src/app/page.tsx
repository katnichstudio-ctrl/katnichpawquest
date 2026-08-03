const LINE_URL = "https://lin.ee/sWym9mQ";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/katnichpawquest" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/katnich.pawquest?igsh=MTdjMDBpb3lzdW4zZw==",
  },
  { label: "TikTok", href: "https://www.tiktok.com/@katnichpawquest" },
  { label: "YouTube", href: "https://youtube.com/@katnich.pawquest" },
];

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
    <div className="flex flex-1 flex-col bg-brand-cream">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-brand-navy/10 bg-white/80 px-6 py-4 backdrop-blur sm:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-terracotta text-lg text-white shadow-sm">
            🐾
          </div>
          <span className="text-lg font-semibold text-brand-navy">
            KatNich{" "}
            <span className="underline decoration-brand-gold decoration-4 underline-offset-4">
              PawQuest
            </span>
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-navy/70 sm:flex">
          <a href="#features" className="transition-colors hover:text-brand-terracotta">
            ฟีเจอร์
          </a>
          <a href="#about" className="transition-colors hover:text-brand-terracotta">
            เกี่ยวกับ
          </a>
        </nav>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-navy shadow-sm transition-transform hover:scale-105"
        >
          💬 แอด LINE
        </a>
      </header>

      <main className="flex flex-col">
        <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32">
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-brand-terracotta/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-start gap-6">
            <span className="rounded-full border border-brand-terracotta/40 bg-brand-terracotta/10 px-4 py-1.5 text-sm font-medium text-brand-terracotta">
              🎮 GameTraining
            </span>

            <h1 className="text-4xl font-bold leading-tight text-brand-terracotta sm:text-6xl sm:leading-tight">
              The PawQuest Method
              <span className="align-super text-xl sm:text-2xl">™</span>
            </h1>

            <p className="text-xl font-semibold leading-relaxed text-brand-navy sm:text-2xl">
              เปลี่ยนทุกเกมให้เป็นบทเรียน
              <br />
              เปลี่ยนทุกบทเรียนให้เป็นความสัมพันธ์
            </p>

            <p className="text-sm text-brand-navy/60">
              🐾 สำหรับสุนัขทุกสายพันธุ์ ทุกช่วงวัย
            </p>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gold px-6 text-base font-semibold text-brand-navy shadow-lg shadow-brand-gold/30 transition-transform hover:scale-105"
              >
                💬 แอด LINE ปรึกษาฟรี
              </a>
              <a
                href="#features"
                className="flex h-12 items-center justify-center rounded-full border border-brand-navy/25 px-6 text-base font-medium text-brand-navy transition-colors hover:bg-brand-navy/5"
              >
                ดูฟีเจอร์
              </a>
            </div>
          </div>
        </section>

        <section id="why" className="bg-white px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-brand-terracotta sm:text-4xl">
              ทำไมต้อง PawQuest
            </h2>

            <p className="mt-6 text-xl font-semibold text-brand-navy">
              เราเชื่อว่า...
            </p>

            <p className="mt-4 text-lg leading-8 text-brand-navy/80">
              สุนัขไม่ได้เรียนรู้ดีที่สุดจากการถูกบังคับ
              <br />
              แต่เรียนรู้ดีที่สุดเมื่อเขา
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {["รู้สึกปลอดภัย", "เข้าใจ", "และสนุกกับการเรียน"].map((word) => (
                <span
                  key={word}
                  className="rounded-full bg-brand-gold/30 px-4 py-1.5 text-base font-semibold text-brand-navy"
                >
                  {word}
                </span>
              ))}
            </div>

            <p className="mt-8 text-lg leading-8 text-brand-navy/80">
              ทุกบทเรียนของเราจึงถูกออกแบบเป็น{" "}
              <span className="font-semibold text-brand-terracotta">
                &ldquo;เกม&rdquo;
              </span>
              <br />
              เพื่อให้สุนัขเลือกที่จะร่วมมือด้วยตัวเอง
            </p>
          </div>
        </section>

        <section id="features" className="bg-brand-cream/40 px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold text-brand-navy sm:text-4xl">
                เลี้ยงสัตว์ให้เป็นเรื่องสนุก
              </h2>
              <p className="mt-3 text-brand-navy/60">
                ทุกกิจวัตรของน้องสัตว์เลี้ยง กลายเป็นเควสต์ที่เล่นได้ทุกวัน
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-brand-navy/10 bg-white p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/30 text-2xl">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-navy">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-navy/60">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-t-4 border-brand-terracotta bg-brand-cream px-6 py-16 text-center sm:px-10"
        >
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            พร้อมเริ่มภารกิจกับน้องแล้วหรือยัง?
          </h2>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gold px-6 text-base font-semibold text-brand-navy shadow-lg transition-transform hover:scale-105"
          >
            💬 แอด LINE ปรึกษาฟรี
          </a>
        </section>
      </main>

      <footer className="bg-brand-terracotta px-6 py-10 text-white sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg">
              🐾
            </div>
            <span className="text-lg font-semibold">KatNich PawQuest</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-white/10"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/70">
          © {new Date().getFullYear()} KatNich PawQuest
        </p>
      </footer>
    </div>
  );
}
