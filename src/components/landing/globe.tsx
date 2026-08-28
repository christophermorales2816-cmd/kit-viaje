"use client";

import * as React from "react";
import createGlobe from "cobe";

/** Buenos Aires: el único corredor del MVP (spec, sección 2). */
const BUENOS_AIRES: [number, number] = [-34.6037, -58.3816];

/**
 * Globo interactivo de la landing (spec, sección 6A).
 *
 * `cobe` pesa ~5 kB y renderiza por WebGL sobre un canvas, sin Three.js.
 *
 * Dos cosas que no están en el spec y hacen falta igual:
 *
 * 1. El canvas va envuelto en un <button>. Un canvas de WebGL no es navegable
 *    por teclado ni lo anuncia un lector de pantalla, así que "hacé click en el
 *    marcador" dejaría afuera a quien no usa mouse. El botón cubre el globo
 *    entero: acertarle a un marcador de pocos píxeles tampoco es un buen gesto
 *    táctil.
 *
 * 2. Respeta `prefers-reduced-motion`. Un planeta girando sin parar es
 *    exactamente lo que esa preferencia existe para frenar.
 *
 * Sobre la animación: casi todos los ejemplos de cobe que circulan usan la
 * opción `onRender`, que es de la v0.6 y NO existe en la v2 — ni en los tipos
 * ni en el bundle. Acá se anima con requestAnimationFrame y `globe.update()`,
 * que es lo que la versión instalada expone de verdad.
 */
export function Globe({ onSelect }: { onSelect: () => void }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Centrado en Buenos Aires. phi gira sobre el eje vertical (longitud) y
    // theta inclina (latitud); sin esto el globo arranca mirando a África y el
    // marcador queda en el borde, prácticamente invisible.
    const [lat, lng] = BUENOS_AIRES;
    let phi = Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2);
    const theta = (lat * Math.PI) / 180;

    // ResizeObserver y no offsetWidth de una: en el primer effect el layout
    // todavía no se asentó, así que medir ahí deja el globo del tamaño
    // equivocado para siempre.
    let width = canvas.offsetWidth;
    const observer = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
    });
    observer.observe(canvas);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16_000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.35],
      markerColor: [0.9, 0.35, 0.2],
      glowColor: [0.15, 0.15, 0.18],
      markers: [{ location: BUENOS_AIRES, size: 0.09 }],
    });

    let frame = 0;
    const tick = () => {
      if (!reduceMotion) phi += 0.002;
      globe.update({ phi, width: width * 2, height: width * 2 });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    // Aparece recién cuando el primer frame está listo: sin esto se ve un
    // rectángulo negro mientras compilan los shaders.
    const reveal = window.setTimeout(() => {
      canvas.style.opacity = "1";
    }, 100);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(reveal);
      observer.disconnect();
      globe.destroy();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={onSelect}
      // Tamaño explícito y no `w-full max-w-*`: el botón vive dentro de un flex
      // con items-center, así que el 100% no tiene contra qué resolverse y el
      // globo colapsa a un par de píxeles.
      className="group focus-visible:ring-ring relative aspect-square w-[min(420px,72vw)] cursor-pointer rounded-full focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-hidden"
      aria-label="Planificar un viaje a Buenos Aires"
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-700 group-hover:scale-[1.02] motion-safe:transition-transform"
        style={{ contain: "layout paint size" }}
      />
    </button>
  );
}
