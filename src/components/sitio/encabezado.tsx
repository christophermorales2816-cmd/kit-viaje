"use client";

import {
  ArrowRight,
  ChevronDown,
  CircleUser,
  Menu,
  Radar,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore, type ReactNode } from "react";
import { NavigationMenu, Tooltip } from "radix-ui";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { ContinenteDelMenu } from "@/content/guias/continentes";
import {
  BLOG,
  CONTACTO,
  HERRAMIENTAS,
  INGRESAR,
  NOSOTROS,
  estaEn,
  seccionActiva,
  type EnlacePronto,
  type SeccionDelSitio,
} from "@/lib/sitio/navegacion";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/sitio/logo";
import { NOMBRE_DEL_SITIO } from "@/lib/sitio/marca";

/**
 * La barra de arriba, en todas las páginas (spec, 19.1).
 *
 * Destinos y Herramientas se despliegan al pasar el mouse, como en cualquier
 * sitio de viajes; con el teclado, con Enter o la flecha, y Escape cierra. Lo
 * hace Radix (NavigationMenu), que es el patrón de "disclosure" que recomienda
 * WAI-ARIA para la navegación de un sitio: un menú de aplicación (role=menu)
 * le cambiaría las teclas a quien usa lector de pantalla.
 *
 * En la portada arranca transparente, sobre la foto, y se vuelve sólida al
 * scrollear: el hero es lo primero que se ve, sin una franja blanca encima. En
 * el resto de las páginas es sólida desde el principio.
 *
 * Lo que todavía no existe (Blog, Contacto, Ingresar) está en gris: se puede
 * enfocar y dice "Próximamente", pero no lleva a ningún lado.
 */

const ICONOS: Record<string, LucideIcon> = {
  vuelos: Radar,
  "que-comer": UtensilsCrossed,
};

/** Cuánto hay que bajar para que la barra deje de ser transparente. */
const UMBRAL_DE_SCROLL = 16;

function suscribirAlScroll(avisar: () => void) {
  window.addEventListener("scroll", avisar, { passive: true });
  return () => window.removeEventListener("scroll", avisar);
}

/** Si la página está arriba de todo. En el servidor, sí. */
function useArribaDeTodo(): boolean {
  return useSyncExternalStore(
    suscribirAlScroll,
    () => window.scrollY < UMBRAL_DE_SCROLL,
    () => true,
  );
}

