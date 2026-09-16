import media from "../data/media";

/**
 * Manifest-backed image. Every asset is sized & compressed at build time
 * (scripts/fetch-media.sh); replace files + manifest to swap in owned media.
 * Below-fold images lazy-load; the manifest's width/height prevent layout shift.
 */
export default function Img({
  slot,
  className = "",
  imgClassName = "",
  eager = false,
  sizes,
  overlay = false,
  kenburns = false,
  altOverride,
}: {
  slot: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  sizes?: string;
  overlay?: boolean;
  kenburns?: boolean;
  altOverride?: string;
}) {
  const m = media[slot];
  if (!m) return null;
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={m.src}
        alt={altOverride ?? m.alt}
        width={m.width}
        height={m.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        className={`h-full w-full object-cover ${kenburns ? "kenburns" : ""} transition-transform duration-[600ms] will-change-transform ${imgClassName}`}
      />
      {overlay && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(5,27,42,0.10) 0%, rgba(5,27,42,0.42) 58%, rgba(5,27,42,0.78) 100%)" }}
        />
      )}
    </div>
  );
}
