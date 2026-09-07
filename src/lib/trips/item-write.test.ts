import { describe, expect, it } from "vitest";

import { resolveItemWrite } from "@/lib/trips/item-write";

/**
 * La invariante que sostiene todo el modelo: nunca se escribe una cantidad
 * cero. Con el `check (qty > 0)` original de las tablas de sesión, guardar un
 * cero falla — y es lo que rompía la creación de viajes.
 */
describe("resolveItemWrite", () => {
  it("nunca devuelve un upsert con cantidad cero", () => {
    const casos = [
      [null, { qty: 0 }],
      [{ qty: 3, checked: false }, { qty: 0 }],
      [
        { qty: 1, checked: true },
        { qty: 0, checked: false },
      ],
      [null, { checked: false }],
    ] as const;

    for (const [actual, patch] of casos) {
      const write = resolveItemWrite(actual, patch);

      if (write.action === "upsert") {
        expect(write.qty).toBeGreaterThan(0);
      }
    }
  });

  it("borra la fila cuando queda sin cantidad y sin tilde", () => {
    expect(resolveItemWrite({ qty: 2, checked: false }, { qty: 0 })).toEqual({
      action: "delete",
    });
  });

  it("crea la fila cuando el ítem todavía no estaba elegido", () => {
    expect(resolveItemWrite(null, { qty: 2 })).toEqual({
      action: "upsert",
      qty: 2,
      checked: false,
    });
  });

  it("tildar con cantidad cero sube la cantidad a uno", () => {
    // Marcar algo que se lleva en cantidad ninguna no significa nada, y la
    // fila necesita una cantidad válida para existir.
    expect(resolveItemWrite(null, { checked: true })).toEqual({
      action: "upsert",
      qty: 1,
      checked: true,
    });
  });

  it("destildar no cambia la cantidad", () => {
    expect(
      resolveItemWrite({ qty: 4, checked: true }, { checked: false }),
    ).toEqual({ action: "upsert", qty: 4, checked: false });
  });

  it("bajar a cero un ítem tildado lo deja tildado en uno", () => {
    // Coherente con la regla de arriba: mientras siga marcado, se lleva.
    expect(resolveItemWrite({ qty: 3, checked: true }, { qty: 0 })).toEqual({
      action: "upsert",
      qty: 1,
      checked: true,
    });
  });

  it("conserva lo que el patch no menciona", () => {
    expect(resolveItemWrite({ qty: 5, checked: true }, { qty: 2 })).toEqual({
      action: "upsert",
      qty: 2,
      checked: true,
    });
  });
});
