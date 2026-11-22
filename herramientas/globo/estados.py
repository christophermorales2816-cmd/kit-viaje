"""Los nombres de los estados y provincias del globo de la portada (spec, 27).

Al elegir un país en el globo, se muestran los nombres de sus estados o
provincias, como los de un mapa. Este script arma, para cada guía, la lista de
nombres con el punto donde va cada uno, del más importante al menos:

  {"argentina": [["Buenos Aires", -36.68, -60.13], ...], ...}

Los datos son de Natural Earth (dominio público), escala 1:10 millones:

  ne_10m_admin_1_states_provinces.geojson

en https://github.com/nvkelso/natural-earth-vector (carpeta geojson). Trae el
nombre en castellano (`name_es`) y el punto donde Natural Earth pone la
etiqueta (`latitude`, `longitude`). El script no lo baja: se le pasa la ruta.

A qué país corresponde cada guía sale de sus destinos: el polígono que contiene
a la mayoría (y, si ninguno cae adentro, el estado más cercano). Así no hace
falta mantener a mano una tabla de códigos de país, y Puerto Rico o Groenlandia
quedan con lo suyo y no con lo de Estados Unidos o Dinamarca.

Algunos países tienen como primer nivel subdivisiones muy chicas para un globo
—los 101 departamentos de Francia, las 110 provincias de Italia, los 232
distritos del Reino Unido—. Para esos se muestran las regiones que los agrupan
(REGIONES, abajo), que son las que reconoce un viajero.

Uso:
  python3 -I herramientas/globo/estados.py <admin-1 geojson> <guias.json> src/assets/globo/estados.json

<guias.json> es la lista de guías con sus destinos, que sale de
src/content/guias:

  npx tsx --tsconfig tsconfig.json herramientas/globo/guias.ts > guias.json

Un país nuevo necesita su lista: el test src/lib/globo/estados.test.ts falla
hasta que se corre esto de nuevo (docs/agregar-un-pais.md).
"""

import json
import math
import sys
from collections import Counter, defaultdict
from pathlib import Path

# Los países que se muestran por regiones, con el nombre en castellano de cada
# una. Un nombre que no está en el diccionario se usa como viene.
REGIONES = {
    "FRA": {
        "Hauts-de-France": "Alta Francia",
        "Grand Est": "Gran Este",
        "Provence-Alpes-Côte-d'Azur": "Provenza-Alpes-Costa Azul",
        "Auvergne-Rhône-Alpes": "Auvernia-Ródano-Alpes",
        "Nouvelle-Aquitaine": "Nueva Aquitania",
        "Occitanie": "Occitania",
        "Bourgogne-Franche-Comté": "Borgoña-Franco Condado",
        "Pays de la Loire": "País del Loira",
        "Bretagne": "Bretaña",
        "Normandie": "Normandía",
        "Corse": "Córcega",
        "Centre-Val de Loire": "Centro-Valle del Loira",
        "Île-de-France": "Isla de Francia",
        "Guyane française": "Guayana Francesa",
        "Martinique": "Martinica",
        "Guadeloupe": "Guadalupe",
        "Réunion": "Reunión",
        "Mayotte": "Mayotte",
    },
    "ITA": {
        "Valle d'Aosta": "Valle de Aosta",
        "Piemonte": "Piamonte",
        "Lombardia": "Lombardía",
        "Trentino-Alto Adige": "Trentino-Alto Adigio",
        "Liguria": "Liguria",
        "Emilia-Romagna": "Emilia-Romaña",
        "Marche": "Marcas",
        "Veneto": "Véneto",
        "Friuli-Venezia Giulia": "Friuli-Venecia Julia",
        "Abruzzo": "Abruzos",
        "Molise": "Molise",
        "Apulia": "Apulia",
        "Basilicata": "Basilicata",
        "Calabria": "Calabria",
        "Campania": "Campania",
        "Lazio": "Lacio",
        "Toscana": "Toscana",
        "Sicily": "Sicilia",
        "Sardegna": "Cerdeña",
        "Umbria": "Umbría",
    },
    "ESP": {
        "Foral de Navarra": "Navarra",
        "Valenciana": "Comunidad Valenciana",
        "Canary Is.": "Canarias",
        "Islas Baleares": "Baleares",
        "Madrid": "Comunidad de Madrid",
    },
    "LVA": {},
    "MLT": {},
    "SVN": {},
    "UGA": {
        "Western": "Oeste",
        "Central": "Centro",
        "Eastern": "Este",
        "Northern": "Norte",
    },
}

# El Reino Unido, por sus cuatro naciones (`geonunit`): sus regiones de
# estadística no son las que reconoce un viajero.
NACIONES = {
    "GBR": {
        "England": "Inglaterra",
        "Scotland": "Escocia",
        "Wales": "Gales",
        "Northern Ireland": "Irlanda del Norte",
    },
}


