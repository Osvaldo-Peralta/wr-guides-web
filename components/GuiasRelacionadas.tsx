// WR-GUIDES-WEB · components/GuiasRelacionadas.tsx (Paso 9, rev. Paso 10) —
// otras variantes del mismo campeón + top del mismo rol. Dos presentaciones:
//   · default:  secciones con grid de cards al final de la guía
//   · compacto: lista densa para el rail derecho (GuideRail)
import Link from "next/link";
import { loadIndex, PUBLISHABLE, type GuideMeta } from "@/lib/guides";

const ROLES: Record<string, string> = {
  adc: "ADC", support: "Support", jungla: "Jungla", mid: "Mid", top: "Top",
};

function MiniCard({ g }: { g: GuideMeta }) {
  const titulo = g.variant ? `${g.champion} — ${g.variant.replace(/-/g, " ")}` : g.champion;
  return (
    <li className="related-card">
      <Link href={`/guias/${g.slug}`}>
        <span className="related-titulo">{titulo}</span>
        <span className="related-sub">
          {ROLES[g.role] || g.role} · v{g.version} · parche {g.patch ?? "—"}
          {g.win ? ` · WR ${g.win.win_pct} %` : ""}
        </span>
      </Link>
    </li>
  );
}

export default function GuiasRelacionadas({
  slug,
  compacto = false,
}: {
  slug: string;
  compacto?: boolean;
}) {
  const idx = loadIndex();
  const pub = idx.guias.filter((g) => PUBLISHABLE.has(g.status));
  const actual = pub.find((g) => g.slug === slug);
  if (!actual) return null;

  const mismoChamp = pub.filter((g) => g.champion === actual.champion && g.slug !== slug);
  const mismoRol = pub
    .filter((g) => g.role === actual.role && g.slug !== slug && !mismoChamp.includes(g))
    .sort((a, b) => Number(b.win?.win_pct ?? -1) - Number(a.win?.win_pct ?? -1))
    .slice(0, 3);

  if (!mismoChamp.length && !mismoRol.length) return null;
  const todos = [...mismoChamp, ...mismoRol];

  if (compacto) {
    return (
      <div className="rail-box">
        <p className="rail-titulo">🔗 Relacionadas</p>
        <ul className="rail-list">
          {todos.map((g) => {
            const titulo = g.variant ? `${g.champion} — ${g.variant.replace(/-/g, " ")}` : g.champion;
            return (
              <li key={g.slug}>
                <Link href={`/guias/${g.slug}`}>
                  {titulo}
                  <span className="rail-list-sub">{ROLES[g.role] || g.role}{g.win ? ` · ${g.win.tier}` : ""}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <section className="related" aria-label="Guías relacionadas">
      {mismoChamp.length > 0 && (
        <>
          <h2>Más de {actual.champion}</h2>
          <ul className="related-grid">{mismoChamp.map((g) => <MiniCard key={g.slug} g={g} />)}</ul>
        </>
      )}
      {mismoRol.length > 0 && (
        <>
          <h2>Lo más fuerte de {ROLES[actual.role] || actual.role}</h2>
          <ul className="related-grid">{mismoRol.map((g) => <MiniCard key={g.slug} g={g} />)}</ul>
        </>
      )}
    </section>
  );
}
