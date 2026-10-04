import {
  Atom,
  BookOpen,
  Braces,
  Cloud,
  Code2,
  Compass,
  Database,
  GitBranch,
  Layers,
  Lightbulb,
  RefreshCw,
  Rocket,
  Route,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Terminal,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types";

/**
 * Maps a serialisable icon name (from the data layer) to a Lucide component.
 * Keeping names as strings means course/resource data stays plain JSON and can
 * be passed from Server Components into Client Components safely.
 */
export const iconMap: Record<IconName, LucideIcon> = {
  code: Code2,
  braces: Braces,
  atom: Atom,
  layers: Layers,
  server: Server,
  terminal: Terminal,
  smartphone: Smartphone,
  cloud: Cloud,
  sparkles: Sparkles,
  database: Database,
  git: GitBranch,
  rocket: Rocket,
  target: Target,
  compass: Compass,
  zap: Zap,
  refresh: RefreshCw,
  book: BookOpen,
  users: Users,
  route: Route,
  shield: Shield,
};

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name] ?? Lightbulb;
}
