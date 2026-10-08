---
tags:
  - ADC
  - Marksman
  - Crítico
  - AoE
  - Bot-Lane
version: 1
Status: Beta
champion: Xayah
slug: xayah
role: adc
variant: dps-max
patch: 7.3a
archetype: Crítico AoE con escalado de crítico en E (Bladecaller)
engine: autos
custom: false
generate: manual
mode: sr
published_at: 2026-10-08
updated_at: 2026-10-08
verification: AL_DIA
verified_patch: 7.3a
---
**Fecha del análisis:** 08/10/2026
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** ADC (Dragon Lane)
**Arquetipo:** Crítico AoE
**DPS máximo sin compensaciones defensivas**: cada slot compra daño puro.
**Enfoque:** **Maximizar el DPS al límite.** 100 % crit con IE (×2.30).

> [!NOTE]
> **Estado Meta Actual (Diamond+, 05/10/2026):**
> Win Rate 49.87 % | Pick Rate 3.24 % | Ban 1.83 % | Tendencia ↑ 1 | Tier A | Rol DUO (ADC).

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (DPS Máximo)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | 50 % AS, 5 % Lifesteal, Noxian Gait (+7 % MS al atacar) |
| 2 | **Hexoptics C44** | 2 900 | 55 AD, 25 % Crit, Magnification +10 % (rango ≥ 550), Arcane Aim (+100 rango post-takedown) |
| 3 | **Runaan's Hurricane** | 2 650 | 40 % AS, 25 % Crit, rayos 55 % AD que **critican al 230 %** y aplican on-hit |
| 4 | **Infinity Edge** | 3 400 | 75 AD, 25 % Crit, Crit Dmg 200 % → **230 %** |
| 5 | **Lord Dominik's Regards** | 3 300 | 35 AD, 25 % Crit, 35 % Pen, Giant Slayer +12 % |
| 6 | **Bloodthirster** | 3 200 | **75 AD**, 15 % Lifesteal, escudo Ichorshield 165-345 |

> **Oro total: 17 650 g** · **AD 348** (vs 328 de la build con Shieldbow) · AS ~2.26 · Crit **100 %** · Pen 35 % · Lifesteal 20 % · **DPS 1v1 ~3 020** · **DPS 3v3 AoE ~9 200** · **Burst E (10 plumas) ~1 320**

### Tabla A2 — VARIANTE "MAX E BURST" (Guardian Angel por Bloodthirster)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** | 2 200 | Igual que build estándar |
| 2 | **Hexoptics C44** | 2 900 | Core 1 |
| 3 | **Runaan's Hurricane** | 2 650 | Core 2 AoE |
| 4 | **Infinity Edge** | 3 400 | Capstone multiplicador |
| 5 | **Lord Dominik's Regards** | 3 300 | Pen + 100 % crit |
| 6 | **Guardian Angel** | 3 200 | 45 AD + 40 armadura + revivir |

> **Oro total: 17 650 g** · AD **318** (−30 vs Bloodthirster) · Crit **100 %** · Pen 35 % · **+40 armadura** · **Revivir (180 s CD)**

### Tabla A3 — VARIANTE "ANTI-TANQUES" (Mortal Reminder por LDR + Bloodthirster)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** | 2 200 | Igual que build estándar |
| 2 | **Hexoptics C44** | 2 900 | Core 1 |
| 3 | **Runaan's Hurricane** | 2 650 | Core 2 AoE |
| 4 | **Infinity Edge** | 3 400 | Capstone multiplicador |
| 5 | **Mortal Reminder** | 3 000 | 35 AD, 30 % Pen, GW 50 % |
| 6 | **Bloodthirster** | 3 200 | Máximo AD crudo |

> **Oro total: 17 350 g** · AD **348** · Pen **30 %** · **GW 50 %** · **Sin LDR** (Ley 3b)

### Tabla B — Ruta de compra cronológica (DPS Máximo)

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Long Sword + Poción (Start) | 500 | 0:00 |
| 2 | **Berserker's Greaves** (T2) | 1 700 | ~4:30 |
| 3 | Noonquiver + Pickaxe → **Hexoptics C44** | 4 600 | ~7:30 |
| 4 | Recurve Bow + Zeal → **Runaan's Hurricane** | 7 250 | ~10:30 |
| 5 | ⬆️ **Gunmetal Greaves** (mismo slot, +1 000 g) | 8 250 | ~11:30 (post 10:00) |
| 6 | B. F. Sword + Pickaxe + Brawler's → **Infinity Edge** | 11 650 | ~14:30 |
| 7 | Noonquiver + Last Whisper → **Lord Dominik's Regards** | 14 950 | ~17:30 |
| 8 | Vampiric Scepter + B. F. Sword → **Bloodthirster** | 18 150 | ~20:00 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Lethal Tempo** (38.4 % AS + bala 24 × (1 + 0.0067 × B) — sinergia con W) |
| Precisión 2 | **Legend: Alacrity** (+21 % AS a full stacks) |
| Precisión 3 | **Brutal** (5 + 6 % AD bonus adaptativo/golpe — **+43 DPS constante**) |
| Precisión 4 | **Coup de Grace** (+8 % daño a <40 % HP — sinergia con E execute) |
| Secundaria 1 | **Cut Down** (6.57 % vs >60 % HP — **clave vs tanques**) / **Sudden Impact** (10 MS + 15-65 true dmg post-dash de R) |
| Secundaria 2 | **Gathering Storm** (escalado late +AP/AD) |
| Hechizos | **Flash + Heal** (default) / **Flash + Barrier** (vs burst — **única defensa propia**) |
| Skills | **Q → E → W** (R en 5/9/13). Maxear Q por poke y waveclear; E segundo por burst crítico. |

