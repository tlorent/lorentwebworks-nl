import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Hoe kies je een goede webdesigner of webbouwer? | Lorent Webworks",
  description:
    "Op zoek naar een webdesigner of webbouwer? Waar je er een vindt, hoe je een portfolio beoordeelt, freelancer of bureau, en de rode vlaggen waar je op moet letten.",
  alternates: { canonical: "/webdesigner-kiezen" },
  openGraph: {
    title: "Hoe kies je een goede webdesigner of webbouwer?",
    description:
      "Waar je zoekt, hoe je beoordeelt en welke rode vlaggen je serieus neemt.",
    url: "https://lorentwebworks.nl/webdesigner-kiezen",
    siteName: "Lorent Webworks",
    locale: "nl_NL",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hoe kies je een goede webdesigner?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoe kies je een goede webdesigner of webbouwer?",
    description:
      "Waar je zoekt, hoe je beoordeelt en welke rode vlaggen je serieus neemt.",
    images: ["/og-image.png"],
  },
};

const FAQ_ITEMS = [
  {
    q: "Waar vind ik een goede webdesigner?",
    a: "Via aanbevelingen uit je netwerk, Google, LinkedIn en de footer van sites die je goed vindt.",
  },
  {
    q: "Wat is het verschil tussen een webdesigner en een webdeveloper?",
    a: "Een webdesigner richt zich op het ontwerp en de gebruikservaring, een webdeveloper op de techniek. Veel freelancers voor kleine sites doen allebei.",
  },
  {
    q: "Is een freelancer goedkoper dan een bureau?",
    a: "Meestal wel, door minder overhead. Voor een bedrijfswebsite betaal je bij een freelancer grofweg € 800 tot € 3.000.",
  },
  {
    q: "Hoe check ik of een webbouwer goed is?",
    a: "Bekijk het portfolio op duidelijkheid, snelheid en resultaten, test de eigen site in PageSpeed Insights, vraag naar referenties en let op welke vragen hij stelt.",
  },
  {
    q: "Moet mijn webdesigner in mijn stad zitten?",
    a: "Dat hoeft niet. Veel samenwerkingen lopen prima via videocalls. Ik werk vanuit Amsterdam voor ondernemers in heel Nederland.",
  },
];

