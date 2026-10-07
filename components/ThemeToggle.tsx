"use client";
// WR-GUIDES-WEB · components/ThemeToggle.tsx — interruptor de tema (rediseño Jinx).
//
// Dos temas, guardados en localStorage ("wrg_theme"):
//   · "jinx" (default) — neón oscuro inspirado en Jinx (rosa/cian/amarillo)
//   · "auto"           — tema clásico minimalista (claro/oscuro según sistema)
//
// El atributo data-theme vive en <html> y lo fija un script inline ANTES del
// primer paint (app/layout.tsx) — por eso este botón solo lee/escribe ese
// atributo, sin riesgo de mismatch de hidratación (SSR renderiza el estado
// neutro "🎨 Tema" y useEffect lo actualiza al montar).

import { useEffect, useState } from "react";

type Tema = "jinx" | "auto";
const KEY = "wrg_theme";

export default function ThemeToggle() {
  const [tema, setTema] = useState<Tema | null>(null);

  useEffect(() => {
    setTema(document.documentElement.dataset.theme === "auto" ? "auto" : "jinx");
  }, []);

  function alternar() {
    const sig: Tema = tema === "jinx" ? "auto" : "jinx";
    document.documentElement.dataset.theme = sig;
    try {
      localStorage.setItem(KEY, sig);
    } catch {
      /* modo privado sin localStorage: el cambio vale solo para esta pestaña */
    }
    setTema(sig);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={alternar}
      title={
        tema === "auto"
          ? "Cambiar al tema Jinx (neón)"
          : "Cambiar al tema clásico (claro/oscuro según sistema)"
      }
      aria-label="Cambiar el tema del sitio"
    >
      {tema === null ? "🎨 Tema" : tema === "jinx" ? "💥 Jinx" : "🧪 Clásico"}
    </button>
  );
}
