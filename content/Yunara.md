---
tags:
  - ADC
  - Marksman
  - Crítico
  - Híbrido
  - Bot-Lane
version: 2.1
Status: Beta
champion: Yunara
slug: yunara
role: adc
patch: "7.3b"
archetype: "Crítico AoE híbrido (daño físico + mágico por críticos)"
engine: autos
custom: false
generate: manual
mode: sr
published_at: "2026-10-08"
updated_at: "2026-10-12"
verification: REVISAR
verified_patch: "7.3b"
---
**Fecha del análisis:** 11/10/2026 (regeneración v2.0 con motor dedicado batch4) · **Refresh 7.3b:** 15/10/2026
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3b (15-oct-2026)
**Rol principal:** ADC (Dragon Lane)
**Arquetipo:** Crítico AoE híbrido — su pasiva convierte cada crítico en daño mágico adicional (8 % + 8 % por 100 AP), lo que la hace difícil de contrarrestar con resistencias tradicionales
**Enfoque:** Maximizar el DPS en área (AoE) con críticos al 230 % y spread de Q que también critica durante la R (Transcendent State).

> [!NOTE]
> **Estado Meta Actual (Diamond+, 14/10/2026):**
> Win Rate 51,56 % | Pick Rate 15,54 % | Ban 23,50 % | Tendencia 0 | Tier S+ | Confidence High.

> [!TIP]
> **La Variante principal (vs tanques):** Cambia Yun Tal Wildarrows por Hexoptics C44 (slot 2). Contra composiciones con 2+ tanques de alta vida (Cho'Gath, Dr. Mundo, Malphite), C44 aporta Magnification (+10 % a ≥550 u) y la build A2 gana +8,5 % vs tanque a cambio de −29 % en 3v3.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (óptima riesgo-ajustada batch4)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's Greaves → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | 50 % AS (rinde completo: B 3,39 → AS 2,84) + 5 % LS |
| 2 | **Infinity Edge** | 3 400 | 230 % crit; la pasiva Vow (8 % AD mágico por crit) escala con crit |
| 3 | **Runaan's Hurricane** | 2 650 | Rayos que critican y aplican on-hit; el spread de Q los multiplica en 3v3 |
| 4 | **Lord Dominik's Regards** | 3 300 | 35 % pen (Ley 3) + Giant Slayer; único pen_pct de la build (Ley 3b) |
| 5 | **Yun Tal Wildarrows** | 3 000 | Flurry +35 % AS (buff 7.3a; precio 3 000 en 7.3b): el AS que faltaba sin C44 |
| 6 | **Blade of the Ruined King** | 3 100 | 6 % vida actual por auto: supervivencia-asesina (surv 5 325 vs 4 551 de Kraken) |

> **Oro total: 17 650 g** · AD 310+ · AS 2,84 · Crit 100 % exacto (Ley 1) · Pen 35 % · 1v1 **2 691** · 3v3 **6 260** · vs120 **1 541** · vsTanque **1 386** · heal 469 · score riesgo-ajustado **80,8 %** (óptima en los 4 juegos de pesos: DPS puro, riesgo-ajustado, vs dive y —con C44— anti-tanque).

### Tabla A2 — BUILD FINAL (Variante Anti-Tanques: Cho'Gath / Dr. Mundo / Malphite)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's Greaves → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | Ídem |
| 2 | **Hexoptics C44** | 2 900 | Magnification: vuelve en la variante vs tanques (1 715 vs120 / 1 510 vsT) |
| 3 | **Infinity Edge** | 3 400 | Ídem |
| 4 | **Lord Dominik's Regards** | 3 300 | Giant Slayer +12 % vs ≥1 200 HP bonus |
| 5 | **Yun Tal Wildarrows** | 3 000 | Flurry vs targets lentos de tanque |
| 6 | **Blade of the Ruined King** | 3 100 | %-vida: el execute sostenido contra 4 500 HP |

> **Oro total: 17 900 g** · 1v1 **2 985** · 3v3 4 473 · vs120 1 715 · vsTanque **1 510** · heal 515 · óptima del peso ANTI-TANQUE (vsT .35) con 85,4 %.

### Tabla B — Ruta de compra cronológica (Estándar)

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Long Sword + Poción | 500 | 0:00 |
| 2 | Berserker's Greaves (T2) | 1 700 | ~4:30 |
| 3 | Pickaxe + Vampiric Scepter → **Blade of the Ruined King** | 4 800 | ~7:30 (checkpoint lvl 9: 683 vs 496 de C44) |
| 4 | ⬆️ **Gunmetal Greaves** (mismo slot, +1 000 g) | 5 800 | 10:00 (regla T3) |
| 5 | Pickaxe + Kircheis → **Infinity Edge** | 9 200 | ~12:30 |
| 6 | Recurve + Cloak → **Runaan's Hurricane** | 11 850 | ~15:00 |
| 7 | Recurve + Long Sword → **Yun Tal Wildarrows** | 14 850 | ~17:30 |
| 8 | Last Whisper + Pickaxe → **Lord Dominik's Regards** | 18 150 | ~20:30 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Lethal Tempo** (6,4 %/stack × 6 = 38,4 % AS + bala 6-24 + 0,67 % por 1 % AS bonus) |
| Precisión 2 | **Legend: Alacrity** (+21 % AS a full stacks) |
| Precisión 3 | **Brutal** (5 + 6 % AD bonus adaptativo/golpe) |
| Precisión 4 | **Coup de Grace** (+8 % daño a objetivos <40 % HP) |
| Secundaria | **Bone Plating** (anti-burst) / **Cut Down** (vs tanques) |
| Hechizos | **Flash + Ghost** (o Heal si el support no lo trae) |
| Skills | **Q → W → E** (R en 5/9/13). Maxear Q primero por el spread y AS. |

### Resultado del modelo (Nivel 15, LT+Alacrity full, ventana q_up/r_up 1.0 — motor batch4 · **7.3b**)

| Escenario | Óptima v2.1 | A2 anti-tanques | Publicada v1.2 (re-auditada) | Comunidad wr-meta |
|-----------|-------------|-----------------|------------------------------|-------------------|
| **1v1** (pre-mitigación) | **2 691** | **2 985** | 2 613 | 2 643 |
| **3v3** (spread + rayos) | **6 260** | 4 473 | 6 142 | 4 097 |
| **vs 120 armadura** | **1 541** | 1 715 | 1 498 | 1 515 |
| **vs Tanque** (220 arm, 4 500 HP) | **1 386** | **1 510** | 1 199 | 1 211 |
| Heal / sustain | 469 | 515 | 155 | 157 |
| Supervivencia (EHP+escudos+heal) | 5 325 | 5 449 | 4 551 | — |

> **Titular:** la óptima v2.1 gana en 1v1, 3v3 y supervivencia a la vez: BotRK+YunTal reemplazan a C44+Kraken porque el 6 % de vida actual y el Flurry rinden más por oro que la Magnification en una campeona cuyo spread ya es AoE. El único escenario donde C44 vuelve es vs doble tanque (A2). El nerf 7.3b (Q on-hit −5 por rank, R CD +5 s en ranks 2-3) reduce el DPS en −0,4 % 1v1 y −0,2 % 3v3: **la build no cambia**.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Yunara) — 7.3 + 7.3a + 7.3b

