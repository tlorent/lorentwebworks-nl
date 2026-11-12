// Alle prijzen, inhoud van de opties en extra's. Wijzig prijzen alleen hier; de site rekent de rest uit.

const priceFormat = new Intl.NumberFormat("nl-NL", {
  maximumFractionDigits: 0,
});

/** Bijvoorbeeld "€1.750" (zonder spatie achter het eurosymbool). */
export function formatPrice(price: number): string {
  return `€${priceFormat.format(price)}`;
}

export type Service = {
  id: "landingspagina" | "bedrijfswebsite";
  label: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  included: string[];
  notIncluded: string;
  /** Drie voordelen voor de homepage-kaart. */
  highlights: string[];
  variant: "light" | "inverse";
};

export const prices = {
  landingspagina: 950,
  bedrijfswebsite: 2150,
  extraPagina: 295,
  tool: 95,
  websitecheck: 245,
  verbeterronde: 595,
  vraaguur: 125,
};

export const services: Service[] = [
  {
    id: "landingspagina",
    label: "Voor als je snel online wilt",
    name: "Landingspagina",
    description:
      "Eén pagina met wat je doet, voor wie, en een knop naar contact. Ideaal als je snel online wilt.",
    price: prices.landingspagina,
    duration: "Live binnen 5 werkdagen",
    included: [
      "Kennismakingsgesprek over doel en doelgroep",
      "Jij levert de teksten aan",
      "Een CMS gekoppeld, zodat je zelf de teksten kunt aanpassen",
      "Ontwerp op maat",
      "Opgezet om gevonden te worden in Google en AI-assistenten",
      "Snel en prettig op mobiel",
      "Eén revisieronde",
    ],
    notIncluded: "Extra pagina's en metingen.",
    highlights: [
      "Ontwerp op maat",
      "Zelf teksten aanpassen via een CMS",
      "Gebouwd om gevonden te worden in Google en AI-assistenten",
    ],
    variant: "light",
  },
  {
    id: "bedrijfswebsite",
    label: "Voor als je meer te vertellen hebt",
    name: "Complete website",
    description:
      "Vier tot zes pagina's voor als je meer te vertellen hebt: je diensten, je werkwijze, jezelf of je team.",
    price: prices.bedrijfswebsite,
    duration: "Live binnen 3 tot 4 weken",
    included: [
      "Alles uit de landingspagina",
      "4 tot 6 pagina's, elk met eigen teksten en opbouw",
      "Een CMS gekoppeld, zodat je zelf de teksten kunt aanpassen",
      "SEO per pagina",
      "Metingen die laten zien wat de site oplevert",
      "1 bestaande boekings-, doneer- of nieuwsbrieftool plaatsen",
      "Eén revisieronde",
    ],
    notIncluded: "Extra pagina's.",
    highlights: [
      "4 tot 6 pagina's, elk met eigen opbouw",
      "Je boekings-, doneer- of nieuwsbrieftool gekoppeld",
      "Metingen die laten zien wat je site oplevert",
    ],
    variant: "inverse",
  },
];

/** Extra's, los te bestellen bij een optie. */
export const extras = [
  {
    label: "Extra pagina",
    price: prices.extraPagina,
    unit: "per pagina, excl. btw",
  },
  {
    label: "Boekings-, doneer- of nieuwsbrieftool plaatsen",
    price: prices.tool,
    unit: "per tool, excl. btw",
  },
];

