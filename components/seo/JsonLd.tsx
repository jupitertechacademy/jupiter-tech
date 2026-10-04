/**
 * Renders a schema.org JSON-LD block.
 *
 * Only factual, non-fabricated data should be passed in — no ratings,
 * reviews, student counts or awards.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
