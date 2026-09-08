"use client";

/**
 * El último recurso: un error en el propio layout raíz.
 *
 * Reemplaza el <html> entero, así que no puede usar nada del layout —ni las
 * fuentes, ni los tokens de tema, ni Button—: si el layout es justo lo que
 * falló, importarlo acá falla otra vez. De ahí los estilos inline, que son
 * feos a propósito y no dependen de que globals.css haya cargado.
 *
 * En la práctica casi nunca se ve. Existe para que el caso en que se ve no sea
 * una pantalla en blanco.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
          textAlign: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600 }}>
          Kit de viaje no pudo cargar
        </h1>

        <p style={{ maxWidth: "28rem", color: "#555" }}>
          Probá de nuevo. Si sigue pasando, volvé en un rato.
        </p>

        <button
          type="button"
          onClick={reset}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            border: "1px solid #333",
            background: "#111",
            color: "#fff",
            cursor: "pointer",
            font: "inherit",
          }}
        >
          Reintentar
        </button>

        {error.digest ? (
          <p style={{ fontSize: "0.75rem", color: "#777" }}>
            Referencia: <code>{error.digest}</code>
          </p>
        ) : null}
      </body>
    </html>
  );
}
