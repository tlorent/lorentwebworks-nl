import {
  formatPrice,
  improvements,
  nonprofitDiscount,
  services,
} from "./services";

export type FaqItem = { q: string; a: string };

const [lp, bw] = services;

export const faq: FaqItem[] = [
  {
    q: "Wat kost een website laten maken?",
    a: `Een landingspagina kost bij mij vanaf ${formatPrice(lp.price)} en een complete website van vier tot zes pagina's vanaf ${formatPrice(bw.price)}. Beide bedragen zijn eenmalig en excl. btw. Goede doelen en stichtingen krijgen ${nonprofitDiscount}% korting.`,
  },
  {
    q: "Wat als ik al een website heb?",
    a: `Dan begin je meestal met een websitecheck van ${formatPrice(improvements[0].price)}. Je krijgt de 10 belangrijkste verbeterpunten op volgorde van belang en we lopen ze samen door. Boek je binnen 30 dagen een landingspagina of een complete website, dan gaat de ${formatPrice(improvements[0].price)} van die factuur af.`,
  },
  {
    q: "Hoe lang duurt het?",
    a: `Een landingspagina staat binnen 5 werkdagen live, een complete website binnen 3 tot 4 weken. Dat tempo halen we als je input en foto's op tijd binnen zijn.`,
  },
  {
    q: "Moet ik zelf de teksten schrijven?",
    a: "Ja, je levert de teksten zelf aan, want niemand kent jouw klanten zo goed als jij. Je krijgt van mij een lijst met vragen per pagina, zodat je weet wat er nodig is. Ik lees mee en zorg dat de teksten goed vindbaar zijn in Google.",
  },
  {
    q: "Word ik gevonden in Google en ChatGPT?",
    a: "Ik bouw elke site zo dat zoekmachines en AI-assistenten snel begrijpen wat je doet, voor wie en waar. Elke pagina krijgt een eigen titel en omschrijving, een duidelijke kopstructuur en gestructureerde gegevens, en de site laadt snel. Een vaste plek bovenaan kan niemand beloven.",
  },
  {
    q: "Van wie is de website na de oplevering?",
    a: "Van jou. Domeinnaam, site en accounts staan op jouw naam, en je zit aan geen abonnement vast.",
  },
  {
    q: "Kan ik later dingen laten aanpassen?",
    a: "Ja. Kleine dingen pas je zelf aan, dat laat ik je zien. Voor grotere wijzigingen spreken we vooraf een vaste prijs af.",
  },
  {
    q: "Bouw je ook webshops?",
    a: "Webshops bouw ik niet. Ik richt me op websites die bezoekers informeren en laten contact opnemen, boeken of aanmelden.",
  },
  {
    q: "Krijgen goede doelen korting?",
    a: `Ja, ${nonprofitDiscount}% op de landingspagina en de complete website. Je stuurt een ANBI-beschikking of een KvK-inschrijving als stichting of vereniging mee.`,
  },
  {
    q: "Werk je alleen in Amsterdam?",
    a: "Ik werk vanuit Amsterdam voor klanten in heel Nederland. In en rond Amsterdam kom ik graag langs, verder spreken we af via video.",
  },
];

/** Vragen op /website-verbeteren/. */
export const verbeterFaq: FaqItem[] = [
  {
    q: "Wat is een websitecheck?",
    a: `Ik loop je bestaande website door op boodschap, structuur, snelheid, vindbaarheid en contact. Je krijgt de 10 belangrijkste verbeterpunten op volgorde van belang, en in een gesprek van 30 minuten lopen we ze samen door. De websitecheck kost ${formatPrice(improvements[0].price)}, excl. btw.`,
  },
  {
    q: "Wordt de websitecheck verrekend?",
    a: `Ja. Boek je binnen 30 dagen na het gesprek een landingspagina of een complete website, dan gaat de ${formatPrice(improvements[0].price)} van die factuur af.`,
  },
  {
    q: "Welke dienst past bij mij?",
    a: `Wil je weten wat er beter kan, kies dan de websitecheck. Wil je dat ik de verbeteringen uitvoer, kies dan de verbeterronde: tot 6 uur werk voor ${formatPrice(improvements[1].price)}. Wil je zelf aan de slag met hulp bij je vragen, kies dan het vraaguur van ${formatPrice(improvements[2].price)}.`,
  },
];
