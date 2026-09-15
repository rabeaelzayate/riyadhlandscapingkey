import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا | مفتاح التنسيق وحدائق الفرسان للعشب الصناعي وتنسيق الحدائق",
  description:
    "تواصل مع مؤسسة مفتاح التنسيق وحدائق الفرسان لطلب معاينة مجانية، عروض أسعار العشب الصناعي والجداري، الثيل الطبيعي، شبكات الري، الشلالات وحصى الزينة بالرياض والدمام. اتصل: 0505661392",
  keywords: [
    "تواصل معنا مفتاح التنسيق",
    "رقم مؤسسة حدائق الفرسان",
    "اسعار العشب الصناعي بالرياض",
    "تركيب عشب صناعي الدمام",
    "عشب صناعي بالجملة",
    "تنسيق حدائق الرياض",
    "عشب جداري للبيع"
  ],
  alternates: {
    canonical: "https://riyadhlandscapingkey-sa.com/contact/",
  },
  openGraph: {
    title: "تواصل معنا | مفتاح التنسيق وحدائق الفرسان للعشب الصناعي",
    description:
      "تواصل معنا لطلب معاينة مجانية واستشارات العشب الصناعي وتنسيق الحدائق بالرياض والدمام وكافة مدن السعودية.",
    url: "https://riyadhlandscapingkey-sa.com/contact/",
    siteName: "مفتاح التنسيق للعشب الصناعي والحدائق",
    locale: "ar_SA",
    images: [
      {
        url: "https://riyadhlandscapingkey-sa.com/images/services/landscaping.jpg",
        width: 1200,
        height: 630,
        alt: "تواصل معنا - مفتاح التنسيق وحدائق الفرسان للعشب الصناعي",
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
