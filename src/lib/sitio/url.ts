/**
 * El dominio público del sitio, para lo que necesita URLs absolutas
 * (sitemap.xml, robots.txt).
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
