---
tags:
  - Barón
  - Jungla
  - Personalizado
version: 1.2
Status: Beta
champion: Cho'Gath
slug: chogath-titan-del-baron
role: jungla
variant: "titan-del-baron"
patch: "7.3"
archetype: "AP-Tank con escalado infinito"
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
**Rol principal:** Top (Baron Lane) / Jungla
**Arquetipo:** AP-Tank con escalado infinito
**Enfoque:** Maximizar HP bonus como stat compuesto

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (04/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Cho'Gath:** ninguno en 7.3a.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada (6 slots, Ley 0):** Armored Advance + Heartsteel + Rod of Ages + Amaranth's Twinguard + Gargoyle Stoneplate + Liandry's Torment — **sin cambios**.
> **Sistema (7.3a):** Smite burn vs monstruos: 30–198/s → **22–162/s** → Jungla early más lenta → Diana jungla: Nashor's 1.º aún más correcto; Shyvana/Volibear/Cho'Gath jungla: clear early −15-20 %
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 24/09/2026):**
> Win Rate 51.20 % | Pick Rate 12.60 % | Ban 38.00 % | Tendencia ↓1 | Rol: Top / Jungla.
> Señales: ⛔ Perma-ban

> [!DANGER]
> **Build titánica sacrifica ~35 % de DPS de habilidades puras** **a cambio de +112 % EHP en ventana de combate** (18 000 vs 8 500).
> El trade-off es deliberado: Cho'Gath gana partidas siendo inmatable, no siendo el mayor DPS.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Plated Steelcaps → ⬆️ Armored Advance** (min 10:00, MISMO slot) | 2 200 | +30 armor, +150 HP, Block 10 %, escudo físico 10-140 + 8 % HP máx |
| 2 | **Heartsteel** | 3 000 | +700 HP + proc 140 + 3.5 % HP máx + 15 % → HP permanente (stacking infinito) |
| 3 | **Rod of Ages** | 2 700 | +350 HP + 50 AP + 400 maná + growth temporal (10 stacks = +150 HP/+40 AP) |
| 4 | **Amaranth's Twinguard** | 3 200 | +300 HP + 50/50 resist + 5 stacks: +20 % tamaño + 30 % bonus resist + 20 % tenacidad |
| 5 | **Gargoyle Stoneplate** | 2 900 | +200 HP + 45/45 + activo: escudo 100 + 90 % HP bonus + tamaño gigante (CD 60) |
| 6 | **Liandry's Torment** (default) / **Mantle of the Twelfth Hour** (vs burst) | 3 000 / 2 550 | +300 HP + 70 AP + burn 2 % HP máx/s / +600 HP + Lifeline + 10 % tamaño |

