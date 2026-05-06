"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "framer-motion"; // Importando Framer Motion
import Container from "../Container";
import { containerStagger, childFadeUp } from "../../utils/animations"; // Importando suas variantes

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#242b3a] pt-24 pb-8 flex flex-col items-center overflow-hidden">
      <Container>
        {/* === SEÇÃO DE CTA COM ANIMAÇÃO === */}
        <motion.div
          variants={containerStagger}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24 px-4"
        >
          <motion.h2
            variants={childFadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight mb-6"
          >
            O seu serviço já é premium. O seu visual transmite isso?
          </motion.h2>

          <motion.p
            variants={childFadeUp}
            className="text-lg text-slate-300/80 leading-relaxed mb-10 max-w-2xl"
          >
            O seu negócio já entrega um serviço de excelência, mas o seu
            posicionamento digital reflete isso? Vamos construir uma marca de
            elite que transmite a sua verdadeira autoridade e atrai os clientes
            certos.
          </motion.p>

          <motion.div variants={childFadeUp}>
            <Link
              href="/orcamento"
              className="bg-[#3a6d8c] hover:bg-[#5bb5d9] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:-translate-y-1 block"
            >
              Quero um projeto de elite
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* === LINHA DIVISÓRIA E COPYRIGHT === */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-full border-t border-slate-600/50 pt-8 px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-semibold text-slate-400 text-center md:text-left">
            © {currentYear} Álex Bryan. Todos os direitos reservados.
          </p>

          {/* === REDES SOCIAIS === */}
          <div className="flex items-center justify-center gap-6 text-slate-400">
            {/* E-mail */}
            <a
              href="mailto:bryanncode@gmail.com"
              className="hover:text-[#5bb5d9] transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/alexbryannt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5bb5d9] transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/alexbryannt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5bb5d9] transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Behance */}
            <a
              href="https://www.behance.net/bryan_fnascime"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5bb5d9] transition-colors flex items-center"
              aria-label="Behance"
            >
              <span className="font-extrabold text-[1.35rem] tracking-tighter leading-none">
                Bē
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
