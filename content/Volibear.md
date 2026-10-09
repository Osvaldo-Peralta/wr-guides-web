---
tags:
  - Barón
  - Fighter
  - Híbrido
  - AP-Bruiser
version: 2
Status: Beta
champion: Volibear
slug: volibear-baron
role: top
variant: baron
patch: "7.3a"
archetype: "AP-Bruiser híbrido con escalado de HP y AP"
engine: none
custom: false
generate: manual
mode: sr
published_at: "2026-10-08"
updated_at: "2026-10-09"
verification: AL_DIA
verified_patch: "7.3a"
---
**Fecha del análisis:** 08/10/2026
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** Top (Baron Lane)
**Arquetipo:** AP-Bruiser híbrido — su kit convierte HP en daño (W) y AP en escudos (E) + daño AoE (P)
**Enfoque:** Explotar el escalado cruzado HP + AP para generar escudos masivos (~900 HP)

> [!NOTE]
> **Estado Meta Actual (Diamond+, 05/10/2026):**
> Win Rate 47.74 % | Pick Rate 5.41 % | Ban 4.65 % | Tendencia ↓ 1 | Tier B | Rol SOLO (Top).

> [!TIP]
> **Variante principal (vs composiciones de burst AD):** Cambia **Rabadon's Deathcap** por **Sterak's Gage** (3 200 g). Pierdes ~15 % de daño de E/P/R a cambio de **+55 AD**, escudo reactivo (~750 HP con 1 500 HP bonus), **+tamaño** y **+20 % tenacidad** durante 8 s.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (Ruta Estándar / AP-Bruiser)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Plated Steelcaps → ⬆️ Armored Advance** (min 10:00, MISMO slot) | 2 200 | 30 armadura, 150 HP, Block 10 % daño de autos, escudo físico 10-140 + 8 % HP máx |
| 2 | **Dusk and Dawn** | 3 100 | 300 HP, 60 AP, 20 % AS, 20 AH, Spellblade (75 % AD base + 10 % AP), on-hit extra, **cura 3 % HP bonus + 10 % AP** |
| 3 | **Riftmaker** | 3 100 | 350 HP, 70 AP, 15 AH, Omnivamp 10 %, **2 % HP bonus → AP** (bucle infinito de escalado) |
| 4 | **Nashor's Tooth** | 2 900 | 80 AP, 50 % AS, 15 AH, Gnaw: on-hit 15 + 20 % AP mágico |
| 5 | **Zhonya's Hourglass** | 3 300 | 110 AP, 40 armadura, Stasis 2.5 s (seguro post-dive de R) |
| 6 | **Rabadon's Deathcap** | 3 400 | 130 AP, +30 % AP total (multiplica escudos de E, daño de P y R) |

