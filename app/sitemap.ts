import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about-aegis",
    "/services",
    "/services/ipo-communications",
    "/services/investor-relations",
    "/services/public-relations",
    "/services/media-relations",
    "/services/corporate-events-launches",
    "/track-record",
    "/contact"
  ];

  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
