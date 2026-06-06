"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { CallButton } from "@/components/cta";

const nav = [
  { name: "Usługi", href: "#uslugi" },
  { name: "Realizacje", href: "#realizacje" },
  { name: "Jak pracujemy", href: "#jak-pracujemy" },
  { name: "Opinie", href: "#opinie" },
  { name: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-sage-deep text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label={site.brandFull}>
          <Image src="/symbol.png" alt={site.brand} width={44} height={44} className="h-10 w-10 brightness-0 invert" priority />
          <span className="font-display text-lg font-extrabold tracking-tight text-white">{site.brand}</span>
        </a>

        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {nav.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold text-white/80 transition-colors hover:text-white">
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <CallButton tone="onDark" />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a href={site.phone.href} aria-label={`Zadzwoń ${site.phone.display}`} className="inline-flex items-center justify-center rounded-lg bg-white p-2.5 text-primary shadow-sm">
            <Phone className="size-5" aria-hidden />
          </a>
          <button type="button" onClick={() => setOpen(true)} className="-m-2 p-2 text-white" aria-label="Otwórz menu">
            <Menu className="size-6" aria-hidden />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-sage-deep p-6 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Image src="/symbol.png" alt={site.brand} width={40} height={40} className="h-9 w-9 brightness-0 invert" />
                <span className="font-display text-lg font-extrabold tracking-tight text-white">{site.brand}</span>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="-m-2 p-2 text-white" aria-label="Zamknij menu">
                <X className="size-6" aria-hidden />
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-1">
              {nav.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/10">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <CallButton size="lg" tone="onDark" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
