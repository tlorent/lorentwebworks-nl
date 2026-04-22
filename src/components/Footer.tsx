import Link from "next/link";
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
            <h4>Diensten</h4>
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
            <h4>Site</h4>
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
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:tim@lorentwebworks.nl">tim@lorentwebworks.nl</a>
              </li>
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
          <span>
            © {new Date().getFullYear()} Lorent Webworks · Amsterdam, NL
          </span>
          <span>KvK op aanvraag · BTW-plichtig</span>
        </div>
      </div>
    </footer>
  );
}
