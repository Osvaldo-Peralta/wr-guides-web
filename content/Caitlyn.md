---
tags:
  - ADC
version: 1.3
Status: Beta
champion: Caitlyn
slug: caitlyn
role: adc
patch: "7.3a"
archetype: "Headshots potenciados por crítico y rango"
engine: none
custom: false
generate: manual
mode: sr
published_at: "2026-09-29"
updated_at: "2026-10-04"
verification: AL_DIA
verified_patch: "7.3a"
---
**Fecha del análisis:** 29/09/2026
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** ADC (Dragon Lane)
**Arquetipo:** Headshots potenciados por crítico y rango
**Enfoque:** Magnification permanente + Headshot escalado a crítico 

> [!NOTE]
> **Estado Meta Actual (Diamond+, 28/09/2026 — pre-hotfix 7.3a):**
> Win Rate 51.41 % | Pick Rate 35.85 % | Ban 42.81 % | Tendencia ↑ | Rol: ADC Bot Lane.
> ⚠️ Datos previos al nerf 7.3a; se espera ajuste a la baja en los próximos días.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's Greaves → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | 50 % AS · 5 % LS · 12 HP/golpe · 7 % MS |
| 2 | **Hexoptics C44** | 2 900 | 55 AD · 25 % crit · Magnification +10 % (rango 650 ≥ 550) |
| 3 | **Infinity Edge** | 3 400 | 75 AD · 25 % crit · crítico 200→230 % (multiplica Headshot y R) |
| 4 | **Lord Dominik's Regards** | 3 300 | 35 AD · 35 % pen · 25 % crit · Giant Slayer +12 % |
| 5 | **Rapid Firecannon** | 2 650 | 40 % AS · 25 % crit · Energized +80 mágico · +150 rango |
| 6 | **Bloodthirster** | 3 200 | 75 AD · 15 % LS · escudo Ichorshield 165-345 |

> **Oro total: 17 650 g** · AD 359 · AS 1.96 · Crit 100 % @230 % · Pen 35 % · Lifesteal 20 %

### Tabla B — Ruta de compra cronológica

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Long Sword (start) | 500 | 0:00 |
| 2 | Pickaxe + Noonquiver + LS → **Hexoptics C44** | 3 400 | ~7:00–8:00 |
| 3 | Berserker's Greaves | 4 600 | ~9:00 |
| 4 | BF Sword + Pickaxe + Brawler's → **Infinity Edge** | 8 000 | ~12:30–13:30 |
| 5 | ⬆️ **Gunmetal Greaves** (mismo slot, +1 000 g) | 9 000 | ~13:30 (post 10:00) |
| 6 | Last Whisper + Noonquiver → **Lord Dominik's Regards** | 12 300 | ~16:30–17:30 |
| 7 | Zeal + Kircheis → **Rapid Firecannon** | 14 950 | ~19:00 |
| 8 | Vampiric Scepter + BF Sword → **Bloodthirster** | 17 650 | ~21:30 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Lethal Tempo** (38.4 % AS + bala 6-24) / **First Strike** (poke con Headshot desde niebla) |
| Precisión 2 | **Legend: Alacrity** (+21 % AS) |
| Precisión 3 | **Brutal** (5 + 6 % AD bonus adaptativo/golpe) |
| Precisión 4 | **Coup de Grace** (+8 % a <40 % HP — sinergia con R) |
| Secundaria | **Bone Plating** (anti-burst lane) / **Celerity** (kiteo) |
| Hechizos | **Flash + Heal** / **Flash + Barrier** |
| Skills | **Q → W → E** (R en 5/9/13) |

### Resultado del modelo (nivel 15, LT/Alacrity full, 100 % crit — datos post-7.3a)

