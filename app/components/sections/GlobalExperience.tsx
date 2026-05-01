import Image from "next/image";
import Container from "../../components/Container";

import flagUSA from "../../assets/img/flags/EUA.webp";
import flagCroatia from "../../assets/img/flags/Croatia.webp";
import flagSouthAfrica from "../../assets/img/flags/SouthAfrica.webp";
import flagPortugal from "../../assets/img/flags/Portugal.webp";
import flagBrazil from "../../assets/img/flags/Brazil.webp";
import Button from "../Button";
import { ArrowDown } from "lucide-react";

const GlobalExperience = () => {
  return (
    <section className="w-full bg-brand-50 pt-8 lg:pt-16 pb-16 lg:pb-0">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Coluna 1: Títulos */}
          {/* ADICIONADO: items-center text-center no mobile, voltando para start/left no lg */}
          <div className="col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <span className="rounded-full border border-brand-500 px-4 py-1.5 text-sm font-semibold text-brand-700">
              Experiência Global
            </span>

            <h2 className="font-heading text-5xl font-extrabold tracking-tight text-brand-800 md:text-5xl lg:leading-tight">
              Projetos Que Performam Em <br />
              <span className="text-brand-500 text-4xl md:text-[4rem]">
                Qualquer Mercado
              </span>
            </h2>

            <div className="w-full rounded-2xl border border-brand-500/30 bg-brand-500/10 py-3 text-center text-sm font-bold text-brand-600 sm:w-max sm:px-16">
              +3 Anos De História
            </div>
          </div>

          {/* Coluna 2: Texto (DESKTOP) */}
          {/* ADICIONADO: hidden lg:flex para sumir no mobile e aparecer no PC */}
          <div className="col-span-5 hidden lg:flex items-end pb-6">
            <p className="text-lg leading-relaxed text-brand-700/80 lg:text-xl">
              Colaborando com clientes em Orlando (EUA), Cidade do Cabo (África
              do Sul), Portugal e Croácia. Trago uma visão internacional para
              garantir que a sua marca se destaque, não importa onde o seu
              público esteja.
            </p>
          </div>
        </div>
      </Container>

      {/* ========================================= */}
      {/* 📱 VERSÃO MOBILE: Slide */}
      {/* ========================================= */}
      <div className="mt-12 flex w-full snap-x snap-mandatory overflow-x-auto scrollbar-hide lg:hidden">
        {[
          { img: flagUSA, name: "Estados Unidos" },
          { img: flagCroatia, name: "Croácia" },
          { img: flagSouthAfrica, name: "África do Sul" },
          { img: flagPortugal, name: "Portugal" },
          { img: flagBrazil, name: "Brasil" },
        ].map((item, index) => (
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
      </div>

      {/* ========================================= */}
      {/* 📱 VERSÃO MOBILE: Texto abaixo do slide */}
      {/* ========================================= */}
      {/* ADICIONADO: Recriando o texto dentro de um Container só para o Mobile */}
      <Container className="mt-8 lg:hidden">
        <p className=" text-base leading-relaxed text-pretty text-brand-700/80">
          Colaborando com clientes em Orlando (EUA), Cidade do Cabo (África do
          Sul), Portugal e Croácia. Trago uma visão internacional para garantir
          que a sua marca se destaque, não importa onde o seu público esteja.
        </p>
      </Container>

      {/* ========================================= */}
      {/* 💻 VERSÃO DESKTOP: Sanfona Corrigida */}
      {/* ========================================= */}
      <div className="mt-16 hidden h-[450px] w-full group lg:flex">
        {/* EUA */}
        <div className="group/item relative h-full w-[30%] cursor-pointer overflow-hidden transition-all duration-700 ease-out hover:!w-[50%]">
          <div className="absolute inset-0 z-10 bg-brand-900/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover/item:!opacity-0" />
          <Image
            src={flagUSA}
            fill
            alt="Estados Unidos"
            className="object-cover transition-transform duration-700 group-hover/item:scale-110"
          />
          <div className="absolute bottom-6 left-6 z-20 translate-y-4 whitespace-nowrap rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-brand-900 opacity-0 backdrop-blur-md transition-all duration-500 group-hover/item:translate-y-0 group-hover/item:opacity-100">
            Estados Unidos
          </div>
        </div>

        {/* CROÁCIA */}
        <div className="group/item relative h-full w-[25%] cursor-pointer overflow-hidden transition-all duration-700 ease-out hover:!w-[50%]">
          <div className="absolute inset-0 z-10 bg-brand-900/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover/item:!opacity-0" />
          <Image
            src={flagCroatia}
            fill
            alt="Croácia"
            className="object-cover transition-transform duration-700 group-hover/item:scale-110"
          />
          <div className="absolute bottom-6 left-6 z-20 translate-y-4 whitespace-nowrap rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-brand-900 opacity-0 backdrop-blur-md transition-all duration-500 group-hover/item:translate-y-0 group-hover/item:opacity-100">
            Croácia
          </div>
        </div>

        {/* ÁFRICA DO SUL */}
        <div className="group/item relative h-full w-[20%] cursor-pointer overflow-hidden transition-all duration-700 ease-out hover:!w-[50%]">
          <div className="absolute inset-0 z-10 bg-brand-900/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover/item:!opacity-0" />
          <Image
            src={flagSouthAfrica}
            fill
            alt="África do Sul"
            className="object-cover transition-transform duration-700 group-hover/item:scale-110"
          />
          <div className="absolute bottom-6 left-6 z-20 translate-y-4 whitespace-nowrap rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-brand-900 opacity-0 backdrop-blur-md transition-all duration-500 group-hover/item:translate-y-0 group-hover/item:opacity-100">
            África do Sul
          </div>
        </div>

        {/* PORTUGAL */}
        <div className="group/item relative h-full w-[15%] cursor-pointer overflow-hidden transition-all duration-700 ease-out hover:!w-[50%]">
          <div className="absolute inset-0 z-10 bg-brand-900/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover/item:!opacity-0" />
          <Image
            src={flagPortugal}
            fill
            alt="Portugal"
            className="object-cover transition-transform duration-700 group-hover/item:scale-110"
          />
          <div className="absolute bottom-6 left-6 z-20 translate-y-4 whitespace-nowrap rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-brand-900 opacity-0 backdrop-blur-md transition-all duration-500 group-hover/item:translate-y-0 group-hover/item:opacity-100">
            Portugal
          </div>
        </div>

        {/* BRASIL */}
        <div className="group/item relative h-full w-[10%] cursor-pointer overflow-hidden transition-all duration-700 ease-out hover:!w-[50%]">
          <div className="absolute inset-0 z-10 bg-brand-900/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover/item:!opacity-0" />
          <Image
            src={flagBrazil}
            fill
            alt="Brasil"
            className="object-cover transition-transform duration-700 group-hover/item:scale-110"
          />
          <div className="absolute bottom-6 left-6 z-20 translate-y-4 whitespace-nowrap rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-brand-900 opacity-0 backdrop-blur-md transition-all duration-500 group-hover/item:translate-y-0 group-hover/item:opacity-100">
            Brasil
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button className="gap-2" variant="outline" href="#portfolio">
          <ArrowDown />
          Portfolio
        </Button>
      </div>
    </section>
  );
};

export default GlobalExperience;
