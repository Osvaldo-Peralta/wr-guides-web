---
tags:
  - Jungla
  - Tank
  - AP-vida
  - Jungle
version: 1.4
Status: Beta
champion: Cho'Gath
slug: chogath-titan-de-la-jungla
role: jungla
variant: titan-de-la-jungla
patch: "7.3+7.3a"
archetype: "Tanque AP %-vida (Feast)"
engine: rotacion-tanque
custom: false
generate: manual
mode: sr
published_at: "2026-09-28"
updated_at: "2026-10-12"
verification: SIN_IMPACTO
verified_patch: "7.3b"
---
**Fecha del análisis:** 11/10/2026 (regeneración v1.3 con motor dedicado batch4)
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** Jungla (variante Top en `chogath-titan-del-baron`)
**Arquetipo:** Tanque de rotación AP %-vida: el daño es Q/W/E + R verdadero + % de vida máxima; el tamaño es CONSECUENCIA de daño+durabilidad, no objetivo (ver §0.2).
**Enfoque:** Maximizar la ventana de supervivencia (EHP en ventana de 5 s) y el execute de R sin sacrificar daño de rotación: el cuarteto Unending Despair + Gargoyle + Amaranth's Twinguard + Force of Nature aparece en las 10 mejores builds de 122 632 evaluadas y sobrevive a todas las sensibilidades.


> [!NOTE]
> **Estado Meta Actual (Diamond+, 09/10/2026):** JUNGLE Win Rate 50.91 % | Pick Rate 8.67 % | Ban 35.42 % | Tendencia ↑3 | Tier S (Confidence High). SOLO (hermano): 50.46 % | 11.10 % | ban 35.10 % | ↑3. Fuente: `data/estructurada/champion_winrates.csv` (vigía 2×/día).

