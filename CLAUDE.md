@AGENTS.md

## Cómo trabajamos: una sesión por tarea

Cada tarea compleja arranca en una sesión nueva. Una sesión larga procesa la
conversación entera en cada turno, y al llenarse el contexto se resume y se
pierde detalle. Una sesión nueva arranca liviana.

La sesión nueva no recuerda las anteriores. Lo que tiene que sobrevivir se
guarda en el repo, cada cosa en su lugar:

- **El código**: lo encontrás con el grafo (sección siguiente).
- **El porqué de una decisión**: en un comentario junto al código que afecta,
  como los de `src/content/guias/types.ts`.
- **Reglas de trabajo que valen para todo el proyecto**: en este archivo.
- **Qué se hizo y qué quedó pendiente**: en la descripción del PR.

Reglas:

1. **El primer prompt de la sesión se basta solo.** Si depende de trabajo
   anterior, nombra el PR, el archivo o la decisión ("seguí lo pendiente del
   PR #112"). Si falta contexto, preguntá antes de suponer.
2. **Seguimientos en la misma sesión, tareas nuevas en otra.** Una corrección
   o una pregunta sobre lo que se acaba de hacer sigue en la sesión actual.
   Rearmar ese contexto en otra cuesta más.
3. **Al cerrar una tarea, lo que deba perdurar queda escrito en el repo**, no
   en el chat. Las decisiones que no están en el código, en un comentario o en
   el PR se pierden en la sesión siguiente.

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
