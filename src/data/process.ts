export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: string;
}

export const processData: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "تواصل معنا",
    description: "أرسل تفاصيل طلبك والمساحة المطلوبة عبر واتساب أو الاتصال المباشر بكل سهولة.",
    iconName: "MessageSquare",
  },
  {
    stepNumber: "02",
    title: "معاينة الموقع",
    description: "نقوم بمعاينة المساحة، فحص الموقع، وفهم جميع احتياجاتك ورؤيتك للحديقة.",
    iconName: "MapPin",
  },
  {
    stepNumber: "03",
    title: "التصميم والعرض",
    description: "نقترح المقترح المناسب للتنسيق ونوضح تفاصيل التكلفة ومراحل التنفيذ بشفافية.",
    iconName: "FileText",
  },
  {
    stepNumber: "04",
    title: "التنفيذ",
    description: "يبدأ فريق العمل الفني بتنفيذ أعمال الزراعة، التركيب، وشبكات الري بإتقان.",
    iconName: "Wrench",
  },
  {
    stepNumber: "05",
    title: "التسليم",
    description: "تستلم حديقتك جاهزة للاستخدام والاستمتاع مع توجيهات العناية والإرشادات.",
    iconName: "Sparkle",
  },
];
