// WR-GUIDES-WEB · app/not-found.tsx (Paso 9) — 404 con identidad (también lo
// ven las guías no publicables: notFound() en /guias/[slug]).
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="nf">
      <p className="nf-codigo" aria-hidden="true">404</p>
      <h1>¡Zap! Esta página no existe</h1>
      <p>
        Puede que la guía haya sido renombrada, que esté de vuelta en el
        laboratorio, o que el link tenga un typo de Flame Chompers.
      </p>
      <p className="nf-links">
        <Link href="/">Ir al catálogo</Link>
        <span aria-hidden="true"> · </span>
        <Link href="/meta">Meta actual</Link>
      </p>
    </section>
  );
}
