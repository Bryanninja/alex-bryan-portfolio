import { Metadata } from "next";
import { projectsData } from "../../data/projects";
import ProjectClient from "./ProjectClient";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

// 1. Geração do SEO Dinâmico (Roda no Servidor)
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.id === Number(resolvedParams.id));

  if (!project) {
    return { title: "Projeto não encontrado | Álex Bryan" };
  }

  return {
    title: `${project.projectName} | Álex Bryan`,
    description: project.description,
    openGraph: {
      title: `${project.projectName} | Álex Bryan`,
      description: project.description,
      images: [project.projectImg.src], // Pega o caminho estático da imagem
    },
  };
}

// 2. A Página em si (Roda no Servidor, repassa o ID para o Client Component)
export default async function ProjectDetail({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const projectId = Number(resolvedParams.id);

  return <ProjectClient projectId={projectId} />;
}
