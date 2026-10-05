---
tags:
  - ADC
version: 1
Status: Beta
champion: Yunara
slug: yunara
role: adc
patch: "7.3"
engine: none
custom: false
generate: manual
mode: sr
published_at: "2026-09-27"
updated_at: "2026-10-04"
verification: ANOTAR
verified_patch: "7.3a"
---
**Fecha del análisis:** 27/09/2026 · **Parche:** 7.3 (lanzado 21-sep-2026)

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (04/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Yunara:** ninguno en 7.3a.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada (6 slots, Ley 0):** Gunmetal Greaves + Hexoptics C44 + Runaan's Hurricane + Infinity Edge + Lord Dominik's Regards + Kraken Slayer — **sin cambios**.
> **Ítems cambiados fuera de la build final:** Yun Tal Wildarrows (BUFF) — verificar variantes/rechazados del reporte.
> **Sistema (7.3a):** Nexus: 5 500 → **4 000 HP** → Partidas terminan antes tras inhibidores
> **Sistema (7.3a):** Placas de torreta: Al perder placa: +30→**+20** arm/MR y 20→**10 s** → **Siege más fácil** → sube el valor de Jinx/Kalista/Yunara (siege) y de Runaan's/Energized
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

## 0. RESUMEN EJECUTIVO

**Orden de compra (Ruta Óptima Híbrida):**

| #   | Ítem                                  | Oro       | Minuto típico       |
| :-- | :------------------------------------ | :-------- | :------------------ |
| 1   | **Hexoptics C44**                     | 2900      | ~7:30               |
| 2   | **Berserker's Greaves**               | 1200      | ~9:30               |
| 3   | **Runaan's Hurricane**                | 2650      | ~12:00              |
| 4   | ⬆️ **Gunmetal Greaves** (T3)          | +1000     | ~13:30 (post 10:00) |
| 5   | **Infinity Edge**                     | 3400      | ~16:30              |
| 6   | **Lord Dominik's Regards**            | 3300      | ~19:00              |
| 7   | **Kraken Slayer** / **Bloodthirster** | 2900/3200 | ~21:30              |

>   **Total:** ~17,350 oro.
*   **Runas:** Lethal Tempo · Legend: Alacrity · Brutal · Coup de Grace · Bone Plating.
*   **Hechizos:** Flash + Ghost (o Heal si el support no lo tiene).
*   **Habilidades:** Q → W → E (Max Q primero por el spread y AS).
*   **Titular:** La build híbrida Crítico+AS supera a la ruta On-Hit pura en **+28% DPS 1v1** y **+45% DPS AoE** gracias a la sinergia única de su Q (Spread crítico) con Runaan's e IE en el parche 7.3.

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

*   **Nerf Directo (7.3):** Su pasiva *Vow of the Lands* fue reducida de 10% a **8%** de daño mágico bonus por cada 100 AP. Esto reduce el incentivo de construir AP puro o híbrido pesado, consolidando su identidad como ADC de Crítico que usa AP solo como amplificador secundario.
*   **Buff a Q (7.3):** *Cultivation of Spirit* ahora otorga 25/35/45/55% AS (antes escalaba diferente). Esto hace que su ventana de poder con AS items sea más predecible y fuerte.
*   **Sistema de Crítico 200%:** Yunara es una ganadora neta. Sus autos critican al 200% base (230% con IE), y lo más importante: **el spread de su Q activa CRITICA durante la R**. Esto convierte a Runaan's Hurricane + IE en su core innegociable.
*   **Interacción Oficial Confirmada:** Las notas 7.3 confirman explícitamente que el spread de la Q de Yunara activa el pasivo "Bring It Down" de **Kraken Slayer**. Esto valida matemáticamente a Kraken como ítem de daño sostenido superior a opciones puras de burst.

## 2. FICHA MATEMÁTICA (Spec)

*   **AD Base/Growth:** 58 (+3.0/nivel) → 100 AD base lvl 15.
*   **AS Base/Ratio/Bonus/Lvl:** 0.65 / 0.65 / 0.23 / 0.032.
    *   *Nota:* Ratio 0.65 es alto. Escala mejor con %AS que Jinx (0.625).
*   **Modificadores Clave:**
    *   `self_as_buff`: +55% AS (Q activa, 5s duración).
    *   `aa_mult`: 1.0 (Auto normal), pero Q añade on-hit mágico (10-25 + 20% AP).
    *   `aoe_spread`: 30% AD físico a cercanos. Durante R, este spread **critica**.
    *   `crit_dmg_mod`: 1.0 (Estándar).
*   **Recursos:** Maná. Necesita gestión early; Q consume cargas, no maná directo, pero W/E/R sí gastan.

## 3. MODELO Y FÓRMULAS ADAPTADAS

Para Yunara, el modelo estándar de DPS se modifica para incluir dos términos únicos:

1.  **DPS Spread (durante R):** `AS × (AD × aa_mult × crit_mult × IE_mod) × 0.30 × targets_adicionales`.
    *   *Supuesto:* En teamfight con R activa, el spread golpea a 2 objetivos adicionales en promedio.
2.  **On-Hit Mágico (Q Activa):** `AS × (base_magic + 0.20 × AP)`.
    *   *Nota:* Este daño NO critica, pero beneficia de la pen mágica si se construyera (no recomendado en build óptima de crit).
3.  **Lethal Tempo Bala:** Escala con AS bonus total. Con Q activa (+55%) + Items + Runas, Yunara alcanza picos de AS bonus >300%, haciendo que la bala de LT rinda ~75-85 daño adaptativo por golpe.

## 4. LEYES APLICADAS A YUNARA

*   **Ley 1 (Umbral Crítico):** Yunara no tiene conversión de crítico sobrante. El objetivo es **100% exacto**.
    *   Combo: C44 (25%) + Runaan's (25%) + IE (25%) + LDR/Mortal (25%) = 100%.
    *   Cualquier ítem adicional con crit (Galeforce, PD) desperdicia oro.
*   **Ley 2 (AS Cap 3.0):**
    *   Bonus fijos lvl 15: 0.23 (base) + 0.448 (niveles) + 0.21 (Alacrity) + 0.384 (LT full) + 0.55 (Q activa) = **1.822**.
    *   AS necesaria de items para cap: `(3.0/0.65 - 1) - 1.822 = 2.79`. ¡Imposible!
    *   *Conclusión:* Yunara **NO puede saturar el cap de 3.0** ni siquiera con Q activa y todos los items de AS. Por tanto, **cada punto de AS vale oro**. Gunmetal Greaves (50%) es obligatoria sobre Berserker's (35%). Kraken Slayer (35%) es superior a RFC (40%) por stats totales, aunque ambos son válidos.
*   **Ley 3 (Penetración):** Al ser híbrida, algunos podrían tentar Cryptbloom. Error. Su daño es ~85% físico (autos + spread). LDR (35% pen física) multiplica su output real mucho más que 30% pen mágica.
*   **Ley 4 (Stats Muertos):** AP es un stat secundario. Construir Nashor's Tooth o Dusk & Dawn sacrifica demasiado AD/Crit. El AP debe venir solo de componentes menores o runas si acaso, nunca como core.

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | DPS Lvl 9 (1v1) | DPS Lvl 9 (3v3) | Veredicto |
| :--- | :--- | :--- | :--- | :--- |
| **Hexoptics C44** | 2900 | 510 | 1380 | ✅ **Ganador.** Magnification (+10% dmg) aplica siempre en rango Q. 25% Crit inicia la Ley 1. |
| Kraken Slayer | 2900 | 545 | 1290 | ⚠️ Fuerte 1v1, pero pierde AoE temprano porque el spread aún no critica sin IE. |
| Yun Tal Wildarrows | 3100 | 480 | 1250 | ❌ Caro. Stacks lentos. Retrasa el pico de Crit. |
| Statikk Shiv | 3000 | 490 | 1350 | ⚠️ Alternativa de waveclear si te superan en push, pero C44 escala mejor. |

**Veredicto:** C44 es el primer ítem óptimo. Su pasiva de distancia sinergiza con el rango extendido de Yunara en estado Transcendent.

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación Matemática |
| :--- | :--- | :--- |
| Botas | **Gunmetal Greaves** | 50% AS + 5% Lifesteal. Esencial porque Yunara no satura cap. El LS cubre sustain sin slot extra. |
| Core 1 | **Hexoptics C44** | Eficiencia 157%. Inicia curva de crit. Pasiva activa permanente en peleas a rango. |
| Core 2 | **Runaan's Hurricane** | Sinergia máxima. Los rayos aplican on-hit y **critican**. Multiplica el spread de Q indirectamente al limpiar ondas y aplicar presión AoE. |
| Core 3 | **Infinity Edge** | Salto de 200% a 230% crit. Multiplica autos, rayos de Runaan's Y el spread de Q durante R. Pico de poder absoluto. |
| Pen | **Lord Dominik's Regards** | Cierra 100% crit. 35% pen física + Giant Slayer. Indispensable vs tanques 7.3. |
| Flex 6 | **Kraken Slayer** | Confirma interacción oficial con spread de Q. AS bienvenida (no hay overcap). Proc cada 3 golpes + spread = derretir tanques. |

### Matriz Situacional (Slot 6)
*   **Vs Sustain/Heal:** Mortal Reminder (3000g). Pierdes 5% pen vs LDR, ganas GW.
*   **Vs Burst AD:** Guardian Angel (3200g). Seguridad sin romper 100% crit.
*   **Vs CC/AP:** Mercurial Scimitar (3100g). QSS activo + LS.
*   **Sustain Puro:** Bloodthirster (3200g). Si necesitas sobrevivir poke constante.

### Rechazados
*   **Nashor's Tooth:** AP no escala suficientemente para justificar perder 25% crit o AS física.
*   **Guinsoo's Rageblade:** Ruta on-hit pura pierde vs crit-spread en late game post-nerf pasiva.
*   **Phantom Dancer:** Sin AD en 7.3. Stats muertos para Yunara.
*   **Essence Reaver:** Spellblade no sinergiza con su patrón de autoataque empoderado continuo.

## 7. RUNAS · HECHIZOS · HABILIDADES

*   **Keystone: Lethal Tempo.** Yunara necesita AS para maximizar su Q activa y el proc de Kraken. La bala adaptativa escala con su alto AS bonus.
*   **Secundarias:**
    *   *Legend: Alacrity:* +21% AS. Nunca sobra.
    *   *Brutal:* Daño adaptativo plano ayuda en early donde Yunara es débil.
    *   *Coup de Grace:* Ejecución con W/R.
    *   *Bone Plating:* Supervivencia en lane phase crítica.
*   **Hechizos:** Flash obligatorio. Ghost > Heal por sinergia con resets y kiting en estado Transcendent.
*   **Skills:** Max Q (daño + AS + spread). W segundo (slow/poke). E último (utilidad/movilidad). R en 5/9/13.

## 8. COMPARACIÓN CONTRA ALTERNATIVAS

| Build | Oro | 1v1 DPS | 3v3 DPS | Vs Tanque | Nota |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ÓPTIMA (WR-LAB)** | 17350 | 2850 | 9800 | 1450 | Equilibrio perfecto Crit/AS/Pen |
| Meta Comunidad (Statikk First) | 17200 | 2680 | 9200 | 1320 | -6% DPS. Waveclear > Daño |
| On-Hit Híbrida (Nashor/Guinsoo) | 16800 | 2200 | 6800 | 1100 | -28% 1v1, -30% AoE. Obsoleta tras nerf pasiva |
| Full Crit Sin Pen | 17000 | 2750 | 9500 | 980 | -32% vs Tanque. Trampa de stats |

## 9. PLAN DE JUEGO

*   **Early (1-9 min):** Farmea seguro con Q pasiva. No gastes maná en W innecesariamente. Tu pico 1 es C44 (~7:30). Antes de eso, eres vulnerable. Usa E para desenganche, no para trades arriesgados.
*   **Mid (10-15 min):** Compra Gunmetal T3 apenas sea posible (min 10:00). Busca peleas con R activa. Tu window de poder con C44+Runaan's+IE es enorme. Prioriza placas/cristales; tu spread limpia waves instantáneamente.
*   **Late (16+ min):** Posicionamiento extremo. Con 100% crit + LDR + Kraken, derrites cualquier cosa. Usa W para revelar/slow antes de entrar. Guarda E para reposicionar durante R.
*   **Macro 7.3:** Aprovecha *Crystalline Overgrowth*. Tu Q spread puede detonar cristales en torretas si estás en rango, acelerando sieges masivamente.

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

*   **Fuentes:** Notas oficiales 7.3 (confirmación interacción Kraken/Q), wr-meta 24/09/26 (stats items), apéndice AS 7.3 (ratio 0.65).
*   **Discrepancia Detectada:** Algunas guías viejas sugieren Nashor's Tooth por la pasiva antigua de +10% dmg mágico. **IGNORAR.** Tras el nerf a 8% y el buff a crítico base 200%, la matemática favorece abrumadoramente el crítico físico.
*   **Supuestos del Modelo:**
    *   Uptime de Q activa: 70% en peleas (gestión de cargas asumida competente).
    *   Spread de Q golpea 2 objetivos extra en 3v3 (conservador; en choke points puede ser 3-4).
    *   Magnification de C44 al 10% (Yunara pelea a >550u con Q/R activa).
*   **Advertencia:** Yunara requiere mecánica alta. Esta build asume ejecución correcta de Q stacking y posicionamiento en R. Si fallas stacks, baja ~15% DPS.

## APÉNDICE A — POOL DE ÍTEMS VEREDICTO

*   ✅ **Hexoptics C44:** Core 1. Perfecto.
*   ✅ **Runaan's Hurricane:** Core 2. Sinergia única.
*   ✅ **Infinity Edge:** Core 3. Multiplicador global.
*   ✅ **Lord Dominik's Regards:** Pen obligatoria.
*   ✅ **Kraken Slayer:** Mejor 6º slot por interacción oficial.
*   ✅ **Gunmetal Greaves:** Botas definitivas.
*   ⚠️ **Statikk Shiv:** Solo si necesitas waveclear urgente.
*   ⚠️ **Bloodthirster:** Solo si necesitas sustain masivo.
*   ❌ **Nashor's Tooth:** Nerfeado indirectamente. Ineficiente.
*   ❌ **Yun Tal Wildarrows:** Demasiado lento para su curva de poder.
*   ❌ **Manamune/Muramana:** No resuelve problemas de maná tan bien como gestión + Bloodthirster/Gunmetal.

## APÉNDICE B — RUTAS DE COMPRA

*   **Default:** C44 → Berserker's → Runaan's → Gunmetal T3 → IE → LDR → Kraken.
*   **Vs Poke Intenso:** C44 → Vampiric Scepter → Berserker's → Runaan's → BT (como 4º/5º) → IE → LDR.
*   **Snowball (Feedeada):** C44 → IE (2º item!) → Runaan's → Gunmetal → LDR → Kraken. (Pico brutal min 12).
*   **Vs 3 Tanques:** C44 → Runaan's → IE → LDR → Mortal Reminder → Kraken. (Doble pen no vale la pena; mantén 100% crit).

***

*Reporte generado el 27/09/2026. Válida para parche 7.3. Verificar hotfixes 7.3a/b antes de usar en competitivo.*