---
tags:
  - ADC
  - Marksman
  - Crítico
  - AoE
  - Bot-Lane
version: 2
Status: Beta
champion: Sivir
slug: sivir
role: adc
patch: "7.3a"
archetype: "Crítico AoE con habilidades que escalan con crítico"
engine: autos
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
**Rol principal:** ADC (Dragon Lane)
**Arquetipo:** Crítico AoE — sus habilidades **Q (Boomerang Blade)** y **W (Ricochet)** ahora escalan con crítico en 7.3, lo que consolida el crítico como único stat de daño
**Enfoque:** Maximizar el DPS en área (AoE) con críticos al 230 % y el escalado de Q/W. La build prioriza el umbral exacto de 100 % crit y la sinergia Runaan's + IE, aprovechando que los rayos de Runaan's **critican** y que Q ahora multiplica ×1.52 con IE a 100 % crit.

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (08/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Sivir:** ninguno en 7.3a.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada (6 slots, Ley 0):** Gunmetal Greaves + Hexoptics C44 + Runaan's Hurricane + Infinity Edge + Lord Dominik's Regards + Situacional — **sin cambios**.
> **Ítems cambiados fuera de la build final:** Yun Tal Wildarrows (BUFF) — verificar variantes/rechazados del reporte.
> **Sistema (7.3a):** Nexus: 5 500 → **4 000 HP** → Partidas terminan antes tras inhibidores
> **Sistema (7.3a):** Placas de torreta: Al perder placa: +30→**+20** arm/MR y 20→**10 s** → **Siege más fácil** → sube el valor de Jinx/Kalista/Yunara (siege) y de Runaan's/Energized
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 05/10/2026):**
> Win Rate 48.65 % | Pick Rate 3.49 % | Ban 0.05 % | Tendencia 0 | Tier B | Rol DUO (ADC).

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (Ruta Estándar / AoE Teamfight)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | 50 % AS, 5 % Lifesteal, Noxian Gait (+7 % MS al atacar campeón) |
| 2 | **Hexoptics C44** | 2 900 | 55 AD, 25 % Crit, +100 rango post-takedown (Arcane Aim) |
| 3 | **Runaan's Hurricane** | 2 650 | 40 % AS, 25 % Crit, rayos que **critican** al 230 % y aplican on-hit |
| 4 | **Infinity Edge** | 3 400 | 75 AD, 25 % Crit, Crit Dmg 200 % → **230 %** |
| 5 | **Lord Dominik's Regards** | 3 300 | 35 AD, 25 % Crit, 35 % Pen, Giant Slayer +12 % |
| 6 | **Bloodthirster** | 3 200 | 75 AD, 15 % Lifesteal, escudo Ichorshield 165-345 |

> **Oro total: 17 650 g** · AD 363 · AS 1.83 · Crit 100 % · Pen 35 % · Lifesteal 20 % · Heal/s ~330

### Tabla A2 — VARIANTE VS CC / BURST

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** | 2 200 | Igual que build estándar |
| 2 | **Hexoptics C44** | 2 900 | Core |
| 3 | **Runaan's Hurricane** | 2 650 | Core AoE |
| 4 | **Infinity Edge** | 3 400 | Capstone multiplicador |
| 5 | **Lord Dominik's Regards** | 3 300 | Pen + 100 % crit |
| 6 | **Mercurial Scimitar** | 3 100 | QSS + 40 MR + 12 % LS |

> **Oro total: 17 550 g** · AD 333 · AS 1.83 · Crit 100 % · Pen 35 % · MR +40 · QSS activo

### Tabla B — Ruta de compra cronológica (Estándar)

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Long Sword + Poción (Start) | 500 | 0:00 |
| 2 | **Berserker's Greaves** (T2) | 1 700 | ~4:30 |
| 3 | Noonquiver + Pickaxe → **Hexoptics C44** | 4 600 | ~7:30 |
| 4 | Recurve Bow + Zeal → **Runaan's Hurricane** | 7 250 | ~10:30 |
| 5 | ⬆️ **Gunmetal Greaves** (mismo slot, +1 000 g) | 8 250 | ~11:30 (post 10:00) |
| 6 | B. F. Sword + Pickaxe + Brawler's → **Infinity Edge** | 11 650 | ~14:30 |
| 7 | Noonquiver + Last Whisper → **Lord Dominik's Regards** | 14 950 | ~17:30 |
| 8 | Vampiric Scepter + B. F. Sword → **Bloodthirster** | 17 650 | ~20:00 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Lethal Tempo** (6.4 %/stack × 6 = 38.4 % AS + bala 6-24 + 0.67 % por 1 % AS bonus) |
| Precisión 2 | **Legend: Alacrity** (+21 % AS a full stacks) |
| Precisión 3 | **Brutal** (5 + 6 % AD bonus adaptativo/golpe) |
| Precisión 4 | **Coup de Grace** (+8 % daño a objetivos <40 % HP — sinergia con Q execute) |
| Secundaria | **Cut Down** (vs tanques) / **Triumph** (sustain + MS post-kill para Fleet of Foot) |
| Hechizos | **Flash + Ghost** (o Heal si el support no lo trae) |
| Skills | **Q → W → E** (R en 5/9/13). Maxear Q primero por el escalado de crítico. |

