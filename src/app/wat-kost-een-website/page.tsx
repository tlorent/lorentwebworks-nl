import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Wat kost een website laten maken in 2026? Prijzen en voorbeelden",
  description:
    "Wat kost een website laten maken in 2026? Prijzen voor zelf bouwen, een freelancer en een bureau, wat de prijs bepaalt, verborgen kosten en hoe je een eerlijke offerte herkent.",
  alternates: { canonical: "/wat-kost-een-website" },
  openGraph: {
    title: "Wat kost een website laten maken in 2026?",
    description:
      "Prijzen per optie, wat de prijs bepaalt en welke kosten je makkelijk vergeet.",
    url: "https://lorentwebworks.nl/wat-kost-een-website",
    siteName: "Lorent Webworks",
    locale: "nl_NL",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wat kost een website laten maken in 2026?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wat kost een website laten maken in 2026?",
    description:
      "Prijzen per optie, wat de prijs bepaalt en welke kosten je makkelijk vergeet.",
    images: ["/og-image.png"],
  },
};

const FAQ_ITEMS = [
  {
    q: "Wat kost een simpele website?",
    a: "Zelf bouwen kan vanaf ongeveer € 15 per maand. Een professionele landingspagina laten maken kost bij een freelancer vaak vanaf zo'n € 800.",
  },
  {
    q: "Wat kost een website met 5 pagina's?",
    a: "Bij een freelancer grofweg € 1.500 tot € 3.000, bij een bureau vaak € 3.500 tot € 5.000 of meer. Bij Lorent Webworks begint een site van 4 tot 6 pagina's vanaf € 1.750 excl. btw.",
  },
  {
    q: "Zijn er maandelijkse kosten aan een website?",
    a: "Meestal wel: domein, hosting en eventueel onderhoud of een abonnement op een websitebouwer. Vraag vooraf wat er bijkomt.",
  },
  {
    q: "Waarom verschillen de prijzen zo veel?",
    a: "Door verschillen in aantal pagina's, maatwerk, wie de teksten schrijft, functionaliteit, ervaring van de bouwer en de overhead van een bureau.",
  },
  {
    q: "Kan ik mijn website aftrekken als ondernemer?",
    a: "Een website is voor ondernemers een zakelijke kostenpost. Hoe je die precies verwerkt, bespreek je het best met je boekhouder.",
  },
];

