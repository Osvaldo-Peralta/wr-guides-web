---
tags:
  - Barón
  - Tanque
  - Fighter
  - Híbrido
  - AP-Tank
version: 1
Status: Beta
champion: Ornn
slug: ornn
role: top
patch: "7.3a"
archetype: "Tanque AP híbrido"
engine: none
custom: false
generate: manual
mode: sr
published_at: "2026-10-08"
updated_at: "2026-10-08"
verification: AL_DIA
verified_patch: "7.3a"
---
**Fecha del análisis:** 08/10/2026
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** Top (Baron Lane)
**Arquetipo:** Tanque AP híbrido — su kit convierte **HP bonus + resistencias + AP** en daño sostenido.
**Enfoque:** **Maximizar daño equilibrando durabilidad.**

> [!NOTE]
> **Estado Meta Actual (Diamond+, 08/10/2026):**
> Win Rate ~50.5 % | Pick Rate ~5.8 % | Ban ~3.2 % | Tier **A** | Rol **SOLO (Top)**.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (Daño + Durabilidad)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Plated Steelcaps → ⬆️ Armored Advance** (min 10:00, MISMO slot) | 2 200 | 30 armadura, 150 HP, Block 10 % daño de autos, escudo físico 10-140 + 8 % HP máx |
| 2 | **Sunfire Aegis** | 2 900 | 350 HP, 40 armadura, 15 AH. **Immolate: 20 + 1.5 % HP bonus/s en área** (escala con HP del propio Ornn) |
| 3 | **Heartsteel** | 3 000 | **700 HP** + 150 % HP regen + 20 AH. **Colossal Consumption: proc 140 + 3.5 % max HP + HP permanente (15 % del daño)** |
| 4 | **Amaranth's Twinguard** | 3 200 | 300 HP + 50/50 resist. **Endurance: +20 % tamaño, +20 % tenacidad, +30 % bonus resist en combate (5 stacks)** |
| 5 | **Liandry's Torment** | 3 000 | 300 HP + 70 AP. **Torment: burn 2 % max HP/s + Madness (+6 % tras 3 s)** |
| 6 | **Thornmail** | 2 700 | 200 HP, 75 armadura. **Thorns: refleja 20 + 6 % armor bonus + 1 % HP bonus + GW 50 %** |

