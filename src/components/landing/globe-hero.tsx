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
 * EL GLOBO GIRA, Y SE QUEDA QUIETO CUANDO HACE FALTA
 *
 * Con un solo corredor el globo estaba fijo, mirando a Buenos Aires: un blanco
 * móvil es peor de clickear y bastante peor de usar con teclado. Con países en
 * tres continentes eso dejó de alcanzar, porque una esfera vista de frente
 * muestra un hemisferio: con 76 países, el punto medio caía en el Sahara y
 * Argentina quedaba del otro lado (spec, 14.8).
 *
 * Ahora gira (spec, 14.9), y lo que hacía mala idea un globo que gira se
 * resuelve así:
 *
 *   - Se detiene apenas el mouse entra al globo o el foco llega a un marcador
 *     con Tab: el punto al que apuntás no se mueve.
 *   - Quien pidió menos movimiento en el sistema (prefers-reduced-motion) ve el
 *     globo quieto; igual puede arrastrarlo.
 *   - Se arrastra con el mouse o el dedo para elegir qué lado mirar.
 *   - Arranca mirando al Atlántico, con América y Europa a la vista, que es lo
 *     que muestra también sin JavaScript.
 *   - Fuera de pantalla no dibuja.
 *
 * Los marcadores siguen siendo HTML encima del canvas, y se reubican en cada
 * frame con la misma proyección que usa cobe.
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

/**
 * Hasta cuántos destinos las etiquetas van siempre visibles.
 *
 * Con tres países separados por miles de kilómetros, cada nombre colgando de su
 * punto se lee bien. Con diecinueve no: Guatemala, El Salvador, Honduras y
 * Nicaragua quedan a pocos grados entre sí, que en este globo son pocos
 * píxeles, y las etiquetas se encimaban en un bloque ilegible. Pasado este
 * número la etiqueta aparece al pasar el mouse o al llegar con Tab, y la lista
 * de países debajo del hero es la forma principal de elegir.
 *
 * La etiqueta sigue en el DOM aunque no se vea: es el nombre accesible del
 * enlace, y un lector de pantalla la anuncia igual.
 */
const ETIQUETAS_SIEMPRE_VISIBLES_HASTA = 3;

/** Cuánto dura la ráfaga de frames que dibuja el mapa de puntos. */
const DURACION_DE_LA_RAFAGA_MS = 1200;

/**
 * Velocidad del giro: una vuelta por minuto. Más rápido no da tiempo a leer
 * los nombres; más lento parece quieto.
 */
const GRADOS_POR_MS = 360 / 60_000;

/** Arrastrar el ancho entero del globo lo gira media vuelta. */
const GRADOS_POR_ANCHO = 180;

/** Una longitud cualquiera, llevada a [-180, 180). */
export function normalizarLongitud(lon: number): number {
  return ((((lon + 180) % 360) + 360) % 360) - 180;
}

/**
 * La longitud que mira la cámara después de arrastrar `dx` píxeles sobre un
 * globo de `ancho` píxeles. Arrastrar a la derecha lleva la superficie a la
 * derecha, como con la mano sobre una pelota: la cámara mira más al oeste.
 */
