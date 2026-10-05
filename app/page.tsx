// WR-GUIDES-WEB · home — guías agrupadas por rol y campeón (contrato: identidad = slug,
// agrupación = champion; solo Status publicable: Aprobado/Beta).
import Link from "next/link";
import { loadIndex, PUBLISHABLE, type GuideMeta } from "@/lib/guides";
import { BadgesGuia } from "@/components/Badges";

export const dynamic = "force-static";

const ROLES: [string, string][] = [
  ["adc", "ADC (Dragon Lane)"],
  ["jungla", "Jungla"],
  ["mid", "Mid"],
  ["top", "Top (Baron Lane)"],
  ["support", "Support"],
];

function TarjetaGuia({ g }: { g: GuideMeta }) {
  const titulo = g.variant
    ? `${g.champion} — ${g.variant.replace(/-/g, " ")}`
    : g.champion;
  return (
    <li className="guide-card">
      <Link href={`/guias/${g.slug}`}>
        <span className="guide-title">{titulo}</span>
        <span className="guide-sub">
          v{g.version} · parche {g.patch ?? "—"}
          {g.archetype ? ` · ${g.archetype}` : ""}
        </span>
      </Link>
      <BadgesGuia g={g} />
    </li>
  );
}

export default function Home() {
  const idx = loadIndex();
  const publicables = idx.guias.filter((g) => PUBLISHABLE.has(g.status));
  const porRol = (rol: string) => publicables.filter((g) => g.role === rol);
  const sinRol = publicables.filter((g) => !ROLES.some(([r]) => r === g.role));

  return (
    <>
      <section className="hero">
        <h1>Guías de Wild Rift verificadas por laboratorio</h1>
        <p>
          Cada guía pasa por <strong>WR-LAB</strong>: builds de 6 slots validadas (Ley 0),
          números reproducibles por el motor, verificación automática contra cada hotfix
          y win rates Diamond+ actualizadas a diario. Índice generado el {idx.generado || "—"}.
        </p>
      </section>
      {ROLES.map(([rol, titulo]) => {
        const guias = porRol(rol);
        if (!guias.length) return null;
        // agrupar por campeón
        const champs = [...new Set(guias.map((g) => g.champion))].sort();
        return (
          <section key={rol}>
            <h2>{titulo}</h2>
            <ul className="guide-grid">
              {champs.map((c) =>
                guias.filter((g) => g.champion === c).map((g) => <TarjetaGuia key={g.slug} g={g} />)
              )}
            </ul>
          </section>
        );
      })}
      {sinRol.length > 0 && (
        <section>
          <h2>Otras</h2>
          <ul className="guide-grid">{sinRol.map((g) => <TarjetaGuia key={g.slug} g={g} />)}</ul>
        </section>
      )}
    </>
  );
}
