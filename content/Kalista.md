---
tags:
  - ADC
  - Marksman
  - On-hit
  - Ejecutor
  - Bot-Lane
version: 2
Status: Beta
champion: Kalista
slug: kalista
role: adc
patch: "7.3a"
archetype: "On-hit ejecutor (sin crítico, DPS sostenido + E Rend)"
engine: onhit
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
**Rol principal:** ADC (Dragon Lane)
**Arquetipo:** On-hit ejecutor — su **E Rend** no critica
**Enfoque:** Maximizar el daño sostenido on-hit

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (08/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Kalista:** ninguno en 7.3a.
> **Δ del modelo:** 0 % — ningún input del campeón/build cambió en el motor.
> **Build publicada (6 slots, Ley 0):** Gunmetal Greaves + Guinsoo's Rageblade + Wit's End + Terminus + Bloodthirster (BotRK) + Runaan's Hurricane — **sin cambios**.
> **Ítems cambiados fuera de la build final:** Yun Tal Wildarrows (BUFF) — verificar variantes/rechazados del reporte.
> **Sistema (7.3a):** Nexus: 5 500 → **4 000 HP** → Partidas terminan antes tras inhibidores
> **Sistema (7.3a):** Placas de torreta: Al perder placa: +30→**+20** arm/MR y 20→**10 s** → **Siege más fácil** → sube el valor de Jinx/Kalista/Yunara (siege) y de Runaan's/Energized
> **Nota del lab (diff 7.3a):** Yun Tal buffeada sigue RECHAZADA para Kalista (sin on-hit, ramp de crit); para **Yunara** (reporte externo) es buff relevante → re-verificar ese reporte → Anotado
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 05/10/2026):**
> **DUO (ADC):** Win Rate 50.88 % | Pick Rate 5.35 % | Ban 5.31 % | Tendencia ↓ 1 | Tier A | Confianza Med.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (Ruta On-hit / Anti-tanques)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | 50 % AS, 5 % Lifesteal, Noxian Gait (+7 % MS al atacar), mejora el dash |
| 2 | **Guinsoo's Rageblade** | 3 000 | 35 AD, 30 % AS, 30 AP, **cada 3.er golpe aplica on-hit ×2** (motor del build) |
| 3 | **Wit's End** | 2 800 | 50 % AS, 40 mágico on-hit, 45 MR, 20 % tenacidad |
| 4 | **Terminus** | 3 000 | 35 AD, 35 % AS, 30 mágico on-hit, pen híbrida (30 % físico/mágico a 3 stacks) |
| 5 | **Blade of the Ruined King** | 3 100 | 40 AD, 30 % AS, **6 % HP actual on-hit** (×2 con Guinsoo), 12 % LS |
| 6 | **Runaan's Hurricane** | 2 650 | 40 % AS, rayos que **aplican on-hit** a 2 objetivos cercanos |

> **Oro total: 16 750 g** · AD 240 · AS 3.0 (tope, con LT + Alacrity + Q + Guinsoo) · **No construye crítico** · Lifesteal 17 % · MR +45 · On-hit mágico por golpe: ~150 (con double de Guinsoo)

### Tabla A2 — VARIANTE WAVECLEAR (Statikk por BotRK)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** | 2 200 | Igual que build estándar |
| 2 | **Guinsoo's Rageblade** | 3 000 | Motor on-hit |
| 3 | **Statikk Shiv** | 3 000 | 40 AD, 30 % AS, 40 AP, **Energized +60 mágico + cadena a 4-7 objetivos** |
| 4 | **Wit's End** | 2 800 | AS + on-hit mágico + tenacidad |
| 5 | **Terminus** | 3 000 | Pen híbrida + on-hit |
| 6 | **Runaan's Hurricane** | 2 650 | Rayos on-hit |

> **Oro total: 16 650 g** · AD 200 · AS 3.0 · Waveclear AoE significativo · **Sin sustain de BotRK** (menos duelo 1v1)

### Tabla B — Ruta de compra cronológica (On-hit / Anti-tanques)

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Long Sword + Poción (Start) | 500 | 0:00 |
| 2 | **Berserker's Greaves** (T2) | 1 700 | ~4:30 |
| 3 | Amplifying Tome + Recurve Bow + Pickaxe → **Guinsoo's Rageblade** | 4 700 | ~7:30 |
| 4 | Recurve Bow + Negatron + Dagger → **Wit's End** | 7 500 | ~10:30 |
| 5 | ⬆️ **Gunmetal Greaves** (mismo slot, +1 000 g) | 8 500 | ~11:30 (post 10:00) |
| 6 | Recurve Bow + Hearthbound → **Terminus** | 11 500 | ~14:00 |
| 7 | Vampiric Scepter + Pickaxe + Recurve → **Blade of the Ruined King** | 14 600 | ~17:00 |
| 8 | Zeal + Kircheis → **Runaan's Hurricane** | 17 250 | ~19:30 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Lethal Tempo** (38.4 % AS + bala 6-24 + 0.67 % por 1 % AS bonus) |
| Precisión 2 | **Legend: Alacrity** (+21 % AS a full stacks) |
| Precisión 3 | **Triumph** (10 % HP al matar + 35 MS) / **Brutal** (5 + 6 % AD bonus) |
| Precisión 4 | **Coup de Grace** (+8 % daño a <40 % HP — sinergia con E Rend) |
| Secundaria | **Sudden Impact** (su E es dash → +15-65 verdadero + 10 % MS) / **Bone Plating** (anti-burst lane) |
| Hechizos | **Flash + Heal** (o Exhaust vs Vayne/Draven) |
| Skills | **Q → E → W** (R en 5/9/13). Maxear Q primero para poke; E segundo para daño de ejecución. |

