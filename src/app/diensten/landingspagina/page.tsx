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
  title: "De Landingspagina — vanaf €850 | Lorent Webworks",
  description:
    "Eén scherpe pagina die direct laat zien wat je doet en bezoekers aanzet tot contact. Binnen 5 werkdagen live, vanaf €850 excl. BTW.",
  alternates: { canonical: "/diensten/landingspagina" },
};

const DETAILS = [
  {
    num: "01",
    title: "Strategisch gesprek",
    desc: "We bepalen samen het doel, de doelgroep en de actie die je bezoeker moet nemen. Zonder dit fundament levert geen enkele pagina iets op.",
  },
  {
    num: "02",
    title: "Copy geschreven door mij",
    desc: "Geen algemene verkooppraat. Heldere teksten die uitleggen wat je doet, voor wie, en waarom mensen juist jou moeten bellen.",
  },
  {
    num: "03",
    title: "Ontwerp op maat",
    desc: "Geen template. Een pagina die past bij jouw zaak — visueel rustig, typografisch sterk, gebouwd om bezoekers naar één actie te sturen.",
  },
  {
    num: "04",
    title: "SEO vanaf dag één",
    desc: "Technisch zo opgezet dat Google je pagina begrijpt. Metadata, structuur, snelheid en schema-markup — allemaal in orde.",
  },
  {
    num: "05",
    title: "Mobiel en snel",
    desc: "Meer dan de helft van je bezoekers komt via mobiel. De pagina is lichtgewicht, laadt in minder dan 2 seconden en werkt op elk scherm.",
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
    title: "Intake",
    desc: "30-60 minuten videocall. Ik stel scherpe vragen, jij deelt wat je al hebt.",
    tag: "Dag 1",
    illus: "talk",
  },
  {
    num: "02",
    title: "Concept",
    desc: "Binnen 2 werkdagen een eerste versie met copy en ontwerp.",
    tag: "Dag 2-3",
    illus: "sketch",
  },
  {
    num: "03",
    title: "Revisie",
    desc: "Jouw feedback verwerkt in één iteratie. Helder wat er wel en niet past.",
    tag: "Dag 4",
    illus: "polish",
  },
  {
    num: "04",
    title: "Live",
    desc: "Domein aangesloten, SEO gecontroleerd, analytics staat. Jij kunt los.",
    tag: "Dag 5",
    illus: "ship",
  },
];

const FAQ_ITEMS = [
  {
    q: "Kan één pagina echt genoeg zijn?",
    a: "Voor veel ZZP'ers en kleine ondernemers wel. Als je één duidelijke dienst of propositie hebt, werkt één scherpe pagina vaak beter dan een site vol tabs waar niemand doorheen klikt.",
  },
  {
    q: "Wat als ik later wil uitbreiden?",
    a: "Dat kan altijd. De Landingspagina is zo opgezet dat we er later makkelijk pagina's aan toe kunnen voegen — dan wordt het feitelijk De Bedrijfswebsite.",
  },
  {
    q: "Moet ik zelf teksten schrijven?",
    a: "Nee. Ik schrijf de teksten op basis van ons gesprek. Als je al materiaal hebt (over-tekst, dienstomschrijvingen), gebruik ik dat als input. Jij checkt en geeft feedback.",
  },
  {
    q: "Wat kost hosting en een domeinnaam?",
    a: "Een domeinnaam kost ~€10-15 per jaar, hosting ~€5-15 per maand afhankelijk van waar je het onderbrengt. Ik regel het voor je of laat je zien hoe je het zelf doet.",
  },
  {
    q: "Wat krijg ik precies op papier?",
    a: "Een opdrachtbevestiging met wat we afspreken, prijs en planning. Geen kleine lettertjes, geen abonnementsvallen.",
  },
];

