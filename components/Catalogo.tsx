"use client";
// WR-GUIDES-WEB · components/Catalogo.tsx (Paso 9) — catálogo vivo de la home:
// búsqueda instantánea (campeón/variante/arquetipo/slug), filtros por rol y
// ordenamiento (rol · win rate · novedad · A–Z). Todo en memoria del navegador
// sobre el índice SSG: sin backend, sin requests, sin loading states.
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import { BadgesGuia } from "@/components/Badges";
import type { GuideMeta } from "@/lib/guides";

const ROLES: [string, string][] = [
  ["adc", "ADC"],
  ["jungla", "Jungla"],
  ["mid", "Mid"],
  ["top", "Top"],
  ["support", "Support"],
];

function Tarjeta({ g, fav }: { g: GuideMeta; fav: boolean }) {
  const titulo = g.variant ? `${g.champion} — ${g.variant.replace(/-/g, " ")}` : g.champion;
  return (
    <li className={`guide-card role-${g.role}`}>
      <Link href={`/guias/${g.slug}`}>
        <span className="guide-title">
          {titulo}
          {fav && <span className="card-fav" title="En tus favoritos"> ★</span>}
        </span>
        <span className="guide-sub">
          v{g.version} · parche {g.patch ?? "—"}
          {g.archetype ? ` · ${g.archetype}` : ""}
        </span>
      </Link>
      <BadgesGuia g={g} />
    </li>
  );
}

export default function Catalogo({ guias }: { guias: GuideMeta[] }) {
  const [q, setQ] = useState("");
  const [favs, setFavs] = useState<Set<string>>(new Set());
  useEffect(() => {
    api.misFavoritos().then((r) => r && setFavs(new Set(r.slugs)));
  }, []);
  const [rol, setRol] = useState("todos");
  // Deep-link del breadcrumb (?rol=jungla): se aplica al montar, en el
  // navegador, para no romper el SSR estático del catálogo (SEO/no-JS).
  useEffect(() => {
    try {
      const r = new URLSearchParams(window.location.search).get("rol");
      if (r && ROLES.some(([key]) => key === r)) setRol(r);
    } catch { /* sin location (SSR) */ }
  }, []);
  const [orden, setOrden] = useState("rol");

  const filtradas = useMemo(() => {
    const texto = q.trim().toLowerCase();
    let out = guias.filter(
      (g) =>
        (rol === "todos" || g.role === rol) &&
        (!texto ||
          [g.champion, g.slug, g.archetype || "", g.variant || "", g.role, g.status]
            .join(" ")
            .toLowerCase()
            .includes(texto))
    );
    if (orden === "wr")
      out = [...out].sort((a, b) => Number(b.win?.win_pct ?? -1) - Number(a.win?.win_pct ?? -1));
    else if (orden === "az") out = [...out].sort((a, b) => a.champion.localeCompare(b.champion));
    else if (orden === "nuevas")
      out = [...out].sort((a, b) =>
        String(b.updated_at || b.published_at || "").localeCompare(
          String(a.updated_at || a.published_at || "")
        )
      );
    return out;
  }, [guias, q, rol, orden]);

  const agrupado = orden === "rol" && rol === "todos" && q.trim() === "";

  return (
    <>
      <div className="catalogo-bar">
        <input
          className="catalogo-search"
          type="search"
          placeholder="Buscar: campeón, arquetipo, slug… (p. ej. “crit”, “tanques”, “jinx”)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Buscar guías"
        />
        <div className="chips" role="group" aria-label="Filtrar por rol">
          <button type="button" className={rol === "todos" ? "chip chip-activo" : "chip"} onClick={() => setRol("todos")}>
            Todos
          </button>
          {ROLES.map(([r, nombre]) => (
            <button key={r} type="button" className={rol === r ? "chip chip-activo" : "chip"} onClick={() => setRol(r)}>
              {nombre}
            </button>
          ))}
        </div>
        <label className="catalogo-orden">
          Orden
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="rol">por rol</option>
            <option value="wr">win rate</option>
            <option value="nuevas">más nuevas</option>
            <option value="az">A–Z</option>
          </select>
        </label>
        <span className="catalogo-count" aria-live="polite">
          {filtradas.length} {filtradas.length === 1 ? "guía" : "guías"}
        </span>
      </div>

      {agrupado ? (
        ROLES.map(([r, titulo]) => {
          const delRol = filtradas.filter((g) => g.role === r);
          if (!delRol.length) return null;
          const champs = [...new Set(delRol.map((g) => g.champion))].sort();
          return (
            <section key={r}>
              <h2>{titulo}</h2>
              <ul className="guide-grid">
                {champs.map((c) =>
                  delRol.filter((g) => g.champion === c).map((g) => <Tarjeta key={g.slug} g={g} fav={favs.has(g.slug)} />)
                )}
              </ul>
            </section>
          );
        })
      ) : (
        <section>
          <ul className="guide-grid">
            {filtradas.map((g) => (
              <Tarjeta key={g.slug} g={g} fav={favs.has(g.slug)} />
            ))}
          </ul>
          {!filtradas.length && (
            <p className="catalogo-vacio">
              Sin resultados para esos filtros. Probá con otro término o volvé a{" "}
              <button type="button" className="chip" onClick={() => { setQ(""); setRol("todos"); }}>
                ver todo
              </button>
              .
            </p>
          )}
        </section>
      )}
    </>
  );
}
