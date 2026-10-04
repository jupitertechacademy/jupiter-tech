import { AdPlaceholder, type AdTone } from "./AdPlaceholder";

interface InArticleAdProps {
  tone?: AdTone;
  className?: string;
}

/**
 * Ad slot placed between long-form content sections.
 * Adds its own vertical rhythm so it never crowds the surrounding copy.
 */
export function InArticleAd({ tone = "dark", className }: InArticleAdProps) {
  return (
    <div className={className ? `my-10 sm:my-14 ${className}` : "my-10 sm:my-14"}>
      <AdPlaceholder size="inline" tone={tone} />
    </div>
  );
}
