import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { SITE_URL } from "./layout";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), priority: 1 },
    ...projects
      .filter((p) => p.detail?.length)
      .map((p) => ({
        url: `${SITE_URL}/work/${p.slug}`,
        lastModified: new Date(),
        priority: 0.8,
      })),
  ];
}
