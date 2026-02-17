import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";

/* ===============================
   Fonts
================================ */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

/* ===============================
   SEO Metadata
================================ */

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // آدرس واقعی سایت را جایگزین کن
  title: {
    default: "هوش مصنوعی - آینده فناوری",
    template: "%s | AI Competition",
  },
  description:
    "کاوش در دنیای هوش مصنوعی، کاربردها، چالش‌ها، مزایا و فناوری‌های نسل جدید",
  keywords: [
    "هوش مصنوعی",
    "AI",
    "یادگیری ماشین",
    "شبکه عصبی",
    "فناوری آینده",
  ],
  authors: [{ name: "AI Competition Project" }],
  openGraph: {
    title: "هوش مصنوعی - آینده فناوری",
    description:
      "بررسی کاربردها، مزایا و آینده هوش مصنوعی در جهان امروز",
    type: "website",
    locale: "fa_IR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ===============================
   Viewport
================================ */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

/* ===============================
   Root Layout
================================ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirmatn.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-vazirmatn bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
