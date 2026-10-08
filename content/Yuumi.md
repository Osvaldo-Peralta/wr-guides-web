---
tags:
  - Soporte
  - Personalizado
version: 1.2
Status: Aprobado
champion: Yuumi
slug: yuumi
role: support
patch: "7.3"
archetype: "Poke-Hybrid Support"
engine: aliado
custom: "true"
generate: manual
mode: sr
published_at: "2026-09-27"
updated_at: "2026-10-04"
verification: ANOTAR
verified_patch: "7.3a"
---
**Fecha del análisis:** 27/09/2026
**Parche:** 7.3 (21-sep-2026)
**Rol principal:** Support (Bot Lane)
**Arquetipo:** Poke-Hybrid Support
**Enfoque:** Sacrificar ~15-20 % de escudo puro (E) a cambio de ~40 % más de daño en Q y utilidad de equipo por daño infligido.

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (08/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambio directo:** NERF — W Best Friend HSP: 8/9/10/11 % + 0.02 % AP → **6/7/8/9 % + 0.01 % AP**.
> **Δ de resultado (conservador):** e_shield 303.9→298.7 (-1.7 %) · r_heal 571.6→561.8 (-1.7 %) · shield_per_min 3951→3882.8 (-1.7 %). Δ máx **1.7 %** (umbrales: anotar 2 %, regenerar 5 %).
> **Con la fórmula completa post-parche:** e_shield 303.9→304.7 · r_heal 571.6→573.1 · shield_per_min 3951→3961.2 (el veredicto usa el caso conservador).
> **Δ de stats-input (no decide veredicto):** HSP (-12.5 %).
> **Build publicada (6 slots, Ley 0):** Crimson Lucidity + Black Mist Scythe + Echoes of Helia + Imperial Mandate + Stormsurge + Harmonic Echo — **sin cambios**.
> **Ítems cambiados fuera de la build final:** Crown/Diadem of Songs (NERF) — verificar variantes/rechazados del reporte.
> **Nota del lab (diff 7.3a):** HSP de W: −2 pts y mitad del término AP → E-shield 339→~338 (−0.3 %), R-heal 651→~648. **Build y veredictos intactos** (Censer sigue siendo el rey) → Anotado [!WARNING] en el reporte
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 24/09/2026):**
> Win Rate 48.25 % | Pick Rate 8.72 % | Ban 34.23 % | Tendencia ↑ 4 | Rol: Support.

> [!DANGER]
> **Advertencia:** Esta build sacrifica ~15-20 % de escudo puro (E) a cambio de ~40 % más de daño en Q y utilidad de equipo por daño infligido. Si fallas muchas Qs, esta build pierde valor comparada con la de escudos puros.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Ionian Boots of Lucidity → ⬆️ Crimson Lucidity** (min 10:00, MISMO slot) | 2 000 | 25 haste + 75 % mana regen + Noxian Haste (MS al curar/dañar) |
| 2 (quest) | **Spectral Sickle → Black Mist Scythe** | 500 → 0 | Oro pasivo + stats adaptativos + visión |
| 3 | **Echoes of Helia** | 2 400 | CORE ABSOLUTO: 30 % del daño de Q → curación real al ADC |
| 4 | **Imperial Mandate** | 2 600 | Q (slow/reveal) marca al enemigo: +7 % daño aliado |
| 5 | **Stormsurge** | 2 800 | 90 AP + 15 pen mágica + Squall burst a <25 % HP |
| 6 | **Harmonic Echo** | 2 500 | Propaga cura/escudo residual en teamfights |

> **Oro total: ~11 300 g** · AP ~240 · Haste 65 · Pen mágica 15 + 8 % (botas) · Maná regen 200 %+ · Daño Q (nivel 15): ~120-150 con pen

