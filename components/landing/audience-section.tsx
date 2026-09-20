import Image from "next/image";
import { BriefcaseBusiness, Users } from "lucide-react";

const ECONOMIC_ACTORS = [
  "PME et microentreprises",
  "Startups et jeunes entreprises",
  "Entrepreneurs et commerçants",
  "Artisans et créateurs locaux",
  "Grandes entreprises et marques",
  "Distributeurs et importateurs",
  "Producteurs et fabricants locaux",
  "Entreprises de services",
  "Boutiques et e-commerçants",
] as const;

const VISITORS = [
  "Familles",
  "Diaspora en vacances",
  "Étudiants",
  "Commerçants",
  "Entrepreneurs",
  "Acheteurs professionnels",
] as const;

function AudienceList({ items, light = false }: { items: readonly string[]; light?: boolean }) {
  return (
    <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[0.95rem] font-semibold leading-6">
          <span
            className={`mt-2 size-2 shrink-0 ${light ? "bg-brand-yellow" : "bg-brand-red"}`}
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function AudienceSection() {
  return (
    <section id="audience" className="scroll-mt-20 bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase text-brand-red">Notre public</p>
          <h2 className="mt-3 font-heading text-4xl font-black leading-tight text-balance uppercase text-neutral-950 sm:text-5xl lg:text-6xl">
            Un marché ouvert à
            <span className="block text-brand-red">tout l’écosystème</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Le Grand Marché des Soldes réunit l’offre et la demande pour créer
            de vraies rencontres commerciales et des opportunités durables.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden border border-neutral-900/10 lg:grid-cols-2">
          <article className="relative isolate min-h-[47rem] overflow-hidden bg-brand-red px-6 py-10 text-white sm:min-h-[40rem] sm:px-10 sm:py-12 lg:min-h-[46rem]">
            <div className="relative z-10 max-w-xl">
              <span className="flex size-12 items-center justify-center rounded-md bg-brand-yellow text-neutral-950">
                <BriefcaseBusiness className="size-6" aria-hidden="true" />
              </span>
              <p className="mt-6 text-xs font-black uppercase text-brand-yellow">Ceux qui proposent</p>
              <h3 className="mt-2 font-heading text-3xl font-black uppercase leading-tight sm:text-4xl">
                Exposants et acteurs économiques
              </h3>
              <p className="mt-4 max-w-lg leading-7 text-white/70">
                Pour les entreprises qui veulent accroître leurs ventes,
                gagner en visibilité et conquérir de nouveaux clients.
              </p>
              <div className="max-w-lg sm:pr-28 lg:pr-20 xl:pr-28">
                <AudienceList items={ECONOMIC_ACTORS} light />
              </div>
            </div>

            <Image
              src="/images/audience/local-seller.png"
              alt="Entrepreneure et vendeuse locale"
              width={1549}
              height={1033}
              sizes="(max-width: 1024px) 65vw, 30vw"
              className="absolute -bottom-5 -right-20 z-0 h-64 w-auto object-contain sm:-right-24 sm:h-80 lg:-right-28 lg:h-72 xl:-right-24 xl:h-80"
            />
          </article>

          <article className="relative isolate min-h-[42rem] overflow-hidden bg-brand-yellow px-6 py-10 text-neutral-950 sm:min-h-[38rem] sm:px-10 sm:py-12 lg:min-h-[46rem]">
            <div className="relative z-10 max-w-xl">
              <span className="flex size-12 items-center justify-center rounded-md bg-neutral-950 text-brand-yellow">
                <Users className="size-6" aria-hidden="true" />
              </span>
              <p className="mt-6 text-xs font-black uppercase text-brand-red">Ceux qui découvrent</p>
              <h3 className="mt-2 font-heading text-3xl font-black uppercase leading-tight sm:text-4xl">
                Ménages, consommateurs et visiteurs
              </h3>
              <p className="mt-4 max-w-lg leading-7 text-neutral-800/75">
                Pour toutes celles et ceux qui recherchent de bonnes affaires,
                des produits de qualité et des promotions exceptionnelles.
              </p>
              <div className="max-w-lg sm:pr-28 lg:pr-20 xl:pr-28">
                <AudienceList items={VISITORS} />
              </div>
            </div>

            <Image
              src="/images/audience/family.png"
              alt="Famille congolaise souriante"
              width={1549}
              height={1033}
              sizes="(max-width: 1024px) 80vw, 34vw"
              className="absolute -bottom-4 -right-24 z-0 h-64 w-auto max-w-none object-contain sm:-right-20 sm:h-72 lg:-right-32 lg:h-64 xl:-right-24 xl:h-72"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
