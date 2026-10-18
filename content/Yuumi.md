---
tags:
  - Support
  - Enchanter
  - AP-Burst
  - Bot-Lane
version: 2.1
Status: Beta
champion: Yuumi
slug: yuumi
role: support
patch: "7.3+7.3b"
archetype: "AP-burst agresivo (Q/R)"
engine: yuumi-agresiva
custom: true
generate: manual
mode: sr
published_at: "2026-09-27"
updated_at: "2026-10-12"
verification: SIN_IMPACTO
verified_patch: "7.3b"
---
**Fecha del análisis:** 18/10/2026 (rev. v2.1 — corrección de runas: la página publicada es LEGAL y vuelve a ser la base; motor `yuumi_agresiva_model.py`, batch5, constantes 7.3b)
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026) + hotfix 7.3b (15-oct-2026)
**Rol principal:** Support agresivo (custom): dañar con Q mejorada y R de 7 olas
**Arquetipo:** AP-burst de poke montado (Best Friend): el daño es Q/R + ítems amplificadores, no autos
**Enfoque:** Maximizar daño de Q/R con maná y haste sostenibles sobre botas de penetración. La curación pasa a segundo plano pero NO colapsa (R-heal 662, −2 % vs baseline enchanter).

> [!NOTE]
> **Estado Meta Actual (Diamond+, 17/10/2026):** SUPPORT Win Rate 48.23 % | Pick Rate 8.92 % | Ban 33.84 % | Tendencia ↓3 | Tier A (Confidence High).

> [!DANGER]
> **Sacrificio declarado vs baseline enchanter (Y1: Censer + Echoes + Staff + Redemption):** ADC+ **103 vs 248 (−58 %)** y Helia/E 0 (la cura por daño de Q desaparece). A cambio: Q-hit 275→**501 (+82 %)**, R-burst 1 409→**2 785 (+98 %)**, DPS sostenido 162→**330 (+104 %)**, y el escudo/curación propios casi no caen (E-shield 367, +4 %; R-heal 662, −2 %). Es una build de *impacto*, no de protección: si tu ADC necesita niñera, juega Y1.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (óptima agresiva batch5 + runas corregidas, 28 822 hojas legales)

| Slot | Ítem | Oro | Rol en la build |
|---|---|---|---|
| 1 (botas) | **Boots of Mana → ⬆️ Spellslinger's Shoes** (min 10:00, MISMO slot) | 2 200 | 35 AP + 18 pen plana + 8 % pen: la pen es el "crit" de Yuumi (Ley 1 adaptada) |
| 2 (quest) | **Spectral Sickle → ⬆️ Black Mist Scythe** (Tribute, mismo slot) | 0 | 10 AH gratis + oro pasivo: el slot de quest no compite |
| 3 | **Imperial Mandate** | 2 600 | Q slow/reveal marca siempre: Command +7 % daño aliado + 20 AH (Q/R son CC-abilities) |
| 4 | **Horizon Focus** | 2 700 | Hypershot ×1.10 a ≥600 u: tu Q cargada y R lo cumplen siempre (uptime 1.0/0.8) |
| 5 | **Malignance** | 2 700 | Scorn: −MR sostenido + 20 AH de R + Hatefog post-R; el amplificador de las 7 olas |
| 6 | **Stormsurge** | 2 800 | 90 AP + 15 pen plana + Squall: ejecuta lo que tu R dejó a <25 % |

> **Oro total: 13 000 g** (convención lab de support: quest 0 g + botas + 4) · **AP 355 · AH 80 (cdr 44 %) · pen 33 plana + 8 %** · **Q-CD 2.50 s · R-CD 29.5 s** · validate_slots PASS (1 bota + quest + 4).

### Tabla B — Ruta de compra cronológica

