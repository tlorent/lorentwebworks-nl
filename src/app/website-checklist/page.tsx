import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Website checklist: 30 punten voor een site die klanten oplevert",
  description:
    "Levert je website genoeg op? Loop deze checklist van 30 punten door: boodschap, teksten, vertrouwen, snelheid, mobiel, SEO, toegankelijkheid en contact. Inclusief gratis audit.",
  alternates: { canonical: "/website-checklist" },
  openGraph: {
    title: "Website checklist: 30 punten voor een site die klanten oplevert",
    description:
      "Check je eigen website op boodschap, snelheid, SEO, toegankelijkheid en contact.",
    url: "https://lorentwebworks.nl/website-checklist",
    siteName: "Lorent Webworks",
    locale: "nl_NL",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Website checklist: 30 punten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website checklist: 30 punten voor een site die klanten oplevert",
    description:
      "Check je eigen website op boodschap, snelheid, SEO, toegankelijkheid en contact.",
    images: ["/og-image.png"],
  },
};

const FAQ_ITEMS = [
  {
    q: "Hoe controleer ik mijn website?",
    a: "Loop een checklist door op boodschap, teksten, vertrouwen, snelheid, mobiel, vindbaarheid, toegankelijkheid en contact. Test de snelheid in Google PageSpeed Insights.",
  },
  {
    q: "Waarom levert mijn website geen klanten op?",
    a: "Vaak omdat niet direct duidelijk is wat je doet, er te weinig bewijs op staat, de site traag is of contact opnemen te veel moeite kost.",
  },
  {
    q: "Hoe snel moet een website laden?",
    a: "Streef naar een laadtijd onder de twee à drie seconden. Google gebruikt de Core Web Vitals, met een LCP onder 2,5 seconde als grens voor \"goed\".",
  },
  {
    q: "Geldt de European Accessibility Act voor mijn website?",
    a: "Dat hangt af van je bedrijf en je diensten. Micro-ondernemingen met minder dan 10 werknemers en maximaal € 2 miljoen omzet of balanstotaal zijn vrijgesteld voor diensten. Check bij twijfel de ACM of een specialist.",
  },
  {
    q: "Wat is een website-audit?",
    a: "Een grondige analyse van je bestaande site, met een rapport van concrete verbeterpunten. Bij Lorent Webworks is de audit gratis en krijg je binnen 5 werkdagen een rapport en een doorloopgesprek.",
  },
];

