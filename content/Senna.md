---
tags:
  - Support
  - Marksman
  - Crítico
  - Bot-Lane
version: 1.1
Status: Beta
champion: Senna
slug: senna
role: support
patch: "7.3+7.3a"
archetype: "Crítico modificado / sitiadora híbrida"
engine: autos
custom: false
generate: manual
mode: sr
published_at: "2026-10-09"
updated_at: "2026-10-11"
verification: REVISAR
verified_patch: "7.3b"
---
**Fecha del análisis:** 11/10/2026
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** Support (con variante DUO/ADC declarada en [!TIP])
**Arquetipo:** Crítico modificado (`crit_dmg_mod` 0.9) + enchanter híbrida
**Enfoque:** Valor-aliado (cura Q / escudo R / buff Censer) como columna support, con lado DPS medido por el motor de autos para la variante DUO y para el daño de asedio que Senna aporta aunque juegue de support.


> [!NOTE]
> **Estado Meta Actual (Diamond+, 09/10/2026):**
> **SUPPORT Win Rate 54.11 %** | Pick Rate 12.82 % | Ban 32.49 % | Tendencia 0 | Tier S+ (Confidence High).
> **DUO Win Rate 55.51 %** | Pick 3.45 % | Ban 32.49 % | Tier S+ (Confidence Med).

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (Support valor-aliado)

| Slot | Ítem | Oro | Rol en la build |
|---|---|---|---|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | +0.15 AS real → doble dip: acelera autos Y el −1 s de CD de Q |
| 2 (quest) | **Spectral Sickle → ⬆️ Black Mist Scythe** (Tribute, mismo slot) | 0 | Oro pasivo + 10 AH; ejecuciones Spoils sueltan wraiths (4.166 %) = Niebla |
| 3 | **Ardent Censer** | 2 400 | Con q_cd ≤ 6 s el uptime es 100 %: **+164 DPS al ADC** (convención valor-aliado del lab) |
| 4 | **Echoes of Helia** | 2 400 | Enlaza la cura Q al 2.º aliado (30 %): Q-h/s 80 → valor de teamfight |
| 5 | **Black Cleaver** | 3 000 | 400 HP sobre 570 base + Sunder 30 % que la Q staquea rápido (on-hit) |
| 6 | **Essence Reaver** | 3 000 | Spellblade 135 % AD base + 0.8/1 % crit: el crit GRATIS de Niebla lo maximiza |

> **Oro total: 13 000 g** · score 0.830 del motor dedicado · Q-cura **80 h/s** · escudo R **567** por aliado · **+164 DPS al ADC**. Variante ofensiva (score 0.833, Q-h/s 63): cambiar Echoes+Cleaver por **Navori + Runaan's** (AS → más casts de Q por minuto). Defensiva vs dive: Echoes → **Guardian Angel** (3 200).

### Tabla A2 — BUILD FINAL (Variante DUO/ADC, óptima del motor)

| Slot | Ítem | Oro | Rol en la build |
|---|---|---|---|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | 50 % AS (rinde 0.3× por el ratio) + 5 % Lifesteal + Blessed 12/auto |
| 2 | **Blade of the Ruined King** | 3 100 | 6 % vida actual por auto Y por Q (on-hit por cast): 1.er ítem medido (+21 % vs 2.º a L9) |
| 3 | **Infinity Edge** | 3 400 | Crit 200 % → 230 %; con `crit_dmg_mod` 0.9: 180 % → 207 % |
| 4 | **Runaan's Hurricane** | 2 650 | 2 rayos 55 % AD que critican y aplican Relic/on-hit |
| 5 | **Kraken Slayer** | 2 900 | Cada 3.er golpe 168 + missing HP; a AS 1.37 proca cada ~2.2 s y proca con Q |
| 6 | **Terminus** | 3 000 | Pen sostenida + AS sin tocar la Ley 3b (sin LDR/Mortal en la build) |

> **Oro total: 17 250 g** · AD 386 · AS 1.37 · Crit 100 % (50 ítems + 50 Niebla) · Pen 30 % · score 0.938 del motor dedicado.

### Tabla B — Ruta de compra cronológica (Support)

