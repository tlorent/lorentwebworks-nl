// Vaste waarden voor de hele site. Tim wijzigt ze hier, de pagina's volgen.
// Een lege waarde betekent: nog niet ingevuld. Dan verdwijnt het onderdeel en gaan knoppen naar het formulier.

/** {{CAL_URL}}: Cal.com-link voor de kennismaking van 30 minuten. */
export const bookingUrl = "";

/** {{BTW_ID}}: btw-identificatienummer, voor de footer. Bijvoorbeeld "NL000000000B01". */
export const btwId = "";

/** {{HOSTING_PRIJS}}: hostingprijs per maand, bijvoorbeeld "€ 15". */
export const hostingPrice = "";

/**
 * Waar een kennismakingsknop naartoe gaat.
 * Met een boekingslink gaat de knop naar die link, in een nieuw tabblad.
 * Zonder link gaat de knop naar het formulier op de pagina.
 * @param {string} [base] "/" op pagina's die niet de homepage zijn.
 * @returns {{ href: string, external: boolean }}
 */
export const bookingLink = (base = "") =>
  bookingUrl
    ? { href: bookingUrl, external: true }
    : { href: `${base}#contact`, external: false };
