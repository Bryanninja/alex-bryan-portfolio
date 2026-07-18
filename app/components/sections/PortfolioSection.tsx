"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Adicionado AnimatePresence
import Container from "../../components/Container";
import { BadgeCheck, ArrowDown, ArrowUp } from "lucide-react";

// Importando nossas variantes padronizadas
import { containerStagger, childFadeUp } from "../../utils/animations";
import { projectsData } from "../../data/projects";
import { usePathname } from "next/navigation";

const PortfolioSection = ({ filterCategory = 'all' }: { filterCategory?: 'all' | 'dev' | 'design' }) => {
  const path = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const filteredProjects = projectsData.filter(p => filterCategory === 'all' || p.category === filterCategory || p.category === 'both');
  
  if (filterCategory === 'dev') {
    filteredProjects.sort((a, b) => (a.devOrder || 99) - (b.devOrder || 99));
  }

  const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projetos" className="w-full bg-brand-50 py-16 overflow-hidden">
      <Container>
        {/* Cabeçalho com Stagger */}
        <motion.div
          variants={containerStagger}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <motion.h2
            variants={childFadeUp}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance font-extrabold text-brand-800 tracking-tight"
          >
            {filterCategory === 'dev'
              ? <>Uma parte do que <br className="md:block" /> já entreguei.</>
              : <>Dá uma olhada no que <br className="md:block" /> a gente já construiu.</>}
          </motion.h2>
          <motion.p
            variants={childFadeUp}
            className="text-lg md:text-xl text-pretty text-brand-600 max-w-sm md:max-w-2xl"
          >
            {filterCategory === 'dev'
              ? "Projetos reais, em produção. Cada um com uma lição aprendida."
              : "Projetos que transformaram negócios comuns em marcas de elite."}
          </motion.p>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 max-w-xl"
        >
          <h3 className="text-xl font-bold text-brand-800 mb-2">
            Cases De Sucesso
          </h3>
          <p className="text-brand-600 leading-relaxed">
            Mais do que telas bonitas: identidades visuais e sites desenvolvidos
            com estratégia para gerar autoridade imediata e atrair o cliente
            certo.
          </p>
        </motion.div>

        {/* Grid com Layout Animation */}
        <motion.div
          layout // Isso faz os itens se moverem suavemente quando o grid expande
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout // Anima a posição do card
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05, // Stagger dinâmico para cada card
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/projects/${project.id}?from=${path}`}
                  className="flex flex-col group/card cursor-pointer"
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-brand-200 mb-5">
                    <Image
                      src={[8, 9, 10, 11].includes(project.id) ? project.projectImg : project.gallery[1]}
                      alt={`Projeto ${project.projectName}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
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
                        sizes="48px"
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

                      <span className="text-sm font-semibold text-brand-700 mt-1">
                        {project.projectName}
                      </span>
                      <p className="text-sm text-brand-700/80 mt-0.5 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Botão Ver Mais/Menos */}
        <motion.div layout className="mt-20 flex justify-center">
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
        </motion.div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