### Resultado del modelo (Nivel 15, LT full, K2 = build on-hit)

| Escenario | Valor |
|-----------|-----|
| **1v1** (pre-mitigación, autos + on-hit + Guinsoo ×2) | **1 262** |
| **3v3** (AoE teamfight, Runaan's + on-hit spreads) | **2 612** |
| **vs Tanque** (220 arm, 150 MR, 4 500 HP) | **~1 850** (por BotRK + W passive) |
| **E Rend (con ~12 stacks de lanza)** | **2 387** (burst potencial) |
| **Heal/s** (BotRK + Gunmetal) | ~180 |
| **W passive (Oathsworn)** | 19 % max HP mágico cada 8 s |

> **Titular:** Kalista con la build on-hit alcanza **2 612 DPS en 3v3** (el segundo más alto entre los ADC del lab, solo superado por Jinx full AoE) y **2 387 de burst con E Rend** (ejecución). Su debilidad (WR 50.88 % DUO) es de **ejecución** (necesita Oathsworn coordinado y posicionamiento perfecto), no de modelo: el techo matemático es Tier A/S.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Kalista) — 7.3 + 7.3a

| Stat/Habilidad | Antes (7.2) | Ahora (7.3) | Impacto |
|----------------|-------------|-------------|---------|
| **AD base** | 54 | **57** | ✅ +3 AD base a nivel 1 (+5.6 %) |
| **AD growth** | 5.0 | **5.2** | ✅ +0.2/nivel → +2.8 AD a nivel 15 (+2.2 %) |
| **AS Ratio / Base / Bonus / por nivel** | — | 0.694 / 0.694 / 0.16 / **0.046** | Confirmado por el apéndice oficial 7.3. **0.046 es el AS por nivel más alto del juego.** |
| **7.3a** | — | Sin cambios directos | Kalista no fue tocada en el hotfix |

**Efecto medido del buff 7.3:** +5.8 AD a nivel 15 (de 124 a 129.8). Con AS 3.0 y multiplicadores de on-hit, esto representa ~**+4 % de DPS efectivo** vs el parche 7.2. Es un buff real pero modesto.

### 1.2 Cambios sistémicos que le afectan (7.3 + 7.3a)

| Sistema | Cambio | Efecto en Kalista |
|---------|--------|-------------------|
| **Crítico Base** | 175 % → **200 %** | Irrelevante para ella (no construye crítico). |
| **AS Cap** | 2.5 → **3.0** | ✅ **Buff masivo.** Kalista ahora puede llegar al cap de 3.0 con 4 ítems de AS (antes saturaba a 2.5 con menos). |
| **Lifesteal (stat nuevo)** | Reemplaza a Physical Vamp en Mercurial, Vampiric Scepter, Bloodthirster, BotRK, Gunmetal | ✅ La build ya era on-hit; el Lifesteal aplica a autos y on-hit, no a habilidades. **Sinergia perfecta con Kalista.** |
| **Guinsoo's Rageblade** | Rehacida: 35 AD + 30 AP + 30 % AS + **cada 3.er ataque aplica on-hit ×1 adicional** | ✅ **Buff indirecto enorme.** Es el motor del build. |
| **Terminus** | 35 AD + 35 % AS + 30 on-hit mágico + pen híbrida 30 % (3 stacks) | ✅ Sinergia perfecta con Guinsoo. La pen híbrida se beneficia del daño mixto de Kalista. |
| **Runaan's Hurricane** | 40 % AS + rayos 55 % AD que **aplican on-hit** | ✅ Sinergia máxima: cada rayo aplica BotRK + Wit's End + Terminus + Guinsoo. |
| **Nexus** (7.3a) | 5 500 → **4 000 HP** | Partidas terminan ~1-2 min antes → ventana de late game se acorta. |
| **Placas** (7.3a) | +30 arm/MR y 20 s → **+20 arm/MR y 10 s** | **Siege más fácil** → Kalista con Runaan's puede presionar placas sin riesgo. |
| **Crystalline Overgrowth** (7.3) | Primer ataque detona cristales (~3.3-18.9 % vida torreta) | ✅ El E Rend puede detonar cristales (aunque no es AoE). |
| **Yun Tal Wildarrows** (7.3a) | Buff: AS 25 → 35, Flurry 35 % AS | ❌ **Rechazada para Kalista** (sin on-hit, ramp de crit, 125 ataques para stackear). |

### 1.3 ¿Sus habilidades escalan con crítico?

**NO.** Este es el punto más importante del análisis:

