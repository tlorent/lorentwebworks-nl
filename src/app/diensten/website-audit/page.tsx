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
  title: "Gratis website-audit | Lorent Webworks",
  description:
    "Heb je al een website, maar levert hij niet op? Ik analyseer hem door en door — structuur, copy, SEO, snelheid, conversie — en geef je binnen 5 werkdagen een concreet actieplan. Gratis, geen verplichting.",
  alternates: { canonical: "/diensten/website-audit" },
};

const DETAILS = [
  {
    num: "01",
    title: "Structuur & navigatie",
    desc: "Kan een bezoeker binnen 3 seconden vinden wat 'ie zoekt? Ik loop je site na zoals een nieuwe klant dat doet — en leg vast waar het misgaat.",
  },
  {
    num: "02",
    title: "Copy & boodschap",
    desc: "Vertelt je site in één zin wat je doet, voor wie, en waarom ze juist jou moeten kiezen? Ik check elke pagina tegen die drie vragen.",
  },
  {
    num: "03",
    title: "SEO & zichtbaarheid",
    desc: "Metadata, heading-structuur, interne links, schema-markup. Waar je kansen laat liggen in Google — met concrete fixes.",
  },
  {
    num: "04",
    title: "Snelheid & techniek",
    desc: "Laadtijd, Core Web Vitals, mobiele prestaties. Google straft trage sites af, en jouw bezoeker haakt nog sneller af.",
  },
  {
    num: "05",
    title: "Conversie",
    desc: "Staan de juiste CTA's op de juiste plek? Is de drempel om contact op te nemen laag genoeg? Waar verlies je bezoekers die klant hadden kunnen worden?",
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
    desc: "Je stuurt me de URL en vertelt in een paar zinnen wat je met de site wilt bereiken.",
    tag: "Dag 1",
    illus: "talk",
  },
  {
    num: "02",
    title: "Analyse",
    desc: "Ik duik er in. Handmatige review, tools voor techniek en SEO, en een blik als senior engineer.",
    tag: "Dag 2-4",
    illus: "search",
  },
  {
    num: "03",
    title: "Rapport",
    desc: "Binnen 5 werkdagen een helder document: wat werkt, wat niet, en welke drie dingen het meeste opleveren.",
    tag: "Dag 5",
    illus: "report",
  },
  {
    num: "04",
    title: "Doorloop-gesprek",
    desc: "30 minuten videocall waarin we het rapport bespreken. Je kunt alles vragen, ik verzin niks ter plekke.",
    tag: "Dag 5",
    illus: "talk",
  },
];

const FAQ_ITEMS = [
  {
    q: "Is het echt gratis? Wat zit er achter?",
    a: "Ja, echt gratis. Ik doe het omdat het een manier is om te laten zien hoe ik werk. Als je daarna met mij verder wilt bouwen, mooi. Zo niet, ook prima — je hebt een concreet actieplan dat je zelf of met iemand anders kunt uitvoeren.",
  },
  {
    q: "Hoeveel tijd kost het mij?",
    a: "Hooguit een half uur. Je stuurt me je URL en wat context, en later zitten we 30 minuten samen om het rapport door te lopen. De analyse doe ik zelf.",
  },
  {
    q: "Wat voor site moet ik hebben?",
    a: "Elke zakelijke website werkt — ZZP, MKB, horeca, creatief, dienstverlener. Voor webshops of complexe platforms is een gratis audit te licht; dan bespreken we een betaalde opdracht.",
  },
  {
    q: "Krijg ik iets op papier of alleen een gesprek?",
    a: "Beide. Je krijgt een PDF-rapport met bevindingen en prioriteiten, én een videocall om het door te nemen. Je kunt het rapport daarna gewoon houden en gebruiken.",
  },
  {
    q: "Moet ik daarna met jou in zee?",
    a: "Nee. Nul verplichting. Veel klanten vinden me via de audit, maar ik heb er geen belang bij je iets aan te praten dat je niet nodig hebt.",
  },
  {
    q: "Hoe snel kan ik terecht?",
    a: "Meestal binnen een week. Stuur me een bericht met je URL en ik reageer binnen één werkdag met een planning.",
  },
];

