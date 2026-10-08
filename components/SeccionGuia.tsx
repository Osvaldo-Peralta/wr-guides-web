"use client";
// WR-GUIDES-WEB · components/SeccionGuia.tsx (Paso 10) — sección plegable de
// guía: cada h2 es una tarjeta con chevrón. El contenido permanece en el DOM
// (SEO y búsqueda internos intactos); el colapso es visual (grid-rows 0fr/1fr).
// Si el hash apunta a la sección (link de la TOC o ancla compartida), se abre
// sola (hashchange incluido).
import { useEffect, useState, type ReactNode } from "react";

export default function SeccionGuia({
  id,
  titulo,
  defaultOpen,
  children,
}: {
  id: string;
  titulo: string;
  defaultOpen: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    const abreSiApuntan = () => {
      if (window.location.hash === `#${id}`) setOpen(true);
    };
    abreSiApuntan();
    window.addEventListener("hashchange", abreSiApuntan);
    return () => window.removeEventListener("hashchange", abreSiApuntan);
  }, [id]);

  return (
    <section className={`md-section${open ? " abierta" : ""}`}>
      <h2 id={id} className="md-section-head">
        <button
          type="button"
          className="md-section-toggle"
          aria-expanded={open}
          aria-controls={`cuerpo-${id}`}
          onClick={() => setOpen((o) => !o)}
          title={open ? "Colapsar sección" : "Expandir sección"}
        >
          <span className="md-section-chevron" aria-hidden="true">▾</span>
        </button>
        <span className="md-section-titulo">{titulo}</span>
        <a className="md-anchor-link" href={`#${id}`} aria-label="Enlace a esta sección">
          #
        </a>
      </h2>
      <div id={`cuerpo-${id}`} className="md-section-body">
        <div className="md-section-inner">{children}</div>
      </div>
    </section>
  );
}
