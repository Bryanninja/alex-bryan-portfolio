import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/sections/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Álex Bryan",
  description: "Entenda como o Albry Studio protege e gerencia seus dados.",
};

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-[#E6F4FD] font-sans flex flex-col justify-between">
      <Header />

      <Container className="w-full py-16 flex-1">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-16 shadow-sm border border-[#ACDEF2]">
          <h1 className="font-heading font-extrabold text-4xl text-[#1D3759] mb-8">
            Política de Privacidade
          </h1>

          <div className="space-y-8 text-[#3B465B] leading-relaxed">
            <p>
              A sua privacidade é uma prioridade para o{" "}
              <strong>Albry Studio</strong>. Esta política descreve como
              coletamos, utilizamos e protegemos as informações pessoais que
              você fornece ao solicitar um orçamento em nosso site.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#37648C]">
                1. Coleta de Informações
              </h2>
              <p>
                Coletamos informações pessoais apenas quando você preenche o
                formulário de orçamento. Os dados coletados incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome completo;</li>
                <li>Endereço de e-mail;</li>
                <li>Número de WhatsApp/Telefone;</li>
                <li>Nome da Empresa (opcional).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#37648C]">
                2. Finalidade do Tratamento de Dados
              </h2>
              <p>
                Os dados coletados são utilizados exclusivamente para as
                seguintes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Elaboração e envio de propostas comerciais personalizadas;
                </li>
                <li>
                  Contato via WhatsApp ou e-mail para alinhamento de detalhes do
                  projeto;
                </li>
                <li>
                  Manutenção de um canal de comunicação direto entre o estúdio e
                  o potencial cliente.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#37648C]">
                3. Base Legal e Consentimento
              </h2>
              <p>
                Em conformidade com a{" "}
                <strong>Lei Geral de Proteção de Dados (LGPD)</strong>, tratamos
                seus dados com base no seu consentimento expresso ao clicar no
                botão "Solicitar Orçamento".
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#37648C]">
                4. Compartilhamento e Armazenamento
              </h2>
              <p>
                O Albry Studio não vende, aluga ou compartilha seus dados
                pessoais com terceiros para fins de marketing. Os dados são
                armazenados de forma segura e acessados apenas pelo responsável
                pelo estúdio para as finalidades descritas.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#37648C]">
                5. Seus Direitos
              </h2>
              <p>Você tem o direito de solicitar a qualquer momento:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>O acesso aos seus dados;</li>
                <li>A correção de dados incompletos ou inexatos;</li>
                <li>A exclusão definitiva de seus dados de nossa base.</li>
              </ul>
              <p>
                Para exercer esses direitos, entre em contato através do e-mail:{" "}
                <strong>bryanncode@gmail.com</strong>.
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