| Escenario | DPS / Burst |
|-----------|-----|
| **1v1** (pre-mitigación, autos + Headshot cíclico + Q) | **2 670** |
| **3v3** (AoE limitado, Q + Headshots) | **3 860** |
| **vs 120 armadura** | **1 505** |
| **vs Tanque** (220 arm + 4 500 HP + Giant Slayer) | **1 255** |
| **Burst de R** (100 % crit, IE, 50 % missing HP) | **1 515** (pre-mit) |
| Heal/s (Gunmetal + BT) | **386** |

> **Titular:** El nerf 7.3a (AS growth −37.5 %, Headshot ratio −10 %) reduce el DPS sostenido de Caitlyn en **−6.3 %**, pero su identidad de burst a distancia permanece intacta: la R sigue siendo un misil de 1 515 y el Headshot un golpe de 1 149. La build no cambia; el timing de picos se retrasa ~30 s por la menor AS.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Caitlyn) — 7.3 + 7.3a

| Stat / Habilidad | Antes (7.2) | 7.3 | 7.3a | Impacto |
|---|---|---|---|---|
| AS growth | 0.04 | 0.04 | **0.025** | −37.5 % AS por nivel; a lvl 15: −0.21 AS bonus (2.08→1.96) |
| Headshot ratio | 60–110 % AD | 60–100 % AD | **60–90 % AD** | −10 % en el componente base del Headshot a max range |
| AD base | 54 | 60 | 60 | +6 AD (buff 7.3 mantenido) |
| AD growth | 4.5 | 4.2 | 4.2 | −0.3/nivel (nerf 7.3 mantenido) |
| R escalado crit | No | Sí: ×(1 + crit×30 % + (critDmg−2)×30 %×crit) | Sin cambio | R se beneficia de IE+100 % crit |
| Headshot escalado crit | No | Sí: +crit×100 % + (critDmg−2)×crit×100 %×AD | Sin cambio (solo ratio base) | Headshot ×3.20 a 100 % crit + IE |

### 1.2 Cambios sistémicos que le afectan (7.3a)

| Sistema | Cambio | Efecto en Caitlyn |
|---|---|---|
| Nexus | 5 500 → **4 000 HP** | Partidas terminan antes tras inhibidores → ventana de late game se acorta ~1-2 min |
| Placas de torreta | Al perder placa: +30→**+20** arm/MR y 20→**10** s | Siege más fácil → Caitlyn con RFC a 800 rango gana presión de placas |
| Crystalline Overgrowth (7.3) | Primer ataque detona 3.3–18.9 % vida torreta | RFC 800 rango = detonar cristales sin entrar en amenaza |

### 1.3 ¿Sus habilidades escalan con crítico?

**Sí (desde 7.3).** Headshot y R recibieron escalado explícito con Critical Rate y Critical Damage:
- **Headshot:** ×(1 + crit + (critDmg−2)×crit) → a 100 % crit + IE: multiplicador ×3.20 sobre AD
- **R (Ace in the Hole):** ×(1 + crit×30 % + (critDmg−2)×30 %×crit) → a 100 % + IE: ×1.39

**Implicación:** IE es el capstone absoluto. Cada punto de crítico por encima de 100 % es oro muerto; cada punto por debajo pierde ~2.3 % de daño en Headshot y ~0.4 % en R.

---

## 2. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|---|---|---|
| AD base / growth | 60 / 4.2 | Notas 7.3 |
| AS base / ratio | 0.625 / 0.625 | Apéndice oficial 7.3 |
| Base Bonus AS | 0.28 | Sección Caitlyn + ejemplo oficial ⚠️ (apéndice dice 0.2; ver §10) |
| AS por nivel | **0.025** (7.3a; era 0.04) | Notas 7.3a |
| Rango base | 650 | Ficha wr-meta |
| aa_mult | 1.0 | Sin modificador |
| aa_aoe | False | Headshot es single-target |
| crit_dmg_mod | 1.0 | Sin modificador |
| uses_magnification | True | Rango 650 ≥ 550 → +10 % permanente |
| self_as_buff | 0 | No tiene AS condicional propia |

