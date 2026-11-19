import type { FotoDeComida } from "@/content/comidas/fotos";
import { TEXTOS_DE_COMIDAS } from "@/i18n/comidas";
import { enriquecer } from "@/i18n/enriquecer";
import { textos } from "@/i18n/servidor";
import { cn } from "@/lib/utils";

/**
 * El crédito de la foto: autor y licencia, con link a la página del archivo.
 * Lo pide la licencia y lo pide el sitio (como en las guías, 8.6).
 *
 * Está aparte de la foto porque pide sus textos en el servidor, y la foto se
 * usa también en el catálogo, que es de cliente.
 */
export async function CreditoDeFoto({
  foto,
  className,
}: {
  foto: FotoDeComida;
  className?: string;
}) {
  const t = (await textos(TEXTOS_DE_COMIDAS)).foto;

  return (
    <p className={cn("text-muted-foreground text-xs", className)}>
      {enriquecer(t.credito(foto.autor, foto.licencia), {
        autor: (autor) => (
          <a
            href={foto.pagina}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            {autor}
          </a>
        ),
        licencia: (licencia) =>
          foto.licenciaUrl ? (
            <a
              href={foto.licenciaUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              {licencia}
            </a>
          ) : (
            licencia
          ),
      })}
    </p>
  );
}
