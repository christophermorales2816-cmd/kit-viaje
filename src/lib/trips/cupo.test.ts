import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * El cupo de creación frena loops, no a personas.
 *
 * Se mockea solo la llamada a la base; la clave del cliente y la lectura de la
 * IP son puras y se prueban tal cual.
 */

const rpc = vi.fn();

vi.mock("@/lib/supabase/admin", () => ({
  adminClient: () => ({ rpc }),
}));

const { claveDeCliente, consumirCupoDeViaje, ipDelCliente } =
  await import("./cupo");

function headers(valores: Record<string, string>) {
  return { get: (nombre: string) => valores[nombre] ?? null };
}

describe("ipDelCliente", () => {
  it("prefiere x-real-ip", () => {
    expect(
      ipDelCliente(
        headers({ "x-real-ip": "1.1.1.1", "x-forwarded-for": "2.2.2.2" }),
      ),
    ).toBe("1.1.1.1");
  });

  it("si no está, toma la primera de x-forwarded-for", () => {
    expect(
      ipDelCliente(headers({ "x-forwarded-for": "3.3.3.3, 10.0.0.1" })),
    ).toBe("3.3.3.3");
  });

  it("sin headers devuelve null en vez de inventar", () => {
    expect(ipDelCliente(headers({}))).toBeNull();
  });
});

describe("claveDeCliente", () => {
  it("no guarda la IP, ni siquiera adentro", () => {
    const clave = claveDeCliente("203.0.113.7", "secreto");

    expect(clave).not.toContain("203");
    expect(clave).toMatch(/^[0-9a-f]{32}$/);
  });

  it("es estable para la misma IP y distinta entre IPs", () => {
    expect(claveDeCliente("1.1.1.1", "s")).toBe(claveDeCliente("1.1.1.1", "s"));
    expect(claveDeCliente("1.1.1.1", "s")).not.toBe(
      claveDeCliente("1.1.1.2", "s"),
    );
  });

  it("depende del secreto: sin él no se puede recorrer el espacio de IPs", () => {
    expect(claveDeCliente("1.1.1.1", "a")).not.toBe(
      claveDeCliente("1.1.1.1", "b"),
    );
  });
});

describe("consumirCupoDeViaje", () => {
  beforeEach(() => {
    rpc.mockReset();
    process.env.SUPABASE_SERVICE_ROLE_KEY = "clave-de-prueba";
  });

  it("deja pasar mientras la base dice que entra", async () => {
    rpc.mockResolvedValue({ data: true, error: null });

    await expect(
      consumirCupoDeViaje(headers({ "x-real-ip": "1.1.1.1" })),
    ).resolves.toBe("entra");
  });

  it("frena cuando la base dice que el cupo se llenó", async () => {
    rpc.mockResolvedValue({ data: false, error: null });

    await expect(
      consumirCupoDeViaje(headers({ "x-real-ip": "1.1.1.1" })),
    ).resolves.toBe("lleno");
  });

  it("no bloquea a nadie si la base no responde", async () => {
    rpc.mockResolvedValue({
      data: null,
      error: { code: "42883", message: "function does not exist" },
    });
    vi.spyOn(console, "error").mockImplementation(() => {});

    await expect(
      consumirCupoDeViaje(headers({ "x-real-ip": "1.1.1.1" })),
    ).resolves.toBe("sin-control");
  });

  it("le manda a la base el hash, nunca la IP", async () => {
    rpc.mockResolvedValue({ data: true, error: null });

    await consumirCupoDeViaje(headers({ "x-real-ip": "198.51.100.23" }));

    const [funcion, argumentos] = rpc.mock.calls[0];
    expect(funcion).toBe("consumir_cupo_de_viaje");
    expect(JSON.stringify(argumentos)).not.toContain("198.51.100.23");
  });
});