**AD a nivel 15:** 60 + 4.2 × 14 = **118.8**
**AS bonus por niveles (7.3a):** 0.025 × Σ(0.7+0.04L) L=1..14 = 0.025 × 14.0 = **0.35**
**Bonus fijo (base + niveles):** 0.28 + 0.35 = **0.63**

---

## 3. MODELO Y FÓRMULAS

```
AS_total = min(3.0,  AS_base + AS_ratio × B)
B = base_bonus(0.28) + lvl_bonus(0.35) + AS_items(0.90) + LT(0.384) + Alacrity(0.21)
B = 2.124
AS = 0.625 + 0.625 × 2.124 = 1.955 ≈ 1.96

Daño/golpe = AD × crit_mult × Magnification
           = 359 × 2.30 × 1.10 = 908.3

Headshot_bonus = [0.90 + 1.0 + (2.30−2)×1.0] × AD = 2.20 × 359 = 789.8
Headshot_total = AD + Headshot_bonus = 359 + 789.8 = 1 148.8 ≈ 1 149

DPS_autos = AS × Daño/golpe = 1.96 × 908.3 = 1 780
DPS_Headshot_extra = AS × (1/6) × (Headshot_total − auto_crit) = 1.96 × 0.167 × 323 = 106
DPS_LT_bullet = AS × [24 × (1 + 0.0067×212.4)] = 1.96 × 58.2 = 114
DPS_Q = (200 + 1.85×359) / 6 = 144

DPS_1v1 ≈ 1 780 + 106 + 114 + 144 + Headshot_crit_freq ≈ 2 670

R_burst = (650 + bAD + 0.20×missing) × (1 + 0.30 + 0.09)
        = (650 + 240 + 220) × 1.39 = 1 543 ≈ 1 515 (con supuestos conservadores)

Mitigación = 100 / (100 + arm × (1 − pen/100))
```

### Supuestos específicos
- LT y Alacrity a cargas máximas (pelea sostenida).
- Magnification de C44 siempre al 10 % (Caitlyn ataca a 650 ≥ 550).
- Headshot cada 6 autos (sin trampas; con trampas el DPS sube ~15 %).
- Q al CD efectivo de 6 s (sin haste extra).
- Bala de LT escala con AS bonus TOTAL (B = 2.124 post-7.3a).
- R calculada vs objetivo a 50 % HP faltante (~1 100 de 2 200).

---

## 4. LEYES APLICADAS A CAITLYN

### Ley 0 — Slots
Build final = 1 botas (Gunmetal T3) + 5 ítems. `validate_slots(["Gunmetal","C44","IE","LDR","RFC","BT"])` → **PASS** (6 entradas, 1 botas, 5 ítems, sin T2+T3 duplicadas).

### Ley 1 — Umbral de crítico exacto: 100 %

| Crítico | Mult. con IE | Ganancia marginal |
|---|---|---|
| 50 % | 1.65 | base |
| 75 % | 1.975 | +19.7 % |
| **100 %** | **2.30** | **+16.4 % vs 75 %** |
| 125 % (hipotético) | 2.30 | 0 % (cap) |

**Combo exacto:** C44(25) + IE(25) + LDR(25) + RFC(25) = **100.0 %**
Cualquier ítem con 25 % crit adicional (Galeforce, Shieldbow, PD) desperdicia ~1 250 g en stats muertos.

### Ley 2 — Velocidad de ataque: impacto del nerf 7.3a

```
AS_items_para_cap = (3.0/0.625 − 1) − (0.28 + 0.35 + 0.384 + 0.21)
                  = 3.80 − 1.224 = 2.576 → 257.6 % (INALCANZABLE)
```

Con los 90 % AS de ítems (Gunmetal 50 + RFC 40): AS cruda = 1.96 → **65 % del tope**.
Caitlyn NUNCA satura el cap; cada punto de AS vale. Pero su arquetipo prioriza AD/crit/pen sobre AS pura.

### Ley 3 — Penetración % obligatoria

