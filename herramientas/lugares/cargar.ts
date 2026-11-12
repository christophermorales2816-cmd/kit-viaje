/**
 * Carga en la base los lugares de un país, sacados de su extracto de
 * OpenStreetMap ya filtrado y exportado por osmium (spec, 18.10). Lo corre
 * procesar.sh, una vez por país.
 *
 *   npx tsx herramientas/lugares/cargar.ts --pais japon \
 *     --geojson japon.geojsonseq --datos-del 2026-11-10T20:21:02Z
 *
 * Escribe en la base con SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY. Con
 * --salida archivo.json, en cambio, deja las filas en ese archivo y no toca
 * ninguna base: para probar. --aceptar-menos carga aunque traiga mucho menos
 * que la vez anterior (src/lib/comidas/carga.ts). Al final dice cuánto ocupa
 * la base, que no puede pasar de TAMANO_MAXIMO.
 */
import { createReadStream } from "node:fs";
import { writeFile } from "node:fs/promises";
import { createInterface } from "node:readline";
import { parseArgs } from "node:util";

import { createClient } from "@supabase/supabase-js";

import { getCatalogo } from "@/content/comidas";
import {
  type BaseDeLugares,
  cargarLugares,
  megas,
  TAMANO_MAXIMO,
} from "@/lib/comidas/carga";
import { type FilaDeLugar, filasDelExtracto } from "@/lib/comidas/extracto";

function baseDeSupabase(url: string, clave: string): BaseDeLugares {
  const cliente = createClient(url, clave, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const fallo = (que: string, error: { message: string }) =>
    new Error(`No se pudo ${que}: ${error.message}`);

  return {
    async tamano() {
      const { data, error } = await cliente.rpc("tamano_de_la_base");

      if (error) throw fallo("medir la base", error);

      const bytes = Number(data);
      if (!Number.isFinite(bytes) || bytes <= 0) {
        throw new Error(
          `No se pudo medir la base: tamano_de_la_base devolvió ${JSON.stringify(data)}.`,
        );
      }
      return bytes;
    },

    async lugaresAnteriores(pais) {
      const { data, error } = await cliente
        .from("extractos_de_comida")
        .select("lugares")
        .eq("pais", pais)
        .maybeSingle<{ lugares: number }>();

      if (error) throw fallo("leer la carga anterior", error);
      return data?.lugares ?? null;
    },

    async subir(pais, filas, corrida) {
      const { error } = await cliente.from("lugares_de_comida").upsert(
        filas.map(({ plato, osm, celda, lugar }) => ({
          pais,
          plato,
          osm,
          celda,
          lugar,
          corrida,
        })),
        { onConflict: "pais,plato,osm" },
      );

      if (error) throw fallo("subir los lugares", error);
    },

    async borrarAnteriores(pais, corrida) {
      const { error } = await cliente
        .from("lugares_de_comida")
        .delete()
        .eq("pais", pais)
        .lt("corrida", corrida);

      if (error) throw fallo("borrar los lugares viejos", error);
    },

    async registrar({ pais, datosDel, procesado, lugares }) {
      const { error } = await cliente
        .from("extractos_de_comida")
        .upsert(
          { pais, datos_del: datosDel, procesado, lugares },
          { onConflict: "pais" },
        );

      if (error) throw fallo("anotar la fecha de los datos", error);
    },
  };
}

async function main(): Promise<void> {
  const { values } = parseArgs({
    options: {
      pais: { type: "string" },
      geojson: { type: "string" },
      "datos-del": { type: "string" },
      salida: { type: "string" },
      "aceptar-menos": { type: "boolean", default: false },
    },
  });

  const catalogo = getCatalogo(values.pais ?? "");
  if (!catalogo) throw new Error(`No hay catálogo para "${values.pais}".`);

  if (!values.geojson) throw new Error("Falta --geojson.");

  const datosDel = new Date(values["datos-del"] ?? "");
  if (Number.isNaN(datosDel.getTime())) {
    throw new Error(
      `--datos-del tiene que ser una fecha ISO, y vino "${values["datos-del"] ?? ""}".`,
    );
  }

  const corrida = new Date();
  const lineas = createInterface({
    input: createReadStream(values.geojson, "utf8"),
    crlfDelay: Infinity,
  });

  const filas: FilaDeLugar[] = [];
  for await (const fila of filasDelExtracto(lineas, catalogo, corrida)) {
    filas.push(fila);
  }

  if (values.salida) {
    await writeFile(values.salida, JSON.stringify(filas));
    console.log(
      `${catalogo.slug}: ${filas.length} filas en ${values.salida}, sin tocar la base.`,
    );
    return;
  }

  const url = process.env.SUPABASE_URL;
  const clave = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !clave) {
    throw new Error(
      "Faltan SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY (o --salida, para probar sin base).",
    );
  }

  const base = baseDeSupabase(url, clave);
  const cargado = await cargarLugares(base, catalogo.slug, filas, {
    datosDel,
    corrida,
    aceptarMenos: values["aceptar-menos"],
  });

  // Ya se cargó: si medir falla ahora, no es motivo para dar al país por caído.
  const ocupa = await base.tamano().catch(() => null);

  console.log(
    `${catalogo.slug}: ${cargado.lugares} lugares en ${cargado.filas} filas, con datos del ${datosDel.toISOString()}.` +
      (ocupa === null
        ? ""
        : ` La base ocupa ${megas(ocupa)} de ${megas(TAMANO_MAXIMO)}.`),
  );
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
