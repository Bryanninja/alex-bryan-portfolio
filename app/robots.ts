import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.albrystudio.com/sitemap.xml", // Lembre-se de usar seu domínio real
  };
}
