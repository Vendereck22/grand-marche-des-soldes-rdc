export const REGISTRATION_TYPES = [
  { value: "PARTICIPANT", label: "Participer à l’événement" },
  { value: "EXHIBITOR", label: "Devenir exposant" },
  { value: "PARTNER", label: "Devenir partenaire" },
] as const;

export const REGISTRATION_STATUSES = [
  { value: "NEW", label: "Nouvelle" },
  { value: "CONTACTED", label: "Contactée" },
  { value: "QUALIFIED", label: "Qualifiée" },
  { value: "CONFIRMED", label: "Confirmée" },
  { value: "ARCHIVED", label: "Archivée" },
] as const;

export const EXHIBITOR_CATEGORIES = [
  { value: "ENTREPRENEUR", label: "Entrepreneur" },
  { value: "SME", label: "PME" },
  { value: "CORPORATE", label: "Corporate" },
] as const;

export const SECTORS = [
  "Agroalimentaire",
  "Artisanat et création",
  "Beauté et bien-être",
  "Commerce et distribution",
  "Éducation et formation",
  "Finance et fintech",
  "Hôtellerie et restauration",
  "Industrie",
  "Mode et textile",
  "Services aux entreprises",
  "Technologie et numérique",
  "Transport et logistique",
  "Autre",
] as const;

export type RegistrationType = (typeof REGISTRATION_TYPES)[number]["value"];
export type RegistrationStatus = (typeof REGISTRATION_STATUSES)[number]["value"];
export type ExhibitorCategory = (typeof EXHIBITOR_CATEGORIES)[number]["value"];

export function isRegistrationType(value: string): value is RegistrationType {
  return REGISTRATION_TYPES.some((item) => item.value === value);
}

export function isRegistrationStatus(value: string): value is RegistrationStatus {
  return REGISTRATION_STATUSES.some((item) => item.value === value);
}

export function isExhibitorCategory(value: string): value is ExhibitorCategory {
  return EXHIBITOR_CATEGORIES.some((item) => item.value === value);
}
