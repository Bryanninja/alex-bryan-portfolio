import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 1. METADATA DE ALTA PERFORMANCE
export const metadata: Metadata = {
  title: "Álex Bryan | Landing Pages de Elite & Identidade Visual",
  description:
    "Criação de Landing Pages de alta performance e Identidades Visuais de elite. Transforme seu negócio em uma marca de autoridade com visão internacional.",
  keywords: [
    "Criação de Landing Pages",
    "Landing Page de Elite",
    "Design de Marcas Premium",
    "Desenvolvedor Front-end Next.js",
    "UI/UX Designer",
    "Albry Studio",
  ],
  authors: [{ name: "Álex Bryan" }],
  creator: "Álex Bryan",
  publisher: "Albry Studio",
  alternates: {
    canonical: "https://www.albrystudio.com",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // Arquivo .ico TRANSPARENTE (Exclusivo para a aba do navegador)
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }, // PNG com fundo sólido (Dispositivos Apple)
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/icon-google.png", // PNG com fundo sólido (Para o robô do Google Search ler)
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.albrystudio.com",
    title: "Álex Bryan | Design de Elite & Desenvolvimento Front-end",
    description: "Identidades visuais de elite e sites que realmente vendem.",
    siteName: "Álex Bryan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Álex Bryan - Design & Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Álex Bryan | Design & Tech",
    description: "Marcas de elite e sites de alta performance.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1D3759", // Mantido sua cor de marca (brand-900) para o topo do navegador mobile
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. JSON-LD (Schema.org) - Mantido perfeitamente
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Álex Bryan | Albry Studio",
    image: "https://www.albrystudio.com/og-image.jpg",
    description:
      "Especialista em Identidade Visual e Desenvolvimento Front-end para negócios que buscam posicionamento premium.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pedro Leopoldo",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    url: "https://www.albrystudio.com",
    priceRange: "$$$",
  };

  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased text-brand-800 bg-brand-50">
        <Analytics />
        <SpeedInsights />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
