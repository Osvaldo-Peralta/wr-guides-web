---
tags:
  - Jungla
  - Rotación-híbrida
version: 1.3
Status: Beta
champion: Diana
slug: diana-jungla
role: jungla
variant: jungla
patch: "7.3"
archetype: AP-Assassin de rotación sostenida
engine: rotacion
custom: false
generate: manual
mode: sr
published_at: 2026-09-29
updated_at: 2026-10-08
verification: ANOTAR
verified_patch: 7.3a
---
**Fecha del análisis:** 08/10/2026
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** Jungla
**Arquetipo:** AP-Assassin de rotación sostenida con ventanas de burst tras combo Q→E→W→R
**Enfoque:** Lethal Tempo + Nashor's Tooth 1.º + Dusk and Dawn para explotar el ratio AS 0.694 de Diana

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (08/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Diana:** ninguno en 7.3a.
> **Δ del modelo:** 0 % — ningún input del campeón/build cambió en el motor.
> **Build publicada (6 slots, Ley 0):** Spellslinger's Shoes + Nashor's Tooth + Dusk and Dawn + Rabadon's Deathcap + Zhonya's Hourglass + Cryptbloom — **sin cambios**.
> **Ítems cambiados fuera de la build final:** Death's Dance (NERF) — verificar variantes/rechazados del reporte.
> **Sistema (7.3a):** Smite burn vs monstruos: 30–198/s → **22–162/s** → Jungla early más lenta → Diana jungla: Nashor's 1.º aún más correcto; Shyvana/Volibear/Cho'Gath jungla: clear early −15-20 %
> **Nota del lab (diff 7.3a):** Smite burn −18 % → clear early más lento (refuerza Nashor's 1.º en jungla) → Anotado
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 24/09/2026):**
> Win Rate **50.82 %** | Pick Rate 1.90 % | Ban 0.29 % | Tendencia ↓ 12 | Rol: **Jungla**.
> Diana está débil en Mid (47.98 % WR); **Jungla es su rol viable y óptimo en 7.3**.

> [!TIP]
> **Variante Anti-Tanques:** Si el equipo enemigo tiene 2+ tanques con MR alta (Force of Nature / Kaenic Rookern), reemplaza **Cryptbloom por Void Staff** en el slot 6 → +22 % DPS vs 180 MR a cambio de −8 % burst vs squishies.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Boots of Mana → ⬆️ Spellslinger's Shoes** (min 10:00) | 2 200 | 35 AP + 18 pen plana + 8 % pen + 100 % maná regen |
| 2 | **Nashor's Tooth** | 2 900 | 80 AP + 50 % AS + 15 AH · Gnaw on-hit 15 + 20 % AP bonus |
| 3 | **Dusk and Dawn** | 3 100 | 60 AP + 300 HP + 20 % AS + 20 AH · Spellblade 75 % AD base + cura híbrida |
| 4 | **Rabadon's Deathcap** | 3 400 | 130 AP + 30 % AP total · Multiplica TODO el kit |
| 5 | **Zhonya's Hourglass** | 3 300 | 110 AP + 40 Armadura · Stasis 2.5 s para sobrevivir dive post-R |
| 6 | **Cryptbloom** | 3 000 | 75 AP + 30 % pen mágica + 20 AH · Cura AoE al matar |

> **Oro total: 17 900 g** · AP ~480 (con Rabadon's) · AS 1.72 (LT full + Moonsilver) · Haste 55 · Pen mágica 26 (18 plana + 8 %) · EHP mixto ~3 850

### Tabla B — Ruta de compra cronológica (Jungla)

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Hunter's Talisman (start) | 500 | 0:00 |
| 2 | Recurve Bow + Fiendish Codex + Blasting Wand → **Nashor's Tooth** | 2 900 | ~6:30 |
| 3 | **Boots of Mana** | 4 100 | ~8:00 |
| 4 | Aether Wisp + Kindlegem + Fiendish → **Dusk and Dawn** | 7 200 | ~10:30 |
| 5 | ⬆️ **Spellslinger's Shoes** (mismo slot, +1 000 g) | 8 200 | ~12:00 |
| 6 | Blasting Wand + Needlessly Large Rod → **Rabadon's Deathcap** | 12 300 | ~15:00 |
| 7 | Seeker's Armguard + Blasting Wand → **Zhonya's Hourglass** | 15 600 | ~17:30 |
| 8 | Haunting Guise + Blasting Wand → **Cryptbloom** | 17 900 | ~20:00 |

> **Clave del orden jungla:** Nashor's 1.º (no Dusk como en Mid). El nerf de Smite burn en 7.3a (-18 %) castiga el clear early; el 50 % AS + Gnaw on-hit de Nashor's compensa la pérdida y adelanta el primer pico de poder al minuto 6:30 (vs 7:30 de Dusk-first).

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Lethal Tempo** (+38.4 % AS a 6 stacks + bala adaptativa 6-24 · +0.67 % por 1 % AS bonus) |
| Precisión 2 | **Legend: Haste** (+15 AH tope · reduce CD de Q a ~3.2 s) |
| Precisión 3 | **Triumph** (10 % HP perdida por takedown + 35 MS) |
| Precisión 4 | **Coup de Grace** (+8 % daño a objetivos <40 % HP) |
| Secundaria 1 | **Hero** (+8 % daño a campeones · esencial para ganks) |
| Secundaria 2 | **Ultimate Hunter** (-15 % CD de R → wombo combo cada 55 s) |
| Hechizos | **Flash + Smite** (obligatorio jungla) |
| Skills | **W → Q → E** (R en 5/9/13) · Max Q primero, W para clear seguro |

### Resultado del modelo (nivel 15, LT full, vs 80 MR squishy · fight 10 s)

| Escenario | Valor |
|-----------|-------|
| **DPS sostenido 10 s** | **971** (mixto físico/mágico) |
| **Burst combo completo** (R+Q+E×2+W×3) | **1 792** |
| **vs 180 MR (tanque AP)** | **612** DPS |
| **Clear speed camp (Wraiths, 3 campos)** | **~14 s** (con Nashor's + Moonsilver) |
| **Sustain (Spellblade + W shield)** | **~280 HP/rotación** |

> **Titular:** D2-LT jungla supera a D1 (comunidad: Luden's/Orb/Zhonyas/Rabadon) en +27 % DPS sostenido y +12 % burst, gracias a la sinergia Moonsilver Blade + Nashor's + Dusk and Dawn que convierte a Diana en un **jungla de combate prolongado**, no de ventana única.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Diana)

| Cambio |
|--------|
| **Ninguno en 7.3 ni 7.3a** · Diana no fue tocada directamente en los últimos 2 parches. Ver diffs oficiales en `cambios_campeones_7.3.md` y `cambios_7.3a.md`. |

### 1.2 Cambios sistémicos relevantes (Jungla)

| Sistema | Cambio 7.3/7.3a | Efecto en Diana jungla |
|---------|-----------------|------------------------|
| Attack Speed cap | 2.5 → **3.0** (7.3) | Diana llega a AS 1.72 sin overcap (antes saturaba con LT+Moonsilver+Nashor) |
| **Smite burn vs monstruos** | 30–198/s → **22–162/s (-18 %)** (7.3a) | Clear early más lento · **Nashor's 1.º es ahora obligatorio** para compensar |
| Torretas 7 000 HP + cristales | Crystalline Overgrowth (3.3-18.9 % HP torreta) | Diana puede siegear con Q cargada desde la jungla si el enemigo rota |
| Placas permanentes | Ya no desaparecen al minuto 6 | Diana gank top/bot mantiene valor de placa para el aliado |
| Minions 60 % daño a campeones | (7.3) | Push de lane aliado más seguro tras gank fallido |
| Botas T3 desde min 10:00 | Regla obligatoria | ⬆️ Spellslinger's a ~12:00, no antes |

### 1.3 ¿Escala con crítico/otro stat?

**No escala con crítico** · Su kit es 100 % AP + autos físicos con on-hit mágico. Construir IE/Galeforce es oro muerto (Ley 1). Los stats multiplicadores son:
- **AP** (Rabadon's +30 % global)
- **AS** (ratio 0.694 alto + Moonsilver +30-100 % condicional)
- **Penetración mágica** (18 plana + 8 % de botas + 30 % de Cryptbloom)
- **Haste** (reduce Q de 5 s → 3.2 s · +25 % casts/minuto)

---

## 2. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| AD base / growth | 52 / 3.64 | wr-meta 24/09/2026 |
| AS base / ratio | 0.694 / 0.694 | Apéndice oficial 7.3 |
| Base Bonus AS / AS por nivel | 0.15 / 0.008 | Apéndice oficial 7.3 |
| Rango / melee | ~150 (melee) / No | Ficha wr-meta |
| P Moonsilver Blade | +30-100 % AS 4 s tras habilidad · Cada 3.er golpe = 20+15/nivel + 50 % AP mágico AoE | Ficha Diana |
| Q Crescent Strike | 195 + 0.7 AP · CD 5 s base · Aplica Moonlight 3 s | Ficha Diana |
| W Pale Cascade | 3×(65+0.2 AP) mágico + escudo 50+0.4 AP (+50 si detona 3.ª esfera) | Ficha Diana |
| E Lunar Rush | 160+0.3 AP · Reset CD a 0.5 s si remueve Moonlight | Ficha Diana |
| R Moonfall | 200-440 + 0.8 AP (cargado 1 s) + slow 20 % 2 s | Ficha Diana |
| Notas del spec | Uptime Moonsilver ~85 % en peleas · Q resetea E · W da escudo reactivo | SPECS precargadas |

---

## 3. MODELO Y FÓRMULAS

Motor `analysis_batch2.diana` (engine `rotacion`) · Keystones soportados: `empower`, `lt`, `conq`.

```python
# AS total (cap 3.0)
B = base_bonus_as + lvl_as_bonus(15) + AS_items + LT_as + Alacrity + Moonsilver
AS = min(0.694 * (1 + B), 3.0)

# Habilidades en fight de 10 s (con haste)
cdr = haste / (100 + haste)
Q_n = fight / (5 * (1 - cdr))    # ~2.8 casts con haste 55
E_n = Q_n + 1                    # reset con Moonlight
W_n = fight / (8.5 * (1 - cdr))
R = 1 si fight >= 8 s

# Autos + pasiva (proc cada 3.º golpe)
auto_phys = AS * base_ad * fight
proc3 = (AS * fight / 3) * (65 + 0.5 * AP)

# Spellblade de Dusk and Dawn (uptime ~1/1.5 s)
sb_n = fight / 1.5
sb = sb_n * (0.75 * base_ad + 0.10 * AP)

# Keystone Lethal Tempo
bul = 24 * (1 + 0.0067 * B * 100) * AS * fight

# Gnaw de Nashor's Tooth
gnaw = AS * fight * (15 + 0.20 * AP)

# Mitigación vs MR
mitm = 100 / (100 + max(0, MR * (1 - pen_pct/100) - pen_plana))
```

### Supuestos específicos para Jungla

- **Uptime Moonsilver:** 85 % en peleas, **95 % en clear de jungla** (siempre hay Q/W activa)
- **Haste total:** 55 (Spellslinger 0 + Dusk 20 + Nashor 15 + Cryptbloom 20 + Legend: Haste 15 - redundancias)
- **Fight duration:** 10 s sostenido (skirmishes en río) · 3 s burst (gank inicial)
- **Q acierta 85 %** en ganks (rango 550 + slow de E, pero objetivo móvil)
- **E resetea 100 %** tras Q con Moonlight aplicado
- **R cargada 1 s** (250-440 dmg) en wombo combo de Dragón/Herald

---

## 4. LEYES APLICADAS A DIANA

### Ley 0 — Slots
`validate_slots(["Spellslinger's", "Nashor", "DuskDawn", "Rabadon", "Zhonyas", "Cryptbloom"])` → **PASS** (6 entradas · 1 botas T3 · 5 ítems · sin T2+T3 duplicadas).

### Ley 1 — Umbral de crítico exacto
**No aplica** · Diana no escala con crítico. Su daño es 100 % AP + autos físicos. Cualquier ítem de crítico (IE, Galeforce, C44) es oro muerto (~1 250 g desperdiciados por 25 % crit inútil).

### Ley 2 — Velocidad de ataque: apuntar al tope sin pasarse
`AS_items_para_cap = (3.0/0.694 - 1) - (0.15 + 0.112 + 0.384 + 0.65 + 0.21) = 1.49`
Con Nashor (50 %) + Dusk (20 %) = 70 % → **AS final 1.72** (lejos del cap 3.0, cada punto de AS vale oro).
Conclusión: **NO hay overcap** · Cada % AS multiplica el proc de Moonsilver cada 3 golpes y acelera el clear.

### Ley 3 — Penetración % obligatoria contra MR
vs 80 MR squishy: pen 8 % + 18 plana = MR efectiva 56.4 → +30 % daño real.
vs 180 MR tanque: Cryptbloom 30 % → MR efectiva 126 → +22 % DPS sobre sin pen.
**Doble pen no aplica** · Terminus/LDR son físicas; Cryptbloom + botas es el combo óptimo.

### Ley 4 — Stats muertos y coste de oportunidad
- **Luden's Echo** (comunidad): 100 AP + 500 maná · Pero sin AS → pierde sinergia Moonsilver. −27 % DPS vs D2 y **clear -25 % más lento**.
- **Infinity Orb** (D1): 110 AP + 15 pen plana · Solo brilla en burst <40 % HP. −15 % DPS sostenido vs D2.
- **Maná:** Diana gasta ~60 maná/Q + 70/W + 20/E + 100/R = ~250 maná/rotación. Boots of Mana + Talisman cubren; Tear innecesario.

### Ley 5 — Eficiencia de oro con precios 7.3
| Ítem | Oro | Stats útiles | Eficiencia |
|------|-----|--------------|-----------|
| Nashor's Tooth | 2 900 | 80 AP + 50 % AS + 15 AH + Gnaw | 158 % |
| Dusk and Dawn | 3 100 | 60 AP + 20 % AS + 20 AH + Spellblade + cura | 142 % |
| Rabadon's | 3 400 | 130 AP + 30 % AP total (multiplicador global) | 165 % |
| Cryptbloom | 3 000 | 75 AP + 30 % pen + 20 AH + cura AoE | 138 % |

### Ley 6 — Timing > DPS teórico
**Nashor's Tooth a ~6:30** (2 900 g path suave: Recurve Bow 1 000 + Fiendish 900 + Blasting Wand 1 000) = **primer pico de poder jungla** · Permite gank nivel 6 con R+Q+E+W al minuto 7.
Dusk and Dawn a ~10:30 = segundo pico (AS 1.4 · proc cada 3 golpes cada 2.1 s).
Spellslinger's T3 a ~12:00 (post min 10:00) = tercer pico (pen plana para mid game).

### Ley 7 — El sistema de juego también es input
- **Smite burn nerf 7.3a (-18 %):** Sin Nashor's, Diana pierde ~8 s por campo en el primer clear. Con Nashor's, la pérdida se compensa casi al 100 %.
- **Torretas 7 000 HP + cristales:** Q cargada desde la jungla river detona cristales (~1 300 dmg verdadero) · Permite presión lateral sin salir del río.
- **Dragón/Herald/Barón:** El proc AoE de Moonsilver (cada 3.er golpe) multiplica el daño a objetivos épicos en +40 %.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | Clear 3 camps | DPS gank lvl 6 | Sinergia kit | Veredicto |
|-----------|-----|---------------|----------------|--------------|-----------|
| **Nashor's Tooth** | 2 900 | **~18 s** | 680 | ✅ AS + Gnaw + Moonsilver | **GANADOR** |
| Dusk and Dawn | 3 100 | ~22 s | 720 | ⚠️ Bueno pero caro + sin AS | Mejor 2.º |
| Luden's Echo | 2 800 | ~25 s | 750 | ❌ Sin AS, clear pésimo | Meta comunidad (sub-óptimo) |
| Stormsurge | 2 800 | ~24 s | 780 | ⚠️ Burst bueno, clear malo | Solo vs comps squishy |
| Rabadon's | 3 400 | ~28 s | 700 | ❌ Demasiado caro para 1.º | Capstone (4.º) |

**Veredicto:** Nashor's Tooth gana en jungla por tres razones:
1. **Clear speed:** 50 % AS + Gnaw on-hit acelera el clear en ~25 % vs Dusk-first.
2. **Smite burn nerf 7.3a:** El -18 % de daño del Smite hace obligatorio tener AS para compensar.
3. **Gank sostenido:** Tras el burst inicial, los autos con Moonsilver + Gnaw dan +30 % DPS en peleas prolongadas de río.

**Nota crítica:** La comunidad construye Dusk/Luden first por inercia del carril Mid, pero en Jungla el AS es el stat más valioso para clear + proc de Moonsilver.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|------|------|-------------------------|
| Botas | **Spellslinger's Shoes** | 35 AP + 18 pen plana + 8 % pen + 100 % maná regen · La pen plana multiplica Q (195+0.7 AP) en +30 % daño real vs squishies. |
| 1 | **Nashor's Tooth** | Core absoluto jungla · 80 AP + 50 % AS + 15 AH + Gnaw (15+20 % AP bonus on-hit). Convierte a Diana en jungla de combate prolongado. Proc cada 3 golpes de Moonsilver se activa cada 2.5 s. |
| 2 | **Dusk and Dawn** | 60 AP + 20 % AS + 20 AH + Spellblade (75 % AD base + 10 % AP) + cura (10 % AP + 3 % HP bonus). Sinergia 100 % con Q/E/W. |
| 3 | **Rabadon's Deathcap** | 130 AP + 30 % AP total · Multiplica TODO: Q de 300 → 390 · W escudo 150 → 195 · proc Moonsilver 90 → 117. |
| 4 | **Zhonya's Hourglass** | 110 AP + 40 Armadura · Stasis 2.5 s post-R para sobrevivir dive enemigo. **Obligatorio** en comps con Zed/Rengar/Yasuo. |
| 5 | **Cryptbloom** | 75 AP + 30 % pen mágica + 20 AH + cura AoE al matar. Pen % esencial vs tanques con Force of Nature. |

### Matriz del último slot (situacional)

| Situación | Ítem | Coste | Impacto medido |
|-----------|------|-------|---------------|
| Vs 2+ tanques MR alta | **Void Staff** (reemplaza Cryptbloom) | 3 000 | 40 % pen mágica → +22 % DPS vs 180 MR |
| Vs comps full AD (Zed/Rengar) | **Seeker's → Zhonya's temprano** (slot 4) | 3 300 | Stasis 2.5 s + 40 Armadura · Supervivencia +50 % |
| Vs invasión de magos (Elise/Brand) | **Horizon Focus** (reemplaza Nashor's en slot 2) | 2 700 | +10 % daño a >600 u + 80 AP + 25 AH |
| Vs curación enemiga (Mundo/Soraka) | **Morellonomicon** (reemplaza Cryptbloom) | 2 650 | 50 % Grievous Wounds + 75 AP + 300 HP |
| Vs asesinos burst (Ahri/Katarina en mid) | **Banshee's Veil** (reemplaza Cryptbloom) | 3 000 | Spell shield + 105 AP + 40 MR · Bloquea 1 habilidad clave |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|------|-------------------|
| ❌ Luden's Echo | −27 % DPS sostenido vs D2 · Clear -25 % más lento · Sin AS para Moonsilver |
| ❌ Infinity Orb | −15 % DPS sostenido · Solo brilla en burst <40 % HP (ventana estrecha en jungla) |
| ❌ Stormsurge | −12 % DPS vs D2 · Squall burst es situacional · Clear lento |
| ❌ Blackfire Torch | −18 % DPS vs D2 · Burn % HP es ineficiente en peleas cortas de jungla |
| ❌ Liandry's Torment | −22 % DPS vs D2 · Burn + Madness requieren >3 s de combate |
| ❌ Manamune/Archangel's | Maná base 435 + Talisman regen cubre · 700 stacks tardan 25+ min |
| ❌ Riftmaker | Omnivamp 6 % bajo · Requiere 4 s para rampar (Diana pelea en 2-3 s) |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: **Lethal Tempo**

**Por qué LT > Empowerment > Conqueror:**
- **LT:** +38.4 % AS a 6 stacks + bala adaptativa 6-24 (+0.67 % por 1 % AS bonus). Con Diana: AS bonus total ~1.5 → bala ~40 dmg adaptativo por proc. **DPS +30 % vs Empowerment** (validado en `tests/test_optimize_runes.py`).
- **Empowerment:** Proc 165 dmg + amp 8 % cada 4 s. Solo brilla en peleas >8 s (Diana prefiere burst+reset).
- **Conqueror:** ~30 adaptivo uptime 60 % + omnivamp 9 %. Sustain es redundante con W shield + Dusk cura.

**Alternativas:**
- *First Strike* vs junglas de invade temprano (Lee Sin/Nidalee) → +7 % verdadero 3 s + oro extra.
- *Electrocute* vs squishies puros → Burst 210+10 % AP · Pero sin AS para Moonsilver. Inferior en DPS total y clear.

### Secundarias — Tabla

| Slot | Runa | Valor estimado |
|------|------|---------------|
| Precisión 2 | **Legend: Haste** | +15 AH tope · Q CD 5 s → 3.2 s (+25 % casts/minuto) |
| Precisión 3 | **Triumph** | 10 % HP perdida por takedown + 35 MS · Crítico para resets con E tras gank |
| Precisión 4 | **Coup de Grace** | +8 % daño a <40 % HP · Sinergia con Q execute + R burst |
| Dominación 1 | **Hero** | +8 % daño a campeones · Esencial para ganks efectivos |
| Dominación 2 | **Ultimate Hunter** | -15 % CD de R → wombo combo cada 55 s (de 70 s base) |

### Hechizos: **Flash + Smite**

- **Smite:** Obligatorio jungla · Challenger Smite para Dragón/Herald/Barón.
- **Flash:** Innegociable · Para Q+Flash engage o E+Flash escape.
- **Alternativa rara:** *Flash + Ghost* en comps con muchos slows (Ashe/Nasus) · Pero sacrifica Smite = imposible jugar jungla.

### Orden de habilidades — **W → Q → E** (R en 5/9/13)

- **W nivel 1:** Escudo 50+0.4 AP + 3 esferas AoE = **clear seguro del primer campo** sin perder HP.
- **Q nivel 2:** Para aplicar Moonlight y resetear E si invade enemigo.
- **E nivel 3:** Dash + reset para ganks nivel 3.
- **Max Q primero:** 195+0.7 AP · CD 5 s base · Principal fuente de daño y aplicación de Moonlight.
- **W segundo:** Más escudo + daño AoE para clear y teamfights.
- **E último:** Solo necesitas el reset (CD 0.5 s con Moonlight).

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (nivel 15, LT full, vs 80 MR squishy · fight 10 s)

| Build | Oro | AP | AS | MR-ef | DPS 10 s | Burst | Fuente |
|-------|-----|----|----|-------|---------|-------|--------|
| **D2 Nashor híbrida** (Spellslinger+Nashor+Dusk+Rabadon+Zhonya+Crypt) | 17 900 | 480 | 1.72 | 56 | **971** | **1 792** | ⭐ LAB (óptima) |
| D1 Comunidad (D&D+Orb+Zhonya+Rabadon+Luden) | 17 700 | 420 | 1.22 | 56 | 764 | 1 598 | 🌐 comunidad |
| D3 Burst puro (Luden+Rabadon+Orb+Storm+Zhonya) | 17 500 | 460 | 0.85 | 56 | 688 | 1 845 | 🔬 LAB top-3 |
| D4 Anti-tanque (Void Staff reemplaza Crypt) | 17 900 | 475 | 1.72 | 126 | 612 | 1 680 | ⚠️ Situacional |

### Desglose multiplicativo de la diferencia (D2 vs D1)

| Factor | Multiplicador | Contribución |
|--------|--------------|-------------|
| AS 1.72 vs 1.22 | ×1.41 | +41 % DPS de autos + proc Moonsilver |
| Nashor's Gnaw (15+20 % AP on-hit) | +120 DPS | On-hit mágico cada golpe |
| Dusk Spellblade (75 % AD base + 10 % AP) | +85 DPS | Procca con Q/E/W cada 1.5 s |
| Rabadon's +30 % AP global | ×1.30 | Multiplica TODO el kit |
| Cryptbloom 30 % pen vs 18 plana | +12 % vs MR alta | Pen % escala mejor en late |
| **Neto:** | | **+27 % DPS sostenido · +12 % burst** |

---

## 9. PLAN DE JUEGO (Jungla)

### Early (0:00 – 6:30) — Clear y preparación

- **Ruta de clear recomendada:**
  - **Azul → Gromp → Lobos → Rojo → Raptors → Scuttle** (full clear nivel 4 al minuto 3:30).
  - **Rojo → Raptors → Lobos → Azul → Gromp → Scuttle** (ruta inversa para gank top).
- **Nivel 1:** W para clear seguro con escudo.
- **Nivel 3:** Primer gank viable con Q → Auto (Moonlight) → E (reset) → W (escudo) → Auto. Trade de ~200 dmg.
- **Gestión de maná:** Talisman + Boots of Mana cubren el clear completo. No necesitas Recall hasta completar Nashor's.
- **Objetivo:** Llegar a Nashor's Tooth al minuto 6:30 = **primer pico de poder**.
- **Cristales de torreta:** Desde min 5:00, si rotas a una lane, Q cargada detona cristal (~1 300 dmg verdadero).

### Mid (6:30 – 15:00) — Ganks y objetivos

- **Pico Nashor's Tooth (~6:30):** Gank agresivo con R+Q+E+W+Smite = ~800 dmg burst.
- **Rotaciones:** Prioriza lanes con CC aliado ( Ashe R, Lux Q, Nautilus Q) para asegurar Q.
- **Min 10:00:** ⬆️ Spellslinger's Shoes → Q cada ~3.2 s · Presión masiva en todos los carriles.
- **Dragón/herald:** Q al objetivo prioritario → E para reset → R para wombo combo. Proc AoE de Moonsilver = +40 % DPS a épicos.
- **Nivel 11:** 2.º punto de R → wombo combo cada 55 s (con Ultimate Hunter).
- **Control de visión:** Pink ward en río + oracle lens para asegurar Dragón.

### Late (15:00+) — Wombo combos y Barón

- **Posicionamiento:** Quédate en la niebla de guerra hasta que el tanque aliado engage o el enemigo gaste CC clave.
- **Prioridad de skills:**
  - **R:** Úsala para iniciar wombo combo sobre 2-3 enemigos o responder a engage enemigo.
  - **Q:** Aplica Moonlight para reset de E + daño AoE.
  - **E:** Reset con Moonlight · Dash para reposicionar o perseguir.
  - **W:** Escudo reactivo · Solo de emergencia para sobrevivir burst.
- **Zhonya's Play:** Si te saltan, activa Zhonya inmediatamente después de soltar R+E. Espera 2.5 s para que tu equipo remate.
- **Barón Nashor:** Diana es top-tier en Barón por el proc AoE de Moonsilver + Nashor's Gnaw. Smite a 1 200 HP para asegurar.

### Reglas del parche que cambian el macro jungla

| Regla | Impacto |
|-------|---------|
| Smite burn nerf 7.3a (-18 %) | Clear early más lento · Nashor's 1.º obligatorio |
| Torretas 7 000 HP + cristales | Q desde río detona cristales (~1 300 verdadero) |
| Placas permanentes + decaen desde 5:00 | Prioriza gank antes del 5:00 para placa aliada |
| Botas T3 solo desde 10:00 | No intentes mejorar antes |
| Minions 60 % daño a campeones | Counter-gank más seguro tras push enemigo |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|--------|--------|-----------|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de críticos 200 %, AS cap 3.0, apéndice AS 140 campeones, botas T3, Cristales de torreta |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Fin de encantamientos de botas, regla del min 10:00 |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Hotfix: Smite burn nerf (-18 %), Yun Tal AS buff, Death's Dance coste |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|--------|--------|-----------|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Diana | 24/09/2026 | Alta para kit; build popular es insumo, no conclusión |
| champion_winrates.csv | 24/09/2026 | Win rates Diamond+ · Refrescado 2×/día |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|------|-----------|
| Algunas guías sugieren Dusk first en jungla | Lo rechazamos: Nashor's 1.º es obligatorio tras Smite burn nerf 7.3a |
| Otras guías sugieren Luden's first | −27 % DPS sostenido vs D2 · Clear -25 % más lento |
| "Diana no necesita AS en jungla" (mito PC) | Falso: Moonsilver + Nashor + proc cada 3 golpes = +41 % DPS |
| AS cap 2.5 vs 3.0 | 7.3 subió cap a 3.0 · Diana ya no satura con LT+Moonsilver+Nashor |

### Supuestos del modelo (declarados)

- Uptime de Moonsilver Blade: 85 % en peleas, 95 % en clear.
- Haste 55 conservador (sin Transcendence al 100 %).
- Fight duration 10 s sostenido (skirmishes de río) · 3 s burst (gank inicial).
- Q acierta 85 % en ganks (rango 550 + slow de E).
- E resetea 100 % tras Q con Moonlight aplicado.
- R cargada 1 s (250-440 dmg) en wombo combo.
- Mitigación vs 80 MR squishy para daño Q; vs 180 MR se recomienda Void Staff.

### Contexto meta (24/09/2026, Diamond+)

**Diana Jungla: WR 50.82 %, pick 1.90 %, ban 0.29 %, tendencia ↓ 12.** Jungla es su rol viable y óptimo en 7.3 (Mid tiene 47.98 % WR). La comunidad la juega como burst puro (Luden's/Orb), ignorando que su ratio AS 0.694 + Moonsilver la convierten en un **jungla de combate prolongado**. Esta build D2-LT corrige el error sistémico y la consolida en Tier A.

### Validación del modelo

`validate_slots(["Spellslinger's", "Nashor", "DuskDawn", "Rabadon", "Zhonyas", "Cryptbloom"])` → **PASS** (6 entradas · 1 botas · 5 ítems · sin T2+T3 duplicadas).
Test de optimizador (motor `rotacion`, engine `analysis_batch2.diana`): D2-LT gana entre candidatas del reporte con score 100 % vs D1 (78 %), D3 (71 %), D4 (82 %).
Test de runas (`test_optimize_runes.py::test_diana_lt_gana`): Lethal Tempo supera a Empowerment y Conqueror para Diana D2.

---

## APÉNDICE A — POOL DE ÍTEMES DEL ROL: veredicto para Diana jungla

| Ítem (oro) | Veredicto | Nota |
|-----------|-----------|------|
| Nashor's Tooth (2 900) | ✅ CORE 1 | AS para Moonsilver + Gnaw on-hit · **1.º ítem obligatorio** |
| Dusk and Dawn (3 100) | ✅ CORE 2 | Spellblade + cura + AS + AP · Sinergia 100 % con kit |
| Rabadon's Deathcap (3 400) | ✅ CORE 3 | Multiplicador global de AP |
| Zhonya's Hourglass (3 300) | ✅ CORE 4 | Stasis post-dive · Obligatoria vs asesinos |
| Cryptbloom (3 000) | ✅ Default 6.º | 30 % pen mágica + cura AoE |
| Spellslinger's Shoes (2 200) | ✅ Botas | 18 pen plana + 8 % pen + AP |
| Void Staff (3 000) | ⚠️ Variante vs MR | 40 % pen mágica si enemigo tiene Force of Nature |
| Morellonomicon (2 650) | ⚠️ Variante vs curación | 50 % GW + 75 AP + 300 HP |
| Horizon Focus (2 700) | ⚠️ Variante vs invade mago | +10 % daño a >600 u + 80 AP + 25 AH |
| Banshee's Veil (3 000) | ⚠️ Variante vs burst | Spell shield + 105 AP + 40 MR |
| Luden's Echo (2 800) | ❌ Rechazado | −27 % DPS vs D2 · Clear -25 % más lento |
| Infinity Orb (3 100) | ❌ Rechazado | −15 % DPS sostenido · Solo burst <40 % HP |
| Stormsurge (2 800) | ❌ Rechazado | −12 % DPS vs D2 · Squall es situacional |
| Blackfire Torch (2 800) | ❌ Rechazado | −18 % DPS vs D2 · Burn ineficiente en peleas cortas |
| Liandry's Torment (3 000) | ❌ Rechazado | −22 % DPS vs D2 · Requiere >3 s de combate |
| Riftmaker (3 100) | ❌ Rechazado | Omnivamp 6 % bajo · Requiere 4 s para rampar |

---

## APÉNDICE B — RUTAS DE COMPRA

```
DEFAULT (Jungla óptima):
Hunter's Talisman → Recurve Bow + Fiendish Codex + Blasting Wand → Nashor's Tooth (6:30)
→ Boots of Mana (8:00) → Aether Wisp + Kindlegem + Fiendish → Dusk and Dawn (10:30)
→ ⬆️ Spellslinger's Shoes (12:00) → Blasting Wand + Needlessly Large Rod → Rabadon's (15:00)
→ Seeker's Armguard + Blasting Wand → Zhonya's (17:30)
→ Haunting Guise + Blasting Wand → Cryptbloom (20:00)

VS 2+ TANQUES CON MR (Variante Penetración):
... → Zhonya's → Void Staff (reemplaza Cryptbloom)
(40 % pen mágica para que tu Q y R ignoren Force of Nature enemiga)

VS COMPS FULL AD (Zed/Rengar/Yasuo):
... → Dusk and Dawn → Seeker's Armguard (early) → Zhonya's (slot 4, antes de Rabadon's)
→ Rabadon's (slot 5) → Cryptbloom (slot 6)
(Stasis 2.5 s + 40 Armadura para sobrevivir burst)

VS INVASIÓN DE MAGOS (Elise/Brand/Nidalee):
... → Nashor's → Horizon Focus (reemplaza Dusk and Dawn)
(+10 % daño a >600 unidades + 80 AP + 25 AH para contraatacar invade)

VS CURACIÓN ENEMIGA (Mundo/Soraka/Yuumi):
... → Zhonya's → Morellonomicon (reemplaza Cryptbloom)
(50 % Grievous Wounds + 75 AP + 300 HP)
```

---

## Pie de página

*Reporte generado el 08/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026, verificados contra nota EN oficial). WR-LAB v1.15.3. Las cifras de DPS y burst son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Referencias y créditos**

- Notas oficiales del parche 7.3 (21/09/2026), 7.2 (08/07/2026) y 7.3a (29/09/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de todos los cambios sistémicos, apéndice de Attack Speed y valores de ítems modificados.
- Base de datos de ítems, runas y fichas de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Fuente secundaria para stats no tocados por el parche.
- Estadísticas de meta actual — wr-meta.com Meta Overview (Diamond+, 24/09/2026) vía `champion_winrates.csv`.
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB v1.15.3 (`model/dps_model.py` + `model/analysis_batch2.py` + `model/optimize_build.py` + `model/optimize_runes.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.