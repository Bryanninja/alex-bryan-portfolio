"use client";

import { useState } from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Button from "../components/Button";

export default function OrcamentoPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estados do Formulário
  const [servico, setServico] = useState<
    | "Identidade Visual"
    | "Site de Alta Performance"
    | "O Combo (Marca + Site)"
    | ""
  >("");
  const [valor, setValor] = useState(700);

  // Dados do Lead
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // Máscara Inteligente para WhatsApp
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // Se o cliente digitar '+' (DDI Internacional), deixa o campo livre
    if (input.startsWith("+")) {
      setWhatsapp(input);
      return;
    }

    // Se for número normal (Brasil), aplica a máscara (XX) XXXXX-XXXX
    let numbers = input.replace(/\D/g, ""); // Tira tudo que não é número

    // Trava em 11 dígitos para o Brasil
    if (numbers.length > 11) numbers = numbers.slice(0, 11);

    let formatted = numbers;
    if (numbers.length > 2) {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }
    if (numbers.length > 7) {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    }

    setWhatsapp(formatted);
  };

  // Função Silenciosa (Formspree) com Validações
  const handleFinalizar = async () => {
    if (nome.trim().length < 3) {
      alert("Por favor, insira seu nome completo.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }
    if (whatsapp.replace(/\D/g, "").length < 10) {
      alert("Por favor, insira um WhatsApp válido com DDD.");
      return;
    }

    setIsSubmitting(true);
    const formspreeEndpoint = "https://formspree.io/f/meenkayj"; // formsAPI ENVIAR

    try {
      await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Nome: nome,
          Email: email,
          Empresa: empresa || "Não informada",
          WhatsApp: whatsapp,
          Servico: servico,
          Orcamento: valor === 15000 ? "Mais de R$ 15.000" : `R$ ${valor}`,
        }),
      });
      setStep(4);
    } catch (error) {
      console.error("Erro no formulário:", error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // TELA DE SUCESSO (Fundo Azulão)
  if (step === 4) {
    return (
      <main className="min-h-screen relative bg-gradient-to-br from-[#5496BF] to-[#37648C] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white max-w-4xl leading-tight z-10">
            Parabéns por escolher evoluir sua marca e realmente fazer as pessoas
            te enxergarem!
          </h1>
          <p className="mt-6 text-white text-lg z-10">
            Solicitação enviada. Te chamo no WhatsApp em breve.
          </p>
          <Button href="/" className="mt-6">
            Voltar à página Inicial!
          </Button>
        </div>
        {/* Textão de Fundo */}
        <h1 className="pointer-events-none absolute -bottom-20 -left-10 z-0 select-none whitespace-nowrap text-[15rem] font-bold text-brand-50 opacity-40 blur-md sm:-bottom-32 sm:-left-36 md:text-[35rem] 2xl:-bottom-60 2xl:text-[32rem]">
          Álex Bryan
        </h1>
      </main>
    );
  }

  // TELA DO FORMULÁRIO (Igual ao seu Design)
  return (
    <main className="min-h-screen bg-[#E6F4FD] font-sans flex flex-col justify-between">
      <Header />

      {/* CONTEÚDO PRINCIPAL (Split Screen) */}
      <Container className="w-full py-16 flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LADO ESQUERDO: COPY */}
          <div className="space-y-6">
            <h1 className="font-heading font-extrabold text-5xl lg:text-6xl text-[#1D3759] leading-tight tracking-tight">
              Vamos conhecer
              <br />
              seus desafios.
            </h1>
            <p className="text-[#3B465B] text-lg max-w-md leading-relaxed">
              Preencha os passos ao lado para eu entender o seu momento atual.
              Assim que receber, analiso o seu cenário e te chamo direto no
              WhatsApp pra gente alinhar os detalhes. Simples e sem enrolação.
            </p>
          </div>

          {/* LADO DIREITO: O CARD CINZA/AZUL CLARO */}
          <div className="bg-[#DEEAEE] border border-[#ACDEF2] rounded-xl p-10 md:p-12 min-h-[480px] flex flex-col shadow-sm">
            {/* Tag do Passo (Outline) */}
            <div className="inline-flex border border-[#37648C] text-[#1D3759] font-bold px-4 py-1.5 rounded-full mb-8 self-start text-sm">
              Passo {step} De 3
            </div>

            {/* PASSO 1: SERVIÇO */}
            {step === 1 && (
              <div className="flex-1 flex flex-col">
                <h2 className="font-heading font-bold text-[#1D3759] text-3xl mb-8">
                  O que a sua marca precisa hoje?
                </h2>

                <div className="space-y-6 flex-1">
                  {[
                    {
                      id: "Identidade Visual",
                      desc: "Quero uma marca de elite que passe confiança.",
                    },
                    {
                      id: "Site de Alta Performance",
                      desc: "Já tenho a marca, preciso de um site que venda.",
                    },
                    {
                      id: "O Combo (Marca + Site)",
                      desc: "Quero a solução completa e profissional.",
                    },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setServico(item.id as any)}
                      className="w-full cursor-pointer flex items-start gap-5 text-left group"
                    >
                      {/* Checkbox Vazado */}
                      <div
                        className={`w-8 h-8 mt-1 rounded-md border-2 flex items-center justify-center transition-colors ${
                          servico === item.id
                            ? "border-[#37648C] bg-[#37648C]"
                            : "border-[#5496BF] bg-transparent"
                        }`}
                      >
                        {servico === item.id && (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <span className="block font-bold text-[#1D3759] text-xl mb-1">
                          {item.id}
                        </span>
                        <span className="text-sm text-[#3B465B]">
                          {item.desc}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  disabled={!servico}
                  onClick={() => {
                    if (servico === "Site de Alta Performance") setValor(2500);
                    else if (servico === "O Combo (Marca + Site)")
                      setValor(3000);
                    else setValor(700);
                    setStep(2);
                  }}
                  className="mt-8 cursor-pointer px-8 py-3 self-end bg-[#1D3759] text-white font-bold rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#242B3A] transition"
                >
                  Próximo →
                </button>
              </div>
            )}

            {/* PASSO 2: INVESTIMENTO (Barrinha) */}
            {step === 2 && (
              <div className="flex-1 flex flex-col">
                <h2 className="font-heading font-bold text-[#1D3759] text-3xl mb-8">
                  Expectativa de investimento
                </h2>

                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-4xl font-extrabold text-[#1D3759] tracking-tight mb-6">
                    R${" "}
                    {valor === 15000
                      ? "15.000+"
                      : valor.toLocaleString("pt-BR")}
                  </span>
                  <input
                    type="range"
                    min={
                      servico === "Identidade Visual"
                        ? 700
                        : servico === "Site de Alta Performance"
                          ? 2500
                          : 3000
                    }
                    max={15000}
                    step={100}
                    value={valor}
                    onChange={(e) => setValor(Number(e.target.value))}
                    className="w-full h-3 bg-[#ACDEF2] rounded-lg appearance-none cursor-pointer accent-[#37648C]"
                  />
                  <div className="flex justify-between text-sm text-[#37648C] font-bold mt-4">
                    <span>Arraste para ajustar</span>
                  </div>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <button
                    onClick={() => setStep(1)}
                    className="text-[#37648C] font-bold cursor-pointer hover:text-[#1D3759]"
                  >
                    ← Voltar
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-8 py-3 bg-[#1D3759] cursor-pointer text-white font-bold rounded-full hover:bg-[#242B3A] transition"
                  >
                    Próximo →
                  </button>
                </div>
              </div>
            )}

            {/* PASSO 3: DADOS DE CONTATO */}
            {step === 3 && (
              <div className="flex-1 flex flex-col">
                <h2 className="font-heading font-bold text-[#1D3759] text-3xl mb-8">
                  Como eu entro em contato com você?
                </h2>

                <div className="space-y-4 flex-1">
                  <input
                    type="text"
                    placeholder="Seu Nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full p-4 rounded-xl bg-[#E6F4FD] border border-[#ACDEF2] outline-none focus:border-[#37648C] text-[#1D3759] placeholder-[#5496BF] transition"
                  />
                  <input
                    type="email"
                    placeholder="Seu melhor E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 rounded-xl bg-[#E6F4FD] border border-[#ACDEF2] outline-none focus:border-[#37648C] text-[#1D3759] placeholder-[#5496BF] transition"
                  />
                  <input
                    type="tel"
                    placeholder="Seu WhatsApp (ex: 31 99999-9999 ou +1...)"
                    value={whatsapp}
                    onChange={handlePhoneChange}
                    maxLength={19} // Espaço suficiente para números internacionais longos
                    className="w-full p-4 rounded-xl bg-[#E6F4FD] border border-[#ACDEF2] outline-none focus:border-[#37648C] text-[#1D3759] placeholder-[#5496BF] transition"
                  />
                  <input
                    type="text"
                    placeholder="Nome da Empresa (Opcional)"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className="w-full p-4 rounded-xl bg-[#E6F4FD] border border-[#ACDEF2] outline-none focus:border-[#37648C] text-[#1D3759] placeholder-[#5496BF] transition"
                  />
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <button
                    onClick={() => setStep(2)}
                    className="text-[#37648C] cursor-pointer font-bold hover:text-[#1D3759]"
                  >
                    ← Voltar
                  </button>
                  <button
                    onClick={handleFinalizar}
                    disabled={isSubmitting || !nome || !whatsapp || !email}
                    className="px-8 py-3 bg-[#37648C] cursor-pointer text-white font-bold rounded-full hover:bg-[#1D3759] transition disabled:opacity-50"
                  >
                    {isSubmitting ? "Enviando..." : "Finalizar Pedido"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* FOOTER */}
      <footer className="w-full bg-[#242B3A] text-center py-6">
        <p className="text-brand-50 font-semibold text-sm">
          © 2026 Álex Bryan. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
