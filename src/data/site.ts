export const site = {
  name: "Lorent Webworks",
  url: "https://www.lorentwebworks.nl",
  locale: "nl_NL",
  founder: "Tim Lorent",
  role: "Senior frontend developer",
  city: "Amsterdam",
  country: "NL",
  linkedin: "https://www.linkedin.com/in/timlorent",
  instagram: "https://www.instagram.com/lorentwebworks/",
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
  url: `${site.url}/over/`,
  description:
    "Senior frontend developer met 8+ jaar ervaring bij onder meer bol., GrandVision en T-Mobile. Bouwt via Lorent Webworks websites voor zzp'ers, ondernemers en stichtingen.",
  knowsAbout: [
    "Webdesign",
    "Websites voor zzp'ers en kleine ondernemers",
    "Websites voor goede doelen en stichtingen",
    "Zoekmachineoptimalisatie",
    "Digitale toegankelijkheid",
    "Astro",
  ],
  worksFor: { "@id": schemaIds.organization },
  sameAs: [site.linkedin],
};

/** Organisatie en website als korte knopen, voor pagina's die de volledige homepage-graph niet tonen. */
export const organizationSchema = {
  "@type": "ProfessionalService",
  "@id": schemaIds.organization,
  name: site.name,
  url: `${site.url}/`,
  logo: `${site.url}/android-chrome-512x512.png`,
  founder: { "@id": schemaIds.person },
  areaServed: { "@type": "Country", name: "Netherlands" },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: site.country,
  },
  sameAs: [site.linkedin, site.instagram],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": schemaIds.website,
  url: `${site.url}/`,
  name: site.name,
  inLanguage: "nl-NL",
  publisher: { "@id": schemaIds.organization },
};
