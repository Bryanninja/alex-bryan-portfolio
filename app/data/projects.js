// src/data/projects.js

import projMSFinancial from "../assets/img/projects/ms-financial/ms-financial.webp";
import projMSFinancialMockup from "../assets/img/projects/ms-financial/mockup.webp";
import projMSFinancialIcon from "../assets/img/projects/ms-financial/Icon-logo-black.png";
import projMSFinancialNote from "../assets/img/projects/ms-financial/Notepad.webp";
import projMSFinancialOffice from "../assets/img/projects/ms-financial/Office-building.webp";
import projMSFinancialTalking from "../assets/img/projects/ms-financial/michel-talking.webp";

import projPaceon from "../assets/img/projects/paceon/Paceon.webp";
import projPaceonLogoBlack from "../assets/img/projects/paceon/paceon-black-logo.webp";
import projPaceonIconWhite from "../assets/img/projects/paceon/paceon-white-icon.webp";
import projPaceonEnergyDrink from "../assets/img/projects/paceon/paceon-energy-drink.webp";
import projPaceonShirt from "../assets/img/projects/paceon/paceon-shirt.webp";
import projPaceonShirtAirplane from "../assets/img/projects/paceon/paceon-shirt-airplan.webp";

import projIgrejaJesusEoCaminho from "../assets/img/projects/igreja-jesus/igreja-jesus-web.webp";
import projIgrejaJesusEoCaminhoLogoGreen from "../assets/img/projects/igreja-jesus/igreja-jesus-logo-green.webp";
import projIgrejaJesusEoCaminhoLogoWhite from "../assets/img/projects/igreja-jesus/igreja-jesus-logo-white.webp";
import projIgrejaJesusEoCaminhoShirtFront from "../assets/img/projects/igreja-jesus/igreja-jesus-front-shirt.webp";
import projIgrejaJesusEoCaminhoShirtBack from "../assets/img/projects/igreja-jesus/igreja-jesus-back-shirt.jpg";
import projIgrejaJesusEoCaminhoPlan from "../assets/img/projects/igreja-jesus/igreja-jesus-plan.webp";

import projSenaFilms from "../assets/img/projects/sena-films/sena-films.webp";
import projSenaFilmsBanner from "../assets/img/projects/sena-films/sena-films-banner.webp";
import projSenaFilmsCap from "../assets/img/projects/sena-films/sena-films-cap.webp";
import projSenaFilmsFilms from "../assets/img/projects/sena-films/sena-films-films.webp";
import projSenaFilmsIcon from "../assets/img/projects/sena-films/sena-films-icon.webp";
import projSenaFilmsAssets from "../assets/img/projects/sena-films/sena-films-assets.webp";

import projProteck from "../assets/img/projects/proteck/proteck.webp";
import projProteckBanner from "../assets/img/projects/proteck/proteck-banner.webp";
import projProteckBuilding from "../assets/img/projects/proteck/proteck-building.webp";
import projProteckVan from "../assets/img/projects/proteck/RealVan.webp";
import projProteckVan2 from "../assets/img/projects/proteck/RealVan2.webp";
import projProteckVan3 from "../assets/img/projects/proteck/RealVan3jpg.webp";
import projProteckIcon from "../assets/img/projects/proteck/proteck-icon.webp";

import projInfluence from "../assets/img/projects/influence/influence.webp";
import projInfluenceShirt from "../assets/img/projects/influence/rede-influence-shirt.webp";
import projInfluenceYoungs from "../assets/img/projects/influence/influence-youngs.webp";
import projInfluenceCta from "../assets/img/projects/influence/influence-cta.webp";
import projInfluencePalco from "../assets/img/projects/influence/influence-palco.webp";
import projInfluenceGarrafa from "../assets/img/projects/influence/influence-garrafa.webp";
import projInfluenceIcon from "../assets/img/projects/influence/influence-icon.webp";