/** Vergelijking van de twee opties, op de tarievenpagina. */
export const packageRows: {
  label: string;
  landingspagina: string;
  bedrijfswebsite: string;
}[] = [
  {
    label: "Omvang",
    landingspagina: "1 pagina in 1 taal",
    bedrijfswebsite: "4 tot 6 pagina's in 1 taal",
  },
  {
    label: "Levertijd",
    landingspagina: "Live binnen 5 werkdagen nadat je input compleet is",
    bedrijfswebsite: "Live binnen 3 tot 4 weken nadat je input compleet is",
  },
  {
    label: "Teksten",
    landingspagina: "Jij levert aan",
    bedrijfswebsite: "Jij levert aan",
  },
  {
    label: "CMS",
    landingspagina: "Gekoppeld, zodat je zelf teksten aanpast",
    bedrijfswebsite: "Gekoppeld, zodat je zelf teksten aanpast",
  },
  {
    label: "Vindbaarheid",
    landingspagina: "Opgezet voor Google en AI-assistenten",
    bedrijfswebsite: "SEO per pagina",
  },
  {
    label: "Formulier",
    landingspagina: "1 contactformulier",
    bedrijfswebsite: "1 contactformulier",
  },
  {
    label: "Boekings-, doneer- of nieuwsbrieftool",
    landingspagina: "Niet inbegrepen",
    bedrijfswebsite: "1 tool inbegrepen",
  },
  {
    label: "Metingen",
    landingspagina: "Niet inbegrepen",
    bedrijfswebsite: "Inbegrepen",
  },
  {
    label: "Feedback",
    landingspagina: "1 gebundelde ronde",
    bedrijfswebsite: "1 gebundelde ronde",
  },
  {
    label: "Oplevering",
    landingspagina: "Korte uitleg",
    bedrijfswebsite: "Korte uitleg",
  },
];

/** Onderhoudsabonnement, per maand, excl. btw. */
export const maintenance = { name: "Onderhoudsabonnement", price: 50 };

/** Diensten voor bestaande websites, op de pagina website-verbeteren. */
export const improvements: {
  id: "websitecheck" | "verbeterronde" | "vraaguur";
  name: string;
  cta: string;
  label: string;
  /** Beschrijving voor structured data. Niet zichtbaar op de pagina. */
  schemaDescription: string;
  price: number;
  variant: "light" | "inverse";
  included: string[];
  note: string;
}[] = [
  {
    id: "websitecheck",
    name: "Websitecheck",
    cta: "Boek websitecheck",
    label: "Eerst zien waar het misgaat",
    schemaDescription:
      "Check van een bestaande website op boodschap, structuur, snelheid, vindbaarheid en contact. Je krijgt de 10 belangrijkste verbeterpunten op volgorde van belang en een gesprek van 30 minuten. Wordt verrekend bij een landingspagina of complete website binnen 30 dagen.",
    price: prices.websitecheck,
    variant: "light",
    included: [
      "Check op boodschap, structuur, snelheid, vindbaarheid en contact",
      "De tien belangrijkste verbeteringen, op volgorde",
      "30 minuten om de verbeteringen door te nemen",
    ],
    note: "Wordt verrekend bij een landingspagina of complete website binnen 30 dagen.",
  },
  {
    id: "verbeterronde",
    name: "Verbeterronde",
    cta: "Plan een verbeterronde",
    label: "Verbeteren in één ronde",
    schemaDescription:
      "30 minuten om te bepalen wat er moet veranderen, daarna tot 6 uur werk aan tekst, structuur, snelheid of vindbaarheid van een bestaande website, met een overzicht van alle wijzigingen.",
    price: prices.verbeterronde,
    variant: "inverse",
    included: [
      "30 minuten om te bepalen wat er moet veranderen, daarna een afsprakenlijst",
      "Tot 6 uur werk aan tekst, structuur, snelheid of vindbaarheid",
    ],
    note: "",
  },
  {
    id: "vraaguur",
    name: "Vraaguur",
    cta: "Boek een vraaguur",
    label: "Vragen stellen en een volgende stap kiezen",
    schemaDescription:
      "60 minuten samen naar je website kijken, antwoord op je vragen en een afgesproken volgende stap.",
    price: prices.vraaguur,
    variant: "light",
    included: [
      "60 minuten samen naar je site kijken",
      "Antwoord op je vragen",
      "We bepalen samen de volgende stap",
    ],
    note: "",
  },
];

/** Korting voor goede doelen, in procenten. Geldt voor de opties. */
export const nonprofitDiscount = 10;
