"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Importando para animações de entrada/saída
import { Menu, X, ArrowUpRight } from "lucide-react";

// Importando nossas variantes
import { containerStagger, childFadeUp } from "../utils/animations";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
                className="flex h-10 w-10 items-center justify-center rounded-xl cursor-pointer  bg-[#5bb5d9] text-white hover:bg-[#5496bf] transition-colors shadow-md"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links do Menu com Stagger */}
            <motion.nav
              variants={containerStagger}
              initial="initial"
              animate="visible"
              className="flex flex-col space-y-6"
            >
              <motion.div variants={childFadeUp}>
                <Link
                  href="/#projetos"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white hover:text-[#acdef2] transition-colors"
                >
                  Ver Projetos
                </Link>
              </motion.div>

              <motion.div variants={childFadeUp}>
                <Link
                  href="/#sobre"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white hover:text-[#acdef2] transition-colors"
                >
                  Sobre
                </Link>
              </motion.div>

              {/* Botão de Orçamento */}
              <motion.div variants={childFadeUp}>
                <Link
                  href="/orcamento"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 flex items-center justify-between rounded-full border border-[#5bb5d9] px-6 py-3 text-brand-50 hover:bg-[#5bb5d9]/60 hover:text-white transition-all duration-300"
                >
                  <span className="font-medium">Orçamento</span>
                  <ArrowUpRight size={20} />
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
            className="flex h-14 w-14 items-center justify-center cursor-pointer rounded-xl bg-[#3b465b] text-[#5bb5d9] shadow-xl hover:bg-[#242b3a] transition-colors"
          >
            <Menu size={28} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
