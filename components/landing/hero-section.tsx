"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay: number, distance = 20) => ({
    initial: reduceMotion ? false : { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="home"
      className="brand-ribbon relative isolate min-h-[calc(100svh-7rem)] overflow-hidden bg-brand-red text-white"
    >
      <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-6 px-4 pb-0 pt-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pt-5">
        <div className="relative z-20 max-w-2xl pb-8 lg:py-4">
          <motion.p
            {...reveal(0.05)}
            className="mb-4 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-brand-yellow backdrop-blur-sm"
          >
            Pour les entrepreneurs, par les entrepreneurs
          </motion.p>

          <motion.h1
            {...reveal(0.14, 28)}
            className="font-heading text-5xl font-black leading-[0.96] text-balance uppercase sm:text-6xl lg:text-[4.2rem] xl:text-[4.75rem]"
          >
            Le Grand Marché
            <span className="block text-brand-yellow">des Soldes RDC</span>
          </motion.h1>

          <motion.p
            {...reveal(0.23)}
            className="mt-5 max-w-xl text-lg leading-7 text-white/85 sm:text-xl"
          >
            Le plus grand rendez-vous commercial des entreprises et des
            consommateurs en République démocratique du Congo.
          </motion.p>

          <motion.div
            {...reveal(0.31)}
            className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold sm:text-base"
          >
            <span className="inline-flex items-center gap-2">
              <CalendarDays
                className="size-5 text-brand-yellow"
                aria-hidden="true"
              />
              11 et 12 décembre 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-5 text-brand-yellow" aria-hidden="true" />
              Kinshasa, RDC
            </span>
          </motion.div>

          <motion.div
            {...reveal(0.39)}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#exhibitors"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand-yellow px-6 text-base font-bold text-neutral-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Devenir exposant
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 bg-white/5 px-6 text-base font-bold text-white transition-colors hover:bg-white hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Découvrir l’événement
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 30, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 h-[24rem] w-full overflow-hidden rounded-lg bg-white/10 sm:h-[32rem] lg:h-[calc(100svh-12rem)] lg:max-h-[39rem] lg:max-w-xl lg:self-end lg:overflow-visible lg:rounded-none lg:bg-transparent"
        >
          <div className="absolute right-0 top-4 hidden h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 text-center text-sm font-black uppercase leading-tight text-brand-yellow backdrop-blur-sm sm:flex lg:right-4 lg:top-14">
            Jusqu’à
            <br />
            -50%
          </div>
          <Image
            src="/images/hero/herophoto-transparent.png"
            alt="Groupe d’entrepreneurs congolais souriants"
            width={1110}
            height={1417}
            priority
            sizes="(max-width: 1024px) 92vw, 48vw"
            className="absolute inset-x-0 -bottom-3 z-10 h-full w-full object-contain object-bottom lg:-bottom-4 lg:drop-shadow-[0_24px_28px_rgba(80,0,0,0.2)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
