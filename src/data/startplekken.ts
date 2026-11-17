// Startplekken: de eerste drie klanten krijgen het startklanttarief.
// Pas `beschikbaar` met de hand aan zodra een plek vergeven is. Alleen echte aantallen.
// Bij 0 wordt de balk "Alle startplekken zijn vergeven", gaan de prijzen naar het normale tarief
// en verdwijnen de sectie "Word startklant", de formulieroptie en de FAQ-vragen over startplekken.

export const startplekken = {
  periode: "voorjaar 2027",
  totaal: 3,
  beschikbaar: 3,
};

/** True zolang er nog startplekken vrij zijn. */
export const startOpen = startplekken.beschikbaar > 0;

/** Id van de sectie "Word startklant" op /website-bouwen/. */
export const startAnchor = "startklant";

/** Bijvoorbeeld "Nog 3 startplekken voor voorjaar 2027" (of "Nog 1 startplek ..."). */
export const startplekkenRest = `Nog ${startplekken.beschikbaar} ${
  startplekken.beschikbaar === 1 ? "startplek" : "startplekken"
} voor ${startplekken.periode}`;
