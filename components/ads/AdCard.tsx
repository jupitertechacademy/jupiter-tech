import { AdPlaceholder, type AdTone } from "./AdPlaceholder";

interface AdCardProps {
  tone?: AdTone;
  className?: string;
}

/**
 * Ad unit sized to sit inside a card grid alongside real content cards.
 * It stretches to the row height, so it never leaves a ragged gap.
 */
export function AdCard({ tone = "dark", className }: AdCardProps) {
  return <AdPlaceholder size="card" tone={tone} className={className} />;
}
