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
  preparation: {
    quickAnswer:
      "Buenos Aires no tiene un mes imposible, pero sí cuatro incómodos: enero y febrero pasan de 30 °C con humedad alta, y julio y diciembre tienen sus propios extremos. Si podés elegir, apuntá a abril, mayo, septiembre, octubre o noviembre: días templados, noches que no obligan a abrigo pesado y menos lluvia.",
    keyPoints: [
      "Las estaciones están invertidas respecto del hemisferio norte: enero es pleno verano y julio es invierno.",
      "La amplitud térmica es real todo el año. Una tarde de 26 °C puede terminar en una noche de 14: una campera liviana entra en cualquier valija.",
      "El país es largo. Estos números son de Buenos Aires; Ushuaia y Salta juegan otro partido y hay que sumarles su propia ropa.",
      "La lluvia se reparte a lo largo del año en vez de concentrarse en una estación: no hay un mes que se pueda descartar por lluvioso, ni uno que garantice seco.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y transpirable, y algo de manga larga para el aire acondicionado y para el sol de la siesta. La humedad hace que se sienta más caluroso de lo que marca el termómetro.",
      templado:
        "El mes más fácil de empacar: capas livianas y una campera fina para la noche. Con esto alcanza salvo que sumes Patagonia.",
      frio: "Capas de verdad: térmica, abrigo y algo que corte el viento. No es nieve, pero la humedad hace que el frío se sienta más de lo que dice el número.",
    },
    plug: {
      types: "Tipo C y tipo I",
      voltage: "220 V, 50 Hz",
      note: "Los enchufes tipo I son de tres patas planas en ángulo. Si venís de Norteamérica necesitás adaptador y, según el aparato, conversor de voltaje.",
    },
    tips: {
      dos: [
        {
          title: "Enrollá la ropa en vez de doblarla",
          body: "Ocupa menos y llega con menos marcas de plegado. Funciona mejor con remeras y ropa liviana que con un saco, que conviene poner arriba y plano.",
        },
        {
          title: "Usá bolsas u organizadores por categoría",
          body: "Una para ropa limpia, una para usada, una para lo que necesitás a mano. Buscar algo deja de significar deshacer la valija entera.",
        },
        {
          title: "Sacale una foto a tus documentos",
          body: "Pasaporte, seguro y pasajes, guardados en el teléfono y en algún lado que no dependa del teléfono. Si se pierde el original, esa foto es la diferencia entre un trámite y un problema.",
        },
        {
          title: "Descargá los mapas antes de salir",
          body: "El subte de Buenos Aires no tiene señal en los andenes y la conexión en la Patagonia es despareja. Un mapa offline resuelve las dos cosas.",
        },
        {
          title: "Empacá la noche anterior, no la mañana de salida",
          body: "Te da tiempo de revisar la lista con la cabeza fría. Casi todo lo que se olvida se olvida apurado.",
        },
        {
          title: "Pesá la valija antes de ir al aeropuerto",
          body: "El exceso de equipaje se cobra en el mostrador y sale bastante más que en el momento de comprar el pasaje. Una pesa de mano cuesta poco y se paga sola.",
        },
      ],
      donts: [
        {
          title: "No empaques todo en un solo compartimento",
          body: "Encontrar cualquier cosa te obliga a sacar todo lo demás, y volver a acomodarlo cada vez desgasta la ropa y la paciencia.",
        },
        {
          title: "No lleves demasiados pares de zapatos",
          body: "Es lo que más volumen ocupa por unidad. Con un par cómodo para caminar y uno que sirva para salir alcanza para casi cualquier viaje.",
        },
        {
          title: "No des por hecho que no vas a necesitar abrigo",
          body: "La amplitud térmica de Buenos Aires es real todo el año: una tarde de 26 °C puede terminar en una noche de 14. Una campera liviana entra en cualquier valija.",
        },
        {
          title: "No lleves los productos de higiene en envases grandes",
          body: "Pasalos a envases de viaje o compralos allá. Es peso y volumen que se puede evitar entero, y encima es lo que más riesgo tiene de abrirse.",
        },
        {
          title: "No empaques ropa que no vas a usar",
          body: "El atuendo para la ocasión que quizá no pase es el clásico que vuelve sin estrenar. Empacá para el viaje que vas a hacer, no para el que imaginás.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Si la valija se demora, el viaje sigue igual.",
        },
      ],
    },
    checklists: [
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "warn",
          title: "El enchufe no es el mismo",
          body: "El tipo I argentino es de tres patas planas en ángulo, y no acepta enchufes norteamericanos ni europeos sin adaptador. Consíguelo antes de viajar: en el aeropuerto siempre sale más caro.",
        },
        summary: "Lo que conviene llevar cargado y con qué enchufarlo",
        items: [
          "Adaptador de enchufe tipo C o tipo I",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano — las aerolíneas no las aceptan despachadas",
          "Auriculares",
          "Zapatilla o regleta chica: convierte un adaptador en cuatro tomas",
        ],
      },
      {
        id: "aseo",
        title: "Artículos de aseo",
        notice: {
          tone: "info",
          title: "Casi todo se consigue allá",
          body: "Farmacias y supermercados tienen la góndola completa y a precio local. Llevá lo justo para los primeros días y comprá el resto al llegar.",
        },
        summary: "Lo mínimo, en envases de viaje",
        items: [
          "Cepillo y pasta de dientes",
          "Desodorante",
          "Shampoo y jabón en envase chico, o en barra para evitar líquidos",
          "Protector solar: el sol del verano y el de altura pegan fuerte",
          "Toalla de microfibra, solo si vas a alojamientos que no la incluyen",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Llevá tu medicación en su envase original",
          body: "Con la receta, y en el bolso de mano. Un remedio que tomás todos los días no es algo que quieras estar buscando en una farmacia desconocida.",
        },
        summary: "Botiquín básico y qué conviene consultar antes",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y antiácido",
          "Repelente, sobre todo en el Litoral y las Cataratas",
          "Curitas y antiséptico",
          "Seguro de viaje con cobertura médica: la atención de urgencia en hospital público es gratuita, pero la privada no",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Ropa de abrigo aunque el pronóstico diga calor: las noches bajan",
          "Entretenimiento offline para los tramos largos — el país es grande y los trayectos también",
          "Snacks y botella reutilizable",
          "Protector solar y gorro: los horarios argentinos son tardíos y se termina al sol más de lo previsto",
        ],
      },
    ],
    avoid: [
      {
        leave: "Demasiadas remeras de algodón",
        why: "El algodón retiene la humedad y tarda mucho en secarse, que es justo lo que no querés en el verano húmedo del Litoral.",
        instead:
          "Menos remeras, de secado rápido, lavadas en el lavatorio cuando haga falta.",
      },
      {
        leave: "Vaqueros pesados",
        why: "Pesan, ocupan y tardan una eternidad en secar si se mojan.",
        instead: "Un pantalón liviano de viaje, y a lo sumo un jean.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Es de lo más voluminoso que podés meter, y la mayoría de los alojamientos ya te dan una.",
        instead: "Una toalla de microfibra, si acaso.",
      },
      {
        leave: "Zapatos de vestir",
        why: "El estilo porteño es más informal de lo que suele imaginarse desde afuera.",
        instead:
          "Un par cómodo para caminar y uno que sirva para salir de noche.",
      },
      {
        leave: "Demasiada ropa formal",
        why: "Salvo un evento puntual, casi ningún lugar de Buenos Aires exige saco y corbata.",
        instead: "Un conjunto prolijo alcanza para cualquier salida.",
      },
      {
        leave: "La notebook, si no vas a trabajar",
        why: "Es peso, es volumen y es lo que más cuidado te obliga a tener encima.",
        instead:
          "El teléfono, que resuelve mapas, fotos, traducción y reservas.",
      },
      {
        leave: "Varias botellas de agua",
        why: "El agua de red es potable en las grandes ciudades y se rellena en cualquier lado.",
        instead:
          "Una botella reutilizable, vacía al pasar el control del aeropuerto.",
      },
    ],
    faq: [
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí, salvo que vengas de un país con enchufe tipo C o I. La tensión es 220 V a 50 Hz: revisá que tus cargadores digan 100-240 V, porque si no también necesitás conversor.",
      },
      {
        question: "¿De qué tamaño conviene la valija?",
        answer:
          "Para una o dos semanas, un carry-on grande o una valija mediana alcanza. Si sumás Patagonia el abrigo pide más lugar, pero sigue siendo cuestión de elegir mejor, no de llevar más.",
      },
      {
        question: "¿Es fácil encontrar lavanderías?",
        answer:
          "Sí. En Buenos Aires hay lavaderos por kilo en casi todos los barrios y suelen entregar el mismo día. Eso cambia el cálculo: con ropa para una semana se cubre un viaje de tres.",
      },
      {
        question: "¿Cuántos cambios de ropa llevo?",
        answer:
          "Como referencia, para lo que dure el viaje hasta un máximo de una semana, y a partir de ahí lavás. Es más barato lavar que pagar exceso de equipaje.",
      },
      {
        question: "¿Qué va en el equipaje de mano?",
        answer:
          "Medicación, documentos, dinero, electrónica, batería portátil y una muda completa. Todo lo que haría el viaje imposible si la valija se demora un día.",
      },
      {
        question: "¿Puedo pagar con tarjeta o necesito efectivo?",
        answer:
          "En las ciudades se paga con tarjeta casi en todos lados, pero conviene tener efectivo para ferias, taxis y pueblos chicos. Revisá el bloque de cotizaciones de la guía antes de decidir cómo cambiar.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Buenos Aires y las grandes ciudades, sí. En zonas rurales y de montaña conviene preguntar en el alojamiento antes de llenar la botella.",
      },
      {
        question: "¿Qué tan informal es la vestimenta?",
        answer:
          "Bastante. Salvo un evento puntual o un restaurante muy específico, en ningún lado te van a pedir saco. Prolijo y cómodo cubre todo.",
      },
    ],
  },
};
