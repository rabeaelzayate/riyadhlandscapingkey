export interface WhyUsFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const whyUsData: WhyUsFeature[] = [
  {
    id: "custom-design",
    title: "تصميم يناسب مساحتك",
    description: "نراعي أبعاد المساحة المتاحة واحتياجات أسرتك لنقدم حلول تصميم متوازنة ومستغلة بذكاء.",
    iconName: "Layout",
  },
  {
    id: "professional-execution",
    title: "تنفيذ احترافي",
    description: "فريق متمرس يعمل وفق خطوات منظمة لضمان تسليم العمل بدقة وإتقان في الموعد المحدد.",
    iconName: "CheckCircle2",
  },
  {
    id: "quality-materials",
    title: "جودة في الخامات",
    description: "نحرص على استخدام أفضل أنواع الثيل، العشب الصناعي، وأنظمة الري ذات العمر الافتراضي الطويل.",
    iconName: "ShieldCheck",
  },
  {
    id: "attention-to-detail",
    title: "اهتمام بالتفاصيل",
    description: "نهتم بأدق التفاصيل من التنسيق وتنسيق الإضاءة وحتى عزل الشلالات وتناسق الألوان.",
    iconName: "Eye",
  },
  {
    id: "fair-pricing",
    title: "أسعار مناسبة",
    description: "أسعار واضحة ومنافسة تناسب مختلف الميزانيات دون المساومة على الجودة والعمل الإتقاني.",
    iconName: "Tag",
  },
  {
    id: "after-service",
    title: "متابعة وخدمة بعد التنفيذ",
    description: "نبقى على تواصل معك بعد تسليم المشروع لتقديم النصائح والدعم اللازم للحفاظ على جمال حديقتك.",
    iconName: "Headphones",
  },
];
