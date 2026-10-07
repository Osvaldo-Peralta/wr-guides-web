"use client";
// WR-GUIDES-WEB · components/ProgresoLectura.tsx (Paso 9) — barra de progreso
// de lectura fijada arriba (2 px, gradiente Jinx). Puro scroll listener, sin
// librerías; se oculta sola en impresión.
import { useEffect, useState } from "react";

export default function ProgresoLectura() {
  const [p, setP] = useState(0);
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="read-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
