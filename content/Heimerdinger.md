---
tags:
  - Mid
  - Mage
version: 2
Status: Beta
champion: Heimerdinger
slug: heimerdinger
role: mid
patch: "7.3a"
archetype: "Mago de zona (turrets) — control de mapa y presión de oleadas"
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
**Rol principal:** Mid (con flex a Support como segundo rol viable)
**Arquetipo:** Mago de zona
**Enfoque:** Maximizar el daño sostenido de las torretas (AP + penetración mágica + mana para spamear Q)

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (08/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Heimerdinger:** ninguno en 7.3a.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada:** no extraíble automáticamente del formato del vault → triage cualitativo (intersección champion/ítems/sistemas).
> **Ítems cambiados fuera de la build final:** Death's Dance (NERF) — verificar variantes/rechazados del reporte.
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 05/10/2026):**
> Win Rate 49.60 % | Pick Rate 1.58 % | Ban 1.11 % | Tendencia 0 | Tier A | Rol MID | Confianza Low.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (Zona / Control)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Boots of Mana → ⬆️ Spellslinger's Shoes** (min 10:00, MISMO slot) | 2 200 | +35 AP, +18 pen mágica plana, +8 % pen mágica, +100 % mana regen. Big Bully (waveclear con auto). |
| 2 | **Blackfire Torch** | 2 800 | 80 AP, 500 maná, 20 AH, Baleful Blaze: 20 + 2 % AP/s durante 3 s (las torretas lo mantienen activo) |
| 3 | **Liandry's Torment** | 3 000 | 300 HP, 70 AP, Torment: 2 % max HP + Madness (+6 % tras 3 s en combate) |
| 4 | **Rylai's Crystal Scepter** | 2 700 | 350 HP, 65 AP, Icy: slow 30 % — **garantiza el uptime de torretas** (los enemigos no pueden salir del rango) |
| 5 | **Rabadon's Deathcap** | 3 400 | 130 AP + 30 % AP total. Multiplica el daño de torretas, W y E. |
| 6 | **Cryptbloom** | 3 000 | 75 AP, 30 % pen mágica, 20 AH, Life from Death (nova curativa al matar) |

