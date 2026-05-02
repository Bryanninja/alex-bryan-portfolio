"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../../components/Container";
import { BadgeCheck, ArrowDown, ArrowUp } from "lucide-react";

// Caminhos reais das imagens dos projetos
import projMSFinancial from "../../assets/img/projects/ms-financial.webp";
import projPaceon from "../../assets/img/projects/Paceon.webp";
import projIgrejaJesusEoCaminho from "../../assets/img/projects/igreja-jesus.webp";
import projSenaFilms from "../../assets/img/projects/sena-films.webp";
import projProteck from "../../assets/img/projects/proteck.webp";
import projInfluence from "../../assets/img/projects/rede-influence.webp";
import projILS from "../../assets/img/projects/ils.webp";

// Fotos dos seus clientes
import avatarMichel from "../../assets/img/projects/michel.webp";
import avatarAdryan from "../../assets/img/projects/adryan.webp";
import avatarFranciely from "../../assets/img/projects/franciely.webp";
import avatarKarlo from "../../assets/img/projects/karlo.webp";
import avatarJorge from "../../assets/img/projects/jorge.webp";
import avatarRaul from "../../assets/img/projects/raul.webp";
import avatarLucas from "../../assets/img/projects/lucas.webp";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    clientName: "Michel Stawicki",
    projectName: "MS Financial",
    description:
      "Criação de Identidade Visual e Site Institucional para mentoria financeira, com foco estratégico em gerar alta autoridade no mercado.",
    projectImg: projMSFinancial,
    clientImg: avatarMichel,
  },
  {
    id: 2,
    clientName: "Adryan Medeiros",
    projectName: "Paceon",
    description:
      "Desenvolvimento de Identidade Visual para uma marca focada em corredores obstinados, que buscam superar constantemente a sua versão de ontem.",
    projectImg: projPaceon,
    clientImg: avatarAdryan,
  },
  {
    id: 3,
    clientName: "Franciely Hisdaleck",
    projectName: "Igreja Jesus é o caminho",
    description:
      "Projeto completo: desde a Identidade Visual até o desenvolvimento de um WebApp de leitura personalizado, com destaque para a alta acessibilidade.",
    projectImg: projIgrejaJesusEoCaminho,
    clientImg: avatarFranciely,
  },
  {
    id: 4,
    clientName: "Karlo Kirin",
    projectName: "Proteck HVAC",
    description:
      "Desenvolvimento de Identidade Visual e personalização de van para uma empresa na Croácia, visando uma forte presença e consolidação de mercado.",
    projectImg: projProteck,
    clientImg: avatarKarlo,
  },
  {
    id: 5,
    clientName: "Jorge Martins",
    projectName: "Rede Influence",
    description:
      "Desenvolvimento de Identidade Visual para um movimento de jovens cristãos, transmitindo um posicionamento moderno, dinâmico e jovial.",
    projectImg: projInfluence,
    clientImg: avatarJorge,
  },
  {
    id: 6,
    clientName: "Lucas Silva",
    projectName: "ILS Construções",
    description:
      "Reposicionamento estratégico e Identidade Visual para uma construtora se firmar no mercado de alto padrão, visando aumento de faturamento.",
    projectImg: projILS,
    clientImg: avatarLucas,
  },
  {
    id: 7,
    clientName: "Raul Sena",
    projectName: "Sena Films",
    description:
      "Desenvolvimento de Identidade Visual para um estúdio de gravação e edição de vídeos focado em ajudar empresas a melhorarem a sua imagem.",
    projectImg: projSenaFilms,
    clientImg: avatarRaul,
  },
];

const PortfolioSection = () => {
  // 2. memória do componente (começa como false, ou seja, não está expandido)
  const [isExpanded, setIsExpanded] = useState(false);

  // 3. Lógica do Array: Se estiver expandido, mostra tudo. Se não, corta (slice) nos 4 primeiros.
  const visibleProjects = isExpanded ? projectsData : projectsData.slice(0, 4);

  return (
    <section id="projetos" className="w-full bg-brand-50 py-20">
      <Container>
        {/* Cabeçalho Centralizado */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-800 tracking-tight">
            Dá uma olhada no que <br /> a gente já construiu.
          </h2>
          <p className="text-lg md:text-xl text-brand-600 max-w-2xl">
            Projetos que transformaram negócios comuns em marcas de elite.
          </p>
        </div>

        {/* Intro Alinhada à Esquerda */}
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

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {visibleProjects.map((project) => (
            // 1. Trocamos a div por um Link que aponta para a rota dinâmica do projeto
            <Link
              href={`/projetos/${project.id}`}
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

                {/* 2. OVERLAY DE HOVER (A Mágica do Botão) */}
                {/* Fundo escuro que aparece suavemente */}
                <div className="absolute inset-0 bg-brand-900/60 opacity-0 transition-all duration-500 flex items-center justify-center group-hover/card:opacity-100 backdrop-blur-sm z-10">
                  {/* Botão que sobe um pouquinho quando aparece */}
                  <span className="bg-white text-brand-900 font-bold px-8 py-3 rounded-full translate-y-4 group-hover/card:translate-y-0 transition-all duration-500">
                    Ver Projeto completo
                  </span>
                </div>
              </div>

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

        {/* Botão Ver Mais / Ver Menos */}
        <div className="mt-20 flex justify-center">
          <button
            // 5. Quando clica, inverte o valor atual (se era false, vira true, e vice-versa)
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 font-bold text-brand-700 hover:text-brand-500 transition-colors border-b-2 border-brand-700 hover:border-brand-500 pb-1"
          >
            {/* 6. Renderização condicional dos textos e ícones */}
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
