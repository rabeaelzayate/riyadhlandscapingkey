import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "معرض الأعمال والمشاريع | صور العشب الصناعي وتنسيق الحدائق بالسعودية",
  description:
    "استعرض صور وفيديوهات أحدث مشاريع مؤسسة مفتاح التنسيق وحدائق الفرسان: تركيب عشب صناعي وجداري، ثيل ملاعب، شلالات جدارية، ممرات بحص وحصى زينة وتنسيق حدائق الفلل بالرياض والدمام.",
  keywords: [
    "صور عشب صناعي",
    "صور العشب الصناعي",
    "صور ثيل صناعي",
    "صور نجيلة",
    "ديكورات عشب صناعي جداري",
    "مشاريع تنسيق حدائق",
    "اشكال العشب الجداري"
  ],
  alternates: {
    canonical: "https://riyadhlandscapingkey-sa.com/projects/",
  },
  openGraph: {
    title: "معرض الأعمال والمشاريع | صور العشب الصناعي وتنسيق الحدائق",
    description:
      "معرض صور وفيديوهات لمشاريع العشب الصناعي وتنسيق حدائق الفلل المنفذة بالسعودية مع ضمان معتمد.",
    url: "https://riyadhlandscapingkey-sa.com/projects/",
    images: ["/images/why-us-fountain.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
