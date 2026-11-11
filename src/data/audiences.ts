export type Audience = {
  title: string;
  forWho: string;
  text: string;
};

// Vier rijen, altijd zichtbaar.
export const audiences: Audience[] = [
  {
    title: "Aanvragen en opdrachten",
    forWho: "Zzp’ers, adviseurs en creatieven",
    text: "Laat zien wat je doet en maak contact opnemen makkelijk.",
  },
  {
    title: "Intakes en afspraken",
    forWho: "Coaches, therapeuten en salons",
    text: "Een eerste afspraak die vertrouwd voelt.",
  },
  {
    title: "Reserveringen en bezoekers",
    forWho: "Horeca en winkels",
    text: "Kaart, openingstijden en reserveren, direct op je telefoon.",
  },
  {
    title: "Donaties en aanmeldingen",
    forWho: "Goede doelen en stichtingen",
    text: "Je missie in één oogopslag, doneren in één klik.",
  },
];
