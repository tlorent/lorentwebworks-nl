import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "25 vragen om te stellen voordat je een website laat maken",
  description:
    "Voorkom verrassingen. 25 vragen om aan een webdesigner of webbouwer te stellen over aanpak, prijs, teksten, SEO, snelheid, eigendom, onderhoud en wat er na oplevering gebeurt.",
  alternates: { canonical: "/vragen-aan-webdesigner" },
  openGraph: {
    title: "25 vragen om te stellen voordat je een website laat maken",
    description:
      "Vragen over aanpak, prijs, SEO, eigendom en onderhoud, zodat je weet waar je aan begint.",
    url: "https://lorentwebworks.nl/vragen-aan-webdesigner",
    siteName: "Lorent Webworks",
    locale: "nl_NL",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "25 vragen voor je webdesigner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "25 vragen om te stellen voordat je een website laat maken",
    description:
      "Vragen over aanpak, prijs, SEO, eigendom en onderhoud, zodat je weet waar je aan begint.",
    images: ["/og-image.png"],
  },
};

const FAQ_ITEMS = [
  {
    q: "Wat moet ik vragen aan een webdesigner?",
    a: "Vraag naar ervaring en aanpak, wat er wel en niet in de prijs zit, wie de teksten schrijft, wat er gebeurt aan SEO en snelheid, van wie de site en het domein zijn, en of je na oplevering ergens aan vastzit.",
  },
  {
    q: "Wat moet ik voorbereiden voor een gesprek met een webbouwer?",
    a: "Het doel van je website, je ideale klant, voorbeelden van sites die je goed vindt, je budget en planning, en welke materialen je al hebt.",
  },
  {
    q: "Hoe herken ik een goede offerte voor een website?",
    a: "Een goede offerte noemt precies wat je krijgt, wat er niet in zit, de terugkerende kosten, het aantal revisierondes en de planning.",
  },
  {
    q: "Moet ik meerdere offertes opvragen?",
    a: "Twee of drie offertes geven een goed beeld. Vergelijk ze op inhoud en aanpak, verder dan alleen de prijs.",
  },
  {
    q: "Wat als ik na oplevering iets wil veranderen?",
    a: "Vraag vooraf hoe dat werkt. Kleine aanpassingen doe je bij een goede site vaak zelf; grotere wijzigingen spreek je per keer af.",
  },
];

