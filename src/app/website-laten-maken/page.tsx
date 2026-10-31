import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Website laten maken: de complete gids voor ondernemers | Lorent Webworks",
  description:
    "Een website laten maken als zzp'er of mkb'er? Zo pak je het aan: doel bepalen, kiezen tussen zelf bouwen, freelancer of bureau, kosten, planning en wat een goede site oplevert.",
  alternates: { canonical: "/website-laten-maken" },
  openGraph: {
    title: "Website laten maken: de complete gids voor ondernemers",
    description:
      "Van doel en budget tot oplevering: zo laat je een website maken die klanten oplevert.",
    url: "https://lorentwebworks.nl/website-laten-maken",
    siteName: "Lorent Webworks",
    locale: "nl_NL",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Website laten maken: de complete gids voor ondernemers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website laten maken: de complete gids voor ondernemers",
    description:
      "Van doel en budget tot oplevering: zo laat je een website maken die klanten oplevert.",
    images: ["/og-image.png"],
  },
};

const FAQ_ITEMS = [
  {
    q: "Wat kost een website laten maken voor een zzp'er?",
    a: "Bij een freelancer betaal je voor een kleine, professionele bedrijfswebsite grofweg € 800 tot € 3.000. Bij een bureau begin je vaak rond € 4.000.",
  },
  {
    q: "Hoe lang duurt het om een website te laten maken?",
    a: "Een landingspagina kan binnen een week live staan. Een bedrijfswebsite van 4 tot 6 pagina's duurt meestal 2 tot 4 weken, afhankelijk van hoe snel teksten en beelden klaar zijn.",
  },
  {
    q: "Is een websitebouwer zoals Wix genoeg?",
    a: "Voor een eenvoudige site kan dat prima, als je zelf de tijd hebt. Een professional helpt vooral bij strategie, teksten, snelheid en vindbaarheid, en bespaart je veel uren.",
  },
  {
    q: "Moet ik zelf de teksten schrijven?",
    a: "Dat hoeft niet. Veel webbouwers bieden copywriting aan. Bij mij zitten de teksten in de pakketten.",
  },
  {
    q: "Wat moet er op een bedrijfswebsite staan?",
    a: "Minimaal een homepage met heldere boodschap, een pagina over je diensten, iets over jou of je team, bewijs zoals reviews, en een makkelijke manier om contact op te nemen.",
  },
];

