import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  LogOut,
  Mail,
  Phone,
  Search,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import { requireAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import {
  EXHIBITOR_CATEGORIES,
  REGISTRATION_STATUSES,
  REGISTRATION_TYPES,
  isRegistrationStatus,
  isRegistrationType,
} from "@/lib/registration-options";
import { logoutAdmin, updateRegistrationStatus } from "./actions";

export const metadata: Metadata = { title: "Inscriptions | Administration GMDS" };

const typeLabels = Object.fromEntries(REGISTRATION_TYPES.map((item) => [item.value, item.label]));
const exhibitorCategoryLabels = Object.fromEntries(
  EXHIBITOR_CATEGORIES.map((item) => [item.value, item.label]),
);
export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; type?: string; status?: string }>;
}) {
  await requireAdmin();
  const params = await searchParams;
  const q = params.q?.trim() ?? "";
  const type = params.type && isRegistrationType(params.type) ? params.type : "";
  const status = params.status && isRegistrationStatus(params.status) ? params.status : "";

  const where = {
    ...(type ? { type } : {}),
    ...(status ? { status } : {}),
    ...(q
      ? {
          OR: [
            { firstName: { contains: q } },
            { lastName: { contains: q } },
            { email: { contains: q } },
            { phone: { contains: q } },
            { organization: { contains: q } },
            { exhibitorCategory: { contains: q } },
            { sector: { contains: q } },
          ],
        }
      : {}),
  };

  const [registrations, total, newCount, confirmedCount] = await Promise.all([
    prisma.registration.findMany({ where, orderBy: { createdAt: "desc" } }),
    prisma.registration.count(),
    prisma.registration.count({ where: { status: "NEW" } }),
    prisma.registration.count({ where: { status: "CONFIRMED" } }),
  ]);

  const exportParams = new URLSearchParams();
  if (q) exportParams.set("q", q);
  if (type) exportParams.set("type", type);
  if (status) exportParams.set("status", status);

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-950">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex min-h-20 max-w-[90rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-black uppercase text-brand-red">Grand Marché des Soldes</p>
            <h1 className="font-heading text-xl font-black uppercase">Administration des inscriptions</h1>
          </div>
          <form action={logoutAdmin}>
            <button className="inline-flex h-10 items-center gap-2 rounded-md border border-neutral-200 px-4 text-sm font-bold hover:bg-neutral-50">
              <LogOut className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">Déconnexion</span>
            </button>
          </form>
        </div>
      </header>

      <div className="mx-auto max-w-[90rem] px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
          {[
            { label: "Inscriptions totales", value: total, icon: UsersRound },
            { label: "Nouvelles demandes", value: newCount, icon: Mail },
            { label: "Confirmées", value: confirmedCount, icon: UserRoundCheck },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-white p-6">
              <Icon className="size-5 text-brand-red" aria-hidden="true" />
              <strong className="mt-5 block font-heading text-4xl font-black">{value}</strong>
              <span className="mt-1 block text-sm text-neutral-500">{label}</span>
            </div>
          ))}
        </section>

        <section className="mt-6 bg-white">
          <div className="border-b border-neutral-200 p-4 sm:p-5">
            <form className="grid gap-3 md:grid-cols-[1fr_13rem_13rem_auto]">
              <label className="relative">
                <Search className="absolute left-3 top-3.5 size-4 text-neutral-400" aria-hidden="true" />
                <span className="sr-only">Rechercher</span>
                <input
                  name="q"
                  defaultValue={q}
                  placeholder="Nom, e-mail, téléphone, secteur..."
                  className="h-11 w-full rounded-md border border-neutral-300 pl-10 pr-3 outline-none focus:border-brand-red"
                />
              </label>
              <select name="type" defaultValue={type} className="h-11 rounded-md border border-neutral-300 px-3">
                <option value="">Tous les profils</option>
                {REGISTRATION_TYPES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
              <select name="status" defaultValue={status} className="h-11 rounded-md border border-neutral-300 px-3">
                <option value="">Tous les statuts</option>
                {REGISTRATION_STATUSES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
              <button className="h-11 rounded-md bg-neutral-950 px-5 font-bold text-white hover:bg-brand-red">Filtrer</button>
            </form>
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-neutral-500">{registrations.length} résultat(s)</p>
              <Link
                href={`/admin/export?${exportParams.toString()}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:underline"
              >
                <Download className="size-4" aria-hidden="true" />
                Exporter en CSV
              </Link>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[72rem] border-collapse text-left text-sm">
              <thead className="bg-neutral-50 text-xs uppercase text-neutral-500">
                <tr>
                  <th className="px-5 py-4">Contact</th>
                  <th className="px-5 py-4">Profil</th>
                  <th className="px-5 py-4">Organisation / secteur</th>
                  <th className="px-5 py-4">Inscription</th>
                  <th className="px-5 py-4">Statut</th>
                  <th className="px-5 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {registrations.map((registration) => (
                  <tr key={registration.id} className="align-top hover:bg-neutral-50/70">
                    <td className="px-5 py-5">
                      <strong>{registration.firstName} {registration.lastName}</strong>
                      <a href={`mailto:${registration.email}`} className="mt-1 block text-neutral-500 hover:text-brand-red">{registration.email}</a>
                      <a href={`tel:${registration.phone}`} className="mt-1 block text-neutral-500 hover:text-brand-red">{registration.phone}</a>
                    </td>
                    <td className="px-5 py-5 font-medium">{typeLabels[registration.type] ?? registration.type}</td>
                    <td className="px-5 py-5">
                      <span className="block font-medium">{registration.organization || "Indépendant"}</span>
                      {registration.exhibitorCategory ? (
                        <span className="mt-1 block font-bold text-brand-red">
                          {exhibitorCategoryLabels[registration.exhibitorCategory] ?? registration.exhibitorCategory}
                        </span>
                      ) : null}
                      <span className="mt-1 block text-neutral-500">{registration.sector}</span>
                    </td>
                    <td className="px-5 py-5 text-neutral-500">
                      {new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium", timeStyle: "short" }).format(registration.createdAt)}
                    </td>
                    <td className="px-5 py-5">
                      <form action={updateRegistrationStatus}>
                        <input type="hidden" name="id" value={registration.id} />
                        <select
                          name="status"
                          defaultValue={registration.status}
                          className="h-9 rounded-md border border-neutral-300 bg-white px-2 text-xs font-bold"
                        >
                          {REGISTRATION_STATUSES.map((item) => (
                            <option key={item.value} value={item.value}>{item.label}</option>
                          ))}
                        </select>
                        <button className="ml-2 h-9 rounded-md bg-neutral-950 px-3 text-xs font-bold text-white hover:bg-brand-red">
                          OK
                        </button>
                      </form>
                    </td>
                    <td className="px-5 py-5">
                      <div className="flex gap-2">
                        <a
                          href={`mailto:${registration.email}?subject=Grand%20March%C3%A9%20des%20Soldes%20RDC`}
                          className="inline-flex size-9 items-center justify-center rounded-md bg-brand-red text-white"
                          aria-label={`Écrire à ${registration.firstName}`}
                        >
                          <Mail className="size-4" aria-hidden="true" />
                        </a>
                        <a
                          href={`tel:${registration.phone}`}
                          className="inline-flex size-9 items-center justify-center rounded-md border border-neutral-300"
                          aria-label={`Appeler ${registration.firstName}`}
                        >
                          <Phone className="size-4" aria-hidden="true" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
                {registrations.length === 0 ? (
                  <tr><td colSpan={6} className="px-5 py-16 text-center text-neutral-500">Aucune inscription ne correspond à ces critères.</td></tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