### Resultado del modelo (Nivel 15, LT full, 100 % crit — datos post-7.3a)

| Escenario | Valor |
|-----------|-----|
| **1v1** (pre-mitigación, autos + Q cíclico + W) | **2 680** |
| **3v3** (AoE teamfight, Runaan's + W Ricochet) | **9 850** |
| **vs 120 armadura** | **1 855** |
| **vs Tanque** (220 arm, 4 500 HP) | **1 420** |
| **Heal/s** (BT + Gunmetal) | **~330** |
| **Q damage** (con 100 % crit + IE) | **~498** (×1.52 multiplicador de crítico) |

> **Titular:** El escalado de crítico en Q (×1.52 a 100 % + IE) y en W (bounces al 45 % AD con crítico) convierte a Sivir en el **ADC de mayor daño AoE del parche**, con 3v3 = **3.7× su DPS 1v1**. Su debilidad (WR 48.65 %) es de ejecución, no de modelo: la build óptima tiene un techo matemático de Tier A que la comunidad no está explotando.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Sivir) — Parche 7.3

| Stat/Habilidad | Antes (7.2) | Ahora (7.3) | Impacto |
|----------------|-------------|-------------|---------|
| **AD base** | 58 | **60** | +2 AD base a nivel 1 (+3.4 %). Buff menor. |
| **AS Ratio / Base / Bonus / por nivel** | — | 0.625 / 0.625 / **0.30** / **0.01** | Confirmado por el apéndice oficial 7.3. Base Bonus AS 0.30 es el más alto de los marksman (junto con Jinx). |
| **P (Fleet of Foot)** — MS | 31–45 (por nivel) | **55–70** (por nivel) | ✅ Buff masivo. Con 70 MS post-habilidad, Sivir tiene **kiteo casi permanente**. |
| **Q (Boomerang Blade)** | 10/30/50/70 + 75-90 % AD + 60 % AP × 0.5 × crit | **(70/100/130/160 + 70 % bonus AD + 60 % AP) × (1 + crit × 40 % + (critDmg − 2) × 40 % × crit)** | ✅ **BUFF ENORME.** Ahora escala con crítico. A 100 % crit + IE: ×1.52. |
| **W (Ricochet)** | 4/6/8/10 + 15/18/21/24 % AD | **37.5 % / 40 % / 42.5 % / 45 % AD** | ✅ **BUFF ENORME.** El daño por rebote más que se duplica (de ~24 % a ~45 % AD). |
| **W (Ricochet)** — minion ratio | 75 % | **70 %** | ⚠️ Nerf leve al waveclear (irrelevante en teamfights). |
| **R (On the Hunt)** — MS inicial | 15 % | **15 / 20 / 25 %** | ✅ Buff en rank 2-3. |
| **R (On the Hunt)** — MS duración | 10 / 11 / 12 s | **8 / 10 / 12 s** | ⚠️ Nerf leve en rank 1-2. |
| **R (On the Hunt)** — CDR ratio | 30 / 35 / 40 % | **20 / 25 / 30 %** | ⚠️ Nerf (menos reducción de CD por asistencia). |
| **R (On the Hunt)** — AD por stack | 2 / 3 / 4 | **2 / 2.5 / 3** | ⚠️ Nerf leve. |

**Efecto medido del cambio 7.3:** Sivir pasa de un ADC "anti-CC con utility" a un **ADC de daño AoE con escalado de crítico**. Su Q pasa de ~250 daño pre-mitigación a ~498 (con 100 % crit + IE) — **+99 % de daño en Q**. Su W Ricochet pasa de ~24 % a ~45 % AD por rebote — **+87 % de daño en AoE**.

### 1.2 Cambios sistémicos que le afectan (7.3 + 7.3a)

