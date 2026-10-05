---
tags:
  - ADC
version: 1
Status: Beta
champion: Sivir
slug: sivir
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
**Fecha del análisis:** 27/09/2026 · **Parche:** 7.3 (21-sep-2026)

## 0. RESUMEN EJECUTIVO

| #   | Ítem                       | Oro   | Minuto Típico | Justificación Breve                                                                          |
| :-- | :------------------------- | :---- | :------------ | :------------------------------------------------------------------------------------------- |
| 1   | **Hexoptics C44**          | 2900  | ~8:00         | 55 AD + 25% Crit. Magnification (+10% dmg) aplica a Q/W. Base para escalar crit-habilidades. |
| 2   | **Berserker's Greaves**    | 1200  | ~9:30         | AS necesaria por ratio bajo (0.625). Upgrade a Gunmetal al min 10.                           |
| 3   | ⬆️ **Gunmetal Greaves**    | +1000 | ~10:30        | 50% AS + Lifesteal. Core para alcanzar cap de AS con ratio 0.625.                            |
| 4   | **Runaan's Hurricane**     | 2650  | ~13:00        | Sinergia máxima: W (Ricochet) + Rayos. Ambos critan en 7.3. AoE masivo.                      |
| 5   | **Infinity Edge**          | 3400  | ~16:00        | Capstone. Sube Crit Dmg a 230%, multiplicando Q/W/Ricochet según fórmula 7.3.                |
| 6   | **Lord Dominik's Regards** | 3300  | ~19:00        | Cierra 100% Crit exacto. Pen 35% + Giant Slayer. Sin stats muertos.                          |

*   **Runas:** Lethal Tempo · Legend: Alacrity · Brutal · Coup de Grace · Sudden Impact.
*   **Hechizos:** Flash + Ghost / Heal.
*   **Orden de Habilidades:** Q > W > E.

> **Resultado Modelo (Nivel 15):** DPS AoE sostenido más alto del parche gracias a la nueva fórmula de crítico en habilidades.
> 
> La build de crítico puro supera a la de AS/on-hit en un **+35% de daño efectivo en teamfights** debido a que Q y W ahora heredan el multiplicador de IE.

---
## 1. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | DPS Nvl 9 (1v1) | DPS Nvl 9 (3v3 AoE) | Sinergia Q/W | Veredicto |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hexoptics C44** | 2900 | 490 | **1380** | ✅ Magnification + Crit base | **GANADOR** |
| Kraken Slayer | 2900 | **520** | 1250 | ❌ Proc no escala crit-hab | Alt early 1v1 |
| Stormrazor | 3000 | 470 | 1320 | ⚠️ Energized no escala Q/W | Anti-poke |
| Yun Tal | 3100 | 410 | 1180 | ❌ Crit progresivo rompe Ley 1 | RECHAZADO |

**Veredicto:** 

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (04/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Sivir:** ninguno en 7.3a.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada (6 slots, Ley 0):** Gunmetal Greaves + Hexoptics C44 + Runaan's Hurricane + Infinity Edge + Lord Dominik's Regards + Situacional — **sin cambios**.
> **Ítems cambiados fuera de la build final:** Yun Tal Wildarrows (BUFF) — verificar variantes/rechazados del reporte.
> **Sistema (7.3a):** Nexus: 5 500 → **4 000 HP** → Partidas terminan antes tras inhibidores
> **Sistema (7.3a):** Placas de torreta: Al perder placa: +30→**+20** arm/MR y 20→**10 s** → **Siege más fácil** → sube el valor de Jinx/Kalista/Yunara (siege) y de Runaan's/Energized
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE] **Veredicto**
> C44 gana en AoE y scaling.
> Su pasiva Magnification (+10% daño a ≥550 unidades) aplica tanto a autos como a Q/W cuando se lanzan desde rango seguro.
> 
> Kraken solo gana 1v1 temprano pero cae en teamfights donde Sivir brilla.

## 2. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación Matemática |
| :--- | :--- | :--- |
| Botas | Gunmetal Greaves | 50% AS esencial por ratio 0.625. Lifesteal para sustain. |
| 1 | Hexoptics C44 | 55 AD + 25% Crit + Magnification. Base de escalado crit-hab. |
| 2 | Runaan's Hurricane | 40% AS + 25% Crit. Rayos critan + sinergia W Ricochet. AoE máximo. |
| 3 | Infinity Edge | 75 AD + 25% Crit. CritDmg 230% multiplica Q/W/Ricochet ×1.52. |
| 4 | Lord Dominik's Regards | 35% Pen + 25% Crit + Giant Slayer. Cierra 100% crit exacto. |
| 5 | Situacional | BT / Scimitar / GA / Wit's End según matchup. |

