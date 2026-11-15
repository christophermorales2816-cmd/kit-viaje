import { EN_TENDENCIA, OFERTAS } from "@/content/portada";

import { TarjetaDeLaPortadaVista } from "./tarjeta-de-la-portada";

/**
 * En tendencia y Ofertas de último momento (spec, 19.6), lado a lado.
 *
 * Las dos necesitan datos que el sitio todavía no tiene: qué se mira más
 * (las visitas, semana a semana) y precios de vuelos y hoteles (los
 * afiliados de docs/monetizacion.md). Hasta entonces dicen "Próximamente".
 * Juntas en una franja, y no en dos secciones enteras, para que la portada no
 * abra con una fila de cosas que todavía no están.
 */
export function TendenciasYOfertas() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 pb-16 md:grid-cols-2 md:pb-20">
        {[EN_TENDENCIA, OFERTAS].map((tarjeta) => (
          <section key={tarjeta.id} aria-labelledby={`${tarjeta.id}-titulo`}>
            <TarjetaDeLaPortadaVista
              tarjeta={tarjeta}
              titulo="h2"
              idDelTitulo={`${tarjeta.id}-titulo`}
              sizes="(min-width: 768px) 560px, 100vw"
              className="min-h-64 md:min-h-72 [&_h2]:text-2xl"
            />
          </section>
        ))}
      </div>
    </div>
  );
}
