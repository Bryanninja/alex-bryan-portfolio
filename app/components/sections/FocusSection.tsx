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
                className="text-brand-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm block"
              >
                Design & Tecnologia
              </motion.span>

              <motion.h2
                variants={childFadeUp}
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-800 leading-[1.15] tracking-tighter text-balance"
              >
                Marcas que você respeita não nasceram assim por acaso.
              </motion.h2>
            </div>

            <motion.div
              variants={childFadeUp}
              className="space-y-6 text-brand-700/80 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              <p>
                Tem uma diferença enorme entre ter um logo e ter uma marca. O
                logo qualquer freelancer faz em 2 dias. A marca é o conjunto de
                decisões visuais que faz o seu cliente sentir que está lidando
                com algo de outro nível.
              </p>
              <p>
                É aí que entro com a tecnologia: Landing Pages construídas em
                cima desse posicionamento, rápidas, diretas, e feitas pra
                converter. Não é sobre ter um site bonito. É sobre ter uma
                presença digital que trabalha por você enquanto você dorme.
              </p>
            </motion.div>

            <motion.div variants={childFadeUp} className="pt-2">
              <Button href="/orcamento" className="inline-flex items-center gap-2">
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
                style={{
                  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%)",
                  maskImage: "linear-gradient(to top, transparent 0%, black 15%)"
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
                style={{
                  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%)",
                  maskImage: "linear-gradient(to top, transparent 0%, black 15%)"
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FocusSection;
