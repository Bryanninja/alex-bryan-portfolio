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
    <section className="relative w-full h-dvh min-h-[800px] overflow-hidden bg-slate-900">
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="absolute z-0 object-cover"
      />

      <Container className="relative z-10 h-full flex flex-col pt-8  md:pt-16 ">
        <div className="flex text-brand-50 space-y-6 flex-col items-center text-center mt-10 shrink-0">
          <h1 className="font-heading font-extrabold text-balance text-6xl max-w-4xl uppercase tracking-tight">
            Sua marca não cresce?
            <br />
            <span className="lowercase text-balance">
              <span className="uppercase">O</span> erro está no seu visual.
            </span>
          </h1>
          <p className="text-lg max-w-2xl text-brand-100">
            Identidades visuais de elite e sites que realmente vendem. Eu não
            faço o "básico", eu construo o próximo nível da sua marca.
          </p>
          <div className="flex gap-4 pt-4">
            <Button href="/orcamento" variant="primary">
              Solicitar Orçamento
            </Button>
            <Button href="#projetos" variant="outline">
              Ver Projetos
            </Button>
          </div>
        </div>

        <div className="relative z-10 flex-1 w-full flex justify-center items-end mt-8">
          <Image
            src={alexbryanIMG}
            alt="Imagem Alex Bryan"
            className="w-auto h-full max-h-[60vh] md:max-h-[65vh] object-contain object-bottom"
            priority
          />
        </div>
      </Container>

      <Image
        src={Brace}
        alt=""
        className="pointer-events-none absolute left-2 top-[60%] z-20 animate-floating-slow w-8 md:left-[10%] md:top-[50%] lg:top-[40%] xl:left-[15%] 2xl:w-10"
      />
      <div className="pointer-events-none absolute right-2 top-[45%] z-20 rotate-180 md:right-[10%] lg:top-[35%] xl:right-[15%]">
        <Image
          src={Brace}
          alt=""
          className="animate-floating-slow w-8 2xl:w-10"
        />
      </div>

      {/* Textão de Fundo */}
      <h1 className="pointer-events-none absolute -bottom-20 -left-10 z-[1] select-none whitespace-nowrap text-[15rem] font-bold text-brand-50 opacity-40 blur-md sm:-bottom-32 sm:-left-36 md:text-[35rem] 2xl:-bottom-40 2xl:text-[32rem]">
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