| # | Compra | Oro acum. | Minuto típico |
|---|---|---|---|
| 1 | **Spectral Sickle** (quest start) | 500 | 0:00 |
| 2 | **Boots of Speed** | 1 000 | ~3:00 |
| 3 | **Boots of Mana** (T2) | 2 200 | ~5:00 |
| 4 | Bandleglass Mirror + Blasting Wand → **Imperial Mandate** | 4 800 | ~8:00 |
| 5 | ⬆️ **Spellslinger's Shoes** (mismo slot, +1 000 g) | 5 800 | 10:00 (regla T3) |
| 6 | Blasting Wand + Fiendish Codex → **Horizon Focus** | 8 500 | ~12:30 |
| 7 | Blasting Wand + Codex + 600 → **Malignance** | 11 200 | ~15:00 |
| 8 | Blasting Wand + Void Amethyst + Aether Wisp → **Stormsurge** | 13 500 | ~18:00 |

### Runas · Hechizos · Habilidades (página PUBLICADA, legal, verificada in-game por el autor)

Estructura legal (reglas L1-L4 de `model/runas_wr.py` v1.21): **1 keystone + 3 runas del árbol del keystone (una por fila: 1, 2 y 3) + 1 secundaria de cualquier OTRO árbol** = 5 slots.

| Categoría | Elección | Opciones de la fila |
|---|---|---|
| Keystone (Sorcery) | **Aery** — daño 15-70 + 5 % AP por proc (7.3b: su escudo aliado 25-120→20-100); proca con cada Q cargada | Arcane Comet · Phase Rush |
| Sorcery · fila 1 | **Manaflow Band** — +30 maná máx por Q impactada (hasta +300): el poke sostenido existe | Axiom Arcanist · Botanist · Hexflash |
| Sorcery · fila 2 | **Transcendence** — +5 AH (lvl 1) y +5 AH (lvl 5); lvl 9: −8 % CD de la básica tras impactar | Celerity · Absolute Focus |
| Sorcery · fila 3 | **Scorch** — 21-49 daño mágico extra por habilidad, CD 8 s | Nimbus Cloak · Gathering Storm · Ixtal Seedjar |
| Secundaria (Resolve) | **Revitalize** — +5 % curación y escudos (+10 % extra con objetivo <40 % HP): amplifica tu E y tu R | Overgrowth · Perseverance — y en general CUALQUIER runa de otro árbol: Sudden Impact, Cut Down, Second Wind… |
| Hechizos | **Flash + Ignite** (ejecución post-poke) · **Flash + Exhaust** vs dive | — |
| Skills | **Q > E > W** (R en 6/11/16): Q maxea el poke; E sostiene el attach; W solo 1 punto early | — |

### Resultado del modelo (nivel 15, min 20, MR 50 squishy / MR 150 tanque, página publicada)

| Escenario | Óptima agresiva v2.1 | Poke-híbrida publicada v1.2 | Y1 enchanter (baseline lab) |
|---|---|---|---|
| **Q-hit (poke cargado)** | **501** | 333 | 275 |
| **Q-DPS sostenido** | **201** | 150 | 102 |
| **R-burst (7 olas)** | **2 785** | 1 714 | 1 409 |
| **DPS sostenido total** | **330** | 236 | 162 |
| **vs Tanque (MR 150)** | **179** | 136 | 97 |
| **E-shield / R-heal** | 367 / 662 | 305 / 757 | 354 / 672 |
| **ADC+ (Censer)** | 103 | 87 | 248 |

> **Titular:** la v2.1 gana a la publicada en todo el eje de daño (**+50 % Q-hit, +62 % R-burst**) con el mismo oro **y la misma página de runas** — la diferencia es 100 % de ítems: botas de penetración desde el slot 1 y la cadena de amplificadores Mandate + Horizon + Malignance. El costo real es único y declarado: el buff de AS al ADC (−58 %).

