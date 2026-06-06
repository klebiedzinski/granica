// ─────────────────────────────────────────────────────────────────────────
// JEDNO MIEJSCE NA WSZYSTKIE TREŚCI STRONY (edytuj tu, bez grzebania w kodzie)
// Dane prawdziwe: ulotka + profil Oferteo Jakuba Granicznego.
// TODO oznacza rzeczy do potwierdzenia/uzupełnienia.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  brand: "Tree Service",
  owner: "Jakub Graniczny",
  brandFull: "Tree Service - Jakub Graniczny",
  nip: "888-317-82-83",

  phone: {
    display: "+48 784 348 580",
    short: "784 348 580",
    href: "tel:+48784348580",
  },
  whatsapp: {
    href: "https://wa.me/48784348580?text=Dzie%C5%84%20dobry%2C%20chcia%C5%82bym%20wycen%C4%99%20wycinki%2Fpiel%C4%99gnacji%20drzewa.%20Przesy%C5%82am%20zdj%C4%99cia%3A",
  },
  // TODO: podaj prawdziwy e-mail, jeśli ma być na stronie (na Oferteo był ukryty).
  email: null as string | null,

  // Opinie - 5,0 w Google (10 opinii) i Oferteo (1 opinia). Najmocniejszy dowód społeczny.
  rating: {
    value: "5,0",
    count: 11,
    source: "Google i Oferteo",
    // TODO: wklej link do wizytówki Google (Mapy Google → Twoja firma → Udostępnij → Kopiuj link)
    url: "",
    oferteoUrl:
      "https://www.oferteo.pl/jakub-graniczny-tree-service/firma/7478432",
  },

  area: {
    base: "Włocławek",
    // Środek i promień (km) koła zasięgu na mapie - edytuj wedle uznania.
    map: { lat: 52.6481, lng: 19.0678, radiusKm: 150 },
    // Z profilu Oferteo - realny zasięg.
    regions: ["kujawsko-pomorskie", "mazowieckie", "wielkopolskie", "łódzkie"],
    cities: [
      "Włocławek",
      "Brześć Kujawski",
      "Kowal",
      "Lubraniec",
      "Toruń",
      "Aleksandrów Kujawski",
      "Ciechocinek",
      "Lipno",
      "Płock",
      "Konin",
    ],
  },

  // Atuty oparte na realnych deklaracjach (Oferteo) - bez zmyślonych liczb.
  trust: [
    "Odpowiednie szkolenia i sprzęt",
    "Praca na wysokości i w ciasnej przestrzeni",
    "Sprzątamy po każdej pracy",
    "Darmowa wycena",
  ],
} as const;

// Opis działalności - słowa właściciela z Oferteo.
export const intro = {
  lead: "Wycinka drzew - prosta i trudna, wymagająca pracy na wysokości lub w ograniczonej przestrzeni. Przycinamy i pielęgnujemy drzewa, rozdrabniamy gałęzie rębakiem, a po wycince usuwamy pnie frezarką.",
  tagline:
    "Działamy sprawnie i bezpiecznie. Mamy odpowiednie szkolenia i sprzęt.",
};

export type Service = { id: string; icon: string; title: string; desc: string };

export const services: Service[] = [
  {
    id: "wycinka",
    icon: "Axe",
    title: "Wycinka drzew",
    desc: "Prosta i trudna - także na wysokości i w ograniczonej przestrzeni, przy budynkach, ogrodzeniach i liniach energetycznych. Tradycyjnie, sekcyjnie (alpinistycznie) lub z podnośnika.",
  },
  {
    id: "frezowanie",
    icon: "CircleDot",
    title: "Frezowanie pni",
    desc: "Po wycince usuwamy pień frezarką, poniżej poziomu gruntu. Teren od razu gotowy pod trawnik, kostkę albo nowe nasadzenia.",
  },
  {
    id: "minikoparka",
    icon: "Shovel",
    title: "Usługi minikoparką",
    desc: "Drobne prace ziemne: wykopy pod nasadzenia i fundamenty, usuwanie korzeni w trudno dostępnych miejscach.",
  },
  {
    id: "sprzatanie",
    icon: "Truck",
    title: "Sprzątanie i wywóz",
    desc: "Po pracy zostaje czysto. Tniemy, zrębkujemy lub wywozimy - zostawiamy teren gotowy do użytku.",
  },
];

export type Step = { number: number; title: string; desc: string };

export const steps: Step[] = [
  {
    number: 1,
    title: "Dzwonisz lub piszesz",
    desc: "Zadzwoń albo wyślij zdjęcie drzewa na WhatsApp. Podaj istotne informacje: lokalizację, wysokość, stan drzewa, czy jest blisko budynku.",
  },
  {
    number: 2,
    title: "Dostajesz wycenę i termin",
    desc: "Otrzymujesz konkretną cenę i proponowany termin - zwykle od ręki. Wycena jest całkowicie darmowa.",
  },
  {
    number: 3,
    title: "Praca i sprzątanie",
    desc: "Przyjeżdżamy ze sprzętem, zabezpieczamy teren i pracujemy bezpiecznie. Po wszystkim sprzątamy - gałęzie zrębkujemy lub zabieramy.",
  },
];

