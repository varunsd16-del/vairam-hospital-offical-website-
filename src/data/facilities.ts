// TODO(content): figures below came from the previous site and were softened — verify before launch.
export type Facility = {
  id: string;
  name: string;
  category: "clinical" | "critical" | "diagnostic" | "amenity" | "support";
  icon:
    | "hospital"
    | "heart"
    | "ambulance"
    | "scan"
    | "microscope"
    | "bed"
    | "pill"
    | "activity"
    | "droplet"
    | "baby"
    | "utensils"
    | "car";
  desc: string;
  tags: string[];
  features: string[];
};

export const facilityCategories = [
  { filter: "all", label: "All" },
  { filter: "critical", label: "Critical care" },
  { filter: "clinical", label: "Clinical" },
  { filter: "diagnostic", label: "Diagnostics" },
  { filter: "amenity", label: "Patient comfort" },
  { filter: "support", label: "Support" },
] as const;

export const facilities: Facility[] = [
  {
    id: "operating-theatres",
    name: "Modular Operation Theatres",
    category: "clinical",
    icon: "hospital",
    desc: "Laminar-flow modular theatres with HEPA-filtered air, integrated displays and dedicated post-operative recovery.",
    tags: ["Laminar flow", "HEPA air", "Recovery suites"],
    features: ["Fully modular theatres", "HEPA sterile air systems", "Integrated OR displays", "Post-op recovery suites"],
  },
  {
    id: "icu",
    name: "Intensive Care Unit",
    category: "critical",
    icon: "heart",
    desc: "Intensivist-led ICU with advanced monitoring, ventilator support and bedside imaging around the clock.",
    tags: ["24/7 intensivist", "Ventilators", "Bedside echo"],
    features: ["Central haemodynamic monitoring", "Advanced ventilator support", "Dialysis support", "Dedicated ICU pharmacist"],
  },
  {
    id: "emergency",
    name: "Emergency Department",
    category: "critical",
    icon: "ambulance",
    desc: "Dedicated triage lanes, resuscitation bays and direct escalation to ICU and theatre.",
    tags: ["24/7", "Rapid triage", "Ambulance bay"],
    features: ["Dedicated ambulance bay", "Rapid triage system", "Resuscitation rooms", "Paediatric emergency zone"],
  },
  {
    id: "radiology",
    name: "Radiology & Imaging",
    category: "diagnostic",
    icon: "scan",
    desc: "Digital X-ray, ultrasound and Doppler with prompt radiologist reporting.",
    tags: ["Digital X-ray", "3D/4D ultrasound", "Doppler"],
    features: ["Flat-panel digital X-ray", "3D/4D ultrasound suite", "Colour Doppler", "Radiologist reporting"],
  },
  {
    id: "laboratory",
    name: "Diagnostic Laboratory",
    category: "diagnostic",
    icon: "microscope",
    desc: "Automated haematology, biochemistry and microbiology with same-day results for inpatients.",
    tags: ["24/7", "Automated", "Same-day results"],
    features: ["Automated haematology & biochemistry", "Microbiology culture lab", "Hormone & thyroid assays", "Reports on WhatsApp"],
  },
  {
    id: "patient-rooms",
    name: "Patient Rooms",
    category: "amenity",
    icon: "bed",
    desc: "General, semi-private, private and suite rooms designed for rest, with space for a family attendant.",
    tags: ["Private rooms", "Suites", "Attendant bed"],
    features: ["Private & semi-private rooms", "Suites with lounge", "Attendant sofa bed", "Climate-controlled"],
  },
  {
    id: "pharmacy",
    name: "24/7 Pharmacy",
    category: "support",
    icon: "pill",
    desc: "Licensed in-house pharmacy with generic and branded medicines and discharge counselling.",
    tags: ["24/7", "Generic options", "Insurance support"],
    features: ["Open 24 hours, all year", "Generic and branded options", "Discharge counselling", "Drug interaction checks"],
  },
  {
    id: "rehabilitation",
    name: "Rehabilitation Centre",
    category: "clinical",
    icon: "activity",
    desc: "Physiotherapy and neuro-rehabilitation programmes that help patients regain independence.",
    tags: ["Physiotherapy", "Neuro rehab", "Cardiac rehab"],
    features: ["Physiotherapy gym", "Post-stroke programmes", "Post-joint-replacement therapy", "Cardiac rehab protocols"],
  },
  {
    id: "blood-bank",
    name: "Blood Storage",
    category: "clinical",
    icon: "droplet",
    desc: "Licensed blood storage with cross-matched units on standby for surgery and emergencies.",
    tags: ["24/7", "All groups", "Components"],
    features: ["All blood groups", "Platelet, plasma & RBC components", "Emergency supply", "Donor programme"],
  },
  {
    id: "maternity",
    name: "Maternity & NICU",
    category: "clinical",
    icon: "baby",
    desc: "Private labour rooms, newborn intensive care and lactation support for mother and baby.",
    tags: ["Labour rooms", "NICU", "Lactation support"],
    features: ["Private labour & delivery rooms", "Neonatal intensive care", "Kangaroo mother care", "Lactation consultant"],
  },
  {
    id: "cafeteria",
    name: "Cafeteria",
    category: "support",
    icon: "utensils",
    desc: "Hygienic cafeteria with dietitian-planned therapeutic meals for patients and attendants.",
    tags: ["Therapeutic diets", "Vegetarian", "7 AM – 10 PM"],
    features: ["Diabetic & cardiac diets", "Vegetarian options", "Attendant meal packages", "Audited kitchen"],
  },
  {
    id: "parking",
    name: "Parking",
    category: "support",
    icon: "car",
    desc: "On-premises parking for cars and two-wheelers with priority bays near the entrance.",
    tags: ["24/7", "Priority bays", "CCTV"],
    features: ["Car & two-wheeler parking", "Accessible priority bays", "24/7 CCTV", "Drop-off at entrance"],
  },
];

export const amenities = [
  "Free Wi-Fi",
  "Wheelchair access & lifts",
  "RO drinking water",
  "Attendant facilities",
  "24/7 CCTV security",
  "Fire safety systems",
  "Prayer room",
  "Accessible restrooms",
];