export default function WebsiteChecklistPage() {
  return (
    <>
      <ScrollReveal />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Website checklist: 30 punten voor een site die klanten oplevert",
                description:
                  "Levert je website genoeg op? Loop deze checklist van 30 punten door: boodschap, teksten, vertrouwen, snelheid, mobiel, SEO, toegankelijkheid en contact.",
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
                  "@id": "https://lorentwebworks.nl/website-checklist",
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
                    name: "Website checklist",
                    item: "https://lorentwebworks.nl/website-checklist",
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
              <span>Website checklist</span>
            </div>
            <div className="guide-header">
              <span className="guide-label">gids</span>
              <h1 className="display-h1">Website checklist: 30 punten voor een site die klanten oplevert</h1>
              <p className="lead" style={{ marginTop: "1.5rem" }}>
                Je hebt een website, maar de aanvragen blijven uit. Waar ligt het aan? Met deze checklist loop je je site in een half uur zelf door. Elk punt waar je "nee" op antwoordt, is een kans om meer uit je website te halen.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: "var(--color-card)", padding: "3rem 0" }}>
          <div className="container">
            <div className="kort-antwoord">
              <h2 className="kort-antwoord-title">Kort antwoord</h2>
              <p>
                Een website die klanten oplevert, maakt binnen vijf seconden duidelijk wat je doet en voor wie, laat bewijs zien (reviews, resultaten), laadt binnen twee à drie seconden, werkt goed op mobiel, is vindbaar in Google met goede titels en een Google Bedrijfsprofiel, is toegankelijk en maakt contact opnemen heel makkelijk. Check daarnaast of je meet hoeveel aanvragen je site oplevert.
              </p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="container">
            <div className="guide-toc">
              <h2>In dit artikel</h2>
              <ol>
                <li><a href="#boodschap">Boodschap en eerste indruk</a></li>
                <li><a href="#teksten">Teksten</a></li>
                <li><a href="#vertrouwen">Vertrouwen</a></li>
                <li><a href="#snelheid">Snelheid en techniek</a></li>
                <li><a href="#mobiel">Mobiel</a></li>
                <li><a href="#seo">Vindbaarheid</a></li>
                <li><a href="#toegankelijkheid">Toegankelijkheid</a></li>
                <li><a href="#contact">Contact en meten</a></li>
                <li><a href="#faq">Veelgestelde vragen</a></li>
              </ol>
            </div>
          </div>
        </section>

        <article className="guide-content">
          <div className="container">
            <section id="boodschap" className="guide-section">
              <h2 className="display-h3">Boodschap en eerste indruk</h2>
              <ol className="guide-list">
                <li><strong>Ziet een bezoeker binnen vijf seconden wat je doet?</strong> Laat iemand die je bedrijf niet kent je homepage vijf seconden bekijken en vraag wat je doet.</li>
                <li><strong>Is duidelijk voor wie je het doet?</strong> "Voor iedereen" spreekt niemand aan.</li>
                <li><strong>Staat er één duidelijke knop bovenaan?</strong> Bijvoorbeeld "Plan een gesprek" of "Vraag een offerte aan".</li>
                <li><strong>Past de stijl bij je klanten?</strong> Een advocatenkantoor en een tattooshop vragen een andere uitstraling.</li>
              </ol>
            </section>

            <section id="teksten" className="guide-section">
              <h2 className="display-h3">Teksten</h2>
              <ol className="guide-list" start={5}>
                <li><strong>Schrijf je vanuit je klant?</strong> Tel hoe vaak "wij" en "ik" voorkomen ten opzichte van "jij" en "je".</li>
                <li><strong>Benoem je het probleem dat je oplost?</strong></li>
                <li><strong>Is elke dienst concreet beschreven,</strong> met wat de klant krijgt en wat het oplevert?</li>
                <li><strong>Zijn je zinnen kort en je alinea's luchtig?</strong></li>
                <li><strong>Noem je prijzen of een indicatie?</strong> Prijsindicaties verlagen de drempel om contact op te nemen.</li>
              </ol>
            </section>

            <div className="guide-cta-mid">
              <div className="guide-cta-card">
                <span className="eyebrow">Gratis website-audit</span>
                <h3 className="display-h3" style={{ marginBottom: "0.75rem" }}>Liever dat ik meekijk?</h3>
                <p>
                  Ik analyseer je site op structuur, teksten, SEO, snelheid en conversie, en je krijgt een rapport met concrete acties plus een doorloopgesprek van 30 minuten. Binnen 5 werkdagen, zonder verplichting.
                </p>
                <Link href="/diensten/website-audit" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                  Plan een gratis audit →
                </Link>
              </div>
            </div>

            <section id="vertrouwen" className="guide-section">
              <h2 className="display-h3">Vertrouwen</h2>
              <ol className="guide-list" start={10}>
                <li><strong>Staan er reviews of testimonials op je site,</strong> met naam en liefst een foto?</li>
                <li><strong>Laat je resultaten of voorbeelden zien?</strong> Cijfers, voor-en-na, projecten.</li>
                <li><strong>Is er een foto van jou of je team?</strong> Mensen kopen van mensen.</li>
                <li><strong>Staan je contactgegevens en KvK-nummer vindbaar op de site?</strong></li>
                <li><strong>Is je site beveiligd met https?</strong> Een slotje in de adresbalk is een basisvoorwaarde.</li>
              </ol>
            </section>

            <section id="snelheid" className="guide-section">
              <h2 className="display-h3">Snelheid en techniek</h2>
              <ol className="guide-list" start={15}>
                <li><strong>Laadt je site snel?</strong> Test hem in Google PageSpeed Insights. Ik streef naar een score van 95 of hoger en een laadtijd onder de twee seconden.</li>
                <li><strong>Zijn afbeeldingen gecomprimeerd</strong> en in een modern formaat zoals WebP of AVIF?</li>
                <li><strong>Haal je de Core Web Vitals?</strong> Google kijkt naar laadsnelheid (LCP onder 2,5 seconde), reactiesnelheid (INP onder 200 milliseconden) en visuele stabiliteit (CLS onder 0,1).</li>
                <li><strong>Werken alle links en formulieren?</strong> Test je contactformulier zelf.</li>
                <li><strong>Is je website up-to-date?</strong> Verouderde plugins zijn een veiligheidsrisico.</li>
              </ol>
            </section>

            <section id="mobiel" className="guide-section">
              <h2 className="display-h3">Mobiel</h2>
              <ol className="guide-list" start={20}>
                <li><strong>Werkt je site goed op een telefoon?</strong> Het grootste deel van je bezoekers komt vaak via mobiel.</li>
                <li><strong>Is je telefoonnummer klikbaar?</strong></li>
                <li><strong>Zijn knoppen groot genoeg om met een duim te raken?</strong></li>
                <li><strong>Is de tekst leesbaar zonder in te zoomen?</strong></li>
              </ol>
            </section>

            <section id="seo" className="guide-section">
              <h2 className="display-h3">Vindbaarheid</h2>
              <ol className="guide-list" start={24}>
                <li><strong>Heeft elke pagina een unieke titel en meta description</strong> met de woorden waarop je gevonden wilt worden?</li>
                <li><strong>Heb je een Google Bedrijfsprofiel,</strong> gekoppeld aan je site en met recente reviews?</li>
                <li><strong>Beantwoorden je pagina's de vragen die je klanten stellen?</strong> Denk aan prijzen, werkwijze, levertijd.</li>
                <li><strong>Staan je plaatsnaam en werkgebied op je site?</strong> Belangrijk voor lokale zoekopdrachten.</li>
              </ol>
            </section>

            <section id="toegankelijkheid" className="guide-section">
              <h2 className="display-h3">Toegankelijkheid</h2>
              <ol className="guide-list" start={28}>
                <li><strong>Hebben afbeeldingen een alt-tekst</strong> en is er genoeg contrast tussen tekst en achtergrond? Sinds juni 2025 geldt de European Accessibility Act voor veel bedrijven met online diensten. Micro-ondernemingen zijn vrijgesteld, maar een toegankelijke site helpt elke bezoeker. Een snelle check doe je via ismijnsitetoegankelijk.nl.</li>
              </ol>
            </section>

            <section id="contact" className="guide-section">
              <h2 className="display-h3">Contact en meten</h2>
              <ol className="guide-list" start={29}>
                <li><strong>Kun je met maximaal twee klikken contact opnemen?</strong> En vraagt je formulier alleen wat echt nodig is?</li>
                <li><strong>Meet je hoeveel aanvragen je site oplevert?</strong> Met conversietracking zie je welke pagina's werken en welke niet.</li>
              </ol>
            </section>

            <section className="guide-section">
              <h2 className="display-h3">Hoe scoor je?</h2>
              <ul className="guide-list">
                <li><strong>25 tot 30 keer ja:</strong> je site staat er goed voor. Kleine optimalisaties kunnen nog veel opleveren.</li>
                <li><strong>15 tot 24 keer ja:</strong> er liggen duidelijke kansen. Begin bij boodschap, contact en snelheid.</li>
                <li><strong>Minder dan 15 keer ja:</strong> je site houdt je waarschijnlijk tegen. Een audit of een nieuwe site loont.</li>
              </ul>
            </section>

            <section className="guide-related">
              <h2 className="display-h3">Meer lezen</h2>
              <ul>
                <li><Link href="/website-laten-maken">→ Website laten maken: de complete gids</Link></li>
                <li><Link href="/wat-kost-een-website">→ Wat kost een website laten maken in 2026?</Link></li>
                <li><Link href="/webdesigner-kiezen">→ Hoe kies je een goede webdesigner?</Link></li>
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
              <span className="eyebrow">Gratis website-audit</span>
              <h2 className="display-h2">Benieuwd hoe jouw site scoort?</h2>
              <p className="lead" style={{ marginTop: "1rem" }}>
                Ik loop je website door en stuur je binnen 5 werkdagen een rapport met concrete acties. Gratis en zonder verplichting.
              </p>
              <Link href="/diensten/website-audit" className="btn btn-primary" style={{ marginTop: "2rem" }}>
                Plan een gratis audit →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
