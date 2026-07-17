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
        badgeText="Álex Bryan — Desenvolvedor"
        title={
          <>
            Engenharia <br /> Front-end.
          </>
        }
        description="Em transição de carreira para a engenharia de software com forte background de 3 anos em UI/UX Design. Focado em construir interfaces escaláveis e de alta performance no ecossistema React."
        showPrimaryButton={false}
      />
      <GlobalExperience />
      <FocusSection
        badgeText="Arquitetura & Engenharia"
        title="Código limpo. Performance extrema."
        description={
          <>
            Vindo de um background internacional como UI/UX Designer, desenvolvi
            um olhar crítico para produto e usabilidade. Hoje, aplico essa visão
            analítica diretamente na engenharia Front-end.
            <br /> <br />
            Meu foco técnico está em{" "}
            <strong>React, Next.js e TypeScript</strong>, aplicando os
            princípios de arquitetura escalável e garantindo métricas perfeitas
            de Core Web Vitals (Lighthouse 100/100). Estou em busca de uma
            oportunidade como Estagiário ou Desenvolvedor Júnior para resolver
            problemas complexos e escalar ao lado de um time técnico.
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
        description="Estou ativamente em busca de oportunidades como Estagiário ou Desenvolvedor Júnior. Busco me conectar com times que valorizam código limpo, arquitetura escalável e impacto real de negócio. Vamos conversar sobre como eu posso agregar valor à sua equipe."
        cta="Falar no LinkedIn"
        ctaLink="https://www.linkedin.com/in/alexbryannt/"
      />
    </main>
  );
};

export default DevPage;