### 0.3 ¿Por qué esta build funciona para "dañar con Q"?
- **Q mejorada rank 4 = 340 + 35 % AP** y se castea GRATIS estando attachada (Best Friend): cada 2.5 s (cdr 44 %) es un misil de 501 con pen de 33+8 %.
- **R de 7 olas con Wave Damage Stacks:** Σ = 7×(120+15 % AP) + 21×(40+5 % AP) = 1 680 + 2.10×AP → con 355 AP = **2 426 base + amps** (Hypershot ×1.08 efectivo, Mandate ×1.07) + Hatefog (180 + 15 % AP): **2 785** post-pen.
- **La página de runas habilita la rotación, no la sustituye:** Aery + Scorch suman ~30 DPS sostenido (9 % del total); Manaflow Band sostiene el maná del poke y Transcendence + Revitalize dan haste y amplificación de E/R. El daño pesado viene de los ítems: así está diseñada (y publicada) la build.

---

## 1. LEYES APLICADAS A YUUMI AGRESIVA

- **Ley 0 — Slots:** 6 entradas (botas T3 + quest + 4); la quest vive en su slot propio y no compite. PASS.
- **Ley 1 adaptada — Penetración = crit del mago:** 33 plana + 8 % (Spellslinger) + 15 (Stormsurge) + Scorn de Malignance (−MR sostenido): contra MR 50, el paquete de pen vale +27 % de daño efectivo de Q/R; sin botas de pen (v1.2 con Crimson) se perdían 18 puntos de pen plana.
- **Ley 2 adaptada — Haste = frecuencia de Q:** AH 80 (70 de ítems + 10 de Transcendence) → Q-CD 2.50 s y R-CD 29.5 s: cada punto de AH por encima de 60 rinde +0.9 % de daño minuto a minuto (medido en el motor).
- **Ley 3b:** sin ítems de pen física porcentual en el pool (grupo pen_pct ajeno a AP) — no aplica.
- **Ley 5-6 — Timing:** Mandate al min 8 (su Command necesita un slow: tu Q lo da desde lvl 1); Spellslinger estricto a las 10:00 (regla T3); Malignance antes que Stormsurge si el enemigo tiene 2+ curas (GW de Scorn).

---

## 2. ANÁLISIS DEL PRIMER ÍTEM COMPLETADO

| Candidato (post-quest) | Veredicto | Números del motor (min 8, lvl 9) |
|---|---|---|
| **Imperial Mandate** | ✅ **Core 1** | Command +7 % en cada Q marcada (uptime 100 %) + 20 AH: +9 % de daño de equipo desde 2 600 g |
| **Horizon Focus** | ✅ Core 2 | Hypershot ×1.10: sin él, el R-burst cae 8 % |
| **Echoes of Helia** | ⚠️ Solo híbrida | Convierte 30 % del daño en cura: en la óptima agresiva su oro rinde menos que Malignance (−6 % R-burst pero +18 % E-shield): ver variante [!TIP] |
| **Luden's Echo** | ❌ | Su proc compite con el misil de Q por el mismo objetivo ya marcado; sin pen ni AH de CC: −7 % Q-DPS vs Mandate |
| **Riftmaker** | ❌ | Omnivamp sin daño de auto: el void corr multiplica daño que Yuumi casi no sostiene |

---

## 3. BUILD FINAL RANURA POR RANURA

Ver Tabla A. Notas por slot:
- **Spellslinger's Shoes:** 18 pen plana early = +11 % de Q-hit contra MR 50 al min 10; el 8 % porcentual escala con Malignance.
- **Mandate:** tu Q slow/reveal SIEMPRE marca (no requiere inmovilización completa en WR 7.3): Command proca por cast, no por segundo.
- **Horizon:** el misil de Q viaja ≥1 s y pega a ≥600 u cargada: Hypershot uptime 1.0 en poke, 0.8 en R (olas lejanas).
- **Malignance:** Scorn −MR en área + Hatefog (180 + 15 % AP) tras R: el único ítem que amplifica las 7 olas completas.
- **Stormsurge:** Squall a <25 % HP cierra lo que el R dejó vivo; 6 % MS para reposicionar el attach.

