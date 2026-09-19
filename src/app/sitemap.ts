import { MetadataRoute } from "next";
import { allProjects } from "@/utils/works";
import { workTitleConverter } from "@/utils/workTitleConverter";

const BASE_URL = "https://sourabhburman.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const workRoutes: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${BASE_URL}/works/${workTitleConverter(project.title)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...workRoutes];
}
