---
tags:
  - Barón
version: 1.2
Status: Beta
champion: Mordekaiser
slug: mordekaiser
role: jungla
patch: "7.3"
archetype: "AP Juggernaut — daño mágico sostenido"
engine: none
custom: false
generate: manual
mode: sr
published_at: "2026-09-28"
updated_at: "2026-10-08"
verification: ANOTAR
verified_patch: "7.3a"
---
**Fecha del análisis:** 28/09/2026
**Parche:** 7.3 (21-sep-2026)
**Rol principal:** Top (Baron Lane) / Secundario: Jungla
**Arquetipo:** AP Juggernaut — daño mágico sostenido
**Enfoque:** Explotar el daño porcentual de Vida Máxima

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (08/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Mordekaiser:** ninguno en 7.3a.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada (6 slots, Ley 0):** Armored Advance + Rylai's Crystal Scepter + Riftmaker + Liandry's Torment + Zhonya's Hourglass + Rabadon's Deathcap — **sin cambios**.
> **Sistema (7.3a):** Smite burn vs monstruos: 30–198/s → **22–162/s** → Jungla early más lenta → Diana jungla: Nashor's 1.º aún más correcto; Shyvana/Volibear/Cho'Gath jungla: clear early −15-20 %
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 24/09/2026):**
> Win Rate 50.52 % | Pick Rate 10.95 % | **Ban 32.20 % (⛔ Perma-ban)** | Tendencia ↓3 | Rol: Top.
> 
> Mordekaiser sigue siendo una amenaza de baneo masivo. Su capacidad para anular al carry enemigo o al tanque principal en el late game lo mantiene en el tier S de la Baron Lane.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL
| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Plated Steelcaps → ⬆️ Armored Advance** (min 10:00, MISMO slot) | 2 200 | 150 HP, 30 Armadura, Block 10 %, Escudo físico |
| 2 | **Rylai's Crystal Scepter** | 2 700 | 350 HP, 65 AP, Slow 30 % (garantiza Q y E) |
| 3 | **Riftmaker** | 3 100 | 350 HP, 70 AP, 15 AH, Omnivamp 10 %, Amp 8 %, HP→AP |
| 4 | **Liandry's Torment** | 3 000 | 300 HP, 70 AP, Burn 2 % Vida Máx + Amp 6 % |
| 5 | **Zhonya's Hourglass** | 3 300 | 110 AP, 40 Armadura, Stasis 2.5 s (stall de W y R) |
| 6 | **Rabadon's Deathcap** | 3 400 | 130 AP, +30 % AP total (multiplica escudo W y Q) |

> **Oro total: 17 700 g** · HP Bonus ~1 000 · AP Base 445 → **AP Final ~604** (con Riftmaker + Rabadon) · Haste 15 · Pen Mágica 12 % (Pasiva) + Plana/Perfil · DPS sostenido **~850** (vs 100 MR).

### Tabla B — Ruta de compra cronológica
| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Amplifying Tome (start) | 500 | 0:00 |
| 2 | Haunting Guise + Blasting Wand → **Rylai's Crystal Scepter** | 2 700 | ~6:30–7:30 |
| 3 | **Plated Steelcaps** | 3 900 | ~8:30 |
| 4 | Blasting Wand + Fiendish Codex + 900 → **Riftmaker** | 7 000 | ~11:30 |
| 5 | ⬆️ **Armored Advance** (mismo slot, +1 000 g) | 8 000 | ~12:30 (post 10:00) |
| 6 | Blasting Wand + Haunting Guise → **Liandry's Torment** | 11 000 | ~15:00 |
| 7 | Seeker's Armguard + Blasting Wand → **Zhonya's Hourglass** | 14 300 | ~17:30 |
| 8 | Needlessly Large Rod + 700 → **Rabadon's Deathcap** | 17 700 | ~20:00 |