export default function WebsiteAuditPage() {
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
              <span>Website-audit</span>
            </div>
            <div className="service-hero-grid">
              <div>
                <span className="eyebrow">Pakket 03 · Gratis</span>
                <h1 className="display-h1">De Website-audit.</h1>
                <p
                  className="lead"
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "1.2rem",
                    maxWidth: "52ch",
                  }}
                >
                  Heb je al een website, maar levert hij niet op? Ik analyseer
                  hem door en door en geef je binnen 5 werkdagen een concreet
                  actieplan. Gratis, geen verplichting tot vervolg.
                </p>
                <div
                  className="hero-ctas"
                  style={{ marginTop: "2.5rem", marginBottom: 0 }}
                >
                  <Link href="/#contact" className="btn btn-primary">
                    Vraag je audit aan <span className="btn-arrow">→</span>
                  </Link>
                  <Link href="/#pakketten" className="btn btn-outline">
                    Vergelijk pakketten
                  </Link>
                </div>
              </div>
              <div className="service-hero-meta">
                <div className="service-meta-row">
                  <span className="service-meta-label">Prijs</span>
                  <span className="service-meta-value">Gratis</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Doorlooptijd</span>
                  <span className="service-meta-value">5 werkdagen</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Wat je krijgt</span>
                  <span className="service-meta-value">Rapport + gesprek</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Tijd van jou</span>
                  <span className="service-meta-value">~ 30 minuten</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Verplichting</span>
                  <span className="service-meta-value">Geen</span>
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
                <span className="eyebrow">Wat ik check</span>
                <h2 className="display-h2">
                  Vijf gebieden, concreet beoordeeld.
                </h2>
                <p className="lead" style={{ marginTop: "1.25rem" }}>
                  Geen automatisch rapport uit een tool. Een handmatige review
                  door iemand die 8+ jaar websites heeft gebouwd die moeten
                  presteren.
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
              <h2 className="display-h2">Vier stappen. 5 werkdagen.</h2>
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

        {/* WAAROM GRATIS */}
        <section>
          <div className="container">
            <div className="service-detail-grid">
              <div>
                <span className="eyebrow">Waarom gratis</span>
                <h2 className="display-h2">
                  Ik laat liever zien dan vertellen.
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "var(--color-ink-soft)",
                }}
              >
                <p>
                  De meeste mensen die met een "webdesigner" werken hebben
                  slechte ervaringen: wollige offertes, onduidelijke
                  opleveringen, geen idee of het geld iets opleverde.
                </p>
                <p>
                  Een audit is mijn manier om te laten zien hoe ik denk en werk
                  — nog voordat jij een euro investeert. Je krijgt concrete
                  inzichten die je kunt gebruiken, met of zonder mij erbij.
                </p>
                <p>
                  Zie het als een <strong>second opinion</strong> van een senior
                  engineer. Dat is voor MKB bijna nooit bereikbaar — nu wel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-alt">
          <div className="container">
            <div
              className="faq-head"
              style={{ textAlign: "center", margin: "0 auto 3rem" }}
            >
              <span className="eyebrow">FAQ</span>
              <h2 className="display-h2">Over de audit</h2>
            </div>
            <Faq items={FAQ_ITEMS} />
          </div>
        </section>

        {/* CTA BAND */}
        <section>
          <div className="container">
            <div className="service-cta-band">
              <div>
                <h2>Benieuwd wat er beter kan aan jouw site?</h2>
                <p>
                  Stuur me de URL en een paar zinnen over wat je wilt bereiken.
                  Ik reageer binnen één werkdag met een planning.
                </p>
              </div>
              <Link href="/#contact" className="btn">
                Vraag je audit aan <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