### Matriz del último slot (situacional)

| Situación | Slot 6 | Impacto medido |
|---|---|---|
| Default daño | **Stormsurge** | Q-DPS 201 · R 2 785 ✅ |
| Vs 2+ curas | **Morellonomicon** por Stormsurge | GW 50 %: Q-hit 436 · R 2 417 (−13 %) ⚠️ |
| Híbrida con cura de equipo | ruta [!TIP]: **Censer + Echoes + Mandate + Rabadon** | Q-hit 404 · R 2 123 · E-shield 421 (+19 %) · R-heal 748 (+11 %) · ADC+ 274 |
| Vs burst mágico | **Maw of Malmortius**? fuera de pool AP | declarar: jugá Y1 enchanter |
| Oro adelantado (13 600 g) | **Rabadon's Deathcap** por Stormsurge | Q 493 · R 2 778 (daño ≈ igual, sin Squall) pero E 447 · R-heal 776: protección ⬆ |
| Presupuesto 14 000 g | **Infinity Orb + Cryptbloom** por Malignance + Stormsurge | Q-DPS 231 · R 2 898 · DPS 355 (13 600 g, motor [4]) |

> [!TIP]
> **Variante híbrida de emergencia (78.4 % del score agresivo):** Scythe + Spellslinger + **Censer + Echoes** + Mandate + **Rabadon** (13 000 g). Sacrifica 24 % de R-burst y 28 % de Q-DPS vs la óptima, y recupera el juego de equipo: ADC+ 274 (+11 % vs Y1), E-shield 421, R-heal 748. Con Aery + Revitalize, cada E además escuda ~+5 %: la híbrida es la página publicada en su forma más teamfight.

### RECHAZADOS (con motivo numérico)
| Ítem | Motivo |
|---|---|
| ❌ **Echoes of Helia + Ardent Censer juntos** en agresiva | El motor los mide como redundantes para el objetivo de daño: la híbrida baja R-burst a 2 123 (−24 %) y Q-DPS a 145 (−28 %); su valor es aliado (ADC+ 274), no tuyo |
| ❌ **Crimson Lucidity** | Sin pen: Q-hit 501 → 406 (−19 %) con el mismo AH |
| ❌ **Staff of Flowing Waters** | El buff de AS al ADC no se usa si tu plan es pokear montada: 0 sinergia con Q/R |
| ❌ **Warmog's / Locket** | Umbral 7.3b de Warmog (1 250 HP bonus) inalcanzable para Yuumi; Locket es valor de teamfight que esta build delega |

---

## 4. RUNAS · HECHIZOS · HABILIDADES

### La página publicada (Aery), por qué se sostiene en 7.3b
- **Aery (daño 15-70 + 10 % bAD + 5 % AP; escudo aliado 20-100 + 5 % AP):** proca con cada Q cargada (~1 proc/3 s contando su viaje de vuelta) = ~88 de daño pre-mit a lvl 15 con 355 AP, y su escudo cae sobre el carry justo cuando tu E ya está amplificando curas. Con Revitalize, ambos lados de Aery rinden +5 %.
- **Manaflow Band + Transcendence + Scorch (filas 1-2-3 de Sorcery):** maná para el poke continuo (+300 máx), los 10 AH que completan el cdr 44 % y 21-49 de daño extra por habilidad. Es la página que habilita la rotación Q cada 2.5 s sin quedarte seca.
- **Motor, término de runas:** ~30 DPS de los 330 totales (9 %). La build NO depende de las runas para su daño: por eso la óptima de ítems no cambió al corregirlas.