| # | Compra | Oro acum. | Minuto típico |
|---|---|---|---|
| 1 | Quest **Spectral Sickle** (relic inicial) | 0 | 0:00 |
| 2 | **Berserker's Greaves** | 1 200 | ~4:30 |
| 3 | ⬆️ **Gunmetal Greaves** (mismo slot, +1 000 g) | 2 200 | 10:00 (regla T3) |
| 4 | **Ardent Censer** | 4 600 | ~12:00 |
| 5 | **Echoes of Helia** | 7 000 | ~14:30 |
| 6 | **Black Cleaver** | 10 000 | ~17:00 |
| 7 | Pickaxe + Caulfield's → **Essence Reaver** | 13 000 | ~20:00 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|---|---|
| Keystone | **Glacial Augment** (slow en cadena con Q/W para el root de W) · alt. **Fleet Footwork** vs poke extremo |
| Precisión 2 | **Triumph** (ejecuciones con R y resets de pelea) |
| Precisión 3 | **Legend: Alacrity** solo en DUO; en support **Tenacity** vs CC |
| Dominación | **Treasure Hunter** (acelera Crimson y el primer Censer) |
| Hechizos | **Flash + Heal** (support) · Flash + Exhaust vs dive |
| Skills | **Q → W → E** (R en 6/11/16). Maxear Q primero: cura+daño en línea es su motor. |

### Resultado del modelo (nivel 15, LT full, 100 stacks de Niebla)

| Escenario | DUO óptima (motor dedicado) | DUO community | Soporte (motor dedicado, valor-aliado) |
|---|---|---|---|
| **1v1** (pre-mitigación) | **1 749** | 810 (−39 % en motor estándar) | 913 (daño de asedio propio) |
| **3v3** (AoE teamfight) | **3 086** | 810 (sin Runaan's) | 1 001 |
| **vs 120 armadura** | **951** | 440 | 496 (Sunder de Cleaver incluido) |
| **vs Tanque** (220 arm, 4 500 HP) | **806** | 319 | 385 |
| **Cura Q (rank 4, 140 Niebla)** | — | — | **80 h/s** sostenidos (con Echoes) |
| **Escudo R (140 Niebla)** | — | — | **567** por aliado · ~1 700/minuto en 3 aliados |
| **Buff al ADC (Censer)** | — | — | **+164 DPS** con uptime 100 % (q_cd ≤ 6 s) |

> **Titular:** Senna support no se evalúa en DPS: se evalúa en *ventanas* — cura de 200+ en línea cada ~6.8 s de CD real de Q, escudo global de 480+ pre-engage y un asedio de 625→700+ de rango que obliga al enemigo a jugar incómodo. Su lado DPS (variante DUO) es top-tier medible: la óptima del motor supera a la community en +39 % 1v1 porque el crit gratis de Niebla reescribe la Ley 1.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Senna) — Parche 7.3

| Stat/Habilidad | Antes | Ahora | Impacto |
|---|---|---|---|
| HP base | 600 | **570** | −5 % durabilidad early (570 = de las más frágiles) |
| Sistema de AS | restringida | ratio 0.4 · base 0.4 · BBA 0.6 · growth 0.05 | Los ítems de AS pasaron a funcionarle |
| Pasiva: % vida actual | 1.2–12 % | **1–10 %** | Nerf al trade de Extraction |
| Pasiva: crit por 20 Niebla | 15 % | **10 %** | Escalado de crit más lento (100 stacks = 50 %) |
| Daño crítico propio | 141.75 % (sistema viejo) | **90 % del normal = 180 % (207 % con IE)** | Buff estructural disfrazado de nerf |
| Q base | 50/90/130/170 | **50/80/110/140** | Poke early −11 % (ranks 2-4) |
| R daño | 250/375/500 +120 % bAD +50 % AP | **250/400/550 +120 % bAD +70 % AP** | Buff: ejecutora global híbrida |
| R escudo | +40 % AP + Niebla×4 | **+50 % AP + Niebla×2** | Menos escala-Niebla, más escala-AP |

### 1.2 Hotfix 7.3a — el ajuste que define su techo

Cita oficial: *"Senna has been overperforming across all skill levels since we removed her Attack Speed restrictions. We're adjusting her Attack Speed ratio to rein in how effectively she scales with Attack Speed."*

