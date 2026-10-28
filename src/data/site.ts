import { specialities } from "./specialities";
import { doctors } from "./doctors";

// Single source of truth for hospital contact details — used by header, footer, pages and JSON-LD.
export const site = {
  name: "Vairam Multi Speciality Hospital",
  shortName: "Vairam Hospital",
  url: "https://vairamhospital.com",
  phone: "+919344644555",
  phoneDisplay: "+91 93446 44555",
  whatsapp: "919344644555",
  email: "info@vairamhospital.com",
  address: {
    street: "Pattamangala St",
    city: "Mayiladuthurai",
    region: "Tamil Nadu",
    regionCode: "TN",
    postalCode: "609001",
    country: "IN",
  },
  addressLine: "Pattamangala St, Mayiladuthurai, Tamil Nadu 609001",
  geo: { lat: 11.1017, lng: 79.6548 },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.332304388484!2d79.6548!3d11.1017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55212c759cd8f1%3A0xc095759a22f3fd4b!2sVairam%20Multi%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v171393498",
  directions: "https://www.google.com/maps/dir/?api=1&destination=11.1017,79.6548",
  foundingYear: 2010,
  hours: [
    { label: "Emergency, ICU & Pharmacy", value: "24 hours, all days" },
    { label: "Outpatient consultations", value: "Mon – Sun, 8:00 AM – 9:00 PM" },
    { label: "Laboratory & scans", value: "Mon – Sun, 8:00 AM – 9:00 PM" },
  ],
  areaServed: ["Mayiladuthurai", "Sirkazhi", "Karaikal", "Kumbakonam", "Chidambaram"],
  social: {
    facebook: "https://www.facebook.com/vairamhospital",
    instagram: "https://www.instagram.com/vairamhospital",
  },
  // TODO(content): confirm these figures with the hospital before launch.
  stats: [
    { value: "15+", label: "Years of care in Mayiladuthurai" },
    { value: String(doctors.length), label: "Specialist doctors" },
    { value: String(specialities.length), label: "Specialities under one roof" },
    { value: "24/7", label: "Emergency, ICU & pharmacy" },
  ],
} as const;

export const telHref = `tel:${site.phone}`;
export const waHref = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Specialities", mega: true },
  { href: "/doctors", label: "Doctors" },
  { href: "/facilities", label: "Facilities" },
  { href: "/contact", label: "Contact" },
] as const;

export const timeSlots = [
  "09:00 AM – 11:00 AM",
  "11:00 AM – 01:00 PM",
  "02:00 PM – 04:00 PM",
  "04:00 PM – 06:00 PM",
];
