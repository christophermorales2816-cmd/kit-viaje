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
 *
 * Las fronteras van igual que la foto (spec, 25): otra imagen equirrectangular,
 * leída con las mismas coordenadas, con los países en el canal rojo y los
 * estados en el verde (herramientas/globo/fronteras.py). Los países se ven
 * siempre; los estados aparecen al acercar (`uEstados`).
 */

export interface Esfera {
  dibujar: (vista: Vista) => void;
  /** El lado del canvas en píxeles CSS. */
  medir: (lado: number) => void;
  cambiarTextura: (src: string) => void;
  cambiarFronteras: (src: string) => void;
  destruir: () => void;
}

/** La escala en la que empiezan a aparecer los estados. */
const ESTADOS_DESDE = 1.5;
/** Cuánta escala más hace falta para verlos del todo. */
const ESTADOS_RAMPA = 0.6;

/**
 * Cuánto se ven los estados, de 0 a 1, según la escala: nada con el globo
 * entero, del todo desde que ya se distingue un país grande por dentro.
 */
export function opacidadDeLosEstados(escala: number): number {
  return Math.min(1, Math.max(0, (escala - ESTADOS_DESDE) / ESTADOS_RAMPA));
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
uniform sampler2D uFronteras;
uniform bool uConFronteras;
uniform float uEstados;
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

  // Las derivadas se calculan para todos los píxeles, fuera de los if: en
  // GLSL, dFdx dentro de una rama que no corren todos los vecinos no está
  // definida.
  float corrida = fract(uv.x + 0.5);
  vec2 dx = vec2(dFdx(uv.x), dFdx(uv.y));
  vec2 dy = vec2(dFdy(uv.x), dFdy(uv.y));
  vec2 dxC = vec2(dFdx(corrida), dx.y);
  vec2 dyC = vec2(dFdy(corrida), dy.y);
  bool salta = abs(dxC.x) + abs(dyC.x) < abs(dx.x) + abs(dy.x);
  vec2 gx = salta ? dxC : dx;
  vec2 gy = salta ? dyC : dy;

  vec3 tierra = OCEANO;
  if (uConFoto) {
    tierra = textureGrad(uTierra, uv, gx, gy).rgb;
  }

  // Luz de frente: el borde más oscuro y con un velo de atmósfera.
  vec3 c = tierra * mix(0.6, 1.05, pow(z, 0.7));

  // Las fronteras, en blanco y más tenues hacia el borde de la esfera, donde
  // la foto se aplasta y una línea entera taparía la costa.
  if (uConFronteras) {
    vec2 lineas = textureGrad(uFronteras, uv, gx, gy).rg;
    float trazo = max(lineas.r * 0.75, lineas.g * 0.55 * uEstados);
    c = mix(c, vec3(1.0), trazo * smoothstep(0.0, 0.35, z));
  }

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
  {
    textura,
    fronteras,
    alCargar,
  }: { textura: string; fronteras: string; alCargar: () => void },
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
  let lineas: WebGLTexture | null = null;
  let conFronteras = false;
  let fuenteDeFronteras = fronteras;
  let imagenDeFronteras: HTMLImageElement | null = null;
  let ultima: Vista | null = null;
  let imagen: HTMLImageElement | null = null;
  const ubicaciones: Record<string, WebGLUniformLocation | null> = {};

  function cargar(src: string) {
    fuente = src;
    const nueva = new Image();
    nueva.decoding = "async";
    nueva.onload = () => {
      if (imagen !== nueva || gl!.isContextLost()) return;
      gl!.activeTexture(gl!.TEXTURE0);
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

  /**
   * Las fronteras, en la unidad 1. Si no llegan, el globo sigue con la foto
   * sola: son un agregado, no algo de lo que dependa.
   */
  function cargarFronteras(src: string) {
    fuenteDeFronteras = src;
    const nueva = new Image();
    nueva.decoding = "async";
    nueva.onload = () => {
      if (imagenDeFronteras !== nueva || gl!.isContextLost()) return;
      gl!.activeTexture(gl!.TEXTURE1);
      gl!.bindTexture(gl!.TEXTURE_2D, lineas);
      gl!.texImage2D(
        gl!.TEXTURE_2D,
        0,
        gl!.RGB,
        gl!.RGB,
        gl!.UNSIGNED_BYTE,
        nueva,
      );
      gl!.generateMipmap(gl!.TEXTURE_2D);
      gl!.activeTexture(gl!.TEXTURE0);
      conFronteras = true;
      if (ultima) dibujar(ultima);
    };
    imagenDeFronteras = nueva;
    nueva.src = src;
  }

  /** Una textura que da la vuelta en longitud, con mipmaps y anisotropía. */
  function crearTextura(unidad: number): WebGLTexture | null {
    const nueva = gl!.createTexture();
    gl!.activeTexture(unidad);
    gl!.bindTexture(gl!.TEXTURE_2D, nueva);
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
    gl!.activeTexture(gl!.TEXTURE0);
    return nueva;
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
    for (const nombre of [
      "uTierra",
      "uConFoto",
      "uFronteras",
      "uConFronteras",
      "uEstados",
      "uRadio",
      "uCentro",
    ]) {
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

    foto = crearTextura(gl!.TEXTURE0);
    lineas = crearTextura(gl!.TEXTURE1);
    gl!.uniform1i(ubicaciones.uTierra, 0);
    gl!.uniform1i(ubicaciones.uFronteras, 1);

    conFoto = false;
    conFronteras = false;
    cargar(fuente);
    cargarFronteras(fuenteDeFronteras);
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
    gl!.uniform1i(ubicaciones.uConFronteras, conFronteras ? 1 : 0);
    gl!.uniform1f(ubicaciones.uEstados, opacidadDeLosEstados(vista.escala));
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
    cambiarFronteras(src) {
      if (src !== fuenteDeFronteras) cargarFronteras(src);
    },
    destruir() {
      canvas.removeEventListener("webglcontextlost", alPerder);
      canvas.removeEventListener("webglcontextrestored", alRecuperar);
      if (imagen) imagen.onload = null;
      if (imagenDeFronteras) imagenDeFronteras.onload = null;
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    },
  };
}