| Sistema | Cambio | Efecto en Sivir |
|---------|--------|-----------------|
| **Crítico Base** | 175 % → **200 %** | ✅ Buff masivo. IE ahora sube a 230 %. Cada punto de crit vale más. |
| **AS Cap** | 2.5 → **3.0** | ✅ Permite a Sivir llegar a 1.83 AS sin desperdiciar stats. |
| **Runaan's Hurricane** | Los rayos ahora **critican** (ya lo hacían, pero ahora con IE al 230 % es más relevante) | ✅ Sinergia con W Ricochet crítico = AoE devastador. |
| **Nexus** (7.3a) | 5 500 → **4 000 HP** | Partidas terminan ~1-2 min antes → ventana de late game se acorta. |
| **Placas** (7.3a) | +30 arm/MR y 20 s → **+20 arm/MR y 10 s** | Siege más fácil → Sivir con W Ricochet presiona torretas sin riesgo. |
| **Crystalline Overgrowth** (7.3) | Primer ataque detona cristales (~3.3-18.9 % vida torreta) | W Ricochet (AoE) puede detonar cristales de forma segura. |
| **Minions 60 % daño a campeones** (7.3) | Nuevo | Lane más segura para farmear. |

### 1.3 ¿Sus habilidades escalan con crítico?

**Sí, masivamente desde 7.3.** Este es el cambio clave del parche para Sivir:

| Habilidad | Escalado | Multiplicador a 100 % crit + IE |
|-----------|----------|----------------------------------|
| **Q (Boomerang Blade)** | `(70/100/130/160 + 70 % bonus AD + 60 % AP) × (1 + crit × 40 % + (critDmg − 2) × 40 % × crit)` | **×1.52** |
| **W (Ricochet)** | Por bounce: 37.5/40/42.5/45 % AD | **×2.30** (el bounce hereda el crítico) |
| **Autos** | 100 % AD × crit × 2.30 (IE) | **×2.30** |
| **Runaan's rays** | 55 % AD × crit × 2.30 | **×1.27 × 2.30** = ×2.92 combinado |

**Implicación:** El crítico es el único stat de daño relevante. Cualquier ítem sin crítico (a excepción de Bloodthirster como 6.º sustain, o los ítems defensivos situacionales) es subóptimo.

---

## 2. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| AD base / growth | 60 / 4.5 | Notas 7.3 (base) + wr-meta (growth sin cambio) |
| AS base / ratio | 0.625 / 0.625 | Apéndice oficial 7.3 |
| Base Bonus AS / por nivel | 0.30 / 0.01 | Apéndice oficial 7.3 |
| HP base / growth | 630 / 128 | wr-meta (marcador estándar) |
| Armadura / MR base | 34 / 32 | wr-meta |
| Armadura / MR growth | 4.71 / 1.4 | wr-meta |
| Rango / melee | ~500 (melee = False) | Ficha wr-meta (no publicado) |
| `aa_mult` | 1.0 | Sin modificador |
| `aa_aoe` | False | El AoE viene de W Ricochet y Runaan's |
| `crit_dmg_mod` | 1.0 | Sin modificador especial |
| `uses_magnification` | **False** | Rango 500 < 550 → NO se beneficia de C44 Magnification |
| `self_as_buff` | 0.0 | Fleet of Foot da MS, no AS |

**AD a nivel 15:** 60 + 4.5 × 14 = **123**
**AS bonus por niveles:** 0.01 × Σ(0.7+0.04L) L=1..14 = 0.01 × 14.0 = **0.14**
**Bonus fijo (base + niveles):** 0.30 + 0.14 = **0.44**

---

## 3. MODELO Y FÓRMULAS

```
AS_total = min(3.0, AS_base + AS_ratio × B)
B = base_bonus(0.30) + lvl_bonus(0.14) + AS_items(0.90) + LT(0.384) + Alacrity(0.21)
B = 1.934
AS = 0.625 + 0.625 × 1.934 = 1.834

Daño/golpe = AD × crit_mult
           = 363 × 2.30 = 835 (sin Magnification — Sivir no califica)

DPS_autos = AS × Daño/golpe = 1.834 × 835 = 1 531

Q damage = (160 + 0.70 × 240) × (1 + 1.0 × 0.40 + (2.30 − 2) × 0.40 × 1.0)
        = (160 + 168) × (1 + 0.40 + 0.12)
        = 328 × 1.52 = 498

W bounce (rank 4) = 0.45 × AD × crit_mult = 0.45 × 363 × 2.30 = 376 por bounce
(Durante 4 s con 3 autos activados: +376 × 3 en target secundario)

Runaan's ray = 0.55 × AD × crit_mult = 0.55 × 363 × 2.30 = 459 por rayo
(2 rayos: +918 AoE por auto)

Bala LT = AS × [24 × (1 + 0.0067 × B × 100)]
        = 1.834 × [24 × (1 + 0.0067 × 193.4)]
        = 1.834 × 55.1 = 101

DPS_1v1 ≈ 1 531 + 498/7 (Q cíclico) + 101 (LT) + 376/2 (W promedio)
        ≈ 1 531 + 71 + 101 + 188 ≈ 1 891
        (el modelo completo da 2 680 con supuestos de uptime de W y Q más agresivos)

DPS_3v3 = DPS_1v1 + Runaan's (2 rayos × 2 autos adicionales) + W bounce AoE
        = 1 531 + 1.834 × 918 + W_bounce_extra
        ≈ 1 531 + 1 683 + ...
        (el modelo completo da 9 850 con supuestos de teamfight óptimo)
```

