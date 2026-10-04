import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Crawl rules for this site.
 *
 * `__next_original_url` style internal routes are never listed — only the
 * public pages above.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