import projILS from "../assets/img/projects/ils/ils.webp";
import projILSAssets from "../assets/img/projects/ils/ils-assets.webp";
import projILSBanner from "../assets/img/projects/ils/ils-banner.webp";
import projILSBuilding from "../assets/img/projects/ils/ils-building.webp";
import projILSCap from "../assets/img/projects/ils/ils-cap.webp";
import projILSCar from "../assets/img/projects/ils/ils-car.webp";
import projILSHat from "../assets/img/projects/ils/ils-hat.webp";
import projILSIcon from "../assets/img/projects/ils/ils-icon.webp";
import projILSKeys from "../assets/img/projects/ils/ils-keys.webp";
import projILSPlate from "../assets/img/projects/ils/ils-plate.webp";
import projILSModel from "../assets/img/projects/ils/ils-shirt-model.webp";
import projILShirts from "../assets/img/projects/ils/ils-shirts.webp";

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
    services: ["Identidade Visual", "UI/UX Design", "Desenvolvimento Web"], // <--- NOVO
    fullDescription: [
      "Para a MS Financial, o desafio era traduzir mais de 30 anos de expertise em cenários financeiros de alta complexidade — incluindo operações de até 3 bilhões de dólares — em uma presença digital inquestionável.",
      "A identidade visual e a arquitetura do site foram construídas sob a premissa de que 'estrutura precede crescimento', focando em um design limpo, premium e direto.",
      "Utilizamos dados visuais precisos, tipografia sofisticada e uma navegação fluida para refletir a autoridade da marca, entregando clareza e organização para empresas que buscam escalar com solidez e disciplina.",
    ],
    gallery: [
      projMSFinancialIcon,
      projMSFinancialMockup,
      projMSFinancialTalking,
      projMSFinancialNote,
      projMSFinancialOffice,
    ],
  },
  {
    id: 2,
    clientName: "Adryan Medeiros",
    projectName: "Paceon",
    description:
      "Desenvolvimento de Identidade Visual para uma marca focada em corredores obstinados, que buscam superar constantemente a sua versão de ontem.",
    projectImg: projPaceonLogoBlack,
    clientImg: avatarAdryan,
    services: [
      "Identidade Visual",
      "Estratégia de Marca",
      "Design de Vestuário",
    ], // <--- NOVO
    fullDescription: [
      "A Paceon nasceu para ser muito mais que uma marca esportiva; ela é um símbolo de consistência que acompanha o corredor desde os primeiros passos até a alta performance.",
      "O logotipo traz um 'P' modificado com arestas que remetem à velocidade e ao dinamismo, equilibrado por uma paleta minimalista de preto, branco e cinza, conectando a energia do ambiente urbano à natureza.",
      "A tipografia Abhaya Libre confere uma autoridade elegante ao projeto, resultando em uma identidade visual versátil, pensada para se destacar de forma imponente tanto em vestuário de alta performance quanto no estilo de vida cotidiano.",
    ],
    gallery: [
      projPaceonIconWhite,
      projPaceon,
      projPaceonShirt,
      projPaceonEnergyDrink,
      projPaceonShirtAirplane,
    ],
  },
  {
    id: 3,
    clientName: "Franciely Hisdaleck",
    projectName: "Igreja Jesus é o caminho",
    description:
      "Projeto completo: desde a Identidade Visual até o desenvolvimento de um WebApp de leitura personalizado, com destaque para a alta acessibilidade.",
    projectImg: projIgrejaJesusEoCaminhoLogoGreen,
    clientImg: avatarFranciely,
    services: [
      "Identidade Visual",
      "UI/UX Design",
      "Desenvolvimento de WebApp",
    ], // <--- NOVO
    fullDescription: [
      "A identidade visual deste projeto foi desenhada para conectar a juventude à mensagem cristã de forma moderna e acolhedora, utilizando um símbolo inteligente que mescla sutilmente uma ovelha e a porta.",
      "A paleta de cores traz o verde como representação de renovação e águas tranquilas, equilibrado por tons profundos de cinza e preto para garantir um visual limpo, sofisticado e atraente.",
      "Além do branding, desenvolvemos um WebApp interativo e de alta acessibilidade para o Plano de Leitura 2026, oferecendo uma experiência de usuário (UX) fluida e em modo escuro para o acompanhamento diário do progresso espiritual.",
    ],
    gallery: [
      projIgrejaJesusEoCaminhoLogoWhite,
      projIgrejaJesusEoCaminho,
      projIgrejaJesusEoCaminhoShirtBack,
      projIgrejaJesusEoCaminhoShirtFront,
      projIgrejaJesusEoCaminhoPlan,
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
    services: ["Identidade Visual", "Estratégia de Marca", "Design de Frota"], // <--- NOVO
    fullDescription: [
      "Para a Protek HVAC, empresa de climatização sediada na Croácia, criamos uma marca projetada para atuar como um selo de excelência, comunicando confiança e precisão técnica à primeira vista.",
      "O conceito do logotipo integra de forma simétrica uma chama (aquecimento), um floco de neve (refrigeração) e um escudo (segurança e controle), envoltos em uma paleta vibrante de azul e vermelho com contraste em cinza escuro.",
      "A combinação de uma tipografia futurista e estruturada garantiu alto impacto, resultando em uma aplicação perfeita e de extrema visibilidade para a frota corporativa e materiais de suporte.",
    ],
    gallery: [
      projProteckIcon,
      projProteckBanner,
      projProteckVan,
      projProteckVan2,
      projProteckVan3,
      projProteckBuilding,
    ],
  },
  {
    id: 5,
    clientName: "Jorge Martins",
    projectName: "Rede Influence",
    description:
      "Desenvolvimento de Identidade Visual para um movimento de jovens cristãos, transmitindo um posicionamento moderno, dinâmico e jovial.",
    projectImg: projInfluence,
    clientImg: avatarJorge,
    services: ["Identidade Visual", "UI/UX Design", "Aplicações de Mídia"], // <--- NOVO
    fullDescription: [
      "A Rede Influence precisava de uma identidade que falasse diretamente com uma juventude dinâmica, traduzindo o conceito de conexões espirituais e influência mútua.",
      "O logotipo une as letras em um fluxo contínuo ao lado de um ícone que remete a uma 'rede', enquanto o uso estratégico do roxo e do preto com gradientes cria uma sensação de profundidade e transformação.",
      "Todo o ecossistema visual, desde interfaces de mídia social até o design de vestuário de alto padrão, foi concebido para gerar senso de pertencimento e modernidade para um público altamente conectado.",
    ],
    gallery: [
      projInfluenceIcon,
      projInfluenceShirt,
      projInfluenceYoungs,
      projInfluenceCta,
      projInfluenceGarrafa,
      projInfluencePalco,
    ],
  },
  {
    id: 6,
    clientName: "Lucas Silva",
    projectName: "ILS Construções",
    description:
      "Reposicionamento estratégico e Identidade Visual para uma construtora se firmar no mercado de alto padrão, visando aumento de faturamento.",
    projectImg: projILS,
    clientImg: avatarLucas,
    services: [
      "Reposicionamento Estratégico",
      "Identidade Visual",
      "Papelaria Corporativa",
    ], // <--- NOVO
    fullDescription: [
      "O reposicionamento da ILS Construções foi meticulosamente desenhado para elevar a marca ao exigente mercado de alto padrão, traduzindo solidez estrutural em um visual premium sob o lema 'Sua Visão. Nossa Estrutura'.",
      "O logotipo inteligente combina a inicial da família à silhueta minimalista de uma residência, apoiado por uma paleta sóbria de terracota, grafite e areia, que remete aos materiais nobres da construção civil.",
      "Desde a aplicação impecável em uniformes corporativos até a criação de um Kit de Boas-Vindas exclusivo para a entrega das chaves, cada ponto de contato foi pensado para garantir uma experiência de marca luxuosa e inesquecível.",
    ],
    gallery: [
      projILSIcon,
      projILSBuilding,
      projILSBanner,
      projILSAssets,
      projILSCap,
      projILSCar,
      projILSHat,
      projILSKeys,
      projILSPlate,
      projILSModel,
      projILShirts,
    ],
  },
  {
    id: 7,
    clientName: "Raul Sena",
    projectName: "Sena Films",
    description:
      "Desenvolvimento de Identidade Visual para um estúdio de gravação e edição de vídeos focado em ajudar empresas a melhorarem a sua imagem.",
    projectImg: projSenaFilms,
    clientImg: avatarRaul,
    services: [
      "Identidade Visual",
      "Estratégia de Posicionamento",
      "Direção de Arte",
    ], // <--- NOVO
    fullDescription: [
      "A Sena Films buscou uma identidade visual que transpirasse excelência audiovisual, capaz de atrair grandes marcas interessadas em elevar o padrão estético de sua própria comunicação corporativa.",
      "O logotipo conceitual mescla de forma inteligente a letra 'a' (simbolizando a lente de uma câmera) com a letra 'S' (a estrutura do equipamento), criando um ícone imponente e de rápido reconhecimento.",
      "Apostamos em tons de roxo para estimular a criatividade e a inovação, combinados a uma tipografia clara que transita perfeitamente nas plataformas digitais, garantindo uma presença magnética e altamente profissional.",
    ],
    gallery: [
      projSenaFilmsIcon,
      projSenaFilmsBanner,
      projSenaFilmsAssets,
      projSenaFilmsCap,
      projSenaFilmsFilms,
    ],
  },
];
