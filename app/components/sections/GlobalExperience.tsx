"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../../components/Container";

// Importando as variantes e o caminho que você confirmou
import {
  containerStagger,
  childFadeUp,
  itemScale,
} from "../../utils/animations";

import flagUSA from "../../assets/img/flags/EUA.webp";
import flagCroatia from "../../assets/img/flags/Croatia.webp";
import flagSouthAfrica from "../../assets/img/flags/SouthAfrica.webp";
import flagPortugal from "../../assets/img/flags/Portugal.webp";
import flagBrazil from "../../assets/img/flags/Brazil.webp";
import Button from "../Button";
import { ArrowDown } from "lucide-react";

const GlobalExperience = () => {
  const flags = [
    { img: flagUSA, name: "Estados Unidos", width: "w-[30%]" },
    { img: flagCroatia, name: "Croácia", width: "w-[25%]" },
    { img: flagSouthAfrica, name: "África do Sul", width: "w-[20%]" },
    { img: flagPortugal, name: "Portugal", width: "w-[15%]" },
    { img: flagBrazil, name: "Brasil", width: "w-[10%]" },
  ];

  return (
    <section className="w-full bg-brand-50 pt-8 lg:pt-16 pb-16 lg:pb-0 overflow-hidden">
      <Container>
        <motion.div
          variants={containerStagger}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Coluna 1: Títulos */}
          <div className="col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <motion.span
              variants={childFadeUp}
              className="rounded-full border border-brand-500 px-4 py-1.5 text-sm font-semibold text-brand-700"
            >
              Experiência Global
            </motion.span>

            <motion.h2
              variants={childFadeUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-800 lg:leading-tight"
            >
              Projetos Que Performam Em{" "}
              <span className="text-brand-500">
                Qualquer Mercado
              </span>
            </motion.h2>

            <motion.div
              variants={childFadeUp}
              className="w-full rounded-2xl border border-brand-500/30 bg-brand-500/10 py-3 text-center text-sm font-bold text-brand-600 sm:w-max sm:px-16"
            >
              +3 Anos De História
            </motion.div>
          </div>

          {/* Coluna 2: Texto (DESKTOP) */}
          <div className="col-span-5 hidden lg:flex items-end pb-2">
            <motion.p
              variants={childFadeUp}
              className="text-lg leading-relaxed text-brand-700/80 lg:text-xl"
            >
              Colaborando com clientes em Orlando (EUA), Cidade do Cabo (África
              do Sul), Portugal e Croácia. Trago uma visão internacional para
              garantir que a sua marca se destaque, não importa onde o seu
              público esteja.
            </motion.p>
          </div>
        </motion.div>
      </Container>

      {/* 📱 VERSÃO MOBILE: Slide (Animação de entrada do bloco todo) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12 flex w-full snap-x snap-mandatory overflow-x-auto scrollbar-hide lg:hidden"
      >
        {flags.map((item, index) => (
          <div
            key={index}
            className="relative h-72 w-[85vw] shrink-0 snap-center md:h-96"
          >
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 z-20 rounded-full bg-white/90 px-4 py-1.5 text-sm font-bold text-brand-900 backdrop-blur-md">
              {item.name}
            </div>
          </div>
        ))}
      </motion.div>

      {/* 📱 VERSÃO MOBILE: Texto abaixo */}
      <Container className="mt-8 lg:hidden">
        <p className=" text-base leading-relaxed text-pretty text-brand-700/80">
          Colaborando com clientes em Orlando (EUA), Cidade do Cabo (África do
          Sul), Portugal e Croácia. Trago uma visão internacional para garantir
          que a sua marca se destaque, não importa onde o seu público esteja.
        </p>
      </Container>

      {/* 💻 VERSÃO DESKTOP: Sanfona (Animação de entrada suave) */}
      <motion.div
        variants={childFadeUp}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 hidden h-[450px] w-full group lg:flex"
      >
        {flags.map((flag, idx) => (
          <div
            key={idx}
            className={`group/item relative h-full ${flag.width} cursor-pointer overflow-hidden transition-all duration-700 ease-out hover:!w-[50%]`}
          >
            <div className="absolute inset-0 z-10 bg-brand-900/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover/item:!opacity-0" />
            <Image
              src={flag.img}
              fill
              alt={flag.name}
              className="object-cover transition-transform duration-700 group-hover/item:scale-110"
            />
            <div className="absolute bottom-6 left-6 z-20 translate-y-4 whitespace-nowrap rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-brand-900 opacity-0 backdrop-blur-md transition-all duration-500 group-hover/item:translate-y-0 group-hover/item:opacity-100">
              {flag.name}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-12"
      >
        <Button className="gap-2" variant="outline" href="#projetos">
          <ArrowDown />
          Ver projetos
        </Button>
      </motion.div>
    </section>
  );
};

export default GlobalExperience;
