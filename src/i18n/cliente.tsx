"use client";

import { createContext, use, type ReactNode } from "react";

import { IDIOMA_POR_DEFECTO, type Idioma, type PorIdioma } from "./idiomas";

/**
 * El idioma de la página, para los Client Components.
 *
 * Por el contexto viaja solo el código del idioma, no los textos: cada
 * componente importa el diccionario que usa, así que al navegador le llegan
 * los textos de los componentes que hay en la página y no los del sitio
 * entero. Un diccionario puede tener funciones (los plurales, los textos con un
 * número adentro), y las funciones no se pueden pasar del servidor al cliente
 * como props.
 */
const ContextoDelIdioma = createContext<Idioma>(IDIOMA_POR_DEFECTO);

export function ProveedorDeIdioma({
  idioma,
  children,
}: {
  idioma: Idioma;
  children: ReactNode;
}) {
  return <ContextoDelIdioma value={idioma}>{children}</ContextoDelIdioma>;
}

export function useIdioma(): Idioma {
  return use(ContextoDelIdioma);
}

/** Los textos de un diccionario en el idioma de la página. */
export function useTextos<T>(diccionario: PorIdioma<T>): T {
  return diccionario[useIdioma()];
}
