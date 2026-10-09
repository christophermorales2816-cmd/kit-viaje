"""Genera la migración de un corredor (un país) a partir de un archivo de datos.

Es la herramienta con la que se escribieron las migraciones `_corredor_` de
2026-10: el país se describe en Python —ciudades, clima de los doce meses,
precios de la ciudad base y un factor por ciudad— y esto escribe el SQL con la
forma exacta que esperan la app y los tests.

Valida todo antes de escribir: si un país tiene una ciudad de más, un mes de
menos o una mínima arriba de la máxima, falla acá y no en Postgres.

Uso (desde la raíz del repo):

    python3 herramientas/corredor/generar.py supabase/migrations AAAAMMDD HH <modulo>

<modulo> es un archivo .py de esta carpeta, sin extensión, que define una
lista PAISES (ver ejemplo_andorra.py). Las migraciones salen numeradas
AAAAMMDDHH0100, AAAAMMDDHH0200, ... en el orden de PAISES.

La migración generada es la fuente de verdad, no el archivo de datos: una vez
aplicada en producción no se regenera nunca. Un cambio posterior va en una
migración nueva.
"""
import re, sys, os, importlib
sys.path.insert(0, os.path.dirname(__file__))

# Uso: gen.py <destino> <fecha AAAAMMDD> <hora HH> <modulo>
# Solo genera los países del módulo pedido: las migraciones ya aplicadas en
# producción no se regeneran nunca.
DEST, FECHA, HORA, MODULO = sys.argv[1:5]
PAISES = importlib.import_module(MODULO).PAISES

# Monedas cuyos precios llevan centavos: las ciudades derivadas se redondean al
# centavo y no a la unidad. Misma lista que MONEDAS_CON_CENTAVOS en format.ts
# (la regla: la unidad vale más de medio dólar), y un test lo verifica.
CON_CENTAVOS = {"USD", "EUR", "GBP", "CHF", "BAM", "SGD", "BND", "AZN", "JOD", "KWD", "BHD", "OMR"}

PLANTILLA = [
    ("comida", "Desayuno", 1, True, 1, 30),
    ("comida", "Almuerzo", 1, True, 1, 30),
    ("comida", "Cena en restaurante", 1, True, 3, 10),
    ("comida", "Compra en supermercado", 1, True, 4, 8),
    ("comida", "Algo al paso", 1, True, 2, 15),
    ("alojamiento", "Hotel 3★, noche", 1, True, 1, 30),
    ("alojamiento", "Lavandería (una carga)", 1, True, 7, 4),
    ("alojamiento", "Depósito de equipaje", 1, False, None, None),
    ("alojamiento", "Propinas y servicio", 1, False, None, None),
    ("transporte", "Transporte público, día", 1, True, 1, 30),
    ("transporte", "Viaje corto en app", 1, True, 3, 10),
    ("transporte", "Traslado al aeropuerto (por tramo)", 2, False, None, None),
    ("transporte", "Bus de larga distancia", 1, True, 6, 4),
    ("entretenimiento", "Entrada a la atracción principal", 1, False, None, None),
    ("entretenimiento", "Visita guiada", 1, False, None, None),
    ("entretenimiento", "Entrada a museo", 1, True, 4, 6),
    ("entretenimiento", "Salida nocturna", 1, True, 5, 5),
    ("entretenimiento", "Excursión de día completo", 1, True, 4, 6),
]

# Umbrales sembrados (20260826120300 + 20260910100000). Solo para el comentario.
BUCKETS = [("frio", 10), ("fresco", 18), ("templado", 25), ("calido", None)]

def bucket(t):
    for i, (_, tope) in enumerate(BUCKETS):
        if tope is None or t <= tope:
            return i

def buckets(lo, hi):
    return [BUCKETS[i][0] for i in range(bucket(lo), bucket(hi) + 1)]

def glosa(bs):
    abrigo = "abrigo" if "frio" in bs else ("capas" if "fresco" in bs else "nunca abrigo")
    playa = "playa" if "calido" in bs else "cero playa"
    return f"{abrigo}, {playa}"

MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto",
         "septiembre","octubre","noviembre","diciembre"]

def uid(cc, nn):
    return f"00000000-0000-4000-8000-00000000{cc}{nn}"

def lit(s):
    return "'" + s.replace("'", "''") + "'"

def num(x):
    if isinstance(x, float) and x.is_integer():
        x = int(x)
    return f"{x:.2f}" if isinstance(x, float) else str(x)

def t(x):
    return f"{x:5.1f}"

SLUG = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")

def validar(p):
    c = p["ciudades"]
    assert len(c) == 9, (p["slug"], "ciudades", len(c))
    assert [x[0] for x in c] == [f"{i:02d}" for i in range(9)], p["slug"]
    slugs = [x[1] for x in c]
    assert len(set(slugs)) == 9, (p["slug"], "slugs repetidos")
    for nn, slug, nombre, mins, maxs, lluvia, factor in c:
        assert SLUG.match(slug), slug
        assert len(mins) == len(maxs) == len(lluvia) == 12, (p["slug"], slug)
        for m in range(12):
            assert mins[m] <= maxs[m], (p["slug"], slug, m + 1)
            assert 0 <= lluvia[m] <= 100, (p["slug"], slug, m + 1)
            assert -25 < mins[m] < 30 and -20 < maxs[m] < 45, (p["slug"], slug, m + 1)
        assert 0.5 <= factor <= 2.5, (p["slug"], slug, factor)
    assert c[0][6] == 1.0, (p["slug"], "la base lleva factor 1")
    assert len(p["productos"]) == 18, (p["slug"], "productos", len(p["productos"]))
    nombres = [n or PLANTILLA[i][1] for i, (_, n) in enumerate(p["productos"])]
    assert len(set(nombres)) == 18, (p["slug"], "nombres de producto repetidos")
    assert re.match(r"^[A-Z]{3}$", p["moneda"])

