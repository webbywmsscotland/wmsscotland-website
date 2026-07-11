import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wmsscotland.com",
      lastModified: new Date(),
    },
    {
      url: "https://wmsscotland.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://wmsscotland.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://wmsscotland.com/repairs",
      lastModified: new Date(),
    },
    {
      url: "https://wmsscotland.com/contact",
      lastModified: new Date(),
    },
  ];
}