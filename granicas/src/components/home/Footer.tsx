import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 md:grid md:grid-cols-3">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="treeservice logo"
              width={140}
              height={140}
              className="h-14 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-sm text-white/70 max-w-sm">
            Profesjonalna wycinka i pielęgnacja drzew z dbałością o
            bezpieczeństwo i porządek na Twojej działce.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="text-base font-semibold mb-1 text-white">Usługi</h4>
          <ul className="space-y-1.5 text-white/70">
            <li>• Wycinka drzew (tradycyjna i sekcyjna)</li>
            <li>• Przycinanie i pielęgnacja koron</li>
            <li>• Usuwanie pni i zrębkowanie gałęzi</li>
            <li>• Prace minikoparką</li>
          </ul>
        </div>

        <div className="space-y-4 text-sm">
          <h4 className="text-base font-semibold mb-1 text-white">Kontakt</h4>
          <div className="space-y-1.5 text-white/70">
            <p>
              Telefon:{" "}
              <a
                href="tel:+48123456789"
                className="text-secondary font-semibold"
              >
                +48 123 456 789
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:kontakt@granica.pl"
                className="text-secondary font-semibold"
              >
                kontakt@granica.pl
              </a>
            </p>
            <p>
              Adres: Włocławek i okolice,
              <br />
              woj. kujawsko-pomorskie
            </p>
          </div>
          <div className="flex gap-6 text-xs text-white/50">
            <Link className="hover:text-secondary transition-colors" href="#">
              Polityka prywatności
            </Link>
            <Link className="hover:text-secondary transition-colors" href="#">
              Regulamin
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-white/50">
        © 2025 Granica Tree Service. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
