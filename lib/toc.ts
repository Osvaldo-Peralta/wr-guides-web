// WR-GUIDES-WEB · lib/toc.ts (Paso 9) — tabla de contenidos desde el markdown.
// Extrae h2/h3 FUERA de bloques de código y les asigna los MISMOS ids que
// genera el renderizador (lib/slug.ts + dedupe por orden de aparición).
import { slugify, idUnico } from "./slug";

export interface TocItem {
  id: string;
  texto: string;
  nivel: 2 | 3;
}

export function extraerToc(md: string): TocItem[] {
  const vistos = new Map<string, number>();
  const out: TocItem[] = [];
  let enCodigo = false;
  for (const linea of md.split("\n")) {
    if (/^\s*(```|~~~)/.test(linea)) {
      enCodigo = !enCodigo;
      continue;
    }
    if (enCodigo) continue;
    const m = /^(#{2,3})\s+(.*)$/.exec(linea);
    if (!m) continue;
    const texto = m[2]
      .replace(/\[!\w+\]/g, "")   // marcadores de callout por si asoman
      .replace(/\]\([^)]*\)/g, "") // links: quedate con el texto visible
      .replace(/[*_`~]/g, "")
      .trim();
    if (!texto) continue;
    out.push({
      id: idUnico(vistos, slugify(texto) || "seccion"),
      texto,
      nivel: m[1].length as 2 | 3,
    });
  }
  return out;
}
