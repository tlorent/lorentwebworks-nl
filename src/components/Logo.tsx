import Image from "next/image";

type Props = {
  variant?: "ink" | "light";
  showWordmark?: boolean;
};

export default function Logo({ variant = "ink", showWordmark = true }: Props) {
  return (
    <span className="nav-logo-inner">
      <Image
        src="/logo.png"
        alt={showWordmark ? "" : "Lorent Webworks"}
        width={72}
        height={72}
        className="nav-logo-mark"
        priority
      />
      {showWordmark && (
        <span className={`nav-logo-text nav-logo-text--${variant}`}>
          LorentWebworks<em>.</em>nl
        </span>
      )}
    </span>
  );
}
