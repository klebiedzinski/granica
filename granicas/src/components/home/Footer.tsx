export default function Footer() {
  return (
    <footer className="bg-text-main text-white py-12 px-4 rounded-t-[3rem]">
      <div className="max-w-[1200] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              forest
            </span>
            <span className="text-xl font-bold tracking-tight">
              treeservice
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Profesjonalna pielęgnacja zieleni.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-gray-400">
          <a className="hover:text-primary transition-colors" href="#">
            Polityka prywatności
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Regulamin
          </a>
        </div>
        <div className="text-sm text-gray-500">
          © 2024 treeservice. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