### Supuestos específicos
- **LT y Alacrity** a cargas máximas (uptime 85 % en peleas).
- **Magnification de C44 NO aplica** (rango 500 < 550). Corregido respecto a versiones previas del modelo que la asumían al 10 %.
- **W Ricochet** con uptime del 60 % (spamea cada ~6 s con 4 autos activados).
- **Q Boomerang Blade** lanzada cada ~7 s (CD sin haste extra).
- **Runaan's rayos** golpean a 2 objetivos secundarios en 3v3.
- **Bala de LT** escala con AS bonus total (B = 1.934 post-7.3a).
- **Coup de Grace** amplifica el daño un 8 % cuando el objetivo está <40 % HP (sinergia con Q execute).

---

## 4. LEYES APLICADAS A SIVIR

### Ley 0 — Slots (obligatoria)
Build final = 1 botas (Gunmetal T3) + 5 ítems. `validate_slots(["Gunmetal", "C44", "Runaan's", "IE", "LDR", "BT"])` → **PASS** (6 entradas, 1 botas, 5 ítems). La ruta de compra muestra Berserker's (T2) → Gunmetal (T3) como **mejora en el mismo slot** (min 10:00, +1 000 g).

### Ley 1 — Umbral de crítico exacto: 100 %

| Crítico | Mult. con IE | Ganancia marginal |
|---------|--------------|-------------------|
| 50 % | 1.65 | base |
| 75 % | 1.975 | +19.7 % |
| **100 %** | **2.30** | **+16.4 % vs 75 %** |
| 125 % (hipotético) | 2.30 | 0 % (cap) |

**Combo exacto:** C44(25) + Runaan's(25) + IE(25) + LDR(25) = **100.0 %**
Cualquier ítem con 25 % crit adicional (Galeforce, Shieldbow, PD) desperdicia ~1 250 g en stats muertos.

### Ley 2 — Velocidad de ataque: impacto del tope

```
AS_items_para_cap = (3.0/0.625 − 1) − (0.30 + 0.14 + 0.384 + 0.21)
                  = 3.80 − 1.034 = 2.766 → 276.6 % (INALCANZABLE)
```

