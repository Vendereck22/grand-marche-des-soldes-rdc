"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Activités", href: "#activities" },
  { label: "Secteurs", href: "#sectors" },
  { label: "Masterclass", href: "#masterclass" },
  { label: "Exposants", href: "#exhibitors" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 20);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300",
        isScrolled
          ? "border-neutral-200/80 bg-white/95 shadow-sm"
          : "border-white/10 bg-brand-red/95",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-600"
          aria-label="Accueil - Le Grand Marché des Soldes RDC"
        >
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/logos/GMDS Logos declination_01.png"
              alt="Logo Le Grand Marché des Soldes RDC"
              width={48}
              height={48}
              priority
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "text-sm font-black tracking-tight uppercase leading-none transition-colors duration-300",
                isScrolled ? "text-neutral-900" : "text-white",
              )}
            >
              Grand Marché
            </span>
            <span
              className={cn(
                "text-xs font-bold tracking-wider uppercase leading-tight transition-colors duration-300",
                isScrolled ? "text-red-600" : "text-brand-yellow",
              )}
            >
              Des Soldes RDC
            </span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-8"
          aria-label="Navigation principale"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-1 py-1 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2",
                isScrolled
                  ? "text-neutral-700 hover:text-red-600 focus-visible:ring-red-600"
                  : "text-white/85 hover:text-brand-yellow focus-visible:ring-brand-yellow",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions & CTA Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#contact"
            className={cn(
              "hidden rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 xl:inline-flex",
              isScrolled
                ? "text-neutral-600 hover:text-neutral-950 focus-visible:ring-red-600"
                : "text-white/85 hover:text-brand-yellow focus-visible:ring-brand-yellow",
            )}
          >
            Participer
          </Link>
          <Button
            render={<Link href="#exhibitors" />}
            nativeButton={false}
            className={cn(
              "h-10 rounded-full px-5 text-sm font-semibold shadow-xs transition-all hover:shadow-md focus-visible:ring-2 active:scale-95",
              isScrolled
                ? "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600"
                : "bg-brand-yellow text-neutral-950 hover:bg-white focus-visible:ring-white",
            )}
          >
            Devenir exposant
          </Button>
        </div>

        {/* Bouton Hamburger & Menu Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            render={<Link href="#exhibitors" />}
            nativeButton={false}
            size="sm"
            className={cn(
              "h-9 rounded-full px-3.5 text-xs font-semibold transition-colors sm:text-sm md:hidden",
              isScrolled
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-brand-yellow text-neutral-950 hover:bg-white",
            )}
          >
            Exposer
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-10 w-10 transition-colors",
                    isScrolled
                      ? "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                      : "text-white hover:bg-white/10 hover:text-brand-yellow",
                  )}
                  aria-label="Ouvrir le menu de navigation"
                />
              }
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-full max-w-xs flex-col p-6 sm:max-w-sm"
            >
              <SheetHeader className="border-b border-neutral-100 p-0 pb-4 text-left">
                <SheetTitle className="flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0">
                    <Image
                      src="/logos/GMDS Logos declination_01.png"
                      alt="Logo Le Grand Marché des Soldes RDC"
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-black tracking-tight text-neutral-900 uppercase leading-none">
                      Grand Marché
                    </span>
                    <span className="text-[11px] font-bold tracking-wider text-red-600 uppercase leading-tight">
                      Des Soldes RDC
                    </span>
                  </div>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Menu de navigation principal pour mobile
                </SheetDescription>
              </SheetHeader>

              {/* Liens Mobile */}
              <nav
                className="flex flex-1 flex-col gap-1 overflow-y-auto py-4"
                aria-label="Menu mobile"
              >
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-neutral-700 transition-colors hover:bg-red-50 hover:text-red-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* CTAs Mobile */}
              <div className="flex flex-col gap-2.5 border-t border-neutral-100 pt-4">
                <Button
                  render={<Link href="#exhibitors" onClick={() => setIsOpen(false)} />}
                  nativeButton={false}
                  className="h-11 w-full rounded-full bg-red-600 text-sm font-semibold text-white shadow-xs hover:bg-red-700"
                >
                  Devenir exposant
                </Button>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-full items-center justify-center rounded-full border border-neutral-200 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  Participer à l&apos;événement
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
