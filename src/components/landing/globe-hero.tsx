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

export interface GlobeDestination {
  href: string;
  /** Nombre del destino, y nombre accesible del enlace. */
  label: string;
  /** [latitud, longitud] en grados decimales. */
  coords: [number, number];
}

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

const RAD = Math.PI / 180;

/**
 * Radio de la esfera que dibuja cobe, en fracción de la mitad del canvas.
 *
 * No llena el canvas: deja margen para el glow. El número está MEDIDO, no
 * estimado — se comparó la posición que da `proyectar` con el centroide de los
 * píxeles naranjas de los marcadores que dibuja el propio cobe, en un build de
 * producción:
 *
 *              fórmula          cobe            escala
 *   Argentina  -0.1089 -0.1054  -0.0932 -0.0890  0.856 / 0.845
 *   Brasil      0.1219  0.0980   0.1030  0.0839  0.845 / 0.856
 *
 * Que la escala salga igual en x y en y es lo que confirma que la proyección
 * es la correcta y que lo único que faltaba era el radio.
 */
const RADIO_DEL_GLOBO = 0.85;

/** Cuánto dura la ráfaga de frames que dibuja el mapa de puntos. */
const DURACION_DE_LA_RAFAGA_MS = 1200;

/**
 * Punto medio de las coordenadas, que es adónde mira la cámara.
 *
 * Con un solo destino esto devuelve ese destino y el globo queda igual que
 * antes. Con dos, los deja a los dos visibles en vez de centrar uno y mandar
 * al otro al borde.
 */
function centro(destinos: GlobeDestination[]): [number, number] {
  const n = destinos.length || 1;
  const lat = destinos.reduce((a, d) => a + d.coords[0], 0) / n;
  const lon = destinos.reduce((a, d) => a + d.coords[1], 0) / n;
  return [lat, lon];
}

/**
 * Proyección ortográfica de una coordenada sobre el canvas, en porcentaje.
 *
 * Es la misma proyección que usa cobe: una esfera vista de frente, sin
 * perspectiva. `x` e `y` van de -1 a 1 sobre el radio, y `visible` es falso
 * cuando el punto quedó del otro lado del planeta — ahí no hay que dibujar
 * nada, porque un marcador flotando sobre el océano equivocado miente.
 *
 * Verificada contra los puntos que dibuja el propio cobe: se compararon las
 * posiciones calculadas acá con el centroide de los píxeles naranjas del
 * canvas renderizado.
 */
export function proyectar(
  [lat, lon]: [number, number],
  [lat0, lon0]: [number, number],
): { x: number; y: number; visible: boolean } {
  const dLon = (lon - lon0) * RAD;
  const la = lat * RAD;
  const la0 = lat0 * RAD;

  const x = Math.cos(la) * Math.sin(dLon);
  const y =
    Math.cos(la0) * Math.sin(la) -
    Math.sin(la0) * Math.cos(la) * Math.cos(dLon);
  const z =
    Math.sin(la0) * Math.sin(la) +
    Math.cos(la0) * Math.cos(la) * Math.cos(dLon);

  return { x, y, visible: z > 0 };
}

export function GlobeHero({
  destinations,
}: {
  /** Los destinos que el globo ofrece. Uno o varios. */
  destinations: GlobeDestination[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const foco = centro(destinations);
  const [PHI, THETA] = locationToAngles(...foco);

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
      markers: destinations.map((d) => ({ location: d.coords, size: 0.1 })),
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
    let inicio: number | null = null;

    // El instante de arranque sale del propio requestAnimationFrame y no de
    // performance.now(): es el mismo reloj que compara la condición de abajo,
    // así que no hace falta suponer que los dos comparten origen.
    const dibujar = (ahora: number) => {
      inicio ??= ahora;
      globe.update({});
      if (ahora - inicio < DURACION_DE_LA_RAFAGA_MS) {
        frame = requestAnimationFrame(dibujar);
      }
    };

    frame = requestAnimationFrame(dibujar);

    return () => {
      cancelAnimationFrame(frame);
      globe.destroy();
      window.removeEventListener("resize", medir);
    };
    // Las dependencias son los ángulos y las coordenadas, no el array: un
    // literal nuevo en cada render recrearía el globo en cada render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PHI, THETA, JSON.stringify(destinations.map((d) => d.coords))]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <canvas
        ref={canvasRef}
        aria-hidden
        className="size-full [contain:layout_paint_size]"
      />

      {/*
        Los marcadores en HTML, encima del canvas: son links de verdad, así que
        funcionan sin JavaScript, se abren en otra pestaña y Next precarga la
        guía al pasar el mouse. El canvas queda como decoración.

        La posición sale de la misma proyección ortográfica que usa cobe, y no
        de suponer que el destino está en el centro — que era cierto con un
        solo país y dejó de serlo con dos.
      */}
      {destinations.map((destino) => {
        const { x, y, visible } = proyectar(destino.coords, foco);

        // Del otro lado del planeta no se dibuja: un marcador ahí estaría
        // señalando el océano equivocado.
        if (!visible) return null;

        return (
          <Link
            key={destino.href}
            href={destino.href}
            /*
              El enlace mide lo que mide el punto, y la etiqueta cuelga en
              absoluto: así `-translate-y-1/2` centra EL PUNTO sobre la
              coordenada. Antes centraba el bloque punto+etiqueta, o sea que el
              punto quedaba unos píxeles arriba del país. Con un solo país
              centrado en el canvas nadie lo notaba; con dos, el pin señalaba al
              lugar equivocado.
            */
            className="group absolute flex size-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:ring-[3px] focus-visible:ring-white/60 focus-visible:outline-none"
            style={{
              left: `${50 + x * RADIO_DEL_GLOBO * 50}%`,
              top: `${50 - y * RADIO_DEL_GLOBO * 50}%`,
            }}
          >
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange-400/70" />
            <span className="relative inline-flex size-3 rounded-full bg-orange-500 ring-2 ring-white/80" />

            <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium whitespace-nowrap text-white shadow-sm backdrop-blur-sm transition-colors group-hover:bg-white/20">
              {destino.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