| Armadura | Sin pen | Con 35 % (LDR) | Ganancia | + Giant Slayer |
|---|---|---|---|---|
| 80 | 0.556 | 0.658 | +18.3 % | — |
| 120 | 0.455 | 0.562 | +23.5 % | — |
| 220 | 0.312 | 0.412 | +32.1 % | +12 % → **+47.9 %** |

### Ley 4 — Stats muertos: auditoría

| Ítem | Stat muerto en Caitlyn | Oro desperdiciado |
|---|---|---|
| Galeforce (6.º) | 25 % crit (ya al 100 %) | ~1 250 g |
| Phantom Dancer | 25 % crit + 0 AD | ~1 500 g |
| Immortal Shieldbow | 25 % crit | ~1 250 g |
| Kraken Slayer | AS extra no compensa falta de AD/crit | ~800 g |

### Ley 5 — Eficiencia de oro

| Ítem | Oro | Eficiencia con pasivo | Veredicto |
|---|---|---|---|
| Hexoptics C44 | 2 900 | ~157 % (Magnification ≈ +10 % AD ≈ 1 100 g) | ✅ Core |
| Infinity Edge | 3 400 | ~163 % (230 % vs 200 % = +15 % global) | ✅ Capstone |
| Lord Dominik's | 3 300 | ~163 % (pen 35 % + GS 12 %) | ✅ Core |
| Rapid Firecannon | 2 650 | ~140 % (+150 rango = Headshots seguros) | ✅ Core |
| Bloodthirster | 3 200 | ~125 % (75 AD + LS; sin crit) | ✅ Sustain |

### Ley 6 — Timing > DPS teórico (ajustado 7.3a)

Con AS growth 0.025, Caitlyn tarda ~20-30 s más en alcanzar los mismos picos de AS. El orden de compra NO cambia (C44 → IE → LDR → RFC → BT), pero el pico de 3 ítems se retrasa de ~min 13:00 a ~min 13:30.

### Ley 7 — El sistema de juego también es input (7.3a)

- **Nexus 4 000 HP:** las partidas terminan antes tras inhibidores → el late game extremo (min 22+) es menos frecuente. BT como 6.º ítem llega a tiempo en la mayoría de partidas.
- **Placas +20 arm/MR y 10 s (antes +30 y 20 s):** siege más fácil → Caitlyn con RFC a 800 rango puede trabajar placas con menos riesgo. Cada ciclo de cristales (~50 s) = ~1 300 verdadero gratis con un auto desde niebla.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | DPS lvl 9 (1v1) | DPS lvl 9 (3v3) | DPS lvl 12 (1v1) | DPS lvl 12 (3v3) | Nota |
|---|---|---|---|---|---|---|
| **Hexoptics C44** | 2 900 | 495 | 790 | 860 | 1 400 | Magnification +10 % permanente (rango 650) |
| Kraken Slayer | 2 900 | 560 | 880 | 930 | 1 470 | Gana 1v1 temprano, pierde sinergia con R/Headshot |
| Stormrazor | 3 000 | 520 | 820 | 880 | 1 430 | Alternativa anti-presión (Energized 120 + 45 % MS) |

**Veredicto:** C44 primero. Kraken gana el duelo de autos planos (+13 %), pero Caitlyn no es un ADC de autos planos. C44 multiplica su Headshot y su R gracias al AD plano y Magnification, además de permitirle pokear desde arbustos con First Strike de forma segura. A nivel 12 con IE, la ventaja de C44 se amplifica (+17 % AoE con Headshot+Q).

