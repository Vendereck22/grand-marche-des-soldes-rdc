import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Store, TrendingUp, Users } from "lucide-react";

const EXHIBITOR_ADVANTAGES = [
  {
    icon: Store,
    title: "Un espace dédié",
    description: "Présentez vos produits et services dans un environnement conçu pour la vente.",
  },
  {
    icon: Eye,
    title: "Une visibilité nationale",
    description: "Faites connaître votre marque auprès d’un public large et diversifié.",
  },
  {
    icon: Users,
    title: "De nouveaux contacts",
    description: "Rencontrez consommateurs, partenaires et autres acteurs économiques.",
  },
  {
    icon: TrendingUp,
    title: "Des ventes immédiates",
    description: "Transformez la fréquentation du salon en opportunités commerciales concrètes.",
  },
] as const;

export function ExhibitorsSection() {
  return (
    <section id="exhibitors" className="scroll-mt-20 bg-white">
      <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        <div className="brand-ribbon relative isolate overflow-hidden bg-brand-red px-4 py-20 text-white sm:px-8 sm:py-24 lg:flex lg:min-h-[52rem] lg:items-center lg:px-12 xl:pl-[max(3rem,calc((100vw-80rem)/2))]">
          <div className="section-intro relative z-10 lg:max-w-xl">
            <p className="text-sm font-black uppercase text-brand-yellow">Devenir exposant</p>
            <h2 className="section-title font-black">
              Votre marque mérite
              <span className="block text-brand-yellow">sa place au marché</span>
            </h2>
            <p className="section-description text-white/85">
              Rejoignez les entreprises, entrepreneurs et créateurs qui feront
              du Grand Marché des Soldes le rendez-vous commercial de la fin d’année.
            </p>

            <div className="mt-8 flex items-end gap-5 border-y border-white/20 py-6">
              <strong className="font-heading text-5xl font-black leading-none text-brand-yellow sm:text-6xl">
                300+
              </strong>
              <span className="max-w-40 pb-1 text-sm font-bold leading-5">
                exposants attendus pendant deux jours
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/participer?type=exhibitor"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand-yellow px-6 font-bold text-neutral-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Demander le dossier exposant
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="#sectors"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 px-6 font-bold text-white transition-colors hover:bg-white hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Voir les secteurs
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-brand-cream lg:min-h-[52rem]">
          <div className="relative min-h-[25rem] overflow-hidden sm:min-h-[32rem] lg:min-h-[27rem]">
            <Image
              src="/images/exhibitors/commercial-opportunity.jpg"
              alt="Consommateurs découvrant des produits dans un espace commercial"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 bg-brand-yellow px-5 py-4 text-neutral-950 sm:px-7">
              <span className="text-xs font-black uppercase text-brand-red">11 et 12 décembre 2026</span>
              <strong className="mt-1 block font-heading text-2xl font-black uppercase">Kinshasa, RDC</strong>
            </div>
          </div>

          <div className="grid sm:grid-cols-2">
            {EXHIBITOR_ADVANTAGES.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className={`px-6 py-6 sm:px-8 ${index % 2 === 1 ? "sm:border-l sm:border-neutral-900/10" : ""} ${index > 1 ? "border-t border-neutral-900/10" : index === 1 ? "border-t border-neutral-900/10 sm:border-t-0" : ""}`}
              >
                <Icon className="size-6 text-brand-red" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-xl font-black uppercase text-neutral-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
