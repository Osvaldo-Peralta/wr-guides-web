import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import ThemeToggle from "@/components/ThemeToggle";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wr-guides-web.vercel.app"),
  title: { default: "WR Guías — Wild Rift", template: "%s · WR Guías" },
  description:
    "Guías de Wild Rift generadas y verificadas con WR-LAB: builds matemáticas, " +
    "leyes de slots, verificación por hotfix y win rates actualizadas.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "WR Guías",
    title: "WR Guías — Wild Rift verificadas por laboratorio",
    description:
      "Builds de 6 slots validadas matemáticamente, verificación contra cada " +
      "hotfix y win rates Diamond+ actualizadas a diario.",
    images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: "WR Guías — builds de Wild Rift verificadas por WR-LAB" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WR Guías — Wild Rift verificadas por laboratorio",
    description: "Builds validadas matemáticamente por WR-LAB + win rates Diamond+ al día.",
    images: ["/og-cover.png"],
  },
};

// Fija el tema ANTES del primer paint (lee localStorage; default: "jinx").
// Inline + parser-blocking a propósito: si esperara a JS/hidratación, el sitio
// parpadearía de clásico a Jinx en cada carga.
const themeScript = `try{var t=localStorage.getItem("wrg_theme");document.documentElement.dataset.theme=(t==="auto")?"auto":"jinx";}catch(e){document.documentElement.dataset.theme="jinx";}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-theme de servidor = "jinx"; el script inline puede cambiarlo a "auto"
    // antes de la hidratación → suppressHydrationWarning evita el aviso de React.
    <html lang="es" data-theme="jinx" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="site-logo">⚗️ WR Guías</Link>
            <nav>
              <Link href="/">Guías</Link>
              <Link href="/meta">Meta</Link>
              <a href="https://github.com/Osvaldo-Peralta/wr-lab" target="_blank" rel="noopener noreferrer">
                WR-LAB
              </a>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <p>
            Guías de comunidad construidas con <strong>WR-LAB</strong> (laboratorio de análisis
            matemático de builds). Wild Rift y League of Legends son marcas registradas de
            Riot Games, Inc. Este sitio <strong>no está afiliado, patrocinado ni respaldado por
            Riot Games</strong>.
          </p>
        </footer>
        {/* Fase 7 — Vercel Web Analytics (pageviews + evento guide_like).
            No-op fuera de Vercel y si el proyecto no lo tiene activado. */}
        <Analytics />
      </body>
    </html>
  );
}
