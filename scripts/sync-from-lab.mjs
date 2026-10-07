// WR-GUIDES-WEB · sync-from-lab.mjs (Fase 6) — espejo de contenido lab → web.
//
//   wr-lab/reportes/*.md                          → content/*.md   (espejo 1:1)
//   wr-lab/data/estructurada/champion_winrates.csv → content/winrates.csv
//
// Semántica de ESPEJO (no solo copia): los .md de content/ que ya no existen en
// lab/reportes/ se BORRAN (el lab es la única fuente editorial — README §1).
// Nunca toca content/guias_index.json (lo regenera `npm run build` después).
// reportes/_auto/ NO se publica (subcarpetas ignoradas: solo nivel superior).
//
// Uso:
//   node scripts/sync-from-lab.mjs --lab ../wr-lab     # ruta al clon del lab
//   node scripts/sync-from-lab.mjs --lab .lab --dry    # solo reporta, no escribe
//   LAB_PATH=/ruta/wr-lab node scripts/sync-from-lab.mjs
//
// En GitHub Actions (workflow sync-from-lab.yml) escribe además:
//   · outputs.changed = true|false   (¿hubo cambios en los fuentes?)
//   · $GITHUB_STEP_SUMMARY           (resumen legible del sync)
// Salida: exit 0 siempre que el sync sea posible; exit 1 si falta el lab.

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const iLab = args.indexOf("--lab");
const DRY = args.includes("--dry");
const LAB = path.resolve(
  iLab >= 0 && args[iLab + 1] ? args[iLab + 1] : process.env.LAB_PATH || "../wr-lab"
);
const ROOT = process.cwd();
const CONTENT = path.join(ROOT, "content");
const REPORTES = path.join(LAB, "reportes");
const WINRATES_SRC = path.join(LAB, "data", "estructurada", "champion_winrates.csv");
const WINRATES_DST = path.join(CONTENT, "winrates.csv");

// Guías del lab que NO deben publicarse en el sitio (nombre de archivo exacto).
// Vacío por diseño: hoy todo reportes/*.md de nivel superior es publicable.
const EXCLUIR = new Set([]);

function mismoContenido(a, b) {
  if (!fs.existsSync(b)) return false;
  return Buffer.compare(fs.readFileSync(a), fs.readFileSync(b)) === 0;
}

function main() {
  if (!fs.existsSync(REPORTES)) {
    console.error(
      `✗ No encuentro ${REPORTES}\n` +
      `  → ¿Dónde está tu clon de wr-lab? Pasalo con --lab <ruta> o LAB_PATH=<ruta>.\n` +
      `  → En el workflow de GitHub el lab se chequea en .lab/ (repo público).`
    );
    process.exit(1);
  }
  if (!fs.existsSync(CONTENT)) fs.mkdirSync(CONTENT, { recursive: true });

  const agregados = [], actualizados = [], sinCambios = [];
  const labMds = fs
    .readdirSync(REPORTES)
    .filter((f) => f.endsWith(".md") && !EXCLUIR.has(f));

  for (const f of labMds) {
    const src = path.join(REPORTES, f);
    const dst = path.join(CONTENT, f);
    if (!fs.existsSync(dst)) {
      if (!DRY) fs.copyFileSync(src, dst);
      agregados.push(f);
    } else if (!mismoContenido(src, dst)) {
      if (!DRY) fs.copyFileSync(src, dst);
      actualizados.push(f);
    } else {
      sinCambios.push(f);
    }
  }

  // Huérfanos: .md de content/ que ya no están en el lab → se eliminan del espejo.
  const labSet = new Set(labMds);
  const eliminados = fs
    .readdirSync(CONTENT)
    .filter((f) => f.endsWith(".md") && !labSet.has(f));
  if (!DRY) for (const f of eliminados) fs.unlinkSync(path.join(CONTENT, f));

  // Win rates (badges meta + página /meta): mismo criterio byte a byte.
  let winrates = "sin cambios";
  if (fs.existsSync(WINRATES_SRC)) {
    if (!fs.existsSync(WINRATES_DST)) {
      if (!DRY) fs.copyFileSync(WINRATES_SRC, WINRATES_DST);
      winrates = "nuevo";
    } else if (!mismoContenido(WINRATES_SRC, WINRATES_DST)) {
      if (!DRY) fs.copyFileSync(WINRATES_SRC, WINRATES_DST);
      winrates = "actualizado";
    }
  } else {
    winrates = "⚠ fuente no existe en el lab (se conserva el actual)";
  }

  const changed =
    agregados.length + actualizados.length + eliminados.length > 0 ||
    winrates === "nuevo" || winrates === "actualizado";

  // ── Reporte ──
  console.log(`SYNC lab → web${DRY ? " (simulacro --dry)" : ""} · fuente: ${LAB}`);
  console.log(`  guías: ${labMds.length} en el lab · +${agregados.length} nuevas · ~${actualizados.length} actualizadas · -${eliminados.length} eliminadas · =${sinCambios.length} sin cambios`);
  if (agregados.length) console.log(`    + ${agregados.join("\n    + ")}`);
  if (actualizados.length) console.log(`    ~ ${actualizados.join("\n    ~ ")}`);
  if (eliminados.length) console.log(`    - ${eliminados.join("\n    - ")}`);
  console.log(`  winrates.csv: ${winrates}`);
  console.log(changed ? "  ⇒ HAY CAMBIOS (regenerar índice: npm run build)" : "  ⇒ todo en sincronía");

  // ── Integración GitHub Actions (fuera de CI es no-op) ──
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed ? "true" : "false"}\n`);
  }
  if (process.env.GITHUB_STEP_SUMMARY) {
    const lines = [
      `## 🔄 Sync lab → web`,
      ``,
      `| | cantidad |`,
      `|---|---|`,
      `| guías nuevas | ${agregados.length} |`,
      `| guías actualizadas | ${actualizados.length} |`,
      `| guías eliminadas | ${eliminados.length} |`,
      `| winrates.csv | ${winrates} |`,
      ``,
      changed
        ? `**Hay cambios** → se commitean y pushean (Vercel redeploya sola).`
        : `Sin cambios: el sitio ya está en sincronía con el lab.`,
    ];
    if (agregados.length) lines.push(``, `Nuevas: ${agregados.map((f) => `\`${f}\``).join(", ")}`);
    if (actualizados.length) lines.push(``, `Actualizadas: ${actualizados.map((f) => `\`${f}\``).join(", ")}`);
    if (eliminados.length) lines.push(``, `Eliminadas: ${eliminados.map((f) => `\`${f}\``).join(", ")}`);
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, lines.join("\n") + "\n");
  }
}

main();
