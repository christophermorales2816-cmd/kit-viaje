"""Genera src/content/comidas/fotos.json con las fotos de Wikimedia Commons.

El catálogo de "Qué comer" (spec, 18.6) nombra solo el archivo de cada foto:

    foto: "Shoyu_ramen,_at_Kasukabe_Station_(2014.05.05)_1.jpg",

Este script le pregunta a la API de Commons, por cada archivo, la dirección de
dos miniaturas —una para las tarjetas y otra para los encabezados—, su tamaño,
su autor y su licencia, y lo deja en fotos.json. Así el crédito sale de la
fuente y no de lo que alguien copió a mano.

    python3 -I herramientas/comidas/fotos.py src/content/comidas src/content/comidas/fotos.json

QUÉ ENTRA

Solo fotos con licencia libre que admita uso comercial: dominio público, CC0,
CC BY y CC BY-SA. Una foto con NC (no comercial), ND (sin derivadas), solo
GFDL o sin licencia hace fallar el script: hay que elegir otra. El crédito se
muestra siempre, aunque la licencia no lo pida.

Valida todo antes de escribir: si un archivo no existe en Commons o no tiene
una licencia que sirva, el script lo dice y fotos.json queda como estaba.

PARA ELEGIR UNA FOTO

    python3 -I herramientas/comidas/fotos.py --buscar "takoyaki"

busca el plato en Wikidata y muestra la foto que tiene asignada (P18), que
suele ser buena. Igual hay que mirarla antes de usarla.
"""
import html
import json
import pathlib
import re
import sys
import urllib.parse
import urllib.request

COMMONS = "https://commons.wikimedia.org/w/api.php"
WIKIDATA = "https://www.wikidata.org/w/api.php"

# Wikimedia pide que cada cliente se presente: sin esto, la API puede cortar.
IDENTIFICACION = "kit-viaje/1.0 (https://kit-viaje.vercel.app/que-comer)"

# Las miniaturas: tarjetas y fichas, y el encabezado de cada país. Son anchos
# estándar de Wikimedia, que ya las tiene generadas.
ANCHO = 960
ANCHO_GRANDE = 1920

# La API acepta hasta cincuenta títulos por pedido.
POR_PEDIDO = 50

FOTO = re.compile(r'\bfoto:\s*"([^"]+)"')

# Lo que no es un catálogo: los tipos, el índice y la lectura de fotos.json,
# que nombran fotos de ejemplo en sus comentarios.
NO_SON_CATALOGOS = {"types.ts", "index.ts", "fotos.ts"}

# Las licencias que sirven: libres y con uso comercial.
LIBRE = re.compile(
    r"^(public domain|pd(-[\w.-]+)?|cc0( 1\.0)?|cc[ -]by(-sa)?[ -]\d\.\d([ -][\w.-]+)?)$",
    re.IGNORECASE,
)


def pedir(url, parametros):
    consulta = urllib.parse.urlencode({**parametros, "format": "json"})
    pedido = urllib.request.Request(
        f"{url}?{consulta}", headers={"User-Agent": IDENTIFICACION}
    )
    with urllib.request.urlopen(pedido, timeout=60) as respuesta:
        return json.load(respuesta)


def archivos_del_contenido(carpeta):
    """Los archivos de Commons que nombra el catálogo, sin repetir."""
    archivos = set()
    for ruta in sorted(pathlib.Path(carpeta).glob("*.ts")):
        if ruta.name.endswith(".test.ts") or ruta.name in NO_SON_CATALOGOS:
            continue
        archivos.update(FOTO.findall(ruta.read_text(encoding="utf-8")))
    return sorted(archivos)


def texto(crudo):
    """El texto de un campo de Commons, que viene en HTML."""
    sin_etiquetas = re.sub(r"<[^>]+>", " ", crudo or "")
    return re.sub(r"\s+", " ", html.unescape(sin_etiquetas)).strip()


