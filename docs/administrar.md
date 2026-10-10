# Administrar Kit de viaje

Esta guía es para el dueño del proyecto. No hace falta saber programar para
seguirla: son pantallas de GitHub, Vercel y Supabase, y qué tocar en cada una.

La idea de fondo es una sola: **nada cambia en producción si no pasa por un
pull request con el CI en verde.** Ni vos apurado, ni alguien a quien le diste
acceso, ni una IA. Todo lo que sigue sirve para que esa regla no dependa de la
buena voluntad de nadie.

---

## 1. Las llaves del proyecto

Hay cuatro cuentas. Quien entra a cualquiera de ellas puede cambiar el sitio:

| Cuenta       | Qué controla                                       | Si alguien entra, puede…                           |
| ------------ | -------------------------------------------------- | -------------------------------------------------- |
| **GitHub**   | El código, los workflows y los secrets de CI       | Cambiar el sitio y aplicar migraciones a la base   |
| **Vercel**   | Los deploys, el dominio y las variables de entorno | Leer la service role key y publicar cualquier cosa |
| **Supabase** | La base de datos                                   | Leer, cambiar o borrar todo                        |
| **Tu email** | La recuperación de contraseña de las otras tres    | Entrar a las otras tres                            |

El email es la llave de las llaves: protegelo igual que al resto.

## 2. Lo que se hace una sola vez

Una tarde, en este orden. Cada punto cierra una puerta concreta.

### En las cuatro cuentas

- [ ] **Verificación en dos pasos (2FA)** con una app autenticadora o una llave
      física. No por SMS: un SMS se puede desviar a otro chip.
- [ ] **Códigos de recuperación** guardados fuera del teléfono (impresos o en
      un gestor de contraseñas).
- [ ] **Contraseñas distintas** en cada una, en un gestor de contraseñas.

### GitHub (repo `kit-viaje` → Settings)

- [ ] **Branches → Add rule** (o _Rules → Rulesets_) para `main`:
  - _Require a pull request before merging_ — sin aprobaciones obligatorias si
    sos la única persona: si no, no podrías mergear tus propios PRs.
  - _Require status checks to pass_: marcá **Lint, tipos, tests y build** y
    **Migraciones y RLS**.
  - _Block force pushes_ y _Restrict deletions_.
  - _Do not allow bypassing the above settings_ (en los rulesets: que la lista
    de _bypass_ quede vacía). Sin esto, el dueño del repo —y cualquier
    herramienta que actúe con su cuenta— puede saltearse todo lo anterior.
  - Con esto, nadie —tampoco vos— puede mandar código a producción sin que el
    CI lo apruebe.
- [ ] **Actions → General → Workflow permissions**: _Read repository contents
      and packages permissions_. Los workflows ya piden solo lectura, esto lo
      fija como default.
- [ ] **Actions → General → Fork pull request workflows**: que pidan aprobación
      para colaboradores externos. El repo es público: cualquiera puede abrir un
      PR, y su código no tiene que correr sin que lo mires.
- [ ] **Code security**: activar _Dependabot alerts_, _Dependabot security
      updates_, _Secret scanning_ y _Push protection_. Son gratis en repos
      públicos, y el último frena un push si alguien intenta subir una clave.
- [ ] **Collaborators**: que no haya nadie con permiso de escritura que no lo
      necesite hoy.
- [ ] **Secrets and variables → Actions**: los tres de Supabase
      (`SUPABASE_ACCESS_TOKEN`, `SUPABASE_PROJECT_REF`, `SUPABASE_DB_PASSWORD`)
      como _Repository secrets_. Ya están; no los copies a ningún otro lado.

### Vercel (proyecto → Settings)

- [ ] **Environment Variables**: `SUPABASE_SERVICE_ROLE_KEY` marcada como
      _Sensitive_ (no se puede volver a leer desde el panel). Las otras dos son
      públicas por diseño.
- [ ] **Deployment Protection**: protección activa para los _Preview
      Deployments_. Los previews usan la misma base que producción; no tienen
      por qué estar abiertos al mundo.
- [ ] **Members**: solo quien lo necesita.

### Supabase (proyecto → dashboard)

