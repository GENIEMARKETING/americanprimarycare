// ── Provider / Staff ──────────────────────────────────────────
export interface Provider {
  name: string;
  credentials: string;
  photo: string | null;
  specialty: string[];
  title: string;
  practicing_since?: number;
  licensed_since?: number;
  experience_years?: string;
  education: {
    medical_school?: string;
    chiropractic_school?: string;
    graduation_year: number;
    undergraduate?: string;
  };
  board_certifications?: string[];
  fellowships?: string[];
  hospital_affiliations?: string[];
  locations: string[];
  services: string[];
  bio: string;
  patient_quote?: string;
  telehealth?: boolean;
  languages?: string[];
  npi?: string;
  treatment_approach?: string;
  adjustment_methods?: { name: string; description: string }[];
  rating?: { score: number; out_of: number; reviews: number; source: string };
}

// ── Service ───────────────────────────────────────────────────
export interface ServiceCategory {
  category: string;
  icon: string;
  homepage_box?: { title: string; description: string };
  services?: string[];
}

// ── Insurance ─────────────────────────────────────────────────
export interface InsurancePlans {
  [carrier: string]: string[];
}

export interface InsuranceLogos {
  [carrier: string]: string;
}

// ── Location ──────────────────────────────────────────────────
export interface Location {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  fax?: string;
  hours: string;
  coordinates?: { lat: number; lng: number };
  providers?: string[];
  google_maps_url?: string;
}

// ── Blog ──────────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}

// ── Form types ────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  preferredProvider?: string;
  preferredDate?: string;
  message?: string;
  isNewPatient: boolean;
}
