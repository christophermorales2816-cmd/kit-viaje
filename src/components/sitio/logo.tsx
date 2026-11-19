import horizontal from "@/assets/marca/horizontal.svg";
import simbolo from "@/assets/marca/simbolo.svg";
import { NOMBRE_DEL_SITIO } from "@/lib/sitio/marca";
import { cn } from "@/lib/utils";

const ARCHIVOS = { horizontal, simbolo } as const;

/**
 * El logo de GlobalSunstone, del color del texto que lo rodea.
 *
 * El SVG se usa como máscara sobre `currentColor`, así sigue a la barra: blanco
 * sobre la foto de la portada, tinta sobre fondo claro. Es un archivo estático
 * con hash, que el navegador guarda en caché, en vez de 20 KB de trazos
 * repetidos en el HTML de cada página. El alto se da con `className` (`h-7`).
 */
export function Logo({
  variante = "horizontal",
  className,
}: {
  variante?: keyof typeof ARCHIVOS;
  className?: string;
}) {
  const { src, width, height } = ARCHIVOS[variante];
  return (
    <span
      role="img"
      aria-label={NOMBRE_DEL_SITIO}
      className={cn("block shrink-0 bg-current", className)}
      style={{
        aspectRatio: `${width} / ${height}`,
        maskImage: `url(${src})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}