### Alternativas legales (mismo árbol Sorcery) y referencias teóricas
| Keystone | Legalidad | Medición del motor (óptima, min 20) |
|---|---|---|
| **Aery** (publicada) | ✅ | DPS 330 · Q-DPS 201 — referencia |
| **Phase Rush** | ✅ página legal (MS + −20 % CDs restantes al proc) | DPS 328 (−0.8 %) · Q-DPS 216 (+7 %): la opción de kiting extremo |
| **Arcane Comet** | ✅ página legal | DPS 314 (−4.9 %): el cometa se esquiva; Aery no |
| **Electrocute / Dark Harvest** (Domination) | ⚠️ estructura legal solo con 3 runas Domination (f3 = Relentless/Zombie Ward: inútiles en Yuumi) | DPS 318 / 310 (−3.9 % / −6.2 %): tu rotación attachada no encaja 3 hits independientes en 3 s — no viable en la práctica |

Secundaria: **Revitalize** (publicada) vs **Coup de Grace** (Precision, +2.0 % DPS medido) vs **Second Wind / Sudden Impact** (supervivencia/true damage). Gathering Storm NO es secundaria legal con keystone Sorcery (L4).

### Post-mortem de la v2.0 (qué hizo mal el lab, corregido en v2.1)
1. **"6 slots" inexistente:** la ficha del autor lista las OPCIONES de cada fila (p.ej. "fila 1: Axiom Arcanist, Manaflow Band (elegí esta), Botanist, Hexflash") — el lab v1.20 las contó como slots y declaró ilegal una página que era legal de 5 slots.
2. **DB de runas errónea:** la v1.20 tenía keystones y filas mal mapeadas (Gathering Storm figuraba "Inspiration"; Axiom/Transcendence en filas equivocadas). Con la DB corregida (fuente: `runas_7.3.md` + verificación in-game del autor), la regla L2 real es: **las 3 runas son del árbol del keystone, una por fila**.
3. **Set Electrocute "verificado en cliente":** falso. El set del motor batch5 (Electrocute + Cheap Shot + Transcendence + Coup de Grace | Gathering Storm) viola L2 (runas de 3 árboles) y nunca fue una página equipada. Los tests lo fijan como ILEGAL.
4. **Los CDs de 3.1 s (medición del 16/10):** no los causó una "página ilegal" — la página publicada es legal y lleva Transcendence. La lectura coherente: el Q-CD de 2.5 s es de nivel 15 con la óptima completa (AH 80 + 20 de Mandate = cdr 50 % en CC); una medición a mid-game sin esos ítems da ~3.1 s. Pendiente de confirmación del autor.

---

## 5. COMPARACIÓN CONTRA ALTERNATIVAS

| Build | Oro | Q-hit | R-burst | ADC+ | Score agresivo | Fuente |
|---|---|---|---|---|---|---|
| **Óptima v2.1 (Tabla A)** | 13 000 | **501** | **2 785** | 103 | 85.1 % | ⭐ LAB (batch5 + runas corregidas) |
| Híbrida balanceada (Scythe + Spellslinger + Censer + Echoes + Mandate + Rabadon) | 13 000 | 404 | 2 123 | **274** | 78.4 % (peso aliado .51) | 🔬 LAB top-N |
| Poke-híbrida publicada v1.2 (Echoes + Mandate + Stormsurge + Harmonic) | 12 300 | 333 | 1 714 | 87 | — | 📌 publicada |
| Y1 enchanter (Censer + Echoes + Staff + Redemption) | 11 650 | 275 | 1 409 | **248** | — | 📌 baseline lab |

### Desglose de la diferencia (v2.1 vs v1.2 publicada — MISMA página de runas, cadena de swaps del motor)
| Swap | Q-hit | R-burst |
|---|---|---|
| Base v1.2 (Crimson + Echoes + Mandate + Stormsurge + Harmonic) | 333 | 1 714 |
| ⬆️ Spellslinger por Crimson (pen desde slot 1) | 410 (+23 %) | 2 118 (+24 %) |
| ⬆️ Horizon por Harmonic (Hypershot) | 465 (+14 %) | 2 373 (+12 %) |
| ⬆️ Malignance por Echoes (Scorn + Hatefog) = ÓPTIMA | **501 (+8 %)** | **2 785 (+17 %)** |
| **Neto** | **+50 %** | **+62 %** |

