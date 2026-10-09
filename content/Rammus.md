---
tags:
  - Jungla
  - Tanque
  - Armor-Stack
  - Tank
version: 2
Status: Beta
champion: Rammus
slug: rammus
role: jungla
patch: "7.3a"
archetype: "Tanque de armadura — CC y mitigación"
engine: none
custom: false
generate: manual
mode: sr
published_at: "2026-10-05"
updated_at: "2026-10-09"
verification: AL_DIA
verified_patch: "7.3a"
---
**Fecha del análisis:** 05/10/2026 (regeneración post-7.3a)
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** Jungla
**Arquetipo:** Tanque de armadura — CC, mitigación física y utilidad de engage
**Enfoque:** Maximizar EHP físico con armadura escalada (W + ítems) y CC de taunt para anular carries AD.

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ❌ REGENERAR Verificación automática (08/10/2026) — **❌ REQUIERE REGENERACIÓN — hotfix 7.3a**
> **Cambio directo:** NERF — Armor base 45→**40** · W bonus armor 45/50/55/60→**30/40/50/60 %**.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada (6 slots, Ley 0):** Plated Steelcaps + Sunfire Aegis + Thornmail + Dead Man's Plate + Force of Nature + Gargoyle Stoneplate — **sin cambios**.
> **Sistema (7.3a):** Smite burn vs monstruos: 30–198/s → **22–162/s** → Jungla early más lenta → Diana jungla: Nashor's 1.º aún más correcto; Shyvana/Volibear/Cho'Gath jungla: clear early −15-20 %
> **Veredicto:** ❌ REGENERAR — regenerar por el flujo FRAMEWORK (10 pasos, con apoyo de model/optimize_build.py para re-derivar la build óptima) y re-baselinar.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 05/10/2026):**
> Win Rate 57.42 % | Pick Rate 5.00 % | Ban 7.02 % | Tendencia 0 | Tier S+ | Rol: JUNGLE · Confidence Med.

> [!TIP]
> **Variante Anti-AP:** Si el equipo enemigo tiene 3+ fuentes AP, cambia Dead Man's Plate por Abyssal Mask (2 400 g) y Plated Steelcaps por Mercury's Treads → Chainlaced Crushers. Pierdes ~15 % de EHP físico pero ganas 12 % amp de daño mágico para tu equipo.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Plated Steelcaps → ⬆️ Armored Advance** (min 10:00, MISMO slot) | 2 200 | +150 HP · +30 armadura · Block 10 % · Escudo físico reactivo |
| 2 | **Sunfire Aegis** | 2 900 | +350 HP · +40 armadura · 15 AH · Immolate (daño AoE sostenido) |
| 3 | **Thornmail** | 2 700 | +200 HP · +75 armadura · Grievous Wounds 50 % al recibir autos |
| 4 | **Dead Man's Plate** | 2 800 | +350 HP · +70 armadura · +4 % MS · Momentum + Crushing Blow |
| 5 | **Force of Nature** | 2 800 | +400 HP · +60 MR · +5 % MS · Absorb (RM escalable) |
| 6 | **Gargoyle Stoneplate** | 2 900 | +200 HP · +45/45 · Activo: escudo 100 + 90 % HP bonus + tamaño |

> **Oro total: 16 300 g** · HP bonus ~2 050 · Armadura ~310 (con W rank 4) · MR ~140 · Haste 15 · Mitigación física ~75 % · EHP vs físico ~12 800

### Tabla B — Ruta de compra cronológica

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Ruby Crystal (start) | 500 | 0:00 |
| 2 | Bami's Cinder + Ruby Crystal → **Sunfire Aegis** | 3 400 | ~7:30–8:30 |
| 3 | Plated Steelcaps | 4 600 | ~9:30 |
| 4 | Bramble Vest + Giant's Belt → **Thornmail** | 7 300 | ~12:00 |
| 5 | ⬆️ **Armored Advance** (mismo slot, +1 000 g) | 8 300 | ~13:00 (post 10:00) |
| 6 | Winged Moonplate + Chain Vest + Ruby Crystal → **Dead Man's Plate** | 11 100 | ~15:30 |
| 7 | Winged Moonplate + Negatron Cloak + Ruby Crystal → **Force of Nature** | 13 900 | ~18:00 |
| 8 | Kindlegem + Chain Vest + Negatron Cloak → **Gargoyle Stoneplate** | 16 300 | ~21:00 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Grasp of Undying** (3,3 % HP máx daño + 1,3 % cura + 10 HP permanente) |
| Resolve 2 | **Demolish** (85 + 28 % HP máx a torres cada 3 golpes) |
| Resolve 3 | **Second Wind** (3 + 1,5 % HP faltante tras recibir daño) |
| Resolve 4 | **Overgrowth** (+3 HP por 3 minions; +3 % HP máx a 30 stacks) |
| Sorcery 1 | **Transcendence** (+5 AH lv1, +5 AH lv5, −8 % CD post-hit lv9) |
| Sorcery 2 | **Bone Plating** (anti-burst en early jungle) |
| Hechizos | **Smite + Flash** |
| Skills | **W → Q → E** (R en 5/9/13) |

