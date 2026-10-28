# Vairam Hospital — SEO Strategy & Keyword Architecture
## Mapped to Current Website Structure

---

## What the site currently has

| Page | URL | Current SEO State |
|---|---|---|
| Homepage | `/` | Title: generic; meta desc: generic |
| About | `/about` | — |
| Services | `/services` | 8 specialty cards: Cardiology, Neurology, Orthopedics, Pediatrics, Radiology, Laboratory, Ophthalmology, Physiotherapy, Emergency |
| Doctors | `/doctors` | 7 placeholder doctors (non-Tamil names — must replace before launch) |
| Facilities | `/facilities` | ICU, Emergency, OTs, Radiology, Lab, Patient Rooms, Pharmacy, Rehab, Blood Bank, Maternity |
| Contact | `/contact` | — |

> [!WARNING]
> The doctor names on `/doctors` are currently **placeholders** (Dr. Sarah Johnson, Dr. Michael Chen, etc.). These must be replaced with Vairam's **real doctors** before launch — fake profiles are explicitly listed under "What I would NOT do."

---

## Gap analysis: strategy vs. current site

| Strategy requirement | Currently exists? | Action needed |
|---|---|---|
| Homepage targets "multispeciality hospital Mayiladuthurai" | ⚠️ Partial — title/meta not optimised | Update Layout.astro title/meta per page |
| Dedicated Emergency page | ❌ Emergency is a card on /services | Create `/emergency` page |
| Specialty pages with proper H1 + URL | ❌ All specialties are sections on one /services page | Create `/specialties/[slug]` dynamic pages |
| Surgery / procedure pages | ❌ None | Create `/procedures/[slug]` pages |
| Doctor individual pages | ❌ Doctors are modal cards on /doctors | Create `/doctors/[slug]` individual pages |
| Diagnostic / lab pages | ⚠️ Cards on /services and /facilities | Consider dedicated `/diagnostics` page |
| Health package pages | ❌ None | Create `/packages` page |
| Regional location pages (Sirkazhi, Kollidam etc.) | ❌ None | Evaluate after patient-origin data |
| Per-page title + meta + H1 + schema | ⚠️ Layout.astro passes same meta to all pages | Make Layout accept description/keywords props |

---

## Immediate high-ROI fixes (no new pages needed)

### 1. Fix Layout.astro — make meta dynamic

Currently the layout passes the **same** meta description to every page. Fix:

```astro
---
interface Props {
  title: string;
  description?: string;
  keywords?: string;
}
const { title, description = "Vairam Multi Speciality Hospital...", keywords = "..." } = Astro.props;
---
<meta name="description" content={description} />
<meta name="keywords" content={keywords} />
```

Then pass page-specific values from each `.astro` page.

### 2. Homepage — target Tier A money keywords

**Title:** `Multispeciality Hospital in Mayiladuthurai | Vairam Hospital`
**H1:** `Mayiladuthurai's Leading Multispeciality Hospital`
**Meta desc:** `Vairam Multi Speciality Hospital — 24/7 emergency care, cardiology, orthopaedics, gynecology and more in Mayiladuthurai. Call +91 93446 44555.`

### 3. Services page — per-specialty anchor links

Each service card should link to a future `/specialties/[id]` page. Even before those pages exist, add `id` attributes and internal anchors.

### 4. Emergency — add a visible CTA section on homepage

Until a dedicated `/emergency` page is built, ensure the homepage has a high-visibility emergency block:
- **CALL EMERGENCY**
- **GET DIRECTIONS**
- **24/7 AVAILABILITY**

---

## Recommended new page architecture

```
/
├── /about
├── /contact
├── /services                  ← Overview (keep)
│
├── /specialties/
│   ├── /cardiology            ← "cardiologist in Mayiladuthurai"
│   ├── /neurology             ← "neurologist in Mayiladuthurai"
│   ├── /orthopedics           ← "orthopedic hospital in Mayiladuthurai"
│   ├── /pediatrics            ← "pediatrician in Mayiladuthurai"
│   ├── /ophthalmology         ← "eye doctor in Mayiladuthurai"
│   ├── /gynecology            ← "gynecologist in Mayiladuthurai"  [NEW]
│   ├── /gastroenterology      ← "gastroenterologist Mayiladuthurai" [NEW]
│   ├── /urology               ← "urologist in Mayiladuthurai" [NEW]
│   └── /general-surgery       ← "general surgeon in Mayiladuthurai" [NEW]
│
├── /procedures/
│   ├── /hernia-surgery        ← "hernia surgery Mayiladuthurai"
│   ├── /gallbladder-surgery   ← "gallbladder surgery Mayiladuthurai"
│   ├── /laparoscopic-surgery  ← "laparoscopic surgery Mayiladuthurai"
│   ├── /knee-replacement      ← "knee replacement Mayiladuthurai"
│   ├── /hip-replacement       ← "hip replacement Mayiladuthurai"
│   ├── /cataract-surgery      ← "cataract surgery Mayiladuthurai"
│   ├── /normal-delivery       ← "normal delivery hospital Mayiladuthurai"
│   ├── /c-section             ← "C section hospital Mayiladuthurai"
│   └── /kidney-stone-surgery  ← "kidney stone treatment Mayiladuthurai"
│
├── /doctors/
│   ├── /doctors               ← Directory (current page, keep)
│   └── /doctors/[doctor-slug] ← Individual doctor pages [NEW]
│
├── /emergency                 ← "24/7 emergency hospital Mayiladuthurai" [NEW]
│
├── /diagnostics               ← "diagnostic centre Mayiladuthurai" [NEW]
│   ├── Radiology / scans
│   ├── Lab / blood tests
│   └── Health packages
│
└── /packages                  ← "master health checkup Mayiladuthurai" [NEW]
```

