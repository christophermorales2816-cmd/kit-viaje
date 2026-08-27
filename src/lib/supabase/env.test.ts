import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { readPublicSupabaseEnv, readServiceRoleKey } from "@/lib/supabase/env";

const ORIGINAL = { ...process.env };

beforeEach(() => {
  delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  delete process.env.SUPABASE_SERVICE_ROLE_KEY;
});

afterEach(() => {
  process.env = { ...ORIGINAL };
});

describe("readPublicSupabaseEnv", () => {
  it("devuelve las dos variables cuando están", () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://proyecto.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";

    expect(readPublicSupabaseEnv()).toEqual({
      url: "https://proyecto.supabase.co",
      anonKey: "anon-key",
    });
  });

  it("falla nombrando la variable que falta", () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://proyecto.supabase.co";
    expect(() => readPublicSupabaseEnv()).toThrow(/NEXT_PUBLIC_SUPABASE_ANON_KEY/);
  });

  it("trata la cadena vacía como faltante", () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";
    expect(() => readPublicSupabaseEnv()).toThrow(/NEXT_PUBLIC_SUPABASE_URL/);
  });

  it("apunta al archivo de ejemplo en el mensaje", () => {
    expect(() => readPublicSupabaseEnv()).toThrow(/\.env\.example/);
  });
});

describe("readServiceRoleKey", () => {
  it("la devuelve cuando está", () => {
    process.env.SUPABASE_SERVICE_ROLE_KEY = "service-key";
    expect(readServiceRoleKey()).toBe("service-key");
  });

  it("falla si falta", () => {
    expect(() => readServiceRoleKey()).toThrow(/SUPABASE_SERVICE_ROLE_KEY/);
  });
});
