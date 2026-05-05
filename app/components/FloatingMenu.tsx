// src/components/FloatingMenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* O Menu Aberto */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-4 w-64 rounded-3xl bg-brand-700/90 backdrop-blur-sm p-6 shadow-2xl transition-all duration-300">
          {/* Botão Fechar no topo */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5bb5d9] text-white hover:bg-[#5496bf] transition-colors shadow-md"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links do Menu */}
          <nav className="flex flex-col space-y-6">
            <Link
              href="/#projetos"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white hover:text-[#acdef2] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/#sobre"
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white hover:text-[#acdef2] transition-colors"
            >
              Sobre
            </Link>

            {/* Botão de Orçamento de Elite */}
            <Link
              href="/orcamento"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-between rounded-full border border-[#5bb5d9] px-6 py-3 text-brand-50 hover:bg-[#5bb5d9] hover:text-white transition-all duration-300"
            >
              <span className="font-medium">Orçamento</span>
              <ArrowUpRight size={20} />
            </Link>
          </nav>
        </div>
      )}

      {/* Botão de Abrir (Hamburger) - Só aparece se o menu estiver fechado */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#3b465b] text-[#5bb5d9] shadow-xl hover:scale-105 hover:bg-[#242b3a] transition-all duration-300"
        >
          <Menu size={28} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}
