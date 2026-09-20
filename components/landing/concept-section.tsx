import Image from "next/image";
import { ShoppingBag, Store, TrendingUp } from "lucide-react";

const CONCEPT_POINTS = [
  {
    icon: Store,
    title: "Un grand rendez-vous national",
    description: "Entrepreneurs, PME, startups, artisans et grandes marques réunis au même endroit.",
  },
  {
    icon: ShoppingBag,
    title: "Des offres vraiment avantageuses",
    description: "Des promotions exclusives pour préparer les fêtes à des prix accessibles.",
  },
  {
    icon: TrendingUp,
    title: "Un accélérateur commercial",
    description: "Plus de visibilité, de nouveaux clients et une occasion concrète d’écouler les stocks.",
  },
] as const;

export function ConceptSection() {
  return (
    <section
      id="about"
      className="brand-ribbon relative isolate scroll-mt-20 overflow-hidden bg-[#f3f3f1] py-20 text-neutral-900 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm font-black uppercase text-brand-red">Le concept</p>
          <h2 className="mt-3 font-heading text-4xl font-black leading-tight text-balance uppercase sm:text-5xl lg:text-6xl">
            Bien plus qu’une
            <span className="block text-brand-red">foire commerciale</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            Le Grand Marché des Soldes RDC est un salon commercial de grande
            envergure pensé pour valoriser les produits, les services et le
            savoir-faire des entrepreneurs congolais.
          </p>
          <p className="mt-4 text-lg leading-8 text-neutral-700">
            Pendant deux jours, exposants et consommateurs se retrouvent dans
            un environnement dynamique, entièrement orienté vers la découverte,
            la vente et les bonnes affaires.
          </p>

          <div className="mt-8 grid gap-5">
            {CONCEPT_POINTS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-brand-red text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-950">{title}</h3>
                  <p className="mt-1 leading-6 text-neutral-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto min-h-[31rem] w-full max-w-[35rem] sm:min-h-[38rem] lg:min-h-[42rem]">
          <div className="absolute inset-x-3 bottom-0 top-4 sm:inset-x-6">
            <Image
              src="/images/concept/market-stall.png"
              alt="Stand du Grand Marché des Soldes"
              fill
              sizes="(max-width: 1024px) 90vw, 44vw"
              className="object-contain object-bottom"
            />
          </div>

          <Image
            src="/images/concept/shopper.png"
            alt="Visiteuse portant plusieurs sacs d’achats"
            width={1266}
            height={1561}
            sizes="(max-width: 1024px) 62vw, 30vw"
            className="absolute -bottom-3 -right-5 z-10 h-[82%] w-auto object-contain sm:-right-8"
          />

          <div className="absolute left-0 top-6 z-20 bg-brand-red px-5 py-4 text-white shadow-xl sm:left-2 sm:px-7 sm:py-5">
            <span className="block text-xs font-bold uppercase text-brand-yellow">Sur tous les produits</span>
            <strong className="mt-1 block font-heading text-3xl font-black leading-none sm:text-4xl">
              -30 à -50%
            </strong>
            <span className="mt-1 block text-sm font-semibold">de réductions offertes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