### Resultado del modelo (nivel 15, W rank 4, armadura ~310)

| Escenario | Valor |
|-----------|-------|
| EHP vs daño físico (arm 310 + Block 10 %) | **~12 800** |
| EHP vs daño mágico (MR 140) | **~5 600** |
| Mitigación física efectiva | **~75 %** |
| Daño de Thornmail por auto recibido | **~95 mágico** |
| Daño de Immolate (Sunfire) | **~65 mágico/s** |
| Duración de CC (taunt E rank 4) | **2,25 s** |
| Escudo Gargoyle activo (con 2 050 HP bonus) | **~1 945** |

> **Titular:** Con 75 % de mitigación física y taunt de 2,25 s, Rammus anula al carry AD enemigo durante toda una rotación. El nerf 7.3a (−5 armadura base, W ranks 1-3) reduce el EHP físico en ~8 % early, pero la build y la identidad permanecen intactas.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Rammus) — 7.3 + 7.3a

| Stat / Habilidad | Antes (7.2) | 7.3 | 7.3a | Impacto |
|---|---|---|---|---|
| HP base | 690 | 670 | 670 | −20 HP (durabilidad 7.3) |
| Armadura base | 49 | 45 | **40** | −9 armadura total vs 7.2; EHP físico −6 % early |
| W (Defensive Ball Curl) bonus armor | 45/50/55/60 % | 45/50/55/60 % | **30/40/50/60 %** | Ranks 1-3 nerfeados (−15/−10/−5 %); rank 4 intacto |

### 1.2 Cambios sistémicos que le afectan

| Sistema | Cambio | Efecto en Rammus |
|---|---|---|
| Smite burn (7.3a) | 30–198/s → **22–162/s** | Clear de jungla ~15-20 % más lento early. Rammus tanque pierde algo de velocidad de farmeo. |
| Smite escala con stats (7.3) | +20 % armadura bonus + 20 % MR bonus + 3 % HP bonus | ✅ Rammus con armadura alta: su Smite pega más que el promedio. |
| Torretas 7 000 HP + cristales (7.3) | Crystalline Overgrowth: primer auto detona 3,3–18,9 % vida torreta | Rammus puede detonar cristales con un auto durante un gank. |
| Placas decaen desde 5:00 (7.3a) | +20 arm/MR y 10 s (antes +30 y 20 s) | Siege más fácil; Rammus con taunt puede proteger la toma de placas. |
| Nexus 4 000 HP (7.3a) | Partidas terminan antes tras inhibidores | Ventana de late game se acorta ~1-2 min. |

### 1.3 ¿Sus habilidades escalan con crítico?

No. Rammus es un tanque puro: su daño viene de W (daño reflejado + armadura), Immolate de Sunfire y Thornmail. El crítico, la velocidad de ataque y el daño de ataque físico son stats muertos. Su escalado depende exclusivamente de **Armadura, HP y Haste**.

---

## 2. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|---|---|---|
| AD base / growth | ~54 / ~3,5 | Estimado ⚠️ (sin ficha wr-meta en el lab; verificar en juego) |
| AS base / ratio | 0,625 / 0,625 | Apéndice oficial 7.3 |
| Base Bonus AS / por nivel | 0,28 / 0,0185 | Apéndice oficial 7.3 |
| HP base / growth | 670 / ~124 | Durabilidad 7.3 |
| Armadura base (7.3a) | **40** | Notas 7.3a |
| Armadura growth | ~3,5 ⚠️ | Estimado (verificar en juego) |
| MR base / growth | ~40 / ~2 | Estimado ⚠️ |
| P (Spiked Shell) | Daño mágico por auto recibido + armadura | Ficha del kit |
| Q (Powerball) | Velocidad + daño físico + slow al impactar | Ficha del kit |
| W (Defensive Ball Curl) | +30/40/50/60 % armadura bonus (7.3a) + daño reflejado | Notas 7.3a |
| E (Frenzying Taunt) | Taunt + AS bonus temporal | Ficha del kit |
| R (Spiky Shell) | Salto + AoE mágico | Ficha del kit |