export function Encabezado({
  continentes,
}: {
  continentes: ContinenteDelMenu[];
}) {
  const pathname = usePathname();
  const arriba = useArribaDeTodo();
  const transparente = pathname === "/" && arriba;
  const seccion = seccionActiva(pathname);
  const total = continentes.reduce((suma, { cantidad }) => suma + cantidad, 0);

  return (
    <Tooltip.Provider delayDuration={150}>
      <header
        data-transparente={transparente || undefined}
        className={cn(
          "group/barra sticky top-0 z-50 transition-[background-color,color,box-shadow] duration-300 print:hidden",
          transparente
            ? "text-white"
            : "bg-background/95 text-foreground shadow-[0_1px_0_var(--color-border)] backdrop-blur-md",
        )}
      >
        <a
          href="#contenido"
          className="sr-only rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-950 shadow-lg focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-[60]"
        >
          Saltar al contenido
        </a>

        {/*
          Sobre la foto, una sombra suave detrás de la barra: el cielo es
          claro y el texto blanco solo no se leería.
        */}
        {transparente ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-linear-to-b from-slate-950/70 via-slate-950/35 to-transparent"
          />
        ) : null}

        <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 rounded-md font-semibold tracking-tight outline-none focus-visible:ring-[3px] focus-visible:ring-orange-400/60"
          >
            <Logo className="h-6 sm:h-7" />
          </Link>

          <NavigationMenu.Root
            aria-label="Principal"
            className="relative ml-4 hidden lg:block"
          >
            <NavigationMenu.List className="flex items-center gap-1">
              <NavigationMenu.Item className="relative">
                <NavigationMenu.Trigger
                  className={estiloDeItem(seccion === "destinos")}
                >
                  Destinos
                  <ChevronDown
                    aria-hidden
                    className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  />
                </NavigationMenu.Trigger>
                <Desplegable ancho="w-[36rem]">
                  <ul className="grid grid-cols-2 gap-1">
                    {continentes.map((continente) => (
                      <li key={continente.id}>
                        <EnlaceDelMenu
                          href={`/destinos/${continente.id}`}
                          actual={estaEn(
                            pathname,
                            `/destinos/${continente.id}`,
                          )}
                        >
                          <span className="flex items-baseline justify-between gap-3">
                            <span className="font-medium">
                              {continente.nombre}
                            </span>
                            <span className="text-muted-foreground text-xs tabular-nums">
                              {continente.cantidad} destinos
                            </span>
                          </span>
                          <span className="text-muted-foreground text-sm text-pretty">
                            {continente.resumen}
                          </span>
                        </EnlaceDelMenu>
                      </li>
                    ))}
                    <li>
                      <EnlaceDelMenu
                        href="/destinos"
                        actual={pathname === "/destinos"}
                        className="bg-muted/60 h-full justify-center"
                      >
                        <span className="flex items-center gap-1.5 font-medium">
                          Todos los destinos
                          <ArrowRight aria-hidden className="size-4" />
                        </span>
                        <span className="text-muted-foreground text-sm">
                          Los {total}, por continente y zona.
                        </span>
                      </EnlaceDelMenu>
                    </li>
                  </ul>
                </Desplegable>
              </NavigationMenu.Item>

              <NavigationMenu.Item className="relative">
                <NavigationMenu.Trigger
                  className={estiloDeItem(seccion === "herramientas")}
                >
                  Herramientas
                  <ChevronDown
                    aria-hidden
                    className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  />
                </NavigationMenu.Trigger>
                <Desplegable ancho="w-[22rem]">
                  <ul className="flex flex-col gap-1">
                    {HERRAMIENTAS.map((herramienta) => {
                      const Icono = ICONOS[herramienta.id];

                      return (
                        <li key={herramienta.id}>
                          <EnlaceDelMenu
                            href={herramienta.href}
                            actual={estaEn(pathname, herramienta.href)}
                            className="flex-row items-start gap-3"
                          >
                            {Icono ? (
                              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
                                <Icono aria-hidden className="size-5" />
                              </span>
                            ) : null}
                            <span className="flex flex-col gap-0.5">
                              <span className="font-medium">
                                {herramienta.nombre}
                              </span>
                              <span className="text-muted-foreground text-sm">
                                {herramienta.descripcion}
                              </span>
                            </span>
                          </EnlaceDelMenu>
                        </li>
                      );
                    })}
                  </ul>
                </Desplegable>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <ItemPronto item={BLOG} className={ESTILO_DE_ITEM_PRONTO} />
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link
                  asChild
                  active={estaEn(pathname, NOSOTROS.href)}
                >
                  <Link
                    href={NOSOTROS.href}
                    className={estiloDeItem(seccion === "nosotros")}
                  >
                    {NOSOTROS.nombre}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <ItemPronto item={CONTACTO} className={ESTILO_DE_ITEM_PRONTO} />
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          <div className="ml-auto flex items-center gap-2">
            <ItemPronto
              item={INGRESAR}
              className={cn(
                "hidden h-9 items-center gap-2 rounded-full border px-4 text-sm font-medium lg:inline-flex",
                transparente
                  ? "border-white/40 text-white"
                  : "border-border text-foreground",
              )}
              icono={<CircleUser aria-hidden className="size-4" />}
            />

            <MenuDelTelefono
              continentes={continentes}
              total={total}
              pathname={pathname}
              transparente={transparente}
            />
          </div>
        </div>
      </header>
    </Tooltip.Provider>
  );
}

/** Los ítems de la barra: transparentes sobre la foto, grises sobre blanco. */
function estiloDeItem(activo: boolean): string {
  return cn(
    "group relative inline-flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium transition-colors outline-none",
    "focus-visible:ring-[3px] focus-visible:ring-orange-400/60",
    "group-data-[transparente]/barra:hover:bg-white/15 group-data-[transparente]/barra:data-[state=open]:bg-white/15",
    "hover:bg-accent data-[state=open]:bg-accent",
    // La sección en la que estás: una raya naranja debajo, como el punto
    // del globo.
    activo &&
      "after:absolute after:inset-x-3 after:-bottom-[0.6rem] after:h-0.5 after:rounded-full after:bg-orange-500",
  );
}

/** Lo mismo, sin el fondo al pasar el mouse: no hay nada que clickear. */
const ESTILO_DE_ITEM_PRONTO =
  "inline-flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium outline-none focus-visible:ring-[3px] focus-visible:ring-orange-400/60";

/**
 * El panel de un desplegable. El espacio de arriba es parte del panel y no un
 * margen: si hubiera un hueco entre el botón y el panel, el mouse lo cruzaría
 * "afuera" y el menú se cerraría a mitad de camino.
 */
function Desplegable({
  ancho,
  children,
}: {
  ancho: string;
  children: ReactNode;
}) {
  return (
    <NavigationMenu.Content className="data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-1 absolute top-full left-0 z-50 pt-3">
      <div
        className={cn(
          "bg-popover text-popover-foreground rounded-xl border p-2 shadow-xl",
          ancho,
        )}
      >
        {children}
      </div>
    </NavigationMenu.Content>
  );
}

function EnlaceDelMenu({
  href,
  actual,
  className,
  children,
}: {
  href: string;
  actual: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <NavigationMenu.Link asChild active={actual}>
      <Link
        href={href}
        className={cn(
          "hover:bg-muted focus-visible:bg-muted flex flex-col gap-1 rounded-lg p-3 outline-none focus-visible:ring-[3px] focus-visible:ring-orange-400/50",
          className,
        )}
      >
        {children}
      </Link>
    </NavigationMenu.Link>
  );
}

