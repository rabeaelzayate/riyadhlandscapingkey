import NotFound from "@/app/not-found";

export const metadata = {
  title: "الصفحة غير موجودة 404 | زهرة الورود لتنسيق الحدائق بالرياض",
  description:
    "الصفحة التي تبحث عنها غير موجودة. يمكنك العودة إلى الصفحة الرئيسية أو استكشاف خدمات زهرة الورود لتنسيق الحدائق بالرياض.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundDirectPage() {
  return <NotFound />;
}
