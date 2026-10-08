// WR-GUIDES-WEB · app/sitemap.ts — sitemap.xml generado en build desde el
// índice (solo guías publicables). Vercel redeploya con cada sync (Fase 6),
// así que el sitemap se mantiene fresco sin trabajo manual.
import type { MetadataRoute } from "next";
import { loadIndex, PUBLISHABLE } from "@/lib/guides";

const BASE = "https://wr-guides-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const idx = loadIndex();
  const generado = idx.generado ? new Date(idx.generado) : new Date();
  const guias: MetadataRoute.Sitemap = idx.guias
    .filter((g) => PUBLISHABLE.has(g.status))
    .map((g) => ({
      url: `${BASE}/guias/${g.slug}`,
      lastModified: new Date(g.updated_at || g.published_at || idx.generado || Date.now()),
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  return [
    { url: BASE, lastModified: generado, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/meta`, lastModified: generado, changeFrequency: "daily", priority: 0.6 },
    ...guias,
  ];
}
