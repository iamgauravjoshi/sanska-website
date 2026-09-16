import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import type { Crumb } from "../hooks/useSeo";

export default function Breadcrumb({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="min-w-0">
      <ol className={`flex flex-wrap items-center gap-1.5 text-[12.5px] font-medium ${light ? "text-slate-300" : "text-muted"}`}>
        <li>
          <Link
            to="/"
            aria-label="Home"
            className={`inline-flex items-center gap-1 rounded px-1 py-0.5 transition-colors ${light ? "hover:text-white" : "hover:text-navy"}`}
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1.5">
            <ChevronRight className={`h-3.5 w-3.5 ${light ? "text-slate-400" : "text-[#b6c4cb]"}`} aria-hidden="true" />
            {i === items.length - 1 ? (
              <span aria-current="page" className={light ? "text-white" : "text-navy"}>
                {c.name}
              </span>
            ) : (
              <Link to={c.path} className={light ? "hover:text-white" : "hover:text-navy"}>
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
