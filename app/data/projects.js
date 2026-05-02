// src/data/projects.js

import projMSFinancial from "../assets/img/projects/ms-financial.webp";
import projPaceon from "../assets/img/projects/Paceon.webp";
import projIgrejaJesusEoCaminho from "../assets/img/projects/igreja-jesus.webp";
import projSenaFilms from "../assets/img/projects/sena-films.webp";
import projProteck from "../assets/img/projects/proteck.webp";
import projInfluence from "../assets/img/projects/rede-influence.webp";
import projILS from "../assets/img/projects/ils.webp";

import avatarMichel from "../assets/img/projects/michel.webp";
import avatarAdryan from "../assets/img/projects/adryan.webp";
import avatarFranciely from "../assets/img/projects/franciely.webp";
import avatarKarlo from "../assets/img/projects/karlo.webp";
import avatarJorge from "../assets/img/projects/jorge.webp";
import avatarRaul from "../assets/img/projects/raul.webp";
import avatarLucas from "../assets/img/projects/lucas.webp";

export const projectsData = [
  {
    id: 1,
    clientName: "Michel Stawicki",
    projectName: "MS Financial",
    description:
      "Criação de Identidade Visual e Site Institucional para mentoria financeira, com foco estratégico em gerar alta autoridade no mercado.",
    projectImg: projMSFinancial,
    clientImg: avatarMichel,
    fullDescription: [
      "A MS Financial atua em cenários de alta complexidade, exigindo uma estrutura financeira sólida para sustentar o crescimento com disciplina e consistência[cite: 1, 2].",
      "O projeto envolveu a criação de um design limpo e estruturado, utilizando gráficos e dados claros para transmitir previsibilidade e organização financeira[cite: 1, 2].",
      "A identidade visual reflete o foco da empresa em análises estruturadas e intervenções metodológicas para evolução da área financeira[cite: 1, 2].",
    ],
    gallery: [projMSFinancial, projMSFinancial, projMSFinancial], // placeholders, we can change later
  },
  {
    id: 2,
    clientName: "Adryan Medeiros",
    projectName: "Paceon",
    description:
      "Desenvolvimento de Identidade Visual para uma marca focada em corredores obstinados, que buscam superar constantemente a sua versão de ontem.",
    projectImg: projPaceon,
    clientImg: avatarAdryan,
    fullDescription: [
      "Paceon é mais que uma marca; ela acompanha o corredor desde o início até a alta performance[cite: 3].",
      "A identidade visual, com o logotipo 'P' modificado e a tipografia Abhaya Libre ExtraBold, transmite velocidade, dinamismo, progressão constante e autoridade[cite: 3].",
      "A paleta de cores (preto, branco e cinza) e as aplicações em produtos (roupas, bandanas, caixas térmicas) reforçam a versatilidade, o minimalismo e a consistência da marca[cite: 3].",
    ],
    gallery: [projPaceon, projPaceon, projPaceon],
  },
  {
    id: 3,
    clientName: "Franciely Hisdaleck",
    projectName: "Igreja Jesus é o caminho",
    description:
      "Projeto completo: desde a Identidade Visual até o desenvolvimento de um WebApp de leitura personalizado, com destaque para a alta acessibilidade.",
    projectImg: projIgrejaJesusEoCaminho,
    clientImg: avatarFranciely,
    fullDescription: [
      "A identidade visual foca na mensagem de Jesus como o Caminho e o Bom Pastor, utilizando o símbolo de uma ovelha e a porta[cite: 4].",
      "As cores (#69bb8a, #3f3f3f, #2b2b2b) transmitem paz, direção, pureza e eternidade, conectando-se ao público jovem com equilíbrio[cite: 4].",
      "O projeto inclui o design de materiais como garrafas, crachás e uma presença digital consistente, além de um WebApp com um plano de leitura bíblica[cite: 4, 8].",
    ],
    gallery: [
      projIgrejaJesusEoCaminho,
      projIgrejaJesusEoCaminho,
      projIgrejaJesusEoCaminho,
    ],
  },
  {
    id: 4,
    clientName: "Karlo Kirin",
    projectName: "Proteck HVAC",
    description:
      "Desenvolvimento de Identidade Visual e personalização de van para uma empresa na Croácia, visando uma forte presença e consolidação de mercado.",
    projectImg: projProteck,
    clientImg: avatarKarlo,
    fullDescription: [
      "A marca Protek HVAC foi desenhada para ser direta, forte e facilmente reconhecível, conveyindo confiança e expertise técnica na área de climatização[cite: 5].",
      "O conceito utiliza a chama (aquecimento), o escudo (segurança e controle) e o floco de neve (refrigeração)[cite: 5].",
      "A tipografia Eurostile e a paleta de cores (Azul, Vermelho e Cinza Escuro) transmitem inovação, urgência e neutralidade sofisticada, ideal para a indústria HVAC e aplicação em veículos[cite: 5].",
    ],
    gallery: [projProteck, projProteck, projProteck],
  },
  {
    id: 5,
    clientName: "Jorge Martins",
    projectName: "Rede Influence",
    description:
      "Desenvolvimento de Identidade Visual para um movimento de jovens cristãos, transmitindo um posicionamento moderno, dinâmico e jovial.",
    projectImg: projInfluence,
    clientImg: avatarJorge,
    fullDescription: [
      "A Rede Influence busca conectar jovens com propósito e fé, usando uma identidade visual que reflete conexões espirituais e influência mútua[cite: 6].",
      "O logotipo une as letras e um traço de rede sutil, representando a união e a missão de transformar vidas pelo Evangelho[cite: 6].",
      "A paleta de cores (Roxo e Preto) e a tipografia (Acumin Pro Bold e Segoe UI Variable) trazem criatividade, sofisticação e modernidade para a comunicação, desde mídias sociais até produtos físicos como blusas e crachás[cite: 6].",
    ],
    gallery: [projInfluence, projInfluence, projInfluence],
  },
  {
    id: 6,
    clientName: "Lucas Silva",
    projectName: "ILS Construções",
    description:
      "Reposicionamento estratégico e Identidade Visual para uma construtora se firmar no mercado de alto padrão, visando aumento de faturamento.",
    projectImg: projILS,
    clientImg: avatarLucas,
    fullDescription: [
      "A ILS Construções foca em construções de alto padrão, exigindo uma identidade visual que transmita solidez, confiança e precisão técnica[cite: 7].",
      "O logotipo minimalista combina o 'S' de Silva com a forma de uma casa, refletindo a expertise técnica e a exclusividade dos projetos[cite: 7].",
      "A paleta de cores (Terracota, Grafite, Areia, Branco Osso e Cinza Mescla) e a tipografia Source Sans Pro garantem elegância e legibilidade em todas as aplicações, desde o digital até os uniformes e a fachada do escritório[cite: 7].",
    ],
    gallery: [projILS, projILS, projILS],
  },
  {
    id: 7,
    clientName: "Raul Sena",
    projectName: "Sena Films",
    description:
      "Desenvolvimento de Identidade Visual para um estúdio de gravação e edição de vídeos focado em ajudar empresas a melhorarem a sua imagem.",
    projectImg: projSenaFilms,
    clientImg: avatarRaul,
    fullDescription: [
      "A Sena Films posiciona-se como referência no mercado de produção de vídeos, com uma identidade visual que reflete autoridade, profissionalismo e inovação[cite: 8].",
      "O conceito do logotipo mescla a letra 'a' (lente da câmera) e a letra 'S' (estrutura da câmera), simbolizando qualidade e excelência audiovisual[cite: 8].",
      "As cores (Roxo e Preto) e as tipografias selecionadas estimulam a criatividade e a inteligência, alinhando tradição e inovação para criar vídeos envolventes e memoráveis[cite: 8].",
    ],
    gallery: [projSenaFilms, projSenaFilms, projSenaFilms],
  },
];
