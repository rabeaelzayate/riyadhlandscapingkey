import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "مؤسسة مفتاح التنسيق لتنسيق الحدائق بالسعودية",
    short_name: "مفتاح التنسيق",
    description: "تصميم وتنفيذ وتنسيق الحدائق، تركيب العشب الصناعي والطبيعي، الشلالات وشبكات الري بالسعودية.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b2014",
    theme_color: "#064e3b",
    orientation: "portrait-primary",
    dir: "rtl",
    lang: "ar",
    categories: ["business", "lifestyle", "shopping"],
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "طلب معاينة وخصم 10%",
        short_name: "طلب معاينة",
        description: "احصل على معاينة مجانية وخصم 10% فوري",
        url: "/contact/",
        icons: [{ src: "/icons/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "معرض أعمالنا",
        short_name: "المشاريع",
        description: "شاهد أحدث تصاميم ومشاريع الحدائق المنفذة بالرياض",
        url: "/projects/",
        icons: [{ src: "/icons/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "دليل الخدمات",
        short_name: "الخدمات",
        description: "تنسيق حدائق، عشب صناعي وطبيعي، شلالات ونوافير",
        url: "/services/",
        icons: [{ src: "/icons/icon-192x192.png", sizes: "192x192" }],
      },
    ],
  };
}
