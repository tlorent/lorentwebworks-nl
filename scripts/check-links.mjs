// Controleert de gebouwde site (dist/):
// 1. Elke interne link en elk intern bestand in de HTML bestaat.
// 2. Elke redirect in vercel.json heeft als eerste passende regel het juiste eindadres, en dat adres bestaat.
// Gebruik: pnpm build && pnpm check:links
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const dist = "dist";
const failures = [];

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

// Vercel met trailingSlash: "/gids/x/" -> dist/gids/x/index.html, "/a.png" -> dist/a.png.
const resolvesInDist = (pathname) => {
  const clean = decodeURIComponent(pathname.split(/[?#]/)[0]);
  const candidates = clean.endsWith("/")
    ? [join(dist, clean, "index.html")]
    : [
        join(dist, clean),
        join(dist, clean, "index.html"),
        join(dist, `${clean}.html`),
      ];
  return candidates.some((c) => existsSync(c) && statSync(c).isFile());
};

// 1. Interne links in de HTML.
const htmlFiles = walk(dist).filter((f) => f.endsWith(".html"));
let linkCount = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const [, url] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:|#)/.test(url)) continue;
    if (!url.startsWith("/")) continue;
    linkCount += 1;
    if (!resolvesInDist(url)) {
      failures.push(`${relative(dist, file)}: ${url} bestaat niet`);
    }
  }
}

// 2. Redirects.
const { redirects: allRedirects } = JSON.parse(
  readFileSync("vercel.json", "utf8"),
);
// Regels met een host-voorwaarde (het domein naar www) zijn voor deze controle niet relevant.
const redirects = allRedirects.filter((r) => !r.has);
const toRegex = (source) =>
  new RegExp(
    `^${source.replace(/\/:path\*$/, "(?:/(.*))?").replace(/\//g, "\\/")}$`,
  );

// Voorbeeldpaden: de bron zelf, en voor wildcards ook een voorbeeld met een subpad.
const samples = [];
for (const r of redirects) {
  if (r.source.includes(":path*")) {
    samples.push(r.source.replace(":path*", "onderpagina"));
  } else {
    samples.push(r.source);
  }
}
for (const sample of samples) {
  const rule = redirects.find((r) => toRegex(r.source).test(sample));
  if (!rule) {
    failures.push(`redirect: geen regel voor ${sample}`);
    continue;
  }
  const match = sample.match(toRegex(rule.source));
  const target = rule.destination.replace(":path*", match?.[1] ?? "");
  if (!resolvesInDist(target)) {
    failures.push(`redirect: ${sample} -> ${target} bestaat niet`);
  }
}

// Het oude adres van elke gids moet naar de juiste gids gaan.
const expected = {
  "/diensten/landingspagina": "/tarieven/",
  "/diensten/bedrijfswebsite": "/tarieven/",
  "/diensten/website-audit": "/website-verbeteren/",
  "/website-laten-maken": "/gids/website-laten-maken/",
  "/webdesigner-kiezen/": "/gids/webdesigner-kiezen/",
};
for (const [from, to] of Object.entries(expected)) {
  const rule = redirects.find((r) => toRegex(r.source).test(from));
  if (rule?.destination !== to) {
    failures.push(
      `redirect: ${from} hoort naar ${to}, gevonden: ${rule?.destination}`,
    );
  }
}

console.log(
  `check:links: ${linkCount} interne links in ${htmlFiles.length} pagina's, ${redirects.length} redirects.`,
);
if (failures.length) {
  console.error(`Mislukt (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log("check:links: alles klopt.");
