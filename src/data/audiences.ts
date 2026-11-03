import type { icons } from "../lib/icons.mjs";

type IconName = keyof typeof icons;

export type Audience = {
  title: string;
  goal: string;
  want: string;
  approach: string;
  icon: IconName;
};

export const audiences: Audience[] = [
  {
    title: "Zzp'ers en starters",
    goal: "Doel: aanvragen",
    want: "Je wilt snel professioneel online staan en je eerste opdrachten binnenhalen.",
    approach:
      "Ik bouw een pagina die in één oogopslag laat zien wat je doet en voor wie, met je werk, je aanpak en een contactknop die altijd in beeld is.",
    icon: "briefcase",
  },
  {
    title: "Adviseurs en consultants",
    goal: "Doel: kennismakingsgesprekken",
    want: "Opdrachtgevers willen zien dat je hun vraagstuk begrijpt voordat ze contact opnemen.",
    approach:
      "Ik zet je expertise, werkwijze en resultaten helder neer en koppel je agenda, zodat een gesprek plannen één klik is.",
    icon: "chat",
  },
  {
    title: "Coaches en therapeuten",
    goal: "Doel: intakes",
    want: "Mensen zoeken iemand bij wie ze zich veilig voelen en willen weten wat een traject inhoudt.",
    approach:
      "Ik maak een rustige site met jouw verhaal, je werkwijze, tarieven en een laagdrempelige manier om een intake te plannen.",
    icon: "sprout",
  },
  {
    title: "Goede doelen en ngo's",
    goal: "Doel: donaties en vrijwilligers",
    want: "Je wilt dat bezoekers je missie snappen en meteen kunnen bijdragen.",
    approach:
      "Ik laat je impact zien met verhalen en cijfers, koppel je doneerplatform en maak aanmelden als vrijwilliger eenvoudig.",
    icon: "heart",
  },
  {
    title: "Horeca",
    goal: "Doel: reserveringen",
    want: "Gasten willen de kaart zien, de sfeer proeven en een tafel boeken, meestal op hun telefoon.",
    approach:
      "Ik bouw een snelle mobiele site met menukaart, openingstijden, sfeerbeelden en je reserveringssysteem direct op de pagina.",
    icon: "cutlery",
  },
  {
    title: "Scholen en opleiders",
    goal: "Doel: aanmeldingen",
    want: "Studenten en ouders vergelijken opleidingen en willen snel weten waar ze aan toe zijn.",
    approach:
      "Ik maak overzichtelijke pagina's met inhoud, data en kosten, en een aanmeldformulier of inschrijving voor de open dag.",
    icon: "cap",
  },
  {
    title: "Winkels en salons",
    goal: "Doel: afspraken en winkelbezoek",
    want: "Klanten willen weten wat je aanbiedt, waar je zit en wanneer ze terecht kunnen.",
    approach:
      "Ik zet je aanbod, prijzen, route en openingstijden overzichtelijk neer en koppel je boekingssysteem, zodat je ook goed gevonden wordt in de buurt.",
    icon: "store",
  },
  {
    title: "Creatieven",
    goal: "Doel: opdrachten",
    want: "Je werk moet voor zich spreken en potentiële opdrachtgevers moeten direct zien wat je kunt.",
    approach:
      "Ik bouw een portfolio waarin je werk groot en snel in beeld komt, met per project het verhaal erachter en een duidelijke weg naar een aanvraag.",
    icon: "pen",
  },
  {
    title: "Maatschappelijke initiatieven",
    goal: "Doel: deelnemers en steun",
    want: "Je wilt buurtbewoners, deelnemers en partners bereiken die je nog niet kennen.",
    approach:
      "Ik maak een site met je activiteiten, een agenda, aanmelden voor activiteiten of nieuwsbrief en een plek voor partners en sponsors.",
    icon: "people",
  },
];
