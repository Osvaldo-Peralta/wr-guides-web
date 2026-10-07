"use client";
// WR-GUIDES-WEB · components/Markdown.tsx — renderizador MD del estándar v1.4
// Contrato §3: callouts [!NOTE|TIP|WARNING|DANGER|VERIF] (marcador normalizado a
// línea propia por lib/guides.preprocesar), tablas con scroll, sin HTML crudo.
// Paso 9: h2/h3 con anclas id estables (lib/slug.ts) + link "#" al hover, para
// que la tabla de contenidos (TablaContenidos) y el scroll-spy funcionen.
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify, idUnico } from "@/lib/slug";

const TITULOS: Record<string, string> = {
  note: "Nota", tip: "Consejo", warning: "Advertencia", danger: "Peligro",
  verif: "Verificación WR-LAB",
};

function primerTexto(node: any): string {
  if (!node) return "";
  if (node.type === "text") return node.value || "";
  return (node.children || []).map(primerTexto).join("");
}

// Texto plano de children de React (para slugificar títulos ya parseados).
function aTexto(nodos: unknown): string {
  if (nodos == null || typeof nodos === "boolean") return "";
  if (typeof nodos === "string" || typeof nodos === "number") return String(nodos);
  if (Array.isArray(nodos)) return nodos.map(aTexto).join("");
  if (typeof nodos === "object" && "props" in (nodos as any))
    return aTexto((nodos as any).props?.children);
  return "";
}

const components: Partial<Components> = {
  blockquote({ node, children, ...props }: any) {
    const arr = Array.isArray(children) ? children : [children];
    const p = (node?.children || []).find(
      (c: any) => c.type === "element" && c.tagName === "p");
    let tipo: string | null = null;
    if (p) {
      const m = primerTexto(p).trim().match(/^\[!(\w+)\]$/);
      if (m) tipo = m[1].toLowerCase();
    }
    if (!tipo) {
      return <blockquote {...props}>{children}</blockquote>;
    }
    // el párrafo-marcador es el primer ELEMENTO; puede haber nodos de espacio antes
    const primerElemIdx = arr.findIndex((c: any) => c?.type === "p" || c?.props);
    const resto = primerElemIdx >= 0 ? arr.slice(primerElemIdx + 1) : arr.slice(1);
    return (
      <div className={`callout callout-${tipo}`} data-callout={tipo}>
        <div className="callout-title">
          {tipo === "verif" ? "🛡️ " : ""}{TITULOS[tipo] || tipo}
        </div>
        <div className="callout-body">{resto}</div>
      </div>
    );
  },
  table({ node, children, ...props }: any) {
    return (
      <div className="table-container">
        <table {...props}>{children}</table>
      </div>
    );
  },
  a({ node, children, href, ...props }: any) {
    const externo = href && /^https?:/.test(href);
    return (
      <a href={href} {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...props}>
        {children}
      </a>
    );
  },
};

// h2/h3 con id estable + ancla visible al hover. El Map vive por render:
// SSR y cliente recorren los títulos en el mismo orden → mismos ids.
function hacerHeading(nivel: 2 | 3, vistos: Map<string, number>) {
  return function Heading({ children, ...props }: any) {
    const base = slugify(aTexto(children)) || "seccion";
    const id = idUnico(vistos, base);
    const Tag = (`h${nivel}` as "h2" | "h3");
    return (
      <Tag id={id} {...props}>
        {children}
        <a className="md-anchor-link" href={`#${id}`} aria-label="Enlace a esta sección">
          #
        </a>
      </Tag>
    );
  };
}

export default function Markdown({ source }: { source: string }) {
  const vistos = new Map<string, number>();
  const conAnclas: Partial<Components> = {
    ...components,
    h2: hacerHeading(2, vistos) as any,
    h3: hacerHeading(3, vistos) as any,
  };
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={conAnclas as Components}>
      {source}
    </ReactMarkdown>
  );
}
