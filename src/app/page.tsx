import Gallery from "@/components/Gallery";
import QuestCatalog from "@/components/QuestCatalog";
import TrainerAbout from "@/components/TrainerAbout";
import Packages from "@/components/Packages";
import BlogPreview from "@/components/BlogPreview";
import { LINE_URL } from "@/lib/constants";

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

export default function Home() {
  return (
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
                <h3 className="mt-3 font-bold text-brand-navy">{p.title}</h3>
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

      <section className="bg-brand-cream px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <TrainerAbout />
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

      <section id="pricing" className="bg-brand-navy px-6 py-20 sm:px-10 sm:py-28">
        <Packages />
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

      <section className="bg-brand-cream px-6 py-20 sm:px-10 sm:py-28">
        <BlogPreview />
      </section>
    </main>
  );
}