> [!IMPORTANT]
> Only activate specialty and procedure pages for departments **actually offered** by Vairam. Confirm with the hospital before creating `/gynecology`, `/gastroenterology`, `/urology`, `/general-surgery`.

---

## Keyword targets by page

### Homepage `/`
| Intent | Keywords |
|---|---|
| 🔥🔥🔥 Commercial | multispeciality hospital in Mayiladuthurai |
| 🔥🔥🔥 Commercial | best hospital in Mayiladuthurai |
| 🔥🔥🔥 Commercial | hospital in Mayiladuthurai |
| 🔥🔥🔥 Commercial | private hospital in Mayiladuthurai |
| 🔥🔥 Commercial | hospital near Mayiladuthurai |

### Emergency page `/emergency`
| Intent | Keywords |
|---|---|
| 🔥🔥🔥 Transactional | emergency hospital Mayiladuthurai |
| 🔥🔥🔥 Transactional | 24/7 emergency hospital Mayiladuthurai |
| 🔥🔥 Transactional | ambulance service Mayiladuthurai |
| 🔥🔥 Transactional | trauma care Mayiladuthurai |
| 🔥🔥 Transactional | accident hospital Mayiladuthurai |

### Cardiology `/specialties/cardiology`
| Intent | Keywords |
|---|---|
| 🔥🔥🔥 Transactional | cardiologist in Mayiladuthurai |
| 🔥🔥🔥 Transactional | heart specialist Mayiladuthurai |
| 🔥🔥 Transactional | cardiac care Mayiladuthurai |
| 🔥🔥 Commercial | cardiology hospital in Mayiladuthurai |

### Orthopedics `/specialties/orthopedics`
| Intent | Keywords |
|---|---|
| 🔥🔥🔥 Transactional | orthopedic hospital in Mayiladuthurai |
| 🔥🔥🔥 Transactional | orthopedic doctor in Mayiladuthurai |
| 🔥🔥 Transactional | bone specialist Mayiladuthurai |
| 🔥🔥 Transactional | joint replacement surgeon Mayiladuthurai |

### (and so on for each specialty — to be expanded once confirmed)

---

## What to do BEFORE building new pages

1. **Confirm from Vairam:** Which specialties, procedures, and doctors are real?
2. **Replace placeholder doctors** with real names, photos, qualifications
3. **Fix Layout.astro** to accept per-page description/keywords props
4. **Update title tags** on all existing pages to target specific Tier A keywords
5. **Add schema markup** — `MedicalSpecialty`, `Physician`, `MedicalProcedure` per page

---

## Schema types to implement per page type

| Page type | Schema type |
|---|---|
| Homepage | `Hospital` ✅ (already exists in Layout) |
| Specialty page | `MedicalSpecialty` + `MedicalOrganization` |
| Procedure page | `MedicalProcedure` |
| Doctor page | `Physician` + `MedicalOrganization` |
| Emergency page | `EmergencyService` |
| Diagnostics | `DiagnosticLab` |
| Health Packages | `Offer` + `MedicalTest` |

---

## Priority execution order

```
Phase 1 — Quick wins (existing pages)
  ✅ Fix Layout.astro meta props
  ✅ Update all page titles/meta/H1s
  ✅ Replace placeholder doctors with real ones

Phase 2 — High-value new pages
  → /emergency (standalone page with CALL + MAP CTAs)
  → /specialties/[slug] dynamic routing
  → /doctors/[slug] individual doctor pages

Phase 3 — Surgery cluster
  → /procedures/[slug] for confirmed surgeries

Phase 4 — Diagnostics & packages
  → /diagnostics
  → /packages

Phase 5 — Regional (post patient-origin data analysis)
  → /sirkazhi, /kuthalam etc. only if justified
```
