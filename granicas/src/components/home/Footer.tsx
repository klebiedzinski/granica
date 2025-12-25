import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-text-main text-white py-12 px-4 rounded-t-[3rem]">
      <div className="max-w-[1200] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="treeservice logo"
              width={120}
              height={120}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex gap-8 text-sm text-gray-400">
          <Link className="hover:text-primary transition-colors" href="#">
            Polityka prywatności
          </Link>
          <Link className="hover:text-primary transition-colors" href="#">
            Regulamin
          </Link>
        </div>
        <div className="text-sm text-gray-500">
          © 2026 Tree Service. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