---

## 6. PLAN DE JUEGO

### Early (0:00 – 8:00)
- **Attach al carry de poke** (Caitlyn/Jinx/Varus-like): Q cargada cada 4-5 s con Aery procando en cada impacto (daño al enemigo + escudo al aliado cuando casteas E).
- **Quest primero que componentes:** los executes de Tribute (Spoils) pagan Mandate al min 8.
- **Manaflow Band trabaja solo:** cada Q impactada suma +30 de maná (hasta +300): a partir de mid-game el poke continuo es gratis.

### Mid (8:00 – 14:00)
- **Mandate + Spellslinger = ventana de ejecuciones:** el carry enemigo a <25 % activa Squall de Stormsurge tras tu R; el Command de Mandate amplifica el follow-up de tu equipo +7 %.
- **R como zoning de objetivos:** 7 olas en área = 2 785 repartidos; castealo PRE-engage (el viaje de las olas es lento).

### Late (14:00+)
- **Scorch + Aery sostienen el poke:** ~30 DPS constantes que no dependen de CDs de ítem; tu side-poke quita un tercio de squishy por trade.
- **Revitalize brilla en teamfight:** +5 % a toda cura/escudo (+10 % extra con el objetivo <40 % HP): tu E (367) y tu R-heal (662) rinden 385/695 efectivos sobre aliados heridos.
- **No pelees sin attach:** 500 HP base y cero escapes: tu posición ES tu carry.

### Regla de Oro
Si al min 10 tu ADC está 0/2 o el jungla enemigo campea bot: **convertite a la híbrida** ([!TIP]: Censer + Echoes + Mandate + Rabadon) — el motor la puntúa 78.4 % con ADC+ 274: pierdes 24 % de R-burst y recuperas el juego.

### Reglas del parche que cambian el macro
| Regla | Impacto |
|---|---|
| 7.3b: Aery escudo 25-120→20-100 | El keystone publicado conserva su daño (15-70 intacto); el lado enchanter cae levemente: la variante agresiva gana valor relativo |
| 7.3: runas — Ingenious Hunter removida, Legend: Tenacity→Legend: Haste | DB del lab corregida (`runas_7.3.md` + `runas_wr.py` v1.21) |
| 7.3: torretas 7 000 HP | Tu poke de torre con Q attachada es de los pocos que escala sin AD |

---

## 7. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias
| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3/7.3a/7.3b | 21/09, 29/09, 15/10/2026 | Q/R valores, HSP de W 7.3a, runas 7.3b (Aery/Electrocute/Cheap Shot) |
| Cliente WR (autor) | 16-18/10/2026 | Estructura real de páginas (árbol/filas L1-L4), página publicada de Yuumi y CDs observados |
| runas_7.3.md (wr-meta 24/09) | lab | Nombres y valores de runas 7.3 (+ complemento in-game del autor: filas Sorcery/Resolve) |
| items_7.3.csv + diff 7.3b | vigía | Precios y stats del pool (Locket/Warmog/Statikk/Yun Tal/Youmuu 7.3b) |

