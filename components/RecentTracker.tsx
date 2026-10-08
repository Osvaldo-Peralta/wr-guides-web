"use client";
// WR-GUIDES-WEB · components/RecentTracker.tsx (V2) — registra la guía actual
// en el historial LOCAL (localStorage) para la sección "Seguir leyendo" del
// home. No renderiza nada; solo efecto secundario privado del navegador.
import { useEffect } from "react";
import { registrarReciente } from "@/lib/recientes";

export default function RecentTracker({ slug }: { slug: string }) {
  useEffect(() => {
    registrarReciente(slug);
  }, [slug]);
  return null;
}
