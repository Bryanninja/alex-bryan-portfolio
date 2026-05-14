import { MetadataRoute } from "next";
import { projectsData } from "./data/projects"; // Ajuste o caminho se necessário

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.albrystudio.com"; // Seu domínio

  // Gera as rotas dinâmicas dos seus projetos
  const projectUrls = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/orcamento`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectUrls,
  ];
}
