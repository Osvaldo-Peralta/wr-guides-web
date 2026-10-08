// WR-GUIDES-WEB · lib/recientes.ts (V2) — "seguir leyendo": historial LOCAL de
// guías visitadas (localStorage, sin backend ni cookies). Máximo 8 slugs,
// más reciente primero, sin duplicados.
export const REC_KEY = "wrg_recent";

export function registrarReciente(slug: string): void {
  try {
    const arr: { slug: string; at: number }[] = JSON.parse(
      localStorage.getItem(REC_KEY) || "[]"
    );
    const next = [{ slug, at: Date.now() }, ...arr.filter((x) => x.slug !== slug)].slice(0, 8);
    localStorage.setItem(REC_KEY, JSON.stringify(next));
  } catch {
    /* privado sin localStorage: simplemente no hay historial */
  }
}

export function leerRecientes(): string[] {
  try {
    const arr: { slug: string; at: number }[] = JSON.parse(localStorage.getItem(REC_KEY) || "[]");
    return arr.map((x) => x.slug).filter((s) => typeof s === "string");
  } catch {
    return [];
  }
}
