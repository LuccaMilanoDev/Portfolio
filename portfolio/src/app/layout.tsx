import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/manrope";
import "./globals.css";
export const metadata: Metadata = {
  title: "Lucca Milano — Desenvolvedor de Software",
  description:
    "Desenvolvedor de software no Grupo RAS. Java, Struts, Spring, React e Next.js. Conheça minha trajetória, projetos e a forma como construo software.",
  openGraph: {
    title: "Lucca Milano — Desenvolvedor de Software",
    description: "Do back-end à experiência. Software construído com intenção.",
    locale: "pt_BR",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
