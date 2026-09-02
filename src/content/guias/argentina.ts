import type { DestinationGuide } from "./types";

/**
 * Guía de Argentina (spec, sección 8).
 *
 * Borrador editorial. Las reglas de 8.4 aplican a `facts` y no son estilo:
 * nada de "alertas de seguridad", ningún número volátil en prosa (sin
 * cotizaciones, sin precios, sin tarifas — eso lo resuelven la API de la
 * sección 5 y el catálogo con `updated_at` de la sección 3), y la fecha de
 * revisión visible arriba del bloque.
 *
 * Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 */
export const argentina: DestinationGuide = {
  slug: "argentina",
  country: "Argentina",
  subhead:
    "Un país que va del trópico al hielo y donde el dólar tiene más de un precio. Las dos cosas cambian lo que llevás y lo que gastás.",

  // El hero es el globo; esta foto encabeza el bloque informativo (spec, 8.6).
  image: null,

  highlights: [
    {
      value: "4",
      label: "cotizaciones simultáneas",
      note: "Oficial, blue, MEP y CCL. Cuál usás cambia el total, no el redondeo.",
    },
    {
      value: "UTC−3",
      label: "todo el año",
      note: "Sin horario de verano: la diferencia con tu país no se mueve durante el viaje.",
    },
    {
      value: "90 días",
      label: "sin visa",
      note: "Para la mayoría de los pasaportes de América y la Unión Europea. Verificá el tuyo.",
    },
    {
      value: "3.700 km",
      label: "de norte a sur",
      note: "De Jujuy a Ushuaia. No es un destino: son varios climas a la vez.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Por qué hay más de un dólar",
      body: [
        "En Argentina conviven varias cotizaciones para la misma moneda. La oficial es la del banco central; el blue es el mercado paralelo; MEP y CCL salen de comprar y vender bonos, y son las que usa quien mueve montos en blanco. No son estafas ni curiosidades: son mercados distintos con precios distintos, y el mismo gasto cambia de tamaño según cuál mires.",
        "Qué cotización te toca depende de cómo pagues: efectivo y tarjeta no siempre van por el mismo camino, y el esquema que rige para consumos de turistas con tarjeta cambió varias veces en los últimos años. Confirmá cuál está vigente antes de viajar; acá no ponemos el número porque el número envejece en semanas.",
        "Por eso el planificador de más abajo te deja pivotar entre las cuatro y ver el mismo presupuesto en cada una, con la cotización del día.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Hemisferio sur: las estaciones están invertidas respecto de Europa y Norteamérica. Enero es pleno verano y en Buenos Aires es húmedo y pesado; julio es invierno y la ciudad se pone gris y fría, aunque rara vez nieva.",
        "La Patagonia tiene temporada corta y concentrada entre noviembre y marzo, con viento casi siempre. El norte y las Cataratas del Iguazú funcionan casi todo el año, con calor y humedad altos en verano. Mendoza y la cordillera se disfrutan en otoño, con la vendimia.",
        "El planificador usa el clima histórico del mes elegido, no un pronóstico. Con meses de anticipación un pronóstico no existe; el promedio de ese mes sí, y es lo que sirve para decidir qué meter en la valija.",
      ],
    },
    {
      id: "moverse",
      title: "Las distancias son continentales",
      body: [
        "Es el error de planificación más común: armar un itinerario como si el país entrara en una semana. Buenos Aires a Ushuaia es una distancia comparable a cruzar Europa entera, y no hay atajo.",
        "Los vuelos internos ahorran días pero se llevan una parte grande del presupuesto y conviene reservarlos con tiempo. Los micros de larga distancia son genuinamente buenos —asientos que se hacen cama, servicio a bordo— y son parte de la experiencia, pero un solo tramo puede ser una noche entera de viaje.",
        "La conclusión práctica: elegí dos regiones, no cinco. Un viaje de dos semanas rinde mucho más con Buenos Aires más una región que intentando cubrir el país.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad grande de América Latina: atención al celular en la calle y en el transporte, nada de valor a la vista, y sentido común con los taxis nocturnos. No hace falta viajar en estado de alerta, sí prestar atención.",
        "Cambiá plata en lugares establecidos, nunca con alguien que te aborde en la calle ofreciendo una cotización mejor. Ese es el punto donde un turista pierde dinero con más frecuencia.",
        "Llevá algo de efectivo aunque la tarjeta funcione. Ferias, mercados, remises y pueblos chicos siguen siendo territorio de efectivo, y quedarse sin billetes un domingo es un problema evitable.",
      ],
    },
  ],

  factsUpdatedAt: "2026-09-01",

  scores: [
    {
      dimension: "Naturaleza y paisajes",
      score: 9.5,
      rationale:
        "Glaciares, selva subtropical, puna, Atlántico y Andes en un solo país. Pocos destinos ofrecen ese rango.",
    },
    {
      dimension: "Gastronomía",
      score: 9,
      rationale:
        "Carne y vino de nivel mundial a precio de comida cotidiana, más una escena de café y de cocina italiana propia.",
    },
    {
      dimension: "Vida urbana y cultura",
      score: 9,
      rationale:
        "Buenos Aires sostiene teatro, librerías y música en vivo a una escala poco común en la región.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Alta para quien llega con divisa, con la advertencia de que se mueve con la inflación.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Las distancias son grandes, los tramos internos caros y el efectivo sigue importando.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 4,
      rationale:
        "Es el punto débil declarado, y es exactamente el problema que esta herramienta ataca.",
    },
  ],

  shines: [
    "El rango de paisajes que entran en un solo viaje.",
    "Comer y tomar bien sin que sea un gasto excepcional.",
    "Una capital con vida cultural propia, no de vitrina.",
  ],

  costs: [
    "Las distancias obligan a elegir: no se hace Iguazú y Ushuaia en una semana.",
    "Los precios se mueven entre que planificás y que viajás.",
    "Hay que entender el sistema cambiario antes de llegar, no en la ventanilla.",
  ],

  dataScopeNote:
    "Las listas y los presupuestos del planificador están calibrados para Buenos Aires. La guía habla del país; los cálculos, de la ciudad.",

  /*
    Nueve destinos, agrupados en cuatro regiones. El criterio no fue "los más
    lindos" sino los que anclan un itinerario: si alguien arma dos semanas de
    viaje, sale de esta lista. Por eso están las distancias incómodas —Ushuaia
    e Iguazú en puntas opuestas— y no una lista de veinte lugares que nadie
    combina.

    Las coordenadas son del centro de cada localidad, no del atractivo: el pin
    de El Calafate marca el pueblo donde se duerme, no el glaciar.
  */
  places: [
    {
      id: "buenos-aires",
      name: "Buenos Aires",
      region: "Buenos Aires",
      tag: "Capital y cultura",
      blurb:
        "Librerías abiertas hasta tarde, teatro independiente, parrillas de barrio y café de especialidad. Es la puerta de entrada de casi todos los viajes, y la única ciudad del país que se sostiene sola una semana entera.",
      coords: [-34.6037, -58.3816],
      featured: true,
      image: null,
    },
    {
      id: "el-calafate",
      name: "El Calafate",
      region: "Patagonia",
      tag: "Glaciares",
      blurb:
        "La base para el Perito Moreno, uno de los pocos glaciares del mundo que todavía avanza y se puede ver desde pasarelas sin equipo técnico. Temporada de noviembre a marzo.",
      coords: [-50.3379, -72.2648],
      image: null,
    },
    {
      id: "el-chalten",
      name: "El Chaltén",
      region: "Patagonia",
      tag: "Trekking",
      blurb:
        "Un pueblo hecho para caminar: los senderos al Fitz Roy y la Laguna de los Tres salen del centro, sin traslados ni guía obligatoria. Tres horas en auto desde El Calafate.",
      coords: [-49.3315, -72.8863],
      image: null,
    },
    {
      id: "bariloche",
      name: "Bariloche",
      region: "Patagonia",
      tag: "Lagos y montaña",
      blurb:
        "Lagos, bosque andino y cerros a la vez, con la infraestructura turística más armada de la Patagonia. Funciona en verano para caminar y en invierno para esquiar.",
      coords: [-41.1335, -71.3103],
      image: null,
    },
    {
      id: "puerto-madryn",
      name: "Puerto Madryn",
      region: "Patagonia",
      tag: "Fauna marina",
      blurb:
        "La entrada a Península Valdés: ballenas francas entre junio y diciembre, pingüinos, elefantes y lobos marinos. Es fauna en su ambiente, no un parque.",
      coords: [-42.7692, -65.0385],
      image: null,
    },
    {
      id: "ushuaia",
      name: "Ushuaia",
      region: "Patagonia",
      tag: "Fin del mundo",
      blurb:
        "La ciudad más austral del país, entre el canal Beagle y los Andes. Es el punto más caro y más lejano de cualquier itinerario: conviene decidirlo temprano, no agregarlo al final.",
      coords: [-54.8019, -68.303],
      image: null,
    },
    {
      id: "iguazu",
      name: "Cataratas del Iguazú",
      region: "Norte y Litoral",
      tag: "Selva y saltos",
      blurb:
        "Doscientas setenta y cinco caídas en plena selva subtropical, con pasarelas de los dos lados de la frontera. Anda todo el año, con calor y humedad altos en verano.",
      coords: [-25.6953, -54.4367],
      image: null,
    },
    {
      id: "salta",
      name: "Salta y las quebradas",
      region: "Norte y Litoral",
      tag: "Quebradas y puna",
      blurb:
        "Cerros de colores, pueblos coloniales y la ruta a las Salinas Grandes por la Quebrada de Humahuaca. La altura se siente: conviene aclimatarse antes de subir a la puna.",
      coords: [-24.7859, -65.4117],
      image: null,
    },
    {
      id: "mendoza",
      name: "Mendoza",
      region: "Cuyo",
      tag: "Vino y cordillera",
      blurb:
        "Bodegas al pie de los Andes, con el Aconcagua a una excursión de distancia. El otoño trae la vendimia, que es cuando la ciudad se pone interesante de verdad.",
      coords: [-32.8895, -68.8458],
      image: null,
    },
  ],
};
