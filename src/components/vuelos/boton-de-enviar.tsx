"use client";

import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * El botón de los formularios de "Salgo desde", que se apaga mientras guarda.
 *
 * Es lo único de cliente de esos formularios: el formulario en sí es de
 * servidor y anda sin JavaScript. Con JavaScript, esto evita el doble clic y
 * muestra que algo está pasando.
 */
export function BotonDeEnviar({
  children,
  variant = "outline",
  ...props
}: {
  children: ReactNode;
  variant?: "default" | "outline";
  /** Lo que dice el botón a un lector de pantalla, si el texto no alcanza. */
  "aria-label"?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="sm"
      variant={variant}
      disabled={pending}
      {...props}
    >
      {pending ? <Loader2 className="animate-spin" /> : null}
      {children}
    </Button>
  );
}
