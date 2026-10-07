"use client";
// WR-GUIDES-WEB · components/TablaContenidos.tsx (Paso 9) — TOC sticky con
// scroll-spy (IntersectionObserver): resalta la sección que estás leyendo.
// Los ids vienen de lib/toc.ts y coinciden con las anclas del renderizador.
import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/toc";

export default function TablaContenidos({ items }: { items: TocItem[] }) {
  const [activo, setActivo] = useState("");

  useEffect(() => {
    if (!items.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visibles = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visibles[0]) setActivo(visibles[0].target.id);
      },
      { rootMargin: "-90px 0px -65% 0px", threshold: 0 }
    );
    for (const it of items) {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, [items]);

  if (!items.length) return null;
  return (
    <nav className="toc" aria-label="Tabla de contenidos de esta guía">
      <p className="toc-titulo">📑 En esta guía</p>
      <ul>
        {items.map((it) => (
          <li key={it.id} className={it.nivel === 3 ? "toc-h3" : "toc-h2"}>
            <a href={`#${it.id}`} className={activo === it.id ? "toc-activo" : ""}>
              {it.texto}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
