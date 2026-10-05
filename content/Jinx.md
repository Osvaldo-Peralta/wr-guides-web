---
tags:
  - ADC
  - Marksman
  - Crítico
  - Bot-Lane
version: 1.5
Status: Aprobado
champion: Jinx
slug: jinx
role: adc
patch: "7.3a"
archetype: "Crítico AoE / Hiper-carry de resets"
engine: autos
custom: false
generate: manual
mode: sr
published_at: "2026-10-04"
updated_at: "2026-10-04"
verification: AL_DIA
verified_patch: "7.3a"
---
**Fecha del análisis:** 04/10/2026
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** ADC (Dragon Lane)
**Arquetipo:** Crítico AoE / Hiper-carry de resets
**Enfoque:** Maximizar el daño en área (AoE) con críticos al 230% Incluye **Variante Anti-Tanques** validada matemáticamente para destruir a los meta-tanks de alta vida (Cho'Gath, Dr. Mundo, Malphite) respetando las exclusividades del parche 7.3a.

> [!NOTE]
> **Estado Meta Actual (Diamond+, 03/10/2026):**
> Win Rate 50.91 % | Pick Rate 11.61 % | Ban 0.43 % | Tendencia 0 | Rol: DUO.

> [!TIP]
> **Variante Anti-Tanques (Mundo / Cho'Gath / Malphite):**
> *Trade-off numérico:* Sacrificas ~12 % de DPS en 3v3 (AoE puro) a cambio de **+25 % de DPS contra Tanques** (4 500 HP / 220 Armadura).

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (Ruta Estándar / AoE)
| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | 50 % AS, 5 % Lifesteal, Noxian Gait |
| 2 | **Hexoptics C44** | 2 900 | 55 AD, 25 % Crit, Magnification (+10 % dmg a ≥550u) |
| 3 | **Runaan's Hurricane** | 2 650 | 40 % AS, 25 % Crit, Rayos críticos AoE |
| 4 | **Infinity Edge** | 3 400 | 75 AD, 25 % Crit, Crit Dmg 200 % → 230 % |
| 5 | **Lord Dominik's Regards** | 3 300 | 35 AD, 25 % Crit, 35 % Pen, Giant Slayer +12 % |
| 6 | **Kraken Slayer** | 2 900 | 45 AD, 35 % AS, Bring It Down (missing HP) |

> **Oro total: 17 350 g** · AD 268 · AS 2.83 · Crit 100 % · Pen 35 % · Lifesteal 5 %

### Tabla A2 — BUILD FINAL (Variante Anti-Tanques: Mundo / Cho'Gath / Malphite)
| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | 50 % AS, Lifesteal, MS condicional |
| 2 | **Hexoptics C44** | 2 900 | 55 AD, 25 % Crit, Magnification |
| 3 | **Yun Tal Wildarrows** | 3 100 | 50 AD, 35 % AS, Flurry (+35 % AS), Crit progresivo |
| 4 | **Blade of the Ruined King** | 3 100 | 40 AD, 30 % AS, 12 % LS, **6 % HP actual on-hit** |
| 5 | **Lord Dominik's Regards** | 3 300 | 35 AD, 25 % Crit, 35 % Pen, Giant Slayer +12 % |
| 6 | **Infinity Edge** | 3 400 | 75 AD, 25 % Crit, Crit Dmg 230 % |

> **Oro total: 18 000 g** · AD 275 · AS 2.95 · Crit 100 % (Yun Tal a 125 stacks) · Pen 35 % · Lifesteal 17 %

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
| 8 | Recurve Bow + Long Sword → **Kraken Slayer** | 17 350 | ~20:00 |

### Runas · Hechizos · Habilidades
| Categoría | Elección |
|-----------|----------|
| Keystone | **Lethal Tempo** (6.4 %/stack × 6 = 38.4 % AS + bala 6-24 + 0.67 % por 1 % AS bonus) |
| Precisión 2 | **Legend: Alacrity** (+21 % AS a full stacks) |
| Precisión 3 | **Triumph** (10 % HP restaurada en takedowns + 35 MS para resets) |
| Precisión 4 | **Coup de Grace** (+8 % daño a objetivos <40 % HP) |
| Secundaria 1 | **Gathering Storm** (Escalado late-game) / **Cut Down** (Vs Tanques) |
| Hechizos | **Flash + Heal** (o Ghost si el support no trae peel) |
| Skills | **Q → W → E** (R en 5/9/13). Maxear Q primero por el rango y AoE. |

### Resultado del modelo (Nivel 15, LT full, Pow-Pow x3)
| Escenario | Build C (Estándar) | Variante Anti-Tanques |
|-----------|--------------------|-----------------------|
| **1v1** (pre-mitigación) | **3 042** | **3 115** |
| **3v3** (AoE teamfight) | **10 551** | **9 285** (−12 %) |
| **vs 120 armadura** | **2 150** | **2 451** (+14 %) |
| **vs Tanque** (220 arm, 4 500 HP) | **1 480** | **1 850** (+25 %) |
| **Heal / Sustain** | 186 | 525 |

> **Titular:** La Build C sigue siendo la reina indiscutible del AoE en teamfights (+13 % DPS 3v3), pero la **Variante Anti-Tanques** es matemáticamente obligatoria contra composiciones de Baron Lane/Support con +4 000 HP (Cho'Gath, Mundo), superando a la build estándar en un **+25 % de daño efectivo** gracias al sinergismo BotRK + LDR.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Jinx) — Parche 7.3
| Stat/Habilidad | Antes | Ahora | Impacto |
|----------------|-------|-------|---------|
| AD Growth | 4.5 | **4.0** | ⚠️ Nerf leve al AD base late-game (−7 AD a nivel 15). Se compensa con IE. |
| (R) Super Mega Death Rocket! | CD 50/45/40s | **60/50/40s** | ⚠️ Menos presión global early-mid. |
| (R) Daño | 15 % bAD → 150 % bAD | **12 % bAD → 120 % bAD** | ⚠️ Ejecución de francotirador reducida. |

### 1.2 Cambios sistémicos que le afectan
| Sistema | Cambio | Efecto en Jinx |
|---------|--------|----------------|
| **Crítico Base** | 175 % → **200 %** | ✅ Buff masivo. IE ahora sube a 230 %. Cada 1 % de crit vale más oro. |
| **AS Cap** | 2.5 → **3.0** | ✅ Permite a Jinx llegar a 2.83 AS sin desperdiciar stats con Pow-Pow + LT. |
| **Torretas** | 3 000 → **7 000 HP** + Placas permanentes | ✅ Jinx con Fishbones (Q) limpia placas y detona Cristales (Crystalline Overgrowth) desde rango seguro. |
| **Lethal Tempo** | 4.8 % → **6.4 %** (ranged) | ✅ 38.4 % AS total a 6 stacks. La bala escala con AS bonus total. |

### 1.3 ¿Sus habilidades escalan con crítico?
**No directamente.** Jinx depende 100 % de multiplicar sus autoataques empoderados (Fishbones / Pow-Pow). Por tanto, la **Ley 1 (Umbral de crítico exacto al 100 %)** es innegociable. Cualquier crítico por encima de 100 % es oro muerto.

---

## 2. FICHA MATEMÁTICA (spec)
| Parámetro | Valor | Fuente |
|---|---|---|
| AD base / growth | 58 / 4.0 | Notas oficiales 7.3 |
| AS base / ratio | 0.625 / 0.625 | Apéndice oficial 7.3 |
| Base Bonus AS / por nivel | 0.30 / 0.02 | Apéndice oficial 7.3 |
| Rango / melee | 575 (700 con Fishbones/Q) | Ficha wr-meta |
| Modificadores | `aa_mult` = 1.12 (Fishbones AoE), `aa_aoe` = True, `self_as_buff` = 1.10 (Pow-Pow x3) | WR-LAB `dps_model.py` |

---

## 3. MODELO Y FÓRMULAS
```python
# Núcleo matemático WR-LAB para Jinx (7.3+7.3a)
AS_total = min(0.625 + 0.625 * (0.30 + lvl_bonus + items_AS + 0.384 [LT] + 0.21 [Alac] + 1.10 [Q]), 3.0)
Crit_Mult = 2.30 (con IE)
Magnification = 1.10 (C44 activo a ≥550 unidades)
DPS_1v1 = AS * (AD * 1.12 * Crit_Mult * Magnification * Amp) + Kraken_proc + LT_bullet
DPS_AoE = DPS_1v1 + (Runaan_bolts * 0.55 * AD * Crit_Mult) + Fishbones_splash
Mitigación = 100 / (100 + Armadura * (1 - Pen_pct))
```
### Supuestos específicos
- **LT y Alacrity** a cargas máximas (uptime 85 % en peleas).
- **Magnification** de C44 activa al 10 % (Jinx pelea a 700u con Q).
- **Yun Tal** (Variante Anti-Tanques) modelado a 125 ataques (25 % Crit garantizado en late game).

---

## 4. LEYES APLICADAS A JINX

- **Ley 0 — Slots:** `validate_slots` → **PASS**. 6 slots totales (1 botas T3 + 5 ítems). Nunca listar T2 y T3 por separado.
- **Ley 1 — Crítico:** Umbral exacto **100 %**. Build C: C44 (25) + Runaan's (25) + IE (25) + LDR (25) = 100 %. Anti-Tanques: C44 (25) + Yun Tal (25) + LDR (25) + IE (25) = 100 %. Cero oro muerto.
- **Ley 2 — AS Cap (3.0):** Con Pow-Pow (110 %) + Gunmetal (50 %) + Kraken (35 %) + Runaan's (40 %) + LT (38.4 %) + Alac (21 %) + Niveles (28 %) = **322.4 % bonus**. AS cruda = 2.64. Con Pow-Pow = **2.83**. ✅ Cerca del tope sin overcap.
- **Ley 3 — Penetración %:** LDR (35 %) rinde +23.5 % de daño real vs 120 armadura, y +32 % vs 220 armadura.
- **Ley 3b — Exclusividades (⚠️ CRÍTICO 7.3a):** `items_exclusivos.csv` grupo `pen_pct`. **LDR, Mortal Reminder y Terminus NO pueden convivir**. La variante "Terminus + LDR" de guías antiguas es ILEGAL. Usamos solo LDR para Giant Slayer.
- **Ley 6 — Timing:** C44 al minuto 7:30 (2 900 g) gracias a Noonquiver (1 300 g) que da AD + Crit suave.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM
| Candidato | Oro | DPS lvl 9 1v1 | lvl 9 3v3 | Nota |
|-----------|-----|---------------|-----------|------|
| **Hexoptics C44** | 2 900 | 480 | 1 150 | ✅ **Ganador.** Magnification + Crit base. Path suave (Noonquiver). |
| Kraken Slayer | 2 900 | 510 | 980 | ⚠️ Fuerte 1v1, pero pierde AoE temprano. |
| Yun Tal Wildarrows | 3 100 | 420 | 950 | ❌ Caro. Stacks lentos. Retrasa el pico de Crit. |

**Veredicto:** C44 es el primer ítem óptimo. Su pasiva de distancia sinergiza con Fishbones (700u) y asegura el +10 % de daño en casi todos los trades de lane.

---

## 6. BUILD FINAL RANURA POR RANURA

### Ruta Estándar (AoE / Teamfight)
| Slot | Ítem | Justificación matemática |
|------|------|--------------------------|
| Botas | **Gunmetal Greaves** | 50 % AS esencial. El Lifesteal cubre sustain sin slot extra. |
| 1 | **Hexoptics C44** | 55 AD + 25 % Crit. Magnification activa permanente en peleas a rango. |
| 2 | **Runaan's Hurricane** | Sinergia máxima. Los rayos aplican on-hit y **critican al 230 %**. AoE masivo. |
| 3 | **Infinity Edge** | Salto de 200 % a 230 % crit. Multiplica autos y rayos. Pico de poder absoluto. |
| 4 | **Lord Dominik's Regards** | Cierra 100 % crit. 35 % pen + Giant Slayer. Indispensable vs tanques 7.3. |
| 5 | **Kraken Slayer** | Proc cada 3 golpes + missing HP. AS bienvenida (no hay overcap). |

### 🛡️ MATRIZ SITUACIONAL: Variante Anti-Tanques (Mundo / Cho'Gath / Malphite)
Actualmente, el meta de Baron Lane y Support está dominado por tanques de alta vida y regeneración. Cho'Gath (Tier S+, 34 % ban) escala HP infinito con Feast . Dr. Mundo tiene regeneración masiva. Malphite (Tier S+, 45 % ban) reduce AS con su E .
**La Build C estándar se queda corta contra 5 000 HP.**

| Slot | Ítem Alternativo | Justificación Anti-Tanque |
|------|------------------|---------------------------|
| 3 | **Yun Tal Wildarrows** | **Buff 7.3a:** Flurry otorga +35 % AS condicional. Esto **contrarresta el slow de AS de Malphite** y permite stackear crit rápido. |
| 5 | **Blade of the Ruined King** | **6 % HP actual on-hit.** Contra un Cho'Gath de 5 000 HP, son 300 de daño físico extra por golpe antes de mitigación. Sinergia letal con LDR. |
| *Nota* | *Sacas Runaan's y Kraken* | Sacrificas AoE de teamfight por DPS single-target sostenido y Lifesteal (17 % total) para sobrevivir al poke de Mundo. |

### RECHAZADOS (con motivo numérico)
| Ítem | Motivo del rechazo |
|------|--------------------|
| ❌ **Terminus** | **ILEGAL (Ley 3b).** El juego prohíbe comprarlo si ya tienes LDR. |
| ❌ **Mortal Reminder** | **ILEGAL (Ley 3b).** Mismo grupo de exclusividad que LDR. |
| ❌ **Galeforce** | 25 % crit muerto si ya tienes C44+Runaan+IE+LDR. Stats desperdiciados. |
| ❌ **Phantom Dancer** | Sin AD en 7.3. Jinx necesita AD crudo para escalar Fishbones. |
| ❌ **Statikk Shiv** | Ruta on-hit/energized pierde vs crit-spread en late game post-buff de IE. |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Lethal Tempo
- **Por qué:** 6.4 % × 6 stacks = **38.4 % AS**. Jinx necesita AS para llegar a los 3 cohetes por segundo con Pow-Pow. La bala adaptativa escala con su AS bonus total (llega a pegar ~85 daño verdadero extra por proc).
- *Alternativa:* **Fleet Footwork** solo vs comps de poke extremo (Caitlyn/Varus) donde no te dejan stackear LT.

### Secundarias
| Slot | Runa | Valor estimado |
|------|------|----------------|
| Precisión | **Legend: Alacrity** | +21 % AS. Nunca sobra, ayuda a llegar al cap de 3.0. |
| Precisión | **Triumph** | 10 % HP al matar. Vital para sobrevivir tras usar R y entrar en rango con Get Excited. |
| Precisión | **Coup de Grace** | +8 % daño a <40 % HP. Asegura ejecuciones con W (Zap!) o R. |
| Secundaria | **Gathering Storm** | +AP/AD escalado. Jinx es hiper-carry, esto garantiza el late. |

### Orden de habilidades
**Q → W → E** (R en 5/9/13).
- **Q (Switcheroo!):** Maxear primero. Aumenta el rango de Fishbones y el daño AoE.
- **W (Zap!):** Segunda. Daño base alto + slow para asegurar E.
- **E (Flame Chompers!):** Última. Solo utilidad de CC y zonificación.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (Nivel 15, vs 220 Armadura / 4 500 HP - Escenario Tanque)
| Build | Oro | 1v1 | 3v3 AoE | vs Tanque | Fuente |
|-------|-----|-----|---------|-----------|--------|
| **Óptima AoE (Build C)** | 17 350 | 3 042 | **10 551** | 1 480 | ⭐ LAB (óptima) |
| **Anti-Tanques (BotRK+YunTal)** | 18 000 | 3 115 | 9 285 | **1 850** | 🔬 LAB top-2 |
| Meta Comunidad (Kraken+RFC+IE+LDR) | 17 100 | 2 850 | 8 900 | 1 320 | 🌐 comunidad |
| On-Hit (Guinsoo+BotRK+Terminus) | 16 800 | 2 400 | 6 500 | 1 550 | ❌ Ilegal (Terminus+LDR) |

### Desglose multiplicativo (Build C vs Comunidad)
| Factor | Multiplicador | Contribución |
|--------|---------------|--------------|
| C44 Magnification | ×1.10 | +10 % daño constante a rango seguro |
| Runaan's + IE | ×2.30 | Rayos críticos al 230 % (la comunidad usa RFC que no crita AoE) |
| LDR Giant Slayer | ×1.12 | +12 % vs tanques con >1 200 HP bonus |
| **Neto** | | **+18 % DPS AoE efectivo en teamfights** |

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)
- **Lane Phase:** Farmea con Minigun (Pow-Pow) para stackear AS. Usa Fishbones (Q) solo para pokear con W o asegurar placas de torreta.
- **Min 4:30:** Completa **Berserker's Greaves**. Tu kiting mejora drásticamente.
- **Cristales de Torreta:** Desde el min 5:00, un cohete desde rango seguro detona el cristal (~1 300 daño verdadero). Prioriza la primera placa antes del 5:00.

### Mid (9:00 – 16:00)
- **Pico C44 (~7:30):** Aquí empieza tu hiper-daño. Busca escaramuzas en el río.
- **Min 10:00:** ⬆️ **Gunmetal Greaves**. El Lifesteal te permite mantener HP alto para objetivos.
- **Dragón / Herald:** Quédate atrás. Usa W para revelar, E para cortar retiradas y Q para derretir al objetivo.

### Late (16:00+)
- **Teamfight:** Posicionamiento extremo. Con 100 % crit + IE, cada cohete es un evento de daño masivo en área.
- **Reset de Pasiva (Get Excited!):** Si destruyes una torreta o asistes en una kill, ganas 140 % MS y 25 % AS. Úsalo para reposicionarte o perseguir.
- **R (Super Mega Death Rocket!):** Úsala para asegurar kills globales o robar objetivos épicos. Recuerda que en 7.3a el CD temprano subió a 60s; no la gastes en poke.

### Reglas del parche que cambian el macro
| Regla | Impacto |
|-------|---------|
| Minions 60 % daño a campeones | Limpiar waves con Fishbones es más seguro, pero cuidado si te aggroean. |
| Placas permanentes + decaen desde 5:00 | Prioriza la primera placa antes del 5:00 para maximizar oro. |
| Botas T3 solo desde 10:00 | No intentes mejorar antes; el juego bloquea la compra. |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)
| Fuente | Acceso | Qué aporta |
|--------|--------|------------|
| Notas oficiales 7.3 / 7.3a | 21/09 y 29/09/2026 | Sistema de críticos 200 %, AS cap 3.0, apéndice AS, nerf a Jinx R, buff a Yun Tal. |
| Verificación en juego (03/10/2026) | Tienda WR | Confirmación de **Exclusividad (Ley 3b)**: LDR/Mortal/Terminus no conviven. |

### Fuentes secundarias
| Fuente | Acceso | Fiabilidad |
|--------|--------|------------|
| wr-meta.com Jinx | 24/09/2026 | Alta para kit; build popular es insumo, no conclusión. |
| wildriftcore.com / wr-meta | 03/10/2026 | Win Rate 50.91 %, Tier A, Pick 11.61 %. |

### Discrepancias detectadas y resolución
| Tema | Resolución |
|------|------------|
| Guías sugieren "LDR + Terminus" para doble pen | **RECHAZADO.** El motor del lab asumía pen sumable, pero verificación en juego 03/10 confirmó exclusividad. Corregido en `items_exclusivos.csv`. |
| Yun Tal Wildarrows como 1er ítem | **RECHAZADO.** Stacks lentos (0.2 % por ataque). Retrasa el pico de Crit de C44. |

### Supuestos del modelo (declarados)
- Uptime de Pow-Pow x3: 90 % en peleas prolongadas.
- Magnification de C44 al 10 % (Jinx pelea a >550u).
- Yun Tal modelado a 125 ataques (25 % Crit garantizado en late game).

### Validación del modelo
- `validate_slots(["Gunmetal","C44","Runaan's","IE","LDR","Kraken"])` → **PASS** (6 entradas, 1 botas, 5 ítems, sin T2+T3 duplicadas).
- `validate_slots(["Gunmetal","C44","Yun Tal","BotRK","LDR","IE"])` → **PASS** (Variante Anti-Tanques legal).

---

## APÉNDICE A — POOL DE ÍTEMES DEL ROL: veredicto para Jinx
| Ítem (oro) | Veredicto | Nota |
|------------|-----------|------|
| Hexoptics C44 (2 900) | ✅ Core 1 | Magnification + Crit. Perfecto. |
| Infinity Edge (3 400) | ✅ Core 2 | Multiplicador global 230 %. |
| Lord Dominik's Regards (3 300) | ✅ Core Pen | 35 % Pen + Giant Slayer. |
| Runaan's Hurricane (2 650) | ✅ Core AoE | Rayos críticos. |
| Kraken Slayer (2 900) | ✅ Default 6.º | Proc missing HP. |
| Blade of the Ruined King (3 100) | ⚠️ Anti-Tanque | 6 % HP actual. Obligatoria vs Mundo/Cho. |
| Yun Tal Wildarrows (3 100) | ⚠️ Anti-Tanque | Buff 7.3a. Contrarresta Malphite E. |
| Bloodthirster (3 200) | ⚠️ Sustain | Si necesitas escudo masivo. |
| Guardian Angel (3 200) | ⚠️ Defensivo | Si te focanean asesinos. |
| Mercurial Scimitar (3 100) | ⚠️ Anti-CC | Vs Lux/Ashe/Malphite R. |
| Terminus (3 000) | ❌ Ilegal | Exclusividad con LDR. |
| Mortal Reminder (3 000) | ❌ Ilegal | Exclusividad con LDR. |

## APÉNDICE B — RUTAS DE COMPRA
```text
DEFAULT (AoE / Teamfight):
Long Sword → Berserker's (4:30) → C44 (7:30) → Runaan's (10:30) 
→ ⬆️ Gunmetal (11:30) → IE (14:30) → LDR (17:30) → Kraken (20:00)

ANTI-TANQUES (Vs Mundo / Cho'Gath / Malphite):
Long Sword → Berserker's (4:30) → C44 (7:30) → Yun Tal (11:00) 
→ ⬆️ Gunmetal (12:00) → BotRK (15:00) → LDR (18:00) → IE (21:00)
(El BotRK temprano frena la regeneración de Mundo y el HP de Cho'Gath)

SNOWBALL (Feedeada):
C44 (7:00) → IE (10:30) → Runaan's (13:00) → ⬆️ Gunmetal (14:00) → LDR → Kraken
```

---

## Pie de página
*Reporte generado el 04/10/2026 con datos del parche 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026). WR-LAB v1.14. Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Referencias y créditos**
- Notas oficiales del parche 7.3 y 7.3a — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios sistémicos, apéndice de AS y exclusividad de ítems.
- Base de datos de ítems, runas y fichas — wr-meta.com (proyecto comunitario), win rates Diamond+ del 03/10/2026 .
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (`model/dps_model.py` + `model/optimize_build.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliada, patrocinada ni respaldada por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.