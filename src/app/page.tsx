import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://lorentwebworks.nl/#business",
                name: "Lorent Webworks",
                url: "https://lorentwebworks.nl",
                description:
                  "Freelance webdesigner voor zzp'ers en MKB in Nederland. Websites die klanten opleveren — inclusief copy, SEO en hosting.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Amsterdam",
                  addressCountry: "NL",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 52.3676,
                  longitude: 4.9041,
                },
                areaServed: {
                  "@type": "Country",
                  name: "Nederland",
                },
                priceRange: "€€",
                email: "tim.lorent@icloud.com",
                sameAs: ["https://linkedin.com/in/timlorent"],
                founder: {
                  "@type": "Person",
                  "@id": "https://lorentwebworks.nl/#tim",
                  name: "Tim Lorent",
                  jobTitle: "Freelance Webdesigner & Frontend Engineer",
                  sameAs: [
                    "https://linkedin.com/in/timlorent",
                    "https://www.lorentwebworks.com",
                  ],
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://lorentwebworks.nl/#website",
                url: "https://lorentwebworks.nl",
                name: "Lorent Webworks",
                publisher: { "@id": "https://lorentwebworks.nl/#business" },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Wat kost een website laten maken?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Een one-pager kost €950–1.400, een complete website €2.500–3.500 en een Shopify webshop €3.500–5.000. Alles excl. BTW, eenmalig — geen verborgen kosten.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Hoe lang duurt het voordat mijn website live gaat?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Een one-pager is binnen 2 weken live. Een complete website binnen 3–4 weken. Een webshop binnen 4–6 weken.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Kan ik mijn website daarna zelf aanpassen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ja. Na oplevering laat ik je zien hoe je teksten en afbeeldingen zelf kunt aanpassen — geen technische kennis nodig.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is onderhoud inbegrepen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Hosting en kleine aanpassingen zijn bespreekbaar als doorlopend pakket. Voor grotere wijzigingen stuur ik een losse offerte.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* NAV */}
      <nav aria-label="Primaire navigatie">
        <a className="nav-logo" href="/">
          LorentWebworks<em>.</em>nl
        </a>
        <ul className="nav-links">
          <li>
            <a href="#voor-wie">Voor wie</a>
          </li>
          <li>
            <a href="#pakketten">Pakketten</a>
          </li>
          <li>
            <a href="#werkwijze">Hoe het werkt</a>
          </li>
          <li>
            <a href="#over-tim">Over Tim</a>
          </li>
          <li>
            <a href="#contact" className="nav-cta">
              Plan een gesprek
            </a>
          </li>
        </ul>
        <MobileNav />
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-blob"></div>
        <div className="hero-dot"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-avatar">
              {/* biome-ignore lint/performance/noImgElement: 64px avatar, next/image adds no benefit at this size */}
              <img
                src="/tim.jpg"
                alt="Tim Lorent — freelance webdesigner Amsterdam"
                className="avatar-img"
              />
              <div className="avatar-text">
                <div className="avatar-name">Tim Lorent</div>
                <div className="avatar-role">8+ jaar ervaring · Amsterdam</div>
              </div>
            </div>
            <h1 className="hero-title">
              Websites die
              <span className="word-green"> klanten opleveren.</span>
            </h1>
            <div className="hero-bottom-row">
              <p className="hero-desc">
                Voor zzp'ers en kleine bedrijven die klaar zijn met een website
                die niets doet. Ik regel design, tekst en SEO — jij focust op
                je bedrijf.
              </p>
              <div className="hero-ctas">
                <a href="#contact" className="btn btn-yellow">
                  Plan een gesprek →
                </a>
                <a href="#pakketten" className="btn btn-outline-dark">
                  Bekijk pakketten
                </a>
              </div>
              <div className="hero-trust-bullets">
                <div className="trust-bullet">
                  <span className="trust-check">✓</span>
                  <span>
                    8+ jaar ervaring — eerder voor bol, T-Mobile &amp; GrandVision
                  </span>
                </div>
                <div className="trust-bullet">
                  <span className="trust-check">✓</span>
                  <span>Binnen 2–4 weken live</span>
                </div>
                <div className="trust-bullet">
                  <span className="trust-check">✓</span>
                  <span>Design, tekst én SEO — alles geregeld</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="voor-wie" id="voor-wie">
        <div className="container">
          <div className="voor-wie-top reveal">
            <span className="tag-pill">Voor wie</span>
            <h2 className="display-h2">
              Herken jij
              <br />
              dit?
            </h2>
            <p className="voor-wie-sub">
              Je website staat er al jaren, maar levert niks op. Of je hebt
              er helemaal geen — en loopt elke dag omzet mis. Je wil iemand
              die het snapt, het regelt, en er gewoon werk van maakt.
            </p>
            <a href="#contact" className="btn btn-dark">
              Ja, dit ben ik →
            </a>
          </div>
          <div className="sector-grid reveal">
            <div className="sector-card">
              <span className="sector-num">01</span>
              <div className="sector-illus">
                <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <path
                    d="M6 36h32M10 36V18M34 36V18M4 18h36M16 18V11c0-2 1.6-3.5 3.5-3.5h5c2 0 3.5 1.6 3.5 3.5v7"
                    stroke="#1A1A1A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="22" cy="27" r="3.5" stroke="#1A1A1A" strokeWidth="1.8" />
                </svg>
              </div>
              <div className="sector-name">Horeca</div>
              <p className="sector-desc">
                Restaurant, café, bakker, catering. Gasten googlen je voordat
                ze binnenlopen — en ze besluiten op basis van wat ze zien.
              </p>
              <a href="#contact" className="sector-cta">Dit herken ik →</a>
            </div>
            <div className="sector-card">
              <span className="sector-num">02</span>
              <div className="sector-illus">
                <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect x="5" y="9" width="34" height="26" rx="2" stroke="#1A1A1A" strokeWidth="1.8" />
                  <circle cx="22" cy="22" r="6" stroke="#1A1A1A" strokeWidth="1.8" />
                  <circle cx="22" cy="22" r="2" stroke="#1A1A1A" strokeWidth="1.8" />
                  <rect x="28" y="11" width="7" height="5" rx="1" stroke="#1A1A1A" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="sector-name">Creatief</div>
              <p className="sector-desc">
                Fotograaf, kunstenaar, designer, muzikant. Je werk is goed —
                maar je portfolio laat dat nog niet zien.
              </p>
              <a href="#contact" className="sector-cta">Dit herken ik →</a>
            </div>
            <div className="sector-card">
              <span className="sector-num">03</span>
              <div className="sector-illus">
                <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <circle cx="22" cy="14" r="6" stroke="white" strokeWidth="1.8" />
                  <path
                    d="M8 38c0-7.7 6.3-14 14-14s14 6.3 14 14"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="sector-name">Coaches</div>
              <p className="sector-desc">
                Therapeut, coach, consultant. Klanten moeten je vertrouwen
                vóórdat ze contact opnemen. Een slechte site kost je leads.
              </p>
              <a href="#contact" className="sector-cta">Dit herken ik →</a>
            </div>
            <div className="sector-card">
              <span className="sector-num">04</span>
              <div className="sector-illus">
                <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <path
                    d="M5 18l3.5-10h27l3.5 10"
                    stroke="#1A1A1A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 18h34v18H5z"
                    stroke="#1A1A1A"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 36V26h12v10"
                    stroke="#1A1A1A"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="sector-name">Winkels</div>
              <p className="sector-desc">
                Winkel, atelier, studio. Gevonden worden in Google is geen
                luxe meer — het is het verschil tussen druk en stil.
              </p>
              <a href="#contact" className="sector-cta">Dit herken ik →</a>
            </div>
          </div>
        </div>
      </section>

      {/* OVER TIM */}
      <section className="over-tim" id="over-tim">
        <div className="container">
          <div className="over-tim-inner">
            <div className="over-tim-tekst reveal">
              <span className="tag-pill">Over Tim</span>
              <h2 className="display-h2">
                Ik regel het.
              </h2>
              <p>
                Ik ben Tim Lorent, freelance webdesigner en frontend engineer
                met <strong>meer dan 8 jaar ervaring</strong>. Ik heb platforms
                gebouwd voor bol, GrandVision en T-Mobile.
              </p>
              <p>
                Ik werk alleen. Geen team erachter, geen junior die stiekem het
                werk doet. <strong>Jij praat direct met mij</strong> — van
                eerste gesprek tot oplevering. Dat scheelt misverstanden,
                vertraging en geld.
              </p>
              <p>
                Vanuit Amsterdam, voor ondernemers door heel Nederland. Website
                laten maken hoeft geen gedoe te zijn.
              </p>
              <div className="over-tim-ctas">
                <a href="#contact" className="btn btn-dark">
                  Maak kennis →
                </a>
                <a
                  href="https://www.lorentwebworks.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark"
                >
                  Tech-portfolio ↗
                </a>
              </div>
              <div className="clients-strip">
                <p className="clients-label">Eerder gewerkt voor</p>
                <div className="clients-names">
                  <span>bol</span>
                  <span>GrandVision</span>
                  <span>T-Mobile</span>
                  <span>Locus</span>
                </div>
              </div>
            </div>
            <div className="photo-wrap reveal">
              <Image
                src="/tim.jpg"
                alt="Tim Lorent — freelance webdesigner Amsterdam"
                width={480}
                height={560}
              />
              <div className="photo-badge">
                <div className="photo-badge-num">8+</div>
                <div className="photo-badge-label">Jaar ervaring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAKKETTEN */}
      <section className="pakketten" id="pakketten">
        <div className="container">
          <div className="pakketten-top reveal">
            <span className="tag-pill">Pakketten</span>
            <h2 className="display-h2">
              Helder aanbod.
              <br />
              Geen verrassingen.
            </h2>
            <p className="pakketten-intro">
              Drie vaste pakketten met een duidelijke scope, vaste prijs en
              een harde deadline. Jij levert het beeldmateriaal en ik regel
              de rest.
            </p>
            <a href="#contact" className="btn btn-yellow">
              Vraag gratis advies →
            </a>
          </div>
          <div className="pakket-grid reveal">
            <div className="pakket-card">
              <span className="pakket-badge">Snel live</span>
              <div className="pakket-illus">
                <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <rect
                    x="7"
                    y="11"
                    width="38"
                    height="30"
                    rx="2"
                    stroke="rgba(255,253,245,0.35)"
                    strokeWidth="1.8"
                  />
                  <path d="M7 19h38" stroke="rgba(255,253,245,0.35)" strokeWidth="1.8" />
                  <path
                    d="M15 28h22M15 34h14"
                    stroke="rgba(255,253,245,0.25)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="pakket-naam">One-pager</div>
              <p className="pakket-tagline">
                Ideaal voor starters en zzp'ers die snel en professioneel
                online willen staan.
              </p>
              <div className="pakket-prijs">€950–1.400</div>
              <p className="pakket-prijs-note">excl. BTW · eenmalig · live binnen 2 weken</p>
              <hr className="pakket-divider" />
              <ul className="pakket-lijst">
                <li><span className="pakket-check">✓</span>One-pager op maat</li>
                <li><span className="pakket-check">✓</span>Teksten die bezoekers overtuigen</li>
                <li><span className="pakket-check">✓</span>Gevonden worden in Google (SEO)</li>
                <li><span className="pakket-check">✓</span>Bezoekersstatistieken ingesteld</li>
                <li><span className="pakket-check">✓</span>Huisstijladvies</li>
                <li><span className="pakket-check">✓</span>1 revisieronde</li>
              </ul>
              <a href="#contact" className="btn btn-outline-white" style={{ textAlign: "center", width: "100%" }}>
                Kies dit pakket →
              </a>
            </div>
            <div className="pakket-card featured">
              <span className="pakket-badge">Meest gekozen</span>
              <div className="pakket-illus">
                <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <rect
                    x="5"
                    y="7"
                    width="42"
                    height="34"
                    rx="2"
                    stroke="rgba(26,26,26,0.5)"
                    strokeWidth="1.8"
                  />
                  <path d="M5 15h42" stroke="rgba(26,26,26,0.5)" strokeWidth="1.8" />
                  <rect
                    x="11"
                    y="21"
                    width="11"
                    height="14"
                    rx="1"
                    stroke="rgba(26,26,26,0.35)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M28 23h13M28 29h13M28 35h8"
                    stroke="rgba(26,26,26,0.35)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="pakket-naam">Complete website</div>
              <p className="pakket-tagline">
                Ideaal voor ondernemers die hun verhaal volledig willen
                vertellen.
              </p>
              <div className="pakket-prijs">€2.500–3.500</div>
              <p className="pakket-prijs-note">excl. BTW · eenmalig · live binnen 3–4 weken</p>
              <hr className="pakket-divider" />
              <ul className="pakket-lijst">
                <li><span className="pakket-check">✓</span>4–6 pagina&apos;s op maat</li>
                <li><span className="pakket-check">✓</span>Teksten voor alle pagina&apos;s</li>
                <li><span className="pakket-check">✓</span>Per pagina gevonden in Google (SEO)</li>
                <li><span className="pakket-check">✓</span>Bezoekersstatistieken + conversie-tracking</li>
                <li><span className="pakket-check">✓</span>Huisstijladvies</li>
                <li><span className="pakket-check">✓</span>1 revisieronde</li>
              </ul>
              <a href="#contact" className="btn btn-dark" style={{ textAlign: "center", width: "100%" }}>
                Kies dit pakket →
              </a>
            </div>
            <div className="pakket-card">
              <span className="pakket-badge">E-commerce</span>
              <div className="pakket-illus">
                <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <path
                    d="M7 9h6l4 20h20l4-14H17"
                    stroke="rgba(255,253,245,0.35)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="24" cy="36" r="3" stroke="rgba(255,253,245,0.35)" strokeWidth="1.8" />
                  <circle cx="35" cy="36" r="3" stroke="rgba(255,253,245,0.35)" strokeWidth="1.8" />
                </svg>
              </div>
              <div className="pakket-naam">Webshop</div>
              <p className="pakket-tagline">
                Ideaal voor winkels en merken die online willen verkopen.
              </p>
              <div className="pakket-prijs">€3.500–5.000</div>
              <p className="pakket-prijs-note">excl. BTW · + Shopify €29–79/mnd · live binnen 4–6 weken</p>
              <hr className="pakket-divider" />
              <ul className="pakket-lijst">
                <li><span className="pakket-check">✓</span>Shopify ingericht &amp; gestyled</li>
                <li><span className="pakket-check">✓</span>Teksten voor hoofdpagina&apos;s</li>
                <li><span className="pakket-check">✓</span>Gevonden worden in Google (SEO)</li>
                <li><span className="pakket-check">✓</span>Bezoekersstatistieken + shop-tracking</li>
                <li><span className="pakket-check">✓</span>Betaalkoppeling ingesteld</li>
                <li><span className="pakket-check">✓</span>1 revisieronde</li>
              </ul>
              <a href="#contact" className="btn btn-outline-white" style={{ textAlign: "center", width: "100%" }}>
                Kies dit pakket →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section className="werkwijze" id="werkwijze">
        <div className="container">
          <div className="werkwijze-top reveal">
            <span className="tag-pill">Hoe het werkt</span>
            <h2 className="display-h2">
              Van gesprek
              <br />
              naar live.
            </h2>
            <p className="werkwijze-sub">
              Geen lang traject, geen onduidelijkheid. Je weet precies wat er
              gebeurt, wanneer — en je site gaat live terwijl concurrenten nog
              offertes aanvragen.
            </p>
            <a href="#contact" className="btn btn-dark">
              Start vandaag →
            </a>
          </div>
          <div className="stappen-grid reveal">
            <div className="stap-card">
              <span className="stap-num">01</span>
              <div className="stap-illus">
                <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <path
                    d="M8 10h28v20H26l-8 6v-6H8z"
                    stroke="#1A1A1A"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 20h16M14 26h10"
                    stroke="rgba(26,26,26,0.3)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="stap-titel">Kennismaken</div>
              <p className="stap-tekst">
                30 minuten. Ik leer je bedrijf kennen, jij stelt je vragen.
                Geen verplichtingen — wel direct eerlijk advies.
              </p>
              <span className="stap-tijd">Dag 1</span>
            </div>
            <div className="stap-card">
              <span className="stap-num">02</span>
              <div className="stap-illus">
                <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect
                    x="8"
                    y="6"
                    width="28"
                    height="36"
                    rx="2"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M14 16h16M14 22h16M14 28h10"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="28 32 32 36 40 28"
                    stroke="#F5E642"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="stap-titel">Voorstel</div>
              <p className="stap-tekst">
                Helder voorstel: wat ik bouw, in hoeveel weken, voor welk
                bedrag. Geen kleine lettertjes, geen verborgen kosten.
              </p>
              <span className="stap-tijd">Dag 2–3</span>
            </div>
            <div className="stap-card">
              <span className="stap-num">03</span>
              <div className="stap-illus">
                <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect
                    x="5"
                    y="9"
                    width="34"
                    height="26"
                    rx="2"
                    stroke="#1A1A1A"
                    strokeWidth="1.8"
                  />
                  <path d="M5 17h34" stroke="#1A1A1A" strokeWidth="1.8" />
                  <path
                    d="M14 26l4 4 8-8"
                    stroke="#2D6A4F"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="stap-titel">Bouwen</div>
              <p className="stap-tekst">
                Ik ga aan het werk. Je ziet vroeg wat er staat — geen grote
                onthulling op het einde. Je feedback is welkom, niet verplicht.
              </p>
              <span className="stap-tijd">Week 1–3</span>
            </div>
            <div className="stap-card">
              <span className="stap-num">04</span>
              <div className="stap-illus">
                <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <circle cx="22" cy="22" r="16" stroke="#1A1A1A" strokeWidth="1.8" />
                  <path
                    d="M22 6c0 0-7 7-7 16s7 16 7 16M22 6c0 0 7 7 7 16s-7 16-7 16M6 22h32"
                    stroke="rgba(26,26,26,0.25)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="16 30 22 24 28 30"
                    stroke="#F5E642"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="stap-titel">Live</div>
              <p className="stap-tekst">
                De site staat online. Snel, vindbaar, klaar voor gebruik. Je
                leert hoe je zelf kleine aanpassingen maakt — en ik blijf
                bereikbaar.
              </p>
              <span className="stap-tijd">Week 2–4</span>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA BAND */}
      <div className="cta-band">
        <div className="container">
          <h2 className="display-h2">
            Klaar om live
            <br />
            te gaan?
          </h2>
          <p>
            Plan een vrijblijvend gesprek van 30 minuten. Binnen die tijd weet
            je wat er nodig is en wat het kost.
          </p>
          <div className="cta-band-actions">
            <a href="#contact" className="btn btn-yellow">
              Plan een gesprek →
            </a>
            <a href="#pakketten" className="btn btn-outline-white">
              Bekijk pakketten
            </a>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-left reveal">
              <span className="tag-pill">Contact</span>
              <h2 className="display-h2">
                Wat wil je bereiken
                <br />
                met je website?
              </h2>
              <p>
                Stuur een bericht — ik reageer binnen één werkdag. Geen
                verplichtingen, geen offerte die je over je heen krijgt.
                Gewoon een eerlijk gesprek.
              </p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-item-body">
                    <p className="ci-label">E-mail</p>
                    <a href="mailto:tim.lorent@icloud.com">
                      tim.lorent@icloud.com
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-item-body">
                    <p className="ci-label">Locatie</p>
                    <span>Amsterdam, Nederland</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🔗</div>
                  <div className="contact-item-body">
                    <p className="ci-label">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/timlorent"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/timlorent
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <form
                className="contact-form"
                action="https://formspree.io/f/meepgagp"
                method="POST"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="naam">Naam</label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      placeholder="Jan de Vries"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jan@jouwbedrijf.nl"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="bedrijf">Bedrijf</label>
                  <input
                    type="text"
                    id="bedrijf"
                    name="bedrijf"
                    placeholder="Jouw bedrijfsnaam"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pakket">Welk pakket spreekt je aan?</label>
                  <select id="pakket" name="pakket">
                    <option value="">— Kies een optie —</option>
                    <option>One-pager (€950–1.400)</option>
                    <option>Complete website (€2.500–3.500)</option>
                    <option>Webshop (€3.500–5.000)</option>
                    <option>Ik weet het nog niet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="bericht">
                    Wat wil je bereiken met je website?
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    placeholder="Vertel me wat je doet, voor wie, en wat je wil verbeteren. Hoe meer context, hoe beter mijn advies."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ alignSelf: "flex-start" }}
                >
                  Stuur bericht →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq-top reveal">
            <span className="tag-pill">Veelgestelde vragen</span>
            <h2 className="display-h2">Goede vragen.</h2>
          </div>
          <div className="faq-grid reveal">
            <div className="faq-item">
              <h3 className="faq-vraag">Wat kost een website laten maken?</h3>
              <p className="faq-antwoord">
                Een one-pager kost €950–1.400, een complete website
                €2.500–3.500 en een Shopify webshop €3.500–5.000. Alles excl.
                BTW, eenmalig betaald — geen abonnement, geen verborgen kosten.
                Hosting is optioneel bespreekbaar.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-vraag">Hoe lang duurt het voordat mijn website live is?</h3>
              <p className="faq-antwoord">
                Een one-pager staat binnen 2 weken online. Een complete website
                binnen 3–4 weken. Een webshop binnen 4–6 weken. De snelheid
                hangt ook af van hoe snel jij beeldmateriaal aanlevert.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-vraag">Kan ik mijn website daarna zelf aanpassen?</h3>
              <p className="faq-antwoord">
                Ja. Na oplevering laat ik je stap voor stap zien hoe je teksten
                en afbeeldingen zelf aanpast. Geen technische kennis nodig.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-vraag">Is onderhoud inbegrepen?</h3>
              <p className="faq-antwoord">
                Kleine aanpassingen en hosting zijn te bespreken als doorlopend
                pakket. Voor grotere wijzigingen stuur ik een losse offerte.
                Niks verplicht.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-vraag">Ik heb al een website — kan je die verbeteren?</h3>
              <p className="faq-antwoord">
                Soms wel, soms is herbouwen sneller en goedkoper. Dat bespreek
                ik eerlijk met je in het eerste gesprek.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-vraag">Werk je alleen in Amsterdam of door heel Nederland?</h3>
              <p className="faq-antwoord">
                Door heel Nederland. Alles loopt via videocall en e-mail. Een
                fysieke afspraak in Amsterdam is mogelijk maar niet noodzakelijk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container footer-inner">
          <a href="/" className="footer-logo">
            LorentWebworks<em>.</em>nl
          </a>
          <span>Websites voor ondernemers die ergens voor staan.</span>
          <span>
            © 2026 &nbsp;·&nbsp;{" "}
            <a href="https://www.lorentwebworks.com">lorentwebworks.com</a>
          </span>
        </div>
      </footer>
    </>
  );
}