def migracion(p, ts):
    cc, moneda = p["cc"], p["moneda"]
    ciudades = p["ciudades"]
    base = uid(cc, "00")
    out = []
    for linea in p["encabezado"].strip().splitlines():
        out.append(("-- " + linea).rstrip())
    out.append("--")

    # Lo que resuelve el motor: el mes más frío de la ciudad más fría y el más
    # caluroso de la más caliente. Calculado, no escrito a mano.
    fria = min(ciudades, key=lambda x: min(x[3]))
    mf = fria[3].index(min(fria[3]))
    caliente = max(ciudades, key=lambda x: max(x[4]))
    mc = caliente[4].index(max(caliente[4]))
    out.append("-- Lo que resuelve el motor con estos números, contra los umbrales sembrados")
    out.append("-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):")
    out.append("--")
    for nombre, mes, lo, hi in [
        (fria[2], mf, fria[3][mf], fria[4][mf]),
        (caliente[2], mc, caliente[3][mc], caliente[4][mc]),
    ]:
        bs = buckets(lo, hi)
        rango = f"{lo:g} / {hi:g}".replace(".", ",")
        out.append(f"--   {nombre} en {MESES[mes]}: {rango} → {' + '.join(bs)} → {glosa(bs)}")
    out.append("--")
    out.append(f"-- IDS FIJOS: destinos 00000000-…-00000000{cc}00 a {cc}08, la base es {cc}00.")
    out.append("-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades")
    out.append("-- derivadas de las migraciones anteriores: determinístico y sin choques.")
    out.append("")

    out.append("insert into destinations (id, name, corridor, base_currency, is_base, slug) values")
    filas = []
    ancho = max(len(lit(x[2])) for x in ciudades) + 1
    for nn, slug, nombre, *_ in ciudades:
        filas.append(f"  ('{uid(cc, nn)}', {(lit(nombre) + ',').ljust(ancho)} '{p['slug']}', '{moneda}', "
                     f"{'true, ' if nn == '00' else 'false,'} '{slug}')")
    out.append(",\n".join(filas))
    out.append("on conflict (id) do nothing;")
    out.append("")

    out.append("-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.")
    out.append("insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values")
    filas = []
    for nn, slug, nombre, mins, maxs, lluvia, _ in ciudades:
        filas.append(f"  -- {nombre}")
        for m in range(12):
            filas.append(f"  ('{uid(cc, nn)}', {m + 1:2d}, {t(mins[m])}, {t(maxs[m])}, {lluvia[m]:3d}),")
    texto = "\n".join(filas).rstrip(",")
    out.append(texto)
    out.append("on conflict (destination_id, month) do nothing;")
    out.append("")

    out.append(f"-- Precios de referencia de {ciudades[0][2]}, en {moneda}. Órdenes de magnitud")
    out.append("-- para planificar, no precios vigentes: la vista muestra su antigüedad.")
    out.append("insert into products")
    out.append("  (id, destination_id, category, name, base_price, currency,")
    out.append("   base_qty, scales_with_days, days_per_unit, max_qty)")
    out.append("select")
    out.append("  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,")
    out.append("  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty")
    out.append("from (values")
    filas = []
    for i, (precio, nombre) in enumerate(p["productos"]):
        cat, defecto, qty, escala, dias, tope = PLANTILLA[i]
        nombre = nombre or defecto
        d = "null" if dias is None else str(dias)
        tp = "null" if tope is None else str(tope)
        filas.append(f"  ('{base}'::uuid, '{cat}', {lit(nombre)}, {num(precio)}, '{moneda}', "
                     f"{qty}, {'true' if escala else 'false'}, {d}, {tp})")
    out.append(",\n".join(filas))
    out.append(") as v(destination_id, category, name, base_price, currency,")
    out.append("       base_qty, scales_with_days, days_per_unit, max_qty)")
    out.append("on conflict (id) do nothing;")
    out.append("")

    redondeo = ", 2" if moneda in CON_CENTAVOS else ""
    out.append("-- Las otras ocho ciudades, derivadas de la base con un factor.")
    if moneda in CON_CENTAVOS:
        out.append(f"-- En {moneda} se redondea al centavo: redondear a la unidad convertiría un")
        out.append("-- café de 2,50 en uno de 2 o de 3.")
    out.append("insert into products")
    out.append("  (id, destination_id, category, name, base_price, currency,")
    out.append("   base_qty, scales_with_days, days_per_unit, max_qty)")
    out.append("select")
    out.append("  md5(ciudad.id::text || p.name)::uuid,")
    out.append(f"  ciudad.id, p.category, p.name, round(p.base_price * ciudad.factor{redondeo}), p.currency,")
    out.append("  p.base_qty, p.scales_with_days, p.days_per_unit, p.max_qty")
    out.append("from (values")
    filas = []
    for nn, slug, nombre, *_r, factor in ciudades[1:]:
        filas.append(f"  ('{uid(cc, nn)}'::uuid, {factor:.2f})  -- {nombre}")
    # La coma va antes del comentario de la línea, no después.
    filas = [f.replace(")  --", "),  --") if i < len(filas) - 1 else f for i, f in enumerate(filas)]
    out.append("\n".join(filas))
    out.append(") as ciudad(id, factor)")
    out.append(f"join products p on p.destination_id = '{base}'")
    out.append("on conflict (id) do nothing;")
    # Una excepción de una sola ciudad, escrita a mano y comentada en el país.
    if p.get("extra"):
        out.append("")
        out.extend(p["extra"].strip().splitlines())
    return "\n".join(out) + "\n"

for i, p in enumerate(PAISES):
    validar(p)
for i, p in enumerate(PAISES):
    ts = f"{FECHA}{HORA}{i + 1:02d}00"
    nombre = f"{ts}_corredor_{p['slug'].replace('-', '_')}.sql"
    with open(os.path.join(DEST, nombre), "w") as f:
        f.write(migracion(p, ts))
    print(nombre)