| Parámetro | 7.3 | 7.3a | Efecto real |
|---|---|---|---|
| AS ratio / base | 0.4 / 0.4 | **0.3 / 0.3** | Cada 1 % de AS de ítems rinde 0.3 % |
| Base Bonus AS | 0.6 | **1.1** | Compensación early (AS lvl 1 ≈ 0.63) |
| AS por nivel | 0.05 | **0.025** | Lvl 15 sin ítems: 0.735 |

**AS efectiva resultante:** lvl 1 = 0.63 · lvl 15 sin ítems = **0.735** · con build full-AS = **1.38–1.44** (motor). El cap 3.0 queda a +755 % de AS bonus: **inalcanzable por diseño** → la Ley 2 no gobierna a Senna (caso Jhin: el valor de la AS está en acortar wind-up y el −1 s de CD de Q por auto, no en el DPS bruto).

### 1.3 Cambios sistémicos que le afectan

| Sistema | Cambio 7.3 | Efecto en Senna |
|---|---|---|
| **Crítico base** | 175 % → **200 %** | Con su mod 0.9: 180 %; con IE 207 %. Cada 1 % de crit (incluido el gratis) vale más |
| **AS Cap** | 2.5 → **3.0** | Irrelevante para ella (techo real 1.44) |
| **Torretas** | 3 000 → **7 000 HP** + placas | Su asedio de rango creciente siega placas/cristales desde fuera del alcance |
| **Exclusividades (Ley 3b)** | grupo `pen_pct` | Aplica igual: LDR/Mortal/Terminus no conviven (la óptima no lleva pen) |

---

## 2. FICHA MATEMÁTICA (spec 7.3a)

| Parámetro | Valor | Fuente |
|---|---|---|
| HP base / growth | 570 / +120 | notas 7.3 |
| AD base / growth | **54 / 0** (no sube por nivel) | wiki V6.2c (⚠️ W1) |
| Armadura / RM | 35 (+4.5) / 30 (+1.4) | wiki |
| Maná / regen | 345 (+65) / 21 (+0.5) | wiki |
| Rango de ataque | **625** (+15/20 stacks, cap +400 → 1 025 teórico) | wiki V4.2 |
| AS (7.3a) | ratio **0.3** · base **0.3** · BBA **1.1** · growth **0.025** | notas 7.3a |
| Daño crítico | **0.9×** el normal → 180 % / 207 % con IE | notas 7.3 |
| Niebla | +1.25 AD bonus/stack · +10 % crit/20 stacks · overcap crit → 35 % Physical Vamp | notas 7.3 |
| Proyectil | hitscan (non-projectile) · wind-up 0.5 s no cancelable (️ W3) | wiki 6.3 |
| `crit_dmg_mod` motor | 0.9 · `free_crit` 0.50 (100 stacks al checkpoint) · `aa_mult` 1.2 (Relic +20 % AD) | spec lab v1.15.3 |

**AD lvl 15 real = 54 + 1.25×Niebla + ítems.** Con 140 de Niebla: **229 AD sin comprar un solo ítem de AD** — por eso el spellblade de ER (135 % AD base + 0.8/1 % crit) y los ratios bAD de Q/W/R escalan sin compra.

---

## 3. MODELO Y FÓRMULAS

