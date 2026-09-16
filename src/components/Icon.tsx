import {
  Anchor,
  Briefcase,
  Building2,
  ClipboardList,
  FileCheck,
  Flame,
  FolderCheck,
  Globe2,
  Hammer,
  HardHat,
  HeartPulse,
  Info,
  Layers,
  Plane,
  Route,
  Search,
  ShieldCheck,
  Stamp,
  Target,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  globe: Globe2,
  layers: Layers,
  hardhat: HardHat,
  briefcase: Briefcase,
  filecheck: FileCheck,
  plane: Plane,
  anchor: Anchor,
  crane: Hammer,
  flame: Flame,
  heartpulse: HeartPulse,
  utensils: UtensilsCrossed,
  shieldcheck: ShieldCheck,
  building2: Building2,
  clipboard: ClipboardList,
  search: Search,
  users: Users,
  folder: FolderCheck,
  stamp: Stamp,
  info: Info,
  target: Target,
  route: Route,
};

export default function Icon({ name, className = "h-5 w-5", strokeWidth = 1.75 }: { name: string; className?: string; strokeWidth?: number }) {
  const Cmp = map[name] ?? Info;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
