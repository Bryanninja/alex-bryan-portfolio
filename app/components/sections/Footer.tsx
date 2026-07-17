"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "framer-motion"; // Importando Framer Motion
import Container from "../Container";
import { containerStagger, childFadeUp } from "../../utils/animations"; // Importando suas variantes
import { ReactNode } from "react";

interface FooterProps {
  title?: ReactNode;
  description?: string;
  cta?: string;
  ctaLink?: string;
}

const Footer = ({
  title = (
    <>
      Pronto pra parar de <br /> ser invisível?
    </>
  ),
  description = "Você pode ser o melhor no que faz. Mas se a sua marca não comunica isso, você está perdendo clientes pra quem faz menos e vende mais. Isso muda agora.",
  cta = "Quero começar",
  ctaLink = "https://wa.me/5531971462832?text=Ol%C3%A1%21+Vim+pelo+site+da+Albry+Studio+e+gostaria+de+conversar+sobre+um+projeto.",
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-800 pt-24 pb-8 flex flex-col items-center overflow-hidden">
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
            className="font-heading text-4xl md:text-6xl  font-extrabold leading-tight text-white tracking-tight mb-6"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={childFadeUp}
            className="text-lg md:text-xl text-slate-300/80 leading-relaxed mb-10 max-w-2xl"
          >
            {description}
          </motion.p>

          <motion.div variants={childFadeUp}>
            <Link
              href={ctaLink}
              target="_blank"
              className="bg-brand-600 hover:bg-brand-400 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:-translate-y-1 block"
            >
              {cta}
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
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm font-semibold text-slate-400 text-center md:text-left">
            <p>© {currentYear} Álex Bryan. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link
                href="/politica-de-privacidade"
                className="hover:text-brand-400 transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="hover:text-brand-400 transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>

          {/* === REDES SOCIAIS === */}
          <div className="flex items-center justify-center gap-6 text-slate-400">
            {/* E-mail */}
            <a
              href="mailto:bryanncode@gmail.com"
              className="hover:text-brand-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5531971462832?text=Ol%C3%A1%20Bryan%2C%20vi%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition-colors"
              aria-label="WhatsApp"
            >
              <svg
                viewBox="0 0 32 32"
                fill="currentColor"
                width="22"
                height="22"
              >
                <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.73 1.79 6.72L2 30l7.5-1.96A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.6l-.42-.25-4.45 1.16 1.18-4.33-.27-.44A11.47 11.47 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.29-8.56c-.34-.17-2.02-.99-2.33-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69a10.3 10.3 0 01-1.9-2.36c-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.85-1.05-2.53-.28-.67-.56-.58-.77-.59h-.65c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.22 3.3 1.39 3.53c.17.23 2.4 3.67 5.83 5.14.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.31-1.62.28-.79.28-1.47.2-1.62-.09-.14-.32-.23-.66-.4z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/alexbryannt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition-colors"
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
              className="hover:text-brand-400 transition-colors"
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
              className="hover:text-brand-400 transition-colors flex items-center"
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
