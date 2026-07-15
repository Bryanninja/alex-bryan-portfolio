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
        {/* Link 1: WhatsApp (Principal) */}
        <a
          href="https://wa.me/5531971462832?text=Ol%C3%A1%21+Vim+pelo+site+da+Albry+Studio+e+gostaria+de+conversar+sobre+um+projeto."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 md:gap-6 px-5 py-4 md:px-8 md:py-5 rounded-2xl bg-brand-800 text-brand-50 font-semibold md:text-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-900/20 transition-all duration-300 group"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-brand-400">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.73 1.79 6.72L2 30l7.5-1.96A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.6l-.42-.25-4.45 1.16 1.18-4.33-.27-.44A11.47 11.47 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.29-8.56c-.34-.17-2.02-.99-2.33-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69a10.3 10.3 0 01-1.9-2.36c-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.85-1.05-2.53-.28-.67-.56-.58-.77-.59h-.65c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.22 3.3 1.39 3.53c.17.23 2.4 3.67 5.83 5.14.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.31-1.62.28-.79.28-1.47.2-1.62-.09-.14-.32-.23-.66-.4z"/>
            </svg>
          </div>
          <span className="flex-1">Solicitar Orçamento</span>
          <span className="opacity-50 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>

        {/* Link 2: Ver meu portfólio */}
        <Link
          href="/"
          className="flex items-center gap-4 md:gap-6 px-5 py-4 md:px-8 md:py-5 rounded-2xl bg-white/60 border border-brand-600/40 text-brand-900 font-semibold md:text-lg hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-brand-200/50 transition-all duration-300 group"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-900 flex items-center justify-center shrink-0 text-brand-50">
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
          <span className="flex-1">Acessar Site Oficial</span>
          <span className="opacity-50 text-brand-600 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>

        {/* Link 3: LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alexbryannt/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 md:gap-6 px-5 py-4 md:px-8 md:py-5 rounded-2xl bg-white/60 border border-brand-600/40 text-brand-900 font-semibold md:text-lg hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-brand-200/50 transition-all duration-300 group"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-900 flex items-center justify-center shrink-0 text-white">
            <span className="font-extrabold text-[1.15rem] tracking-tighter leading-none">
              in
            </span>
          </div>
          <span className="flex-1">LinkedIn — Engenheiro Front-end</span>
          <span className="opacity-50 text-brand-600 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>

        {/* Link 4: GitHub */}
        <a
          href="https://github.com/Bryanninja"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 md:gap-6 px-5 py-4 md:px-8 md:py-5 rounded-2xl bg-white/60 border border-brand-600/40 text-brand-900 font-semibold md:text-lg hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-brand-200/50 transition-all duration-300 group"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-900 flex items-center justify-center shrink-0 text-white">
            <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <span className="flex-1">GitHub — Repositórios</span>
          <span className="opacity-50 text-brand-600 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>

        {/* Link 5: Behance (Estilo Premium Unificado) */}
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
      </div>

      {/* Marca d'água */}
      <div aria-hidden="true" className="absolute -bottom-26 -left-4 md:-bottom-56 md:-left-10 select-none whitespace-nowrap text-[16rem] md:text-[24rem] lg:text-[35rem] 2xl:text-[32rem] font-bold text-brand-500 opacity-24 md:opacity-24 blur-md">
        Álex Bryan
      </div>
    </main>
  );
}
