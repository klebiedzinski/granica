"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 w-full">
      <div className="bg-white/90 backdrop-blur-md border border-white/20 shadow-sm rounded-full px-6 py-3 flex items-center justify-between w-full max-w-[1200]">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/symbol.png"
            alt="treeservice logo"
            width={40}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link
            className="text-md font-medium hover:text-text-muted transition-colors"
            href="/#uslugi"
          >
            Usługi
          </Link>
          <Link
            className="text-md font-medium hover:text-text-muted transition-colors"
            href="/#opinie"
          >
            Opinie
          </Link>
          <Link
            className="text-md font-medium hover:text-text-muted transition-colors"
            href="/#faq"
          >
            FAQ
          </Link>
          <Link
            className="text-md font-medium hover:text-text-muted transition-colors"
            href="/realizacje"
          >
            Realizacje
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="hidden sm:flex text-white bg-primary hover:bg-primary/80 transition-colors text-black text-sm font-bold px-5 py-2.5 rounded-full items-center justify-center"
            href="/wycena"
          >
            Darmowa wycena
          </Link>
          <Sheet>
            <SheetTrigger
              className="md:hidden p-1 text-text-main"
              aria-label="Otwórz menu"
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 p-4 text-base">
                <Link href="/#uslugi" className="py-1">
                  Usługi
                </Link>
                <Link href="/#opinie" className="py-1">
                  Opinie
                </Link>
                <Link href="/realizacje" className="py-1">
                  Realizacje
                </Link>
                <Link href="/#faq" className="py-1">
                  FAQ
                </Link>
                <Link
                  href="/wycena"
                  className="mt-4 bg-primary text-black font-bold px-4 py-2 rounded-full text-center"
                >
                  Darmowa wycena
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
