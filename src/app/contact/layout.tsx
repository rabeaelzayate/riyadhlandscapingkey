import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا | زهرة الورود لتنسيق الحدائق بالرياض",
  description:
    "تواصل مع زهرة الورود لتنسيق الحدائق بالرياض لطلب تنسيق وتصميم الحدائق، تركيب العشب، شبكات الري، زراعة الأشجار والنخيل، النوافير والشلالات وصيانة الحدائق.",
  keywords: [
    "تواصل معنا زهرة الورود",
    "زهرة الورود لتنسيق الحدائق",
    "تنسيق حدائق بالرياض",
    "شركة تنسيق حدائق بالرياض",
    "تصميم حدائق بالرياض",
    "صيانة حدائق بالرياض",
    "عشب صناعي بالرياض",
    "عشب طبيعي بالرياض",
    "شبكات ري بالرياض",
    "شركات تنسيق حدائق بالرياض",
  ],
  alternates: {
    canonical: "https://zahret-al-wurood.com/contact/",
  },
  openGraph: {
    title: "تواصل معنا | زهرة الورود لتنسيق الحدائق بالرياض",
    description:
      "تواصل مع زهرة الورود لتنسيق الحدائق بالرياض لطلب تنسيق وتصميم الحدائق، تركيب العشب، شبكات الري، زراعة الأشجار والنخيل، النوافير والشلالات وصيانة الحدائق.",
    url: "https://zahret-al-wurood.com/contact/",
    siteName: "زهرة الورود لتنسيق الحدائق بالرياض",
    locale: "ar_SA",
    images: [
      {
        url: "https://zahret-al-wurood.com/images/services/landscaping.jpg",
        width: 1200,
        height: 630,
        alt: "تواصل معنا - زهرة الورود لتنسيق الحدائق بالرياض",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
