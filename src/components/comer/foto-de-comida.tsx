import Image from "next/image";

import type { FotoDeComida } from "@/content/comidas/fotos";
import { cn } from "@/lib/utils";

/**
 * Una foto de Wikimedia Commons, servida desde su CDN (spec, 18.6).
 *
 * `unoptimized`: la miniatura ya viene del tamaño justo, y pasarla por el
 * optimizador de Vercel gastaría su cupo sin ganar nada.
 */
export function FotoDeComidaImagen({
  foto,
  alt,
  className,
  prioridad = false,
  grande = false,
}: {
  foto: FotoDeComida;
  alt: string;
  className?: string;
  prioridad?: boolean;
  /** La miniatura de 1920, para un encabezado a todo el ancho. */
  grande?: boolean;
}) {
  return (
    <Image
      src={grande ? foto.srcGrande : foto.src}
      alt={alt}
      width={foto.ancho}
      height={foto.alto}
      unoptimized
      priority={prioridad}
      className={cn("object-cover", className)}
    />
  );
}

/**
 * El crédito de la foto: autor y licencia, con link a la página del archivo.
 * Lo pide la licencia y lo pide el sitio (como en las guías, 8.6).
 */
export function CreditoDeFoto({
  foto,
  className,
}: {
  foto: FotoDeComida;
  className?: string;
}) {
  return (
    <p className={cn("text-muted-foreground text-xs", className)}>
      Foto:{" "}
      <a
        href={foto.pagina}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2"
      >
        {foto.autor}
      </a>
      ,{" "}
      {foto.licenciaUrl ? (
        <a
          href={foto.licenciaUrl}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          {foto.licencia}
        </a>
      ) : (
        foto.licencia
      )}
      , en Wikimedia Commons.
    </p>
  );
}
