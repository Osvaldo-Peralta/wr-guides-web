// WR-GUIDES-WEB · lib/slug.ts — slugify compartido (anclas de títulos + TOC).
// Mismo algoritmo en el renderizador (components/Markdown.tsx) y en el
// extractor de TOC (lib/toc.ts) para que los href="#…" siempre existan.
export function slugify(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita diacríticos
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

// Dedupe determinista por orden de aparición: SSR y cliente producen los
// mismos ids (importante para la hidratación y para que la TOC no rompa).
export function idUnico(vistos: Map<string, number>, base: string): string {
  const n = vistos.get(base) || 0;
  vistos.set(base, n + 1);
  return n ? `${base}-${n}` : base;
}
