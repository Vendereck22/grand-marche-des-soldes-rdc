import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Connexion administration | GMDS RDC" };

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) redirect("/admin");

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-cream px-4 py-12">
      <section className="w-full max-w-md bg-white p-7 sm:p-10">
        <Image
          src="/logos/GMDS Logos declination_01.png"
          alt="Grand Marché des Soldes RDC"
          width={72}
          height={72}
          className="size-18 object-contain"
        />
        <p className="mt-7 text-sm font-black uppercase text-brand-red">Espace sécurisé</p>
        <h1 className="mt-2 font-heading text-3xl font-black uppercase">Administration</h1>
        <p className="mt-3 text-sm leading-6 text-neutral-600">
          Connectez-vous pour consulter et suivre les inscriptions reçues.
        </p>
        <LoginForm />
        <Link href="/" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-brand-red">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Retour au site
        </Link>
      </section>
    </main>
  );
}