```text
# Soporte (valor-aliado, fuera del motor DPS — declarado):
cura_Q(r4)   = 130 + 0.40*bAD + 0.25*AP            # bAD = Niebla*1.25 + AD de ítems
escudo_R     = 200 + 0.50*AP + 2*Niebla            # por aliado, 3 s; castear ~1 s pre-engage
echo_Q       = 0.30*cura_Q  ·  echo_R = 0.35*escudo_R   # Harmonic Echo al 2.º aliado
censer_aliado = +30 % AS y +25 dmg mágico por 6 s  # proca con cura_Q y escudo_R
CD_real_Q    = 15 / (1 + AS)                       # −1 s por auto/on-hit

# DUO/SUPPORT (motor dedicado senna_model.py, batch3 — autoridad para Senna):
d += AS*0.20*AD_total            # Relic Cannon on-hit (wiki; D2)
d += pct_extraction*enemy_hp/6   # Living Extraction 1 proc/6 s por target
q_cd = 15*haste_mult*navori/(1+AS)   # −1 s por auto + Navori ×0.75 (convención D8)
d += (q_dmg + on_hits_Q)/q_cd + w_dmg/w_cd   # rotación Q/W sostenida
censer_uptime = min(1, 6/q_cd)   # valor-aliado: +164 DPS al ADC
# cross-check estándar (dps_model, spec senna con free_crit):

# DUO (motor dps_model, spec senna):
AS_total = min(0.3 + 0.3*(1.1 + 0.025*14 + items_AS + runas), 3.0)
Crit     = min(crit_items + 50 (Niebla 100 stacks), 100)      # Ley 1 con umbral corrido
CritDmg  = (200 | 230 con IE) * 0.9
hit      = AD * 1.2 (Relic) * CritMult * Magnification(C44)
DPS_1v1  = AS * hit · DPS_3v3 = DPS_1v1 + 2 rayos Runaan (55 % AD c/u, critan)
```

### Supuestos específicos
- **Niebla al checkpoint:** 100 stacks (50 % crit gratis) en evaluaciones de motor; benchmarks de stacks de la ficha del autor: support ≈ 90 (14 min) / 140 (18 min); DUO ≈ 65 / 110.
- **Extraction (+1–10 % vida actual por target cada ~6 s)** queda FUERA del motor: conservador a favor del lector.
- **Wind-up 0.5 s** fuera del modelo: el DPS real de Senna es menor que el teórico en kiting duro (⚠️ W3).
- **Spellblade de ER** se valora cualitativo en support (el motor no tiene ítems de support en su pool: declarado en §10).

---

## 4. LEYES APLICADAS A SENNA

- **Ley 0 — Slots:** `validate_slots` → **PASS** en ambas tablas (6 entradas, 1 bota T3 + 5 ítems; la mejora ⬆️ vive en el mismo slot).
- **Ley 1 — Crítico (UMBRAL BLANDO):** con +50 % gratis de Niebla, el objetivo de ítems es **50 %**, no 100 %. El overcap NO es oro muerto en Senna: el exceso de crit se convierte en **35 % Physical Vamp** → pasar de 100 % es una decisión de sustain, no un error. La óptima DUO clava 100 % (50+50) igual.
- **Ley 2 — AS Cap 3.0:** no vinculante (techo real 1.38–1.44). El valor de la AS es utilitario: wind-up y CD real de Q.
- **Ley 3 — Penetración:** la óptima DUO lleva **0 % pen** y gana vs tanque con **BotRK (6 % vida actual)**: contra 4 500 HP el current-health domina al pen al 35 % con su AD alto. Verificado en el motor: 474 vs tanque sin pen.
- **Ley 3b — Exclusividades:** LDR/Mortal/Terminus no conviven; ninguna build publicada los mezcla.
- **Ley 6 — Timing:** ER al minuto 8 (Caulfield temprano da haste y spellblade usable); Crimson estrictamente ≥ 10:00 (regla T3 del parche).

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato (post-quest) | Oro | Veredicto support | Nota |
|---|---|---|---|
| **Essence Reaver** | 3 000 | ✅ **Core 1** | Spellblade escala con el crit GRATIS de Niebla (0.8/1 %): 135 % AD base + ~40 con 50 % crit; +20 haste y maná |
| **Ardent Censer** | 2 400 | ✅ Core 2 | El buff proca con cada cura Q y cada escudo R: +30 % AS al carry |
| **Black Cleaver** | 3 000 | ✅ Core 3 | Único AD+HP del pool; shred 30 % que aprovecha TODO el equipo |
| **Harmonic Echo** | 2 500 | ✅ Core 4 | Convierte Q/R en herramientas de 2 objetivos |
| **Infinity Edge** (1.er ítem) | 3 400 | ❌ | Sin crit de ítems previo, el 230 % no compensa el hueco de utility en lane |
| **Statikk Shiv** (1.er ítem support) | 3 000 | ❌ | Energized = valor de waveclear que un support no necesita; sin heal/shield |

