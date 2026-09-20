import Image from "next/image";
import { CalendarDays, Mic2 } from "lucide-react";

const MASTERCLASSES = [
  {
    title: "Entrepreneur en RDC : quels impôts dois-je réellement payer ?",
    speakers: "DGI, SIA d’avocats et Velex Advisory",
  },
  {
    title: "Odoo : l’outil qui permet de piloter son entreprise comme une grande",
    speakers: "Patrick Kalume, Official Odoo Partner for RDC",
  },
  {
    title: "Ils l’ont fait : les entrepreneurs congolais qui se démarquent",
    speakers: "Michelange Katende, Christopher Mukoka et Sivi Malukisa",
  },
  {
    title: "Comment obtenir un financement pour son entreprise en RDC ?",
    speakers: "Institutions financières, ANADEC, FOGEC et partenaires",
  },
] as const;

export function MasterclassSection() {
  return (
    <section
      id="masterclass"
      className="scroll-mt-20 bg-brand-cream py-20 text-neutral-950 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase text-brand-red">Transmission & expertise</p>
            <h2 className="mt-3 font-heading text-4xl font-black leading-tight uppercase sm:text-5xl lg:text-6xl">
              4 masterclass pour
              <span className="block text-brand-red">entreprendre avec méthode</span>
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-8 text-neutral-600">
            Des experts répondent aux questions concrètes qui accompagnent la
            croissance d’une entreprise en RDC.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden border border-neutral-900/10 bg-white lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[27rem] overflow-hidden sm:min-h-[34rem] lg:min-h-[48rem]">
            <Image
              src="/images/masterclass/auditorium.jpg"
              alt="Entrepreneurs participant à une conférence professionnelle"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute left-5 top-5 bg-brand-yellow px-5 py-4 text-neutral-950 shadow-xl sm:left-8 sm:top-8">
              <strong className="font-heading text-4xl font-black leading-none">04</strong>
              <span className="mt-1 block text-xs font-black uppercase">sessions d’experts</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-4 bg-brand-red px-5 py-4 text-sm font-bold text-white sm:px-8">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4 text-brand-yellow" aria-hidden="true" />
                11 et 12 décembre 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <Mic2 className="size-4 text-brand-yellow" aria-hidden="true" />
                Experts de chaque domaine
              </span>
            </div>
          </div>

          <div className="px-5 py-4 sm:px-8 lg:px-10 lg:py-6">
            {MASTERCLASSES.map((masterclass, index) => (
              <article
                key={masterclass.title}
                className="grid gap-3 border-b border-neutral-900/10 py-7 last:border-b-0 sm:grid-cols-[3.5rem_1fr] sm:gap-5 lg:py-8"
              >
                <span className="font-heading text-3xl font-black text-brand-red">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-black leading-7 text-neutral-950 sm:text-2xl sm:leading-8">
                    {masterclass.title}
                  </h3>
                  <p className="mt-3 text-sm font-bold leading-6 text-brand-red">
                    Animé par {masterclass.speakers}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