> **Oro total: ~17 050 g** (con Liandry's) · HP ~6 500 · AP ~250 · Tamaño +165 % · R execute ~1 500 verdadero · EHP ventana ~18 000

### Tabla B — Ruta de compra cronológica

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Ruby Crystal (start) | 500 | 0:00 |
| 2 | Catalyst of Aeons (componente RoA) | 1 100 | ~3:30 |
| 3 | **Plated Steelcaps** | 2 300 | ~5:30 |
| 4 | Giant's Belt + componentes → **Heartsteel** | 5 300 | ~8:30 |
| 5 | Blasting Wand + Catalyst + maná → **Rod of Ages** | 8 000 | ~12:00 |
| 6 | ⬆️ **Armored Advance** (mismo slot, +1 000 g) | 9 000 | ~10:00+ |
| 7 | Giant's Belt + Chain Vest + Negatron → **Amaranth's Twinguard** | 12 200 | ~15:00 |
| 8 | Kindlegem + Chain Vest + Negatron → **Gargoyle Stoneplate** | 15 100 | ~18:00 |
| 9 | Haunting Guise + Blasting Wand → **Liandry's Torment** | 17 050 | ~21:00 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Grasp of Undying** (3.3 % HP máx daño + 1.3 % cura + 10 HP permanente cada 3 s) |
| Resolve 2 | **Demolish** (85 + 28 % HP máx a torres cada 3 golpes) |
| Resolve 3 | **Second Wind** (3 + 1.5 % HP faltante tras recibir daño) |
| Resolve 4 | **Overgrowth** (+3 HP por 3 minions; +3 % HP máx a 30 stacks) |
| Secundaria | **Revitalize** (+5-15 % curas/escudos) / **Axiom Arcanist** (+10 % R, −7 % CD con takedown) |
| Hechizos | **Flash + Ignite** (asegura Feast stacks) / Flash + Teleport (split) |
| Skills | **E → Q → W** (R en 5/9/13) |

### Resultado del modelo (nivel 15, 22 stacks Feast, AP 250, HP 6 500)

| Escenario | Valor |
|-----------|-----|
| **R execute (daño verdadero)** | **~1 500** |
| **E Vorpal Spikes (% HP máx por pico)** | **16.7 %** |
| **EHP en ventana (Twinguard + Gargoyle)** | **~18 000** |
| **vs Volibear (1v1 sostenido)** | ✅ Gana (sustain + execute) |
| **vs Dr. Mundo (1v1)** | ✅ Gana (con Ignite + Liandry's) |
| **Grasp por proc (6 500 HP)** | 214 mágico + 84 cura |
| **Demolish a torreta (6 500 HP)** | 1 905 físico |

> **Titular:** Con 22 stacks de Feast + Heartsteel + Twinguard max, Cho'Gath pasa de "tanque estándar" a **18 000 EHP efectivos en una ventana de 5 segundos** — el enemigo necesita 3 rotaciones completas de burst para bajarlo, tiempo en el que su R ya ejecutó al carry.

---

## 1. Supuestos específicos

- 22 stacks de Feast al late game: 6 de minions (cap) + 5 de campeones early + 11 de épicos/teamfights.
- Uptime de E: 75 % (3 ataques cada 4 s en pelea, CD rank 4).
- Twinguard a 5 stacks (5 s en combate) = +20 % tamaño + 30 % bonus resistencias.
- Gargoyle activo usado al inicio de teamfight (2.5 s de escudo + tamaño).
- R execute calculado vs target con 100 MR: daño verdadero ignora resistencias.
- AP de referencia: 250 (Liandry's 70 + RoA 50+40 stacks + base + runas adaptivas).
- Overgrowth a 30 stacks: +3 % HP máx adicional.

---

## 2. LEYES APLICADAS A CHO'GATH

### Ley 2 — Velocidad de ataque: irrelevante

Con AS base 0.625 y growth 0.008, Cho'Gath es uno de los campeones más lentos del juego. A nivel 15 con 0 ítems de AS:

```
AS = 0.625 × (1 + 0.28 + 0.008×14) = 0.625 × 1.392 = 0.87
```

### Ley 3 — Penetración mágica obligatoria

Tu daño es ~80 % mágico (Q, W, E, burn de Liandry's). Contra tanques con MR:

| MR enemigo | Sin pen | Con Cryptbloom (30 %) | Ganancia |
|---|---|---|---|
| 50 (squishy) | 0.667 | 0.769 | +15.3 % |
| 120 (fighter) | 0.455 | 0.581 | +27.9 % |
| 200 (tanque) | 0.333 | 0.455 | +36.5 % |
| 250 (Mundo stacking) | 0.286 | 0.400 | +40.0 % |

**Regla:** Cryptbloom como 6.º slot vs 2+ tanques con MR. Liandry's ya da Madness (+6 % tras 3 s) que compensa parcialmente.

### Ley 4 — Stats muertos y coste de oportunidad

| Ítem                      | Stat muerto en Cho'Gath                                  | Oro desperdiciado   | Veredicto |
| ------------------------- | -------------------------------------------------------- | ------------------- | --------- |
| Sunfire Aegis (2 900)     | Immolate 20 + 1.5 % HP/s ≈ 65 DPS vs ~180 de Liandry's   | ~2 900 g            | ❌         |
| Warmog's Armor (2 850)    | Regen fuera de combate inútil en fights                  | ~1 500 g            | ❌         |
| Force of Nature (2 800)   | Sin % damage reduction en 7.3; solo stats planos         | ~800 g vs Twinguard | ❌         |
| Sterak's Gage (3 200)     | +50 % AD base = ~63 AD (oro muerto); Lifeline < Gargoyle | ~1 800 g            | ❌         |
| Thornmail (2 700)         | Solo vs AD auto-attackers puros                          | Situacional         | ⚠️        |
| Cualquier ítem de crítico | 100 % muerto                                             | ~1 250 g por 25 %   | ❌         |

---

## 3. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | HP bonus | AP | DPS vs Volibear | DPS vs Mundo | Sustain | Nota |
|---|---|---|---|---|---|---|---|
| **Heartsteel** | 3 000 | +700 | 0 | 380 | 420 | ⭐⭐⭐⭐⭐ | Proc + stacking infinito |
| Rod of Ages (parcial) | 2 700 | +350 | +50 | 320 | 350 | ⭐⭐⭐ | Maná + scaling |
| Liandry's (parcial) | 3 000 | +300 | +70 | 410 | 480 | ⭐⭐ | Burn vs tanques |
| Iceborn Gauntlet | 3 000 | +300 | 0 | 290 | 310 | ⭐⭐⭐⭐ | Slow field + armor |

>**Veredicto:** **Heartsteel primero** en el 90 % de los matchups. Las razones:

**Excepción:** vs Dr. Mundo en lane, Liandry's primero por el burn de 2 % HP máx que contrarresta su regen. Pero incluso vs Mundo, Heartsteel gana post-2 ítems.

**Nota crítica:** Iceborn Gauntlet parece atractivo por el slow field, pero su Spellblade escala con AD base (126 a nivel 15 = ~126 de daño extra cada 1.5 s) — muy inferior al proc de Heartsteel (140 + 3.5 % HP = ~253 a 3 200 HP) que además da HP permanente.

---

## 4. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Plated → ⬆️ Armored Advance** | +30 armor + 150 HP + Block 10 % + escudo físico (10-140 + 8 % HP máx). Con 6 500 HP = escudo de ~660 cada 12 s. Esencial vs Volibear/AD fighters. |
| 1 | **Heartsteel** (3 000) | +700 HP + proc cada 20 s (140 + 3.5 % HP máx) + 15 % del daño como HP permanente. Bola de nieve infinita que alimenta R y E. |
| 2 | **Rod of Ages** (2 700) | +350 HP + 50 AP + 400 maná + growth temporal. A nivel 15 + 10 stacks = +150 HP + 300 maná + 40 AP extra. Sustain de maná + scaling. |
| 3 | **Amaranth's Twinguard** (3 200) | +300 HP + 50/50 resist + 5 stacks en combate = +20 % tamaño + 30 % bonus armor/MR + 20 % tenacidad. Capstone de la fantasía titánica. |
| 4 | **Gargoyle Stoneplate** (2 900) | +200 HP + 45/45 + activo: escudo = 100 + 90 % HP bonus. Con 6 500 HP = escudo de ~5 950 + tamaño gigante por 2.5 s. Ventana burst imparable. |
| 5 | **Liandry's Torment** (3 000) | +300 HP + 70 AP + burn 2 % HP máx/s + Madness (+6 % daño tras 3 s). Daño sostenido vs tanques. |

### Matriz del último slot (situacional)

| Situación | Ítem | Coste | Impacto medido |
|---|---|---|---|
| **Default (vs tanques)** | **Liandry's Torment** | 3 000 | +70 AP + burn 2 % HP + Madness. R execute sube a ~1 500 verdadero ✅ |
| vs 2+ tanques con MR stacking | Cryptbloom | 3 000 | +30 % pen mágica + 75 AP + 20 AH. +52 % daño vs Mundo con 250 MR ✅ |
| vs burst AP (Annie/Brand) | Mantle of the Twelfth Hour | 2 550 | +600 HP + Lifeline: +200-300 HP + 10 % tamaño + 20 % tenacidad + regen ⚠️ |
| vs AD pesados (Yasuo/Zed) | Frozen Heart | 2 550 | +80 armor + 400 maná + 20 AH + −25 % AS a enemigos en 650 u ⚠️ |
| Split push / siege | Iceborn Gauntlet | 3 000 | +300 HP + 50 armor + Spellblade slow field (crece con armor) ⚠️ |
| vs curación (Mundo/Soraka) | Morellonomicon | 2 650 | +75 AP + 300 HP + 50 % Grievous Wounds ⚠️ |

---
### Orden de habilidades

**E → Q → W** · R en 5/9/13.

- **E max primero:** más daño % HP máx + ancho de cono crece con stacks. Es tu waveclear y tu DPS sostenido.
- **Q segundo:** 245 + 100 % AP y knockup 1 s. Tu CC de engage y peel.
- **W último:** el silencio dura 1.4-2 s en todos los ranks; el daño base crece poco. Su valor es binario (silencia o no).

---

## 5. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (nivel 15, 22 stacks de Feast, AP 250, HP 6 500)

| Build | Oro | HP total | AP | Tamaño | R execute | E % HP | EHP ventana | vs Volibear | vs Mundo |
|---|---|---|---|---|---|---|---|---|---|
| **TITÁNICA (propuesta)** | 17 050 | 6 500 | 250 | +165 % | **1 500** | **16.7 %** | **18 000** | ✅ Gana | ✅ Gana |
| Comunidad (Heartsteel + Hollow Radiance + Mercury's) | 15 800 | 5 800 | 180 | +135 % | 1 280 | 15.2 % | 14 500 | ⚠️ Empate | ❌ Pierde |
| AP puro (Liandry's + Rabadon's + Cryptbloom) | 17 400 | 4 200 | 520 | +135 % | 1 360 | 13.8 % | 8 500 | ❌ Pierde | ✅ Gana |
| Tanque puro (Heartsteel + Gargoyle + Twinguard + Warmog's + Iceborn) | 17 150 | 7 800 | 0 | +155 % | 1 380 | 17.5 % | 22 000 | ✅ Gana | ❌ Pierde (sin pen) |

### Desglose multiplicativo de la diferencia (Titánica vs Comunidad)

| Factor | Contribución |
|---|---|
| +700 HP (RoA + Liandry's vs Hollow Radiance) → +70 daño de R | +5.5 % R execute |
| +70 AP (Liandry's + RoA stacks) → +35 R + 21 E por pico | +12 % daño mixto |
| +30 % bonus resistencias (Twinguard max stacks) | +30 % EHP efectivo |
| +20 % tamaño (Twinguard) → cono E más ancho | +1 target promedio en teamfight |
| Escudo Gargoyle (90 % HP bonus ≈ 5 950) | Ventana burst de 2.5 s imparable |
| **Neto: EHP ventana** | **+24 %** (18 000 vs 14 500) |

---

## 6. PLAN DE JUEGO

### Early (niveles 1-5, 0:00 – 8:00)

- **Start:** Ruby Crystal (500 g) + poción. Primer recall: Catalyst of Aeons (1 100 g) si vas por RoA, o Ruby Crystal + Boots of Speed si necesitas movilidad.
- **Lvl 1-2:** E para farmear + pokear. Q para asegurar CS o trades. No uses W (gasta mucho maná early).
- **Lvl 3-5:** busca trades cortos con E + Q + auto. Tu pasiva Carnivore te da sustain al matar minions (18 HP + 4.35 maná por kill, ×2 vs campeón).
- **Objetivo:** 6 stacks de Feast de minions (cap) + 1-2 de campeones si puedes. No mueras — cada muerte retrasa tu escalado.
- **Placas:** desde el min 1, trabaja placas con E + auto. Demolish (85 + 28 % HP) las revienta en 2-3 golpes.

### Mid (niveles 6-11, 8:00 – 15:00)

- **Pico 1 (Heartsteel + botas T3, ~min 10-11):** tu R ejecuta ~720 verdadero. Busca kills con Q + E + R + Ignite.
- **Min 10:00:** ⬆️ Armored Advance (mismo slot, +1 000 g).
- **Épicos:** PRIORIZA DRAGONES/HERALD aunque pierdas CS. Cada épico = 1 stack de Feast SIN CAP = +160 HP + 6 % tamaño + daño de R.
- **Rotaciones:** con tu Q (knockup 1 s) + W (silencio 2 s), eres un ganker brutal. Rota a mid si ves oportunidad.
- **Cristales:** cada ~50 s la torreta acumula cristales. Un auto (200 de rango) los detona: hasta ~1 323 verdadero gratis.

### Late (niveles 12-15, 15:00+)

- **Pico 2 (Twinguard + Gargoyle, ~min 15-18):** eres literalmente imparable. En teamfights:
  - Entra con Q (knockup) + W (silencio)
  - Activa **Gargoyle** (escudo de ~6 000 + tamaño gigante)
  - **Twinguard** stackea (5 s = +20 % tamaño + 30 % resistencias)
  - Usa E en cono gigante (barre teamfights enteros)
  - Ejecuta con R al target más bajo de HP
- **Split push:** con Demolish + E + Q + 200 de rango (22 stacks), tomas torres más rápido que cualquier top laner. Si vienen 2 a por ti, tu R + Gargoyle te permiten sobrevivir hasta que llegue tu equipo.
- **Baron Nashor:** tu R ejecuta Baron con ~1 500 verdadero. Con Smite (1 400 verdadero) + R = 2 900 verdadero seguro. Nadie te roba Baron.

---

## 7. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Apéndice AS (0.625/0.28/0.008), Smite escalado con stats, torretas 7 000 HP, Crystalline Overgrowth, épicos |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Botas T2/T3 y regla del min 10:00, fin de encantamientos |
| Notas 7.2C (buff Cho'Gath) | wildrift.leagueoflegends.com | E: 20/45/70/95 + 0.6 %/stack; R: CD 70/60/50, ratio 10 % |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta.com Cho'Gath (ficha + build + meta) | 24/09/2026 | Alta para kit (Q/W/E/R con valores completos); build popular = insumo |
| BD de 186 ítems 7.3 (items_7.3.csv) | 25/09/2026 | Verificación: Spirit Visage NO existe; stats de Heartsteel/Twinguard/Gargoyle/Mantle |
| Apéndice de escalado de tamaño (WR-LAB) | 25/09/2026 | 5 fuentes de tamaño confirmadas; interacciones Sterak/Mantle/Twinguard/Gargoyle |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|---|---|
| Tamaño de Gargoyle: notas dicen "+tamaño durante el activo" sin % | Modelado como +20 % (conservador, similar a Twinguard). **Verificar en juego** ⚠️ |
| Ancho del cono de E: "width increases with size" sin fórmula | Asumimos escala lineal con tamaño total. **Verificar en juego** ⚠️ |
| Stacks de Feast de épicos: ficha no especifica cap | Asumimos sin cap (confirmado por notas 7.3 de épicos más contestables) |
| Build comunidad (Hollow Radiance 2.º) vs modelo (Rod of Ages 2.º) | Gana el modelo: +70 AP + maná sustain + growth > Immolate de 65 DPS |

### Supuestos del modelo (declarados)

- 22 stacks de Feast al late game: 6 de minions (cap) + 5 de campeones early + 11 de épicos/teamfights.
- Uptime de E: 75 % (3 ataques cada 4 s en pelea, CD rank 4).
- Twinguard a 5 stacks (5 s en combate) = +20 % tamaño + 30 % bonus resistencias.
- Gargoyle activo usado al inicio de teamfight (2.5 s de escudo + tamaño).
- Mantle Lifeline: activado al caer bajo 30 % HP (ventana reactiva).
- R execute calculado vs target con 100 MR: daño verdadero ignora resistencias.
- AP de referencia 250: Liandry's 70 + RoA 90 (50+40 stacks) + runas/base ~90.
- Overgrowth a 30 stacks: +3 % HP máx adicional (~195 HP).

### Contexto meta (24/09, Diamond+)

**Matchups específicos:**
- vs Dr. Mundo (WR 52.3 %): tu R lo ejecuta antes que su R lo cure (con Ignite + Liandry's burn). Ganas ~60 % de las lanes.
- vs Volibear (WR 49.4 %): tu sustain + R execute > su burst + shield. Ganas ~55 % de las lanes.
- vs Camille (WR 48.7 %): cuidado con su true damage de Q2. Compra Armored Advance temprano.
- vs Darius (WR 47.9 %): su R ejecuta con más HP que tú. Juega seguro hasta Heartsteel.

---

## APÉNDICE A — POOL DE ÍTEMES PARA CHO'GATH: veredicto

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Heartsteel (3 000) | ✅ Core 1 | Stacking infinito de HP + proc + alimenta R |
| Rod of Ages (2 700) | ✅ Core 2 | HP + AP + maná + growth temporal |
| Amaranth's Twinguard (3 200) | ✅ Core 3 | Capstone de tamaño + 30 % bonus resist |
| Gargoyle Stoneplate (2 900) | ✅ Core 4 | Ventana burst: escudo 90 % HP bonus + tamaño |
| Liandry's Torment (3 000) | ✅ Core 5 (default) | Burn 2 % HP + Madness vs tanques |
| Armored Advance T3 (2 200) | ✅ Botas default | Block + escudo físico vs AD |
| Chainlaced Crushers T3 (2 200) | ✅ Botas vs AP | +30 MR + 30 % tenacidad |
| Cryptbloom (3 000) | ⚠️ Situacional | vs 2+ tanques con MR stacking (+30 % pen) |
| Mantle of the Twelfth Hour (2 550) | ⚠️ Situacional | vs burst AP + Lifeline + 10 % tamaño |
| Iceborn Gauntlet (3 000) | ⚠️ Situacional | Split push + slow field |
| Morellonomicon (2 650) | ⚠️ Situacional | vs curación (Mundo/Soraka) |
| Frozen Heart (2 550) | ⚠️ Situacional | vs AD pesados + −25 % AS aura |
| Sunfire Aegis (2 900) | ❌ | Immolate 65 DPS < Liandry's 180 DPS |
| Warmog's Armor (2 850) | ❌ | Regen fuera de combate no ayuda en fights |
| Force of Nature (2 800) | ❌ | Sin % damage reduction en 7.3 |
| Sterak's Gage (3 200) | ❌ | +50 % AD base = ~63 AD (oro muerto) |
| Spirit Visage | ❌ | **No existe en 7.3** |
| Thornmail (2 700) | ❌ | Solo vs AD puros; Armored Advance cubre |
| Cualquier ítem de crítico | ❌ | 100 % stat muerto |

---

## APÉNDICE B — RUTAS DE COMPRA

```
DEFAULT (vs la mayoría de top laners):
Ruby Crystal → Catalyst (3:30) → Plated Steelcaps (5:30) → Heartsteel (8:30)
→ ⬆️ Armored Advance (10:00) → Rod of Ages (12:00) → Twinguard (15:00)
→ Gargoyle (18:00) → Liandry's (21:00)

VS DR. MUNDO (tanque regenerativo):
Ruby Crystal → Liandry's 1.º (8:00) → Plated → Heartsteel → ⬆️ Armored
→ Twinguard → Gargoyle → Morellonomicon (6.º, 50 % GW)
Clave: Liandry's burn + Morellonomicon GW contrarrestan su regen.

VS VOLIBEAR (burst AD + shield):
Ruby Crystal → Plated (early, 4:30) → Heartsteel → ⬆️ Armored
→ RoA → Twinguard → Gargoyle → Frozen Heart (6.º, −25 % AS)
Clave: Armored Advance temprano + Frozen Heart reduce su AS.

VS AP BURST (Annie/Brand/Rumble):
Ruby Crystal → Catalyst → Mercury's Treads → Heartsteel → ⬆️ Chainlaced
→ RoA → Twinguard → Mantle (6.º, Lifeline + 10 % tamaño) → Gargoyle
Clave: Chainlaced + Mantle + Gargoyle = 3 capas de defensa vs burst.

SPLIT PUSH / SIEGE:
Ruby Crystal → Heartsteel → Plated → ⬆️ Armored
→ Iceborn Gauntlet → Twinguard → Gargoyle → Liandry's
Clave: Iceborn slow + Demolish + E cono gigante = presión de mapa.

JUNGLA (variante):
Ruby Crystal → Heartsteel (primer clear) → Plated → ⬆️ Armored
→ RoA → Twinguard → Gargoyle → Liandry's
Clave: Smite 7.3 escala +3 % HP bonus; Feast stacks de épicos sin cap.
```

---

## Pie de página

*Reporte generado el 28/09/2026 con datos del parche 7.3 (21/09/2026). WR-LAB v1.4. Las cifras de EHP, R execute y DPS son estimaciones pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3a/b (hotfix), regenerar datos antes de publicar.*

**Referencias y créditos**
- Notas oficiales del parche 7.3 (21/09/2026), 7.2 (08/07/2026) y 7.2C (buff Cho'Gath) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria: apéndice de Attack Speed, sistema de botas T3, Smite escalado con stats, torretas 7 000 HP, Crystalline Overgrowth, cambios a épicos.
- Base de datos de ítems, runas y ficha de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Fuente secundaria: valores de Q/W/E/R con ratios, change history completo, build y meta.
- Modelo matemático, Leyes 0-7, apéndice de escalado de tamaño y validaciones — WR-LAB (laboratorio propio, construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.

---