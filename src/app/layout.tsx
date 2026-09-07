import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { BUILD_ID, BUILD_URL } from "@/lib/version";

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
    "Equipaje y presupuesto para viajar a destinos con alta volatilidad cambiaria. Sin registro.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased motion-safe:scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}

        {/*
          Aviso de una línea, sin lógica de consentimiento (spec, sección 2).
          Vercel Web Analytics no usa cookies: identifica visitas con un hash
          del request entrante y no guarda nada que las reidentifique. Sin
          cookies no hay nada que consentir, así que un banner de "Aceptar
          todo / Personalizar" sería resolver un problema que el proyecto no
          tiene. Se avisa igual, porque medir sin decirlo tampoco está bien.

          `print:hidden` para que no salga en el PDF exportado: el spec pide
          imprimir la lista de equipaje, no el pie de página.
        */}
        <footer className="text-muted-foreground flex flex-col items-center gap-1 border-t px-6 py-4 text-center text-xs print:hidden">
          <span>
            Usamos analytics sin cookies para saber qué se usa. No vendemos
            datos ni mostramos anuncios.
          </span>

          {/*
            El commit que está corriendo. Tres veces un arreglo estuvo en main
            y no en producción, y las tres se perdió tiempo discutiendo si el
            problema era el código o el deploy. Con esto se compara en vez de
            discutir.
          */}
          <span className="opacity-60">
            build{" "}
            {BUILD_URL ? (
              <a
                href={BUILD_URL}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                {BUILD_ID}
              </a>
            ) : (
              BUILD_ID
            )}
          </span>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
