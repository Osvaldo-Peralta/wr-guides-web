// WR-GUIDES-WEB · components/GuideRail.tsx (Paso 10) — rail derecho de la
// página de guía: ficha rápida vertical, caja de win rate y relacionadas
// compactas. Server component: cero JS, todo del índice en build time.
// En pantallas medias el rail baja como banda; en móvil se apila.
import type { Guide } from "@/lib/guides";
import { TIER_CLASE } from "@/lib/winrates";
import FichaGuia from "@/components/FichaGuia";
import GuiasRelacionadas from "@/components/GuiasRelacionadas";

export default function GuideRail({ g }: { g: Guide }) {
  return (
    <>
      <div className="rail-box">
        <p className="rail-titulo">📋 Ficha rápida</p>
        <FichaGuia g={g} />
      </div>
      {g.win && (
        <div className="rail-box rail-win">
          <p className="rail-titulo">📈 Win rate · {g.win.role} · Diamond+</p>
          <p className="rail-win-num">
            <span className={`tier ${TIER_CLASE[g.win.tier] || "tier-x"}`}>{g.win.tier}</span>
            <strong>{g.win.win_pct} %</strong> WR
          </p>
          <p className="rail-win-sub">
            pick {g.win.pick_pct} % · ban {g.win.ban_pct} %
            <br />
            actualizado {g.win.actualizado}
          </p>
        </div>
      )}
      <GuiasRelacionadas slug={g.slug} compacto />
    </>
  );
}