def consultar(archivos, ancho):
    """Lo que dice Commons de cada archivo, con la miniatura de `ancho`."""
    datos = {}
    for inicio in range(0, len(archivos), POR_PEDIDO):
        tanda = archivos[inicio : inicio + POR_PEDIDO]
        respuesta = pedir(
            COMMONS,
            {
                "action": "query",
                "prop": "imageinfo",
                "iiprop": "url|size|extmetadata",
                "iiurlwidth": ancho,
                "titles": "|".join(f"File:{archivo}" for archivo in tanda),
            },
        )
        # La API normaliza los nombres (guiones bajos, mayúsculas): se vuelve
        # al nombre que usa el catálogo.
        normalizados = {
            n["to"]: n["from"]
            for n in respuesta.get("query", {}).get("normalized", [])
        }
        for pagina in respuesta.get("query", {}).get("pages", {}).values():
            titulo = normalizados.get(pagina["title"], pagina["title"])
            archivo = titulo.removeprefix("File:")
            datos[archivo] = pagina
    return datos


def foto(archivo, chica, grande):
    """La entrada de fotos.json de un archivo, o el problema que tiene."""
    if "missing" in chica or "imageinfo" not in chica:
        return None, f"{archivo}: no existe en Commons"

    info = chica["imageinfo"][0]
    meta = info.get("extmetadata", {})
    licencia = texto(meta.get("LicenseShortName", {}).get("value"))

    if not LIBRE.match(licencia):
        return None, f"{archivo}: la licencia «{licencia or 'ninguna'}» no sirve"

    autor = texto(meta.get("Artist", {}).get("value")) or texto(
        meta.get("Credit", {}).get("value")
    )

    return {
        "src": info["thumburl"],
        "srcGrande": grande["imageinfo"][0]["thumburl"],
        "ancho": info["thumbwidth"],
        "alto": info["thumbheight"],
        "autor": autor[:120] or "Autor sin identificar",
        "licencia": "Dominio público" if licencia.lower().startswith(("public", "pd")) else licencia,
        "licenciaUrl": meta.get("LicenseUrl", {}).get("value") or None,
        "pagina": info["descriptionurl"],
    }, None


def generar(carpeta, salida):
    archivos = archivos_del_contenido(carpeta)
    chicas = consultar(archivos, ANCHO)
    grandes = consultar(archivos, ANCHO_GRANDE)

    fotos, problemas = {}, []
    for archivo in archivos:
        entrada, problema = foto(
            archivo, chicas.get(archivo, {"missing": True}), grandes.get(archivo, {})
        )
        if problema:
            problemas.append(problema)
        else:
            fotos[archivo] = entrada

    if problemas:
        print("No se escribió nada. Hay que cambiar estas fotos:", file=sys.stderr)
        for problema in problemas:
            print(f"  - {problema}", file=sys.stderr)
        sys.exit(1)

    pathlib.Path(salida).write_text(
        json.dumps(fotos, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )
    print(f"{len(fotos)} fotos en {salida}")


def buscar(nombre):
    """Las fotos que Wikidata asigna a lo que se llama `nombre`."""
    encontrados = pedir(
        WIKIDATA,
        {
            "action": "wbsearchentities",
            "search": nombre,
            "language": "es",
            "uselang": "es",
            "limit": 7,
        },
    ).get("search", [])
    if not encontrados:
        print("Nada en Wikidata con ese nombre.")
        return

    entidades = pedir(
        WIKIDATA,
        {
            "action": "wbgetentities",
            "ids": "|".join(e["id"] for e in encontrados),
            "props": "claims",
        },
    )["entities"]
    for encontrado in encontrados:
        reclamos = entidades[encontrado["id"]].get("claims", {}).get("P18", [])
        imagen = reclamos[0]["mainsnak"]["datavalue"]["value"] if reclamos else "(sin foto)"
        print(f"{encontrado['id']}  {encontrado.get('label', '')} — {encontrado.get('description', '')}")
        print(f"    {imagen}")


if __name__ == "__main__":
    if len(sys.argv) == 3 and sys.argv[1] == "--buscar":
        buscar(sys.argv[2])
    elif len(sys.argv) == 3:
        generar(sys.argv[1], sys.argv[2])
    else:
        print(__doc__)
        sys.exit(2)
