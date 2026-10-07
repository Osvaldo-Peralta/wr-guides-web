"use client";
// WR-GUIDES-WEB · components/MetaBoard.tsx (Paso 9.1) — board de meta por rol:
// 5 cards (una por rol) con el top N del ROSTER COMPLETO del lab (no solo los
// campeones con guía). Toggle Top 5 / Top 10 en el navegador, sin requests.
// Los campeones con guía publicada linkean a ella (⚗️).
import { useMemo, useState } from "react";
import Link from "next/link";
import { ROLES_META, TIER_CLASE, ordenMeta, type WinRow } from "@/lib/winrates";

function claseTrend(t: string): string {
  if (t.startsWith("↑")) return "meta-trend-up";
  if (t.startsWith("↓")) return "meta-trend-down";
  return "";
}

export default function MetaBoard({
  filas,
  guias,
}: {
  filas: WinRow[];
  guias: Record<string, string>; // "Champion|ROL_CSV" → slug publicable
}) {
  const [topN, setTopN] = useState<5 | 10>(5);

  const porRol = useMemo(() => {
    const m = new Map<string, WinRow[]>();
    for (const r of ROLES_META) {
      m.set(r.key, filas.filter((f) => f.role === r.key).sort(ordenMeta));
    }
    return m;
  }, [filas]);

  return (
    <>
      <div className="meta-top-bar">
        <p className="meta-fuente">
          Ranking por tier y win rate · la tendencia (↑/↓) compara contra el
          refresh anterior · hover en una fila = pick/ban/confianza.
        </p>
        <div className="chips" role="group" aria-label="Cantidad de campeones por rol">
          <button type="button" className={topN === 5 ? "chip chip-activo" : "chip"} onClick={() => setTopN(5)}>
            Top 5
          </button>
          <button type="button" className={topN === 10 ? "chip chip-activo" : "chip"} onClick={() => setTopN(10)}>
            Top 10
          </button>
        </div>
      </div>

      <div className="meta-grid">
        {ROLES_META.map((rol) => {
          const todas = porRol.get(rol.key) || [];
          const lista = todas.slice(0, topN);
          return (
            <section className="meta-card" key={rol.key} aria-label={`Meta de ${rol.nombre}`}>
              <header className="meta-card-head">
                <span className="meta-card-icono" aria-hidden="true">{rol.icono}</span>
                <h2>{rol.nombre}</h2>
                <span className="meta-card-count">
                  top {lista.length} de {todas.length}
                </span>
              </header>
              <ol className="meta-list">
                {lista.map((r, i) => {
                  const slug = guias[`${r.champion}|${r.role}`];
                  return (
                    <li
                      className="meta-row"
                      key={`${r.champion}|${r.role}`}
                      title={`pick ${r.pick_pct} % · ban ${r.ban_pct} % · ${r.confidence || "s/d"}`}
                    >
                      <span className="meta-rank">{i + 1}</span>
                      <span className="meta-champ">
                        {slug ? <Link href={`/guias/${slug}`}>{r.champion}</Link> : r.champion}
                        {slug && (
                          <span className="meta-guia" title="Con guía publicada en el sitio">
                            {" "}⚗️
                          </span>
                        )}
                      </span>
                      <span className={`tier ${TIER_CLASE[r.tier] || "tier-x"}`}>{r.tier}</span>
                      <span className="meta-wr">{r.win_pct.toFixed(2)} %</span>
                      <span className={`meta-trend ${claseTrend(r.trend)}`}>{r.trend}</span>
                    </li>
                  );
                })}
                {!lista.length && <li className="meta-vacio">Sin datos del rol en este refresh.</li>}
              </ol>
            </section>
          );
        })}
      </div>
    </>
  );
}