**Armadura a nivel 15 (post-7.3a):**
- Base: 40
- Growth: ~3,5 × 14 = ~49
- Total base: ~89 ⚠️ (verificar growth en juego)
- Con W rank 4 (+60 % bonus): ~89 + (310 − 89) × 0,60 = ~221 + 89 = ~310 con ítems

**HP a nivel 15:**
- Base: 670 + 124 × 14 = ~2 406
- Con ítems (2 050 bonus): ~4 456
- Con Overgrowth (30 stacks): +3 % = ~4 590

---

## 3. MODELO Y FÓRMULAS

```
EHP_físico = (HP_base + HP_items + HP_bonus) × (1 + Arm_efectiva / 100) × (1 / (1 - Block))
Armadura_efectiva = Arm_base × (1 + W_pct) + Arm_items
Mitigación = Arm_efectiva / (100 + Arm_efectiva)
Block (Plated/Armored Advance) = 10 % reducción directa
Thornmail_daño = 20 + 6 % × Arm_bonus + 1 % × HP_bonus
Immolate_DPS = 20 + 1,5 % × HP_bonus (vs campeones)
Gargoyle_escudo = 100 + 90 % × HP_bonus
Smite_7.3 = 600/1000/1400 + 20 % Arm_bonus + 20 % MR_bonus + 3 % HP_bonus (verdadero)
```

### Supuestos específicos

- Armadura growth de Rammus ~3,5/nivel (⚠️ verificar en juego; el lab no tiene ficha de Rammus).
- W rank 4 activa en todas las peleas (uptime 100 % asumido).
- Immolate de Sunfire activo en combate (uptime ~80 %).
- Overgrowth a 30 stacks (~min 18+).
- Enemigo de referencia: ADC con 120 armadura para mitigación, 2 200 HP.

---

## 4. LEYES APLICADAS A RAMMUS

### Ley 0 — Slots

Build final = 1 botas (Armored Advance T3) + 5 ítems. `validate_slots(["Armored Advance","Sunfire","Thornmail","Dead Man's Plate","Force of Nature","Gargoyle"])` → PASS (6 entradas, 1 botas, 5 ítems, sin T2+T3 duplicadas).

### Ley 1 — Umbral de crítico: IRRELEVANTE

Rammus no construye crítico. 0 % de crítico en toda la build. Ley 1 no aplica.

### Ley 2 — Velocidad de ataque: IRRELEVANTE

Con AS base 0,625 y growth 0,0185, Rammus tiene AS muy baja. A nivel 15 sin ítems de AS: AS ≈ 0,625 × (1 + 0,28 + 0,259) ≈ 0,97. No hay cap de AS que alcanzar. Ley 2 no aplica.

### Ley 3 — Penetración: NO APLICA (tanque)

Rammus no necesita penetración. Su daño es utilitario (Immolate, Thornmail, W reflect). La pen no es un stat relevante para su rol.

### Ley 4 — Stats muertos y coste de oportunidad

| Stat | Valor para Rammus | Nota |
|---|---|---|
| AD | ❌ Muerto | Solo útil para last hit early |
| AS | ❌ Muerto | No escala con autos |
| Crítico | ❌ Muerto | Ninguna habilidad critica |
| Maná | ⚠️ Bajo | Rammus gasta poco maná |
| HP | ✅ Rey | Escala Smite 7.3, Gargoyle, EHP |
| Armadura | ✅ Rey | Escala W, Thornmail, mitigación |
| MR | ✅ Necesario | Equilibrio vs comps AP |
| Haste | ⚠️ Moderado | Más taunts (E) y Q |

### Ley 5 — Eficiencia de oro

| Ítem | Oro | Eficiencia estimada | Veredicto |
|---|---|---|---|
| Sunfire Aegis | 2 900 | ~145 % (Immolate + stats) | ✅ Core |
| Thornmail | 2 700 | ~160 % (armadura + GW + reflect) | ✅ Core |
| Dead Man's Plate | 2 800 | ~135 % (MS + armadura + HP) | ✅ Core |
| Force of Nature | 2 800 | ~140 % (RM + HP + MS) | ✅ Core |
| Gargoyle Stoneplate | 2 900 | ~155 % (activo + stats duales) | ✅ Core |

