/**
 * Las guías con sus destinos, en JSON, para herramientas/globo/estados.py.
 *
 * Uso:
 *   npx tsx --tsconfig tsconfig.json herramientas/globo/guias.ts > guias.json
 */
import { allGuides } from "@/content/guias";

const guias = allGuides().map((guia) => ({
  slug: guia.slug,
  places: guia.places.map((place) => ({ coords: place.coords })),
}));

process.stdout.write(JSON.stringify(guias));