def anillos(geometria):
    """Los anillos exteriores e interiores de cada polígono."""
    if geometria["type"] == "Polygon":
        return [geometria["coordinates"]]
    if geometria["type"] == "MultiPolygon":
        return geometria["coordinates"]
    return []


def dentro_del_anillo(lon, lat, anillo):
    adentro = False
    j = len(anillo) - 1
    for i in range(len(anillo)):
        xi, yi = anillo[i][0], anillo[i][1]
        xj, yj = anillo[j][0], anillo[j][1]
        if (yi > lat) != (yj > lat) and lon < (xj - xi) * (lat - yi) / (yj - yi) + xi:
            adentro = not adentro
        j = i
    return adentro


def contiene(geometria, lon, lat):
    for poligono in anillos(geometria):
        if dentro_del_anillo(lon, lat, poligono[0]) and not any(
            dentro_del_anillo(lon, lat, hueco) for hueco in poligono[1:]
        ):
            return True
    return False


def distancia_km(lat1, lon1, lat2, lon2):
    f1, f2 = math.radians(lat1), math.radians(lat2)
    df = f2 - f1
    dl = math.radians(lon2 - lon1)
    a = math.sin(df / 2) ** 2 + math.cos(f1) * math.cos(f2) * math.sin(dl / 2) ** 2
    return 6371 * 2 * math.asin(math.sqrt(a))


def pais_de_la_guia(guia, rasgos):
    """El adm0_a3 que contiene a la mayoría de los destinos de la guía."""
    votos = Counter()
    for place in guia["places"]:
        lat, lon = place["coords"]
        for rasgo in rasgos:
            if contiene(rasgo["geometry"], lon, lat):
                votos[rasgo["properties"]["adm0_a3"]] += 1
                break
        else:
            cercano = min(
                rasgos,
                key=lambda r: distancia_km(
                    lat, lon, r["properties"]["latitude"], r["properties"]["longitude"]
                ),
            )
            votos[cercano["properties"]["adm0_a3"]] += 0.5
    return votos.most_common(1)[0][0] if votos else None


def nombre(propiedades):
    return (propiedades.get("name_es") or propiedades.get("name") or "").strip()


def agrupados(unidades, clave, nombres):
    """Las unidades juntas por región: el punto es el promedio pesado por área."""
    grupos = defaultdict(list)
    for p in unidades:
        valor = p.get(clave)
        if valor:
            grupos[valor].append(p)
    resultado = []
    for valor, miembros in grupos.items():
        area = sum(max(p.get("area_sqkm") or 0, 1) for p in miembros)
        lat = sum(p["latitude"] * max(p.get("area_sqkm") or 0, 1) for p in miembros) / area
        lon = sum(p["longitude"] * max(p.get("area_sqkm") or 0, 1) for p in miembros) / area
        rango = min(p.get("labelrank") or 9 for p in miembros)
        resultado.append((nombres.get(valor, valor), lat, lon, rango, area))
    return resultado


def estados_del_pais(adm0, unidades):
    if adm0 in NACIONES:
        filas = agrupados(unidades, "geonunit", NACIONES[adm0])
    elif adm0 in REGIONES:
        filas = agrupados(unidades, "region", REGIONES[adm0])
    else:
        filas = [
            (
                nombre(p),
                p["latitude"],
                p["longitude"],
                p.get("labelrank") or 9,
                p.get("area_sqkm") or 0,
            )
            for p in unidades
            if nombre(p) and p.get("latitude") is not None
        ]
    # Primero los más importantes para Natural Earth, y entre iguales, los más
    # grandes: si no entran todos, quedan esos.
    filas.sort(key=lambda f: (f[3], -f[4]))
    vistos = set()
    salida = []
    for nombre_, lat, lon, _, _ in filas:
        if nombre_ in vistos:
            continue
        vistos.add(nombre_)
        salida.append([nombre_, round(lat, 2), round(lon, 2)])
    return salida


def main():
    origen, guias_json, destino = (Path(a) for a in sys.argv[1:4])
    rasgos = [
        r
        for r in json.loads(origen.read_text(encoding="utf-8"))["features"]
        if r.get("geometry")
    ]
    por_pais = defaultdict(list)
    for r in rasgos:
        por_pais[r["properties"]["adm0_a3"]].append(r["properties"])

    guias = json.loads(guias_json.read_text(encoding="utf-8"))
    salida = {}
    for guia in guias:
        adm0 = pais_de_la_guia(guia, rasgos)
        estados = estados_del_pais(adm0, por_pais.get(adm0, [])) if adm0 else []
        salida[guia["slug"]] = estados
        print(f"{guia['slug']}: {adm0}, {len(estados)}")

    destino.write_text(
        json.dumps(salida, ensure_ascii=False, separators=(",", ":"), sort_keys=True)
        + "\n",
        encoding="utf-8",
    )
    print(f"{destino}: {destino.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
