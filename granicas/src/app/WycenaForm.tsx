"use client";

import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Send } from "lucide-react";

export function WycenaForm() {
  const [, setFiles] = useState<File[]>([]);

  return (
    <div>
      <h3 className="text-xl font-bold text-text-main mb-6">Wycena online</h3>
      <form className="grid grid-cols-2 gap-4">
        {/* Imię */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-text-muted" htmlFor="name">
            Imię
          </label>
          <input
            id="name"
            type="text"
            placeholder="Wpisz imię"
            className="w-full bg-secondary/10 rounded-lg px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted/60 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        {/* Telefon */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-text-muted" htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Numer telefonu"
            className="w-full bg-secondary/10 rounded-lg px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted/60 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        {/* Wiadomość - pełna szerokość */}
        <div className="flex flex-col gap-1.5 col-span-2">
          <label className="text-xs text-text-muted" htmlFor="message">
            Wiadomość
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Opisz co jest do zrobienia..."
            className="w-full bg-secondary/10 rounded-lg px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted/60 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
          />
        </div>

        {/* Zdjęcia - pełna szerokość */}
        <div className="flex flex-col gap-1.5 col-span-2">
          <label className="text-xs text-text-muted">
            Zdjęcia <span className="text-text-muted/50">(opcjonalnie)</span>
          </label>
          <FileUpload onChange={(files) => setFiles(files)} />
        </div>

        {/* Przycisk + tekst - pełna szerokość */}
        <div className="col-span-2 flex flex-col gap-2 mt-1">
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm w-fit"
          >
            <Send className="h-4 w-4" />
            Wyślij
          </button>
          <p className="text-xs text-text-muted/60">
            Wysyłając formularz, zgadzasz się z polityką prywatności.
          </p>
        </div>
      </form>
    </div>
  );
}
