# Monetización

El sitio se financia con enlaces de afiliados, como Pack Lightly: cuando
alguien reserva un hotel, un seguro o un tour desde una guía, el socio paga
una comisión. Quien compra no paga más, el sitio no muestra publicidad y no
vende datos (eso no cambia).

Este documento es la estrategia y el plan. Cada paso es un PR chico, y nada se
activa hasta que el anterior está en producción.

## Reglas

- **Primero el lector.** Un enlace va donde ayuda a decidir (dónde dormir,
  qué seguro llevar), nunca en lugar del contenido. Las guías y las fichas
  dicen lo mismo con o sin enlaces.
- **Siempre a la vista.** Cada enlace lleva `rel="sponsored nofollow noopener"`.
  Donde hay enlaces aparece un aviso breve, y una página explica el modelo.
- **Sin claves en el repo.** Los IDs de afiliado van en variables de entorno de
  Vercel, como la de Travelpayouts. En el código solo hay plantillas y
  placeholders.
- **Medir sin rastrear.** Se cuentan los clics salientes por enlace, sin
  cookies ni datos personales, igual que la analítica actual.

## El plan, en PRs

### 1. Auditoría SEO (diagnóstico, sin cambios)

Sin tráfico de búsqueda no hay comisiones, así que esto va primero. Lo que ya
se sabe:

- Las páginas se renderizan en el servidor (SSG/SSR con Next): el contenido
  está en el HTML servido. Solo las páginas de error son de cliente.
- Ya existen `sitemap.ts` y `robots.ts`, y unas diez rutas definen su metadata.
- **No hay `canonical`** en ninguna página.

El PR revisa, ruta por ruta, título, descripción, canonical, Open Graph y
datos estructurados, y que el sitemap tenga todas las guías y fichas. Su
resultado es una lista de problemas. Los arreglos van en PRs aparte.

### 2. Infraestructura de afiliados (sin cuentas todavía)

- `src/lib/afiliados/socios.ts`: un archivo central con los socios
  (Travelpayouts, Stay22, GetYourGuide o Viator, un seguro de viaje), sus
  plantillas de URL y un placeholder por cada ID. Un socio sin ID configurado
  no muestra enlaces.
- `<EnlaceAfiliado>`: el único componente que arma un enlace de socio. Pone el
  `rel` y un subid automático con el formato `pagina_posicion`
  (`guia-peru_hoteles`).
- La página `/afiliados` explica el modelo, y el aviso breve es un componente
  que se reutiliza.

### 3. Dónde van los enlaces

1. **Guías de destino:** hoteles, eSIM, seguro de viaje y tours.
2. **Fichas de comida:** tours gastronómicos y clases de cocina de la ciudad.

Un PR por ubicación, para medir cada una por separado.

### 4. Registro de clics salientes

Un endpoint registra cada clic por subid antes de redirigir, sin cookies ni IP.
Así se sabe qué ubicación funciona, cruzándolo con los reportes de cada socio.

## Prioridades mientras tanto

- **En pausa:** el radar de aviones (sigue andando como está, sin cambios
  nuevos) y Europa y Asia en "Qué comer".
- **Antes de cualquier expansión:** guardar cada lugar una sola vez en
  Supabase (hoy se repite en cada plato que lo busca), en vez de pasar a un
  plan pago.
- **Vuelos (PR 3 a 5):** bajan de prioridad. La cuenta de Travelpayouts se
  crea cuando haga falta para el paso 2 o el 3.

## Lo que decide el dueño del sitio

- Abrir cada cuenta de afiliado y cargar su ID en Vercel. Nunca en un chat ni
  en el repo.
- Qué socio usar en cada categoría, según comisiones y condiciones.