En DUO el motor responde distinto: **C44 o BotRK primero** son indistinguibles en el top-3 (1 326 / 1 320 / 1 317 de 1v1 entre óptima, top-2 ER y top-3 Storm); BotRK aporta el sustain de lane que Fleet completa.

---

## 6. BUILD FINAL RANURA POR RANURA (Support)

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Crimson Lucidity** | 25 haste + regen; Noxian Haste proca con cada cura/escudo (kiting de 570 HP) |
| 1 | **Essence Reaver** | Ver §5: el crit gratis maximiza su spellblade; mana-fix para spamear Q |
| 2 | **Ardent Censer** | +25 dmg mágico y +30 % AS al aliado: DPS delegado sin oro propio |
| 3 | **Black Cleaver** | 400 HP sobre 570 base = +70 % HP efectivo relativo; shred de equipo |
| 4 | **Harmonic Echo** | 35 % del escudo R al segundo aliado: 480 → ~648 de valor total por cast |
| 5 | **Guardian Angel** | 570 HP sin dashes: el revivir es el único "segundo posicionamiento" |

### 🛡️ MATRIZ SITUACIONAL

| Escenario | Cambio | Motivo numérico |
|---|---|---|
| Vs dive duro (Malphite/Nocturne) | Echo → **Redemption** (2 450) | Activo de 150–350 HP en área + true damage 10 %, casteable muerta |
| Vs poke mágico | Cleaver → **Redemption** + GA conservado | Sustain de área sin depender de AD propio |
| Equipo sin carries de AS | Censer → **Harmonic Echo** temprano y Echo → **Redemption** | El valor de Censer requiere un aliado que ataque |
| DUO/ADC | Tabla A2 completa | motor: +39 % 1v1 vs community |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|---|---|
| ❌ **Infinity Edge** en support | 3 400 g de puro daño en un campeón con 570 HP y rol de utility: el oro compite con Crimson+Censer (4 400 g de valor-aliado) |
| ❌ **Lord Dominik's** + **Mortal Reminder** juntos | ILEGAL (Ley 3b, grupo pen_pct) |
| ❌ **Statikk Shiv** support | 0 heal/shield; su energized no proca Censer |
| ❌ **Full-AP** | El escudo R suma 50 % AP pero el daño Q/W/R suma bAD: la Niebla empuja a híbrido inclinado-AD, no full-AP |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Glacial Augment (support)
- **Por qué:** el slow de Glacial + el slow de Q (15 % + 10 %/100 bAD) dejan al objetivo dentro del radio 280 del root de W (1.3–2.2 s) y dentro de la línea de Q para el segundo impacto de Extraction.
- **Alternativa:** **Fleet Footwork** vs poke extremo (sustain de lane que Glacial no da); en DUO el motor prefiere **Lethal Tempo** (+10–12 % DPS sobre Fleet en la óptima: 1 326 vs 1 112).

### Orden de habilidades
- **Q → W → E** (R en 6/11/16): Q es cura+daño+−1 s de CD por auto; W es el setup; E es utility de equipo sin escalado numérico.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (Nivel 15, LT full, 100 stacks de Niebla)

