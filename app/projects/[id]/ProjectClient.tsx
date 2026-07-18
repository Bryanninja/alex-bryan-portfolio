"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  LayoutGrid,
  Globe,
  ArrowUpRight,
} from "lucide-react";

import { projectsData } from "../../data/projects";
import FloatingMenu from "@/app/components/FloatingMenu";
import Footer from "@/app/components/sections/Footer";
import {
  containerStagger,
  childFadeUp,
  imageReveal,
} from "../../utils/animations";
import Button from "@/app/components/Button";
import { useSearchParams } from "next/navigation";

interface ProjectClientProps {
  projectId: number;
}

export default function ProjectClient({ projectId }: ProjectClientProps) {
  const searchParams = useSearchParams();
  const fromPath = searchParams.get("from") || "/";
  const project = projectsData?.find((item) => item.id === projectId);

  // Lógica para o Próximo Projeto
  const nextProject = projectsData.find(
    (p) => p.id === (projectId % projectsData.length) + 1,
  );

  if (!project) {
    return (
      <div className="flex flex-col h-screen items-center justify-center gap-4 bg-brand-50 text-center px-4">
        <h1 className="text-2xl font-bold text-brand-800">
          Ops! O projeto não foi encontrado.
        </h1>
        <Link
          href={`${fromPath}#projetos`}
          className="font-bold text-brand-50 underline"
        >
          Voltar para o Portfólio
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-brand-50">
      <FloatingMenu />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* VOLTAR */}
          <motion.div
            variants={containerStagger}
            initial="initial"
            animate="visible"
            className="mb-16"
          >
            <motion.div variants={childFadeUp}>
              <Link
                href={`${fromPath}#projetos`}
                className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-500 font-semibold group"
              >
                <ArrowLeft
                  size={20}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Voltar aos projetos
              </Link>
            </motion.div>
          </motion.div>

          {/* TÍTULO */}
          <motion.div
            variants={containerStagger}
            initial="initial"
            animate="visible"
            className="max-w-4xl mb-16"
          >
            <motion.h1
              variants={childFadeUp}
              className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-brand-800 mb-8 leading-[1.1] tracking-tighter"
            >
              {project.projectName}
            </motion.h1>
            <motion.p
              variants={childFadeUp}
              className="text-xl md:text-2xl text-brand-700/85 leading-relaxed"
            >
              {project.description}
            </motion.p>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            variants={imageReveal}
            initial="initial"
            animate="visible"
            className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-brand-200 shadow-md mb-24"
          >
            <Image
              src={project.projectImg}
              alt={project.projectName}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* CONTEÚDO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <h2 className="font-heading text-3xl font-bold text-brand-800 mb-8">
                A Estratégia de Posicionamento
              </h2>
              <div className="space-y-6 mb-8 text-brand-700 text-lg leading-relaxed">
                {project.fullDescription?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <Button
                href={project.linkWebsite}
                variant="outline"
                target="blank"
              >
                Visualizar projeto
                <ArrowUpRight />
              </Button>
            </motion.div>

            {/* SIDEBAR BRAND-700 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="bg-brand-700 p-10 rounded-[2rem] border border-brand-600 shadow-sm sticky top-24">
                <div className="flex items-center gap-3 mb-8">
                  <LayoutGrid className="text-brand-400" size={20} />
                  <h3 className="font-bold text-brand-50 uppercase tracking-[0.2em] text-xs">
                    Escopo do Projeto
                  </h3>
                </div>

                <ul className="space-y-4 mb-6">
                  {project.services?.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-brand-50/90 text-sm font-semibold"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                      {service}
                    </li>
                  ))}
                </ul>

                {project.techs ? (
                  <div className="space-y-6 border-t pt-8 border-brand-600/50">
                    <p className=" text-brand-50/90 flex gap-3 items-center text-sm font-semibold">
                      <Globe className="text-brand-400" size={20} />
                      Tecnologias utilizadas
                    </p>
                    <div className="flex flex-wrap mb-6 gap-2">
                      {project.techs?.map((tech, index) => (
                        <button
                          key={index}
                          className="py-1 border border-brand-50/10 bg-brand-600/60 rounded-full text-sm text-brand-50/80 hover:text-brand-50 px-4"
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="pt-8 border-t border-brand-600/50 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-500/20">
                    <Image
                      src={project.clientImg}
                      alt={project.clientName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-brand-50 text-base leading-none">
                        {project.clientName}
                      </span>
                      <BadgeCheck
                        size={16}
                        className="text-brand-400 fill-brand-400/10"
                      />
                    </div>
                    <span className="text-[0.65rem] font-bold text-brand-400 uppercase tracking-widest mt-1.5 block">
                      Cliente Verificado
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* GALERIA */}
          <div className="mt-32 mb-40">
            <h3 className="font-heading text-3xl font-bold text-brand-800 mb-12">
              Galeria do Projeto
            </h3>
            <motion.div
              variants={containerStagger}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {project.gallery?.map((img, index) => {
                const isFullWidth = (index + 1) % 3 === 0;
                return (
                  <motion.div
                    key={index}
                    variants={childFadeUp}
                    className={`relative rounded-2xl overflow-hidden bg-brand-200 shadow-md transition-transform duration-300 hover:scale-[1.02] ${isFullWidth ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"}`}
                  >
                    <Image
                      src={img}
                      alt="Snapshot"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* NAVEGAÇÃO: PRÓXIMO PROJETO */}
          {nextProject && (
            <div className="pb-32">
              <Link
                href={`/projects/${nextProject.id}?from=${fromPath === "/" ? "" : fromPath}`}
                className="group block"
              >
                <div className="bg-white border border-brand-200 rounded-[2rem] p-8 md:p-12 transition-all duration-300 hover:border-brand-400 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="space-y-3 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <div className="w-6 h-[2px] bg-brand-500/50" />
                        <span className="text-brand-500 font-bold uppercase tracking-[0.3em] text-[10px]">
                          Próximo Projeto
                        </span>
                      </div>
                      <h4 className="font-heading text-3xl md:text-4xl font-extrabold text-brand-800 group-hover:text-brand-600 transition-colors">
                        {nextProject.projectName}
                      </h4>
                    </div>

                    <div className="flex items-center justify-center w-14 h-14 rounded-full border border-brand-100 text-brand-300 group-hover:bg-brand-700 group-hover:text-white group-hover:border-brand-700 transition-all duration-300">
                      <ArrowRight
                        size={24}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>

        {fromPath === "/dev" ? (
          <Footer
            title={
              <>
                Pronto para o meu <br /> próximo desafio.
              </>
            }
            description="Estou ativamente em busca de oportunidades como Estagiário ou Desenvolvedor Júnior. Busco me conectar com times que valorizam código limpo, arquitetura escalável e impacto real de negócio. Vamos conversar sobre como eu posso agregar valor à sua equipe."
            cta="Falar no LinkedIn"
            ctaLink="https://www.linkedin.com/in/alexbryannt/"
          />
        ) : (
          <Footer />
        )}
      </div>
    </main>
  );
}
