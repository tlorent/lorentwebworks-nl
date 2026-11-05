import { formatPrice, nonprofitDiscount, services } from "./services";

export type FaqItem = { q: string; a: string };

const [lp, bw] = services;

export const faq: FaqItem[] = [
  {
    q: "Wat kost een website laten maken?",
    a: `Een landingspagina kost bij mij vanaf ${formatPrice(lp.price)} en een complete website van vier tot zes pagina's vanaf ${formatPrice(bw.price)}. Beide bedragen zijn eenmalig en excl. btw. Goede doelen en stichtingen krijgen ${nonprofitDiscount}% korting.`,
  },
  {
    q: "Hoe lang duurt het?",
    a: `Een landingspagina staat binnen 5 werkdagen live, een bedrijfswebsite binnen 3 tot 4 weken. Dat tempo halen we als je input en foto's op tijd binnen zijn.`,
  },
  {
    q: "Moet ik zelf de teksten schrijven?",
    a: "Ja, je levert de teksten zelf aan, want niemand kent jouw klanten zo goed als jij. Je krijgt van mij een lijst met vragen per pagina, zodat je weet wat er nodig is. Ik lees mee en zorg dat de teksten goed vindbaar zijn in Google. Wil je het schrijven helemaal uit handen geven? Dan schrijf ik alle teksten tegen een meerprijs.",
  },
  {
    q: "Word ik gevonden in Google en ChatGPT?",
    a: "Ik bouw elke site zo dat zoekmachines en AI-assistenten goed begrijpen wat je doet en voor wie. Een vaste plek bovenaan kan niemand beloven. Een korte, duidelijke opbouw helpt zoekmachines en AI-assistenten begrijpen wat je doet.",
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
