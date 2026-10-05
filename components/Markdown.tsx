"use client";
// WR-GUIDES-WEB · components/Markdown.tsx — renderizador MD del estándar v1.4
// Contrato §3: callouts [!NOTE|TIP|WARNING|DANGER|VERIF] (marcador normalizado a
// línea propia por lib/guides.preprocesar), tablas con scroll, sin HTML crudo.
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const TITULOS: Record<string, string> = {
  note: "Nota", tip: "Consejo", warning: "Advertencia", danger: "Peligro",
  verif: "Verificación WR-LAB",
};

function primerTexto(node: any): string {
  if (!node) return "";
  if (node.type === "text") return node.value || "";
  return (node.children || []).map(primerTexto).join("");
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

export default function Markdown({ source }: { source: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components as Components}>
      {source}
    </ReactMarkdown>
  );
}