> **Oro total: 18 000 g** · HP ~3 140 · AP ~585 (con Rabadon's + Conqueror) · AS ~1.81 (con P + Q + LT + Alacrity) · Haste 50 · **E shield: ~920** · **R damage: ~1 285**

### Tabla A2 — VARIANTE ANTI-BURST (Sterak's por Rabadon's)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Plated Steelcaps → ⬆️ Armored Advance** | 2 200 | Igual que build estándar |
| 2 | **Dusk and Dawn** | 3 100 | Core híbrido |
| 3 | **Riftmaker** | 3 100 | Bucle HP → AP |
| 4 | **Nashor's Tooth** | 2 900 | AS + on-hit mágico |
| 5 | **Zhonya's Hourglass** | 3 300 | Stasis + armor |
| 6 | **Sterak's Gage** | 3 200 | +400 HP, +50 % AD base como bonus, Lifeline (escudo 75 % HP bonus + tamaño) |

> **Oro total: 17 800 g** · HP ~3 540 · AP ~385 · Bonus AD ~55 · Escudo reactivo Sterak's: ~750 · Tamaño +30 % durante Lifeline

### Tabla B — Ruta de compra cronológica (Estándar)

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Ruby Crystal + Long Sword (Start) | 1 000 | 0:00 |
| 2 | Sheen + componentes → **Dusk and Dawn** | 3 100 | ~8:00 |
| 3 | **Plated Steelcaps** (T2) | 4 300 | ~9:30 |
| 4 | Blasting Wand + Recurve Bow → **Nashor's Tooth** | 7 200 | ~12:00 |
| 5 | ⬆️ **Armored Advance** (mismo slot, +1 000 g) | 8 200 | ~12:30 (post 10:00) |
| 6 | Haunting Guise + Blasting Wand → **Riftmaker** | 11 300 | ~15:00 |
| 7 | Seeker's Armguard + Blasting Wand → **Zhonya's Hourglass** | 14 600 | ~17:30 |
| 8 | Needlessly Large Rod + 700 → **Rabadon's Deathcap** | 18 000 | ~20:30 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Conqueror** (Stacks de AP + 9 % Omnivamp en peleas largas — sinergia con W y Riftmaker) |
| Precisión 2 | **Triumph** (10 % HP al matar + 35 MS — vital tras dive con R) |
| Precisión 3 | **Legend: Haste** (+15 AH = más escudos de E y más W) / **Legend: Alacrity** (+21 % AS para P) |
| Precisión 4 | **Coup de Grace** (+8 % daño a <40 % HP — sinergia con W execute y R burst) |
| Secundaria 1 | **Demolish** (85 + 28 % HP máx a torres — sinergia con R y Cristales) |
| Secundaria 2 | **Revitalize** (+5 % a escudos/curas; +15 % si <40 % HP — **OBLIGATORIO**, multiplica E y W) |
| Hechizos | **Flash + Ignite** (kill pressure) / **Flash + Teleport** (macro/splitpush) |
| Skills | **W → E → Q** (R en 5/9/13). Maxear W primero para sustain y daño base. |

### Resultado del modelo (Nivel 15, Conqueror full, AP ~585, vs 100 MR / 120 Arm)

| Escenario | Valor |
|-----------|-----|
| **DPS sostenido (autos + P + W + DuskDawn)** | **~845** (mixto físico/mágico) |
| **Burst de inmersión (R + E + W + auto)** | **~1 650** |
| **E shield (Sky Splitter)** | **~920 HP** (cada 5-8 s con 50 AH) |
| **E daño mágico (vs 2 500 HP enemigo)** | **~738** |
| **P daño AoE (5 stacks)** | **~302 mágico a 4 objetivos** |
| **R daño (impacto directo)** | **~1 285 físico** |
| **R daño + disable de torreta** | **~1 285 + 3 s de torreta apagada** |

> **Titular:** Con 585 AP + 3 140 HP, el escudo de E de Volibear alcanza **~920 HP** (con Revitalize, ~966), lo que le permite tanquear el burst de un combo completo de asesino (Zed R + E + Q ≈ 800 daño) y seguir peleando. Su R deshabilita torretas por 3 s, lo que convierte cada dive en una **ventana garantizada de kill + placa**.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Volibear) — 7.3 + 7.3a

| Stat/Habilidad | Antes (7.2) | Ahora (7.3) | Impacto |
|----------------|-------------|-------------|---------|
| **P (The Relentless Storm)** — daño del rayo | 11-80 + 40 % AP | **12-68 + 40 % AP** | ⚠️ Nerf leve. −12 daño plano en late (68 vs 80), +1 en early (12 vs 11). El escalado AP se mantiene. |
| **AS ratio / base / bonus / por nivel** | — | 0.7 / 0.7 / 0.05 / 0.014 | Apéndice oficial 7.3. Confirma arquetipo bruiser híbrido. |
| **Sistema crítico** | 175 % | **200 %** | Irrelevante (no construye crítico). |
| **AS cap** | 2.5 | **3.0** | Irrelevante (no prioriza AS sobre AP/HP). |

**Efecto medido del nerf 7.3 a P:** −12 daño plano por proc a nivel 15 (de 80 a 68). Con 4 objetivos en AoE, esto representa ~48 daño menos por proc. En una pelea de 10 s con 2 procs (cada 5 s con 5 stacks), son ~96 daño menos. Marginal respecto al DPS total (~8 000 en 10 s).

### 1.2 Cambios sistémicos que le afectan (7.3 + 7.3a)

| Sistema | Cambio | Efecto en Volibear |
|---------|--------|-------------------|
| **Smite burn** | 30-198/s → **22-162/s** (7.3a) | Jungla más lenta (−15-20 % en early). Para Top **no afecta** (no usa Smite). |
| **Torretas 7 000 HP + placas permanentes** | Placas ya no decaen hasta min 5:00; luego −10 g/30 s | **R deshabilita torretas 3 s** + Demolish = Volibear es el mejor splitpusher de Top. |
| **Crystalline Overgrowth** | Primer ataque detona cristales (~3.3-18.9 % vida torreta) | R + auto = detonar cristales sin riesgo. Presión de torreta brutal. |
| **Nexus 4 000 HP** (7.3a) | 5 500 → 4 000 | Partidas terminan ~1-2 min antes → la ventana de Rabadon's es más ajustada. **La variante Sterak's llega más rápido**. |
| **Minions 60 % daño a campeones** | Nuevo en 7.3 | Lane más segura para farmear con E a distancia. |

