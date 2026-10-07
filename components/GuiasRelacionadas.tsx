// WR-GUIDES-WEB · components/GuiasRelacionadas.tsx (Paso 9) — al terminar una
// guía: otras variantes del mismo campeón + top del mismo rol por win rate.
// Server component: lee el índice en build time (cero costo cliente).
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

export default function GuiasRelacionadas({ slug }: { slug: string }) {
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
