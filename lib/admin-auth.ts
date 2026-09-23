import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "gmds_admin_session";
const SESSION_DURATION = 60 * 60 * 8;

function getConfig() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!email || !password || !secret) {
    throw new Error("Les variables ADMIN_EMAIL, ADMIN_PASSWORD et ADMIN_SESSION_SECRET sont requises.");
  }

  return { email, password, secret };
}

function safeEqual(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

function sign(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function validateAdminCredentials(email: string, password: string) {
  const config = getConfig();
  return safeEqual(email.toLowerCase(), config.email.toLowerCase()) && safeEqual(password, config.password);
}

export async function createAdminSession() {
  const { secret } = getConfig();
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION;
  const payload = String(expiresAt);
  const token = `${payload}.${sign(payload, secret)}`;
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_DURATION,
    path: "/",
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated() {
  const { secret } = getConfig();
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;

  const [expiresAt, signature] = token.split(".");
  if (!expiresAt || !signature || Number(expiresAt) < Math.floor(Date.now() / 1000)) return false;

  return safeEqual(signature, sign(expiresAt, secret));
}

export async function requireAdmin() {
  if (!(await isAdminAuthenticated())) redirect("/admin/connexion");
}
