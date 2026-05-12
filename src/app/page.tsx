import Image from "next/image";
import Link from "next/link";
import AanpakIllustration from "@/components/AanpakIllustration";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";

const SEGMENTS = [
  {
    name: "Horeca",
    desc: "Gasten googlen je voor ze binnenlopen. Je site beslist mee.",
  },
  {
    name: "Coaches & therapeuten",
    desc: "Vertrouwen opbouwen vóór het eerste contact — je site doet het voorwerk.",
  },
  {
    name: "Creatieven & makers",
    desc: "Je werk verdient een site die het echt laat zien.",
  },
  {
    name: "Winkels",
    desc: "Gevonden worden is het verschil tussen druk en stil.",
  },
  {
    name: "Dienstverleners",
    desc: "Kappers, stylisten, specialisten — laten zien dat je écht bestaat.",
  },
];

const CLIENTS = [
  "GrandVision",
  "bol.",
  "T-Mobile",
  "HackYourFuture",
  "SelfStartGlobal",
  "Locus",
  "IDFA",
  "VVV Texel",
  "Impacked",
  "Domas van Wijk",
];

const AANPAK = [
  {
    num: "01",
    title: "We spreken af",
    desc: "Kop koffie, videocall of bij jou langs. Ik stel scherpe vragen, jij vertelt wat je doet en wat je nodig hebt.",
    tag: "30-60 min · gratis",
    illus: "talk" as const,
  },
  {
    num: "02",
    title: "Ik bouw",
    desc: "Structuur, copy, ontwerp en techniek — ik neem het hele pakket voor m'n rekening. Jij krijgt tussentijds een preview.",
    tag: "5 dagen tot 4 weken",
    illus: "craft" as const,
  },
  {
    num: "03",
    title: "Live & opleveren",
    desc: "Site staat. Analytics draait. Ik laat je zien hoe je zelf kleine dingen aanpast. Geen abonnement, geen haakjes.",
    tag: "Jij houdt de sleutels",
    illus: "ship" as const,
  },
];

