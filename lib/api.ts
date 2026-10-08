// WR-GUIDES-WEB · lib/api.ts — cliente de la API de comunidad (Fase 5).
// Solo lo importan componentes "use client". Contrato: wr-guides-api v0.3.2
// (rutas /api/guides/[slug]/{view,like,stats}).
//
// Identificación anónima: UUID en localStorage enviado como header
// `x-visitor-id` (prioridad nº1 de lib/visitor.ts en la API). Se prefiere a la
// cookie porque es inmune al bloqueo de cookies de terceros de los navegadores
// modernos — la cookie httpOnly `wrg_vid` queda solo como fallback del servidor.
//
// Degradación silenciosa: CUALQUIER fallo (API caída, red, CORS, timeout)
// devuelve null y el widget se oculta. La lectura de la guía NUNCA se rompe
// por un problema de la capa de comunidad.

export const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "https://wr-guides-api.vercel.app"
).replace(/\/+$/, "");

const VID_KEY = "wrg_visitor_id";
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function nuevoUuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  // Fallback para navegadores viejos sin crypto.randomUUID
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

let vidCache: string | null = null;

export function visitorId(): string {
  if (vidCache) return vidCache;
  try {
    const previo = localStorage.getItem(VID_KEY);
    if (previo && UUID_RE.test(previo)) return (vidCache = previo);
    const id = nuevoUuid();
    localStorage.setItem(VID_KEY, id);
    return (vidCache = id);
  } catch {
    // Modo privado sin localStorage / SSR: ID efímero de sesión
    return (vidCache = nuevoUuid());
  }
}

export async function apiFetch<T>(
  path: string,
  init?: RequestInit & { timeoutMs?: number }
): Promise<T | null> {
  const { timeoutMs = 8000, ...resto } = init || {};
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const r = await fetch(`${API_URL}${path}`, {
      ...resto,
      signal: ctrl.signal,
      headers: {
        "Content-Type": "application/json",
        "x-visitor-id": visitorId(),
        ...(resto.headers || {}),
      },
    });
    if (!r.ok) return null;
    return (await r.json()) as T;
  } catch {
    return null; // red/timeout/abort: degradación silenciosa
  } finally {
    clearTimeout(timer);
  }
}

// ── Tipos del contrato (wr-guides-api v0.3.2) ──
export interface ViewRes { counted: boolean; views: number }
export interface LikeRes { liked: boolean; likes: number }
export interface StatsRes { slug: string; views: number; likes: number }
export interface FavRes { favorite: boolean; favorites: number }
export interface FavListRes { slugs: string[] }

export const api = {
  /** Beacon de vista. El servidor deduplica (1 por visitante cada 1 h). */
  registrarVista: (slug: string) =>
    apiFetch<ViewRes>(`/api/guides/${encodeURIComponent(slug)}/view`, {
      method: "POST",
      keepalive: true, // sobrevive a navegación/cierre inmediato
    }),
  /** { liked, likes } del visitante actual. */
  estadoLike: (slug: string) =>
    apiFetch<LikeRes>(`/api/guides/${encodeURIComponent(slug)}/like`),
  /** Conteos públicos (fallback si el beacon de vista falla). */
  stats: (slug: string) =>
    apiFetch<StatsRes>(`/api/guides/${encodeURIComponent(slug)}/stats`),
  /** Toggle de like: action "like" | "unlike". */
  votar: (slug: string, action: "like" | "unlike") =>
    apiFetch<LikeRes>(`/api/guides/${encodeURIComponent(slug)}/like`, {
      method: "POST",
      body: JSON.stringify({ action }),
    }),
  // ── V2: favoritos anónimos (migration 002 de la API) ──
  /** { favorite, favorites } del visitante actual. */
  favorito: (slug: string) =>
    apiFetch<FavRes>(`/api/guides/${encodeURIComponent(slug)}/favorite`),
  /** Toggle de favorito: action "add" | "remove". */
  setFavorito: (slug: string, add: boolean) =>
    apiFetch<FavRes>(`/api/guides/${encodeURIComponent(slug)}/favorite`, {
      method: "POST",
      body: JSON.stringify({ action: add ? "add" : "remove" }),
    }),
  /** slugs favoritos del visitante (home: "tus favoritas" + estrellas). */
  misFavoritos: () => apiFetch<FavListRes>(`/api/favorites`),
};