export function longitudTrasArrastre(
  lonInicial: number,
  dx: number,
  ancho: number,
): number {
  if (ancho <= 0) return normalizarLongitud(lonInicial);
  return normalizarLongitud(lonInicial - (dx / ancho) * GRADOS_POR_ANCHO);
}

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
  inicio,
}: {
  /** Los destinos que el globo ofrece. Uno o varios. */
  destinations: GlobeDestination[];
  /**
   * [latitud, longitud] adonde mira el globo al cargar, antes de girar. La
   * latitud queda fija como inclinación. Sin este dato, el punto medio de los
   * destinos.
   */
  inicio?: [number, number];
}) {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const marcadoresRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const foco = inicio ?? centro(destinations);
  const pocos = destinations.length <= ETIQUETAS_SIEMPRE_VISIBLES_HASTA;
  const [LAT, LON] = foco;
  const [PHI, THETA] = locationToAngles(LAT, LON);

  useEffect(() => {
    const contenedor = contenedorRef.current;
    const canvas = canvasRef.current;
    if (!contenedor || !canvas) return;

    const lado = () => canvas.offsetWidth * 2;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      // Sin esto el canvas queda en blanco cuando el globo deja de dibujar
      // (pausado, quieto o fuera de pantalla): el compositor se lleva el
      // contenido. Ver el bloque de abajo.
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
    const medir = () => {
      globe.update({ width: lado(), height: lado() });
      arrancar();
    };

    /*
      CUÁNDO SE DIBUJA

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
        + bucle acotado y buffer preservado .. 5/5

      El bucle corre mientras el globo gira o se arrastra, y además durante
      una ráfaga corta al arrancar, para que el mapa aparezca aunque el globo
      esté quieto. Cuando nada lo mueve —mouse encima, foco en un marcador,
      movimiento reducido o fuera de pantalla— se apaga, y el buffer
      preservado deja pintado el último frame.
    */
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lon = LON;
    // Dos motivos separados para detenerse: con uno solo, sacar el foco con
    // Tab mientras el mouse sigue encima lo haría girar bajo el puntero.
    let encima = false;
    let conFoco = false;
    let enPantalla = true;
    let arrastre: { x: number; lon: number; id: number } | null = null;
    let frame = 0;
    let ultimo: number | null = null;
    let arranque: number | null = null;

    const gira = () =>
      !quieto.matches && !encima && !conFoco && arrastre === null;

    // Se escribe el estilo directo, sin pasar por React: son decenas de
    // marcadores en cada frame, y un render por frame no aporta nada.
    const ubicar = () => {
      destinations.forEach((destino, i) => {
        const el = marcadoresRef.current[i];
        if (!el) return;
        const { x, y, visible } = proyectar(destino.coords, [LAT, lon]);
        el.style.left = `${50 + x * RADIO_DEL_GLOBO * 50}%`;
        el.style.top = `${50 - y * RADIO_DEL_GLOBO * 50}%`;
        // Del otro lado del planeta no se ve, no se clickea y no se llega con
        // Tab: visibility hidden hace las tres cosas.
        el.style.visibility = visible ? "visible" : "hidden";
      });
    };

    // El tiempo sale del propio requestAnimationFrame: es el mismo reloj que
    // se compara abajo, así que no hace falta suponer un origen común.
    const dibujar = (ahora: number) => {
      arranque ??= ahora;
      const dt = ultimo === null ? 0 : ahora - ultimo;
      ultimo = ahora;

      if (gira()) lon = normalizarLongitud(lon - GRADOS_POR_MS * dt);
      const [phi, theta] = locationToAngles(LAT, lon);
      globe.update({ phi, theta });
      ubicar();

      const sigue =
        enPantalla &&
        (gira() ||
          arrastre !== null ||
          ahora - arranque < DURACION_DE_LA_RAFAGA_MS);

      if (sigue) {
        frame = requestAnimationFrame(dibujar);
      } else {
        frame = 0;
        ultimo = null;
      }
    };

    function arrancar() {
      if (frame === 0 && enPantalla) frame = requestAnimationFrame(dibujar);
    }

    // Solo el mouse pausa al entrar: en pantallas táctiles no hay "encima", y
    // el pointerenter de un toque dejaría el globo quieto hasta tocar afuera.
    const alEntrar = (e: PointerEvent) => {
      if (e.pointerType === "mouse") encima = true;
    };
    const alSalir = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      encima = false;
      arrancar();
    };

    // El foco se va de un marcador a otro sin salir del globo: se sigue
    // girando solo cuando el foco salió del contenedor entero.
    // Solo el foco de teclado: apretar el mouse sobre un marcador también lo
    // enfoca, y si el puntero se va sin soltar el click, el globo quedaba
    // quieto hasta tocar en otro lado. Con el mouse ya manda `encima`.
    const alEntrarFoco = (e: FocusEvent) => {
      if ((e.target as Element).matches(":focus-visible")) conFoco = true;
    };
    const alSalirFoco = (e: FocusEvent) => {
      if (contenedor.contains(e.relatedTarget as Node | null)) return;
      conFoco = false;
      arrancar();
    };

    const alApretar = (e: PointerEvent) => {
      arrastre = { x: e.clientX, lon, id: e.pointerId };
      canvas.setPointerCapture(e.pointerId);
      arrancar();
    };
    const alMover = (e: PointerEvent) => {
      if (arrastre === null || e.pointerId !== arrastre.id) return;
      lon = longitudTrasArrastre(
        arrastre.lon,
        e.clientX - arrastre.x,
        canvas.offsetWidth,
      );
    };
    const alSoltar = (e: PointerEvent) => {
      if (arrastre === null || e.pointerId !== arrastre.id) return;
      arrastre = null;
      arrancar();
    };

    const observador = new IntersectionObserver(([entrada]) => {
      enPantalla = entrada?.isIntersecting ?? true;
      if (enPantalla) arrancar();
    });

    contenedor.addEventListener("pointerenter", alEntrar);
    contenedor.addEventListener("pointerleave", alSalir);
    contenedor.addEventListener("focusin", alEntrarFoco);
    contenedor.addEventListener("focusout", alSalirFoco);
    canvas.addEventListener("pointerdown", alApretar);
    canvas.addEventListener("pointermove", alMover);
    canvas.addEventListener("pointerup", alSoltar);
    canvas.addEventListener("pointercancel", alSoltar);
    quieto.addEventListener("change", arrancar);
    window.addEventListener("resize", medir);
    observador.observe(contenedor);

    arrancar();

    return () => {
      cancelAnimationFrame(frame);
      observador.disconnect();
      contenedor.removeEventListener("pointerenter", alEntrar);
      contenedor.removeEventListener("pointerleave", alSalir);
      contenedor.removeEventListener("focusin", alEntrarFoco);
      contenedor.removeEventListener("focusout", alSalirFoco);
      canvas.removeEventListener("pointerdown", alApretar);
      canvas.removeEventListener("pointermove", alMover);
      canvas.removeEventListener("pointerup", alSoltar);
      canvas.removeEventListener("pointercancel", alSoltar);
      quieto.removeEventListener("change", arrancar);
      window.removeEventListener("resize", medir);
      globe.destroy();
    };
    // Las dependencias son los ángulos y las coordenadas, no el array: un
    // literal nuevo en cada render recrearía el globo en cada render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LAT, LON, JSON.stringify(destinations.map((d) => d.coords))]);

  return (
    <div
      ref={contenedorRef}
      className="relative mx-auto aspect-square w-full max-w-[420px]"
    >
      {/*
        touch-action pan-y: en el teléfono, arrastrar de costado gira el globo
        y arrastrar para arriba o abajo sigue scrolleando la página.
      */}
      <canvas
        ref={canvasRef}
        aria-hidden
        className="size-full cursor-grab touch-pan-y [contain:layout_paint_size] active:cursor-grabbing"
      />

      {/*
        Los marcadores en HTML, encima del canvas: son links de verdad, así que
        funcionan sin JavaScript, se abren en otra pestaña y Next precarga la
        guía al pasar el mouse. El canvas queda como decoración.

        La posición del primer render sale de la misma proyección ortográfica
        que usa cobe, mirando al punto de inicio: es lo que ve quien no tiene
        JavaScript. Después, el efecto los reubica en cada frame.
      */}
      {destinations.map((destino, i) => {
        const { x, y, visible } = proyectar(destino.coords, foco);

        return (
          <Link
            key={destino.href}
            href={destino.href}
            ref={(el) => {
              marcadoresRef.current[i] = el;
            }}
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
              // Del otro lado del planeta no se dibuja: un marcador ahí
              // estaría señalando el océano equivocado.
              visibility: visible ? "visible" : "hidden",
            }}
          >
            {/* Diecinueve puntos latiendo a la vez dejan de señalar nada. */}
            {pocos ? (
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange-400/70" />
            ) : null}
            <span
              className={
                pocos
                  ? "relative inline-flex size-3 rounded-full bg-orange-500 ring-2 ring-white/80"
                  : "relative inline-flex size-2 rounded-full bg-orange-500 ring-1 ring-white/80"
              }
            />

            <span
              className={
                pocos
                  ? "absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium whitespace-nowrap text-white shadow-sm backdrop-blur-sm transition-colors group-hover:bg-white/20"
                  : "pointer-events-none absolute top-full left-1/2 z-10 mt-1 -translate-x-1/2 rounded-full bg-slate-900/90 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
              }
            >
              {destino.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
