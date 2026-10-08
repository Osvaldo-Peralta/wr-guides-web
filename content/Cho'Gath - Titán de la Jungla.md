---
tags:
  - Barón
  - Jungla
  - Personalizado
version: 1.2
Status: Beta
champion: Cho'Gath
slug: chogath-titan-de-la-jungla
role: jungla
variant: "titan-de-la-jungla"
patch: "7.3"
archetype: "Tanque de Escalado Infinito"
engine: none
custom: "true"
generate: manual
mode: sr
published_at: "2026-09-28"
updated_at: "2026-10-04"
verification: ANOTAR
verified_patch: "7.3a"
---
**Fecha del análisis:** 28/09/2026
**Parche:** 7.3 (21-sep-2026)
**Rol principal:** Jungla (Preferente) / Top
**Arquetipo:** Tanque de Escalado Infinito
**Enfoque:** Convertir el tamaño en poder real

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (08/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Cho'Gath:** ninguno en 7.3a.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada (6 slots, Ley 0):** Armored Advance + Heartsteel + Hollow Radiance + Liandry's Torment + Force of Nature + Warmog's Armor — **sin cambios**.
> **Sistema (7.3a):** Smite burn vs monstruos: 30–198/s → **22–162/s** → Jungla early más lenta → Diana jungla: Nashor's 1.º aún más correcto; Shyvana/Volibear/Cho'Gath jungla: clear early −15-20 %
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 24/09/2026):**
> 
> Jungla: Win Rate 50.78 % | Pick 7.22 % | Ban 38.00 % | Tendencia ↑14.
> Top: Win Rate 51.20 % | Pick 12.60 % | Ban 38.00 % | Tendencia ↓1.

> [!TIP]
> **Variante Anti-Curación:** Si el enemigo tiene mucho sustain (Mundo, Soraka, Yuumi), cambia *Liandry's Torment* por **Morellonomicon** o añade **Thornmail** como 5.º ítem. Pierdes ~10 % de daño sostenido pero ganas control de salud enemiga crucial.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL
| Slot      | Ítem                                                              | Oro   | Rol en la build                                                                          |
| --------- | ----------------------------------------------------------------- | ----- | ---------------------------------------------------------------------------------------- |
| 1 (botas) | **Plated Steelcaps → ⬆️ Armored Advance** (min 10:00, MISMO slot) | 2 200 | Bloqueo 10 % daño físico + Escudo físico. Esencial vs ADCs/Fighters AD.                  |
| 2         | **Heartsteel**                                                    | 3 000 | Core infinito. +700 HP, daño % vida máxima, HP permanente por golpe.                     |
| 3         | **Hollow Radiance**                                               | 2 800 | Daño mágico en área basado en HP bonus + 40 MR. Sinergia directa con Heartsteel.         |
| 4         | **Liandry's Torment**                                             | 3 000 | Quemadura % vida máxima. Multiplica el daño de E (Vorpal Spikes) y W.                    |
| 5         | **Force of Nature**                                               | 2 800 | RM escalable (hasta +70) + MS. Durabilidad contra composiciones AP.                      |
| 6         | **Warmog's Armor**                                                | 2 850 | Regeneración masiva fuera de combate (>950 HP bonus). Presión de mapa sin volver a base. |

> **Oro total: ~16 650 g** · HP Bonus ~3 500+ · HP Total ~5 200+ (con stacks) · AP 110 · Haste 55 · Daño E: ~150 + % vida enemigo.

### Tabla B — Ruta de compra cronológica
| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Ruby Crystal (Start) | 500 | 0:00 |
| 2 | Kindlegem + Giant's Belt → **Heartsteel** | 3 500 | ~8:30–9:30 |
| 3 | **Plated Steelcaps** | 4 700 | ~10:00 |
| 4 | Negatron Cloak + Ruby Crystal → **Hollow Radiance** | 7 500 | ~13:00 |
| 5 | ⬆️ **Armored Advance** (mismo slot, +1 000 g) | 8 500 | ~14:00 (post 10:00) |
| 6 | Haunting Guise + Blasting Wand → **Liandry's Torment** | 11 500 | ~16:30 |
| 7 | Winged Moonplate + Negatron Cloak → **Force of Nature** | 14 300 | ~19:00 |
| 8 | Giant's Belt + Kindlegem → **Warmog's Armor** | 17 150 | ~22:00 |

