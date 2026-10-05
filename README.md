# ⚗️ WR Guides Web — sitio de guías de Wild Rift (Next.js)

Frontend del ecosistema **WR-LAB** (Fase 2 del plan de migración —
`wr-lab/deploy/PLAN_MIGRACION_VERCEL.md`). Consume los reportes Markdown del
laboratorio bajo el contrato `wr-lab/deploy/CONTRATO_MARKDOWN_FRONTEND.md` v1.2.

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
`content/*.md` + `content/winrates.csv` (contrato §2).

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
├── guias/[slug]/page.tsx # guía completa (SSG, generateStaticParams)
├── meta/page.tsx         # win rates Diamond+ (desde el índice)
└── layout.tsx            # chrome del sitio + pie legal (siempre visible)
components/
├── Markdown.tsx          # react-markdown + GFM + callouts [!NOTE|TIP|WARNING|DANGER|VERIF]
└── Badges.tsx            # Status · verificación · custom · rol · WR/tier
lib/guides.ts             # loader + pre-procesado (WRLAB-VERIF → callout; contrato §3.1)
styles/globals.css        # tema minimalista (port de wr-lab/deploy/quartz-theme)
scripts/gen-index.mjs     # generador del índice (contrato §2)
content/                  # guías + winrates.csv (fuente: wr-lab)
```

## Despliegue en Vercel (Fase 6 del plan)

1. Importar este repo en vercel.com (framework: **Next.js** — autodetectado).
2. Build command: `npm run build` (ya incluye gen-index) · Output: por defecto.
3. Sin variables de entorno en Fase 2 (llegan en Fase 3-5: `NEXT_PUBLIC_API_URL`,
   Supabase en el repo del API).
4. Dominio: `*.vercel.app` al inicio; si hay dominio propio, actualizar metadata.
5. Mantener GitHub Pages activo como respaldo durante la transición (plan §Fase 6.7).

## Estándares de render (contrato §3)

- Bloques `WRLAB-VERIF` → callout dorado "Verificación WR-LAB" (nunca HTML crudo).
- Callouts `[!NOTE]/[!TIP]/[!WARNING]/[!DANGER]` → tarjetas semánticas.
- Tablas con scroll horizontal y números tabulares (espacio de miles preservado).
- Pie de página legal de cada guía intacto (requisito Riot).
