// WR-GUIDES-WEB · app/guias/[slug]/opengraph-image.tsx — OG dinámica por guía
// (pulido post-Paso 10): cada guía comparte una card con SU campeón, rol,
// parche, versión y tier/WR reales del índice. Next la sirve en
// /guias/<slug>/opengraph-image y la mete sola en og:image / twitter:image.
// Restricciones de Satori (next/og): solo flex/absolute, sin blur ni
// background-clip:text — por eso el diseño usa gradientes lineales y tipografía
// grande en vez de los glows del sitio. Sin emojis (Satori no tiene fuente
// emoji sin cargarlas a mano).
import { ImageResponse } from "next/og";
import { loadGuide } from "@/lib/guides";

export const alt = "WR Guías — build de Wild Rift verificada por WR-LAB";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TIER_COLOR: Record<string, string> = {
  "S+": "#ff5470", S: "#ffb454", A: "#3ddc97", B: "#4cc9f0", C: "#a7a2c8", D: "#a7a2c8",
};
const ROL_COLOR: Record<string, string> = {
  adc: "#2de2e6", jungla: "#3ddc97", mid: "#b18cff", top: "#ffb454", support: "#ff7ac3",
};
const ROLES: Record<string, string> = {
  adc: "ADC", support: "Support", jungla: "Jungla", mid: "Mid", top: "Top",
};

export default function Image({ params }: { params: { slug: string } }) {
  const g = loadGuide(params.slug);
  const nombre = g?.champion || "WR Guías";
  const subtitulo = g?.variant
    ? g.variant.replace(/-/g, " ")
    : g
      ? "Build optimizada"
      : "Guías de Wild Rift";
  const rolColor = ROL_COLOR[g?.role || ""] || "#2de2e6";
  const tierColor = TIER_COLOR[g?.win?.tier || ""] || "#3ddc97";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0b0d1c 0%, #1a1038 55%, #062730 100%)",
          fontFamily: "sans-serif",
          color: "#ece9fb",
          position: "relative",
        }}
      >
        {/* franja caótica superior */}
        <div
          style={{
            height: 10,
            width: "100%",
            background: "linear-gradient(90deg, #ff3d9e 0%, #ffd93d 45%, #2de2e6 85%, #0b0d1c 100%)",
            display: "flex",
          }}
        />
        {/* letra de tier gigante de fondo */}
        {g?.win?.tier && (
          <div
            style={{
              position: "absolute",
              right: 30,
              bottom: -60,
              fontSize: 340,
              fontWeight: 800,
              color: tierColor,
              opacity: 0.16,
              lineHeight: 1,
            }}
          >
            {g.win.tier}
          </div>
        )}
        {/* cuerpo */}
        <div style={{ display: "flex", flexDirection: "column", padding: "48px 64px", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: 6,
                color: "#2de2e6",
              }}
            >
              WR GUÍAS · WILD RIFT
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: rolColor,
                border: `2px solid ${rolColor}`,
                borderRadius: 999,
                padding: "4px 18px",
              }}
            >
              {ROLES[g?.role || ""] || "GUÍA"}
            </div>
          </div>

          <div style={{ display: "flex", marginTop: 26, fontSize: 92, fontWeight: 800, lineHeight: 1.05 }}>
            {nombre}
          </div>
          <div style={{ display: "flex", marginTop: 8, fontSize: 34, color: "#a7a2c8", fontWeight: 600 }}>
            {subtitulo}
          </div>

          <div style={{ display: "flex", gap: 16, marginTop: 30, alignItems: "center" }}>
            {g?.win && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  border: `2px solid ${tierColor}`,
                  borderRadius: 14,
                  padding: "10px 22px",
                }}
              >
                <div style={{ fontSize: 40, fontWeight: 800, color: tierColor }}>{g.win.tier}</div>
                <div style={{ fontSize: 34, fontWeight: 700 }}>{`WR ${g.win.win_pct} %`}</div>
              </div>
            )}
            <div
              style={{
                fontSize: 26,
                color: "#a7a2c8",
                border: "2px solid #2c3160",
                borderRadius: 14,
                padding: "12px 22px",
              }}
            >
              {`parche ${g?.patch ?? "—"} · v${g?.version || "—"}`}
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "auto", fontSize: 23, color: "#a7a2c8" }}>
            Verificada por WR-LAB · builds de 6 slots · win rates Diamond+ al día ·
            wr-guides-web.vercel.app
          </div>
        </div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}
