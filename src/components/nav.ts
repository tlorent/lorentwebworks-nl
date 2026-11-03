export type NavKey = "home" | "gids" | "other";

export const navLinks = (onHome: boolean) => {
  const base = onHome ? "" : "/";
  return [
    { label: "Voor wie", href: `${base}#voor-wie`, key: "voor-wie" },
    { label: "Aanpak", href: `${base}#aanpak`, key: "aanpak" },
    { label: "Diensten", href: `${base}#diensten`, key: "diensten" },
    { label: "Gids", href: "/gids/", key: "gids" },
  ];
};
