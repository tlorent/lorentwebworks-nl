"use client";

import { useState } from "react";

export type FaqEntry = { q: string; a: string };

export default function Faq({ items }: { items: FaqEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className={`faq-item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="faq-button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <span className="faq-icon" aria-hidden="true" />
            </button>
            <div id={`faq-panel-${i}`} className="faq-panel" hidden={!isOpen}>
              <p className="faq-answer">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
