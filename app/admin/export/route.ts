import { NextRequest } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { isRegistrationStatus, isRegistrationType } from "@/lib/registration-options";

function csvCell(value: unknown) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

export async function GET(request: NextRequest) {
  if (!(await isAdminAuthenticated())) return new Response("Non autorisé", { status: 401 });

  const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";
  const rawType = request.nextUrl.searchParams.get("type") ?? "";
  const rawStatus = request.nextUrl.searchParams.get("status") ?? "";
  const type = isRegistrationType(rawType) ? rawType : "";
  const status = isRegistrationStatus(rawStatus) ? rawStatus : "";

  const registrations = await prisma.registration.findMany({
    where: {
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
    },
    orderBy: { createdAt: "desc" },
  });

  const rows = [
    ["Date", "Type", "Statut", "Prénom", "Nom", "E-mail", "Téléphone", "Organisation", "Catégorie exposant", "Secteur", "Ville", "Message"],
    ...registrations.map((item) => [
      item.createdAt.toISOString(),
      item.type,
      item.status,
      item.firstName,
      item.lastName,
      item.email,
      item.phone,
      item.organization,
      item.exhibitorCategory,
      item.sector,
      item.city,
      item.message,
    ]),
  ];
  const csv = "\uFEFF" + rows.map((row) => row.map(csvCell).join(";")).join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="inscriptions-gmds.csv"',
      "Cache-Control": "no-store",
    },
  });
}
