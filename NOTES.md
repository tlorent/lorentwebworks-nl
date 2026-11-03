# Bouwnotities

Keuzes die niet (helemaal) in de bouwopdracht stonden, of waar ik bewust van de letter afwijk.

## Techniek

- **Astro 7.4 + Tailwind 4.3.** Astro 7 gebruikt standaard een nieuwe Markdown-processor (Sätteri). Voor de CTA halverwege elke gids draait een kleine rehype-plugin (`src/lib/rehype-guide-cta.mjs`) via `unified()` uit `@astrojs/markdown-remark`.
- **Font:** Archivo variabel, alleen de Latin-subset en alleen de gebruikte assen (gewicht 400 tot 800, breedte 100% tot 125%): 59 kB in plaats van 90 kB. Staat in `public/fonts/` en wordt gepreload. Een fallback-`@font-face` ("Archivo Fallback", Arial met `size-adjust` en `ascent-override`) voorkomt verspringende tekst (CLS) tijdens het laden.
- **Design tokens:** alle kleuren, radii, tekstgroottes (met regelhoogte, letterafstand en gewicht) en schaduwen staan in `@theme` in `global.css`. Terugkerende patronen zijn utilities: `container-page`, `container-narrow`, `section-y`, `grid-fit-*`, `focus-ring`, `on-block`, `prose-content`. In de markup staan geen hardcoded pixelwaarden of kleuren meer.
- **Gedeelde modules:** `src/lib/button.mjs`, `icons.mjs` en `guide-cta.mjs` worden gebruikt door de componenten en door de rehype-plugin (`src/lib/rehype-guide.mjs`), zodat knopstijlen, iconen en CTA-tekst maar op één plek staan.
- **Beveiliging:** Astro zet een Content-Security-Policy als `<meta>` met hashes van alle inline scripts en styles (`security.csp` in `astro.config.mjs`). De overige security headers (HSTS, `X-Frame-Options`, `Referrer-Policy` enzovoort) staan in `vercel.json`.
- **Deelafbeeldingen:** elke gids krijgt tijdens de build een eigen OG-afbeelding (`src/pages/og/[slug].png.ts`, met Satori en sharp).
- **CI:** `.github/workflows/ci.yml` draait check, lint, lint:copy, build en Lighthouse CI (`lighthouserc.json`, eist 100 op toegankelijkheid, best practices en SEO).
- **CSS wordt inline in de HTML gezet** (`build.inlineStylesheets: "always"`). Hierdoor is er geen render-blocking request en blijft de LCP laag. Er is geen analytics: Plausible is verwijderd.
- **Extra tokens** naast de opdracht: `--accent-hover` (hover van de primaire knop, want `chip-text` is in donker licht), `--form-card` (formulierkaart: wit in licht, `surface` in donker), `--danger` (foutmeldingen).
- **FAQ-kaart:** gebruikt `bg-inner` uit de klassetabel. De `#0F0F13` uit 4.8 is neutraal zwart en past niet bij het marinepalet.
- **Prijsblok dienstkaart 2:** `bg-inverse-inner` in plaats van `#1D1D21`, zodat het in de donkere modus mee omdraait.
- **Tekst op de kaart Bedrijfswebsite** gebruikt `inverse-text/80` in plaats van `inverse-muted`. Op de lichtste plek van de glans haalde `inverse-muted` net geen 4,5:1.
- **Mobiel menu:** een modale `<dialog>`. De focus blijft in het menu en de pagina erachter is inert. Openen en sluiten gaat met invoker commands (`command`/`commandfor`), zonder JS; voor oudere browsers is er een kleine JS-fallback.
- **Accordeons:** `details[name]` met een kleine JS-fallback. Het openen animeert met `interpolate-size` en `::details-content` waar de browser dat ondersteunt.

## Afwijkingen van de letter

- **Dienstknoppen** linken naar `/?dienst=landingspagina#contact` in plaats van `#contact?dienst=...`. Bij het laatste staat de query in de hash; dan scrolt de browser niet naar `#contact` en kan het script de query niet lezen. Met JS onderschept de knop de klik, selecteert de dienst en scrolt zonder herladen.
- **Formulier:** gaat naar Formspree (`formspree.io/f/meepgagp`, het endpoint van de vorige site). Met JS wordt het via `fetch` verstuurd en verschijnt de bevestiging op de pagina; zonder JS toont Formspree zijn eigen bedankpagina. Er is daarom geen `/bedankt/`-pagina meer. De honeypot heet `_gotcha` (de naam die Formspree herkent).
- **Logo en favicon (op verzoek van Tim):** de navigatie gebruikt de rode L van de oude site, nagetekend als inline SVG (`Logo.astro`), in plaats van het tekstwoordmerk. De favicons komen van de oude site. Het woordmerk `lorent/webworks` staat alleen nog in de footer.
- **Hero-H1 (op verzoek van Tim):** `clamp(52px,8.6vw,136px)` in plaats van `clamp(56px,10.6vw,168px)`, met minder ruimte boven de kop en meer ruimte tot de scheidingslijn. Zo staat de hele hero (lead, knoppen en geruststelling) boven de vouw op 1440x900, 1280x800, 1024x768 en 390x844. Het logo in de navigatie is 24px hoog (`h-6`).
- **Hero en contact (op verzoek van Tim):** de regel "Tim Lorent, senior frontend developer" en het persoonsblok in Contact zijn weggehaald. Het contactpaneel en de formulierkaart hebben minder padding.
- **Footer-woordmerk** schaalt met container-units (`10.6cqi`, maximaal 150px) in plaats van `clamp(48px,10.4vw,150px)`. Met de vw-formule was het woord 1400px breed op een container van 1200px, en op 360px ook te breed.
- **Resultaatcijfers** schalen met de kaartbreedte (`25cqi`, 48 tot 104px). "8+ jaar" paste anders niet in de kaart.
- **Ervaringsstrook:** de namen passen pas vanaf `xl` (1280px) op één regel. Daaronder staan ze gecentreerd over twee of meer regels; `justify-between` gaf daar een rommelige tweede regel.
- **Prijsblok:** de doorlooptijd-pil staat rechtsboven op de regel met "vanaf", zodat beide kaarten hetzelfde zijn opgebouwd. Naast "€ 1.750" paste de pil niet.

