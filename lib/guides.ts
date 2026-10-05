// WR-GUIDES-WEB · lib/guides.ts — lectura de contenido (puerto del contrato lab↔frontend)
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Verification =
  | "AL_DIA" | "ANOTAR" | "SIN_IMPACTO" | "REVISAR" | "REGENERAR" | "pending";

export interface GuideMeta {
  slug: string;
  archivo: string;
  champion: string;
  role: string;
  variant: string | null;
  patch: string | null;
  version: string;
  status: string;
  engine: string;
  archetype: string | null;
  custom: boolean;
  generate: string;
  mode: string;
  published_at: string | null;
  updated_at: string | null;
  verification: Verification | string;
  verified_patch: string | null;
  win: {
    win_pct: string; pick_pct: string; ban_pct: string; tier: string;
    role: string; actualizado: string;
  } | null;
}

export interface Guide extends GuideMeta {
  body: string;
}

export interface GuidesIndex {
  generado: string;
  guias: GuideMeta[];
}

const CONTENT = path.join(process.cwd(), "content");
export const PUBLISHABLE = new Set(["Aprobado", "Beta"]);

export function loadIndex(): GuidesIndex {
  const p = path.join(CONTENT, "guias_index.json");
  if (!fs.existsSync(p)) return { generado: "", guias: [] };
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

export function loadGuide(slug: string): Guide | null {
  const meta = loadIndex().guias.find((g) => g.slug === slug);
  if (!meta) return null;
  const raw = fs.readFileSync(path.join(CONTENT, meta.archivo), "utf8");
  const { data, content } = matter(raw);
  return { ...meta, body: preprocesar(content) };
}

export function allSlugs(): string[] {
  return loadIndex().guias
    .filter((g) => PUBLISHABLE.has(g.status))
    .map((g) => g.slug);
}

// ── Pre-procesamiento (contrato §3.1): bloques WRLAB-VERIF → callout "verif" ──
// El bloque es: <!-- WRLAB-VERIF:{patch}:START … --> + blockquote + <!-- …:END -->
// Se convierte en un blockquote [!VERIF] para el renderizador (nunca HTML crudo).
export function preprocesar(md: string): string {
  // 1) bloques WRLAB-VERIF → callout [!VERIF] (contrato §3.1: nunca HTML crudo)
  let out = md.replace(
    /<!--\s*WRLAB-VERIF:([\w.]+):START[^]*?-->([\s\S]*?)<!--\s*WRLAB-VERIF:\1:END\s*-->/g,
    (_m, patch: string, body: string) => {
      const limpio = body
        .split("\n")
        .filter((l: string) => !/^\s*>?\s*\[!\w+\].*$/i.test(l))
        .join("\n")
        .replace(/^>\s?/gm, "")
        .trim();
      return `> [!VERIF]\n>\n> **Hotfix ${patch} — verificación del laboratorio**\n${limpio
        .split("\n")
        .map((l: string) => `> ${l}`)
        .join("\n")}`;
    }
  );
  // 2) callouts: marcador [!X] en párrafo PROPIO (línea quote vacia detrás) para que el
  //    renderizador lo detecte; título inline → párrafo bold independiente
  out = out.replace(/^([ \t]*> *)[ \t]*\[!(\w+)\][ \t]*(.*)$/gm,
    (_m, pref: string, tipo: string, resto: string) => {
      const r = resto.trim();
      return r
        ? `${pref}[!${tipo}]\n${pref}\n${pref}**${r}**`
        : `${pref}[!${tipo}]\n${pref}`;
    });
  return out;
}
