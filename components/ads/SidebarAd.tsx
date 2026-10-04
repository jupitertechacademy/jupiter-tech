import { AdPlaceholder, type AdTone } from "./AdPlaceholder";

interface SidebarAdProps {
  tone?: AdTone;
  className?: string;
}

/**
 * Desktop-only sticky sidebar unit.
 * Hidden below `lg` so it can never squeeze the main column on smaller screens.
 */
export function SidebarAd({ tone = "dark", className }: SidebarAdProps) {
  return (
    <div className={`hidden lg:block ${className ?? ""}`}>
      <div className="sticky top-28">
        <AdPlaceholder size="rectangle" tone={tone} />
      </div>
    </div>
  );
}
