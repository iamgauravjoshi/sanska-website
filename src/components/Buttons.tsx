import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "navy" | "outline" | "ghost-light" | "green";
const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  navy: "btn-navy",
  outline: "btn-outline",
  "ghost-light": "btn-ghost-light",
  green: "btn-green",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  children: React.ReactNode;
}

export function CTAButton({
  to,
  href,
  variant = "primary",
  className = "",
  withArrow = true,
  children,
  onClick,
  type,
  disabled,
}: CommonProps & {
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const cls = `${variantClass[variant]} ${className}`.trim();
  const inner = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-0.5" aria-hidden="true" />}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={`group ${cls}`}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`group ${cls}`}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={`group ${cls}`}>
      {inner}
    </button>
  );
}
