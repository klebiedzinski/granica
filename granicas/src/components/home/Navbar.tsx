export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 w-full">
      <div className="bg-white/90 backdrop-blur-md border border-white/20 shadow-sm rounded-full px-6 py-3 flex items-center justify-between w-full max-w-[1200]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">forest</span>
          <span className="text-lg font-bold tracking-tight text-text-main">
            treeservice
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a
            className="text-sm font-medium hover:text-text-muted transition-colors"
            href="#uslugi"
          >
            Usługi
          </a>
          <a
            className="text-sm font-medium hover:text-text-muted transition-colors"
            href="#o-nas"
          >
            O nas
          </a>
          <a
            className="text-sm font-medium hover:text-text-muted transition-colors"
            href="#cennik"
          >
            Cennik
          </a>
          <a
            className="text-sm font-medium hover:text-text-muted transition-colors"
            href="#realizacje"
          >
            Realizacje
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="hidden sm:flex bg-primary hover:bg-primary/80 transition-colors text-black text-sm font-bold px-5 py-2.5 rounded-full items-center justify-center"
            href="#kontakt"
          >
            Darmowa wycena
          </a>
          <button
            className="md:hidden p-1 text-text-main"
            aria-label="Otwórz menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
