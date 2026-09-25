import type { MetadataRoute } from "next";
import { serviceCategories } from "@/data/services";

const BASE_URL = "https://www.vareqontech.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceCategories.flatMap((category) =>
    category.subservices.map((sub) => ({
      url: `${BASE_URL}/services/${category.slug}/${sub.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  return [...staticPages, ...servicePages];
}