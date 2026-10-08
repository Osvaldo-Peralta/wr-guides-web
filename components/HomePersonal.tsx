"use client";
// WR-GUIDES-WEB · components/HomePersonal.tsx (V2) — rincón personal del home:
//   · "★ Tus favoritas"   → favoritos anónimos del visitante (API, por visitor-id)
//   · "📖 Seguir leyendo" → historial LOCAL de visitas (localStorage)
// Ambas secciones solo existen si hay algo que mostrar; sin datos, el home
// queda idéntico a siempre (degradación silenciosa, mismo espíritu Fase 5).
import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import { leerRecientes } from "@/lib/recientes";
import type { GuideMeta } from "@/lib/guides";

function Mini({ g }: { g: GuideMeta }) {
  const titulo = g.variant ? `${g.champion} — ${g.variant.replace(/-/g, " ")}` : g.champion;
  return (
    <li className="related-card">
      <Link href={`/guias/${g.slug}`}>
        <span className="related-titulo">{titulo}</span>
        <span className="related-sub">
          v{g.version} · parche {g.patch ?? "—"}
          {g.win ? ` · WR ${g.win.win_pct} % · Tier ${g.win.tier}` : ""}
        </span>
      </Link>
    </li>
  );
}

export default function HomePersonal({ guias }: { guias: GuideMeta[] }) {
  const [favs, setFavs] = useState<string[] | null>(null);
  const [recientes, setRecientes] = useState<string[]>([]);

  useEffect(() => {
    api.misFavoritos().then((r) => r && setFavs(r.slugs));
    setRecientes(leerRecientes());
  }, []);

  const porSlug = new Map(guias.map((g) => [g.slug, g]));
  const favGuias = (favs || []).map((s) => porSlug.get(s)).filter((g): g is GuideMeta => Boolean(g));
  const recGuias = recientes
    .map((s) => porSlug.get(s))
    .filter((g): g is GuideMeta => Boolean(g))
    .filter((g) => !favGuias.some((f) => f.slug === g.slug))
    .slice(0, 4);

  if (!favGuias.length && !recGuias.length) return null;
  return (
    <section className="personal" aria-label="Tu rincón personal">
      {favGuias.length > 0 && (
        <>
          <h2>★ Tus favoritas</h2>
          <ul className="related-grid">{favGuias.map((g) => <Mini key={g.slug} g={g} />)}</ul>
        </>
      )}
      {recGuias.length > 0 && (
        <>
          <h2>📖 Seguir leyendo</h2>
          <ul className="related-grid">{recGuias.map((g) => <Mini key={g.slug} g={g} />)}</ul>
        </>
      )}
    </section>
  );
}
