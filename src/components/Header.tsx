"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <nav className="nav" aria-label="Primaire navigatie">
          <Link href="/" className="nav-logo" aria-label="Lorent Webworks home">
            <Logo showWordmark={false} />
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/#voor-wie">Voor wie</Link>
            </li>
            <li>
              <Link href="/#aanpak">Aanpak</Link>
            </li>
            <li>
              <Link href="/#pakketten">Pakketten</Link>
            </li>
            <li>
              <Link href="/#contact" className="nav-cta">
                Plan een gesprek
              </Link>
            </li>
          </ul>
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
