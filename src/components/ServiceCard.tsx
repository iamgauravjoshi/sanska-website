import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Icon from "./Icon";
import type { Service } from "../data/services";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article
      className="card-x reveal group relative flex h-full flex-col p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift md:p-7"
      style={{ ["--reveal-delay" as string]: `${(index % 3) * 90}ms` }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] rounded-t-lg bg-gradient-to-r from-brand via-brand-400 to-leaf opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="mb-5 flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-ice text-brand-600 ring-1 ring-brand/15 transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          <Icon name={service.icon} className="h-[22px] w-[22px]" />
        </span>
        <span className="font-display text-[13px] font-bold tracking-widest text-[#c2ced5]">0{index + 1}</span>
      </div>
      <h3 className="font-display text-[18px] font-bold leading-snug text-navy">{service.title}</h3>
      <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-muted">{service.short}</p>
      <Link
        to={`/services#${service.id}`}
        className="mt-5 inline-flex items-center gap-1 text-[13px] font-bold text-brand-600 transition-colors hover:text-brand-700"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
