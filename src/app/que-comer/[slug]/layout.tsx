/**
 * El país y, encima, la ficha del plato que se abrió (spec, 18.3).
 *
 * `ficha` es una ruta paralela: al tocar un plato del catálogo, Next intercepta
 * la navegación a /que-comer/{pais}/{plato} y la muestra en una ventana
 * (@ficha/(.)[plato]), con el catálogo detrás. Con un link directo o al
 * recargar, no intercepta: se ve la página del plato ([plato]/page.tsx), y la
 * ranura queda vacía (@ficha/default.tsx).
 */
export default function LayoutDelPais({
  children,
  ficha,
}: LayoutProps<"/que-comer/[slug]">) {
  return (
    <>
      {children}
      {ficha}
    </>
  );
}
