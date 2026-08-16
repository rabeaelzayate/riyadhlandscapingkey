export interface TestimonialItem {
  id: string;
  quote: string;
  authorName: string;
  neighborhood: string;
  serviceType: string;
  isPlaceholder: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "[رأي عميل حقيقي يوضع هنا بعد توثيقه من خدمة العملاء]",
    authorName: "[اسم العميل]",
    neighborhood: "[الحي - الرياض]",
    serviceType: "تنسيق حديقة فيلا",
    isPlaceholder: true,
  },
  {
    id: "test-2",
    quote: "[رأي عميل حقيقي يوضع هنا بعد توثيقه من خدمة العملاء]",
    authorName: "[اسم العميل]",
    neighborhood: "[الحي - الرياض]",
    serviceType: "تركيب عشب صناعي وشلال",
    isPlaceholder: true,
  },
  {
    id: "test-3",
    quote: "[رأي عميل حقيقي يوضع هنا بعد توثيقه من خدمة العملاء]",
    authorName: "[اسم العميل]",
    neighborhood: "[الحي - الرياض]",
    serviceType: "تركيب شبكة ري وتثيل طبيعي",
    isPlaceholder: true,
  },
];
