import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { RegistrationForm } from "./registration-form";
import { isRegistrationType, type RegistrationType } from "@/lib/registration-options";

export const metadata: Metadata = {
  title: "Participer | Grand Marché des Soldes RDC",
  description: "Inscrivez-vous comme participant, exposant ou partenaire du Grand Marché des Soldes RDC.",
};

const queryTypes: Record<string, RegistrationType> = {
  participant: "PARTICIPANT",
  exhibitor: "EXHIBITOR",
  exposant: "EXHIBITOR",
  partner: "PARTNER",
  partenaire: "PARTNER",
};

export default async function ParticipatePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const requestedType = params.type ? queryTypes[params.type.toLowerCase()] ?? params.type.toUpperCase() : "";
  const defaultType = isRegistrationType(requestedType) ? requestedType : "PARTICIPANT";

  return (
    <main className="min-h-screen bg-brand-cream text-neutral-950">
      <header className="border-b border-neutral-900/10 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logos/GMDS Logos declination_01.png" alt="" width={48} height={48} className="size-12 object-contain" />
            <span className="font-heading text-sm font-black uppercase leading-tight">
              Grand Marché <span className="block text-brand-red">des Soldes RDC</span>
            </span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-brand-red">
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Retour au site</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-20">
        <section>
          <p className="text-sm font-black uppercase text-brand-red">Inscription</p>
          <h1 className="mt-3 font-heading text-4xl font-black uppercase leading-tight sm:text-5xl">
            Rejoignez le
            <span className="block text-brand-red">Grand Marché</span>
          </h1>
          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Complétez ce formulaire pour participer, exposer votre marque ou devenir partenaire.
          </p>
          <div className="mt-8 space-y-4 border-y border-neutral-900/10 py-6 text-sm font-bold">
            <p className="flex items-center gap-3">
              <CalendarDays className="size-5 text-brand-red" aria-hidden="true" />
              11 et 12 décembre 2026
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="size-5 text-brand-red" aria-hidden="true" />
              Kinshasa, RDC
            </p>
          </div>
          <p className="mt-6 text-sm leading-6 text-neutral-500">
            Les informations transmises sont utilisées uniquement pour traiter votre demande et vous recontacter.
          </p>
        </section>

        <RegistrationForm defaultType={defaultType} />
      </div>
    </main>
  );
}
