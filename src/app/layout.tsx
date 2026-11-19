import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Analytics } from "@/components/analytics";
import { Encabezado } from "@/components/sitio/encabezado";
import { Pie } from "@/components/sitio/pie";
import { continentesDelMenu } from "@/content/guias/continentes";
import { ProveedorDeIdioma } from "@/i18n/cliente";
import { idiomaActual, textos } from "@/i18n/servidor";
import { TEXTOS_DEL_SITIO } from "@/i18n/sitio";
import { NOMBRE_DEL_SITIO } from "@/lib/sitio/marca";
import { urlDelSitio } from "@/lib/sitio/url";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITIO = urlDelSitio();

export async function generateMetadata(): Promise<Metadata> {
  const t = await textos(TEXTOS_DEL_SITIO);

  return {
    // La base de las URLs absolutas de la metadata (Open Graph, canonical): el
    // dominio de producción, el propio cuando lo haya.
    ...(SITIO ? { metadataBase: new URL(SITIO) } : {}),
    // Cada página da su título y la plantilla le agrega el nombre del sitio.
    title: { default: NOMBRE_DEL_SITIO, template: `%s — ${NOMBRE_DEL_SITIO}` },
    applicationName: NOMBRE_DEL_SITIO,
    description: t.metadatos.descripcion,
  };
}

const CONTINENTES_DEL_MENU = continentesDelMenu();

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const idioma = await idiomaActual();

  return (
    <html
      lang={idioma}
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-pt-20 antialiased motion-safe:scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/*
          El idioma llega a los Client Components por contexto; los textos
          los importa cada uno (src/i18n/cliente.tsx).
        */}
        <ProveedorDeIdioma idioma={idioma}>
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
        </ProveedorDeIdioma>
      </body>
    </html>
  );
}
