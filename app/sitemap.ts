import type { MetadataRoute } from "next";

const baseUrl = "https://www.softtouchglobal.com";
const routes = ["", "/about", "/products", "/blog", "/vision-goals", "/inquiry", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-03-28"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
