import Link from "next/link";
import { LINE_URL } from "@/lib/constants";

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

export default function Footer() {
  return (
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
        <Link
          href="/#features"
          className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-base font-medium text-white transition-colors hover:bg-white/10"
        >
          ดูภารกิจทั้งหมด →
        </Link>
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
  );
}