### Discrepancias y erratas
| # | Tema | Resolución |
|---|---|---|
| D-v2.1 | La v2.0 declaró ilegal (6 slots) la página publicada y propuso un set Electrocute "verificado" | **Retractado:** la página publicada (Aery + Manaflow + Transcendence + Scorch \| Revitalize) es LEGAL y verificada in-game; el set Electrocute es ILEGAL (L2). DB y reglas corregidas en `runas_wr.py` v1.21; números re-derivados |
| D-v2.2 | Cifras de daño v1.2 ("Q ~120-150", "haste 65-75") sin motor | Re-derivadas con batch5: Q-hit 501 con pen completa; AH 80 |
| D-v2.3 | R de 7 olas: stacking por ola impactada | Interp B default (Σ 1 680 + 2.10×AP); interp A conservadora = 1 080 + 1.35×AP (−9 % DPS): rankings sin cambio |
| D-v2.4 | Q mejorada: misil ≥1 s de viaje | Poke attachado estándar (uptime 1.0); sin attach, el misil falla más: declarado |
| D-v2.5 | Q-CD medido 3.1 s vs 2.5 s publicado (16/10) | No explicable por runas (página legal con Transcendence); coherente con medición a mid-game sin el AH completo (2.5 s exige AH 100 en CC: 80 + Mandate 20). Pendiente de confirmación del autor |

### Validación del modelo
- `python3 model/yuumi_agresiva_model.py` reproduce todas las tablas (28 822 hojas legales, presupuesto 13 000 g, Ley 0; sección [0] valida la página publicada contra L1-L4 y fija el set batch5 v1.20 como ilegal).
- Baseline Y1 replicado: e_shield 353.9 / r_heal 671.9 / shld-min 4 365 (fixture de tests del lab: 338.8/650.7/3 953 con sus runas originales — deriva por constantes 7.3b, declarada).
- `tests/test_yuumi_agresiva.py` (6 tests): página publicada legal, set batch5 ilegal (regresión), presupuesto, sacrificio acotado (ADC+ ≥ 90 y R-heal ≥ 600), cifras de la tabla y óptima invariante.
- `tests/test_runas_wr.py` (18 tests): los sets reales del autor + reglas L1-L4 + DB de filas/árboles.

---

## APÉNDICE A — POOL AP DE SUPPORT: VEREDICTOS

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Imperial Mandate (2 600) | ✅ Core 1 | Command con Q slow siempre |
| Horizon Focus (2 700) | ✅ Core 2 | Hypershot 1.0/0.8 |
| Malignance (2 700) | ✅ Core 3 | Scorn + Hatefog en R |
| Stormsurge (2 800) | ✅ Default 6.º | Squall de ejecución |
| Spellslinger's Shoes (2 200) | ✅ Botas | Pen = crit del mago |
| Echoes of Helia (2 400) | ⚠️ Híbrida | Cura por daño de Q |
| Ardent Censer (2 400) | ⚠️ Híbrida | ADC+ 274 en la híbrida |
| Rabadon's Deathcap (3 400) | ⚠️ Ventaja | +AP sin utilidad (13 600 g) |
| Luden's / Riftmaker / Crimson | ❌ | Ver §2/§3 |

## APÉNDICE B — RUTA HÍBRIDA DE EMERGENCIA
```text
Quest (0:00) → Boots of Mana (5:00) → Mandate (8:00) → ⬆️ Spellslinger (10:00)
→ Censer (12:30) → Echoes (15:00) → Rabadon (18:30)   [ADC+ 274 · R-heal 748]
```

---

## Pie de página

*Reporte re-derivado el 18/10/2026 con `model/yuumi_agresiva_model.py` (batch5, rev. runas) sobre 7.3+7.3a+7.3b. WR-LAB v1.21. Página de runas = la publicada por el autor, verificada in-game (18/10); cifras de daño del motor pendientes de confirmación propia en juego. Si Riot publica 7.3c/7.4, regenerar antes de republishar.*

**Referencias y créditos**
- Notas oficiales 7.3/7.3a/7.3b — © Riot Games, Inc. (wildrift.leagueoflegends.com).
- Win rates Diamond+ del vigía (17/10/2026) vía `data/estructurada/champion_winrates.csv`.
- Verificación in-game del autor (16-18/10/2026): estructura de páginas de runas (L1-L4) y página publicada de Yuumi.
- Motor batch5 y búsqueda: `model/yuumi_agresiva_model.py` + `model/yuumi_agresiva_resultados.txt`.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.
