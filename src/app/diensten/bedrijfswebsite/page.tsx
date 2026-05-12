import type { Metadata } from "next";
import Link from "next/link";
import AanpakIllustration, {
  type IllustrationKind,
} from "@/components/AanpakIllustration";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "De Bedrijfswebsite — vanaf €1.750 | Lorent Webworks",
  description:
    "Volledige website van 4 tot 6 pagina's die je onderneming op de kaart zet. Maatwerk copy, SEO per pagina, conversietracking. Vanaf €1.750 excl. BTW.",
  alternates: { canonical: "/diensten/bedrijfswebsite" },
};

const DETAILS = [
  {
    num: "01",
    title: "Alles uit De Landingspagina",
    desc: "Zelfde strategie, zelfde zorg voor copy en SEO — toegepast over de hele site in plaats van één pagina.",
  },
  {
    num: "02",
    title: "4 tot 6 pagina's op maat",
    desc: "Home, over, diensten, contact — en eventueel klantcases of FAQ. Samen bepalen we wat jouw bezoeker écht nodig heeft.",
  },
  {
    num: "03",
    title: "SEO per pagina",
    desc: "Elke pagina krijgt z'n eigen zoekwoord-focus, metadata en interne link-structuur. Google vindt je beter, mensen ook.",
  },
  {
    num: "04",
    title: "Conversietracking ingesteld",
    desc: "Zodat je ziet welke pagina's klanten opleveren en welke niet. Meetbaar, geen onderbuikgevoel.",
  },
  {
    num: "05",
    title: "Twee revisierondes",
    desc: "Ruimte om te schuiven, te verfijnen en bij te stellen. Ik denk met je mee, niet tegen je in.",
  },
  {
    num: "06",
    title: "CMS waar nodig",
    desc: "Als je regelmatig nieuws of cases wilt plaatsen, bouw ik een simpel CMS in zodat je het zelf kunt beheren.",
  },
];

const PROCES: Array<{
  num: string;
  title: string;
  desc: string;
  tag: string;
  illus: IllustrationKind;
}> = [
  {
    num: "01",
    title: "Kick-off",
    desc: "Gesprek van een uur over je bedrijf, je klanten en wat de site moet doen.",
    tag: "Week 1",
    illus: "talk",
  },
  {
    num: "02",
    title: "Architectuur",
    desc: "Sitemap en wireframes. We spijkeren de structuur vast voordat ik ga bouwen.",
    tag: "Week 1",
    illus: "map",
  },
  {
    num: "03",
    title: "Ontwerp & copy",
    desc: "Visueel ontwerp plus alle teksten. Jij geeft feedback in één ronde.",
    tag: "Week 2",
    illus: "sketch",
  },
  {
    num: "04",
    title: "Bouw",
    desc: "Ik bouw de site — snel, toegankelijk, SEO-proof. Jij kijkt mee via preview-links.",
    tag: "Week 3",
    illus: "craft",
  },
  {
    num: "05",
    title: "Live & doorloop",
    desc: "Site live, analytics staat, jij krijgt een korte training zodat je zelf dingen kunt aanpassen.",
    tag: "Week 4",
    illus: "ship",
  },
];

const FAQ_ITEMS = [
  {
    q: "Hoe lang duurt een Bedrijfswebsite?",
    a: "Doorgaans 3-4 weken vanaf kick-off tot live, afhankelijk van hoe snel je feedback en materiaal aanlevert. Bij een stevige deadline kan ik prioriteren, maar haastig werk gaat altijd ergens ten koste van.",
  },
  {
    q: "Kan ik pagina's toevoegen na oplevering?",
    a: "Ja. Een extra pagina in dezelfde stijl reken ik los af, doorgaans €250-500 afhankelijk van omvang. Geen abonnement, geen vaste lasten.",
  },
  {
    q: "Krijg ik een CMS waar ik zelf in kan werken?",
    a: "Als dat past bij je wensen, ja. Voor veel MKB-sites is een simpel CMS (zoals Sanity of een lichtgewicht headless-oplossing) voldoende. Soms is een statische site zonder CMS juist beter — minder onderhoud, minder wat er stuk kan.",
  },
  {
    q: "Wat zit er niet in de prijs?",
    a: "Stockfotografie, vertalingen naar andere talen, complexe e-commerce of booking-systemen. Als je die nodig hebt, bespreken we het vooraf en maak ik een losse offerte.",
  },
  {
    q: "Is hosting inbegrepen?",
    a: "Ik regel hosting voor je als je dat wilt (€10-20 per maand afhankelijk van opzet), of je kiest zelf een provider. Ik zet het live op wat je wilt — ik ben niet afhankelijk van één partij.",
  },
  {
    q: "Wat als ik al een huisstijl heb?",
    a: "Prima, dan neem ik die als uitgangspunt. Heb je geen huisstijl, dan ontwikkel ik een basis die past: kleuren, typografie, toon. Geen volledig brand-identity-project, wel genoeg om er consistent uit te zien.",
  },
];

