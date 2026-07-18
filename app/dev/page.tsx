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
            Interfaces que <br /> fazem sentido.
          </>
        }
        description="Desenvolvo no ecossistema React e Next.js com um olhar de quem também pensa em Design. Não sou Sênior, mas sou honesto sobre o que sei — e determinado a crescer rápido."
        showPrimaryButton={false}
      />
      <GlobalExperience />
      <FocusSection
        badgeText="Desenvolvimento & Design"
        title="Código limpo, produto bonito."
        description={
          <>
            Minha trajetória mistura dois mundos: comecei pelo Design
            (Branding, identidade visual, tipografia) e hoje estou migrando
            para o Desenvolvimento Frontend de cabeça. Isso me deu algo que
            poucos devs têm: <strong>senso estético e atenção ao detalhe</strong>.
            <br /> <br />
            Meu foco técnico está em{" "}
            <strong>React, Next.js e TypeScript</strong>. Estou construindo
            projetos reais, aprendendo na prática e buscando minha primeira
            oportunidade como Estagiário ou Júnior — em um time onde eu
            possa crescer e contribuir de verdade.
          </>
        }
        cta="Acessar GitHub"
        ctaLink="https://github.com/Bryanninja"
      />
      <PortfolioSection filterCategory='dev' />
      <FloatingMenu />
      <Footer
        title={
          <>
            Pronto para o meu <br /> próximo desafio.
          </>
        }
        description="Estou em busca da minha primeira oportunidade como Estagiário ou Desenvolvedor Júnior. Quero fazer parte de um time que valorize código bem feito, aprendizado constante e pessoas que se importam com o que entregam."
        cta="Falar no LinkedIn"
        ctaLink="https://www.linkedin.com/in/alexbryannt/"
      />
    </main>
  );
};

export default DevPage;
