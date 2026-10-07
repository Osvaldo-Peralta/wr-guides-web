// WR-GUIDES-WEB · /meta — Paso 9.1: board de meta por rol con el ROSTER
// COMPLETO del laboratorio (content/winrates.csv), no solo los campeones con
// guía publicada. Los que sí tienen guía se marcan ⚗️ y linkean a ella.
// Fuente: wr-meta bucket Diamond+, refrescado 2×/día (patch-watch → sync F6).
import { loadWinrates } from "@/lib/winratesLoader";
import { loadIndex, PUBLISHABLE } from "@/lib/guides";
import MetaBoard from "@/components/MetaBoard";

export const dynamic = "force-static";

export const metadata = { title: "Meta actual" };

// rol del contrato (frontmatter) → rol del CSV de win rates
const ROL_CSV: Record<string, string> = {
  adc: "DUO", support: "SUPPORT", jungla: "JUNGLE", mid: "MID", top: "SOLO",
};

export default function MetaPage() {
  const filas = loadWinrates();
  const idx = loadIndex();

  const guias: Record<string, string> = {};
  for (const g of idx.guias) {
    if (!PUBLISHABLE.has(g.status)) continue;
    const k = `${g.champion}|${ROL_CSV[g.role] || ""}`;
    if (!guias[k]) guias[k] = g.slug;
  }

  const actualizado = filas.map((f) => f.actualizado).filter(Boolean).sort().at(-1) || "—";
  const campeones = new Set(filas.map((f) => f.champion)).size;

  return (
    <section>
      <h1>Meta actual — Diamond+</h1>
      <p>
        El top de cada rol sobre el <strong>roster completo que vigila el
        laboratorio</strong> (wr-meta, bucket Diamond+, refresco 2×/día): no
        está limitado a los campeones con guía publicada — los que sí la
        tienen se marcan con ⚗️ y linkean directo a su guía.
      </p>
      <p className="hero-meta">
        {campeones} campeones vigilados · {filas.length} pares campeón-rol ·
        última actualización: {actualizado}
      </p>

      <MetaBoard filas={filas} guias={guias} />

      <p className="tier-leyenda" aria-label="Leyenda de tiers">
        <span className="tier-leyenda-item"><span className="tier tier-splus">S+</span> roto / pick obligatorio</span>
        <span className="tier-leyenda-item"><span className="tier tier-s">S</span> prioridad de baneo</span>
        <span className="tier-leyenda-item"><span className="tier tier-a">A</span> fuerte</span>
        <span className="tier-leyenda-item"><span className="tier tier-b">B</span> jugable con ventaja</span>
      </p>
      <p className="meta-nota">
        Tier = combinación de win rate, pick y ban del bucket Diamond+ (fuente
        wr-meta, confianza indicada por fila). Si un campeón del roster no
        aparece en el catálogo, es porque todavía no pasó por el laboratorio —
        el board lo muestra igual: el meta no espera a nuestros reportes.
      </p>
    </section>
  );
}
