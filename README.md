# ⚗️ WR Guides Web — sitio de guías de Wild Rift (Next.js)

Frontend del ecosistema **WR-LAB** (Fase 2 del plan de migración —
`wr-lab/deploy/PLAN_MIGRACION_VERCEL.md`). Consume los reportes Markdown del
laboratorio bajo el contrato `wr-lab/deploy/CONTRATO_MARKDOWN_FRONTEND.md` v1.2.

> 🧭 **Runbook completo** (montaje desde cero + flujo diario para agregar/modificar
> guías + troubleshooting de errores reales): ver **`OPERACIONES.md`** en el repo
> **wr-guides-api**.

## Principios (heredados del plan)

1. **Markdown = fuente editorial.** Este repo NO edita guías: las recibe de
   `wr-lab/reportes/` (sync unidireccional — hoy manual, mañana GitHub Action).
2. **Estado ≠ contenido.** Likes/vistas vivirán en Supabase vía `wr-guides-api`
   (Fases 3-5), nunca en el Markdown.
3. **Solo publicables.** `Status: Aprobado|Beta` (contrato §1); `Espera de
   verificación`/`Borrador` no se renderizan (404).

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gen-index + next build (22 páginas estáticas)
npm start
```

`npm run build` regenera `content/guias_index.json` desde el frontmatter de
`content/*.md` + `content/winrates.csv` (contrato §2) y lo copia a
`public/guias_index.json` — queda descargable en
`https://<sitio>/guias_index.json`, que es de donde la API siembra su catálogo
(`wr-guides-api/scripts/seed-guides.mjs`) sin necesidad de rutas hermanas.

## Actualizar contenido desde el lab

**Automático (Fase 6):** el workflow `.github/workflows/sync-from-lab.yml`
espeja `wr-lab/reportes/*.md` → `content/` y el `champion_winrates.csv` del lab
→ `content/winrates.csv` a las **08:35 y 20:35 UTC** (35 min después del
patch-watch del lab), valida que el sitio compila (`npm run build`) y solo
entonces commitea + pushea → Vercel redeploya sola. También se puede disparar a
mano: pestaña **Actions → Sync lab → web → Run workflow**.

Detalles de diseño:
- Es **PULL** (este repo lee el repo público `wr-lab`): no necesita PAT ni
  tokens cruzados, solo el `GITHUB_TOKEN` estándar.
- Semántica de espejo: guías eliminadas en el lab también se eliminan acá.
  `reportes/_auto/` NO se publica.
- Si el contenido nuevo rompe el build, el workflow FALLA y no pushea nada:
  producción queda intacta con la última versión buena.
- **Re-siembra de la API** (opcional pero recomendada): tras un sync con
  cambios, `scripts/reseed-api.mjs` actualiza el catálogo de `wr-guides-api`
  para que las guías nuevas acepten vistas/likes de inmediato. Requiere el
  secret **`ADMIN_TOKEN`** en este repo (Settings → Secrets and variables →
  Actions) con el mismo valor que la env var `ADMIN_TOKEN` de la API en Vercel.
  Sin el secret, el sync funciona igual y el re-seed se puede hacer manual:
  `cd ../wr-guides-api && WR_API=https://wr-guides-api.vercel.app npm run seed`.

**Manual (desde tu máquina, con los repos hermanos):**

```bash
node scripts/sync-from-lab.mjs --lab ../wr-lab   # espejo + reporte de cambios
npm run build                                     # regenera el índice y valida
```

## Estructura

```
app/
├── page.tsx              # home: guías por rol, agrupadas por campeón, con badges
├── guias/[slug]/page.tsx # guía completa (SSG) + widget 👁/❤ (Fase 5)
├── meta/page.tsx         # win rates Diamond+ (desde el índice)
└── layout.tsx            # chrome del sitio + pie legal (siempre visible)
components/
├── Markdown.tsx          # react-markdown + GFM + callouts + anclas h2/h3 (Paso 9)
├── Badges.tsx            # Status · verificación · custom · rol · WR/tier
├── GuideStats.tsx        # Fase 5: StatsBar (👁/❤ arriba) + LikeCta (botón al final)
├── ThemeToggle.tsx       # interruptor de tema: 💥 Jinx (neón) ↔ 🧪 Clásico
├── Catalogo.tsx          # Paso 9: buscador + filtros por rol + orden (home)
├── FichaGuia.tsx         # Paso 9: ficha de datos clave arriba de cada guía
├── TablaContenidos.tsx   # Paso 9: TOC sticky con scroll-spy
├── ProgresoLectura.tsx   # Paso 9: barra de progreso de lectura
└── GuiasRelacionadas.tsx # Paso 9: variantes del campeón + top del rol
lib/
├── guides.ts             # loader + pre-procesado (WRLAB-VERIF → callout; contrato §3.1)
├── api.ts                # Fase 5: cliente de la API de comunidad (visitor id, fetch)
├── slug.ts               # Paso 9: slugify compartido (anclas ↔ TOC)
└── toc.ts                # Paso 9: extractor de tabla de contenidos (ignora code fences)
styles/globals.css        # tema clásico + tema Jinx (variables CSS, §1 y §8)
scripts/
├── gen-index.mjs         # generador del índice (contrato §2)
├── sync-from-lab.mjs     # Fase 6: espejo de contenido lab → web
└── reseed-api.mjs        # Fase 6: re-siembra del catálogo de la API tras el sync
.github/workflows/
└── sync-from-lab.yml     # Fase 6: sync automático (cron 08:35/20:35 UTC + manual)
content/                  # guías + winrates.csv (fuente: wr-lab)
.env.example              # NEXT_PUBLIC_API_URL (Fase 5)
```

## Widget de comunidad (Fase 5: vistas + likes)

Cada página de guía monta dos widgets que comparten estado (un solo beacon por
carga): **`<StatsBar>`** arriba (👁 vistas · ❤ likes) y **`<LikeCta>`** al final
(boton "Me gusta" con UI optimista).

- **API:** habla SOLO con `wr-guides-api` (`NEXT_PUBLIC_API_URL`, ver
  `.env.example`). La secret key de Supabase jamás toca el navegador.
- **Visitante anónimo:** UUID en `localStorage` (`wrg_visitor_id`) enviado como
  header `x-visitor-id`. Se prefiere a la cookie porque es inmune al bloqueo de
  cookies third-party; la API la acepta como prioridad nº1 (`lib/visitor.ts`).
- **Dedupe:** 1 vista por visitante cada 1 h (lo aplica el servidor; el cliente
  puede disparar el beacon en cada carga sin inflar números).
- **Degradación silenciosa:** si la API está caída/lenta, el widget no se
  renderiza y la guía se lee igual. Nunca hay errores visibles para el lector.
- **Like que falla:** el widget re-sincroniza con `GET /like` (la verdad del
  servidor) en vez de asumir rollback — cubre incluso el bug histórico de la
  API v0.3.1 ("502 pero persistido", corregido en v0.3.2).

Dev local del widget: levantar la API (`cd ../wr-guides-api && npm run dev`,
puerto 3002) y un `.env.local` acá con `NEXT_PUBLIC_API_URL=http://localhost:3002`
(así las pruebas no ensucian las stats de producción).

## Analytics (Fase 7 — Vercel Web Analytics)

- `<Analytics />` en `app/layout.tsx` (paquete `@vercel/analytics`): cuenta
  pageviews por ruta (/guias/[slug], /meta) sin cookies ni banner de consentimiento.
- Evento custom **`guide_like`** (`components/GuideStats.tsx`): se dispara solo
  cuando el like/unlike confirma con el servidor; propiedades `{ slug, liked }`.
- **Requiere activarlo en Vercel**: proyecto web → pestaña **Analytics →
  Enable Web Analytics**. Sin activar, el código es no-op (no rompe nada).
- Plan Hobby: 2.5K eventos/mes incluidos (pageviews + eventos custom). Si se
  supera, simplemente deja de contar hasta el ciclo siguiente.
- Las vistas/likes "de verdad" (contador por guía, dedupe 1 h) siguen viviendo
  en Supabase vía la API — Vercel Analytics es la capa de tráfico agregado
  (páginas más visitadas, países, dispositivos, referentes).

## Tema visual: 💥 Jinx (neón) ↔ 🧪 Clásico

Rediseño experimental inspirado en la paleta de Jinx (rosa neón `#ff3d9e`,
cian hextech `#2de2e6`, amarillo cohete `#ffd93d` sobre azul noche `#0b0d1c`):
títulos con gradiente, cards con glow al hover, badges neón, botón de like con
"heart pop" y scrollbar custom.

- **Default: tema Jinx.** El interruptor (header, botón 🎨) alterna con el tema
  clásico minimalista (que sigue el modo claro/oscuro del sistema). La elección
  persiste en `localStorage` (`wrg_theme`) y se aplica antes del primer paint
  (sin parpadeo).
- Implementación: solo CSS (`styles/globals.css` §1b y §8 — variables +
  decoración scopeada a `html[data-theme="jinx"]`) + `ThemeToggle.tsx` +
  script inline en `layout.tsx`. Cero dependencias nuevas.
- **Volver al diseño anterior para todos:** cambiar `"jinx"` por `"auto"` en el
  `themeScript` y el `data-theme` de `layout.tsx` (o revertir el commit del
  rediseño — no toca lógica ni contenido).

## Paso 9 — experiencia de lectura y catálogo vivo

Cierre de la migración: el sitio deja de ser "la vista estática de Quartz" y
pasa a ser una experiencia de lectura moderna, sin backend nuevo ni cambios de
contenido (todo SSG + interacción cliente en memoria).

- **Home:** buscador instantáneo (campeón/variante/arquetipo/slug), chips de
  rol y orden (por rol · win rate · más nuevas · A–Z). Con sin filtros, se ve
  el catálogo agrupado por rol de siempre (`components/Catalogo.tsx`).
- **Guía:** título propio + ficha de datos clave (rol, arquetipo, parche,
  versión, fechas), tabla de contenidos sticky con scroll-spy
  (`IntersectionObserver`), barra de progreso de lectura, anclas `#` al hover
  en cada h2/h3 (ids estables SSR=cliente vía `lib/slug.ts`), y guías
  relacionadas al final (mismo campeón + top del rol).
- **/meta (Paso 9.1):** board de 5 cards (una por rol) con el top 5/10 del
  roster COMPLETO que vigila el lab (`content/winrates.csv`), no solo los
  campeones con guía: los que sí la tienen linkean con ⚗️. Ranking por tier
  y win rate, tendencia ↑/↓ vs el refresh anterior, pick/ban/confianza al
  hover, toggle Top 5/Top 10. Lectura del CSV: `lib/winratesLoader.ts`
  (server) + `lib/winrates.ts` (tipos/orden, client-safe).
