// WR-GUIDES-WEB · gen-index.mjs — construye content/guias_index.json (contrato §2)
// Corre automáticamente en `npm run build`. Fuente: frontmatter de content/*.md
// (+ content/winrates.csv si existe, para el badge meta de cada guía).
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT = path.join(process.cwd(), "content");
const ROL_CSV = { adc: "DUO", support: "SUPPORT", jungla: "JUNGLE", mid: "MID", top: "SOLO" };

function leerWinrates() {
  const ruta = path.join(CONTENT, "winrates.csv");
  if (!fs.existsSync(ruta)) return {};
  const lineas = fs.readFileSync(ruta, "utf8").split(/\r?\n/).filter(Boolean);
  const hdr = lineas[0].split(",");
  const out = {};
  for (const lin of lineas.slice(1)) {
    const c = lin.split(",");
    const fila = Object.fromEntries(hdr.map((h, i) => [h.trim(), (c[i] || "").trim()]));
    const clave = `${fila.champion}|${fila.role}`;
    out[clave] = fila; // última fila gana (CSV es histórico ordenado)
    out[fila.champion] = out[fila.champion] || fila;
  }
  return out;
}

const win = leerWinrates();
const guias = [];
for (const f of fs.readdirSync(CONTENT).filter((f) => f.endsWith(".md")).sort()) {
  const { data } = matter(fs.readFileSync(path.join(CONTENT, f), "utf8"));
  const champion = data.champion || f.replace(/\.md$/, "");
  const rolCsv = (data.role && ROL_CSV[data.role]) || "";
  const w = win[`${champion}|${rolCsv}`] || win[champion] || null;
  guias.push({
    slug: data.slug || f.replace(/\.md$/, "").toLowerCase(),
    archivo: f,
    champion,
    role: data.role || "",
    variant: data.variant || null,
    patch: data.patch || null,
    version: data.version || "",
    status: data.Status || "Borrador",
    engine: data.engine || "none",
    archetype: data.archetype || null,
    custom: String(data.custom) === "true",
    generate: data.generate || "manual",
    mode: data.mode || "sr",
    published_at: data.published_at || null,
    updated_at: data.updated_at || null,
    verification: data.verification || "pending",
    verified_patch: data.verified_patch || null,
    win: w
      ? { win_pct: w.win_pct, pick_pct: w.pick_pct, ban_pct: w.ban_pct, tier: w.tier,
          role: w.role, actualizado: w.actualizado }
      : null,
  });
}

const index = {
  generado: new Date().toISOString().slice(0, 10),
  guias,
};
fs.writeFileSync(path.join(CONTENT, "guias_index.json"), JSON.stringify(index, null, 1));
console.log(`✔ guias_index.json: ${guias.length} guías`);
