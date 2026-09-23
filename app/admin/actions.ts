"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  clearAdminSession,
  createAdminSession,
  requireAdmin,
  validateAdminCredentials,
} from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { isRegistrationStatus } from "@/lib/registration-options";

export type LoginState = { error: string };

export async function loginAdmin(_state: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!validateAdminCredentials(email, password)) {
    return { error: "Identifiants incorrects." };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/admin/connexion");
}

export async function updateRegistrationStatus(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !isRegistrationStatus(status)) return;

  await prisma.registration.update({ where: { id }, data: { status } });
  revalidatePath("/admin");
}