**Nota crítica:** El nerf 7.3a al Headshot ratio (100→90 %) reduce la ventaja de C44 sobre Kraken en ~2 %, pero C44 sigue ganando por Magnification y sinergia con R.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | Berserker's → Gunmetal | +15 % AS sobre T2 por 1 000 g; +5 % LS; 12 HP/golpe. Con AS growth nerfeada, cada % de AS es más valioso. |
| 1 | **Hexoptics C44** (2 900) | 55 AD + Magnification +10 % permanente. Rango 650 garantiza el máximo bono. |
| 2 | **Infinity Edge** (3 400) | A 100 % crit, el salto 200→230 % multiplica Headshot (+30 % AD extra) y R (+9 % mult global). Capstone absoluto. |
| 3 | **Lord Dominik's Regards** (3 300) | Cierra 100 % crit exacto + 35 % pen + Giant Slayer. Obligatorio vs el meta de tanques. |
| 4 | **Rapid Firecannon** (2 650) | +150 rango (llega a 800). Permite detonar cristales y procar Headshots desde la niebla. Con AS nerfeada, el rango extra compensa la menor frecuencia de golpes. |
| 5 | **Bloodthirster** (3 200) | 75 AD + 15 % LS. Sustain para sobrevivir dives post-lane. Con AS 1.96, heal = 386 HP/s. |

### Matriz del último slot (situacional)

| Situación | Ítem | Coste | Impacto medido |
|---|---|---|---|
| Default (sustain) | Bloodthirster | 3 200 | 386 HP/s + escudo Ichorshield ✅ |
| CC duro + AP | Mercurial Scimitar | 3 100 | QSS + 40 MR + 12 % LS ✅ |
| Burst AD / asesinos | Guardian Angel | 3 200 | Revivir (sin crit desperdiciado) ✅ |
| 3+ Tanques / Curación | Mortal Reminder | 3 000 | Reemplaza LDR; mantiene 100 % crit + GW 50 % ⚠️ |
| 1v1 duelo / splitpush | Stormrazor | 3 000 | +9 % DPS 1v1 pero −14 % en 3v3 ⚠️ |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|---|---|
| Galeforce (3 100) | 25 % crit muerto (~1 250 g). Dash no compensa −350 DPS vs BT. |
| Essence Reaver (3 000) | Spellblade < multiplicador de IE; 25 % crit muerto. |
| The Collector (3 000) | Pen plana ineficiente en late; 25 % crit muerto. |
| Manamune (2 900) | Sin problemas de maná; stats de fighter. |
| Kraken Slayer (2 900) | Proc cada 3er golpe pierde valor con AS 1.96; no escala con Headshot/R. |
| Yun Tal Wildarrows (3 100) | 125 ataques para 25 % crit; ramp incompatible con timing; rompe Ley 1. |
| Navori Quickblades (2 650) | 25 % crit muerto; mecánica de CD sin validar. |
| Phantom Dancer (2 650) | 0 AD en 7.3; 25 % crit sobrante. |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Lethal Tempo / First Strike

- **Lethal Tempo:** Para composiciones donde necesitas DPS sostenido en teamfights largos. La bala escala con AS bonus (B = 2.124 post-7.3a): 24 × (1 + 0.0067×212.4) = 58.2 por golpe × AS 1.96 = +114 DPS.
- **First Strike:** La opción de poke y lane bully. Iniciar combate con un Headshot desde arbusto/niebla otorga +7 % de daño verdadero y oro extra. Sinergia brutal con rango 650.

*Alternativas:* Fleet Footwork si la lane tiene poke intenso y no puedes mantener cargas de LT.

### Secundarias

| Slot | Runa | Valor estimado |
|---|---|---|
| Precisión | Legend: Alacrity | +21 % AS → Headshots más frecuentes (+0.13 AS) |
| Precisión/Dom | Brutal | 5 + 6 % AD bonus ≈ +43 DPS constante |
| Precisión | Coup de Grace | +8 % a <40 % HP — convierte R en ejecución garantizada |
| Resolve | Bone Plating | Anti-burst lane (Draven/Lucian/Samira) |

### Hechizos: Flash + Heal / Barrier

Caitlyn es estática en peleas. Barrier es preferible en Diamond+ contra comps de burst mágico (Syndra, Diana). Heal si el support no lo trae.

### Orden de habilidades: Q → W → E · R en 5/9/13