- **404** con identidad (`app/not-found.tsx`), también para guías no publicables.
- **Impresión:** TOC, barra, relacionados y toolbar quedan fuera del papel.
- **Responsive:** la columna TOC se oculta bajo 1000 px (el contenido queda a
  una columna); toolbar y grids ya eran fluidos.

Nada de esto toca el contrato Markdown (§3): los callouts, tablas y bloques
VERIF se renderizan igual; solo se AGREGAN anclas y estructura de página.

## Paso 10 — rediseño UX profundo (layout ancho)

El sitio deja la columna central de 860 px y usa hasta 1280 px:

- **Guía en 3 columnas:** TOC sticky izquierda · contenido legible al centro ·
  rail derecho con ficha rápida vertical, caja de win rate (tier/pick/ban) y
  relacionadas compactas. En ≤1200 px el rail baja como banda; en ≤900 px la
  TOC se oculta y todo queda a una columna.
- **Secciones plegables:** cada h2 es una tarjeta con chevrón (`SeccionGuia`),
  apéndices cerrados por defecto, auto-apertura al entrar por ancla/TOC
  (hashchange), contenido siempre en el DOM (SEO) y abierto a la fuerza en
  impresión. Los ids de ancla se consumen de colas precomputadas desde la TOC
  (`lib/sections.ts` + prop `colas` de `Markdown`): TOC, scroll-spy y hashes
  comparten una sola verdad.
