// WR-GUIDES-WEB · página de guía (/guias/[slug]) — Paso 9: experiencia de
// lectura completa. Render del estándar v1.4 + ficha de datos clave + tabla de
// contenidos sticky con scroll-spy + barra de progreso + guías relacionadas.
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allSlugs, loadGuide, PUBLISHABLE } from "@/lib/guides";
import { extraerToc } from "@/lib/toc";
import Markdown from "@/components/Markdown";
import { BadgesGuia } from "@/components/Badges";
import { StatsBar, LikeCta } from "@/components/GuideStats";
import FichaGuia from "@/components/FichaGuia";
import TablaContenidos from "@/components/TablaContenidos";
import ProgresoLectura from "@/components/ProgresoLectura";
import GuiasRelacionadas from "@/components/GuiasRelacionadas";

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
    openGraph: {
      type: "article",
      title: titulo,
      description: desc,
      url: `/guias/${g.slug}`,
      images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: titulo }],
    },
    twitter: { card: "summary_large_image", title: titulo, description: desc, images: ["/og-cover.png"] },
  };
}

export default function GuiaPage({ params }: { params: { slug: string } }) {
  const g = loadGuide(params.slug);
  if (!g || !PUBLISHABLE.has(g.status)) notFound();

  const titulo = g!.variant
    ? `${g!.champion} — ${g!.variant.replace(/-/g, " ")}`
    : `${g!.champion} — Build optimizada`;
  const toc = extraerToc(g!.body);

  return (
    <article className="guide-page">
      <ProgresoLectura />
      <header className="guide-hero">
        <h1>{titulo}</h1>
        <div className="guide-badges-top">
          <BadgesGuia g={g!} />
          <StatsBar slug={g!.slug} />
        </div>
        <FichaGuia g={g!} />
      </header>
      <div className="guide-layout">
        <div className="guide-body">
          <Markdown source={g!.body} />
        </div>
        <aside className="guide-side">
          <TablaContenidos items={toc} />
        </aside>
      </div>
      <GuiasRelacionadas slug={g!.slug} />
      <LikeCta slug={g!.slug} />
    </article>
  );
}
