"use client";

import createGlobe from "cobe";
import { ArrowRight, Minus, Plus, RotateCcw, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import {
  colocarEtiquetas,
  masCercano,
  vecinosCercanos,
  type Lado,
} from "@/lib/globo/etiquetas";
import {
  ESCALA_MAXIMA,
  ESCALA_MINIMA,
  LATITUD_MAXIMA,
  RADIO_DE_LA_ESFERA,
  acotar,
  aPixeles,
  angulosDeCobe,
  centroConDestinoArriba,
  centroTrasZoom,
  desproyectar,
  muestrasDelMapa,
  normalizarLongitud,
  proyectar,
  suavizar,
  vistaIntermedia,
  vistaTrasArrastre,
  type Coordenadas,
  type Vista,
} from "@/lib/globo/geometria";
import { cn } from "@/lib/utils";

/**
 * El globo de la portada (spec, 14.9 y 19.5).
 *
 * Con 165 destinos, el globo que solo giraba tenía un problema: "es muy
 * difícil saber dónde clico". Los puntos eran chicos, estaban amontonados y
 * los nombres aparecían recién al pasar el mouse por cada uno. Ahora:
 *
 *   - Se acerca: con los botones, con Ctrl (⌘ en Mac) + rueda o el pellizco
 *     del trackpad, con doble click y con dos dedos en el teléfono. La rueda
 *     sola sigue scrolleando la página —el globo ocupa medio hero, y robarle
 *     la rueda a la página es de lo que más molesta en un sitio—, y si alguien
 *     la usa sobre el globo, un cartel le dice cómo acercar.
 *   - Tiene nombres: los que entran sin pisarse, y más al acercar
 *     (src/lib/globo/etiquetas.ts).
 *   - Para elegir no hace falta acertarle al punto: se elige el más cercano a
 *     donde tocaste, con más margen para el dedo que para el mouse.
 *   - Elegir no navega de una: el globo vuela hasta el país, lo acerca y
 *     muestra una tarjeta con su nombre y "Ver la guía". Así se ve qué se
 *     eligió antes de ir. Si otro destino está tan cerca que ningún zoom lo
 *     separa —Zambia y Zimbabue comparten las cataratas Victoria—, la tarjeta
 *     lo ofrece al lado: "Muy cerca".
 *   - Se arrastra en las dos direcciones, para llegar al norte de Europa o al
 *     sur de África cuando está acercado.
 *   - Gira solo al principio, para mostrar que es un globo, y deja de girar
 *     para siempre apenas lo tocás. Con prefers-reduced-motion no gira ni
 *     vuela: salta.
 *
 * Los puntos son HTML encima del canvas y se reubican en cada frame con la
 * misma proyección que usa cobe (src/lib/globo/geometria.ts). Son enlaces a
 * cada guía: sin JavaScript, funcionan igual. Con JavaScript los eventos los
 * maneja el globo entero, y por eso los puntos no reciben el mouse. Para el
 * teclado y el lector de pantalla está el buscador, que llega a cualquier
 * destino sin depender de qué lado del planeta se ve.
 */

export interface GlobeDestination {
  href: string;
  /** El nombre del destino. */
  label: string;
  /** [latitud, longitud] en grados decimales. */
  coords: Coordenadas;
  /** La zona, para la tarjeta: "Sudamérica". */
  zona: string;
  /** Una línea de la guía, para la tarjeta. */
  detalle: string;
}

/** Velocidad del giro del principio: una vuelta por minuto. */
const GRADOS_POR_MS = 360 / 60_000;

/**
 * cobe 2.0.1 no tiene bucle propio: dibuja cuando se le pide, y el mapa de
 * puntos aparece recién después de varios frames. Por eso, al arrancar, una
 * ráfaga corta de frames aunque el globo esté quieto (spec, 14.9).
 */
const DURACION_DE_LA_RAFAGA_MS = 1200;

const DURACION_DEL_VUELO_MS = 900;

/** Cuánto acerca un click en los botones o un doble click. */
const PASO_DE_ZOOM = 1.6;

/** Lo mínimo que se acerca el globo al elegir un destino. */
const ESCALA_AL_ELEGIR = 2.2;

/**
 * Dónde queda el destino elegido: sobre el centro, a esta fracción de la
 * mitad del globo, para que la tarjeta de abajo no lo tape.
 */
const ALTURA_DEL_ELEGIDO = 0.35;

/** Lo mínimo que se acerca cuando el buscador resalta un destino. */
const ESCALA_AL_BUSCAR = 1.8;

/** Hasta dónde puede caer un toque del punto para elegirlo, en píxeles. */
const ALCANCE_DEL_MOUSE = 16;
const ALCANCE_DEL_DEDO = 26;

/** Lo que tiene que moverse un toque para ser un arrastre y no un click. */
const UMBRAL_DE_ARRASTRE = 5;

function esMac(): boolean {
  return /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
}

interface Control {
  volarA: (vista: Vista) => void;
  resaltar: (i: number | null) => void;
  elegir: (i: number | null) => void;
  escala: () => number;
  acercar: (factor: number) => void;
  reiniciar: () => void;
}

export function GlobeHero({
  destinations,
  inicio,
  destacado = null,
}: {
  destinations: GlobeDestination[];
  /** [latitud, longitud] adonde mira el globo al cargar. */
  inicio: Coordenadas;
  /** El destino que resalta el buscador: el globo vuela hasta él. */
  destacado?: number | null;
}) {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const marcadoresRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const etiquetasRef = useRef<(HTMLSpanElement | null)[]>([]);
  // Lo que los botones y el buscador le piden al globo, que vive en el efecto.
  const controlRef = useRef<Control | null>(null);

  const [elegido, setElegido] = useState<number | null>(null);
  const [escala, setEscala] = useState(ESCALA_MINIMA);
  const [pista, setPista] = useState<string | null>(null);

  const [LAT, LON] = inicio;

  // Los destinos que ningún zoom separa del elegido: la tarjeta los ofrece.
  const vecinos = useMemo(
    () => vecinosCercanos(destinations.map((destino) => destino.coords)),
    [destinations],
  );

  useEffect(() => {
    const contenedor = contenedorRef.current;
    const marco = contenedor?.parentElement;
    const canvas = canvasRef.current;
    if (!contenedor || !marco || !canvas) return;

    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lado = () => contenedor.clientWidth;

    const vista: Vista = { lat: LAT, lon: LON, escala: ESCALA_MINIMA };
    let muestras = muestrasDelMapa(vista.escala);

    const [phi0, theta0] = angulosDeCobe(LAT, LON);
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      // Sin esto el canvas queda en blanco cuando el globo deja de dibujar: el
      // compositor se lleva el contenido (spec, 14.9).
      context: { preserveDrawingBuffer: true },
      width: lado() * 2,
      height: lado() * 2,
      phi: phi0,
      theta: theta0,
      scale: vista.escala,
      dark: 1,
      diffuse: 1.2,
      mapSamples: muestras,
      mapBrightness: 6,
      baseColor: [0.32, 0.36, 0.42],
      markerColor: [0.99, 0.53, 0.16],
      glowColor: [0.42, 0.5, 0.6],
      // Los puntos de los destinos son HTML: los de cobe flotan sobre la
      // superficie y en el borde se veían como manchas afuera del disco.
      markers: [],
    });

    // Lo que cambia mientras se usa el globo.
    let tocado = false; // deja de girar para siempre
    let encima = false;
    let conFoco = false;
    let enPantalla = true;
    let resaltado: number | null = null;
    let elegidoAhora: number | null = null;
    let vuelo: { desde: Vista; hasta: Vista; inicio: number | null } | null =
      null;
    let frame = 0;
    let ultimo: number | null = null;
    let arranque: number | null = null;
    let escalaAvisada = vista.escala;

    // Los toques en curso: uno arrastra, dos pellizcan.
    const punteros = new Map<number, { x: number; y: number }>();
    let arrastre: {
      x: number;
      y: number;
      vista: Vista;
      movido: boolean;
      tipo: string;
    } | null = null;
    let pellizco: { distancia: number; escala: number } | null = null;
    let ultimoToque: { t: number; x: number; y: number } | null = null;

    // Dónde quedó cada punto en el último dibujo, en píxeles del contenedor.
    const posiciones = destinations.map(() => ({ x: 0, y: 0, visible: false }));
    const anchos = destinations.map(() => 0);
    let altoDeEtiqueta = 20;
    let etiquetas = new Map<number, Lado>();
    // Lo que ya está escrito en el DOM, para no reescribirlo igual. Arranca
    // vacío: el primer dibujo escribe todo.
    const escrito = destinations.map(() => ({
      x: "",
      y: "",
      visible: null as boolean | null,
      lado: null as Lado | "" | null,
      estado: null as string | null,
    }));

    const medirEtiquetas = () => {
      etiquetasRef.current.forEach((el, i) => {
        if (!el) return;
        anchos[i] = el.offsetWidth;
        altoDeEtiqueta = el.offsetHeight || altoDeEtiqueta;
      });
    };

    const gira = () =>
      !quieto.matches &&
      !tocado &&
      !encima &&
      !conFoco &&
      arrastre === null &&
      vuelo === null &&
      elegidoAhora === null;

    /** Ubica los puntos y elige los nombres para la vista de ahora. */
    const pintar = () => {
      const l = lado();
      const r = l / 2;
      const centro: Coordenadas = [vista.lat, vista.lon];
      const [phi, theta] = angulosDeCobe(vista.lat, vista.lon);
      const nuevasMuestras = muestrasDelMapa(vista.escala);

      globe.update({
        phi,
        theta,
        scale: vista.escala,
        ...(nuevasMuestras !== muestras ? { mapSamples: nuevasMuestras } : {}),
      });
      muestras = nuevasMuestras;

      // El círculo en el que se ve el globo: con zoom, lo que cae afuera no
      // se dibuja.
      const radioVisible = r - 4;

      destinations.forEach((destino, i) => {
        const p = proyectar(destino.coords, centro);
        const { px, py } = aPixeles(p.x, p.y, l, vista.escala);
        const pos = posiciones[i];
        pos.x = r + px;
        pos.y = r + py;
        pos.visible =
          p.visible && px * px + py * py <= radioVisible * radioVisible;
      });

      const visibles = posiciones
        .map((pos, i) => ({ i, ...pos }))
        .filter((pos) => pos.visible);

      etiquetas = colocarEtiquetas(
        visibles.map(({ i, x, y }) => ({
          i,
          x,
          y,
          ancho: anchos[i],
          alto: altoDeEtiqueta,
          prioridad:
            i === elegidoAhora
              ? 1e9
              : i === resaltado
                ? 1e8
                : // Los que ya se veían siguen, para que no titilen al girar.
                  (etiquetas.has(i) ? 400 : 0) - Math.hypot(x - r, y - r),
        })),
        visibles.map(({ i, x, y }) => ({ i, x, y, radio: 5 })),
        { cx: r, cy: r, radio: r - 2 },
      );

      destinations.forEach((_, i) => {
        const el = marcadoresRef.current[i];
        const etiqueta = etiquetasRef.current[i];
        if (!el || !etiqueta) return;

        const pos = posiciones[i];
        const antes = escrito[i];
        const x = `${pos.x.toFixed(1)}px`;
        const y = `${pos.y.toFixed(1)}px`;

        if (x !== antes.x || y !== antes.y) {
          el.style.left = x;
          el.style.top = y;
          antes.x = x;
          antes.y = y;
        }

        if (pos.visible !== antes.visible) {
          el.style.visibility = pos.visible ? "visible" : "hidden";
          antes.visible = pos.visible;
        }

        const lado = etiquetas.get(i) ?? "";
        if (lado !== antes.lado) {
          if (lado) etiqueta.dataset.lado = lado;
          etiqueta.dataset.visible = lado ? "true" : "false";
          antes.lado = lado;
        }

        const estado =
          i === elegidoAhora ? "elegido" : i === resaltado ? "encima" : "";
        if (estado !== antes.estado) {
          el.dataset.estado = estado;
          antes.estado = estado;
        }
      });

      // Los botones de zoom dependen de la escala: se avisa a React solo
      // cuando cambia de verdad, no en cada frame.
      if (Math.abs(vista.escala - escalaAvisada) > 0.01) {
        escalaAvisada = vista.escala;
        setEscala(vista.escala);
      }
    };

    const dibujar = (ahora: number) => {
      arranque ??= ahora;
      const dt = ultimo === null ? 0 : ahora - ultimo;
      ultimo = ahora;

      if (vuelo) {
        vuelo.inicio ??= ahora;
        const t = Math.min(1, (ahora - vuelo.inicio) / DURACION_DEL_VUELO_MS);
        Object.assign(
          vista,
          vistaIntermedia(vuelo.desde, vuelo.hasta, suavizar(t)),
        );
        if (t >= 1) {
          vuelo = null;
          aplicarTouchAction();
        }
      } else if (gira()) {
        vista.lon = normalizarLongitud(vista.lon - GRADOS_POR_MS * dt);
      }

      pintar();

      const sigue =
        enPantalla &&
        (vuelo !== null ||
          gira() ||
          arrastre !== null ||
          pellizco !== null ||
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

    /** Pinta ya si el bucle está parado; si no, lo pinta el próximo frame. */
    const repintar = () => {
      if (frame === 0) pintar();
    };

    // Sin zoom, en el teléfono el dedo vertical scrollea la página y el
    // horizontal gira el globo. Con zoom, el globo se queda con todos los
    // gestos: hay que poder moverse hacia el norte o el sur.
    function aplicarTouchAction() {
      contenedor!.style.touchAction = vista.escala > 1.05 ? "none" : "pan-y";
    }

    const volarA = (hasta: Vista) => {
      tocado = true;
      const destino: Vista = {
        lat: acotar(hasta.lat, -LATITUD_MAXIMA, LATITUD_MAXIMA),
        lon: normalizarLongitud(hasta.lon),
        escala: acotar(hasta.escala, ESCALA_MINIMA, ESCALA_MAXIMA),
      };

      if (quieto.matches) {
        vuelo = null;
        Object.assign(vista, destino);
        aplicarTouchAction();
        arranque = null;
        arrancar();
        return;
      }

      vuelo = { desde: { ...vista }, hasta: destino, inicio: null };
      arrancar();
    };

    /** Acerca o aleja manteniendo quieto el punto de la pantalla (px, py). */
    const acercarEn = (
      px: number,
      py: number,
      factor: number,
      animado: boolean,
    ) => {
      tocado = true;
      const l = lado();
      const radio = (l / 2) * RADIO_DE_LA_ESFERA * vista.escala;
      const nueva = acotar(vista.escala * factor, ESCALA_MINIMA, ESCALA_MAXIMA);
      const centro: Coordenadas = [vista.lat, vista.lon];
      const bajo = desproyectar(
        (px - l / 2) / radio,
        -(py - l / 2) / radio,
        centro,
      );
      const [lat, lon] = bajo
        ? centroTrasZoom(centro, bajo, vista.escala, nueva)
        : centro;

      if (animado) {
        volarA({ lat, lon, escala: nueva });
        return;
      }

      vuelo = null;
      Object.assign(vista, { lat, lon, escala: nueva });
      aplicarTouchAction();
      repintar();
    };

    const resaltar = (i: number | null) => {
      resaltado = i;
      contenedor.style.cursor = i === null ? "" : "pointer";
      repintar();
    };

    const elegir = (i: number | null) => {
      elegidoAhora = i;
      setElegido(i);

      if (i === null) {
        repintar();
        return;
      }

      const escala = Math.max(vista.escala, ESCALA_AL_ELEGIR);
      const [lat, lon] = centroConDestinoArriba(
        destinations[i].coords,
        ALTURA_DEL_ELEGIDO / (RADIO_DE_LA_ESFERA * escala),
      );
      volarA({ lat, lon, escala });
    };

    controlRef.current = {
      volarA,
      resaltar,
      elegir,
      escala: () => vista.escala,
      acercar: (factor) => acercarEn(lado() / 2, lado() / 2, factor, true),
      reiniciar: () => {
        elegir(null);
        volarA({ lat: LAT, lon: LON, escala: ESCALA_MINIMA });
      },
    };

    const posicionEn = (e: { clientX: number; clientY: number }) => {
      const caja = contenedor.getBoundingClientRect();
      return { x: e.clientX - caja.left, y: e.clientY - caja.top };
    };

    const puntoBajo = (x: number, y: number, alcance: number) =>
      masCercano(
        posiciones.map((pos, i) => ({ i, ...pos })).filter((p) => p.visible),
        x,
        y,
        alcance,
      );

    // EL MOUSE Y LOS DEDOS

    const alEntrar = (e: PointerEvent) => {
      if (e.pointerType === "mouse") encima = true;
    };
    const alSalir = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      encima = false;
      if (arrastre === null) resaltar(null);
      arrancar();
    };

    const alApretar = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      const { x, y } = posicionEn(e);
      punteros.set(e.pointerId, { x, y });
      contenedor.setPointerCapture(e.pointerId);

      if (punteros.size === 2) {
        const [a, b] = [...punteros.values()];
        pellizco = {
          distancia: Math.hypot(a.x - b.x, a.y - b.y),
          escala: vista.escala,
        };
        arrastre = null;
        vuelo = null;
        tocado = true;
        arrancar();
        return;
      }

      arrastre = {
        x,
        y,
        vista: { ...vista },
        movido: false,
        tipo: e.pointerType,
      };
    };

    const alMover = (e: PointerEvent) => {
      const { x, y } = posicionEn(e);
      if (punteros.has(e.pointerId)) punteros.set(e.pointerId, { x, y });

      if (pellizco && punteros.size === 2) {
        const [a, b] = [...punteros.values()];
        const distancia = Math.hypot(a.x - b.x, a.y - b.y);
        if (pellizco.distancia > 0) {
          const objetivo = (pellizco.escala * distancia) / pellizco.distancia;
          acercarEn(
            (a.x + b.x) / 2,
            (a.y + b.y) / 2,
            objetivo / vista.escala,
            false,
          );
        }
        return;
      }

      if (arrastre) {
        const dx = x - arrastre.x;
        const dy = y - arrastre.y;

        if (!arrastre.movido) {
          if (Math.hypot(dx, dy) < UMBRAL_DE_ARRASTRE) return;
          arrastre.movido = true;
          tocado = true;
          vuelo = null;
          contenedor.dataset.arrastrando = "true";
          resaltar(null);
          arrancar();
        }

        Object.assign(vista, vistaTrasArrastre(arrastre.vista, dx, dy, lado()));
        return;
      }

      // Sin apretar: el punto más cercano al mouse se resalta y muestra su
      // nombre, aunque no estés exactamente encima.
      if (e.pointerType === "mouse") {
        const i = puntoBajo(x, y, ALCANCE_DEL_MOUSE);
        if (i !== resaltado) resaltar(i);
      }
    };

    const alSoltar = (e: PointerEvent) => {
      punteros.delete(e.pointerId);

      if (pellizco) {
        if (punteros.size < 2) pellizco = null;
        // Si queda un dedo apoyado, no arranca un arrastre con un salto.
        arrastre = null;
        aplicarTouchAction();
        return;
      }

      if (!arrastre) return;
      const fue = arrastre;
      arrastre = null;
      delete contenedor.dataset.arrastrando;
      aplicarTouchAction();

      if (e.type === "pointercancel" || fue.movido) {
        arrancar();
        return;
      }

      // Fue un toque.
      const { x, y } = posicionEn(e);
      const ahora = performance.now();

      // Doble toque con el dedo: acercar ahí. Con el mouse lo hace dblclick.
      if (
        fue.tipo !== "mouse" &&
        ultimoToque &&
        ahora - ultimoToque.t < 320 &&
        Math.hypot(x - ultimoToque.x, y - ultimoToque.y) < 30
      ) {
        ultimoToque = null;
        acercarEn(x, y, PASO_DE_ZOOM, true);
        return;
      }
      ultimoToque = { t: ahora, x, y };

      const i = puntoBajo(
        x,
        y,
        fue.tipo === "mouse" ? ALCANCE_DEL_MOUSE : ALCANCE_DEL_DEDO,
      );
      if (i !== null) elegir(i);
    };

    const alDobleClick = (e: MouseEvent) => {
      const { x, y } = posicionEn(e);
      acercarEn(x, y, PASO_DE_ZOOM, true);
    };

    // La rueda sola es de la página. Con Ctrl o ⌘ —y el pellizco del
    // trackpad, que el navegador manda como rueda con Ctrl— acerca.
    let avisoDeRueda = 0;
    const alRodar = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const { x, y } = posicionEn(e);
        acercarEn(x, y, Math.exp(-e.deltaY * 0.0025), false);
        return;
      }

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        window.clearTimeout(avisoDeRueda);
        setPista(
          esMac()
            ? "Para acercar, usá ⌘ + rueda o los botones"
            : "Para acercar, usá Ctrl + rueda o los botones",
        );
        avisoDeRueda = window.setTimeout(() => setPista(null), 1600);
      }
    };

    // Safari manda el pellizco del trackpad como "gesture", no como rueda.
    let escalaDelGesto = 1;
    const alEmpezarGesto = (e: Event) => {
      e.preventDefault();
      escalaDelGesto = vista.escala;
    };
    const alGesto = (e: Event) => {
      e.preventDefault();
      const { scale } = e as Event & { scale: number };
      acercarEn(
        lado() / 2,
        lado() / 2,
        (escalaDelGesto * scale) / vista.escala,
        false,
      );
    };

    // El foco con Tab en los botones del globo lo deja quieto.
    const alEntrarFoco = (e: FocusEvent) => {
      if ((e.target as Element).matches(":focus-visible")) conFoco = true;
    };
    const alSalirFoco = (e: FocusEvent) => {
      if (marco.contains(e.relatedTarget as Node | null)) return;
      conFoco = false;
      arrancar();
    };

    const medir = () => {
      globe.update({ width: lado() * 2, height: lado() * 2 });
      medirEtiquetas();
      arranque = null;
      arrancar();
    };

    const observador = new IntersectionObserver(([entrada]) => {
      enPantalla = entrada?.isIntersecting ?? true;
      if (enPantalla) arrancar();
    });

    contenedor.dataset.interactivo = "true";
    aplicarTouchAction();
    medirEtiquetas();
    // Las etiquetas se miden con la fuente que corresponde, no con la de
    // reemplazo que se ve mientras carga.
    document.fonts?.ready.then(() => {
      medirEtiquetas();
      repintar();
    });

    contenedor.addEventListener("pointerenter", alEntrar);
    contenedor.addEventListener("pointerleave", alSalir);
    contenedor.addEventListener("pointerdown", alApretar);
    contenedor.addEventListener("pointermove", alMover);
    contenedor.addEventListener("pointerup", alSoltar);
    contenedor.addEventListener("pointercancel", alSoltar);
    contenedor.addEventListener("dblclick", alDobleClick);
    contenedor.addEventListener("wheel", alRodar, { passive: false });
    contenedor.addEventListener("gesturestart", alEmpezarGesto);
    contenedor.addEventListener("gesturechange", alGesto);
    marco.addEventListener("focusin", alEntrarFoco);
    marco.addEventListener("focusout", alSalirFoco);
    quieto.addEventListener("change", arrancar);
    window.addEventListener("resize", medir);
    observador.observe(contenedor);

    arrancar();

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(avisoDeRueda);
      observador.disconnect();
      contenedor.removeEventListener("pointerenter", alEntrar);
      contenedor.removeEventListener("pointerleave", alSalir);
      contenedor.removeEventListener("pointerdown", alApretar);
      contenedor.removeEventListener("pointermove", alMover);
      contenedor.removeEventListener("pointerup", alSoltar);
      contenedor.removeEventListener("pointercancel", alSoltar);
      contenedor.removeEventListener("dblclick", alDobleClick);
      contenedor.removeEventListener("wheel", alRodar);
      contenedor.removeEventListener("gesturestart", alEmpezarGesto);
      contenedor.removeEventListener("gesturechange", alGesto);
      marco.removeEventListener("focusin", alEntrarFoco);
      marco.removeEventListener("focusout", alSalirFoco);
      quieto.removeEventListener("change", arrancar);
      window.removeEventListener("resize", medir);
      controlRef.current = null;
      globe.destroy();
    };
    // Las dependencias son el punto de inicio y las coordenadas, no el array:
    // un literal nuevo en cada render recrearía el globo en cada render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LAT, LON, JSON.stringify(destinations.map((d) => d.coords))]);

  // El buscador resalta un destino: el globo vuela hasta él y le muestra el
  // nombre, sin elegirlo.
  useEffect(() => {
    const control = controlRef.current;
    if (!control) return;

    control.resaltar(destacado);
    if (destacado !== null) {
      // Lo que se busca reemplaza a lo elegido: la tarjeta de otro país,
      // abierta mientras el globo vuela a este, confunde.
      control.elegir(null);
      const [lat, lon] = destinations[destacado].coords;
      control.volarA({
        lat,
        lon,
        escala: Math.max(control.escala(), ESCALA_AL_BUSCAR),
      });
    }
    // Solo cuando cambia el destacado.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destacado]);

  const elegida = elegido === null ? null : destinations[elegido];
  const cercaDeLaElegida = elegido === null ? [] : vecinos[elegido];
  const enInicio = escala <= ESCALA_MINIMA + 0.01 && elegido === null;

  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div
        ref={contenedorRef}
        role="group"
        aria-label="Globo con los destinos"
        className="group/globo relative aspect-square w-full cursor-grab touch-pan-y select-none data-[arrastrando]:cursor-grabbing"
      >
        {/*
          El canvas se recorta en círculo: con zoom, la esfera es más grande
          que el canvas y sin el recorte se vería cortada en cuadrado.
        */}
        <canvas
          ref={canvasRef}
          aria-hidden
          className="size-full rounded-full [contain:layout_paint_size]"
        />

        {/*
          Los puntos. Sin JavaScript son enlaces que se pueden clickear; con
          JavaScript el globo maneja el mouse y los dedos, y los puntos solo
          se dibujan. La posición del primer render es la que ve quien no
          tiene JavaScript; después, el globo los mueve en cada frame.
        */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {destinations.map((destino, i) => {
            const p = proyectar(destino.coords, inicio);
            const r = 50 * RADIO_DE_LA_ESFERA;

            return (
              <Link
                key={destino.href}
                href={destino.href}
                tabIndex={-1}
                prefetch={false}
                ref={(el) => {
                  marcadoresRef.current[i] = el;
                }}
                className="group/punto pointer-events-auto absolute flex size-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center group-data-[interactivo]/globo:pointer-events-none"
                style={{
                  left: `${(50 + p.x * r).toFixed(2)}%`,
                  top: `${(50 - p.y * r).toFixed(2)}%`,
                  visibility: p.visible ? "visible" : "hidden",
                }}
              >
                <span className="relative inline-flex size-2 rounded-full bg-orange-500 ring-1 ring-white/80 transition-[width,height,box-shadow] duration-150 group-data-[estado=elegido]/punto:size-3.5 group-data-[estado=elegido]/punto:shadow-[0_0_0_6px_rgba(249,115,22,0.35)] group-data-[estado=elegido]/punto:ring-2 group-data-[estado=elegido]/punto:ring-white group-data-[estado=encima]/punto:size-3 group-data-[estado=encima]/punto:ring-2 group-data-[estado=encima]/punto:ring-white" />

                <span
                  ref={(el) => {
                    etiquetasRef.current[i] = el;
                  }}
                  data-visible="false"
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-md bg-slate-950/75 px-1.5 py-0.5 text-[11px] leading-4 font-medium whitespace-nowrap text-white opacity-0 shadow-sm transition-opacity duration-200 group-data-[estado=elegido]/punto:bg-orange-500 group-data-[estado=encima]/punto:bg-white group-data-[estado=encima]/punto:text-slate-950 data-[lado=derecha]:left-[calc(50%+7px)] data-[lado=izquierda]:right-[calc(50%+7px)] data-[visible=true]:opacity-100"
                >
                  {destino.label}
                </span>
              </Link>
            );
          })}
        </div>

        {pista ? (
          <p
            role="status"
            className="pointer-events-none absolute inset-x-8 top-1/2 -translate-y-1/2 rounded-lg bg-slate-950/85 px-3 py-2 text-center text-sm font-medium text-white shadow-lg"
          >
            {pista}
          </p>
        ) : null}
      </div>

      <div className="absolute top-2 right-0 flex flex-col gap-1.5">
        <BotonDelGlobo
          etiqueta="Acercar"
          deshabilitado={escala >= ESCALA_MAXIMA - 0.01}
          alClick={() => controlRef.current?.acercar(PASO_DE_ZOOM)}
        >
          <Plus aria-hidden className="size-4" />
        </BotonDelGlobo>
        <BotonDelGlobo
          etiqueta="Alejar"
          deshabilitado={escala <= ESCALA_MINIMA + 0.01}
          alClick={() => controlRef.current?.acercar(1 / PASO_DE_ZOOM)}
        >
          <Minus aria-hidden className="size-4" />
        </BotonDelGlobo>
        <BotonDelGlobo
          etiqueta="Ver el globo entero"
          deshabilitado={enInicio}
          alClick={() => controlRef.current?.reiniciar()}
        >
          <RotateCcw aria-hidden className="size-4" />
        </BotonDelGlobo>
      </div>

      {/*
        El destino elegido, con la puerta a su guía. Se anuncia al lector de
        pantalla cuando cambia.
      */}
      <div
        aria-live="polite"
        className="pointer-events-none absolute inset-x-0 bottom-1 flex justify-center px-2"
      >
        {elegida ? (
          <div
            key={elegida.href}
            className="animate-in fade-in-0 slide-in-from-bottom-2 pointer-events-auto relative flex w-full max-w-72 flex-col gap-1.5 rounded-xl bg-white p-4 text-slate-950 shadow-2xl"
          >
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => controlRef.current?.elegir(null)}
              className="absolute top-2 right-2 inline-flex size-7 items-center justify-center rounded-full text-slate-500 outline-none hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-[3px] focus-visible:ring-orange-400/60"
            >
              <X aria-hidden className="size-4" />
            </button>
            <p className="text-xs font-semibold tracking-wide text-orange-600 uppercase">
              {elegida.zona}
            </p>
            <p className="pr-6 text-lg leading-tight font-semibold">
              {elegida.label}
            </p>
            <p className="text-sm text-pretty text-slate-600">
              {elegida.detalle}
            </p>
            {cercaDeLaElegida.length > 0 ? (
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                <span className="text-xs text-slate-500">Muy cerca:</span>
                {cercaDeLaElegida.map((j) => (
                  <button
                    key={destinations[j].href}
                    type="button"
                    onClick={() => controlRef.current?.elegir(j)}
                    className="inline-flex h-7 items-center rounded-full border border-slate-200 px-2.5 text-xs font-medium text-slate-800 transition-colors outline-none hover:border-orange-300 hover:bg-orange-50 focus-visible:ring-[3px] focus-visible:ring-orange-400/60"
                  >
                    {destinations[j].label}
                  </button>
                ))}
              </div>
            ) : null}
            <Link
              href={elegida.href}
              className="mt-1.5 inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-colors outline-none hover:bg-slate-800 focus-visible:ring-[3px] focus-visible:ring-orange-400/60"
            >
              Ver la guía
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function BotonDelGlobo({
  etiqueta,
  deshabilitado,
  alClick,
  children,
}: {
  etiqueta: string;
  deshabilitado: boolean;
  alClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={etiqueta}
      title={etiqueta}
      disabled={deshabilitado}
      onClick={alClick}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full border border-white/25 bg-slate-950/55 text-white shadow-md backdrop-blur-md transition-colors outline-none",
        "hover:bg-slate-950/80 focus-visible:ring-[3px] focus-visible:ring-orange-400/70",
        "disabled:cursor-not-allowed disabled:opacity-40",
      )}
    >
      {children}
    </button>
  );
}
