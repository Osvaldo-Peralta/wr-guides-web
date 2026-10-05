import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: { default: "WR Guías — Wild Rift", template: "%s · WR Guías" },
  description:
    "Guías de Wild Rift generadas y verificadas con WR-LAB: builds matemáticas, " +
    "leyes de slots, verificación por hotfix y win rates actualizadas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="site-logo">⚗️ WR Guías</Link>
            <nav>
              <Link href="/">Guías</Link>
              <Link href="/meta">Meta</Link>
              <a href="https://github.com/Osvaldo-Peralta/wr-lab" target="_blank" rel="noopener noreferrer">
                WR-LAB
              </a>
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
      </body>
    </html>
  );
}
