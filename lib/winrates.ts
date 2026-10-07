// WR-GUIDES-WEB · lib/winrates.ts — roster COMPLETO del lab para el board de
// meta (Paso 9.1). Fuente: content/winrates.csv, que espeja el
// champion_winrates.csv del lab (patch-watch 2×/día + sync Fase 6).
//
// Clave del diseño: /meta YA NO depende de las guías publicadas — el CSV
// vigila más campeones de los que tienen reporte (Ahri, Karma, Malphite,
// Orianna, Syndra… sin guía hoy). El link a guías existentes se agrega como
// capa opcional (⚗️) desde app/meta/page.tsx.
export interface WinRow {
  champion: string;
  role: string; // rol CSV: DUO | JUNGLE | MID | SOLO | SUPPORT
  tier: string;
  win_pct: number;
  pick_pct: number;
  ban_pct: number;
  trend: string; // "↑ 2" | "↓ 1" | "0" (vs refresh anterior)
  confidence: string;
  bucket: string;
  actualizado: string;
}

export const ROLES_META: { key: string; nombre: string; icono: string }[] = [
  { key: "DUO", nombre: "ADC · Dragon Lane", icono: "🏹" },
  { key: "JUNGLE", nombre: "Jungla", icono: "🌲" },
  { key: "MID", nombre: "Mid", icono: "🔮" },
  { key: "SOLO", nombre: "Top · Baron Lane", icono: "🛡️" },
  { key: "SUPPORT", nombre: "Support", icono: "💠" },
];

export const TIER_ORDEN: Record<string, number> = {
  "S+": 0, S: 1, A: 2, B: 3, C: 4, D: 5, E: 6,
};
export const TIER_CLASE: Record<string, string> = {
  "S+": "tier-splus", S: "tier-s", A: "tier-a", B: "tier-b", C: "tier-c", D: "tier-d",
};

// Ranking "meta": tier primero (S+ > S > A …), desempate por win rate.
export function ordenMeta(a: WinRow, b: WinRow): number {
  const t = (TIER_ORDEN[a.tier] ?? 99) - (TIER_ORDEN[b.tier] ?? 99);
  return t !== 0 ? t : b.win_pct - a.win_pct;
}
