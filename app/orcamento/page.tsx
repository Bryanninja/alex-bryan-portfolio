"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Container from "../components/Container";
import Button from "../components/Button";

// Importações do React Hook Form e Zod
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  containerStagger,
  stepVariants,
  childFadeUp,
  slowFadeIn,
} from "../utils/animations";

const configuracaoOrcamentos = {
  "Identidade Visual": [
    { label: "R$ 700 — 1,5 mil" },
    { label: "R$ 1,5 mil — 3,5 mil" },
    { label: "R$ 3,5 mil — 7 mil" },
    { label: "R$ 7 mil +" },
  ],

  "Site de Alta Performance": [
    { label: "R$ 1,2 mil — 2,5 mil" },
    { label: "R$ 2,5 mil — 4,5 mil" },
    { label: "R$ 4,5 mil — 7 mil" },
    { label: "R$ 7 mil +" },
  ],

  "O Combo (Marca + Site)": [
    { label: "R$ 1,7 mil — 3 mil" },
    { label: "R$ 3 mil — 5,5 mil" },
    { label: "R$ 5,5 mil — 7 mil" },
    { label: "R$ 7 mil +" },
  ],
};

const formSchema = z.object({
  servico: z.enum(
    ["Identidade Visual", "Site de Alta Performance", "O Combo (Marca + Site)"],
    {
      message: "Selecione um serviço para continuar.",
    },
  ),
  faixaIndex: z.number().min(0).max(3),
  nome: z.string().trim().min(3, "Por favor, insira seu nome completo."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Por favor, insira um e-mail válido."),
  whatsapp: z.string().refine((val) => val.replace(/\D/g, "").length >= 10, {
    message: "Por favor, insira um WhatsApp válido com DDD.",
  }),
  empresa: z.string().trim().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function OrcamentoPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Configuração do React Hook Form
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      faixaIndex: 0,
      whatsapp: "+55",
      empresa: "",
    },
  });

  // Observamos os valores para atualizar a UI em tempo real
  const servicoAtual = watch("servico");
  const faixaIndexAtual = watch("faixaIndex");

  const faixasAtuais =
    servicoAtual && configuracaoOrcamentos[servicoAtual]
      ? configuracaoOrcamentos[servicoAtual]
      : configuracaoOrcamentos["Identidade Visual"];

  // 3. Função de envio atualizada
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      await fetch("https://formspree.io/f/meenkayj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Nome: data.nome,
          Email: data.email,
          Empresa: data.empresa || "Não informada",
          WhatsApp: data.whatsapp,
          Servico: data.servico,
          Orcamento:
            configuracaoOrcamentos[data.servico][data.faixaIndex].label,
        }),
      });

      setStep(4);
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função para validar o passo 3 antes de tentar submeter (opcional, mas bom pra UX)
  const handleNextStep3 = async () => {
    const isValid = await trigger(["nome", "email", "whatsapp"]);
    if (isValid) {
      handleSubmit(onSubmit)();
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
          {/* LEFT */}
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
              WhatsApp pra gente alinhar os detalhes.
            </motion.p>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#DEEAEE] border border-[#ACDEF2] rounded-xl p-6 md:p-12 min-h-[500px] flex flex-col shadow-sm relative"
          >
            <div className="inline-flex border border-[#37648C] text-[#1D3759] font-bold px-4 py-1.5 rounded-full mb-8 self-start text-sm">
              Passo {step} De 3
            </div>

            <AnimatePresence mode="wait">
              {/* STEP 1 */}
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
                          setValue("servico", item.id as FormData["servico"])
                        }
                        className="w-full text-pretty cursor-pointer flex items-start gap-4 text-left group"
                      >
                        <div
                          className={`w-8 h-8 mt-1 rounded-md border-2 shrink-0 flex items-center justify-center transition-colors ${
                            servicoAtual === item.id
                              ? "border-[#37648C] bg-[#37648C]"
                              : "border-[#5496BF] bg-transparent"
                          }`}
                        >
                          {servicoAtual === item.id && (
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
                    disabled={!servicoAtual}
                    onClick={() => {
                      setValue("faixaIndex", 0);
                      setStep(2);
                    }}
                    className="mt-8 cursor-pointer px-8 py-3 cursor-pointer self-end bg-[#1D3759] text-white font-bold rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#242B3A] transition"
                  >
                    Próximo →
                  </button>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex-1 flex flex-col"
                >
                  <div>
                    <h2 className="font-heading font-bold text-[#1D3759] text-3xl mb-2">
                      Expectativa de investimento
                    </h2>
                    <p className="text-[#3B465B] text-sm leading-relaxed">
                      Escolha a faixa que melhor representa o momento atual do
                      seu projeto.
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col justify-center py-10">
                    {/* VALUE */}
                    <div className="mb-12">
                      <span className="text-[1.9rem] md:text-5xl font-extrabold tracking-tighter text-[#1D3759] block leading-tight">
                        {faixasAtuais[faixaIndexAtual].label}
                      </span>

                      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#ACDEF2] bg-[#E6F4FD] px-4 py-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#37648C]" />
                        <span className="text-[10px] md:text-xs font-semibold tracking-wide text-[#37648C] uppercase">
                          {servicoAtual}
                        </span>
                      </div>
                    </div>

                    {/* SLIDER */}
                    <div className="relative px-2">
                      <div className="absolute left-2 right-2 top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-[#ACDEF2]" />

                      <motion.div
                        className="absolute left-2 top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-[#37648C]"
                        initial={false}
                        animate={{
                          width: `calc(${
                            (faixaIndexAtual / (faixasAtuais.length - 1)) * 100
                          }% - 4px)`,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 35,
                        }}
                      />

                      {/* POINTS */}
                      <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 flex justify-between z-10 pointer-events-none">
                        {["Inicial", "Médio", "Avançado", "Elite"].map(
                          (label, i) => {
                            const isSelected = i === faixaIndexAtual;
                            const isPassed = i < faixaIndexAtual;

                            return (
                              <div
                                key={label}
                                className="relative flex flex-col items-center"
                              >
                                <div
                                  className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                                    isSelected
                                      ? "bg-[#1D3759] border-white scale-110 shadow-sm"
                                      : isPassed
                                        ? "bg-[#37648C] border-[#37648C]"
                                        : "bg-[#E6F4FD] border-[#5496BF]"
                                  }`}
                                />
                                <span
                                  className={`absolute top-8 text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                                    isSelected
                                      ? "text-[#1D3759]"
                                      : "text-[#5496BF]"
                                  } ${
                                    i === 0
                                      ? "left-0"
                                      : i === 3
                                        ? "right-0"
                                        : "left-1/2 -translate-x-1/2"
                                  }`}
                                >
                                  {label}
                                </span>
                              </div>
                            );
                          },
                        )}
                      </div>

                      {/* INPUT */}
                      <input
                        type="range"
                        min={0}
                        max={faixasAtuais.length - 1}
                        step={1}
                        value={faixaIndexAtual}
                        onChange={(e) =>
                          setValue("faixaIndex", Number(e.target.value))
                        }
                        className="
    relative z-20 w-full h-10 appearance-none bg-transparent cursor-pointer
    outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-10
    [&::-webkit-slider-thumb]:h-10
    [&::-webkit-slider-thumb]:bg-transparent
  "
                      />
                    </div>
                  </div>

                  <div className="mt-10 flex justify-between items-center">
                    <button
                      onClick={() => setStep(1)}
                      className="text-[#37648C] cursor-pointer font-bold hover:text-[#1D3759] transition"
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

              {/* STEP 3 */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex-1 flex flex-col"
                >
                  <h2 className="font-heading font-bold text-[#1D3759] text-3xl mb-8">
                    Como eu entro em contato com você?
                  </h2>

                  <form
                    className="space-y-4 flex-1"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    {/* NOME */}
                    <div>
                      <input
                        type="text"
                        placeholder="Seu Nome completo"
                        {...register("nome")}
                        className={`w-full p-4 rounded-xl bg-[#E6F4FD] border outline-none text-[#1D3759] placeholder-[#5496BF] transition ${
                          errors.nome
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#ACDEF2] focus:border-[#37648C]"
                        }`}
                      />
                      {errors.nome && (
                        <span className="text-red-500 text-xs mt-1 ml-2">
                          {errors.nome.message}
                        </span>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <input
                        type="email"
                        placeholder="Seu melhor E-mail"
                        {...register("email")}
                        className={`w-full p-4 rounded-xl bg-[#E6F4FD] border outline-none text-[#1D3759] placeholder-[#5496BF] transition ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#ACDEF2] focus:border-[#37648C]"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs mt-1 ml-2">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    {/* TELEFONE - Usando Controller */}
                    <div>
                      <div
                        className={`w-full flex items-center rounded-xl bg-[#E6F4FD] border transition-all group ${
                          errors.whatsapp
                            ? "border-red-500 focus-within:border-red-500"
                            : "border-[#ACDEF2] focus-within:border-[#37648C]"
                        }`}
                      >
                        <Controller
                          name="whatsapp"
                          control={control}
                          render={({ field: { onChange, value } }) => (
                            <PhoneInput
                              defaultCountry="br"
                              value={value}
                              onChange={onChange}
                              className="w-full relative"
                              inputClassName="w-full !border-none !bg-transparent !p-4 !h-[58px] !text-[#1D3759] !placeholder-[#5496BF] !text-base focus:!ring-0 !outline-none !rounded-r-xl"
                              countrySelectorStyleProps={{
                                buttonClassName:
                                  "!border-none !bg-transparent cursor-pointer !h-[58px] !pl-4 !pr-2 hover:!bg-white/40 transition-colors !rounded-l-xl",
                                dropdownStyleProps: {
                                  style: { zIndex: 50 }, // Garante que o menu fique sempre por cima dos outros inputs
                                },
                              }}
                            />
                          )}
                        />
                      </div>
                      {errors.whatsapp && (
                        <span className="text-red-500 text-xs mt-1 ml-2">
                          {errors.whatsapp.message}
                        </span>
                      )}
                    </div>

                    {/* EMPRESA */}
                    <div>
                      <input
                        type="text"
                        placeholder="Nome da Empresa (Opcional)"
                        {...register("empresa")}
                        className="w-full p-4 rounded-xl bg-[#E6F4FD] border border-[#ACDEF2] outline-none focus:border-[#37648C] text-[#1D3759] placeholder-[#5496BF] transition"
                      />
                    </div>
                  </form>

                  <div className="mt-8 flex justify-between items-center">
                    <button
                      onClick={() => setStep(2)}
                      className="text-[#37648C] cursor-pointer font-bold hover:text-[#1D3759]"
                    >
                      ← Voltar
                    </button>

                    <button
                      onClick={handleNextStep3}
                      disabled={isSubmitting}
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
