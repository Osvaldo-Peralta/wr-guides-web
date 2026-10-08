// WR-GUIDES-WEB · página de guía (/guias/[slug]) — Paso 10: layout ancho de
// 3 columnas: TOC sticky izq · contenido plegable al centro · rail der con
// ficha/win-rate/relacionadas. Breadcrumb Guías/Rol/Campeón con rol filtrado
// en el catálogo (?rol=). El estándar v1.4 se renderiza igual (contrato §3),
// ahora dentro de tarjetas de sección colapsables (lib/sections.ts).
import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { allSlugs, loadGuide, PUBLISHABLE } from "@/lib/guides";
import { extraerToc } from "@/lib/toc";
import { dividirSecciones } from "@/lib/sections";
import { slugify, idUnico } from "@/lib/slug";
import Markdown from "@/components/Markdown";
import { BadgesGuia } from "@/components/Badges";
import { StatsBar, LikeCta } from "@/components/GuideStats";
import TablaContenidos from "@/components/TablaContenidos";
import ProgresoLectura from "@/components/ProgresoLectura";
import GuideRail from "@/components/GuideRail";
import FavButton from "@/components/FavButton";
import RecentTracker from "@/components/RecentTracker";
import SeccionGuia from "@/components/SeccionGuia";

const ROLES: Record<string, string> = {
  adc: "ADC", support: "Support", jungla: "Jungla", mid: "Mid", top: "Top",
};

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = loadGuide(params.slug);
  if (!g) return { title: "Guía no encontrada" };
  const titulo = g.variant ? `${g.champion} — ${g.variant}` : `${g.champion} — Build optimizada`;
  const desc =
    `Guía de ${g.champion} (${ROLES[g.role] || g.role}, parche ${g.patch ?? "—"}) verificada por ` +
    `WR-LAB: build de 6 slots válida, números reproducibles` +
    (g.win ? ` y WR ${g.win.win_pct} % (tier ${g.win.tier}) en Diamond+.` : ".");
  return {
    title: titulo,
    description: desc,
    // La imagen OG la pone el route opengraph-image.tsx (card por campeón);
    // no se declara acá para no duplicar/pegarle arriba.
    openGraph: { type: "article", title: titulo, description: desc, url: `/guias/${g.slug}` },
    twitter: { card: "summary_large_image", title: titulo, description: desc },
  };
}

export default function GuiaPage({ params }: { params: { slug: string } }) {
  const g = loadGuide(params.slug);
  if (!g || !PUBLISHABLE.has(g.status)) notFound();

  const titulo = g!.variant
    ? `${g!.champion} — ${g!.variant.replace(/-/g, " ")}`
    : `${g!.champion} — Build optimizada`;
  const toc = extraerToc(g!.body);
  const { intro, secciones } = dividirSecciones(g!.body, toc);

  // Colas de anclas precomputadas desde la TOC (verdad única): cada <Markdown>
  // de cada sección consume ids en orden de aparición → TOC, scroll-spy,
  // hash-opening y anchors coinciden siempre, incluso renderizando por tramos.
  const colas = new Map<string, string[]>();
  for (const t of toc) {
    const base = slugify(t.texto) || "seccion";
    const q = colas.get(base);
    if (q) q.push(t.id);
    else colas.set(base, [t.id]);
  }
  const vistos = new Map<string, number>();

  return (
    <article className="guide-page">
      <ProgresoLectura />
      <nav className="breadcrumb" aria-label="Ruta de navegación">
        <Link href="/">Guías</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/?rol=${g!.role}`}>{ROLES[g!.role] || g!.role}</Link>
        <span aria-hidden="true">/</span>
        <span className="breadcrumb-actual">{g!.champion}</span>
      </nav>
      <header className="guide-hero">
        <h1>{titulo}</h1>
        <div className="guide-badges-top">
          <BadgesGuia g={g!} />
          <StatsBar slug={g!.slug} />
          <FavButton slug={g!.slug} />
        </div>
      </header>
      <RecentTracker slug={g!.slug} />
      <div className="guide-layout3">
        <aside className="guide-side-left">
          <TablaContenidos items={toc} />
        </aside>
        <div className="guide-body">
          {intro && (
            <div className="guide-intro">
              <Markdown source={intro} vistos={vistos} colas={colas} />
            </div>
          )}
          {secciones.map((s) => (
            <SeccionGuia key={s.id} id={s.id} titulo={s.titulo} defaultOpen={s.defaultOpen}>
              <Markdown source={s.md} vistos={vistos} colas={colas} />
            </SeccionGuia>
          ))}
          <LikeCta slug={g!.slug} />
        </div>
        <aside className="guide-rail" aria-label="Datos y guías relacionadas">
          <GuideRail g={g!} />
        </aside>
      </div>
    </article>
  );
}