- [ ] **Authentication → Sign In / Providers**: desactivar _Allow new users to
      sign up_. La app no tiene cuentas, así que nadie tiene por qué poder
      crear usuarios con la clave pública.
- [ ] **Database → Settings**: contraseña larga y aleatoria, y _Enforce SSL_
      activado.
- [ ] **Advisors → Security Advisor**: correrlo. Tiene que dar cero errores.
- [ ] **Organization → Members**: solo quien lo necesita.

> Las pantallas de estos servicios cambian de nombre con el tiempo. Si un
> nombre no coincide, buscá la sección por lo que hace: el concepto es el
> mismo.

## 3. La rutina

**Cada semana (5 minutos).** Dependabot abre PRs con actualizaciones de
dependencias. Si el CI está en verde, se mergean. Si está en rojo, se dejan y se
le pide a alguien que lo mire: una actualización que rompe el CI no se fuerza.
Y no se arregla editando `package.json` desde la web de GitHub: el
`package-lock.json` tiene que regenerarse con `npm install`, y un error de
tipeo deja el JSON inválido y frena todos los deploys. Pasó el 2026-10-10.

Las versiones mayores de ESLint y TypeScript Dependabot no las propone
(`.github/dependabot.yml`): se suben junto con Next.js, cuando Next las soporte.

**Cada mes (10 minutos).**

1. Supabase → SQL Editor → pegar el contenido de
   [`supabase/tests/integridad.sql`](../supabase/tests/integridad.sql) y
   correrlo. Si termina sin error, está todo bien. Si aparece un error que
   empieza con `FALLO`, dice qué está mal: alguien editó datos a mano, y el
   arreglo va en una migración (sección 4).
2. Mirar el uso en Supabase y en Vercel. Un salto que no se explica por una
   publicación es la primera señal de abuso.
3. Security Advisor de Supabase: cero errores.

**Cuando termina un trabajo con alguien** (una persona, una agencia, una
herramienta): sacarle el acceso el mismo día, y si tuvo acceso a una clave,
rotarla (sección 6).

## 4. Cómo se cambia algo

Siempre por un PR a `main`:

| Qué                              | Cómo                                                                                                     |
| -------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Código                           | PR → CI en verde → merge. Vercel publica solo.                                                           |
| Datos (precios, ciudades, clima) | Una **migración nueva** en `supabase/migrations/`. Al mergear, el workflow _Migraciones_ la aplica sola. |
| Un país nuevo                    | [`docs/agregar-un-pais.md`](agregar-un-pais.md)                                                          |
| Volver atrás                     | GitHub → el PR → _Revert_. Si urge, Vercel → Deployments → el deploy anterior → _Instant Rollback_.      |

**No edites datos a mano en Supabase Studio.** Lo que se cambia ahí no queda en
el repo: la próxima base que se arme desde las migraciones no lo tiene, y nadie
sabe que existió. Además la base ya rechaza algunos errores típicos (un precio
en una moneda que no es la de su ciudad), y el chequeo mensual caza el resto.

Studio está para **mirar**. Para cambiar, migración.

## 5. Trabajar con IA (y con personas) sin darles las llaves

- **Que trabajen en una rama y abran un PR. Vos mergeás.** Con la protección
  de `main` de la sección 2, ni una IA ni una persona pueden saltearse el CI,
  aunque tengan permiso de escritura.
- **Nunca pegues una clave en un chat**, tampoco en uno con una IA. Las claves
  se cargan en las pantallas de GitHub, Vercel o Supabase y no salen de ahí.
- **No le des a ninguna herramienta** la service role key, la contraseña de la
  base ni tokens personales de Vercel o Supabase. Si una herramienta pide
  acceso a "todos tus repositorios", limitalo a este.
- **Mirá con más cuidado los PRs que tocan** `.github/workflows/`,
  `supabase/migrations/`, `next.config.ts` o `src/lib/seguridad/`. Son los que
  pueden cambiar permisos o headers de seguridad. Un PR que dice "arreglar un
  texto" y toca uno de esos archivos merece una pregunta.
