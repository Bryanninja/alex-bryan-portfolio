"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/Container";
import { BadgeCheck, ArrowDown, ArrowUp } from "lucide-react";

// importa do "Banco de Dados" mockado!
import { projectsData } from "../../data/projects";

const PortfolioSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? projectsData : projectsData.slice(0, 4);

  return (
    <section id="projetos" className="w-full bg-brand-50 py-20">
      <Container>
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-800 tracking-tight">
            Dá uma olhada no que <br /> a gente já construiu.
          </h2>
          <p className="text-lg md:text-xl text-brand-600 max-w-2xl">
            Projetos que transformaram negócios comuns em marcas de elite.
          </p>
        </div>

        {/* Intro */}
        <div className="mb-10 max-w-xl">
          <h3 className="text-xl font-bold text-brand-800 mb-2">
            Cases De Sucesso
          </h3>
          <p className="text-brand-600 leading-relaxed">
            Mais do que telas bonitas: identidades visuais e sites desenvolvidos
            com estratégia para gerar autoridade imediata e atrair o cliente
            certo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {visibleProjects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="flex flex-col group/card cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-brand-200 mb-5">
                <Image
                  src={project.projectImg}
                  alt={`Projeto ${project.projectName}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                />

                {/* OVERLAY DE HOVER */}
                <div className="absolute inset-0 bg-brand-900/60 opacity-0 transition-all duration-500 flex items-center justify-center group-hover/card:opacity-100 backdrop-blur-sm z-10">
                  <span className="bg-white text-brand-900 font-bold px-8 py-3 rounded-full translate-y-4 group-hover/card:translate-y-0 transition-all duration-500">
                    Ver Projeto completo
                  </span>
                </div>
              </div>

              {/* Informações do Cliente */}
              <div className="flex items-center gap-4 px-2">
                <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden border-2 border-brand-200">
                  <Image
                    src={project.clientImg}
                    alt={`Foto de ${project.clientName}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
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

                  <span className="text-sm font-semibold text-brand-500 mt-1">
                    {project.projectName}
                  </span>
                  <p className="text-sm text-brand-700/80 mt-0.5 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Botão Ver Mais/Menos */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 font-bold text-brand-700 hover:text-brand-500 transition-colors border-b-2 border-brand-700 hover:border-brand-500 pb-1"
          >
            {isExpanded ? (
              <>
                Ver Menos <ArrowUp size={18} strokeWidth={2.5} />
              </>
            ) : (
              <>
                Ver Mais <ArrowDown size={18} strokeWidth={2.5} />
              </>
            )}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