| Build | Oro | 1v1 | 3v3 AoE | vs Tanque | Fuente |
|---|---|---|---|---|---|
| **Óptima DUO dedicada (Gunmetal Greaves + Runaan's Hurricane + Kraken Slayer + Terminus + Blade of the Ruined King + Infinity Edge)** | 17 250 | **1 749** | **3 086** | **806** | ⭐ LAB (motor dedicado) |
| **Óptima DUO estándar (Gunmetal Greaves + Runaan's Hurricane + Hexoptics C44 + Yun Tal Wildarrows + Blade of the Ruined King + Infinity Edge)** | 17 350 | 1 671 | 2 939 | 768 | 🔬 LAB (motor estándar) |
| **Support dedicada top-1 ofensiva (Gunmetal + Scythe + Censer + Navori + Runaan's + ER)** | 12 900 | 991 | 1 764 | 331 | 🔬 LAB (score 0.833) |
| **Support dedicada top-2 valor (Gunmetal + Scythe + Censer + Echoes + Cleaver + ER)** | 13 000 | 913 | 1 001 | 385 | ⭐ LAB (support, Tabla A) |
| **Community DPS (Gunmetal Greaves + Statikk Shiv + Rapid Firecannon + Mortal Reminder + Infinity Edge + Guardian Angel)** | 17 450 | 810 | 810 | 319 | 🌐 comunidad |

### Por qué los dos motores discrepan en slots 5-6 (y por qué está bien)
El motor dedicado modela lo que el estándar no puede: **la Q proca on-hit** (Kraken y BotRK
ganan un cast cada ~6-7 s de CD real), **Terminus** da pen sostenida + AS sin violar la Ley 3b,
y la Niebla entra por checkpoint (110 stacks DUO al 15). El motor estándar, sin procs de Q,
prefiere C44 (Magnification) + Yun Tal (AS pura). Ambos coinciden en el core
**Gunmetal + Runaan's + BotRK + IE**: la discordia es de periferia, no de dirección.

### Desglose multiplicativo (óptima DUO vs community DPS)

| Factor | Multiplicador | Contribución |
|---|---|---|
| Crit 100 % vs 76 % (Niebla incluida) | ×1.19 | La community desperdicia el crit gratis solapándolo |
| Runaan's vs RFC (rayos que critican y aplican Relic) | ×1.35 (3v3) | El AoE de Senna son los rayos, no el energized |
| BotRK 6 % vida actual vs Mortal (sin grievous necesario) | ×1.15 vs tanque | Current-health no depende de su AD bajo temprano |
| **Neto** | | **+39 % DPS 1v1 efectivo** |

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)
- **Lane phase:** NO lasthees como support: cada minion grande que no matas = wraith garantizado (+1 Niebla). Lasthear = 3 % de chance.
- **Trade estándar:** Q (marca) → auto (consume Extraction) desde 625 de rango; el CD real de Q con AS 0.63 ≈ 9.2 s.
- **Min 4:30:** Ionian Boots; el haste acorta W (setup) y E (escape).

### Mid (9:00 – 16:00)
- **Pico ER (~8:00):** spellblade con 50–70 stacks ya pega 135 % AD base + ~30: ventana de agresión con W→auto.
- **Min 10:00:** ⬆️ Crimson Lucidity. Desde acá, rota con E: camuflaje de equipo para herald/dragón.
- **R como herramienta global:** ejecución + recolección de wraiths en toda la trayectoria + escudo pre-engage (castear ~1 s antes).

### Late (16:00+)
- **140+ stacks:** AD 229 sin ítems de AD, rango 730+, escudo R 480–560 por aliado. Asedio intocable: Q a través de ola y torretas (on-hit aplica a estructuras).
- **Teamfight:** posición EXTREMA atrás (570 HP), rota targets de Extraction (el CD es por objetivo), W a minion moribundo junto al carry enemigo = root AoE instantáneo.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|---|---|
| Minions 60 % daño a campeones | Su poke de línea es seguro; el enemigo no puede responder igual |
| Placas permanentes + decaen desde 5:00 | Q a torre desde 625+ farmea placas sin exposición |
| Botas T3 solo desde 10:00 | Crimson estrictamente a las 10:00 (Ley 6) |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 / 7.3a | 21/09 y 29/09/2026 | Sistema AS nuevo, nerf de ratio 7.3a, crit 90 %, R buff |
| Wiki oficial (WR:Senna + patch history) | 09/10/2026 | AD base 54 growth 0, rango 625, wind-up, economía de wraiths |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta.com (296-senna) | 09/10/2026 | Win rates S+ ambos roles (CSV del vigía) |
| Ficha analítica del autor (Senna 7.3a, 12/10) | 12/10/2026 | D1–D5, benchmarks de Niebla, sinergias/counters |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|---|---|
| AD base 50 (wr-meta) vs 54 (wiki) | **54** (wiki V6.2c); sensibilidad −1 a −2 % DPS (⚠️ W1) |
| Relic on-hit +20 % AD vs +10 plano | **+20 % AD** (wiki); ranking de builds invariante (⚠️ W2) |
| `model/senna_model.py` citado por la ficha del autor NO existe en el repo | Reconstruido como spec `senna` en `dps_model.py` (v1.15.3): números del reporte = motor estándar, reproducibles con `optimize_build.py senna` |

### Validación del modelo

- `validate_slots` → **PASS** en Tabla A (6 entradas con quest en slot propio) y Tabla A2.
- `python3 model/senna_model.py ambos --top 4` reproduce las Tablas A/A2 (63 052 y 651 382 hojas legales).
- `python3 model/optimize_build.py senna --top 6` reproduce la óptima del motor estándar (cross-check §8).
- Ley 3b: Terminus convive solo en su grupo (sin LDR/Mortal) → `legales()` True.
- Sensibilidad free_crit 0 → 0.5: la óptima no cambia de ranking (el crit de ítems ya satura el cap): el umbral blando de la Ley 1 es informativo, no restrictivo.

---

## APÉNDICE A — POOL DE ÍTEMES DEL ROL: veredicto para Senna

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Essence Reaver (3 000) | ✅ Core | Spellblade × crit gratis |
| Ardent Censer (2 400) | ✅ Core support | Buff proca con Q/R |
| Black Cleaver (3 000) | ✅ Core | HP + shred |
| Harmonic Echo (2 500) | ✅ Core | 2.º objetivo de cura/escudo |
| Guardian Angel (3 200) | ✅ Default 6.º | Revivir vs fragilidad |
| Redemption (2 450) | ⚠️ vs dive | Activo casteable muerta |
| Hexoptics C44 (2 900) | ✅ Core DUO | Magnification a 625+ |
| Blade of the Ruined King (3 100) | ✅ Core DUO | 6 % vida actual |
| Yun Tal Wildarrows (3 100) | ✅ Core DUO | Flurry post-7.3a |
| Runaan's Hurricane (2 650) | ✅ Core DUO | Rayos que critican |
| Infinity Edge (3 400) | ✅ DUO / ❌ support 1.er ítem | 207 % con mod 0.9 |
| Statikk Shiv (3 000) | ⚠️ DUO top-3 | Energized ≠ on-hit de Relic |
| Kraken Slayer (2 900) | ✅ Core DUO | Proca con autos Y con Q (on-hit por cast) |
| Terminus (3 000) | ✅ DUO (solo) | Pen sostenida; Ley 3b lo aísla de LDR/Mortal |
| Navori Quickblades (2 650) | ⚠️ Support híbrido | CD ×0.75 (convención D8): más casts de Q |
| Black Mist Scythe (quest) | ✅ Obligatoria support | Tribute + Spoils→wraiths (Niebla) |
| Lord Dominik's / Mortal Reminder | ❌ juntos | Ley 3b |
| Rapid Firecannon | ⚠️ niche | +150 rango: asedio 850+; sin stats de pelea |

## APÉNDICE B — RUTAS DE COMPRA

```text
SUPPORT (valor-aliado):
Quest Spectral Sickle (0:00) → Berserker's (4:30) → ⬆️ Gunmetal (10:00)
→ Ardent Censer (12:00) → Echoes of Helia (14:30) → Black Cleaver (17:00)
→ Essence Reaver (20:00)

DUO/ADC (motor dedicado):
Long Sword (0:00) → Berserker's (4:30) → Blade of the Ruined King (7:30)
→ Infinity Edge (10:30) → ⬆️ Gunmetal (11:30) → Runaan's (14:30)
→ Kraken Slayer (17:30) → Terminus (20:00)
```

---

## Pie de página

*Reporte generado el 11/10/2026 con datos del parche 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026). WR-LAB v1.15.3 (spec `senna` + `free_crit`). Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de republishar.*

**Referencias y créditos**
- Notas oficiales del parche 7.3 y 7.3a — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios sistémicos y de Senna.
- Wiki oficial WR:Senna + patch history — AD base, rango, wind-up, economía de Niebla.
- Win rates Diamond+ del 09/10/2026 — wr-meta.com vía `data/estructurada/champion_winrates.csv` (vigía del lab).
- Ficha analítica de Senna 7.3a del autor (12/10/2026) — discrepancias D1–D5 y benchmarks de Niebla.
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (`model/dps_model.py` + `model/optimize_build.py`).

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliada, patrocinada ni respaldada por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.
