import Image from "next/image";

import alexbryanIMG from "../../assets/img/Bryan/BryanImg.webp";
import bg from "../../assets/img/bg/background.webp";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Brace from "../../assets/svg/Brace.svg";
import Divider from "../../assets/svg/Divider.svg";
import DividerDesktop from "../../assets/svg/DividerDesktop.svg";

const Hero = () => {
  return (
    // Adicionado justify-center no mobile para centralizar a copy na tela inteira
    <section className="relative w-full min-h-[100dvh] md:min-h-[800px] overflow-hidden bg-slate-900 flex flex-col justify-center md:justify-start">
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="absolute z-0 object-cover"
      />

      <Container className="relative z-10 h-full flex flex-col justify-center md:justify-start md:pt-16">
        <div className="flex text-brand-50 space-y-6 flex-col items-center text-center mt-10 shrink-0 px-4">
          {/* TÍTULO COM HIERARQUIA DE ELITE */}
          <h1 className="font-heading tracking-tight flex flex-col gap-2">
            {/* O Sobretítulo (A Dor) - Menor e mais sutil */}
            <span className="text-xl md:text-2xl font-semibold text-white/80 uppercase tracking-widest">
              Sua marca não cresce?
            </span>
            {/* A Headline (A Solução) - Gigante e impactante */}
            <span className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1]">
              O erro está no seu visual.
            </span>
          </h1>

          <p className="text-base md:text-lg max-w-2xl text-white/80 px-2 font-medium">
            Identidades visuais de elite e sites que realmente vendem. Eu não
            faço o "básico", eu construo o próximo nível da sua marca.
          </p>

          {/* BOTÕES: EMPILHADOS NO MOBILE, LADO A LADO NO DESKTOP */}
          <div className="flex flex-col w-full px-6 sm:px-0 sm:w-auto sm:flex-row gap-4 pt-6">
            <div className="w-full sm:w-auto">
              <Button href="/orcamento" variant="primary">
                Solicitar Orçamento
              </Button>
            </div>
            <div className="w-full sm:w-auto">
              <Button href="#projetos" variant="outline">
                Ver Projetos
              </Button>
            </div>
          </div>
        </div>

        {/* CONTEÚDO DA FOTO + BRACES (ESCONDIDO NO MOBILE: hidden md:flex) */}
        <div className="relative z-10 w-full flex-1 hidden md:flex justify-center items-end mt-12 px-4">
          <div className="relative w-full max-w-[450px] lg:max-w-[600px] flex justify-center">
            <Image
              src={Brace}
              alt=""
              className="absolute -left-12 lg:-left-20 top-[50%] z-20 animate-floating-slow w-12 2xl:w-14"
            />

            <Image
              src={alexbryanIMG}
              alt="Imagem Alex Bryan"
              className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
              priority
            />

            <div
              className="absolute -right-12 lg:-right-20 top-[30%] z-20 rotate-180 animate-floating-slow w-12 2xl:w-14"
              style={{ animationDelay: "1.5s" }}
            >
              <Image src={Brace} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </Container>

      {/* Textão de Fundo - Tamanho ajustado no mobile para não estourar a tela */}
      <h1 className="pointer-events-none absolute -bottom-10 -left-4 md:-bottom-56 md:-left-10 z-[1] select-none whitespace-nowrap text-[8rem] md:text-[15rem] lg:text-[35rem] 2xl:text-[32rem] font-bold text-brand-50 opacity-20 md:opacity-40 blur-md">
        Álex Bryan
      </h1>

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