- **Breadcrumb** `Guías / Rol / Campeón`: el rol linkea al catálogo ya
  filtrado (`/?rol=jungla`, aplicado al montar en el navegador para no tocar
  el SSR estático).
- **Cards con acento de rol** (borde izquierdo + badge roloado, paleta por
  tema) y grilla del catálogo más ancha.
- `/meta` y home heredan el contenedor de 1280 px (el board de 5 roles por fin
  cabe en una fila).

## V2 producto — favoritos anónimos + seguir leyendo

- **⭐ FavButton** en cada guía (`components/FavButton.tsx`): favorito anónimo
  por visitor-id (migration 002 de la API), toggle optimista con
  resincronización si el POST falla, y evento custom `guide_favorite` en
  Vercel Analytics.
- **Home personal** (`components/HomePersonal.tsx`): secciones "★ Tus
  favoritas" (API `GET /api/favorites`) y "📖 Seguir leyendo" (historial LOCAL
  en `localStorage` clave `wrg_recent`, máx. 8, sin backend). Si no hay nada
  que mostrar, el home queda idéntico a siempre.
- **Estrellas en el catálogo:** `Catalogo.tsx` marca con ★ las guías que ya
  tenés favoritas (fetch único al montar).
- **Degradación:** si la API no tiene la migration 002 o está caída, el botón
  no se renderiza y el resto vive igual (misma filosofía Fase 5).