export default function BedrijfswebsitePage() {
  return (
    <>
      <ScrollReveal />
      <Header />

      <main>
        {/* HERO */}
        <section className="service-hero">
          <div className="container">
            <div className="service-hero-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/#pakketten">Pakketten</Link>
              <span>/</span>
              <span>Bedrijfswebsite</span>
            </div>
            <div className="service-hero-grid">
              <div>
                <span className="eyebrow">Pakket 02 · Meest gekozen</span>
                <h1 className="display-h1">De Bedrijfswebsite.</h1>
                <p
                  className="lead"
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "1.2rem",
                    maxWidth: "52ch",
                  }}
                >
                  Volledige website van 4 tot 6 pagina's die je onderneming op
                  de kaart zet. Voor bedrijven die meer te vertellen hebben:
                  diensten, team, klantcases, contact.
                </p>
                <div
                  className="hero-ctas"
                  style={{ marginTop: "2.5rem", marginBottom: 0 }}
                >
                  <Link href="/#contact" className="btn btn-primary">
                    Plan een gesprek <span className="btn-arrow">→</span>
                  </Link>
                  <Link href="/#pakketten" className="btn btn-outline">
                    Vergelijk pakketten
                  </Link>
                </div>
              </div>
              <div className="service-hero-meta">
                <div className="service-meta-row">
                  <span className="service-meta-label">Vanaf</span>
                  <span className="service-meta-value">€1.750 excl. BTW</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Doorlooptijd</span>
                  <span className="service-meta-value">3-4 weken</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Omvang</span>
                  <span className="service-meta-value">4-6 pagina's</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Revisies</span>
                  <span className="service-meta-value">2 rondes</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Geschikt voor</span>
                  <span className="service-meta-value">MKB met team</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WAT KRIJG JE */}
        <section>
          <div className="container">
            <div className="service-detail-grid">
              <div className="service-detail-sticky">
                <span className="eyebrow">Wat krijg je</span>
                <h2 className="display-h2">Een site die je bedrijf neerzet.</h2>
                <p className="lead" style={{ marginTop: "1.25rem" }}>
                  Niet een digitaal visitekaartje, maar een werkend onderdeel
                  van je bedrijf — dat klanten aantrekt en informatie geeft.
                </p>
              </div>
              <ol className="service-detail-list">
                {DETAILS.map((d) => (
                  <li key={d.num}>
                    <span className="num">{d.num}</span>
                    <div>
                      <h3 className="title">{d.title}</h3>
                      <p className="desc">{d.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* PROCES */}
        <section className="aanpak">
          <div className="container">
            <div className="aanpak-head">
              <span className="eyebrow">Proces</span>
              <h2 className="display-h2">
                Van kick-off tot live — 3 tot 4 weken.
              </h2>
            </div>
            <div className="aanpak-grid aanpak-grid--five">
              {PROCES.map((step) => (
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

        {/* RESULTATEN */}
        <section>
          <div className="container">
            <div className="aanpak-head">
              <span className="eyebrow">Resultaten</span>
              <h2 className="display-h2">Wat je mag verwachten.</h2>
              <p className="lead" style={{ marginTop: "1rem" }}>
                Een Bedrijfswebsite is geen losse pagina — het is een systeem
                dat klanten informeert, overtuigt en binnenhaalt.
              </p>
            </div>
            <div className="service-cases">
              <div className="service-case">
                <div className="service-case-stat">+3,4%</div>
                <div className="service-case-title">
                  Conversie-aanpak uit GrandVision
                </div>
                <p className="service-case-desc">
                  Dezelfde denkwijze die daar 425 nieuwe klanten opleverde,
                  toegepast over elk contactmoment op jouw site.
                </p>
              </div>
              <div className="service-case">
                <div className="service-case-stat">95+</div>
                <div className="service-case-title">Google PageSpeed-score</div>
                <p className="service-case-desc">
                  Technisch solide. Snel op mobiel, toegankelijk voor iedereen,
                  gebouwd om te scoren in Google.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PAKKET */}
        <section className="section-alt">
          <div className="container">
            <div
              className="pakket-grid"
              style={{
                gridTemplateColumns: "1fr",
                maxWidth: "720px",
                margin: "0 auto",
              }}
            >
              <div className="pakket-card featured">
                <span className="pakket-featured-label">Dit pakket</span>
                <div className="pakket-name">De Bedrijfswebsite</div>
                <p className="pakket-tagline">
                  Een volledige online aanwezigheid voor bedrijven die meer te
                  vertellen hebben dan op één pagina past.
                </p>
                <div className="pakket-price">
                  <span className="pakket-price-from">Vanaf</span>
                  <span className="pakket-price-amount">€1.750</span>
                </div>
                <div className="pakket-price-note">
                  excl. BTW · eenmalig · 3-4 weken
                </div>
                <hr className="pakket-divider" />
                <ul className="pakket-lijst">
                  <li>
                    <span className="pakket-check" />
                    <span>4 tot 6 pagina's op maat</span>
                  </li>
                  <li>
                    <span className="pakket-check" />
                    <span>Alle copy geschreven door mij</span>
                  </li>
                  <li>
                    <span className="pakket-check" />
                    <span>SEO per pagina, inclusief metadata en schema</span>
                  </li>
                  <li>
                    <span className="pakket-check" />
                    <span>Conversietracking en analytics ingesteld</span>
                  </li>
                  <li>
                    <span className="pakket-check" />
                    <span>Lichtgewicht CMS waar dat past</span>
                  </li>
                  <li>
                    <span className="pakket-check" />
                    <span>Twee revisierondes</span>
                  </li>
                  <li>
                    <span className="pakket-check" />
                    <span>Korte training zodat je zelf kunt updaten</span>
                  </li>
                </ul>
                <Link href="/#contact" className="btn btn-dark">
                  Plan een gesprek <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="container">
            <div
              className="faq-head"
              style={{ textAlign: "center", margin: "0 auto 3rem" }}
            >
              <span className="eyebrow">FAQ</span>
              <h2 className="display-h2">Over De Bedrijfswebsite</h2>
            </div>
            <Faq items={FAQ_ITEMS} />
          </div>
        </section>

        {/* CTA BAND */}
        <section>
          <div className="container">
            <div className="service-cta-band">
              <div>
                <h2>Klaar om je bedrijf serieus neer te zetten?</h2>
                <p>
                  Plan een gratis gesprek. Ik luister, denk mee, en stuur
                  achteraf een helder voorstel. Zonder bureau-gedoe.
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