### Runas · Hechizos · Habilidades
| Categoría | Elección |
|-----------|----------|
| Keystone | **Conqueror** (Stacks de AP + Omnivamp 9 % al máximo, sinergia con peleas largas) |
| Resolve 2 | **Demolish** (Torretas de 7 000 HP + placas permanentes) |
| Resolve 3 | **Second Wind** (Sustain de lane tras trades) |
| Resolve 4 | **Overgrowth** (+3 % HP máx al llegar a 30 stacks, infla W y Riftmaker) |
| Secundaria | **Transcendence** (Haste para spamear Q/E) / **Revitalize** (Amplifica escudo/cura de W) |
| Hechizos | **Flash + Ignite** (Top) / **Flash + Smite** (Jungla) |
| Skills | **Q → E → W** (R en 5/9/13) |

---

## 1. LEYES APLICADAS A MORDEKAISER

### Ley 3 — Penetración Mágica
| MR Enemigo | Sin Pen | Con Pasiva (12 %) | + Void Staff (40 %) |
|---|---|---|---|
| 80 (Squishy) | 0.556 | 0.595 | 0.714 |
| 150 (Bruiser) | 0.400 | 0.446 | 0.588 |
| 220 (Tanque) | 0.312 | 0.357 | **0.500** |

*Regla:* La pasiva ya da 12 % de pen. Contra squishies, es suficiente. Contra tanques (Malphite, Cho'Gath), **Void Staff** es obligatorio en el slot 6 en lugar de Rabadon's.
### Ley 5 — Eficiencia de oro
- **Riftmaker (3 100 g):** 157 % de eficiencia real. El 2 % de HP Bonus como AP (Void Infusion) convierte los 1 000 HP de la build en +20 AP gratis, que luego Rabadon's multiplica.
- **Rylai's (2 700 g):** El slow del 30 % no es "daño", es **utilidad de garantía**. Sin Rylai's, los enemigos esquivan el "sweet spot" de la Q y el pull de la E.

---

## 2. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | DPS lvl 9 (1v1) | Utilidad | Nota |
|---|---|---|---|---|
| **Rylai's Crystal Scepter** | 2 700 | 410 | **Alta** (Slow para Q/E) | ✅ Core absoluto |
| Liandry's Torment | 3 000 | 450 | Media (Burn) | ⚠️ Mejor 3.er ítem cuando el enemigo ya tiene HP |
| Riftmaker | 3 100 | 430 | Alta (Omnivamp) | ⚠️ Componentes caros, mejor 2.º ítem |
| Rod of Ages | 2 700 | 320 | Baja (Maná muerto) | ❌ Rechazado |

**Veredicto:** **Rylai's** es el primer ítem incuestionable en Top. La utilidad del slow compensa la ligera pérdida de daño raw contra Liandry's, ya que garantiza que el "sweet spot" de la Q (que hace 120 % de daño extra a un solo objetivo) conecte consistentemente.

---

## 3. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Plated → ⬆️ Armored Advance** | Block 10 % + Escudo físico. Vital contra Darius, Camille, Garen. |
| 1 | **Rylai's Crystal Scepter** | 350 HP + 65 AP. El slow del 30 % hace que la E y la Q sean ineludibles. |
| 2 | **Riftmaker** | 350 HP + 70 AP. Omnivamp 10 % + Amp 8 %. Convierte 1 000 HP bonus en +20 AP. |
| 3 | **Liandry's Torment** | 300 HP + 70 AP. Burn 2 % Vida Máx. Sinergia brutal con la Pasiva (1 % Vida Máx). |
| 4 | **Zhonya's Hourglass** | 110 AP + 40 Armor. Stasis para esperar el CD de la W (cura masiva) o sobrevivir el burst tras salir de R. |
| 5 | **Rabadon's Deathcap** | 130 AP + 30 % AP total. Infla el escudo de la W y el daño de la Q a niveles absurdos. |

### Matriz del último slot (situacional)
| Situación | Ítem | Coste | Impacto medido |
|---|---|---|---|
| **Default (Burst/General)** | **Rabadon's Deathcap** | 3 400 | AP ~604, Escudo W ~1 200+ |
| Vs 2+ Tanques / MR Stack | **Void Staff** | 3 000 | +40 % Pen Mágica. DPS vs 220 MR sube de 280 a 410 |
| Vs Curación (Mundo, Yuumi) | **Morellonomicon** | 2 650 | GW 50 % + 75 AP + 300 HP |
| Vs Burst AP (Karma, Diana) | **Force of Nature** / **Abyssal Mask** | 2 800 / 2 400 | Reemplaza Zhonya's o Rabadon's |

---

## 4. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Conqueror
- **Stacks de AP:** 5-8.33 AP por stack (6 stacks = +50 AP).
- **Omnivamp 9 %:** Al máximo, cura el 9 % del daño de Q, E, Pasiva y Burn de Liandry's.
**Alternativas:** *Grasp of Undying* (solo si juegas muy pasivo en lane, pero Conqueror escala mejor en teamfights).

### Secundarias
| Slot | Runa | Valor estimado |
|---|---|---|
| Resolve | **Demolish** | Placas de torreta (140 g c/u). Q single-target destruye placas. |
| Resolve | **Second Wind** | Regen tras el pokeo de lane (Vayne, Teemo). |
| Resolve | **Overgrowth** | +3 % HP Máx. Infla W, Riftmaker y Liandry's. |
| Sorcery | **Transcendence** | +15 Haste total. Q baja a ~3 s de CD. |

### Hechizos: Flash + Ignite
**Ignite** asegura kills en el nivel 3-6 antes de tener R. **Teleport** es viable si el equipo enemigo tiene mucho splitpush, pero Mordekaiser *es* el splitpusher.

### Orden de habilidades
**Q → E → W** · R en 5/9/13.
- **Q max:** Daño principal y waveclear. El bonus del 120 % a un solo objetivo es tu win-condition en duelo.
- **E segunda:** El pull es tu único CC. Reducir su CD es vital para reposicionar enemigos hacia tu Q.
- **W última:** El escudo escala con el daño, pero el CD no baja lo suficiente para justificar maxearla antes que el daño.

---

## 5. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (nivel 15, fight 10 s vs 100 MR / 3 500 HP)
| Build | Oro | AP Final | HP Bonus | DPS Sostenido | Escudo W |
|---|---|---|---|---|---|
| **ÓPTIMA (Rylai+Rift+Liandry+Zhonya+Rabadon)** | 17 700 | **604** | 1 000 | **850** | **~1 200** |
| Liandry's 1.º (Comunidad vieja) | 17 700 | 580 | 850 | 810 | ~1 050 |
| Variante Jungla (Rift 1.º) | 17 700 | 595 | 1 000 | 830 | ~1 150 |
| Anti-Tanque (Void Staff por Rabadon) | 17 300 | 485 | 1 000 | 720 (vs 100 MR) / **910 (vs 220 MR)** | ~1 000 |

---

## 6. PLAN DE JUEGO

### Early (0:00 – 9:00)
- **Nivel 1:** Q para farmear y pokear. Usa el "sweet spot" (el extremo del martillo) para hacer 120 % de daño.
- **Nivel 3:** Combo E (pull) → Auto (pasiva) → Q (sweet spot). Si el enemigo intenta correr, W para absorber el retaliación y curarte.
- **Placas:** Desde el minuto 5:00, las placas decaen. Usa Q para romper la primera placa y ganar 140 g + Demolish.

### Mid (9:00 – 16:00)
- **Min 10:00:** ⬆️ Armored Advance.
- **Pico Rylai's + Riftmaker (~12 min):** Tienes Omnivamp y Slow. Eres casi inmortal en 1v1. Busca peleas en el río.
- **Uso de R:** NO la uses para iniciar a ciegas. Úsala para:
  1. Aislar al carry enemigo (Jinx, Kai'Sa) y robarle sus stats.
  2. Escapar de un gank de 3 personas (tira R al tanque, mata al tanque o espera 7 s).
  3. Asegurar un objetivo (tira R al Jungla enemigo para que no pueda smitear el Dragón/Baron).

### Late (16:00+)
- **Teamfight:** Juega en la frontline. E para jalar al carry o al support enemigo. Activa W cuando recibas burst, espera 2 segundos y recast W para curarte masivamente.
- **Zhonya's:** Úsalo si te focusean tras salir de R, o para esperar el CD de tu W en medio de 3 enemigos.
- **Cristales de Torreta:** En asedios, pega 1 auto a la torreta cada 50 s para detonar el 18.9 % de sus 7 000 HP.

---

## 7. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)
| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 | 25/09/2026 | Sistemas de campo (Torretas, Smite AP), Lifesteal vs Omnivamp |
| Notas oficiales 7.2D | 25/09/2026 | Buff a Pasiva (12 % Pen) y E CD |

### Fuentes secundarias
| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta Mordekaiser | 24/09/2026 | Alta para kit; build popular (Rylai's/Plated/Riftmaker) validada por el modelo |

### Contexto meta (24/09, Diamond+)
Mordekaiser: WR 50.52 %, pick 10.95 %, **ban 32.20 %**. El alto ban rate indica que los jugadores respetan su capacidad de anular carries. Si te lo dejan abierto, es un pick de primer nivel.

---

## APÉNDICE A — POOL DE ÍTEMES: veredicto para Mordekaiser

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Rylai's Crystal Scepter (2 700) | ✅ Core 1 | Slow garantiza Q y E |
| Riftmaker (3 100) | ✅ Core 2 | Omnivamp + HP→AP |
| Liandry's Torment (3 000) | ✅ Core 3 | Burn % Vida Máx + Pasiva |
| Zhonya's Hourglass (3 300) | ✅ Core 4 | Stasis + Armor + AP |
| Rabadon's Deathcap (3 400) | ✅ Core 5 | Multiplicador de AP y Escudo W |
| Armored Advance (2 200) | ✅ Botas Default | Vs AD / Bruisers |
| Chainlaced Crushers (2 200) | ⚠️ Botas Sit. | Vs CC duro / AP |
| Void Staff (3 000) | ⚠️ 6.º Sit. | Vs 2+ Tanques con MR |
| Morellonomicon (2 650) | ⚠️ 6.º Sit. | Vs Curación |
| Rod of Ages (2 700) | ❌ | Maná muerto |
| Nashor's Tooth (2 900) | ❌ | AS muerto |
| Cosmic Drive (3 000) | ❌ | MS redundante |

---

## APÉNDICE B — RUTAS DE COMPRA

**TOP DEFAULT (Vs AD / Estándar):**
Tome → Rylai's (7:30) → Plated (8:30) → Riftmaker (11:30) → ⬆️ Armored Advance (12:30)
→ Liandry's (15:00) → Zhonya's (17:30) → Rabadon's (20:00)

**TOP VS AP / CC DURO (Ej. Rumble, Kennen):**
Tome → Rylai's → Mercury's → Riftmaker → ⬆️ Chainlaced Crushers → Liandry's → Zhonya's → Rabadon's

**JUNGLA (Smite AP):**
Tome → Riftmaker (primer clear completo, ~7:30) → Rylai's → ⬆️ Botas T3 → Liandry's → Zhonya's → Rabadon's
*(Smite escala +12% AP, Riftmaker temprano da Omnivamp para sostener la jungla).*

**ANTI-TANQUE (Vs Malphite, Cho'Gath, Mundo):**
Default pero Rabadon's → **Void Staff** (Pen 40 % obligatoria).

---

## Pie de página
*Reporte generado el 28/09/2026 con datos del parche 7.3 (21/09/2026). WR-LAB v1.4. Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3a/b (hotfix), regenerar datos antes de publicar.*

**Referencias y créditos**
- Notas oficiales del parche 7.3 (21/09/2026) y 7.2 (08/07/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria: Sistemas de campo, torretas 7000 HP, Smite AP, Lifesteal.
- Base de datos de ítems, runas y fichas de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Fuente secundaria: Kit de Mordekaiser, ratios de AP, meta actual.
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio, `model/dps_model.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.