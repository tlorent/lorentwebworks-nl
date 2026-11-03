export type Service = {
  id: "landingspagina" | "bedrijfswebsite";
  label: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  included: string[];
  variant: "light" | "inverse";
};

export const services: Service[] = [
  {
    id: "landingspagina",
    label: "Voor als je snel online wilt",
    name: "De Landingspagina",
    description:
      "Eén pagina die in een paar seconden laat zien wat je doet en bezoekers laat contact opnemen. Ideaal als je snel online wilt.",
    price: 850,
    duration: "Live binnen 5 werkdagen",
    included: [
      "Kennismakingsgesprek over doel en doelgroep",
      "Jij levert de teksten aan, ik help waar nodig (alle teksten laten schrijven kan tegen meerprijs)",
      "Ontwerp op maat",
      "Opgezet om gevonden te worden in Google en AI-assistenten",
      "Snel en prettig op mobiel",
      "Eén revisieronde",
    ],
    variant: "light",
  },
  {
    id: "bedrijfswebsite",
    label: "Voor als je meer te vertellen hebt",
    name: "De Bedrijfswebsite",
    description:
      "Vier tot zes pagina's voor als je meer te vertellen hebt: je diensten, je werkwijze, jezelf of je team.",
    price: 1750,
    duration: "Live binnen 3 tot 4 weken",
    included: [
      "Alles uit de Landingspagina",
      "4 tot 6 pagina's op maat",
      "SEO per pagina",
      "Metingen die laten zien wat de site oplevert",
      "Twee revisierondes",
      "Zelf nieuws of updates plaatsen, waar dat nodig is",
    ],
    variant: "inverse",
  },
];

const priceFormat = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

/** Bijvoorbeeld "€ 1.750". */
export const formatPrice = (price: number) => priceFormat.format(price);