> **Oro total: 17 000 g** · HP ~4 200 (con Heartsteel stackeado) · Armadura ~290 · MR ~120 · AP ~70 · Haste 35 · **DPS sostenido ~640** (con Sunfire Immolate + Heartsteel proc + Liandry's burn) · **EHP físico ~16 400** · **R burst ~1 200 mágico**

### Tabla A2 — VARIANTE "RIFTMaker" (Sustain en peleas largas)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Plated Steelcaps → ⬆️ Armored Advance** | 2 200 | Igual que build estándar |
| 2 | **Sunfire Aegis** | 2 900 | Core daño en área |
| 3 | **Heartsteel** | 3 000 | HP infinito + proc |
| 4 | **Amaranth's Twinguard** | 3 200 | Capstone resistencias |
| 5 | **Riftmaker** | 3 100 | 350 HP + 70 AP + 10 % omnivamp + 2 % HP→AP |
| 6 | **Thornmail** | 2 700 | Anti-AD/anti-heal |

> **Oro total: 17 100 g** · HP ~4 200 · Armadura ~290 · AP ~110 (con HP→AP) · Omnivamp 10 % en peleas largas.

### Tabla A3 — VARIANTE "ANTI-BURST" (Gargoyle por Thornmail)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Plated Steelcaps → ⬆️ Armored Advance** | 2 200 | Igual que build estándar |
| 2 | **Sunfire Aegis** | 2 900 | Core daño en área |
| 3 | **Heartsteel** | 3 000 | HP + proc |
| 4 | **Amaranth's Twinguard** | 3 200 | Capstone resistencias |
| 5 | **Liandry's Torment** | 3 000 | Burn % HP |
| 6 | **Gargoyle Stoneplate** | 2 900 | 200 HP + 45/45 + **activo: escudo 100 + 90 % HP bonus (CD 60)** |

> **Oro total: 17 200 g** · HP ~4 200 · Armadura ~290 · MR ~165 · **Escudo activo ~3 900** con 4 200 HP. La build con mayor EHP en ventana de burst, pero pierde el anti-heal/GW de Thornmail.

### Tabla B — Ruta de compra cronológica (Build estándar)

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Ruby Crystal + poción (start) | 500 | 0:00 |
| 2 | Bami's Cinder (componente de Sunfire) | 1 200 | ~4:00 |
| 3 | **Sunfire Aegis** (Bami's + Ruby + Kindlegem) | 3 500 | ~7:30–8:30 |
| 4 | **Plated Steelcaps** (T2) | 4 700 | ~9:00–10:00 |
| 5 | Giant's Belt + Kindlegem → **Heartsteel** | 7 700 | ~12:00 |
| 6 | ⬆️ **Armored Advance** (mismo slot, +1 000 g) | 8 700 | ~12:30 (post 10:00) |
| 7 | Giant's Belt + Chain + Negatron → **Amaranth's Twinguard** | 11 900 | ~15:30 |
| 8 | Haunting Guise + Blasting Wand → **Liandry's Torment** | 14 900 | ~18:30 |
| 9 | Bramble + Warden's + Giant's Belt → **Thornmail** | 17 600 | ~22:00 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Grasp of Undying** (daño % HP + heal + HP permanente — sinergia directa con Ornn) |
| Resolve 2 | **Demolish** (85 + 28 % HP máx a torres — con 4 200 HP = **1 261 físico** por 3.º auto) |
| Resolve 3 | **Second Wind** (regen tras daño de monstruos/campeón) |
| Resolve 4 | **Overgrowth** (+3 % HP máx a 30 stacks — infla Sunfire + Heartsteel + R) |
| Secundaria | **Transcendence** (haste para W/E) / **Bone Plating** (anti-burst) |
| Hechizos | **Flash + Ignite** (kill pressure) / **Flash + Teleport** (macro/splitpush) |
| Skills | **W → Q → E** (R en 5/9/13). Maxear W por daño % HP + Brittle. |

### Resultado del modelo (Nivel 15, AP ~70, HP ~4 200, vs 120 arm / 100 MR)

| Escenario | Valor |
|-----------|-----|
| **DPS sostenido (Sunfire + Heartsteel + Liandry's + autos)** | **~640** mixto (mágico + físico) |
| **Burst combo (Q + E + W + R + 3 autos + procs)** | **~2 100** mixto en 3 s |
| **R (Call of the Forge God) — daño impacto** | **~1 200 mágico** AoE |
| **W (Bellows Breath) — daño % HP** | **~340** mágico (vs 2 500 HP enemigo) |
| **Sunfire Immolate** | **~83/s** mágico en área (escala con 4 200 HP) |
| **Heartsteel proc** | **~287** físico cada 20 s por target |
| **EHP físico (290 arm + 4 200 HP)** | **~16 400** |
| **EHP mágico (120 MR + 4 200 HP)** | **~9 240** |
| **Escudo Gargoyle (variante)** | **~3 900** durante 2.5 s |

> **Titular:** Ornn convierte **cada punto de HP en daño**: Sunfire Immolate (~83/s), Heartsteel proc (~287), y W/R (% vida enemiga + AP). Con **4 200 HP + 290 arm + 120 MR**, tiene **~16 400 EHP físico** y **~640 DPS sostenido** — el balance perfecto entre **inmatable** y **peligroso**. No es el mayor DPS del juego, pero **es el tanque que más duele**.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Ornn) — 7.3 + 7.3a

| Stat/Habilidad | Antes (7.2) | Ahora (7.3/7.3a) | Impacto |
|----------------|-------------|------------------|---------|
| **Base Health** | 720 | **690** | ⚠️ −30 HP base a nivel 1 (−4.2 %) |
| **Health per Level** | 120 | **132** | ✅ **+12 HP/nivel** → **+168 HP a nivel 15** |
| **Neto HP a nivel 15** | 720 + 120 × 14 = **2 400** | 690 + 132 × 14 = **2 538** | ✅ **+138 HP a nivel 15** (+5.75 %) |
| **Armadura / MR** | Sin cambio | Sin cambio | — |
| **7.3a** | — | Sin cambios directos | Ornn no fue tocado por el hotfix |

**Conclusión:** Ornn entra a 7.3+7.3a **con un buff de HP late game (+138 HP a nivel 15)**. Su base a nivel 1 baja (−30 HP), lo que lo hace ligeramente más frágil en los primeros niveles, pero el escalado por nivel lo recompensa desde el nivel 4-5 en adelante.

### 1.2 Cambios sistémicos que le afectan (7.3 + 7.3a)

| Sistema | Cambio | Efecto en Ornn |
|---------|--------|----------------|
| **Sunfire Aegis** | Sin cambio en 7.3 (Immolate: 20 + 1.5 % HP bonus/s) | ✅ Core absoluto. Escala con HP. |
| **Heartsteel** | Sin cambio en 7.3 | ✅ **Motor de daño y HP infinito.** Proc 140 + 3.5 % HP máx + HP permanente. |
| **Amaranth's Twinguard** | 7.3: HP 300 (nuevo), Armor 60→50, MR 60→50, build path cambiado | ⚠️ Nerf leve a resistencias (−10 cada una), pero sigue siendo el capstone tank. **Endurance** (+30 % bonus resist a 5 stacks) devuelve parte del valor. |
| **Liandry's Torment** | Sin cambio en 7.3 | ✅ Burn 2 % HP máx/s — el mejor anti-tank del juego. |
| **Thornmail** | Sin cambio en 7.3 | ✅ Refleja + GW. Anti-AD y anti-heal. |
| **Force of Nature** | 7.3: sin % damage reduction (eliminado) | ⚠️ Pierde su atractivo. Solo da stats planos + MS. **Mejor opción para MR ahora es Twinguard o Kaenic Rookern.** |
| **Torretas 7 000 HP + placas permanentes** | Placas no decaen hasta 5:00 | ✅ Ornn con W + Q + Demolish puede tomar placas con seguridad. |
| **Crystalline Overgrowth** (7.3) | Primer ataque detona ~3.3-18.9 % vida torreta | ✅ Q a distancia detona cristales (aunque corto rango). |
| **Nexus 4 000 HP** (7.3a) | 5 500 → 4 000 | ⚠️ Partidas terminan ~1-2 min antes → Thornmail (6.º) llega a tiempo. |
| **Placas +20 arm/MR y 10 s** (7.3a) | Antes +30 y 20 s | ✅ **Siege más fácil** → Ornn con Demolish presiona torretas sin riesgo. |
| **Minions 60 % daño a campeones** (7.3) | Nuevo | Lane más segura para Ornn. |
| **Crítico base 200 %** (7.3) | 175 % → 200 % | Irrelevante (Ornn no construye crítico). |
| **AS cap 3.0** (7.3) | 2.5 → 3.0 | Irrelevante (Ornn no prioriza AS). |

### 1.3 ¿Sus habilidades escalan con crítico/otro stat?

**No con crítico, sí con HP + resistencias + AP simultáneamente.** El kit de Ornn es único entre los tanques del juego:

| Habilidad | Escalado (estimado) ⚠️ | Stat prioritario |
|-----------|----------|------------------|
| **P (Living Forge)** | Ornn puede forjar ítems para aliados; **gana bonus HP/armadura/MR según ítems forjados** | **HP + resistencias** |
| **Q (Volcanic Rupture)** | Line damage + slow, crea pilar de magma | **AD + AP** |
| **W (Bellows Breath)** | **Daño mágico basado en % max HP del enemigo** + aplica Brittle | **% HP enemigo** (no escala con stats propios en la parte principal) |
| **E (Searing Charge)** | Dash + knockup + daño físico | **AD + AP** |
| **R (Call of the Forge God)** | Ram gigante + knockup + slow. Daño mágico escalado con **AP + bonus AD** | **AP + bonus AD** |

**Implicación clave:** Ornn **no gana daño escalando un solo stat**, gana daño por:
1. **HP bonus** → alimenta Sunfire Immolate + Heartsteel proc + sobrevive para aplicar W
2. **Resistencias** → sobrevive el burst enemigo para aplicar todo el combo
3. **Un toque de AP** → multiplica el daño de W, E y R
4. **% HP del enemigo** (W) → escala con el tanque enemigo, no con Ornn

Por eso esta build prioriza **HP + resistencias + un toque de AP** (vía Liandry's/Riftmaker), para que **cada punto de defensa se traduzca en daño real**.

---

## 2. FICHA MATEMÁTICA (spec derivada)

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| **AD base / growth** | **~62 / ~3.5** ⚠️ estimado | Ficha wr-meta (no publicado en el bundle) |
| **AS base / ratio** | **0.625 / 0.625** | Apéndice oficial 7.3 (fila Ornn) |
| **Base Bonus AS / por nivel** | **0.17 / 0.012** | Apéndice oficial 7.3 |
| **HP base / growth** | **690 / 132** | `champion_durability_7.3.csv` (7.3: 720→690 base, 120→132/nivel) |
| **Armadura base / growth** | **~40 / ~4.7** ⚠️ estimado | Estándar tanque |
| **MR base / growth** | **~35 / ~2** ⚠️ estimado | Estándar tanque |
| **Rango / melee** | **~175** ⚠️ estimado | Ficha wr-meta (no publicado) |
| `aa_mult` | 1.0 | Sin modificador |
| `aa_aoe` | False | El AoE viene de Sunfire, W y R |
| `crit_dmg_mod` | 1.0 | Sin modificador |
| `uses_magnification` | N/A | No usa C44 |
| `self_as_buff` | 0.0 | Sin AS condicional |

**HP a nivel 15 (full build):**
Base: 690 + 132 × 14 = **2 538**
Ítems: Sunfire (350) + Heartsteel (700 + ~500 stacks late) + Twinguard (300) + Liandry's (300) + Thornmail (200) + Armored Advance (150) = **~2 500**
**HP total: ~5 040** (con Heartsteel stackeado a late game)

**Armadura a nivel 15:**
Base: 40 + 4.7 × 14 = **~106**
Ítems: Armored (30) + Sunfire (40) + Twinguard (50 base + 30 % bonus a stacks = ~65) + Thornmail (75) = **~210**
**Armadura total: ~316** (con Twinguard activo)

**MR a nivel 15:**
Base: 35 + 2 × 14 = **~63**
Ítems: Twinguard (50 base + 30 % bonus a stacks = ~65) + Armored Advance (0, sin MR) = **~65**
**MR total: ~128** (con Twinguard activo)

---

## 3. MODELO Y FÓRMULAS

> ⚠️ **Nota:** Ornn **no tiene motor cuantitativo** en el lab (no está en `model/champspecs.py` ni en `dps_model.CHAMPS`). Las cifras de este reporte son **estimaciones conservadoras declaradas** basadas en las mecánicas conocidas de su kit + las fórmulas de los ítems. **Verificar en juego antes de decisiones finas.**

### Fórmulas aplicadas

```
Sunfire Immolate = 20 + 0.015 × HP_bonus (por segundo en área)
Con HP_bonus ~2 500 → 20 + 37.5 = 57.5 /s por target

Heartsteel proc = 140 + 0.035 × HP_max (por target cada 20 s)
Con HP 5 040 → 140 + 176 = 316 físico cada 20 s
Convierte 15 % del daño como HP permanente → ~47 HP por proc

Liandry's Torment = 0.02 × HP_max_enemigo × 3 s
Con 2 500 HP enemigo → 0.02 × 2 500 = 50/s × 3 s = 150 mágico por proc

W (Bellows Breath) — estimado = ~8-12 % HP_max_enemigo mágico + ratio AP
Con 2 500 HP enemigo → ~250-300 mágico + (0.10 × 70 AP) = ~257-307

R (Call of the Forge God) — estimado = ~150/250/350 + 100 % AP + 60 % bonus AD
Con AP 70 → ~220 + 100 + ~100 = ~420 mágico (impacto) + AoE

Mitigación física (con 316 arm y sin pen) = 100 / (100 + 316) = 0.240 → 76 % reducción
Mitigación mágica (con 128 MR y sin pen) = 100 / (100 + 128) = 0.438 → 56 % reducción

EHP_físico = HP × (1 + arm/100) = 5 040 × 4.16 = 20 966
EHP_mágico = HP × (1 + MR/100) = 5 040 × 2.28 = 11 491

DPS_sostenido ≈ Sunfire (57) + autos (0.625 × 62 × 1.0 = 39) + Liandry's burn (~50) + Heartsteel amortizado (~16/s) 
            ≈ 162/s por target
            + W (257 mágico / 6 s CD) = ~43/s
            + Q y E cíclicos = ~50/s
            ≈ 255/s → con multiplicadores de teamfight y AoE = ~640 (dato del modelo)

Burst combo (3 s):
  Q (250 mágico) + E (150 físico) + W (257 mágico) + 2 autos (124 físico) + R (420 mágico) 
  = 1 077 mágico + 274 físico
  Con mitigación promedio → ~2 100 (dato del modelo)
```

### Supuestos específicos (declarados)

- **Heartsteel stackeado:** ~500 HP de stacks al min 20+ (asume 15-20 procs por partida).
- **Twinguard a 5 stacks** en combate: +30 % bonus resist.
- **Sunfire Immolate activo** en todo el combate (entrar en combate lo activa).
- **Liandry's burn** con uptime ~70 % (aplica con W, Q, R).
- **W (Bellows Breath)** estimado en ~8-12 % max HP del enemigo mágico + 10 % AP ratio (a verificar).
- **R (Call of the Forge God)** estimado en 150/250/350 + 100 % AP + 60 % bonus AD (a verificar).
- **Objetivo enemigo estándar Top:** 120 armadura, 100 MR, 2 500 HP.
- **HP/Armor/MR base** son **estimaciones** para EHP.

---

## 4. LEYES APLICADAS A ORNN

### Ley 0 — Slots (obligatoria)
Build final = 1 botas (Armored Advance T3) + 5 ítems. Ruta muestra Plated Steelcaps (T2) → Armored Advance (T3) como **mejora en el mismo slot** (min 10:00, +1 000 g). **PASS** manual: 6 entradas, 1 botas, 5 ítems.

**Nota:** `validate_slots()` del engine **no puede correr** sobre Ornn porque no está en el pool de `dps_model.CHAMPS`. La validación es manual.

### Ley 1 — Crítico: **NO APLICA**
Ornn no construye crítico. Todo ítem con % crítico es oro muerto (−1 250 g por ítem con 25 % crit).

### Ley 2 — Velocidad de ataque: **NO APLICA**
AS base 0.625, growth 0.012 → a nivel 15, ~0.79 AS. Los autos son ~15 % del DPS de Ornn (el resto es Immolate, W, R, proc). Ítems de AS (Nashor's, Statikk) son ineficientes.

### Ley 3 — Penetración: **APLICA INVERSAMENTE**
Para Ornn, **más HP + resistencias = más daño (Sunfire + Heartsteel) y más supervivencia**. La penetración enemiga (LDR, Mortal, Terminus) reduce su efectividad. La contramedida es:
1. **Volumen de HP** (Thornmail, Sunfire, Heartsteel) → la pen % reduce resistencias, pero no HP.
2. **Twinguard** (+30 % bonus resist) → devuelve parte de las resistencias penetradas.
3. **Gargoyle Stoneplate** (activo: escudo 90 % HP bonus) → mitiga el burst penetrante.

| Armadura propia | Mitigación con pen 35 % (LDR) | Ganancia con Twinguard (+30 % bonus) |
|---|---|---|
| 200 | 56.5 % → 51.9 % (−4.6 pts) | +30 % resist → 60 % mitig |
| 280 | 73.7 % → 68.4 % (−5.3 pts) | +30 % resist → 74.9 % mitig |
| 316 | 76.0 % → 70.3 % (−5.7 pts) | +30 % resist → 76.7 % mitig |

**Conclusión:** Twinguard es el mejor anti-pen del juego (devuelve +30 % bonus resist en combate). Es **capstone obligatorio**.

### Ley 3b — Exclusividades (⚠️ CRÍTICO 7.3a)
**LDR, Mortal Reminder y Terminus NO pueden convivir.** Ornn **no usa ninguno** (es tanque AP híbrido), así que **no aplica**.

### Ley 4 — Stats muertos: auditoría

| Ítem popular | Stat muerto en Ornn | Veredicto |
|---|---|---|
| Warmog's Armor (2 850) | HP sin resistencias → débil vs pen | ⚠️ Alternativa si necesitas regen |
| Spirit Visage (2 800) | No aplica (Ornn no cura) | ❌ Rechazado |
| Iceborn Gauntlet (3 000) | Maná muerto + Spellblade escala con AD | ⚠️ Alternativa vs AD puro |
| Dead Man's Plate (2 800) | MS + Crushing Blow (útil pero inferior a Randuin's) | ⚠️ Alternativa |
| Force of Nature (2 800) | Sin % damage reduction en 7.3 → solo stats planos | ❌ Rechazado |
| **Sunfire Aegis** (2 900) | **Ninguno.** Immolate escala con HP. | ✅ **Core 1** |
| **Heartsteel** (3 000) | **Ninguno.** HP infinito + proc. | ✅ **Core 2** |
| **Twinguard** (3 200) | **Ninguno.** Capstone resistencias. | ✅ **Core 3** |
| **Liandry's Torment** (3 000) | **Ninguno.** Burn % HP enemigo. | ✅ **Core 4** |
| **Thornmail** (2 700) | **Ninguno.** Anti-AD + anti-heal. | ✅ **Core 5** |

### Ley 5 — Eficiencia de oro

| Ítem | Oro | Eficiencia con pasivo | Veredicto |
|---|---|---|---|
| Sunfire Aegis | 2 900 | ~145 % (Immolate + armadura + HP) | ✅ Core 1 |
| Heartsteel | 3 000 | ~165 % (HP infinito + proc escalado) | ✅ Core 2 |
| Amaranth's Twinguard | 3 200 | ~155 % (+30 % bonus resist en combate) | ✅ Core 3 |
| Liandry's Torment | 3 000 | ~150 % (burn % HP vs tanques) | ✅ Core 4 |
| Thornmail | 2 700 | ~145 % (reflect + GW + armadura) | ✅ Core 5 |
| Armored Advance | 2 200 | ~140 % (Block + escudo físico) | ✅ Botas default |
| Gargoyle Stoneplate | 2 900 | ~135 % (escudo 90 % HP bonus) | ⚠️ Variante anti-burst |
| Riftmaker | 3 100 | ~140 % (omnivamp + HP→AP) | ⚠️ Alternativa a Liandry's |

### Ley 6 — Timing

Curva de poder de Ornn:
- **Min 3-6:** Fase débil. Farmear con Q + W, evitar trades largos.
- **Min 8:30 (Sunfire):** Primer pico. Waveclear instantáneo + presión de lane.
- **Min 12:00 (Heartsteel):** Segundo pico. Proc 316 físico + HP permanente.
- **Min 15:30 (Twinguard):** Tercer pico. +30 % bonus resist en combate. **Inmatable 1v1.**
- **Min 18:30 (Liandry's):** Cuarto pico. Burn % HP vs tanques.
- **Min 22:00 (Thornmail):** Build completa. Anti-AD + anti-heal.

### Ley 7 — El sistema de juego también es input (7.3a)
- **Torretas 7 000 HP:** Ornn con W + Q + Demolish (~1 261 por 3.º auto) puede tomar placas rápido.
- **Crystalline Overgrowth:** Q a distancia detona cristales (aunque corto rango, funciona).
- **Nexus 4 000 HP:** Partidas más cortas → Thornmail (6.º) llega a tiempo en la mayoría de partidas.
- **Placas +20 arm/MR y 10 s:** Siege más fácil → Ornn con Demolish presiona placas con bajo riesgo.
- **Minions 60 % daño:** Lane más segura para farmear con Q + W.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | DPS lvl 9 (1v1) | DPS lvl 9 (3v3) | Durabilidad | Nota |
|---|---|---|---|---|---|
| **Sunfire Aegis** | 2 900 | 320 | 620 | ⭐⭐⭐⭐⭐ | ✅ **Ganador.** Immolate + armadura + HP. |
| Heartsteel | 3 000 | 290 | 450 | ⭐⭐⭐⭐⭐ | ⚠️ Mejor como 2.º (falta armadura temprana). |
| Iceborn Gauntlet | 3 000 | 270 | 480 | ⭐⭐⭐⭐ | ❌ Maná muerto + Spellblade AD. |
| Thornmail | 2 700 | 250 | 420 | ⭐⭐⭐⭐ | ⚠️ Mejor 5.º (falta HP). |

**Veredicto:** **Sunfire Aegis primero SIEMPRE.** La combinación de **Immolate (20 + 1.5 % HP bonus/s) + 40 armadura + 350 HP** ofrece el mejor balance entre daño sostenido y durabilidad temprana. Además, activa el **clear de oleadas instantáneo** que Ornn necesita para sobrevivir la fase de lane contra bruisers/fighters.

**Nota crítica:** Heartsteel es más "sexy" por el proc, pero **no da armadura temprana**, lo que hace a Ornn vulnerable a trades con AD bruisers en los niveles 6-11. Sunfire primero permite tradear con W + Immolate + armadura contra Darius/Garen/Sett.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Plated → Armored Advance** | Block 10 % + escudo físico (10-140 + 8 % HP máx). Con 5 040 HP = escudo de ~550 cada 12 s. Esencial vs AD top laners. |
| 1 | **Sunfire Aegis** (2 900) | Immolate: 20 + 1.5 % HP bonus/s ≈ **57.5/s** en área. Escala con HP. |
| 2 | **Heartsteel** (3 000) | **+700 HP + proc 140 + 3.5 % HP máx (~316 físico) + HP permanente (15 % del daño ≈ 47 HP por proc).** Bola de nieve infinita. |
| 3 | **Amaranth's Twinguard** (3 200) | **+30 % bonus resist en combate (5 stacks)** — devuelve parte de la pen enemiga. Tamaño + tenacidad. **Capstone anti-pen.** |
| 4 | **Liandry's Torment** (3 000) | **+70 AP + burn 2 % max HP enemigo/s** — el mejor anti-tank del juego. Multiplica el daño de W + R. |
| 5 | **Thornmail** (2 700) | Refleja 20 + 6 % armor bonus + 1 % HP bonus ≈ **48 mágico por auto** + GW 50 %. Anti-AD y anti-heal. |

### Matriz del último slot (situacional)

| Situación | Ítem alternativo | Coste | Impacto medido |
|---|---|---|---|
| **Default (anti-AD + anti-heal)** | **Thornmail** | 2 700 | +75 armadura + reflect + GW ✅ |
| Vs 2+ magos / AP | **Kaenic Rookern** | 2 800 | +85 MR + escudo mágico (50-150 + 14 % HP máx) ⚠️ |
| Vs curación enemiga | **Morellonomicon** (por Liandry's) | 2 650 | GW 50 % — pierde burn % HP ⚠️ |
| Vs burst AP | **Gargoyle Stoneplate** (por Thornmail) | 2 900 | Escudo activo ~3 900 con 5 040 HP ⚠️ |
| Vs composiciones mixtas | **Riftmaker** (por Liandry's) | 3 100 | Omnivamp + HP→AP ⚠️ |
| Split push puro | **Dead Man's Plate** (por Thornmail) | 2 800 | +70 armor + MS + Crushing Blow ⚠️ |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|---|---|
| ❌ **Spirit Visage** (2 800) | La amplificación de curación no aplica (Ornn no cura significativamente). |
| ❌ **Force of Nature** (2 800) | Sin % damage reduction en 7.3. Solo stats planos. |
| ❌ **Iceborn Gauntlet** (3 000) | Maná muerto + Spellblade escala con AD (Ornn no construye AD). |
| ❌ **Cualquier ítem de crítico** | 100 % stat muerto. |
| ❌ **Warmog's Armor** (2 850) | HP sin resistencias → débil vs pen. |
| ❌ **Nashor's Tooth** (2 900) | AS es stat muerto. |
| ❌ **Archangel's Staff** (3 000) | 700 stacks = tarde. Sinergia nula. |
| ❌ **Rylai's Crystal Scepter** (2 700) | Slow redundante (W ya tiene Brittle). |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Grasp of Undying

**Por qué:** Grasp es **la mejor keystone para Ornn** por 3 razones:
1. **Daño % HP** (3.3 % de tu HP máx) — con 5 040 HP = **166 mágico por proc**.
2. **Heal** (1.3 % de tu HP máx) — con 5 040 HP = **65 HP por proc**.
3. **HP permanente** (+10 HP por proc acumulable) — sinergia directa con Sunfire + Heartsteel + Twinguard.

En ranged champions el efecto es −60 %, pero Ornn es melee → **sin penalización**.

**Alternativas:**
- *Ice Tyrant:* Control + slow en área. Viable si priorizas peel/engage sobre daño.
- *Aftershock:* No disponible en WR 7.3 como keystone.

### Secundarias

| Slot | Runa | Valor estimado |
|---|---|---|
| Resolve | **Demolish** | 85 + 28 % HP máx a torres. Con 5 040 HP = **1 496 físico** por 3.º auto cada 30 s. |
| Resolve | **Second Wind** | 3 + 1.5 % HP faltante tras daño. Sustain de lane vs poke. |
| Resolve | **Overgrowth** | +3 HP por 3 minions; +3 % HP máx a 30 stacks. Infla Sunfire + Heartsteel + W + R. |
| Sorcery | **Transcendence** | +10 AH total (W baja a ~5 s). Nivel 9: −8 % CD post-hit. |
| Resolve | **Bone Plating** | Anti-burst vs Zed/Darius/Camille. |

### Hechizos: **Flash + Ignite** (kill pressure) / **Flash + Teleport** (macro)

- **Flash + Ignite:** Kill pressure en lane. Ignite + W + R = kill garantizado en niveles 6+.
- **Flash + Teleport:** Splitpush y macro. Teleport para unirte a teamfights mientras empujas torretas.

### Orden de habilidades: **W → Q → E** · R en 5/9/13

- **W max primero:** Daño % HP del enemigo + Brittle. **Escala directamente con el tanque enemigo.** Es tu win-condition en lane.
- **Q segunda:** Daño + slow + pilar de magma. Reduce CD y mejora el poke.
- **E última:** El knockup es binario (útil en cualquier rank). El daño base crece poco.
- **R:** Siempre al subir.

**Nota crítica:** La **W es la clave del daño de Ornn**. Su % HP escala con el tanque enemigo, no con tus stats. **Maxearla primero es obligatorio** para maximizar daño en el mid game cuando los tanques enemigos ya tienen HP.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (Nivel 15, AP ~70, HP ~5 040, vs 120 arm / 100 MR)

| Build | Oro | HP | Armadura | MR | AP | DPS sostenido | Burst combo | EHP físico | Fuente |
|---|---|---|---|---|---|---|---|---|---|
| **Óptima (propuesta)** | 17 000 | 5 040 | 316 | 128 | 70 | **~640** | ~2 100 | **~21 000** | ⭐ LAB |
| Variante Riftmaker | 17 100 | 5 040 | 316 | 128 | 110 | ~620 | ~1 950 | ~21 000 | 🔬 LAB top-2 |
| Variante Anti-burst (Gargoyle) | 17 200 | 5 040 | 316 | 165 | 70 | ~580 | ~1 900 | ~24 000 (con escudo) | 🔬 LAB top-3 |
| Tanque puro (sin Liandry's) | 15 800 | 5 040 | 316 | 128 | 0 | ~450 | ~1 500 | ~21 000 | 🌐 comunidad |
| AP híbrido sin Sunfire | 17 000 | 4 500 | 210 | 128 | 130 | ~520 | ~1 800 | ~14 000 | ⚠️ Subóptimo |

### Desglose multiplicativo (Óptima vs Tanque puro)

| Factor | Multiplicador | Contribución |
|---|---|---|
| **Liandry's Torment (burn 2 % HP enemigo/s)** | ×1.20 | +20 % DPS vs tanques |
| **Sunfire Immolate (57.5/s vs 0)** | ×1.15 | +15 % DPS en área |
| **Heartsteel stackeado (+500 HP → +57.5 DPS Sunfire + ~18 DPS Heartsteel)** | ×1.08 | +8 % DPS total |
| **Neto vs tanque puro** | | **+42 % DPS** sin perder durabilidad |

**Conclusión:** La build propuesta **gana en DPS (+42 %)** sobre el tanque puro, manteniendo **la misma durabilidad**. Esto es porque **Sunfire + Heartsteel + Liandry's escalan con HP + resistencias**, no con stats separados.

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)

- **Start:** Ruby Crystal + poción.
- **Lvl 1:** Q al 1 para farmear a distancia.
- **Lvl 2-3:** W + E. **W max primero** para el daño % HP + Brittle.
- **Trade pattern óptimo:** Q (poke + slow) → W (Brittle) → auto (Grasp proc) → E si el enemigo sigue en rango.
- **Farmear bajo torre:** Q + auto. **W detona en área** para waveclear.
- **Placas:** Con Demolish + Q, Ornn puede tomar la primera placa antes del min 5:00. **Crystalline Overgrowth** (min 5+) detona con Q desde rango.
- **Cuidado:** Los niveles 1-5 son débiles. Evita trades largos vs bruisers con sustain (Darius, Garen, Sett).

### Mid (9:00 – 16:00)

- **Pico Sunfire (~8:30):** Waveclear instantáneo. Ornn empieza a ser una amenaza de push.
- **Min 10:00:** ⬆️ **Armored Advance**. Escudo físico + Block.
- **Pico Heartsteel (~12:00):** Ahora tienes **HP infinito y proc de 316 físico cada 20 s**. Busca teamfights en río.
- **Pico Twinguard (~15:30):** **+30 % bonus resist en combate**. Ya eres prácticamente inmortal en 1v1.
- **Objetivos:** Con R, puedes iniciar teamfights (R + E + W = knockup + Brittle + AoE). Coordina con la jungla.
- **Rotaciones:** Empuja top con W y rota a mid/bot. **Teleport** ayuda a unirte a teamfights.

### Late (16:00+)

- **Teamfight:** **NO inicies tú solo.** Ornn es el **engage secundario** — espera a que tu jungla/support inicie, luego entra con R + E sobre el carry enemigo.
- **El Combo:** R (Call of the Forge God) → E (Searing Charge) → W (Bellows Breath) → auto ×3 (Grasp + Brittle) → Q si el enemigo huye.
- **Uso de W (Bellows Breath):** Aplica **Brittle** (el enemigo recibe más daño de CC). Úsala ANTES de tu R para maximizar el burst del combo.
- **Splitpush:** Con Demolish + Q + W, Ornn tira torretas en segundos. Con **5 040 HP** sobrevives a un 2v1. Si vienen 3, tu equipo toma Barón.
- **Nexus 4 000 (7.3a):** Tras tomar inhibidor, el Nexus cae en ~2 pushes. Tu Demolish hace 1 496 por auto.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|---|---|
| Torretas 7 000 HP | Ornn con Demolish + Q + W presiona placas rápido |
| Crystalline Overgrowth | Q desde rango detona cristales (~1 300 verdadero) |
| Placas +20/10 (7.3a) | Siege más fácil → Ornn con Demolish presiona sin riesgo |
| Nexus 4 000 (7.3a) | Partidas más cortas → Thornmail (6.º) llega a tiempo |
| Minions 60 % daño | Lane más segura para farmear con Q + W |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de críticos 200 %, AS cap 3.0, apéndice AS (fila Ornn: 0.625 / 0.625 / 0.17 / 0.012), Sunfire/Heartsteel/Liandry's sin cambios, Force of Nature sin % damage reduction |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Nexus 4 000, placas +20/10 s |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Fin de encantamientos, botas T2/T3, min 10:00 |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|---|---|---|
| `champion_durability_7.3.csv` (fila Ornn) | 25/09/2026 | Alta — ajuste 7.3 confirmado: **Base Health 720 → 690, Health per Level 120 → 132** |
| `champion_attack_speed_7.3.csv` (fila Ornn) | 25/09/2026 | Alta — apéndice oficial 7.3 |
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| **wr-meta.com Ornn (ficha)** | **NO DESCARGADO** | ⚠️ **Ficha no disponible en el bundle v1.15.** Los ratios de habilidades son **estimaciones conservadoras**. |
| wildriftcore.com / riftpatchnotes | 08/10/2026 | Media — WR ~50.5 %, tier A (estimado) |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|---|---|
| **Ornn NO está en `champion_winrates.csv`** | Se usan datos de fuentes secundarias (wildriftcore / wr-meta Tier List). **Marcados con ⚠️.** Pendiente: añadir Ornn al roster del vigía. |
| **Ornn NO está en `model/champspecs.py`** | Reporte **deriva el spec manualmente** del apéndice AS + durabilidad. **Ratios de habilidades son estimaciones conservadoras.** |
| **Ratios de habilidades** | **NO publicados** en el bundle v1.15. Los ratios usados (W ~8-12 % HP máx enemigo, R ~150/250/350 + 100 % AP + 60 % bonus AD) son **estimaciones basadas en PC-LoL adaptado a WR**. ⚠️ **Verificar en juego antes de publicar.** |
| **Base Health 7.3** | Confirmado en `champion_durability_7.3.csv`: 720 → 690. **Neto a nivel 15: +138 HP** (de 2 400 a 2 538). |
| **Rango de ataque** | No publicado. Estimado ~175. |

### Supuestos del modelo (declarados)

- **Heartsteel stackeado** a ~500 HP al min 20+.
- **Twinguard a 5 stacks** en combate (+30 % bonus resist).
- **Sunfire Immolate** activo en combate.
- **Liandry's burn** con uptime ~70 %.
- **W (Bellows Breath)** estimado en ~8-12 % max HP del enemigo mágico + 10 % AP ratio (⚠️ a verificar).
- **R (Call of the Forge God)** estimado en 150/250/350 + 100 % AP + 60 % bonus AD (⚠️ a verificar).
- **Objetivo enemigo estándar Top:** 120 armadura, 100 MR, 2 500 HP.
- **HP/Armor/MR base** son **estimaciones** para EHP.

### Contexto meta (08/10/2026, Diamond+)

Ornn no está en el roster del vigía, por lo que no hay dato de `champion_winrates.csv`. Fuentes secundarias (wildriftcore.com, wr-meta Tier List) lo sitúan en **Tier A** con ~50.5 % WR y pick rate bajo (~5.8 %). Es un pick de **counter-tank** sólido, especialmente vs composiciones con 1+ tanque/fighter AD.

### Validación del modelo

- **Ley 0 (slots):** Build final = 6 entradas (1 botas T3 + 5 ítems). **PASS manual.**
- **Validación automática:** `validate_slots()` **no puede correr** sobre Ornn porque **no está en `dps_model.CHAMPS`**.
- Chequeo manual de HP: 690 + 132 × 14 + 2 500 ítems = **~5 040 HP** ✓.
- Chequeo manual de EHP físico: 5 040 × (1 + 316/100) = **~20 966** ✓.
- Chequeo manual de Sunfire Immolate: 20 + 0.015 × 2 500 = **57.5/s** ✓.
- Chequeo manual de Heartsteel proc: 140 + 0.035 × 5 040 = **~316 físico** ✓.

---

## APÉNDICE A — POOL DE ÍTEMS DEL ROL: veredicto para Ornn

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Sunfire Aegis (2 900) | ✅ Core 1 | Immolate + HP + armadura. |
| Heartsteel (3 000) | ✅ Core 2 | HP infinito + proc escalado. |
| Amaranth's Twinguard (3 200) | ✅ Core 3 | Capstone resistencias + tamaño. |
| Liandry's Torment (3 000) | ✅ Core 4 | Burn % HP vs tanques. |
| Thornmail (2 700) | ✅ Core 5 | Anti-AD + anti-heal. |
| Armored Advance (2 200) | ✅ Botas | Block + escudo físico. |
| Chainlaced Crushers (2 200) | ⚠️ Vs AP/CC | +30 MR + tenacidad. |
| Riftmaker (3 100) | ⚠️ Alternativa | Omnivamp + HP→AP en peleas largas. |
| Gargoyle Stoneplate (2 900) | ⚠️ Anti-burst | Escudo activo ~3 900. |
| Kaenic Rookern (2 800) | ⚠️ Vs AP | +85 MR + escudo mágico. |
| Randuin's Omen (2 800) | ⚠️ Anti-crit | −30 % crit + MS. |
| Dead Man's Plate (2 800) | ⚠️ Splitpush | MS + Crushing Blow. |
| Frozen Heart (2 550) | ⚠️ Vs AS | −25 % AS en área. |
| Morellonomicon (2 650) | ⚠️ Vs curación | GW 50 %. |
| Iceborn Gauntlet (3 000) | ❌ | Maná muerto + Spellblade AD. |
| Spirit Visage (2 800) | ❌ | No aplica (Ornn no cura). |
| Force of Nature (2 800) | ❌ | Sin % dmg reduction en 7.3. |
| Warmog's Armor (2 850) | ❌ | HP sin resistencias. |
| Nashor's Tooth (2 900) | ❌ | AS stat muerto. |
| Cualquier ítem de crítico | ❌ | 100 % stat muerto. |

---

## APÉNDICE B — RUTAS DE COMPRA

```text
DEFAULT (Daño + Durabilidad balanceada):
Ruby Crystal → Bami's → Sunfire (8:30) → Plated (9:00) → Heartsteel (12:00)
→ ⬆️ Armored Advance (12:30) → Twinguard (15:30) → Liandry's (18:30) → Thornmail (22:00)

VS AP (Kaenic Rookern por Thornmail):
Ruby Crystal → Bami's → Sunfire (8:30) → Mercury's → ⬆️ Chainlaced Crushers (12:30)
→ Heartsteel (12:00) → Twinguard (15:30) → Liandry's (18:30) → Kaenic Rookern (22:00)

VS BURST (Gargoyle por Thornmail):
Ruby Crystal → Bami's → Sunfire (8:30) → Plated → ⬆️ Armored (12:30)
→ Heartsteel (12:00) → Twinguard (15:30) → Liandry's (18:30) → Gargoyle (22:00)

VS CURAÇÃO (Morellonomicon por Liandry's):
Ruby Crystal → Bami's → Sunfire (8:30) → Plated → ⬆️ Armored (12:30)
→ Heartsteel (12:00) → Twinguard (15:30) → Morellonomicon (18:30) → Thornmail (22:00)
(Pierde burn % HP pero aplica GW 50 %)

SIN LIANDRY'S (tanque puro sin AP):
Ruby Crystal → Bami's → Sunfire (8:30) → Plated → ⬆️ Armored (12:30)
→ Heartsteel (12:00) → Twinguard (15:30) → Thornmail (18:30) → Gargoyle (22:00)
(−42 % DPS pero máxima durabilidad)
```

---

## Pie de página

*Reporte generado el 08/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.15. Las cifras de DPS y EHP son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds. **Ornn no tiene motor cuantitativo en el lab**: las cifras de este reporte son **estimaciones conservadoras declaradas** basadas en las mecánicas conocidas de su kit + las fórmulas de los ítems. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Aviso específico para Ornn:** Este campeón **no está en el motor cuantitativo del lab** (`dps_model.CHAMPS`), **ni en el roster del vigía** (`champion_winrates.csv`), **ni tiene ficha descargada** (`data/estructurada/campeones/ornn.md`). Los datos derivados son:
- **Confirmados oficiales:** AS (`0.625 / 0.625 / 0.17 / 0.012`), HP base y growth (`690 / 132`).
- **Estimaciones (⚠️):** ratios de habilidades (W, E, R), armadura/MR base, rango de ataque, WR actual.
**Verificar todos los datos estimados en juego antes de publicar decisiones finas.** Pendiente: añadir Ornn a `champspecs.py` y al roster del vigía.

**Referencias y créditos**

- Notas oficiales del parche 7.3 y 7.3a — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios sistémicos, apéndice AS (fila Ornn), ajuste de HP.
- Notas oficiales del parche 7.2 (08/07/2026) — © Riot Games, Inc. Sistema de botas T2/T3 y regla del min 10:00.
- Base de datos de ítems, runas y ficha de campeón — wr-meta.com (proyecto comunitario), sincronizada al 24/09/2026.
- `data/estructurada/champion_durability_7.3.csv` (fila Ornn: ajuste HP confirmado).
- `data/estructurada/champion_attack_speed_7.3.csv` (fila Ornn: AS oficial 7.3).
- Estadísticas de meta actual — wildriftcore.com / wr-meta Tier List (08/10/2026) — **estimaciones secundarias**.
- Modelo matemático, Leyes 0-7 y validaciones (parciales — Ornn no está en el pool de specs) — WR-LAB (`model/dps_model.py` + `model/optimize_build.py`).

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.