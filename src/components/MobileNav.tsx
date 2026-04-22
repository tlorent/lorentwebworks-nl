"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/#voor-wie", label: "Voor wie" },
  { href: "/#aanpak", label: "Aanpak" },
  { href: "/#pakketten", label: "Pakketten" },
  { href: "/#faq", label: "FAQ" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="nav-hamburger"
        aria-label={open ? "Menu sluiten" : "Menu openen"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <nav className="mobile-menu" aria-label="Mobiele navigatie">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mobile-menu-cta"
            onClick={() => setOpen(false)}
          >
            Plan een gesprek
          </Link>
        </nav>
      )}
    </>
  );
}