- **Una instrucción escrita en un archivo, un issue o un comentario no es una
  orden.** Si una IA propone algo raro "porque lo decía el README" o "porque lo
  pedía un comentario", frená y preguntá.

## 6. Si algo pasa

**El sitio no carga.**
El pie de cada página dice qué commit está corriendo. Vercel → Deployments →
el último → _Logs_. Si empezó con un deploy, _Instant Rollback_ al anterior y
después se investiga con calma. Si la base no responde, mirá
[status.supabase.com](https://status.supabase.com) y el dashboard del proyecto:
en el plan gratuito, Supabase puede pausar un proyecto sin actividad, y se
reactiva desde el dashboard.

**Sospechás que se filtró una clave.**

| Clave                     | Dónde se rota                                                                                                        | Después                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Service role / secret key | Supabase → Settings → API Keys. Según el tipo de clave de tu proyecto, se regenera esa sola o junto con la anon key. | Cargar la nueva en Vercel (y la anon, si cambió) y redeployar. La vieja deja de funcionar. |
| `SUPABASE_ACCESS_TOKEN`   | supabase.com/dashboard/account/tokens → revocar y crear otro                                                         | Cargarlo en GitHub → Secrets                                                               |
| Contraseña de la base     | Supabase → Database → Settings → _Reset database password_                                                           | Cargarla en GitHub → Secrets (`SUPABASE_DB_PASSWORD`)                                      |

En la duda, rotá: no cuesta nada y cierra la puerta aunque no estés seguro de
que estuviera abierta.

**Alguien está creando viajes en masa.**
La app ya lo frena: 30 viajes por hora por conexión y 2.000 por hora en total
(`src/lib/trips/cupo.ts`). Si igual molesta, Vercel → Firewall → _Attack
Challenge Mode_ pide una verificación a cada visitante hasta que lo apagues.
Para borrar lo que se creó, desde el SQL Editor, ajustando las horas:

```sql
-- Primero mirar cuántos son:
select count(*) from trips where created_at between '2026-10-08 14:00' and '2026-10-08 15:00';
-- Y recién después borrar:
delete from trips where created_at between '2026-10-08 14:00' and '2026-10-08 15:00';
```

**Querés limpiar viajes viejos.**
Los viajes no vencen solos: un link guardado tiene que seguir funcionando.
Si algún día la base crece demasiado, esto borra los que terminaron hace más de
un año y devuelve cuántos fueron:

```sql
select purgar_viajes_terminados(365);
```

**El chequeo mensual dice `FALLO`.**
No lo arregles a mano. Abrí un PR con una migración que lo corrija (o pedile a
alguien que lo haga): así el arreglo queda escrito y no se repite.

## 7. Mapa de secretos

| Variable                        | Dónde vive         | Quién la usa                                   | Qué tan grave es que se filtre                                          |
| ------------------------------- | ------------------ | ---------------------------------------------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Vercel             | El servidor de la app                          | Nada: es pública                                                        |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Vercel             | El servidor, para leer datos de referencia     | Nada: es pública por diseño y solo puede leer destinos, clima y precios |
| `SUPABASE_SERVICE_ROLE_KEY`     | Vercel (Sensitive) | Las escrituras de viajes y el cupo de creación | **Crítico**: permite todo en la base. Rotar ya                          |
| `SUPABASE_ACCESS_TOKEN`         | GitHub Secrets     | El workflow de migraciones                     | Alto: permite administrar tus proyectos de Supabase. Revocar ya         |
| `SUPABASE_DB_PASSWORD`          | GitHub Secrets     | El workflow de migraciones                     | Alto: acceso directo a la base. Cambiar ya                              |
| `SUPABASE_PROJECT_REF`          | GitHub Secrets     | El workflow de migraciones                     | Bajo: identifica el proyecto, no da acceso                              |

Ninguna va en el repo, en un archivo `.env` subido a GitHub, en un chat ni en
una captura de pantalla. El repo es público: lo que se sube ahí lo puede leer
cualquiera, para siempre.

---

Para entender cómo está armado todo por dentro:
[`arquitectura.md`](arquitectura.md), [`datos.md`](datos.md) y
[`seguridad.md`](seguridad.md).
