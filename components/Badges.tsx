// WR-GUIDES-WEB · components/Badges.tsx — badges del contrato (status, verificación,
// custom, rol, meta) a partir del frontmatter + guias_index.json.
import type { GuideMeta } from "@/lib/guides";

const VERIF: Record<string, { icono: string; clase: string; texto: string }> = {
  AL_DIA:       { icono: "⏩", clase: "ok",   texto: "al día" },
  ANOTAR:       { icono: "✅", clase: "ok",   texto: "verificada" },
  SIN_IMPACTO:  { icono: "✅", clase: "ok",   texto: "verificada" },
  REVISAR:      { icono: "⚠️", clase: "warn", texto: "en revisión" },
  REGENERAR:    { icono: "❌", clase: "bad",  texto: "obsoleta" },
  pending:      { icono: "❔", clase: "muted", texto: "sin verificar" },
};

const ROLES: Record<string, string> = {
  adc: "ADC", support: "Support", jungla: "Jungla", mid: "Mid", top: "Top",
};

export function BadgeVerificacion({ g }: { g: GuideMeta }) {
  const v = VERIF[g.verification] || VERIF.pending;
  const parche = g.verified_patch || g.patch;
  return (
    <span className={`badge badge-${v.clase}`} title={`Verificación WR-LAB contra el parche ${parche ?? "—"}`}>
      {v.icono} {v.texto}{parche ? ` · ${parche}` : ""}
    </span>
  );
}

export function BadgeStatus({ g }: { g: GuideMeta }) {
  const clase = g.status === "Aprobado" ? "ok" : g.status === "Beta" ? "warn" : "muted";
  return <span className={`badge badge-${clase}`}>{g.status}</span>;
}

export function BadgesGuia({ g }: { g: GuideMeta }) {
  return (
    <span className="badges">
      {ROLES[g.role] && <span className="badge badge-role">{ROLES[g.role]}</span>}
      {g.custom && <span className="badge badge-custom">★ Custom</span>}
      {g.generate === "auto" && <span className="badge badge-muted">auto</span>}
      {g.verification && <BadgeVerificacion g={g} />}
      {g.win && (
        <span className="badge badge-meta" title={`wr-meta · Diamond+ · ${g.win.actualizado}`}>
          WR {g.win.win_pct} % · Tier {g.win.tier}
        </span>
      )}
    </span>
  );
}