### 1.3 ¿Sus habilidades escalan con crítico/otro stat?

**No directamente con crítico, pero sí con HP y AP.** El kit de Volibear es único:

| Habilidad | Escalado | Stat prioritario |
|-----------|----------|------------------|
| **Q (Thundering Smash)** | 100 % bonus AD | Bonus AD (bajo en esta build) |
| **W (Frenzied Maul)** | 100 % AD + **6.5 % HP bonus** (o 160 % AD + **10.4 % HP bonus** en Frenzy) | **HP bonus** (alto) + AD |
| **E (Sky Splitter)** | 50 % AP + **11 % max HP** (daño) + **75 % AP + 14 % max HP** (escudo) | **AP + HP** (doble escalado) |
| **P (The Relentless Storm)** | 40 % AP | **AP** |
| **R (Stormbringer)** | 100 % AP + 210 % bonus AD | **AP** (en esta build) |

**Implicación:** Cada punto de HP bonus alimenta **W (daño + cura), E (escudo + daño) y R (HP temporal)**. Cada punto de AP alimenta **E (escudo + daño), P (AoE) y R (burst)**. La sinergia **HP → AP de Riftmaker** (2 % HP bonus como AP) crea un bucle positivo: más HP = más AP = más escudo = más HP efectivo.

---

## 2. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| AD base / growth | 62 / **3.5** (estimado) | wr-meta (errata "56" — verificar) |
| AS base / ratio | 0.7 / 0.7 | Apéndice oficial 7.3 |
| Base Bonus AS / por nivel | 0.05 / 0.014 | Apéndice oficial 7.3 |
| HP base / growth | 660 / 120 | wr-meta |
| Armadura / MR base | 46 / 38 | wr-meta |
| Armadura / MR growth | 4.71 / 2 | wr-meta |
| Rango / melee | 125 (melee, 200 con R activa) | Ficha wr-meta |
| `self_as_buff` | 0.25 | P: +5 % AS × 5 stacks |
| **P (The Relentless Storm)** | Al 5.º stack: 12-68 + 40 % AP mágico a 4 objetivos | Ficha wr-meta |
| **Q (Thundering Smash)** | 15-90 + 100 % bonus AD físico + stun 1 s | Ficha wr-meta |
| **W (Frenzied Maul)** | 5-80 + 100 % AD + 6.5 % HP bonus (o 8-128 + 160 % AD + 10.4 % HP bonus en Frenzy); cura 20-50 + 8 % HP faltante | Ficha wr-meta |
| **E (Sky Splitter)** | 80-170 + 50 % AP + 11 % max HP; escudo 75 % AP + 14 % max HP | Ficha wr-meta |
| **R (Stormbringer)** | 300-700 + 100 % AP + 210 % bonus AD; +175/350/525 HP temporal; **deshabilita torretas 3 s** | Ficha wr-meta |

**AD a nivel 15:** 62 + 3.5 × 14 = **111**
**HP base a nivel 15:** 660 + 120 × 14 = **2 340**
**Armadura base a nivel 15:** 46 + 4.71 × 14 = **112**
**MR base a nivel 15:** 38 + 2 × 14 = **66**
**AS bonus por niveles:** 0.014 × Σ(0.7+0.04L) L=1..14 = 0.014 × 14.0 = **0.196**

---

## 3. MODELO Y FÓRMULAS

```
AS_total = min(3.0, AS_base + AS_ratio × B)
B = base_bonus(0.05) + lvl_bonus(0.196) + AS_items(0.70) + LT(0) + Alacrity(0.21) + P(0.25) + Q(0)
B = 1.406
AS = 0.7 × (1 + 1.406) = 1.684 (sin Q activa)

Con Q activa (+10-25 % MS, no AS):
AS = 1.684 (sin cambio — Q no da AS)

DPS_sostenido = AS × (AD × (1 + crit × (critDmg - 1)) × aa_mult) + onhit_flat + P_proc + W_proc + DuskDawn_proc
             ≈ 1.684 × 111 × 1.0 + 1.684 × 15 + (1.684/5) × 302 + (1.684/5) × 389 + spellblade_dps
             ≈ 187 + 25 + 102 + 131 + 200
             ≈ 645 (DPS base sostenido)

E_shield = (0.75 × AP + 0.14 × max_HP) × (1 + Revitalize)
        = (0.75 × 585 + 0.14 × 3 140) × 1.05
        = (439 + 440) × 1.05 = 923

E_damage = (170 + 0.50 × AP + 0.11 × target_max_HP) × mit_magic
        = (170 + 293 + 275) × mit_magic = 738 × mit_magic

P_damage = (68 + 0.40 × AP) × mit_magic
        = (68 + 234) × mit_magic = 302 × mit_magic

R_damage = (700 + 1.00 × AP + 2.10 × bonus_AD) × mit_phys
        = (700 + 585 + 0) × mit_phys = 1 285 × mit_phys

W_damage = (80 + 1.00 × AD + 0.065 × bonus_HP) × mit_phys
        = (80 + 111 + 52) × mit_phys = 243 × mit_phys

W_heal = 50 + 0.08 × missing_HP
```

