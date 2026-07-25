import type { MetadataRoute } from "next";
import { siteUrl } from "./site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  return [
    { url: siteUrl.toString(), changeFrequency: "monthly", priority: 1 },
    { url: new URL("projects", siteUrl).toString(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
