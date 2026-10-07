// WR-GUIDES-WEB · components/FichaGuia.tsx (Paso 9) — ficha de datos clave
// arriba de cada guía: lo que antes había que pescar del frontmatter/badges,
// ahora se lee de un vistazo (rol, arquetipo, parche, versión, fechas).
import type { GuideMeta } from "@/lib/guides";

const ROLES: Record<string, string> = {
  adc: "ADC (Dragon Lane)", support: "Support", jungla: "Jungla", mid: "Mid", top: "Top (Baron Lane)",
};

export default function FichaGuia({ g }: { g: GuideMeta }) {
  const filas: [string, string][] = [
    ["Rol", ROLES[g.role] || g.role || "—"],
    ["Arquetipo", g.archetype || "—"],
    ["Parche", g.patch ?? "—"],
    ["Versión", g.version ? `v${g.version}` : "—"],
    ["Publicada", g.published_at ?? "—"],
    ["Actualizada", g.updated_at ?? g.published_at ?? "—"],
  ];
  return (
    <dl className="ficha" aria-label="Datos clave de la guía">
      {filas.map(([k, v]) => (
        <div className="ficha-item" key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}
