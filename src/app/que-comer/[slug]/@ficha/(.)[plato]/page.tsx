import { FichaDePlato } from "@/components/comer/ficha-de-plato";
import { VentanaDeFicha } from "@/components/comer/ventana-de-ficha";
import { datosDelPlato, parametrosDePlatos } from "@/lib/comidas/datos";

/**
 * La ficha de un plato en una ventana, encima del catálogo (spec, 18.3). Es la
 * misma ficha que la página del plato; ver el layout del país.
 */

export function generateStaticParams() {
  return parametrosDePlatos();
}

export const dynamicParams = false;

export const revalidate = 86400;

export default async function FichaEnVentana({
  params,
}: PageProps<"/que-comer/[slug]/[plato]">) {
  const { slug, plato: id } = await params;
  const { catalogo, guia, plato, mencionesDelPlato } = await datosDelPlato(
    slug,
    id,
  );

  return (
    <VentanaDeFicha>
      <FichaDePlato
        catalogo={catalogo}
        pais={guia.country}
        plato={plato}
        menciones={mencionesDelPlato}
        enVentana
      />
    </VentanaDeFicha>
  );
}
