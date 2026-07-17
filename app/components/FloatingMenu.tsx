"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Importando para animações de entrada/saída
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

// Importando nossas variantes
import { containerStagger, childFadeUp } from "../utils/animations";

function FloatingMenuContent() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fromPath = searchParams.get("from") || "/";

  // Se estivermos em /dev, os links devem apontar para a própria página
  const isDevRoute = pathname === "/dev";
  const projetosLink = isDevRoute ? "/dev#projetos" : "/#projetos";
  const sobreLink = isDevRoute ? "/dev#sobre" : "/#sobre";

  return (
    <div className="fixed bottom-6  right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Animação do painel do menu
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-20 right-0 mb-4 w-64 rounded-3xl  bg-brand-700/90 backdrop-blur-md p-6 shadow-2xl"
          >
            {/* Botão Fechar no topo */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Fechar menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl cursor-pointer bg-brand-400 text-white hover:bg-brand-500 transition-colors shadow-md"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links do Menu com Stagger */}
            <motion.nav
              variants={containerStagger}
              initial="initial"
              animate="visible"
              className="flex flex-col space-y-4"
            >
              <motion.div variants={childFadeUp}>
                <Link
                  href={fromPath === "/dev" ? "/dev#projetos" : projetosLink}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white hover:text-brand-200 transition-colors"
                >
                  Ver Projetos
                </Link>
              </motion.div>
              <motion.div variants={childFadeUp}>
                <Link
                  href={fromPath === "/dev" ? "/dev#sobre" : sobreLink}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white hover:text-brand-200 transition-colors"
                >
                  Sobre
                </Link>
              </motion.div>

              <hr className="border-t-1 border-gray-300/20" />

              {/* Instagram */}
              <motion.div variants={childFadeUp}>
                <a
                  href="https://www.instagram.com/alexbryannt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2  text-lg font-medium text-white hover:text-brand-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </motion.div>

              {/* Linkedin */}
              <motion.div variants={childFadeUp}>
                <a
                  href="https://www.linkedin.com/in/alexbryannt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2  text-lg font-medium text-white hover:text-brand-200 transition-colors"
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
                  Linkedin
                </a>
              </motion.div>

              {/* Behance */}
              <motion.div variants={childFadeUp}>
                <a
                  href="https://www.behance.net/bryan_fnascime"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2  text-lg font-medium text-white hover:text-brand-200 transition-colors"
                >
                  <span className="font-extrabold text-[1.35rem] tracking-tighter leading-none">
                    Bē
                  </span>
                  Behance
                </a>
              </motion.div>

              {/* E-mail */}
              <motion.div variants={childFadeUp}>
                <a
                  href="mailto:bryanncode@gmail.com"
                  aria-label="Email"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2  text-lg font-medium text-white hover:text-brand-200 transition-colors"
                >
                  <Mail size={22} />
                  E-mail
                </a>
              </motion.div>

              {/* Botão de Orçamento */}
              <motion.div variants={childFadeUp}>
                <Link
                  href="https://wa.me/5531971462832?text=Ol%C3%A1%21+Vim+pelo+site+da+Albry+Studio+e+gostaria+de+conversar+sobre+um+projeto."
                  onClick={() => setIsOpen(false)}
                  target="_blank"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full border border-brand-400 px-6 py-3 text-brand-50 hover:bg-brand-400/60 hover:text-white transition-all duration-300"
                >
                  <span className="font-medium">WhatsApp</span>
                  <svg
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.73 1.79 6.72L2 30l7.5-1.96A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.6l-.42-.25-4.45 1.16 1.18-4.33-.27-.44A11.47 11.47 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.29-8.56c-.34-.17-2.02-.99-2.33-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69a10.3 10.3 0 01-1.9-2.36c-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.85-1.05-2.53-.28-.67-.56-.58-.77-.59h-.65c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.22 3.3 1.39 3.53c.17.23 2.4 3.67 5.83 5.14.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.31-1.62.28-.79.28-1.47.2-1.62-.09-.14-.32-.23-.66-.4z" />
                  </svg>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão de Abrir (Hamburger) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menu de navegação"
            className="flex h-14 w-14 items-center justify-center cursor-pointer rounded-xl bg-brand-700 text-brand-400 shadow-xl hover:bg-brand-800 transition-colors"
          >
            <Menu size={28} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FloatingMenu() {
  return (
    <Suspense fallback={null}>
      <FloatingMenuContent />
    </Suspense>
  );
}
