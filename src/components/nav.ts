export type NavKey =
  | "home"
  | "gids"
  | "tarieven"
  | "verbeteren"
  | "over"
  | "other";

export const navLinks = (_onHome: boolean) => {
  return [
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
