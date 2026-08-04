import Link from "next/link";
import { LINE_URL } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-brand-navy/10 bg-white/80 px-6 py-4 backdrop-blur sm:px-10">
      <Link href="/" className="flex items-center gap-3">
        <img
          src="/logo-icon.png"
          alt="KatNich' PawQuest"
          className="h-10 w-10 rounded-xl shadow-sm"
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-brand-navy">
            KatNich{" "}
            <span className="underline decoration-brand-gold decoration-4 underline-offset-4">
              PawQuest
            </span>
          </span>
          <img
            src="/partners/dogbooster-navy.png"
            alt="DogBooster"
            className="mt-0.5 h-3 w-auto"
          />
        </div>
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-medium text-brand-navy/70 sm:flex">
        <Link href="/#features" className="transition-colors hover:text-brand-terracotta">
          Training
        </Link>
        <Link href="/#pricing" className="transition-colors hover:text-brand-terracotta">
          แพ็กเกจ
        </Link>
        <Link href="/blog" className="transition-colors hover:text-brand-terracotta">
          บทความ
        </Link>
        <Link href="/#about" className="transition-colors hover:text-brand-terracotta">
          เกี่ยวกับ
        </Link>
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
  );
}
