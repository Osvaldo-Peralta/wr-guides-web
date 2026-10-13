---
tags:
  - Top
  - Tank
  - AP-vida
  - Baron-Lane
version: 1.3
Status: Beta
champion: Cho'Gath
slug: chogath-titan-del-baron
role: top
variant: titan-del-baron
patch: "7.3+7.3a"
archetype: "Tanque AP %-vida (Feast)"
engine: rotacion-tanque
custom: false
generate: manual
mode: sr
published_at: "2026-09-28"
updated_at: "2026-10-12"
verification: ANOTAR
verified_patch: "7.3a"
---
**Fecha del análisis:** 11/10/2026 (regeneración v1.3 con motor dedicado batch4)
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** Top / Baron Lane (variante Jungla en `chogath-titan-de-la-jungla`)
**Arquetipo:** Tanque de rotación AP %-vida: split-pusher de ventanas enormes y execute verdadero.
**Enfoque:** La misma óptima del motor que en jungla (cuarteto Unending + Gargoyle + Twinguard + FoN) con lecturas de top: Demolish + cristales + rango Feast para siege, y Rod of Ages como alternativa de lane 1v1 larga.

> [!NOTE]
> **Estado Meta Actual (Diamond+, 09/10/2026):** SOLO Win Rate 50.46 % | Pick Rate 11.10 % | Ban 35.10 % | Tendencia ↑3 | Tier S (Confidence High).

> [!TIP]
> **Variante lane 1v1 larga:** **Rod of Ages** (2 700) en lugar de Force of Nature cuando tu rival es AP de pelea sostenida (Vladimir-like, Mordekaiser sin grievous): 500 HP + 90 AP + Eternity convierten tu mana muerto en pool híbrido.

> [!DANGER]
> **CARRY-TOP (sesgo de daño, `PESOS_DPS`):** Chainlaced Crushers + Liandry's Torment + Riftmaker + Cryptbloom + Abyssal Mask + Iceborn Gauntlet (16 700 g) → AP 302 · DPSf **810 (+82 %)** · AoE 1 772 (+85 %) · R 1 327, **a cambio de VENT 18 774 (−66 %) y EHPp 18 226 (−44 %)**. Solo con equipo que te proteja (Yuumi/Karma/Seraphine) o vs comps sin %-vida. Es la build "AP puro" corregida: Abyssal (+12 % mágico de equipo) e Iceborn (slow + spellblade) sustituyen al glass-cannon inútil (Rabadon/Rylai).

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (barón, óptima del motor batch4)