export default function VragenAanWebdesignerPage() {
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
                headline: "25 vragen om te stellen voordat je een website laat maken",
                description:
                  "Voorkom verrassingen. 25 vragen om aan een webdesigner of webbouwer te stellen over aanpak, prijs, teksten, SEO, snelheid, eigendom, onderhoud en wat er na oplevering gebeurt.",
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
                  "@id": "https://lorentwebworks.nl/vragen-aan-webdesigner",
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
                    name: "Vragen aan webdesigner",
                    item: "https://lorentwebworks.nl/vragen-aan-webdesigner",
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
              <span>Vragen aan webdesigner</span>
            </div>
            <div className="guide-header">
              <span className="guide-label">gids</span>
              <h1 className="display-h1">25 vragen om te stellen voordat je een website laat maken</h1>
              <p className="lead" style={{ marginTop: "1.5rem" }}>
                Het eerste gesprek met een webdesigner of webbouwer bepaalt veel. Met de juiste vragen weet je snel of iemand bij je past, wat je precies krijgt en waar je later niet voor verrast wilt worden. Hieronder vind je 25 vragen, per onderwerp.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: "var(--color-card)", padding: "3rem 0" }}>
          <div className="container">
            <div className="kort-antwoord">
              <h2 className="kort-antwoord-title">Kort antwoord</h2>
              <p>
                Vraag naar de aanpak ("Hoe ziet het traject eruit?"), de prijs ("Wat zit er wel en niet in?"), de teksten ("Wie schrijft ze?"), vindbaarheid en snelheid ("Hoe snel laadt de site en hoe zit het met SEO?"), eigendom ("Staan domein en site op mijn naam?") en wat er na oplevering gebeurt ("Kan ik zelf dingen aanpassen en zit ik ergens aan vast?").
              </p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="container">
            <div className="guide-toc">
              <h2>In dit artikel</h2>
              <ol>
                <li><a href="#aanpak">Vragen over ervaring en aanpak</a></li>
                <li><a href="#prijs">Vragen over prijs en planning</a></li>
                <li><a href="#teksten">Vragen over teksten en ontwerp</a></li>
                <li><a href="#seo">Vragen over SEO, snelheid en toegankelijkheid</a></li>
                <li><a href="#eigendom">Vragen over eigendom en techniek</a></li>
                <li><a href="#na-oplevering">Vragen over na de oplevering</a></li>
                <li><a href="#voorbereiden">Wat jij zelf moet voorbereiden</a></li>
                <li><a href="#faq">Veelgestelde vragen</a></li>
              </ol>
            </div>
          </div>
        </section>

        <article className="guide-content">
          <div className="container">
            <section id="aanpak" className="guide-section">
              <h2 className="display-h3">Vragen over ervaring en aanpak</h2>
              <ol className="guide-list">
                <li><strong>Voor welke bedrijven heb je eerder gewerkt?</strong> Bij voorkeur in een vergelijkbare branche of grootte.</li>
                <li><strong>Kun je voorbeelden laten zien met resultaten?</strong> Meer aanvragen, betere vindbaarheid, hogere conversie.</li>
                <li><strong>Hoe ziet je traject eruit, van eerste gesprek tot livegang?</strong></li>
                <li><strong>Werk ik rechtstreeks met jou of met iemand anders?</strong></li>
                <li><strong>Wat heb je van mij nodig, en wanneer?</strong></li>
              </ol>
            </section>

            <section id="prijs" className="guide-section">
              <h2 className="display-h3">Vragen over prijs en planning</h2>
              <ol className="guide-list" start={6}>
                <li><strong>Wat kost het, en wat zit daar precies in?</strong> Aantal pagina's, teksten, SEO, revisierondes, tracking.</li>
                <li><strong>Wat zit er niet in?</strong> Hosting, domein, foto's, extra pagina's.</li>
                <li><strong>Hoeveel revisierondes zijn inbegrepen?</strong></li>
                <li><strong>Wat kost een aanpassing of uitbreiding later?</strong></li>
                <li><strong>Wanneer staat de site live?</strong> En wat gebeurt er als het uitloopt?</li>
                <li><strong>Hoe verloopt de betaling?</strong> Vooraf, in termijnen of bij oplevering?</li>
              </ol>
              <p>
                Een overzicht van gangbare prijzen vind je in <a href="/wat-kost-een-website">wat kost een website laten maken</a>.
              </p>
            </section>

            <div className="guide-cta-mid">
              <div className="guide-cta-card">
                <span className="eyebrow">Lorent Webworks</span>
                <h3 className="display-h3" style={{ marginBottom: "0.75rem" }}>Stel je vragen gewoon aan mij</h3>
                <p>
                  In een gratis gesprek van 30 minuten beantwoord ik al je vragen en krijg je een helder beeld van wat er kan, en wat het kost.
                </p>
                <Link href="/#contact" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                  Plan een gesprek →
                </Link>
              </div>
            </div>

            <section id="teksten" className="guide-section">
              <h2 className="display-h3">Vragen over teksten en ontwerp</h2>
              <ol className="guide-list" start={12}>
                <li><strong>Wie schrijft de teksten?</strong> En zit dat in de prijs?</li>
                <li><strong>Werk je met een template of ontwerp je op maat?</strong></li>
                <li><strong>Hoe zorg je dat de site past bij mijn merk en mijn klanten?</strong></li>
                <li><strong>Krijg ik tussentijds een preview om op te reageren?</strong></li>
              </ol>
            </section>

            <section id="seo" className="guide-section">
              <h2 className="display-h3">Vragen over SEO, snelheid en toegankelijkheid</h2>
              <ol className="guide-list" start={16}>
                <li><strong>Wat doe je standaard aan vindbaarheid in Google?</strong> Titels, meta descriptions, structuur, Google Bedrijfsprofiel.</li>
                <li><strong>Hoe snel laadt de site?</strong> Vraag naar een PageSpeed-score of laadtijd van eerdere projecten.</li>
                <li><strong>Werkt de site goed op mobiel?</strong></li>
                <li><strong>Hoe zit het met toegankelijkheid?</strong> Contrast, alt-teksten, bediening met het toetsenbord.</li>
                <li><strong>Stel je conversietracking in,</strong> zodat ik zie hoeveel aanvragen de site oplevert?</li>
              </ol>
            </section>

            <section id="eigendom" className="guide-section">
              <h2 className="display-h3">Vragen over eigendom en techniek</h2>
              <ol className="guide-list" start={21}>
                <li><strong>Staan de domeinnaam, hosting en de site zelf op mijn naam?</strong></li>
                <li><strong>Op welk platform of met welke techniek bouw je de site?</strong> En wat betekent dat voor onderhoud?</li>
                <li><strong>Kan ik later met de site naar een andere partij?</strong></li>
              </ol>
            </section>

            <section id="na-oplevering" className="guide-section">
              <h2 className="display-h3">Vragen over na de oplevering</h2>
              <ol className="guide-list" start={24}>
                <li><strong>Kan ik zelf kleine dingen aanpassen,</strong> zoals teksten, foto's en openingstijden? Laat je zien hoe dat werkt?</li>
                <li><strong>Zit ik na oplevering ergens aan vast?</strong> Een abonnement, onderhoudscontract of minimale looptijd?</li>
              </ol>
            </section>

            <section id="voorbereiden" className="guide-section">
              <h2 className="display-h3">Wat jij zelf moet voorbereiden</h2>
              <p>Een goed gesprek werkt twee kanten op. Zet vooraf op papier:</p>
              <ul className="guide-list">
                <li><strong>Het doel van je website in één zin.</strong></li>
                <li><strong>Je ideale klant:</strong> wie is het, en wat zoekt die?</li>
                <li><strong>Twee of drie sites die je goed vindt,</strong> en waarom.</li>
                <li><strong>Je budget en gewenste livedatum.</strong></li>
                <li><strong>Wat je al hebt:</strong> logo, huisstijl, foto's, teksten, een bestaande site.</li>
              </ul>
              <p>
                Zo kan een webbouwer je veel gerichter adviseren, en vergelijk je offertes beter.
              </p>
            </section>

            <section className="guide-related">
              <h2 className="display-h3">Meer lezen</h2>
              <ul>
                <li><Link href="/website-laten-maken">→ Website laten maken: de complete gids</Link></li>
                <li><Link href="/wat-kost-een-website">→ Wat kost een website laten maken in 2026?</Link></li>
                <li><Link href="/webdesigner-kiezen">→ Hoe kies je een goede webdesigner?</Link></li>
                <li><Link href="/website-checklist">→ Website checklist: 30 punten</Link></li>
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
              <h2 className="display-h2">Al je vragen beantwoord in 30 minuten</h2>
              <p className="lead" style={{ marginTop: "1rem" }}>
                Plan een gratis gesprek. Je krijgt eerlijke antwoorden, een vaste prijs en geen offerte die je over je heen krijgt. Ik reageer binnen één werkdag.
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
