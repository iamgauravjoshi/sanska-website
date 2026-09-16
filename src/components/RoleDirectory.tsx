import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { roleGroups, skillLevels, type Skill } from "../data/jobs";

const skillBadge: Record<string, string> = {
  Unskilled: "bg-paper text-muted ring-line",
  "Semi-skilled": "bg-mint text-leaf-700 ring-leaf/25",
  Skilled: "bg-ice text-brand-700 ring-brand/25",
  "Supervisor / Lead": "bg-[#EEF4F8] text-navy ring-navy/15",
  Professional: "bg-navy text-white ring-navy",
};

export default function RoleDirectory() {
  const [industry, setIndustry] = useState<string>("All");
  const [skill, setSkill] = useState<Skill | "All">("All");
  const [q, setQ] = useState("");

  const industries = useMemo(() => ["All", ...roleGroups.map((g) => g.industry)], []);

  const rows = useMemo(() => {
    const query = q.trim().toLowerCase();
    return roleGroups
      .filter((g) => industry === "All" || g.industry === industry)
      .map((g) => ({
        ...g,
        roles: g.roles.filter(
          (r) =>
            (skill === "All" || r.skill === skill) &&
            (query === "" || r.title.toLowerCase().includes(query) || g.industry.toLowerCase().includes(query)),
        ),
      }))
      .filter((g) => g.roles.length > 0);
  }, [industry, skill, q]);

  const total = rows.reduce((a, g) => a + g.roles.length, 0);
  const filtered = industry !== "All" || skill !== "All" || q !== "";

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by industry">
          {industries.map((ind) => (
            <button
              key={ind}
              type="button"
              onClick={() => setIndustry(ind)}
              aria-pressed={industry === ind}
              className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors duration-200 ${
                industry === ind ? "bg-navy text-white" : "border border-line bg-white text-muted hover:border-brand/50 hover:text-navy"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <label className="relative block">
            <span className="sr-only">Skill level</span>
            <SlidersHorizontal className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" aria-hidden="true" />
            <select
              value={skill}
              onChange={(e) => setSkill(e.target.value as Skill | "All")}
              className="field-input !w-auto !py-2 pl-8 text-[13px] font-semibold"
            >
              <option value="All">All skill levels</option>
              {skillLevels.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <label className="relative block flex-1 lg:w-56">
            <span className="sr-only">Search roles</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search a trade or role…"
              className="field-input !py-2 pl-9 pr-8 text-[13.5px]"
              type="search"
            />
            {q && (
              <button type="button" onClick={() => setQ("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-navy" aria-label="Clear search">
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </label>
        </div>
      </div>

      <p className="mb-5 text-[13px] text-muted" role="status">
        {total} role{total === 1 ? "" : "s"} shown · {rows.length} sector{rows.length === 1 ? "" : "s"} ·{" "}
        {filtered ? (
          <button type="button" className="font-semibold text-brand-600 underline-offset-2 hover:underline" onClick={() => { setIndustry("All"); setSkill("All"); setQ(""); }}>
            Clear filters
          </button>
        ) : (
          "complete capability directory"
        )}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {rows.map((g) => (
          <section key={g.industry} className="card-x p-5" aria-labelledby={`roles-${g.slug}`}>
            <header className="mb-3.5 flex items-center justify-between border-b border-line pb-3">
              <h3 id={`roles-${g.slug}`} className="font-display text-[15.5px] font-bold text-navy">
                {g.industry}
              </h3>
              <span className="rounded-full bg-paper px-2.5 py-0.5 text-[11px] font-bold text-muted ring-1 ring-line">{g.roles.length} roles</span>
            </header>
            <ul className="space-y-1.5">
              {g.roles.map((r) => (
                <li key={r.title} className="flex items-center justify-between gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-ice/70">
                  <span className="text-[14px] font-medium text-ink">{r.title}</span>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10.5px] font-bold ring-1 ${skillBadge[r.skill]}`}>{r.skill}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {rows.length === 0 && (
          <div className="card-x col-span-full p-10 text-center">
            <p className="font-display text-[16px] font-bold text-navy">No roles match those filters</p>
            <p className="mt-2 text-[13.5px] text-muted">Try a broader industry or skill-level selection.</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-lg border border-line bg-ice px-5 py-4 text-[13px] leading-relaxed text-navy sm:flex-row sm:items-center">
        <p>
          <strong className="font-bold">Directory, not a vacancy board.</strong> These are roles we recruit for on employer demand — not current openings. Candidates should submit their profile to be considered for future requirements.
        </p>
        <Link to="/candidates" className="btn-primary !py-2.5 !text-[13px] shrink-0">
          Submit your CV
        </Link>
      </div>
    </div>
  );
}