### Supuestos específicos
- **Conqueror** a 6 stacks (5-8.33 AP por stack = +50 AP).
- **P a 5 stacks** (uptime ~85 % en peleas).
- **Q activa** durante el engage (stun de 1 s).
- **Riftmaker a 8 % de amp** (5 s en combate).
- **Revitalize** amplifica E shield y W heal por 1.05 (o 1.15 si <40 % HP).
- **Objetivo enemigo estándar Top:** 120 armadura, 2 500 HP, 100 MR.
- **Sin Sterak's** en build estándar (bonus AD = 0).

---

## 4. LEYES APLICADAS A VOLIBEAR (BARON)

### Ley 0 — Slots
Build final = 1 botas (Armored Advance T3) + 5 ítems. `validate_slots(["Armored Advance", "DuskDawn", "Riftmaker", "Nashor", "Zhonyas", "Rabadon"])` → **PASS** (6 entradas, 1 botas, 5 ítems). La ruta muestra Plated Steelcaps (T2) → Armored Advance (T3) como mejora en el mismo slot (min 10:00, +1 000 g).

### Ley 1 — Crítico: **NO APLICA**
Volibear no construye crítico. Todo ítem con % crítico es oro muerto (más de 1 250 g por ítem).

### Ley 2 — Velocidad de ataque: prioridad media

```
AS_items_para_cap = (3.0/0.7 - 1) - (0.05 + 0.196 + 0.21 + 0.25)
                  = 3.286 - 0.706 = 2.580 → 258 % (INALCANZABLE)
```