> [!TIP]
> **Variante de ventanas/teamfight:** si tu comp necesita frontline de pelea larga en vez de tempo de objetivos, usá la óptima del hermano barón (Armored Advance + Heartsteel + Unending + Twinguard + Gargoyle + FoN): VENT 55 591 vs 24 798, a cambio de clear 10.6 s vs 6.5 s y dragón 7.5 s vs 5.7 s. El punto medio (VENT 37 649 · clear 7.4 s) es Chainlaced + Sunfire + Liandry + FoN + Unending + Twinguard (#5 del motor jungla).
>
> **Variante de presión de mapa:** cambiar Force of Nature por **Warmog's Armor** sube la ventana a **56 377** (la más alta de toda la búsqueda: escudo de Gargoyle 5 150 → 6 695 por Blessed +30 %) y el sustain fuera de pelea a 3.5 %/s entre camps: −1.7 % de score vs la default, legítima cuando vas arriba en el marcador.

> [!WARNING]
> Verificación en juego pendiente (motor nuevo, supuestos A1–A14): **D2** (Twinguard Endurance ×1.3 a resistencias TOTALES vs solo bonus — en el peor caso Twinguard sale y entra Kaenic Rookern), **D1** (cap del %-vida de E vs minions/monstruos), **D3** (Feast retroactivo al subir R), **D4** (Axiom Arcanist sobre daño verdadero de R: −9 % de R si no).

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (jungla, óptima del MÓDULO JUNGLA batch4 — deriva de la de barón)

| Slot | Ítem | Oro | Rol en la build |
|---|---|---|---|
| 1 (botas) | **Mercury's Treads → ⬆️ Chainlaced Crushers** (min 10:00, MISMO slot; Armored Advance vs AD) | 2 200 | Tenacidad 30 % + 150 HP: el clear no teme CC pero los skips sí |
| 2 | **Heartsteel** | 3 000 | Growth +15 %/proc: en jungla proca SOLO en campeones/épicos → se completa 3.º, no 2.º |
| 3 | **Sunfire Aegis** | 2 900 | Immolate ×1.3 vs monstruos: el clear pasa de 10.6 s a ~7 s |
| 4 | **Liandry's Torment** | 3 000 | Torment 2 % máx/s en camps Y campeones: el motor de clear+daño del rol |
| 5 | **Riftmaker** | 3 100 | Void Corruption ×1.054 + omnivamp 10 %: netHP positivo en clears largos |
| 6 | **Unending Despair** | 3 000 | Anguish en campeones (no en camps): el sustain de pelea que cierra el score |

> **Oro total: 17 200 g** · HP ~7 300 · **VENT 24 798** · **R 1 426 verdadero** · DPSf **702** · **clear 6.5 s** · **dragón TTK 5.7 s** · Smite+R 3 290-3 337 · netHP/clear **+1 169**. Score jungla (tanque×0.75 + clear .13 + épicos .12): 0.685; la óptima de barón queda #23 en jungla (0.678, −1.1 %) con clear 10.6 s.

### 0.2 El tamaño como CONSECUENCIA (indicación del autor)

| Build | HP | VENT (5 s) | DPS fighter | R exec | Veredicto del score |
|---|---|---|---|---|---|
| **Óptima batch4** | 8 093 | **55 591** | **444** | 1 277 | 0.816 (ref.) |
| Tanque puro (sin Unending/FoN: Randuin+Warmog) | 8 505 | 49 556 | 417 | 1 323 | 0.726 (−11.1 %) |
| AP puro (glass cannon) | 6 728 | 14 534 | 733 | 1 397 | 0.633 (−22.5 %) |
| Publicada jungla 28/09 | 8 711 | 26 292 | 554 | 1 384 | 0.662 (−18.9 %) |

Ser gigante sin ventana no sirve (tanque puro pierde 6 000 de VENT por 400 HP); ser puro daño tampoco (AP puro vive 1.3 s menos en cada pelea). **La óptima es el punto donde el HP comprable, los escudos en ventana y la rotación se multiplican**: el tamaño (+110 %) llega solo, como subproducto de Feast + Twinguard, y cada punto de tamaño agrega rango de E y objetivos de cono (A6: ~2.9 objetivos a S=15).

### 0.3 Tempo vs ventana (por qué la jungla deriva de barón)

| Build | VENT 5 s | DPS fighter | Clear 4 camps | Dragón TTK | Smite+R | Score jungla |
|---|---|---|---|---|---|---|
| **Óptima jungla batch4 (Tabla A)** | 24 798 | **702** | **6.5 s** | **5.7 s** | 3 290 | **0.685** |
| Óptima barón evaluada en jungla | **55 591** | 444 | 10.6 s | 7.5 s | 3 287 | 0.678 (#23) |
| Publicada jungla 28/09 | 26 292 | 554 | **4.5 s** | 5.9 s | **3 444** | ~0.67 |
| Híbrida #5 (Sunfire+Liandry+FoN+UD+TW) | 37 649 | 547 | 7.4 s | 6.0 s | 3 240 | 0.681 |

La publicada cleara más rápido (doble Immolate Hollow+Liandry sin Riftmaker) pero cede R y DPS de campeón; la de barón gana peleas y pierde el mapa. **La derivación jungla es el punto medio que el score del rol pide**: clear suficiente (6.5 s), épicos primeros (5.7 s) y el doble de DPS de campeón que la de barón.

### Tabla B — Ruta de compra cronológica (jungla, checkpoints del módulo J8)

| # | Compra | Oro acum. | Minuto típico |
|---|---|---|---|
| 1 | Ruby Crystal + ward | 500 | 0:00 |
| 2 | **Mercury's Treads** (T2; Plated vs jungla AD) | 1 700 | ~4:30 (CPJ1: Liandry 1.º mide 0.783) |
| 3 | Fiendish + Kindlegem → **Liandry's Torment** | 4 700 | ~9:00 |
| 4 | Kindlegem + Chain Vest → **Unending Despair** | 7 700 | ~12:00 (CPJ2 #1: 0.728) |
| 5 | ⬆️ **Chainlaced Crushers** (mismo slot, +1 000 g) | 8 700 | ~14:00 |
| 6 | Giant's Belt + Ruby → **Sunfire Aegis** | 11 600 | ~16:00 (CPJ3: Sunfire+Liandry+FoN lideran) |
| 7 | Fiendish + Gem → **Riftmaker** | 14 700 | ~18:30 (CPJ4 #1: 0.688) |
| 8 | Giant's Belt → **Heartsteel** | 17 700 | ~21:00 (growth tardío: proca solo en champions/épicos) |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|---|---|
| Keystone | **Grasp of Undying** (3.3 % HP máx + cura 1.3 % + 10 HP permanente por proc: proca en ganks e invades; el motor la asume como baseline, A5) |
| Resolución 2 | **Demolish** solo si rotás a side-lane; si no, **Font of Life** (protege al carry en skips) |
| Resolución 3 | **Second Wind** vs poke de jungla enemiga · **Overgrowth** en partidas largas (+3 % HP máx) |
| Inspiración | **Transcendence** (+10 AH a lvl 5+) · **Axiom Arcanist** (+10 % daño de R y −7 % CD por takedown: D4) |
| Hechizos | **Smite + Flash** |
| Skills | **E → Q → W** (R 5/9/13): E maxea primero (3.5 % + 0.6 %/stack de Feast desde 7.2c) |

### Resultado del modelo (nivel 15, min 20, Feast 15 stacks, R3, fight 10 s)

| Escenario | Óptima jungla | Publicada 28/09 | Comunidad wr-meta |
|---|---|---|---|
| **EHP físico / mágico** | 32 546 / 33 626 | 22 386 / 27 919 | 18 206 / 30 532 |
| **VENT (ventana 5 s, mix 50/50)** | **55 591** | 26 292 | 25 437 |
| **DPS fighter / tanque / AoE** | 444 / 374 / 957 | 554 / 467 / 1 144 | 554 / 467 / 1 144 |
| **Sustain en pelea (hps)** | **197** | 67 | 67 |
| **R execute (verdadero)** | 1 277 | 1 384 | 1 384 |
| **Smite + R vs épico (min 20)** | **3 290** | 3 496 | 3 496 |

> **Titular:** la publicada sacrificaba VENT y sustain por R y DPS de quemado; el motor batch4 invierte la prioridad: **sobrevivir 2.1× más en la ventana** (55 591 vs 26 292) con −20 % de DPS de rotación y −6 % de execute. En jungla, donde los objetivos se pelean en ventanas de 4-6 s, esa es la troca que gana partidas: el robo de épico se juega con Smite+R+posición, no con 100 puntos de execute.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos y sistémicos relevantes para jungla

| Sistema | Cambio | Efecto en Cho'Gath jungla |
|---|---|---|
| Hotfix 7.3a | Nerf de early al rol (−15–20 % de presión pre-6) | Rutas de clear lentas: la build empieza a existir en min 8-9, no antes |
| 7.3 · Smite | Upgrades 600 → 1 000 (min 8) → 1 400 (min 14) | Umbral Smite+R por minuto en §3.3: el robo de Baron madura en min 14+ |
| 7.3 · Torretas | 7 000 HP + placas + Cristales (3.3–18.9 %) | El hermano de top los siega; en jungla, el cristal de tu side-lane se detona con R+Q desde 200 de rango |
| 7.3 · Ítems | Reworks de Mantle/Twinguard/FoN/Sunfire/Frozen Heart/Abyssal/Winter | El pool tanque cambió de forma: por eso la derivación vieja quedó obsoleta |
| 7.2c · E | 3.5 % + 0.6 %/stack de Feast | El %-vida de E es el daño que escala con la build de HP: double-dip |

### 1.2 Por qué el ban 35.10 % no baja
Feast sin cap + execute de R verdadero + tamaño que anchoa el cono de E: el kit no tiene counter-play de daño (solo de ritmo). El motor solo explica qué hacer con eso: convertir cada stack en ventana de pelea, no en HP decorativo.

---

## 2. FICHA MATEMÁTICA (spec 7.3a)

| Parámetro | Valor | Fuente |
|---|---|---|
| HP base / growth | 690 / +128 | ficha wr-meta 24/09 + bundle |
| Armadura / MR base | 46 (+4.5) / 40 (+2) | ídem |
| AD / growth | 62 / +4 (Ley 4: muerto para builds AD) | ídem |
| AS (apéndice oficial 7.3) | ratio 0.625 · base 0.625 · BBA 0.28 · growth 0.008 (Ley 2 muerta: AS 15 = 0.87) | apéndice AS |
| Rango de ataque | 125 + min(7.7·S, 75) → **200 a S=15** | ficha + apéndice TAMAÑO |
| Feast (R3) | +160 HP/stack · +6 % tamaño/stack (cap +135 %) · +7.7 rango/stack (cap +75) | notas 7.3 |
| R execute | 300/450/600 + 50 % AP + **10 % HP bonus** (verdadero) · vs monstruos 1 200 + 50 % AP + 10 % HP bonus | notas 7.3 |
| E (rank 4) | 95 + 30 % AP + (2.3 % + 0.4 %/rank + 0.6 %/stack) de vida máx por pico | notas 7.2c/7.3 |

---

## 3. MODELO Y FÓRMULAS (motor `chogath_model.py`, batch4)

```text
# Ventana de 5 s (protocolo ESCALADO_DE_TAMAIO §1b.6.2 — la métrica del "tamaño útil"):
VENT = 0.5·(HP+escudos_fís+curas_5s)·(1+arm_tw/100)·block + 0.5·(HP+escudos_mag+curas_5s)·(1+mr_tw/100)
  con arm_tw/mr_tw = resistencias ×1.3 si Twinguard Endurance activa (A2, D2)
  escudos: Gargoyle (100+90% HP bonus, ponderado 75% por decaimiento, A9) · botas T3 · Kaenic · Sterak
  curas_5s: Grasp (1.7 procs) + Anguish (Unending) + Void Corruption, × Blessed de Warmog

# Rotación en fight de 10 s (Q4/W4/E4, CD con haste; E limitado por AS 0.87):
dps = [n_Q·(245+AP) + n_W·(230+0.7·AP) + n_picos·(95+0.3·AP) + n_picos·e_pct·HP_enemigo
       + Immolate/Torment/Anguish/Grasp/thorns] · amp_mágico · mit_mágica  +  autos·mit_física
# R va aparte (CD 50 s): execute verdadero = (600 + 0.5·AP + 0.10·HP_bonus)·(1.10 con Axiom, A3)
# Jungla: Smite+R = upgrade(min) + R_monstruo(1 200 + 0.5·AP + 0.10·HP_bonus)·1.10
```

### 3.1 Score del arquetipo (TEMPLATE §A.5 tanque)
EHP físico .15 + EHP mágico .15 + **VENT .20** + execute R .15 + DPS fighter .10 + DPS tanque .10 + DPS AoE .05 + sustain .05 + utilidad .05, normalizado por escenario. Variantes de pesos: `PESOS_AD` (vs comp físico), `PESOS_AP`, `PESOS_TK` (doble tanque), `PESOS_DPS` (carry-top, ver [!DANGER] del hermano barón).

### 3.2 Curva de stacks y execute por minuto (ruta de §Tabla B)

| Min | Ítems completos | Lvl | S jungla | HP | R campeón | R monstruo | Smite+R |
|---|---|---|---|---|---|---|---|
| 6 | Plated T2 | 6 | 0 | 1 636 | 364 | 1 354 | 1 954 |
| 10 | Heartsteel | 9 | 4 | 3 051 | 642 | 1 467 | 2 467 |
| 12 | +T3 | 10 | 6 | 3 585 | 687 | 1 512 | 2 512 |
| 14 | +Unending Despair | 12 | 8 | 4 931 | 972 | 1 632 | 3 032 |
| 17 | +Amaranth's Twinguard | 13 | 10 | 5 706 | 1 043 | 1 703 | 3 103 |
| 20 | +Gargoyle Stoneplate | 14 | 12 | 6 364 | 1 101 | 1 761 | 3 161 |
| 22 | +Force of Nature | 15 | 14 | 7 661 | 1 230 | 1 890 | 3 290 |

(Jungla acumula Feast ~40 % más rápido que top: camps sin cap de minions. S-top de referencia: 2/4/6/7/8/10 en los mismos minutos.)

### 3.3 Reglas de objetivo derivadas
- **Dragón/Herald antes de min 14:** Smite 1 000 + R ≤ 1 512 = 2 512 verdadero: no disputes sin ventaja de visión o sin tu R listo (CD 50 s).
- **Min 14+:** 3 032–3 290 verdadero cubre el execute de dragón anciano/Baron en la mayoría de states; con Axiom y 2+ takedowns previos, el −7 % de CD de R acorta la ventana de disputa.
- **Steal defensivo:** R monstruo es verdadero: el tanque enemigo NO lo mitiga; posiciona el cast desde 200 de rango + Feast.

---


### 3.4 Módulo jungla (batch4, `model/chogath_jungla.py`)

```text
clear_s   = 9 500 HP (4 camps proxy, arm/MR 30 "increased monster resistances" 7.3)
            / [rotación Q/W/E (E base capada 100 vs monstruos — D1/J) + Immolate×1.25-1.3
               + Torment 2 %/s + autos + 2×Smite(execute 600/1 000/1 400 + burn 3 ticks)]
netHP     = sustain recibido: daño monstruos (−50 % al smiter: 500→250 dps) − Carnivore − regen
epic_TTK  = dragón 10 000 HP (60/60) · Baron 15 000 (60/60) con Smite+R+Torment+rotación
score_jg  = 0.75·score_tanque§A.5 + 0.13·clear + 0.12·épicos      # pesos J declarados
```
Sensibilidad D1 (E %-vida capado vs monstruos): la óptima NO cambia (misma 6 slots); el clear sube 6.5→8.5 s y el dragón 5.7→13.5 s en TODAS las builds por igual: es un factor de escala, no de ranking.


## 4. LEYES APLICADAS A CHO'GATH

- **Ley 0 — Slots:** `validate` 6 entradas (1 bota T3 + 5 ítems); la mejora ⬆️ vive en el slot de botas. PASS.
- **Ley 2 — AS:** muerta para Cho'Gath (AS 15 = 0.87; el cono de E limita los picos, no la AS). Ninguna build con AS item entra al top-10.
- **Ley 4 — AD/crit muertos:** controles medidos: Sterak's −7.0 %, Overlord's Bloodmail −9.7 %, Black Cleaver −9.8 %, crit/AS rechazo estructural. El AD base 62+4/lvl no alimenta nada relevante.
- **Ley 3b extendida (A10):** Sunfire Aegis y Hollow Radiance NO stackean (misma pasiva Immolate) → exclusividad declarada en el motor (`EXCLUSIVOS`).
- **Ley 6 — Timing con fecha de caducidad:** Heartsteel 1.º **solo si se completa ≤ min 10-11** (hallazgo 4 de la ficha: a min 9:30 el snapshot lo pone #30; la trayectoria lo recupera en min 14 y lo gana en min 20 +3.7 %). Partida retrasada o desde atrás → **Unending Despair 1.º**.
- **Ley 7 — Economía:** quest/jungla: camps grandes sin lasthit propio no aplica; el growth de Heartsteel (+425 HP a min 20) es la segunda "quest" de la build.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Veredicto jungla | Números |
|---|---|---|
| **Heartsteel** (completo ≤ min 10-11) | ✅ Core 1 | Growth +15 %/proc: +425 HP a min 20 que multiplican R/Gargoyle/E; proc cada 20 s en camps |
| **Unending Despair** (partida lenta/atrás) | ✅ Core 1 alternativo | Anguish inmediato: 243 AoE + 607 cura/4 s desde el primer fight; sin fecha de caducidad |
| **Sunfire Aegis / Hollow Radiance** | ⚠️ Solo uno (A10) | Immolate = clear más rápido; pierden contra Unending en pelea (sin cura) |
| **Rod of Ages** | ❌ jungla | Mana casi muerto (rotación corta) y llegada tarde: el hermano barón sí lo usa |
| **Ítems AD/crit** | ❌ Ley 4 | Controles −7 a −10 % |

---

## 6. BUILD FINAL RANURA POR RANURA

Ver §0 Tabla A. Justificación por slot:
- **Armored Advance:** Block 10 % permanente (A8: cubre ~70 % del DPS físico entrante) + escudo 722/12 s; vs junglas AP → **Mercury's → Chainlaced Crushers**.
- **Heartsteel:** ver §5; su proc físico (140 + 3.5 % HP) además staquea en invades.
- **Unending Despair:** el único sustain EN pelea del pool tanque (197 hps vs 46-67 de publicadas).
- **Amaranth's Twinguard:** capstone 7.3: la ventana existe por su ×1.3 (D2: en el peor caso sale → Kaenic Rookern, §8.4).
- **Gargoyle Stoneplate:** el escudo de 5 150 es 64 % de tu HP base: el activo más eficiente por oro del juego en un campeón con HP infinito por Feast.
- **Force of Nature:** rehabilitada por el motor (hallazgo 2 de la ficha): 400 HP + 60 MR + Absorb + 11 % MS; el ❌ publicado aplicaba a Ornn/Rammus (no double-dipean HP).

### 🛡️ MATRIZ SITUACIONAL (último slot, con números del motor)

| Situación | Slot 6 | Impacto medido |
|---|---|---|
| Default mixto | **Force of Nature** | MR 316 · EHPm 33 626 · 11 % MS ✅ |
| Presión de mapa / sustain | **Warmog's Armor** | VENT 56 377 (máx) · hps 240 · OOC 3.5 %/s ✅ |
| Vs comp AD/crits (Jinx/Yunara/Kalista) | **Randuin's Omen** | EHPp 38 587 (+18.6 %) · variante completa: −FoN y botas Armored ✅ |
| Vs AS + lifesteal | **Thornmail** | EHPp 34 471 + GW 50 % ⚠️ |
| Vs AP burst (Syndra/Ahri/Norra) | **Kaenic Rookern** | EHPm 38 697–40 041 + escudo mágico 1 243 pre-fight (botas Chainlaced) ✅ |
| Vs execute/burst (<30 % HP) | **Mantle of the Twelfth Hour** | Lifeline: +250 HP + cura 1 638 + 10 % tamaño/tenacidad/MS ⚠️ |
| Vs 2+ tanques MR-stacking | **Cryptbloom** o **Liandry's Torment** | +30 % pen mágica (+36.5 % vs 200 MR) / Torment 2 % máx/s ⚠️ |
| Vs curación (Mundo/Soraka/Yuumi) | **Morellonomicon** | GW 50 % (−10 % de tu daño sostenido: citar coste) ⚠️ |

### RECHAZADOS (con motivo numérico)
| Ítem | Motivo |
|---|---|
| ❌ **Spirit Visage** | NO EXISTE en la BD de 186 ítems de 7.3 (errata D5 de la ficha: estaba en la matriz del reporte v1.2). Sustitutos: Kaenic Rookern / Warmog's (Blessed) |
| ❌ **Sterak's / Overlord's / Black Cleaver** | Ley 4: −7.0 / −9.7 / −9.8 % de score |
| ❌ **Sunfire + Hollow Radiance juntos** | Exclusividad Immolate (A10/Ley 3b extendida) |
| ❌ **Titanic Hydra** | Control −15.8 %: su AoE de HP no compensa el slot de Unending/FoN en jungla |

---

## 7. RUNAS · HECHIZOS · HABILIDADES (detalle jungla)

- **Grasp of Undying** en jungla: proca en ganks/invades/duelos de objetivo (~1-2 procs/min real vs 2/min del supuesto A5: el HP permanente llega más lento, no cambia rankings — sensibilidad corrida).
- **Axiom Arcanist** es la inspiración correcta: +10 % al execute de R (tu herramienta de objetivo) y −7 % de CD de R por takedown en peleas de dragón encadenadas. Alternativa **Revitalize** si tu comp juega alrededor de tus curas (Yuumi/Seraphine).
- **E → Q → W**: E maxea primero (%-vida con Feast); Q segundo (setup de gank); W último (zona defensiva).
- R en 5/9/13 siempre: el execute escala 80→120→160 HP/stack de Feast **retroactivo** (A1/D3).

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

| Build | Oro | VENT | DPSf | R exec | hps | Score rel. | Fuente |
|---|---|---|---|---|---|---|---|
| **Óptima batch4 (Tabla A)** | 17 100 | **55 591** | 444 | 1 277 | **197** | 0.816 | ⭐ LAB (motor nuevo) |
| Tanque puro (HS+TW+Garg+Warmog+Randuin) | 16 950 | 49 556 | 417 | 1 323 | 66 | 0.726 (−11.1 %) | 🔬 LAB top-N |
| Publicada jungla 28/09 (HS+Hollow+Liandry+FoN+Warmog) | 16 650 | 26 292 | 554 | 1 384 | 67 | 0.662 (−18.9 %) | 📌 publicada |
| Comunidad wr-meta (Chainlaced+HS+Hollow+Liandry+FoN+Warmog) | 16 650 | 25 437 | 554 | 1 384 | 67 | 0.679 (−16.8 %) | 🌐 comunidad |
| Titanic Hydra control | 17 300 | 39 008 | 552 | 1 321 | 45 | 0.687 (−15.8 %) | 🔬 LAB control |
| AP puro (Liandry+Riftmaker+Cryptbloom+Rabadon+Rylai) | 17 400 | 14 534 | 733 | 1 397 | 77 | 0.633 (−22.5 %) | 🔬 LAB control |

### 8.4 Sensibilidades que sostienen la derivación
- **Stacks:** S=6/min 13 → el cuarteto Unending+Gargoyle+Twinguard+FoN sigue arriba (Heartsteel entra cuando existe trayectoria: S=15+). S=22/min 26 → misma óptima con HP 9 497 y VENT 65 915.
- **D2a (Twinguard ×1.3 solo bonus):** óptima idéntica. **D2b (sin multiplicador, peor caso):** Twinguard sale → entra **Kaenic Rookern** (16 700 g): es tu plan B si en juego D2 resulta bonus-only.
- **D4 (Axiom off):** R 1 277 → 1 161 (−9 %); óptima idéntica.
- **Pesos AD/AP/doble-tanque:** el cuarteto sobrevive; solo cambian botas y slot 6 (matriz §6).

---

## 9. PLAN DE JUEGO (jungla)

### Early (0:00 – 9:00)
- **Clear de E + autos con windup corto:** el cono de E pega a todos los camps; W debajo del camp grande para el segundo tick.
- **Primer gank con Q desde arbusto + Flash si hay root aliado:** sin slow propio, tu engage es lectura, no stats.
- **Feast sin cap en camps:** los épicos y camps grandes dan stack seguro: tu S jungla va ~40 % adelante que la de top (Tabla §3.2).

### Mid (9:00 – 16:00)
- **Min 8:30 Heartsteel completo** (regla §5): si vas atrás, Unending primero y Heartsteel segundo.
- **Objetivos con R listo:** consulta la tabla Smite+R (§3.2): antes de min 14 tu robo es 2 467-2 512 — disputa solo con visión y cooldowns enemigos gastados.
- **Invade con Twinguard cerca de completarse:** la ventana de 5 s es tu duelo de jungla.

### Late (16:00+)
- **Frontline de ventana:** entras SEGUNDO (el primero come el burst sin Twinguard activa); Gargoyle al ser focoado = 5 150 de escudo.
- **R como execute y como steal:** doble uso, mismo cast: verdadero en ambos casos.
- **Split de emergencia:** con Demolish (si lo llevaste) y 200 de rango, una side-lane tuya cuesta torre + cristal (770 verdadero al cristal, 11 % de 7 000).

### Reglas del parche que cambian el macro
| Regla | Impacto |
|---|---|
| Smite upgrades 600/1 000/1 400 | Umbrales de robo por minuto en §3.2/§3.3 |
| Torretas 7 000 HP + cristales | R+Q detona cristal desde rango Feast: objetivo secundario en skips |
| Minions 60 % daño a campeones | Tu cono de E en ola empujada limpia y daña: push accidental = gestión de ola |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias
| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3/7.3a + apéndice AS | 21/09 y 29/09/2026 | Feast, R execute, E %-vida, AS 0.625/0.28/0.008 |
| Apéndice ESCALADO_DE_TAMAIO §1b del lab | v1.15 | Protocolo de ventanas y reglas de tamaño |
| items_7.3.csv (186 ítems) + runas_7.3.md | vigía | Pool legal WR 7.3 (Spirit Visage inexistente: D5) |

### Discrepancias y erratas (protocolo §D)
| # | Tema | Resolución |
|---|---|---|
| D1 | Cap del %-vida de E vs monstruos | Modelado sin cap en la base; afecta clear, no rankings. Verificar en juego |
| D2 | Twinguard ×1.3 total vs bonus | Convención total; peor caso → Kaenic (óptima resto idéntica). **Prioridad alta de verificación** |
| D3 | Feast retroactivo al subir R | Modelado retroactivo; si no, −480 HP a S=22, rankings sin cambio |
| D4 | Axiom sobre verdadero de R | Modelado sí; sensibilidad −9 % de R, óptima idéntica |
| D5 | **Spirit Visage en el reporte v1.2** | ERRATA: no existe en 7.3. Eliminado; sustitutos Kaenic/Warmog |
| D6 | ❌ publicados a FoN/Warmog | Válidos para Ornn/Rammus; el motor los rehabilita para Cho'Gath con números (§6/§8) |
| D9 | Cifras absolutas v1.2 (HP ~6 500, VENT ~18 000) | Reemplazadas por las del motor con fórmula §1b.6.2 completa; las conclusiones relativas se mantienen |

### Validación del modelo
- Búsqueda exhaustiva: **122 632 builds legales** (Ley 0 + exclusividad Immolate), presupuesto 17 250 g.
- `python3 model/chogath_model.py` reproduce todas las tablas (salida en `model/chogath_resultados.txt`).
- Controles Ley 4 y sensibilidades S=6/15/22, D2a/D2b, D4 y 4 juegos de pesos: §8.4.
- Ítems y runas verificados contra `items_7.3.csv` y `runas_7.3.md` (WR 7.3, no desktop).

---

## APÉNDICE A — POOL TANQUE: VEREDICTOS DEL MOTOR

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Heartsteel (3 000) | ✅ Core con fecha | ≤ min 10-11; growth +425 HP min 20 |
| Unending Despair (3 000) | ✅ Core | Anguish = sustain de pelea único |
| Amaranth's Twinguard (3 200) | ✅ Core (D2) | Peor caso → Kaenic |
| Gargoyle Stoneplate (2 900) | ✅ Core | Escudo 5 150; 6 695 con Warmog |
| Force of Nature (2 800) | ✅ Default 6.º | Rehabilitada (§6) |
| Warmog's Armor (2 850) | ✅ Presión de mapa | VENT máx 56 377 |
| Randuin's Omen (2 800) | ✅ vs AD/crit | EHPp +18.6 % |
| Kaenic Rookern (2 800) | ✅ vs AP burst | Escudo 1 243 pre-fight |
| Sunfire Aegis / Hollow Radiance | ⚠️ Uno solo | A10 Immolate |
| Mantle of the Twelfth Hour (2 550) | ⚠️ vs execute | Lifeline <30 % |
| Frozen Heart (2 550) | ⚠️ vs AS pesada | −25 % AS en 650 u |
| Thornmail (2 700) | ⚠️ vs lifesteal | GW + thorns |
| Cryptbloom / Liandry's / Morello | ⚠️ Situacionales AP | Ver matriz §6 |
| Rod of Ages (2 700) | ❌ jungla / ✅ barón | Mana muerto en jungla |
| Sterak's / Overlord's / Black Cleaver / Titanic Hydra | ❌ | Ley 4 / control −15.8 % |
| Spirit Visage | ❌ **inexistente en 7.3** | Errata D5 |

## APÉNDICE B — RUTA JUNGLA (condensada)
```text
Ruby (0:00) → Plated Steelcaps (4:30) → Heartsteel (8:30, regla min 10-11)
→ ⬆️ Armored Advance (10:00) → Unending Despair (13:00) → Amaranth's Twinguard (15:30)
→ Gargoyle Stoneplate (18:00) → Force of Nature (20:30)   [o Warmog's si vas arriba]
```

---

## Pie de página

*Reporte regenerado el 11/10/2026 con el motor rotación-tanque batch4 (`model/chogath_model.py`) sobre datos 7.3+7.3a. WR-LAB v1.17. Las métricas de tanque siguen TEMPLATE §A.5: EHP y ventana por encima de DPS; el tamaño es consecuencia, no objetivo. Si Riot publica 7.3b/7.4, regenerar antes de republishar.*

**Referencias y créditos**
- Notas oficiales 7.3/7.3a y apéndices — © Riot Games, Inc. (wildrift.leagueoflegends.com).
- Ficha wr-meta Cho'Gath (24/09/2026) y win rates Diamond+ del vigía (09/10/2026).
- Ficha analítica de Cho'Gath 7.3a del autor (12/10/2026): supuestos A1–A14 y discrepancias D1–D9.
- Motor batch4 y búsqueda exhaustiva: `model/chogath_model.py` + `model/chogath_resultados.txt`.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliada, patrocinada ni respaldada por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.
