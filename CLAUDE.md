@AGENTS.md

## Graphify: orientarse por el grafo

El grafo del código está en `graphify-out/` (`GRAPH_REPORT.md`, `graph.json`,
`graph.html`). Se genera con [graphify](https://pypi.org/project/graphifyy/),
solo con análisis sintáctico local: no usa ningún modelo ni manda código afuera.

Instalación, una vez por máquina o sesión:

    pip install "graphifyy[sql]"

Reglas obligatorias:

1. **Primero el grafo.** Antes de un `grep` o una búsqueda amplia por el repo,
   lee `graphify-out/GRAPH_REPORT.md` y consulta el grafo
   (`graphify query "<pregunta>"`, `graphify explain "<nodo>"`,
   `graphify path "<A>" "<B>"`) para ubicar los nodos, las aristas y las
   comunidades afectadas. Abre solo los archivos que están en ese camino.
2. **Actualizar al cambiar código.** Si se agrega, renombra, borra o
   refactoriza código, corre `graphify update .` antes de terminar la tarea,
   para que `graphify-out/` no quede viejo.
3. **`graphify-out/` va en Git**, para que cada sesión de Claude Code en la web
   lo tenga desde el arranque. Su caché (`graphify-out/cache/`) no va.
