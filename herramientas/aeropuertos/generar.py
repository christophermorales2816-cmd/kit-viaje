"""Genera src/lib/vuelos/aeropuertos.json a partir de los datos de OurAirports.

Es la lista de aeropuertos del mundo que usa la sección de vuelos (spec, 17):
el selector "Salgo desde", la sugerencia por cercanía y, más adelante, las
rutas y los precios.

QUÉ ENTRA

Los aeropuertos con código IATA y vuelos regulares (`scheduled_service`), que
son los únicos donde se puede comprar un pasaje: unos cuatro mil. Quedan
afuera los helipuertos —un helipuerto con servicio regular, como el de
Mónaco, no es de donde sale un vuelo— y los cerrados. Los hidroaeropuertos con
vuelos regulares entran.

DE DÓNDE SALE

OurAirports publica sus datos en dominio público y los actualiza todos los
días. Se bajan a mano y se pasan por acá:

    curl -L -o /tmp/airports.csv \\
      https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/airports.csv
    python3 herramientas/aeropuertos/generar.py /tmp/airports.csv src/lib/vuelos/aeropuertos.json

El JSON lleva un aeropuerto por línea, ordenado por IATA: al actualizarlo, el
diff muestra exactamente qué aeropuertos cambiaron. Los tests de
src/lib/vuelos/ revisan el archivo generado.

Valida todo antes de escribir: un código repetido, una coordenada fuera del
planeta o una lista sospechosamente corta hacen fallar el script, y el archivo
anterior queda como estaba.
"""
import csv
import datetime
import json
import re
import sys

FUENTE = "OurAirports (https://ourairports.com/data/), dominio público"

# Los tipos de OurAirports que entran, con el nombre que usa la app.
TIPOS = {
    "large_airport": "grande",
    "medium_airport": "mediano",
    "small_airport": "chico",
    "seaplane_base": "hidroaeropuerto",
}

# Una lista que sale con menos o con más que esto es un CSV roto o un cambio de
# formato de OurAirports, no el mundo que cambió de un día para otro.
MINIMO, MAXIMO = 3500, 5000

# Si alguno falta, algo se filtró mal: son aeropuertos que la app nombra.
DEBEN_ESTAR = ["EZE", "AEP", "GRU", "SCL", "MEX", "MAD", "LHR", "JFK",
               "NRT", "SYD", "AKL", "NAN", "CXI", "FUN", "INU"]

# Las claves de búsqueda de OurAirports son nombres alternativos separados por
# coma. Algunas listas son larguísimas; con esto alcanza para buscar.
LARGO_DE_CLAVES = 160

IATA = re.compile(r"^[A-Z]{3}$")
ICAO = re.compile(r"^[A-Z0-9]{4}$")


def coordenada(texto, limite, nombre, iata):
    valor = float(texto)
    if not -limite <= valor <= limite:
        raise SystemExit(f"{iata}: {nombre} fuera de rango ({valor})")
    return round(valor, 4)


def claves(fila):
    """Los nombres alternativos, sin repetir el código ni el nombre."""
    propios = {fila["iata_code"], fila["icao_code"], fila["gps_code"],
               fila["ident"], fila["name"], fila["municipality"]}
    vistas, salida = set(), []
    for clave in (c.strip() for c in fila["keywords"].split(",")):
        if not clave or clave in propios or clave.lower() in vistas:
            continue
        vistas.add(clave.lower())
        salida.append(clave)
    texto = ", ".join(salida)
    if len(texto) > LARGO_DE_CLAVES:
        texto = texto[:LARGO_DE_CLAVES].rsplit(",", 1)[0]
    return texto


def icao(fila):
    for campo in ("icao_code", "gps_code", "ident"):
        if ICAO.match(fila[campo]):
            return fila[campo]
    return ""


def generar(ruta_csv):
    aeropuertos = {}
    with open(ruta_csv, encoding="utf-8", newline="") as archivo:
        for fila in csv.DictReader(archivo):
            iata = fila["iata_code"].strip()
            if not IATA.match(iata):
                continue
            if fila["scheduled_service"] != "yes" or fila["type"] not in TIPOS:
                continue
            if iata in aeropuertos:
                raise SystemExit(f"{iata} aparece dos veces")
            if not re.match(r"^[A-Z]{2}$", fila["iso_country"]):
                raise SystemExit(f"{iata}: país inválido ({fila['iso_country']})")

            aeropuertos[iata] = [
                iata,
                icao(fila),
                fila["name"].strip(),
                fila["municipality"].strip(),
                fila["iso_country"],
                coordenada(fila["latitude_deg"], 90, "latitud", iata),
                coordenada(fila["longitude_deg"], 180, "longitud", iata),
                TIPOS[fila["type"]],
                claves(fila),
            ]

    if not MINIMO <= len(aeropuertos) <= MAXIMO:
        raise SystemExit(f"{len(aeropuertos)} aeropuertos: fuera de {MINIMO}-{MAXIMO}")
    faltan = [codigo for codigo in DEBEN_ESTAR if codigo not in aeropuertos]
    if faltan:
        raise SystemExit(f"faltan {', '.join(faltan)}")

    return [aeropuertos[codigo] for codigo in sorted(aeropuertos)]


def escribir(filas, ruta_json):
    """Un aeropuerto por línea, para que el diff de una actualización se lea."""
    fecha = datetime.datetime.now(datetime.timezone.utc).date().isoformat()
    cabecera = {
        "fuente": FUENTE,
        "descargado": fecha,
        "campos": ["iata", "icao", "nombre", "ciudad", "pais", "lat", "lon",
                   "tipo", "claves"],
    }
    lineas = [json.dumps(fila, ensure_ascii=False) for fila in filas]
    with open(ruta_json, "w", encoding="utf-8") as archivo:
        archivo.write("{\n")
        for clave, valor in cabecera.items():
            archivo.write(f"  {json.dumps(clave)}: {json.dumps(valor, ensure_ascii=False)},\n")
        archivo.write('  "aeropuertos": [\n    ')
        archivo.write(",\n    ".join(lineas))
        archivo.write("\n  ]\n}\n")
    return fecha


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit(__doc__)
    filas = generar(sys.argv[1])
    fecha = escribir(filas, sys.argv[2])
    print(f"{len(filas)} aeropuertos, descargados el {fecha}")
