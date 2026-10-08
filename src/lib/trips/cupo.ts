import "server-only";

import { createHmac } from "node:crypto";

import { adminClient } from "@/lib/supabase/admin";
import { requireEnv } from "@/lib/supabase/env";

/**
 * Cupo de creación de viajes (ver 20261008120100_cupo_de_creacion.sql).
 *
 * Los topes viven acá y no en la migración para poder ajustarlos con un
 * deploy. Están pensados para que nadie que planifica de verdad los toque:
 * treinta viajes en una hora desde la misma conexión ya es un script, y dos mil
 * en total por hora es más de lo que esta app recibe en una semana.
 */
export const CUPO_POR_CLIENTE_POR_HORA = 30;
export const CUPO_GLOBAL_POR_HORA = 2000;

interface LectorDeHeaders {
  get(nombre: string): string | null;
}

/**
 * La IP pública del cliente, tal como la informa Vercel.
 *
 * Vercel pisa estos dos headers en su borde con la IP real de la conexión, así
 * que un cliente no puede inventarse otra mandándolos él. Fuera de Vercel (en
 * local) no vienen, y todo cae en la misma clave: es lo correcto, ahí hay un
 * solo cliente.
 */
export function ipDelCliente(headers: LectorDeHeaders): string | null {
  const real = headers.get("x-real-ip")?.trim();
  if (real) return real;

  const reenviada = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return reenviada || null;
}

/**
 * Lo que se guarda en vez de la IP: un HMAC con un secreto del servidor.
 *
 * Con un hash simple, alguien con acceso a la tabla podría recorrer las cuatro
 * mil millones de IPv4 y revertirlo en minutos. Con un secreto que la base no
 * conoce, la clave sirve para contar y para nada más.
 */
export function claveDeCliente(ip: string | null, secreto: string): string {
  return createHmac("sha256", secreto)
    .update(ip ?? "sin-ip")
    .digest("hex")
    .slice(0, 32);
}

export type ResultadoDelCupo = "entra" | "lleno" | "sin-control";

/**
 * Consume un lugar del cupo de la hora.
 *
 * Si la base no responde, NO bloquea la creación: devuelve "sin-control" y lo
 * deja en los logs. El cupo es una defensa contra abuso, no una regla del
 * producto, y no puede ser la razón por la que alguien no pueda armar su viaje
 * —la creación misma va a fallar igual si la base está caída—.
 */
export async function consumirCupoDeViaje(
  headers: LectorDeHeaders,
): Promise<ResultadoDelCupo> {
  const secreto = requireEnv(
    "SUPABASE_SERVICE_ROLE_KEY",
    process.env.SUPABASE_SERVICE_ROLE_KEY,
  );

  const { data, error } = await adminClient().rpc("consumir_cupo_de_viaje", {
    p_clave: claveDeCliente(ipDelCliente(headers), secreto),
    p_por_clave: CUPO_POR_CLIENTE_POR_HORA,
    p_global: CUPO_GLOBAL_POR_HORA,
  });

  if (error) {
    console.error("consumirCupoDeViaje", error.code ?? "", error.message);
    return "sin-control";
  }

  return data === true ? "entra" : "lleno";
}
