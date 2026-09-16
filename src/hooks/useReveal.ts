import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Global scroll-reveal: observes every `.reveal` element (once per route
 * change) and toggles `.is-visible`. Respects prefers-reduced-motion via CSS.
 */
export function useRevealObserver() {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}
