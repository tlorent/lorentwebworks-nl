import Link from "next/link";
import { site } from "@/config/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link
              href="/"
              className="nav-logo"
              aria-label="Lorent Webworks home"
            >
              <Logo variant="light" />
            </Link>
            <p>
              Websites die klanten opleveren — voor ZZP en MKB in heel
              Nederland. Vanuit Amsterdam.
            </p>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Diensten</p>
            <ul>
              <li>
                <Link href="/diensten/landingspagina">Landingspagina</Link>
              </li>
              <li>
                <Link href="/diensten/bedrijfswebsite">Bedrijfswebsite</Link>
              </li>
              <li>
                <Link href="/diensten/website-audit">Website-audit</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Gids</p>
            <ul>
              <li>
                <Link href="/gids">Overzicht</Link>
              </li>
              <li>
                <Link href="/website-laten-maken">Website laten maken</Link>
              </li>
              <li>
                <Link href="/wat-kost-een-website">Wat kost een website</Link>
              </li>
              <li>
                <Link href="/webdesigner-kiezen">Webdesigner kiezen</Link>
              </li>
              <li>
                <Link href="/website-checklist">Website checklist</Link>
              </li>
              <li>
                <Link href="/vragen-aan-webdesigner">
                  Vragen aan webdesigner
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Site</p>
            <ul>
              <li>
                <Link href="/#voor-wie">Voor wie</Link>
              </li>
              <li>
                <Link href="/#aanpak">Aanpak</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Contact</p>
            <ul>
              <li>
                <a
                  href="https://linkedin.com/in/timlorent"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.lorentwebworks.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tech-portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <span>
              © {new Date().getFullYear()} {site.name} · {site.city},{" "}
              {site.country}
            </span>
            <span className="footer-meta-divider">·</span>
            <span>KvK {site.kvk}</span>
          </div>
          <div className="footer-legal-links">
            <Link href="/privacy">Privacy</Link>
            <span className="footer-meta-divider">·</span>
            <Link href="/voorwaarden">Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