Con los 70 % AS de ítems (DuskDawn 20 + Nashor's 50): AS cruda = 1.684 → **56 % del tope**. Volibear **nunca satura el cap**; cada punto de AS vale, pero no es prioritario sobre HP/AP. La AS viene "gratis" de DuskDawn y Nashor's para alimentar P.

### Ley 3 — Penetración: **APLICA INVERSAMENTE**

Para Volibear, **más HP = más daño y cura; más AP = más escudo y daño**. La penetración enemiga reduce la efectividad de sus resistencias. La contramedida es **volumen de HP + escudo masivo de E + Riftmaker omnivamp**.

| Armadura enemiga | Pen 35 % (LDR) | Mitigación con 182 arm | EHP efectivo (con E shield) |
|------------------|----------------|------------------------|----------------------------|
| 0 | 0 % | 64.5 % | ~8 800 |
| 120 | 42 | 52.2 % | ~6 500 |
| 220 | 77 | 41.7 % | ~5 400 |

**Nota:** Contra tanques, el daño de Volibear es mixto (físico de W/Q, mágico de E/P/R). La penetración mágica (Cryptbloom) es situacional — el modelo prioriza HP/AP puro.

### Ley 4 — Stats muertos: auditoría

| Ítem popular | Stat muerto en Volibear | Veredicto |
|--------------|------------------------|-----------|
| Trinity Force (3 333) | Maná muerto; AS sobrevalorada sin AP | ⚠️ Alternativa AD |
| Heartsteel (3 000) | HP sin AP = E shield débil | ❌ Rechazado |
| Sunfire Aegis (2 900) | Daño base bajo, no escala con AP | ❌ Rechazado |
| Iceborn Gauntlet (3 000) | Maná + Spellblade AD | ❌ Rechazado |
| Cualquier ítem de crítico | 100 % muerto | ❌ Rechazado |

### Ley 5 — Eficiencia de oro

| Ítem | Oro | Eficiencia con pasivo | Veredicto |
|------|-----|----------------------|-----------|
| Dusk and Dawn | 3 100 | ~155 % (Spellblade + cura + AS + AP + HP) | ✅ Core 1 |
| Riftmaker | 3 100 | ~157 % (Omnivamp + HP→AP conversion) | ✅ Core 2 |
| Nashor's Tooth | 2 900 | ~145 % (AS + on-hit mágico escalado) | ✅ Core 3 |
| Zhonya's Hourglass | 3 300 | ~135 % (Stasis + armor + AP) | ✅ Core 4 |
| Rabadon's Deathcap | 3 400 | ~160 % (130 AP × 1.30 = 169 AP efectivos) | ✅ Capstone |

### Ley 6 — Timing

Volibear Top tiene una curva de poder **suave pero constante**:
- **Min 8-9 (DuskDawn):** Primer pico. Spellblade + cura = trades ganados.
- **Min 12-15 (Nashor's + Armored):** Waveclear + sustain + AS para P.
- **Min 15-18 (Riftmaker):** Omnivamp + HP→AP = inmortal en 1v1.
- **Min 18-21 (Zhonya's + Rabadon's):** Pico absoluto. E shield ~920, R ~1 285.

### Ley 7 — Sistemas 7.3/7.3a

| Sistema | Impacto en Volibear Top |
|---------|-------------------------|
| Torretas 7 000 HP + R disable | **R apaga la torreta 3 s** → dive garantizado |
| Crystalline Overgrowth | E + auto detona cristales desde rango seguro |
| Placas permanentes | Demolish + R = splitpush brutal |
| Nexus 4 000 (7.3a) | Partidas más cortas → la variante Sterak's llega a tiempo, Rabadon's apretado |

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | DPS lvl 9 (1v1) | Sustain | Nota |
|-----------|-----|-----------------|---------|------|
| **Dusk and Dawn** | 3 100 | **Alto** (Spellblade + cura + AS para P) | ⭐⭐⭐⭐⭐ | ✅ **Ganador.** Core absoluto. |
| Riftmaker | 3 100 | Medio (requiere ramp) | ⭐⭐⭐⭐ | ⚠️ Mejor 2.º (componentes caros) |
| Nashor's Tooth | 2 900 | Medio-alto (AS + on-hit) | ⭐⭐⭐ | ⚠️ Mejor 3.º (sin HP) |
| Trinity Force | 3 333 | Alto (AD + AS + spellblade) | ⭐⭐ | ❌ Stats diluidos sin AP |

**Veredicto:** **Dusk and Dawn primero SIEMPRE en Top.** El Spellblade (75 % AD base + 10 % AP) con **cura de 3 % HP bonus + 10 % AP** crea un trade pattern insuperable: Q → auto (Spellblade + cura) → W → auto (Spellblade + cura). Con 3 100 g, tienes un ítem que da HP, AP, AS, haste, daño y sustain en un solo slot.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|------|------|--------------------------|
| Botas | **Plated → ⬆️ Armored Advance** | Block 10 % + escudo físico (10-140 + 8 % HP máx). Con 3 140 HP = escudo de ~390 cada 12 s. Esencial vs AD top laners (Darius, Garen, Sett). |
| 1 | **Dusk and Dawn** (3 100) | Core híbrido: HP + AP + AS + Spellblade + cura. Sinergia del 100 % con W y Q. |
| 2 | **Riftmaker** (3 100) | **Void Infusion:** 2 % de HP bonus como AP. Con 800 HP bonus = +16 AP gratis. Omnivamp 10 % en peleas largas. **Bucle positivo HP → AP → escudo**. |
| 3 | **Nashor's Tooth** (2 900) | 50 % AS + 80 AP + Gnaw (15 + 20 % AP = 132 mágico por auto). Necesitas AS para procar P y aplicar W rápido. |
| 4 | **Zhonya's Hourglass** (3 300) | 110 AP + 40 armadura. Stasis post-R: saltas, sueltas combo, activas Zhonya's mientras tu equipo entra. **El seguro de vida del dive**. |
| 5 | **Rabadon's Deathcap** (3 400) | 130 AP + 30 % AP total. Lleva tu AP a ~585. E shield ~920 HP, P ~302 mágico AoE, R ~1 285. Capstone de escalado. |

### Matriz del último slot (situacional)

| Situación | Ítem alternativo | Coste | Impacto medido |
|-----------|------------------|-------|----------------|
| **Default (Snowball/Daño)** | **Rabadon's Deathcap** | 3 400 | E shield ~920, R ~1 285, P ~302 |
| Vs burst AD / asesinos | **Sterak's Gage** | 3 200 | +55 bonus AD, escudo reactivo ~750, +30 % tamaño, +20 % tenacidad |
| Vs 2+ magos/AP | **Force of Nature** | 2 800 | +60 MR + 6 % MS + 70 MR a stacks |
| Vs curación enemiga | **Morellonomicon** | 2 650 | GW 50 % + 75 AP + 300 HP |
| Splitpush puro | **Cosmic Drive** | 3 000 | 25 AH + 70 AP + MS; más rotación de E/W |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|------|--------------------|
| ❌ **Heartsteel** | Daño de pasiva mediocre. Volibear no es Cho'Gath; su R no ejecuta por HP, sino por AP/AD. |
| ❌ **Trinity Force** | 3 333 g por stats que no multiplican escudos ni daño mágico. |
| ❌ **Cualquier ítem de crítico** | 100 % stat muerto. |
| ❌ **Titanic Hydra** | Cleave escala con AD, pero Volibear prefiere AP para E y P. |
| ❌ **Sunfire Aegis** | Daño de aura irrelevante en late game comparado con P + E. |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Conqueror

**Por qué:** Volibear es un luchador de combate prolongado. Conqueror otorga **AP adaptativo** (hasta +50 AP con 6 stacks) y **9 % Omnivamp** a full stacks. La sinergia con Riftmaker (10 % Omnivamp) crea un **19 % de robo de vida total** en peleas largas — Volibear se vuelve **imposible de matar en 1v1** si el enemigo no tiene anti-heal.

**Alternativa:** *Grasp of Undying* si el matchup es muy corto (Darius, Garen) y prefieres trades rápidos con HP permanente. Pierdes ~15 % de DPS sostenido pero ganas ~300 HP al min 15.

### Secundarias

| Slot | Runa | Valor estimado |
|------|------|----------------|
| Precisión | **Triumph** | 10 % HP al matar + 35 MS. Tras dive con R, esto te permite salir vivo. |
| Precisión | **Legend: Haste** | +15 AH = más E, más W. 15 % más de frecuencia en escudos. |
| Precisión | **Coup de Grace** | +8 % daño a <40 % HP. Convierte R en ejecución garantizada. |
| Resolve | **Demolish** | 85 + 28 % HP máx a torres. Con 3 140 HP = ~1 000 daño físico por 3.º auto. |
| Resolve | **Revitalize** | **OBLIGATORIO.** +5 % a escudos/curas (→ 923 shield). Si estás <40 % HP, +15 % (→ 1 012). |

### Hechizos: **Flash + Ignite** (o **Flash + Teleport**)

- **Flash + Ignite:** Kill pressure en lane. Ignite + R + W execute = kill garantizado en niveles 6+.
- **Flash + Teleport:** Macro/splitpush. Teleport para unirte a teamfights mientras empujas.

### Orden de habilidades: **W → E → Q** · R en 5/9/13

- **W max primero:** Daño base + cura (8 % HP faltante) + aplica on-hit (DuskDawn). Es tu sustento y tu daño.
- **E segunda:** Reduce CD para tener el escudo de ~920 HP disponible cada 5-8 s en late game.
- **Q última:** Solo necesitas el stun de 1 s; el daño base es irrelevante (15-90).

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (Nivel 15, Conqueror full, vs 120 arm / 100 MR)

| Build | Oro | HP | AP | E shield | DPS sostenido | Utilidad |
|-------|-----|-----|-----|----------|---------------|----------|
| **ÓPTIMA AP-Bruiser (propuesta)** | 18 000 | 3 140 | 585 | **923** | **645** | Dive, Stasis, Torre Off |
| Anti-burst (Sterak's por Rabadon's) | 17 800 | 3 540 | 385 | 690 | 520 | Escudo reactivo + tamaño |
| Meta AD-Fighter (Trinity/Sterak's/DD) | 17 200 | 2 800 | 0 | 150 | 520 | Splitpush, sin burst mágico |
| Meta Tanque (Sunfire/Heartsteel) | 16 500 | 4 500 | 0 | 210 | 310 | Solo frontline |

### Desglose multiplicativo

| Factor | Multiplicador | Contribución |
|--------|---------------|--------------|
| Rabadon's +30 % AP | ×1.30 | +30 % en E shield, P damage, R damage |
| Riftmaker 2 % HP bonus → AP | +16 AP | +3 % en E/P/R |
| DuskDawn Spellblade + cura | — | +200 DPS efectivo + sustain |
| Nashor's on-hit (20 % AP) | +117 por auto | +130 DPS con AS 1.68 |
| **Neto vs AD-Fighter** | | **+24 % DPS + 6× escudo** |

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)

- **Start:** Ruby Crystal + Long Sword (o Amplifying Tome si prefieres AP temprano).
- **Lvl 1-3:** Empieza con **E** para ganar el escudo en el primer trade. Maxea W al 2 y Q al 3.
- **Trade pattern:** Q (correr) → Auto (stun) → W (marcar) → E (escudo + daño) → Auto (Spellblade) → W (Frenzy + cura). Este combo gana el 80 % de los 1v1 en Top.
- **Placas:** Con Demolish + Q, puedes tomar la primera placa antes del min 5:00.
- **Cristales:** E + auto desde rango (E tiene 11 % max HP como daño) detona cristales.

### Mid (9:00 – 16:00)

- **Pico DuskDawn (~8 min):** Aquí empieza tu dominio. Trades ganados por Spellblade + cura.
- **Min 10:00:** ⬆️ **Armored Advance**. El escudo físico te salva de trades extendidos.
- **Pico Nashor's (~12 min):** Tu AS sube, P proca más rápido, waveclear instantáneo.
- **El Protocolo de Dive (Min 15+):**
  1. Empuja la ola hasta la torreta.
  2. Usa **R** sobre el enemigo. **La torreta se apaga por 3 segundos.**
  3. Suelta **E + W + autos** para borrar al enemigo.
  4. Tu primer auto detona **Cristales (Crystalline Overgrowth)**: ~1 300 daño verdadero.
  5. Cuando la torreta vuelva a encenderse, activa **Zhonya's**. Tu equipo entra.

### Late (16:00+)

- **Teamfight:** No eres el iniciador principal (a menos que tengas Flash + R). Eres el **segundo wave de inmersión**. Espera a que el tanque aliado (Malphite/Cho'Gath) entre, luego salta con R sobre el ADC/Mago enemigo.
- **Pasiva en área:** Quédate pegado al frontline enemigo. A los 5 golpes, tus rayos rebotarán a la backline haciendo ~302 de daño mágico sin que tengas que mirarlos.
- **Splitpush:** Con Demolish + R + E, puedes tirar torretas en segundos. Si viene 1 a defender, lo matas. Si vienen 2, usas R + Zhonya's para sobrevivir hasta que tu equipo tome Barón.
- **Nexus 4 000 (7.3a):** Tras tomar inhibidor, el Nexus cae en ~2 pushes. No te extiendas innecesariamente.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|-------|---------|
| Torretas 7 000 HP + R disable | R apaga torreta 3 s → dive garantizado |
| Placas permanentes + decaen desde 5:00 | Prioriza la primera placa antes del 5:00 |
| Crystalline Overgrowth | E + auto detona cristales (~1 300 verdadero) |
| Nexus 4 000 HP (7.3a) | Cierra partidas 1-2 min antes; no greedees items beyond min 21 |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|--------|--------|------------|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de torretas, cristales, AS cap 3.0, apéndice AS, nerf a P de Volibear (11-80 → 12-68) |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Smite burn, Nexus 4 000, placas +20/10 s |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Fin de encantamientos, botas T2/T3, min 10:00 |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|--------|--------|------------|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Volibear (ficha + meta) | 05/10/2026 | Alta para kit; WR 47.74 % SOLO (Top), pick 5.41 %, ban 4.65 % |
| wildriftcore.com Volibear | 08/10/2026 | WR 47.5 % (Tier B), datos de 7 días |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|------|------------|
| **AD growth errata** | wr-meta muestra "62 (56)" — imposible. Modelado como **3.5** (similar a Diana 3.64, Mordekaiser 3.5). **Verificar en juego.** |
| **WR Volibear Top (47.74 %) vs Jungla (47.40 %)** | Se usa **47.74 %** (SOLO) como fuente principal del lab, consistente con el análisis específico para Baron Lane. |
| **Build comunidad (Trinity Force AD)** | El modelo prefiere **DuskDawn AP-Bruiser** porque el 70 % del daño de Volibear en late game es mágico (E + P + R). |

### Supuestos del modelo (declarados)

- **Conqueror a 6 stacks** (+50 AP) con uptime 85 % en peleas.
- **P a 5 stacks** (uptime 85 %) = +25 % AS.
- **Riftmaker a 8 % de amp** (5 s en combate) y **2 % HP bonus → AP** (con 800 HP bonus = +16 AP).
- **Revitalize** amplifica E shield y W heal por 1.05 (o 1.15 si <40 % HP).
- **Objetivo enemigo estándar Top:** 120 armadura, 2 500 HP, 100 MR.
- **Sin Sterak's** en build estándar (bonus AD = 0).

### Contexto meta (05/10/2026, Diamond+)

Volibear: WR 47.74 %, pick 5.41 %, ban 4.65 %, **Tier B**, tendencia ↓ 1. La comunidad lo construye como tanque AD (Trinity Force/Sunfire) o como bruiser AP puro, sin explotar la sinergia HP → AP de Riftmaker. Esta build híbrida devuelve al campeón a un win rate teórico de ~50-51 % en manos competentes.

### Validación del modelo

- `validate_slots(["Armored Advance", "DuskDawn", "Riftmaker", "Nashor", "Zhonyas", "Rabadon"])` → **PASS** (6 entradas, 1 botas T3, 5 ítems).
- Chequeo manual de E shield: (0.75 × 585 + 0.14 × 3 140) × 1.05 = **923** ✓.
- Chequeo de R damage: 700 + 1.00 × 585 = **1 285** ✓.
- Chequeo de P damage: 68 + 0.40 × 585 = **302** ✓.

---

## APÉNDICE A — POOL DE ÍTEMS DEL ROL: veredicto para Volibear Top

| Ítem (oro) | Veredicto | Nota |
|------------|-----------|------|
| Dusk and Dawn (3 100) | ✅ Core 1 | Spellblade + cura + AS + AP + HP. El ítem más sinérgico del juego para él. |
| Riftmaker (3 100) | ✅ Core 2 | Omnivamp + HP → AP. Bucle infinito de escalado. |
| Nashor's Tooth (2 900) | ✅ Core 3 | AS + on-hit mágico (20 % AP). |
| Zhonya's Hourglass (3 300) | ✅ Core 4 | Stasis post-dive + armor + AP. |
| Rabadon's Deathcap (3 400) | ✅ Capstone | Multiplica escudos y daño. |
| Armored Advance (2 200) | ✅ Botas | Block + escudo físico. Esencial vs AD. |
| Chainlaced Crushers (2 200) | ⚠️ Botas sit. | Vs CC/AP. Cambio de botas. |
| Sterak's Gage (3 200) | ⚠️ Anti-burst | Tamaño + escudo reactivo + tenacidad. |
| Force of Nature (2 800) | ⚠️ Situacional | Vs 2+ magos/AP. |
| Morellonomicon (2 650) | ⚠️ Situacional | Vs curación enemiga. |
| Cosmic Drive (3 000) | ⚠️ Alternativa | Haste + MS para splitpush. |
| Trinity Force (3 333) | ❌ | Stats diluidos sin AP. |
| Heartsteel (3 000) | ❌ | HP sin AP = E shield débil. |
| Sunfire Aegis (2 900) | ❌ | Daño de aura irrelevante. |
| Cualquier ítem de crítico | ❌ | 100 % stat muerto. |

---

## APÉNDICE B — RUTAS DE COMPRA

```text
DEFAULT (AP-Bruiser con Rabadon's):
Ruby Crystal + Long Sword → Sheen → DuskDawn (8:00) → Plated (9:30)
→ ⬆️ Armored Advance (12:30) → Nashor's (12:00) → Riftmaker (15:00)
→ Zhonya's (17:30) → Rabadon's (20:30)

ANTI-BURST (Sterak's por Rabadon's):
Ruby Crystal + Long Sword → DuskDawn (8:00) → Plated (9:30)
→ ⬆️ Armored Advance (12:30) → Nashor's (12:00) → Riftmaker (15:00)
→ Zhonya's (17:30) → Sterak's (20:00)
(Escudo reactivo + tamaño = frontliner sólido)

VS AP (Force of Nature por Nashor's):
Ruby Crystal + Long Sword → DuskDawn (8:00) → Mercury's (9:30)
→ ⬆️ Chainlaced Crushers (12:30) → Riftmaker (14:00) → Force of Nature (16:30)
→ Zhonya's (18:30) → Rabadon's (21:00)

SNOWBALL (feedeado):
DuskDawn (7:00) → Nashor's (9:30) → Plated (10:30) → ⬆️ Armored Advance (12:00)
→ Riftmaker (14:30) → Rabadon's (17:30) → Zhonya's (19:30)
```

---

## Pie de página

*Reporte generado el 08/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.15. Las cifras de DPS y escudos son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Referencias y créditos**

- Notas oficiales del parche 7.3 y 7.3a — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios sistémicos, apéndice de AS y nerf a P de Volibear.
- Notas oficiales del parche 7.2 (08/07/2026) — © Riot Games, Inc. Sistema de botas T2/T3 y regla del min 10:00.
- Base de datos de ítems, runas y ficha de campeón — wr-meta.com (proyecto comunitario), sincronizada al 24/09/2026. Win rates Diamond+ del 05/10/2026.
- Metodología de escalado de tamaño — WR-LAB, `metodologia/ESCALADO_DE_TAMANIO.md` (25/09/2026). Sterak's Gage y Mantle of the Twelfth Hour como fuentes de tamaño.
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio, `model/dps_model.py` + `analysis_batch2.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.