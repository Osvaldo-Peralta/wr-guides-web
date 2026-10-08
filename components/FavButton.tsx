"use client";
// WR-GUIDES-WEB · components/FavButton.tsx (V2) — ⭐ favorito anónimo por guía.
// Espejo conceptual del LikeCta pero en versión compacta: estado del visitante
// al montar, toggle optimista, resincronización con el servidor si el POST
// falla, evento custom guide_favorite para Vercel Analytics.
import { useEffect, useState } from "react";
import { track } from "@vercel/analytics/react";
import { api } from "@/lib/api";

const nf = new Intl.NumberFormat("es");

export default function FavButton({ slug }: { slug: string }) {
  const [st, setSt] = useState({ fav: false, n: 0, loaded: false, busy: false });

  useEffect(() => {
    let vivo = true;
    api.favorito(slug).then((r) => {
      if (r && vivo) setSt({ fav: r.favorite, n: r.favorites, loaded: true, busy: false });
    });
    return () => { vivo = false; };
  }, [slug]);

  async function toggle() {
    if (!st.loaded || st.busy) return;
    const deseado = !st.fav;
    setSt((s) => ({ ...s, fav: deseado, n: Math.max(0, s.n + (deseado ? 1 : -1)), busy: true }));
    const res = await api.setFavorito(slug, deseado);
    if (res) {
      setSt({ fav: res.favorite, n: res.favorites, loaded: true, busy: false });
      try { track("guide_favorite", { slug, favorite: res.favorite }); } catch { /* noop */ }
      return;
    }
    // el POST falló: preguntar la verdad del servidor antes de asumir rollback
    const sync = await api.favorito(slug);
    setSt(sync
      ? { fav: sync.favorite, n: sync.favorites, loaded: true, busy: false }
      : { fav: !deseado, n: Math.max(0, st.n + (deseado ? -1 : 1)), loaded: true, busy: false });
  }

  if (!st.loaded) return null;
  return (
    <button
      type="button"
      className={`fav-btn${st.fav ? " fav-on" : ""}`}
      onClick={toggle}
      disabled={st.busy}
      aria-pressed={st.fav}
      title={st.fav ? "Quitar de tus favoritos" : "Guardar en tus favoritos (anónimo, queda en este navegador)"}
    >
      {st.fav ? "★ En favoritos" : "☆ Guardar"} · <span className="stats-num">{nf.format(st.n)}</span>
    </button>
  );
}
