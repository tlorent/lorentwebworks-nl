import type { icons } from "../lib/icons.mjs";

type IconName = keyof typeof icons;

export type Audience = {
  title: string;
  forWho: string;
  text: string;
  icon: IconName;
};

// Vier kaarten, altijd zichtbaar. De teksten staan letterlijk in de brief.
export const audiences: Audience[] = [
  {
    title: "Aanvragen en opdrachten",
    forWho: "Zzp'ers, starters, adviseurs en creatieven",
    text: "Bezoekers zien snel wat je doet, voor wie en welk werk je eerder deed. Daarna is contact opnemen of een gesprek plannen één klik.",
    icon: "chat",
  },
  {
    title: "Intakes en afspraken",
    forWho: "Coaches, therapeuten en salons",
    text: "Je site laat zien wie je bent, hoe je werkt en wat het kost. Zo voelt de eerste stap klein en plannen mensen makkelijk een afspraak.",
    icon: "sprout",
  },
  {
    title: "Reserveringen en bezoekers",
    forWho: "Horeca en winkels",
    text: "Op mobiel vinden gasten direct je kaart of aanbod, openingstijden en route, met de reserveer- of boekingsknop van je eigen systeem.",
    icon: "cutlery",
  },
  {
    title: "Donaties en aanmeldingen",
    forWho: "Goede doelen, stichtingen, scholen en initiatieven",
    text: "Bezoekers snappen snel je missie of aanbod en kunnen meteen doneren, zich aanmelden of meedoen.",
    icon: "heart",
  },
];
