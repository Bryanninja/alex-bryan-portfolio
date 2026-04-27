import Image from "next/image";

import alexbryanIMG from "./assets/img/Bryan/BryanImg.webp";
import Button from "./components/Button";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="w-full">
      <Header />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col items-center text-center">
        <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-brand-900 max-w-4xl leading-tight uppercase tracking-tight">
          Sua marca não cresce?
          <br />
          <span className="text-brand-500">O erro está no seu visual.</span>
        </h1>
        <p className="mt-6 text-lg text-brand-700 max-w-2xl">
          Identidades visuais de elite e sites que realmente vendem. Eu não faço
          o "básico", eu construo o próximo nível da sua empresa.
        </p>
        <div className="mt-10 flex gap-4">
          <Button href="/orcamento" variant="primary">
            Solicitar Orçamento
          </Button>
          <Button href="#projetos" variant="outline">
            Ver Projetos
          </Button>
        </div>

        {/* Mockup do Hero - Sua foto com gradiente */}
        <div className="mt-16 relative w-full max-w-4xl h-[400px] rounded-3xl overflow-hidden bg-gradient-to-t from-brand-500 to-brand-400">
          {/* <Image src="/sua-foto-hero.png" alt="Álex Bryan" fill className="object-cover object-bottom" /> */}
          <div className="absolute inset-0 flex items-center justify-center text-white/50 font-heading">
            <img src={alexbryanIMG} alt="Imagem Alex Bryan" />
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA GLOBAL */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between mb-12">
            <div className="md:w-1/2">
              <span className="text-brand-400 font-bold text-sm tracking-wider uppercase mb-2 block">
                Experiência Global
              </span>
              <h2 className="font-heading font-extrabold text-4xl text-brand-900">
                Projetos que performam em qualquer mercado.
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-brand-700 text-lg">
                Colaborando com clientes em Orlando (EUA 🇺🇸), Cidade do Cabo
                (África do Sul 🇿🇦), Portugal 🇵🇹 e Croácia 🇭🇷. Trago uma visão
                internacional para garantir que a sua marca se destaque.
              </p>
            </div>
          </div>
          {/* Grid de Bandeiras */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-48">
            <div className="bg-brand-200 rounded-2xl"></div>
            <div className="bg-brand-400 rounded-2xl"></div>
            <div className="bg-brand-500 rounded-2xl"></div>
            <div className="bg-brand-600 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* SOBRE / O PAPO RETO */}
      <section id="sobre" className="bg-brand-50 py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="font-heading font-extrabold text-5xl text-brand-500 uppercase tracking-tight">
              Foque no que importa.
            </h2>
            <h3 className="font-heading font-bold text-3xl text-brand-900">
              Eu cuido da sua marca e do seu site.
            </h3>
            <div className="space-y-4 text-brand-700 text-lg">
              <p>
                A verdade nua e crua é que um design bonito não serve para nada
                se o site for confuso ou não passar credibilidade.
              </p>
              <p>
                Enquanto a maioria entrega só um desenho e te deixa na mão na
                hora de colocar no ar, eu mato os dois problemas para você. Como
                estrategista visual e desenvolvedor Front-end, eu crio a alma do
                seu projeto (Branding) e construo o seu melhor vendedor (Site).
              </p>
              <p className="font-semibold">
                O meu objetivo é um só: fazer o seu negócio transmitir o tamanho
                que ele realmente tem. Bonito por fora, rápido e pronto para
                atrair as pessoas certas.
              </p>
            </div>
            <div className="pt-4">
              <Button href="/orcamento" variant="secondary">
                Fale Comigo
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full h-[500px] bg-brand-200 rounded-3xl relative">
            {/* <Image src="/sua-foto-apresentacao.png" alt="Álex Bryan" fill className="object-contain" /> */}
            <div className="absolute inset-0 flex items-center justify-center text-brand-600 font-heading">
              [Inserir Foto apontando]
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="projetos" className="bg-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-extrabold text-4xl text-brand-900 mb-4">
            Dá uma olhada no que já construímos.
          </h2>
          <p className="text-brand-700 text-lg mb-16">
            Marcas de elite na prática. Projetos que transformaram negócios
            comuns.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* HKN */}
            <div className="bg-brand-50 rounded-3xl overflow-hidden shadow-sm group">
              <div className="h-72 bg-brand-200 relative">
                {/* Mockup HKN */}
              </div>
              <div className="p-8 text-left">
                <h3 className="font-heading font-bold text-2xl text-brand-900 mb-2">
                  HKN Projetos
                </h3>
                <p className="text-brand-700 mb-6">
                  Plataforma robusta desenvolvida em React para elevar a
                  percepção de valor na engenharia civil.
                </p>
                <Button
                  href="/projetos/hkn"
                  variant="outline"
                  className="w-full"
                >
                  Ver Caso de Sucesso
                </Button>
              </div>
            </div>

            {/* Influence */}
            <div className="bg-brand-50 rounded-3xl overflow-hidden shadow-sm group">
              <div className="h-72 bg-brand-200 relative">
                {/* Mockup Influence */}
              </div>
              <div className="p-8 text-left">
                <h3 className="font-heading font-bold text-2xl text-brand-900 mb-2">
                  Rede Influence
                </h3>
                <p className="text-brand-700 mb-6">
                  Ecossistema visual completo desenhado para conectar jovens com
                  propósito.
                </p>
                <Button
                  href="/projetos/influence"
                  variant="outline"
                  className="w-full"
                >
                  Ver Caso de Sucesso
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL (Rodapé Escuro) */}
      <section className="bg-brand-800 py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading font-extrabold text-5xl text-white mb-6">
            Pronto para parar de ser{" "}
            <span className="text-brand-400">"só mais um"?</span>
          </h2>
          <p className="text-brand-200 text-lg mb-10 leading-relaxed">
            Sua empresa merece uma presença digital com a mesma qualidade do
            serviço que você entrega. Pare de perder clientes por causa de um
            visual amador e vamos construir o seu próximo nível hoje.
          </p>
          <Button href="/orcamento" variant="primary">
            Quero um orçamento de elite
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-800 border-t border-brand-700 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-brand-200 text-sm">
          <p>© 2026 Álex Bryan. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Behance
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
