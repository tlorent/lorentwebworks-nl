// SVG-paden (viewBox 0 0 24 24), gedeeld door Icon.astro en de rehype-plugin van de gidsen.
export const icons = {
  arrow: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
  briefcase:
    '<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8.5 7V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V7"/><path d="M3 13h18"/>',
  chat: '<path d="M20.5 11.5a8 8 0 0 1-11.7 7.1L4 19.8l1.2-4.4a8 8 0 1 1 15.3-3.9z"/><path d="M9 11.5h.01M12.5 11.5h.01M16 11.5h.01"/>',
  sprout:
    '<path d="M12 21v-8.5"/><path d="M12 12.5C12 8.4 9.1 5.5 4.5 5.5c0 4.1 2.9 7 7.5 7z"/><path d="M12 14.5c0-4.1 2.9-7 7.5-7 0 4.1-2.9 7-7.5 7z"/>',
  heart:
    '<path d="M12 20s-7-4.3-8.9-9C1.9 7.9 4 4.5 7.3 4.5c2 0 3.6 1.1 4.7 2.8 1.1-1.7 2.7-2.8 4.7-2.8 3.3 0 5.4 3.4 4.2 6.5C19 15.7 12 20 12 20z"/>',
  cutlery:
    '<path d="M6 3v5.5a2.5 2.5 0 0 0 5 0V3"/><path d="M8.5 3v18"/><path d="M18 21V3c-2.2 1.3-3.5 3.8-3.5 7v4H18"/>',
  cap: '<path d="m2 9.5 10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.6 2.7 3 6 3s6-1.4 6-3v-4.5"/><path d="M22 9.5v5"/>',
  store:
    '<path d="M3.5 9 5 4h14l1.5 5"/><path d="M3.5 9a2.8 2.8 0 0 0 5.7 0 2.8 2.8 0 0 0 5.6 0 2.8 2.8 0 0 0 5.7 0"/><path d="M5 12v8h14v-8"/><path d="M10 20v-4.5h4V20"/>',
  pen: '<path d="M16.3 3.7a2.3 2.3 0 0 1 3.3 3.3L8 18.5 3.5 19.8l1.2-4.6z"/><path d="m14 6 3.3 3.3"/>',
  people:
    '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.7a3.5 3.5 0 0 1 0 6.6"/><path d="M18.2 14.2A6.5 6.5 0 0 1 21.5 20"/>',
  check: '<path d="m6 12.5 4 4 8-9"/>',
  plus: '<path d="M12 5.5v13M5.5 12h13"/>',
  moon: '<path d="M20 14.6A8 8 0 0 1 9.4 4 8 8 0 1 0 20 14.6z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>',
  pin: '<path d="M12 21s-7-6.1-7-11.4a7 7 0 0 1 14 0C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.6" r="2.5"/>',
  linkedin:
    '<rect x="3" y="3" width="18" height="18" rx="3.5"/><path d="M8 10.5V17M8 7.3v.01M12 17v-6.5M12 13.5a2.5 2.5 0 0 1 5 0V17"/>',
  menu: '<path d="M4.5 9h15M4.5 15h15"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  calendar:
    '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
};

/** @typedef {keyof typeof icons} IconName */
