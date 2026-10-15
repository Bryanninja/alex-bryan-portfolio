import Image from "next/image";
import Link from "next/link";
import alexBryan from "@/app/assets/img/Bryan/profile.webp";

export default function LinksPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-brand-50 px-6 py-16 font-sans md:justify-center md:py-8">
      {/* Avatar */}
      <div className="z-10 mb-4 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-[3px] border-brand-200 bg-white shadow-lg shadow-brand-600/20 md:border-[4px] lg:h-48 lg:w-48">
        <Image
          src={alexBryan}
          alt="Álex Bryan - Designer & Desenvolvedor"
          className="h-full w-full object-cover"
          priority
        />
      </div>

      {/* Nome e Títulos */}
      <div className="z-10 mb-8 flex flex-col items-center text-center md:mb-10">
        <h1 className="font-heading text-2xl font-extrabold text-brand-900 md:text-3xl">
          Álex Bryan
        </h1>
        <div className="mt-1 flex flex-col gap-0.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 md:text-sm">
            Design & Desenvolvimento Web
          </p>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-900 opacity-80 md:text-sm">
            Albry Studio
          </p>
        </div>
      </div>

      {/* Funil de Links de Alta Conversão (Apenas o essencial) */}
      <div className="z-10 flex w-full max-w-sm flex-col gap-4 md:max-w-md">
        {/* Link 1: WhatsApp (Foco Principal) */}
        <a
          href="https://wa.me/5531971462832?text=Ol%C3%A1%2C+Bryan%21+Vim+pelo+Instagram+e+gostaria+de+conversar+sobre+um+projeto."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl bg-brand-800 px-5 py-4 font-semibold text-brand-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-900/20 md:gap-6 md:px-6 md:py-5 md:text-lg"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-400 md:h-12 md:w-12">
            <svg
              className="h-5 w-5 md:h-6 md:w-6"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.73 1.79 6.72L2 30l7.5-1.96A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.6l-.42-.25-4.45 1.16 1.18-4.33-.27-.44A11.47 11.47 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.29-8.56c-.34-.17-2.02-.99-2.33-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69a10.3 10.3 0 01-1.9-2.36c-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.85-1.05-2.53-.28-.67-.56-.58-.77-.59h-.65c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.22 3.3 1.39 3.53c.17.23 2.4 3.67 5.83 5.14.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.31-1.62.28-.79.28-1.47.2-1.62-.09-.14-.32-.23-.66-.4z" />
            </svg>
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-bold text-white md:text-base">
              Falar no WhatsApp
            </span>
            <span className="text-xs font-normal text-brand-200/80">
              Solicitar orçamento ou proposta
            </span>
          </div>
          <span className="opacity-50 transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Link 2: Site Oficial / Cases */}
        <Link
          href="/"
          className="group flex items-center gap-4 rounded-2xl border border-brand-600/40 bg-white/60 px-5 py-3.5 font-semibold text-brand-900 transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-brand-200/50 md:gap-6 md:px-6 md:py-4 md:text-lg"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-brand-50 md:h-12 md:w-12">
            <svg
              className="h-5 w-5 md:h-6 md:w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-bold text-brand-900 md:text-base">
              Projetos & Cases
            </span>
            <span className="text-xs font-normal text-brand-600">
              Conheça nosso site e trabalhos
            </span>
          </div>
          <span className="text-brand-600 opacity-50 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>

        {/* Link 3: Behance */}
        <a
          href="https://www.behance.net/bryan_fnascime"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-brand-600/40 bg-white/60 px-5 py-3.5 font-semibold text-brand-900 transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-brand-200/50 md:gap-6 md:px-6 md:py-4 md:text-lg"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-brand-50 md:h-12 md:w-12">
            <span className="text-[1.25rem] font-extrabold leading-none tracking-tighter">
              Bē
            </span>
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-bold text-brand-900 md:text-base">
              Portfólio de Design
            </span>
            <span className="text-xs font-normal text-brand-600">
              UI/UX, Branding e Identidade Visual
            </span>
          </div>
          <span className="text-brand-600 opacity-50 transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      {/* Marca d'água */}
      <div
        aria-hidden="true"
        className="absolute -bottom-26 -left-4 select-none whitespace-nowrap text-[16rem] font-bold text-brand-500 opacity-24 blur-md md:-bottom-56 md:-left-10 md:text-[24rem] lg:text-[35rem] 2xl:text-[32rem]"
      >
        Álex Bryan
      </div>
    </main>
  );
}