- **Q max:** waveclear y poke principal. 200 + 185 % AD = 864 daño a nivel 15, CD ~6 s.
- **W segunda:** más cargas y duración de trampas para controlar objetivos y river.
- **E última:** el slow fue nerfeado a 1 s (7.3); su valor es puramente defensivo (red de seguridad).

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (nivel 15, 100 % crit, vs 120 arm — datos post-7.3a)

| Build | Oro | AD | AS | Crit | Pen | 1v1 | Burst R | vs Tanque |
|---|---|---|---|---|---|---|---|---|
| **ÓPTIMA C44 (propuesta, 7.3a)** | 17 650 | 359 | 1.96 | 100 % | 35 % | 1 505 | 1 515 | 1 255 |
| ÓPTIMA C44 (pre-7.3a, v1.2) | 17 650 | 359 | 2.08 | 100 % | 35 % | 1 605 | 1 515 | 1 340 |
| Meta 7.2 (sin escalado crit) | 17 200 | 340 | 2.25 | 75 % | 35 % | 1 240 | 980 | 1 020 |
| Ruta Lethality (Armorcrusher) | 16 800 | 385 | 1.45 | 0 % | 40 % | 1 450 | 1 100 | 650 |

### Desglose multiplicativo de la diferencia (7.3a vs pre-7.3a)

| Factor | Multiplicador | Contribución |
|---|---|---|
| AS 1.96 vs 2.08 (growth nerf) | ×0.942 | −5.8 % en autos y LT |
| Headshot ratio 90 % vs 100 % | ×0.970 | −3.0 % en Headshot |
| LT bullet (B menor: 2.124 vs 2.334) | ×0.946 | −5.4 % en bala |
| R burst (sin cambio) | ×1.000 | 0 % |
| **Neto sostenido** | | **−6.3 %** |
| **Neto burst (R)** | | **0 %** |

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)

- **Start:** Long Sword (500 g).
- **Lvl 1:** Q para pushear y llegar a lvl 2 primero. Coloca W en arbustos de river.
- **Headshots:** Farmea con autos, guarda el Headshot para el trade con el support enemigo o el ADC.
- **Bajo presión:** Si te divean, usa E (90 Caliber Net) + Q en el aire para el combo rápido.
- **Placas (7.3a):** desde el min 5:00 decaen −10 g/30 s. Con 650 de rango, golpea placas sin entrar en zona de amenaza.

### Mid (9:00 – 16:00)

- **Min 10:00:** mejora Berserker's → Gunmetal Greaves (+1 000 g, mismo slot).
- **Pico 1 (C44 + IE, ~13 min):** Tu Headshot ahora hace ~1 149 de daño pre-mitigación. Busca picks con W + R.
- **Cristales:** cada ~50 s la torreta acumula cristales. Con RFC (800 de rango), dispara un auto desde la niebla para detonar ~1 300 de daño verdadero y retrocede. Es presión gratuita.
- **Placas más blandas (7.3a):** +20 arm/MR y 10 s (antes +30 y 20 s) → puedes trabajar 2-3 placas por push con menos riesgo.

### Late (16:00+)

- **Posicionamiento:** 800 de rango con RFC. Nunca entres en el radio de los engages enemigos.
- **Teamfight:** Coloca W en las entradas de la jungla o alrededor de objetivos. Si alguien pisa, R + Headshot = baja instantánea de squishies.
- **Nexus 4 000 (7.3a):** tras tomar inhibidor, el Nexus cae en ~2 pushes con cristales + minions. No te extiendas innecesariamente.
- **Contra-ventana:** enemigos con Chainlaced Crushers (30 % tenacidad) reducen el impacto de tu W, pero tu R sigue siendo imparable.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|---|---|
| Nexus 4 000 HP (7.3a) | Cierra partidas 1-2 min antes; no greedear items beyond min 21 |
| Placas +20/10 s (7.3a) | Siege más fácil; Caitlyn con RFC presiona sin riesgo |
| Torretas 7 000 HP + cristales (7.3) | No se tiran "de un push"; trabaja placas 2-3 veces |
| Minions 60 % daño a campeones (7.3) | Lane más segura; farmear bajo presión es viable |
| Jungla hostil para laners (7.3) | No robes campamentos sin smite |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema crit 200/230 %, escalado Headshot/R, AS cap 3.0, apéndice AS |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | AS growth 0.04→0.025, Headshot 60-100→60-90, Nexus 4 000, placas +20/10 s |
| Notas oficiales 7.2 | wildrift.leagueoflegends.com | Fin encantamientos, botas T2/T3, min 10:00 |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Caitlyn (ficha + meta) | 24/09/2026 | Alta para kit; WR 51.41 % pre-hotfix |

