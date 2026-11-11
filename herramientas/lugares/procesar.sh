#!/usr/bin/env bash
# Los lugares de "Qué comer", con datos propios (spec, 18.10).
#
# Por cada país con catálogo: baja su extracto diario de OpenStreetMap de
# Geofabrik, se queda con los lugares de comida, los exporta a GeoJSON y los
# carga en la base. Lo corre una vez por día .github/workflows/lugares.yml.
#
#   herramientas/lugares/procesar.sh              todos los países
#   herramientas/lugares/procesar.sh japon        uno o algunos
#
# Necesita curl, osmium-tool y Node con las dependencias instaladas, y
# SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY. Con SALIDA=carpeta deja las filas
# en archivos y no toca ninguna base, y con FUENTE baja los extractos de otro
# lado (para probar: FUENTE=file:///una/carpeta). Con ACEPTAR_MENOS=1 carga aunque un
# país traiga mucho menos que la vez anterior (src/lib/comidas/carga.ts).
#
# Si un país falla, los demás siguen y ese queda con los datos anteriores; al
# final sale con error, y GitHub le avisa a quien mantiene el sitio.

set -euo pipefail

cd "$(dirname "$0")/../.."

TRABAJO="${TRABAJO:-$(mktemp -d)}"
FUENTE="${FUENTE:-https://download.geofabrik.de}"
# Geofabrik pide que cada programa se presente; el mismo nombre que ante Overpass.
AGENTE="kit-viaje/1.0 (+https://kit-viaje.vercel.app/que-comer)"

mapfile -t FILTRO < <(npx tsx herramientas/lugares/filtro.ts)
mapfile -t PAISES < <(npx tsx herramientas/lugares/paises.ts)

opciones=()
[ -n "${SALIDA:-}" ] && mkdir -p "$SALIDA"
[ "${ACEPTAR_MENOS:-}" = "1" ] && opciones+=(--aceptar-menos)

fallaron=()

for linea in "${PAISES[@]}"; do
  read -r pais extracto <<< "$linea"

  if [ "$#" -gt 0 ] && [[ " $* " != *" $pais "* ]]; then
    continue
  fi

  echo "== $pais ($extracto)"

  pbf="$TRABAJO/$pais.osm.pbf"
  comida="$TRABAJO/$pais-comida.osm.pbf"
  geojson="$TRABAJO/$pais.geojsonseq"
  destino=()
  [ -n "${SALIDA:-}" ] && destino=(--salida "$SALIDA/$pais.json")

  if ! (
    curl --fail --silent --show-error --location --retry 3 \
      --user-agent "$AGENTE" \
      --output "$pbf" \
      "$FUENTE/$extracto-latest.osm.pbf" &&
      datos_del=$(osmium fileinfo -g header.option.osmosis_replication_timestamp "$pbf") &&
      osmium tags-filter "$pbf" "${FILTRO[@]}" --overwrite --output "$comida" &&
      osmium export "$comida" --format geojsonseq --attributes type,id,timestamp \
        --overwrite --output "$geojson" &&
      npx tsx herramientas/lugares/cargar.ts --pais "$pais" --geojson "$geojson" \
        --datos-del "$datos_del" "${destino[@]}" "${opciones[@]}"
  ); then
    fallaron+=("$pais")
  fi

  rm -f "$pbf" "$comida" "$geojson"
done

if [ "${#fallaron[@]}" -gt 0 ]; then
  echo "Fallaron: ${fallaron[*]}. Esos siguen con los datos anteriores." >&2
  exit 1
fi