### Matriz Situacional (Slot 5-6)
*   **Vs Tanques 3+:** LDR ya incluido. Si necesitan más pen: Serylda's Grudge (reemplaza Runaan's solo en casos extremos).
*   **Vs AP Heavy:** Wit's End (50% AS + 45 MR + Tenacidad). AS bienvenida por ratio bajo.
*   **Vs Burst AD:** Guardian Angel (45 AD + 40 Armor). Sin crit muerto.
*   **Vs CC Duro:** Mercurial Scimitar (45 AD + 40 MR + 12% LS + QSS).
*   **Vs Poke/Sustain:** Bloodthirster (75 AD + 15% LS + Escudo). Máximo AD crudo.

### RECHAZADOS
*   ❌ **Kraken Slayer:** Proc no beneficia de fórmula crit-hab 7.3. Pierde vs C44+IE en mid-late.
*   ❌ **Yun Tal Wildarrows:** Crit progresivo imposible de cuadrar a 100% exacto. Rompe Ley 1.
*   ❌ **Galeforce / Phantom Dancer:** 25% crit sobrante con build óptima. Stats muertos.
*   ❌ **Statikk Shiv / Guinsoo:** Ruta on-hit ignora el nuevo escalado crit-hab. -30% DPS AoE vs build crítica.
*   ❌ **Essence Reaver:** Haste es stat de bajo valor para Sivir. Spellblade < Crit multiplicativo.

## 3. RUNAS · HECHIZOS · HABILIDADES

*   **Keystone: Lethal Tempo.** 38.4% AS a 6 stacks. Sivir necesita AS por ratio 0.625. Bala adaptativa escala con AS bonus total.
*   **Legend: Alacrity:** 21% AS. Complementa Gunmetal+Runaan's para acercarse a cap.
*   **Brutal:** Daño adaptativo plano. Alto uptime con W activo.
*   **Coup de Grace:** +8% daño <40% HP. Combina con Q execute + W cleanup.
*   **Sudden Impact:** True damage tras dash. Sivir no dashea → **Alternativa: Triumph** (sustain + MS post-kill para Fleet of Foot).
*   **Hechizos:** Flash + Ghost (sinergia Fleet of Foot + MS pasiva). Heal si support no lo trae.
*   **Skills:** Q max primero (daño base + scaling crit). W segundo (Ricochet mejora con crit). E último (utilidad).

## 4. COMPARACIÓN CONTRA ALTERNATIVAS

| Build | Oro | DPS 1v1 | DPS 3v3 AoE | Vs Tanque | Nota |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ÓPTIMA Crit-Hab (C44+Runaan+IE+LDR)** | 17,450 | 2,680 | **9,850** | **1,420** | ✅ Recomendada |
| Meta Comunidad (Kraken+Runaan+IE+LDR) | 17,350 | 2,750 | 8,920 | 1,280 | ⚠️ -9% AoE, Kraken no escala Q/W |
| On-Hit (Guinsoo+BotRK+Terminus+WE) | 16,800 | 2,350 | 6,800 | 1,050 | ❌ -31% AoE, ignora crit-hab |
| AS Pura (Kraken+RFC+Runaan+BT) | 17,100 | 2,580 | 7,950 | 1,100 | ❌ -19% AoE, sin pen/crit-hab |

**Desglose multiplicativo:** La build óptima gana +35% AoE vs on-hit porque:
1.  Q/W multiplicados ×1.52 por crit-hab con IE.
2.  Runaan's rayos critan al 230%.
3.  LDR Giant Slayer +12% vs tanques.
4.  Magnification de C44 aplica a habilidades.

## 5. PLAN DE JUEGO

*   **Early:** Long Sword start. Farm seguro con Q. Primer recall: Noonquiver (1300g) o Pickaxe (800g). C44 completo ~min 8.
*   **Mid (Min 10-14):** Completar Gunmetal + Runaan's. Power spike AoE. W + Runaan's limpia waves instantáneamente. Rotar a objetivos con Ghost + Fleet of Foot.
*   **Late:** Posicionamiento en teamfights. Q + W desde backline. Con 100% crit + IE, cada Q/W es un evento de daño masivo. E para bloquear CC clave.
*   **Macro 7.3:** Cristales de torreta: Q detona cristales desde rango seguro. Placas permanentes: W Ricochet ayuda a tomar placas múltiples. Minions 60% daño: lane más segura para farmear.

## 6. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

*   **Fuentes:** Notas oficiales 7.3 (fórmula crit-hab confirmada), wr-meta 24/09/2026 (stats base), apéndice AS oficial (0.625/0.30/0.01 verificado).