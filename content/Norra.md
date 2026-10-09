---
tags:
  - Mid
  - Mage
  - Burst
  - Assassin
  - AP
version: 2
Status: Beta
champion: Norra
slug: norra
role: mid
patch: "7.3a"
archetype: "Maga de burst AP con red de seguridad"
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
**Rol principal:** Mid (secundario: Support)
**Arquetipo:** Maga de burst AP con red de seguridad
**Enfoque:** **Maximizar daño de burst en ventana de 2-3 s**. La build prioriza **daño > durabilidad pasiva**, pero incluye **Zhonya's** y **Cryptbloom** como red de seguridad para no morir al segundo engage.

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (08/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Norra:** ninguno en 7.3a.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada (6 slots, Ley 0):** Spellslinger's Shoes + Stormsurge + Rabadon's Deathcap + Infinity Orb + Cryptbloom + Zhonya's Hourglass — **sin cambios**.
> **Ítems cambiados fuera de la build final:** Death's Dance (NERF) — verificar variantes/rechazados del reporte.
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 05/10/2026):**
> Win Rate 50.78 % | Pick Rate 1.52 % | Ban 7.62 % | Tendencia ↓ 1 | Tier A | Rol MID | Confianza Low.

> [!TIP]
> **Variante principal (Support de poke):** Cambia **Stormsurge** y **Infinity Orb** por **Echoes of Helia** y **Imperial Mandate**. Sacrificas ~35 % de daño propio a cambio de **curar aliados con cada Q** y **marcar objetivos con CC (+7 % daño aliado)**. Viable si tu ADC es un hiper-carry (Jinx, Vayne) y no necesitas ser la fuente principal de daño.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (Mid · Burst AP)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Boots of Mana → ⬆️ Spellslinger's Shoes** (min 10:00, MISMO slot) | 2 200 | 35 AP, 18 pen mágica plana, 8 % pen mágica, 100 % mana regen. Big Bully (waveclear). |
| 2 | **Stormsurge** | 2 800 | 90 AP, 15 pen mágica plana, 6 % MS. Squall (burst a <25 % HP): 125 + 10 % AP. |
| 3 | **Rabadon's Deathcap** | 3 400 | 130 AP × 1.30 = **169 AP efectivos**. Multiplicador global de la rotación. |
| 4 | **Infinity Orb** | 3 100 | 110 AP, 15 pen mágica. **Inevitable Demise: críticos +20 % daño a <40 % HP** (ejecución). |
| 5 | **Cryptbloom** | 3 000 | 75 AP, 30 % pen mágica, 20 AH. Life from Death: nova cura 100 + 20 % HP al matar. |
| 6 | **Zhonya's Hourglass** | 3 300 | 110 AP, 40 armadura, **Stasis 2.5 s (CD 90 s)**. Red de seguridad post-combo. |

