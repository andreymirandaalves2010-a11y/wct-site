# WCT Centro de Treinamento

Site institucional da WCT Centro de Treinamento — Canelas, Montes Claros/MG.

## Stack
Next.js (App Router) + JavaScript/JSX + CSS puro.

## Rodar localmente

```bash
npm install
npm run dev

---

### `app/layout.js`

```jsx
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import BackgroundVideo from "./components/BackgroundVideo";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "WCT Centro de Treinamento | Montes Claros - MG",
  description:
    "WCT Centro de Treinamento em Canelas, Montes Claros - MG. Musculação, força, treinamento híbrido, fisiculturismo e funcional infantil.",
  keywords: [
    "WCT",
    "Centro de Treinamento",
    "Academia Montes Claros",
    "Canelas Montes Claros",
    "Musculação Montes Claros",
    "Treinamento Funcional",
  ],
  openGraph: {
    title: "WCT Centro de Treinamento | Montes Claros - MG",
    description:
      "Treinamento, saúde, disciplina e performance em um só lugar. Canelas, Montes Claros - MG.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060606",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "WCT Centro de Treinamento",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Vicente Guimarães, 2020",
    addressLocality: "Montes Claros",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  telephone: "+5538999381129",
  sameAs: ["https://instagram.com/wct.oficial"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${anton.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>

        <BackgroundVideo />
        <Navbar />

        {children}
      </body>
    </html>
  );
}