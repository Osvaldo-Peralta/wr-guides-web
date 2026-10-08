// WR-GUIDES-WEB · home (Paso 9) — hero + catálogo vivo (buscar/filtrar/ordenar
// en components/Catalogo.tsx). Contrato: identidad = slug, agrupación = champion;
// solo Status publicable: Aprobado/Beta.
import { loadIndex, PUBLISHABLE } from "@/lib/guides";
import Catalogo from "@/components/Catalogo";
import HomePersonal from "@/components/HomePersonal";

export const dynamic = "force-static";

export default function Home() {
  const idx = loadIndex();
  const publicables = idx.guias.filter((g) => PUBLISHABLE.has(g.status));
  const campeones = new Set(publicables.map((g) => g.champion)).size;

  return (
    <>
      <section className="hero">
        <p className="hero-kicker">⚗️ WR-LAB · laboratorio de builds de Wild Rift</p>
        <h1>Guías verificadas por matemática, no por vibes</h1>
        <p>
          Cada guía pasa por <strong>WR-LAB</strong>: builds de 6 slots validadas (Ley 0),
          números reproducibles por el motor, verificación automática contra cada hotfix
          y win rates Diamond+ actualizadas a diario.
        </p>
        <p className="hero-meta">
          {publicables.length} guías · {campeones} campeones · 5 roles · índice al {idx.generado || "—"}
        </p>
      </section>
      <HomePersonal guias={publicables} />
      <Catalogo guias={publicables} />
    </>
  );
}