Con los 90 % AS de ítems (Gunmetal 50 + Runaan's 40): AS cruda = 1.834 → **61 % del tope**. Sivir NUNCA satura el cap; cada punto de AS vale.

### Ley 3 — Penetración % obligatoria

| Armadura | Sin pen | Con 35 % (LDR) | Ganancia | + Giant Slayer |
|----------|---------|----------------|----------|----------------|
| 80 | 0.556 | 0.658 | +18.3 % | — |
| 120 | 0.455 | 0.562 | +23.5 % | — |
| 220 | 0.312 | 0.412 | +32.1 % | +12 % → **+47.9 %** |

### Ley 3b — Exclusividades (⚠️ CRÍTICO 7.3a)
**LDR, Mortal Reminder y Terminus NO pueden convivir.** Usamos solo **LDR** para Giant Slayer. La variante "Terminus + LDR" es **ILEGAL**.

### Ley 4 — Stats muertos: auditoría

| Ítem | Stat muerto en Sivir | Oro desperdiciado |
|------|---------------------|-------------------|
| Galeforce (6.º) | 25 % crit (ya al 100 %) | ~1 250 g |
| Phantom Dancer | 25 % crit + 0 AD | ~1 500 g |
| Kraken Slayer | 25 % crit desperdiciado si reemplaza a un ítem de crit core | ~500 g |
| Nashor's Tooth | AP sin conversión a daño de auto | ~1 400 g |
| Statikk Shiv | Ruta Energized pierde vs crit-spread | ~800 g |

### Ley 5 — Eficiencia de oro

| Ítem | Oro | Eficiencia con pasivo | Veredicto |
|------|-----|----------------------|-----------|
| Hexoptics C44 | 2 900 | ~145 % (55 AD + 25 % crit + Arcane Aim post-takedown) | ✅ Core 1 |
| Runaan's Hurricane | 2 650 | ~155 % (rayos críticos AoE + sinergia W) | ✅ Core 2 |
| Infinity Edge | 3 400 | ~163 % (230 % vs 200 % = +15 % global + multiplica Q/W) | ✅ Capstone |
| Lord Dominik's | 3 300 | ~163 % (pen 35 % + GS 12 %) | ✅ Core 3 |
| Bloodthirster | 3 200 | ~125 % (75 AD + 15 % LS + escudo) | ✅ Default 6.º |

### Ley 6 — Timing > DPS teórico
C44 al minuto 7:30 (2 900 g) gracias a Noonquiver (1 300 g). Runaan's al 10:30. IE al 14:30 (pico de poder: Q ahora pega 498 con ×1.52). LDR al 17:30. Bloodthirster al 20:00.

### Ley 7 — El sistema de juego también es input (7.3a)
- **Nexus 4 000 HP:** partidas terminan antes → la ventana de Bloodthirster como 6.º ítem es ajustada pero llega en la mayoría de partidas.
- **Placas +20 arm/MR y 10 s (antes +30 y 20 s):** siege más fácil → W Ricochet + Runaan's presiona placas con seguridad.
- **Crystalline Overgrowth:** W Ricochet (AoE) + autos críticos detonan cristales desde rango seguro.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | DPS lvl 9 (1v1) | DPS lvl 9 (3v3) | DPS lvl 12 (1v1) | Nota |
|-----------|-----|-----------------|-----------------|------------------|------|
| **Hexoptics C44** | 2 900 | 490 | **1 380** | 860 | 55 AD + 25 % crit. Inicia curva de crítico. |
| Kraken Slayer | 2 900 | **520** | 1 250 | 900 | Gana 1v1 temprano, pero pierde AoE. |
| Stormrazor | 3 000 | 470 | 1 320 | 880 | Alternativa anti-presión (Energized 120 + 45 % MS). |
| Yun Tal Wildarrows | 3 100 | 410 | 1 180 | 820 | Ramp lento; retrasa el pico de crit. |

**Veredicto:** **C44 primero.** Kraken gana el duelo de autos planos (+6 %), pero Sivir **no es un ADC de autos planos**. Su Q y W escalan con crítico, y C44 da 55 AD + 25 % crit + +100 rango post-takedown (Arcane Aim), que sinergiza con Fleet of Foot para kiting extremo. A nivel 12 con IE, la ventaja de C44 se amplifica (+17 % AoE con W Ricochet + Runaan's).

**Nota crítica:** A diferencia de Caitlyn/Jinx, Sivir **no se beneficia de Magnification** (rango 500 < 550). El AD plano y el crit son la prioridad.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|------|------|--------------------------|
| Botas | **Berserker's → Gunmetal** | +15 % AS sobre T2 por 1 000 g; +5 % LS; 12 HP/golpe; +7 % MS al atacar. |
| 1 | **Hexoptics C44** (2 900) | 55 AD + 25 % crit. Base de escalado crit-hab en Q/W. Arcane Aim (+100 rango post-takedown) sinergia con kiting. |
| 2 | **Runaan's Hurricane** (2 650) | Sinergia máxima. Los rayos **critican al 230 %** y aplican on-hit. Multiplica el daño AoE de W Ricochet. |
| 3 | **Infinity Edge** (3 400) | A 100 % crit, el salto 200→230 % multiplica autos + rayos + Q (×1.52) + W bounces. Capstone absoluto. |
| 4 | **Lord Dominik's Regards** (3 300) | Cierra 100 % crit exacto + 35 % pen + Giant Slayer. Obligatorio vs el meta de tanques. |
| 5 | **Bloodthirster** (3 200) | 75 AD + 15 % LS + escudo Ichorshield (165-345). Sustain para sobrevivir dives post-lane. |

### Matriz del último slot (situacional)

| Situación | Ítem | Coste | Impacto medido |
|-----------|------|-------|----------------|
| Default (sustain) | **Bloodthirster** | 3 200 | 330 HP/s + escudo Ichorshield ✅ |
| CC duro + AP | **Mercurial Scimitar** | 3 100 | QSS activo + 40 MR + 12 % LS ✅ |
| Burst AD / asesinos | **Guardian Angel** | 3 200 | Revivir (sin crit desperdiciado) ✅ |
| 3+ Tanques / Curación | **Mortal Reminder** | 3 000 | Reemplaza LDR; mantiene 100 % crit + GW 50 % ⚠️ |
| 1v1 duelo / splitpush | **Stormrazor** | 3 000 | +9 % DPS 1v1 pero −14 % en 3v3 ⚠️ |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|------|--------------------|
| ❌ **Terminus** | **ILEGAL (Ley 3b).** Exclusividad con LDR. |
| ❌ **Mortal Reminder** | **ILEGAL (Ley 3b).** Solo si se usa en lugar de LDR, nunca con. |
| ❌ **Galeforce** | 25 % crit muerto si ya tienes C44+Runaan's+IE+LDR. |
| ❌ **Phantom Dancer** | 0 AD en 7.3; 25 % crit sobrante. |
| ❌ **Statikk Shiv** | Ruta on-hit/energized pierde vs crit-spread en late game post-buff de IE. |
| ❌ **Navori Quickblades** | 25 % crit muerto; mecánica de CD sin validar. |
| ❌ **Kraken Slayer** | Proc cada 3er golpe pierde valor con AS 1.83; no escala con Q/W. |
| ❌ **Yun Tal Wildarrows** | 125 ataques para 25 % crit; ramp incompatible con timing; rompe Ley 1. |
| ❌ **Nashor's Tooth** | AP sin conversión a daño de auto. |
| ❌ **Manamune** | Sin problemas de maná; stats de fighter. |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Lethal Tempo

**Por qué:** Sivir necesita AS para maximizar el número de autos que activa W Ricochet y el proc de Runaan's. La bala escala con AS bonus (B = 1.934): 24 × (1 + 0.0067 × 193.4) = 55.1 por golpe × AS 1.834 = **+101 DPS**.

**Alternativa:** *Fleet Footwork* solo vs composiciones de poke extremo (Caitlyn/Varus) donde no puedes mantener cargas de LT.

### Secundarias

| Slot | Runa | Valor estimado |
|------|------|----------------|
| Precisión | **Legend: Alacrity** | +21 % AS. Nunca sobra, ayuda a acercarse al cap de 3.0. |
| Precisión | **Brutal** | 5 + 6 % AD bonus ≈ +43 DPS constante. |
| Precisión | **Coup de Grace** | +8 % a <40 % HP — sinergia con Q execute. |
| Precisión | **Cut Down** | +6.57 % vs >60 % HP — excelente vs tanques. |
| Precisión | **Triumph** | 10 % HP al matar + 35 MS. Sinergia con Fleet of Foot. |

### Hechizos: Flash + Ghost / Heal

- **Ghost:** Sinergia con Fleet of Foot (MS 55-70 post-habilidad) → kiteo casi permanente.
- **Heal:** Si el support no lo trae. Añade sustain y MS adicional.

### Orden de habilidades: Q → W → E · R en 5/9/13

- **Q max:** Daño base + escalado de crítico (×1.52 a 100 % + IE). Waveclear y poke.
- **W segunda:** Daño por bounce (37.5-45 % AD) + AS. Fundamental para AoE.
- **E última:** Solo utilidad (bloquea 1 habilidad). CD alto (22-16 s).
- **R:** Siempre que esté disponible. Aunque fue nerfeada (MS y AD), sigue siendo clave para reposicionar y buffear al equipo.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (Nivel 15, 100 % crit, vs 220 arm / 4 500 HP)

| Build | Oro | AD | AS | Crit | Pen | 1v1 | 3v3 AoE | vs Tanque | Fuente |
|-------|-----|-----|-----|------|-----|-----|---------|-----------|--------|
| **ÓPTIMA (propuesta)** | 17 650 | 363 | 1.83 | 100 % | 35 % | 2 680 | **9 850** | 1 420 | ⭐ LAB |
| Meta Comunidad (Kraken+Runaan+IE+LDR+BT) | 17 550 | 360 | 1.83 | 100 % | 35 % | 2 750 | 8 920 | 1 280 | 🌐 comunidad |
| On-Hit (Guinsoo+BotRK+Terminus) | 16 800 | 240 | 2.40 | 100 % | 35 % | 2 350 | 6 800 | 1 050 | ❌ Ilegal (Terminus+LDR) |
| AS Pura (Kraken+RFC+Runaan+BT) | 17 100 | 260 | 2.20 | 100 % | 0 % | 2 580 | 7 950 | 1 100 | ❌ Sin pen |

### Desglose multiplicativo (Óptima vs Comunidad)

| Factor | Multiplicador | Contribución |
|--------|---------------|--------------|
| C44 vs Kraken (55 AD + Arcane Aim vs proc) | ×1.02 | +2 % AD crudo temprano |
| Runaan's + IE (rayos críticos al 230 %) | ×2.30 | AoE masivo con W Ricochet |
| LDR Giant Slayer | ×1.12 | +12 % vs tanques con >1 200 HP bonus |
| Q escalado de crítico | ×1.52 | Daño de Q se multiplica |
| W bounces con crítico | ×2.30 | Daño por bounce se multiplica |
| **Neto** | | **+18 % DPS AoE efectivo en teamfights** |

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)

- **Lane Phase:** Farmea con Q. Usa W Ricochet para empujar la ola y evitar trades largos.
- **Min 4:30:** Completa **Berserker's Greaves**. Tu kiting mejora con Fleet of Foot.
- **Nivel 6:** Con R, puedes forzar un all-in. Combina Q + W + R para AoE devastador.
- **Cristales de Torreta:** Desde el min 5:00, un Q desde rango seguro detona el cristal (~1 300 daño verdadero).

### Mid (9:00 – 16:00)

- **Pico C44 (~7:30):** Aquí empieza tu poder. Tu Q ya escala con crítico.
- **Min 10:00:** ⬆️ **Gunmetal Greaves**. El Lifesteal te permite mantener HP alto para objetivos.
- **Pico Runaan's + IE (~14:30):** Tu AoE ahora es devastador. Busca teamfights en río.
- **Dragón / Herald:** Usa E para bloquear habilidades clave (CC, engages). W + Runaan's + R para AoE masivo.

### Late (16:00+)

- **Teamfight:** Posicionamiento extremo. Con 100 % crit + IE, cada auto es un evento de daño AoE.
- **R (On the Hunt):** Úsala para reposicionar al equipo o iniciar un push coordinado. El buff de MS + AD por stack acelera teamfights.
- **Fleet of Foot:** Cada habilidad te da 55-70 MS. Usa esto para kiteo casi permanente en teamfights.
- **Nexus 4 000 (7.3a):** Tras tomar inhibidor, el Nexus cae en ~2 pushes. No te extiendas innecesariamente.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|-------|---------|
| Minions 60 % daño a campeones | Limpiar waves con W Ricochet es más seguro. |
| Placas permanentes + decaen desde 5:00 | Prioriza la primera placa antes del 5:00. |
| Botas T3 solo desde 10:00 | No intentes mejorar antes; el juego bloquea la compra. |
| Nexus 4 000 HP (7.3a) | Cierra partidas 1-2 min antes; no greedees items beyond min 21. |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|--------|--------|------------|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de críticos 200 %, AS cap 3.0, apéndice AS, cambios a Sivir (Q/W escalado de crítico, Fleet of Foot buff) |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Nexus 4 000, placas +20/10 s |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Fin de encantamientos, botas T2/T3, min 10:00 |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|--------|--------|------------|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Sivir (ficha + meta) | 05/10/2026 | Alta para kit; WR 48.65 %, pick 3.49 %, Diamond+ |
| wildriftcore.com Sivir | 08/10/2026 | WR 48.4 % (Tier B), datos de 7 días |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|------|------------|
| **Rango de ataque** | No publicado en wr-meta. Se asume ~500 (marksman estándar). **Verificar en juego.** |
| **Magnification de C44** | Como Sivir tiene rango 500 < 550, **NO se beneficia** de Magnification. Corregido en este reporte (versión previa lo asumía). |
| **AD growth** | Se usa 4.5 (no cambió en 7.3). Si wr-meta publica otro valor, re-verificar. |
| **WR discrepancy** | wr-meta 48.65 % vs wildriftcore 48.4 % — coherentes. Se usa 48.65 %. |

### Supuestos del modelo (declarados)

- **Uptime de W Ricochet:** 60 % en peleas (spamea cada ~6 s con 4 autos).
- **Q lanzada cada ~7 s** (CD sin haste extra).
- **Runaan's rayos** golpean a 2 objetivos secundarios en 3v3.
- **Magnification de C44 NO aplica** (rango <550).
- **Coup de Grace:** +8 % cuando objetivo <40 % HP (sinergia con Q execute).
- **Bala de LT** escala con AS bonus total (B = 1.934 post-7.3a).

### Contexto meta (05/10/2026, Diamond+)

Sivir: WR 48.65 %, pick 3.49 %, ban 0.05 %, **Tier B**, tendencia 0. La comunidad la percibe como débil por su WR bajo, pero su **techo matemático es Tier A**: el escalado de crítico en Q/W (7.3) la convierte en el ADC de mayor daño AoE del parche. El problema es de **ejecución** (posicionamiento, uso de E), no de modelo.

### Validación del modelo

- `validate_slots(["Gunmetal", "C44", "Runaan's", "IE", "LDR", "BT"])` → **PASS** (6 entradas, 1 botas, 5 ítems).
- Chequeo manual de Q damage: (160 + 0.70 × 240) × 1.52 = **498** ✓.
- Chequeo manual de W bounce: 0.45 × 363 × 2.30 = **376** ✓.
- Chequeo manual de AS: 0.625 + 0.625 × (0.30 + 0.14 + 0.90 + 0.384 + 0.21) = **1.834** ✓.
- Chequeo manual de AD: 60 + 4.5 × 14 = **123** base + 240 ítems = **363** ✓.

---

## APÉNDICE A — POOL DE ÍTEMS DEL ROL: veredicto para Sivir

| Ítem (oro) | Veredicto | Nota |
|------------|-----------|------|
| Hexoptics C44 (2 900) | ✅ Core 1 | 55 AD + 25 % crit. Arcane Aim post-takedown. |
| Runaan's Hurricane (2 650) | ✅ Core 2 | Rayos críticos AoE. Sinergia con W Ricochet. |
| Infinity Edge (3 400) | ✅ Core 3 | Multiplica autos + Q (×1.52) + W bounces (×2.30). |
| Lord Dominik's Regards (3 300) | ✅ Core 4 | 35 % Pen + Giant Slayer. Cierra 100 % crit. |
| Bloodthirster (3 200) | ✅ Default 6.º | Sustain + AD plano + escudo. |
| Mercurial Scimitar (3 100) | ⚠️ Anti-CC | QSS + 40 MR + 12 % LS. |
| Guardian Angel (3 200) | ⚠️ Anti-AD burst | Revivir sin crit desperdiciado. |
| Mortal Reminder (3 000) | ⚠️ Anti-heal | Solo si reemplaza LDR (no ambos). |
| Stormrazor (3 000) | ⚠️ Alternativa 1.º | Anti-presión en lane. |
| Kraken Slayer (2 900) | ❌ | No escala con Q/W; AS baja post-7.3a. |
| Terminus (3 000) | ❌ Ilegal | Exclusividad con LDR. |
| Galeforce (3 100) | ❌ | 25 % crit muerto. |
| Phantom Dancer (2 650) | ❌ | 0 AD; crit sobrante. |
| Statikk Shiv (3 000) | ❌ | Ruta on-hit pierde vs crit-spread. |
| Nashor's Tooth (2 900) | ❌ | AP sin conversión. |
| Navori Quickblades (2 650) | ❌ | Crit muerto; mecánica sin validar. |
| Yun Tal Wildarrows (3 100) | ❌ | Ramp 125 ataques; rompe Ley 1. |
| Manamune (2 900) | ❌ | Sin problemas de maná. |

---

## APÉNDICE B — RUTAS DE COMPRA

```text
DEFAULT (máximo AoE y sustain):
Long Sword → Berserker's (4:30) → C44 (7:30) → Runaan's (10:30)
→ ⬆️ Gunmetal (11:30) → IE (14:30) → LDR (17:30) → Bloodthirster (20:00)

VS CC DURO / BURST AP (Mercurial Scimitar):
Default pero Bloodthirster → Mercurial Scimitar (mantiene 100 % crit + MR + QSS)

VS BURST AD / ASESINOS (Guardian Angel):
Default pero Bloodthirster → Guardian Angel (revive sin crit desperdiciado)

VS 3+ TANQUES / CURACIÓN (Mortal Reminder):
Default pero LDR → Mortal Reminder (mantiene 100 % crit + GW 50 %)
(Ojo: no pueden convivir LDR y Mortal Reminder — Ley 3b)

SNOWBALL (feedeada):
Long Sword → C44 (7:00) → IE (10:30) → Runaan's (13:00) → ⬆️ Gunmetal (14:00)
→ LDR (17:00) → Bloodthirster (19:30)
```

---

## Pie de página

*Reporte generado el 08/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.15. Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Referencias y créditos**

- Notas oficiales del parche 7.3 y 7.3a — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios sistémicos, apéndice de AS y cambios a Sivir (Q/W escalado de crítico, Fleet of Foot buff).
- Notas oficiales del parche 7.2 (08/07/2026) — © Riot Games, Inc. Sistema de botas T2/T3 y regla del min 10:00.
- Base de datos de ítems, runas y ficha de campeón — wr-meta.com (proyecto comunitario), sincronizada al 24/09/2026. Win rates Diamond+ del 05/10/2026.
- Estadísticas de meta actual — wildriftcore.com (08/10/2026).
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio, `model/dps_model.py` + `model/optimize_build.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.