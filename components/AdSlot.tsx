// Publisher ID from ads.txt: google.com, pub-9889586007871680, DIRECT, f08c47fec0942fa0
const PUBLISHER_ID = "ca-pub-9889586007871680";

type AdSlotProps = {
  slot: string;
  format?: "horizontal" | "rectangle" | "vertical";
  className?: string;
};

/**
 * AdSense slot component.
 * - Dev / staging (NEXT_PUBLIC_ADS_ENABLED != "true"): renders a visible placeholder
 *   so layout space is reserved (CLS-safe) without loading real ads.
 * - Production (NEXT_PUBLIC_ADS_ENABLED === "true"): renders a proper AdSense <ins>
 *   unit and immediately calls adsbygoogle.push({}) so the slot initialises as soon
 *   as the HTML is parsed — no React hooks needed, compatible with Next.js static export.
 */
export default function AdSlot({
  slot,
  format = "horizontal",
  className = "",
}: AdSlotProps) {
  const isProd = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

  const dims =
    format === "horizontal"
      ? "h-24 md:h-28"
      : format === "rectangle"
      ? "h-72"
      : "h-[600px]";

  const adFormat =
    format === "horizontal"
      ? "horizontal"
      : format === "rectangle"
      ? "rectangle"
      : "vertical";

  // Development / staging: render a visible placeholder so layout is preserved
  if (!isProd) {
    return (
      <div
        aria-hidden
        data-ad-slot={slot}
        className={`my-6 mx-auto max-w-3xl ${dims} bg-soft border border-dashed border-line rounded-md flex items-center justify-center text-xs text-gray-400 ${className}`}
      >
        ad slot · {slot} · {format}
      </div>
    );
  }

  // Production: render a proper AdSense <ins> unit.
  return (
    <div className={`my-6 mx-auto max-w-3xl overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <script
        dangerouslySetInnerHTML={{
          __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
        }}
      />
    </div>
  );
}