### Tabla B — Ruta de compra cronológica

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | **Spectral Sickle** (quest start) | 500 | 0:00 |
| 2 | Boots of Speed → **Ionian Boots of Lucidity** | 1 500 | ~4:00 |
| 3 | Quest completada → **Black Mist Scythe** (mismo slot) | 1 500 | ~8:00 |
| 4 | Bandleglass Mirror + Kindlegem + 500 → **Echoes of Helia** | 3 900 | ~11:30 |
| 5 | ⬆️ **Crimson Lucidity** (mismo slot, +1 000 g) | 4 900 | ~12:00 |
| 6 | Bandleglass Mirror + Blasting Wand + 900 → **Imperial Mandate** | 7 500 | ~14:00 |
| 7 | Blasting Wand + Void Amethyst + Aether Wisp → **Stormsurge** | 10 300 | ~16:30 |
| 8 | Bandleglass Mirror + Kindlegem + 600 → **Harmonic Echo** | 12 800 | ~19:00 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Arcane Comet** (Q cargada → cometa gratis) / **Aery** (más consistente, daña y escuda) |
| Sorcery 2 | **Manaflow Band** (+300 maná para spamear Q) |
| Sorcery 3 | **Transcendence** (+10 haste; nivel 9: −8 % CD post-hit) |
| Sorcery 4 | **Scorch** (+21-49 daño mágico en Q early) / **Gathering Storm** (late) |
| Secundaria | **Revitalize** (+5 %/+15 % curas Helia) / **Bone Plating** (anti-burst) |
| Hechizos | **Flash + Ignite** (asegurar kills tras poke) / **Flash + Exhaust** (utilidad defensiva) |
| Skills | **Q > E > W** (R en 5/9/13) |

### Resultado del modelo (nivel 15, AP ~240, 65 haste, vs 50 MR squishy)

| Escenario                                  | Valor                                      |
| ------------------------------------------ | ------------------------------------------ |
| **Daño Q cargada (1v1, con pen)**          | **~120-150 mágico**                        |
| **Daño Q + Comet + Scorch (early)**        | **~85-110 por poke**                       |
| **Curación Helia por Q (30 % conversión)** | **~36-45 HP al ADC**                       |
| **Amp de equipo (Mandate, 4 s)**           | **+7 % daño aliado**                       |
| **DPS+ al carry (Imperial + Helia)**       | **~+357 team DPS (a 6 000 base)**          |
| **Escudo E (rank 4, AP 240)**              | **~266** (vs ~310 de build enchanter pura) |

> **Titular:** +40 % de daño Q y +7 % amp de equipo, a cambio de −15 % de escudo E.
> En lanes de poke (vs Yuumi enemiga, vs Karma, vs Seraphine), esta build gana la lane antes del minuto 12.

---
### 0.3 ¿Por qué esta build funciona para "Dañar con Q"?