export default function WatKostEenWebsitePage() {
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
                headline: "Wat kost een website laten maken in 2026?",
                description:
                  "Wat kost een website laten maken in 2026? Prijzen voor zelf bouwen, een freelancer en een bureau, wat de prijs bepaalt, verborgen kosten en hoe je een eerlijke offerte herkent.",
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
                  "@id": "https://lorentwebworks.nl/wat-kost-een-website",
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
                    name: "Wat kost een website",
                    item: "https://lorentwebworks.nl/wat-kost-een-website",
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
        {/* HERO */}
        <section className="service-hero">
          <div className="container">
            <div className="service-hero-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/gids">Gids</Link>
              <span>/</span>
              <span>Wat kost een website</span>
            </div>
            <div className="guide-header">
              <span className="guide-label">gids</span>
              <h1 className="display-h1">Wat kost een website laten maken in 2026?</h1>
              <p className="lead" style={{ marginTop: "1.5rem" }}>
                "Wat kost een website?" is een van de meest gestelde vragen van ondernemers, en het antwoord "dat hangt ervan af" helpt niemand. In deze gids zet ik de prijzen per optie op een rij, laat ik zien wat de prijs bepaalt en welke kosten je makkelijk vergeet.
              </p>
            </div>
          </div>
        </section>

        {/* KORT ANTWOORD */}
        <section style={{ background: "var(--color-card)", padding: "3rem 0" }}>
          <div className="container">
            <div className="kort-antwoord">
              <h2 className="kort-antwoord-title">Kort antwoord</h2>
              <p>
                Zelf bouwen met een websitebouwer kost grofweg € 15 tot € 50 per maand, plus veel eigen tijd. Een freelancer rekent voor een kleine bedrijfswebsite meestal € 800 tot € 3.000. Een webbureau begint voor een mkb-site vaak rond € 4.000 tot € 8.000. Reken daarnaast op terugkerende kosten voor domein, hosting en onderhoud. Bij Lorent Webworks begint een landingspagina vanaf € 850 en een bedrijfswebsite vanaf € 1.750 (excl. btw).
              </p>
            </div>
          </div>
        </section>

        {/* TOC */}
        <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="container">
            <div className="guide-toc">
              <h2>In dit artikel</h2>
              <ol>
                <li><a href="#prijzen">Prijzen per optie</a></li>
                <li><a href="#bepaalt">Wat bepaalt de prijs?</a></li>
                <li><a href="#terugkerend">Terugkerende kosten</a></li>
                <li><a href="#vergeten">Kosten die je makkelijk vergeet</a></li>
                <li><a href="#oplevert">Wat levert een website op?</a></li>
                <li><a href="#offertes">Zo vergelijk je offertes</a></li>
                <li><a href="#faq">Veelgestelde vragen</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <article className="guide-content">
          <div className="container">
            {/* Prijzen per optie */}
            <section id="prijzen" className="guide-section">
              <h2 className="display-h3">Prijzen per optie</h2>
              <div style={{ overflowX: "auto", margin: "2rem 0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
                      <th style={{ textAlign: "left", padding: "1rem 0.5rem", fontWeight: 600 }}>Optie</th>
                      <th style={{ textAlign: "left", padding: "1rem 0.5rem", fontWeight: 600 }}>Eenmalig</th>
                      <th style={{ textAlign: "left", padding: "1rem 0.5rem", fontWeight: 600 }}>Per maand</th>
                      <th style={{ textAlign: "left", padding: "1rem 0.5rem", fontWeight: 600 }}>Geschikt voor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <td style={{ padding: "1rem 0.5rem" }}>Websitebouwer (zelf)</td>
                      <td style={{ padding: "1rem 0.5rem" }}>€ 0</td>
                      <td style={{ padding: "1rem 0.5rem" }}>ca. € 15–50</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Starters met tijd en een eenvoudige site</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <td style={{ padding: "1rem 0.5rem" }}>Freelancer</td>
                      <td style={{ padding: "1rem 0.5rem" }}>ca. € 800–3.000</td>
                      <td style={{ padding: "1rem 0.5rem" }}>€ 0–50</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Zzp'ers en kleine mkb'ers</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "1rem 0.5rem" }}>Webbureau</td>
                      <td style={{ padding: "1rem 0.5rem" }}>ca. € 4.000–8.000+</td>
                      <td style={{ padding: "1rem 0.5rem" }}>vaak € 50–250</td>
                      <td style={{ padding: "1rem 0.5rem" }}>Grotere sites, webshops, koppelingen</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                De bedragen zijn indicaties voor een standaard bedrijfswebsite in Nederland. Webshops en maatwerkplatforms vallen hoger uit. Het uurtarief van een freelance webdeveloper ligt in 2026 doorgaans tussen € 60 en € 120.
              </p>

              <h3 className="guide-h4">Lorent Webworks</h3>
              <ul className="guide-list">
                <li><strong>De Landingspagina:</strong> vanaf € 850 excl. btw, eenmalig, binnen 5 werkdagen. Een strategisch gesprek, een pagina op maat met teksten van mij, geoptimaliseerd voor Google, snel en mobielvriendelijk, één revisieronde.</li>
                <li><strong>De Bedrijfswebsite:</strong> vanaf € 1.750 excl. btw, eenmalig. Alles uit de landingspagina, plus 4 tot 6 pagina's, SEO per pagina, conversietracking en twee revisierondes.</li>
                <li><strong>De Website-audit:</strong> gratis, binnen 5 werkdagen. Voor als je al een site hebt die weinig oplevert.</li>
              </ul>
            </section>

            {/* Wat bepaalt de prijs */}
            <section id="bepaalt" className="guide-section">
              <h2 className="display-h3">Wat bepaalt de prijs?</h2>

              <h3 className="guide-h4">Aantal pagina's</h3>
              <p>
                Een landingspagina is een ander project dan een site met tien dienstpagina's. Elke pagina vraagt structuur, tekst en ontwerp.
              </p>

              <h3 className="guide-h4">Wie schrijft de teksten?</h3>
              <p>
                Copywriting kost tijd, maar bepaalt grotendeels of je site aanvragen oplevert. Vraag of teksten in de prijs zitten.
              </p>

              <h3 className="guide-h4">Ontwerp op maat of een template</h3>
              <p>
                Een template is sneller en goedkoper. Maatwerk past beter bij je merk en is vaak sneller in laadtijd.
              </p>

              <h3 className="guide-h4">Functionaliteit</h3>
              <p>
                Een afsprakenplanner, meertaligheid, een klantportaal of een webshop maken een project groter.
              </p>

              <h3 className="guide-h4">SEO en snelheid</h3>
              <p>
                Basis-SEO hoort er standaard bij. Uitgebreid zoekwoordonderzoek, extra content of technische optimalisatie kost meer, en levert op de lange termijn vaak het meeste op.
              </p>

              <h3 className="guide-h4">Revisierondes</h3>
              <p>
                Hoe meer rondes, hoe meer uren. Een vaste afspraak voorkomt verrassingen.
              </p>
            </section>

            {/* CTA MID */}
            <div className="guide-cta-mid">
              <div className="guide-cta-card">
                <span className="eyebrow">Pakketten</span>
                <h3 className="display-h3" style={{ marginBottom: "0.75rem" }}>Helder wat je krijgt, helder wat het kost</h3>
                <p>
                  Geen urenbriefjes. Een landingspagina vanaf € 850 of een bedrijfswebsite vanaf € 1.750, eenmalig, excl. btw.
                </p>
                <Link href="/#pakketten" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                  Bekijk de pakketten →
                </Link>
              </div>
            </div>

            {/* Terugkerende kosten */}
            <section id="terugkerend" className="guide-section">
              <h2 className="display-h3">Terugkerende kosten</h2>
              <ul className="guide-list">
                <li><strong>Domeinnaam:</strong> een .nl-domein kost meestal een paar euro tot ruim een tientje per jaar.</li>
                <li><strong>Hosting:</strong> van een paar euro per maand voor eenvoudige hosting tot meer voor snelle, beheerde hosting.</li>
                <li><strong>Websitebouwer-abonnement:</strong> als je site op Wix of Squarespace draait, betaal je maandelijks.</li>
                <li><strong>Onderhoud:</strong> updates, back-ups en beveiliging. Bij WordPress-sites is dit belangrijk vanwege plugins.</li>
                <li><strong>E-mail:</strong> zakelijke mail via bijvoorbeeld Google Workspace of Microsoft 365.</li>
              </ul>
              <p>
                Vraag altijd wat er na oplevering maandelijks of jaarlijks bijkomt, en of je ergens aan vastzit.
              </p>
            </section>

            {/* Kosten die je vergeet */}
            <section id="vergeten" className="guide-section">
              <h2 className="display-h3">Kosten die je makkelijk vergeet</h2>
              <ul className="guide-list">
                <li><strong>Fotografie:</strong> eigen foto's maken een site persoonlijker dan stockbeelden.</li>
                <li><strong>Logo of huisstijl:</strong> heb je die nog niet, dan komt dat vaak eerst.</li>
                <li><strong>Teksten vertalen:</strong> voor een Engelstalige versie.</li>
                <li><strong>Je eigen tijd:</strong> input geven, feedback, teksten checken.</li>
                <li><strong>Doorontwikkeling:</strong> nieuwe pagina's of aanpassingen na een jaar.</li>
              </ul>
            </section>

            {/* Wat levert het op */}
            <section id="oplevert" className="guide-section">
              <h2 className="display-h3">Wat levert een website op?</h2>
              <p>
                De echte vraag is wat je website je oplevert. Reken het eens uit: als een nieuwe klant voor jou gemiddeld € 500 waard is, heb je een site van € 1.750 terugverdiend met vier klanten. Een site die maandelijks een paar aanvragen extra binnenhaalt, betaalt zich snel terug.
              </p>
              <p>
                Uit mijn eigen werk: bij GrandVision leverde een nieuwe feature 425 nieuwe betalende klanten op uit 13.000 interacties. Dezelfde aandacht voor wat een pagina moet opleveren, pas ik toe bij sites voor zzp en mkb.
              </p>
            </section>

            {/* Offertes vergelijken */}
            <section id="offertes" className="guide-section">
              <h2 className="display-h3">Zo vergelijk je offertes</h2>
              <p>Leg offertes naast elkaar en check:</p>
              <ol className="guide-list">
                <li><strong>Wat zit erin?</strong> Aantal pagina's, teksten, SEO, revisierondes, tracking.</li>
                <li><strong>Wat zit er niet in?</strong> Hosting, domein, foto's, onderhoud.</li>
                <li><strong>Wat zijn de terugkerende kosten?</strong></li>
                <li><strong>Van wie zijn de site en het domein na oplevering?</strong></li>
                <li><strong>Hoe lang duurt het?</strong></li>
                <li><strong>Wat gebeurt er als je later iets wilt veranderen?</strong></li>
              </ol>
              <p>
                Meer vragen om te stellen vind je in <a href="/vragen-aan-webdesigner">25 vragen voordat je een website laat maken</a>.
              </p>
            </section>

            {/* Meer lezen */}
            <section className="guide-related">
              <h2 className="display-h3">Meer lezen</h2>
              <ul>
                <li><Link href="/website-laten-maken">→ Website laten maken: de complete gids</Link></li>
                <li><Link href="/webdesigner-kiezen">→ Hoe kies je een goede webdesigner?</Link></li>
                <li><Link href="/website-checklist">→ Website checklist: 30 punten</Link></li>
                <li><Link href="/vragen-aan-webdesigner">→ 25 vragen voor je webdesigner</Link></li>
              </ul>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section id="faq" className="section-alt">
          <div className="container">
            <div className="faq-head" style={{ textAlign: "center", margin: "0 auto 3rem" }}>
              <span className="eyebrow">FAQ</span>
              <h2 className="display-h2">Veelgestelde vragen</h2>
            </div>
            <Faq items={FAQ_ITEMS} />
          </div>
        </section>

        {/* CTA FINAL */}
        <section>
          <div className="container">
            <div className="guide-cta-final">
              <span className="eyebrow">Lorent Webworks</span>
              <h2 className="display-h2">Weten wat jouw website kost?</h2>
              <p className="lead" style={{ marginTop: "1rem" }}>
                Plan een gratis gesprek van 30 minuten. Je krijgt een helder beeld en een vaste prijs. Ik reageer binnen één werkdag.
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
