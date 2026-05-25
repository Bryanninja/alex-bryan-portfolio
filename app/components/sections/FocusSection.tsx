"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { ArrowRight } from "lucide-react";

import {
  containerStagger,
  childFadeUp,
  imageReveal,
} from "../../utils/animations";

import alexPhoto from "../../assets/img/Bryan/BryanImg2.webp";
import alexPhoto2 from "../../assets/img/Bryan/bryan-mobile2.webp";

const FocusSection = () => {
  return (
    <section
      id="sobre"
      className="w-full bg-brand-50 py-12 lg:py-24 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LADO ESQUERDO: TEXTOS (Marca + Site) */}
          <motion.div
            variants={containerStagger}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                variants={childFadeUp}
                className="text-brand-500 font-bold uppercase tracking-[0.2em] text-xs block"
              >
                Design & Tecnologia
              </motion.span>

              <motion.h2
                variants={childFadeUp}
                className="font-heading text-4xl lg:text-5xl font-extrabold text-brand-800 leading-tight tracking-tighter"
              >
                Construo a alma da sua marca e a estrutura que a faz vender.
              </motion.h2>
            </div>

            <motion.div
              variants={childFadeUp}
              className="space-y-6 text-brand-700/90 text-base md:text-lg leading-relaxed"
            >
              <p>
                Identidades visuais de elite não são apenas "bonitas"; elas são
                estratégicas. Eu desenvolvo a <strong>alma visual</strong> do
                seu negócio para garantir que você seja percebido como
                autoridade antes mesmo do primeiro contato.
              </p>
              <p>
                Mas beleza sem performance não gera escala. Por isso, uno esse
                design a <strong>Landing Pages de alta performance</strong>,
                garantindo que sua presença digital seja premium por fora e uma
                máquina de vendas por dentro.
              </p>
            </motion.div>

            <motion.div variants={childFadeUp}>
              <Button href="/orcamento" className="flex items-center gap-2">
                Solicitar Orçamento <ArrowRight size={18} />
              </Button>
            </motion.div>
          </motion.div>

          {/* LADO DIREITO: IMAGEM (Sem shadow, col-6) */}
          <div className="relative mt-8 lg:mt-0">
            <motion.div
              variants={imageReveal}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true }}
              className="hidden sm:flex relative justify-center items-end"
            >
              <Image
                src={alexPhoto}
                alt="Álex Bryan"
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-50 to-transparent z-20 pointer-events-none" />
            </motion.div>

            <motion.div
              variants={imageReveal}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true }}
              className="sm:hidden relative flex justify-center items-end"
            >
              <Image
                src={alexPhoto2}
                alt="Álex Bryan"
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-brand-50 to-transparent z-20 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FocusSection;
