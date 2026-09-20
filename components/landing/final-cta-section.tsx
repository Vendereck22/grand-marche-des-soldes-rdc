import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Globe2, Mail, MapPin, Phone } from "lucide-react";

const FOOTER_LINKS = [
  { label: "À propos", href: "#about" },
  { label: "Activités", href: "#activities" },
  { label: "Secteurs", href: "#sectors" },
  { label: "Masterclass", href: "#masterclass" },
  { label: "Exposants", href: "#exhibitors" },
  { label: "FAQ", href: "#faq" },
] as const;

const CONTACTS = [
  { icon: Mail, label: "contact@newbell-agency.com", href: "mailto:contact@newbell-agency.com" },
  { icon: Phone, label: "+243 892 556 950", href: "tel:+243892556950" },
  { icon: Globe2, label: "newbell-agency.com", href: "https://www.newbell-agency.com" },
] as const;

export function FinalCtaSection() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-brand-red text-white">
      <div className="border-b border-white/15 bg-brand-yellow text-neutral-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-9">
          <div>
            <p className="text-xs font-black uppercase text-brand-red">11 et 12 décembre 2026 · Kinshasa</p>
            <h2 className="mt-2 font-heading text-2xl font-black uppercase sm:text-3xl">
              Prenez votre place au Grand Marché des Soldes
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="mailto:contact@newbell-agency.com?subject=Demande%20du%20dossier%20exposant%20-%20Grand%20March%C3%A9%20des%20Soldes"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-brand-red px-5 font-bold text-white transition-colors hover:bg-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              Devenir exposant
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="mailto:contact@newbell-agency.com?subject=Participation%20-%20Grand%20March%C3%A9%20des%20Soldes"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-950/25 px-5 font-bold transition-colors hover:bg-white"
            >
              Participer
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_1fr] lg:px-8 lg:py-14">
        <div className="max-w-md">
          <Link href="#home" className="inline-flex items-center gap-4" aria-label="Retour à l’accueil">
            <div className="relative size-20 shrink-0">
              <Image
                src="/logos/GMDS Logos declination_01.png"
                alt="Logo Le Grand Marché des Soldes RDC"
                fill
                sizes="5rem"
                className="object-contain"
              />
            </div>
            <strong className="font-heading text-lg font-black uppercase leading-tight">
              Le Grand Marché
              <span className="block text-brand-yellow">des Soldes RDC</span>
            </strong>
          </Link>
          <p className="mt-5 text-sm leading-6 text-white/65">
            Le rendez-vous économique et commercial annuel de Kinshasa consacré
            aux entrepreneurs, aux entreprises et aux consommateurs.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-xs font-bold text-white/80">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-4 text-brand-yellow" aria-hidden="true" />
              11 et 12 décembre 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-brand-yellow" aria-hidden="true" />
              Kinshasa, RDC
            </span>
          </div>
        </div>

        <nav aria-label="Navigation du pied de page">
          <h3 className="text-xs font-black uppercase text-brand-yellow">Navigation</h3>
          <ul className="mt-5 space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-black uppercase text-brand-yellow">Contact</h3>
          <ul className="mt-5 space-y-4">
            {CONTACTS.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Icon className="mt-0.5 size-4 shrink-0 text-brand-yellow" aria-hidden="true" />
                  <span className="break-all">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-7 border-l-2 border-brand-yellow pl-4 text-sm leading-6 text-white/60">
            Une initiative portée par Newbell Agency.
          </p>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Le Grand Marché des Soldes RDC.</p>
          <Link href="#home" className="transition-colors hover:text-white">Retour en haut</Link>
        </div>
      </div>
    </footer>
  );
}
