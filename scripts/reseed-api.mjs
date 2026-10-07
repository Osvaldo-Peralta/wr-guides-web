// WR-GUIDES-WEB · reseed-api.mjs (Fase 6, paso post-sync) — re-siembra el
// catálogo de wr-guides-api con el índice recién regenerado, para que las
// guías NUEVAS acepten vistas/likes de inmediato (sin esperar un seed manual).
//
//   · Fuente:  content/guias_index.json (generado por `npm run build`)
//   · Destino: POST {WR_API}/api/guides con header x-admin-token (upsert
//              idempotente — mismo contrato que wr-guides-api/scripts/seed-guides.mjs)
//   · Si no hay ADMIN_TOKEN (secret del repo en GitHub / env en local):
//     NO falla — informa y sale 0. El sync de contenido funciona igual; solo
//     las guías nuevas quedarán sin stats hasta un seed manual:
//       cd ../wr-guides-api && WR_API=https://wr-guides-api.vercel.app npm run seed
//
// Uso:
//   WR_API=https://wr-guides-api.vercel.app ADMIN_TOKEN=*** node scripts/reseed-api.mjs

import fs from "node:fs";
import path from "node:path";

const API = (process.env.WR_API || "https://wr-guides-api.vercel.app").replace(/\/+$/, "");
const TOKEN = process.env.ADMIN_TOKEN || "";
const INDEX = path.join(process.cwd(), "content", "guias_index.json");

async function main() {
  if (!TOKEN) {
    console.log(
      "⚠ re-siembra omitida: falta ADMIN_TOKEN.\n" +
      "  → GitHub Actions: agregá el secret ADMIN_TOKEN al repo wr-guides-web\n" +
      "    (Settings → Secrets and variables → Actions) con el MISMO valor que\n" +
      "    la env var ADMIN_TOKEN del proyecto API en Vercel.\n" +
      "  → El contenido igual se sincroniza; las guías nuevas aceptarán stats\n" +
      "    tras un seed manual (wr-guides-api: npm run seed)."
    );
    return;
  }
  if (!fs.existsSync(INDEX)) {
    console.error(`✗ No existe ${INDEX} — correr primero: npm run build`);
    process.exit(1);
  }

  // Preflight: confirmar que WR_API es la API (no la web) — error real del 2026-10-06.
  const h = await fetch(`${API}/api/health`, { signal: AbortSignal.timeout(15000) }).catch((e) => {
    console.error(`✗ No pude alcanzar ${API}/api/health (${e.message})`);
    process.exit(1);
  });
  const ht = await h.text();
  if (ht.trimStart().startsWith("<")) {
    console.error(`✗ ${API} devolvió HTML: WR_API apunta a la web, no a la API.`);
    process.exit(1);
  }

  const index = JSON.parse(fs.readFileSync(INDEX, "utf8"));
  const guias = index.guias.map((g) => ({
    slug: g.slug,
    champion: g.champion ?? null,
    role: g.role ?? null,
    patch: g.patch ?? null,
    status: g.status ?? null,
    title: g.title ?? null,
    version: g.version != null ? String(g.version) : null,
    bundle: g.bundle ?? null,
    published_at: g.published_at ?? null,
  }));

  const res = await fetch(`${API}/api/guides`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-admin-token": TOKEN },
    body: JSON.stringify({ guias }),
  });
  const body = await res.text();
  if (!res.ok) {
    console.error(`✗ re-siembra rechazada (${res.status}): ${body.slice(0, 400)}`);
    if (res.status === 401) console.error("  → ADMIN_TOKEN no coincide con el de la API (Vercel).");
    process.exit(1);
  }
  console.log(`✔ API re-sembrada: ${JSON.parse(body).upsert} guías (índice ${index.generado}) → ${API}`);
}

main().catch((e) => {
  console.error(`✗ ${e.message || e}`);
  process.exit(1);
});
