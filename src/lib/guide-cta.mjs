// Standaardtekst van de kennismakings-CTA. Gebruikt door GuideCta.astro en de CTA halverwege elke gids.
export const defaultCta = {
  title: "Liever dat iemand het voor je regelt?",
  text: "In een gratis kennismaking van 30 minuten kijken we wat jouw website moet opleveren en wat dat kost.",
  button: "Plan een kennismaking",
};

// Klassen van het CTA-blok, gedeeld door GuideCta.astro en de rehype-plugin.
export const ctaClass = {
  box: "on-block rounded-panel p-6 md:p-10",
  title: "text-heading font-stretch-115%",
  text: "mt-3 max-w-xl text-on-block-muted",
};