export default function WebdesignerKiezenPage() {
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
                "@type": "Article",
                headline: "Hoe kies je een goede webdesigner of webbouwer?",
                description:
                  "Op zoek naar een webdesigner of webbouwer? Waar je er een vindt, hoe je een portfolio beoordeelt, freelancer of bureau, en de rode vlaggen waar je op moet letten.",
                author: {
                  "@type": "Person",
                  name: "Tim Lorent",
                  url: "https://lorentwebworks.nl",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Lorent Webworks",
                  url: "https://lorentwebworks.nl",
                },
                datePublished: "2026-01-15",
                dateModified: "2026-01-15",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://lorentwebworks.nl/webdesigner-kiezen",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://lorentwebworks.nl",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Gids",
                    item: "https://lorentwebworks.nl/gids",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Webdesigner kiezen",
                    item: "https://lorentwebworks.nl/webdesigner-kiezen",
                  },
                ],
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
        <section className="service-hero">
          <div className="container">
            <div className="service-hero-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/gids">Gids</Link>
              <span>/</span>
              <span>Webdesigner kiezen</span>
            </div>
            <div className="guide-header">
              <span className="guide-label">gids</span>
              <h1 className="display-h1">Hoe kies je een goede webdesigner of webbouwer?</h1>
              <p className="lead" style={{ marginTop: "1.5rem" }}>
                Er zijn duizenden webdesigners en webbouwers in Nederland, van studenten tot grote bureaus. Hoe vind je degene die bij jouw bedrijf past, en voorkom je dat je na drie maanden met een mooie site zit die niets oplevert? In deze gids lees je waar je zoekt, hoe je beoordeelt en waar je op let.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: "var(--color-card)", padding: "3rem 0" }}>
          <div className="container">
            <div className="kort-antwoord">
              <h2 className="kort-antwoord-title">Kort antwoord</h2>
              <p>
                Zoek via aanbevelingen, Google, LinkedIn en sites van ondernemers die je bewondert. Beoordeel een webbouwer op resultaten in het portfolio (snelheid, duidelijkheid, aanvragen), de vragen die hij stelt over jouw doel, een heldere offerte en wat er na oplevering gebeurt. Check de snelheid van zijn eigen site in Google PageSpeed Insights. Rode vlaggen: geen vragen over je doel, vage prijzen, langlopende contracten en domein of hosting op naam van de bouwer.
              </p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="container">
            <div className="guide-toc">
              <h2>In dit artikel</h2>
              <ol>
                <li><a href="#verschil">Webdesigner, webbouwer of webdeveloper?</a></li>
                <li><a href="#vinden">Waar vind je een goede webbouwer?</a></li>
                <li><a href="#freelancer-bureau">Freelancer of bureau?</a></li>
                <li><a href="#portfolio">Zo beoordeel je een portfolio</a></li>
                <li><a href="#gesprek">Het eerste gesprek</a></li>
                <li><a href="#rode-vlaggen">Rode vlaggen</a></li>
                <li><a href="#faq">Veelgestelde vragen</a></li>
              </ol>
            </div>
          </div>
        </section>

        <article className="guide-content">
          <div className="container">
            <section id="verschil" className="guide-section">
              <h2 className="display-h3">Webdesigner, webbouwer of webdeveloper?</h2>
              <p>De termen lopen door elkaar. Grofweg:</p>
              <ul className="guide-list">
                <li><strong>Webdesigner:</strong> richt zich op hoe de site eruitziet en werkt voor de bezoeker.</li>
                <li><strong>Webdeveloper:</strong> bouwt de techniek, schrijft code, zorgt voor snelheid en koppelingen.</li>
                <li><strong>Webbouwer:</strong> een verzamelterm, vaak voor iemand die ontwerp en bouw allebei doet.</li>
              </ul>
              <p>
                Voor een kleine bedrijfswebsite is iemand die beide kan vaak het handigst. Vraag ook wie de teksten schrijft, want dat is een vak apart.
              </p>
            </section>

            <section id="vinden" className="guide-section">
              <h2 className="display-h3">Waar vind je een goede webbouwer?</h2>

              <h3 className="guide-h4">Aanbevelingen</h3>
              <p>
                Vraag ondernemers in je netwerk met een site die je goed vindt wie die heeft gebouwd. Een tevreden klant is de beste referentie.
              </p>

              <h3 className="guide-h4">Google</h3>
              <p>
                Zoek op "website laten maken" plus je stad of branche. Wie zelf goed vindbaar is, weet vaak hoe SEO werkt.
              </p>

              <h3 className="guide-h4">LinkedIn</h3>
              <p>
                Veel freelancers zijn actief op LinkedIn. Je ziet hun ervaring, aanbevelingen en hoe ze over hun werk praten.
              </p>

              <h3 className="guide-h4">Sites die je bewondert</h3>
              <p>
                Scroll naar de footer van een site die je mooi en duidelijk vindt. Vaak staat de maker erin.
              </p>
            </section>

            <div className="guide-cta-mid">
              <div className="guide-cta-card">
                <span className="eyebrow">Lorent Webworks</span>
                <h3 className="display-h3" style={{ marginBottom: "0.75rem" }}>Senior ervaring, direct contact</h3>
                <p>
                  8+ jaar ervaring bij bol.com, GrandVision en T-Mobile, nu voor zzp en mkb. Je werkt rechtstreeks met mij, van eerste gesprek tot livegang.
                </p>
                <Link href="/#contact" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                  Plan een gratis gesprek →
                </Link>
              </div>
            </div>

            <section id="freelancer-bureau" className="guide-section">
              <h2 className="display-h3">Freelancer of bureau?</h2>
              <p>Beide kunnen goed werken. Een paar overwegingen:</p>
              <div style={{ overflowX: "auto", margin: "2rem 0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
                      <th style={{ textAlign: "left", padding: "1rem 0.5rem", fontWeight: 600 }}></th>
                      <th style={{ textAlign: "left", padding: "1rem 0.5rem", fontWeight: 600 }}>Freelancer</th>
                      <th style={{ textAlign: "left", padding: "1rem 0.5rem", fontWeight: 600 }}>Bureau</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <td style={{ padding: "1rem 0.5rem", fontWeight: 600 }}>Contact</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Rechtstreeks met de maker</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Via een accountmanager of projectleider</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <td style={{ padding: "1rem 0.5rem", fontWeight: 600 }}>Prijs</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Meestal lager</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Meestal hoger door overhead</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <td style={{ padding: "1rem 0.5rem", fontWeight: 600 }}>Snelheid</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Vaak snel, korte lijnen</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Afhankelijk van planning</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <td style={{ padding: "1rem 0.5rem", fontWeight: 600 }}>Capaciteit</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Beperkt tot één persoon</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Team met verschillende specialismen</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "1rem 0.5rem", fontWeight: 600 }}>Geschikt voor</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Bedrijfswebsites, landingspagina's</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Grote sites, webshops, complexe koppelingen</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Kies je een freelancer, vraag dan wat er gebeurt bij ziekte of vakantie en hoe je zelf kleine dingen kunt aanpassen.
              </p>
            </section>

            <section id="portfolio" className="guide-section">
              <h2 className="display-h3">Zo beoordeel je een portfolio</h2>
              <p>Kijk verder dan "mooi". Stel bij elk project deze vragen:</p>
              <ul className="guide-list">
                <li><strong>Is binnen vijf seconden duidelijk wat het bedrijf doet?</strong></li>
                <li><strong>Is er een duidelijke knop naar contact?</strong></li>
                <li><strong>Hoe snel laadt de site?</strong> Test hem in Google PageSpeed Insights.</li>
                <li><strong>Werkt hij goed op je telefoon?</strong></li>
                <li><strong>Staan er resultaten bij?</strong> Meer aanvragen, hogere conversie, betere vindbaarheid.</li>
                <li><strong>Lijken de sites allemaal op elkaar?</strong> Dat kan wijzen op één template voor iedereen.</li>
              </ul>
              <p>Test ook de eigen site van de webbouwer. Een trage site van een webbouwer zegt veel.</p>
            </section>

            <section id="gesprek" className="guide-section">
              <h2 className="display-h3">Het eerste gesprek</h2>
              <p>Een goede webbouwer stelt in het eerste gesprek meer vragen dan hij beantwoordt. Let op of hij vraagt naar:</p>
              <ul className="guide-list">
                <li>Je doel: wat moet de site opleveren?</li>
                <li>Je klanten: wie zijn ze en wat zoeken ze?</li>
                <li>Je concurrenten: wat doen zij goed of slecht?</li>
                <li>Je bestaande site: wat werkt er wel en wat niet?</li>
                <li>Hoe jij later dingen wilt aanpassen.</li>
              </ul>
              <p>
                Een lijst met vragen die jij kunt stellen vind je in <a href="/vragen-aan-webdesigner">25 vragen voordat je een website laat maken</a>.
              </p>
            </section>

            <section id="rode-vlaggen" className="guide-section">
              <h2 className="display-h3">Rode vlaggen</h2>

              <div className="guide-mistake">
                <h3>Geen vragen over je doel</h3>
                <p><strong>Waarom:</strong> Wie direct begint over kleuren en lettertypes, bouwt een site voor de vorm.</p>
              </div>

              <div className="guide-mistake">
                <h3>Vage of open prijzen</h3>
                <p><strong>Waarom:</strong> Zonder duidelijke offerte loop je risico op een hoge rekening achteraf.</p>
              </div>

              <div className="guide-mistake">
                <h3>Langlopend contract verplicht</h3>
                <p><strong>Waarom:</strong> Een abonnement van jaren zonder opzegmogelijkheid maakt je afhankelijk.</p>
              </div>

              <div className="guide-mistake">
                <h3>Domein en hosting op naam van de bouwer</h3>
                <p><strong>Waarom:</strong> Als de samenwerking stopt, wil je je eigen domein meenemen.</p>
              </div>

              <div className="guide-mistake">
                <h3>Geen voorbeelden of referenties</h3>
                <p><strong>Waarom:</strong> Een goede webbouwer laat graag zien wat hij heeft gemaakt.</p>
              </div>

              <div className="guide-mistake">
                <h3>Beloftes over de nummer 1-positie in Google</h3>
                <p><strong>Waarom:</strong> Niemand kan een vaste positie in Google garanderen.</p>
              </div>
            </section>

            <section className="guide-related">
              <h2 className="display-h3">Meer lezen</h2>
              <ul>
                <li><Link href="/website-laten-maken">→ Website laten maken: de complete gids</Link></li>
                <li><Link href="/wat-kost-een-website">→ Wat kost een website laten maken in 2026?</Link></li>
                <li><Link href="/website-checklist">→ Website checklist: 30 punten</Link></li>
                <li><Link href="/vragen-aan-webdesigner">→ 25 vragen voor je webdesigner</Link></li>
              </ul>
            </section>
          </div>
        </article>

        <section id="faq" className="section-alt">
          <div className="container">
            <div className="faq-head" style={{ textAlign: "center", margin: "0 auto 3rem" }}>
              <span className="eyebrow">FAQ</span>
              <h2 className="display-h2">Veelgestelde vragen</h2>
            </div>
            <Faq items={FAQ_ITEMS} />
          </div>
        </section>

        <section>
          <div className="container">
            <div className="guide-cta-final">
              <span className="eyebrow">Lorent Webworks</span>
              <h2 className="display-h2">Laten we eens praten</h2>
              <p className="lead" style={{ marginTop: "1rem" }}>
                Een gesprek van 30 minuten over wat beter kan aan je website. Zonder verplichtingen, en ik reageer binnen één werkdag.
              </p>
              <Link href="/#contact" className="btn btn-primary" style={{ marginTop: "2rem" }}>
                Plan een gesprek →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
