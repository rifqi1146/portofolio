import { MetadataRoute } from "next";
import { projects } from "@/lib/project";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akhmadrifqy.com";
  const lastMod = new Date();

  return [
    {
      url: baseUrl,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];
}
