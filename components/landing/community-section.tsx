import Image from "next/image";
import { CalendarCheck, MessageCircle, UsersRound } from "lucide-react";

const COMMUNITY_STATS = [
  {
    icon: UsersRound,
    value: "3000+",
    title: "Entrepreneurs",
    description:
      "Une communauté composée d’entrepreneurs, porteurs de projets, startups, PME et acteurs de l’écosystème entrepreneurial.",
  },
  {
    icon: CalendarCheck,
    value: "4+",
    title: "Événements",
    description:
      "Des expériences terrain qui rassemblent, connectent et mobilisent entrepreneurs, partenaires et communautés.",
  },
  {
    icon: MessageCircle,
    value: "100K+",
    title: "Engagement sur les réseaux",
    description:
      "Une communauté digitale active qui interagit avec nos contenus, nos campagnes et nos événements.",
  },
] as const;

export function CommunitySection() {
  return (
    <section
      id="community"
      className="scroll-mt-20 overflow-hidden bg-white py-20 text-neutral-950 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative pb-12 sm:pr-14 lg:pb-16">
            <div className="absolute -left-20 top-12 h-72 w-72 rounded-full border-[2.75rem] border-brand-yellow/20" />

            <div className="relative mr-6 aspect-[4/3] overflow-hidden border-[10px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] sm:mr-20 sm:-rotate-2">
              <Image
                src="/images/community/business-talk.jpg"
                alt="Entrepreneurs réunis lors d’une conférence professionnelle"
                fill
                sizes="(max-width: 1024px) 90vw, 47vw"
                className="object-cover"
              />
            </div>

            <div className="relative -mt-10 ml-10 aspect-[16/10] overflow-hidden border-[10px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:-mt-24 sm:ml-28 sm:rotate-2">
              <Image
                src="/images/community/women-in-touch.jpg"
                alt="Communauté d’entrepreneures réunie à Kinshasa"
                fill
                sizes="(max-width: 1024px) 80vw, 38vw"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-2 left-1 bg-brand-red px-5 py-4 text-white shadow-xl sm:left-8">
              <span className="block text-xs font-black uppercase text-brand-yellow">Une communauté active</span>
              <strong className="mt-1 block font-heading text-2xl font-black uppercase">À Kinshasa et au-delà</strong>
            </div>
          </div>

          <div className="section-intro max-w-none">
            <p className="text-sm font-black uppercase text-brand-red">Notre communauté</p>
            <h2 className="section-title font-black">
              Un réseau qui crée
              <span className="block text-brand-red">des connexions durables</span>
            </h2>
            <p className="section-description text-neutral-600">
              Le Grand Marché des Soldes s’appuie sur une communauté déjà engagée,
              réunie autour du partage d’expérience et des opportunités d’affaires.
            </p>

            <div className="mt-9 w-full border-t border-neutral-900/10">
              {COMMUNITY_STATS.map(({ icon: Icon, value, title, description }) => (
                <article
                  key={title}
                  className="grid gap-4 border-b border-neutral-900/10 py-6 sm:grid-cols-[8rem_1fr] sm:gap-6"
                >
                  <div className="flex items-center gap-3 sm:block">
                    <Icon className="size-6 text-brand-red" aria-hidden="true" />
                    <strong className="font-heading text-4xl font-black text-brand-red sm:mt-3 sm:block">
                      {value}
                    </strong>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-black uppercase sm:text-2xl">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
