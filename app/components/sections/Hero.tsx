"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";

import { imageReveal, slowFadeIn } from "../../utils/animations";

import alexbryanIMG from "../../assets/img/Bryan/BryanImg.webp";
import bg from "../../assets/img/bg/background.webp";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Brace from "../../assets/svg/Brace.svg";
import Divider from "../../assets/svg/Divider.svg";
import DividerDesktop from "../../assets/svg/DividerDesktop.svg";
import { ArrowRight } from "lucide-react";

function useCountUp(end: number, duration = 1800, delay = 1000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * end));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [end, duration, delay]);
  return count;
}

interface HeroProps {
  badgeText?: string;
  title?: ReactNode;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  showPrimaryButton?: boolean;
}

const Hero = ({
  badgeText = "Albry Studio",
  title = (
    <>
      Sua marca fala <br /> antes de você.
    </>
  ),
  description = "Você entrega um serviço de alto valor. A questão é: a sua marca conta essa história antes de você abrir a boca?",
  ctaText = "Solicitar Orçamento",
  ctaLink = "https://wa.me/5531971462832?text=Ol%C3%A1%21+Vim+pelo+site+da+Albry+Studio+e+gostaria+de+conversar+sobre+um+projeto.",
  showPrimaryButton = true,
}: HeroProps) => {
  const projectCount = useCountUp(40, 1800, 1000);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-slate-900 flex flex-col">
      {/* Background */}
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="absolute z-0 object-cover"
      />

      {/* Marca d'água */}
      <motion.div
        variants={slowFadeIn}
        initial="initial"
        animate="visible"
        className="absolute inset-0 pointer-events-none z-[1] overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -left-4 md:-bottom-56 md:-left-10 select-none whitespace-nowrap text-[8rem] md:text-[15rem] lg:text-[26rem] font-bold text-brand-50 opacity-20 md:opacity-30 blur-md"
        >
          Álex Bryan
        </div>
      </motion.div>

      {/* CONTAINER PRINCIPAL: Centralizado (max-w) para manter o texto e foto próximos */}
      <Container className="relative z-10 flex-1 flex flex-col">
        {/* FOTO DESKTOP: Ancorada no fundo do Container (respeitando a max-w de 1440px) */}
        <motion.div
          variants={imageReveal}
          initial="initial"
          animate="visible"
          className="hidden lg:block absolute bottom-0 right-6 lg:right-20 w-[50%] lg:w-[52%] h-[85vh] max-h-[800px] z-10 pointer-events-none"
        >
          {/* Brace esquerda */}
          <Image
            src={Brace}
            alt=""
            className="absolute left-0 lg:left-10 top-[39%] z-20 animate-floating-slow w-10 lg:w-12"
          />

          <Image
            src={alexbryanIMG}
            alt="Álex Bryan — Designer & Desenvolvedor Front-end"
            fill
            priority
            className="object-contain object-bottom drop-shadow-2xl"
            sizes="50vw"
          />

          {/* Brace direita */}
          <div
            className="absolute right-8 lg:right-16 top-[30%] z-20 rotate-180 animate-floating-slow w-10 lg:w-12"
            style={{ animationDelay: "1.5s" }}
          >
            <Image src={Brace} alt="" className="w-full h-full" />
          </div>
        </motion.div>

        {/* COLUNA ESQUERDA: Texto */}
        <div className="flex-1 flex flex-col justify-center pt-24 pb-4 md:py-16">
          <div className="flex flex-col justify-center space-y-7 text-brand-50 text-left w-full lg:w-[48%]">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white/60 uppercase tracking-[0.3em]">
                <span className="w-5 h-px bg-white/40 inline-block" />
                {badgeText}
              </span>
            </div>

            <h1 className="font-heading tracking-tight">
              <span className="font-extrabold text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-[4.25rem] text-white leading-[1.08] block">
                {title}
              </span>
            </h1>

            <p className="text-base md:text-lg max-w-sm text-white/70 font-medium leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {showPrimaryButton && (
                <Button href={ctaLink} variant="primary" target="_blank">
                  {ctaText}
                </Button>
              )}
              <Button
                href="#projetos"
                variant={showPrimaryButton ? "outline" : "primary"}
              >
                Ver Projetos
                <ArrowRight />
              </Button>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 pt-1">
              <div>
                <p className="text-white font-extrabold text-3xl leading-none">
                  +3
                </p>
                <p className="text-white/50 text-xs uppercase tracking-wider mt-1">
                  Anos
                </p>
              </div>
              <div className="w-px h-9 bg-white/20" />
              <div>
                <p className="text-white font-extrabold text-3xl leading-none">
                  5
                </p>
                <p className="text-white/50 text-xs uppercase tracking-wider mt-1">
                  Países
                </p>
              </div>
              <div className="w-px h-9 bg-white/20" />
              <div>
                <p className="text-white font-extrabold text-3xl leading-none">
                  +{projectCount}
                </p>
                <p className="text-white/50 text-xs uppercase tracking-wider mt-1">
                  Projetos
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* MOBILE: foto abaixo do texto */}
      <motion.div
        variants={imageReveal}
        initial="initial"
        animate="visible"
        className="lg:hidden relative w-full h-[60vh] min-h-[480px] z-10 shrink-0 mt-auto overflow-hidden"
      >
        {/* Brace esquerda (Mobile) */}
        <Image
          src={Brace}
          alt=""
          className="absolute left-8 top-[45%] z-20 animate-floating-slow w-7 opacity-60"
        />

        <Image
          src={alexbryanIMG}
          alt="Álex Bryan"
          fill
          priority
          className="object-cover object-top scale-125 origin-top"
          sizes="100vw"
        />

        {/* Brace direita (Mobile) */}
        <div
          className="absolute right-8 top-[30%] z-20 rotate-180 animate-floating-slow w-7 opacity-60"
          style={{ animationDelay: "1.5s" }}
        >
          <Image src={Brace} alt="" className="w-full h-full" />
        </div>

        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
      </motion.div>

      {/* Dividers */}
      <Image
        src={Divider}
        alt=""
        className="pointer-events-none absolute -bottom-1 z-30 block w-full lg:hidden"
      />
      <Image
        src={DividerDesktop}
        alt=""
        className="pointer-events-none absolute -bottom-6 z-30 hidden w-full lg:block"
      />
    </section>
  );
};

export default Hero;
