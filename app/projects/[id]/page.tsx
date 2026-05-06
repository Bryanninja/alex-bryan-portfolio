"use client";

import { use } from "react"; // Para desempacotar os params no Client Component
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck } from "lucide-react";

import { projectsData } from "../../data/projects";
import FloatingMenu from "@/app/components/FloatingMenu";
import Footer from "@/app/components/sections/Footer";

// Importando suas variantes de elite
import {
  containerStagger,
  childFadeUp,
  imageReveal,
} from "../../utils/animations";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  // No Next.js 15 Client Components, usamos o 'use' para os params
  const resolvedParams = use(params);
  const projectId = Number(resolvedParams.id);
  const project = projectsData?.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="flex flex-col h-screen items-center justify-center gap-4 bg-brand-50">
        <h1 className="text-2xl font-bold text-brand-800">
          Ops! O projeto não foi encontrado.
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
    <main className="min-h-screen bg-brand-50">
      <FloatingMenu />

      <div className="pt-20 space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* === HEADER SECTION === */}
          <motion.div
            variants={containerStagger}
            initial="initial"
            animate="visible"
            className="mb-16"
          >
            <motion.div variants={childFadeUp}>
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
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
              <div className="max-w-3xl">
                <motion.h1
                  variants={childFadeUp}
                  className="font-heading text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-brand-800 mb-6 leading-tight tracking-tight"
                >
                  {project.projectName}
                </motion.h1>

                <motion.p
                  variants={childFadeUp}
                  className="text-xl text-brand-700/90 leading-relaxed mb-10"
                >
                  {project.description}
                </motion.p>

                {/* AVATAR DO CLIENTE */}
                <motion.div
                  variants={childFadeUp}
                  className="flex items-center gap-4 bg-white w-max pr-8 p-2.5 rounded-full shadow-sm border border-brand-200/60"
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={project.clientImg}
                      alt={project.clientName}
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
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* === HERO IMAGE COM REVEAL === */}
          <motion.div
            variants={imageReveal}
            initial="initial"
            animate="visible"
            className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-brand-200 shadow-md mb-20"
          >
            <Image
              src={project.projectImg}
              alt={project.projectName}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* === DETALHES GRID === */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <h2 className="font-heading text-3xl font-bold text-brand-800 mb-8">
                O Desafio e a Solução
              </h2>
              <div className="space-y-6 text-brand-700 text-lg leading-relaxed">
                {project.fullDescription?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              <div className="bg-brand-700 rounded-2xl p-8 shadow-sm border border-brand-200/50 sticky top-24">
                <h3 className="font-bold text-brand-50 mb-4 uppercase tracking-wider text-sm">
                  Escopo do Projeto
                </h3>
                <ul className="space-y-3 text-brand-50">
                  {project.services?.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* === GALERIA COM STAGGER NO SCROLL === */}
          <div className="mt-24">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl font-bold text-brand-800 mb-10"
            >
              Galeria do Projeto
            </motion.h3>

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
                    className={`relative rounded-2xl overflow-hidden bg-brand-200 shadow-md transition-transform duration-500 hover:scale-[1.01] ${
                      isFullWidth
                        ? "md:col-span-2 aspect-[21/9]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="Galeria"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
