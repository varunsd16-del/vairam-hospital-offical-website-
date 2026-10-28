import type { ImageMetadata } from "astro";
import chitarthPhoto from "../assets/images/sidhuhero.webp";

export type Doctor = {
  id: string;
  name: string;
  role: string;
  speciality: string; // matches a specialities.ts `short` name
  experience: string;
  education: string;
  /** optional — doctors without a photo get an initials avatar */
  photo?: ImageMetadata;
  languages: string;
  bio: string;
  certifications: string[];
  days: string;
  hours: string;
  /** true while experience / OPD timings / bio are generic placeholders */
  detailsPending?: boolean;
};

// Names, departments and qualifications are from the Vairam specialist board.
// TODO(content): experience, OPD days & timings, bios and photos still need to come from the hospital.
const pending = {
  experience: "Senior Consultant",
  days: "OPD timings on request",
  hours: "Call to book",
  languages: "Tamil, English",
  certifications: [] as string[],
  detailsPending: true,
};

const bio = (dept: string, quals: string) =>
  `Consultant in ${dept} at Vairam Multi Speciality Hospital, Mayiladuthurai (${quals}).`;

export const doctors: Doctor[] = [
  {
    ...pending,
    id: "dr-r-chitarth",
    name: "Dr. R. Chitarth",
    role: "Consultant Orthopaedic Surgeon",
    speciality: "Orthopaedics",
    education: "M.S. (Ortho), DNB (Ortho), M.N.A.M.S., MRCS (Edin)",
    photo: chitarthPhoto,
    bio: "Orthopaedic surgeon with fellowship training in hand & microsurgery and in arthroplasty & sports medicine in Singapore, and former Registrar at SKH, Singapore.",
    certifications: [
      "Fellow in Hand & Microsurgery",
      "Fellow in Arthroplasty & Sports Medicine (Singapore)",
      "Former Registrar, SKH Singapore",
      "MRCS (Edinburgh)",
    ],
  },
  {
    ...pending,
    id: "dr-r-rajasekaran",
    name: "Dr. R. Rajasekaran",
    role: "Consultant Orthopaedic Surgeon",
    speciality: "Orthopaedics",
    education: "M.B.B.S., D.Ortho",
    bio: bio("Trauma & Orthopaedics", "M.B.B.S., D.Ortho"),
  },
  {
    ...pending,
    id: "dr-ramanan",
    name: "Dr. Ramanan",
    role: "Consultant Cardiologist",
    speciality: "Cardiology",
    education: "M.D., D.M. (Cardio)",
    bio: bio("Cardiology", "M.D., D.M. Cardiology"),
  },
  {
    ...pending,
    id: "dr-g-s-radhakrishna",
    name: "Dr. G.S. Radhakrishna",
    role: "Consultant Plastic Surgeon",
    speciality: "Plastic Surgery",
    education: "M.S., M.Ch.",
    bio: bio("Plastic & Reconstructive Surgery", "M.S., M.Ch."),
  },
  {
    ...pending,
    id: "dr-m-priyadharshini",
    name: "Dr. M. Priyadharshini",
    role: "Consultant Obstetrician & Gynaecologist",
    speciality: "Obstetrics & Gynaecology",
    education: "M.B.B.S., D.G.O.",
    bio: bio("Obstetrics & Gynaecology", "M.B.B.S., D.G.O."),
  },
  {
    ...pending,
    id: "dr-s-asha",
    name: "Dr. S. Asha",
    role: "Consultant Obstetrician & Gynaecologist",
    speciality: "Obstetrics & Gynaecology",
    education: "M.B.B.S., D.G.O.",
    bio: bio("Obstetrics & Gynaecology", "M.B.B.S., D.G.O."),
  },
  {
    ...pending,
    id: "dr-a-r-radha",
    name: "Dr. A.R. Radha",
    role: "Consultant Paediatrician",
    speciality: "Paediatrics",
    education: "M.B.B.S., D.C.H.",
    bio: bio("Paediatrics", "M.B.B.S., D.C.H."),
  },
  {
    ...pending,
    id: "dr-r-radhai-prasanna-vadhanan",
    name: "Dr. R. Radhai Prasanna Vadhanan",
    role: "Consultant Chest Physician",
    speciality: "Pulmonology",
    education: "M.B.B.S., D.T.C.D.",
    bio: bio("Pulmonology & Chest Disease", "M.B.B.S., D.T.C.D."),
  },
  {
    ...pending,
    id: "dr-s-gurunathan",
    name: "Dr. S. Gurunathan",
    role: "Consultant General Surgeon",
    speciality: "General Surgery",
    education: "M.S.",
    bio: bio("General Surgery", "M.S."),
  },
  {
    ...pending,
    id: "dr-maruthappan",
    name: "Dr. Maruthappan",
    role: "Consultant General Surgeon",
    speciality: "General Surgery",
    education: "M.S.",
    bio: bio("General Surgery", "M.S."),
  },
  {
    ...pending,
    id: "dr-sivakumar",
    name: "Dr. Sivakumar",
    role: "Consultant Physician",
    speciality: "General Medicine",
    education: "M.D.",
    bio: bio("General Medicine", "M.D."),
  },
  {
    ...pending,
    id: "dr-c-prasanna-vadhanan",
    name: "Dr. C. Prasanna Vadhanan",
    role: "Consultant Anaesthesiologist & Pain Specialist",
    speciality: "Anaesthesia",
    education: "M.D., F.I.P.M.",
    bio: bio("Anaesthesia & Pain Therapy", "M.D., F.I.P.M."),
  },
  {
    ...pending,
    id: "dr-c-ramachandran",
    name: "Dr. C. Ramachandran",
    role: "Consultant Anaesthesiologist",
    speciality: "Anaesthesia",
    education: "M.B.B.S., D.A.",
    bio: bio("Anaesthesia & Pain Therapy", "M.B.B.S., D.A."),
  },
];

export const doctorDepartments = [...new Set(doctors.map((d) => d.speciality))];

export const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/i, "")
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(-2)
    .map((w) => w[0].toUpperCase())
    .join("");