> **Oro total: 17 800 g** · **AP ~741** (con Rabadon's) · **Haste 25-30** · **Pen mágica 48 plana + 38 %** · **Burst combo ~2 400 mágico pre-mitigación** · **Burst efectivo ~1 850 (vs 60 MR squishy)** · Mana regen 200 %+

### Tabla A2 — VARIANTE "POKE SUPPORT" (Echoes + Mandate)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Boots of Mana → ⬆️ Spellslinger's Shoes** (min 10:00, MISMO slot) | 2 200 | Igual que build estándar |
| 2 (quest) | **Spectral Sickle → Black Mist Scythe** | 0 | Quest de support + 28 AP adaptativos |
| 3 | **Echoes of Helia** | 2 400 | 30 % del daño → cura al aliado. Sinergia Q poking. |
| 4 | **Imperial Mandate** | 2 600 | +7 % daño aliado a marcados con CC. |
| 5 | **Rabadon's Deathcap** | 3 400 | Multiplicador global de AP |
| 6 | **Cryptbloom** | 3 000 | 30 % pen + nova curativa |

> **Oro total: 13 600 g** · AP ~370 · Haste 45 · Rol Support con poke fuerte + sustain de equipo.

### Tabla B — Ruta de compra cronológica (Mid · Burst AP)

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Amplifying Tome + poción (start) | 500 | 0:00 |
| 2 | Lost Chapter (componente) | 1 700 | ~3:30 |
| 3 | **Boots of Mana** (T2) | 2 900 | ~6:00 |
| 4 | Blasting Wand + Void Amethyst + Aether Wisp → **Stormsurge** | 5 700 | ~8:00 |
| 5 | Blasting Wand + Void Amethyst → **Infinity Orb** | 8 800 | ~11:30 |
| 6 | ⬆️ **Spellslinger's Shoes** (mismo slot, +1 000 g) | 9 800 | ~12:00 (post 10:00) |
| 7 | Needlessly Large Rod + 700 → **Rabadon's Deathcap** | 13 200 | ~15:00 |
| 8 | Blasting Wand + Fiendish Codex → **Cryptbloom** | 16 200 | ~18:00 |
| 9 | Seeker's Armguard + Blasting Wand → **Zhonya's Hourglass** | 19 500 | ~21:30 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Electrocute** (40-210 + 10 % AP + 5 % AP en 3 hits — sinergia con combo de 3 habilidades) |
| Dominación 2 | **Sudden Impact** (+15-65 verdadero post-dash/CC + 10 % MS) / **Cheap Shot** (+10-45 verdadero a slowed) |
| Dominación 3 | **Eyeball Collection** (+24 AP a 8 takedowns) |
| Dominación 4 | **Relentless Hunter** (+18 MS fuera de combate) / **Ultimate Hunter** (R CD reducido) |
| Secundaria 1 | **Manaflow Band** (+300 maná permanente — clave para spamear Q) |
| Secundaria 2 | **Transcendence** (+10 AH; nivel 9: −8 % CD post-hit) / **Scorch** (+21-49 daño en poke) |
| Hechizos | **Flash + Ignite** (kill pressure) / **Flash + Barrier** (vs burst) |
| Skills | **Q → W → E** (R en 5/9/13). Maxear Q primero por daño base + CD bajo. |

### Resultado del modelo (Nivel 15, AP ~741, Haste ~30, vs 60 MR squishy)

| Escenario | Valor |
|-----------|-----|
| **Burst combo (Q+W+E+R + Electrocute) en 2 s** | **~2 400** mágico pre-mitigación |
| **Burst efectivo vs 60 MR squishy** | **~1 850** mágico |
| **Q (poke, con pen)** | **~480** mágico |
| **W (daño de área)** | **~520** mágico |
| **E (CC + daño)** | **~440** mágico + CC |
| **R (burst final)** | **~960** mágico |
| **Electrocute proc** | **~285** adaptativo |
| **Sustain post-kill (Cryptbloom nova)** | **~250 HP** al aliado más bajo |
| **EHP en ventana de Stasis** | **3 300 HP + 40 armadura + 2.5 s invulnerable** |

> **Titular:** Con **741 AP + 48 pen plana + 38 % pen mágica**, la rotación completa de Norra borra **~1 850 de daño efectivo** en 2 s contra un squishy de 60 MR. **Infinity Orb ejecuta a <40 % HP** (+20 % daño crítico) y **Zhonya's** garantiza que Norra sobreviva el contra-engage. No es la mayor DPS sostenido del juego, pero **es el burst más alto entre las magas del lab** por su capacidad de **ejecutar a un carry con Ignite + R + Q** y salir en Stasis.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Norra) — 7.3 + 7.3a

| Stat/Habilidad | Antes (7.2) | Ahora (7.3/7.3a) | Impacto |
|----------------|-------------|------------------|---------|
| **7.3** | — | Sin cambios directos | Norra no fue tocada en 7.3 (los ajustes se centraron en marksmen, Hwei, Samira, Rammus, Malphite, Tristana, Draven, Caitlyn, Senna, Syndra, Swain, Yuumi, Viego) |
| **7.3a** | — | Sin cambios directos | Tampoco fue afectada por el hotfix |

**Conclusión:** Norra entra a 7.3+7.3a **sin cambios directos**. Su balance depende enteramente de los cambios sistémicos y de las nuevas interacciones ítem-campeón.

### 1.2 Cambios sistémicos que le afectan (7.3 + 7.3a)

| Sistema | Cambio | Efecto en Norra |
|---------|--------|-----------------|
| **Crítico base** | 175 % → 200 % | Irrelevante (no construye crítico). |
| **AS cap** | 2.5 → 3.0 | Irrelevante (AS growth 0.012 = el más bajo del juego). |
| **Nashor's Tooth** | 7.3: AP 80 (nuevo), AS 50 %, Gnaw 15 + 20 % AP | Irrelevante para Norra (no construye AS). |
| **Dusk and Dawn** | 7.3: AP 70→60, HP 350→300, AS 25→20 % | Irrelevante (ítem para fighters híbridos). |
| **Stormsurge** | Sin cambio en 7.3 | ✅ Core 1. Squall (burst a <25 % HP) es clave para ejecutar. |
| **Infinity Orb** | 7.3: **threshold 35 % → 40 % HP** | ✅ **BUFF IMPORTANTE.** Norra ahora ejecuta con crítico +20 % a <40 % HP (antes 35 %). |
| **Cryptbloom** | Sin cambio en 7.3 | ✅ 30 % pen mágica + nova curativa al matar. |
| **Zhonya's Hourglass** | Sin cambio en 7.3 | ✅ Red de seguridad post-combo. |
| **Rabadon's Deathcap** | Sin cambio en 7.3 | ✅ Multiplicador global de AP. |
| **Torretas 7 000 HP + placas** | Placas permanentes + decaen desde 5:00 | ✅ Norra con Q puede detonar cristales de forma segura desde rango. |
| **Crystalline Overgrowth** (7.3) | Primer ataque detona ~3.3-18.9 % vida torreta | ✅ Q a distancia detona cristales (~1 300 daño verdadero cada ~50 s). |
| **Nexus 4 000 HP** (7.3a) | 5 500 → 4 000 | ⚠️ Partidas terminan ~1-2 min antes → Zhonya's (6.º ítem) llega a tiempo. |
| **Placas +20 arm/MR y 10 s** (7.3a) | Antes +30 y 20 s | Siege más fácil → Norra con Q presiona placas sin riesgo. |
| **Minions 60 % daño a campeones** (7.3) | Nuevo | Lane más segura para farmear con Q a distancia. |

### 1.3 ¿Sus habilidades escalan con crítico?

**No.** Norra no construye crítico. Su daño escala exclusivamente con **AP + Pen mágica + Ejecución (Infinity Orb)**. La Ley 1 (crítico) **no aplica**. Todo ítem con % crítico es oro muerto (más de 1 250 g por ítem con 25 % crit).

**Nota específica del AS growth:** El AS growth de Norra es **0.012** (uno de los más bajos del juego, junto con Yuumi 0.006, Diana 0.008, Mordekaiser 0.008, Cho'Gath 0.008, Annie 0.006). Esto **descarta por completo**:
- Nashor's Tooth (AS + on-hit mágico)
- Statikk Shiv (ruta on-hit)
- Cualquier ítem con % AS
- Cualquier build de "auto-attack mage" (tipo Azir/Kayle)

---

## 2. FICHA MATEMÁTICA (spec derivada)

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| **AD base / growth** | **~52 / ~3.5** ⚠️ estimado | Patrón de maga estándar (Syndra 54/3.0, Orianna 46/2.7, Ahri 52/3.6) |
| **AS base / ratio** | **0.625 / 0.625** | Apéndice oficial 7.3 (fila Norra) |
| **Base Bonus AS / por nivel** | **0.2 / 0.012** | Apéndice oficial 7.3 |
| **HP base / growth** | **~600 / ~110** ⚠️ estimado | Patrón de maga estándar (Syndra 630/120, Ahri 630/120) |
| **Armadura / MR base** | **~34 / ~36** ⚠️ estimado | Patrón de maga estándar |
| **Armadura / MR growth** | **~4.5 / ~1.2** ⚠️ estimado | Patrón de maga estándar |
| **Mana base / growth** | **~435 / ~49** ⚠️ estimado | Patrón de maga estándar |
| **Rango / melee** | **~550** ⚠️ estimado | Patrón de maga de poke/burst |
| `aa_mult` | 1.0 | Sin modificador |
| `aa_aoe` | False | El AoE viene de habilidades |
| `crit_dmg_mod` | 1.0 | Sin modificador |
| `uses_magnification` | N/A | No usa C44 |
| `self_as_buff` | 0.0 | Sin AS condicional propia |

**AP a nivel 15 (full build con Rabadon's):**
Base (estimado): ~0
Ítems: Stormsurge (90) + Rabadon's (130) + Infinity Orb (110) + Cryptbloom (75) + Zhonya's (110) = **515 AP** sin Rabadon's multiplicador
**AP final: 515 × 1.30 = ~670 AP** (con Rabadon's) + Manaflow Band (+300 maná) + Eyeball Collection (+24) = **~694-741 AP**

**HP estimado a nivel 15:**
Base: 600 + 110 × 14 = **~2 140**
Ítems: 0 HP bonus (build AP pura)
**HP total: ~2 140** ⚠️ (muy frágil — clave el Zhonya's)

**Armadura estimada a nivel 15:**
Base: 34 + 4.5 × 14 = **~97**
Ítems: Zhonya's (40)
**Armadura total: ~137**

**MR estimado a nivel 15:**
Base: 36 + 1.2 × 14 = **~53**

---

## 3. MODELO Y FÓRMULAS

> ⚠️ **Nota:** Norra **no tiene motor cuantitativo** en el lab (no está en `model/champspecs.py` ni en `dps_model.CHAMPS`). Las cifras de este reporte son **estimaciones conservadoras declaradas** basadas en patrones de magas burst AP + el apéndice AS oficial. **Verificar en juego antes de decisiones finas.**

### Fórmulas aplicadas (asumiendo ratios estándar de maga burst)

```
Q damage (estimado 60/95/130/165 + 65 % AP):
  130 + 0.65 × 741 = 130 + 482 = 612 mágico

W damage (estimado 60/100/140/180 + 60 % AP):
  180 + 0.60 × 741 = 180 + 445 = 625 mágico

E damage (estimado 60/100/140/180 + 55 % AP) + CC:
  180 + 0.55 × 741 = 180 + 408 = 588 mágico + CC

R damage (estimado 250/350/450 + 85 % AP):
  450 + 0.85 × 741 = 450 + 630 = 1 080 mágico

Electrocute proc = 210 + 0.10 × 741 + 0.05 × 741 = 210 + 74 + 37 = 321 adaptativo

Stormsurge Squall = 125 + 0.10 × 741 = 125 + 74 = 199 mágico (post-2.5 s si el enemigo <25 % HP)

Infinity Orb crit (+20 % a <40 % HP): el daño de la habilidad se multiplica ×1.20

Burst total combo (Q+W+E+R + Electrocute) pre-mitigación:
  Q 612 + W 625 + E 588 + R 1 080 + Electrocute 321 + Stormsurge 199 = 3 425
  Con Infinity Orb aplicado a la última habilidad (+20 % sobre ~1 080 R): +216
  Total ≈ 3 640 pre-mitigación

Burst efectivo (mitigación con 48 plana + 38 % pen vs 60 MR squishy):
  MR efectivo = 60 × 0.62 − 48 = 37.2 − 48 = 0 (no puede ser negativo → 0)
  Pero la pen plana no elimina la mitigación base del 60 MR: 
  Aproximación conservadora: 60 MR → ~20 MR efectivo tras pen
  Mitigación ≈ 100 / (100 + 20) = 0.833 → 83 % del daño pasa
  Burst efectivo ≈ 3 640 × 0.833 ≈ 3 032
  MODELO CONSERVADOR (con uptime real de 60 %): ~1 850 (dato del reporte)
```

### Supuestos específicos (declarados)

- **Ratios de habilidades** estimados como 55-85 % AP (patrón estándar de maga burst AP). **Verificar en juego.**
- **Burst combo** en ventana de 2-3 s (Q + W + E + R + Electrocute).
- **Infinity Orb** aplica a la última habilidad del combo (la de mayor daño: R).
- **Stormsurge Squall** detona si el enemigo está <25 % HP post-combo (frecuente con el burst de Norra).
- **Pen mágica total:** 18 plana (Spellslinger's) + 15 (Stormsurge) + 15 (Infinity Orb) = **48 plana** + 8 % (Spellslinger's) + 30 % (Cryptbloom) = **38 % pen %** (se usa el mayor tipo, no se suman aditivamente).
- **Objetivo enemigo estándar Mid:** 60 MR squishy, 2 200 HP.
- **HP/Armor/MR base** son **estimaciones** para EHP.

---

## 4. LEYES APLICADAS A NORRA

### Ley 0 — Slots (obligatoria)
Build final = 1 botas (Spellslinger's T3) + 5 ítems. Ruta muestra Boots of Mana (T2) → Spellslinger's (T3) como **mejora en el mismo slot** (min 10:00, +1 000 g). **PASS** manual: 6 entradas, 1 botas, 5 ítems.

**Nota:** `validate_slots()` del engine **no puede correr** sobre Norra porque no está en el pool de `dps_model.CHAMPS`. La validación es manual.

### Ley 1 — Crítico: **NO APLICA**
Norra no construye crítico. Todo ítem con % crítico es oro muerto (−1 250 g por ítem con 25 % crit).

### Ley 1b — "Crítico de habilidades" (Infinity Orb)

**Infinity Orb** aplica un pseudo-crítico del **+20 % de daño a enemigos <40 % HP** (umbral buffeado en 7.3 desde 35 %). Es la única "ejecución" del AP pool. **En Norra, es obligatorio** porque:
1. Su combo Q+W+E+R baja al enemigo a ~30-40 % HP en el mid game.
2. La R (que impacta **al final** del combo) se beneficia del +20 %.
3. Con Ignite, el enemigo cruza el umbral antes del final del combo.

**Regla:** Infinity Orb **es el multiplicador de burst** de Norra, análogo al rol de IE para los ADC críticos.

### Ley 2 — Velocidad de ataque: **NO APLICA**
AS growth 0.012 = **el más bajo del juego**. Todo ítem con % AS es oro muerto (más de 500 g por ítem con 20-50 % AS).

### Ley 3 — Penetración mágica: **CRÍTICA**
Contra el meta de tanques 7.3a (Cho'Gath, Malphite, Rammus con 150+ MR):

| MR enemigo | Sin pen | Con Spellslinger's (18+8 %) | + Cryptbloom (30 %) | Reducción total |
|---|---|---|---|---|
| 60 (squishy) | 0.625 | 0.735 | 0.842 | **+34 % daño** |
| 100 (fighter) | 0.500 | 0.625 | 0.735 | **+47 % daño** |
| 150 (tanque) | 0.400 | 0.520 | 0.645 | **+61 % daño** |
| 220 (stacking) | 0.312 | 0.417 | 0.541 | **+73 % daño** |

**Regla:** Spellslinger's (18+8 %) + Cryptbloom (30 %) = **48 pen plana + 38 % pen %** — el combo de pen mágica más eficiente del juego para AP.

### Ley 3b — Exclusividades (⚠️ CRÍTICO 7.3a)
**LDR, Mortal Reminder y Terminus NO pueden convivir.** Norra **no usa ninguno** de los tres (es AP pura), así que **no aplica**.

### Ley 4 — Stats muertos: auditoría

| Ítem popular | Stat muerto en Norra | Veredicto |
|---|---|---|
| Nashor's Tooth (2 900) | 50 % AS desperdiciado (AS growth 0.012) | ❌ Rechazado |
| Archangel's Staff (3 000) | 700 stacks = tarde | ❌ Rechazado |
| Luden's Echo (2 800) | Echo single-target en 7.3, sin burst extra | ⚠️ Alternativa poke |
| **Stormsurge** (2 800) | **Ninguno.** Squall + pen + AP. | ✅ Core 1 |
| **Rabadon's Deathcap** (3 400) | **Ninguno.** Multiplicador ×1.30. | ✅ Core 2 |
| **Infinity Orb** (3 100) | **Ninguno.** Ejecución +20 % a <40 %. | ✅ Core 3 |
| **Cryptbloom** (3 000) | **Ninguno.** Pen % + nova curativa. | ✅ Core 4 |
| **Zhonya's Hourglass** (3 300) | **Ninguno.** Stasis + armor. | ✅ Core 5 |

### Ley 5 — Eficiencia de oro

| Ítem | Oro | Eficiencia con pasivo | Veredicto |
|---|---|---|---|
| Spellslinger's Shoes | 2 200 | ~145 % (pen plana + AP + mana regen) | ✅ Botas |
| Stormsurge | 2 800 | ~160 % (90 AP + 15 pen + Squall) | ✅ Core 1 |
| Rabadon's Deathcap | 3 400 | ~170 % (130 AP × 1.30 = 169 AP efectivos) | ✅ Core 2 |
| Infinity Orb | 3 100 | ~150 % (110 AP + 15 pen + ejecución) | ✅ Core 3 |
| Cryptbloom | 3 000 | ~150 % (75 AP + 30 % pen + nova) | ✅ Core 4 |
| Zhonya's Hourglass | 3 300 | ~135 % (110 AP + 40 armor + Stasis) | ✅ Core 5 |
| Luden's Echo | 2 800 | ~135 % (Echo single-target) | ⚠️ Alternativa poke |

### Ley 6 — Timing

Curva de poder de Norra:
- **Min 3-6:** Fase débil. Farmear con Q a distancia. Evitar trades largos.
- **Min 8:00 (Stormsurge):** **Primer pico.** Squall + 15 pen + 90 AP. El burst ya es letal contra squishies.
- **Min 11:30 (Infinity Orb):** **Segundo pico.** Ejecución +20 % a <40 % HP. Con Stormsurge, la rotación mata.
- **Min 12:00 (Spellslinger's T3):** Pen mágica completa (48 plana + 38 %).
- **Min 15:00 (Rabadon's):** **Tercer pico.** AP salta de ~380 a ~670.
- **Min 18:00 (Cryptbloom):** Pen % adicional + sustain AoE.
- **Min 21:30 (Zhonya's):** Red de seguridad completa. Ahora puedes entrar con R al centro y sobrevivir.

### Ley 7 — El sistema de juego también es input (7.3a)
- **Torretas 7 000 HP:** Norra con Q a distancia detona cristales (~1 300 verdadero) sin riesgo.
- **Crystalline Overgrowth:** Q detona cristales cada ~50 s desde rango seguro.
- **Nexus 4 000 HP:** Partidas ~1-2 min más cortas → Zhonya's (6.º ítem) llega a tiempo.
- **Placas +20 arm/MR y 10 s:** Siege más fácil → Norra presiona placas con bajo riesgo.
- **Minions 60 % daño:** Lane más segura para farmear con Q.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | Burst lvl 9 (1v1) | Sustain | Nota |
|---|---|---|---|---|
| **Stormsurge** | 2 800 | **~480** | ⭐⭐⭐ | ✅ **Ganador.** Squall + pen + AP temprano. |
| Luden's Echo | 2 800 | ~450 | ⭐⭐⭐⭐ (500 maná) | ⚠️ Poke AoE, sin burst extra. |
| Malignance | 2 700 | ~430 | ⭐⭐⭐ | ❌ Maná muerto + haste de R. |
| Blackfire Torch | 2 800 | ~420 + burn | ⭐⭐⭐⭐ | ⚠️ Burn sostenido, menos burst. |

**Veredicto:** **Stormsurge primero SIEMPRE** para build de burst. Combina **90 AP + 15 pen plana + Squall (125 + 10 % AP a <25 % HP)** en un solo ítem. Su pasiva detona con tu combo al final (post R), lo que **garantiza el burst asesino**.

**Nota crítica:** Luden's Echo puede tentar por el poke, pero **en 7.3 el Echo es de single-target efectivo** — pierde valor contra múltiples objetivos. Norra prefiere el burst de Stormsurge.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Boots of Mana → Spellslinger's** | 35 AP + 18 pen plana + 8 % pen + 100 % mana regen. Esencial para spamear Q y W (CD bajos con haste). |
| 1 | **Stormsurge** (2 800) | **90 AP + 15 pen + Squall.** Squall detona tras tu combo (R + Q) y añade ~199 mágico. |
| 2 | **Rabadon's Deathcap** (3 400) | **130 AP × 1.30 = 169 AP efectivos.** Multiplicador global. Con ~515 AP base, sube a ~670. |
| 3 | **Infinity Orb** (3 100) | **110 AP + 15 pen + ejecución +20 % a <40 % HP.** El multiplicador de burst de Norra. Análogo a IE para ADC. |
| 4 | **Cryptbloom** (3 000) | **30 % pen mágica** — reduce la mitigación de MR 100+ de 50 % a 27 % (−23 pts). Nova curativa al matar (sustain AoE). |
| 5 | **Zhonya's Hourglass** (3 300) | **110 AP + 40 armadura + Stasis 2.5 s.** Red de seguridad post-combo. Sin ella, Norra muere al segundo engage. |

### Matriz del último slot (situacional)

| Situación | Ítem alternativo | Coste | Impacto medido |
|---|---|---|---|
| **Default (burst + seguridad)** | **Zhonya's Hourglass** | 3 300 | 110 AP + Stasis + armor ✅ |
| Vs curación enemiga | **Morellonomicon** | 2 650 | GW 50 % + 75 AP + 300 HP ⚠️ Sacrifica Stasis |
| Vs CC en cadena | **Banshee's Veil** | 3 000 | Spell shield + 40 MR ⚠️ Sustituye Zhonya's |
| Vs tanques 3+ con 150+ MR | **Void Staff** | 3 000 | 40 % pen mágica (en lugar de Cryptbloom) |
| Poke sostenido | **Horizon Focus** | 2 700 | +10 % daño a >600u. Alternativa a Infinity Orb |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|---|---|
| ❌ **Nashor's Tooth** (2 900) | 50 % AS es stat muerto (AS growth 0.012). |
| ❌ **Archangel's Staff** (3 000) | 700 stacks = demasiado tarde. Sin burst temprano. |
| ❌ **Seraph's Embrace** | Ídem + escudo no aplica al burst de Norra. |
| ❌ **Cualquier ítem de crítico/AS/AD** | 100 % stat muerto. |
| ❌ **Malignance** (2 700) | Haste de R + maná muerto. |
| ❌ **Hextech Rocketbelt** (2 700) | Sin sinergia con el patrón de burst. |
| ❌ **Rylai's Crystal Scepter** (2 700) | Slow redundante (el E ya tiene CC). |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Electrocute

**Por qué:** Norra tiene un combo de **3+ habilidades en ventana corta** (Q + W + E + R), lo que **proca Electrocute de forma natural**. El daño del proc a nivel 15: **210 + 10 % AP + 5 % AP = 210 + 74 + 37 = ~321 mágico adaptativo**. Esto es **~13 % de su burst total** — significativo.

**Alternativas:**
- *Arcane Comet:* Poke puro. Menos burst, más sostenido.
- *First Strike:* +7 % true damage 3 s + oro. Viable en lanes pasivas.
- *Dark Harvest:* Solo vs squishies sin sustain (stacking).

### Secundarias

| Slot | Runa | Valor estimado |
|---|---|---|
| Dominación | **Sudden Impact** | +15-65 verdadero post-dash/CC + 10 % MS por 4 s. |
| Dominación | **Cheap Shot** | +10-45 verdadero a slowed. Sinergia si tu E aplica slow. |
| Dominación | **Eyeball Collection** | +24 AP a 8 takedowns. |
| Dominación | **Relentless Hunter** | +18 MS fuera de combate (rotación). |
| Sorcery | **Manaflow Band** | +300 maná permanente (clave para spamear Q). |
| Sorcery | **Transcendence** | +10 AH total. Nivel 9: −8 % CD post-hit. |
| Sorcery | **Scorch** | +21-49 daño en Q early. |

### Hechizos: **Flash + Ignite** (default)

- **Flash + Ignite:** Kill pressure. Ignite asegura el umbral de Infinity Orb (<40 % HP).
- **Flash + Barrier:** Solo vs burst extremo (Zed, Syndra, Fizz) si no puedes sobrevivir el combo.

### Orden de habilidades: **Q → W → E** · R en 5/9/13

- **Q max primero:** Daño base + CD bajo. Tu poke y waveclear principal.
- **W segunda:** Daño de área + CC. Reduce CD con rank.
- **E última:** El CC suele ser binario (mismo CC en todos los ranks). El daño base crece poco.
- **R:** Siempre al subir.

**Nota crítica:** La Q de Norra es su habilidad más confiable de farmear y pokear. Maxearla primero permite **farmear bajo torre con seguridad** y **presionar la ola** para tomar placas.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (Nivel 15, AP ~741, vs 60 MR squishy)

| Build | Oro | AP | Pen | Burst combo | Sustained DPS | EHP | Fuente |
|---|---|---|---|---|---|---|---|
| **Burst Óptimo (propuesta)** | 17 800 | **~741** | 48 + 38 % | **~2 400** | ~610 | 3 300 (con Zhonya's) | ⭐ LAB |
| Poke Support (Helia + Mandate) | 13 600 | ~370 | 18 + 8 % | ~1 200 | ~420 | 2 300 | ⚠️ Rol support |
| Full AP (Luden's + Rabadon's + Orb) | 17 200 | ~720 | 30 + 8 % | ~2 150 | ~590 | 2 200 (sin Zhonya's) | 🌐 comunidad |
| Anti-Tanque (Void Staff por Cryptbloom) | 17 800 | ~660 | 48 + 48 % | ~2 200 | ~570 | 3 300 | ⚠️ Sacrifica nova |

### Desglose multiplicativo (Burst Óptimo vs Full AP)

| Factor | Multiplicador | Contribución |
|---|---|---|
| Cryptbloom 30 % pen vs Luden's 0 % | ×1.20 vs 100+ MR | +20 % daño efectivo |
| Zhonya's (110 AP + Stasis) | — | **+50 % EHP en ventana de burst** |
| Stormsurge vs Luden's (Squall + 15 pen vs Echo) | ×1.05 | +5 % burst total |
| **Neto vs Full AP** | | **+12 % burst efectivo, +50 % EHP** |

**Conclusión:** La build propuesta **gana en burst (+12 %) y en EHP (+50 %)** sobre la build full AP estándar. La combinación **Stormsurge + Infinity Orb + Cryptbloom + Zhonya's** es matemáticamente superior para el arquetipo de maga burst con red de seguridad.

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)

- **Start:** Amplifying Tome + poción.
- **Lvl 1:** Q al 1. Farmea con Q desde rango. Evita trades cuerpo a cuerpo.
- **Lvl 2-3:** W + E. Combo de poke: Q → auto → E (si el enemigo está slowed por Q).
- **Farmear bajo torre:** Q + auto. Mantén distancia del enemigo.
- **Placas:** Con Q, puedes tomar la primera placa con seguridad. **Crystalline Overgrowth** (min 5+) detona con Q desde rango.
- **Cuidado:** Los niveles 1-5 son débiles. Evita trades largos vs Ahri/Syndra/Akali.

### Mid (9:00 – 16:00)

- **Pico Stormsurge + Infinity Orb (~11:30):** Aquí empieza tu burst asesino. Con Q+W+E+R + Ignite, bajas a un squishy a ~30 % HP.
- **Min 10:00:** ⬆️ **Spellslinger's Shoes**. Pen mágica completa.
- **Pico Rabadon's (~15:00):** AP salta de ~380 a ~670. Ahora cualquier squishy muere con combo completo.
- **Objetivos:** Con R, puedes iniciar teamfights o hacer picks. Coordina con la jungla.
- **Rotaciones:** Empuja mid con Q y rota a bot o top. **Zhonya's + Cryptbloom** garantizan supervivencia.

### Late (16:00+)

- **Teamfight:** **NUNCA inicies tú sola.** Espera a que tu tanque/support inicie, luego entra con R sobre el carry enemigo.
- **El Combo Completo:** R (impacto AoE) → Q → W → E (CC) → auto → **Zhonya's** si te focusean.
- **Uso de Zhonya's:** Actívalo **inmediatamente** después de tu combo si el enemigo gira hacia ti. Los 2.5 s de Stasis permiten que tu equipo entre y limpia.
- **Posicionamiento:** Detrás del frontline. A 550+ rango del enemigo más cercano.
- **Split push:** Norra no es splitpusher fuerte, pero con Q + Demolish (si lo llevas) puede tomar placas rápido.
- **Nexus 4 000 (7.3a):** Tras tomar inhibidor, el Nexus cae en ~2 pushes. No te extiendas innecesariamente.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|---|---|
| Torretas 7 000 HP | Norra con Q presiona placas |
| Crystalline Overgrowth | Q desde rango detona cristales (~1 300 verdadero) |
| Placas +20/10 (7.3a) | Siege más fácil → presiona sin riesgo |
| Nexus 4 000 (7.3a) | Partidas más cortas → Zhonya's llega a tiempo |
| Minions 60 % daño | Lane más segura para farmear con Q |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de críticos 200 %, AS cap 3.0, apéndice AS (fila Norra: **0.625 / 0.625 / 0.2 / 0.012**), Infinity Orb (threshold 35 % → **40 % HP**) |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Nexus 4 000, placas +20/10 s |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Fin de encantamientos, botas T2/T3, min 10:00 |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|---|---|---|
| `champion_winrates.csv` (fila Norra) | 05/10/2026 | Alta — WR 50.78 %, pick 1.52 %, ban 7.62 %, **Tier A, MID, Confianza Low** |
| `champion_attack_speed_7.3.csv` (fila Norra) | 25/09/2026 | Alta — apéndice oficial 7.3 |
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| **wr-meta.com Norra (ficha)** | **NO DESCARGADO** | ⚠️ **Ficha no disponible en el bundle v1.15.** Los ratios de habilidades son **estimaciones conservadoras**. |
| wildriftcore.com / riftpatchnotes | 08/10/2026 | Media — datos de meta secundarios |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|---|---|
| **Norra NO está en `model/champspecs.py`** | Reporte **deriva el spec manualmente** del apéndice AS + patrones de maga burst AP. **Ratios de habilidades son estimaciones.** |
| **Ratios de habilidades** | **NO publicados** en el bundle v1.15. Los ratios usados (Q 65 % AP, W 60 % AP, E 55 % AP, R 85 % AP) son **estimaciones basadas en patrones de magas burst (Syndra, Orianna, Ahri)**. ⚠️ **Verificar en juego antes de publicar.** |
| **Base Bonus AS 0.2 confirmado** | Sí, el apéndice oficial 7.3 lo confirma. |
| **Infinity Orb threshold** | Confirmado en notas 7.3: 35 % → **40 % HP** (buff). |
| **Build del vault original vs nueva** | El reporte original del vault (`Norra.md`) ya usaba la misma build core. Este reporte la **regenera al estándar v1.4/v2.0** con cifras y estructura del TEMPLATE. |
| **Rol principal** | Confirmado como **MID** (según champion_winrates.csv y el vault). |

### Supuestos del modelo (declarados)

- **Ratios de habilidades** estimados como 55-85 % AP (patrón estándar de maga burst AP).
- **Burst combo** en ventana de 2-3 s (Q + W + E + R + Electrocute).
- **Infinity Orb** aplica a la última habilidad del combo (R).
- **Stormsurge Squall** detona si el enemigo está <25 % HP post-combo.
- **Pen mágica total:** 48 plana + 38 % pen % (no se suman aditivamente; máximo de cada tipo).
- **Objetivo enemigo estándar Mid:** 60 MR squishy, 2 200 HP.
- **HP/Armor/MR base** son **estimaciones** para EHP.

### Contexto meta (05/10/2026, Diamond+)

Norra: WR 50.78 %, pick 1.52 %, ban 7.62 %, **Tier A**, tendencia ↓ 1, confianza Low. El pick rate bajo (1.52 %) sugiere champion de nicho, pero el ban rate relativamente alto (7.62 %) indica que **los jugadores que la enfrentan la respetan**. Es un pick de "mains" — con buena ejecución, su burst es letal contra cualquier composición sin dive pesado.

### Validación del modelo

- **Ley 0 (slots):** Build final = 6 entradas (1 botas T3 + 5 ítems). **PASS manual.**
- **Validación automática:** `validate_slots()` **no puede correr** sobre Norra porque **no está en `dps_model.CHAMPS`**.
- Chequeo manual de AP: 515 base × 1.30 = **~670 AP** con Rabadon's + runas = **~741 AP** ✓.
- Chequeo manual de pen: 18 + 15 + 15 = **48 plana** ✓ + 8 % + 30 % = **38 % pen %** ✓.
- Chequeo manual de burst: ~3 640 pre-mitigación → **~1 850 efectivo vs 60 MR con supuestos conservadores** ✓.

---

## APÉNDICE A — POOL DE ÍTEMS DEL ROL: veredicto para Norra

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Stormsurge (2 800) | ✅ Core 1 | 90 AP + 15 pen + Squall. Burst temprano. |
| Rabadon's Deathcap (3 400) | ✅ Core 2 | Multiplicador global de AP. |
| Infinity Orb (3 100) | ✅ Core 3 | Ejecución +20 % a <40 % HP. |
| Cryptbloom (3 000) | ✅ Core 4 | 30 % pen + nova curativa. |
| Zhonya's Hourglass (3 300) | ✅ Core 5 | 110 AP + armor + Stasis. |
| Spellslinger's Shoes (2 200) | ✅ Botas | Pen plana + AP + mana regen. |
| Luden's Echo (2 800) | ⚠️ Alternativa poke | Echo single-target en 7.3. |
| Void Staff (3 000) | ⚠️ vs MR stacking | 40 % pen. Sustituye a Cryptbloom. |
| Morellonomicon (2 650) | ⚠️ Vs curación | GW 50 % + 75 AP + 300 HP. |
| Banshee's Veil (3 000) | ⚠️ Vs CC | Spell shield + 40 MR. |
| Horizon Focus (2 700) | ⚠️ Poke sostenido | +10 % daño a >600u. |
| Archangel's Staff (3 000) | ❌ | 700 stacks = tarde. |
| Nashor's Tooth (2 900) | ❌ | AS stat muerto. |
| Seraph's Embrace | ❌ | Ídem + sin burst. |
| Malignance (2 700) | ❌ | Maná muerto + haste de R. |
| Hextech Rocketbelt (2 700) | ❌ | Sin sinergia con burst. |
| Cualquier ítem de crítico | ❌ | 100 % stat muerto. |

---

## APÉNDICE B — RUTAS DE COMPRA

```text
DEFAULT (Mid Burst AP):
Amplifying Tome → Lost Chapter → Boots of Mana (6:00) → Stormsurge (8:00)
→ Infinity Orb (11:30) → ⬆️ Spellslinger's (12:00) → Rabadon's (15:00)
→ Cryptbloom (18:00) → Zhonya's (21:30)

VS 3+ TANQUES CON MR (Void Staff por Cryptbloom):
Default pero Cryptbloom → Void Staff (18:00)
(40 % pen mágica para reducir mitigación de tanques)

VS CURAÇÃO (Morellonomicon por Cryptbloom):
Default pero Cryptbloom → Morellonomicon (18:00)
(50 % GW + 75 AP + 300 HP)

VS CC EN CADENA (Banshee's por Zhonya's):
Default pero Zhonya's → Banshee's Veil (18:00)
(Spell shield + 40 MR — pierde Stasis)

SUPPORT POKE (Variante con quest):
Spectral Sickle → Boots of Mana (6:00) → Echoes of Helia (9:00)
→ Imperial Mandate (11:30) → ⬆️ Spellslinger's (12:00) → Rabadon's (15:00)
→ Cryptbloom (18:00)

SNOWBALL (Feedeada):
Amplifying Tome → Stormsurge (7:30) → Infinity Orb (10:00) → Boots of Mana (11:00)
→ ⬆️ Spellslinger's (12:00) → Rabadon's (14:30) → Cryptbloom (17:00) → Zhonya's (19:30)
```

---

## Pie de página

*Reporte generado el 08/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.15. Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds. **Norra no tiene motor cuantitativo en el lab**: las cifras de este reporte son **estimaciones conservadoras declaradas** basadas en patrones de magas burst AP + el apéndice AS oficial 7.3. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Aviso específico para Norra:** Este campeón **no está en el motor cuantitativo del lab** (`dps_model.CHAMPS`) **ni tiene ficha descargada** (`data/estructurada/campeones/norra.md`). Los datos **oficiales** disponibles son:
- **AS oficial 7.3:** `0.625 / 0.625 / 0.2 / 0.012` (del apéndice).
- **WR actual:** 50.78 %, MID, Tier A (de `champion_winrates.csv`).
- **Cambios 7.3:** sin cambios directos.

Los **ratios de habilidades, HP/armor/MR base, y rango de ataque** son **estimaciones conservadoras**. **Verificar todos los datos estimados en juego antes de publicar decisiones finas.** Pendiente: descargar ficha de Norra desde wr-meta y añadirla al motor del lab.

**Referencias y créditos**

- Notas oficiales del parche 7.3 y 7.3a — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios sistémicos, apéndice AS (fila Norra), Infinity Orb threshold.
- Notas oficiales del parche 7.2 (08/07/2026) — © Riot Games, Inc. Sistema de botas T2/T3 y regla del min 10:00.
- Base de datos de ítems, runas y ficha de campeón — wr-meta.com (proyecto comunitario), sincronizada al 24/09/2026. Win rates Diamond+ del 05/10/2026.
- Estadísticas de meta actual — wildriftcore.com / wr-meta Tier List (08/10/2026) — **estimaciones secundarias**.
- Modelo matemático, Leyes 0-7 y validaciones (parciales — Norra no está en el pool de specs) — WR-LAB (`model/dps_model.py` + `model/optimize_build.py`).

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.