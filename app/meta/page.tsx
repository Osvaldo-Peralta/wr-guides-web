// WR-GUIDES-WEB · /meta — win rates Diamond+ de las guías publicadas (Paso 9:
// tiers con color + leyenda + resumen de distribución). Fuente:
// champion_winrates.csv del lab, adjunto al índice por el sync (Fase 6).
import { loadIndex, PUBLISHABLE } from "@/lib/guides";

export const dynamic = "force-static";

export const metadata = { title: "Meta actual" };

const TIER_CLASE: Record<string, string> = {
  "S+": "tier-splus", S: "tier-s", A: "tier-a", B: "tier-b", C: "tier-c", D: "tier-d",
};
const ORDEN_TIER = ["S+", "S", "A", "B", "C", "D"];

export default function MetaPage() {
  const idx = loadIndex();
  const conWin = idx.guias.filter((g) => PUBLISHABLE.has(g.status) && g.win);
  const vistos = new Set<string>();
  const filas = conWin
    .filter((g) => {
      const k = g.champion + "|" + g.win!.role;
      if (vistos.has(k)) return false;
      vistos.add(k);
      return true;
    })
    .sort((a, b) => Number(b.win!.win_pct) - Number(a.win!.win_pct));

  const porTier = ORDEN_TIER.map((t) => [t, filas.filter((g) => g.win!.tier === t).length] as const)
    .filter(([, n]) => n > 0);

  return (
    <section>
      <h1>Meta actual — Diamond+</h1>
      <p>
        Win rates sincronizadas desde el pipeline del laboratorio (wr-meta, bucket Diamond+,
        refresco 2×/día). Última actualización: {idx.guias.find((g) => g.win)?.win?.actualizado ?? "—"}.
      </p>
      <p className="tier-leyenda" aria-label="Distribución de tiers">
        {porTier.map(([t, n]) => (
          <span key={t} className={`tier ${TIER_CLASE[t] || "tier-x"}`} title={`${n} rol(es) en tier ${t}`}>
            {t} × {n}
          </span>
        ))}
      </p>
      <div className="table-container">
        <table>
          <thead>
            <tr><th>Campeón</th><th>Rol</th><th>WR %</th><th>Pick %</th><th>Ban %</th><th>Tier</th></tr>
          </thead>
          <tbody>
            {filas.map((g) => (
              <tr key={g.champion + g.win!.role}>
                <td>{g.champion}</td>
                <td>{g.win!.role}</td>
                <td>{g.win!.win_pct}</td>
                <td>{g.win!.pick_pct}</td>
                <td>{g.win!.ban_pct}</td>
                <td><span className={`tier ${TIER_CLASE[g.win!.tier] || "tier-x"}`}>{g.win!.tier}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="meta-nota">
        Tier = combinación de win rate, pick y ban del bucket Diamond+ (fuente wr-meta).
        S+ / S = prioridad de baneo o pick casi obligatorio; B/C = jugable con ventaja
        de conocimiento, no por fuerza bruta.
      </p>
    </section>
  );
}
