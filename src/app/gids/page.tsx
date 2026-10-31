import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Gids | Website laten maken voor zzp & mkb | Lorent Webworks",
  description:
    "Praktische gidsen over website laten maken, kosten, een webdesigner kiezen, je website checken en vragen om te stellen. Voor zzp'ers en mkb'ers.",
  alternates: { canonical: "/gids" },
  openGraph: {
    title: "Gids | Website laten maken voor zzp & mkb",
    description:
      "Praktische gidsen over website laten maken, kosten, een webdesigner kiezen en meer.",
    url: "https://lorentwebworks.nl/gids",
    siteName: "Lorent Webworks",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gids - Lorent Webworks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gids | Website laten maken voor zzp & mkb",
    description:
      "Praktische gidsen over website laten maken, kosten, een webdesigner kiezen en meer.",
    images: ["/og-image.png"],
  },
};

const GUIDES = [
  {
    slug: "/website-laten-maken",
    title: "Website laten maken: de complete gids",
    description:
      "Van doel en budget tot oplevering: zo laat je een website maken die klanten oplevert. Leer hoe je kiest tussen zelf bouwen, freelancer of bureau.",
    readTime: "12 min",
  },
  {
    slug: "/wat-kost-een-website",
    title: "Wat kost een website laten maken in 2026?",
    description:
      "Prijzen per optie, wat de prijs bepaalt en welke kosten je makkelijk vergeet. Inclusief realistische budgetten voor zzp en mkb.",
    readTime: "8 min",
  },
  {
    slug: "/webdesigner-kiezen",
    title: "Hoe kies je een goede webdesigner?",
    description:
      "Waar je zoekt, hoe je een portfolio beoordeelt en welke rode vlaggen je serieus neemt. Voor een webbouwer die bij je past.",
    readTime: "10 min",
  },
  {
    slug: "/website-checklist",
    title: "Website checklist: 30 punten",
    description:
      "Check je eigen website op boodschap, snelheid, SEO, toegankelijkheid en contact. Ontdek waar je nog winst kunt halen.",
    readTime: "15 min",
  },
  {
    slug: "/vragen-aan-webdesigner",
    title: "25 vragen voor je webdesigner",
    description:
      "Vragen over aanpak, prijs, SEO, eigendom en onderhoud, zodat je weet waar je aan begint en verrassingen voorkomt.",
    readTime: "10 min",
  },
];

export default function GidsPage() {
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
                "@type": "CollectionPage",
                name: "Gids",
                description:
                  "Praktische gidsen over website laten maken, kosten, een webdesigner kiezen, je website checken en vragen om te stellen.",
                url: "https://lorentwebworks.nl/gids",
                publisher: {
                  "@type": "Organization",
                  name: "Lorent Webworks",
                  url: "https://lorentwebworks.nl",
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
                ],
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
              <span>Gids</span>
            </div>
            <div style={{ maxWidth: "820px" }}>
              <span className="guide-label">overzicht</span>
              <h1 className="display-h1">Gids</h1>
              <p className="lead" style={{ marginTop: "1.5rem" }}>
                Praktische gidsen over website laten maken, kosten, een webdesigner kiezen en meer. Geschreven voor zzp'ers en mkb'ers die een site willen die klanten oplevert.
              </p>
            </div>
          </div>
        </section>

        {/* GUIDES GRID */}
        <section style={{ paddingTop: "5rem", paddingBottom: "7rem" }}>
          <div className="container">
            <div className="guides-grid">
              {GUIDES.map((guide) => (
                <Link
                  key={guide.slug}
                  href={guide.slug}
                  className="guide-card"
                >
                  <div className="guide-card-meta">
                    <span className="guide-card-label">Gids</span>
                    <span className="guide-card-time">{guide.readTime}</span>
                  </div>
                  <h2 className="guide-card-title">{guide.title}</h2>
                  <p className="guide-card-desc">{guide.description}</p>
                  <span className="guide-card-link">
                    Lees meer <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ paddingTop: "0", paddingBottom: "7rem" }}>
          <div className="container">
            <div className="service-cta-band">
              <div>
                <h2>Klaar om aan de slag te gaan?</h2>
                <p>
                  Plan een gratis gesprek van 30 minuten. Je krijgt een helder
                  beeld van wat er kan, zonder verplichtingen. Ik reageer binnen
                  één werkdag.
                </p>
              </div>
              <Link href="/#contact" className="btn">
                Plan een gesprek <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
