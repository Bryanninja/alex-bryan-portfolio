import Image from "next/image";

// Importe sua foto aqui. Certifique-se de que o caminho está correto.
import alexBryan from "@/app/assets/img/Bryan/profile.webp";
import Link from "next/link";

// app/links/page.tsx
export default function LinksPage() {
  return (
    <main className="min-h-screen bg-brand-50 flex flex-col items-center justify-start md:justify-center px-6 py-16 md:py-8 relative overflow-hidden font-sans">
      {/* Avatar (Mantido os tamanhos maiores que você definiu) */}
      <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full border-[3px] md:border-[4px] border-brand-200 flex items-center justify-center mb-4 z-10 shadow-lg shadow-brand-600/20 overflow-hidden bg-white">
        <Image
          src={alexBryan}
          alt="Bryan - Designer & Desenvolvedor - Albry Studio"
          className="object-cover w-full h-full rounded-full"
          priority
        />
      </div>

      {/* Nome e Títulos */}
      <div className="text-center z-10 mb-10 md:mb-12 flex flex-col items-center">
        <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-brand-900">
          Álex Bryan
        </h1>
        <div className="flex flex-col gap-0.5 mt-1">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-brand-600 uppercase">
            Designer & Desenvolvedor
          </p>
          <p className="text-xs md:text-sm font-bold tracking-wider text-brand-900 uppercase opacity-80">
            Albry Studio
          </p>
        </div>
      </div>

      {/* Links (Mais largos no PC) */}
      <div className="flex flex-col gap-4 md:gap-5 w-full max-w-sm md:max-w-xl z-10">
        {/* Link 1: Orçamento (Destaque Principal do Site) */}
        <Link
          href="/"
          className="flex items-center gap-4 md:gap-6 px-5 py-4 md:px-8 md:py-5 rounded-2xl bg-brand-800 text-brand-50 font-semibold md:text-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-900/20 transition-all duration-300 group"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-brand-400">
            {/* Ícone de Briefcase/Serviços */}
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <span className="flex-1">Solicitar Orçamento</span>
          <span className="opacity-50 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>

        {/* Link 2: Behance (Estilo Premium Unificado) */}
        <a
          href="https://www.behance.net/bryan_fnascime"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 md:gap-6 px-5 py-4 md:px-8 md:py-5 rounded-2xl bg-white/60 border border-brand-600/40 text-brand-900 font-semibold md:text-lg hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-brand-200/50 transition-all duration-300 group"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-900 flex items-center justify-center shrink-0 text-brand-50">
            {/* Ícone Behance Oficial (Apenas o símbolo) */}
            <span className="font-extrabold text-[1.35rem] tracking-tighter leading-none">
              Bē
            </span>
          </div>
          <span className="flex-1">Portfólio — Behance</span>
          <span className="opacity-50 text-brand-600 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>

        {/* Link 3: TikTok (Estilo Premium Unificado) */}
        <a
          href="https://www.tiktok.com/@alexbryannt_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 md:gap-6 px-5 py-4 md:px-8 md:py-5 rounded-2xl bg-white/60 border border-brand-600/40 text-brand-900 font-semibold md:text-lg hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-brand-200/50 transition-all duration-300 group"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-200 flex items-center justify-center shrink-0 text-brand-900">
            {/* Ícone TikTok Clean */}
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </div>
          <span className="flex-1">TikTok</span>
          <span className="opacity-50 text-brand-500 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>

      {/* Marca d'água */}
      <h1 className="absolute -bottom-26 -left-4 md:-bottom-56 md:-left-10 select-none whitespace-nowrap text-[16rem] md:text-[24rem] lg:text-[35rem] 2xl:text-[32rem] font-bold text-brand-500 opacity-36 md:opacity-24 blur-md">
        Álex Bryan
      </h1>
    </main>
  );
}
