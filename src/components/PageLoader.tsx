
/** Minimal fallback shown while a route chunk loads. */
export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-[74px]" role="status" aria-label="Loading page">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-line border-t-brand" />
        <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-muted">Loading…</p>
      </div>
      <span className="sr-only">Loading content</span>
    </div>
  );
}
