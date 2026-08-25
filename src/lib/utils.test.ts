import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

describe("cn", () => {
  it("combina clases condicionales", () => {
    expect(cn("p-2", false && "hidden", "text-sm")).toBe("p-2 text-sm");
  });

  it("resuelve conflictos de Tailwind quedándose con la última", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });
});
