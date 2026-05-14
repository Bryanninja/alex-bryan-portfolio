import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/sections/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Álex Bryan",
  description: "Termos de uso e condições gerais do Albry Studio.",
};

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-[#E6F4FD] font-sans flex flex-col justify-between">
      <Header />

      <Container className="w-full py-16 flex-1">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-16 shadow-sm border border-[#ACDEF2]">
          <h1 className="font-heading font-extrabold text-4xl text-[#1D3759] mb-8">
            Termos de Uso
          </h1>

          <div className="space-y-8 text-[#3B465B] leading-relaxed">
            <p>
              Ao acessar e utilizar este site, você concorda com os termos e
              condições descritos abaixo. Estes termos regem a interação entre
              você (Usuário) e o <strong>Albry Studio</strong>, representado por
              Álex Bryan.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#37648C]">
                1. Descrição dos Serviços
              </h2>
              <p>
                Este site tem como objetivo apresentar o portfólio profissional
                de design e tecnologia e facilitar a solicitação de orçamentos
                para serviços de Identidade Visual e Desenvolvimento de Sites de
                Alta Performance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#37648C]">
                2. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo deste site, incluindo designs, textos, imagens e
                códigos-fonte, é de propriedade exclusiva do Albry Studio ou de
                seus respectivos clientes (nos casos de projetos de portfólio),
                sendo protegido pelas leis de direitos autorais brasileiras e
                internacionais.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#37648C]">
                3. Solicitação de Orçamentos
              </h2>
              <p>
                O preenchimento do formulário de orçamento não estabelece um
                vínculo contratual imediato. O contrato de prestação de serviços
                será formalizado apenas após a aceitação da proposta e
                assinatura de contrato específico entre as partes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#37648C]">
                4. Responsabilidades do Usuário
              </h2>
              <p>
                O Usuário compromete-se a fornecer informações verídicas e
                atualizadas no formulário de contato. O uso indevido do site ou
                tentativas de invasão e danos à plataforma serão tratados
                rigorosamente conforme a legislação vigente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#37648C]">
                5. Foro e Jurisdição
              </h2>
              <p>
                Estes termos são regidos pelas leis da República Federativa do
                Brasil. Fica eleito o foro da comarca de{" "}
                <strong>Pedro Leopoldo, MG</strong>, para dirimir quaisquer
                questões relativas a estes termos.
              </p>
            </section>

            <p className="text-sm text-slate-400 pt-8 mt-8 border-t border-[#ACDEF2]">
              Última atualização: Maio de 2026.
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