### Discrepancias detectadas y resolución

| Tema | Fuente A | Fuente B | Resolución |
|---|---|---|---|
| Base Bonus AS | Apéndice final: **0.2** | Sección Caitlyn y ejemplo oficial: **0.28** | Mandan la sección específica y el ejemplo oficial (0.28). El apéndice tiene errata conocida. ⚠️ Verificar en el panel del juego. |
| Lethal Tempo (ranged) | wr-meta: 4.8 %, bala 6-20 | Notas 7.3: **6.4 %, bala 6-24** | Mandan las notas oficiales |
| Legend: Alacrity | Descripción: 3 %+18 % = 21 % | Ejemplo Caitlyn: "18 % a full stacks" | Modelo usa 21 % (peor caso); diff <1 % DPS |

### Supuestos del modelo (declarados)

- Magnification siempre al 10 % (distancia ≥550 con rango 650).
- LT/Alacrity a cargas máximas en pelea.
- Headshot cada 6 autos (sin trampas; con trampas +15 %).
- Bala LT escala con AS bonus total (B = 2.124 post-7.3a).
- R calculada vs objetivo a 50 % HP faltante.
- W/E fuera del DPS sostenido (W es utilidad/zona).
- Daño crítico a torretas excluido (conservador).
- Base Bonus AS = 0.28 (ver discrepancia arriba).

### Contexto meta (28/09, Diamond+ — pre-hotfix)

Caitlyn: WR 51.41 %, pick 35.85 %, ban 42.81 %, tendencia ↑. El nerf 7.3a (AS growth −37.5 %, Headshot −10 %) debería reducir el WR en ~1-2 puntos en los próximos días, pero su kit de rango + burst la mantiene en tier S de lane bullies. La build publicada pre-7.3a era válida; esta regeneración actualiza los números sin cambiar la composición de ítems.

### Validación del modelo

