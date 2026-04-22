export type IllustrationKind =
  | "talk"
  | "sketch"
  | "craft"
  | "polish"
  | "ship"
  | "measure"
  | "map"
  | "search"
  | "speed"
  | "report";

type Props = { kind: IllustrationKind };

function renderShapes(kind: IllustrationKind) {
  switch (kind) {
    case "talk":
      return (
        <>
          <rect
            x="8"
            y="14"
            width="56"
            height="38"
            rx="6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M22 60 L22 52 L30 52"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 26h32M20 33h24M20 40h28"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.55"
          />
          <rect
            x="56"
            y="28"
            width="56"
            height="38"
            rx="6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M98 72 L98 66 L90 66"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M68 40h32M68 47h20M68 54h28"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.55"
          />
        </>
      );

    case "sketch":
      return (
        <>
          <rect
            x="14"
            y="10"
            width="92"
            height="60"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="22"
            y="20"
            width="36"
            height="6"
            rx="1"
            fill="currentColor"
            opacity="0.35"
          />
          <rect
            x="22"
            y="32"
            width="76"
            height="4"
            rx="1"
            fill="currentColor"
            opacity="0.2"
          />
          <rect
            x="22"
            y="40"
            width="64"
            height="4"
            rx="1"
            fill="currentColor"
            opacity="0.2"
          />
          <rect
            x="22"
            y="52"
            width="28"
            height="10"
            rx="2"
            fill="currentColor"
            opacity="0.45"
          />
          <path
            d="M98 46l-6 6m6-6l6 6m-6-6v12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        </>
      );

    case "craft":
      return (
        <>
          <rect
            x="14"
            y="10"
            width="92"
            height="56"
            rx="6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M14 22h92" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="21" cy="16" r="1.4" fill="currentColor" />
          <circle cx="27" cy="16" r="1.4" fill="currentColor" />
          <circle cx="33" cy="16" r="1.4" fill="currentColor" />
          <path
            d="M46 38l-8 8 8 8M74 38l8 8-8 8M62 34l-4 20"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 72l12-6M98 72L86 66"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.45"
          />
        </>
      );

    case "polish":
      return (
        <>
          <circle
            cx="44"
            cy="40"
            r="22"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="44"
            cy="40"
            r="12"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.55"
          />
          <path
            d="M60 56l24 18"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M90 78l8-6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M36 34l4 4 10-10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );

    case "ship":
      return (
        <>
          <circle
            cx="60"
            cy="40"
            r="26"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M34 40h52M60 14c8 7 12 16 12 26s-4 19-12 26c-8-7-12-16-12-26s4-19 12-26z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M78 22l18-10M76 60l18 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="96" cy="12" r="3" fill="currentColor" />
          <circle cx="94" cy="70" r="3" fill="currentColor" />
        </>
      );

    case "measure":
      return (
        <>
          <path
            d="M10 66h100"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect
            x="18"
            y="48"
            width="14"
            height="18"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="38"
            y="32"
            width="14"
            height="34"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="58"
            y="40"
            width="14"
            height="26"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="78"
            y="20"
            width="14"
            height="46"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.12"
          />
          <path
            d="M20 30l22-10 20 6 22-14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.75"
          />
          <circle cx="20" cy="30" r="2.2" fill="currentColor" />
          <circle cx="42" cy="20" r="2.2" fill="currentColor" />
          <circle cx="62" cy="26" r="2.2" fill="currentColor" />
          <circle cx="84" cy="12" r="2.2" fill="currentColor" />
        </>
      );

    case "map":
      return (
        <>
          <path
            d="M10 22l28-10 26 10 26-10 20 8v48l-20-8-26 10-26-10-28 10V22z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M38 12v48M64 22v48M90 12v48"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <circle
            cx="64"
            cy="38"
            r="5"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="currentColor"
            fillOpacity="0.18"
          />
          <path
            d="M64 40v6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </>
      );

    case "search":
      return (
        <>
          <rect
            x="14"
            y="10"
            width="92"
            height="60"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M14 22h92" stroke="currentColor" strokeWidth="1.5" />
          <rect
            x="22"
            y="30"
            width="40"
            height="4"
            rx="1"
            fill="currentColor"
            opacity="0.3"
          />
          <rect
            x="22"
            y="40"
            width="56"
            height="4"
            rx="1"
            fill="currentColor"
            opacity="0.2"
          />
          <rect
            x="22"
            y="50"
            width="36"
            height="4"
            rx="1"
            fill="currentColor"
            opacity="0.2"
          />
          <circle
            cx="82"
            cy="48"
            r="12"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M91 57l8 8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </>
      );

    case "speed":
      return (
        <>
          <path
            d="M20 60a40 40 0 0 1 80 0"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M60 60L82 28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="60" cy="60" r="4" fill="currentColor" />
          <path
            d="M20 60h4M96 60h4M30 40l3 3M90 40l-3 3M60 22v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.55"
          />
        </>
      );

    case "report":
      return (
        <>
          <rect
            x="22"
            y="6"
            width="64"
            height="68"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M34 22h40M34 32h40M34 42h28"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.45"
          />
          <rect
            x="34"
            y="52"
            width="8"
            height="14"
            fill="currentColor"
            opacity="0.75"
          />
          <rect
            x="46"
            y="48"
            width="8"
            height="18"
            fill="currentColor"
            opacity="0.5"
          />
          <rect
            x="58"
            y="44"
            width="8"
            height="22"
            fill="currentColor"
            opacity="0.35"
          />
          <path
            d="M92 18l6 4-4 6-6-4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <path
            d="M94 28l8 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      );
  }
}

export default function AanpakIllustration({ kind }: Props) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="aanpak-illus-svg"
    >
      {renderShapes(kind)}
    </svg>
  );
}
