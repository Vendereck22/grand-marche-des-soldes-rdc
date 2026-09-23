import Link from "next/link";
import { HelpCircle, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Qu’est-ce que le Grand Marché des Soldes ?",
    answer:
      "C’est un grand rendez-vous économique et commercial qui réunit, pendant deux jours, des entreprises, entrepreneurs, commerçants et consommateurs autour de ventes, rencontres, animations et masterclass.",
  },
  {
    question: "Quand et où se déroule l’événement ?",
    answer:
      "L’événement se tiendra les 11 et 12 décembre 2026 à Kinshasa, en République démocratique du Congo. Le lieu précis et les horaires seront communiqués prochainement.",
  },
  {
    question: "Qui peut participer au Grand Marché des Soldes ?",
    answer:
      "L’événement s’adresse aux familles, consommateurs, entrepreneurs, PME, grandes entreprises, artisans, créateurs, partenaires et acteurs de l’écosystème entrepreneurial.",
  },
  {
    question: "Quelles activités seront proposées ?",
    answer:
      "Le programme prévoit une grande exposition-vente, des ventes flash, des rencontres B2B, des masterclass, des jeux ainsi qu’une grande tombola.",
  },
  {
    question: "Comment réserver un espace exposant ?",
    answer:
      "Vous pouvez demander le dossier exposant par e-mail. L’équipe vous transmettra les formats d’espace, les conditions de participation et les prochaines étapes.",
    link: {
      label: "Demander le dossier exposant",
      href: "/participer?type=exhibitor",
    },
  },
  {
    question: "Comment devenir partenaire de l’événement ?",
    answer:
      "Les institutions, entreprises, médias et partenaires techniques peuvent construire une collaboration adaptée à leurs objectifs de visibilité et d’impact.",
    link: {
      label: "Demander le dossier partenariat",
      href: "/participer?type=partner",
    },
  },
] as const;

export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-brand-cream py-20 text-neutral-950 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
        <div className="section-intro lg:sticky lg:top-28 lg:self-start">
          <div className="flex size-12 items-center justify-center bg-brand-red text-white">
            <HelpCircle className="size-6" aria-hidden="true" />
          </div>
          <p className="mt-7 text-sm font-black uppercase text-brand-red">Questions fréquentes</p>
          <h2 className="section-title font-black">
            Tout savoir
            <span className="block text-brand-red">avant le marché</span>
          </h2>
          <p className="section-description text-neutral-600">
            Retrouvez les réponses essentielles pour préparer votre visite,
            exposer votre marque ou rejoindre l’événement comme partenaire.
          </p>

          <div className="mt-8 border-l-4 border-brand-yellow pl-5">
            <p className="text-sm text-neutral-600">Vous avez une autre question ?</p>
            <Link
              href="mailto:contact@newbell-agency.com?subject=Question%20-%20Grand%20March%C3%A9%20des%20Soldes"
              className="mt-2 inline-flex items-center gap-2 font-bold text-brand-red hover:underline"
            >
              <Mail className="size-4" aria-hidden="true" />
              contact@newbell-agency.com
            </Link>
          </div>
        </div>

        <Accordion defaultValue={["faq-0"]} className="border-t border-neutral-900/15">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="border-b border-neutral-900/15"
            >
              <AccordionTrigger className="gap-5 rounded-none py-6 text-base font-black uppercase hover:text-brand-red hover:no-underline sm:py-7 sm:text-lg">
                <span className="flex items-start gap-4 sm:gap-6">
                  <span className="font-heading text-sm text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-7 pl-10 pr-10 text-base leading-7 text-neutral-600 sm:pl-14 sm:pr-16">
                <p>{item.answer}</p>
                {"link" in item && item.link ? (
                  <Link href={item.link.href} className="mt-4 inline-flex font-bold text-brand-red">
                    {item.link.label}
                  </Link>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
