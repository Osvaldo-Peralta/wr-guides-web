"use client";
// WR-GUIDES-WEB · components/GuideStats.tsx — Fase 5: widget de comunidad.
//
//   <StatsBar slug/>  → 👁 vistas · ❤ likes   (barra compacta, arriba de la guía)
//   <LikeCta  slug/>  → [ 🤍 Me gusta ]      (tarjeta CTA al final de la guía)
//
// Las dos instancias de una página comparten estado vía un store a nivel de
// módulo: UN solo beacon de vista y UNA sola lectura de like por carga de
// página, sin importar cuántos widgets se monten.
//
// Ciclo (2 requests al montar):
//   1. POST /view  → { counted, views }   (el servidor deduplica: 1 h/visitante)
//   2. GET  /like  → { liked,  likes }    (con header x-visitor-id)
// Si el beacon falla pero el like responde, se completan las vistas con
// GET /stats. Si todo falla → el widget no se renderiza (degradación
// silenciosa: la guía se lee igual, sin números).
//
// Like: UI optimista + resincronización con la verdad del servidor si el POST
// falla (cubre incluso el caso "502 pero persistido" del bug de API v0.3.1).
//
// SSR/hidratación: en el servidor y en el primer paint no hay datos cargados
// → se renderiza null en ambos lados → sin mismatch de hidratación.

import { useCallback, useEffect, useState } from "react";
import { track } from "@vercel/analytics/react";
import { api } from "@/lib/api";

interface StatsState {
  views: number;
  likes: number;
  liked: boolean;
  loaded: boolean;   // datos listos para renderizar
  busy: boolean;     // voto en vuelo (deshabilita el botón)
}

const INICIAL: StatsState = { views: 0, likes: 0, liked: false, loaded: false, busy: false };

const cache = new Map<string, StatsState>();
const listeners = new Map<string, Set<() => void>>();
const enVuelo = new Set<string>();

function set(slug: string, parche: Partial<StatsState>) {
  cache.set(slug, { ...(cache.get(slug) || INICIAL), ...parche });
  listeners.get(slug)?.forEach((fn) => fn());
}

function useGuideStats(slug: string) {
  const [state, setState] = useState<StatsState>(() => cache.get(slug) || INICIAL);

  useEffect(() => {
    const fn = () => setState(cache.get(slug) || INICIAL);
    let subs = listeners.get(slug);
    if (!subs) listeners.set(slug, (subs = new Set()));
    subs.add(fn);

    if (!cache.get(slug)?.loaded && !enVuelo.has(slug)) {
      enVuelo.add(slug);
      (async () => {
        const [vista, like] = await Promise.all([
          api.registrarVista(slug),
          api.estadoLike(slug),
        ]);
        enVuelo.delete(slug);
        if (!vista && !like) return; // API caída: queda sin cargar → null; reintenta al re-montar
        let views = vista?.views ?? 0;
        if (!vista && like) views = (await api.stats(slug))?.views ?? 0; // fallback
        set(slug, { views, likes: like?.likes ?? 0, liked: like?.liked ?? false, loaded: true });
      })();
    }
    return () => { subs!.delete(fn); };
  }, [slug]);

  const toggle = useCallback(async () => {
    const actual = cache.get(slug) || INICIAL;
    if (actual.busy || !actual.loaded) return;
    const deseado = !actual.liked;
    // UI optimista
    set(slug, { liked: deseado, likes: Math.max(0, actual.likes + (deseado ? 1 : -1)), busy: true });
    const res = await api.votar(slug, deseado ? "like" : "unlike");
    if (res) {
      set(slug, { liked: res.liked, likes: res.likes, busy: false });
      // Fase 7: evento custom de Vercel Web Analytics (solo se registra si el
      // like/unlike confirmó con el servidor; track es no-op fuera de Vercel).
      try { track("guide_like", { slug, liked: res.liked }); } catch { /* noop */ }
      return;
    }
    // El POST falló: preguntar la verdad al servidor antes de decidir
    // (cubre "escribió pero respondió error"). Si tampoco responde → rollback.
    const sync = await api.estadoLike(slug);
    set(slug, sync
      ? { liked: sync.liked, likes: sync.likes, busy: false }
      : { liked: actual.liked, likes: actual.likes, busy: false });
  }, [slug]);

  return { ...state, toggle };
}

const nf = new Intl.NumberFormat("es"); // 1.284 (locale del sitio)

export function StatsBar({ slug }: { slug: string }) {
  const s = useGuideStats(slug);
  if (!s.loaded) return null;
  return (
    <div className="guide-stats" aria-label="Estadísticas de comunidad de esta guía">
      <span className="stats-item" title="Vistas únicas (1 por visitante cada hora)">
        👁 <span className="stats-num">{nf.format(s.views)}</span>
      </span>
      <span className="stats-item" title="Me gusta de la comunidad">
        ❤ <span className="stats-num">{nf.format(s.likes)}</span>
      </span>
    </div>
  );
}

export function LikeCta({ slug }: { slug: string }) {
  const s = useGuideStats(slug);
  if (!s.loaded) return null;
  return (
    <div className="like-cta">
      <p className="like-cta-text">¿Te sirvió la guía? Tu <em>like</em> ayuda a ordenar el catálogo.</p>
      <button
        type="button"
        className={`like-btn${s.liked ? " liked" : ""}`}
        onClick={s.toggle}
        disabled={s.busy}
        aria-pressed={s.liked}
        title={s.liked ? "Quitar me gusta" : "Me gusta"}
      >
        {s.liked ? "❤️ Me gusta" : "🤍 Me gusta"} · <span className="stats-num">{nf.format(s.likes)}</span>
      </button>
    </div>
  );
}
