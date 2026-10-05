---
tags:
  - Mid
  - Jungla
version: 1.2
Status: Beta
champion: Diana
slug: diana-mid
role: mid
variant: "mid"
patch: "7.3"
archetype: "AP Assassin híbrido"
engine: rotacion
custom: false
generate: manual
mode: sr
published_at: "2026-09-29"
updated_at: "2026-10-04"
verification: SIN_IMPACTO
verified_patch: "7.3a"
---
**Fecha del análisis:** 29/09/2026
**Parche:** 7.3 (21-sep-2026)
**Rol principal:** Mid Lane
**Arquetipo:** AP Assassin híbrido
**Enfoque:** Mitigar la vulnerabilidad estructural de Diana en Mid

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ SIN IMPACTO Verificación automática (04/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Diana:** ninguno en 7.3a.
> **Δ del modelo:** 0 % — ningún input del campeón/build cambió en el motor.
> **Build publicada (6 slots, Ley 0):** Spellslinger's Shoes + Dusk and Dawn + Nashor's Tooth + Rabadon's Deathcap + Zhonya's Hourglass + Infinity Orb — **sin cambios**.
> **Nota del lab (diff 7.3a):** Smite burn −18 % → clear early más lento (refuerza Nashor's 1.º en jungla) → Anotado
> **Veredicto:** ✅ SIN IMPACTO — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 24/09/2026):**
> Win Rate 47.98 % | Pick Rate 1.12 % | Ban 0.29 % | Tendencia ↓ 2 (🧊 Falling) | Rol: Mid.
> Diana está por debajo del promedio en Mid debido a su corto rango y dependencia de conectar la Q para reiniciar la E.

> [!TIP]
> **Variante Anti-Magos/Poke:** Si la lane es contra Syndra, Orianna o Twisted Fate, cambia *Nashor's Tooth* por **Horizon Focus** o **Cryptbloom** como segundo ítem, y lleva *Nullifying Orb* + *Bone Plating* para anular su burst inicial.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL
| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Boots of Mana → ⬆️ Spellslinger's Shoes** (min 10:00, MISMO slot) | 2 200 | 35 AP + 18 pen plana + 8 % pen + Big Bully (waveclear) |
| 2 | **Dusk and Dawn** | 3 100 | Spellblade (push) + cura (sustain vs poke) + on-hit extra |
| 3 | **Nashor's Tooth** | 2 900 | 80 AP + 50 % AS + Gnaw (techo de DPS y waveclear) |
| 4 | **Rabadon's Deathcap** | 3 400 | 130 AP — multiplica proc cada-3-golpe, W y R |
| 5 | **Zhonya's Hourglass** | 3 300 | 110 AP + stasis — supervivencia post-R o vs burst AD |
| 6 | **Infinity Orb** (default) / **Cryptbloom** / **Void Staff** | 3 100 | Ejecución <40 % HP / Nova de cura / Pen vs MR stacking |

> **Oro total: 18 000 g** · AP 515 · AS 2.15 · Haste 55 · Pen 18+8 % y 15 % plana · DPS sostenido **945** · burst combo **1 850**

### Tabla B — Ruta de compra cronológica
| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Amplifying Tome + poción (start) | 500 | 0:00 |
| 2 | Sheen + Phage + 800 → **Dusk and Dawn** | 3 600 | ~8:00 |
| 3 | **Boots of Mana** | 4 800 | ~9:30 |
| 4 | Recurve + Blasting Wand + Fiendish Codex → **Nashor's Tooth** | 7 700 | ~11:30 |
| 5 | ⬆️ **Spellslinger's Shoes** (mismo slot, +1 000 g) | 8 700 | ~12:00 (post 10:00) |
| 6 | Needlessly Large Rod + 700 → **Rabadon's Deathcap** | 12 100 | ~15:00 |
| 7 | Seeker's Armguard + Blasting Wand → **Zhonya's Hourglass** | 15 400 | ~17:30 |
| 8 | Blasting Wand + Void Amethyst + 100 → **Infinity Orb** | 18 000 | ~20:00 |

### Runas · Hechizos · Habilidades
| Categoría | Elección |
|-----------|----------|
| Keystone | **Lethal Tempo** (945 DPS vs 810 Empowerment; sinergia con Moonsilver y Nashor's) |
| Domination | **Sudden Impact** (su E es dash → 15-65 verdadero + 10 % MS por engage) |
| Precisión | **Legend: Alacrity** (+21 % AS → más procs cada-3-golpe y bala LT más gorda) |
| Resolve | **Bone Plating** (anti-burst de magos/asesinos) / **Nullifying Orb** (vs poke AP) |
| Hechizos | **Flash + Barrier** (supervivencia vs poke/burst) o **Flash + Ignite** (kill pressure) |
| Skills | **Q → W → E** (R en 5/9/13) |

### 0.1 Resultado del modelo (nivel 15, fight 10 s, LT full, vs 80 MR)
| Escenario | Valor |
|-----------|-----|
| **DPS sostenido (10 s)** | **945** |
| **Burst combo completo** (Q-R-E-W + 3 autos) | **1 850** |
| **Vs 180 MR** (con Void Staff) | **530** |
| **Sustain por rotación** (Dusk and Dawn) | **~180 HP/s** en trades |

> **Titular:** Dusk and Dawn + Lethal Tempo supera a la build de comunidad (Empowerment + Luden's) en **+32 % de DPS sostenido** y otorga el sustain necesario para no ser expulsada de la lane por magos de control, manteniendo un burst capaz de borrar squishies con Infinity Orb.

---

## 1. LEYES APLICADAS A DIANA MID

### Ley 1b — "Crítico de habilidades": Infinity Orb es condicional
Orb solo rinde a objetivos <40 % HP (umbral 7.3). En el modelo sostenido es dead stat ~60 % del tiempo, pero en Mid **el burst inicial es la win-condition** contra magos squishies. Por eso se prioriza sobre Cryptbloom en la build por defecto para asegurar el 1v1.

### Ley 3 — Penetración mágica
| MR enemigo | Sin pen | Spellslinger's (18+8 %) | + Infinity Orb (15 plana) | + Void Staff (40 %) |
|---|---|---|---|---|
| 80 (squishy) | 0.556 | 0.658 | **0.812** | — |
| 180 (stacking) | 0.357 | 0.446 | 0.521 | **0.617** |

Regla: **Infinity Orb default para borrar midlaners; Void Staff con 2+ enemigos en 150+ MR.**

### Ley 4 — Stats muertos y supervivencia
En Mid, Diana recibe poke constante. **Dusk and Dawn** no tiene stats muertos para ella: el HP bonus alimenta la cura del Spellblade, el AS alimenta a Moonsilver, y el AP infla su escudo de W. Items como *Luden's Echo* carecen de AS y de sustain, lo que la obliga a recallar constantemente y perder CS y placas.

---

## 2. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Rol | Justificación |
|---|---|---|
| **Dusk and Dawn** (3 100) | Mid Core 1 | Spellblade (75 % AD base + 10 % AP) + cura por proc = trades ganados y sustain sin maná. Permite pushar para robar *Crystalline Overgrowth*. |
| **Nashor's Tooth** (2 900) | Jungla Core 1 | Clear más rápido, pero en Mid te deja expuesta al poke sin el escudo/cura de D&D. |
| **Luden's Echo** (2 800) | 3.º discordante | Echo es de un solo objetivo efectivo en 7.3; sin AS → no sinergiza con Moonsilver. |

**Veredicto:** Dusk and Dawn primero SIEMPRE en Mid. Es el único ítem que le permite sobrevivir la fase de líneas contra campeones como Syndra o Zed mientras mantiene presión de empuje.

---

## 3. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Boots of Mana → ⬆️ Spellslinger's** | 18 pen plana + 8 % + 35 AP + Big Bully (clear/push). Vital para asegurar CS bajo torre. |
| 1 | **Dusk and Dawn** | Spellblade+cura+on-hit extra: el ítem que más sube su suelo en lanes hostiles. |
| 2 | **Nashor's Tooth** | 80 AP/50 % AS/Gnaw — techo de DPS sostenido (945) y waveclear instantáneo. |
| 3 | **Rabadon's Deathcap** | 130 AP: proc cada-3-golpe pasa a 322, R a ~850, escudos W a 320+. |
| 4 | **Zhonya's Hourglass** | 110 AP + stasis: Diana entra con R al centro; sin Zhonya's muere antes del segundo combo. |
| 5 | **Infinity Orb** | 110 AP + 15 pen plana + Execute <40 % HP. Asegura que el combo Q-R-E-W borre al midlaner enemigo. |

### Matriz del último slot (situacional vs Counters de Mid)
| Situación / Counter | Ítem | Coste | Impacto medido |
|---|---|---|---|
| **Default (vs Squishies)** | **Infinity Orb** | 3 100 | Burst 1 850 · Execute <40 % HP |
| Vs 2+ Tanques / MR Stacking | **Void Staff** | 3 000 | 530 DPS vs 180 MR (vs 410 sin pen %) |
| Vs Asesinos AD (Zed, Yasuo, Talon) | **Zhonya's anticipado** (slot 3) | 3 300 | Stasis post-R o para esquivar R de Zed |
| Vs Magos de Poke (Syndra, Orianna) | **Cryptbloom** / **Banshee's Veil** | 3 000 | Bloqueo de habilidad / Nova de sustain |
| Kiteo extremo (vs Ahri, TF) | **Cosmic Drive** | 3 000 | 25 AH + 70 AP + MS para pegar tras R |

### RECHAZADOS (con motivo numérico)
| Ítem | Motivo del rechazo |
|---|---|
| Empowerment (keystone comunidad) | 810 DPS < 945 de LT con la misma build |
| Luden's como core | Sin AS → no alimenta Moonsilver/LT; sostenido 680 |
| Stormsurge core | Squall optimista; mejor en variante burst puro |
| Hextech Rocketbelt | Dash duplicado (ya tiene E) y stats diluidos |
| Riftmaker | Combate prolongado de fighter; Diana en Mid vive de ventanas de 3 segundos |

---

## 4. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Lethal Tempo (rehecho 7.3)
- Bala con B ≈ 220 %: 24 × (1 + 0.0067×220) = **~59 por golpe** × AS 2.22 ≈ **+132 DPS**.
- +38.4 % AS acelera procs cada-3-golpe (50 % AP) y el spellblade de D&D.
- Medido: **945 (LT) vs 810 (Empowerment) vs 760 (Electrocute en fights largas)**.
**Alternativas:** *Electrocute* solo si juegas 100 % a poke con Q y nunca te comprometes en all-ins; *First Strike* si la lane es pasiva y quieres oro extra para anticipar Zhonya's.

### Secundarias
| Slot | Runa | Valor estimado |
|---|---|---|
| Domination | **Sudden Impact** | 15-65 verdadero por E-dash + 10 % MS (engage constante) |
| Precisión | **Legend: Alacrity** | +21 % AS → +procs y +bala LT |
| Resolve | **Bone Plating** | **OBLIGATORIA** vs Zed/Syndra: reduce el burst inicial en 30-60 daño, evitando que te echen de lane al 30 % HP. |
| Resolve | **Nullifying Orb** | Escudo vs poke mágico constante (Orianna, Twisted Fate). |

### Hechizos
**Flash + Barrier** (recomendado para optimizar supervivencia vs burst mágico/físico y llegar al pico de 2 ítems). **Flash + Ignite** solo si tu jungla tiene CC temprano para garantizar el kill tras el nivel 3.

### Orden de habilidades
**Q → W → E** · R en 5/9/13.
- Q max: 195 + 70 % AP y Moonlight (reset de E) — tu daño y movilidad.
- W segunda: 3 orbes + escudo doble (320+ a full AP) — sustain de clear y trades.
- E última: el reset ya la hace spammable; el daño base crece poco.

---

## 5. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (nivel 15, fight 10 s vs 80 MR)
| Build | Keystone | Oro | AP | AS | DPS | Burst |
|---|---|---|---|---|---|---|
| **M2 Híbrida Supervivencia (propuesta)** | **LT** | 18 000 | 515 | 2.22 | **945** | 1 850 |
| M1 Comunidad (D&D, Orb, Zhonya, Rabadon, Luden's) | Empowerment | 18 000 | 545 | 1.47 | 680 | 1 865 |
| M3 Burst puro (Luden's, Rabadon, Orb, Stormsurge, Zhonya) | LT | 17 600 | 575 | 1.74 | 610 | **2 152** |
| M4 Anti-Tanque (+Void Staff) | LT | 18 000 | 505 | 1.88 | 720* | 1 933 |

\* vs 80 MR; **vs 180 MR: M4 = 530, M1 = 410.**

### Desglose multiplicativo (M2-LT vs M1-Empowerment)
| Factor | Contribución |
|---|---|
| AS 2.22 vs 1.47 (Nashor's + LT + Alacrity) → más procs cada-3-golpe y bala | +51 % de autos híbridos |
| Bala LT (~132 DPS) vs proc Empowerment (~66 DPS promedio) | +66 DPS |
| Sustain de D&D (permite stay en lane vs poke) | Invalorable en Mid |
| **Neto sostenido** | **+38 %** |

---

## 6. PLAN DE JUEGO (Optimizado para Meta Hostil)

### Early (0:00 – 8:00)
- **Nivel 1-2:** Empieza con Q. No intentes tradear cuerpo a cuerpo contra magos. Usa Q para farmear y aplicar *Moonlight* a los minions para empujar la ola.
- **Nivel 3:** Si el enemigo se acerca a tu ola, Q → E (dash) → W (escudo) → autoataque → retírate. El escudo de W mitigará el contraataque.
- **Gestión de Maná:** Diana sufre de maná temprano. No spamees Q si el enemigo está fuera de rango.
- **Placas de Torreta:** Empuja la ola al minuto 4:00. El *Spellblade* de Dusk and Dawn (cuando lo compres) y los cristales de *Crystalline Overgrowth* te darán oro extra sin necesidad de autoataques prolongados.

### Mid (8:00 – 15:00)
- **Pico D&D + Nashor's (~11-12 min):** Ahora tienes waveclear instantáneo y sustain. Empuja la ola y busca roamear a Bot Lane o invadir con tu jungla.
- **Min 10:00:** ⬆️ Spellslinger's Shoes — Big Bully acelera clear y push.
- **Objetivos:** Tu R no existe aún para pelear dragón temprano si no tienes prioridad. Usa tu push para forzar al midlaner enemigo a quedarse bajo torre mientras tu equipo toma el Heraldo.
- **Vs Asesinos AD (Zed/Yasuo):** Compra *Seeker's Armguard* (1 200 g) antes de completar Nashor's si estás bajo presión. La armadura y el stasis temprano son vitales.

### Late (15:00+)
- **Teamfight:** **NUNCA inicies tú sola.** Espera a que tu tanque (Malphite/Cho'Gath) o support (Karma) inicien.
- **El Combo:** R (carga máxima) → Q → E (reset) → W → Autoataques (Lethal Tempo).
- **Zhonya's:** Úsalo **inmediatamente** después de tu combo si te focusean, o para esquivar habilidades clave (R de Zed, R de Syndra).
- **Splitpush:** Con Nashor's y D&D, puedes tirar torretas en segundos. Si viene 1 a defenderte, lo matas. Si vienen 2, usas R para escapar o Zhonya's para que tu equipo tome Barón.

---

## 7. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)
| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 | 25/09/2026 | Apéndice AS (0.694/0.15/0.008), LT rehecho, Nashor's 7.3, Infinity Orb <40 % HP |
| Notas oficiales 7.2 | 25/09/2026 | Rehecho de pen mágica, Spellslinger's T3, Dusk and Dawn |

### Fuentes secundarias
| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta Diana (ficha + build + meta) | 25/09/2026 | Alta para kit; build popular (Empowerment+Orb) = insumo que el modelo MEJORA |

### Discrepancias detectadas y resolución
| Tema | Resolución |
|---|---|
| Keystone: comunidad Empowerment vs modelo LT | Gana LT (945 vs 680) — documentado en §8 |
| Void Staff ausente en wr-meta | Existe (notas 7.2: 95 AP/40 % pen/3 000 g) — incluido desde fuente oficial |
| Moonsilver "30-100 %" | Escala exacta no publicada → 65 % efectivo sostenido (verificar en juego) |

### Supuestos del modelo (declarados)
- Moonsilver 65 % sostenido / 100 % burst; proc cada-3-golpe = 65+50 % AP.
- % pen no aditiva entre ítems (conservador); autos vs 60 armadura fija.
- Squall de Stormsurge optimista (~4/10 s); Luden's 1/9 s.

### Contexto meta (24/09, Diamond+)
Mid 47.98 % (↓2, pick 1.12 %) — débil frente a magos de control y asesinos con rango.
Esta build está diseñada específicamente para **mitigar esa debilidad** mediante sustain (D&D), waveclear (Nashor's) y ejecución garantizada (Infinity Orb), permitiendo a Diana escalar hasta su pico de poder sin ser expulsada del carril.

---

## APÉNDICE A — POOL DE ÍTEMES AP: veredicto para Diana Mid

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Dusk and Dawn (3 100) | ✅ Core 1 | Sustain y Spellblade vitales en Mid |
| Nashor's Tooth (2 900) | ✅ Core 2 | Techo sostenido y waveclear |
| Rabadon's Deathcap (3 400) | ✅ Core | Multiplica proc/W/R |
| Zhonya's Hourglass (3 300) | ✅ Core | Stasis post-R obligatorio |
| Infinity Orb (3 100) | ✅ Default burst | Execute <40 % HP |
| Spellslinger's Shoes (2 200) | ✅ Botas | Pen plana + Big Bully |
| Void Staff (3 000) | ✅ Vs MR stacking | 40 % + 95 AP |
| Cryptbloom (3 000) | ⚠️ Vs Poke/Sustain | Nova de cura post-kill |
| Horizon Focus (2 700) | ⚠️ Vs Magos | +10 % daño a >600 de distancia (Q/R) |
| Banshee's Veil (3 000) | ⚠️ Vs CC duro | Bloqueo de habilidad |
| Luden's Echo (2 800) | ❌ | Sin AS, sin sustain |
| Hextech Rocketbelt (2 700) | ❌ | Dash redundante con E |
| Riftmaker (3 100) | ❌ | Combate largo de fighter, no assassin |

---

## APÉNDICE B — RUTAS DE COMPRA

**MID DEFAULT (Supervivencia y Escalado):**
Tome → D&D (8') → Boots of Mana (9:30) → Nashor's (11:30) → ⬆️ Spellslinger's (12')
→ Rabadon's (15') → Zhonya's (17:30) → Infinity Orb (20')

**VS ASESINOS AD (Zed, Yasuo, Talon):**
Tome → D&D → **Seeker's Armguard** (10') → Nashor's → ⬆️ Spellslinger's
→ **Zhonya's** (anticipado, 14') → Rabadon's → Infinity Orb

**VS MAGOS DE POKE (Syndra, Orianna, TF):**
Tome → D&D → **Nullifying Orb** (componente) → Nashor's → ⬆️ Spellslinger's
→ Rabadon's → **Cryptbloom** / **Banshee's Veil** → Zhonya's

**ONE-SHOT (Snowball temprano):**
D&D → Boots of Mana → **Infinity Orb** (11') → ⬆️ Spellslinger's
→ Rabadon's → Zhonya's → Nashor's (sacrifica waveclear por burst)

---

## Pie de página

*Reporte generado el 29/09/2026 con datos del parche 7.3 (21/09/2026). WR-LAB v1.4. Las cifras de DPS son mitigadas contra los objetivos estándar declarados (80 MR squishy · 180 MR stacking) y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3a/b (hotfix), regenerar datos antes de publicar.*

**Referencias y créditos**
- Notas oficiales del parche 7.3 (21/09/2026) y 7.2 (08/07/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria: apéndice de Attack Speed, Lethal Tempo rehecho, Nashor's/Dusk and Dawn 7.3, sistema de penetración mágica, Infinity Orb.
- Base de datos de ítems, runas y ficha de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Fuente secundaria: valores de Moonsilver/Q/W/E/R, build y meta.
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio, `model/dps_model.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.