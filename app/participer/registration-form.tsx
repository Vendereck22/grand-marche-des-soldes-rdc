"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { submitRegistration, type RegistrationFormState } from "./actions";
import {
  EXHIBITOR_CATEGORIES,
  REGISTRATION_TYPES,
  SECTORS,
  type RegistrationType,
} from "@/lib/registration-options";

const initialState: RegistrationFormState = { success: false, message: "" };

function FieldError({ message }: { message?: string }) {
  return message ? <p className="mt-1.5 text-sm font-medium text-brand-red">{message}</p> : null;
}

const inputClass =
  "h-12 w-full rounded-md border border-neutral-300 bg-white px-4 text-neutral-950 outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/15";

export function RegistrationForm({ defaultType }: { defaultType: RegistrationType }) {
  const [state, formAction, isPending] = useActionState(submitRegistration, initialState);
  const [registrationType, setRegistrationType] = useState<RegistrationType>(defaultType);

  if (state.success) {
    return (
      <div className="bg-white p-7 sm:p-10">
        <div className="flex size-12 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </div>
        <h2 className="mt-6 font-heading text-3xl font-black uppercase">Demande enregistrée</h2>
        <p className="mt-4 max-w-xl leading-7 text-neutral-600">{state.message}</p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-brand-red px-5 font-bold text-white hover:bg-brand-red-dark"
        >
          Retour à l’accueil
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="bg-white p-5 sm:p-8 lg:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="type" className="mb-2 block text-sm font-bold">Je souhaite</label>
          <select
            id="type"
            name="type"
            value={registrationType}
            onChange={(event) => setRegistrationType(event.target.value as RegistrationType)}
            className={inputClass}
          >
            {REGISTRATION_TYPES.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <FieldError message={state.errors?.type} />
        </div>

        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-bold">Prénom *</label>
          <input id="firstName" name="firstName" autoComplete="given-name" className={inputClass} />
          <FieldError message={state.errors?.firstName} />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-bold">Nom *</label>
          <input id="lastName" name="lastName" autoComplete="family-name" className={inputClass} />
          <FieldError message={state.errors?.lastName} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-bold">Adresse e-mail *</label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
          <FieldError message={state.errors?.email} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-bold">Téléphone / WhatsApp *</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+243..." className={inputClass} />
          <FieldError message={state.errors?.phone} />
        </div>
        <div>
          <label htmlFor="organization" className="mb-2 block text-sm font-bold">Entreprise ou organisation</label>
          <input id="organization" name="organization" autoComplete="organization" className={inputClass} />
        </div>
        {registrationType === "EXHIBITOR" ? (
          <div>
            <label htmlFor="exhibitorCategory" className="mb-2 block text-sm font-bold">
              Catégorie d’exposant *
            </label>
            <select id="exhibitorCategory" name="exhibitorCategory" defaultValue="" className={inputClass}>
              <option value="" disabled>Sélectionner une catégorie</option>
              {EXHIBITOR_CATEGORIES.map((category) => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
            <FieldError message={state.errors?.exhibitorCategory} />
          </div>
        ) : null}
        <div>
          <label htmlFor="sector" className="mb-2 block text-sm font-bold">Secteur d’activité *</label>
          <select id="sector" name="sector" defaultValue="" className={inputClass}>
            <option value="" disabled>Sélectionner un secteur</option>
            {SECTORS.map((sector) => <option key={sector} value={sector}>{sector}</option>)}
          </select>
          <FieldError message={state.errors?.sector} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="city" className="mb-2 block text-sm font-bold">Ville</label>
          <input id="city" name="city" autoComplete="address-level2" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-bold">Votre besoin</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Parlez-nous brièvement de votre activité ou de votre demande."
            className="w-full resize-y rounded-md border border-neutral-300 bg-white px-4 py-3 text-neutral-950 outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
          />
        </div>
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Site web</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-neutral-600">
        <input name="consentToContact" type="checkbox" className="mt-1 size-4 accent-brand-red" />
        <span>J’accepte d’être contacté par l’équipe du Grand Marché des Soldes au sujet de ma demande.</span>
      </label>
      <FieldError message={state.errors?.consentToContact} />

      {state.message ? (
        <p className="mt-5 border-l-4 border-brand-red bg-red-50 px-4 py-3 text-sm text-brand-red">{state.message}</p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-red px-6 font-bold text-white transition hover:bg-brand-red-dark disabled:cursor-wait disabled:opacity-65 sm:w-auto"
      >
        {isPending ? "Enregistrement..." : "Envoyer ma demande"}
        {!isPending ? <ArrowRight className="size-5" aria-hidden="true" /> : null}
      </button>
    </form>
  );
}