const PAKKETTEN = [
  {
    slug: "landingspagina",
    name: "De Landingspagina",
    tagline:
      "Eén scherpe pagina die direct laat zien wat je doet en bezoekers aanzet tot contact.",
    price: "€850",
    priceNote: "excl. BTW · eenmalig · binnen 5 werkdagen",
    featured: false,
    items: [
      "Strategisch gesprek over doel en doelgroep",
      "Pagina op maat, geschreven door mij",
      "Geoptimaliseerd voor Google",
      "Mobielvriendelijk en snel",
      "Eén revisieronde",
    ],
  },
  {
    slug: "bedrijfswebsite",
    name: "De Bedrijfswebsite",
    tagline:
      "Volledige website van 4 tot 6 pagina's die je onderneming op de kaart zet.",
    price: "€1.750",
    priceNote: "excl. BTW · eenmalig",
    featured: true,
    items: [
      "Alles uit De Landingspagina",
      "4-6 pagina's op maat",
      "SEO per pagina",
      "Conversietracking ingesteld",
      "Twee revisierondes",
    ],
  },
  {
    slug: "website-audit",
    name: "De Website-audit",
    tagline:
      "Heb je al een website, maar levert hij niet op? Ik analyseer hem door en door.",
    price: "Gratis",
    priceNote: "binnen 5 werkdagen · geen verplichting",
    featured: false,
    items: [
      "Analyse op structuur, copy en SEO",
      "Check op snelheid en conversie",
      "Rapport met concrete acties",
      "30 minuten doorloop-gesprek",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "Waarom bij jou en niet gewoon zelf iets in Wix of Squarespace?",
    a: "Dat kan prima voor een eerste start. Maar als je wilt dat je website daadwerkelijk klanten oplevert — goed gevonden wordt, bezoekers overtuigt, snel laadt — dan is maatwerk vaak het verschil tussen 'hij staat er' en 'hij werkt voor me'. Ik bouw websites die je tijd en geld opleveren, niet kosten.",
  },
  {
    q: "Ik heb nauwelijks tijd — hoeveel vraag je van mij?",
    a: "Eén goed gesprek aan het begin, foto's en tekst-input als je die hebt, en één of twee revisierondes. De rest doe ik. De meeste klanten zijn per saldo een paar uur kwijt.",
  },
  {
    q: "Wat kost een website laten maken?",
    a: "De Landingspagina vanaf €850 excl. BTW, De Bedrijfswebsite vanaf €1.750. Eenmalig, geen abonnement, geen verborgen kosten. Wat het precies kost voor jou bespreek ik in het eerste gesprek.",
  },
  {
    q: "Hoe lang duurt het voordat mijn website live gaat?",
    a: "Een Landingspagina is meestal binnen 5 werkdagen live zodra je input compleet is. Een Bedrijfswebsite doorgaans binnen 3-4 weken. Het hangt ook af van hoe snel jij beeldmateriaal en feedback aanlevert.",
  },
  {
    q: "Wat als ik later iets wil veranderen aan mijn website?",
    a: "Kleine aanpassingen kun je vaak zelf doen — ik laat je zien hoe. Grotere wijzigingen stuur ik een losse offerte voor. Geen abonnement, geen gedoe.",
  },
  {
    q: "Ben ik aan je verbonden na oplevering?",
    a: "Nee. De website is van jou. Onderhoud en hosting kun je bij mij afnemen of ergens anders regelen — helemaal aan jou.",
  },
  {
    q: "Werk je alleen in Amsterdam of door heel Nederland?",
    a: "Door heel Nederland. Alles loopt via videocall en e-mail. Een fysieke afspraak in Amsterdam kan, maar is niet nodig.",
  },
];

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
                  "Senior frontend engineer voor ZZP en MKB in Nederland. Websites die klanten opleveren.",
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
                areaServed: { "@type": "Country", name: "Nederland" },
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
                mainEntity: FAQ_ITEMS.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: { "@type": "Answer", text: item.a },
                })),
              },
            ],
          }),
        }}
      />

      <Header />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="hero-meta">
                  <span className="hero-meta-dot" />
                  <span>Beschikbaar voor nieuwe projecten</span>
                </div>
                <h1 className="hero-title">
                  Websites die <span className="accent">klanten</span>{" "}
                  opleveren.
                </h1>
                <p className="hero-desc">
                  Als ondernemer heb je geen tijd om een website te managen. Ik
                  bouw een duidelijke site die bezoekers aanzet tot contact —
                  zonder poespas, direct oplevering binnen een paar dagen.
                </p>
                <div className="hero-ctas">
                  <Link
                    href="/diensten/website-audit"
                    className="btn btn-primary"
                  >
                    Plan gratis website audit{" "}
                    <span className="btn-arrow">→</span>
                  </Link>
                  <Link href="#pakketten" className="btn btn-ghost">
                    Bekijk pakketten
                  </Link>
                </div>
                <div className="hero-clients">
                  <div className="hero-clients-label">Eerder gewerkt voor</div>
                  <div className="hero-clients-list">
                    {CLIENTS.map((c) => (
                      <span key={c} className="hero-client">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hero-portrait">
                <div className="hero-portrait-frame">
                  <Image
                    src="/tim.jpg"
                    alt="Tim Lorent, senior frontend engineer uit Amsterdam"
                    width={600}
                    height={750}
                    priority
                    sizes="(max-width: 960px) 380px, 480px"
                  />
                </div>
                <div className="hero-portrait-card">
                  <div className="name">Tim Lorent</div>
                  <div className="role">Amsterdam · Sinds 2017</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VOOR WIE */}
        <section id="voor-wie" className="voor-wie">
          <div className="container">
            <div className="voor-wie-head reveal">
              <div>
                <span className="eyebrow">Voor wie</span>
                <h2 className="display-h2">
                  Voor ondernemers die hun zaak serieus nemen.
                </h2>
              </div>
              <p className="lead">
                Je hoeft geen developer te zijn om een site te willen die werkt.
                Je hoeft ook niet met een bureau in zee. Dit is voor jou:
              </p>
            </div>
            <ul className="segment-list reveal">
              {SEGMENTS.map((s, i) => (
                <li key={s.name} className="segment-item">
                  <span className="segment-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="segment-name">{s.name}</span>
                  <span className="segment-desc">{s.desc}</span>
                  <Link
                    href="#contact"
                    className="segment-arrow"
                    aria-label={`Plan een gesprek over ${s.name}`}
                  >
                    →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* AANPAK */}
        <section id="aanpak" className="aanpak">
          <div className="container">
            <div className="aanpak-head reveal">
              <span className="eyebrow">Aanpak</span>
              <h2 className="display-h2">Drie stappen. Geen gedoe.</h2>
              <p className="lead" style={{ marginTop: "1rem" }}>
                Ambachtelijk werk, strak uitgevoerd. Ik neem je aan de hand mee
                van idee tot live — zonder dat jij er uren op kwijt bent.
              </p>
            </div>
            <div className="aanpak-grid reveal">
              {AANPAK.map((step) => (
                <div key={step.num} className="aanpak-step">
                  <div className="aanpak-step-head">
                    <span className="aanpak-step-bignum">{step.num}</span>
                    <div className="aanpak-step-illus">
                      <AanpakIllustration kind={step.illus} />
                    </div>
                  </div>
                  <div className="aanpak-step-body">
                    <h3 className="aanpak-step-title">{step.title}</h3>
                    <p className="aanpak-step-desc">{step.desc}</p>
                    <div className="aanpak-step-tag">{step.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAKKETTEN */}
        <section id="pakketten" className="pakketten">
          <div className="container">
            <div className="pakketten-head reveal">
              <div>
                <span className="eyebrow">Pakketten</span>
                <h2 className="display-h2">Drie duidelijke startpunten.</h2>
              </div>
              <p className="lead">
                Geen uren-briefjes, geen verrassingen. Helder wat je krijgt,
                helder wat het kost.
              </p>
            </div>
            <div className="pakket-grid reveal">
              {PAKKETTEN.map((p) => (
                <div
                  key={p.slug}
                  className={`pakket-card${p.featured ? " featured" : ""}`}
                >
                  {p.featured && (
                    <span className="pakket-featured-label">Meest gekozen</span>
                  )}
                  <div className="pakket-name">{p.name}</div>
                  <p className="pakket-tagline">{p.tagline}</p>
                  <div className="pakket-price">
                    {p.price !== "Gratis" && (
                      <span className="pakket-price-from">Vanaf</span>
                    )}
                    <span className="pakket-price-amount">{p.price}</span>
                  </div>
                  <div className="pakket-price-note">{p.priceNote}</div>
                  <hr className="pakket-divider" />
                  <ul className="pakket-lijst">
                    {p.items.map((item) => (
                      <li key={item}>
                        <span className="pakket-check" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/diensten/${p.slug}`}
                    className={`btn ${p.featured ? "btn-dark" : "btn-outline"}`}
                  >
                    Meer over dit pakket →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTATEN */}
        <section id="resultaten">
          <div className="container">
            <div
              className="faq-head reveal"
              style={{ maxWidth: "640px", margin: "0 0 3rem" }}
            >
              <span className="eyebrow">Resultaten</span>
              <h2 className="display-h2">Cijfers boven mooie woorden.</h2>
              <p className="lead" style={{ marginTop: "1rem" }}>
                Van grote platforms tot één-mans-zaak — het gaat altijd om wat
                de site oplevert.
              </p>
            </div>
            <div className="resultaten-grid reveal">
              <div className="resultaat-card">
                <div className="resultaat-stat">
                  +45<span className="suffix">%</span>
                </div>
                <div className="resultaat-label">
                  Abonnementsgroei bij bol.com
                </div>
                <p className="resultaat-desc">
                  Leidde de frontend-architectuurmigratie van het
                  abonnementsplatform. 4.000+ nieuwe abonnees binnengehaald in
                  één activatiecampagne.
                </p>
              </div>
              <div className="resultaat-card">
                <div className="resultaat-stat">
                  +3,4<span className="suffix">%</span>
                </div>
                <div className="resultaat-label">
                  Conversiegroei bij GrandVision
                </div>
                <p className="resultaat-desc">
                  425 nieuwe betalende klanten uit 13.000 interacties. Dezelfde
                  aanpak, nu voor ZZP en MKB.
                </p>
              </div>
              <div className="resultaat-card">
                <div className="resultaat-stat">
                  8<span className="suffix">+ jaar</span>
                </div>
                <div className="resultaat-label">
                  Ervaring met conversiegerichte websites
                </div>
                <p className="resultaat-desc">
                  Van bol.com tot kleine ondernemers. Altijd gericht op wat de
                  site moet doen — niet op hoe hij eruitziet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DARK CTA BAND */}
        <section className="home-cta-wrap">
          <div className="container">
            <div className="home-cta-band">
              <div>
                <h2>Klaar om meer uit je website te halen?</h2>
                <p>
                  Plan een gratis gesprek van 30 minuten. Geen verplichtingen,
                  wel een helder beeld van wat er kan. Ik reageer binnen één
                  werkdag.
                </p>
              </div>
              <Link href="#contact" className="btn btn-amber">
                Plan een gesprek <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="faq-section">
          <div className="container">
            <div
              className="faq-head reveal"
              style={{ textAlign: "center", margin: "0 auto 3rem" }}
            >
              <span className="eyebrow">FAQ</span>
              <h2 className="display-h2">Veelgestelde vragen</h2>
            </div>
            <Faq items={FAQ_ITEMS} />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-left reveal">
                <span className="eyebrow">Contact</span>
                <h2 className="display-h2">Laten we eens praten.</h2>
                <p>
                  Geen verplichtingen, geen offerte die je over je heen krijgt.
                  Een eerlijk gesprek over wat beter kan aan je website. Ik
                  reageer binnen één werkdag.
                </p>
                <div className="contact-items">
                  <div className="contact-item">
                    <span className="ci-label">E-mail</span>
                    <a href="mailto:tim@lorentwebworks.nl">
                      tim@lorentwebworks.nl
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="ci-label">Locatie</span>
                    <span>Amsterdam — werkend door heel Nederland</span>
                  </div>
                  <div className="contact-item">
                    <span className="ci-label">LinkedIn</span>
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
              <form
                className="contact-form reveal"
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
                  <select id="pakket" name="pakket" defaultValue="">
                    <option value="" disabled>
                      Kies een optie
                    </option>
                    <option>De Landingspagina · vanaf €850</option>
                    <option>De Bedrijfswebsite · vanaf €1.750</option>
                    <option>Gratis website-audit</option>
                    <option>Ik weet het nog niet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="bericht">Wat wil je bereiken?</label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    placeholder="Vertel me wat je doet, voor wie, en wat je wilt verbeteren. Hoe meer context, hoe beter mijn advies."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: "flex-start" }}
                >
                  Stuur bericht <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
