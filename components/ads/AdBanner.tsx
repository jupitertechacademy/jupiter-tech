import { AdPlaceholder, type AdSize, type AdTone } from "./AdPlaceholder";

interface AdBannerProps {
  size?: AdSize;
  tone?: AdTone;
  className?: string;
}

/**
 * Full-width responsive banner (leaderboard / large rectangle).
 *
 * Fills the width of its parent container — drop it inside the same
 * `max-w-7xl` wrapper used by page sections so it stays aligned with content.
 */
export function AdBanner({ size = "leaderboard", tone = "dark", className }: AdBannerProps) {
  return <AdPlaceholder size={size} tone={tone} className={className} />;
}
