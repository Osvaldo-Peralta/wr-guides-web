---
tags:
  - Jungla
  - Mid
version: 1.2
Status: Beta
champion: Diana
slug: diana-jungla
role: jungla
variant: "jungla"
patch: "7.3"
archetype: "AP assassin híbrido"
engine: rotacion
custom: false
generate: manual
mode: sr
published_at: "2026-09-29"
updated_at: "2026-10-04"
verification: ANOTAR
verified_patch: "7.3a"
---
**Fecha del análisis:** 29/09/2026
**Parche:** 7.3 (21-sep-2026)
**Rol principal:** Jungla
**Arquetipo:** AP assassin híbrido
**Enfoque:** Explotar el Lethal Tempo rehecho

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (04/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Diana:** ninguno en 7.3a.
> **Δ del modelo:** 0 % — ningún input del campeón/build cambió en el motor.
> **Build publicada (6 slots, Ley 0):** Spellslinger's Shoes + Nashor's Tooth + Dusk and Dawn + Rabadon's Deathcap + Zhonya's Hourglass + Cryptbloom — **sin cambios**.
> **Sistema (7.3a):** Smite burn vs monstruos: 30–198/s → **22–162/s** → Jungla early más lenta → Diana jungla: Nashor's 1.º aún más correcto; Shyvana/Volibear/Cho'Gath jungla: clear early −15-20 %
> **Nota del lab (diff 7.3a):** Smite burn −18 % → clear early más lento (refuerza Nashor's 1.º en jungla) → Anotado
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 24/09/2026):**
> Win Rate 50.82 % | Pick Rate 1.90 % | Ban 0.29 % | Tendencia ↓12 | Rol: Jungla.
> Diana está débil en mid (47.98 % WR); **jungla es su rol viable y óptimo en 7.3**.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (JUNGLA)
| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Boots of Mana → ⬆️ Spellslinger's Shoes** (min 10:00, MISMO slot) | 2 200 | 35 AP + 18 pen plana + 8 % pen + Big Bully (clear) |
| 2 | **Nashor's Tooth** | 2 900 | 80 AP + 50 % AS + Gnaw (100 % vs monstruos) |
| 3 | **Dusk and Dawn** | 3 100 | Spellblade + cura (10 % AP + 3 % HP) + on-hit extra |
| 4 | **Rabadon's Deathcap** | 3 400 | 130 AP — multiplica proc cada-3-golpe, W y R |
| 5 | **Zhonya's Hourglass** | 3 300 | 110 AP + stasis — entra con R y sobrevive el burst |
| 6 | **Cryptbloom** (default) / **Void Staff** | 3 000 | 30 % pen + 20 AH + nova de cura / 40 % pen + 95 AP |

> **Oro total: 17 900 g** · AP 490 · AS 2.22 (Moonsilver incluido) · Haste 55 · Pen 18+8 % y 30 % · DPS sostenido **971** · burst combo **1 792**

### Tabla B — Ruta de compra cronológica
| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Amplifying Tome (start; componente de Nashor's) | 500 | 0:00 |
| 2 | Recurve + Blasting Wand + Fiendish Codex → **Nashor's Tooth** | 3 400 | ~7:00 (1er clear) |
| 3 | **Boots of Mana** | 4 600 | ~8:30 |
| 4 | Sheen + Phage + 800 → **Dusk and Dawn** | 7 700 | ~10:30 |
| 5 | ⬆️ **Spellslinger's Shoes** (mismo slot, +1 000 g) | 8 700 | ~11:30 (post 10:00) |
| 6 | Needlessly Large Rod + 700 → **Rabadon's Deathcap** | 12 100 | ~14:00 |
| 7 | Seeker's Armguard + Blasting Wand → **Zhonya's Hourglass** | 15 400 | ~16:30 |
| 8 | Void Amethyst + Fiendish Codex + Tome → **Cryptbloom** | 17 900 | ~19:00 |

### Runas · Hechizos · Habilidades
| Categoría | Elección |
|-----------|----------|
| Keystone | **Lethal Tempo** (971 DPS vs 873 Empowerment vs 805 Conqueror) |
| Domination | **Sudden Impact** (su E es dash → 15-65 verdadero + 10 % MS por engage) |
| Precisión | **Legend: Alacrity** (+21 % AS → más procs cada-3-golpe y bala LT más gorda) |
| Resolve/Sorcery | **Nullifying Orb** (divea) / **Transcendence** (rotación) |
| Hechizos | **Smite + Flash** |
| Skills | **Q → W → E** (R en 5/9/13) |

### Resultado del modelo (nivel 15, fight 10 s, LT full, vs 80 MR)
| Escenario | Valor |
|-----------|-----|
| **DPS sostenido (10 s)** | **971** |
| **Burst combo completo** (R+Q+E×2+W×3) | **1 792** |
| **Vs 180 MR** (variante Void Staff) | **515** (vs 460 de la build comunidad) |
| Community (Empowerment, D1) | 748 sostenido / 1 865 burst |

> **Titular:** Lethal Tempo + Nashor's supera a la build de comunidad (Empowerment + Orb) en **+30 % de DPS sostenido** manteniendo burst comparable. Diana es la mejor usuaria accidental del LT rehecho y el Smite con AP.

---

## 1. LEYES APLICADAS A DIANA

### Ley 1b — "Crítico de habilidades": Infinity Orb es condicional
Orb solo rinde a objetivos <40 % HP (umbral 7.3). En el modelo sostenido es dead stat ~60 % del tiempo → por eso la ruta Nashor's le gana en DPS real aunque la comunidad prefiera Orb. 
>_Orb queda para la **variante one-shot**._

### Ley 3 — Penetración mágica
| MR enemigo | Sin pen | Spellslinger's (18+8 %) | + Cryptbloom (30 %) | + Void Staff (40 %) |
|---|---|---|---|---|
| 80 (squishy) | 0.556 | 0.658 | 0.781* | — |
| 180 (stacking) | 0.357 | 0.446 | 0.562 | **0.617** |

\*Modelo conservador: la pen % de dos ítems no se suma (usa el máximo). Regla: **Cryptbloom default; Void Staff con 2+ enemigos en 150+ MR**.

### Ley 4 — Stats muertos
| Ítem | Stat muerto en Diana | Nota |
|---|---|---|
| Infinity Orb (core comunidad) | ~60 % del tiempo (solo <40 % HP) | Variante burst sí lo aprovecha |
| Malignance | Maná (Diana no lo gasta tanto) | Solo por el haste de R |
| Dusk and Dawn | AD de su spellblade (75 % AD BASE = 77) | La cura y el on-hit extra compensan |

### Ley 5-6 — Eficiencia y timing
Nashor's 2 900 g (80 AP + 50 % AS + Gnaw) es el ítem de mayor densidad para ella. **Nashor's primero en jungla** (clear: Gnaw 100 % vs monstruos + Smite +12 % AP). D&D segundo para skirmishes.

---

## 2. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Rol | Justificación |
|---|---|---|
| **Nashor's Tooth** (2 900) | ✅ Jungla | Clear más rápido (Gnaw on-hit 15+20 % AP al 100 % vs monstruos) + AS que alimenta LT desde el primer clear. |
| **Dusk and Dawn** (3 100) | ⚠️ Mid | Spellblade + cura por proc = trades ganados, pero clear inicial más lento que Nashor's. |
| Hextech Rocketbelt (2 700) | ❌ | Dash duplicado (ya tiene E) y stats diluidos. |

**Veredicto:** Nashor's primero SIEMPRE en jungla. El componente **Recurve Bow** (900) + **Fiendish Codex** (900) asegura que el AS y el Haste estén online antes de completar el ítem.

---

## 3. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Boots of Mana → ⬆️ Spellslinger's** | 18 pen plana + 8 % + 35 AP + Big Bully (clear/push). |
| 1 | **Nashor's Tooth** | 80 AP/50 % AS/Gnaw — techo de DPS sostenido (971) y clear de jungla óptimo. |
| 2 | **Dusk and Dawn** | Spellblade+cura+on-hit extra: el ítem que más sube su suelo en skirmishes. |
| 3 | **Rabadon's Deathcap** | 130 AP: proc cada-3-golpe pasa a 310, R a ~790, escudos W a 306+. |
| 4 | **Zhonya's Hourglass** | 110 AP + stasis: Diana entra con R al centro; sin Zhonya's muere antes del segundo combo. |
| 5 | **Cryptbloom** | 30 % pen + 20 AH + nova de cura post-kill (snowball de jungla). |

### Matriz del último slot (situacional)
| Situación | Ítem | Coste | Impacto medido |
|---|---|---|---|
| **Default** | **Cryptbloom** | 3 000 | 971 DPS · pen 30 % · nova de cura |
| 2+ enemigos con 150+ MR | **Void Staff** | 3 000 | 515 vs 180 MR (vs 460) |
| Comp de one-shot (vs Yuumi-carry) | **Infinity Orb** | 3 100 | burst 2 152 |
| Vs mucho heal | **Morellonomicon** | 2 650 | GW 50 % |
| Kiteo/haste extremo | **Cosmic Drive** | 3 000 | 25 AH + 70 AP + MS |

### RECHAZADOS (con motivo numérico)
| Ítem | Motivo del rechazo |
|---|---|
| Empowerment (keystone comunidad) | 873 DPS < 971 de LT con la misma build |
| Conqueror | 805 DPS; su omnivamp 9 % no compensa la falta de AS |
| Luden's como core | Sin AS → no alimenta Moonsilver/LT; sostenido 748 |
| Liandry's / Riftmaker | Combate prolongado de fighter; Diana jungla vive de ventanas y burst |

---

## 4. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Lethal Tempo (rehecho 7.3)
- Bala con B ≈ 220 %: 24 × (1 + 0.0067×220) = **~59 por golpe** × AS 2.22 ≈ **+132 DPS**.
- +38.4 % AS acelera procs cada-3-golpe (50 % AP) y el spellblade de D&D.
- Medido: **971 (LT) vs 873 (Empowerment) vs 805 (Conqueror)**.
**Alternativas:** *Electrocute* para one-shot de squishies (burst puro, no modelado).

### Secundarias
| Slot | Runa | Valor estimado |
|---|---|---|
| Domination | **Sudden Impact** | 15-65 verdadero por E-dash + 10 % MS (engage constante) |
| Precisión | **Legend: Alacrity** | +21 % AS → +procs y +bala LT |
| Resolve/Sorcery | **Nullifying Orb** / **Transcendence** | Anti-burst AP (divea) / más rotación |

### Hechizos
**Smite + Flash**. Smite verdadero +12 % AP en 7.3. Con 490 AP full build, tu Smite gana ~58 de daño verdadero extra, asegurando objetivos contra el jungla enemigo.

### Orden de habilidades
**Q → W → E** · R en 5/9/13.
- **Q max:** 195 + 70 % AP y Moonlight (reset de E) — tu daño y movilidad.
- **W segunda:** 3 orbes + escudo doble (306+ a full AP) — sustain de clear y trades.
- **E última:** el reset ya la hace spammable; el daño base crece poco.

---

## 5. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (nivel 15, fight 10 s vs 80 MR)
| Build | Keystone | Oro | AP | AS | DPS | Burst |
|---|---|---|---|---|---|---|
| **D2 Nashor híbrida (propuesta)** | **LT** | 17 900 | 490 | 2.22 | **971** | 1 792 |
| D1 Comunidad (D&D, Orb, Zhonya, Rabadon, Luden's) | Empowerment | 17 900 | 545 | 1.47 | 748 | 1 865 |
| D3 Burst puro (Luden's, Rabadon, Orb, Stormsurge, Zhonya) | LT | 17 600 | 575 | 1.74 | 655 | **2 152** |
| D4 Anti-tanque (+Void Staff) | LT | 18 000 | 505 | 1.88 | 762* | 1 933 |
| D2 con Conqueror | Conq | 17 900 | 490 | 1.81 | 805 | 1 792 |

\* vs 80 MR; **vs 180 MR: D4 = 515, D1 = 460.**

### Desglose multiplicativo de la diferencia (D2-LT vs D1-Empowerment)
| Factor | Contribución |
|---|---|
| AS 2.22 vs 1.47 (Nashor's + LT + Alacrity) → más procs cada-3-golpe y bala | +51 % de autos híbridos |
| Bala LT (~132 DPS) vs proc Empowerment (~66 DPS promedio) | +66 DPS |
| Amp 8 % de Empowerment sobre base menor | −46 DPS netos vs lo anterior |
| **Neto sostenido** | **+30 %** |

---

## 6. PLAN DE JUEGO

### Early (0:00 – 8:00)
- **Clear:** Q al 1, W al 2 (escudo vs campamento), E al 3. Nashor's 1.º → clear con Gnaw al 100 % vs monstruos.
- **Nivel 3:** gank con Q→E (reset)→W→E — doble dash si la Q conecta. Sin R tu engage es E+Flash.
- **Smite 7.3:** verdadero 600 (+12 % AP) → con 140 AP temprano vale ~617; upgrades en 8/20 cargas (1 000/1 400).

### Mid (8:00 – 15:00)
- **Pico Nashor's + D&D + Spellslinger's (~11-12 min):** ganas 1v1 vs cualquier jungla AP.
- **Min 10:00:** ⬆️ Spellslinger's Shoes — Big Bully acelera clear y push.
- **Objetivos:** tu R no existe aún para pelear dragón temprano — pelea ANTES con Q/E y guarda smite upgradeado.

### Late (15:00+)
- **Teamfight:** R desde niebla → pull → combo (Q-E-W-E) → **Zhonya's** si te focusean → el equipo limpia. TU R ES EL ENGAGE: combínala con Malphite/Cho'Gath (doble knockup/pull = wipe).
- **Contra-ventana:** Chainlaced Crushers (30 % tenacidad) y Nullifying Orb enemigo reducen tu burst → flanquea y espera cooldowns antes de R.
- **Splitpush:** Q+autos con Nashor's tiran torretas rápido; cristales se detonan con un auto post-E.

### Reglas del parche que cambian el macro
| Regla | Impacto |
|---|---|
| Smite +12 % AP | Ítems AP = control de objetivos |
| Monstruos pegan % vida actual | Clear con escudo W activo; no tankees Gromp sin W |
| Torretas 7 000 HP | Diana no es sieger — rota tras kill, no empujes sola |

---

## 7. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)
| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 | 25/09/2026 | Apéndice AS (0.694/0.15/0.008), LT rehecho, Nashor's 7.3, Smite +12 % AP |
| Notas oficiales 7.2 | 25/09/2026 | Rehecho de pen mágica (Void Staff 40 %, Cryptbloom 30 %), Spellslinger's T3, Dusk and Dawn |

### Fuentes secundarias
| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta Diana (ficha + build + meta) | 25/09/2026 | Alta para kit; build popular (Empowerment+Orb) = insumo que el modelo MEJORA |

### Discrepancias detectadas y resolución
| Tema | Resolución |
|---|---|
| Keystone: comunidad Empowerment vs modelo LT | Gana LT (971 vs 873) — documentado en §8 |
| Void Staff ausente en wr-meta | Existe (notas 7.2: 95 AP/40 % pen/3 000 g) — incluido desde fuente oficial |
| Moonsilver "30-100 %" | Escala exacta no publicada → 65 % efectivo sostenido (verificar en juego) |

---

## APÉNDICE A — POOL DE ÍTEMES AP: veredicto para Diana Jungla

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Nashor's Tooth (2 900) | ✅ Core jungla-1 | 80 AP + 50 % AS + Gnaw — techo sostenido y clear |
| Dusk and Dawn (3 100) | ✅ Core jungla-2 | Spellblade + cura + on-hit extra |
| Rabadon's Deathcap (3 400) | ✅ Core | Multiplica proc/W/R |
| Zhonya's Hourglass (3 300) | ✅ Core | Stasis post-R obligatorio |
| Cryptbloom (3 000) | ✅ Default pen | 30 % + 20 AH + nova |
| Void Staff (3 000) | ✅ Vs MR stacking | 40 % + 95 AP |
| Spellslinger's Shoes (2 200) | ✅ Botas | Pen plana + Big Bully |
| Infinity Orb (3 100) | ⚠️ Variante burst | Solo <40 % HP (umbral 7.3) |
| Luden's Echo (2 800) | ⚠️ Variante burst | Single-target en 7.3 |
| Stormsurge (2 800) | ⚠️ Variante burst | Squall + MS |
| Morellonomicon (2 650) | ⚠️ Vs heal | GW |
| Cosmic Drive (3 000) | ⚠️ Kiteo | 25 AH + MS |
| Malignance (2 700) | ⚠️ Mid greedy | Haste de R; maná muerto |
| Liandry's / Riftmaker (3 000/3 100) | ❌ | Combate largo de fighter |
| Hextech Rocketbelt (2 700) | ❌ | Dash redundante con E |
| Banshee's Veil (3 000) | ❌ salvo CC extremo | Zhonya's cubre mejor |

---

## APÉNDICE B — RUTAS DE COMPRA

```text
JUNGLA DEFAULT:
Tome → Nashor's (primer clear completo, ~7') → Boots of Mana → D&D → ⬆️ Spellslinger's
→ Rabadon's → Zhonya's → Cryptbloom

MID DEFAULT (si te fuerzan mid):
Tome → D&D (8') → Boots of Mana (9:30) → Nashor's (11:30) → ⬆️ Spellslinger's (12')
→ Rabadon's (15') → Zhonya's (17:30) → Cryptbloom (20')

ONE-SHOT (vs squishies/Yuumi-carry):
Spellslinger's → Luden's → Rabadon's → Infinity Orb → Stormsurge → Zhonya's
(burst 2 152; sostenido −39 %)

VS MR STACKING (2+ en 150+):
Default pero Cryptbloom → Void Staff

VS AD (Zed/Yasuo mid / Kha'Zix jungla):
D&D → Zhonya's 2.º (anticipado) → Nashor's → Rabadon's → Cryptbloom → Seeker's componente temprano
```

---

## Pie de página
*Reporte generado el 29/09/2026 con datos del parche 7.3 (21/09/2026). WR-LAB v1.4. Las cifras de DPS son mitigadas contra los objetivos estándar declarados (80 MR squishy · 180 MR stacking) y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3a/b (hotfix), regenerar datos antes de publicar.*

**Referencias y créditos**
- Notas oficiales del parche 7.3 (21/09/2026) y 7.2 (08/07/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria: apéndice de Attack Speed, Lethal Tempo rehecho, Nashor's/Dusk and Dawn 7.3, sistema de penetración mágica, Smite +12 % AP, Void Staff.
- Base de datos de ítems, runas y ficha de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Fuente secundaria: valores de Moonsilver/Q/W/E/R, build y meta.
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.