export default function WebsiteLatenMakenPage() {
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
                headline: "Website laten maken: de complete gids voor ondernemers",
                description:
                  "Een website laten maken als zzp'er of mkb'er? Zo pak je het aan: doel bepalen, kiezen tussen zelf bouwen, freelancer of bureau, kosten, planning en wat een goede site oplevert.",
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
                  "@id": "https://lorentwebworks.nl/website-laten-maken",
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
                    name: "Website laten maken",
                    item: "https://lorentwebworks.nl/website-laten-maken",
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
              <span>Website laten maken</span>
            </div>
            <div className="guide-header">
              <span className="guide-label">gids</span>
              <h1 className="display-h1">Website laten maken: de complete gids voor ondernemers</h1>
              <p className="lead" style={{ marginTop: "1.5rem" }}>
                Een website laten maken voelt voor veel ondernemers als een sprong in het diepe. Wat kost het, wie kies je, hoe lang duurt het, en hoe weet je of het resultaat straks ook klanten oplevert? In deze gids loop ik het hele traject met je door, van het eerste idee tot een site die live staat en werkt.
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
                Bepaal eerst wat je website moet opleveren (aanvragen, boekingen, telefoontjes) en voor wie hij is. Kies daarna hoe je hem laat bouwen: zelf met een websitebouwer, via een freelancer of via een bureau. Voor zzp'ers en mkb'ers kost een professionele site bij een freelancer grofweg € 800 tot € 3.000, bij een bureau vaak € 4.000 of meer. Een eenvoudige site staat binnen een paar dagen tot een paar weken live. Let bij de keuze op snelheid, vindbaarheid in Google, duidelijke teksten en een heldere knop naar contact.
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
                <li><a href="#doel">Begin bij het doel</a></li>
                <li><a href="#manieren">Drie manieren om een website te laten maken</a></li>
                <li><a href="#onderdelen">Wat een goede website nodig heeft</a></li>
                <li><a href="#traject">Hoe het traject verloopt</a></li>
                <li><a href="#kosten">Wat kost het en hoe lang duurt het?</a></li>
                <li><a href="#na-oplevering">Na de oplevering</a></li>
                <li><a href="#fouten">Veelgemaakte fouten</a></li>
                <li><a href="#faq">Veelgestelde vragen</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <article className="guide-content">
          <div className="container">
            {/* Begin bij het doel */}
            <section id="doel" className="guide-section">
              <h2 className="display-h3">Begin bij het doel</h2>
              <p>
                De belangrijkste vraag komt voor kleuren, lettertypes en foto's: wat moet je website doen? Voor de meeste ondernemers is dat een van deze dingen:
              </p>
              <ul className="guide-list">
                <li><strong>Aanvragen binnenhalen:</strong> een offerteaanvraag, een kennismakingsgesprek of een belletje.</li>
                <li><strong>Boekingen:</strong> een afspraak, een tafel, een behandeling.</li>
                <li><strong>Vertrouwen opbouwen:</strong> laten zien wie je bent, wat je doet en wat anderen over je zeggen, zodat mensen durven te bellen.</li>
                <li><strong>Gevonden worden:</strong> zichtbaar zijn als iemand in jouw regio zoekt naar wat jij doet.</li>
              </ul>
              <p>
                Schrijf het doel in één zin op. Bijvoorbeeld: "Mijn website moet ervoor zorgen dat mensen uit Utrecht en omgeving een kennismakingsgesprek plannen." Elke keuze daarna toets je aan die zin.
              </p>
              <p>
                Denk ook na over je bezoeker. Wie is het, wat zoekt die persoon, en wat moet hij binnen vijf seconden zien om te blijven?
              </p>
            </section>

            {/* Drie manieren */}
            <section id="manieren" className="guide-section">
              <h2 className="display-h3">Drie manieren om een website te laten maken</h2>

              <h3 className="guide-h4">Zelf bouwen met een websitebouwer</h3>
              <p>
                Met Wix, Squarespace of een vergelijkbare tool zet je zelf een site in elkaar, voor grofweg € 15 tot € 50 per maand. Prima als je tijd hebt, plezier hebt in het uitzoeken en een eenvoudige site nodig hebt. Reken wel op veel uren: teksten schrijven, foto's kiezen, instellingen voor Google en mobiel goed zetten.
              </p>

              <h3 className="guide-h4">Een freelancer inhuren</h3>
              <p>
                Een freelance webbouwer of webdesigner bouwt de site voor je, vaak met direct contact en korte lijnen. Voor een kleine bedrijfswebsite betaal je grofweg € 800 tot € 3.000. Het niveau verschilt sterk per freelancer, dus kijk goed naar portfolio, aanpak en wat er in de prijs zit. In <a href="/webdesigner-kiezen">hoe kies je een goede webdesigner</a> lees je waar je op let.
              </p>

              <h3 className="guide-h4">Een webbureau inschakelen</h3>
              <p>
                Een bureau heeft een team met strategen, ontwerpers en developers. Logisch bij grotere projecten met veel pagina's, koppelingen of een webshop. Voor een professionele mkb-site begin je vaak rond € 4.000, en het kan flink hoger uitvallen.
              </p>
            </section>

            {/* CTA MID */}
            <div className="guide-cta-mid">
              <div className="guide-cta-card">
                <span className="eyebrow">Gratis website-audit</span>
                <h3 className="display-h3" style={{ marginBottom: "0.75rem" }}>Heb je al een website die weinig oplevert?</h3>
                <p>
                  Ik analyseer je huidige site op structuur, teksten, SEO, snelheid en conversie. Je krijgt binnen 5 werkdagen een rapport met concrete acties en een doorloopgesprek van 30 minuten. Zonder verplichtingen.
                </p>
                <Link href="/diensten/website-audit" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                  Plan een gratis audit →
                </Link>
              </div>
            </div>

            {/* Wat een goede website nodig heeft */}
            <section id="onderdelen" className="guide-section">
              <h2 className="display-h3">Wat een goede website nodig heeft</h2>

              <h3 className="guide-h4">Een heldere boodschap bovenaan</h3>
              <p>
                Binnen een paar seconden moet een bezoeker weten wat je doet, voor wie, en wat de volgende stap is. Een sterke kop, een korte uitleg en één duidelijke knop.
              </p>

              <h3 className="guide-h4">Teksten die je klant aanspreken</h3>
              <p>
                Schrijf vanuit de vraag van je klant. Welk probleem los je op, wat levert het op, en waarom jij? Korte zinnen, concrete voorbeelden.
              </p>

              <h3 className="guide-h4">Bewijs</h3>
              <p>
                Reviews, logo's van klanten, voor-en-na-foto's, cijfers. Bewijs maakt de stap naar contact kleiner.
              </p>

              <h3 className="guide-h4">Snelheid</h3>
              <p>
                Een trage site kost bezoekers, zeker op mobiel. Ik bouw sites die in Google PageSpeed Insights 95 of hoger scoren en binnen twee seconden laden.
              </p>

              <h3 className="guide-h4">Vindbaarheid</h3>
              <p>
                Een duidelijke paginastructuur, goede titels en meta descriptions, een Google Bedrijfsprofiel en content die antwoord geeft op wat mensen zoeken.
              </p>

              <h3 className="guide-h4">Toegankelijkheid</h3>
              <p>
                Een site die ook werkt voor mensen met een beperking: goede contrasten, leesbare lettergroottes, alt-teksten bij afbeeldingen en een site die met het toetsenbord te bedienen is. Sinds 28 juni 2025 geldt de European Accessibility Act voor veel bedrijven die online diensten of producten aanbieden. Micro-ondernemingen (minder dan 10 werknemers en maximaal € 2 miljoen omzet of balanstotaal) zijn vrijgesteld, maar een toegankelijke site werkt voor iedereen beter.
              </p>

              <h3 className="guide-h4">Een duidelijke weg naar contact</h3>
              <p>
                Een contactformulier met weinig velden, een klikbaar telefoonnummer, een WhatsApp-knop of een afsprakenplanner. Hoe makkelijker, hoe meer aanvragen.
              </p>
            </section>

            {/* Hoe het traject verloopt */}
            <section id="traject" className="guide-section">
              <h2 className="display-h3">Hoe het traject verloopt</h2>
              <p>Bij mij verloopt een project in drie stappen:</p>
              <ol className="guide-list">
                <li><strong>We spreken af.</strong> Een kop koffie, videocall of ik kom bij je langs. Ik stel scherpe vragen over je bedrijf, je klanten en wat de site moet doen. Dat gesprek duurt 30 tot 60 minuten en is gratis.</li>
                <li><strong>Ik bouw.</strong> Structuur, teksten, ontwerp en techniek neem ik voor mijn rekening. Je krijgt tussentijds een preview om op te reageren.</li>
                <li><strong>Live en opleveren.</strong> De site gaat live, analytics draait en ik laat je zien hoe je zelf kleine dingen aanpast. Jij houdt de sleutels.</li>
              </ol>
              <p>
                Bij een ander traject ziet het er vaak vergelijkbaar uit, met soms extra stappen voor ontwerp, contentcreatie of fotografie.
              </p>
            </section>

            {/* Kosten en doorlooptijd */}
            <section id="kosten" className="guide-section">
              <h2 className="display-h3">Wat kost het en hoe lang duurt het?</h2>
              <p>
                De prijs hangt af van het aantal pagina's, wie de teksten schrijft, maatwerk in ontwerp en functies zoals boekingen of een webshop. Een uitgebreide uitleg met prijsvoorbeelden vind je in <a href="/wat-kost-een-website">wat kost een website laten maken</a>.
              </p>
              <p>Mijn eigen startpunten:</p>
              <ul className="guide-list">
                <li><strong>De Landingspagina:</strong> één scherpe pagina, vanaf € 850 excl. btw, binnen 5 werkdagen.</li>
                <li><strong>De Bedrijfswebsite:</strong> 4 tot 6 pagina's met SEO per pagina en conversietracking, vanaf € 1.750 excl. btw.</li>
              </ul>
              <p>
                Qua doorlooptijd: een landingspagina staat binnen een week live, een bedrijfswebsite binnen 2 tot 4 weken. De grootste vertraging zit meestal in het aanleveren van teksten en foto's, dus begin daar op tijd mee.
              </p>
            </section>

            {/* Na de oplevering */}
            <section id="na-oplevering" className="guide-section">
              <h2 className="display-h3">Na de oplevering</h2>
              <p>Een website is nooit helemaal af. Plan na de lancering:</p>
              <ul className="guide-list">
                <li><strong>Meten:</strong> kijk na een maand hoeveel bezoekers en aanvragen er binnenkomen.</li>
                <li><strong>Google Bedrijfsprofiel:</strong> koppel je site en vraag tevreden klanten om een review.</li>
                <li><strong>Kleine updates:</strong> houd openingstijden, prijzen en foto's actueel.</li>
                <li><strong>Bijsturen:</strong> verbeter de pagina's waar bezoekers afhaken.</li>
              </ul>
              <p>
                Vraag vooraf of je na oplevering vastzit aan een abonnement en wie de domeinnaam en hosting op naam heeft. Mijn klanten zitten nergens aan vast.
              </p>
            </section>

            {/* Veelgemaakte fouten */}
            <section id="fouten" className="guide-section">
              <h2 className="display-h3">Veelgemaakte fouten</h2>

              <div className="guide-mistake">
                <h3 className="guide-h4">Beginnen bij het ontwerp</h3>
                <p><strong>Oplossing:</strong> Bepaal eerst doel, doelgroep en boodschap. Het ontwerp volgt daaruit.</p>
              </div>

              <div className="guide-mistake">
                <h3 className="guide-h4">Te veel pagina's</h3>
                <p><strong>Oplossing:</strong> Begin klein met de pagina's die echt nodig zijn. Uitbreiden kan altijd.</p>
              </div>

              <div className="guide-mistake">
                <h3 className="guide-h4">Teksten als sluitpost</h3>
                <p><strong>Oplossing:</strong> Teksten bepalen of iemand contact opneemt. Plan er tijd voor in, of laat ze schrijven.</p>
              </div>

              <div className="guide-mistake">
                <h3 className="guide-h4">Geen idee wat het oplevert</h3>
                <p><strong>Oplossing:</strong> Laat conversietracking instellen, zodat je ziet hoeveel aanvragen je site oplevert.</p>
              </div>

              <div className="guide-mistake">
                <h3 className="guide-h4">Domein en hosting op naam van de bouwer</h3>
                <p><strong>Oplossing:</strong> Zorg dat je domeinnaam en accounts op jouw naam staan.</p>
              </div>
            </section>

            {/* Meer lezen */}
            <section className="guide-related">
              <h2 className="display-h3">Meer lezen</h2>
              <ul>
                <li><Link href="/wat-kost-een-website">→ Wat kost een website laten maken in 2026?</Link></li>
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
              <h2 className="display-h2">Klaar voor een website die klanten oplevert?</h2>
              <p className="lead" style={{ marginTop: "1rem" }}>
                Plan een gratis gesprek van 30 minuten. Je krijgt een helder beeld van wat er kan, zonder verplichtingen. Ik reageer binnen één werkdag.
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
