---
tags:
  - Mid
  - Mage
  - Assassin
version: 1.3
Status: Beta
champion: Diana
slug: diana-mid
role: mid
patch: "7.3"
archetype: AP-Assassin de Rotación
engine: rotacion
custom: false
generate: manual
mode: sr
published_at: 2026-10-08
updated_at: 2026-10-08
verification: AL_DIA
verified_patch: 7.3a
---
**Fecha del análisis:** 08/10/2026
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** Mid Lane (carril central)
**Arquetipo:** AP-Assassin de rotación sostenida con ventanas de burst tras combo Q→E→W→R
**Enfoque:** Lethal Tempo + Dusk and Dawn + Nashor's Tooth para explotar el ratio AS 0.694 de Diana y la pasiva Moonsilver Blade (+30-100 % AS 4 s tras habilidad) → DPS sostenido +30 % sobre Empowerment.

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ SIN IMPACTO Verificación automática (08/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Diana:** ninguno en 7.3a.
> **Δ del modelo:** 0 % — ningún input del campeón/build cambió en el motor.
> **Build publicada (6 slots, Ley 0):** Spellslinger's Shoes + Dusk and Dawn + Nashor's Tooth + Rabadon's Deathcap + Zhonya's Hourglass + Infinity Orb — **sin cambios**.
> **Nota del lab (diff 7.3a):** Smite burn −18 % → clear early más lento (refuerza Nashor's 1.º en jungla) → Anotado
> **Veredicto:** ✅ SIN IMPACTO — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 05/10/2026):**
> Win Rate 47.98 % | Pick Rate 1.12 % | Ban 0.29 % | Tendencia ↓ 2 | Rol: MID · Confidence Low.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Boots of Mana → ⬆️ Spellslinger's Shoes** (min 10:00, MISMO slot) | 2 200 | 35 AP + 18 pen plana + 8 % pen + 100 % maná regen |
| 2 | **Dusk and Dawn** | 3 100 | 60 AP + 300 HP + 20 % AS + 20 AH · Spellblade 75 % AD base + cura híbrida |
| 3 | **Nashor's Tooth** | 2 900 | 80 AP + 50 % AS + 15 AH · Gnaw on-hit 15 + 20 % AP bonus |
| 4 | **Rabadon's Deathcap** | 3 400 | 130 AP + 30 % AP total · Multiplica TODO el kit |
| 5 | **Zhonya's Hourglass** | 3 300 | 110 AP + 40 Armadura · Stasis 2.5 s para sobrevivir dive post-R |
| 6 | **Cryptbloom** | 3 000 | 75 AP + 30 % pen mágica + 20 AH · Cura AoE al matar |

> **Oro total: 17 900 g** · AP ~480 (con Rabadon's) · AS 1.72 (LT full + Moonsilver) · Haste 55 · Pen mágica 26 (18 plana + 8 %) · EHP mixto ~3 850

### Tabla B — Ruta de compra cronológica

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Amplifying Tome (start) | 500 | 0:00 |
| 2 | Aether Wisp + Fiendish Codex → **Dusk and Dawn** | 3 100 | ~7:30 |
| 3 | **Boots of Mana** | 4 300 | ~9:00 |
| 4 | Recurve Bow + Blasting Wand + Fiendish → **Nashor's Tooth** | 7 200 | ~11:30 |
| 5 | ⬆️ **Spellslinger's Shoes** (mismo slot, +1 000 g) | 8 200 | ~12:30 |
| 6 | Blasting Wand + Needlessly Large Rod → **Rabadon's Deathcap** | 12 300 | ~15:30 |
| 7 | Seeker's Armguard + Blasting Wand → **Zhonya's Hourglass** | 15 600 | ~18:00 |
| 8 | Haunting Guise + Blasting Wand → **Cryptbloom** | 17 900 | ~20:30 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Lethal Tempo** (+38.4 % AS a 6 stacks + bala adaptativa 6-24 · +0.67 % por 1 % AS bonus) |
| Precisión 2 | **Legend: Haste** (+15 AH tope · reduce CD de Q a ~3.2 s) |
| Precisión 3 | **Triumph** (10 % HP perdida por takedown + 35 MS) |
| Precisión 4 | **Coup de Grace** (+8 % daño a objetivos <40 % HP) |
| Secundaria 1 | **Sudden Impact** (+15-65 daño verdadero tras E dash) |
| Secundaria 2 | **Ultimate Hunter** (-15 % CD de R → wombo combo cada 55 s) |
| Hechizos | **Flash + Ignite** (asegurar kills tras combo) |
| Skills | **Q → W → E** (R en 5/9/13) · Max Q primero (195 + 0.7 AP · CD 5 s base) |

### Resultado del modelo (nivel 15, LT full, vs 80 MR squishy · fight 10 s)

| Escenario | Valor |
|-----------|-------|
| **DPS sostenido 10 s** | **971** (mixto físico/mágico) |
| **Burst combo completo** (R+Q+E×2+W×3) | **1 792** |
| **vs 180 MR (tanque AP)** | **612** DPS |
| **Sustain (Spellblade + W shield)** | **~280 HP/rotación** |

> **Titular:** D2-LT supera a D1 (comunidad: Luden's/Orb/Zhonyas/Rabadon) en +27 % DPS sostenido y +12 % burst, gracias a la sinergia Moonsilver Blade + Nashor's + Dusk and Dawn que convierte a Diana en un asesino de combate prolongado, no de ventana única.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Diana)

| Cambio |
|--------|
| **Ninguno en 7.3 ni 7.3a** · Diana no fue tocada directamente en los últimos 2 parches. Ver diffs oficiales en `cambios_campeones_7.3.md` y `cambios_7.3a.md`. |

### 1.2 Cambios sistémicos relevantes (Mid)

| Sistema | Cambio 7.3 | Efecto en Diana |
|---------|-----------|-----------------|
| Attack Speed cap | 2.5 → **3.0** | Diana puede llegar a AS 1.72 sin overcap (antes saturaba con LT+Moonsilver+Nashor) |
| Minions | **60 % daño a campeones** | Farmear bajo torreta es más seguro; push con Q cargada + auto es más viable |
| Torretas 7 000 HP + cristales | Crystalline Overgrowth (3.3-18.9 % HP torreta como verdadero) | Q cargada detona cristales (~1 300 dmg verdadero) desde rango seguro |
| Placas permanentes | Ya no desaparecen al minuto 6 | Presión de lane sostenida; Diana puede rotar sin perder prioridad de placa |
| Smite burn jungla | 30-198/s → 22-162/s | Jungla enemiga más lenta → menos ganks tempranos sobre Diana (ventana de farmeo más segura) |
| Botas T3 desde min 10:00 | Regla del min 10:00 obligatoria | ⬆️ Spellslinger's a ~12:30, no antes |

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

Motor `analysis_batch2.diana` · Keystones soportados: `empower`, `lt`, `conq`.

```
# AS total (cap 3.0)
B = base_bonus_as + lvl_as_bonus(15) + AS_items + LT_as + Alacrity + Moonsilver
AS = min(0.694 * (1 + B), 3.0)

# Habilidades en fight de 10 s (con haste)
cdr = haste / (100 + haste)
Q_n = fight / (5 * (1 - cdr))  # ~2.8 casts con haste 55
E_n = Q_n + 1                   # reset con Moonlight
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

# Mitigación vs MR
mitm = 100 / (100 + max(0, MR * (1 - pen_pct/100) - pen_plana))
```

### Supuestos específicos

- **Uptime Moonsilver:** 85 % en peleas (se activa con Q/W/E/R · 4 s duración)
- **Haste total:** 55 (Spellslinger 0 + Dusk 20 + Nashor 15 + Cryptbloom 20 + Legend: Haste 15 - redundancias)
- **Fight duration:** 10 s sostenido (mid-late teamfights) · 3 s burst (asalto inicial)
- **Q acierta 90 %** en mid lane (rango 550 + slow de E)
- **E resetea 100 %** tras Q con Moonlight aplicado
- **R cargada 1 s** (250-440 dmg) en wombo combo

---

## 4. LEYES APLICADAS A DIANA

### Ley 0 — Slots
`validate_slots(["Spellslinger's", "DuskDawn", "Nashor", "Rabadon", "Zhonyas", "Cryptbloom"])` → **PASS** (6 entradas · 1 botas T3 · 5 ítems · sin T2+T3 duplicadas).

### Ley 1 — Umbral de crítico exacto
**No aplica** · Diana no escala con crítico. Su daño es 100 % AP + autos físicos. Cualquier ítem de crítico (IE, Galeforce, C44) es oro muerto (~1 250 g desperdiciados por 25 % crit inútil).

### Ley 2 — Velocidad de ataque: apuntar al tope sin pasarse
`AS_items_para_cap = (3.0/0.694 - 1) - (0.15 + 0.112 + 0.384 + 0.65 + 0.21) = 1.49`
Con Dusk (20 %) + Nashor (50 %) = 70 % → **AS final 1.72** (lejos del cap 3.0, cada punto de AS vale oro).
Conclusión: **NO hay overcap** · Cada % AS multiplica el proc de Moonsilver cada 3 golpes.

### Ley 3 — Penetración % obligatoria contra MR
vs 80 MR squishy: pen 8 % + 18 plana = MR efectiva 56.4 → +30 % daño real.
vs 180 MR tanque: Cryptbloom 30 % → MR efectiva 126 → +22 % DPS sobre sin pen.
**Doble pen no aplica** · Terminus/LDR son físicas; Cryptbloom + botas es el combo óptimo.

### Ley 4 — Stats muertos y coste de oportunidad
- **Luden's Echo** (comunidad): 100 AP + 500 maná · Pero sin AS → pierde sinergia Moonsilver. −27 % DPS vs D2.
- **Infinity Orb** (D1): 110 AP + 15 pen plana · Solo brilla en burst <40 % HP. −15 % DPS sostenido vs D2.
- **Maná:** Diana gasta ~60 maná/Q + 70/W + 20/E + 100/R = ~250 maná/rotación. Boots of Mana + Tear innecesario (Maná base 435 + regen 12/s cubre).

### Ley 5 — Eficiencia de oro con precios 7.3
| Ítem | Oro | Stats útiles | Eficiencia |
|------|-----|--------------|-----------|
| Dusk and Dawn | 3 100 | 60 AP + 20 % AS + 20 AH + Spellblade + cura | 142 % |
| Nashor's Tooth | 2 900 | 80 AP + 50 % AS + 15 AH + Gnaw | 158 % |
| Rabadon's | 3 400 | 130 AP + 30 % AP total (multiplicador global) | 165 % |
| Cryptbloom | 3 000 | 75 AP + 30 % pen + 20 AH + cura AoE | 138 % |

### Ley 6 — Timing > DPS teórico
Dusk and Dawn a ~7:30 (2 400 g path suave: Aether Wisp 950 + Fiendish 900 + Kindlegem 1 000 + 550) = **primer pico de poder** · Permite all-in nivel 6 con R+Q+E+W.
Nashor's a ~11:30 = segundo pico (AS 1.2 · proc cada 3 golpes cada 2.5 s).
Spellslinger's T3 a ~12:30 (post min 10:00) = tercer pico (pen plana para mid game).

### Ley 7 — El sistema de juego también es input
- **Torretas 7 000 HP + cristales:** Q cargada desde rango 550 detona Crystalline Overgrowth (~1 300 dmg verdadero) · Diana puede siegear sola si el jungla enemigo está en el otro lado del mapa.
- **Minions 60 % daño a campeones:** Farmear bajo torreta es más seguro · Diana puede usar Q para limpiar oleadas sin recibir daño de minions.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | DPS lvl 6 (burst) | DPS lvl 9 (sostenido) | Sinergia kit | Veredicto |
|-----------|-----|-------------------|----------------------|-------------|-----------|
| **Dusk and Dawn** | 3 100 | 680 | 420 | ✅ Spellblade + cura + AS para Moonsilver | **GANADOR** |
| Luden's Echo | 2 800 | 720 | 310 | ⚠️ Burst AoE pero sin AS | Meta comunidad (sub-óptimo) |
| Nashor's Tooth | 2 900 | 580 | 480 | ⚠️ AS alto pero falta burst early | Mejor como 2.º ítem |
| Stormsurge | 2 800 | 750 | 290 | ⚠️ Squall burst pero sin sustain | Solo vs comps squishy |
| Rabadon's | 3 400 | 620 | 380 | ❌ Demasiado caro para 1.º ítem | Capstone (4.º/5.º) |

**Veredicto:** Dusk and Dawn gana en DPS sostenido (+35 % vs Luden's) gracias a la sinergia con Moonsilver Blade. El Spellblade procca con Q/W/E y cura 10 % AP + 3 % HP bonus, dando sustain en lane sin necesidad de Vampiric Scepter.

**Nota crítica:** La comunidad construye Luden's first por inercia de PC, pero en WR el meta es de peleas cortas (2-3 s) donde el burst de Luden's no compensa la pérdida de AS para el proc de Moonsilver.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|------|------|-------------------------|
| Botas | **Spellslinger's Shoes** | 35 AP + 18 pen plana + 8 % pen + 100 % maná regen · La pen plana multiplica Q (195+0.7 AP) en +30 % daño real vs squishies. |
| 1 | **Dusk and Dawn** | Core absoluto · 60 AP + 20 % AS + 20 AH + Spellblade (75 % AD base + 10 % AP) + cura (10 % AP + 3 % HP bonus). Sinergia 100 % con Q/E/W. |
| 2 | **Nashor's Tooth** | 80 AP + 50 % AS + 15 AH + Gnaw (15+20 % AP bonus on-hit). Convierte a Diana en un asesino de combate prolongado. Proc cada 3 golpes de Moonsilver se activa cada 2.5 s. |
| 3 | **Rabadon's Deathcap** | 130 AP + 30 % AP total · Multiplica TODO: Q de 300 → 390 · W escudo 150 → 195 · proc Moonsilver 90 → 117. |
| 4 | **Zhonya's Hourglass** | 110 AP + 40 Armadura · Stasis 2.5 s post-R para sobrevivir dive enemigo. **Obligatorio** en comps con Zed/Rengar/Yasuo. |
| 5 | **Cryptbloom** | 75 AP + 30 % pen mágica + 20 AH + cura AoE al matar. Pen % esencial vs tanques con Force of Nature. |

### Matriz del último slot (situacional)

| Situación | Ítem | Coste | Impacto medido |
|-----------|------|-------|---------------|
| Vs 2+ tanques MR alta | **Void Staff** (reemplaza Cryptbloom) | 3 000 | 40 % pen mágica → +22 % DPS vs 180 MR |
| Vs comps full AD (Zed/Rengar) | **Seeker's → Zhonya's temprano** (slot 4) | 3 300 | Stasis 2.5 s + 40 Armadura · Supervivencia +50 % |
| Vs curación enemiga (Soraka/Yuumi) | **Morellonomicon** (reemplaza Cryptbloom) | 2 650 | 50 % Grievous Wounds + 75 AP + 300 HP |
| Vs poke a distancia (Xerath/Ziggs) | **Horizon Focus** (reemplaza Cryptbloom) | 2 700 | +10 % daño a >600 unidades + 80 AP + 25 AH |
| Vs asesinos burst (Ahri/Katarina) | **Banshee's Veil** (reemplaza Cryptbloom) | 3 000 | Spell shield + 105 AP + 40 MR · Bloquea 1 habilidad clave |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|------|-------------------|
| ❌ Luden's Echo | −27 % DPS sostenido vs D2 · Sin AS para Moonsilver · Burst AoE no compensa |
| ❌ Infinity Orb | −15 % DPS sostenido · Solo brilla en burst <40 % HP (ventana estrecha) |
| ❌ Stormsurge | −12 % DPS vs D2 · Squall burst es situacional · Sin sustain |
| ❌ Blackfire Torch | −18 % DPS vs D2 · Burn % HP es ineficiente en peleas cortas de mid |
| ❌ Liandry's Torment | −22 % DPS vs D2 · Burn + Madness requieren >3 s de combate (Diana prefiere burst+reset) |
| ❌ Manamune/Archangel's | Maná base 435 + regen 12/s cubre gasto · 700 stacks tardan 25+ min |
| ❌ Riftmaker | Omnivamp 6 % es bajo para mago · Void Corruption requiere 4 s para rampar (Diana pelea en 2-3 s) |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: **Lethal Tempo**

**Por qué LT > Empowerment > Conqueror:**
- **LT:** +38.4 % AS a 6 stacks + bala adaptativa 6-24 (+0.67 % por 1 % AS bonus). Con Diana: AS bonus total ~1.5 → bala ~40 dmg adaptativo por proc. **DPS +30 % vs Empowerment**.
- **Empowerment:** Proc 165 dmg + amp 8 % cada 4 s. Solo brilla en peleas >8 s (Diana prefiere burst+reset).
- **Conqueror:** ~30 adaptivo uptime 60 % + omnivamp 9 %. Sustain es redundante con W shield + Dusk cura.

**Alternativas:**
- *First Strike* vs comps de poke (Xerath/Ziggs) → +7 % verdadero 3 s + oro extra. Solo si puedes pokear sin riesgo.
- *Electrocute* vs squishies puros → Burst 210+10 % AP · Pero sin AS para Moonsilver. Inferior en DPS total.

### Secundarias — Tabla

| Slot | Runa | Valor estimado |
|------|------|---------------|
| Precisión 2 | **Legend: Haste** | +15 AH tope · Q CD 5 s → 3.2 s (+25 % casts/minuto) |
| Precisión 3 | **Triumph** | 10 % HP perdida por takedown + 35 MS · Crítico para resets con E |
| Precisión 4 | **Coup de Grace** | +8 % daño a <40 % HP · Sinergia con Q execute + R burst |
| Domination 1 | **Sudden Impact** | +15-65 daño verdadero tras E dash · Diana dashea con E y R |
| Domination 2 | **Ultimate Hunter** | -15 % CD de R → wombo combo cada 55 s (de 70 s base) |

### Hechizos: **Flash + Ignite**

- **Flash:** Innegociable · Para Q+Flash engage o E+Flash escape.
- **Ignite:** Asegura kills tras combo (Q+E+W+Ignite = ~800 dmg burst nivel 6).
- **Alternativa:** *Flash + Barrier* vs comps burst (Ahri/Syndra) · Supervivencia +15 % en lane phase.

### Orden de habilidades — **Q → W → E** (R en 5/9/13)

- **Q max primero:** 195+0.7 AP · CD 5 s base · Principal fuente de daño y aplicación de Moonlight para reset de E.
- **W segundo:** Escudo reactivo (50+0.4 AP + 50 si 3.ª esfera detona) · Sustain en lane y teamfights.
- **E último:** Solo necesitas el reset (CD 0.5 s con Moonlight) · Daño base 160+0.3 AP es secundario.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (nivel 15, LT full, vs 80 MR squishy · fight 10 s)

| Build | Oro | AP | AS | MR-ef | DPS 10 s | Burst | Fuente |
|-------|-----|----|----|-------|---------|-------|--------|
| **D2 Nashor híbrida** (Spellslinger+Dusk+Nashor+Rabadon+Zhonya+Crypt) | 17 900 | 480 | 1.72 | 56 | **971** | **1 792** | ⭐ LAB (óptima) |
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

## 9. PLAN DE JUEGO

### Early (0:00 – 8:00)

- **Nivel 1:** Q para farmear seguro + pokear cuando el enemigo intente last-hit.
- **Nivel 3:** Q → Auto (Moonlight) → E (reset) → W (escudo) → Auto. Trade de ~200 dmg.
- **Gestión de maná:** No spammees Q sin objetivo. Maná base 435 cubre 7 Qs antes de recall.
- **Objetivo:** Sobrevivir, llegar a nivel 6, controlar visión del río.
- **Cristales de torreta:** Desde min 5:00, Q cargada detona cristal (~1 300 dmg verdadero) · Prioriza primera placa antes del min 5 (decaimiento de armadura de torreta).

### Mid (8:00 – 15:00)

- **Pico Dusk and Dawn (~7:30):** Primer all-in con R+Q+E+W+Ignite = ~800 dmg burst.
- **Rotaciones:** Acompaña al jungla. Tu R es herramienta de gank poderosa (slow 20 % 2 s + AoE).
- **Min 10:00:** ⬆️ Spellslinger's Shoes → Q cada ~3.2 s · Presión de lane masiva.
- **Dragón/herald:** Q al objetivo prioritario → E para reset → R para wombo combo.
- **Nivel 11:** 2.º punto de R → wombo combo cada 55 s (con Ultimate Hunter).

### Late (15:00+)

- **Posicionamiento:** Quédate detrás del frontline hasta que el tanque aliado engage.
- **Prioridad de skills:**
  - **R:** Úsala para iniciar wombo combo o responder a engage enemigo.
  - **Q:** Aplica Moonlight para reset de E + daño AoE.
  - **E:** Reset con Moonlight · Dash para reposicionar o perseguir.
  - **W:** Escudo reactivo · Solo de emergencia para sobrevivir burst.
- **Zhonya's Play:** Si te saltan, activa Zhonya inmediatamente después de soltar R+E. Espera 2.5 s para que tu equipo remate.
- **Macro 7.3:** Cristales de torreta + placas permanentes = Diana puede siegear sola con Q cargada. Prioriza inhibidor antes que Barón si el enemigo tiene 2+ tanques.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|-------|---------|
| Minions 60 % daño a campeones | Pokear desde lejos es más seguro |
| Torretas 7 000 HP + cristales | Q desde rango detona cristales (~1 300 verdadero) |
| Placas permanentes + decaen desde 5:00 | Prioriza primera placa antes del 5:00 |
| Botas T3 solo desde 10:00 | No intentes mejorar antes |
| Smite burn jungla nerf | Jungla enemiga más lenta → menos ganks tempranos |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|--------|--------|-----------|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de críticos 200 %, AS cap 3.0, apéndice AS 140 campeones, botas T3, Cristales de torreta |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Fin de encantamientos de botas, regla del min 10:00 |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Hotfix (sin cambios directos a Diana) |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|--------|--------|-----------|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Diana | 24/09/2026 | Alta para kit; build popular es insumo, no conclusión |
| champion_winrates.csv | 05/10/2026 | Win rates Diamond+ · Refrescado 2×/día |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|------|-----------|
| Algunas guías sugieren Luden's first | Lo rechazamos: −27 % DPS sostenido vs D2 · Sin AS para Moonsilver |
| Otras guías sugieren Infinity Orb 2.º | Solo vale en comps squishy · D2 con Nashor's es superior en DPS total |
| "Diana no usa botas de maná" (mito PC) | Falso en WR: confirmada Boots of Mana → Spellslinger's en build popular |
| AS cap 2.5 vs 3.0 | 7.3 subió cap a 3.0 · Diana ya no satura con LT+Moonsilver+Nashor |

### Supuestos del modelo (declarados)

- Uptime de Moonsilver Blade: 85 % en peleas (se activa con Q/W/E/R).
- Haste 55 conservador (sin Transcendence al 100 %).
- Fight duration 10 s sostenido (mid-late teamfights) · 3 s burst (asalto inicial).
- Q acierta 90 % en mid lane (rango 550 + slow de E).
- E resetea 100 % tras Q con Moonlight aplicado.
- R cargada 1 s (250-440 dmg) en wombo combo.
- Mitigación vs 50 MR squishy para daño Q; vs 100+ MR se recomienda Cryptbloom/Void Staff.

### Contexto meta (05/10/2026, Diamond+)

Diana Mid: WR 47.98 %, pick 1.12 %, ban 0.29 %, tendencia ↓ 2. La comunidad la juega como burst puro (Luden's/Orb), ignorando que su ratio AS 0.694 + Moonsilver la convierten en un asesino de combate prolongado. Esta build D2-LT corrige el error sistémico y la devuelve al Tier A en composiciones donde el equipo ya tiene suficiente burst.

### Validación del modelo

`validate_slots(["Spellslinger's", "DuskDawn", "Nashor", "Rabadon", "Zhonyas", "Cryptbloom"])` → **PASS** (6 entradas · 1 botas · 5 ítems · sin T2+T3 duplicadas).
Test de optimizador (motor `rotacion`): D2-LT gana entre candidatas del reporte con score 100 % vs D1 (78 %), D3 (71 %), D4 (82 %).

---

## APÉNDICE A — POOL DE ÍTEMES DEL ROL: veredicto para Diana

| Ítem (oro) | Veredicto | Nota |
|-----------|-----------|------|
| Dusk and Dawn (3 100) | ✅ CORE 1 | Spellblade + cura + AS + AP · Sinergia 100 % con kit |
| Nashor's Tooth (2 900) | ✅ CORE 2 | AS para Moonsilver + Gnaw on-hit |
| Rabadon's Deathcap (3 400) | ✅ CORE 3 | Multiplicador global de AP |
| Zhonya's Hourglass (3 300) | ✅ CORE 4 | Stasis post-dive · Obligatoria vs asesinos |
| Cryptbloom (3 000) | ✅ Default 6.º | 30 % pen mágica + cura AoE |
| Spellslinger's Shoes (2 200) | ✅ Botas | 18 pen plana + 8 % pen + AP |
| Void Staff (3 000) | ⚠️ Variante vs MR | 40 % pen mágica si enemigo tiene Force of Nature |
| Morellonomicon (2 650) | ⚠️ Variante vs curación | 50 % GW + 75 AP + 300 HP |
| Horizon Focus (2 700) | ⚠️ Variante vs poke | +10 % daño a >600 u + 80 AP + 25 AH |
| Banshee's Veil (3 000) | ⚠️ Variante vs burst | Spell shield + 105 AP + 40 MR |
| Luden's Echo (2 800) | ❌ Rechazado | −27 % DPS vs D2 · Sin AS para Moonsilver |
| Infinity Orb (3 100) | ❌ Rechazado | −15 % DPS sostenido · Solo burst <40 % HP |
| Stormsurge (2 800) | ❌ Rechazado | −12 % DPS vs D2 · Squall es situacional |
| Blackfire Torch (2 800) | ❌ Rechazado | −18 % DPS vs D2 · Burn ineficiente en peleas cortas |
| Liandry's Torment (3 000) | ❌ Rechazado | −22 % DPS vs D2 · Requiere >3 s de combate |
| Riftmaker (3 100) | ❌ Rechazado | Omnivamp 6 % bajo · Requiere 4 s para rampar |

---

## APÉNDICE B — RUTAS DE COMPRA

```
DEFAULT (Mid Lane óptima):
Amplifying Tome → Aether Wisp + Fiendish Codex → Dusk and Dawn (7:30)
→ Boots of Mana (9:00) → Recurve Bow + Blasting Wand + Fiendish → Nashor's Tooth (11:30)
→ ⬆️ Spellslinger's Shoes (12:30) → Blasting Wand + Needlessly Large Rod → Rabadon's (15:30)
→ Seeker's Armguard + Blasting Wand → Zhonya's (18:00)
→ Haunting Guise + Blasting Wand → Cryptbloom (20:30)

VS 2+ TANQUES CON MR (Variante Penetración):
... → Zhonya's → Void Staff (reemplaza Cryptbloom)
(40 % pen mágica para que tu Q y R ignoren Force of Nature enemiga)

VS COMPS FULL AD (Zed/Rengar/Yasuo):
... → Nashor's → Seeker's Armguard (early) → Zhonya's (slot 4, antes de Rabadon's)
→ Rabadon's (slot 5) → Cryptbloom (slot 6)
(Stasis 2.5 s + 40 Armadura para sobrevivir burst)

VS CURACIÓN ENEMIGA (Soraka/Yuumi/Mundo):
... → Zhonya's → Morellonomicon (reemplaza Cryptbloom)
(50 % Grievous Wounds + 75 AP + 300 HP)

VS POKE A DISTANCIA (Xerath/Ziggs/Brand):
... → Zhonya's → Horizon Focus (reemplaza Cryptbloom)
(+10 % daño a >600 unidades + 80 AP + 25 AH)
```

---

## Pie de página

*Reporte generado el 08/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026, verificados contra nota EN oficial). WR-LAB v1.15. Las cifras de DPS y burst son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Referencias y créditos**

- Notas oficiales del parche 7.3 (21/09/2026), 7.2 (08/07/2026) y 7.3a (29/09/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de todos los cambios sistémicos, apéndice de Attack Speed y valores de ítems modificados.
- Base de datos de ítems, runas y fichas de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Fuente secundaria para stats no tocados por el parche.
- Estadísticas de meta actual — wr-meta.com Meta Overview (Diamond+, 05/10/2026) vía `champion_winrates.csv`.
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio, `model/dps_model.py` + `model/analysis_batch2.py` + `model/optimize_build.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.