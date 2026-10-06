// WR-GUIDES-WEB · página de guía (/guias/[slug]) — render completo del estándar v1.4.
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allSlugs, loadGuide, PUBLISHABLE } from "@/lib/guides";
import Markdown from "@/components/Markdown";
import { BadgesGuia } from "@/components/Badges";
import { StatsBar, LikeCta } from "@/components/GuideStats";

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = loadGuide(params.slug);
  if (!g) return { title: "Guía no encontrada" };
  const titulo = g.variant ? `${g.champion} — ${g.variant}` : `${g.champion} — Build optimizada`;
  return { title: titulo, description: `Guía de ${g.champion} (parche ${g.patch}) — WR-LAB` };
}

export default function GuiaPage({ params }: { params: { slug: string } }) {
  const g = loadGuide(params.slug);
  if (!g || !PUBLISHABLE.has(g.status)) notFound();

  return (
    <article className="guide-page">
      <div className="guide-badges-top">
        <BadgesGuia g={g!} />
        <StatsBar slug={g!.slug} />
      </div>
      <Markdown source={g!.body} />
      <LikeCta slug={g!.slug} />
    </article>
  );
}
