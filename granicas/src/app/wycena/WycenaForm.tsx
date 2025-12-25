"use client";

import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export function WycenaForm() {
  const [, setFiles] = useState<File[]>([]);

  return (
    <div className="bg-background-light rounded-3xl p-6 md:p-8 border border-border-color mb-6">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold ml-1" htmlFor="name">
            Imię
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jan"
            className="w-full bg-white rounded-xl border-border-color p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold ml-1" htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+48 ..."
            className="w-full bg-white rounded-xl border-border-color p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold ml-1" htmlFor="city">
            Miejscowość
          </label>
          <input
            id="city"
            type="text"
            placeholder="Włocławek"
            className="w-full bg-white rounded-xl border-border-color p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold ml-1" htmlFor="description">
            Opis (opcjonalnie)
          </label>
          <textarea
            id="description"
            rows={4}
            placeholder="Opisz krótko co jest do zrobienia..."
            className="w-full bg-white rounded-xl border-border-color p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold ml-1">Zdjęcia</span>
          <FileUpload onChange={(files) => setFiles(files)} />
          <p className="text-xs text-text-muted ml-1">
            Możesz dodać jedno lub kilka zdjęć. Później podłączymy tu realne
            wysyłanie plików.
          </p>
        </div>
        <button
          type="submit"
          className="mt-2 bg-primary hover:bg-[#65a30d] text-black font-bold py-4 px-6 rounded-full w-full transition-colors flex items-center justify-center gap-2"
        >
          Wyślij zapytanie o wycenę
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
      </form>
    </div>
  );
}