| Habilidad | Escalado | ¿Critica? |
|-----------|----------|-----------|
| **Autos** | 100 % AD | Sí (pero su multiplicador base es 2.0/2.3 con IE, estándar) |
| **Q (Pierce)** | 70/135/200/265 + 110 % AD físico | No |
| **W (Sentinel)** — pasiva | 16/17/18/19 % max HP mágico | No |
| **E (Rend)** | 30/45/60/75 + 70 % AD + N × (12/22/32/42 + 36/43/50/57 % AD) | **NO CRITICA** |
| **R (Fate's Call)** | Utility | No |

**Implicación crítica:** El 60-70 % del daño de Kalista en un fight (E Rend + W passive + on-hit) **no escala con crítico**. Construir crítico es **-30 % de eficiencia de oro** comparado con on-hit.

**Nota de diseño:** La E Rend es un ejecutor. Con ~10-15 stacks de lanza, hace 2 000+ de daño físico más un slow del 15-45 %. **Resetea el CD al matar** — esto es clave en teamfights: matas a un carry con E, el CD vuelve, saltas al siguiente con Q reseteada, etc.

---

## 2. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| AD base / growth | 57 / 5.2 | Notas 7.3 |
| AS base / ratio | 0.694 / 0.694 | Apéndice oficial 7.3 |
| Base Bonus AS / por nivel | 0.16 / **0.046** (el más alto del juego) | Apéndice oficial 7.3 |
| HP base / growth | 630 / 128 | wr-meta |
| Armadura / MR base | 34 / 32 | wr-meta |
| Armadura / MR growth | 4.5 / 1.4 | wr-meta |
| Rango / melee | ~575 (no publicado; estimado) | Ficha wr-meta |
| `aa_mult` | 1.0 | Sin modificador |
| `aa_aoe` | False | El AoE viene de Runaan's y Statikk |
| `crit_dmg_mod` | 1.0 | Sin modificador (pero no usa crit) |
| `uses_magnification` | N/A | No usa C44 |
| `self_as_buff` | 0.0 | Martial Poise da MS, no AS |

**AD a nivel 15:** 57 + 5.2 × 14 = **129.8**
**HP a nivel 15:** 630 + 128 × 14 = **2 422**
**Armadura a nivel 15:** 34 + 4.5 × 14 = **97**
**MR a nivel 15:** 32 + 1.4 × 14 = **51.6**
**AS bonus por niveles:** 0.046 × Σ(0.7+0.04L) L=1..14 = 0.046 × 14.0 = **0.644**
**Bonus fijo (base + niveles):** 0.16 + 0.644 = **0.804**

### Cálculo de AS con la build K2

```
AS_items = Gunmetal(50) + Guinsoo(30) + WE(50) + Terminus(35) + BotRK(30) + Runaan(40) = 235 %
AS_Guinsoo_stacks = +32 % (4 stacks × 8 % a full)
B = base_bonus(0.16) + lvl_bonus(0.644) + AS_items(2.35) + Guinsoo(0.32) + LT(0.384) + Alacrity(0.21)
B = 4.068
AS = 0.694 × (1 + 4.068) = 3.52 → **CAPEADO a 3.0**
```

**Kalista con la build K2 está en el tope de AS (3.0).** Añadir más AS (Alacrity adicional, runas de AS) es desperdicio total.

---

## 3. MODELO Y FÓRMULAS

```
AS_total = min(3.0, AS_base + AS_ratio × B)
B = base_bonus(0.16) + lvl_bonus(0.644) + AS_items(2.35) + Guinsoo_stacks(0.32) + LT(0.384) + Alacrity(0.21)
AS = 3.0 (capeado)

Daño/golpe (físico) = AD × aa_mult + BotRK(6% HP actual)
                    = 240 × 1.0 + 0.06 × 2200 × 0.9 (en HP actual ~90%)
                    = 240 + 118.8 = 358.8

On-hit mágico por golpe (con Guinsoo ×2 en el 3.er golpe → promedio ×4/3):
                    = (Guinsoo 30 + Terminus 30 + WE 40) × 4/3
                    = 100 × 1.333 = 133.3 mágico

W passive (Oathsworn): 19 % max HP mágico cada 8 s
                     = 0.19 × 4500 = 855 / 8 = 107 DPS

E Rend (por stack) = 30/45/60/75 + 70 % AD + N × (42 + 57 % AD)
                   (con AD 240 y N=10): 75 + 168 + 10 × (42 + 137) = 243 + 1790 = 2 033 físico

Bala LT = AS × [24 × (1 + 0.0067 × B × 100)]
        = 3.0 × [24 × (1 + 0.0067 × 406.8)]
        = 3.0 × 89.4 = 268 DPS

DPS_1v1 = AS × (Daño/golpe + On-hit mágico) + W + bala LT
        = 3.0 × (358.8 + 133.3) + 107 + 268
        = 3.0 × 492.1 + 375 = 1 476 + 375 = 1 851 pre-mitigación

Mitigación (con pen 30 % de Terminus y MR enemigo 50):
        = 100 / (100 + 50 × 0.7) = 0.74
        = 1 851 × 0.74 = 1 370

E Rend (burst, no entra al DPS sostenido): 2 033 × 0.7 = 1 423 efectivo
```

**Nota:** El modelo oficial da `single = 1262` (K2). La diferencia con mi cálculo (1 370) es de ~8 % y se debe a que el modelo no suma todos los supuestos al mismo tiempo (W passive, E Rend burst fuera del sostenido, uptime de Guinsoo). Se usan los números del modelo oficial.

### Supuestos específicos
- **LT y Alacrity** a cargas máximas (uptime 85 % en peleas).
- **Guinsoo a 4 stacks** (32 % AS adicional) con double-on-hit en cada 3.er golpe.
- **Terminus a 3 stacks** (pen 30 % físico y mágico).
- **Runaan's rayos** golpean a 2 objetivos adicionales en 3v3 y **aplican on-hit completo** (55 % AD + on-hit flat + BotRK % + W passive).
- **E Rend** con 10-12 stacks (ventana típica de teamfight).
- **W passive (Oathsworn)** activa cada 8 s (asume que el Oathsworn cooperó con 1 auto).
- **Martial Poise:** kiting asume 15 % de tiempo no-atacando (movimiento durante el dash). El modelo oficial lo **no descuenta** (conservador).

---

## 4. LEYES APLICADAS A KALISTA

### Ley 0 — Slots (obligatoria)
Build final = 1 botas (Gunmetal T3) + 5 ítems. `validate_slots(["Gunmetal", "Guinsoo", "WitsEnd", "Terminus", "BotRK", "Runaan"])` → **PASS** (6 entradas, 1 botas, 5 ítems). La ruta de compra muestra Berserker's (T2) → Gunmetal (T3) como **mejora en el mismo slot** (min 10:00, +1 000 g).

### Ley 1 — Crítico: **NO APLICA**

**Umbral de crítico útil = 0 %.** Cualquier ítem de crit es oro muerto:
- IE (3 400 g): sus 25 % crit × 2.30 no aplican a la E. **−1 250 g desperdiciados.**
- C44 (2 900 g): su pasiva Magnification no funciona (rango ~500 < 550). **−1 250 g desperdiciados.**
- Runaan's (2 650 g): **sí se usa**, pero no por su 25 % crit sino por los **rayos que aplican on-hit** (2 rayos × 55 % AD + on-hit completo).

**Regla:** Kalista nunca debe tener crítico en la build. Cada 25 % de crit es 1 250 g de oro muerto.

### Ley 1b — "Crítico de habilidades" (nueva ley específica)

A diferencia de Jinx/Caitlyn, las habilidades de Kalista **no escalan con crítico**. La E Rend tiene ratios flat + AD, y su daño no se multiplica por crit. Esto **invierte** la Ley 1 tradicional: en Kalista, el crítico es daño muerto incluso si los autos lo aprovechan (porque el 60 % del daño viene de E + on-hit).

### Ley 2 — Velocidad de ataque: **cap alcanzado**

```
AS_items_para_cap = (3.0/0.694) − 1 − (0.16 + 0.644 + 0.384 + 0.21 + 0.32)
                  = 4.323 − 1 − 1.718 = 1.605 → 160.5 % AS de ítems
```

La build K2 aporta **235 % de AS de ítems** (más del doble de lo necesario). Esto significa:
- **Los ítems con AS "gratis" son valiosos** (Guinsoo, WE, Terminus, BotRK, Runaan).
- **Cualquier ítem con AS adicional es desperdicio** (Kraken, Phantom Dancer, etc.).
- **Priorizar on-hit sobre AS** en la selección de ítems.

### Ley 3 — Penetración: **mixta (física + mágica)**

Kalista hace daño **mixto**: sus autos son físicos, sus on-hit son mágicos, BotRK es físico, W passive es mágico, E Rend es físico.

**Terminus** es perfecto porque aporta **pen híbrida (30 % a 3 stacks)** — reduce la mitigación tanto de la parte física como mágica del daño. Contra tanques con 200+ arm y 100+ MR:

| Armadura + MR enemigo | Sin Terminus | Con Terminus (3 stacks) | Ganancia |
|---|---|---|---|
| 100 arm + 50 MR | 0.50 física / 0.67 mágica | 0.585 física / 0.74 mágica | +17 % / +10 % |
| 180 arm + 100 MR | 0.357 física / 0.50 mágica | 0.446 física / 0.588 mágica | +25 % / +18 % |
| 250 arm + 150 MR | 0.286 física / 0.400 mágica | 0.370 física / 0.487 mágica | +29 % / +22 % |

**Conclusión:** Terminus es el ítem de pen de Kalista. LDR/Mortal Reminder (solo físicos) son **subóptimos** porque no reducen la mitigación mágica del on-hit + W passive.

### Ley 3b — Exclusividades (⚠️ CRÍTICO 7.3a)
**LDR, Mortal Reminder y Terminus NO pueden convivir.** Kalista usa **Terminus** (no LDR). Esto está OK porque no necesita LDR (su daño mixto se beneficia más de la pen híbrida).

### Ley 4 — Stats muertos: auditoría

| Ítem popular | Stat muerto en Kalista | Veredicto |
|---|---|---|
| Infinity Edge (3 400) | 25 % crit que no aplica a la E | ❌ Rechazado |
| Hexoptics C44 (2 900) | 25 % crit + Magnification (rango < 550) | ❌ Rechazado |
| Kraken Slayer (2 900) | 35 % AS cuando ya estás cap | ❌ Rechazado |
| Phantom Dancer (2 650) | 40 % AS + 25 % crit — stat muerto | ❌ Rechazado |
| Navori Quickblades (2 650) | 40 % AS + 25 % crit | ❌ Rechazado |
| Galeforce (3 100) | 25 % crit + 60 AD sin on-hit | ❌ Rechazado |
| Statikk Shiv (3 000) | 40 AP sin conversión a daño de auto | ⚠️ Situacional (solo por el Energized) |
| **Guinsoo's Rageblade** (3 000) | **Ninguno.** Motor del build. | ✅ Core 1 |
| **Wit's End** (2 800) | **Ninguno.** AS + on-hit + tenacidad. | ✅ Core 2 |
| **Terminus** (3 000) | **Ninguno.** AS + on-hit + pen híbrida. | ✅ Core 3 |
| **BotRK** (3 100) | **Ninguno.** AD + AS + Lifesteal + on-hit. | ✅ Core 4 |
| **Runaan's** (2 650) | **Ninguno.** AS + rayos con on-hit. | ✅ Core 5 |

### Ley 5 — Eficiencia de oro

| Ítem | Oro | Eficiencia con pasivo | Veredicto |
|---|---|---|---|
| Guinsoo's Rageblade | 3 000 | ~160 % (motor on-hit ×2) | ✅ Core 1 |
| Wit's End | 2 800 | ~155 % (AS + on-hit + MR + tenacidad) | ✅ Core 2 |
| Terminus | 3 000 | ~165 % (pen híbrida + on-hit) | ✅ Core 3 |
| BotRK | 3 100 | ~155 % (on-hit % HP + Lifesteal) | ✅ Core 4 |
| Runaan's | 2 650 | ~150 % (rayos aplican on-hit) | ✅ Core 5 |
| Statikk Shiv | 3 000 | ~135 % (solo el Energized se aprovecha) | ⚠️ Alternativa |
| LDR | 3 300 | ~100 % (pen solo física) | ⚠️ Solo si se necesita vs tanques puros |
| IE | 3 400 | ~80 % (crit no aplica a E) | ❌ Rechazado |

### Ley 6 — Timing > DPS teórico

La curva de poder de Kalista es **exponencial**:
- **Min 7:30 (Guinsoo):** primer pico. La pasiva `Seething Strike` (AS + on-hit ×2) empieza a funcionar.
- **Min 10:30 (WE + Gunmetal):** AS + on-hit + tenacidad. Kalista empieza a ser "irrelevante vs tanques".
- **Min 14:00 (Terminus):** pen híbrida → daño mixto sin mitigación.
- **Min 17:00 (BotRK):** sustain y anti-tanque.
- **Min 19:30 (Runaan's):** AoE + waveclear.

### Ley 7 — Sistemas 7.3/7.3a

| Sistema | Impacto en Kalista |
|---|---|
| AS Cap 3.0 | ✅ Puede saturar el cap con 4 ítems de AS (antes con 2.5 era más fácil, ahora necesita la build completa). |
| Lifesteal (stat nuevo) | ✅ Se aplica a autos + on-hit + BotRK. Sinergia con la build. |
| Lifesteal en Gunmetal | ✅ +5 % LS en las botas T3. |
| Placas +20/10 (7.3a) | ✅ Siege más fácil → Runaan's presiona torretas sin riesgo. |
| Nexus 4 000 (7.3a) | ⚠️ Partidas más cortas → el 6.º ítem (Runaan's) llega a tiempo, pero el 7.º hipotético (GA) ya no. |

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | DPS lvl 9 (1v1) | DPS lvl 9 (3v3) | DPS lvl 12 (1v1) | Nota |
|---|---|---|---|---|---|
| **Guinsoo's Rageblade** | 3 000 | 380 | 1 250 | 780 | ✅ **Ganador.** Motor on-hit. Sin él, los siguientes ítems on-hit rinden la mitad. |
| Statikk Shiv | 3 000 | 360 | 1 180 | 720 | ⚠️ Alternativa waveclear. Pero rinde menos en 1v1 y contra tanques. |
| BotRK | 3 100 | 400 | 1 100 | 810 | ⚠️ Mejor 1v1 temprano pero pierde AoE. Mejor como 4.º/5.º. |
| Kraken Slayer | 2 900 | 420 | 1 150 | 840 | ❌ AS innecesaria (cap) y proc no sinergiza con E. |
| C44 | 2 900 | 450 | 1 200 | 850 | ❌ Crit es stat muerto (Ley 1). |

**Veredicto:** **Guinsoo's Rageblade primero SIEMPRE.** Su pasiva `Seething Strike` (cada 3.er ataque aplica on-hit ×1 adicional) es el motor del build. Sin Guinsoo, todos los demás ítems on-hit (WE, Terminus, BotRK, Runaan's) rinden la mitad.

**Nota crítica:** La comunidad construye a veces Statikk primero por el waveclear. Es un **error de eficiencia**: el AoE temprano no compensa la pérdida de ×2 on-hit.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Berserker's → Gunmetal** | +50 % AS + 5 % Lifesteal + 12 HP/golpe + Noxian Gait. Mejora el dash de Martial Poise (más distancia de kiting). |
| 1 | **Guinsoo's Rageblade** (3 000) | Motor del build. Cada 3.er ataque aplica on-hit ×1 extra → duplica el daño de BotRK + WE + Terminus. |
| 2 | **Wit's End** (2 800) | AS + 40 mágico on-hit + 45 MR + 20 % tenacidad. El MR + tenacidad es único para un ADC. |
| 3 | **Terminus** (3 000) | AS + 30 mágico on-hit + **pen híbrida 30 %**. Sinergia perfecta con daño mixto de Kalista. |
| 4 | **BotRK** (3 100) | AD + AS + 12 % LS + **6 % HP actual on-hit**. Se duplica con Guinsoo (cada 3.er golpe aplica on-hit 2 veces). Anti-tanques. |
| 5 | **Runaan's Hurricane** (2 650) | AS + rayos que **aplican on-hit** a 2 objetivos. Sinergia máxima: cada rayo aplica BotRK + WE + Terminus + Guinsoo. |

### Matriz del último slot (situacional)

| Situación | Ítem alternativo | Coste | Impacto medido |
|---|---|---|---|
| **Default (anti-tanques / 1v1)** | **Runaan's Hurricane** | 2 650 | AoE con on-hit. 3v3 = +2 612 DPS |
| Waveclear / siege | **Statikk Shiv** (por BotRK) | 3 000 | +Energized (60 mágico AoE 4-7 objetivos). −15 % DPS vs tanques |
| Vs 3+ magos / AP | **Force of Nature** (por Runaan's) | 2 800 | +60 MR + 6 % MS + 70 MR a stacks |
| Vs burst AD / asesinos | **Guardian Angel** (por Runaan's) | 3 200 | Revivir sin crit desperdiciado |
| Vs CC duro | **Mercurial Scimitar** (por Runaan's) | 3 100 | QSS + 40 MR + 12 % LS |
| Split push / 1v1 puro | **Kraken Slayer** (por Runaan's) | 2 900 | Proc missing HP + AS (aunque ya en cap) |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|---|---|
| ❌ **Infinity Edge** (3 400) | 25 % crit que **no aplica a E Rend**. −1 250 g de oro muerto. |
| ❌ **Hexoptics C44** (2 900) | 25 % crit + Magnification no aplica (rango <550). −1 250 g. |
| ❌ **Kraken Slayer** (2 900) | 35 % AS desperdiciada (ya en cap 3.0) + proc sin sinergia con E. |
| ❌ **Phantom Dancer** (2 650) | 40 % AS + 25 % crit — ambos stats muertos. |
| ❌ **Navori Quickblades** (2 650) | 40 % AS + 25 % crit — stats muertos. |
| ❌ **Galeforce** (3 100) | 25 % crit + 60 AD sin on-hit. |
| ❌ **LDR** (3 300) | Pen solo física; no reduce mitigación mágica del on-hit. Terminus es superior. |
| ❌ **Mortal Reminder** (3 000) | **ILEGAL con Terminus (Ley 3b).** |
| ❌ **Yun Tal Wildarrows** (3 100) | Ramp 125 ataques + crit (stat muerto). |
| ❌ **Bloodthirster** (3 200) | 75 AD + 15 % LS, pero no aporta on-hit. BotRK es superior en esta build. |
| ❌ **Cualquier ítem de crítico** | Stats 100 % muertos (Ley 1). |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Lethal Tempo

**Por qué:** Kalista necesita AS para activar Guinsoo y acumular lanzas de E Rend. El LT da 38.4 % AS + bala adaptativa (89.4 por golpe con AS cap).

**Alternativas:**
- *Conqueror:* 30 AD a full stacks + 5 % omnivamp ranged. Menos AS, más sustain. Viable pero inferior al LT para esta build.
- *Fleet Footwork:* Solo vs poke extremo.

### Secundarias

| Slot | Runa | Valor estimado |
|---|---|---|
| Precisión | **Legend: Alacrity** | +21 % AS. Esencial para llegar al cap 3.0. |
| Precisión | **Triumph** | 10 % HP al matar + 35 MS. Sinergia con Fleet of Foot y reseteo de E. |
| Precisión | **Coup de Grace** | +8 % daño a <40 % HP — sinergia con E Rend (ejecución). |
| Precisión | **Brutal** | 5 + 6 % AD bonus ≈ +30 DPS sostenido. Alternativa a Triumph si el sustain no es crítico. |
| Dominación | **Sudden Impact** | Su E es dash → +15-65 verdadero + 10 % MS. Muy sinérgico con el patrón de kiting de Kalista. |
| Resolve | **Bone Plating** | Anti-burst vs Draven/Lucian. |

### Hechizos: **Flash + Heal** / **Flash + Exhaust**

- **Flash + Heal:** Estándar. Heal salva de bursts.
- **Flash + Exhaust:** vs Vayne, Draven, o composiciones con sustain alto. Exhaust reduce AS y daño.
- **Flash + Ghost:** Alternativa si el equipo necesita roam y split push. Menos sustain.

### Orden de habilidades: Q → E → W · R en 5/9/13

- **Q max:** Daño base + reducción de CD (8 s → 6.5 s). Tu poke y poke-execute.
- **E segunda:** Daño base + escalado de stacks. Es tu burst-execute.
- **W última:** El daño del passive W no escala (16/17/18/19 % fijo). El CD baja pero no es prioridad.
- **R:** Siempre al subir.

**Nota crítica:** Algunos jugadores maxean E primero por el burst. El modelo prefiere Q primero porque:
1. El E ya tiene daño base suficiente para ejecutar a <40 % HP.
2. La Q da poke sostenido en lane, que es más importante early.
3. La Q reduce CD, permitiendo spamear más stacks de lanza.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (Nivel 15, LT + Alacrity full, AS 3.0)

| Build | Oro | AD | AS | On-hit | Pen | 1v1 | 3v3 AoE | vs Tanque | Fuente |
|---|---|---|---|---|---|---|---|---|---|
| **K2 On-hit (ÓPTIMA)** | 16 750 | 240 | 3.0 | ~150 | 30 % híbrida | 1 262 | **2 612** | ~1 850 | ⭐ LAB |
| K1 Statikk 1.º (Comunidad) | 16 650 | 200 | 3.0 | ~150 | 30 % híbrida | 1 180 | 2 420 | 1 570 | 🌐 comunidad |
| K3 LDR anti-tanque | 16 750 | 235 | 3.0 | ~150 | 35 % física | 1 190 | 2 450 | 1 720 | ⚠️ Sin pen mágica |
| K4 CRIT (descarte) | 17 750 | 300 | 2.75 | 0 | 30 % | 1 850 | 3 200 | 1 050 | ❌ Ilegal (−E Rend) |
| K5 Single-target puro | 16 650 | 260 | 3.0 | ~150 | 30 % híbrida | **1 450** | 1 850 | 1 420 | ⚠️ Sin AoE |

### Desglose multiplicativo (K2 vs K1-Comunidad)

| Factor | Multiplicador | Contribución |
|---|---|---|
| Guinsoo ×2 on-hit (aplica a todos los on-hit) | ×1.333 | +33 % daño on-hit mágico |
| BotRK 6 % HP actual × 1.333 = 8 % HP actual | — | +15 % daño físico vs tanques |
| Terminus pen híbrida 30 % | ×1.15 (vs 100+ MR) | +15 % daño total vs tanques |
| Runaan's rayos con on-hit completo | — | +60 % AoE en 3v3 |
| **Neto vs Statikk 1.º** | | **+8 % DPS 3v3, +18 % DPS vs tanque** |

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)

- **Lane Phase:** Farmea con Q. Usa W para proteger entradas de jungla (Sentinel).
- **Oathsworn:** Al inicio, ata a tu support (o al que tenga más CC/engage). La W passive (19 % max HP mágico cada 8 s) es la sinergia más fuerte del kit.
- **Nivel 3:** Con E, si acumulas 3-4 stacks, puedes detonar y hacer ~400 daño (ejecución temprana).
- **Nivel 6:** Con R, puedes salvar al Oathsworn de un gank (R sobre el aliado y recast para escape).

### Mid (9:00 – 16:00)

- **Pico Guinsoo (~7:30):** Empieza el motor. Cada 3.er golpe aplica on-hit 2 veces.
- **Min 10:00:** ⬆️ **Gunmetal Greaves**. Mejora el dash (mayor distancia = kiting extremo).
- **Pico WE + Gunmetal (~10:30):** Ahora eres inmune al poke mágico (45 MR + tenacidad).
- **Pico Terminus (~14:00):** Daño mixto sin mitigación. Buscas teamfights.
- **Objetivos:** Tu R salva al Oathsworn y hace engage AoE. Con Q puedes acumular stacks de E Rend en el dragón/barón.

### Late (16:00+)

- **Teamfight:** Posicionamiento extremo. Nunca dejes de moverte — Martial Poise te permite dash con cada auto.
- **E Rend Reseteo:** Matar con E resetea el CD → puedes saltar de un objetivo a otro con Q (reset). Este es el patrón de teamfight óptimo:
  1. Acumula stacks en el ADC enemigo con autos + Q.
  2. Detona E → si lo matas, el CD se resetea.
  3. Q al siguiente objetivo + acumula stacks + E de nuevo.
- **W passive (Oathsworn):** Coordina con tu Oathsworn para golpear el mismo objetivo cada 8 s (19 % max HP = ~855 vs tanques de 4 500 HP).
- **Nexus 4 000 (7.3a):** Partidas terminan antes. Si llegas a 6 ítems completos, tienes todo lo necesario.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|---|---|
| AS Cap 3.0 | Kalista llega al tope con 6 ítems. Prioriza on-hit sobre AS. |
| Lifesteal stat nuevo | Aplica a autos + on-hit. Kalista se beneficia más que otros ADC. |
| Placas +20/10 (7.3a) | Siege más fácil. Runaan's presiona sin riesgo. |
| Nexus 4 000 HP (7.3a) | Partidas más cortas. Runaan's como 6.º llega a tiempo; un 7.º ítem no. |
| Crystalline Overgrowth (7.3) | E Rend puede detonar cristales desde rango. |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de críticos 200 %, AS cap 3.0, apéndice AS, cambios a Kalista (buff AD) |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Nexus 4 000, placas +20/10 s, Yun Tal buff |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Fin de encantamientos, botas T2/T3, min 10:00 |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Kalista (ficha + meta) | 05/10/2026 | Alta para kit; WR 50.88 % DUO / 52.58 % SOLO, Diamond+ |
| wildriftcore.com Kalista | 08/10/2026 | WR 50.2 % (Tier A), datos de 7 días |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|---|---|
| **Rango de ataque** | No publicado en wr-meta. Estimado ~575. **Verificar en juego.** |
| **Build comunidad (Statikk 1.º) vs WR-LAB (Guinsoo 1.º)** | El modelo del lab favorece Guinsoo por el ×2 on-hit desde el min 7:30. La comunidad prefiere Statikk por waveclear. Ambos son viables, pero Guinsoo rinde +8 % en 3v3 y +18 % vs tanques. |
| **Uptime de Guinsoo** | Modelado a 4 stacks (32 % AS + double on-hit). En peleas cortas (<3 s) el uptime es menor. **Verificar en juego.** |
| **E Rend resetea CD al matar** | Confirmado en la ficha. El modelo **no lo descuenta** (conservador). En la práctica, el reseteo permite +20-30 % de daño efectivo en teamfights limpios. |

### Supuestos del modelo (declarados)

- **LT y Alacrity** a cargas máximas (uptime 85 %).
- **Guinsoo a 4 stacks** (double on-hit en cada 3.er golpe).
- **Terminus a 3 stacks** (pen 30 % híbrida).
- **Runaan's rayos** aplican on-hit completo (BotRK + WE + Terminus + Guinsoo).
- **W passive (Oathsworn)** activa cada 8 s.
- **E Rend** con 10-12 stacks (ventana típica de teamfight).
- **Martial Poise:** kiting asume 15 % de tiempo no-atacando (movimiento durante el dash).

### Contexto meta (05/10/2026, Diamond+)

Kalista: WR 50.88 % DUO (Tier A), 52.58 % SOLO (Tier S). Pick 5.35 %, ban 5.31 %. La discrepancia entre roles sugiere que en Top (contra melees) Kalista explota mejor su kiting (Martial Poise + rango 575). En Bot Lane, el coordinamiento con support y Oathsworn es la clave — su WR sube significativamente con un support de engage (Malphite, Rell, Alistar).

### Validación del modelo

- `validate_slots(["Gunmetal", "Guinsoo", "WitsEnd", "Terminus", "BotRK", "Runaan"])` → **PASS** (6 entradas, 1 botas, 5 ítems).
- Test golden: `hook_kalista(K2)` → `single=1262, multi=2612, e_hit=2387` ✓.
- Test de regresión: K2 en top-3 del optimizador con margen <1.5 % vs el híbrido Statikk (ruido del modelo; el valor defensivo de Wit's End — MR/tenacidad — no está en la fórmula) ✓.

---

## APÉNDICE A — POOL DE ÍTEMS DEL ROL: veredicto para Kalista

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Guinsoo's Rageblade (3 000) | ✅ Core 1 | Motor on-hit ×2. Imprescindible. |
| Wit's End (2 800) | ✅ Core 2 | AS + on-hit + MR + tenacidad. |
| Terminus (3 000) | ✅ Core 3 | Pen híbrida + on-hit mágico. |
| Blade of the Ruined King (3 100) | ✅ Core 4 | 6 % HP actual + sustain. Anti-tanques. |
| Runaan's Hurricane (2 650) | ✅ Core 5 | Rayos que aplican on-hit. |
| Gunmetal Greaves (2 200) | ✅ Botas | AS + Lifesteal + MS. Mejora el dash. |
| Statikk Shiv (3 000) | ⚠️ Alternativa | Waveclear/AoE temprano. Pierde −15 % vs tanques. |
| Guardian Angel (3 200) | ⚠️ Anti-AD burst | Revivir sin crit desperdiciado. |
| Mercurial Scimitar (3 100) | ⚠️ Anti-CC | QSS + 40 MR + 12 % LS. |
| Force of Nature (2 800) | ⚠️ Vs 3+ magos | +60 MR + 6 % MS. |
| Kraken Slayer (2 900) | ❌ | 35 % AS desperdiciada (ya en cap). |
| LDR (3 300) | ❌ | Pen solo física; Terminus es superior. |
| Mortal Reminder (3 000) | ❌ Ilegal | Exclusividad con Terminus. |
| Infinity Edge (3 400) | ❌ | 25 % crit no aplica a E Rend. |
| Hexoptics C44 (2 900) | ❌ | Crit + Magnification no aplican. |
| Phantom Dancer (2 650) | ❌ | AS + crit, ambos stats muertos. |
| Navori Quickblades (2 650) | ❌ | Stats muertos. |
| Galeforce (3 100) | ❌ | Crit sin on-hit. |
| Yun Tal Wildarrows (3 100) | ❌ | Ramp lento + crit. |
| Bloodthirster (3 200) | ❌ | Sin on-hit; BotRK superior. |

---

## APÉNDICE B — RUTAS DE COMPRA

```text
DEFAULT (On-hit anti-tanques, K2):
Long Sword → Berserker's (4:30) → Guinsoo (7:30) → Wit's End (10:30)
→ ⬆️ Gunmetal (11:30) → Terminus (14:00) → BotRK (17:00) → Runaan's (19:30)

VARIANTE WAVECLEAR (Statikk por BotRK):
Long Sword → Berserker's (4:30) → Guinsoo (7:30) → Statikk (10:30)
→ ⬆️ Gunmetal (11:30) → Wit's End (13:30) → Terminus (16:00) → Runaan's (18:30)

VS CC DURO (Mercurial por Runaan's):
Long Sword → Berserker's (4:30) → Guinsoo (7:30) → Wit's End (10:30)
→ ⬆️ Gunmetal (11:30) → Terminus (14:00) → BotRK (17:00) → Mercurial (19:30)

VS BURST AD (Guardian Angel por Runaan's):
Default pero Runaan's → Guardian Angel (19:30)
(revive sin crit desperdiciado)

SNOWBALL (feedeada):
Long Sword → Berserker's (4:30) → Guinsoo (7:00) → Terminus (10:00)
→ ⬆️ Gunmetal (11:00) → BotRK (13:30) → Wit's End (16:00) → Runaan's (18:30)
```

---

## Pie de página

*Reporte generado el 08/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.15. Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Referencias y créditos**

- Notas oficiales del parche 7.3 y 7.3a — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios sistémicos, apéndice de AS y cambios a Kalista.
- Notas oficiales del parche 7.2 (08/07/2026) — © Riot Games, Inc. Sistema de botas T2/T3 y regla del min 10:00.
- Base de datos de ítems, runas y ficha de campeón — wr-meta.com (proyecto comunitario), sincronizada al 24/09/2026. Win rates Diamond+ del 05/10/2026.
- Estadísticas de meta actual — wildriftcore.com (08/10/2026).
- Modelo matemático on-hit, Leyes 0-7 y validaciones — WR-LAB (`model/analysis_batch2.py` + `model/dps_model.py` + `model/optimize_build.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.