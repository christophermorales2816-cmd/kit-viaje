/**
 * Headers HTTP de seguridad, para todas las respuestas (los aplica next.config.ts).
 *
 * POR QUÉ ESTO EXISTE
 *
 * La app no tenía ninguno. Lo más grave era el clickjacking: sin
 * `frame-ancestors`, cualquier sitio podía meter `/viaje/{edit_token}` en un
 * iframe invisible y hacer que el dueño del viaje tocara botones sin saberlo.
 * El resto —CSP, nosniff, referrer— cierra puertas que hoy nadie está usando,
 * que es exactamente cuando conviene cerrarlas.
 *
 * LA CSP ES SIN NONCES, A PROPÓSITO
 *
 * Una CSP con nonce obliga a renderizar cada página por request (lo dice la
 * guía de Next 16): las guías dejarían de ser estáticas y la portada también.
 * Para una app sin login, sin datos de pago y sin HTML que escriba el usuario,
 * el costo no se justifica. `'unsafe-inline'` en scripts es lo que Next
 * necesita para sus scripts de arranque; lo que la CSP sí garantiza es que no
 * se carga código de ningún dominio que no esté en esta lista, que no se puede
 * embeber la página y que ningún formulario manda datos a otro sitio.
 *
 * Si mañana se suma un servicio externo (un mapa, una fuente, un script), va
 * acá: si no, el navegador lo bloquea y la consola dice cuál directiva lo frenó.
 */

export type Entorno = "development" | "preview" | "production";

interface Header {
  key: string;
  value: string;
}

/** Los mosaicos del mapa de cada guía (src/components/guia/places-map.tsx). */
const MOSAICOS_DEL_MAPA = "https://*.basemaps.cartocdn.com";

/**
 * Vercel Web Analytics carga su script desde el mismo dominio en producción
 * (`/_vercel/insights/script.js`); el de depuración viene de acá.
 */
const ANALYTICS = "https://va.vercel-scripts.com";

/**
 * La barra de comentarios de Vercel solo aparece en los deploys de preview.
 * Sus dominios entran únicamente ahí: producción no los necesita.
 */
const BARRA_DE_PREVIEW = {
  script: ["https://vercel.live"],
  style: ["https://vercel.live"],
  img: ["https://vercel.live", "https://vercel.com"],
  font: ["https://vercel.live", "https://assets.vercel.com"],
  connect: ["https://vercel.live", "wss://ws-us3.pusher.com"],
  frame: ["https://vercel.live"],
};

export function contentSecurityPolicy(entorno: Entorno): string {
  const preview = entorno === "preview";
  const extra = (lista: string[]) => (preview ? lista : []);

  const directivas: [string, string[]][] = [
    ["default-src", ["'self'"]],
    [
      "script-src",
      [
        "'self'",
        "'unsafe-inline'",
        // React usa eval en desarrollo para reconstruir los stacks de error;
        // en producción no lo usa nadie.
        ...(entorno === "development" ? ["'unsafe-eval'"] : []),
        ANALYTICS,
        ...extra(BARRA_DE_PREVIEW.script),
      ],
    ],
    // Leaflet y React escriben estilos inline: sin esto el mapa se desarma.
    [
      "style-src",
      ["'self'", "'unsafe-inline'", ...extra(BARRA_DE_PREVIEW.style)],
    ],
    [
      "img-src",
      [
        "'self'",
        "data:",
        "blob:",
        MOSAICOS_DEL_MAPA,
        ...extra(BARRA_DE_PREVIEW.img),
      ],
    ],
    // next/font sirve las fuentes desde el propio dominio.
    ["font-src", ["'self'", ...extra(BARRA_DE_PREVIEW.font)]],
    // Las Server Actions y analytics van al mismo dominio; Supabase y las
    // cotizaciones se consultan desde el servidor, nunca desde el navegador.
    ["connect-src", ["'self'", ...extra(BARRA_DE_PREVIEW.connect)]],
    ["frame-src", preview ? BARRA_DE_PREVIEW.frame : ["'none'"]],
    ["worker-src", ["'self'", "blob:"]],
    ["object-src", ["'none'"]],
    ["base-uri", ["'self'"]],
    ["form-action", ["'self'"]],
    ["frame-ancestors", ["'none'"]],
  ];

  const politica = directivas.map(
    ([nombre, valores]) => `${nombre} ${valores.join(" ")}`,
  );

  // Fuera de desarrollo todo va por https. En local, `next start` sirve por
  // http y esta directiva rompería los propios assets.
  if (entorno !== "development") politica.push("upgrade-insecure-requests");

  return politica.join("; ");
}

export function securityHeaders(entorno: Entorno): Header[] {
  return [
    { key: "Content-Security-Policy", value: contentSecurityPolicy(entorno) },
    // Redundante con frame-ancestors para navegadores modernos; los viejos
    // solo entienden este.
    { key: "X-Frame-Options", value: "DENY" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains",
    },
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  ];
}

/**
 * Extra para las páginas de un viaje.
 *
 * `/viaje/{edit_token}` lleva la llave de edición en la URL. Con
 * `no-referrer` el navegador no la manda a ningún lado al seguir un link, y
 * `noindex` es la segunda capa detrás del `robots` de la página, por si un
 * buscador llega por un link compartido.
 */
export const VIAJE_HEADERS: Header[] = [
  { key: "Referrer-Policy", value: "no-referrer" },
  { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
];

/** Qué entorno es este build, con los nombres de Vercel. */
export function entornoActual(
  env: Record<string, string | undefined>,
): Entorno {
  if (env.NODE_ENV === "development") return "development";

  return env.VERCEL_ENV === "preview" ? "preview" : "production";
}