| Slot | Ítem | Oro | Rol en la build |
|---|---|---|---|
| 1 (botas) | **Plated Steelcaps → ⬆️ Armored Advance** (min 10:00, MISMO slot; Mercury's/Chainlaced vs AP) | 2 200 | Block 10 % + escudo físico 722/12 s |
| 2 | **Heartsteel** | 3 000 | 700 HP + growth +15 %/proc (+425 HP min 20): alimenta R, Gargoyle, E y Demolish |
| 3 | **Unending Despair** | 3 000 | Anguish 243 AoE/4 s + cura 607: sustain de pelea que ninguna publicada tenía |
| 4 | **Amaranth's Twinguard** | 3 200 | Resistencias ×1.3 en ventana + 20 % tenacidad + 20 % tamaño |
| 5 | **Gargoyle Stoneplate** | 2 900 | Escudo activo 5 150 (6 695 con Warmog's Blessed) |
| 6 | **Force of Nature** | 2 800 | 400 HP + 60 MR (+70 Absorb) + 11 % MS: rotar y split más rápido |

> **Oro total: 17 100 g** · HP **8 093** · arm 274 · MR 316 · tamaño **+110 %** · rango 200 · **R 1 277 verdadero** · **VENT 55 591** · hps 197 · **Demolish 2 351** físico por golpe de torreta · cristal ≈ **770 verdadero** (11 % de 7 000).

### 0.2 El tamaño como CONSECUENCIA (indicación del autor)

| Build | HP | VENT (5 s) | DPS fighter | Veredicto |
|---|---|---|---|---|
| **Óptima batch4** | 8 093 | **55 591** | 444 | 0.816 (ref.) |
| Tanque puro (Randuin+Warmog, sin Unending/FoN) | 8 505 | 49 556 | 417 | 0.726 (−11.1 %) |
| Publicada barón 28/09 (HS+RoA+TW+Garg+Liandry) | 8 196 | 39 274 | 518 | 0.680 (−16.7 %) |
| AP puro | 6 728 | 14 534 | 733 | 0.633 (−22.5 %) |

Gigante sin ventana = derretible (el tanque puro tiene MÁS HP y MENOS supervivencia real); daño sin cuerpo = no llegas al segundo cast de E. La óptima compra **ventana y rotación**, y el +110 % de tamaño aparece solo (Feast 90 % + Twinguard 20 %), con sus dos subproductos útiles: rango 200 y cono de E a ~2.9 objetivos (A6).

### Tabla B — Ruta de compra cronológica (barón)

| # | Compra | Oro acum. | Minuto típico |
|---|---|---|---|
| 1 | Ruby Crystal + ward | 500 | 0:00 |
| 2 | **Plated Steelcaps** (T2) | 1 700 | ~5:00 |
| 3 | Giant's Belt + Kindlegem → **Heartsteel** | 4 700 | ~8:30 (regla: ≤ min 10-11, §5) |
| 4 | ⬆️ **Armored Advance** (mismo slot, +1 000 g) | 5 700 | 10:00 (regla T3) |
| 5 | Componentes → **Unending Despair** | 8 700 | ~13:00 |
| 6 | Giant's Belt + Chain Vest + Negatron → **Amaranth's Twinguard** | 11 900 | ~15:30 |
| 7 | Kindlegem + Chain Vest + Negatron → **Gargoyle Stoneplate** | 14 800 | ~18:00 |
| 8 | Winged Moonplate + Negatron + Ruby → **Force of Nature** | 17 600 | ~20:30 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|---|---|
| Keystone | **Grasp of Undying** (3.3 % HP máx + 10 HP permanente/proc: en top proca ~2/min con E empower) |
| Resolución 2 | **Demolish** (85 + 28 % HP máx = **2 351** por golpe de torreta con la óptima) |
| Resolución 3 | **Second Wind** vs poke · **Overgrowth** vs melee largo (+3 % HP máx a 30 stacks) |
| Inspiración | **Transcendence** (+10 AH) · **Axiom Arcanist** (+10 % R, −7 % CD por takedown) |
| Hechizos | **Flash + Ignite** (kill-pressure pre-6) o **Flash + Teleport** (split/impacto de mapa) |
| Skills | **E → Q → W** (R 5/9/13) |

### Resultado del modelo (nivel 15, min 20, S=15, R3)

| Escenario | Óptima barón | Publicada 28/09 | Tanque puro |
|---|---|---|---|
| **EHP físico / mágico** | 32 546 / 33 626 | 29 435 / 21 555 | 40 695 / 22 368 |
| **VENT (ventana 5 s)** | **55 591** | 39 274 | 49 556 |
| **DPS fighter / tanque / AoE** | 444 / 374 / 957 | 518 / 441 / 1 143 | 417 / 354 / 883 |
| **Sustain en pelea (hps)** | **197** | 46 | 66 |
| **Siege: Demolish + cristal** | 2 351 + 770 | ~1 900 + 700 (HP menor) | 2 208 + 770 |

> **Titular:** en barón la óptima del motor gana por **ventana + sustain + siege**: 55 591 de VENT significa que el enemigo necesita ~6.9× tu HP real en 5 s para borrarte, mientras tu Demolish de 2 351 y tu cristal de 770 verdadero convierten cada ola empujada en estructura rota desde 200 de rango.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios relevantes para barón
| Sistema | Cambio | Efecto |
|---|---|---|
| 7.3 · Torretas 7 000 HP + placas + cristales | El siege lento murió para todos… menos para quien tiene %-vida y Demolish: tu cristal (11 % de 7 000 = 770 verdadero) y tu Demolish escalan con HP, no con AD |
| 7.3 · Ítems tanque rework | Twinguard/Mantle/FoN/Kaenic nuevos o rehechos: la derivación 28/09 quedó pre-rework |
| 7.2c · E %-vida | 3.5 % + 0.6 %/stack: con S=15, cada pico de E pega 12.5 % de la vida máx del objetivo |
| 7.3a · AS ratio de tanques | Sin cambio directo a Cho'Gath; el nerf de early del rol pega a tu lane solo vs matchups de dive |

### 1.2 Matchups (lectura del motor con pesos por comp)
- **Vs AD melee (Garen/Darius-like):** default; Randuin's en slot 6 si critan.
- **Vs AP sostenido (Mordekaiser/Vladimir):** Rod of Ages por FoN ([!TIP]) o Kaenic si burstean.
- **Vs %-vida/executors (Vayne-like en side):** Gargoyle temprano + Mantle situacional.
- **Vs ranged kiting (Kayle/Quinn-like):** Chainlaced + Frozen Heart para cerrar la distancia con E.

---

## 2. FICHA MATEMÁTICA (spec 7.3a)

| Parámetro | Valor | Fuente |
|---|---|---|
| HP base / growth | 690 / +128 | ficha wr-meta + bundle |
| Armadura / MR | 46 (+4.5) / 40 (+2) | ídem |
| AS (apéndice 7.3) | 0.625 / 0.625 / BBA 0.28 / growth 0.008 → AS 15 = 0.87 (Ley 2 muerta) | apéndice AS |
| Rango | 125 + 7.7/stack (cap +75) → **200 a S=15** | apéndice TAMAÑO |
| Feast R3 | +160 HP/stack · +6 % tamaño (cap +135 %) | notas 7.3 |
| R | 600 + 50 % AP + 10 % HP bonus verdadero (vs minions/monstruos: 1 200 base) | notas 7.3 |
| E rank 4 | 95 + 30 % AP + (2.3 % + 0.6 %/stack) vida máx por pico | notas 7.2c |
| Demolish | 85 + 28 % HP máx → 2 351 con 8 093 HP | runas_7.3.md |

---

## 3. MODELO Y FÓRMULAS (motor `chogath_model.py`, batch4)

```text
VENT(5 s) = 0.5·(HP + esc_fís + curas)·(1+arm·1.3[Twinguard]/100)·block(1/0.93)
          + 0.5·(HP + esc_mag + curas)·(1+mr·1.3/100)                     # §1b.6.2
dps_rot   = [n_Q·(245+AP) + n_W·(230+0.7·AP) + n_picos·(95+0.3·AP + e_pct·HP_obj)]
            · amp(Liandry 1.051 / Riftmaker 1.054 / Abyssal 1.12) · mit_mág
          + autos·mit_fís + Immolate/Anguish/Grasp/thorns
R_exec    = (600 + 0.5·AP + 0.10·HP_bonus) · 1.10[Axiom]                  # verdadero
Demolish  = 85 + 0.28·HP_máx · mit_fís(torreta=0)                          # físico puro
```
Score §A.5: EHPp .15 + EHPm .15 + VENT .20 + R .15 + DPSf .10 + DPSt .10 + AoE .05 + hps .05 + util .05. Pesos alternos: `PESOS_AD/AP/TK/DPS` (variantes §8.4 y [!DANGER]).

### 3.1 Curva de stacks en top (cap 6/min de minions + herald)
Min 9.5: S=2 · min 12: S=4 · min 14.5: S=6 · min 17: S=7 · min 20: S=8 · min 22: S=10 (jungla va ~40 % adelante: ver hermano). Con S=8: tamaño +68 %, rango 187; con S=22 (partidas largas): +110 % cap de Twinguard incluido, HP 9 497 y VENT 65 915 en la misma build.

---

## 4. LEYES APLICADAS A CHO'GATH

- **Ley 0:** 6 slots (1 bota + 5), mejora ⬆️ en el mismo slot. PASS.
- **Ley 2 y Ley 4:** muertas (AS 0.87; AD 62+4/lvl sin ratios): controles Sterak's −7.0 %, Overlord's −9.7 %, Black Cleaver −9.8 %.
- **Ley 3b extendida (A10):** Sunfire + Hollow Radiance no stackean (Immolate).
- **Ley 6 con caducidad:** Heartsteel 1.º solo ≤ min 10-11; si no, Unending Despair 1.º (trayectoria medida: empate min 14, +2.2 % min 20, +3.7 % min 24).
- **Ley 7:** Demolish + cristales son tu segunda economía: una torreta a min 14 vale ~2 351 + 770 verdadero de cristal si la dejás viva a medias.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Veredicto top | Números |
|---|---|---|
| **Heartsteel** (≤ min 10-11) | ✅ Core 1 | Procs de lane constantes (minions + campeón): growth antes que en jungla |
| **Unending Despair** (lane desde atrás / partida lenta) | ✅ Core 1 alternativo | Anguish desde el primer all-in |
| **Rod of Ages** | ✅ vs AP sostenido ([!TIP]) | 500 HP + 90 AP + maná útil en lane de 10 min |
| **Sunfire/Hollow** | ⚠️ Uno solo, push-oriented | Immolate = ola rápida para TP; sin cura |
| **Ítems AD/crit** | ❌ Ley 4 | −7 a −10 % |

---

## 6. BUILD FINAL RANURA POR RANURA
Ver §0 Tabla A (justificaciones idénticas al hermano jungla, más:)
- **Force of Nature** en top: 11 % MS = rotar a dragón/herald y volver a la side-lane; el siege de 200 de rango necesita reposicionamiento constante.
- **Gargoyle** en top: el dive 1v2-1v3 de side-lane es tu escenario estándar; el escudo de 5 150 convierte un gank en un trade ganado.

### 🛡️ MATRIZ SITUACIONAL (último slot)
| Situación | Slot 6 | Impacto |
|---|---|---|
| Default mixto | **Force of Nature** | MR 316 + 11 % MS ✅ |
| Splitpush/siege puro | **Iceborn Gauntlet** | Spellblade AoE (118 + 25 % armadura bonus) + campo de slow + 30 AH ⚠️ |
| Presión/sustain | **Warmog's Armor** | VENT 56 377 máx · OOC 3.5 %/s entre olas ✅ |
| Vs AD/crit | **Randuin's Omen** | EHPp 38 587 (+18.6 %) ✅ |
| Vs AP burst | **Kaenic Rookern** | EHPm 38 697–40 041 + escudo 1 243 (Chainlaced) ✅ |
| Vs execute | **Mantle of the Twelfth Hour** | Lifeline <30 %: +250 HP + cura 1 638 ⚠️ |
| Vs curación | **Morellonomicon** | GW 50 % ⚠️ |
| Vs 2+ tanques MR | **Cryptbloom** / **Liandry's** | +30 % pen / Torment 2 % máx ⚠️ |

### RECHAZADOS
| Ítem | Motivo |
|---|---|
| ❌ **Spirit Visage** | Inexistente en 7.3 (errata D5 heredada del v1.2) |
| ❌ Sterak's / Overlord's / Cleaver / Titanic | Ley 4 / control −15.8 % |
| ❌ Sunfire + Hollow juntos | A10 |

---

## 7. RUNAS · HECHIZOS · HABILIDADES (detalle top)
- **Grasp + Demolish** es el par que convierte tu HP en mapa: cada proc de Grasp suma 10 HP permanente que Demolish multiplica por 0.28.
- **TP vs Ignite:** Ignite si tu rival es de lane cerrada (ejecuta con R a 1 277 + Ignite); TP si tu comp pelea objetivos sin ti (el cristal + Demolish pagan el mapa).
- **E → Q → W**; R en 5/9/13 (execute retroactivo de Feast, A1/D3).

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

| Build | Oro | VENT | DPSf | hps | Score rel. | Fuente |
|---|---|---|---|---|---|---|
| **Óptima batch4 (Tabla A)** | 17 100 | **55 591** | 444 | **197** | 0.816 | ⭐ LAB (motor nuevo) |
| Publicada barón 28/09 (HS+RoA+TW+Garg+Liandry) | 17 000 | 39 274 | 518 | 46 | 0.680 (−16.7 %) | 📌 publicada |
| Tanque puro | 16 950 | 49 556 | 417 | 66 | 0.726 (−11.1 %) | 🔬 LAB top-N |
| Comunidad wr-meta | 16 650 | 25 437 | 554 | 67 | 0.679 (−16.8 %) | 🌐 comunidad |
| Carry-top ([!DANGER]) | 16 700 | 18 774 | **810** | 77 | pesos DPS | 🔬 LAB variante |

### 8.4 Sensibilidades (idénticas al hermano: cuarteto robusto)
S=6/15/22 → mismo cuarteto Unending+Gargoyle+Twinguard+FoN; D2a óptima idéntica; D2b (peor caso Twinguard) → Kaenic Rookern; D4 (Axiom off) → R −9 %, óptima idéntica; pesos AD/AP solo mueven botas y slot 6.

---

## 9. PLAN DE JUEGO (barón)

### Early (0:00 – 9:00)
- **Trades de Grasp con E empower:** el cono pega al campeón y a la ola: push accidental gestionado con Q a la ola enemiga.
- **Feast a minions grandes QUE NO MATES (top también):** cap 6/min: deja los grandes al rival y recoge wraiths… en WR top, lasthit propio = stack 3 %: prioriza herald/dragón y campeones para stacks grandes.
- **R como finisher de gank propio o execute de dive:** 364 verdadero a min 6 ya mata trades ganados.

### Mid (9:00 – 16:00)
- **Heartsteel ≤ min 10-11 o Unending primero** (§5).
- **Siege con Demolish:** 2 351 por golpe de torreta = 3 golpes por ola con placa; el cristal (770 verdadero) se detona con R+Q desde 200 de rango sin exponerte.
- **TP a dragón con Twinguard cerca:** tu ventana de 5 s llega ANTES que el burst enemigo al objetivo.

### Late (16:00+)
- **Split de ventana:** 1v1 te lo gana cualquiera que no traiga %-vida; 1v2 con Gargoyle+Twinguard es trade ganado o TP enemigo gastado.
- **Teamfight: entras segundo**, R al carry con menos de 1 277 HP efectivos o al frontline si el carry está protegido (el %-vida de E lo derrite igual).

### Reglas del parche
| Regla | Impacto |
|---|---|
| Torretas 7 000 + cristales | Demolish+%HP y cristal verdadero: tu siege escala con la build, no con AD |
| Placas decaen desde 5:00 | Primera placa antes de 5:00 con E+autos; después, Demolish puro |
| Botas T3 ≥ 10:00 | ⬆️ Armored Advance estricto a las 10:00 |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias
Notas oficiales 7.3/7.3a + apéndice AS · apéndice ESCALADO_DE_TAMAIO §1b del lab · items_7.3.csv (186) + runas_7.3.md (WR 7.3, no desktop) · ficha wr-meta 24/09 · win rates vigía 09/10.

### Discrepancias (protocolo §D)
| # | Tema | Resolución |
|---|---|---|
| D1/D3/D4/D7 | Caps/retroactividad/Axiom/rango de R | Modelado declarado; sensibilidades sin cambio de ranking; verificar en juego |
| D2 | Twinguard total vs bonus | Convención total; peor caso → Kaenic (plan B documentado) |
| D5 | Spirit Visage en v1.2 | ERRATA: inexistente en 7.3; eliminado de matriz y apéndices |
| D6 | ❌ publicados a FoN/Warmog | Válidos para Ornn/Rammus; rehabilitados para Cho'Gath con números |
| D9 | Absolutos v1.2 (VENT ~18 000-39 000) | Reemplazados por fórmula §1b.6.2 completa (55 591); relativas mantenidas |

### Validación del modelo
- 122 632 builds legales evaluadas (Ley 0 + A10), presupuesto 17 250 g.
- `python3 model/chogath_model.py` reproduce tablas y sensibilidades (`model/chogath_resultados.txt`).
- Ítems/runas verificados contra CSV/md oficiales de WR 7.3 (indicación del autor: nada de desktop).

---

## APÉNDICE A — POOL: VEREDICTOS (idénticos al hermano jungla, más:)
| Ítem | Veredicto top | Nota |
|---|---|---|
| Rod of Ages (2 700) | ✅ vs AP sostenido | Único rol donde el mana vive |
| Iceborn Gauntlet (3 000) | ⚠️ splitpush | Spellblade AoE + slow-field |
| Resto del pool | ver Apéndice A del hermano | — |

## APÉNDICE B — RUTA BARÓN (condensada)
```text
Ruby (0:00) → Plated (5:00) → Heartsteel (8:30, regla min 10-11) → ⬆️ Armored (10:00)
→ Unending Despair (13:00) → Amaranth's Twinguard (15:30) → Gargoyle (18:00)
→ Force of Nature (20:30)   [RoA por FoN vs AP sostenido · Warmog's si vas arriba]
```

---

## Pie de página

*Reporte regenerado el 11/10/2026 con el motor rotación-tanque batch4 sobre datos 7.3+7.3a. WR-LAB v1.17. Tamaño = consecuencia de daño+durabilidad (score §A.5 con VENT .20 + R .15 + DPS .25). Si Riot publica 7.3b/7.4, regenerar antes de republishar.*

**Referencias y créditos**
- Notas oficiales 7.3/7.3a y apéndices — © Riot Games, Inc.
- Ficha wr-meta Cho'Gath 24/09 + win rates del vigía 09/10 + ficha analítica del autor 12/10 (A1–A14, D1–D9).
- Motor batch4: `model/chogath_model.py` + `model/chogath_resultados.txt`.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliada, patrocinada ni respaldada por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.
