export const site = {
  name: "Lorent Webworks",
  url: "https://www.lorentwebworks.nl",
  locale: "nl_NL",
  founder: "Tim Lorent",
  role: "Senior frontend developer",
  city: "Amsterdam",
  country: "NL",
  // TODO: controleren
  linkedin: "https://www.linkedin.com/in/timlorent",
  // TODO: controleren (overgenomen uit de vorige site)
  kvk: "98545698",
  // Formspree-formulier. Overschrijfbaar met PUBLIC_FORM_ENDPOINT (zie .env.example).
  formEndpoint:
    import.meta.env.PUBLIC_FORM_ENDPOINT || "https://formspree.io/f/meepgagp",
} as const;

/** Vaste @id's voor structured data, zodat pagina's naar dezelfde entiteiten verwijzen. */
export const schemaIds = {
  organization: `${site.url}/#organisatie`,
  person: `${site.url}/#tim`,
  website: `${site.url}/#website`,
};

export const personSchema = {
  "@type": "Person",
  "@id": schemaIds.person,
  name: site.founder,
  jobTitle: site.role,
  url: site.linkedin,
  sameAs: [site.linkedin],
};
