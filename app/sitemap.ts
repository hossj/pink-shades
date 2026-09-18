import type { MetadataRoute } from "next";

const base = "https://pinkshadesdesign.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/products",
    "/motorization",
    "/gallery",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
