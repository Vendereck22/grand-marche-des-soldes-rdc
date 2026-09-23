import Image from "next/image";

const SECTORS = [
  {
    title: "Agroalimentaire",
    description: "Produits locaux, alimentation et transformation",
    image: "/images/sectors/agrofood.jpg",
    alt: "Produits du secteur agroalimentaire",
    className: "lg:col-span-7 lg:row-span-2",
  },
  {
    title: "Électronique & fintech",
    description: "Technologies, paiement et services numériques",
    image: "/images/sectors/fintech.jpg",
    alt: "Solutions électroniques et financières numériques",
    className: "lg:col-span-5",
  },
  {
    title: "Beauté & mode",
    description: "Créateurs, cosmétiques et tendances locales",
    image: "/images/sectors/fashion.jpg",
    alt: "Produits de beauté et de mode",
    className: "lg:col-span-5",
  },
  {
    title: "Restauration",
    description: "Cuisine, boissons et expériences gourmandes",
    image: "/images/sectors/food-service.jpg",
    alt: "Professionnels du secteur de la restauration",
    className: "lg:col-span-6",
  },
  {
    title: "Mobilier & artisanat",
    description: "Création locale, décoration et savoir-faire",
    image: "/images/sectors/crafts.jpg",
    alt: "Objets de mobilier et créations artisanales",
    className: "lg:col-span-6",
  },
] as const;

export function SectorsSection() {
  return (
    <section
      id="sectors"
      className="brand-ribbon relative isolate scroll-mt-20 overflow-hidden bg-brand-red py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="section-intro">
            <p className="text-sm font-black uppercase text-brand-yellow">Secteurs attendus</p>
            <h2 className="section-title font-black">
              Les talents qui font
              <span className="block text-brand-yellow">bouger l’économie</span>
            </h2>
            <p className="section-description text-white/80">
              Une sélection représentative des savoir-faire, produits et services
              qui animent le marché congolais.
            </p>
          </div>
          <div className="max-w-sm border-l-4 border-brand-yellow pl-5">
            <strong className="font-heading text-3xl font-black text-brand-yellow">10+</strong>
            <p className="mt-1 text-base leading-7 text-white/80">
              secteurs représentés pour refléter toute la diversité du marché congolais.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:auto-rows-[17rem] lg:grid-cols-12">
          {SECTORS.map((sector, index) => (
            <article
              key={sector.title}
              className={`group relative min-h-[19rem] overflow-hidden rounded-md bg-neutral-900 ${sector.className}`}
            >
              <Image
                src={sector.image}
                alt={sector.alt}
                fill
                sizes={index === 0 ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 50vw, 42vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-brand-cream px-5 py-4 text-neutral-950 sm:px-6">
                <span className="text-xs font-black text-brand-red">0{index + 1}</span>
                <h3 className="mt-1 font-heading text-2xl font-black uppercase leading-tight">
                  {sector.title}
                </h3>
                <p className="mt-1 text-sm leading-5 text-neutral-600">{sector.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
