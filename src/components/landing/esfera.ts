import { RADIO_DE_LA_ESFERA, type Vista } from "@/lib/globo/geometria";

/**
 * La Tierra del globo de la portada, dibujada con WebGL 2 sobre la Blue Marble
 * de NASA (spec, 19.7).
 *
 * Reemplaza a cobe, que solo sabía dibujar el mapa con puntos. Es un solo
 * shader: para cada píxel del canvas calcula qué coordenada hay debajo —la
 * misma cuenta que `desproyectar` en src/lib/globo/geometria.ts— y lee ese
 * lugar de la foto. Como la proyección es la nuestra, los puntos HTML de los
 * destinos caen sobre el lugar exacto a cualquier zoom, sin calibrar nada.
 *
 * La foto es equirrectangular (la longitud va a lo ancho, la latitud a lo
 * alto). Las dos cosas finas:
 *
 *   - El antimeridiano. Ahí la longitud salta de 180 a −180, y la GPU, que
 *     elige la resolución de la foto mirando cuánto cambia la coordenada entre
 *     píxeles vecinos, vería un salto enorme y pintaría una costura borrosa de
 *     arriba abajo. Se le pasa la variación de una longitud corrida media
 *     vuelta, que en ese lugar no salta (`textureGrad`).
 *   - La foto llega de a dos: una de 2048 px que pesa 300 KB, para el globo
 *     entero, y la de 4096 recién cuando alguien acerca.
 */

export interface Esfera {
  dibujar: (vista: Vista) => void;
  /** El lado del canvas en píxeles CSS. */
  medir: (lado: number) => void;
  cambiarTextura: (src: string) => void;
  destruir: () => void;
}

const VERTICES = `#version 300 es
in vec2 aPos;
out vec2 vNdc;
void main() {
  vNdc = aPos;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAGMENTOS = `#version 300 es
precision highp float;
in vec2 vNdc;
uniform sampler2D uTierra;
uniform bool uConFoto;
uniform float uRadio;
uniform vec2 uCentro;
out vec4 color;

const float PI = 3.141592653589793;
const vec3 CIELO = vec3(0.45, 0.66, 1.0);
const vec3 OCEANO = vec3(0.04, 0.10, 0.22);

