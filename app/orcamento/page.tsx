"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Container from "../components/Container";
import Button from "../components/Button";

// Importando as suas variantes padronizadas
import {
  containerStagger,
  stepVariants,
  childFadeUp,
  slowFadeIn,
} from "../utils/animations";

export default function OrcamentoPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estados do Formulário (Exatamente como os seus)
  const [servico, setServico] = useState<
    | "Identidade Visual"
    | "Site de Alta Performance"
    | "O Combo (Marca + Site)"
    | ""
  >("");
  const [valor, setValor] = useState(700);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

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
    const formspreeEndpoint = "https://formspree.io/f/meenkayj";

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

  if (step === 4) {
    return (
      <main className="min-h-screen relative bg-gradient-to-br from-[#5496BF] to-[#37648C] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white max-w-4xl leading-tight z-10">
            Parabéns por escolher evoluir sua marca e realmente fazer as pessoas
            te enxergarem!
          </h1>
          <p className="mt-6 text-white text-lg z-10">
            Solicitação enviada. Te chamo no WhatsApp em breve.
          </p>
          <div className="mt-6">
            <Button href="/">Voltar à página Inicial!</Button>
          </div>
        </motion.div>

        <motion.h1
          variants={slowFadeIn}
          initial="initial"
          animate="visible"
          className="pointer-events-none absolute -bottom-20 -left-10 z-0 select-none whitespace-nowrap text-[15rem] font-bold text-brand-50 opacity-40 blur-md sm:-bottom-32 sm:-left-36 md:text-[35rem] 2xl:-bottom-60 2xl:text-[32rem]"
        >
          Álex Bryan
        </motion.h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#E6F4FD] font-sans flex flex-col justify-between overflow-hidden">
      <Header />

      <Container className="w-full py-16 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerStagger}
            initial="initial"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1
              variants={childFadeUp}
              className="font-heading font-extrabold text-5xl lg:text-6xl text-[#1D3759] leading-tight tracking-tight"
            >
              Vamos conhecer <br /> seus desafios.
            </motion.h1>
            <motion.p
              variants={childFadeUp}
              className="text-[#3B465B] text-lg max-w-md leading-relaxed"
            >
              Preencha os passos ao lado para eu entender o seu momento atual.
              Assim que receber, analiso o seu cenário e te chamo direto no
              WhatsApp pra gente alinhar os detalhes. Simples e sem enrolação.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#DEEAEE] border border-[#ACDEF2] rounded-xl p-6 md:p-12 min-h-[480px] flex flex-col shadow-sm relative"
          >
            <div className="inline-flex border border-[#37648C] text-[#1D3759] font-bold px-4 py-1.5 rounded-full mb-8 self-start text-sm">
              Passo {step} De 3
            </div>

            <AnimatePresence mode="wait">
              {/* PASSO 1: SERVIÇO */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex-1 flex flex-col"
                >
                  <h2 className="font-heading font-bold text-[#1D3759] text-3xl mb-8">
                    O que a sua marca precisa hoje?
                  </h2>
                  <div className="space-y-6 flex-1">
                    {[
                      {
                        id: "Identidade Visual",
                        desc: "Posicionamento Visual de Elite: Estratégia de marca, logotipo e identidade que transforma sua percepção no mercado.",
                      },
                      {
                        id: "Site de Alta Performance",
                        desc: "Landing Pages ultra rápidas e otimizadas para converter visitantes em clientes.",
                      },
                      {
                        id: "O Combo (Marca + Site)",
                        desc: "A solução completa: do posicionamento visual à sua estrutura de vendas online.",
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          setServico(
                            item.id as
                              | "Identidade Visual"
                              | "Site de Alta Performance"
                              | "O Combo (Marca + Site)",
                          )
                        }
                        className="w-full text-pretty cursor-pointer flex items-start gap-4 text-left group"
                      >
                        {/* CHECKBOX: Adicionado shrink-0 para não espremer */}
                        <div
                          className={`w-8 h-8 mt-1 rounded-md border-2 shrink-0 flex items-center justify-center transition-colors ${
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
                          <span className="text-sm text-[#3B465B] leading-snug block">
                            {item.desc}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={!servico}
                    onClick={() => {
                      if (servico === "Site de Alta Performance")
                        setValor(1200);
                      else if (servico === "O Combo (Marca + Site)")
                        setValor(1700);
                      else setValor(700);
                      setStep(2);
                    }}
                    className="mt-8 cursor-pointer px-8 py-3 self-end bg-[#1D3759] text-white font-bold rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#242B3A] transition"
                  >
                    Próximo →
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex-1 flex flex-col"
                >
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
                            ? 1200 // Novo Piso
                            : 1700 // Novo Piso do Combo
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
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  {...stepVariants}
                  className="flex-1 flex flex-col"
                >
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
                    {/* INPUT DE WHATSAPP GLOBAL */}
                    {/* INPUT DE WHATSAPP GLOBAL UNIFICADO */}
                    <div className="w-full flex items-center rounded-xl bg-[#E6F4FD] border border-[#ACDEF2] focus-within:border-[#37648C] transition-all group overflow-hidden">
                      <PhoneInput
                        defaultCountry="br"
                        value={whatsapp}
                        onChange={(phone) => setWhatsapp(phone)}
                        // Estilo do container da própria lib (removendo interferências)
                        className="w-full"
                        // O input real agora fica sem bordas e fundo, pois o pai (div) já tem
                        inputClassName="w-full !border-none !bg-transparent !p-4 !h-[58px] !text-[#1D3759] !placeholder-[#5496BF] !text-base focus:!ring-0 !outline-none"
                        // O seletor de país também fica "invisível" visualmente dentro do box
                        countrySelectorStyleProps={{
                          buttonClassName:
                            "!border-none !bg-transparent !h-[58px] !pl-4 !pr-2 hover:!bg-white/40 transition-colors",
                        }}
                      />
                    </div>
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
                      {isSubmitting ? "Enviando..." : "Solicitar Orçamento"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>

      <footer className="w-full bg-[#242B3A] text-center py-6">
        <p className="text-brand-50 font-semibold text-sm">
          © 2026 Álex Bryan. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