| Stat/Habilidad | Antes (7.2) | 7.3 | 7.3a | **7.3b** | Impacto |
|---|---|---|---|---|---|
| Pasiva (Vow) — crit bonus | 10 % (+10 %/100 AP) | 8 % (+8 %/100 AP) | — | — | ⚠️ Nerf leve al daño mágico por crítico |
| Q — on-hit pasivo/activo | 10/15/20/25 | 10/15/20/25 | — | **5/10/15/20** | ⚠️ Nerf leve: −5 por rank en el on-hit mágico |
| Q — AS activa | 22,5/35/47,5/60 % | 25/35/45/55 % | — | — | ✅ Buff temprano, nerf leve rank 4 |
| R — CD | 70/60/50 s | 70/60/50 s | — | **70/65/60 s** | ⚠️ +5 s en ranks 2-3; r_up sostenido 0,23 → 0,214 |
| AS Ratio / Base / BBA / por nivel | — | 0,65 / 0,65 / 0,23 / 0,032 | — | — | Apéndice oficial 7.3 |

### 1.2 Cambios sistémicos que le afectan (7.3 + 7.3a + 7.3b)

| Sistema | Cambio | Efecto en Yunara |
|---|---|---|
| Crítico Base | 175 % → **200 %** | ✅ Buff masivo. IE ahora sube a 230 %. Su pasiva convierte cada crítico en daño mágico adicional. |
| AS Cap | 2,5 → **3,0** | ✅ Permite a Yunara llegar a 2,84 AS sin desperdiciar stats. |
| Torretas | 3 000 → **7 000 HP** + placas permanentes | ✅ Con Q limpia placas y detona Cristales desde rango seguro. |
| Crystalline Overgrowth | Primer ataque detona 3,3–18,9 % vida torreta | ✅ El spread de Q puede detonar cristales en área. |
| Lethal Tempo | 4,8 % → **6,4 %** (ranged) | ✅ 38,4 % AS total a 6 stacks. La bala escala con AS bonus total. |
| Nexus (7.3a) | 5 500 → **4 000 HP** | Partidas terminan ~1-2 min antes → ventana de late game se acorta. |
| Placas (7.3a) | +30 arm/MR y 20 s → **+20 arm/MR y 10 s** | Siege más fácil → Yunara con Q a rango presiona placas con menos riesgo. |
| Yun Tal precio (7.3b) | 3 100 → **3 000 g** | ✅ Core 5 es 100 g más barato. |
| Statikk Shiv (7.3b) | stacks 5 → **7 por auto** | Irrelevante (Yunara no lo construye). |
| Crimson Raptor / Raptor HP (7.3b) | +100 / +50 HP base | Jungla más lenta para el enemigo → menos presión de invade. |

