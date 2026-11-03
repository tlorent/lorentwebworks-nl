export type NavKey =
  | "home"
  | "gids"
  | "tarieven"
  | "verbeteren"
  | "over"
  | "other";

export const navLinks = (onHome: boolean) => {
  const base = onHome ? "" : "/";
  return [
    { label: "Aanpak", href: `${base}#aanpak`, key: "aanpak" },
    { label: "Tarieven", href: "/tarieven/", key: "tarieven" },
    {
      label: "Bestaande website",
      href: "/website-verbeteren/",
      key: "verbeteren",
    },
    { label: "Over", href: "/over/", key: "over" },
    { label: "Gids", href: "/gids/", key: "gids" },
  ];
};
