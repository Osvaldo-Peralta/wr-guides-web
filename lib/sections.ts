// WR-GUIDES-WEB · lib/sections.ts (Paso 10) — divide el cuerpo de una guía en
// secciones por h2 (respetando bloques de código) para renderizarlas como
// tarjetas plegables. Los ids vienen de extraerToc() (misma fuente que la TOC),
// así anclas, scroll-spy y plegables comparten una sola verdad.
import type { TocItem } from "./toc";

export interface Seccion {
  id: string;
  titulo: string;
  md: string; // contenido ENTRE este h2 y el siguiente (sin la línea del h2)
  defaultOpen: boolean;
}

// Secciones que arrancan plegadas: material de referencia largo. El lector
// puede abrirlas con un click; llegan abiertas si entra por ancla.
const CERRADAS_POR_DEFECTO = /AP[ÉE]NDICE/i;

export function dividirSecciones(
  body: string,
  toc: TocItem[]
): { intro: string; secciones: Seccion[] } {
  const h2s = toc.filter((t) => t.nivel === 2);
  const lineas = body.split("\n");
  const secciones: Seccion[] = [];
  const intro: string[] = [];
  let buffer: string[] = [];
  let actual: { item: TocItem; titulo: string } | null = null;
  let idx = -1;
  let enCodigo = false;

  const cerrar = () => {
    if (actual) {
      secciones.push({
        id: actual.item.id,
        titulo: actual.titulo,
        md: buffer.join("\n"),
        defaultOpen: !CERRADAS_POR_DEFECTO.test(actual.titulo),
      });
    }
  };

  for (const linea of lineas) {
    if (/^\s*(```|~~~)/.test(linea)) enCodigo = !enCodigo;
    if (!enCodigo && /^##\s+/.test(linea)) {
      cerrar();
      idx++;
      const item = h2s[idx];
      if (!item) { // defensivo: más h2 de los que vio la TOC (no debería pasar)
        actual = null;
        buffer = [linea];
        continue;
      }
      actual = { item, titulo: linea.replace(/^##\s+/, "").trim() };
      buffer = [];
      continue;
    }
    if (actual) buffer.push(linea);
    else intro.push(linea);
  }
  cerrar();
  return { intro: intro.join("\n").trim(), secciones };
}
