// WR-GUIDES-WEB · lib/winratesLoader.ts — lectura SERVER-SIDE del CSV de win
// rates (node:fs). Separado de lib/winrates.ts (puro, client-safe) para que el
// bundle del navegador no intente importar node:fs (error webpack clásico de
// App Router: componente cliente que arrastra un módulo con fs).
import fs from "node:fs";
import path from "node:path";
import type { WinRow } from "./winrates";

// Mismo parsing defensivo que scripts/gen-index.mjs (header-driven, sin
// depender del orden de columnas; filas malformed se saltan).
export function loadWinrates(): WinRow[] {
  const p = path.join(process.cwd(), "content", "winrates.csv");
  if (!fs.existsSync(p)) return [];
  const lineas = fs.readFileSync(p, "utf8").split(/\r?\n/).filter(Boolean);
  if (lineas.length < 2) return [];
  const hdr = lineas[0].split(",").map((h) => h.trim());
  const out: WinRow[] = [];
  for (const lin of lineas.slice(1)) {
    const c = lin.split(",");
    const f = Object.fromEntries(hdr.map((h, i) => [h, (c[i] || "").trim()]));
    if (!f.champion || !f.role) continue;
    out.push({
      champion: f.champion,
      role: f.role,
      tier: f.tier || "—",
      win_pct: Number(f.win_pct) || 0,
      pick_pct: Number(f.pick_pct) || 0,
      ban_pct: Number(f.ban_pct) || 0,
      trend: f.trend || "0",
      confidence: f.confidence || "",
      bucket: f.bucket || "",
      actualizado: f.actualizado || f.updated_utc || "",
    });
  }
  return out;
}
