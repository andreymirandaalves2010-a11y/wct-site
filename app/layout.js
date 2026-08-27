import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "WCT — Centro de Treinamento",
  description:
    "Treinamento, saúde, disciplina e performance em Montes Claros - MG.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${bebas.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}