/**
 * Algo que todavía no existe: en gris, con la explicación al pasar el mouse o
 * al llegar con Tab. Es un botón con aria-disabled y no un `disabled`, para
 * que se pueda enfocar y el lector de pantalla lea por qué está así.
 */
function ItemPronto({
  item,
  className,
  icono,
}: {
  item: EnlacePronto;
  className?: string;
  icono?: ReactNode;
}) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button
          type="button"
          aria-disabled="true"
          className={cn(className, "cursor-not-allowed opacity-55")}
        >
          {icono}
          {item.nombre}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="bottom"
          sideOffset={8}
          className="data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 z-[60] rounded-md bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-white shadow-md"
        >
          {item.pronto}
          <Tooltip.Arrow className="fill-slate-900" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

/**
 * En el teléfono, todo en un panel lateral y sin desplegables: son una docena
 * de enlaces y caben a la vista, sin un toque de más para abrir cada grupo.
 */
function MenuDelTelefono({
  continentes,
  total,
  pathname,
  transparente,
}: {
  continentes: ContinenteDelMenu[];
  total: number;
  pathname: string;
  transparente: boolean;
}) {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <Sheet open={abierto} onOpenChange={setAbierto}>
      <SheetTrigger
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-orange-400/60 lg:hidden",
          transparente ? "hover:bg-white/15" : "hover:bg-accent",
        )}
      >
        <Menu aria-hidden className="size-5" />
        <span className="sr-only">Abrir el menú</span>
      </SheetTrigger>

      <SheetContent side="right" className="w-[22rem] gap-0 overflow-y-auto">
        <SheetHeader className="border-b">
          <SheetTitle>
            <Logo className="h-6" />
          </SheetTitle>
          <SheetDescription className="sr-only">
            Destinos, herramientas y secciones del sitio.
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="Principal" className="flex flex-col gap-6 p-4">
          <GrupoDelTelefono titulo="Destinos">
            {continentes.map((continente) => (
              <EnlaceDelTelefono
                key={continente.id}
                href={`/destinos/${continente.id}`}
                actual={estaEn(pathname, `/destinos/${continente.id}`)}
                alCerrar={cerrar}
                detalle={`${continente.cantidad}`}
              >
                {continente.nombre}
              </EnlaceDelTelefono>
            ))}
            <EnlaceDelTelefono
              href="/destinos"
              actual={pathname === "/destinos"}
              alCerrar={cerrar}
              detalle={`${total}`}
            >
              Todos los destinos
            </EnlaceDelTelefono>
          </GrupoDelTelefono>

          <GrupoDelTelefono titulo="Herramientas">
            {HERRAMIENTAS.map((herramienta) => (
              <EnlaceDelTelefono
                key={herramienta.id}
                href={herramienta.href}
                actual={estaEn(pathname, herramienta.href)}
                alCerrar={cerrar}
              >
                {herramienta.nombre}
              </EnlaceDelTelefono>
            ))}
          </GrupoDelTelefono>

          <GrupoDelTelefono titulo={NOMBRE_DEL_SITIO}>
            <EnlaceDelTelefono
              href={NOSOTROS.href}
              actual={estaEn(pathname, NOSOTROS.href)}
              alCerrar={cerrar}
            >
              {NOSOTROS.nombre}
            </EnlaceDelTelefono>
            <ProntoDelTelefono item={BLOG} />
            <ProntoDelTelefono item={CONTACTO} />
          </GrupoDelTelefono>

          <p className="text-muted-foreground flex items-center justify-between gap-2 rounded-full border px-4 py-2.5 text-sm">
            <span className="flex items-center gap-2 font-medium">
              <CircleUser aria-hidden className="size-4" />
              {INGRESAR.nombre}
            </span>
            <span className="text-xs">Próximamente</span>
          </p>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function GrupoDelTelefono({
  titulo,
  children,
}: {
  titulo: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-muted-foreground px-3 text-xs font-semibold tracking-wide uppercase">
        {titulo}
      </p>
      <ul className="flex flex-col">{children}</ul>
    </div>
  );
}

function EnlaceDelTelefono({
  href,
  actual,
  alCerrar,
  detalle,
  children,
}: {
  href: string;
  actual: boolean;
  alCerrar: () => void;
  detalle?: string;
  children: ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={alCerrar}
        aria-current={actual ? "page" : undefined}
        className={cn(
          "hover:bg-muted flex min-h-11 items-center justify-between gap-3 rounded-lg px-3 text-[0.95rem] font-medium outline-none focus-visible:ring-[3px] focus-visible:ring-orange-400/50",
          actual && "bg-muted",
        )}
      >
        {children}
        {detalle ? (
          <span className="text-muted-foreground text-xs font-normal tabular-nums">
            {detalle}
          </span>
        ) : null}
      </Link>
    </li>
  );
}

function ProntoDelTelefono({ item }: { item: EnlacePronto }) {
  return (
    <li className="text-muted-foreground flex min-h-11 items-center justify-between gap-3 px-3 text-[0.95rem]">
      <span className="opacity-70">{item.nombre}</span>
      <span className="text-xs">Próximamente</span>
    </li>
  );
}

export type { SeccionDelSitio };
