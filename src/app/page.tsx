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

const questCategories = [
  {
    tag: "Basic",
    title: "หมวดพื้นฐาน",
    quests: [
      { name: "SEARCH Quest", desc: "หาสิ่งที่ชอบสุด" },
      { name: "It's yer choice Quest", desc: "เธอมีสิทธิ์เลือกทำ" },
      { name: "HAND TERGET Quest", desc: "แตะที่มือฉัน" },
      { name: "COLLAR GRAB Quest", desc: "ขอจับตัวน่อย" },
      { name: "HOT ZONE Quest", desc: "พื้นที่รัก" },
      { name: "RECALL Quest", desc: "ชื่อของฉัน" },
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
    tag: "PawQuest Fitness",
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
                รวมภารกิจในเกม PawQuest
              </h2>
              <p className="mt-3 text-brand-navy/60">
                ทุกภารกิจถูกออกแบบเป็นเกม เพื่อฝึกสุนัขผ่านการเล่นที่สนุกและได้ผลจริง
              </p>
            </div>

            <div className="mt-14 flex flex-col gap-6">
              {questCategories.map((cat) => (
                <div
                  key={cat.tag}
                  className="rounded-2xl border border-brand-navy/10 bg-white p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-brand-navy">
                      {cat.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-brand-navy">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {cat.quests.map((q) => (
                      <div key={q.name} className="flex items-baseline gap-2">
                        <span className="font-semibold text-brand-terracotta">
                          {q.name}
                        </span>
                        <span className="text-sm text-brand-navy/60">
                          — {q.desc}
                        </span>
                      </div>
                    ))}
                  </div>
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
