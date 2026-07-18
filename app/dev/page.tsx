import FloatingMenu from "../components/FloatingMenu";
import FocusSection from "../components/sections/FocusSection";
import Footer from "../components/sections/Footer";
import GlobalExperience from "../components/sections/GlobalExperience";
import Hero from "../components/sections/Hero";
import PortfolioSection from "../components/sections/PortfolioSection";

const DevPage = () => {
  return (
    <main>
      <Hero
        badgeText="Álex Bryan — Desenvolvedor Frontend"
        title={
          <>
            Dev que entende <br /> o negócio.
          </>
        }
        description="Mergulhei no Frontend para construir o que a maioria dos devs não consegue: aplicações com estratégia e com Design de fato pensado. Código para mim não é só funcionar — é sobre como a pessoa do outro lado se sente ao usar."
        showPrimaryButton={false}
      />
      <GlobalExperience />
      <FocusSection
        badgeText="Desenvolvimento & Estratégia"
        title="Não sou só mais um dev."
        description={
          <>
            Venho do Branding — penso em marca, em narrativa, em como cada
            detalhe comunica algo. Hoje, levo essa visão para o{" "}
            <strong>React e o Next.js</strong>, buscando construir produtos
            que fazem sentido de ponta a ponta.
            <br /> <br />
            Não tenho anos de experiência para mostrar, mas tenho algo que
            não se ensina fácil: <strong>visão de produto e mentalidade de
            empreendedor</strong>. Acordo todo dia querendo ser melhor do que
            fui ontem — e isso aparece no código.
          </>
        }
      />
      <PortfolioSection filterCategory="dev" />
      <FloatingMenu />
      <Footer
        title={
          <>
            Vamos construir <br /> algo juntos?
          </>
        }
        description="Estou em busca de uma oportunidade como Estagiário ou Dev Júnior. Se você precisa de alguém que pensa além do código e se importa com o produto de verdade, quero muito conversar."
        cta="Falar no LinkedIn"
        ctaLink="https://www.linkedin.com/in/alexbryannt/"
      />
    </main>
  );
};

export default DevPage;
