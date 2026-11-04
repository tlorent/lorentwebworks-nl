// Alle prijzen, pakketinhoud en extra's. Wijzig prijzen alleen hier; de site rekent de rest uit.

const priceFormat = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

/** Bijvoorbeeld "€ 1.750". */
export function formatPrice(price: number): string {
  return priceFormat.format(price);
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
  variant: "light" | "inverse";
};

export const prices = {
  landingspagina: 850,
  bedrijfswebsite: 1750,
  extraPagina: 295,
  teksten: 150,
  tool: 95,
  zelfAanpassen: 295,
  extraRonde: 125,
  googleProfiel: 125,
  websitecheck: 195,
  verbeterronde: 595,
  vraaguur: 125,
};

export const services: Service[] = [
  {
    id: "landingspagina",
    label: "Voor als je snel online wilt",
    name: "De Landingspagina",
    description:
      "Eén pagina die in een paar seconden laat zien wat je doet en bezoekers laat contact opnemen. Ideaal als je snel online wilt.",
    price: prices.landingspagina,
    duration: "Live binnen 5 werkdagen",
    included: [
      "Kennismakingsgesprek over doel en doelgroep",
      "Jij levert de teksten aan, ik help waar nodig (alle teksten laten schrijven kan tegen meerprijs)",
      "Ontwerp op maat",
      "Opgezet om gevonden te worden in Google en AI-assistenten",
      "Snel en prettig op mobiel",
      "Eén revisieronde",
    ],
    notIncluded:
      "Extra pagina's, een bestaande tool plaatsen, metingen en zelf aanpassen.",
    variant: "light",
  },
  {
    id: "bedrijfswebsite",
    label: "Voor als je meer te vertellen hebt",
    name: "De Bedrijfswebsite",
    description:
      "Vier tot zes pagina's voor als je meer te vertellen hebt: je diensten, je werkwijze, jezelf of je team.",
    price: prices.bedrijfswebsite,
    duration: "Live binnen 3 tot 4 weken",
    included: [
      "Alles uit de Landingspagina",
      "4 tot 6 pagina's op maat",
      "SEO per pagina",
      "Metingen die laten zien wat de site oplevert",
      "1 bestaande boekings-, doneer- of nieuwsbrieftool plaatsen",
      "Eén revisieronde",
    ],
    notIncluded:
      "Extra pagina's, teksten laten schrijven en extra feedbackrondes.",
    variant: "inverse",
  },
];

/** Extra's, los te bestellen bij een pakket. */
export const extras = [
  { label: "Extra pagina", price: prices.extraPagina, unit: "" },
  {
    label: "Teksten laten schrijven",
    price: prices.teksten,
    unit: "per pagina",
  },
  {
    label: "Boekings-, doneer- of nieuwsbrieftool plaatsen",
    price: prices.tool,
    unit: "",
  },
  {
    label: "Zelf aanpassen op de Landingspagina",
    price: prices.zelfAanpassen,
    unit: "",
  },
  { label: "Extra feedbackronde", price: prices.extraRonde, unit: "" },
  {
    label: "Google Bedrijfsprofiel inrichten",
    price: prices.googleProfiel,
    unit: "",
  },
];

/** Vergelijking van de twee pakketten, op de tarievenpagina. */
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
    landingspagina: "Jij levert aan, ik help waar nodig",
    bedrijfswebsite: "Jij levert aan, ik help waar nodig",
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
    label: "Bestaande tool plaatsen",
    landingspagina: `Extra, ${formatPrice(prices.tool)}`,
    bedrijfswebsite: "1 tool inbegrepen",
  },
  {
    label: "Metingen",
    landingspagina: "Niet inbegrepen",
    bedrijfswebsite: "Inbegrepen",
  },
  {
    label: "Zelf aanpassen",
    landingspagina: `Extra, ${formatPrice(prices.zelfAanpassen)}`,
    bedrijfswebsite: "Niet inbegrepen",
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
  name: string;
  cta: string;
  label: string;
  price: number;
  variant: "light" | "inverse";
  included: string[];
  note: string;
}[] = [
  {
    name: "Websitecheck",
    cta: "Boek websitecheck",
    label: "Eerst zien waar het misgaat",
    price: prices.websitecheck,
    variant: "light",
    included: [
      "Check op boodschap, structuur, snelheid, vindbaarheid en contact",
      "De tien belangrijkste verbeteringen, op volgorde",
      "30 minuten om de verbeteringen door te nemen",
    ],
    note: "",
  },
  {
    name: "Verbeterronde",
    cta: "Plan een verbeterronde",
    label: "Verbeteren in één ronde",
    price: prices.verbeterronde,
    variant: "inverse",
    included: [
      "Vooraf een lijst met afspraken",
      "Tot 6 uur werk aan tekst, structuur, snelheid of vindbaarheid",
    ],
    note: "",
  },
  {
    name: "Vraaguur",
    cta: "Boek een vraaguur",
    label: "Vragen stellen en een volgende stap kiezen",
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

/** Korting voor goede doelen, in procenten. Geldt voor de pakketten. */
export const nonprofitDiscount = 20;
