import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DogsQuest | เลี้ยงน้องให้ปังด้วยภารกิจสนุกทุกวัน",
  description:
    "แอปเลี้ยงสัตว์แนวเควสต์ บันทึกกิจกรรม สะสมแต้ม เลเวลอัพไปพร้อมน้องหมาน้องแมวของคุณ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${kanit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="flex flex-1 flex-col bg-brand-cream">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
