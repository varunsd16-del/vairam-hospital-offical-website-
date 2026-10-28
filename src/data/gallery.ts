import type { ImageMetadata } from "astro";
import heroWide from "../assets/images/hero.webp";
import exteriorTeal from "../assets/images/building-exterior.png";
import exteriorRed from "../assets/images/hero-building.png";
import consultation from "../assets/images/consultation.png";

export type GalleryItem = {
  src: ImageMetadata;
  title: string;
  caption: string;
  category: "exterior" | "inside";
  /** layout hint for the masonry grid */
  size?: "wide" | "tall";
};

// To add photos: put the file in src/assets/images/, import it above and add an entry here.
// TODO(content): add real photos of the ICU, operation theatre, lab, rooms, pharmacy and reception.
export const gallery: GalleryItem[] = [
  { src: heroWide, title: "Vairam Hospital", caption: "Pattamangala Street, Mayiladuthurai", category: "exterior", size: "wide" },
  { src: exteriorTeal, title: "Main entrance", caption: "Ramp access and drop-off at the front door", category: "exterior", size: "tall" },
  { src: consultation, title: "Consultation room", caption: "Private, unhurried specialist consultations", category: "inside" },
  { src: exteriorRed, title: "Hospital front", caption: "24/7 emergency entrance and pharmacy", category: "exterior" },
];

export const galleryCategories = [
  { filter: "all", label: "All photos" },
  { filter: "exterior", label: "Building" },
  { filter: "inside", label: "Inside the hospital" },
] as const;
