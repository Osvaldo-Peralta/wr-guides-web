// WR-GUIDES-WEB · app/robots.ts — robots.txt: todo público (el sitio es
// contenido), con pointer al sitemap para que los crawlers lo encuentren solo.
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://wr-guides-web.vercel.app/sitemap.xml",
  };
}
