import NotFound from "@/app/not-found";

export const metadata = {
  title: "الصفحة غير موجودة 404 | مفتاح التنسيق لتنسيق الحدائق بالسعودية",
  description:
    "الصفحة التي تبحث عنها غير موجودة. يمكنك العودة إلى الصفحة الرئيسية أو استكشاف خدمات مفتاح التنسيق لتنسيق الحدائق بالسعودية.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundDirectPage() {
  return <NotFound />;
}
