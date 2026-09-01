"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

/**
 * Hero de la landing (spec, secciones 6A y 8.1).
 *
 * Globo con un marcador único en Buenos Aires: el corredor está fijo para el
 * MVP. El marcador ya no abre el slide-over de fechas — despliega la guía del
 * destino, que es el bloque siguiente. Elegir destino y elegir fechas dejan de
 * ser el mismo gesto, porque ahora hay algo que leer en el medio: el
 * datepicker vive en el último bloque de la página.
 *
 * EL GLOBO NO GIRA, Y ESO ES A PROPÓSITO
 *
 * cobe dibuja sobre un <canvas> WebGL: no hay elementos, no hay eventos de
 * click sobre el marcador ni hit-testing que se pueda pedir prestado. El
 * marcador clickeable es un <button> de HTML puesto encima, y para que quede
 * encima del punto correcto el globo se fija con Buenos Aires mirando a cámara
 * en vez de rotar. Un globo que gira necesitaría recalcular la posición del
 * botón en cada frame para terminar con un blanco móvil, que es peor de
 * clickear y bastante peor de usar con teclado.
 *
 * Como el marcador es HTML, además: se llega con Tab, se activa con Enter,
 * tiene nombre accesible y sigue funcionando si WebGL no está disponible. El
 * canvas queda como decoración (aria-hidden).
 *
 * Y como ahora solo navega, es un <a href="#guia"> y no un <button>: el salto
 * funciona con JavaScript deshabilitado, se puede abrir en otra pestaña y el
 * scroll suave lo pone el CSS del layout, respetando prefers-reduced-motion.
 */

const BUENOS_AIRES: [number, number] = [-34.6037, -58.3816];

/**
 * Ángulos que ponen una coordenada de frente a la cámara. Es la fórmula del
 * ejemplo "focus" de cobe: phi rota el globo sobre su eje y theta lo inclina.
 */
function locationToAngles(lat: number, long: number): [number, number] {
  return [
    Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
    (lat * Math.PI) / 180,
  ];
}

const [PHI, THETA] = locationToAngles(...BUENOS_AIRES);

export function GlobeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const lado = () => canvas.offsetWidth * 2;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: lado(),
      height: lado(),
      phi: PHI,
      theta: THETA,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.32, 0.36, 0.42],
      markerColor: [0.99, 0.53, 0.16],
      glowColor: [0.18, 0.21, 0.26],
      markers: [{ location: BUENOS_AIRES, size: 0.1 }],
    });

    // El canvas es fluido y el globo se dibuja una sola vez: sin esto, girar el
    // teléfono lo deja renderizado con la medida vieja. En cobe v2 el tamaño se
    // cambia con update(), no con el onRender por frame de la v1.
    const medir = () => globe.update({ width: lado(), height: lado() });

    window.addEventListener("resize", medir);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", medir);
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <canvas
        ref={canvasRef}
        aria-hidden
        className="size-full [contain:layout_paint_size]"
      />

      {/*
        El marcador, centrado sobre el punto que dibuja cobe: el globo está
        fijo con Buenos Aires al frente, así que ese punto es el centro exacto
        del canvas.
      */}
      <a
        href="#guia"
        className="group absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-lg p-2 focus-visible:ring-[3px] focus-visible:ring-white/60 focus-visible:outline-none"
      >
        <span className="relative flex size-4 items-center justify-center">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange-400/70" />
          <span className="relative inline-flex size-3 rounded-full bg-orange-500 ring-2 ring-white/80" />
        </span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white shadow-sm backdrop-blur-sm transition-colors group-hover:bg-white/20">
          Argentina
        </span>
      </a>
    </div>
  );
}
