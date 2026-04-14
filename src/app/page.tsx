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
                  "Freelance webdesigner voor zzp'ers en MKB in Nederland. Websites die klanten opleveren, inclusief copy, SEO en hosting.",
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
                email: "tim@lorentwebworks.nl",
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
                      text: "Een compacte website (1 pagina) kost vanaf €1.250 excl. BTW, eenmalig betaald. Een website van 4–5 pagina's start vanaf €2.500. Geen abonnement, geen verborgen kosten.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Hoe lang duurt het voordat mijn website live gaat?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Een compacte website is meestal binnen een paar dagen live zodra alle input compleet is. Een website van 4–5 pagina's binnen 3–4 weken.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Kan ik mijn website daarna zelf aanpassen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ja. Na oplevering laat ik je zien hoe je teksten en afbeeldingen zelf kunt aanpassen. Geen technische kennis nodig.",
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
      <header>
      <nav aria-label="Primaire navigatie">
        <a className="nav-logo" href="/">
          LorentWebworks<em>.</em>nl
        </a>
        <ul className="nav-links">
          <li>
            <a href="#voor-wie">Voor wie</a>
          </li>
          <li>
            <a href="#aanpak">Aanpak</a>
          </li>
          <li>
            <a href="#resultaat">Resultaat</a>
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
      </header>

      <main>

      {/* HERO */}
      <section className="hero">
        <div className="hero-blob"></div>
        <div className="hero-dot"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-avatar">
              <Image
                src="/tim.jpg"
                alt="Tim Lorent, freelance webdesigner Amsterdam"
                width={64}
                height={64}
                sizes="64px"
                className="avatar-img"
                preload
              />
              <div className="avatar-text">
                <div className="avatar-name">Tim Lorent</div>
                <div className="avatar-role">8+ jaar ervaring · Amsterdam</div>
              </div>
            </div>
            <h1 className="hero-title">
              Websites die <br/>
              <span className="word-green">klanten opleveren.</span>
            </h1>
            <div className="hero-bottom-row">
              <p className="hero-desc">
                Als iemand je website bezoekt, beslissen ze binnen seconden of
                ze je vertrouwen en dus of ze contact opnemen. Ik vertaal
                wat jij doet naar een duidelijke website die bezoekers
                aanzet tot contact.
              </p>
              <div className="hero-ctas">
                <a href="#contact" className="btn btn-yellow">
                  Vraag gratis website audit →
                </a>
              </div>
              <div className="hero-trust-bullets">
                <div className="trust-bullet">
                  <span className="trust-stat">8+</span>
                  <span>jaar ervaring met websites die converteren</span>
                </div>
                <div className="trust-bullet">
                  <span className="trust-stat">+3,4%</span>
                  <span>conversiegroei bij GrandVision</span>
                </div>
                <div className="trust-bullet">
                  <span className="trust-check">✓</span>
                  <span>Snel live, meestal binnen een paar dagen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="voor-wie" id="voor-wie">
        <div className="container">
          <div className="voor-wie-inner">
            <div className="voor-wie-top reveal">
              <span className="tag-pill">Voor wie</span>
              <h2 className="display-h2">
                Herken je
                <br />
                dit?
              </h2>
              <p className="voor-wie-sub">
                Je website:
              </p>
              <ul className="voor-wie-lijst">
                <li>staat er, maar levert weinig op</li>
                <li>vertelt niet duidelijk wat je doet</li>
                <li>voelt rommelig of onduidelijk</li>
                <li>wordt nauwelijks gevonden</li>
              </ul>
              <p className="voor-wie-sub">
                Of je hebt nog geen website en mist elke dag kansen.
              </p>
              <a href="#contact" className="btn btn-dark">
                Ja, dit herken ik →
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
                Gasten googlen je voordat ze binnenlopen. Ze beslissen op basis van wat ze zien.
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
                Je werk is goed, maar je website laat het niet zien.
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
                Mensen moeten je vertrouwen vóór ze contact opnemen. Je site maakt of breekt dat.
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
                Gevonden worden in Google is het verschil tussen druk en stil.
              </p>
              <a href="#contact" className="sector-cta">Dit herken ik →</a>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* AANPAK */}
      <div className="cta-band" id="aanpak">
        <div className="container">
          <h2 className="display-h2">
            Ik zorg dat je website voor je gaat werken.
          </h2>
          <p>
            Ik vertaal wat jij doet naar een duidelijke website, inclusief
            structuur, teksten en bouw. Jij hoeft alleen input te geven.
          </p>
          <div className="cta-band-actions">
            <a href="#contact" className="btn btn-yellow">
              Plan een gesprek →
            </a>
          </div>
        </div>
      </div>

      {/* OVER TIM */}
      <section className="over-tim" id="over-tim">
        <div className="container">
          <div className="over-tim-inner">
            <div className="over-tim-tekst reveal">
              <span className="tag-pill">Over Tim</span>
              <h2 className="display-h2">
                Ik combineer techniek met copy en structuur.
              </h2>
              <p>
                Ik ben Tim Lorent, <strong>8+ jaar ervaring</strong> met
                websites die converteren, nu toegepast voor zzp en mkb. Ik
                werkte aan platforms voor bol, GrandVision en T-Mobile.
              </p>
              <p>
                Je werkt direct met mij: geen bureau, geen ruis, geen
                vertraging. Van eerste gesprek tot oplevering.
              </p>
              <p>
                Vanuit Amsterdam, voor ondernemers door heel Nederland.
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
                alt="Tim Lorent, freelance webdesigner Amsterdam"
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

      {/* RESULTAAT */}
      <section className="pakketten" id="resultaat">
        <div className="container">
          <div className="pakketten-top reveal">
            <span className="tag-pill">Resultaten</span>
            <h2 className="display-h2">
              Wat het
              <br />
              oplevert.
            </h2>
          </div>
          <div className="resultaat-grid reveal">
            <div className="resultaat-card">
              <div className="resultaat-stat">8+</div>
              <div className="resultaat-label">jaar ervaring met websites die converteren</div>
              <p className="resultaat-desc">
                Van grote platforms (bol, GrandVision, T-Mobile) tot compacte
                websites voor zzp en mkb, altijd gericht op resultaat.
              </p>
            </div>
            <div className="resultaat-card">
              <div className="resultaat-stat">+3,4%</div>
              <div className="resultaat-label">conversiegroei bij GrandVision</div>
              <p className="resultaat-desc">
                425 nieuwe betalende klanten uit 13.000 interacties.
                Dezelfde aanpak, nu toegepast voor zzp en mkb.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AANBOD */}
      <section className="aanbod" id="aanbod">
        <div className="container">
          <div className="pakketten-top reveal">
            <span className="tag-pill">Aanbod</span>
            <h2 className="display-h2">
              Kies wat past
              <br />
              bij jouw situatie.
            </h2>
            <p className="pakketten-intro">
              Geen standaardpakketten. Wel duidelijke startpunten.
            </p>
          </div>
          <div className="pakket-grid pakket-grid--two reveal">
            <div className="pakket-card featured">
              <span className="pakket-badge">Meest gekozen</span>
              <div className="pakket-illus">
                <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <rect
                    x="7"
                    y="11"
                    width="38"
                    height="30"
                    rx="2"
                    stroke="rgba(26,26,26,0.5)"
                    strokeWidth="1.8"
                  />
                  <path d="M7 19h38" stroke="rgba(26,26,26,0.5)" strokeWidth="1.8" />
                  <path
                    d="M15 28h22M15 34h14"
                    stroke="rgba(26,26,26,0.35)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="pakket-naam">Compacte website</div>
              <p className="pakket-tagline">
                1 pagina die direct duidelijk maakt wat je doet en aanzet tot contact.
              </p>
              <div className="pakket-prijs">Vanaf €1.250</div>
              <p className="pakket-prijs-note">excl. BTW · eenmalig · snel live</p>
              <hr className="pakket-divider" />
              <ul className="pakket-lijst">
                <li><span className="pakket-check">✓</span>1 pagina op maat</li>
                <li><span className="pakket-check">✓</span>Ik schrijf de teksten zodat bezoekers begrijpen wat je doet en waarom ze voor jou moeten kiezen</li>
                <li><span className="pakket-check">✓</span>Zo opgebouwd dat je goed gevonden wordt door Google én je bezoekers</li>
                <li><span className="pakket-check">✓</span>Werkt strak en duidelijk op mobiel</li>
                <li><span className="pakket-check">✓</span>1 revisieronde</li>
              </ul>
              <a href="#contact" className="btn btn-dark" style={{ textAlign: "center", width: "100%" }}>
                Kies dit →
              </a>
            </div>
            <div className="pakket-card">
              <span className="pakket-badge">Meer maatwerk</span>
              <div className="pakket-illus">
                <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <rect x="5" y="7" width="42" height="34" rx="2" stroke="rgba(255,253,245,0.35)" strokeWidth="1.8" />
                  <path d="M5 15h42" stroke="rgba(255,253,245,0.35)" strokeWidth="1.8" />
                  <rect x="11" y="21" width="11" height="14" rx="1" stroke="rgba(255,253,245,0.25)" strokeWidth="1.5" />
                  <path d="M28 23h13M28 29h13M28 35h8" stroke="rgba(255,253,245,0.25)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="pakket-naam">Website 4–5 pagina&apos;s</div>
              <p className="pakket-tagline">
                Voor wie meer ruimte nodig heeft: een volledige website die je bedrijf goed neerzet en klanten overtuigt.
              </p>
              <div className="pakket-prijs">Vanaf €2.500</div>
              <p className="pakket-prijs-note">excl. BTW · eenmalig</p>
              <hr className="pakket-divider" />
              <ul className="pakket-lijst">
                <li><span className="pakket-check">✓</span>4–5 pagina&apos;s op maat (home, over, diensten, contact en meer)</li>
                <li><span className="pakket-check">✓</span>Ik schrijf de teksten voor alle pagina&apos;s</li>
                <li><span className="pakket-check">✓</span>SEO per pagina, zodat je beter gevonden wordt</li>
                <li><span className="pakket-check">✓</span>Conversie-tracking ingesteld</li>
                <li><span className="pakket-check">✓</span>Werkt strak op mobiel</li>
                <li><span className="pakket-check">✓</span>2 revisierondes</li>
              </ul>
              <a href="#contact" className="btn btn-dark" style={{ textAlign: "center", width: "100%" }}>
                Vraag dit aan →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div className="cta-band">
        <div className="container">
          <h2 className="display-h2">
            Wat kan er beter
            <br />
            aan je website?
          </h2>
          <div className="cta-band-actions">
            <a href="#contact" className="btn btn-yellow">
              Vraag gratis website audit →
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
                Klaar om meer
                <br />
                uit je website te halen?
              </h2>
              <p>
                Geen verplichtingen, geen offerte die je over je heen krijgt.
                Gewoon een eerlijk gesprek over wat er beter kan aan je website.
                Ik reageer binnen één werkdag.
              </p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-item-body">
                    <p className="ci-label">E-mail</p>
                    <a href="mailto:tim@lorentwebworks.nl">
                      tim@lorentwebworks.nl
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
                  <label htmlFor="pakket">Wat heb je nodig?</label>
                  <select id="pakket" name="pakket">
                    <option value="">Kies een optie</option>
                    <option>Compacte website, vanaf €1.250</option>
                    <option>Website 4–5 pagina&apos;s, vanaf €2.500</option>
                    <option>Gratis website audit</option>
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
                Een compacte website (1 pagina) kost vanaf €1.250 excl. BTW, eenmalig betaald. Geen abonnement, geen verborgen kosten. Een website van 4–5 pagina&apos;s start vanaf €2.500. Precies wat het kost bespreek ik in het eerste gesprek.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-vraag">Hoe lang duurt het voordat mijn website live is?</h3>
              <p className="faq-antwoord">
                Een compacte website is meestal binnen een paar dagen live zodra alle input compleet is. De snelheid hangt ook af van hoe snel jij beeldmateriaal en feedback aanlevert.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-vraag">Kan ik mijn landing page daarna zelf aanpassen?</h3>
              <p className="faq-antwoord">
                Ja. Na oplevering laat ik je stap voor stap zien hoe je teksten en afbeeldingen zelf aanpast. Geen technische kennis nodig.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-vraag">Is onderhoud inbegrepen?</h3>
              <p className="faq-antwoord">
                Kleine aanpassingen en hosting zijn te bespreken als doorlopend pakket. Voor grotere wijzigingen stuur ik een losse offerte. Niks verplicht.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-vraag">Ik heb al een website, kan je die verbeteren?</h3>
              <p className="faq-antwoord">
                Soms wel, soms is herbouwen sneller en goedkoper. Dat bespreek ik eerlijk met je in het eerste gesprek.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-vraag">Werk je alleen in Amsterdam of door heel Nederland?</h3>
              <p className="faq-antwoord">
                Door heel Nederland. Alles loopt via videocall en e-mail. Een fysieke afspraak in Amsterdam is mogelijk maar niet noodzakelijk.
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
          <span>Websites die klanten opleveren.</span>
          <span>
            © 2026 &nbsp;·&nbsp;{" "}
            <a href="https://www.lorentwebworks.com">lorentwebworks.com</a>
          </span>
        </div>
      </footer>

      </main>
    </>
  );
}