## Copy die ik zelf heb toegevoegd (controleren)

- De meta description en SEO-titel van `/gids/`.
- De privacyverklaring (Formspree, Vercel, geen cookies of analytics). Controleren: of je met Formspree een verwerkersovereenkomst hebt, en of je mailbox zo beveiligd is als de tekst zegt.
- De 404-pagina: "Deze pagina bestaat niet" en "De link klopt niet of de pagina is verhuisd."
- Een verborgen kop "Onderwerp" (alleen voor schermlezers) in de lege eerste kolomkop van de tabel freelancer/bureau.

## Gidsen: overgenomen van de live site (op verzoek van Tim)

De vijf gidsen bevatten letterlijk de copy van lorentwebworks.nl (opgehaald op 2 november 2026): titel, SEO-titel, meta description, intro, alle secties, tabellen, call-outs, FAQ (uit de structured data), afsluitende CTA, de kaarttitel en teaser van het overzicht, leestijd en datum (15 januari 2026). Een script controleerde dat alle 412 tekstblokken ongewijzigd op de nieuwe pagina's staan.

- Weggelaten omdat het nieuwe template ze zelf maakt: "In dit artikel" (wordt de inhoudsopgave) en "Meer lezen" (wordt "Verder lezen").
- Interne links wijzen naar `/gids/<slug>/`. Prijsbereiken in de tabel staan als "€ 800 tot 3.000" in plaats van met een en dash (copyregel).
- Slimme aanhalingstekens staan uit (`smartypants: false`), zodat `pagina's` en `"..."` precies zo blijven als op de live site.
- **Tegenstrijdig met de nieuwe homepage, graag nalopen:**
  - "Een strategisch gesprek, een pagina op maat met teksten van mij" en "Bij mij zitten de teksten in de pakketten", terwijl de homepage zegt dat de klant de teksten aanlevert.
  - "Een bedrijfswebsite binnen 2 tot 4 weken"; de homepage zegt 3 tot 4 weken.
  - De afsluitende knoppen van vier gidsen zeggen "Plan een gesprek" in plaats van "Plan een kennismaking".
- **Website-audit verwijderd (op verzoek van Tim):** de gidsen noemen nergens meer een gratis audit. Op die plekken staat nu de gratis kennismaking van 30 minuten, met de knop "Plan een kennismaking": de call-outs in "Website laten maken" en "Website checklist", het opsommingspunt in "Wat kost een website", de score-uitleg, de meta description, een FAQ-vraag ("Kan ik mijn website samen met jou doorlopen?") en de afsluitende CTA van de checklist. Deze copy wijkt dus af van de live site.
- Met de echte copy zijn de SEO-titels en descriptions langer dan 60 en 155 tekens; de limieten in het schema zijn eraf gehaald.
- **Hero-label (op verzoek van Tim):** "Beschikbaar voor projecten" in plaats van "Website laten maken in Amsterdam en heel Nederland". Het zoekwoord "website laten maken" staat nog in de title, meta description en de H2's van Voor wie en FAQ.

## Migratie vanaf de Next.js-site

- **301-redirects** in `vercel.json`: de oude gidsen (`/website-laten-maken` enzovoort) gaan naar `/gids/<slug>/`, `/diensten/*` naar `/#diensten` en `/sitemap.xml` naar `/sitemap-index.xml`. Let op: `/diensten/website-audit` bestaat niet meer.
- De AI-crawlerregels uit je niet-gecommitte `robots.ts` zijn overgenomen in `public/robots.txt`. Die wijziging staat nog in `git stash` op `main`.
- **Foto:** `public/tim.jpg` van de oude site is bijgesneden tot een vierkant portret (380x380) in `src/assets/tim.jpg`. De groene achtergrond vloekt een beetje met het marinepalet; een foto met een neutrale of blauwe achtergrond past beter.

## Open punten (TODO)

- `src/data/site.ts`: `kvk` en `linkedin` controleren, `bookingUrl` (optioneel).
- Formspree: controleer dat AJAX-inzendingen zijn toegestaan (reCAPTCHA uit of eigen key) en dat `www.lorentwebworks.nl` bij de toegestane domeinen staat.
- Akkoord dat de cijfers van bol. en GrandVision openbaar genoemd mogen worden.
- Gidsteksten in `src/content/gids/*.md`.
- Klantreviews: de sectie is verwijderd tot er reviews zijn.
