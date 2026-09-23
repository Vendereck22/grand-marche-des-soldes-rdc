"use client";

import { useActionState } from "react";
import { LogIn } from "lucide-react";
import { loginAdmin, type LoginState } from "../actions";

const initialState: LoginState = { error: "" };

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAdmin, initialState);

  return (
    <form action={action} className="mt-8 space-y-5">
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-bold">Adresse e-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          required
          className="h-12 w-full rounded-md border border-neutral-300 px-4 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-bold">Mot de passe</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="h-12 w-full rounded-md border border-neutral-300 px-4 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
        />
      </div>
      {state.error ? <p className="bg-red-50 px-4 py-3 text-sm font-medium text-brand-red">{state.error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-red px-5 font-bold text-white hover:bg-brand-red-dark disabled:opacity-60"
      >
        <LogIn className="size-5" aria-hidden="true" />
        {pending ? "Connexion..." : "Se connecter"}
      </button>
    </form>
  );
}
