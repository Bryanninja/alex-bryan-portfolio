import Image from "next/image";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { ArrowRight } from "lucide-react";

// Importe a sua imagem JÁ CORTADA (sem espaço vazio nas laterais)
import alexPhoto from "../../assets/img/Bryan/BryanImg2.webp";
import alexPhoto2 from "../../assets/img/Bryan/bryan-mobile2.webp";

const FocusSection = () => {
  return (
    <section
      id="sobre"
      className="w-full bg-brand-50 py-12 lg:py-24 overflow-hidden"
    >
      <Container>
        {/* Adicionado gap-12 lg:gap-8 para respirar melhor no mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-center">
          {/* LADO ESQUERDO: TEXTOS */}

          <div className="col-span-12 lg:col-span-6 flex flex-col space-y-8 min-w-0 w-full overflow-hidden">
            <div className="space-y-3 min-w-0">
              <span className="text-brand-500 font-bold uppercase tracking-widest text-sm md:text-base block truncate">
                Foque no que importa
              </span>

              {/* Tirei o text-balance no celular para evitar o bug de cálculo, mantive no PC (sm) */}
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-brand-800 leading-[1.1] sm:text-balance break-words">
                Eu cuido da sua marca e do seu site.
              </h2>
            </div>

            <div className="space-y-6 text-brand-700/90 text-base md:text-lg leading-relaxed lg:max-w-2xl break-words whitespace-normal">
              <p>
                <b className="text-brand-800">
                  Beleza sem estratégia não paga a conta.
                </b>{" "}
                Enquanto a maioria entrega um desenho bonito e some na hora do
                código, eu mato os dois problemas para você.
              </p>
              <p>
                Como Estrategista Visual e Desenvolvedor Front-end, crio a alma
                da sua marca e construo o seu site para ser o seu melhor
                vendedor. Seu projeto com a grandeza que ele merece: premium por
                fora, rápido por dentro e pronto para atrair as pessoas certas.
              </p>
            </div>

            <div className="pt-4">
              <Button
                href="/orcamento"
                className="w-full sm:w-max px-10 py-4 flex items-center justify-center gap-3"
              >
                Fale comigo! <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          {/* LADO DIREITO: IMAGEM */}
          {/* Aumentei para col-span-6 para equilibrar os dois lados */}
          <div className=" hidden sm:flex col-span-12 lg:col-span-6 relative flex justify-center items-end mt-8 lg:mt-0">
            <Image
              src={alexPhoto}
              alt="Álex Bryan gesticulando"
              className=" object-contain object-bottom "
            />

            {/* Overlay suave na parte inferior da foto para o efeito de "fading" */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-50 to-transparent z-20 pointer-events-none" />
          </div>

          <div className="sm:hidden col-span-12 lg:col-span-6 relative flex justify-center items-end mt-8 lg:mt-0">
            <Image
              src={alexPhoto2}
              alt="Álex Bryan gesticulando"
              className=" object-contain object-bottom "
            />

            {/* Overlay suave na parte inferior da foto para o efeito de "fading" */}
            <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-brand-50 to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FocusSection;
