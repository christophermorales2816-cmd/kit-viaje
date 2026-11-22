"""Las fronteras del globo de la portada, como texturas (spec, 25).

El globo dibuja la Tierra con un shader sobre una foto equirrectangular
(src/components/landing/esfera.ts). Las fronteras van igual: una imagen del
mismo tamaño y la misma proyección, que el shader lee con las mismas
coordenadas que la foto. Así caen en su lugar a cualquier zoom, sin proyectar
nada en JavaScript.

Dos canales en una sola imagen:

  - rojo: los límites entre países, siempre a la vista;
  - verde: los de estados y provincias, que el shader muestra recién al
    acercar.

Dos tamaños, como la foto: la de 2048 para el globo entero, solo con los
países, y la de 4096 para cuando alguien acerca, con los estados.

Los datos son de Natural Earth (dominio público), escala 1:10 millones:

  ne_10m_admin_0_boundary_lines_land.geojson
  ne_10m_admin_1_states_provinces_lines.geojson

en https://github.com/nvkelso/natural-earth-vector (carpeta geojson). Este
script no los baja: se le pasa la carpeta donde están.

Uso:
  python3 -I herramientas/globo/fronteras.py <carpeta con los geojson> src/assets/globo

Las líneas se dibujan al cuádruple del tamaño final y se achican con un filtro
de caja: Pillow no suaviza las líneas, y así salen con borde suave.
"""

import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw

SOBREMUESTREO = 4

# Frontera internacional: entera. Lo disputado, lo indefinido y las líneas de
# control: a media intensidad, como el trazo punteado de los mapas de la guía.
# Lo demás (límites de arriendo, superposiciones, no reconocidas) no se dibuja.
CLASES_DE_PAISES = {
    "International boundary (verify)": 255,
    "Disputed (please verify)": 128,
    "Indefinite (please verify)": 128,
    "Line of control (please verify)": 128,
    "Indeterminant frontier": 128,
}

# Estados y provincias, y las regiones que los agrupan. Los límites
# estadísticos no son administrativos: no se dibujan.
CLASES_DE_ESTADOS = {
    "Admin-1 boundary": 255,
    "Admin-1 region boundary": 255,
}


def lineas(ruta: Path, clases: dict[str, int]):
    """Las líneas del archivo con su intensidad, como listas de (lon, lat)."""
    datos = json.loads(ruta.read_text(encoding="utf-8"))
    for rasgo in datos["features"]:
        clase = rasgo["properties"].get("FEATURECLA")
        if clase not in clases:
            continue
        geometria = rasgo["geometry"]
        if geometria is None:
            continue
        if geometria["type"] == "LineString":
            partes = [geometria["coordinates"]]
        elif geometria["type"] == "MultiLineString":
            partes = geometria["coordinates"]
        else:
            continue
        for parte in partes:
            yield parte, clases[clase]


def tramos_sin_salto(puntos):
    """Corta la línea donde cruza el antimeridiano: de 179 a −179 no es una
    raya de punta a punta de la imagen, son dos pedazos en los bordes."""
    tramo = [puntos[0]]
    for anterior, actual in zip(puntos, puntos[1:]):
        if abs(actual[0] - anterior[0]) > 180:
            if len(tramo) > 1:
                yield tramo
            tramo = []
        tramo.append(actual)
    if len(tramo) > 1:
        yield tramo


def dibujar(ancho: int, capas) -> Image.Image:
    """Una capa en escala de grises, dibujada en grande y achicada."""
    grande_ancho = ancho * SOBREMUESTREO
    grande_alto = grande_ancho // 2
    lienzo = Image.new("L", (grande_ancho, grande_alto), 0)
    pincel = ImageDraw.Draw(lienzo)

    for puntos, intensidad, grosor in capas:
        for tramo in tramos_sin_salto(puntos):
            pixeles = [
                ((lon + 180) / 360 * grande_ancho, (90 - lat) / 180 * grande_alto)
                for lon, lat, *_ in tramo
            ]
            pincel.line(pixeles, fill=intensidad, width=grosor, joint="curve")

    return lienzo.resize((ancho, ancho // 2), Image.Resampling.BOX)


def main():
    origen, destino = Path(sys.argv[1]), Path(sys.argv[2])
    paises = list(lineas(origen / "ne_10m_admin_0_boundary_lines_land.geojson", CLASES_DE_PAISES))
    estados = list(lineas(origen / "ne_10m_admin_1_states_provinces_lines.geojson", CLASES_DE_ESTADOS))
    print(f"{len(paises)} líneas de países, {len(estados)} de estados")

    for ancho, con_estados in ((2048, False), (4096, True)):
        # El grosor se mide en píxeles de la imagen grande: con el sobremuestreo
        # de 4, 6 es un píxel y medio de la imagen final, y 4, un píxel.
        rojo = dibujar(ancho, [(p, i, 6) for p, i in paises])
        verde = (
            dibujar(ancho, [(p, i, 4) for p, i in estados])
            if con_estados
            else Image.new("L", (ancho, ancho // 2), 0)
        )
        azul = Image.new("L", (ancho, ancho // 2), 0)
        imagen = Image.merge("RGB", (rojo, verde, azul))
        ruta = destino / f"fronteras-{ancho}.png"
        imagen.save(ruta, optimize=True)
        print(f"{ruta}: {ruta.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
