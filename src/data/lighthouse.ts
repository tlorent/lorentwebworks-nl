// Lighthouse-scores van deze site. Bij een nieuwe meting pas je alleen dit bestand aan.
// De pill, de card en de gidspagina lezen allemaal uit hier.

export const scores = [
  { label: "Snelheid", score: 100, hint: "Performance" },
  { label: "Toegankelijkheid", score: 100, hint: "Automatische test" },
  { label: "Vindbaarheid", score: 100, hint: "Technische basis" },
  { label: "Best practices", score: 100, hint: "Techniek en veiligheid" },
];

export const measured = "5 november 2026";
export const device = "desktop";
export const reportUrl =
  "https://pagespeed.web.dev/analysis/https-www-lorentwebworks-nl/tjdw68yhbt?form_factor=desktop";
export const guideUrl = "/lighthouse-score/";

/** Laagste score, voor de kop: "scoort 100" of "scoort minimaal {laagste}". */
export const laagste = Math.min(...scores.map((s) => s.score));
