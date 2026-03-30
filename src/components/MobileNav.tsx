"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

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
          <a href="#voor-wie" onClick={() => setOpen(false)}>Voor wie</a>
          <a href="#pakketten" onClick={() => setOpen(false)}>Pakketten</a>
          <a href="#werkwijze" onClick={() => setOpen(false)}>Hoe het werkt</a>
          <a href="#over-tim" onClick={() => setOpen(false)}>Over Tim</a>
          <a href="#contact" className="mobile-menu-cta" onClick={() => setOpen(false)}>
            Start een project
          </a>
        </nav>
      )}
    </>
  );
}
