// WR-GUIDES-WEB · /meta — win rates Diamond+ de las guías publicadas
// (fuente: champion_winrates.csv del lab, adjunto al índice por el sync).
import { loadIndex, PUBLISHABLE } from "@/lib/guides";

export const dynamic = "force-static";

export const metadata = { title: "Meta actual" };

export default function MetaPage() {
  const idx = loadIndex();
  const conWin = idx.guias.filter((g) => PUBLISHABLE.has(g.status) && g.win);
  const vistos = new Set<string>();
  const filas = conWin.filter((g) => {
    const k = g.champion + "|" + g.win!.role;
    if (vistos.has(k)) return false;
    vistos.add(k);
    return true;
  }).sort((a, b) => Number(b.win!.win_pct) - Number(a.win!.win_pct));

  return (
    <section>
      <h1>Meta actual — Diamond+</h1>
      <p>
        Win rates sincronizadas desde el pipeline del laboratorio (wr-meta, bucket Diamond+,
        refresco 2×/día). Última actualización: {idx.guias.find((g) => g.win)?.win?.actualizado ?? "—"}.
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
                <td><strong>{g.win!.tier}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
