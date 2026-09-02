"use client";

import createGlobe from "cobe";
import Link from "next/link";
import { useEffect, useRef } from "react";

/**
 * Hero de la landing (spec, secciones 6A y 8.1).
 *
 * Globo con un marcador único en Buenos Aires: el corredor está fijo para el
 * MVP. El marcador es el selector de destino — lleva a la guía del país. Con
 * el flujo de tres páginas (sección 8.1), elegir destino, leer la guía y
 * elegir fechas son tres pasos separados, y este es el primero.
 *
 * El destino entra por prop en vez de estar escrito acá: cuando haya más de un
 * corredor, este mismo componente dibuja varios marcadores sin tocarse.
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
 * Y como solo navega, es un <Link> y no un <button>: funciona con JavaScript
 * deshabilitado, se puede abrir en otra pestaña, y Next precarga la guía al
 * pasar el mouse — que es justo la página pesada del flujo.
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

export function GlobeHero({
  href,
  label,
}: {
  /** Adónde lleva el marcador. */
  href: string;
  /** Nombre del destino, y nombre accesible del enlace. */
  label: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const lado = () => canvas.offsetWidth * 2;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      // Sin esto el canvas queda en blanco: el globo se dibuja en una ráfaga
      // corta al principio y después nadie lo redibuja, así que el compositor
      // se lleva el contenido. Ver el bloque de abajo.
      context: { preserveDrawingBuffer: true },
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

    // El canvas es fluido: sin esto, girar el teléfono lo deja renderizado con
    // la medida vieja. En cobe v2 el tamaño se cambia con update(), no con el
    // onRender por frame de la v1.
    const medir = () => globe.update({ width: lado(), height: lado() });

    window.addEventListener("resize", medir);

    /*
      RÁFAGA CORTA DE FRAMES, Y DESPUÉS SE APAGA

      cobe 2.0.1 no tiene bucle interno —no hay requestAnimationFrame en su
      bundle—, así que dibuja solo cuando se lo pide. El primer frame trae la
      esfera, el brillo y el marcador, pero NO el mapa de puntos: los
      continentes aparecen recién después de varios frames.

      Medido en build de producción, contando píxeles claros sobre la captura
      del canvas (5 cargas cada uno):

        createGlobe y nada más ............... 0/5 con mapa
        + preserveDrawingBuffer .............. 0/5
        + un update() diferido a un frame .... 0/5
        + bucle rAF permanente ............... 5/5
        + bucle acotado y buffer preservado .. 5/5   ← esto

      El bucle permanente también funciona, pero deja un rAF corriendo para
      siempre por un globo que no gira. Con el buffer preservado alcanza con la
      ráfaga: se apaga sola y el último frame queda pintado. Verificado a los
      2,5s, 5s, 9s y 15s, y después de redimensionar.
    */
    let frame = 0;
    const hasta = performance.now() + 1200;
    const dibujar = (ahora: number) => {
      globe.update({});
      if (ahora < hasta) frame = requestAnimationFrame(dibujar);
    };
    frame = requestAnimationFrame(dibujar);

    return () => {
      cancelAnimationFrame(frame);
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
      <Link
        href={href}
        className="group absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-lg p-2 focus-visible:ring-[3px] focus-visible:ring-white/60 focus-visible:outline-none"
      >
        <span className="relative flex size-4 items-center justify-center">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange-400/70" />
          <span className="relative inline-flex size-3 rounded-full bg-orange-500 ring-2 ring-white/80" />
        </span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white shadow-sm backdrop-blur-sm transition-colors group-hover:bg-white/20">
          {label}
        </span>
      </Link>
    </div>
  );
}