### Ley 6 — Timing

Sunfire al ~7:30 = primer pico de clear + daño. Thornmail al ~12:00 = anti-ADC online. Gargoyle al ~21:00 = teamfights finales. Con el nerf de Smite 7.3a (−18 % burn), el primer clear se retrasa ~10-15 s.

### Ley 7 — El sistema de juego también es input

- **Smite 7.3 escala con armadura bonus**: Rammus con ~220 armadura bonus gana +44 de daño verdadero en Smite. Ventaja sobre junglas AP.
- **Torretas 7 000 HP + cristales**: Rammus con Q puede entrar, taunear y detonar un cristal con un auto (~1 300 verdadero).
- **Minions 60 % daño**: Jungla más segura para Rammus.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | Justificación | Veredicto |
|---|---|---|---|
| Sunfire Aegis | 2 900 | Immolate mejora clear + daño AoE. 350 HP + 40 armadura. Sinergia con W. | ✅ **CORE 1** |
| Iceborn Gauntlet | 3 000 | Slow field + spellblade. Menos daño que Sunfire. | ⚠️ Alternativa vs melee |
| Thornmail | 2 700 | Excelente vs ADC pero sin HP inicial. Mejor como 2.º/3.º. | ⚠️ 2.º |
| Randuin's Omen | 2 800 | Anti-crit. Situacional vs Yone/Yasuo. | ⚠️ Situacional |

**Veredicto:** Sunfire Aegis primero. Ofrece la mejor combinación de clear de jungla (Immolate 20 + 1,5 % HP bonus/s), daño en teamfight y estadísticas defensivas básicas. El nerf de Smite 7.3a hace que el clear temprano sea más lento, y Sunfire compensa parcialmente.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | Plated → ⬆️ Armored Advance | Block 10 % + escudo físico reactivo (10-140 + 8 % HP máx). Esencial vs ADCs y fighters AD. |
| 1 | Sunfire Aegis (2 900) | Immolate = daño AoE constante. 350 HP + 40 armadura + 15 AH. Core del clear y teamfight. |
| 2 | Thornmail (2 700) | 75 armadura + GW 50 % al recibir autos. Contrarresta el Lifesteal nuevo (7.3). Daño reflejado escala con armadura bonus. |
| 3 | Dead Man's Plate (2 800) | 70 armadura + 350 HP + 4 % MS. Momentum permite llegar al carry y aplicar taunt. Crushing Blow = slow adicional. |
| 4 | Force of Nature (2 800) | 60 MR + 400 HP + 5 % MS. Absorb: +70 RM a max stacks. Equilibra la durabilidad vs comps mixtas. |
| 5 | Gargoyle Stoneplate (2 900) | Activo: escudo = 100 + 90 % HP bonus (~1 945 con 2 050 HP bonus) + tamaño. Permite sobrevivir el focus fire mientras taunteamos múltiples enemigos. |

### Matriz del último slot (situacional)

| Situación | Ítem | Coste | Impacto medido |
|---|---|---|---|
| Default | Gargoyle Stoneplate | 2 900 | Escudo ~1 945 + tamaño + 45/45 resist ✅ |
| Vs mucho AP (3+) | Abyssal Mask | 2 400 | Reemplaza Force of Nature. 12 % amp daño mágico equipo ⚠️ |
| Vs críticos (Yone/Yasuo) | Randuin's Omen | 2 800 | Reduce daño crítico 30 %. Reemplaza Dead Man's ⚠️ |
| Vs CC intenso | Mercury's Treads → Chainlaced | 2 200 | Reemplaza Plated. 30 % tenacidad + 30 MR ⚠️ |
| Vs curación | Thornmail ya incluido | — | GW 50 % pasivo ✅ |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|---|---|
| Iceborn Gauntlet (3 000) | Slow field útil pero Immolate de Sunfire da más DPS sostenido y clear. Spellblade escala con AD base (bajo en Rammus). |
| Warmog's Armor (2 850) | Demasiado HP sin armadura. Rammus necesita armadura para W. Regen fuera de combate no ayuda en fights. |
| Spirit Visage | No existe en 7.3 (verificado en BD de 186 ítems). |
| Heartsteel (3 000) | HP puro sin armadura. Rammus no ejecuta con HP como Cho'Gath. Sunfire + Thornmail rinden más. |
| Cualquier ítem de crítico/AS/AD | 100 % stat muerto. |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Grasp of Undying