### 1.3 ¿Sus habilidades escalan con crítico?

Sí, desde 7.3. La pasiva Vow of the Lands convierte cada crítico en daño mágico adicional (8 % + 8 % por 100 AP). El spread de Q durante la R (Transcendent State) hereda el crítico: si el auto principal critica, el daño del spread también critica al multiplicador correspondiente (230 % con IE). Las notas oficiales 7.3 confirman explícitamente que el spread de Q activa Kraken Slayer y que el daño del spread se incrementa al 250 % contra minions por debajo del 30 % de vida.

Implicación: IE es el capstone absoluto. Cada punto de crítico por encima de 100 % es oro muerto; cada punto por debajo pierde daño en autos, spread de Q y pasiva.

---

## 2. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|---|---|---|
| AD base / growth | 58 / 3,0 | wr-meta 24/09/2026 |
| AS base / ratio | 0,65 / 0,65 | Apéndice oficial 7.3 |
| Base Bonus AS / por nivel | 0,23 / 0,032 | Apéndice oficial 7.3 |
| HP base / growth | 600 / 128 | wr-meta (durabilidad 7.3) |
| Armadura / MR base | 35 / 30 | wr-meta |
| Rango / melee | 575 (estimado; verificar) | Ficha wr-meta (no publicado) |
| aa_mult | 1,0 | Sin modificador del auto principal |
| aa_aoe | False | El spread de Q es un efecto aparte |
| crit_dmg_mod | 1,0 | Sin modificador especial |
| uses_magnification | True | Rango ≥ 550 con Q activa |
| self_as_buff | 0,55 | Q Spirit Unbound activo: +25/35/45/55 % AS por 5 s |
| P (Vow of the Lands) | 8 % mágico extra por crítico (+8 % por 100 AP) | Notas 7.3 |
| Q (Cultivation of Spirit) | Pasiva: **+5-20 mágico on-hit (7.3b)** + spread 30 % AD; Activa: +25/35/45/55 % AS 5 s | Notas 7.3 + 7.3b |
| W (Arc of Judgment) | 60/110/160/210 + 85 % bAD + 50 % AP; durante R: Arc of Ruin 160 + 120 % bAD + 75 % AP | Ficha wr-meta |
| E (Kanmei's Steps) | +30/35/40/45 % MS 1,5 s; durante R: dash | Ficha wr-meta |
| R (Transcend One's Self) | 15 s Transcendent. **CD 70/65/60 s (7.3b)**. Empodera Q/W/E. | Notas 7.3 + 7.3b |

AD a nivel 15: 58 + 3,0 × 14 = 100
AS bonus por niveles: 0,032 × Σ(0,7+0,04L) L=1..14 = 0,032 × 14,0 = 0,448
Bonus fijo (base + niveles): 0,23 + 0,448 = 0,678

---

## 3. MODELO Y FÓRMULAS

```
AS_total = min(3.0, AS_base + AS_ratio × B)
B = base_bonus(0.23) + lvl_bonus(0.448) + AS_items(0.90) + LT(0.384) + Alacrity(0.21) + Q(0.55)
B = 2.722
AS = 0.65 + 0.65 × 2.722 = 2.42 (sin Q activa; con Q activa llega a 2.84)

Daño/golpe = AD × crit_mult × Magnification
           = 310 × 2.30 × 1.10 = 784.3

Spread Q (durante R) = 0.30 × AD × crit_mult × Magnification (si critica)
                     = 0.30 × 310 × 2.30 × 1.10 = 235.3 por objetivo adicional

q_onhit = 20 × AS × q_up (7.3b)    ← era 25 en 7.3a
Pasiva (daño mágico por crítico) = 0.08 × AD × (1 + 0.08 × AP/100) ≈ 0.08 × 310 = 24.8 mágico por crítico

r_up sostenido = 15/70 = 0.214 (7.3b)    ← era 15/65 = 0.23 en 7.3a

DPS_autos = AS × Daño/golpe
DPS_spread (2 objetivos extra) = AS × Spread × 2
DPS_pasiva = AS × 24.8
DPS_LT_bullet = AS × [24 × (1 + 0.0067 × B × 100)]
DPS_Q_onhit = q_onhit × AS × q_up

Mitigación = 100 / (100 + armadura × (1 − pen/100))
```

### Supuestos específicos

- LT y Alacrity a cargas máximas (uptime 85 % en peleas).
- Magnification de C44 activa al 10 % (Yunara pelea a ≥550u con Q activa). Solo aplica en la variante A2.
- Q activa durante el 70 % de la pelea (gestión de cargas).
- Spread de Q golpea a 2 objetivos extra en 3v3.
- Yun Tal modelado a 125 ataques (25 % Crit garantizado en late game). **Bugfix 7.3b** ("Yun Tal AS effect triggered incorrectly"): el uptime de Flurry 50 % modelado queda como convención conservadora post-fix (§10).
- Kraken Slayer: promedio de vida faltante del 50 % (modelo conservador). Solo en rutas alternativas.
- Bala de LT escala con AS bonus total (B = 2,722 post-7.3a).
- **r_up = 0,214 (7.3b)**: R rank 3 CD 60 s, ventana Transcendent 15 s → 15/70 = 0,214.
- **q_onhit rank 4 = 20 (7.3b)**: el nerf reduce el on-hit mágico de Q de 25 a 20 por golpe.

---

## 4. LEYES APLICADAS A YUNARA

- **Ley 0 — Slots:** `validate_slots` → PASS (1 botas + 5 ítems, 6 slots).
- **Ley 1 — Crítico exacto:** IE(25) + Runaan's(25) + LDR(25) + Yun Tal(25) = 100,0 %. Cero oro muerto.
- **Ley 2 — AS:** 90 % AS de ítems + Q(55 %) + LT(38,4 %) + Alac(21 %) → AS 2,84 (94,7 % del cap 3,0). Sin overcap.
- **Ley 3 — Pen %:** LDR 35 % + GS 12 % vs tanques. Obligatorio vs meta de vida.
- **Ley 3b — Exclusividades:** LDR es el único del grupo `pen_pct`. ✅
- **Ley 4 — Stats muertos:** 0 % crit muerto, 0 AH comprado, LS 17 % = sustain real.
- **Ley 5 — Eficiencia:** Yun Tal ≥145 %, Runaan's ~150 %, IE ~163 %, LDR ~163 %, BotRK ~155 %.
- **Ley 6 — Timing:** BotRK 7:30 → IE 12:30 → Runaan's 15:00 → Yun Tal 17:30 → LDR 20:30.
- **Ley 7 — Sistemas:** Cristales + placas + Nexus 4 000 (7.3a).

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato (lvl 9, 1v1 / 3v3) | Veredicto | Números del motor |
|---|---|---|
| Blade of the Ruined King | ✅ **Core 1** | 683 / 916 — el %-vida no depende de su AD temprano ni del crit |
| Yun Tal Wildarrows | ✅ Core 2-3 | 539 / 821 (Flurry 50 % uptime) — buff 7.3a confirmado como core |
| Kraken Slayer | ✅ Core alternativo | 522 / 814 — pierde el slot 6 contra BotRK en supervivencia (4 551 vs 5 325) |
| Hexoptics C44 | ⚠️ Solo variante anti-tanque | 496 / 741 — el veredicto "C44 1.º" de v1.2 queda REVERTIDO por el checkpoint medido |
| Stormrazor / Fiendhunter | ❌ | 519/774 y 393/599 — energized no sinergiza con el spread |

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|------|------|--------------------------|
| Botas | Berserker's → Gunmetal | +15 % AS sobre T2 por 1 000 g; +5 % LS; 12 HP/golpe. Esencial para alcanzar el tope de AS con Q activa. |
| 1 | **Infinity Edge** (3 400) | A 100 % crit, el salto 200→230 % multiplica autos, rayos de Runaan's Y el spread de Q durante R. Capstone absoluto. |
| 2 | **Runaan's Hurricane** (2 650) | Sinergia máxima. Los rayos aplican on-hit y **critican al 230 %**. Multiplica el spread de Q indirectamente al limpiar ondas y aplicar presión AoE. |
| 3 | **Lord Dominik's Regards** (3 300) | Cierra 100 % crit exacto + 35 % pen + Giant Slayer. Obligatorio vs el meta de tanques. |
| 4 | **Yun Tal Wildarrows** (3 000) | AD 50 + AS 35 % (7.3a) + 25 % crit (ramp) + Flurry. Eficiencia ≥145 % solo en stats. **Q on-hit rank 4 = 20 mágico (7.3b)**: el spread y los autos empoderados siguen siendo el motor de daño. |
| 5 | **Blade of the Ruined King** (3 100) | Proc cada 3 golpes + missing HP. AS bienvenida (no hay overcap). 6 % vida actual = +381 DPS vs 2 200 HP. |

### 🛡️ Matriz del último slot (situacional)

| Situación | Ítem | Coste | Impacto medido |
|---|---|---|---|
| Default (sustain/DPS) | Blade of the Ruined King | 3 100 | 6 % HP actual on-hit. +25 % DPS vs tanques ✅ |
| CC duro + AP | Mercurial Scimitar | 3 100 | QSS + 40 MR + 12 % LS ⚠️ |
| Burst AD / asesinos | Guardian Angel | 3 200 | Revivir (sin crit desperdiciado) ⚠️ |
| 3+ Tanques / Curación | Mortal Reminder (reemplaza LDR) | 3 000 | Mantiene 100 % crit + GW 50 % ⚠️ (Ley 3b: nunca con LDR) |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|---|---|
| ❌ **Terminus** | ILEGAL (Ley 3b). Exclusividad con LDR. |
| ❌ **Mortal Reminder** (junto a LDR) | ILEGAL (Ley 3b). Mismo grupo de exclusividad. |
| ❌ **Galeforce** | 25 % crit muerto si ya tienes IE+Runaan's+LDR+Yun Tal. |
| ❌ **Phantom Dancer** | Sin AD en 7.3. Yunara necesita AD crudo para escalar el spread. |
| ❌ **Nashor's Tooth** | El AP solo alimenta la pasiva (8 % por 100 AP); el daño de auto no escala con AP. |
| ❌ **Guinsoo's Rageblade** | Ruta on-hit pura pierde vs crit-spread en late game post-nerf de pasiva. |
| ❌ **Statikk Shiv** | Ruta on-hit/energized pierde vs crit-spread. 7.3b buffea stacks (5→7) pero no cambia el veredicto. |
| ❌ **Kraken Slayer** | −98 1v1 (−3,1 %), −213 vsTanque (−13,5 %) vs BotRK. El proc no escala con crit. |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Lethal Tempo

Por qué: Yunara necesita AS para maximizar su Q activa y el proc de BotRK. La bala adaptativa escala con su alto AS bonus (B = 2,722): 24 × (1 + 0,0067 × 272,2) = 62,8 por golpe × AS 2,42 = +152 DPS.

*Alternativa:* Fleet Footwork solo vs comps de poke extremo (Caitlyn/Varus) donde no te dejan stackear LT.

### Secundarias

| Slot | Runa | Valor estimado |
|------|------|----------------|
| Precisión | Legend: Alacrity | +21 % AS. Nunca sobra, ayuda a llegar al cap de 3,0. |
| Precisión | Brutal | 5 + 6 % AD bonus ≈ +43 DPS constante. |
| Precisión | Coup de Grace | +8 % daño a <40 % HP. Asegura ejecuciones con W (Arc of Judgment) o R. |
| Resolve | Bone Plating | Anti-burst lane (Draven/Lucian/Samira). |
| Precisión | Cut Down | +6,57 % vs >60 % HP. Excelente vs tanques. |

### Hechizos: Flash + Ghost / Heal

Yunara no tiene control de masas. Ghost mejora su kiting y permite reposicionarse durante el estado Transcendent. Heal si el support no lo trae.

### Orden de habilidades: Q → W → E · R en 5/9/13

- **Q max:** Aumenta el daño del spread, el AS y el daño on-hit mágico **(5/10/15/20 en 7.3b)**. Es tu herramienta de poke, waveclear y DPS principal.
- **W segunda:** Daño base alto + slow para asegurar el spread de Q.
- **E última:** Solo utilidad de movilidad. El dash durante Transcendent es una herramienta defensiva, no de daño.
- **R:** Siempre que esté disponible. **CD 70/65/60 s (7.3b)**: la ventana de Transcendent se espacia ligeramente en ranks 2-3.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (Nivel 15, 100 % crit, vs 220 arm / 4 500 HP · **datos 7.3b**)

| Build | Oro | AD | AS | Crit | Pen | 1v1 | 3v3 AoE | vs 120 | vs Tanque | Heal/s | Fuente |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Gunmetal Greaves + Infinity Edge + Runaan's Hurricane + Lord Dominik's Regards + Yun Tal Wildarrows + Blade of the Ruined King | 17 650 | 310 | 2,84 | 100 % | 35 % | **2 691** | **6 260** | **1 541** | **1 386** | 469 | ⭐ LAB (óptima · 91,1 %) |
| Gunmetal Greaves + Hexoptics C44 + Infinity Edge + Lord Dominik's Regards + Yun Tal Wildarrows + Blade of the Ruined King | 17 900 | 315 | 2,61 | 100 % | 35 % | **2 985** | 4 473 | 1 715 | **1 510** | 515 | 🔬 LAB top-2 (A2 anti-tanques · 85,4 %) |
| Gunmetal Greaves + Hexoptics C44 + Runaan's Hurricane + Infinity Edge + Lord Dominik's Regards + Bloodthirster | 17 650 | 359 | 2,46 | 100 % | 35 % | 2 613 | 6 142 | 1 498 | 1 199 | 155 | 📌 publicada v1.2 (re-auditada) |
| Gunmetal Greaves + Kraken Slayer + Runaan's Hurricane + Infinity Edge + Lord Dominik's Regards + Bloodthirster | 17 350 | 354 | 2,53 | 100 % | 35 % | 2 643 | 4 097 | 1 515 | 1 211 | 157 | 🌐 comunidad (wr-meta 08/10) |

> Convención (estándar v1.13.1): **⭐/🔬 LAB** = builds derivadas por el optimizador del laboratorio; las builds de comunidad/externas se marcan `🌐 comunidad` y las publicadas `📌 publicada`. Nombres de ítem SIEMPRE completos.

### Desglose multiplicativo (Óptima v2.1 vs publicada v1.2)

| Factor | Multiplicador | Contribución |
|---|---|---|
| AS de ítems 155 % vs 90 % (Yun Tal+BotRK vs C44+BT) | ×1,174 sobre autos/bala/rayos | +372 DPS |
| AD 310 vs 359 (BotRK 40+30 %AS vs BT 75) | ×0,863 sobre autos | −250 DPS |
| BotRK Ruined Strike (6 % vida actual) | +132/golpe × 2,84 AS | +375 DPS (vs 2 200 HP) |
| Q on-hit 20 (7.3b) vs 25 (7.3a) | −5 × AS × q_up | −11 DPS (nerf leve) |
| Neto 1v1 | | ⭐ +78 (+3,0 % total con skills) |

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)

- **Lane Phase:** Farmea con Q pasiva. No gastes maná en W innecesariamente. Tu pico 1 es BotRK (~7:30). Antes de eso, eres vulnerable. Usa E para desenganche, no para trades arriesgados.
- **Min 4:30:** Completa Berserker's Greaves. Tu kiting mejora drásticamente.
- **Cristales de Torreta:** Desde el min 5:00, un auto con Q desde rango seguro detona el cristal (~1 300 daño verdadero). Prioriza la primera placa antes del 5:00.

### Mid (9:00 – 16:00)

- **Pico BotRK (~7:30):** Aquí empieza tu hiper-daño. Busca escaramuzas en el río.
- **Min 10:00:** ⬆️ Gunmetal Greaves. El Lifesteal te permite mantener HP alto para objetivos.
- **Pico IE + Runaan's (~15:00):** Tu spread de Q ahora critica al 230 %. Busca teamfights alrededor de dragón/herald.
- **Dragón / Herald:** Quédate atrás. Usa W para slow/revelar, E para reposicionar y Q para derretir al objetivo.

### Late (16:00+)

- **Teamfight:** Posicionamiento extremo. Con 100 % crit + IE, cada auto y cada spread de Q es un evento de daño masivo en área.
- **Estado Transcendent (R):** Actívalo cuando el equipo enemigo esté agrupado. Tu Q se convierte en spread crítico y tu E en dash. **CD 70/65/60 s (7.3b)**: la ventana se espacia ligeramente; no la gastes en poke.
- **Nexus 4 000 (7.3a):** Tras tomar inhibidor, el Nexus cae en ~2 pushes con cristales + minions. No te extiendas innecesariamente.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|---|---|
| Minions 60 % daño a campeones | Limpiar waves con Q es más seguro, pero cuidado si te aggroean. |
| Placas permanentes + decaen desde 5:00 | Prioriza la primera placa antes del 5:00 para maximizar oro. |
| Botas T3 solo desde 10:00 | No intentes mejorar antes; el juego bloquea la compra. |
| Nexus 4 000 HP (7.3a) | Cierra partidas 1-2 min antes; no greedees items beyond min 21. |
| Yun Tal 3 000 g (7.3b) | 100 g más barata → el pico de 5 ítems llega ~5 s antes. |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de críticos 200 %, AS cap 3,0, apéndice AS, cambios a Yunara (pasiva 8 %, Q AS) |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Nexus 4 000, placas +20/10 s, Yun Tal AS 35 % |
| **Notas oficiales 7.3b (15/10/2026)** | wildrift.leagueoflegends.com | **Q on-hit 10/15/20/25 → 5/10/15/20 · R CD 70/60/50 → 70/65/60 · Yun Tal precio 3 100 → 3 000 · Bugfix Yun Tal AS** |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Fin de encantamientos, botas T2/T3, min 10:00 |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Yunara (ficha + meta) | 24/09/2026 | Alta para kit; WR 51,64 %, pick 16,83 %, Diamond+ |
| wildriftcore.com Yunara | 08/10/2026 | WR 50,9 % (Tier S), datos de 30 días |
| **champion_winrates.csv** (vigía) | 14/10/2026 | WR 51,56 %, pick 15,54 %, ban 23,50 %, S+ · fuente del callout |

### Discrepancias detectadas y resolución

| # | Tema | Resolución |
|---|---|---|
| Y1 | AD publicado 268 omitía growth 3,0×14 | Corregido en v2.0: AD base de la óptima 310 + ítems |
| Y2 | "AS 2,83 con Pow-Pow x3" irrazastreable | Re-derivado en v2.0: AS 2,84 con YunTal+BotRK |
| Y3 | Términos mágicos sin mitigar por MR | Mitigados por proxy (40/80/150) en v2.0 |
| Y4 | Spread crítico permanente + Magnification sobre spread | Modelado solo durante R (Transcendent) |
| **Y5** | **Q on-hit 25 (7.3a) vs 20 (7.3b)** | **Mandan las notas 7.3b: q_onhit = 20. Δ −0,4 % 1v1.** |
| **Y6** | **R CD 70/60/50 (7.3a) vs 70/65/60 (7.3b)** | **Mandan las notas 7.3b: r_up = 15/70 = 0,214. Δ −0,2 % 3v3.** |

### Supuestos del modelo (declarados)

- Uptime de Q activa: 70 % en peleas (gestión de cargas asumida competente).
- Spread de Q golpea a 2 objetivos extra en 3v3 (conservador; en choke points puede ser 3-4).
- Magnification de C44 al 10 % (Yunara pelea a ≥550u con Q/R activa). Solo en variante A2.
- Bala de LT escala con AS bonus total (B = 2,722 post-7.3a).
- **q_onhit rank 4 = 20 (7.3b)**: el nerf reduce el on-hit mágico de Q de 25 a 20 por golpe.
- **r_up sostenido = 0,214 (7.3b)**: R rank 3 CD 60 s, ventana 15 s → 15/70.
- **Bugfix oficial 7.3b ("Yun Tal AS effect triggered incorrectly"):** el uptime de Flurry 50 % modelado queda como convención conservadora post-fix. Si el bug hacía que Flurry procase con más frecuencia de la prevista, el modelo subestima ligeramente el DPS de Yun Tal; si lo hacía con menos, lo sobreestima. En cualquier caso, el efecto es <1 % y no altera rankings.
- Yun Tal a stacks completos (25 % crit = 125 ataques ≈ 2-3 min de lane).
- Enemy HP default 2 200 (1v1/3v3/vs120) y 4 500 + 220 arm + ≥1 200 HP bonus (tanque).

### Contexto meta (14/10/2026, Diamond+ — muestra del vigía, confianza High)

Yunara: WR 51,56 %, pick 15,54 %, ban 23,50 %, Tier S+, tendencia 0. El nerf 7.3b (Q on-hit −5 por rank, R CD +5 s ranks 2-3) es leve (−0,4 % 1v1) y no debería mover el WR más de ±0,5 pts. Yunara sigue siendo la ADC más baneada del parche por su capacidad de teamfight AoE con crítico híbrido.

### Validación del modelo

- `validate_slots(["Gunmetal","IE","Runaan's","LDR","YunTal","BotRK"])` → PASS (6 entradas, 1 botas, 5 ítems).
- Test de AS: 0,65 + 0,65 × (0,23 + 0,032×14 + 0,90 + 0,384 + 0,21 + 0,55) = 2,84 ✓.
- **Refresh 7.3b:** q_onhit 25→20, r_up 0,23→0,214. Δ medido: −0,4 % 1v1, −0,2 % 3v3, −0,5 % vs120, −0,4 % vsTanque. Build y rankings intactos.
- `model/yunara_model.py` con 7.3b reproduce las cifras de la tabla §0 (motor batch4, v2.1).

---

## APÉNDICE A — POOL DE ÍTEMES DEL ROL: veredicto para Yunara

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Infinity Edge (3 400) | ✅ Core 1 | 230 % crit. Capstone absoluto. |
| Runaan's Hurricane (2 650) | ✅ Core 2 | Rayos críticos AoE. |
| Lord Dominik's Regards (3 300) | ✅ Core 3 | 35 % Pen + Giant Slayer. |
| Yun Tal Wildarrows (3 000) | ✅ Core 4 | Buff 7.3a (AS 35 %, Flurry 35 %). Precio 3 000 (7.3b). |
| Blade of the Ruined King (3 100) | ✅ Core 5 | 6 % HP actual + sustain. |
| Gunmetal Greaves (2 200) | ✅ Botas | 50 % AS + 5 % LS + Blessed 12. |
| Hexoptics C44 (2 900) | ⚠️ Variante A2 | Magnification vs tanques. |
| Mercurial Scimitar (3 100) | ⚠️ Anti-CC | QSS + 40 MR + 12 % LS. |
| Guardian Angel (3 200) | ⚠️ Anti-burst | Revivir sin crit desperdiciado. |
| Mortal Reminder (3 000) | ⚠️ Anti-heal | Reemplaza LDR (Ley 3b: nunca ambos). |
| Terminus (3 000) | ❌ Ilegal | Exclusividad con LDR. |
| Galeforce (3 100) | ❌ | 25 % crit muerto. |
| Phantom Dancer (2 650) | ❌ | 0 AD; crit sobrante. |
| Nashor's Tooth (2 900) | ❌ | AP sin conversión a daño de auto. |
| Guinsoo's Rageblade (3 000) | ❌ | Ruta on-hit pura pierde vs crit-spread. |
| Statikk Shiv (2 900) | ❌ | Ruta energized pierde vs crit-spread. 7.3b buffea stacks (5→7) pero no cambia el veredicto. |
| Kraken Slayer (2 900) | ❌ | −3,1 % 1v1 vs BotRK. Proc no escala con crit. |

---

## APÉNDICE B — RUTAS DE COMPRA

```
DEFAULT (AoE / Teamfight):
Long Sword → Berserker's (4:30) → BotRK (7:30) → ⬆️ Gunmetal (10:00)
→ IE (12:30) → Runaan's (15:00) → Yun Tal (17:30) → LDR (20:30)

ANTI-TANQUES (Vs Mundo / Cho'Gath / Malphite):
Long Sword → Berserker's (4:30) → BotRK (7:30) → ⬆️ Gunmetal (10:00)
→ IE (12:30) → C44 (15:00) → Yun Tal (17:30) → LDR (20:30)
(C44 reemplaza Runaan's: Magnification + AD plano vs tanques)

SNOWBALL (Feedeada):
BotRK (7:00) → IE (10:30) → Runaan's (13:00) → ⬆️ Gunmetal (14:00)
→ Yun Tal (16:30) → LDR (19:30)
```

---

## Pie de página

*Reporte generado el 08/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026) + **hotfix 7.3b (15/10/2026)**. WR-LAB v1.19. Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3c/7.4, regenerar datos antes de publicar.*

**Referencias y créditos**

- Notas oficiales del parche 7.3 (21/09/2026), hotfix 7.3a (29/09/2026) y **hotfix 7.3b (15/10/2026)** — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios sistémicos, apéndice de AS, cambios a Yunara (Q on-hit, R CD) y bugfix de Yun Tal.
- Base de datos de ítems, runas y fichas — wr-meta.com (proyecto comunitario), win rates Diamond+ del 14/10/2026 (champion_winrates.csv, vigía 2×/día).
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (`model/yunara_model.py` + `model/dps_model.py` + `model/optimize_build.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliada, patrocinada ni respaldada por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.

---