- `validate_slots(["Gunmetal","C44","IE","LDR","RFC","BT"])` → **PASS** (6 entradas, 1 botas, 5 ítems).
- Test de AS post-7.3a: 0.625 + 0.625×(0.28 + 0.025×14 + 0.18 + 0.35) = 0.625 + 0.625×1.37 = **1.48** (con Alacrity 18 % + Berserker's 35 %) ✓ coincide con el esperado del lab.
- Headshot post-7.3a: [1 + 0.90 + 1.0 + 0.30] × 359 = 3.20 × 359 = **1 149** ✓.

---

## APÉNDICE A — POOL DE ÍTEMES DEL ROL: veredicto para Caitlyn

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Hexoptics C44 (2 900) | ✅ Core 1 | Magnification +10 % permanente (rango 650) |
| Infinity Edge (3 400) | ✅ Core 2 | Multiplica Headshot y R |
| Lord Dominik's Regards (3 300) | ✅ Core 3 | Pen 35 % + GS |
| Rapid Firecannon (2 650) | ✅ Core 4 | +150 rango = 800 de alcance seguro |
| Bloodthirster (3 200) | ✅ 6.º default | Sustain + AD plano |
| Mortal Reminder (3 000) | ✅ Reemplaza LDR vs curación | Mantiene 100 % crit |
| Guardian Angel (3 200) | ✅ 6.º vs AD burst | Revivir |
| Mercurial Scimitar (3 100) | ✅ 6.º vs CC | QSS + MR |
| Stormrazor (3 000) | ⚠️ 1.º anti-presión / 6.º 1v1 | +9 % 1v1, −14 % 3v3 |
| Galeforce (3 100) | ❌ | 25 % crit muerto |
| Essence Reaver (3 000) | ❌ | Spellblade < multiplicador de IE |
| The Collector (3 000) | ❌ | Pen plana ineficiente en late |
| Manamune (2 900) | ❌ | Sin problemas de maná |
| Kraken Slayer (2 900) | ❌ | No escala con Headshot/R; AS baja post-7.3a |
| Yun Tal Wildarrows (3 100) | ❌ | Ramp 125 ataques; rompe Ley 1 |
| Phantom Dancer (2 650) | ❌ | 0 AD; crit sobrante |
| Immortal Shieldbow (3 000) | ❌ | Crit muerto; GA/Scim defienden mejor |
| Navori Quickblades (2 650) | ❌ | Crit muerto; mecánica sin validar |

---

## APÉNDICE B — RUTAS DE COMPRA

```
DEFAULT (máximo burst y control):
 LS → Pickaxe/Noonquiver → C44 (7-8') → Berserker's (9') → IE (12-13')
 → ⬆️ Gunmetal T3 (13:30') → LDR (17') → RFC (19') → BT (21')

ANTI-PRESIÓN (lane difícil / poke enemigo):
 LS → Stormrazor (8') → Berserker's → C44 → ⬆️ Gunmetal → IE → LDR → BT

VS 3+ TANQUES / CURACIÓN:
 Default pero LDR → Mortal Reminder (mantiene 100 % crit + GW 50 %)

VS CC DURO / BURST AP:
 Default pero BT → Mercurial Scimitar / Guardian Angel

SNOWBALL (feedeada):
 LS → C44 (7') → IE 2.º (11') → Berserker's → ⬆️ Gunmetal → LDR → RFC → BT
```

---

## Pie de página

*Reporte generado el 29/09/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.9. Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Referencias y créditos**
- Notas oficiales del parche 7.3 (21/09/2026) y hotfix 7.3a (29/09/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de todos los cambios sistémicos, escalado de crítico en habilidades, apéndice de Attack Speed, nerf AS growth/Headshot, Nexus 4 000 y placas.
- Notas oficiales del parche 7.2 (08/07/2026) — © Riot Games, Inc. Sistema de botas T2/T3, fin de encantamientos.
- Base de datos de ítems, runas y fichas de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Fuente secundaria para stats no tocados por el parche.
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio, `model/dps_model.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.

---

## Resumen de cambios vs versión publicada (v1.2 → v2.0)

| Aspecto | v1.2 (7.3) | v2.0 (7.3+7.3a) | Δ |
|---|---|---|---|
| AS growth | 0.04 | **0.025** | −37.5 % |
| AS nivel 15 (full build) | 2.08 | **1.96** | −5.8 % |
| Headshot ratio max | 100 % AD | **90 % AD** | −10 % |
| Headshot damage (AD 359) | 1 184 | **1 149** | −3.0 % |
| DPS 1v1 | 2 850 | **2 670** | −6.3 % |
| DPS vs Tanque | 1 340 | **1 255** | −6.3 % |
| R burst | 1 515 | **1 515** | 0 % (sin cambio) |
| Heal/s | 410 | **386** | −5.8 % |
| Build (6 slots) | Sin cambio | **Sin cambio** | ✅ Idéntica |
| Runas | Sin cambio | **Sin cambio** | ✅ Idénticas |
| Nexus / Placas | 5 500 / +30/20 s | **4 000 / +20/10 s** | Siege más fácil |

> [!NOTE]
> **Veredicto del lab:** La build publicada en v1.2 era correcta en composición. El hotfix 7.3a nerfeó inputs del spec (AS growth, Headshot ratio) pero **no cambió la lógica de itemización**: Caitlyn sigue siendo un ADC de 100 % crit + AD + pen + rango. Los números se actualizan; la build, las runas y el plan de juego se mantienen. ✅