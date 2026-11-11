export type NavKey =
  | "home"
  | "gids"
  | "tarieven"
  | "verbeteren"
  | "over"
  | "other";

// Zonder key is het geen pagina maar een anker op de homepage, dus nooit "huidig".
export type NavLink = { label: string; href: string; key?: NavKey };
export type NavGroup = { label: string; children: NavLink[] };
export type NavItem = NavLink | NavGroup;

// Hoofdmenu. "Diensten" en "Homepage" zijn uitklapbare groepen; de namen van de items zijn de voorlopige keuze.
export const navItems: NavItem[] = [
  {
    label: "Homepage",
    children: [
      { label: "Voor wie", href: "/#voor-wie" },
      { label: "Werkwijze", href: "/#aanpak" },
      { label: "Diensten en prijzen", href: "/#diensten" },
      { label: "Veelgestelde vragen", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    label: "Diensten",
    children: [
      { label: "Website bouwen", href: "/website-bouwen/", key: "tarieven" },
      {
        label: "Website verbeteren",
        href: "/website-verbeteren/",
        key: "verbeteren",
      },
    ],
  },
  { label: "Over", href: "/over/", key: "over" },
  { label: "Gids", href: "/gids/", key: "gids" },
];

export const isGroup = (item: NavItem): item is NavGroup => "children" in item;

/** Is dit menu-item (of een van zijn items) de huidige pagina? */
export const isCurrent = (item: NavItem, current: NavKey) =>
  isGroup(item)
    ? item.children.some((c) => c.key === current)
    : item.key === current;
