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
          href="/orcamento"
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

        {/* Link 2: Chamar no WhatsApp */}
        <a
          href="https://wa.me/5531971462832?text=Ol%C3%A1%20%C3%81lex%2C%20vi%20seu%20conte%C3%BAdo%20e%20quero%20conversar%20sobre%20um%20projeto"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 md:gap-6 px-5 py-4 md:px-8 md:py-5 rounded-2xl bg-white/60 border border-brand-600/40 text-brand-900 font-semibold md:text-lg hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-brand-200/50 transition-all duration-300 group"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-700 flex items-center justify-center shrink-0 text-brand-50">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.73 1.79 6.72L2 30l7.5-1.96A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.6l-.42-.25-4.45 1.16 1.18-4.33-.27-.44A11.47 11.47 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.29-8.56c-.34-.17-2.02-.99-2.33-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69a10.3 10.3 0 01-1.9-2.36c-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.85-1.05-2.53-.28-.67-.56-.58-.77-.59h-.65c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.22 3.3 1.39 3.53c.17.23 2.4 3.67 5.83 5.14.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.31-1.62.28-.79.28-1.47.2-1.62-.09-.14-.32-.23-.66-.4z"/>
            </svg>
          </div>
          <span className="flex-1">Chamar no WhatsApp</span>
          <span className="opacity-50 text-brand-600 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>

        {/* Link 3: Ver meu portfólio */}
        <Link
          href="/"
          className="flex items-center gap-4 md:gap-6 px-5 py-4 md:px-8 md:py-5 rounded-2xl bg-white/60 border border-brand-600/40 text-brand-900 font-semibold md:text-lg hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-brand-200/50 transition-all duration-300 group"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-900 flex items-center justify-center shrink-0 text-brand-50">
            {/* Ícone de Grid */}
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
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </div>
          <span className="flex-1">Ver meu portfólio</span>
          <span className="opacity-50 text-brand-600 group-hover:translate-x-1 transition-transform">
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
      <div aria-hidden="true" className="absolute -bottom-26 -left-4 md:-bottom-56 md:-left-10 select-none whitespace-nowrap text-[16rem] md:text-[24rem] lg:text-[35rem] 2xl:text-[32rem] font-bold text-brand-500 opacity-24 md:opacity-24 blur-md">
        Álex Bryan
      </div>
    </main>
  );
}
