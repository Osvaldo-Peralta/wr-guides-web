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

```bash
cp ../wr-lab/reportes/*.md content/
cp ../wr-lab/data/estructurada/champion_winrates.csv content/winrates.csv
npm run build
```
(Fase 6: GitHub Action en wr-lab haciendo esto automáticamente en cada push.)

## Estructura

```
app/
├── page.tsx              # home: guías por rol, agrupadas por campeón, con badges
├── guias/[slug]/page.tsx # guía completa (SSG) + widget 👁/❤ (Fase 5)
├── meta/page.tsx         # win rates Diamond+ (desde el índice)
└── layout.tsx            # chrome del sitio + pie legal (siempre visible)
components/
├── Markdown.tsx          # react-markdown + GFM + callouts [!NOTE|TIP|WARNING|DANGER|VERIF]
├── Badges.tsx            # Status · verificación · custom · rol · WR/tier
└── GuideStats.tsx        # Fase 5: StatsBar (👁/❤ arriba) + LikeCta (botón al final)
lib/
├── guides.ts             # loader + pre-procesado (WRLAB-VERIF → callout; contrato §3.1)
└── api.ts                # Fase 5: cliente de la API de comunidad (visitor id, fetch)
styles/globals.css        # tema minimalista (port de wr-lab/deploy/quartz-theme)
scripts/gen-index.mjs     # generador del índice (contrato §2)
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

## Despliegue en Vercel (Fase 6 del plan)

1. Importar este repo en vercel.com (framework: **Next.js** — autodetectado).
2. Build command: `npm run build` (ya incluye gen-index) · Output: por defecto.
3. Environment variable (Fase 5): `NEXT_PUBLIC_API_URL` =
   `https://wr-guides-api.vercel.app` (Production y Preview). Es pública por
   diseño (se incrusta en el JS del navegador); tras cambiarla, **Redeploy**.
   Sin ella el sitio funciona igual: `lib/api.ts` usa esa URL como fallback.
4. Dominio: `*.vercel.app` al inicio; si hay dominio propio, actualizar metadata
   **y** el `ALLOWED_ORIGINS` de la API (CORS).
5. Mantener GitHub Pages activo como respaldo durante la transición (plan §Fase 6.7).

## Estándares de render (contrato §3)

- Bloques `WRLAB-VERIF` → callout dorado "Verificación WR-LAB" (nunca HTML crudo).
- Callouts `[!NOTE]/[!TIP]/[!WARNING]/[!DANGER]` → tarjetas semánticas.
- Tablas con scroll horizontal y números tabulares (espacio de miles preservado).
- Pie de página legal de cada guía intacto (requisito Riot).
