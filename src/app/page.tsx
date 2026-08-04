import Gallery from "@/components/Gallery";
import QuestCatalog from "@/components/QuestCatalog";
import TrainerAbout from "@/components/TrainerAbout";

const LINE_URL = "https://lin.ee/sWym9mQ";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M16 3h-2.6v11.2a2.9 2.9 0 1 1-2-2.75v-2.7a5.6 5.6 0 1 0 4.6 5.5V9.4a7 7 0 0 0 4 1.3V8.1a4.3 4.3 0 0 1-2.6-1.3A4.3 4.3 0 0 1 16 4.1V3Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M10 9l5 3-5 3V9Z" fill="currentColor" />
    </svg>
  );
}

const serviceZones = [
  {
    province: "กรุงเทพฯ (ฝั่งธนบุรี)",
    districts: ["ตลิ่งชัน", "ทวีวัฒนา", "บางแค", "หนองแขม"],
  },
  {
    province: "จังหวัดนนทบุรี",
    districts: ["บางบัวทอง", "บางกรวย", "บางใหญ่", "ไทรน้อย"],
  },
  { province: "จังหวัดนครปฐม", districts: [] },
];

function LocationPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-6 w-6 shrink-0"
    >
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

const pastAttemptProblems = [
  {
    icon: "🧑‍🏫",
    title: "ลองมาหมดแล้ว",
    desc: "ฝึกเอง อ่านมาเยอะ ดูคลิปนับไม่ถ้วน",
  },
  {
    icon: "👥",
    title: "จ้างครูฝึกหลายคน",
    desc: "หลายสำนัก แต่ละคนก็มีสูตรของตัวเอง",
  },
  {
    icon: "🔁",
    title: "พฤติกรรมเดิมวนกลับมา",
    desc: "เหตุการณ์เดิมที่เจอซ้ำแล้วซ้ำเล่า",
  },
  {
    icon: "😮‍💨",
    title: "เหนื่อยกับการคอยสั่ง",
    desc: "คอยสั่ง คอยห้าม คอยเตือนอยู่ตลอดเวลา",
  },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/katnichpawquest",
    icon: <FacebookIcon />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/katnich.pawquest?igsh=MTdjMDBpb3lzdW4zZw==",
    icon: <InstagramIcon />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@katnichpawquest",
    icon: <TiktokIcon />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@katnich.pawquest",
    icon: <YoutubeIcon />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-brand-cream">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-brand-navy/10 bg-white/80 px-6 py-4 backdrop-blur sm:px-10">
        <div className="flex items-center gap-3">
          <img
            src="/logo-icon.png"
            alt="KatNich' PawQuest"
            className="h-10 w-10 rounded-xl shadow-sm"
          />
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

        <section className="bg-white px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <TrainerAbout />
          </div>
        </section>

        <section className="bg-brand-cream px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold text-brand-navy sm:text-4xl">
                เคยลองมาหมดแล้วใช่ไหม?
              </h2>
              <p className="mt-3 text-xl font-bold text-brand-navy sm:text-2xl">
                ลองมาหลายวิธี แต่ปัญหาก็ยังวนกลับมาเดิม
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pastAttemptProblems.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-brand-navy/10 bg-brand-cream/40 p-5"
                >
                  <div className="text-3xl">{p.icon}</div>
                  <h3 className="mt-3 font-bold text-brand-navy">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-navy/60">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-brand-gold/40 bg-brand-gold/10 px-6 py-4 text-center">
              <p className="font-semibold text-brand-navy">
                ปัญหาไม่ได้อยู่ที่คุณหรือสุนัข — แต่อยู่ที่วิธีที่ผ่านมาแก้แค่
                &ldquo;พฤติกรรมที่เห็น&rdquo; ไม่ได้แก้ที่ต้นเหตุ
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl text-center">
              <p className="text-xl font-bold text-brand-terracotta">
                นี่คือจุดที่ PawQuest แตกต่าง
              </p>

              <p className="mt-4 text-lg leading-8 text-brand-navy/80">
                เราไม่ได้สอนให้สุนัข &ldquo;เชื่อฟังตอนมีคุณอยู่&rdquo;
                แต่สร้างความเข้าใจให้สุนัขเลือกทำเองได้แม้ไม่มีใครสั่ง
                ด้วยแนวทาง Positive Reinforcement ที่วางรากฐานอย่างเป็นระบบ
                เพื่อผลลัพธ์ที่ยั่งยืนในระยะยาว ไม่ใช่แค่การกดพฤติกรรมไว้ชั่วคราว
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
              โมเมนต์จากการฝึกจริง
            </h2>
            <p className="mt-3 text-brand-navy/60">
              บรรยากาศการเล่นภารกิจของน้องหมาและครูฝึก
            </p>
          </div>
          <div className="mt-10">
            <Gallery />
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

            <QuestCatalog />
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
      </main>

      <footer
        id="about"
        className="bg-brand-terracotta px-6 py-20 text-center text-white sm:px-10 sm:py-24"
      >
        <img
          src="/logo-full.png"
          alt="KatNich' PawQuest"
          className="mx-auto h-28 w-auto sm:h-36"
        />

        <h2 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
          พร้อมเริ่มภารกิจกันรึยัง?
        </h2>

        <p className="mt-3 text-white/70">
          บริการฝึกสุนัขที่บ้าน ฝากฝึก และเรียนออนไลน์
        </p>

        <div className="mx-auto mt-8 flex max-w-sm flex-col items-start gap-5 text-left">
          <p className="text-lg font-bold text-white">เขตบริการ</p>

          {serviceZones.map((z) => (
            <div key={z.province} className="flex items-start gap-3">
              <span className="mt-0.5 text-brand-gold">
                <LocationPinIcon />
              </span>
              <div>
                <p className="font-bold text-white">{z.province}</p>
                {z.districts.length > 0 && (
                  <p className="text-white/60">{z.districts.join(" · ")}</p>
                )}
              </div>
            </div>
          ))}

          <p className="text-sm text-white/50">พื้นที่อื่นสอบถามเพิ่มเติม</p>

          <a
            href="https://maps.app.goo.gl/5RjN7YVo1yRGKkC78?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-brand-gold"
          >
            📍 Katnich Pawquest — ดูตำแหน่งบนแผนที่
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gold px-6 text-base font-semibold text-brand-navy shadow-lg transition-transform hover:scale-105"
          >
            💬 แอด LINE ปรึกษาฟรี
          </a>
          <a
            href="#features"
            className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            ดูภารกิจทั้งหมด →
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs text-white/70">
          © {new Date().getFullYear()} KatNich PawQuest
        </p>
      </footer>
    </div>
  );
}
