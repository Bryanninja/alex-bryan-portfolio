// app/projetos/[id]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, BadgeCheck } from "lucide-react";
import { projectsData } from "../../data/projects";
import FloatingMenu from "@/app/components/FloatingMenu";
// import Button from "../../../components/Button"; // Make sure you have this component or replace with simple buttons

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const projectId = Number(resolvedParams.id);
  const project = projectsData?.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="flex flex-col h-screen items-center justify-center gap-4 bg-brand-50">
        <h1 className="text-2xl font-bold text-brand-800">
          Ops! O projeto com ID "{projectId}" não foi encontrado.
        </h1>
        <Link
          href="/"
          className="font-bold text-brand-500 hover:text-brand-600 underline"
        >
          Voltar para o Portfólio
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-brand-50 pt-32 pb-20">
      <FloatingMenu />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-500 font-semibold mb-10 transition-colors group"
          >
            <ArrowLeft
              size={20}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Voltar aos projetos
          </Link>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
            <div className="max-w-3xl">
              {/* Substituímos o "Case Study" por algo mais comercial */}
              <span className="text-sm font-bold uppercase tracking-widest text-brand-500 mb-4 block">
                Projeto Entregue
              </span>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-brand-800 mb-6 leading-tight tracking-tight">
                {project.projectName}
              </h1>

              {/* Demos um respiro e um tamanho maior para a descrição inicial */}
              <p className="text-xl text-brand-700/90 leading-relaxed mb-10">
                {project.description}
              </p>

              {/* === AVATAR DO CLIENTE === */}
              {/* Agora ele respira melhor abaixo da descrição */}
              <div className="flex items-center gap-4 bg-white w-max pr-8 p-2.5 rounded-full shadow-sm border border-brand-200/60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={project.clientImg}
                    alt={`Foto de ${project.clientName}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-brand-800 text-lg leading-none">
                      {project.clientName}
                    </span>
                    <BadgeCheck
                      size={18}
                      className="text-brand-500 fill-brand-500/10"
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-[0.65rem] font-bold text-brand-500 uppercase tracking-widest mt-1">
                    Cliente Verificado
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna da direita do Header (se quiser colocar botões no futuro) */}
            <div className="flex gap-4 shrink-0 mt-4 md:mt-0">
              {/* <Button variant="outline" className="flex gap-2">Visitar Site Ao Vivo <ArrowUpRight size={18} /></Button> */}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden bg-brand-200 mb-20 shadow-2xl">
          <Image
            src={project.projectImg}
            alt={`Capa do projeto ${project.projectName}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content (Left) */}
          <div className="lg:col-span-8">
            <h2 className="font-heading text-3xl font-bold text-brand-800 mb-8">
              O Desafio e a Solução
            </h2>

            <div className="space-y-6 text-brand-700 text-lg leading-relaxed">
              {/* Rendering the full description array */}
              {project.fullDescription?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4 space-y-12">
            {/* Info Box */}
            <div className="bg-brand-700 rounded-2xl p-8 shadow-sm border border-brand-200/50">
              <h3 className="font-bold text-brand-50 mb-4 uppercase tracking-wider text-sm">
                Escopo do Projeto
              </h3>
              <ul className="space-y-3 text-brand-50">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                  Identidade Visual
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                  UI/UX Design
                </li>
                {/* You can make these dynamic later too */}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-24">
          <h3 className="font-heading text-3xl font-bold text-brand-800 mb-10">
            Galeria do Projeto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Just showing the first two gallery images for a clean look */}
            {project.gallery?.slice(0, 2).map((img, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-200 shadow-md"
              >
                <Image
                  src={img}
                  alt={`Galeria ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Full width bottom image */}
          {project.gallery?.[2] && (
            <div className="relative w-full aspect-[21/9] mt-8 rounded-2xl overflow-hidden bg-brand-200 shadow-md">
              <Image
                src={project.gallery[2]}
                alt="Galeria destaque"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* CTA Bottom */}
        <div className="mt-32 text-center bg-brand-800 rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900 to-brand-700 z-0" />
          <div className="relative z-10">
            <h2 className="font-heading text-4xl font-bold text-white mb-6">
              Pronto para ser o próximo case de sucesso?
            </h2>
            <p className="text-brand-200 text-lg mb-10 max-w-2xl mx-auto">
              Vamos transformar a sua marca e elevar a percepção do seu negócio
              no mercado.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-brand-500 text-white font-bold px-10 py-4 rounded-full hover:bg-brand-400 transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