## SEO y cards para compartir (post-migración)

- `app/sitemap.ts` → `/sitemap.xml` generado en build: home + /meta + guías
  publicables con `lastModified` del frontmatter. Se refresca solo con cada
  redeploy (incluidos los del sync Fase 6).
- `app/robots.ts` → `/robots.txt` (allow * + pointer al sitemap).
- OpenGraph/Twitter: default del sitio en `layout.tsx` (con la card
  `public/og-cover.png`, 1200×630, paleta Jinx) y por guía en
  `guias/[slug]/page.tsx` (título, descripción con rol/parche/WR-tier,
  `type: article`, url canónica). Los links a guías en WhatsApp/Discord/Reddit
  muestran card grande con la marca del sitio.
- `metadataBase` configurado: las URLs relativas de OG se resuelven solas.
- **OG dinámica por guía/campeón** (`app/guias/[slug]/opengraph-image.tsx`,
  next/og): card generada con nombre del campeón, rol, parche, versión y
  tier/WR reales del índice; Next la publica en `/guias/<slug>/opengraph-image`
  y la inyecta sola en `og:image`/`twitter:image`. Guías nuevas heredan su
  card sin tocar nada. Runtime nodejs fijado (el wasm de resvg muere en edge
  local); en Vercel corre igual. Home y /meta conservan `og-cover.png`.

## Despliegue en Vercel (Fase 6 del plan)

1. Importar este repo en vercel.com (framework: **Next.js** — autodetectado).
2. Build command: `npm run build` (ya incluye gen-index) · Output: por defecto.
3. Environment variable (Fase 5): `NEXT_PUBLIC_API_URL` =
   `https://wr-guides-api.vercel.app` (Production y Preview). Es pública por
   diseño (se incrusta en el JS del navegador); tras cambiarla, **Redeploy**.
   Sin ella el sitio funciona igual: `lib/api.ts` usa esa URL como fallback.
   ⚠ Vercel NO permite crear `NEXT_PUBLIC_*` como variable **Sensitive** (lo
   sensible no puede incrustarse en el JS del cliente): creala como variable
   normal. Una variable `API_URL` (sin prefijo) es inofensiva pero el cliente
   no la lee — el nombre que importa es `NEXT_PUBLIC_API_URL`.
4. Dominio: `*.vercel.app` al inicio; si hay dominio propio, actualizar metadata
   **y** el `ALLOWED_ORIGINS` de la API (CORS).
5. Mantener GitHub Pages activo como respaldo durante la transición (plan §Fase 6.7).

## Estándares de render (contrato §3)

- Bloques `WRLAB-VERIF` → callout dorado "Verificación WR-LAB" (nunca HTML crudo).
- Callouts `[!NOTE]/[!TIP]/[!WARNING]/[!DANGER]` → tarjetas semánticas.
- Tablas con scroll horizontal y números tabulares (espacio de miles preservado).
- Pie de página legal de cada guía intacto (requisito Riot).
