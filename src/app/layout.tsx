import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { Preloader } from "@/components/ui/Preloader";
import { PwaRegister } from "@/components/pwa/PwaRegister";
import { InstallBanner } from "@/components/pwa/InstallBanner";
import { company, seoKeywords } from "@/data/company";

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#064e3b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://riyadhlandscapingkey-sa.com"),
  applicationName: "مفتاح التنسيق للعشب الصناعي والحدائق",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "مفتاح التنسيق",
  },
  title: {
    default: "مفتاح التنسيق | عشب صناعي وجداري وتنسيق حدائق بالسعودية | الرياض والدمام",
    template: "%s | مفتاح التنسيق وحدائق الفرسان للعشب الصناعي بالسعودية",
  },
  description:
    "مؤسسة مفتاح التنسيق لتنسيق الحدائق وتوريد وتركيب العشب الصناعي والجداري، جملة الثيل الصناعي، تزيين جدران الحوش، حصى وبحص الزينة، تصميم الملاعب وشبكات الري بالرياض والدمام. اتصل الآن: 0505661392",
  keywords: seoKeywords,
  authors: [{ name: company.nameAr }],
  creator: company.nameAr,
  publisher: company.nameAr,
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "./",
  },
  category: "Landscaping & Architecture",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "مفتاح التنسيق | عشب صناعي وجداري وتنسيق حدائق بالسعودية | الرياض والدمام",
    description:
      "مؤسسة مفتاح التنسيق وحدائق الفرسان للعشب الصناعي — توريد وتركيب عشب صناعي وجداري، جملة ومفرق، ثيل طبيعي، شبكات ري، حصى الزينة وشلالات بالرياض والدمام.",
    url: "https://riyadhlandscapingkey-sa.com",
    locale: "ar_SA",
    type: "website",
    siteName: "مفتاح التنسيق للعشب الصناعي والحدائق",
    images: [
      {
        url: "/images/hero/hero-landscaping.jpg",
        width: 1200,
        height: 630,
        alt: "مفتاح التنسيق وحدائق الفرسان لتنسيق الحدائق والعشب الصناعي بالسعودية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مفتاح التنسيق | عشب صناعي وجداري وتنسيق حدائق بالسعودية",
    description: "توريد وتركيب العشب الصناعي والجداري، جملة العشب الصناعي، حصى الزينة وتنسيق الحدائق بالرياض والدمام.",
    images: ["/images/hero/hero-landscaping.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmArabic.variable} ${inter.variable}`}>
      <head>
        <JsonLd />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="مفتاح التنسيق" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#064e3b" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className="antialiased font-sans bg-[#fcfbf7] text-gray-800">
        <Preloader />
        <PwaRegister />
        {children}
        <InstallBanner />
      </body>
    </html>
  );
}