// Galeria realizacji - prawdziwe zdjęcia z public/assets/images/realizacje/.
// w/h = realne wymiary pliku (px) - galeria trzyma dzięki temu dokładne proporcje, bez kadrowania.
export type Work = {
  src: string;
  title: string;
  tag: string;
  w: number;
  h: number;
};

export const works: Work[] = [
  {
    src: "/assets/images/realizacje/wycinka-nad-dachem.jpg",
    title: "Wycinka drzewa nad dachem domu",
    tag: "Praca alpinistyczna",
    w: 899,
    h: 1600,
  },
  {
    src: "/assets/images/realizacje/wycinka-sekcyjna.jpg",
    title: "Wycinka sekcyjna z opuszczaniem kłód",
    tag: "Wycinka sekcyjna",
    w: 1197,
    h: 1600,
  },
  {
    src: "/assets/images/realizacje/podnosnik-koszowy.jpg",
    title: "Cięcie z podnośnika koszowego",
    tag: "Podnośnik",
    w: 1197,
    h: 1600,
  },
  {
    src: "/assets/images/realizacje/frezowanie-pnia.jpg",
    title: "Frezowanie pnia po wycince",
    tag: "Frezowanie",
    w: 1197,
    h: 1600,
  },
  {
    src: "/assets/images/realizacje/wycinka-teren.jpg",
    title: "Wycinka drzew na działce",
    tag: "Wycinka",
    w: 1197,
    h: 1600,
  },
  {
    src: "/assets/images/realizacje/praca-na-wysokosci.jpg",
    title: "Praca w koronie drzewa",
    tag: "Na wysokości",
    w: 1197,
    h: 1600,
  },
  {
    src: "/assets/images/realizacje/wycinka-zima.jpg",
    title: "Cięcie w trudnych warunkach",
    tag: "Interwencja",
    w: 1197,
    h: 1600,
  },
  {
    src: "/assets/images/realizacje/praca-na-wysokosci-2.jpg",
    title: "Zdejmowanie drzewa nad ogrodem",
    tag: "Na wysokości",
    w: 1197,
    h: 1600,
  },
];

// Prawdziwe opinie (wszystkie 5/5) - z Google i Oferteo. Wybrane treściwe - puste/emoji pominięte.
// Bez dat: opinie nie są podpięte pod żadne API, więc „miesiąc temu" itp. z czasem kłamałyby.
export type Testimonial = { name: string; text: string; source?: string };

export const testimonials: Testimonial[] = [
  {
    name: "Zbigniew Ciurski",
    text: "Szybko, sprawnie, z dbałością o bezpieczeństwo. Bardzo profesjonalnie. Z usługi jestem bardzo zadowolony. Przesympatyczny młody człowiek i bardzo fachowy. Gorąco polecam.",
  },
  {
    name: "Michał Turlakiewicz",
    text: "Serdecznie polecam, robota wykonana zgodnie z ustaleniami, dobra komunikacja, posprzątane po pracy.",
  },
  {
    name: "Zofia Gajec",
    text: "Gorąco polecam. Szybko, sprawnie, bez opóźnień.",
  },
  {
    name: "Rafał Mytyk",
    text: "Wszystko poprawnie. Praca szybko wykonana. Polecam.",
  },
  {
    name: "Paulina Szymkowska",
    text: "Polecam - praca wykonana dokładnie i terminowo.",
  },
  {
    name: "Elżbieta",
    text: "Jestem bardzo zadowolona z wykonanej pracy. Praca wykonana profesjonalnie, po wykonaniu zadania wszystko posprzątane. Polecam Pana Jakuba.",
    source: "Oferteo",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Jak szybko możecie przyjechać po zgłoszeniu?",
    a: "Zwykle proponujemy termin w ciągu kilku dni roboczych. W pilnych sytuacjach (np. drzewo po wichurze) reagujemy najszybciej jak się da.",
  },
  {
    q: "Czy sprzątacie po wycince?",
    a: "Tak. Standardowo tniemy drzewo na odcinki i porządkujemy teren po zakończeniu pracy. Zakres sprzątania (wywóz gałęzi, zrębkowanie, frezowanie pni) ustalamy przy wycenie.",
  },
  {
    q: "Czy podejmujecie się trudnych wycinek?",
    a: "Tak - to nasza specjalność. Pracujemy na wysokości i w ograniczonej przestrzeni, przy budynkach i ogrodzeniach, z odpowiednim sprzętem i przeszkoleniem. Drzewo zdejmujemy sekcyjnie, kontrolując każdą kłodę.",
  },
  {
    q: "Ile kosztuje wycena?",
    a: "Wycena jest całkowicie darmowa - przez telefon, na podstawie zdjęć z WhatsApp, a w razie potrzeby także na miejscu.",
  },
  {
    q: "Od czego zależy cena wycinki?",
    a: "Najwięcej zależy od wysokości i kondycji drzewa, dostępu do miejsca oraz ryzyka dla otoczenia - budynków, linii energetycznych, ogrodzeń. Dlatego najlepiej zadzwonić albo wysłać zdjęcie.",
  },
];
