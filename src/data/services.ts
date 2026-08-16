export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  image: string;
  whatsappMessage: string;
  features: string[];
}

export interface QuickServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  whatsappMessage: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "landscaping",
    title: "تنسيق الحدائق",
    shortDescription: "تصميم وتنفيذ حدائق الفلل والمنازل بطريقة عملية وجمالية.",
    description: "تصميم وتنفيذ حدائق الفلل والمنازل والاستراحات بطريقة عملية وجمالية تعكس ذوقك وتوفر بيئة خارجية مريحة.",
    iconName: "Trees",
    image: "/images/services/landscaping.jpg",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة تنسيق الحدائق بالرياض.",
    features: [
      "تنفيذ حدائق الفلل والاستراحات",
      "دمج المساحات الخضراء والجلسات",
      "حلول تناسب مختلف المساحات"
    ]
  },
  {
    id: "garden-design",
    title: "تصميم الحدائق",
    shortDescription: "تصميم المساحات الخارجية حسب المساحة والاحتياج والميزانية.",
    description: "تصميم المساحات الخارجية بما يتناسب مع المساحة والاحتياج والميزانية مع مراعاة العوامل المناخية في الرياض.",
    iconName: "Compass",
    image: "/images/services/design.jpg",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة تصميم الحدائق بالرياض.",
    features: [
      "مخططات توزيع المساحات",
      "اختيار عناصر الديكور المناسبة",
      "استغلال ذكي للمساحات الصغيرة والكبيرة"
    ]
  },
  {
    id: "artificial-turf",
    title: "العشب الصناعي",
    shortDescription: "توريد وتركيب العشب الصناعي للمنازل والاستراحات.",
    description: "توريد وتركيب العشب الصناعي عالي الجودة للمنازل والاستراحات والمساحات الخارجية بمواصفات ممتازة ومقاومة للحرارة.",
    iconName: "Sparkles",
    image: "/images/services/artificial-turf.jpg",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة تركيب العشب الصناعي بالرياض.",
    features: [
      "خامات ذات مظهر طبيعي وملمس ناعم",
      "مقاومة لأشعة الشمس والعوامل الجوية",
      "تركيب احترافي مع تصريف مياه فعال"
    ]
  },
  {
    id: "natural-grass",
    title: "العشب الطبيعي",
    shortDescription: "تجهيز وتركيب الثيل الطبيعي والعناية به.",
    description: "تجهيز التربة وتركيب الثيل الطبيعي الطازج والعناية المبكرة به لضمان نمو صحي ولون أخضر زاهٍ.",
    iconName: "Flower2",
    image: "/images/services/natural-grass.jpg",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة تركيب العشب الطبيعي بالرياض.",
    features: [
      "أنواع ثيل ملائمة للمناخ المحلي",
      "تسميد وتجهيز شامل للتربة",
      "تركيب متناسق ومستوٍ"
    ]
  },
  {
    id: "irrigation-systems",
    title: "شبكات الري",
    shortDescription: "تصميم وتركيب شبكات ري مناسبة للنباتات والمساحات.",
    description: "تصميم وتركيب شبكات ري (عادية وأتوماتيكية) مناسبة للنباتات والمساحات المختلفة لترشيد استهلاك المياه وتسهيل العناية.",
    iconName: "Droplets",
    image: "/images/services/irrigation.jpg",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة تركيب شبكات الري بالرياض.",
    features: [
      "شبكات ري بالتنقيط والرشاشات",
      "أنظمة توقيت أوتوماتيكية ذكية",
      "ترشيد استهلاك المياه"
    ]
  },
  {
    id: "waterfalls",
    title: "النوافير والشلالات",
    shortDescription: "تنفيذ عناصر مائية تضيف لمسة جمالية للمساحات الخارجية.",
    description: "تصميم وتنفيذ النوافير والشلالات الجدارية والحديثة التي تضيف لمسة جمالية وصوت ماء مهدئ للمساحات الخارجية.",
    iconName: "Waves",
    image: "/images/services/waterfalls.jpg",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة تنفيذ النوافير والشلالات بالرياض.",
    features: [
      "شلالات جدارية ومودرن",
      "إضاءات خفية ومضخات عالية الجودة",
      "عزل مائي متكامل لحماية المبنى"
    ]
  },
  {
    id: "trees-planting",
    title: "زراعة الأشجار والنخيل",
    shortDescription: "اختيار وزراعة النباتات والأشجار المناسبة للحدائق.",
    description: "اختيار وزراعة الأشجار والنخيل والنباتات الخارجية المناسبة لطبيعة الرياض ومناخها لضمان استدامتها وجمالها.",
    iconName: "Leaf",
    image: "/images/services/planting.jpg",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة زراعة الأشجار والنخيل بالرياض.",
    features: [
      "أشجار ظل ونخيل زينة متنوعة",
      "زهور ونباتات تغطية تربة",
      "غرس احترافي مع مغذيات أولية"
    ]
  },
  {
    id: "garden-maintenance",
    title: "صيانة الحدائق",
    shortDescription: "قص وتقليم وري وتسميد ومتابعة دورية للحفاظ على الحديقة.",
    description: "خدمات صيانة دورية وشاملة تشمل قص العشب، تقليم الأشجار، ري وتسميد، ومكافحة الآفات للحفاظ على رونق حديقتك.",
    iconName: "Scissors",
    image: "/images/services/maintenance.jpg",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة صيانة الحدائق بالرياض.",
    features: [
      "عقود صيانة دورية (شهرية/سنوية)",
      "تقليم وتنسيق الأشجار والشجيرات",
      "تسميد ومعالجة آفت النباتات"
    ]
  }
];

export const quickServicesData: QuickServiceItem[] = [
  {
    id: "landscaping",
    title: "تنسيق الحدائق",
    description: "حدائق منازل وفلل واستراحات متكاملة الجمال.",
    iconName: "Trees",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة تنسيق الحدائق بالرياض."
  },
  {
    id: "artificial-turf",
    title: "العشب الصناعي",
    description: "ثيل صناعي عالي الجودة ومقاوم للحرارة.",
    iconName: "Sparkles",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة العشب الصناعي بالرياض."
  },
  {
    id: "natural-grass",
    title: "العشب الطبيعي",
    description: "تجهيز وتركيب الثيل الطبيعي الطازج.",
    iconName: "Flower2",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة العشب الطبيعي بالرياض."
  },
  {
    id: "irrigation-systems",
    title: "شبكات الري",
    description: "أنظمة ري أوتوماتيكية وتنقيط موفرة للمياه.",
    iconName: "Droplets",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة شبكات الري بالرياض."
  },
  {
    id: "waterfalls",
    title: "النوافير والشلالات",
    description: "شلالات جدارية ونوافير مودرن مميزة.",
    iconName: "Waves",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة النوافير والشلالات بالرياض."
  },
  {
    id: "garden-maintenance",
    title: "صيانة الحدائق",
    description: "عناية دورية وقص وتسميد وتقليم احترافي.",
    iconName: "Scissors",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة صيانة الحدائق بالرياض."
  }
];
