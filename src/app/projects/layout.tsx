import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "معرض أعمالنا بالرياض — صور مشاريع زهرة الورود المنفذة",
  description:
    "استعرض صور وفيديوهات أحدث مشاريع تنسيق حدائق الفلل والمنازل بالرياض، تركيب العشب الصناعي والطبيعي والشلالات الجدارية والنوافير برؤية هندسية مبتكرة.",
  alternates: {
    canonical: "https://zahret-al-wurood.com/projects/",
  },
  openGraph: {
    title: "معرض أعمالنا بالرياض — صور مشاريع زهرة الورود المنفذة",
    description:
      "معرض صور وفيديوهات لمشاريعنا الحية المنفذة بالرياض، تصاميم حدائق فلل ومنازل وشاليها مع ضمان 5 سنوات.",
    url: "https://zahret-al-wurood.com/projects/",
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
