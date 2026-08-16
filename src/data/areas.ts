export interface AreaItem {
  name: string;
  region: "شمال الرياض" | "شرق الرياض" | "وسط وغرب الرياض";
}

export const riyadhAreas: AreaItem[] = [
  { name: "النرجس", region: "شمال الرياض" },
  { name: "الياسمين", region: "شمال الرياض" },
  { name: "الملقا", region: "شمال الرياض" },
  { name: "حطين", region: "شمال الرياض" },
  { name: "الصحافة", region: "شمال الرياض" },
  { name: "العارض", region: "شمال الرياض" },
  { name: "العقيق", region: "شمال الرياض" },
  { name: "الرحمانية", region: "وسط وغرب الرياض" },
  { name: "قرطبة", region: "شرق الرياض" },
  { name: "غرناطة", region: "شرق الرياض" },
  { name: "الروضة", region: "شرق الرياض" },
  { name: "حي الملقا والياسمين", region: "شمال الرياض" },
];

export const areasSummaryText = "نغطي كافة أحياء مدينة الرياض بشمالها وشرقها وغربها وجنوبها لتقديم خدمات تنسيق وصيانة الحدائق واحتياجات المساحات الخارجية.";