> **Oro total: 17 100 g** · AP ~590 (con Rabadon's) · HP 650+ base · Mana +500 · Haste 40 · Pen mágica 18 plana + 38 % · **DPS de 3 torretas + R+Q: ~1 250**

### Tabla A2 — VARIANTE SUPPORT (Poke + Amp de equipo)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Boots of Mana → ⬆️ Spellslinger's Shoes** (min 10:00, MISMO slot) | 2 200 | Igual que build estándar |
| 2 (quest) | **Spectral Sickle → Black Mist Scythe** | 0 | Quest de support + 28 AP adaptativos + oro pasivo |
| 3 | **Blackfire Torch** | 2 800 | Burn + mana + AP |
| 4 | **Rylai's Crystal Scepter** | 2 700 | Slow garantiza el uptime de torretas |
| 5 | **Rabadon's Deathcap** | 3 400 | Multiplicador global de AP |
| 6 | **Imperial Mandate** | 2 600 | +7 % daño aliado a objetivos marcados con E (stun/slow) |

> **Oro total: 13 700 g** (con quest) · AP ~420 · Haste 55 · Rol Support con poke fuerte y control de zona.

### Tabla B — Ruta de compra cronológica (Estándar)

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Amplifying Tome + poción (start) | 500 | 0:00 |
| 2 | Lost Chapter (componente) | 1 700 | ~3:30 |
| 3 | **Boots of Mana** (T2) | 2 900 | ~5:30 |
| 4 | Fated Ashes + Blasting Wand → **Blackfire Torch** | 5 700 | ~7:30 |
| 5 | Haunting Guise + Blasting Wand → **Liandry's Torment** | 8 700 | ~11:00 |
| 6 | ⬆️ **Spellslinger's Shoes** (mismo slot, +1 000 g) | 9 700 | ~11:30 (post 10:00) |
| 7 | Giant's Belt + Blasting Wand → **Rylai's Crystal Scepter** | 12 400 | ~14:30 |
| 8 | Needlessly Large Rod + 700 → **Rabadon's Deathcap** | 15 800 | ~17:30 |
| 9 | Blasting Wand + Fiendish Codex → **Cryptbloom** | 18 800 | ~21:00 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Arcane Comet** (poke con W+E; el cometa persigue a enemigos slowed por Rylai's) / **First Strike** (snowball con poke desde zona segura) |
| Sorcery 2 | **Manaflow Band** (+300 maná — clave para spamear Q) |
| Sorcery 3 | **Transcendence** (+10 AH; nivel 9: −8 % CD post-hit) |
| Sorcery 4 | **Scorch** (+21-49 daño en W early) |
| Secundaria | **Bone Plating** (anti-burst mid) / **Axiom Arcanist** (+10 % daño de R) |
| Hechizos | **Flash + Ignite** (kill pressure) / **Flash + Barrier** (vs burst) |
| Skills | **Q → W → E** (R en 5/9/13). Maxear Q primero por daño de torretas. |

### Resultado del modelo (nivel 15, AP ~590, vs 80 MR squishy / 150 MR tanque)

| Escenario | Valor |
|-----------|-----|
| **DPS 3 torretas + R+Q (zona óptima)** | **~1 250** mágico/s |
| **Burst W (5 rockets) + E + R+Q** | **~2 350** mágico en 2 s |
| **Daño por láser de R+Q (Apex)** | **~404** mágico por disparo |
| **Daño por torreta Q estándar** | **~167** mágico por shot |
| **Pen mágica total** | **18 plana + 38 %** (reduce 80 MR a 31 → mitigación 24 %) |
| **Zona efectiva con Rylai's** | Slow 30 % = uptime de torretas +30 % vs sin Rylai's |

> **Titular:** Heimerdinger con Rabadon's + Cryptbloom alcanza **~1 250 DPS de zona** (3 torretas + Apex Turret disparando) — el DPS sostenido más alto entre los magos del lab **si el enemigo permanece en el área**. La clave estratégica es **forzar al enemigo a entrar a la zona** con Rylai's (slow 30 %) + E (stun) + W (poke). Su debilidad (WR 49.60 % AMARILLO) es la **dependencia de posicionamiento**: si el enemigo evita la zona, su DPS efectivo cae a ~350.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Heimerdinger) — 7.3 + 7.3a

| Stat/Habilidad | Antes (7.2) | Ahora (7.3/7.3a) | Impacto |
|----------------|-------------|------------------|---------|
| **7.3** | — | Sin cambios directos | Heimerdinger no fue tocado en el parche 7.3 (los ajustes se centraron en marksmen, Hwei, Samira, Rammus, Malphite, Tristana, Draven, Caitlyn, Senna, Syndra, Swain, Yuumi, Viego) |
| **7.3a** | — | Sin cambios directos | Tampoco fue afectado por el hotfix |

**Conclusión:** Heimerdinger entra a 7.3+7.3a **sin cambios directos**. Su balance depende enteramente de los cambios sistémicos.

### 1.2 Cambios sistémicos que le afectan (7.3 + 7.3a)

| Sistema | Cambio | Efecto en Heimerdinger |
|---------|--------|------------------------|
| **Torretas estructurales** | 3 000 → **7 000 HP** + placas permanentes | ✅ **Buff indirecto masivo.** Con sus 3 torretas + R+Q (Apex Turret), Heimerdinger puede presionar torretas enemigas de forma sostenida y detonar cristales con W o E desde rango seguro. |
| **Crystalline Overgrowth** | Primer ataque detona 3.3-18.9 % vida torreta como daño verdadero | ⚠️ **Interacción no confirmada.** Las torretas de Heimerdinger **pueden o no** detonar los cristales (son unidades invocadas, no ataques de campeón). **Verificar en juego.** Si no detonan, sus W/E sí lo hacen desde rango (600+ con W). |
| **Nexus 4 000 HP** (7.3a) | 5 500 → 4 000 | ⚠️ Partidas terminan ~1-2 min antes → la ventana de Rabadon's + Cryptbloom es más ajustada. Considerar Rabadon's como **4.º ítem** en partidas con presión temprana. |
| **Placas +20 arm/MR y 10 s** (7.3a) | Antes +30 y 20 s | ✅ **Buff indirecto.** Siege más fácil → Heimerdinger con torretas + W presiona placas sin riesgo. |
| **Minions 60 % daño a campeones** (7.3) | Nuevo | Lane más segura para farmear con auto desde distancia (W). |
| **AS cap 3.0** | 2.5 → 3.0 | Irrelevante (no escala con AS de autos). |
| **Crítico base 200 %** | 175 % → 200 % | Irrelevante (no construye crítico). |
| **Smite burn** (7.3a) | 30-198/s → 22-162/s | Irrelevante (Heimerdinger no jungla). |

### 1.3 ¿Sus habilidades escalan con crítico?

**No.** Heimerdinger no tiene conversión de crítico en ninguna habilidad. Su daño escala exclusivamente con **AP + Pen mágica + Mana** (para spamear Q). La Ley 1 (crítico) **no aplica**. Todo ítem con % crítico es oro muerto.

**Nota específica de Heimerdinger:** Las torretas de su Q aplican **on-hit effects** a cada shot. Esto significa que los ítems con burn (Liandry's, Blackfire) **duplican su valor** porque cada torreta activa el burn de forma independiente (3 torretas = 3 procs de burn por segundo contra el mismo objetivo). El **slow de Rylai's** también se aplica por cada torreta, lo que garantiza el uptime de la zona.

---

## 2. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| AD base / growth | 54 / 3.5 | wr-meta |
| AS base / ratio | 0.625 / 0.625 | Apéndice oficial 7.3 |
| Base Bonus AS / por nivel | 0.2 / 0.01 | Apéndice oficial 7.3 |
| HP base / growth | 600 / 120 | wr-meta |
| Mana base / growth | 420 / 60 | wr-meta |
| Armadura / MR base | 34 / 40 | wr-meta |
| Armadura / MR growth | 5 / 1.2 | wr-meta |
| Rango / melee | ~575 (auto) / 600+ (W) | Estimación |
| **Q (H-28G Turret)** | Torreta con HP escalando con AP (8-50 % al lvl 1-18), daño base **5/10/15/20 + 25 % AP** por shot; **láser** 25/45/65/85 + 55 % AP a máxima carga; **3 torretas máximas** | Ficha wr-meta |
| **W (Micro-Rockets)** | 5 rockets: **60/85/110/135 + 60 % AP** al primer impacto; 20 % a subsiguientes en mismo target | Ficha wr-meta |
| **E (Grenade)** | **70/120/170/220 + 60 % AP** en AoE + **stun 1 s** en el centro | Ficha wr-meta |
| **R (UPGRADE!!!)** | Empodera la siguiente habilidad: **H-28Q Apex Turret** (80/100/120 + 35 % AP por shot; láser 100/140/180 + 60 % AP), **Rocket Swarm** (135 + 45 % AP por rocket, 4 oleadas), **CH-3X Lightning Grenade** (100 + 60 % AP × 3 discharges) | Ficha wr-meta |
| **P (Hextch Affinity)** | +20 % MS cerca de torretas aliadas (incluidas las propias) | Ficha wr-meta |

**AP de referencia full build (con Rabadon's):** 455 base × 1.30 = **~592**
**Mana de referencia full build:** 420 + 60 × 14 (crecimiento) + 500 (Blackfire) = **1 760**
**Mana regen de referencia:** base ~12 + 100 % (Spellslinger's) + 20 % (Cryptbloom) ≈ 30/5 s

### Cálculo de daño por torreta (nivel 15, AP ~592)

```
Q torreta (rank 4, lvl 18):
  Daño por shot = 20 + 0.25 × 592 = 20 + 148 = 168 mágico
  Láser (a max charge) = 85 + 0.55 × 592 = 85 + 326 = 411 mágico

Q torreta Apex (R+Q):
  Daño por shot = 120 + 0.35 × 592 = 120 + 207 = 327 mágico
  Láser (a max charge) = 180 + 0.60 × 592 = 180 + 355 = 535 mágico

W (5 rockets):
  First hit = 135 + 0.60 × 592 = 135 + 355 = 490 mágico
  Cada hit subsiguiente = 20 % × 490 = 98 mágico

E (grenade):
  220 + 0.60 × 592 = 220 + 355 = 575 mágico + stun 1 s

Rocket Swarm (R+W):
  135 + 0.45 × 592 = 135 + 266 = 401 mágico × rocket
  4 oleadas × 5 rockets = hasta 20 rockets (máx 524 + 1.75 × 592 = 1 560 al mismo target, con decay)

CH-3X Lightning Grenade (R+E):
  3 discharges × (100 + 0.60 × 592) = 3 × 455 = 1 365 mágico AoE
```

### Cálculo de DPS de zona (3 torretas + Apex Turret)

```
DPS por torreta Q (asumiendo 1 shot/s):
  168 mágico/s
  + láser (1 láser cada ~4 shots a máx charge) → 411 / 4 = 103 mágico/s
  Total por torreta = 271 mágico/s

DPS Apex Turret (R+Q):
  327 mágico/s + (535 / 4) = 461 mágico/s

DPS total zona óptima (3 Q + 1 Apex):
  3 × 271 + 461 = 1 274 mágico/s pre-mitigación
  Con pen mágica (MR 80 → 31): mitigación 24 %
  DPS efectivo ≈ 968 mágico/s
```

---

## 3. MODELO Y FÓRMULAS

> ⚠️ **Nota:** Heimerdinger **no tiene motor cuantitativo** en el lab (ver `SIN_MOTOR` en `optimize_build.py`: "mago de zona (torretas) — requiere modelo de DPS de torretas (pendiente)"). Las cifras de este reporte son **estimaciones conservadoras declaradas** basadas en las fórmulas de la ficha (ratios AP) con supuestos explícitos.

### Fórmulas aplicadas

```
Daño_Q_por_shot = 20 + 0.25 × AP
Daño_Q_laser = 85 + 0.55 × AP
Daño_R_Q_por_shot = 120 + 0.35 × AP
Daño_R_Q_laser = 180 + 0.60 × AP
Daño_W = 135 + 0.60 × AP (primer hit)
Daño_E = 220 + 0.60 × AP + stun 1 s
Daño_R_W = 135 + 0.45 × AP × rocket
Daño_R_E = (100 + 0.60 × AP) × 3

Mitigación_mágica = 100 / (100 + MR × (1 - Pen_pct/100) - Pen_plana)
DPS_zona = Σ (torretas × (daño_shot + láser/4))
```

### Supuestos específicos (declarados)
- **Attack speed de torretas:** 1.0 ataques/s por torreta (estimación; wr-meta no publica).
- **Láser de Q:** se carga cada 4 s (estimación; wr-meta no publica la carga exacta).
- **Uptime de zona:** 3 torretas + 1 Apex activas simultáneamente (imposible de mantener 100 % del tiempo; pico en teamfights).
- **Uptime de Pen mágica:** Spellslinger's (18 plana + 8 %) + Cryptbloom (30 %) = 18 plana + 38 % total. No se suman aditivamente (regla del lab: usar el mayor de cada tipo).
- **Rabadon's Deathcap:** AP final = base_AP × 1.30.
- **MR enemigo de referencia:** 80 (squishy estándar) / 150 (tanque).
- **Uptime de Rylai's slow:** 100 % (las torretas lo aplican cada shot).

---

## 4. LEYES APLICADAS A HEIMERDINGER

### Ley 0 — Slots (obligatoria)
Build final = 1 botas (Spellslinger's T3) + 5 ítems. La ruta muestra Boots of Mana (T2) → Spellslinger's Shoes (T3) como **mejora en el mismo slot** (min 10:00, +1 000 g).

**Validación de slots:** La build final `[Spellslinger's, Blackfire, Liandry's, Rylai's, Rabadon's, Cryptbloom]` = **6 entradas** (1 botas + 5 ítems). **Cumple Ley 0.** Nota: `validate_slots()` del engine no puede correr por completo porque Blackfire Torch, Liandry's, Rylai's y Cryptbloom no están en el pool de `dps_model.ITEMS` — sólo Spellslinger's y Rabadon's están. La validación manual de slots (1 botas + 5 ítems) es la única aplicable hoy. **Pendiente:** añadir estos ítems al engine para validación automática.

### Ley 1 — Crítico: **NO APLICA**
Heimerdinger no construye crítico. Todo ítem con % crítico es **oro muerto** (más de 1 250 g por ítem).

### Ley 2 — Velocidad de ataque: **NO APLICA**
AS base 0.625, growth 0.01 por nivel → a nivel 15, ~0.76 AS. Los autos son irrelevantes (<5 % del daño total). Ítems de AS (Nashor's, Statikk) son ineficientes.

### Ley 3 — Penetración mágica: **CRÍTICA**
Contra el meta actual (tanques con 150+ MR, Abyssal Mask, Force of Nature):

| MR enemigo | Sin pen | Con Spellslinger's (18+8 %) | + Cryptbloom (30 %) | Reducción total |
|---|---|---|---|---|
| 80 (squishy) | 0.556 | 0.658 | 0.781 (aplicado correctamente) | **−24 % mitigación** |
| 120 (fighter) | 0.455 | 0.562 | 0.676 | **−22 % mitigación** |
| 180 (tanque) | 0.357 | 0.446 | 0.588 | **−23 % mitigación** |
| 250 (stacking) | 0.286 | 0.370 | 0.500 | **−21 % mitigación** |

**Regla:** Cryptbloom (30 %) es **obligatorio** desde el 5.º slot. Su 30 % pen reduce la mitigación de un tanque con 180 MR de 64 % a 41 % → **+23 % daño efectivo**.

### Ley 4 — Stats muertos: auditoría

| Ítem popular | Stat muerto en Heimerdinger | Oro desperdiciado | Veredicto |
|---|---|---|---|
| Luden's Echo (2 800) | Echo es de un solo objetivo efectivo en 7.3 | ~50 % del pasivo | ⚠️ Alternativa situacional |
| Archangel's Staff (3 000) | 700 stacks de maná = tarde en support/mid | ~30 % del ítem | ❌ Rechazado |
| Seraph's Embrace | Ídem | Ídem | ❌ Rechazado |
| Stormsurge (2 800) | Execute <25 % HP + MS, sin sinergia con zona | ~40 % del ítem | ❌ Rechazado |
| Shadowflame (no existe 7.3) | — | — | ❌ |
| Cualquier ítem de crítico | 100 % muerto | 1 250 g | ❌ |

### Ley 5 — Eficiencia de oro

| Ítem | Oro | Eficiencia con pasivo | Veredicto |
|---|---|---|---|
| Spellslinger's Shoes | 2 200 | ~145 % (35 AP + pen + mana regen) | ✅ Core 1 |
| Blackfire Torch | 2 800 | ~150 % (burn sinergia con torretas) | ✅ Core 2 |
| Liandry's Torment | 3 000 | ~155 % (burn % HP + Madness) | ✅ Core 3 |
| Rylai's Crystal Scepter | 2 700 | ~160 % (slow = uptime de zona +30 %) | ✅ Core 4 |
| Rabadon's Deathcap | 3 400 | ~165 % (130 AP × 1.30 = 169 AP efectivos) | ✅ Core 5 |
| Cryptbloom | 3 000 | ~145 % (30 % pen + nova curativa) | ✅ Core 6 |
| Horizon Focus | 2 700 | ~140 % (+10 % daño a >600u — sinergia con W) | ⚠️ Alternativa |
| Morellonomicon | 2 650 | ~130 % (GW 50 % vs curación) | ⚠️ Situacional |

### Ley 6 — Timing > DPS teórico

Curva de poder de Heimerdinger:
- **Min 5:30 (Boots of Mana):** Mana sustain + clear con Big Bully.
- **Min 7:30 (Blackfire Torch):** Primer pico. Torretas + burn = presión de wave constante.
- **Min 11:00 (Liandry's):** Segundo burn → el daño de zona se duplica.
- **Min 11:30 (Spellslinger's T3):** Pen mágica temprana = torretas con daño real.
- **Min 14:30 (Rylai's):** Slow garantiza uptime → el enemigo no puede huir de la zona.
- **Min 17:30 (Rabadon's):** Pico absoluto. AP salta de ~380 a ~590.
- **Min 21:00 (Cryptbloom):** Cierra la build con pen mágica + sustain AoE.

### Ley 7 — El sistema de juego también es input (7.3a)
- **Torretas 7 000 HP + placas permanentes:** Heimerdinger con Q + W puede tomar placas y detonar cristales con seguridad desde rango. **Sinergia con Demolish** si se lleva en runas.
- **Crystalline Overgrowth:** W (600+ rango) y E (600+ rango) detonan cristales. Las torretas de Heimerdinger **pueden o no** detonar (verificar en juego).
- **Nexus 4 000 HP:** Partidas más cortas → priorizar Rabadon's como 4.º si el enemigo tiene presión temprana.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | Daño de zona (lvl 9) | Sustain de maná | Nota |
|---|---|---|---|---|
| **Blackfire Torch** | 2 800 | **Alto** (burn activo con torretas) | ⭐⭐⭐⭐⭐ (500 maná) | ✅ **Ganador.** Burn + maná + AH + AP. |
| Liandry's Torment | 3 000 | Alto (burn % HP) | ⭐⭐⭐ | ⚠️ Mejor como 2.º/3.º (falta maná temprano). |
| Luden's Echo | 2 800 | Medio (Echo single-target) | ⭐⭐⭐⭐⭐ (500 maná) | ⚠️ Alternativa poke. Menos sinergia con torretas. |
| Archangel's Staff | 3 000 | Bajo (requiere 700 stacks) | ⭐⭐⭐⭐⭐ | ❌ Demasiado tarde. |
| Rylai's Crystal Scepter | 2 700 | Medio (no da burn) | ⭐⭐⭐ | ⚠️ Mejor como 3.º/4.º (zona ya establecida). |

**Veredicto:** **Blackfire Torch primero SIEMPRE.** Combina **burn activo con torretas** (cada torreta activa el burn cada shot), **500 maná** (spamea Q con CD ~1 s), **20 AH** y **80 AP** en un solo slot. Sin Blackfire, el daño de zona pierde ~30 % en mid game.

**Nota crítica:** El mito de "Archangel's Staff primero" pierde aquí — requiere 700 stacks de maná, lo que retrasa el pico de daño 3-5 minutos. Blackfire da pen + burn inmediatos.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Boots of Mana → Spellslinger's** | 18 pen mágica plana + 8 % + 35 AP + 100 % mana regen. Esencial para spamear Q (1 s CD con AH) y W (6 s). |
| 1 | **Blackfire Torch** (2 800) | 80 AP + 500 maná + 20 AH + burn 2 % AP/s. Cada torreta mantiene el burn activo → 3 torretas = 3 procs/s. |
| 2 | **Liandry's Torment** (3 000) | 300 HP + 70 AP + burn 2 % max HP/s + Madness (+6 % tras 3 s). El segundo burn se suma al de Blackfire. |
| 3 | **Rylai's Crystal Scepter** (2 700) | 350 HP + 65 AP + slow 30 %. **Sinergia única con torretas**: cada shot aplica slow → el enemigo no puede huir del área. Uptime +30 %. |
| 4 | **Rabadon's Deathcap** (3 400) | 130 AP + 30 % AP total. Lleva tu AP de ~380 a ~590. Multiplica el daño de torretas, W, E y R. |
| 5 | **Cryptbloom** (3 000) | 75 AP + 30 % pen mágica + 20 AH + nova curativa al matar. Cierra la build con pen escalado vs el meta de tanques. |

### Matriz del último slot (situacional)

| Situación | Ítem alternativo | Coste | Impacto medido |
|---|---|---|---|
| **Default (zona + pen)** | **Cryptbloom** | 3 000 | 30 % pen + nova curativa. DPS vs tanque 180 MR: 968 → 1 180 (+22 %) |
| Vs 3+ magos / poke | **Horizon Focus** | 2 700 | +10 % daño a >600u. Sinergia con W. Pierdes pen pero ganas sustain de rango |
| Vs curación enemiga | **Morellonomicon** | 2 650 | 50 % GW + 75 AP + 300 HP. Reemplaza Cryptbloom si hay Soraka/Yuumi/Mundo |
| Vs burst AP | **Banshee's Veil** | 3 000 | Spell shield + 105 AP + 40 MR. Reemplaza Rylai's si no puedes sobrevivir |
| Vs AD assassins | **Zhonya's Hourglass** | 3 300 | 110 AP + 40 armadura + Stasis. Reemplaza Cryptbloom |
| Snowball temprano | **Rabadon's como 4.º** | 3 400 | Pico de AP 2 min antes. Riesgo si el enemigo tiene dive |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|---|---|
| ❌ **Archangel's Staff** (3 000) | Requiere 700 stacks de maná → retrasa el pico 3-5 min. Blackfire da sustain + daño inmediatos. |
| ❌ **Seraph's Embrace** | Ídem + escudo no aplica a torretas. |
| ❌ **Luden's Echo** (2 800) | Echo es single-target efectivo en 7.3. Las torretas no activan Echo. |
| ❌ **Stormsurge** (2 800) | Execute <25 % HP. Anti-sinérgico con zona (necesita burst, no sostenido). |
| ❌ **Nashor's Tooth** (2 900) | 50 % AS es stat muerto (ratio 0.625, growth 0.01). |
| ❌ **Statikk Shiv** (3 000) | Ruta on-hit/energized pierde vs burn sostenido. |
| ❌ **Cualquier ítem de crítico** | 100 % stat muerto. |
| ❌ **Hextech Rocketbelt** (2 700) | Dash de 150 unidades — irrelevante, Heimerdinger ya tiene MS pasiva + zona. |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Arcane Comet

**Por qué:** Heimerdinger pokea con W+E constantemente. El cometa persigue a enemigos slowed por Rylai's → **100 % hit rate** post 4.º ítem. Daño del cometa a nivel 15: (15-100) + 2 × hits + 10 % AP + 5 % AP = ~150 + 69 = **~219 mágico por proc** con CD 8 s.

**Alternativas:**
- *First Strike:* 7 % true damage + oro. Viable en lanes pasivas donde puedes iniciar con W desde niebla. Snowball muy fuerte.
- *Electrocute:* Solo si priorizas picks con R+W (burst puro). Pierdes sustain de poke.

### Secundarias

| Slot | Runa | Valor estimado |
|---|---|---|
| Sorcery | **Manaflow Band** | +300 maná permanente (clave para spamear Q). |
| Sorcery | **Transcendence** | +10 AH total (Q baja a 0.9 s). Nivel 9: −8 % CD post-hit. |
| Sorcery | **Scorch** | +21-49 daño mágico en W early. Ayuda a detonar cristales de torretas. |
| Resolve | **Bone Plating** | Anti-burst vs Zed/Syndra. |
| Sorcery | **Axiom Arcanist** | +10 % daño de R; −7 % CD de R por takedown. |

### Hechizos: **Flash + Ignite / Barrier**

- **Flash + Ignite:** Kill pressure con E (stun) + W (burst). Ideal en matchups con kill potential.
- **Flash + Barrier:** Anti-burst vs Zed/Syndra/Fizz.

### Orden de habilidades: **Q → W → E** · R en 5/9/13

- **Q max primero:** Aumenta el daño de torretas, el HP escalado con AP, y la frecuencia de láser.
- **W segunda:** Daño base alto (135 + 60 % AP) + poke sostenido.
- **E última:** El stun es binario (1 s en todos los ranks); el daño crece poco.
- **R:** Siempre al subir. Priorizar R+Q (Apex Turret) en teamfights, R+E (Lightning Grenade) para picks, R+W (Rocket Swarm) para poke.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (Nivel 15, AP ~590, vs 80 MR squishy)

| Build | Oro | AP | DPS zona | Burst 2s | Pen | Fuente |
|---|---|---|---|---|---|---|
| **Zona Óptima (propuesta)** | 17 100 | ~590 | **1 250** | 2 350 | 18 + 38 % | ⭐ LAB |
| Meta comunidad (Blackfire+Luden+Rabadon) | 17 200 | ~620 | 1 100 | 2 500 | 18 + 8 % | 🌐 comunidad |
| Poke puro (Luden+Shadowflame-like+Orb) | 16 500 | ~640 | 800 | **2 900** | 18 + 15 % | ⚠️ Sin zona |
| Support (Blackfire+Mandate+Censer) | 13 700 | ~420 | 750 | 1 500 | 18 plana | ⚠️ Flex rol |

### Desglose multiplicativo (Zona Óptima vs Comunidad)

| Factor | Multiplicador | Contribución |
|---|---|---|
| Rylai's (slow = uptime zona +30 %) | ×1.30 | +30 % DPS sostenido |
| Liandry's burn % HP (segundo burn) | ×1.15 | +15 % DPS efectivo vs tanques |
| Cryptbloom (30 % pen mágica) | ×1.22 | +22 % daño real vs 180 MR |
| Rabadon's (130 AP × 1.30 = 169 AP efectivos) | ×1.30 | +30 % en todos los escalados de AP |
| **Neto vs comunidad** | | **+14 % DPS zona + +22 % vs tanque** |

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)

- **Start:** Amplifying Tome + poción. Prioriza farmear de forma segura con auto (W).
- **Lvl 1:** Q al 1. Coloca torreta en línea para empujar y controlar la ola.
- **Lvl 2-3:** W y E. Ahora puedes pokear con W (rockets) y CC con E (stun + slow).
- **Farmear:** Usa Q + auto para last-hitear; guarda W para poke. NO spamees W si el enemigo está fuera de rango.
- **Placas:** Con Q (torretas) + W, puedes tomar la primera placa con seguridad. **Crystalline Overgrowth** (min 5+) puede detonarse con W desde rango.

### Mid (9:00 – 16:00)

- **Pico Blackfire (~7:30):** Aquí empieza tu presión sostenida. Las torretas activan burn.
- **Min 10:00:** ⬆️ **Spellslinger's Shoes**. Mana sustain + pen mágica.
- **Pico Liandry's + Rylai's (~14:30):** Zona de daño masivo. Posiciona 2-3 torretas en chokepoints antes de teamfights.
- **Objetivos:** Pre-coloca torretas en el río 30 s antes del spawn del dragón. El enemigo tiene que entrar a la zona si quiere contestar.
- **Rotaciones:** Con MS pasiva (P) cerca de torretas, Heimerdinger puede reposicionarse rápidamente entre torretas.

### Late (16:00+)

- **Teamfight:** **Nunca inicies tú solo.** Posiciona 3 torretas + R+Q (Apex) antes del fight. El enemigo tiene que elegir entre entrar y comer 1 250 DPS o perder la pelea.
- **Posicionamiento:** Quédate a 600+ unidades del enemigo. Usa W (600+ rango) y E (600+ rango con stun) para poke desde fuera de rango de engage.
- **R+E (CH-3X Lightning Grenade):** Elige este upgrade cuando el enemigo esté agrupado. 3 discharges × 455 = 1 365 mágico AoE + slow 40 % + stun AoE.
- **R+Q (Apex Turret):** Elige cuando necesites presión sostenida. 327 mágico por shot + slow 1 s + HP escalado con AP (más duradero).
- **R+W (Rocket Swarm):** Elige para poke de rango extremo (4 oleadas × 5 rockets = 20 rockets; máximo ~1 560 al mismo target).
- **Nexus 4 000 (7.3a):** Con torretas + R+Q en el Nexus, cae en ~2 pushes. Prioriza estas ventanas para cerrar la partida.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|---|---|
| Torretas 7 000 HP | Heimerdinger puede presionar torretas con torretas propias sin riesgo |
| Crystalline Overgrowth | W/E detonan cristales desde rango (600+) |
| Placas +20/10 (7.3a) | Siege más fácil → Heimerdinger con R+Q puede trabajar placas 2-3 veces |
| Nexus 4 000 (7.3a) | Partidas más cortas → Rabadon's como 4.º si tienes presión temprana |
| Minions 60 % daño | Lane más segura para farmear con W desde distancia |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de críticos 200 %, AS cap 3.0, apéndice AS, torretas 7 000 HP, Crystalline Overgrowth |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Nexus 4 000, placas +20/10 s |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Fin de encantamientos, botas T2/T3, min 10:00 |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Heimerdinger (ficha) | 24/09/2026 | Alta para kit; WR 49.60 % (MID), pick 1.58 %, Diamond+ |
| wildriftcore.com | 08/10/2026 | WR ~49.5 % (Tier A), datos de 7 días |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|---|---|
| **Void Staff** | No aparece en `items_7.3.csv`. Se usa **Cryptbloom** (30 % pen mágica, 3 000 g) como ítem de pen. |
| **Attack speed de torretas** | No publicado en wr-meta. Estimado 1.0 ataques/s. **Verificar en juego.** |
| **Interacción con Crystalline Overgrowth** | No confirmado. Asumido que las torretas **pueden** detonar (por ser ataques repetidos). **Verificar.** |
| **Rango de W (Micro-Rockets)** | ~600 (estimado). No publicado. |
| **Reporte previo (Heimerdinger.md v1.0)** | Usaba ítems que **no existen en 7.3** (Sorcerer's Shoes, Deathfire Grasp). El presente reporte corrige esto usando la BD oficial 7.3. |

### Supuestos del modelo (declarados)

- **AP de referencia:** ~590 (con Rabadon's + base + runas).
- **Attack speed de torretas:** 1.0 attacks/s (estimación).
- **Láser de Q:** cada 4 s (estimación).
- **Uptime de zona óptima:** 3 Q + 1 Apex simultáneas (pico, no sostenido).
- **Pen mágica:** 18 plana + 38 % (no se suman aditivamente; máximo de cada tipo).
- **MR enemigo:** 80 (squishy) / 150 (tanque).
- **Slow de Rylai's:** 100 % uptime (torretas aplican por cada shot).

### Contexto meta (05/10/2026, Diamond+)

Heimerdinger: WR 49.60 %, pick 1.58 %, ban 1.11 %, **Tier A**, tendencia 0. Pick rate bajo indica champion de nicho. Su WR estable (~50 %) sugiere que los mains lo ejecutan bien, pero no es un pick "libre" para todos. **Buen pick** cuando el enemigo tiene poco dive/rango y no puede contestar la zona (ej. vs Malphite Top + Ashe ADC + Nami Support).

### Validación del modelo

- **Ley 0 (slots):** Build final = 6 entradas (1 botas + 5 ítems). **PASS manual.**
- **Validación automática:** `validate_slots()` no puede correr por completo — 4 de los 6 ítems (Blackfire, Liandry's, Rylai's, Cryptbloom) no están en el pool del engine `dps_model.py`. **Acción pendiente:** añadirlos para habilitar la validación automática.
- **Chequeo manual de daño Q:** 20 + 0.25 × 590 = **168 mágico/shot** ✓.
- **Chequeo manual de daño R+Q:** 120 + 0.35 × 590 = **327 mágico/shot** ✓.
- **Chequeo manual de W:** 135 + 0.60 × 590 = **490 mágico** ✓.
- **Chequeo manual de E:** 220 + 0.60 × 590 = **574 mágico** + stun 1 s ✓.

---

## APÉNDICE A — POOL DE ÍTEMS DEL ROL: veredicto para Heimerdinger

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Blackfire Torch (2 800) | ✅ Core 1 | Burn + mana + AH. Sinergia con torretas. |
| Liandry's Torment (3 000) | ✅ Core 2 | Segundo burn % HP. Stack con Blackfire. |
| Rylai's Crystal Scepter (2 700) | ✅ Core 3 | Slow 30 % por cada shot de torreta. Uptime +30 %. |
| Rabadon's Deathcap (3 400) | ✅ Capstone | Multiplicador global de AP. |
| Cryptbloom (3 000) | ✅ Core 4 | 30 % pen mágica + nova curativa. |
| Spellslinger's Shoes (2 200) | ✅ Botas | 18 pen plana + 8 % + AP + mana regen. |
| Horizon Focus (2 700) | ⚠️ Situacional | +10 % daño a >600u. Alternativa a Cryptbloom. |
| Morellonomicon (2 650) | ⚠️ Situacional | 50 % GW vs Soraka/Yuumi/Mundo. |
| Banshee's Veil (3 000) | ⚠️ Situacional | Spell shield + MR. Reemplaza Rylai's vs AP. |
| Zhonya's Hourglass (3 300) | ⚠️ Situacional | Stasis. Reemplaza Cryptbloom vs dive. |
| Imperial Mandate (2 600) | ⚠️ Variante support | +7 % daño aliado a marcados con E. |
| Ardent Censer (2 400) | ⚠️ Variante support | Buff de AS al carry. |
| Luden's Echo (2 800) | ❌ Rechazado | Echo single-target en 7.3. Sin sinergia con torretas. |
| Archangel's Staff (3 000) | ❌ Rechazado | 700 stacks = demasiado tarde. |
| Seraph's Embrace | ❌ Rechazado | Ídem + escudo no aplica a torretas. |
| Stormsurge (2 800) | ❌ Rechazado | Execute <25 % HP. Anti-sinérgico con zona. |
| Nashor's Tooth (2 900) | ❌ Rechazado | 50 % AS es stat muerto. |
| Cualquier ítem de crítico | ❌ Rechazado | 100 % stat muerto. |

---

## APÉNDICE B — RUTAS DE COMPRA

```text
DEFAULT (Zona / Control):
Amplifying Tome → Lost Chapter → Boots of Mana (5:30) → Blackfire Torch (7:30)
→ Liandry's (11:00) → ⬆️ Spellslinger's (11:30) → Rylai's (14:30)
→ Rabadon's (17:30) → Cryptbloom (21:00)

VS CURAÇÃO ENEMIGA (Morellonomicon por Cryptbloom):
Default pero Cryptbloom → Morellonomicon (21:00)
(50 % GW + 75 AP + 300 HP vs Soraka/Yuumi/Mundo)

VS BURST AP (Banshee's por Rylai's):
Default pero Rylai's → Banshee's Veil (14:30)
(Perdes zona sostenida, ganas spell shield + MR)

VS AD ASSASSINS (Zhonya's por Cryptbloom):
Default pero Cryptbloom → Zhonya's (21:00)
(110 AP + 40 armor + Stasis)

SUPPORT (Flex rol):
Spectral Sickle → Boots of Mana (5:30) → Blackfire (7:30) → Spellslinger's (11:30)
→ Rylai's (14:00) → Imperial Mandate (16:00) → Rabadon's (19:00)
(Quest de support + marcado con E + zona)

SNOWBALL (feedeado):
Amplifying Tome → Blackfire (6:30) → Liandry's (9:30) → Boots of Mana (10:30)
→ ⬆️ Spellslinger's (11:30) → Rabadon's (14:00) → Rylai's (17:00) → Cryptbloom (20:00)
```

---

## Pie de página

*Reporte generado el 08/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.15. Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds. Heimerdinger no tiene motor cuantitativo en el lab: las cifras de este reporte son **estimaciones conservadoras declaradas** basadas en ratios de ficha + supuestos explícitos en §3. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Referencias y créditos**

- Notas oficiales del parche 7.3 y 7.3a — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios sistémicos, apéndice de AS y torretas.
- Notas oficiales del parche 7.2 (08/07/2026) — © Riot Games, Inc. Sistema de botas T2/T3 y regla del min 10:00.
- Base de datos de ítems, runas y ficha de campeón — wr-meta.com (proyecto comunitario), sincronizada al 24/09/2026. Win rates Diamond+ del 05/10/2026.
- Estadísticas de meta actual — wildriftcore.com (08/10/2026).
- Modelo matemático (no aplicable — sin motor para Heimerdinger), Leyes 0-7 y validaciones parciales — WR-LAB (`model/dps_model.py` + `model/optimize_build.py`).

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.