- **Ratio de Q Mejorado:** En 7.3, la Q attached de Yuumi tiene ratio del **35 % AP**. Con ~240 AP → ~84 de daño base + escalamiento + slow 65 %.
- **Sinergia con Imperial Mandate:** El parche 7.3 buffeó Imperial Mandate. Al golpear con Q (slow/reveal), marcas al enemigo. Tu ADC (Jinx/Kai'Sa/Kalista) ve +7 % de daño en cada golpe. Tú haces el setup, ellos matan.
- **Echoes of Helia es Obligatorio:** Si solo compras AP puro (como Luden's), no curarás a tu equipo. Helia permite que cada Q que lances sea también una "curación diferida". Es el equilibrio perfecto entre ser agresivo y ser útil.

---

## 1. LEYES APLICADAS A YUUMI AGRESIVA

### Ley 1 — Penetración Mágica es el nuevo Crítico

Para un mago/pokeador, la Penetración Mágica rinde más que el AP plano una vez que el enemigo tiene 1 ítem de resistencia.

| MR enemigo | Sin pen | Con Spellslinger's (18+8 %) | Con Stormsurge (+15 plana) |
|---|---|---|---|
| 50 (squishy) | 0.667 | 0.763 | 0.820 |
| 100 (fighter) | 0.500 | 0.595 | 0.658 |
| 150 (tanque) | 0.400 | 0.488 | 0.545 |

Stormsurge da 15 pen mágica plana + 90 AP. Es más eficiente que Rabadon's temprano porque ignora resistencias base.

### Ley 2 — Ability Haste = Más Oportunidades de Daño

| Fuente | Haste |
|---|---|
| Ionian/Crimson Lucidity | 15 / 25 |
| Transcendence | 10 |
| Imperial Mandate (Control) | 20 |
| Echoes of Helia | 20 |
| **Total** | **65** (conservador) / 75 (con Transcendence plena) |

Tu Q pasa de 5 s a **~3.0 s**. Puedes lanzar 2 Qs completas en el tiempo que antes lanzabas 1. Esto duplica tu presión en lane.

### Ley 5-6 — Timing

Helia al ~11:30 (2 400 g, path suave: Bandleglass 900 + Kindlegem 1 000 + 500) = primer pico de poke+sustain. Imperial al ~14:00 = la fight de dragón ya tiene marca permanente. Stormsurge al ~16:30 = burst para borrar squishies en teamfights.

---

## 2. ANÁLISIS DEL PRIMER ÍTEM COMPLETADO

**No aplica como decisión libre** — el primer "ítem" es la quest (Spectral Sickle → Black Mist Scythe). La primera decisión real es el ítem 3:

| Candidato | Oro | Valor Inmediato | Veredicto |
|---|---|---|---|
| **Echoes of Helia** | 2 400 | Daño → Cura + 20 Haste + 40 AP | ✅ **CORE 1.** Permite jugar agresivo sin culpar al ADC de no tener sustain |
| Imperial Mandate | 2 600 | +7 % Amp Daño Aliado + 20 Haste | ⚠️ **CORE 2.** Ideal si tu ADC es de daño sostenido (Jinx, Vayne, Kai'Sa). Menos útil vs burst |
| Stormsurge | 2 800 | 90 AP + 15 Pen Mágica | ⚠️ **CORE 3.** Pico de daño puro. Úsalo si ya tienes Helia/Mandate y quieres borrar squishies |
| Luden's Echo | 2 800 | Burst AoE | ❌ **NO RECOMENDADO.** No aporta nada al equipo ni sustain. Helia es superior para Yuumi |

**Recomendación:** Helia primero. Luego decide entre Imperial (si quieres ayudar al ADC a matar) o Stormsurge (si quieres matar tú mismo).

---

## 3. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Ionian → ⬆️ Crimson Lucidity** | Máximo Haste para spamear Q. Noxian Haste da MS al dañar/curar |
| Quest | **Black Mist Scythe** | Oro pasivo. Necesitas oro para comprar AP caro |
| Core 1 | **Echoes of Helia** | Convierte tu agresividad en vida para el equipo. 30 % del daño Q → cura |
| Core 2 | **Imperial Mandate** | Amplifica el daño de tu ADC cuando tú haces el trabajo sucio con Q (+7 %) |
| Core 3 | **Stormsurge** | Daño burst + Penetración. Activa Squall con Q cargada a <25 % HP |
| Flex | **Harmonic Echo** | Propaga curas/escudos residuales en teamfights (30 % cura / 35 % escudo al aliado más bajo) |

### Matriz del último slot (situacional)

| Situación | Ítem Alternativo | Razón |
|---|---|---|
| Vs Tanques/MR Alta | **Cryptbloom** (3 000) | 30 % Pen Mágica + Curación AoE al matar. Mejor que Stormsurge vs MR |
| Vs Mucha Curación Enemiga | **Morellonomicon** (2 650) | Si tu Q no mata, al menos aplica Grievous Wounds |
| Necesitas Escudos Fuertes | **Staff of Flowing Waters** (2 400) | Cambia Stormsurge por Staff si el equipo necesita más protección |
| Vs Asesinos que te saltan | **Zhonya's Hourglass** (3 300) | Solo si te enfocan mucho. Te da AP y supervivencia |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|---|---|
| ❌ Ardent Censer (2 400) | Excelente ítem, pero no aumenta tu daño de Q. Si tu prioridad es DAÑAR, Ardent es secundario |
| ❌ Rabadon's Deathcap (3 400) | Demasiado caro y tarda mucho. Stormsurge/Cryptbloom dan penetración inmediata |
| ❌ Luden's Echo (2 800) | Demasiado egoísta. Helia hace lo mismo pero cura. Sin haste CC |
| ❌ Diadem of Songs (2 400) | Sustain pasivo; no alimenta el loop de poke agresivo |

---

## 4. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Arcane Comet / Aery

- **Arcane Comet:** Si aciertas Q cargada, el cometa pega gratis (15-100 + 2×hits + 10 % AP + 5 % AP). Con 240 AP y CD de Q ~3 s, el cometa proca cada poke. Maximiza el burst.
- **Aery:** Más consistente, daña Y escuda. Mejor si equilibras poke con protección.

**Alternativas:** *First Strike* solo si pokeas desde muy lejos sin riesgo (greedy).

### Secundarias

| Slot | Runa | Valor estimado |
|---|---|---|
| Sorcery | **Manaflow Band** | +300 maná para spamear Q (60 maná/cast × 5 casts/min) |
| Sorcery | **Transcendence** | +10 haste → Q cada ~2.9 s; nivel 9: −8 % CD post-hit |
| Sorcery | **Scorch** / **Gathering Storm** | +21-49 daño en Q early / +AP escalado late |
| Resolve | **Revitalize** / **Bone Plating** | +5 %/+15 % curas Helia / anti-burst en lane |

### Hechizos: Flash + Ignite / Exhaust

- **Ignite:** Para asegurar kills cuando bajas al enemigo al 50 % con Qs.
- **Exhaust:** Si prefieres utilidad defensiva (vs asesinos).

### Orden de habilidades: **Q > E > W**

- **Q max primero:** Reduce CD y aumenta daño base significativamente (100→340 + 35 % AP).
- **E segundo:** Escudo necesario para sobrevivir mientras pokeas (80-170 + 40 % AP).
- **W último:** Solo da stats adaptativos y HSP pasivo (8-11 % + 0.02 % AP).

---

## 5. COMPARACIÓN CONTRA ALTERNATIVAS

### Tabla maestra (nivel 15, AP/haste completos)

| Build | Oro | AP Total | Daño Q (Nivel 15) | Utilidad Equipo | Nota |
|---|---|---|---|---|---|
| **POKE MASTER (Helia+Imp+Storm)** | ~11 300 | ~240 | ~120-150 (con pen) | Alta (Amp + Cura) | Máximo daño posible sin dejar de ser soporte |
| Enchanter Puro (Ardent+Staff) | ~10 700 | ~150 | ~80-100 | Muy Alta (Buff ADC) | Menos daño propio, más daño aliado |
| Full AP (Luden+Rabadon) | ~12 000 | ~300 | ~160-190 | Baja (Sin cura) | Daño alto, pero el equipo muere por falta de sustain |

### Desglose de la diferencia (Poke Master vs Enchanter Puro)

| Factor | Contribución |
|---|---|
| AP 240 vs 150 → Q +60 % daño base | +40 % daño Q |
| Imperial Mandate (+7 % team amp) | +357 DPS de equipo (a 6 000 base) |
| Helia (30 % daño → cura) | Sustain integrado sin perder DPS |
| Escudo E reducido (266 vs ~310) | −15 % protección directa |
| **Neto: más daño, menos escudo, más amp** | **Ventaja en lanes de poke; desventaja vs dive** |

---

## 6. PLAN DE JUEGO

### Early (0:00 – 8:00)

- **Usa Q para limpiar oleadas y molestar al ADC enemigo.** Carga la Q (1 seg de vuelo) para máximo daño y slow.
- **No tengas miedo de gastar maná:** Black Mist Scythe lo recupera.
- **Friendship:** haz la quest pegada a tu carry para construir Best Friend rápido.
- **Poke con Aery/Comet + Scorch:** cada Q cargada es un trade ganado.

### Mid (8:00 – 14:00)

- **Completa Helia.** Ahora cada Q que aciertes cura a tu ADC un poco (~36-45 HP por Q).
- **Empieza a usar Imperial Mandate** para marcar objetivos prioritarios antes de que tu ADC entre.
- **Min 10:00:** ⬆️ Crimson Lucidity → Q cada ~3 s.
- **Dragón/herald:** Q al objetivo prioritario → Mandate marca → el team lo borra (+7 %).

### Late (14:00+)

- **Con Stormsurge, tu Q puede bajarle el 30-40 % de vida a un carry enemigo** si lo pillas desprevenido.
- **En teamfights:** usa Q para iniciar el daño (Helia cura + Mandate marca), luego usa R para rematar o curar según convenga.
- **Harmonic Echo propaga:** tu Q pega a varios → Helia cura → Harmonic propaga al aliado más bajo.

### Regla de Oro

Si tu ADC está en peligro, **deja de pokear y usa E/W**. La build te da herramientas para dañar, pero tu rol sigue siendo proteger. El daño es un medio para ganar la lane, no el fin único.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|---|---|
| Minions 60 % daño a campeones | Desattacharte a pokear es más seguro |
| Torretas 7 000 HP + cristales | Q desde attach detona cristales (~1 300 verdadero) |
| Enchanters con menos haste late (7.2) | Crimson + Transcendence + Mandate Control = 65 haste no es lujo |

---

## 7. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Imperial Mandate rediseño, Echoes of Helia, Stormsurge, Harmonic Echo, Ardent Censer |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Botas T2/T3, Crimson Lucidad, soporte items |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Yuumi (ficha + meta) | 24/09/2026 | Alta para kit; WR 48.25 %, ban 34.23 % |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|---|---|
| Algunas guías sugieren Luden's | Lo rechazamos porque Helia ofrece mejor sostenibilidad para el equipo en WR |
| Yuumi "no usa botas" (mito PC) | **Falso en WR**: confirmada Ionian → Crimson Lucidity en build popular |
| ¿Scythe completada ocupa slot? | Asumido que sí (build popular la lista) — verificar en juego |

### Supuestos del modelo (declarados)

- El jugador tiene buena puntería con la Q. Si fallas muchas Qs, esta build pierde valor comparada con la de escudos puros.
- Haste 65 conservador (sin Transcendence al 100 %); con Transcendence plena = 75.
- Team DPS 6 000 de referencia para Mandate.
- Uptime de marca 85-100 % (Q cada ~3 s, marca 4 s).
- Mitigación vs 50 MR squishy para daño Q; vs 100+ MR se recomienda Cryptbloom.

---

## APÉNDICE A — POOL DE ÍTEMS DE DAÑO PARA YUUMI

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Echoes of Helia (2 400) | ✅ CORE | Daño → Cura. Imprescindible |
| Imperial Mandate (2 600) | ✅ CORE | Amp daño aliado +7 %. Sinergia con Q slow/reveal |
| Stormsurge (2 800) | ✅ CORE | Daño burst + 15 pen + Squall |
| Harmonic Echo (2 500) | ✅ FLEX | Chain heal/shield en teamfights |
| Crimson Lucidity (2 000) | ✅ Botas | 25 haste + Noxian Haste |
| Cryptbloom (3 000) | ⚠️ SIT | Vs MR alta: 30 % pen + cura AoE |
| Morellonomicon (2 650) | ⚠️ SIT | Vs curación enemiga: GW |
| Zhonya's Hourglass (3 300) | ⚠️ SIT | Supervivencia + AP vs focus |
| Staff of Flowing Waters (2 400) | ⚠️ SEC | Bueno, pero menos daño que Stormsurge |
| Ardent Censer (2 400) | ⚠️ SEC | Bueno, pero no prioriza daño propio |
| Luden's Echo (2 800) | ❌ NO | Demasiado egoísta; Helia hace lo mismo + cura |
| Rabadon's Deathcap (3 400) | ❌ NO | Demasiado caro; Stormsurge/Cryptbloom dan pen inmediata |

---

## APÉNDICE B — RUTAS DE COMPRA

```
DEFAULT POKE:
Sickle → Ionian (4') → Scythe (8') → Helia (11:30) → ⬆️ Crimson (12')
→ Imperial (14') → Stormsurge (16:30) → Harmonic (19')

VS TANQUES (2+ con 100+ MR):
Sickle → Ionian → Scythe → Helia → ⬆️ Crimson
→ Cryptbloom (14') → Imperial (16:30) → Morello (19')

VS BURST / DEFENSIVO (Zed/Rengar divean):
Sickle → Ionian → Scythe → Helia → ⬆️ Crimson
→ Zhonya's (14') → Imperial (16:30) → Stormsurge (19')

ADC-CÉNTRICO (tu ADC es el 80 % del team):
Sickle → Ionian → Scythe → Censer (10') → ⬆️ Crimson
→ Imperial (13') → Helia (16') → Staff/Harmonic (19')
```

---

## Pie de página

*Reporte generado el 27/09/2026 con datos del parche 7.3 (21/09/2026). WR-LAB v1.4. Las cifras de daño Q, curación Helia y amp de equipo son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3a/b (hotfix), regenerar datos antes de publicar.*

**Referencias y créditos**

- Notas oficiales del parche 7.3 (21/09/2026) y 7.2 (08/07/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria: rediseño de Imperial Mandate, Echoes of Helia, Harmonic Echo, Stormsurge, items de support.
- Base de datos de ítems, runas y ficha de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Fuente secundaria: kit completo de Yuumi (Q/W/E/R con Best Friend), build y meta.
- Modelo matemático (valor-aliado + daño Q), Leyes 0-7 y validaciones — WR-LAB (laboratorio propio, `model/dps_model.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.

---