export default function LandingspaginaPage() {
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
              <span>Landingspagina</span>
            </div>
            <div className="service-hero-grid">
              <div>
                <span className="eyebrow">Pakket 01</span>
                <h1 className="display-h1">De Landingspagina.</h1>
                <p
                  className="lead"
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "1.2rem",
                    maxWidth: "52ch",
                  }}
                >
                  Eén scherpe pagina die direct laat zien wat je doet en
                  bezoekers aanzet tot contact. Voor ZZP'ers en ondernemers die
                  snel zichtbaar willen zijn met een strakke, professionele
                  aanwezigheid.
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
                  <span className="service-meta-value">€850 excl. BTW</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Doorlooptijd</span>
                  <span className="service-meta-value">5 werkdagen</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Omvang</span>
                  <span className="service-meta-value">1 pagina</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Revisies</span>
                  <span className="service-meta-value">1 ronde</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Geschikt voor</span>
                  <span className="service-meta-value">ZZP &amp; solo</span>
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
                <h2 className="display-h2">Een pagina die z'n werk doet.</h2>
                <p className="lead" style={{ marginTop: "1.25rem" }}>
                  Geen losse elementen, geen toeters. Vijf dingen die goed
                  moeten, en die doe ik goed.
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
                Van gesprek tot live — 5 werkdagen.
              </h2>
            </div>
            <div className="aanpak-grid aanpak-grid--four">
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

        {/* VOORBEELDEN / CASES */}
        <section>
          <div className="container">
            <div className="aanpak-head">
              <span className="eyebrow">Resultaten</span>
              <h2 className="display-h2">Wat het oplevert.</h2>
              <p className="lead" style={{ marginTop: "1rem" }}>
                Dezelfde aanpak die bij GrandVision voor +3,4% conversie zorgde,
                nu in één pagina voor jou.
              </p>
            </div>
            <div className="service-cases">
              <div className="service-case">
                <div className="service-case-stat">+3,4%</div>
                <div className="service-case-title">
                  Conversiegroei GrandVision
                </div>
                <p className="service-case-desc">
                  425 nieuwe klanten uit 13.000 interacties. Eenzelfde
                  conversie-denken zit in elke Landingspagina die ik bouw.
                </p>
              </div>
              <div className="service-case">
                <div className="service-case-stat">&lt; 2s</div>
                <div className="service-case-title">Laadtijd op mobiel</div>
                <p className="service-case-desc">
                  Mijn Landingspagina's laden sneller dan 95% van vergelijkbare
                  sites. Google waardeert het, je bezoeker ook.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRIJS / INHOUD */}
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
                <div className="pakket-name">De Landingspagina</div>
                <p className="pakket-tagline">
                  Alles wat je nodig hebt om met één pagina zichtbaar te zijn en
                  klanten aan te trekken.
                </p>
                <div className="pakket-price">
                  <span className="pakket-price-from">Vanaf</span>
                  <span className="pakket-price-amount">€850</span>
                </div>
                <div className="pakket-price-note">
                  excl. BTW · eenmalig · binnen 5 werkdagen
                </div>
                <hr className="pakket-divider" />
                <ul className="pakket-lijst">
                  <li>
                    <span className="pakket-check" />
                    <span>Strategisch gesprek over doel en doelgroep</span>
                  </li>
                  <li>
                    <span className="pakket-check" />
                    <span>Pagina op maat, geschreven door mij</span>
                  </li>
                  <li>
                    <span className="pakket-check" />
                    <span>SEO-geoptimaliseerd en schema-markup</span>
                  </li>
                  <li>
                    <span className="pakket-check" />
                    <span>Mobielvriendelijk, laadtijd &lt; 2 seconden</span>
                  </li>
                  <li>
                    <span className="pakket-check" />
                    <span>Eén revisieronde</span>
                  </li>
                  <li>
                    <span className="pakket-check" />
                    <span>Analytics en formulier ingesteld</span>
                  </li>
                  <li>
                    <span className="pakket-check" />
                    <span>
                      Korte doorloop zodat je zelf kleine dingen kunt aanpassen
                    </span>
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
              <h2 className="display-h2">Over De Landingspagina</h2>
            </div>
            <Faq items={FAQ_ITEMS} />
          </div>
        </section>

        {/* CTA BAND */}
        <section>
          <div className="container">
            <div className="service-cta-band">
              <div>
                <h2>Klaar voor een pagina die werkt?</h2>
                <p>
                  Plan een gratis gesprek van 30 minuten. Geen verplichtingen,
                  wel een helder beeld van wat er kan.
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
