import Image from "next/image";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { ArrowRight } from "lucide-react"; // Usando Lucide como sugerido

// Importe sua foto e os elementos abstratos do fundo
import alexPhoto from "../../assets/img/Bryan/BryanImg2.webp";

const FocusSection = () => {
  return (
    <section className="w-full bg-brand-50 lg:py-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-5 flex flex-col space-y-8">
            <div className=" space-y-4 md:space-y-6">
              <h2 className="text-brand-500 font-heading text-balance font-extrabold uppercase md:leading-20 tracking-tight text-5xl md:text-7xl ">
                Foque no que importa
              </h2>
              <h2 className="font-heading text-4xl text-balance font-bold text-brand-800 leading-tight">
                Eu cuido da sua marca <br className="hidden md:block" /> e do
                seu site.
              </h2>
            </div>

            <div className="space-y-6 text-brand-700/90 text-lg leading-relaxed max-w-sm md:max-w-2xl">
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
                href="/contato"
                className="px-10 py-4 flex items-center justify-center gap-2"
              >
                Fale comigo! <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 relative flex justify-center lg:justify-end">
            <Image
              src={alexPhoto}
              alt="Álex Bryan gesticulando"
              className="w-full object-cover object-right"
              priority
            />

            {/* Overlay suave na parte inferior da foto para o efeito de "fading" do design */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-50 to-transparent z-20" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FocusSection;
