import { AdPlaceholder, type AdTone } from "./AdPlaceholder";

interface MobileAdProps {
  tone?: AdTone;
  className?: string;
}

/**
 * Compact banner shown only on phones/tablets, where desktop-sized units would
 * be unusable. Hidden from `md` upwards so desktop never reserves the space.
 */
export function MobileAd({ tone = "dark", className }: MobileAdProps) {
  return (
    <div className={`md:hidden ${className ?? ""}`}>
      <AdPlaceholder size="inline" tone={tone} />
    </div>
  );
}
