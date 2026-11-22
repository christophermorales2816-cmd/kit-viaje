# Graph Report - kit-viaje  (2026-11-22)

## Corpus Check
- 742 files · ~1,078,676 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: .example 1, (none) 1, .ico 1)

## Summary
- 2695 nodes · 6582 edges · 405 communities (104 shown, 301 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 85 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `83ed80d2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- guias/index.ts
- corridors.ts
- globe-hero.tsx
- preparar/page.tsx
- comidas/index.ts
- guias/types.ts
- servicios.ts
- comidas/osm.ts
- DestinationGuide
- textos
- adsb.ts
- read.ts
- vuelos/page.tsx
- env
- servicios/osm.ts
- mapa-de-lugares.tsx
- ci.yml
- comidas/overpass.ts
- budget/index.ts
- ficha-de-plato.tsx
- continentes.ts
- useTextos
- database
- filtros.ts
- base.test.ts
- celdas.ts
- aeropuertos.ts
- que-comer/[slug]/page.tsx
- servidor.ts
- migraciones.yml
- allGuides
- reference.ts
- 20260826120000_reference_tables.sql
- cargar.ts
- lugares/route.ts
- zona.ts
- trip-dashboard.tsx
- packing/index.ts
- fotos.py
- vitest
- GlobalSunstone
- url.ts
- url.ts
- packing/engine.test.ts
- 27. El globo: más grande, y los estados del país elegido
- compilerOptions
- components.json
- maplibre.ts
- datos.ts
- climate-year.ts
- dependencies
- create.ts
- estados.py
- Configurar Supabase
- devDependencies
- angola.ts
- analytics.tsx
- guia/[slug]/page.tsx
- trip-dashboard.tsx
- Administrar Kit de viaje
- updates
- cupo.ts
- servicios/overpass.ts
- corredor/generar.py
- Datos
- fronteras.py
- buscarDestinos
- 14. Asia: la base
- aeropuertos/generar.py
- vitest
- india.ts
- 15. África
- 18. Qué comer y beber
- Spec MVP — Kit de viaje (packing + presupuesto) para corredores volátiles
- 8. Guía de destino
- El plan, en PRs
- 19. La navegación y la portada
- extracto.ts
- ubicacion.ts
- Arquitectura
- 11. El viaje se planifica para una ciudad, no para un país
- 22. Norteamérica y el Caribe que no habla español
- cn
- durationInDays
- Seguridad
- scripts
- letonia.ts
- city-switcher.tsx
- Agregar un país
- 10. Segundo corredor: Brasil
- 9. Página de preparación — "Condiciones actuales"
- mutate.test.ts
- eslint.config.mjs
- 16. Oceanía
- 17. Vuelos
- 23. Nieve: estaciones de esquí en el planificador
- malaui.ts
- mauritania.ts
- item-write.ts
- 12. Tercer corredor: Bolivia
- 26. Servicios para viajeros en el mapa de la guía
- QuantityRule
- 24. El mapa de la guía: estados y provincias
- validate.ts
- AGENTS.md
- procesar.sh
- mozambique.ts
- postcss.config.mjs
- marca/README.md
- live-quotes.tsx
- budget/engine.ts
- antigua-y-barbuda.ts
- nueva-zelanda.ts
- armenia.ts
- month-cards.tsx
- guias/peru.ts
- austria.ts
- bahamas.ts
- 13. América Latina completa
- ExchangeQuote
- bosnia-y-herzegovina.ts
- botsuana.ts
- guias/republica-dominicana.ts
- bulgaria.ts
- san-vicente-y-las-granadinas.ts
- 20261111120000_lugares_de_comida.sql
- suecia.ts
- canada.ts
- catar.ts
- chequia.ts
- togo.ts
- chipre.ts
- guias/colombia.ts
- alemania.ts
- belice.ts
- bermudas.ts
- guias/bolivia.ts
- guias/cuba.ts
- camerun.ts
- guias/el-salvador.ts
- emiratos-arabes-unidos.ts
- chad.ts
- guias/costa-rica.ts
- dinamarca.ts
- etiopia.ts
- guias/ecuador.ts
- egipto.ts
- gabon.ts
- georgia.ts
- eslovaquia.ts
- grecia.ts
- estados-unidos.ts
- esuatini.ts
- hong-kong.ts
- filipinas.ts
- iran.ts
- irlanda.ts
- finlandia.ts
- islas-caiman.ts
- groenlandia.ts
- israel-y-palestina.ts
- guias/guatemala.ts
- guias/japon.ts
- kirguistan.ts
- hungria.ts
- irak.ts
- libano.ts
- islas-cook.ts
- kazajistan.ts
- kenia.ts
- kiribati.ts
- turkmenistan.ts
- malasia.ts
- uganda.ts
- malta.ts
- oman.ts
- paises-bajos.ts
- guias/panama.ts
- yibuti.ts
- myanmar.ts
- san-cristobal-y-nieves.ts
- santo-tome-y-principe.ts
- pakistan.ts
- senegal.ts
- tonga.ts
- portugal.ts
- trinidad-y-tobago.ts
- ruanda.ts
- santa-lucia.ts
- tunez.ts
- 20261011120000_lluvia_en_la_valija.sql
- suiza.ts
- tailandia.ts
- timor-oriental.ts
- rls_smoke.sql
- uzbekistan.ts
- CLAUDE.md

## God Nodes (most connected - your core abstractions)
1. `DestinationGuide` - 196 edges
2. `textos()` - 92 edges
3. `vitest` - 81 edges
4. `cn()` - 75 edges
5. `useTextos()` - 62 edges
6. `next` - 53 edges
7. `lucide-react` - 41 edges
8. `react` - 40 edges
9. `Button()` - 36 edges
10. `TripDashboard()` - 32 edges

## Surprising Connections (you probably didn't know these)
- `3. El corredor de cotizaciones` --references--> `budgetConversionStatus()`  [INFERRED]
  docs/agregar-un-pais.md → src/lib/quotes/corridors.ts
- `14.7 Segunda tanda: el Sudeste Asiático` --references--> `budgetConversionStatus()`  [INFERRED]
  spec-mvp-kit-viaje.md → src/lib/quotes/corridors.ts
- `10.3 Una fuente que no se pudo verificar` --references--> `fetchQuotes()`  [INFERRED]
  spec-mvp-kit-viaje.md → src/lib/quotes/fetch.ts
- `12.2 Un corredor sin fuente de cotizaciones, a propósito` --references--> `fetchQuotes()`  [INFERRED]
  spec-mvp-kit-viaje.md → src/lib/quotes/fetch.ts
- `13.2 Países dolarizados` --references--> `fetchQuotes()`  [INFERRED]
  spec-mvp-kit-viaje.md → src/lib/quotes/fetch.ts

## Import Cycles
- None detected.

## Communities (405 total, 301 thin omitted)

### Community 0 - "guias/index.ts"
Cohesion: 0.03
Nodes (54): andorra, arabiaSaudita, argelia, aruba, banglades, barbados, belgica, benin (+46 more)

### Community 1 - "corridors.ts"
Cohesion: 0.09
Nodes (30): 13.3 Venezuela y Cuba: moneda propia, precios en dólares, allQuoteCorridors(), ARGELIA, ARGENTINA, BOLIVIA, BRASIL, budgetConversionStatus(), BURUNDI (+22 more)

### Community 2 - "globe-hero.tsx"
Cohesion: 0.07
Nodes (61): compilar(), crearEsfera(), cargar(), cargarFronteras(), crearTextura(), dibujar(), preparar(), Esfera (+53 more)

### Community 3 - "preparar/page.tsx"
Cohesion: 0.12
Nodes (22): Dato(), DatosQueFaltan(), PrepararPage(), revalidate, formatoFecha, formatoPuntaje, AvoidTable(), ChecklistSections() (+14 more)

### Community 4 - "comidas/index.ts"
Cohesion: 0.09
Nodes (31): argentina, bolivia, brasil, chile, colombia, costaRica, cuba, ecuador (+23 more)

### Community 5 - "guias/types.ts"
Cohesion: 0.04
Nodes (26): australia, brasil, china, comoras, coreaDelSur, costaDeMarfil, eritrea, indonesia (+18 more)

### Community 6 - "servicios.ts"
Cohesion: 0.11
Nodes (28): CeldasDeServicios, contenidoDelServicio(), Marca(), nombreDe(), PanelDeServicios(), Props, TextosDeServicios, GuidePlace (+20 more)

### Community 7 - "comidas/osm.ts"
Cohesion: 0.16
Nodes (17): BusquedaEnElMapa, cerrado(), datosDelServidor(), direccion(), ESTADOS_DE_CERRADO, ETIQUETAS, lugarDelElemento(), lugaresDeLaRespuesta() (+9 more)

### Community 8 - "DestinationGuide"
Cohesion: 0.04
Nodes (28): albania, azerbaiyan, barein, caboVerde, chile, croacia, curazao, estonia (+20 more)

### Community 9 - "textos"
Cohesion: 0.09
Nodes (48): lucide-react, generateMetadata(), base(), DESTINOS, GUIAS, Home(), INICIO, PLANIFICABLES (+40 more)

### Community 10 - "adsb.ts"
Cohesion: 0.11
Nodes (25): Flujos, GET(), avion(), avionesDeLaRespuesta(), esNumero(), ESPERA_MAXIMA_MS, Falla, identificacion() (+17 more)

### Community 11 - "read.ts"
Cohesion: 0.28
Nodes (12): getClimateProfiles, getClimateThresholds, getDestinationById, getPackingCatalog, getPrecipThresholds, getProducts, toTripRecord(), findTrip() (+4 more)

### Community 12 - "vuelos/page.tsx"
Cohesion: 0.12
Nodes (28): EnVivo(), foco(), fuente(), generateMetadata(), OrigenElegido(), RadarCargando(), ResultadosDelServidor(), Sugerido() (+20 more)

### Community 13 - "env"
Cohesion: 0.05
Nodes (38): default, description, type, name, runs-on, steps, timeout-minutes, concurrency (+30 more)

### Community 14 - "servicios/osm.ts"
Cohesion: 0.16
Nodes (18): Limites, ElementoCrudo, Etiquetas, etiquetasDe(), telefono(), condicion(), consultaDeServicios(), MAXIMO_POR_TIPO (+10 more)

### Community 15 - "mapa-de-lugares.tsx"
Cohesion: 0.17
Nodes (22): Celdas, FichaDeLugar(), MapaDeLugares(), esperar(), pedir(), Vista, anoDeLaUltimaNovedad(), ANOS_SIN_NOVEDADES (+14 more)

### Community 16 - "ci.yml"
Cohesion: 0.18
Nodes (10): concurrency, cancel-in-progress, group, name, on, pull_request, push, permissions (+2 more)

### Community 17 - "comidas/overpass.ts"
Cohesion: 0.10
Nodes (31): 6. Si algo pasa, abiertasDeLaRespuesta(), consultaDeMenciones(), consultar(), enCache, SEGUNDOS_EN_CACHE, sigueAbierto(), HOY (+23 more)

### Community 18 - "budget/index.ts"
Cohesion: 0.21
Nodes (12): BudgetLineItem, DEFAULT_STALE_AFTER_DAYS, FreshnessOptions, PriceFreshness, AHORA, conversionRate(), hasAllQuotes(), selectQuote() (+4 more)

### Community 19 - "ficha-de-plato.tsx"
Cohesion: 0.12
Nodes (31): dynamicParams, Numero(), QueComerEnElPais(), revalidate, AccionesDelPlato(), CargandoElMapa(), MapaDeLugares, Props (+23 more)

### Community 20 - "continentes.ts"
Cohesion: 0.09
Nodes (34): 2. La guía (`src/content/guias/<pais>.ts`), next, DestinosDelContinente(), dynamicParams, generateMetadata(), Destinos(), GUIAS, FUENTES (+26 more)

### Community 21 - "useTextos"
Cohesion: 0.11
Nodes (25): 13.1 Antes de sumar países, lo que asumía que había pocos, agruparPorCategoria(), AvisoDeConversion(), BudgetList(), ExportButtons(), agruparPorCategoria(), PackingList(), QtyStepper() (+17 more)

### Community 22 - "database"
Cohesion: 0.07
Nodes (31): env, name, runs-on, services, steps, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, PGDATABASE (+23 more)

### Community 23 - "filtros.ts"
Cohesion: 0.07
Nodes (55): busquedaDe(), Catalogo(), cambiar(), oyentes, Props, suscribir(), ultimaBusqueda, FilaDeOpcion() (+47 more)

### Community 24 - "base.test.ts"
Cohesion: 0.22
Nodes (7): CELDA, cliente, Consulta, consultas, Respuesta, respuestas, MAXIMO_POR_CELDA

### Community 25 - "celdas.ts"
Cohesion: 0.20
Nodes (18): actualizarVista(), vistaAlrededorDe(), esLugar(), lugaresPropios(), Celda, celdaDe(), celdaDelPais(), CELDAS_MAXIMAS (+10 more)

### Community 26 - "aeropuertos.ts"
Cohesion: 0.10
Nodes (33): GET(), Aeropuerto, AEROPUERTOS, AEROPUERTOS_DESCARGADOS, Fila, FUENTE_DE_AEROPUERTOS, nombreDePais(), NOMBRES_DE_LAS_GUIAS (+25 more)

### Community 27 - "que-comer/[slug]/page.tsx"
Cohesion: 0.22
Nodes (13): dynamicParams, FichaEnVentana(), generateStaticParams(), revalidate, dynamicParams, generateMetadata(), generateStaticParams(), PaginaDelPlato() (+5 more)

### Community 28 - "servidor.ts"
Cohesion: 0.07
Nodes (41): 21.1 Cómo están armados los diccionarios, 21. Idiomas, GlobalError(), CONTINENTES_DEL_MENU, geistMono, geistSans, generateMetadata(), RootLayout() (+33 more)

### Community 29 - "migraciones.yml"
Cohesion: 0.07
Nodes (27): concurrency, cancel-in-progress, group, PASSWORD, REF, SUPABASE_ACCESS_TOKEN, SUPABASE_DB_PASSWORD, TOKEN (+19 more)

### Community 30 - "allGuides"
Cohesion: 0.12
Nodes (19): guias, generateStaticParams(), CATALOGOS, generateMetadata(), porZona(), QueComer(), resumen(), generateMetadata() (+11 more)

### Community 31 - "reference.ts"
Cohesion: 0.15
Nodes (24): referenceClient(), DEFAULT_CORRIDOR, DestinationRow, esTablaInexistente(), fail(), getClimateProfiles(), getClimateThresholds(), getDestination() (+16 more)

### Community 32 - "20260826120000_reference_tables.sql"
Cohesion: 0.08
Nodes (24): climate_profiles, climate_thresholds, destinations, packing_catalog, products, products_destination_id_idx, products_set_updated_at, set_updated_at() (+16 more)

### Community 33 - "cargar.ts"
Cohesion: 0.17
Nodes (12): baseDeSupabase(), main(), BaseDeLugares, BYTES_POR_FILA, cargarLugares(), FILAS_POR_TANDA, MB, megas() (+4 more)

### Community 34 - "lugares/route.ts"
Cohesion: 0.19
Nodes (13): error(), GET(), lugaresPropios, pedir(), traerLugares, useServiciosCerca(), esperar(), pedir() (+5 more)

### Community 35 - "zona.ts"
Cohesion: 0.52
Nodes (5): centroDeConsulta(), centroDeZona(), normalizarLongitud(), RADIO_DE_ZONA_KM, rutaDeZona()

### Community 36 - "trip-dashboard.tsx"
Cohesion: 0.33
Nodes (7): RFC-4180, TextosDelViaje, budgetCsv(), cell(), packingCsv(), TextosDelCsv, toCsv()

### Community 37 - "packing/index.ts"
Cohesion: 0.25
Nodes (16): viaje, bucketIndexForTemperature(), orderThresholds(), resolveClimateBuckets(), ResolvedClimate, THRESHOLDS, GeneratedPackingItem, PackingEngineInput (+8 more)

### Community 38 - "fotos.py"
Cohesion: 0.14
Nodes (9): Qué comer (fuera de la base), escribir(), archivos_del_contenido(), buscar(), consultar(), foto(), generar(), pedir() (+1 more)

### Community 39 - "vitest"
Cohesion: 0.27
Nodes (8): vitest, formatAge(), formatDate(), formatDateRange(), formatDistance(), formatMonthYear(), MONEDAS_CON_CENTAVOS, toUtcDate()

### Community 40 - "GlobalSunstone"
Cohesion: 0.10
Nodes (21): Base de datos, CI, Criterios de aceptación, Cuando algo falla, Desarrollo, El flujo, El modelo de acceso en una línea, Estado (+13 more)

### Community 41 - "url.ts"
Cohesion: 0.46
Nodes (5): robots(), ALIAS_DE_VERCEL, redireccionesAlDominio(), Redirect, urlDelSitio()

### Community 42 - "url.ts"
Cohesion: 0.26
Nodes (8): nextConfig, BARRA_DE_PREVIEW, contentSecurityPolicy(), Entorno, entornoActual(), Header, securityHeaders(), VIAJE_HEADERS

### Community 43 - "packing/engine.test.ts"
Cohesion: 0.12
Nodes (17): generatePackingList(), matches(), BUCKETS, FULL_CATALOG, ids(), item(), PROFILES, run() (+9 more)

### Community 44 - "27. El globo: más grande, y los estados del país elegido"
Cohesion: 0.50
Nodes (4): 27.1 Qué cambia, 27.2 De dónde salen los nombres, 27.3 Verificado, 27. El globo: más grande, y los estados del país elegido

### Community 45 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 46 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 47 - "maplibre.ts"
Cohesion: 0.16
Nodes (19): maplibre-gl, contenidoDelPopup(), PlacesMap(), sumarCapaDeServicios(), cargarMapLibre(), mostrarEstados(), ponerEtiquetasEnCastellano(), mapa (+11 more)

### Community 48 - "datos.ts"
Cohesion: 0.80
Nodes (4): getCatalogo(), DatosDelPais, datosDelPais(), mencionesVigentes()

### Community 49 - "climate-year.ts"
Cohesion: 0.11
Nodes (23): ESTILO, MonthStrip(), ORDEN, rango(), guia, resolveRainBuckets(), CALOR_EXIGENTE, EXIGENCIA (+15 more)

### Community 50 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, clsx@^2.1.1, date-fns@^4.4.0, lucide-react@^1.72.0, maplibre-gl@^6.18.0, next@16.4.6, radix-ui@^1.8.1, @radix-ui/react-slot@^1.5.0 (+11 more)

### Community 51 - "create.ts"
Cohesion: 0.14
Nodes (11): 10.6 El viaje tiene que saber a qué país es, getDestination, createTrip(), FILA, getDestination, getDestinationById, single, VIAJE (+3 more)

### Community 52 - "estados.py"
Cohesion: 0.20
Nodes (9): agrupados(), anillos(), contiene(), dentro_del_anillo(), distancia_km(), estados_del_pais(), main(), nombre() (+1 more)

### Community 53 - "Configurar Supabase"
Cohesion: 0.12
Nodes (16): 1. Crear el proyecto, 2. Copiar las tres claves, 3. Aplicar las migraciones, 4. Verificar que quedó bien, 5. Correr la app en local, 6. Configurar Vercel, 7. Probarlo de punta a punta, A mano, si preferís no darle las llaves a CI (+8 more)

### Community 54 - "devDependencies"
Cohesion: 0.12
Nodes (22): description, devDependencies, tailwindcss@^4, @tailwindcss/postcss@^4, tsx@^4.23.15, tw-animate-css@^1.4.0, @types/node@^26, @types/react@^19 (+14 more)

### Community 56 - "analytics.tsx"
Cohesion: 0.46
Nodes (5): @vercel/analytics@^2.0.1, @vercel/analytics, Analytics(), esRutaDeViaje(), redactarUrl()

### Community 57 - "guia/[slug]/page.tsx"
Cohesion: 0.11
Nodes (27): class-variance-authority@^0.7.1, class-variance-authority, react, Error(), dynamicParams, generateMetadata(), GuidePage(), generateMetadata() (+19 more)

### Community 58 - "trip-dashboard.tsx"
Cohesion: 0.09
Nodes (43): 21.2 Lo que ya está en diccionarios, generateMetadata(), TripPage(), generateMetadata(), SharedTripPage(), CALENDARIO, DestinationOption, diasEntre() (+35 more)

### Community 59 - "Administrar Kit de viaje"
Cohesion: 0.14
Nodes (14): 1. Las llaves del proyecto, 2. Lo que se hace una sola vez, 3. La rutina, 4. Cómo se cambia algo, 5. Trabajar con IA (y con personas) sin darles las llaves, 7. Mapa de secretos, Administrar Kit de viaje, adsb.lol (los aviones del radar) (+6 more)

### Community 60 - "updates"
Cohesion: 0.13
Nodes (14): menores, dependency-name, update-types, update-types, day, interval, updates, directory (+6 more)

### Community 61 - "cupo.ts"
Cohesion: 0.16
Nodes (13): @supabase/supabase-js@^2.119.0, server-only, @supabase/supabase-js, adminClient(), requireEnv(), claveDeCliente(), consumirCupoDeViaje(), CUPO_GLOBAL_POR_HORA (+5 more)

### Community 62 - "servicios/overpass.ts"
Cohesion: 0.24
Nodes (11): error(), GET(), pedir(), traerServicios, ESPERA_MAXIMA_MS, consultarServicios(), enCache, ResultadoDeServicios (+3 more)

### Community 63 - "corredor/generar.py"
Cohesion: 0.23
Nodes (10): bucket(), buckets(), esperadas(), glosa(), lit(), migracion(), num(), t() (+2 more)

### Community 64 - "Datos"
Cohesion: 0.15
Nodes (13): `climate_profiles` — doce filas por ciudad, `climate_thresholds` — los buckets de clima, Cómo se cambian los datos, Datos, `destinations` — una fila por ciudad, Funciones de la base, Las reglas y dónde se hacen cumplir, `packing_catalog` — el catálogo de equipaje, global (+5 more)

### Community 65 - "fronteras.py"
Cohesion: 0.19
Nodes (4): dibujar(), lineas(), main(), tramos_sin_salto()

### Community 66 - "buscarDestinos"
Cohesion: 0.60
Nodes (4): buscarDestinos(), normalizar(), DESTINOS, nombres()

### Community 67 - "14. Asia: la base"
Cohesion: 0.15
Nodes (13): 14.10 Cuarta tanda: el Cáucaso y Asia Central, 14.11 Lo que quedaba de Asia, 14.12 La lluvia entra en la valija, 14.1 Zonas, 14.2 Alcance, 14.3 Monedas, 14.4 Lo que se corrigió antes de sumar países, 14.5 Lo que queda abierto (+5 more)

### Community 68 - "aeropuertos/generar.py"
Cohesion: 0.29
Nodes (5): Aeropuertos (fuera de la base), claves(), coordenada(), generar(), icao()

### Community 69 - "vitest"
Cohesion: 0.12
Nodes (28): Estado, FichaDeVuelo(), icono(), Radar(), alVolver(), buscar(), programar(), textoDeZona() (+20 more)

### Community 71 - "15. África"
Cohesion: 0.18
Nodes (11): 15.10 Sexta tanda: Togo, Benín, Liberia, Sierra Leona, Guinea, Comoras, Yibuti y Eritrea, 15.1 Zonas, 15.2 Alcance, 15.3 Monedas, 15.4 La entrada también es salud, 15.5 Primera tanda: Marruecos, Egipto, Túnez, Sudáfrica, Kenia y Tanzania, 15.6 Segunda tanda: el sur de África, las islas del Índico, Cabo Verde y Senegal, 15.7 Tercera tanda: Madagascar, Malaui, Ghana, Costa de Marfil, Gambia, Lesoto, Esuatini y Santo Tomé y Príncipe (+3 more)

### Community 72 - "18. Qué comer y beber"
Cohesion: 0.18
Nodes (11): 18.10 Los lugares, con datos propios, 18.1 Qué es, y lo que se corrigió del pedido, 18.2 Las páginas, 18.3 El catálogo, los filtros y la ficha, 18.4 El mapa de lugares: la regla de la frescura, 18.5 Menciones de honor y negocios, 18.6 Las fotos, 18.7 Fuentes, licencias y costos (+3 more)

### Community 73 - "Spec MVP — Kit de viaje (packing + presupuesto) para corredores volátiles"
Cohesion: 0.17
Nodes (12): 1. Resumen del producto, 20. La marca: GlobalSunstone, 25.1 Verificado, 25. El globo: fronteras y estados, 2. Alcance del MVP, 3.1 Filas ralas: el cero es ausencia de fila, 3. Modelo de datos, 4. Motor de packing (+4 more)

### Community 74 - "8. Guía de destino"
Cohesion: 0.18
Nodes (11): 7.1 Qué se ve cuando algo falla, 8.1 Estructura: cuatro páginas, no una, 8.2 Modelo de contenido: en el repo, no en Postgres, 8.3 Los cuatro números de la guía, 8.4 El bloque de información: qué se dice y qué no, 8.5 Puntajes (borrador editorial, para corregir), 8.6 Imágenes, 8.7 Cotizaciones en vivo (+3 more)

### Community 75 - "El plan, en PRs"
Cohesion: 0.20
Nodes (9): 1. Auditoría SEO (diagnóstico, sin cambios), 2. Infraestructura de afiliados (sin cuentas todavía), 3. Dónde van los enlaces, 4. Registro de clics salientes, El plan, en PRs, Lo que decide el dueño del sitio, Monetización, Prioridades mientras tanto (+1 more)

### Community 76 - "19. La navegación y la portada"
Cohesion: 0.20
Nodes (10): 19.1 La barra de arriba, 19.2 El pie, 19.3 Destinos: la lista se muda, 19.4 Nosotros, 19.5 El hero: la foto y el globo, 19.6 Las secciones de la portada, 19.7 El globo con la foto de la Tierra, 19.8 El dominio propio (+2 more)

### Community 77 - "extracto.ts"
Cohesion: 0.26
Nodes (9): RFC-8142, coincide(), centroDe(), elementoDeLaLinea(), filasDelElemento(), filasDelExtracto(), filtroDeOsmium(), HOY (+1 more)

### Community 78 - "ubicacion.ts"
Cohesion: 0.31
Nodes (6): ciudad(), Encabezados, numero(), BUENOS_AIRES, UbicacionAproximada, ubicacionAproximada()

### Community 79 - "Arquitectura"
Cohesion: 0.25
Nodes (8): Arquitectura, Cómo se prueba, Decisiones que conviene conocer antes de cambiar algo, Dónde mirar primero, En una frase, Lo que queda abierto, Piezas, Rutas y cómo se renderiza cada una

### Community 80 - "11. El viaje se planifica para una ciudad, no para un país"
Cohesion: 0.22
Nodes (9): 10.7 La fuente brasileña, ya verificada, 10.8 Lo que la segunda moneda destapó en la UI, 11.1 Una ciudad base explícita por corredor, 11.2 El bucket 'templado' era demasiado ancho, 11.3 Precios por ciudad, con un factor y no con ciento sesenta números, 11.4 "Condiciones actuales" también es por ciudad, 11.5 "Ninguno" no es "s/d", 11.6 Los dieciocho destinos son planificables (+1 more)

### Community 81 - "22. Norteamérica y el Caribe que no habla español"
Cohesion: 0.22
Nodes (9): 22.1 Alcance, 22.2 Una zona nueva: Norteamérica, 22.3 Más de nueve ciudades, 22.4 Monedas, 22.5 Lo que aporta cada país, 22.6 Verificado, 22.7 Tanda 2: el resto del Caribe, Guyana y Surinam, 22.8 Tanda 3: Puerto Rico, los territorios y Groenlandia (+1 more)

### Community 82 - "cn"
Cohesion: 0.10
Nodes (38): radix-ui, VentanaDeFicha(), Desplegable(), Encabezado(), EnlaceDelMenu(), EnlaceDelTelefono(), estiloDeItem(), GrupoDelTelefono() (+30 more)

### Community 83 - "durationInDays"
Cohesion: 0.40
Nodes (7): CAJAS, GUIDE_FACTS_MAX_AGE_DAYS, CalendarDate, durationInDays(), monthsCovered(), parseIsoDate(), toUtcMillis()

### Community 85 - "Seguridad"
Cohesion: 0.25
Nodes (8): Amenazas y controles, Auditoría del 2026-10-08, Cómo verificarlo, Modelo de acceso, Qué hay que proteger, Reportar un problema, Riesgos que quedan, a sabiendas, Seguridad

### Community 86 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, dev, lint, start, test, test:watch, typecheck

### Community 88 - "city-switcher.tsx"
Cohesion: 0.23
Nodes (8): CitySwitcher(), CityGroup, groupCitiesByRegion(), Destination, TripPackingEntry, TripRecord, TripSummary, TripView

### Community 89 - "Agregar un país"
Cohesion: 0.29
Nodes (7): 1. Qué archivos se tocan, 3. El corredor de cotizaciones, 4. La migración, 5. Verificación, en este orden, 6. Y lo que de verdad rompió Bolivia, 7. La lista corta, Agregar un país

### Community 90 - "10. Segundo corredor: Brasil"
Cohesion: 0.33
Nodes (6): 10.1 Las cotizaciones dejan de ser cuatro, 10.2 Los nombres de los campos también son dato, 10.3 Una fuente que no se pudo verificar, 10.4 Río de Janeiro: los doce meses piden lo mismo, 10.5 Dos marcadores en el globo, 10. Segundo corredor: Brasil

### Community 91 - "9. Página de preparación — "Condiciones actuales""
Cohesion: 0.29
Nodes (7): 9.1 La temporada sale de los extremos, no del promedio, 9.2 Cada mes abarca varios buckets, 9.3 Los chips se ordenan por bucket principal y después por especificidad, 9.4 Dinámica con ISR, no prerenderizada, 9.5 Lo que esta página todavía no tiene, 9.6 Parte 2: la checklist editorial, 9. Página de preparación — "Condiciones actuales"

### Community 92 - "mutate.test.ts"
Cohesion: 0.29
Nodes (6): borrar, getPackingCatalog, getProducts, resolveTripByEditToken, upsert, VIAJE

### Community 93 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.4.6, eslint, eslint-config-next

### Community 94 - "16. Oceanía"
Cohesion: 0.33
Nodes (6): 16.1 Zonas, 16.2 Alcance, 16.3 Monedas, 16.4 El antimeridiano, 16.5 La tanda: diecisiete destinos, 16. Oceanía

### Community 95 - "17. Vuelos"
Cohesion: 0.33
Nodes (6): 17.1 Qué es, y lo que se corrigió del pedido, 17.2 Fuentes, licencias y costos, 17.3 La base: los aeropuertos, tu ciudad y "Salgo desde", 17.4 Lo que viene, 17.5 En vivo: el radar por zonas, 17. Vuelos

### Community 96 - "23. Nieve: estaciones de esquí en el planificador"
Cohesion: 0.33
Nodes (6): 23.1 Seis estaciones, 23.2 El presupuesto de una estación, 23.3 Guantes y ropa térmica, 23.4 Texto nuevo en guías con voseo, 23.5 Verificado, 23. Nieve: estaciones de esquí en el planificador

### Community 99 - "item-write.ts"
Cohesion: 0.40
Nodes (4): ItemPatch, ItemState, ItemWrite, resolveItemWrite()

### Community 100 - "12. Tercer corredor: Bolivia"
Cohesion: 0.40
Nodes (5): 12.1 Acá la valija no la decide la estación, la decide la altura, 12.2 Un corredor sin fuente de cotizaciones, a propósito, 12.3 El test de destinos planificables dejó de nombrar países, 12.4 Quince ciudades, y el selector agrupado por región, 12. Tercer corredor: Bolivia

### Community 101 - "26. Servicios para viajeros en el mapa de la guía"
Cohesion: 0.40
Nodes (5): 26.1 Qué se muestra, 26.2 Cuándo se le pregunta a OpenStreetMap, 26.3 Lo que queda para después, 26.4 Verificado, 26. Servicios para viajeros en el mapa de la guía

### Community 103 - "24. El mapa de la guía: estados y provincias"
Cohesion: 0.50
Nodes (4): 24.1 De Leaflet a MapLibre, 24.2 Los lugares más importantes, 24.3 Verificado, 24. El mapa de la guía: estados y provincias

### Community 104 - "validate.ts"
Cohesion: 0.19
Nodes (20): FALLO_DE_BASE, falloDeBase(), leerPackingItem(), PackingItemPatch, setBudgetItemQty(), setPackingItem(), SIN_PERMISO, resolveTripByEditToken() (+12 more)

### Community 112 - "live-quotes.tsx"
Cohesion: 0.23
Nodes (15): columnas(), encabezado(), formatoBrecha, formatoHora(), LiveQuotes(), LiveQuotesSkeleton(), Marco(), SinConversion() (+7 more)

### Community 113 - "budget/engine.ts"
Cohesion: 0.20
Nodes (12): calculateBudget(), generateBudgetList(), CATALOGO, QUOTES, VIAJE, toBudgetLine(), fromCents(), roundToCents() (+4 more)

### Community 117 - "month-cards.tsx"
Cohesion: 0.31
Nodes (6): mismoClimaTodoElAño(), MonthCards(), temperatura(), suggestItemsForBuckets(), CATALOGO, TODOS

### Community 121 - "13. América Latina completa"
Cohesion: 0.29
Nodes (7): 13.2 Países dolarizados, 13.4 Ninguna fuente de cotizaciones nueva, 13.5 La ciudad base es la capital, con una excepción, 13.6 Las migraciones se generaron, no se tipearon, 13.7 Un test que estaba mal, 13.8 Verificado en la app, no solo en los tests, 13. América Latina completa

### Community 122 - "ExchangeQuote"
Cohesion: 0.39
Nodes (5): BudgetTotals, ExchangeQuote, latestQuoteUpdate(), QuoteSpread, resolveQuoteSpreads()

### Community 129 - "20261111120000_lugares_de_comida.sql"
Cohesion: 0.67
Nodes (3): extractos_de_comida, lugares_de_comida, lugares_de_comida_por_celda

## Knowledge Gaps
- **2 isolated node(s):** `RFC-4180`, `RFC-8142`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 899 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **301 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `vitest` to `corridors.ts`, `globe-hero.tsx`, `preparar/page.tsx`, `servicios.ts`, `comidas/osm.ts`, `textos`, `adsb.ts`, `vuelos/page.tsx`, `servicios/osm.ts`, `mapa-de-lugares.tsx`, `comidas/overpass.ts`, `budget/index.ts`, `ficha-de-plato.tsx`, `continentes.ts`, `useTextos`, `filtros.ts`, `base.test.ts`, `celdas.ts`, `aeropuertos.ts`, `servidor.ts`, `allGuides`, `reference.ts`, `cargar.ts`, `lugares/route.ts`, `zona.ts`, `trip-dashboard.tsx`, `packing/index.ts`, `url.ts`, `url.ts`, `packing/engine.test.ts`, `maplibre.ts`, `climate-year.ts`, `create.ts`, `devDependencies`, `analytics.tsx`, `trip-dashboard.tsx`, `cupo.ts`, `servicios/overpass.ts`, `buscarDestinos`, `vitest`, `extracto.ts`, `ubicacion.ts`, `cn`, `durationInDays`, `city-switcher.tsx`, `mutate.test.ts`, `item-write.ts`, `QuantityRule`, `validate.ts`, `live-quotes.tsx`, `budget/engine.ts`, `month-cards.tsx`, `ExchangeQuote`, `destinos-planificables.test.ts`?**
  _High betweenness centrality (0.140) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `textos()` (e.g. with `21.1 Cómo están armados los diccionarios` and `21.2 Lo que ya está en diccionarios`) actually correct?**
  _`textos()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `RFC-4180`, `RFC-8142` to the rest of the system?**
  _2 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `guias/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.028032345013477088 - nodes in this community are weakly interconnected._
- **Why does `Spec MVP — Kit de viaje (packing + presupuesto) para corredores volátiles` connect `Spec MVP — Kit de viaje (packing + presupuesto) para corredores volátiles` to `servidor.ts`, `27. El globo: más grande, y los estados del país elegido`, `14. Asia: la base`, `15. África`, `18. Qué comer y beber`, `8. Guía de destino`, `19. La navegación y la portada`, `11. El viaje se planifica para una ciudad, no para un país`, `22. Norteamérica y el Caribe que no habla español`, `README.md`, `10. Segundo corredor: Brasil`, `9. Página de preparación — "Condiciones actuales"`, `16. Oceanía`, `17. Vuelos`, `23. Nieve: estaciones de esquí en el planificador`, `12. Tercer corredor: Bolivia`, `26. Servicios para viajeros en el mapa de la guía`, `24. El mapa de la guía: estados y provincias`, `13. América Latina completa`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `useTextos()` (e.g. with `21.1 Cómo están armados los diccionarios` and `21.2 Lo que ya está en diccionarios`) actually correct?**
  _`useTextos()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `corridors.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09230769230769231 - nodes in this community are weakly interconnected._