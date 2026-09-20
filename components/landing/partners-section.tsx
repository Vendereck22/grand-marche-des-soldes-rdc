import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Landmark,
  Radio,
  Wrench,
} from "lucide-react";

const PARTNER_PROFILES = [
  {
    icon: Landmark,
    number: "01",
    title: "Institutions",
    description: "Soutenir l’entrepreneuriat local et le développement économique de Kinshasa.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Entreprises",
    description: "Associer votre marque à un rendez-vous populaire, commercial et fédérateur.",
  },
  {
    icon: Radio,
    number: "03",
    title: "Médias",
    description: "Amplifier les histoires, les offres et les initiatives qui font vivre l’événement.",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Partenaires techniques",
    description: "Mettre votre savoir-faire au service d’une expérience fluide et mémorable.",
  },
] as const;

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="scroll-mt-20 bg-brand-yellow py-20 text-neutral-950 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="text-sm font-black uppercase text-brand-red">Construisons ensemble</p>
            <h2 className="mt-3 max-w-3xl font-heading text-4xl font-black leading-tight uppercase sm:text-5xl lg:text-6xl">
              Des partenaires au cœur
              <span className="block text-brand-red">de l’impact</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-800/75">
              Le Grand Marché des Soldes ouvre un terrain de collaboration aux
              organisations qui veulent soutenir le commerce local, gagner en
              visibilité et créer des liens concrets avec le public.
            </p>

            <div className="mt-10 grid border-l border-t border-neutral-950/15 sm:grid-cols-2">
              {PARTNER_PROFILES.map(({ icon: Icon, number, title, description }) => (
                <article
                  key={title}
                  className="min-h-56 border-b border-r border-neutral-950/15 p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-black text-brand-red">{number}</span>
                    <Icon className="size-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-heading text-xl font-black uppercase sm:text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-800/70">{description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="brand-ribbon relative isolate overflow-hidden bg-brand-red px-6 py-10 text-white sm:px-10 sm:py-12 lg:self-end lg:px-12 lg:py-14">
            <span className="font-heading text-7xl font-black leading-none text-brand-yellow sm:text-8xl">
              +
            </span>
            <h3 className="mt-6 font-heading text-3xl font-black uppercase leading-tight sm:text-4xl">
              Votre marque peut faire partie de l’aventure
            </h3>
            <p className="mt-5 text-base leading-7 text-white/80">
              Sponsoring, accompagnement institutionnel, visibilité média ou
              apport technique : construisons une collaboration adaptée à vos objectifs.
            </p>

            <div className="mt-9 border-y border-white/20 py-6">
              <p className="text-xs font-black uppercase text-brand-yellow">Dossier partenariat</p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Recevez les possibilités de visibilité et les formats d’activation disponibles.
              </p>
            </div>

            <Link
              href="mailto:contact@newbell-agency.com?subject=Demande%20du%20dossier%20partenariat%20-%20Grand%20March%C3%A9%20des%20Soldes"
              className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-yellow px-6 font-bold text-neutral-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
            >
              Devenir partenaire
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
