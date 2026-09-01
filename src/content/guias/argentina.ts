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
};