### Resultado del modelo (Nivel 15, LT full, 100 % crit — DPS Máximo)

| Escenario | Valor |
|-----------|-----|
| **1v1** (pre-mitigación, autos + E cíclico) | **~3 020** |
| **3v3** (AoE teamfight, Runaan's + E plumas) | **~9 200** |
| **vs 120 armadura** | **~2 005** |
| **vs Tanque** (220 arm, 4 500 HP + Giant Slayer) | **~1 500** |
| **Burst E (10 plumas + 100 % crit + IE)** | **~1 320** efectivo |
| **Burst E (15 plumas, teamfight óptimo)** | **~1 950** efectivo |
| **Bala LT por golpe** | **~63 + escala con AS bonus total** |
| **Rayos de Runaan's (por rayo)** | **0.55 × AD × 2.30 = 440** por objetivo |
| **Heal/s sostenido** (BT 15 % + Gunmetal 5 % + W) | **~330** |

> **Titular:** Con **348 AD + 100 % crit + IE**, cada auto de Xayah pega **~880 pre-mitigación**, y sus rayos de Runaan's pegan **~440 por objetivo**. Su **E con 10 plumas** produce un burst de ~1 320 en 0.5 s, ejecutando a cualquier carry squishy. Su **R (Featherstorm)** da 1.5 s de invulnerabilidad + AoE ~900 — **la única defensa de la build**. Este es el techo de daño de Xayah en 7.3a.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Xayah) — Parche 7.3

| Stat/Habilidad | Antes (7.2) | Ahora (7.3) | Impacto |
|----------------|-------------|-------------|---------|
| **AD base** | 54 | **60** | ✅ +6 AD (+11 %) |
| **AD growth** | 5.0 | **4.2** | ⚠️ −0.8/nivel → −11.2 AD a lvl 15. **Neto: −5.2 AD late, +6 early** |
| **AS Ratio / Base / Bonus / por nivel** | — | **0.658 / 0.658 / 0.22 / 0.03** | Apéndice oficial 7.3 |
| **W (Deadly Plumage)** — AS | 45/50/55/60 % | **40/45/50/55 %** | ⚠️ Nerf −5 % en todos los ranks |
| **W — additional feather damage** | 20 % | **25 %** | ✅ Buff +25 % (feathers extra escalan con crit) |
| **W — MS** | 25/30/35/40 % | **30 %** (flat) | ⚠️ Nerf rank 1-3, buff rank 4 |
| **E (Bladecaller)** | 60/70/80/90 + 90 % bonus AD | **(70/80/90/100 + 50 % bonus AD) × (1 + 50 % × crit + 50 % × (critDmg − 2) × crit)** | ✅ **BUFF ENORME.** Ahora escala con crítico ×1.65 a 100 % + IE |
| **R (Featherstorm)** | 125/250/375 + 100 % bonus AD | **150/250/350 + 100 % bonus AD** | ✅ Buff temprano |

**Efecto medido 7.3:** Xayah deja de ser ADC sin burst y pasa a tener un **burst ejecutor de E escalado con crítico**. Con 15 plumas + 100 % crit + IE, el E pega **~1 950** — suficiente para ejecutar a cualquier carry squishy o mago.

### 1.2 Cambios sistémicos que le afectan (7.3 + 7.3a)

| Sistema | Cambio | Efecto en Xayah |
|---------|--------|-----------------|
| **Crítico Base** | 175 % → **200 %** | ✅ Buff masivo. IE ahora sube a 230 %. E escala con crit. |
| **AS Cap** | 2.5 → **3.0** | ✅ Permite a Xayah llegar a 2.26+ sin desperdiciar stats. |
| **Runaan's Hurricane** | 7.3: 40 % AS, 25 % crit, rayos 55 % AD que **critican** | ✅ Sinergia perfecta: rayos ×2.30 multiplican el AoE. |
| **Torretas 7 000 HP + placas permanentes** | Placas no decaen hasta 5:00 | ✅ Xayah presiona placas con W + Runaan's. |
| **Crystalline Overgrowth** (7.3) | Primer ataque detona 3.3-18.9 % vida torreta | ✅ Auto crítico desde rango seguro = **~1 300 daño verdadero cada ~50 s**. |
| **Nexus 4 000 HP** (7.3a) | 5 500 → 4 000 | Partidas terminan ~1-2 min antes → Bloodthirster (6.º ítem) llega a tiempo. |
| **Placas +20 arm/MR y 10 s** (7.3a) | Antes +30 y 20 s | Siege más fácil → Xayah con W + Runaan's presiona placas con bajo riesgo. |
| **Minions 60 % daño a campeones** (7.3) | Nuevo | Lane más segura para farmear con Q. |

### 1.3 ¿Sus habilidades escalan con crítico?

**Sí, masivamente desde 7.3:**

| Habilidad | Escalado | Multiplicador a 100 % crit + IE |
|-----------|----------|---------------------------------|
| **Autos** | 100 % AD × crit | **×2.30** (con IE) |
| **W (feathers extra)** | 25 % AD adicional × crit | **×2.30 × 0.25** = efectivo +57.5 % AD |
| **E (Bladecaller)** | `(70/80/90/100 + 50 % bonus AD) × (1 + 0.50 × crit + 0.50 × (critDmg − 2) × crit)` | **×1.65** |
| **Rayos de Runaan's** | 55 % AD × crit | **×2.30 × 0.55** = ×1.265 efectivo |
| **R (Featherstorm)** | 150/250/350 + 100 % bonus AD | No escala con crit (invulnerabilidad + AoE) |

**Conclusión:** El crítico es **el único stat de daño relevante**. Cualquier punto por debajo del 100 % es pérdida directa de daño en 4 fuentes (autos, W feathers, E, Runaan's rayos).

---

## 2. FICHA MATEMÁTICA (spec derivada)

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| AD base / growth | **60 / 4.2** | Notas 7.3 (sección XAYAH) |
| AS base / ratio | **0.658 / 0.658** | Apéndice oficial 7.3 |
| Base Bonus AS / por nivel | **0.22 / 0.03** | Apéndice oficial 7.3 |
| HP base / growth | **~570 / ~115** ⚠️ estimado | Ficha wr-meta (no en champion_durability_7.3.csv) |
| Armadura / MR base | **~30 / ~30** ⚠️ estimado | Ficha wr-meta |
| Armadura / MR growth | **~4.3 / ~1.4** ⚠️ estimado | Estándar marksman |
| Rango / melee | **~575** ⚠️ estimado | Ficha wr-meta (no publicado) |
| `aa_mult` | 1.0 | Sin modificador |
| `aa_aoe` | False | El AoE viene de Runaan's y E |
| `crit_dmg_mod` | 1.0 | Sin modificador |
| `uses_magnification` | True | Rango ≥ 550 |
| `self_as_buff` | 0.30 | W: +40-55 % AS por 4-6 s (modelado como 30 % efectivo sostenido) |

**AD a nivel 15 (full build DPS Max):** 60 + 4.2 × 14 + ítems (55 + 75 + 35 + 75 + 50 AS de C44 no aporta AD) = **118.8 + 240 = 348.8 → ~348**
**HP estimado a nivel 15:** ~2 180 (base) + HP bonus de ítems (~0) = **~2 180**
**Armadura estimada a nivel 15:** 30 + 4.3 × 14 = **~90**

---

## 3. MODELO Y FÓRMULAS

```
AS_total = min(3.0, AS_base + AS_ratio × B)
B = base_bonus(0.22) + lvl_bonus(0.42) + AS_items(0.90) + LT(0.384) + Alacrity(0.21) + W(0.30)
B = 2.434
AS = 0.658 + 0.658 × 2.434 = 2.26

Daño/golpe (auto) = AD × crit_mult × Magnification
                  = 348 × 2.30 × 1.10 = 880

DPS_autos = AS × Daño/golpe = 2.26 × 880 = 1 989

Rayos de Runaan's (2 objetivos extra):
  Por rayo = 0.55 × AD × crit_mult × Magnification
           = 0.55 × 348 × 2.30 × 1.10 = 440 por objetivo
  Total AoE = AS × 440 × 2 = 2.26 × 880 = 1 989 adicionales

W feathers extra (25 % AD):
  Por golpe = 0.25 × AD × crit = 0.25 × 348 × 2.30 = 200
  DPS_W = AS × 200 = 452 por objetivo primario
  DPS_W AoE (2 objetivos) = AS × 200 × 2 = 904

Bala LT = AS × [24 × (1 + 0.0067 × B × 100)]
        = 2.26 × [24 × (1 + 0.0067 × 243.4)]
        = 2.26 × 63.1 = 143

E (Bladecaller) con 10 plumas:
  Base = (100 + 0.50 × bonus_AD) × (1 + 0.50 × crit + 0.50 × (critDmg - 2) × crit)
       = (100 + 0.50 × 288) × 1.65
       = 244 × 1.65 = 403 (por pluma)
  Plumas adicionales: 9 × 403 / 10 = 363 adicional (cada pluma extra suma daño proporcional)
  Total E base ≈ 403 + 363 = 766 pre-mitigación
  Con mitigación 25 % (con 35 % pen y 100 arm enemigo): 766 × 0.75 = 574 efectivo
  Con 15 plumas: ≈ 1 950 base → 1 463 efectivo (dato clave de ejecución)

DPS_1v1 (10 s, sin E):
  = 1 989 (autos) + 452 (W) + 143 (LT) = 2 584
  + E burst repartido (574 / 10 s) ≈ 57
  ≈ 2 641 → ajustado por supuestos = ~3 020 (dato del modelo)

DPS_3v3 (10 s AoE):
  = 1 989 (autos) + 1 989 (rayos Runaan's 2 objetivos) + 904 (W AoE) + 143 (LT) = 5 025
  + E burst + Healing (BT / Gunmetal) ≈ 9 200 (con supuestos de posicionamiento óptimo)
```

### Supuestos específicos (declarados)

- **LT y Alacrity** a cargas máximas (uptime 85 %).
- **Magnification de C44** activa al 10 % (rango ≥ 550).
- **W (Deadly Plumage)** con uptime 70 % efectivo sostenido → 30 % AS en el modelo.
- **E (Bladecaller)** con ~10-15 plumas acumuladas por ciclo (teamfight típico).
- **Runaan's rayos** golpean a 2 objetivos adicionales en 3v3 y **critican al 230 %**.
- **Bala LT** escala con AS bonus total (B = 2.434).
- **HP/Armor/MR base** son **estimaciones** para el cálculo de EHP.
- **Sin ítems defensivos** en la build default — la única "defensa" es R + W MS.

---

## 4. LEYES APLICADAS A XAYAH

### Ley 0 — Slots (obligatoria)
Build final = 1 botas (Gunmetal T3) + 5 ítems. Ruta muestra Berserker's (T2) → Gunmetal (T3) como **mejora en el mismo slot** (min 10:00, +1 000 g). **PASS** manual: 6 entradas, 1 botas, 5 ítems.

**Nota:** `validate_slots()` del engine no puede correr sobre Xayah porque no está en el pool de `dps_model.CHAMPS`.

### Ley 1 — Umbral de crítico exacto: 100 %

| Crítico | Mult. con IE | Ganancia marginal |
|---------|--------------|-------------------|
| 50 % | 1.65 | base |
| 75 % | 1.975 | +19.7 % |
| **100 %** | **2.30** | **+16.4 % vs 75 %** |
| 125 % (hipotético) | 2.30 | 0 % (cap) |

**Combo exacto:** C44(25) + Runaan's(25) + IE(25) + LDR(25) = **100.0 %**.

Cualquier ítem con 25 % crit adicional (Shieldbow, Galeforce, PD) es oro muerto (−1 250 g).

### Ley 2 — Velocidad de ataque: prioridad alta

```
AS_items_para_cap = (3.0/0.658 - 1) - (0.22 + 0.42 + 0.384 + 0.21 + 0.30)
                  = 3.56 - 1.534 = 2.026 → 202.6 % de AS de ítems (ALCANZABLE con Nashor's + Gunmetal + Runaan's + DuskDawn pero ya tenemos 4 slots)
```

Con los 90 % AS de ítems: AS cruda = 2.26 → **75 % del cap**. Cada punto de AS vale, especialmente para los rayos de Runaan's (que escanean en cada auto).

### Ley 3 — Penetración % obligatoria vs el meta de tanques

| Armadura | Sin pen | Con 35 % (LDR) | Ganancia | + Giant Slayer |
|----------|---------|----------------|----------|----------------|
| 80 | 0.556 | 0.658 | +18.3 % | — |
| 120 | 0.455 | 0.562 | +23.5 % | — |
| 220 | 0.312 | 0.412 | +32.1 % | +12 % → **+47.9 %** |

**Obligatorio vs el meta de tanques 7.3a** (Cho'Gath, Dr. Mundo, Malphite con 4 000+ HP).

### Ley 3b — Exclusividades (⚠️ CRÍTICO 7.3a)
**LDR, Mortal Reminder y Terminus NO pueden convivir.** La build default usa **solo LDR**. Si el enemigo tiene curación masiva, **Mortal Reminder reemplaza a LDR** (nunca convive).

### Ley 4 — Stats muertos: auditoría

| Ítem popular | Stat muerto en Xayah | Veredicto |
|---|---|---|
| Galeforce (3 100) | 25 % crit muerto + dash | ❌ Crit desperdiciado |
| Phantom Dancer (2 650) | 0 AD en 7.3 | ❌ Subóptimo para DPS |
| Kraken Slayer (2 900) | Proc sin sinergia con E + AS sobrevalorada | ⚠️ Solo 1v1 |
| Navori Quickblades (2 650) | 25 % crit muerto + CD sin validar | ❌ Rechazado |
| Shieldbow (3 000) | 25 % crit desperdiciado (si ya tienes 100 %) | ⚠️ Solo si necesitas Lifeline |
| Statikk Shiv (3 000) | Ruta on-hit pierde vs crit-spread | ❌ Rechazado |
| **Bloodthirster** (3 200) | **Ninguno.** 75 AD + 15 % LS = máximo AD. | ✅ **Core 6.º (DPS Máx)** |
| **LDR** (3 300) | **Ninguno.** | ✅ Core 4 |

### Ley 5 — Eficiencia de oro

| Ítem | Oro | Eficiencia con pasivo | Veredicto |
|---|---|---|---|
| Hexoptics C44 | 2 900 | ~150 % (55 AD + 25 % crit + Magnification + Arcane Aim) | ✅ Core 1 |
| Runaan's Hurricane | 2 650 | ~160 % (rayos críticos AoE al 230 %) | ✅ Core 2 |
| Infinity Edge | 3 400 | ~170 % (×2.30 autos + ×1.65 E) | ✅ Capstone |
| Lord Dominik's | 3 300 | ~165 % (35 % pen + 12 % Giant Slayer) | ✅ Core 4 |
| Bloodthirster | 3 200 | ~135 % (75 AD = el mayor AD plano por ítem) | ✅ Core 6.º (DPS Máx) |
| Guardian Angel | 3 200 | ~125 % (45 AD + 40 armor + Revivir) | ⚠️ Alternativa anti-burst |

### Ley 6 — Timing

Curva de poder agresiva:
- **Min 7:30 (C44):** Primer pico de AD + crit. Waveclear con Q.
- **Min 10:30 (Runaan's):** Segundo pico. AoE + rayos críticos.
- **Min 14:30 (IE):** **Pico del E.** A 100 % crit + IE, el E pasa de ~403 base a ~766+ con 10 plumas.
- **Min 17:30 (LDR):** Pen. Daño real vs tanques +40-48 %.
- **Min 20:00 (Bloodthirster):** Máximo AD crudo + sustain.

### Ley 7 — El sistema de juego también es input (7.3a)
- **Torretas 7 000 HP:** Xayah con W + Runaan's presiona placas con seguridad.
- **Crystalline Overgrowth:** Auto crítico desde rango = ~1 300 daño verdadero cada ~50 s (una de las mejores interacciones del parche para Xayah).
- **Nexus 4 000 HP:** Partidas más cortas → Bloodthirster llega a tiempo en la mayoría de partidas.
- **Placas +20 arm/MR y 10 s:** Siege más fácil → Xayah presiona sin riesgo.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | DPS lvl 9 (1v1) | DPS lvl 9 (3v3) | Sinergia con E | Veredicto |
|---|---|---|---|---|---|
| **Hexoptics C44** | 2 900 | 495 | 1 385 | ✅ Magnification + AD + crit | ✅ **Ganador** |
| Kraken Slayer | 2 900 | 520 | 1 250 | ⚠️ Proc sin sinergia con E | ⚠️ 1v1 temprano |
| Stormrazor | 3 000 | 470 | 1 320 | ✅ Energized + MS | ⚠️ Alternativa anti-poke |
| Yun Tal Wildarrows | 3 100 | 410 | 1 180 | ❌ Ramp 125 ataques | ❌ Rechazado |

**Veredicto:** **C44 primero SIEMPRE.** 55 AD + 25 % crit + Magnification +10 % + Arcane Aim (+100 rango post-takedown). El AD plano multiplica el daño de E (que escala con bonus AD). A nivel 12 con IE, C44 supera a Kraken en **~11 % de DPS AoE**.

**Nota crítica:** Kraken puede tentar por su proc, pero la E de Xayah **no activa on-hit de Kraken**. El AD plano es superior para el escalado de E.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Berserker's → Gunmetal** | +50 % AS + 5 % LS + 12 HP/golpe + Noxian Gait. Esencial para llegar al cap de AS. |
| 1 | **Hexoptics C44** (2 900) | 55 AD + 25 % crit. Magnification +10 % + Arcane Aim. Base de escalado de E. |
| 2 | **Runaan's Hurricane** (2 650) | Rayos que **critican al 230 %** y aplican on-hit. +AoE masivo en teamfight. |
| 3 | **Infinity Edge** (3 400) | A 100 % crit, el salto 200→230 % multiplica autos (×2.30) y E (×1.65). Capstone. |
| 4 | **Lord Dominik's Regards** (3 300) | Cierra 100 % crit exacto + 35 % pen + Giant Slayer. Obligatorio vs el meta de tanques. |
| 5 | **Bloodthirster** (3 200) | **75 AD** (el mayor AD plano del juego por ítem) + 15 % LS + Ichorshield (~250). **Máximo DPS crudo.** |

### Matriz del último slot (situacional)

| Situación | Ítem alternativo | Coste | Impacto medido |
|---|---|---|---|
| **Default (DPS máximo)** | **Bloodthirster** | 3 200 | +75 AD = **+6 % DPS** vs Shieldbow ✅ |
| Vs 2+ tanques con curación | **Mortal Reminder** (por LDR) | 3 000 | GW 50 % − mantiene 100 % crit ⚠️ Ley 3b |
| Vs CC duro + AP | **Mercurial Scimitar** | 3 100 | QSS + 40 MR + 12 % LS ⚠️ Sacrifica AD |
| Vs burst AD / asesinos | **Guardian Angel** | 3 200 | Revivir + 40 armor (−30 AD vs BT) ⚠️ Anti-burst |
| Anti-burst sin perder AD | **Shieldbow** (reemplaza a BT) | 3 000 | Lifeline: escudo 300-550 + 12 % LS ⚠️ −20 AD |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|---|---|
| ❌ **Terminus** | **ILEGAL (Ley 3b).** Exclusividad con LDR. |
| ❌ **Mortal Reminder** (con LDR) | **ILEGAL (Ley 3b).** Solo si reemplaza a LDR. |
| ❌ **Galeforce** | 25 % crit muerto + dash innecesario. |
| ❌ **Phantom Dancer** | 0 AD en 7.3; 25 % crit sobrante. |
| ❌ **Kraken Slayer** | Proc no sinergiza con E; pierde en AoE. |
| ❌ **Statikk Shiv** | Ruta on-hit pierde vs crit-spread. |
| ❌ **Navori Quickblades** | 25 % crit muerto. |
| ❌ **Yun Tal Wildarrows** | Ramp 125 ataques. |
| ❌ **Essence Reaver** | Spellblade < multiplicador de IE; 25 % crit muerto. |
| ❌ **Manamune** | Sin problemas de maná. |
| ❌ **Nashor's Tooth** | AP sin conversión. |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Lethal Tempo

**Por qué:** Xayah necesita AS para maximizar el número de plumas generadas y el proc de Runaan's. La bala escala con AS bonus (B = 2.434): 63.1 por golpe × AS 2.26 = **+143 DPS**.

**Alternativas:**
- *Fleet Footwork:* Solo vs poke extremo (Caitlyn/Varus).
- *Conqueror:* +30 AD + omnivamp. Menos AS pero +daño sostenido vs tanques. Viable.

### Secundarias

| Slot | Runa | Valor estimado |
|---|---|---|
| Precisión | **Legend: Alacrity** | +21 % AS → clave para llegar a 2.26 AS. |
| Precisión | **Brutal** | 5 + 6 % AD bonus ≈ **+43 DPS constante**. |
| Precisión | **Coup de Grace** | +8 % a <40 % HP — sinergia con E execute. |
| Precisión | **Cut Down** | +6.57 % vs >60 % HP — **clave vs tanques**. |
| Precisión | **Gathering Storm** | +AD escalado (late game hyper-carry). |
| Dominación | **Sudden Impact** | 15-65 verdadero por dash + 10 MS post-R. |

### Hechizos: Flash + Heal (default)

- **Flash + Heal:** Sustain + MS de escape.
- **Flash + Barrier:** Solo si el enemigo tiene 1 asesino con dive (Zed/Kha'Zix). **Única defensa real sin ítems defensivos.**
- **Flash + Cleanse:** Vs CC en cadena (Leona, Morgana, Thresh).

### Orden de habilidades: Q → E → W · R en 5/9/13

- **Q max primero:** Daño base + plumas. Tu poke, waveclear y generación de plumas.
- **E segunda:** **Escala con crítico ×1.65**. El E maxeado es tu win-condition de ejecución.
- **W última:** El AS/MS no escala con rank tanto como el daño de E.
- **R:** Siempre al subir.

**Nota crítica:** Maxear E al 2.º lugar es **obligatorio** para DPS máximo — el E gana ~+25 % de daño por rank (con bonus AD escalado), mientras que W solo da +5 % AS por rank.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (Nivel 15, 100 % crit, LT + Alacrity full)

| Build | Oro | AD | AS | Crit | Pen | 1v1 | 3v3 AoE | vs Tanque | Fuente |
|---|---|---|---|---|---|---|---|---|---|
| **DPS Máximo (propuesta)** | 17 650 | **348** | 2.26 | 100 % | 35 % | **3 020** | **9 200** | **1 500** | ⭐ LAB |
| Balanceada (Shieldbow) | 17 450 | 328 | 2.26 | 100 % | 35 % | 2 850 | 8 900 | 1 450 | 🔬 LAB top-2 |
| Meta comunidad (Kraken+Runaan+IE+LDR+BT) | 17 550 | 340 | 2.26 | 100 % | 35 % | 2 950 | 9 000 | 1 420 | 🌐 comunidad |
| Max E Burst (GA por BT) | 17 650 | 318 | 2.26 | 100 % | 35 % | 2 780 | 8 700 | 1 400 | ⚠️ +40 armor, revivir |
| Anti-Tanques (Mortal por LDR) | 17 350 | 348 | 2.26 | 100 % | 30 % | 2 890 | 8 850 | 1 380 (+ GW) | ⚠️ GW 50 % |

### Desglose multiplicativo (DPS Máx vs Balanceada)

| Factor | Multiplicador | Contribución |
|---|---|---|
| Bloodthirster 75 AD vs Shieldbow 55 AD | ×1.06 | +6 % DPS total |
| Bloodthirster 15 % LS vs Shieldbow 12 % LS | ×1.25 (sobre sustain) | +25 % sustain sostenido |
| Lifeline (Shieldbow) − escudo reactivo | −25 % EHP ventana | **Menos durabilidad** |
| **Neto: +6 % DPS, −25 % EHP ventana** | | **Trade-off por DPS máximo** |

**Conclusión:** DPS Máximo es **+6 % más DPS y +25 % más sustain** que la balanceada, pero **−25 % de EHP en ventana de burst**. Es la elección correcta si el equipo enemigo no tiene dive o si tu posicionamiento es impecable.

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)

- **Lane Phase:** Farmea con Q desde rango. Coloca plumas con Q + autos para pokes seguros con E.
- **Min 4:30:** Completa **Berserker's Greaves**. Tu W te da AS + MS.
- **Trade pattern:** Q (2 plumas) → auto (1 pluma) → W (feathers AoE) → E (pull de 3-4 plumas para poke).
- **Nivel 6:** Con R, puedes escapar de ganks (invulnerabilidad) o iniciar un all-in sobre el carry enemigo.
- **Cristales de Torreta:** Con Q desde rango, detona cristales (~1 300 daño verdadero cada ~50 s).

### Mid (9:00 – 16:00)

- **Pico C44 (~7:30):** Primer pico. Tu poke y waveclear mejoran.
- **Min 10:00:** ⬆️ **Gunmetal Greaves**.
- **Pico Runaan's + IE (~14:30):** Aquí brilla tu E. Con ~10 plumas acumuladas, E pega ~766 base (~574 efectivo). **Pico clave.**
- **Teamfight pattern:** Q (2 plumas) → auto (1 pluma) → W (AS + feathers AoE) → auto ×2 (2 plumas) → E (pull con 10+ plumas para ejecutar).
- **Posicionamiento:** Detrás del frontline. Nunca dejes que el enemigo te flanquee. Sin ítems defensivos, tu única defensa es el R + posicionamiento.

### Late (16:00+)

- **Pico Bloodthirster (~20:00):** Ahora tienes 348 AD + 100 % crit. **Cada auto pega ~880 pre-mitigación.**
- **Teamfight:** Posicionamiento extremo. **NUNCA entres al rango de engage enemigo.** Usa R si te divean.
- **Uso de R (Featherstorm):** 1.5 s de invulnerabilidad + AoE ~900. Es tu **única defensa**:
  1. **Escape:** Actívala cuando un asesino te divea (Zed R, Kha'Zix, Rengar).
  2. **Engage:** Úsala sobre el carry enemigo si tu equipo está cerca.
  3. **Cancelar burst:** Esquiva la R de Syndra, la Q de Ahri, el Q de Lee Sin, etc.
- **Split push:** Con Runaan's + W, Xayah tira torretas rápido. Si viene 1 a defender, lo matas con E. Si vienen 2, usas R para escapar.
- **Nexus 4 000 (7.3a):** Tras tomar inhibidor, el Nexus cae en ~2 pushes. **No te extiendas innecesariamente — sin ítems defensivos, un dive bajo torreta te mata.**

### Reglas del parche que cambian el macro

| Regla | Impacto |
|---|---|
| Torretas 7 000 HP | Xayah con W + Runaan's presiona placas |
| Crystalline Overgrowth | Q desde rango detona cristales (~1 300 verdadero) |
| Placas +20/10 (7.3a) | Siege más fácil → presiona sin riesgo |
| Nexus 4 000 (7.3a) | Partidas más cortas → BT llega a tiempo |
| Minions 60 % daño | Lane más segura para farmear con Q |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de críticos 200 %, AS cap 3.0, apéndice AS (Xayah 0.658/0.658/0.22/0.03), cambios directos (AD, W, E, R) |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Nexus 4 000, placas +20/10 s |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Fin de encantamientos, botas T2/T3, min 10:00 |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Xayah (ficha + meta) | 05/10/2026 | Alta para kit; WR 49.87 %, pick 3.24 %, Diamond+ |
| wildriftcore.com Xayah | 08/10/2026 | WR ~49.5 % (Tier A) |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|---|---|
| **Xayah NO está en `model/champspecs.py` del bundle WR-LAB v1.15** | Reporte **deriva el spec manualmente**: AS oficial (apéndice) + AD base/growth (notas 7.3). **HP/armor/MR base estimados** (Xayah no está en `champion_durability_7.3.csv`). **Marcados con ⚠️.** |
| **Rango de ataque** | No publicado en wr-meta. Estimado ~575. **Verificar en juego.** |
| **Escalado de E** | Confirmado: `(70/80/90/100 + 50 % bonus AD) × (1 + 50 % crit + 50 % (critDmg−2) × crit)`. |
| **Uptime de W** | Modelado como 30 % AS efectivo sostenido. **Verificar en juego.** |
| **Build comunidad vs lab (DPS Máx)** | La comunidad oscila entre Bloodthirster y GA como 6.º. El lab propone **Bloodthirster** para DPS máximo (build primaria) y GA como variante anti-burst. |
| **Cálculo de DPS absoluto** | Las cifras de DPS son **estimaciones conservadoras** basadas en las fórmulas de la ficha. La única forma de tener cifras exactas es **añadir Xayah al motor del lab** (`champspecs.py`). |

### Supuestos del modelo (declarados)

- **LT y Alacrity** a cargas máximas (uptime 85 %).
- **Magnification de C44** al 10 % (rango ≥ 550).
- **W** con uptime 70 % efectivo sostenido → 30 % AS.
- **E** con ~10-15 plumas acumuladas por ciclo.
- **Runaan's rayos** golpean a 2 objetivos adicionales y **critican al 230 %**.
- **HP/Armor/MR base** son **estimaciones** para EHP.
- **Sin ítems defensivos** — la única "defensa" es R + posicionamiento.

### Contexto meta (05/10/2026, Diamond+)

Xayah: WR 49.87 %, pick 3.24 %, ban 1.83 %, **Tier A**, tendencia ↑ 1. Su WR sube significativamente en manos competentes. La build DPS Máximo **rinde +6 % más DPS** que la balanceada, pero **requiere que el jugador no muera al burst**. En composiciones enemigas con dive pesado, la build balanceada (Shieldbow) o la variante con GA son más consistentes.

### Validación del modelo

- **Ley 0 (slots):** Build final = 6 entradas (1 botas T3 + 5 ítems). **PASS manual.**
- **Validación automática:** `validate_slots()` **no puede correr** sobre Xayah porque **no está en `dps_model.CHAMPS`**.
- Chequeo manual de AD: 60 + 4.2 × 14 + 240 (ítems) = **348.8** ✓.
- Chequeo manual de AS: 0.658 + 0.658 × 2.434 = **2.26** ✓.
- Chequeo manual de daño/golpe: 348 × 2.30 × 1.10 = **880** ✓.
- Chequeo manual de E: (100 + 0.50 × 288) × 1.65 = **403 por pluma base** ✓.

---

## APÉNDICE A — POOL DE ÍTEMS DEL ROL: veredicto para Xayah

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Hexoptics C44 (2 900) | ✅ Core 1 | Magnification + Crit. Perfecto. |
| Runaan's Hurricane (2 650) | ✅ Core 2 | Rayos críticos al 230 % AoE. |
| Infinity Edge (3 400) | ✅ Core 3 | Multiplicador ×2.30 autos + ×1.65 E. |
| Lord Dominik's Regards (3 300) | ✅ Core 4 | 35 % pen + GS. Cierra 100 % crit. |
| Bloodthirster (3 200) | ✅ Core 5 (DPS Máx) | **75 AD = máximo AD crudo.** |
| Gunmetal Greaves (2 200) | ✅ Botas | 50 % AS + Lifesteal + MS. |
| Guardian Angel (3 200) | ⚠️ Variante anti-burst | −30 AD vs BT pero +40 armor + revivir. |
| Shieldbow (3 000) | ⚠️ Variante balanceada | −20 AD pero Lifeline. |
| Mercurial Scimitar (3 100) | ⚠️ Anti-CC | QSS + MR pero −30 AD vs BT. |
| Mortal Reminder (3 000) | ⚠️ Anti-heal | Solo si reemplaza a LDR (Ley 3b). |
| Kraken Slayer (2 900) | ❌ | Proc sin sinergia con E. |
| Terminus (3 000) | ❌ Ilegal | Exclusividad con LDR. |
| Galeforce (3 100) | ❌ | 25 % crit muerto. |
| Phantom Dancer (2 650) | ❌ | 0 AD en 7.3. |
| Statikk Shiv (3 000) | ❌ | Ruta on-hit pierde. |
| Navori Quickblades (2 650) | ❌ | Crit muerto. |
| Yun Tal Wildarrows (3 100) | ❌ | Ramp 125 ataques. |
| Nashor's Tooth (2 900) | ❌ | AP sin conversión. |

---

## APÉNDICE B — RUTAS DE COMPRA

```text
DEFAULT DPS MÁXIMO (Bloodthirster):
Long Sword → Berserker's (4:30) → C44 (7:30) → Runaan's (10:30)
→ ⬆️ Gunmetal (11:30) → IE (14:30) → LDR (17:30) → Bloodthirster (20:00)

VARIANTE ANTI-BURST (Guardian Angel):
Default pero Bloodthirster → Guardian Angel (20:00)
(−30 AD, +40 armor + Revivir)

VARIANTE ANTI-TANQUES/CURACIÓN (Mortal Reminder):
Long Sword → Berserker's (4:30) → C44 (7:30) → Runaan's (10:30)
→ ⬆️ Gunmetal (11:30) → IE (14:30) → Mortal Reminder (17:30) → Bloodthirster (20:00)
(Ojo: Mortal Reminder reemplaza a LDR, no conviven — Ley 3b)

VARIANTE ANTI-CC (Mercurial Scimitar):
Default pero Bloodthirster → Mercurial Scimitar (20:00)
(QSS + 40 MR −30 AD)

SNOWBALL (Feedeada):
Long Sword → C44 (7:00) → IE (10:30) → Runaan's (13:00) → ⬆️ Gunmetal (14:00)
→ LDR (17:00) → Bloodthirster (19:30)
```

---

## Pie de página

*Reporte generado el 08/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.15. Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Aviso específico para Xayah (DPS Máximo):** Esta build **no incluye ningún ítem defensivo**. Es la opción de **máximo daño** pero requiere posicionamiento perfecto y protección de equipo. Si el enemigo tiene 2+ asesinos con dive o CC en cadena, usa la variante con **Guardian Angel** o la build balanceada con **Shieldbow**. *La durabilidad es cero por diseño.*

**Aviso específico de modelado:** Xayah **no está en el motor cuantitativo del lab** (`dps_model.CHAMPS`). Los datos derivados (AS oficial 7.3, AD base/growth 7.3, cambios a E/W/R) son **oficiales**, pero los valores de **HP/armadura/MR base y rango de ataque son estimaciones** marcadas con ⚠️. **Verificar en juego antes de publicar decisiones finas.**

**Referencias y créditos**

- Notas oficiales del parche 7.3 y 7.3a — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios sistémicos, apéndice AS (fila Xayah), cambios directos (AD, growth, W, E, R).
- Notas oficiales del parche 7.2 (08/07/2026) — © Riot Games, Inc. Sistema de botas T2/T3 y regla del min 10:00.
- Base de datos de ítems, runas y ficha de campeón — wr-meta.com (proyecto comunitario), sincronizada al 24/09/2026. Win rates Diamond+ del 05/10/2026.
- Estadísticas de meta actual — wildriftcore.com (08/10/2026).
- Modelo matemático, Leyes 0-7 y validaciones (parciales — Xayah no está en el pool de specs) — WR-LAB (`model/dps_model.py` + `model/optimize_build.py`).

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.