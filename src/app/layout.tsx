import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Analytics } from "@/components/analytics";
import { Encabezado } from "@/components/sitio/encabezado";
import { Pie } from "@/components/sitio/pie";
import { continentesDelMenu } from "@/content/guias/continentes";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kit de viaje",
  description:
    "Qué llevar y cuánto vas a gastar, con el clima de la ciudad a la que vas y la cotización que elijas. Sin registro.",
};

const CONTINENTES_DEL_MENU = continentesDelMenu();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-pt-20 antialiased motion-safe:scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/*
          La barra y el pie son los mismos en todas las páginas (spec, 19).
          Los continentes salen de las guías, en el servidor: al navegador
          llegan cinco nombres y cinco números, no las 165 guías.
        */}
        <Encabezado continentes={CONTINENTES_DEL_MENU} />

        <div id="contenido" className="flex flex-1 flex-col">
          {children}
        </div>

        <Pie continentes={CONTINENTES_DEL_MENU} />

        <Analytics />
      </body>
    </html>
  );
}