void main() {
  vec2 p = vNdc / uRadio;
  float r = length(p);

  // La atmósfera: un halo que se apaga en el 6 % del radio.
  if (r > 1.0) {
    float d = (r - 1.0) / 0.06;
    float a = d < 1.0 ? (1.0 - d) * (1.0 - d) * 0.5 : 0.0;
    color = vec4(CIELO * a, a);
    return;
  }

  float z = sqrt(max(0.0, 1.0 - r * r));
  float sinLat0 = sin(uCentro.x);
  float cosLat0 = cos(uCentro.x);
  float lat = asin(clamp(p.y * cosLat0 + z * sinLat0, -1.0, 1.0));
  float dLon = atan(p.x, z * cosLat0 - p.y * sinLat0);

  vec2 uv = vec2((uCentro.y + dLon) / (2.0 * PI) + 0.5, 0.5 - lat / PI);

  vec3 tierra = OCEANO;
  if (uConFoto) {
    float corrida = fract(uv.x + 0.5);
    vec2 dx = vec2(dFdx(uv.x), dFdx(uv.y));
    vec2 dy = vec2(dFdy(uv.x), dFdy(uv.y));
    vec2 dxC = vec2(dFdx(corrida), dx.y);
    vec2 dyC = vec2(dFdy(corrida), dy.y);
    bool salta = abs(dxC.x) + abs(dyC.x) < abs(dx.x) + abs(dy.x);
    tierra = textureGrad(uTierra, uv, salta ? dxC : dx, salta ? dyC : dy).rgb;
  }

  // Luz de frente: el borde más oscuro y con un velo de atmósfera.
  vec3 c = tierra * mix(0.6, 1.05, pow(z, 0.7));
  c = mix(c, CIELO, pow(1.0 - z, 3.0) * 0.5);

  // El borde, suavizado en un píxel.
  float a = clamp((1.0 - r) / max(fwidth(r), 1e-5), 0.0, 1.0);
  color = vec4(c * a, a);
}`;

function compilar(
  gl: WebGL2RenderingContext,
  tipo: number,
  fuente: string,
): WebGLShader | null {
  const shader = gl.createShader(tipo);
  if (!shader) return null;
  gl.shaderSource(shader, fuente);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
  gl.deleteShader(shader);
  return null;
}

/**
 * La esfera sobre un canvas, o null si el navegador no tiene WebGL 2: ahí el
 * globo muestra un disco liso y los destinos funcionan igual.
 */
export function crearEsfera(
  canvas: HTMLCanvasElement,
  { textura, alCargar }: { textura: string; alCargar: () => void },
): Esfera | null {
  const gl = canvas.getContext("webgl2", {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    preserveDrawingBuffer: true,
  });
  if (!gl) return null;

  let programa: WebGLProgram | null = null;
  let foto: WebGLTexture | null = null;
  let conFoto = false;
  let fuente = textura;
  let ultima: Vista | null = null;
  let imagen: HTMLImageElement | null = null;
  const ubicaciones: Record<string, WebGLUniformLocation | null> = {};

  function cargar(src: string) {
    fuente = src;
    const nueva = new Image();
    nueva.decoding = "async";
    nueva.onload = () => {
      if (imagen !== nueva || gl!.isContextLost()) return;
      gl!.bindTexture(gl!.TEXTURE_2D, foto);
      gl!.texImage2D(
        gl!.TEXTURE_2D,
        0,
        gl!.RGB,
        gl!.RGB,
        gl!.UNSIGNED_BYTE,
        nueva,
      );
      gl!.generateMipmap(gl!.TEXTURE_2D);
      conFoto = true;
      if (ultima) dibujar(ultima);
      alCargar();
    };
    imagen = nueva;
    nueva.src = src;
  }

  function preparar(): boolean {
    const v = compilar(gl!, gl!.VERTEX_SHADER, VERTICES);
    const f = compilar(gl!, gl!.FRAGMENT_SHADER, FRAGMENTOS);
    if (!v || !f) return false;

    programa = gl!.createProgram();
    if (!programa) return false;
    gl!.attachShader(programa, v);
    gl!.attachShader(programa, f);
    gl!.linkProgram(programa);
    gl!.deleteShader(v);
    gl!.deleteShader(f);
    if (!gl!.getProgramParameter(programa, gl!.LINK_STATUS)) return false;

    gl!.useProgram(programa);
    for (const nombre of ["uTierra", "uConFoto", "uRadio", "uCentro"]) {
      ubicaciones[nombre] = gl!.getUniformLocation(programa, nombre);
    }

    // Un triángulo que tapa todo el canvas.
    const buffer = gl!.createBuffer();
    gl!.bindBuffer(gl!.ARRAY_BUFFER, buffer);
    gl!.bufferData(
      gl!.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl!.STATIC_DRAW,
    );
    const posicion = gl!.getAttribLocation(programa, "aPos");
    gl!.enableVertexAttribArray(posicion);
    gl!.vertexAttribPointer(posicion, 2, gl!.FLOAT, false, 0, 0);

    foto = gl!.createTexture();
    gl!.bindTexture(gl!.TEXTURE_2D, foto);
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.REPEAT);
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
    gl!.texParameteri(
      gl!.TEXTURE_2D,
      gl!.TEXTURE_MIN_FILTER,
      gl!.LINEAR_MIPMAP_LINEAR,
    );
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, gl!.LINEAR);
    // Cerca de los polos la foto se estira: el filtro anisotrópico la
    // mantiene nítida.
    const aniso = gl!.getExtension("EXT_texture_filter_anisotropic");
    if (aniso) {
      gl!.texParameterf(
        gl!.TEXTURE_2D,
        aniso.TEXTURE_MAX_ANISOTROPY_EXT,
        Math.min(8, gl!.getParameter(aniso.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),
      );
    }
    gl!.uniform1i(ubicaciones.uTierra, 0);

    conFoto = false;
    cargar(fuente);
    return true;
  }

  function dibujar(vista: Vista) {
    ultima = vista;
    if (!programa || gl!.isContextLost()) return;
    gl!.viewport(0, 0, canvas.width, canvas.height);
    gl!.clearColor(0, 0, 0, 0);
    gl!.clear(gl!.COLOR_BUFFER_BIT);
    gl!.uniform1f(ubicaciones.uRadio, RADIO_DE_LA_ESFERA * vista.escala);
    gl!.uniform2f(
      ubicaciones.uCentro,
      (vista.lat * Math.PI) / 180,
      (vista.lon * Math.PI) / 180,
    );
    gl!.uniform1i(ubicaciones.uConFoto, conFoto ? 1 : 0);
    gl!.drawArrays(gl!.TRIANGLES, 0, 3);
  }

  // Si el sistema se lleva el contexto (pasa en los teléfonos con poca
  // memoria), se rearma todo cuando lo devuelve.
  const alPerder = (e: Event) => {
    e.preventDefault();
    programa = null;
  };
  const alRecuperar = () => {
    if (preparar() && ultima) dibujar(ultima);
  };
  canvas.addEventListener("webglcontextlost", alPerder);
  canvas.addEventListener("webglcontextrestored", alRecuperar);

  if (!preparar()) return null;

  return {
    dibujar,
    medir(lado) {
      const densidad = Math.min(2, window.devicePixelRatio || 1);
      const pixeles = Math.max(1, Math.round(lado * densidad));
      if (canvas.width !== pixeles) {
        canvas.width = pixeles;
        canvas.height = pixeles;
      }
      if (ultima) dibujar(ultima);
    },
    cambiarTextura(src) {
      if (src !== fuente) cargar(src);
    },
    destruir() {
      canvas.removeEventListener("webglcontextlost", alPerder);
      canvas.removeEventListener("webglcontextrestored", alRecuperar);
      if (imagen) imagen.onload = null;
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    },
  };
}
