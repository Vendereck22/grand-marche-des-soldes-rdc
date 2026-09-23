import Image from "next/image";
import { Check, ShoppingBasket, Store } from "lucide-react";

const EXHIBITOR_BENEFITS = [
  "Booster les ventes de fin d’année",
  "Gagner en visibilité auprès du grand public",
  "Conquérir de nouveaux clients",
  "Écouler les stocks et créer des relations B2B",
] as const;

const VISITOR_BENEFITS = [
  "Profiter de réductions allant jusqu’à 50%",
  "Découvrir des marques et produits congolais",
  "Comparer une grande variété d’offres au même endroit",
  "Vivre deux jours d’animations et de rencontres",
] as const;

function BenefitList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-7 divide-y divide-neutral-900/10 border-y border-neutral-900/10">
      {items.map((item) => (
        <li key={item} className="flex gap-3 py-4 text-base font-semibold leading-6 text-neutral-800">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
            <Check className="size-3.5 stroke-[3]" aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function BenefitsSection() {
  return (
    <section id="benefits" className="scroll-mt-20 overflow-hidden">
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="brand-ribbon relative isolate min-h-[42rem] overflow-hidden bg-brand-red px-4 pb-0 pt-16 text-white sm:px-8 sm:pt-20 lg:min-h-[52rem] lg:px-12 xl:px-[max(3rem,calc((100vw-80rem)/2))]">
          <div className="section-intro relative z-20 mx-auto lg:ml-auto lg:max-w-md">
            <p className="text-sm font-black uppercase text-brand-yellow">Pourquoi participer ?</p>
            <h2 className="section-title font-black">
              Une occasion de
              <span className="block text-brand-yellow">grandir ensemble</span>
            </h2>
            <p className="section-description text-white/80">
              Un événement pensé pour créer des opportunités concrètes, aussi
              bien pour ceux qui vendent que pour ceux qui achètent.
            </p>
          </div>

          <Image
            src="/images/benefits/business-handshake.png"
            alt="Entrepreneure concluant un partenariat professionnel"
            width={1434}
            height={1434}
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="absolute -bottom-6 left-1/2 z-10 h-[46%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom sm:h-[55%] lg:left-auto lg:right-[-15%] lg:h-[59%] lg:translate-x-0 xl:right-[-6%]"
          />
        </div>

        <div className="bg-brand-cream px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:pr-[max(3rem,calc((100vw-80rem)/2))]">
          <div className="mx-auto grid max-w-3xl gap-12 md:grid-cols-2 md:gap-10 lg:mx-0 lg:max-w-none xl:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-md bg-brand-red text-white">
                  <Store className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase text-brand-red">Pour vendre</p>
                  <h3 className="font-heading text-3xl font-black uppercase text-neutral-950">Exposants</h3>
                </div>
              </div>
              <p className="mt-5 leading-7 text-neutral-600">
                Une plateforme nationale pour présenter son savoir-faire et
                transformer la visibilité en résultats commerciaux.
              </p>
              <BenefitList items={EXHIBITOR_BENEFITS} />
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-md bg-neutral-950 text-brand-yellow">
                  <ShoppingBasket className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase text-brand-red">Pour acheter</p>
                  <h3 className="font-heading text-3xl font-black uppercase text-neutral-950">Visiteurs</h3>
                </div>
              </div>
              <p className="mt-5 leading-7 text-neutral-600">
                Un accès direct à des offres exceptionnelles pour préparer les
                fêtes tout en soutenant l’économie locale.
              </p>
              <BenefitList items={VISITOR_BENEFITS} />
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl border-l-4 border-brand-red pl-5 lg:mx-0 lg:max-w-none">
            <p className="font-heading text-xl font-black uppercase leading-7 text-neutral-950 sm:text-2xl">
              Stimuler les ventes, valoriser les marques locales et faire de
              Kinshasa une capitale du commerce entrepreneurial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