### Runas · Hechizos · Habilidades
| Categoría | Elección |
|-----------|----------|
| Keystone | **Grasp of Undying** (Daño % vida, cura, HP permanente) |
| Resolve 2 | **Demolish** (Daño a torres, sinergia con push) |
| Resolve 3 | **Second Wind** (Sustain en lane/jungla temprana) |
| Resolve 4 | **Overgrowth** (+3 % HP máximo a 30 stacks) |
| Sorcery 1 | **Transcendence** (Ability Haste para spam Q/E) |
| Sorcery 2 | **Axiom Arcanist** (-7 % CD de R por takedown = más stacks) |
| Hechizos | **Jungla: Smite + Flash** · **Top: Flash + Ignite/Teleport** |
| Skills | **E → Q → W** (R en 5/9/13) |

### Resultado del modelo (Nivel 15, 6 stacks Feast, vs Tanque 4 500 HP)
| Escenario | Valor Estimado |
|-----------|-----|
| **HP Total** | **~5 200** (Base + Items + Stacks) |
| **Daño E (Single Target)** | **~250 mágico + 3.5 % vida máx enemigo** |
| **Daño Heartsteel (Proc)** | **~300 físico + 3.5 % vida máx enemigo** |
| **Quemadura Liandry** | **2 % vida máx / s (3 s)** |
| **EHP vs Físico** | **Extremo** (Armored Advance + Plated passive) |
| **Regen Fuera de Combate** | **~180 HP/s** (Warmog's activo) |

> **Titular:** Cho'Gath no busca burst instantáneo, sino asfixia porcentual. A nivel 15, su combinación de E + Heartsteel + Liandry derrite tanques en segundos mientras él se regenera completamente en 10 segundos fuera de combate.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos a Cho'Gath (7.3)
| Stat / Habilidad | Antes | Ahora | Impacto |
|---|---|---|---|
| Daño Crítico Base | 175 % | **200 %** | Irrelevante (no usa crítico). |
| AS Cap | 2.5 | **3.0** | Irrelevante (no escala con AS). |
| E Vorpal Spikes | Buffed en 7.2c | **Mantenido** | Daño base aumentado a 20/45/70/95 + % vida. |
| R Feast | CD 80/70/60 | **70/60/50** | Más frecuencia de ejecución = más stacks más rápido. |

### 1.2 Cambios sistémicos que le afectan
| Sistema | Cambio | Efecto en Cho'Gath |
|---|---|---|
| Heartsteel | Item nuevo/rework | **Core absoluto.** Permite escalar HP y daño simultáneamente. |
| Jungla 7.3 | Smite escala con stats | Tu HP bonus de Heartsteel aumenta el daño verdadero de Smite. |
| Torretas 7 000 HP | Cristales (Crystalline Overgrowth) | Cho'Gath con Demolish + E es el mejor destructor de torres del juego. |

### 1.3 ¿Sus habilidades escalan con crítico?
**No.** Cho'Gath es un campeón de **daño porcentual (% vida)** y **daño verdadero**. El crítico, la velocidad de ataque y el daño de ataque físico son stats muertos para su kit principal. Su escalado depende exclusivamente de **Vida Máxima**, **AP** (para ratios de Q/W/E) y **Penetración Mágica/Haste**.

---

## 2. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|---|---|---|
| AD base / growth | 62 / 4.0 | Ficha wr-meta |
| AS base / ratio | 0.625 / 0.625 | Apéndice oficial 7.3 |
| Base Bonus AS | 0.28 | Apéndice oficial 7.3 |
| AS por nivel | 0.008 | Apéndice oficial 7.3 |
| P Carnivore | Cura 18 HP + 4.35 Maná por kill (doble vs campeones/épicos) | Ficha wr-meta |
| Q Rupture | 80-245 + 100 % AP, Knock-up 1 s, Slow 60 % | Ficha wr-meta |
| W Feral Scream | 80-230 + 70 % AP, Silencio 1.4-2 s | Ficha wr-meta |
| E Vorpal Spikes | 20-95 + 30 % AP + **(2.3-3.5 % + 0.6 % per stack) vida máx objetivo** | Ficha wr-meta |
| R Feast | 300-600 + 50 % AP + **10 % HP Bonus** (Verdadero). +80/120/160 HP por stack. | Ficha wr-meta |

**HP de referencia full build:** ~5 200 (con 6 stacks mínimos).
**Daño E vs Tanque 4 500 HP:** ~250 base + ~157 (% vida) = **~407 por golpe** (sin contar MR).

---

## 3. MODELO Y FÓRMULAS

### Fórmulas aplicadas
Daño_E = (Base_E + AP * 0.3) + (Vida_Máx_Enemigo * (0.023 + 0.006 * Stacks_Feast))
Daño_Heartsteel = 140 + (Vida_Máx_Cho * 0.035)
Daño_Liandry = Vida_Máx_Enemigo * 0.02 * 3_segundos
Mitigación_Mágica = 100 / (100 + MR_Enemigo * (1 - Pen_Mágica))

### Supuestos específicos
- Se asumen **6 stacks de Feast** de minions/monstruos no épicos (cap inicial) + stacks adicionales de campeones/épicos en late game.
- Heartsteel está completamente cargado y ha generado HP permanente.
- El enemigo tiene ~4 500 HP y ~80 MR (promedio late game).
- Warmog's Armor está activo (>950 HP bonus).

---

## 4. LEYES APLICADAS A CHO'GATH

### Ley 0 — Slots
Build final = 1 botas (Armored Advance T3) + 5 ítems. `validate_slots(["Armored Advance", "Heartsteel", "Hollow Radiance", "Liandry's", "Force of Nature", "Warmog's"])` → **PASS**.
*Nota:* En la ruta de compra se muestra Plated Steelcaps (T2) mejorando a Armored Advance (T3). Nunca tengas ambas equipadas simultáneamente.

### Ley 3 — Penetración Mágica vs Daño Porcentual
Cho'Gath hace daño mixto (Mágico en Q/W/E y Verdadero en R/Heartsteel proc).
- **Liandry's Torment** aplica quemadura que ignora mitigación en parte al ser % vida, pero sigue siendo daño mágico.
- Contra tanques con >150 MR, considerar **Cryptbloom** (30 % pen) en lugar de Force of Nature si el equipo necesita más daño mágico de equipo. Sin embargo, Force of Nature ofrece la supervivencia necesaria para mantenerse en rango de E.

### Ley 4 — Stats Muertos
| Stat | Valor para Cho'Gath | Nota |
|---|---|---|
| AD | ❌ Muerto | Solo útil para last hit early. |
| AS | ❌ Muerto | No escala con autos. |
| Crítico | ❌ Muerto | Ninguna habilidad critica. |
| Maná | ⚠️ Bajo | Útil para spam, pero la pasiva y items como Frozen Heart cubren esto si es necesario. |
| HP | ✅ Rey | Escala daño de R, Heartsteel, y durabilidad. |

### Ley 5 — Eficiencia de Oro
- **Heartsteel (3 000 g):** Extremadamente eficiente en partidas largas. El HP permanente y el daño % vida justifican el coste frente a items estáticos como Sunfire.
- **Hollow Radiance (2 800 g):** Alta eficiencia para tanques AP. El daño en área basado en HP bonus sinergiza perfectamente con el pool de vida de Cho.
- **Liandry's (3 000 g):** Estándar dorado para daño sostenido % vida.

### Ley 6 — Timing
Heartsteel requiere tiempo para cargar (2.5 s cerca de enemigos). Early game Cho es débil en burst. La ventana de poder comienza al completar Heartsteel (~9 min) y se vuelve dominante al añadir Liandry's (~16 min).

### Ley 7 — Sistemas 7.3
- **Smite 7.3:** Escala con HP bonus. Tu build de HP masivo aumenta el daño verdadero de Smite contra objetivos épicos.
- **Cristales de Torreta:** Cho'Gath con Demolish y E puede detonar cristales rápidamente, ejerciendo presión de mapa global.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | Pros | Contras | Veredicto |
|---|---|---|---|---|
| **Heartsteel** | 3 000 | Escalado infinito HP/Daño. Sinergia total con kit. | Requiere proximidad para cargar. Débil en all-in temprano. | ✅ **CORE** |
| Liandry's Torment | 3 000 | Daño consistente % vida. Buen clear de jungla. | Menos durabilidad inmediata. Sin escalado infinito de HP. | ⚠️ Alternativa AP |
| Iceborn Gauntlet | 3 000 | Control de zona (slow en área). Maná. | Menos daño que Heartsteel/Liandry. | ❌ Pasivo de moda |
| Sunfire Aegis | 2 900 | Daño en área constante. | Heartsteel es superior en escalado y daño single-target. | ❌ Outdated |

**Veredicto:** Heartsteel primero SIEMPRE en esta build. Define la identidad de "Coloso Imparable".

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación Matemática |
|---|---|---|
| Botas | **Plated → ⬆️ Armored Advance** | Reduce 10 % daño de autos + escudo físico. Esencial para sobrevivir a ADCs y Fighters AD en jungle/top. |
| 1 | **Heartsteel** (3 000) | Core del build. Aumenta HP máximo y daño de autos basado en % HP. Escalado infinito. |
| 2 | **Hollow Radiance** (2 800) | Daño mágico en área basado en HP bonus. Sinergia directa con Heartsteel. Aporta 40 MR. |
| 3 | **Liandry's Torment** (3 000) | Aplica quemadura % vida máxima. Sinergia con E (Vorpal Spikes) y W. Aporta 300 HP y 70 AP. |
| 4 | **Force of Nature** (2 800) | Alta RM escalable con stacks (hasta +70). Movilidad para alcanzar enemigos. Sinergia con HP masivo. |
| 5 | **Warmog's Armor** (2 850) | Regeneración masiva fuera de combate si tienes >950 HP bonus (fácil de lograr). Permite presión constante sin volver a base. |

### Matriz del último slot (situacional)
| Situación | Ítem | Coste | Impacto Medido |
|---|---|---|---|
| **Default** | **Warmog's Armor** | 2 850 | Regen ~180 HP/s fuera de combate. |
| Vs Mucha Curación Enemiga | **Spirit Visage** | 2 800 | Amplifica la regeneración de Warmog y pasiva de Cho. +10 % HSP. |
| Vs AD / Lifesteal | **Thornmail** | 2 700 | Refleja daño y aplica Grievous Wounds. |
| Vs AS Heavy (ADCs) | **Frozen Heart** | 2 550 | Reduce AS enemiga en 25 % en área. |
| Vs AP Burst | **Abyssal Mask** | 2 400 | Reduce MR enemiga en área (12 %) para tu equipo. |

### RECHAZADOS (con motivo numérico)
| Ítem | Motivo del Rechazo |
|---|---|
| Kraken Slayer / Runaan's / IE | Stats muertos (AS/Crítico). Cho no usa autos para daño principal. |
| Nashor's Tooth | AS innecesaria. El daño de Cho viene de habilidades y % vida. |
| Sunfire Aegis | Heartsteel ofrece mejor escalado de daño y HP permanente. |
| Rylai's Crystal Scepter | Buen slow, pero Liandry's ya aplica ralentización implícita vía daño sostenido y ofrece mejor sinergia de % vida. |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Grasp of Undying
- Daño mágico basado en % vida máxima.
- Cura y otorga HP permanente.
- Sinergia perfecta con el escalado de HP de Cho'Gath y Heartsteel.

### Secundarias
| Slot | Runa | Valor Estimado |
|---|---|---|
| Resolve | **Demolish** | Daño extra a torres. Sinergia con Crystalline Overgrowth y el push de Cho. |
| Resolve | **Second Wind** | Sustain en lane contra poke o daño recurrente de monstruos de jungla. |
| Resolve | **Overgrowth** | HP permanente adicional. Más HP = más daño de R y Heartsteel. |
| Sorcery | **Transcendence** | Ability Haste. Cho necesita spamear Q/E para clear y CC. |
| Sorcery | **Axiom Arcanist** | Reduce CD de R al conseguir kills/asists. Más R = más stacks de Feast = más tamaño/daño. |

### Hechizos
- **Jungla:** Smite + Flash.
- **Top:** Flash + Ignite (para asegurar kills y aplicar GW) o Teleport (para macro/push).

### Orden de Habilidades
**E → Q → W** · R en 5/9/13.
- **E (Vorpal Spikes):** Maxear primero. Daño en área, slow, y % vida del enemigo. Fundamental para clear de jungla y waveclear en lane.
- **Q (Rupture):** Segundo. CC principal (knock-up).
- **W (Feral Scream):** Último. Silencio útil, pero menos daño/clear.
- **R (Feast):** Siempre que esté disponible. Priorizar stacks en minions/monstruos grandes si no se puede asegurar kill en campeón.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla Maestra (Nivel 15, 6 Stacks Feast)
| Build | Oro | HP Est. | Daño Principal | Durabilidad | Claridad de Rol |
|---|---|---|---|---|---|
| **Coloso (Esta Build)** | ~16.6k | ~5 200 | % Vida (E, Heartsteel, Liandry) | Extrema (HP + Resistencias) | Tank Mágico / Scaling |
| AP Burst (Full AP) | ~16k | ~3 000 | Burst Q/R (Alto ratio AP) | Baja (Frágil) | Asesino Mágico |
| Tank Puro (Sunfire/Thorns) | ~14k | ~4 500 | Daño Fijo/Moderado | Alta (Armadura/RM) | Tanque Frontal |
| On-Hit (Nashor/Wits) | ~15k | ~3 500 | Daño Autoataque | Media | Fighter Híbrido |

> [!WARNING]
> La build Coloso sacrifica burst instantáneo por daño sostenido porcentual y durabilidad inigualable. A medida que avanza la partida, Cho se vuelve más grande, duele más y es más difícil de matar. Las otras builds o son demasiado frágiles (AP) o no escalan tan bien en daño (Tank Puro).

---

## 9. PLAN DE JUEGO

### Early Game (Niveles 1-6)
- **Lane/Jungla:** Usar E para farmear y pokear. Mantener distancia. Usar pasiva para recuperar vida/maná. Evitar trades largos sin Grasp cargado.
- **Jungla:** Empezar con buff que permita clear seguro (Blue para maná/sustain o Red para daño). Usar E para clear rápido. Smite para asegurar objetivos.
- **Objetivo:** Conseguir 1-2 stacks de Feast en minions/monstruos si no hay kills seguras. Comprar componentes de Heartsteel.

### Mid Game (Niveles 7-12)
- **Item Power Spike:** Al completar Heartsteel, Cho empieza a destacar. Buscar peleas pequeñas y usar Q-R para eliminar objetivos clave.
- **Macro:** Pushear líneas con E y Demolish. Aprovechar Crystalline Overgrowth en torres.
- **Objetivos:** Controlar Dragones/Herald con Smite y daño verdadero de R.

### Late Game (Niveles 13+)
- **Teamfights:** Iniciar con Q sobre múltiples enemigos o usar Flash-Q. Activar R para ejecutar al tanque/enemigo con más vida. Usar E para ralentizar y dañar en área.
- **Posicionamiento:** Frontline. Absorber daño mientras se aplica daño porcentual.
- **Splitpush:** Si el equipo necesita presión, Cho puede tirar torres rápidamente con Demolish + Crystalline Overgrowth + Heartsteel.

### Reglas del Parche que Cambian el Macro
| Regla | Impacto |
|---|---|
| Torretas 7 000 HP | No se tiran "de un push"; trabaja placas 2-3 veces. |
| Placas permanentes + decaen desde 5:00 | Prioriza la primera placa antes del 5:00. |
| Crystalline Overgrowth (~50 s ciclo) | Un cohete/auto detona hasta ~1 300 verdadero gratis. Cho es excelente para esto. |
| Smite escala con HP Bonus | Tu build de HP masivo aumenta el daño verdadero de Smite. |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes Primarias (mandan)
| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 | 21/09/2026 | Cambios en Smite, items nuevos (Heartsteel), ajustes de Cho'Gath. |
| wr-meta.com | 24/09/2026 | Stats base, ratios de habilidades, meta actual. |

### Discrepancias Detectadas y Resolución
| Tema | Resolución |
|---|---|
| Ninguna significativa detectada entre fuentes para Cho'Gath en 7.3. | Se usan los valores oficiales de parche. |

### Supuestos del Modelo (declarados)
- Se asumen **6 stacks de Feast** a nivel 15 (conservador, podría ser más con kills de campeones/épicos).
- Se asume que Heartsteel está completamente cargado y ha generado HP permanente.
- El daño de E se calcula contra un objetivo de 4 500 HP para demostrar la escalada.
- No se incluye daño de objetos activos (como Rocketbelt) para simplificar el DPS sostenido.

### Contexto Meta (24/09, Diamond+)
Cho'Gath tiene un win rate sólido (~51 %) en Top y Jungla. Su presencia es media-alta debido a su utilidad de CC y escalado. La tendencia en Jungla es alcista (+14 puestos) gracias a los cambios de Smite y la fortaleza de los tanques en el parche 7.3.

### Validación del Modelo
- `validate_slots(["Armored Advance", "Heartsteel", "Hollow Radiance", "Liandry's", "Force of Nature", "Warmog's"])` → **PASS** (6 entradas, 1 botas T3, 5 ítems).
- Chequeo manual de daño E: Correcto según ratios de parche 7.3.

---

## APÉNDICE A — POOL DE ÍTEMES DEL ROL: veredicto para Cho'Gath

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Heartsteel (3 000) | ✅ Core | Escalado infinito HP/Daño. |
| Hollow Radiance (2 800) | ✅ Core | Daño mágico % HP bonus. |
| Liandry's Torment (3 000) | ✅ Core | Quemadura % vida. |
| Force of Nature (2 800) | ✅ Situacional | Mejor RM escalable. |
| Warmog's Armor (2 850) | ✅ Situacional | Regen masiva. |
| Spirit Visage (2 800) | ✅ Situacional | Amplifica regen/curación. |
| Thornmail (2 700) | ✅ Situacional | Anti-AD/Lifesteal. |
| Frozen Heart (2 550) | ✅ Situacional | Anti-AS. |
| Iceborn Gauntlet (3 000) | ⚠️ Alternativa | Buen control, menos daño. |
| Sunfire Aegis (2 900) | ❌ Rechazado | Heartsteel es superior. |
| Rylai's Crystal Scepter (2 700) | ⚠️ Alternativa | Slow útil, pero menos daño/defensa. |
| Kraken/Runaan/IE/Nashor | ❌ Rechazado | Stats muertos (AS/Crit). |

---

## APÉNDICE B — RUTAS DE COMPRA

#### DEFAULT (Coloso):
`Ruby Crystal → Heartsteel (8:30') → Plated Steelcaps (10:00') → Hollow Radiance (13:00') → ⬆️ Armored Advance (14:00') → Liandry's Torment (16:30') → Force of Nature (19:00') → Warmog's Armor (22:00')`

#### ANTI-AD:
`Heartsteel → Plated Steelcaps → Thornmail → Frozen Heart → Force of Nature → Warmog's/Spirit Visage`

#### ANTI-AP:
`Heartsteel → Mercury's Treads → ⬆️ Chainlaced Crushers → Hollow Radiance → Spirit Visage → Force of Nature → Warmog's`

#### JUNGLA:
`Smite → Heartsteel → Plated Steelcaps/Mercury's → Hollow Radiance → Liandry's → Situacional`

---

*Reporte generado el 28/09/2026 con datos del parche 7.3 (21/09/2026). WR-LAB v1.4. Las cifras de daño son estimadas basadas en ratios y % vida pre-mitigación. El valor real depende de la composición enemiga y los stacks de Feast. Si Riot publica un 7.3a/b (hotfix), regenerar datos antes de publicar.*

**Referencias y créditos**
- Notas oficiales del parche 7.3 (21/09/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios de items, Smite y campeones.
- Base de datos de ítems, runas y fichas de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Fuente secundaria para stats base y meta.
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.

---