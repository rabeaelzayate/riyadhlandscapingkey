import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { Preloader } from "@/components/ui/Preloader";
import { PwaRegister } from "@/components/pwa/PwaRegister";
import { InstallBanner } from "@/components/pwa/InstallBanner";
import { company } from "@/data/company";

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
  metadataBase: new URL("https://zahret-al-wurood.com"),
  applicationName: "زهرة الورود",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "زهرة الورود",
  },
  title: {
    default: "زهرة الورود لتنسيق الحدائق بالرياض | تصميم وتنسيق وصيانة الحدائق",
    template: "%s | زهرة الورود بالرياض",
  },
  description:
    "مؤسسة زهرة الورود لتنسيق الحدائق بالرياض — أفضل شركة تصميم وتنفيذ حدائق الفلل والمنازل بالرياض، توريد وتركيب عشب صناعي وثيل طبيعي، شبكات ري أوتوماتيكية، وشلالات ونوافير مودرن. اتصل بنا: 0560877272 / +966560877272",
  keywords: [
    "تنسيق حدائق بالرياض",
    "شركة تنسيق حدائق بالرياض",
    "تصميم حدائق بالرياض",
    "صيانة حدائق بالرياض",
    "تنسيق حدائق منزلية بالرياض",
    "عشب صناعي بالرياض",
    "ثيل طبيعي بالرياض",
    "شبكات ري بالرياض",
    "شلالات ونوافير بالرياض",
    "زهرة الورود بالرياض",
    "حدائق فلل الرياض",
    "مظلات وبرجولات الرياض",
  ],
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
    title: "زهرة الورود لتنسيق الحدائق بالرياض | تصميم وتنسيق وصيانة الحدائق",
    description:
      "تنسيق حدائق منزلية وفلل واستراحات بالرياض، تركيب عشب صناعي وثيل طبيعي وشبكات ري ونوافير باحترافية تليق بمساحتك.",
    url: "https://zahret-al-wurood.com",
    locale: "ar_SA",
    type: "website",
    siteName: company.nameAr,
    images: [
      {
        url: "/images/hero/hero-landscaping.jpg",
        width: 1200,
        height: 630,
        alt: "زهرة الورود لتنسيق الحدائق بالرياض",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "زهرة الورود لتنسيق الحدائق بالرياض",
    description: "تصميم وتنفيذ وصيانة الحدائق والعشب الصناعي والطبيعي وشبكات الري بالرياض.",
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
        <meta name="apple-mobile-web-app-title" content="زهرة الورود" />
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
