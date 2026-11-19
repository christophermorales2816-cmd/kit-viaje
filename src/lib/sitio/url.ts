import type { NextConfig } from "next";

/** Una redirección de next.config, con el tipo público de Next. */
type Redirect = Awaited<
  ReturnType<NonNullable<NextConfig["redirects"]>>
>[number];

/**
 * El dominio público del sitio, para lo que necesita URLs absolutas
 * (sitemap.xml, robots.txt, metadataBase).
 *
 * Vercel expone el dominio de producción del proyecto en
 * VERCEL_PROJECT_PRODUCTION_URL, en todos sus deploys —también en los de
 * preview, que es lo correcto: un sitemap tiene que apuntar a producción—. En
 * local no existe y se devuelve null: mejor un sitemap sin dominio que uno que
 * apunte a localhost.
 */
export function urlDelSitio(
  env: Record<string, string | undefined> = process.env,
): string | null {
  const dominio = env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

  if (!dominio) return null;

  return dominio.startsWith("http") ? dominio : `https://${dominio}`;
}

/**
 * El alias que Vercel le dio al proyecto. Sigue respondiendo aunque haya
 * dominio propio.
 */
export const ALIAS_DE_VERCEL = "kit-viaje.vercel.app";

/**
 * Con dominio propio, el alias de Vercel redirige a él con un 308 (spec,
 * 19.8): si no, Google ve dos copias del mismo sitio y reparte el
 * posicionamiento entre las dos.
 *
 * Se activa sola. Cuando el dominio propio pasa a ser el de producción en
 * Vercel, VERCEL_PROJECT_PRODUCTION_URL cambia en el siguiente deploy y
 * aparece la redirección. Mientras el de producción sea el de Vercel, no hay
 * nada que redirigir. Solo en producción: los previews tienen su propio
 * dominio y tienen que seguir andando.
 */
export function redireccionesAlDominio(
  env: Record<string, string | undefined> = process.env,
): Redirect[] {
  const sitio = urlDelSitio(env);
  if (env.VERCEL_ENV !== "production" || !sitio) return [];

  const dominio = new URL(sitio).host;
  if (dominio === ALIAS_DE_VERCEL || dominio.endsWith(".vercel.app")) return [];

  return [
    {
      source: "/:path*",
      has: [{ type: "host", value: ALIAS_DE_VERCEL }],
      destination: `${sitio}/:path*`,
      permanent: true,
    },
  ];
}
