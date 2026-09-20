"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const STATS = [
  { from: 0, to: 300, suffix: "+", label: "exposants attendus" },
  { from: 0, to: 3000, suffix: "+", label: "participants en 2 jours" },
  { from: 0, to: 10, suffix: "+", label: "secteurs représentés" },
  { from: 30, to: 50, suffix: "%", label: "de réductions proposées", range: true },
] as const;

function formatNumber(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value);
}

function AnimatedValue({
  from,
  to,
  suffix,
  range = false,
}: {
  from: number;
  to: number;
  suffix: string;
  range?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(reduceMotion ? 1 : 0);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      if (reduceMotion) setProgress(1);
      return;
    }

    const duration = 1400;
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setProgress(eased);
      if (elapsed < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, reduceMotion]);

  const currentTo = Math.round(to * progress);
  const currentFrom = Math.round(from * progress);
  const finalLabel = range
    ? `${formatNumber(from)} à ${formatNumber(to)}${suffix}`
    : `${formatNumber(to)}${suffix}`;

  return (
    <span ref={ref} aria-label={finalLabel}>
      <span aria-hidden="true">
        {range
          ? `${formatNumber(currentFrom)} à ${formatNumber(currentTo)}${suffix}`
          : `${formatNumber(currentTo)}${suffix}`}
      </span>
    </span>
  );
}

export function StatsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="stats"
      aria-label="Le Grand Marché des Soldes en chiffres"
      className="scroll-mt-20 bg-brand-yellow text-neutral-950"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
            className={`flex min-h-32 flex-col justify-center px-4 py-5 sm:px-7 ${
              index % 2 === 1 ? "border-l border-neutral-950/20" : ""
            } ${index === 2 ? "border-t border-neutral-950/20 lg:border-l lg:border-t-0" : ""} ${
              index === 3 ? "border-t border-neutral-950/20 lg:border-t-0" : ""
            }`}
          >
            <strong className="font-heading text-3xl font-black leading-none tabular-nums text-brand-red sm:text-4xl">
              <AnimatedValue {...stat} />
            </strong>
            <span className="mt-2 max-w-48 text-sm font-semibold leading-5 sm:text-base">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
