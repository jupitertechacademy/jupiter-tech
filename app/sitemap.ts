import type { MetadataRoute } from "next";
import { courseSlugs } from "@/lib/courses";
import { site } from "@/lib/site";

/**
 * Static sitemap — every route is known at build time.
 *
 * Course detail pages are generated from `lib/courses.ts`, so adding a course
 * there automatically adds it here too.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: "/", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "/courses", lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: "/resources", lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: "/about", lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: "/privacy", lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: "/terms", lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = courseSlugs.map((slug) => ({
    url: `${site.url}/courses/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes];
}
