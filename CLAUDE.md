@AGENTS.md

## Graphify: orientarse por el grafo

`graphify-out/` tiene el grafo del código (`graph.json`, `GRAPH_REPORT.md`).
Lo genera [graphify](https://pypi.org/project/graphifyy/) con análisis
sintáctico local: no usa ningún modelo ni manda código afuera.

**No va en Git.** Se genera en cada sesión. Una regeneración completa tarda
unos 6 segundos y da siempre el mismo resultado. Si estuviera versionado,
cada cambio de código reescribiría megabytes en el PR y dos PRs en paralelo
chocarían en `graphify-out/`. El script de setup del entorno cloud lo deja
listo al arrancar. Si `graphify-out/graph.json` no existe, generalo:

    pip install -q "graphifyy[sql]" && graphify update .

### Cuándo usarlo

Úsalo antes de crear o cambiar algo: contenido nuevo, una herramienta, un
arreglo. Muestra la estructura: dónde se define algo, quién lo importa o lo
llama, qué tests lo validan, qué se rompe si cambia y qué piezas existentes
conviene reutilizar. Reemplaza rondas de `grep` y de abrir archivos.

- **Contenido nuevo** (por ejemplo una guía): `graphify explain "allGuides"`
  lista dónde se registra, los tests que recorren todas las guías y las
  páginas que la van a mostrar.
- **Herramienta nueva**: buscá con `explain` las piezas parecidas que ya
  existen (por ejemplo `textos()` para los textos traducidos) y reutilizalas
  en vez de inventar otras.

Lo que no tiene: valores dentro del código, como strings o las claves de un
objeto (que `guias.test.ts` necesite una caja geográfica por país está adentro
de un objeto y no se ve), ni datos de afuera. Esos se leen en el archivo que
el grafo te señaló, o en la fuente externa.

### Cómo consultarlo (lo que funciona)

Con **nombres de símbolos o archivos**, no con frases:

- `graphify explain "FactsBoard"`: dónde está y quién lo llama o importa.
- `graphify affected "DestinationGuide" --depth 1`: qué depende de algo. Con
  tipos de las guías la lista trae una línea por país (unas 200); filtralas
  con `| grep -v src/content/guias/`.
- `graphify path "A" "B" --undirected`: cómo se conectan dos nodos.

No uses `graphify query` con preguntas en lenguaje natural: busca palabras
sueltas y devuelve nodos que no tienen que ver ("llega" encuentra
`urlParaLlegar`). Tampoco leas `GRAPH_REPORT.md` entero: son unos 8.000
tokens y casi todo es una lista de comunidades.

### Después de cambiar código

Si agregás, renombrás o borrás código, corré `graphify update .` para que las
consultas siguientes de la sesión vean el cambio. No hay nada que commitear.