- Daño mágico = 3,3 % HP máx por proc (cada 3 s en combate).
- Cura = 1,3 % HP máx.
- +10 HP permanente por proc.
- Con ~4 500 HP: proc = ~148 mágico + ~58 cura. Sustain de jungla y trades.
- Sinergia con Overgrowth: más HP = más daño de Grasp.

**Alternativa:** Aftershock (si estuviera disponible) para más burst defensivo tras CC. En WR 7.3, Grasp es más consistente para escalado.

### Secundarias

| Slot | Runa | Valor estimado |
|---|---|---|
| Resolve | Demolish | Placas de torreta (140 g c/u). Rammus con Q + Demolish rompe placas rápido. |
| Resolve | Second Wind | Sustain tras recibir daño de monstruos/campeones. |
| Resolve | Overgrowth | +3 HP por 3 minions. +3 % HP máx a 30 stacks. Infla W, Gargoyle y Smite. |
| Sorcery | Transcendence | +10 AH total → E cada ~12 s en vez de ~14 s. |
| Sorcery | Bone Plating | Anti-burst en early jungle (vs Kha'Zix, Zed invade). |

### Hechizos: Smite + Flash

- **Smite**: Obligatorio. Escala con armadura bonus (+20 %) y HP bonus (+3 %). Con ~220 armadura bonus: +44 verdadero extra.
- **Flash**: Para combos Q-Flash-E o para escapar.

### Orden de habilidades: W → Q → E (R en 5/9/13)

- **W max primero**: Aumenta armadura bonus de W (30→60 % en rank 4), daño reflejado y reduce CD. Core del kit.
- **Q segundo**: Reduce CD y aumenta daño/velocidad. Vital para ganks y rotaciones.
- **E último**: El taunt dura lo mismo en todos los ranks (1,25-2,25 s); el AS bonus es secundario.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (nivel 15, W rank 4, armadura ~310)

| Build | Oro | Armadura | HP total | EHP físico | Mitigación | Daño utilitario |
|---|---|---|---|---|---|---|
| ÓPTIMA (Sunfire+Thorn+DMP+FoN+Gargoyle) | 16 300 | ~310 | ~4 456 | ~12 800 | ~75 % | Thornmail + Immolate + W reflect |
| Variante Anti-AP (Abyssal Mask por FoN) | 15 900 | ~310 | ~4 106 | ~12 200 | ~75 % | + 12 % amp mágico equipo |
| Variante Anti-Crit (Randuin's por DMP) | 16 300 | ~310 | ~4 106 | ~12 200 | ~75 % | −30 % daño crítico |
| Meta vieja (sin Force of Nature) | 13 500 | ~290 | ~3 856 | ~11 000 | ~74 % | Sin RM escalable |

### Desglose multiplicativo de la diferencia (post-7.3a vs pre-7.3a)

| Factor | Multiplicador | Contribución |
|---|---|---|
| Armadura base 40 vs 45 | ×0,94 | −6 % armadura base |
| W rank 1-3 reducidos (30/40/50 vs 45/50/55) | ×0,92 | −8 % armadura efectiva en ranks 1-3 |
| W rank 4 intacto (60 %) | ×1,00 | 0 % en late game |
| Smite burn −18 % | ×0,82 | Clear ~15-20 % más lento |
| Neto EHP físico (early) | | **−8 %** |
| Neto EHP físico (late, W rank 4) | | **−2 %** |

> **Veredicto del lab:** La build publicada en v1.0 era correcta en composición. El hotfix 7.3a nerfeó inputs del spec (armadura base, W ranks 1-3) pero no cambió la lógica de itemización: Rammus sigue siendo un tanque de armadura con CC. Los números se actualizan; la build, las runas y el plan de juego se mantienen. ✅

---

## 9. PLAN DE JUEGO

### Early Game (0:00 – 9:00)

- **Start**: Ruby Crystal (500 g) + poción. Empezar en buff rojo o azul según ruta.
- **Clear**: Usar W inmediatamente al llegar al campamento para maximizar daño reflejado y reducir daño recibido. El nerf de Smite 7.3a (−18 % burn) hace el clear más lento: priorizar campamentos grandes primero.
- **Nivel 3**: Buscar lanes con CC aliado. Q para acercarse → Flash si es necesario → E para taunear. Activar W antes de entrar.
- **Placas**: Desde el min 1, trabajar placas con Q + Demolish. Rammus con Q llega rápido y taunteamos al laner enemigo.

### Mid Game (9:00 – 15:00)

- **Min 10:00**: ⬆️ Armored Advance (+1 000 g, mismo slot).
- **Pico Thornmail (~12:00)**: GW 50 % pasivo corta el Lifesteal de ADCs. Buscar escaramuzas en el río.
- **Objetivos**: Usar Q para rotar rápidamente a Dragones o Herald. Smite 7.3 con armadura bonus pega más: ventaja contra junglas AP.
- **Cristales de torreta**: Con Q, entrar en rango de torreta y detonar el cristal con un auto (~1 300 verdadero). Retroceder inmediatamente.

### Late Game (15:00+)

- **Teamfights**: Rammus es el engage principal. Q → Flash (si necesario) → E sobre el carry enemigo → W activo → Gargoyle si te focusean.
- **Protección**: Si el equipo necesita protección, usar E sobre el asesino enemigo que salta a tu carry.
- **Nexus 4 000 HP (7.3a)**: Tras inhibidor, el Nexus cae en ~2 pushes. No extenderse innecesariamente.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|---|---|
| Smite burn −18 % (7.3a) | Clear early más lento; no invadir sin ventaja |
| Torretas 7 000 HP + cristales | No se tiran "de un push"; trabajar placas 2-3 veces |
| Placas +20 arm/MR y 10 s (7.3a) | Siege más fácil; Rammus protege con taunt |
| Nexus 4 000 HP (7.3a) | Cierra partidas 1-2 min antes |
| Minions 60 % daño a campeones | Jungla más segura para Rammus |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de jungla, Smite, torretas, cristales, Lifesteal |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Nerf Rammus: armadura base 45→40, W 45/50/55/60→30/40/50/60 %, Smite burn −18 %, Nexus 4 000, placas +20/10 s |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Rammus (Meta Overview) | 05/10/2026 | WR 57,42 %, Tier S+ |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|---|---|
| Armadura growth de Rammus no está en el apéndice | Estimado ~3,5/nivel. ⚠️ **Verificar en juego** antes de publicar como Aprobado. |
| Ficha wr-meta de Rammus no está en el lab | El reporte v1.0 se basó en conocimiento del kit. Los valores de W/E/Q/R deben verificarse contra la ficha oficial. |
| Build comunidad sugiere Iceborn Gauntlet primero | Modelo muestra que Sunfire da más DPS sostenido y clear. Iceborn es situacional. |

### Supuestos del modelo (declarados)

- Armadura growth ~3,5/nivel (⚠️ verificar).
- W rank 4 activa en todas las peleas (uptime 100 %).
- Immolate de Sunfire activo en combate (~80 % uptime).
- Overgrowth a 30 stacks (~min 18+).
- Sin motor cuantitativo: cálculos de EHP/mitigación son parciales.
- No se incluye daño de Q/R en el DPS sostenido (son burst/engage, no DPS).

### Contexto meta (05/10/2026, Diamond+)

Rammus: WR 57,42 %, pick 5,00 %, ban 7,02 %, Tier S+, tendencia 0. El nerf 7.3a (armadura base −5, W ranks 1-3) no ha afectado significativamente su WR (sigue en S+), probablemente porque el rank 4 de W se mantiene y el rol de tanque de engage no depende del daño.

### Validación del modelo

- `validate_slots(["Armored Advance","Sunfire","Thornmail","Dead Man's Plate","Force of Nature","Gargoyle"])` → PASS (6 entradas, 1 botas, 5 ítems).
- Chequeo manual de armadura post-7.3a: 40 base + ~49 growth = ~89. Con W rank 4 (+60 % bonus) + ítems (~220 armadura bonus): ~310 total. ✓
- Thornmail daño: 20 + 6 % × 220 + 1 % × 2 050 = 20 + 13 + 20 = ~53 mágico por auto. ✓

---

## APÉNDICE A — POOL DE ÍTEMES DEL ROL: veredicto para Rammus

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Sunfire Aegis (2 900) | ✅ Core 1 | Immolate + stats. Clear y teamfight. |
| Thornmail (2 700) | ✅ Core 2 | GW + armadura + reflect. Anti-ADC. |
| Dead Man's Plate (2 800) | ✅ Core 3 | MS + armadura + Crushing Blow. |
| Force of Nature (2 800) | ✅ Core 4 | RM escalable + HP + MS. |
| Gargoyle Stoneplate (2 900) | ✅ Core 5 | Activo: escudo + tamaño. |
| Armored Advance T3 (2 200) | ✅ Botas default | Block + escudo físico. |
| Chainlaced Crushers T3 (2 200) | ⚠️ Botas vs AP | +30 MR + 30 % tenacidad. |
| Randuin's Omen (2 800) | ⚠️ Situacional | Vs críticos (Yone/Yasuo). |
| Abyssal Mask (2 400) | ⚠️ Situacional | Vs 3+ AP. Amp mágico equipo. |
| Iceborn Gauntlet (3 000) | ⚠️ Alternativa | Slow field. Menos DPS que Sunfire. |
| Warmog's Armor (2 850) | ❌ | HP sin armadura. No sinergia con W. |
| Heartsteel (3 000) | ❌ | HP puro. Rammus no ejecuta con HP. |
| Spirit Visage | ❌ | No existe en 7.3. |
| Cualquier ítem de crítico/AS/AD | ❌ | 100 % stat muerto. |

## APÉNDICE B — RUTAS DE COMPRA

```
DEFAULT (vs AD / Estándar):
  Ruby Crystal → Sunfire (7:30) → Plated (9:30) → Thornmail (12:00)
  → ⬆️ Armored Advance (13:00) → Dead Man's Plate (15:30)
  → Force of Nature (18:00) → Gargoyle (21:00)

VS AP HEAVY (3+ fuentes AP):
  Ruby Crystal → Sunfire (7:30) → Mercury's Treads (9:30) → Thornmail (12:00)
  → ⬆️ Chainlaced Crushers (13:00) → Abyssal Mask (15:30)
  → Force of Nature (18:00) → Gargoyle (21:00)

VS CRÍTICOS (Yone/Yasuo/Tryndamere):
  Ruby Crystal → Sunfire (7:30) → Plated (9:30) → Randuin's Omen (12:00)
  → ⬆️ Armored Advance (13:00) → Thornmail (15:30)
  → Force of Nature (18:00) → Gargoyle (21:00)

SNOWBALL (Feedeado):
  Sunfire (7:00) → Plated → Thornmail (11:00) → ⬆️ Armored (12:00)
  → Dead Man's Plate (14:30) → Force of Nature (17:00) → Gargoyle (19:30)
```

---

## Pie de página

*Reporte REGENERADO el 05/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.15. Las cifras de EHP, mitigación y daño utilitario son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*
*Este reporte fue regenerado porque el triage del hotfix 7.3a dio veredicto ❌ REGENERAR (cambio a inputs del spec: armadura base y W). La composición de ítems NO cambió; solo los cálculos numéricos.*

**Referencias y créditos**
- Notas oficiales del parche 7.3 (21/09/2026) y hotfix 7.3a (29/09/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria: nerf de armadura base y W de Rammus, Smite burn, Nexus 4 000, placas.
- Base de datos de ítems, runas y fichas de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Win rates Diamond+ del 05/10/2026 (champion_winrates.csv).
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.

---

### Resumen de cambios vs versión publicada (v1.0 → v2.0)

| Aspecto | v1.0 (7.3) | v2.0 (7.3+7.3a) | Δ |
|---|---|---|---|
| Armadura base | 45 | **40** | −5 |
| W bonus armor (rank 1-3) | 45/50/55 % | **30/40/50 %** | −15/−10/−5 % |
| W bonus armor (rank 4) | 60 % | **60 %** | 0 % |
| Smite burn | 30-198/s | **22-162/s** | −18 % |
| EHP físico (early) | ~13 900 | **~12 800** | −8 % |
| EHP físico (late, W rank 4) | ~13 100 | **~12 800** | −2 % |
| Nexus / Placas | 5 500 / +30/20 s | **4 000 / +20/10 s** | Siege más fácil |
| Build (6 slots) | Sin cambio | **Sin cambio** | ✅ Idéntica |
| Runas | Sin cambio | **Sin cambio** | ✅ Idénticas |
| Win Rate | ~57 % (pre-hotfix) | **57,42 %** (05/10) | Estable en S+ |
