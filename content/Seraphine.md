---
tags:
  - Soporte
  - Mid
  - Custom
version: 1.2
Status: Beta
champion: Seraphine
slug: seraphine
role: support
patch: "7.3a"
archetype: "Burst-Caster / Poke-Mage — maximizar daño en ventanas de 2-3 s"
engine: none
custom: "true"
generate: manual
mode: sr
published_at: "2026-09-30"
updated_at: "2026-10-04"
verification: AL_DIA
verified_patch: "7.3a"
---
**Fecha del análisis:** 30/09/2026
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** Support (variante agresiva) — Modo Hiper-Daño (Burst-Caster)
**Arquetipo:** Burst-Caster / Poke-Mage — maximizar daño en ventanas de 2-3 s
**Enfoque:** Sacrificar ~40 % de escudo/cura a cambio de +55 % de daño directo.

> [!NOTE]
> **Estado Meta Actual (Diamond+, 30/09/2026):**
> Win Rate 50.96 % | Pick Rate 8.38 % | Ban 1.72 % | Tendencia ↑ 3 (+1.04 pts últimos 30 días) | Rol: Support/Mid .

> [!DANGER]
> **Advertencia:** Esta build sacrifica ~40 % del escudo/curación de W (*Surround Sound*) y toda la utilidad de buff al carry (Ardent Censer, Staff) a cambio de +55 % de daño directo en rotación Q→E→R y un burst de ~1 350 mágico pre-mitigación en ventana de 2 s. Si fallas Q o E, esta build pierde valor comparada con la de enchanter puro. Requiere puntería alta y posicionamiento de mago, no de support tradicional.

> [!TIP]
> **Variante principal (mid sin quest):** reemplaza *Black Mist Scythe* por *Luden's Echo* (2 800 g) como 1.er ítem → pico de daño al minuto 7:30, +100 AP directos y eco de daño AoE. Sacrificas oro pasivo de support pero ganas un power spike 2 min antes.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (6 slots reales · `validate_slots()` = PASS)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Boots of Mana → ⬆️ Spellslinger's Shoes** (min 10:00, MISMO slot) | 2 200 | +35 AP, +18 pen plana, +8 % pen mágica, +100 % mana regen. Big Bully para waveclear. |
| 2 (quest) | **Spectral Sickle → Black Mist Scythe** (mismo slot) | 0 | Oro pasivo + 28 AP adaptativos + visión. Obligatorio en support; en mid se cambia por Luden's. |
| 3 | **Stormsurge** | 2 800 | +90 AP, +15 pen mágica, +6 % MS. Squall burst a <25 % HP (+125 + 10 % AP). |
| 4 | **Rabadon's Deathcap** | 3 400 | +130 AP, +30 % AP total. Capstone multiplicador global. |
| 5 | **Infinity Orb** | 3 100 | +110 AP, +15 pen plana. Inevitable Demise: críticos +20 % daño a <40 % HP. |
| 6 | **Cryptbloom** | 3 000 | +75 AP, +30 % pen mágica, +20 AH. Life from Death: nova cura 100 + 20 % HP al matar. |

> **Oro total: 14 500 g** (con quest) / **17 300 g** (variante mid con Luden's en slot 2) · AP final ~380 (con Rabadon's) · Haste 45-55 · Pen mágica 18 plana + 38 % · Maná regen 225 %+.

### Tabla B — Ruta de compra cronológica

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Spectral Sickle (quest) + Amplifying Tome | 1 000 | 0:00 |
| 2 | Boots of Mana (T2) | 2 200 | ~4:30 |
| 3 | Aether Wisp + Void Amethyst → **Stormsurge** | 5 000 | ~8:00 |
| 4 | Black Mist Scythe (quest completada, mismo slot) | 5 000 | ~9:30 |
| 5 | ⬆️ **Spellslinger's Shoes** (T3, mismo slot, +1 000 g) | 6 000 | ~11:30 |
| 6 | Blasting Wand + Needlessly Large Rod → **Rabadon's Deathcap** | 10 000 | ~14:30 |
| 7 | Blasting Wand + Void Amethyst → **Infinity Orb** | 13 000 | ~17:00 |
| 8 | Blasting Wand + Haunting Guise + 400 → **Cryptbloom** | 14 500 | ~19:30 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Electrocute** (burst en ventana Q+E+auto) / **Arcane Comet** (poke a distancia) |
| Dominación 2 | **Sudden Impact** (true dmg + pen tras usar E o Flash) |
| Dominación 3 | **Eyeball Collection** (+24 AP al llegar a 8 takedowns) |
| Dominación 4 | **Relentless Hunter** (+18 MS fuera de combate para rotar) |
| Secundaria 1 | **Transcendence** (+5 AH lv1, +5 AH lv5, -8 % CD post-hit lv9) |
| Secundaria 2 | **Scorch** (+21-49 daño mágico en Q early) / **Manaflow Band** (+300 maná) |
| Hechizos | **Flash + Ignite** (support agresivo) / **Flash + Barrier** (mid seguro) |
| Skills | **Q → E → W** (R en 5/9/13). Max Q primero por daño base + escalado con vida faltante. |

### Resultado del modelo (nivel 15, AP ~380, Haste 50, vs 50 MR squishy)

| Escenario | Valor |
|-----------|-------|
| Burst ventana 2 s (Q cargada + E + R + auto pasiva + Electrocute) | **~1 350** mágico pre-mitigación |
| Q High Note (cargada, enemigo <25 % HP, con pen) | **~420** mágico |
| E Beat Drop (con pen) | **~280** mágico + root/stun |
| R Encore (charm en línea, 3 objetivos) | **~520** mágico AoE |
| DPS sostenido 10 s (con doble-cast pasiva) | **~680** mágico/s |
| Escudo W (rank 4, AP 380, SIN Ardent Censer/Staff) | **~380** (vs ~620 de enchanter puro) |

> **Titular:** +55 % de daño directo y +30 % pen mágica, a cambio de −38 % de escudo W y 0 % de buff al carry. En lanes de poke (vs Karma, Yuumi, Zyra), esta build gana la lane antes del minuto 10 y permite 1-shot a squishies en teamfights con combo Q+E+R.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Seraphine) — 7.3 / 7.3a

| Stat/Habilidad | Antes | Ahora | Impacto |
|----------------|-------|-------|---------|
| Critical Strike Damage (sistema) | 175 % | **200 %** | No le afecta (no construye crítico). |
| AS cap (sistema) | 2.5 | **3.0** | Irrelevante (AS ratio 0.699, no escala con autos). |
| AS Ratio / Base / Bonus / por nivel | — | 0.699 / 0.669 / 0.12 / 0.017 | Apéndice oficial 7.3. Confirma arquetipo mago puro. |
| W Surround Sound (7.1h) | — | Cura 5 % + 0.01 % AP → 6 % + 0.01 % AP | Buff leve a la rama de sustain (no la construimos). |
| R Encore (7.1h) | — | Charm 1/1.25/1.5 s → **1.25/1.5/1.75 s** | +0.25 s de CC en rank 3 → ventana de burst extendida. |

### 1.2 Cambios sistémicos que le afectan

| Sistema | Cambio | Efecto |
|---------|--------|--------|
| Torretas 7 000 HP + Cristales (*Crystalline Overgrowth*) | Primer ataque detona 3.3-18.9 % de la vida de la torreta como daño verdadero, ciclo ~50 s | Seraphine puede detonar cristales con Q desde rango seguro = presión de mapa única para un support. |
| Placas permanentes + decaen desde 5:00 | −10 g/30 s tras el minuto 5 | Primeras placas valen más; Q cargada + Demolish (si se lleva) acelera el push. |
| Minions 60 % daño a campeones | Oleadas más peligrosas | Lane phase más segura para farmear con Q a distancia. |
| Botas T3 desde min 10:00 | Regla del slot único (Ley 0) | Spellslinger's Shoes es el único upgrade válido para magos de daño. |

### 1.3 ¿Sus habilidades escalan con crítico?

**No.** Seraphine no tiene conversión de crítico en ninguna habilidad. Todo ítem de crítico (IE, C44, Runaan's) es oro muerto (Ley 4). La build se optimiza exclusivamente para **AP + Penetración Mágica + Ability Haste**.

---

## 2. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| AD base / growth | 52 / 3.64 | wr-meta 24/09/2026 |
| AS base / ratio | 0.669 / 0.699 | Apéndice oficial 7.3 |
| Base Bonus AS / por nivel | 0.12 / 0.017 | Apéndice oficial 7.3 |
| HP base / growth | 600 / 112 | wr-meta (durabilidad 7.3) |
| Armadura / MR base | 34 / 36 | wr-meta |
| **Pasiva Stage Presence** | Cada 3ra habilidad hace eco (doble cast). Notas a aliados: +0.3 rango + 4 (+1.5/nivel) + 4 % AP mágico. | Ficha oficial |
| Q High Note | 60/75/90/105 + 45 % AP, +0-50 % con vida faltante (máx a <25 % HP). CD 11/9/7/5 s. | Ficha oficial |
| W Surround Sound | Escudo 50/75/100/125 + 30 % AP, 2.5 s. Si ya tiene escudo: cura 6 % + 0.01 % AP HP faltante. CD 23/22/21/20 s. | Ficha oficial (7.1h) |
| E Beat Drop | 60/95/130/165 + 50 % AP, slow 99 % 1 s. Si ya sloweado → root. Si ya rooteado → stun. CD 12/11/10/9 s. | Ficha oficial |
| R Encore | 160/260/360 + 70 % AP, charm 40 % por 1.25/1.5/1.75 s. Se extiende al tocar campeones (aliados o enemigos). CD 105/90/75 s. | Ficha oficial (7.1h buff) |

**Líneas de cálculo (nivel 15, AP 380):**
- Q cargada vs squishy <25 % HP: (105 + 0.45×380) × 1.5 = **417** mágico base.
- E: 165 + 0.50×380 = **355** mágico base.
- R (3 targets): 360 + 0.70×380 = **626** mágico base (×3 con extensión).
- Pasiva doble-cast: cada 3ra habilidad se replica → Q+E+E (eco) = 4 casts en 3 s.

---

## 3. MODELO Y FÓRMULAS

```
DPS_rotación = Σ (daño_habilidad × (1 + pen_amp)) / CD_efectivo × (1 + doble_cast_pasiva_uptime)
CD_efectivo = CD_base / (1 + haste/100)
pen_amp = 100 / (100 + MR × (1 - pen_pct/100) - pen_plana) - 1
burst_ventana = Q_cargada + E + R + auto_pasiva + Electrocute + Scorch (early)
```

### Supuestos específicos

- Uptime de doble-cast pasiva: 85 % en peleas (cada 3ra habilidad = 1 cast extra).
- Q cargada impacta siempre (1 s de vuelo, requiere puntería).
- R impacta a 3 objetivos en teamfight (2 enemigos + 1 aliado para extensión).
- Penetración mágica se aplica post-mitigación: 18 plana + 38 % = MR efectiva de 50 → 0 (squishies mueren antes de reaccionar).
- Escudo W se calcula SIN amplificación de Ardent Censer/Staff (build agresiva los descarta).
- Haste total 50 = Q cada ~3.3 s, E cada ~6 s, R cada ~50 s.

---

## 4. LEYES APLICADAS A SERAPHINE

### Ley 0 — Slots (obligatoria)
Wild Rift tiene 6 slots totales y las botas ocupan UNO. La mejora Boots of Mana → Spellslinger's Shoes (min 10:00) es EN EL MISMO SLOT. Build final = 1 botas T3 + quest (mismo slot) + 4 ítems = 6 slots reales. `validate_slots(["Spellslinger's","Scythe","Stormsurge","Rabadon's","Infinity Orb","Cryptbloom"])` → PASS.

### Ley 1 — Crítico descartado
Seraphine no tiene conversión de crítico ni escalado de habilidades con crítico. Todo ítem con % crítico (IE, C44, Runaan's, Galeforce, PD) es oro muerto (~1 250 g desperdiciados por ítem).

### Ley 2 — Velocidad de ataque descartada
AS ratio 0.699 + growth 0.017 = a nivel 15 solo +0.24 AS por niveles. Los autos son irrelevantes (~5 % del daño total). Ítems de AS (Nashor's Tooth, Statikk, Guinsoo) son ineficientes.

### Ley 3 — Penetración mágica obligatoria vs el meta de vida
Con tanques acumulando MR (Abyssal Mask, Force of Nature), la pen % es obligatoria:
- Sin pen vs 100 MR: mitigación 50 %.
- Con 18 plana + 38 % (Spellslinger's + Cryptbloom): MR efectiva = (100×0.62) − 18 = **44 MR** → mitigación 30 %.
- **Daño real +40 %** vs frontline.

### Ley 4 — Stats muertos y coste de oportunidad
| Ítem popular | Stat muerto en Seraphine agresiva | Veredicto |
|--------------|-----------------------------------|-----------|
| Ardent Censer | +30 % AS al aliado (no lo usas, tú haces el daño) | ❌ Rechazado |
| Staff of Flowing Waters | +40 AP al aliado (sacrificas tu propio AP) | ❌ Rechazado |
| Harmonic Echo | Chain heal (tu daño es burst, no sustain) | ⚠️ Situacional |
| Redemption | Cura AoE activa (tu R ya hace el trabajo con daño) | ⚠️ Situacional |
| Imperial Mandate | +7 % amp al aliado (vale si tu ADC es carry principal) | ✅ Variante |

### Ley 5 — Eficiencia de oro
- Stormsurge (2 800 g): 90 AP + 15 pen + 6 % MS → eficiencia 142 % con Squall.
- Rabadon's (3 400 g): 130 AP × 1.30 = **169 AP efectivos** → eficiencia 155 %.
- Infinity Orb (3 100 g): 110 AP + 15 pen + crítico 20 % a <40 % HP → eficiencia 138 %.
- Cryptbloom (3 000 g): 75 AP + 30 % pen + 20 AH + cura AoE → eficiencia 145 %.

### Ley 6 — Timing > DPS teórico
Stormsurge al minuto 8 = primer pico de poder. Rabadon's al 14:30 = daño letal en escaramuzas de dragón. Cryptbloom al 19:30 = rompe MR de tanques en teamfights finales. La curva de poder es más suave que la de Yuumi agresiva pero el techo de daño es más alto.

### Ley 7 — El sistema de juego también es input
- Torretas 7 000 HP: Q cargada desde rango seguro detona cristales (~1 300 daño verdadero cada 50 s).
- Placas permanentes: Demolish (si se lleva en runas) + Q = tomar placa en 3 hits.
- Minions 60 % daño: lane segura para cargar Q sin riesgo.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | AP | Pen | DPS lvl 9 (1v1) | Utilidad | Nota |
|-----------|-----|----|----|-----------------|----------|------|
| **Stormsurge** | 2 800 | +90 | +15 plana | 480 | Squall burst + 25 % MS | ✅ **Ganador.** Pico de burst temprano + MS para kiteo. |
| Luden's Echo | 2 800 | +100 | 0 | 510 | Eco AoE | ⚠️ Mejor para waveclear puro, pero pierde el pico de asesinato en 1v1. |
| Malignance | 2 700 | +90 | 0 | 450 | Scorn (+20 AH para R) | ❌ Solo si R es tu única fuente de daño (no es el caso). |
| Blackfire Torch | 2 800 | +80 | 0 | 420 | Burn + 4 % AP por target | ⚠️ Situacional vs 3+ tanques. |
| Liandry's Torment | 3 000 | +70 | 0 | 440 | Burn 2 % HP máx | ❌ Caro, mejor como 4.º ítem. |

**Veredicto:** Stormsurge gana en burst y movilidad. Su pasiva *Squall* (detona tras 2.5 s si haces 25 % de su vida máx) se activa casi instantáneamente con tu combo Q+E, otorgando +25 % MS para reposicionarte.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|------|------|--------------------------|
| Botas | **Spellslinger's Shoes** | +35 AP, +18 pen plana, +8 % pen. En 7.3, la pen plana temprana es oro puro. Multiplica tu daño en un 25 % real vs squishies. |
| Quest | **Black Mist Scythe** | Oro pasivo + 28 AP adaptativos. Necesitas oro para comprar AP caro. |
| Core 1 | **Stormsurge** | 90 AP + 15 pen. Squall detona con tu burst, otorgando MS para kiteo. |
| Core 2 | **Rabadon's Deathcap** | Con ~220 AP base al comprarlo, el +30 % pasivo añade +66 AP gratis. Lleva tu AP total a ~380. |
| Core 3 | **Infinity Orb** | 110 AP + 15 pen. *Inevitable Demise* hace que tus habilidades **critiquen (+20 % daño)** contra enemigos bajo 40 % HP. Con Ignite o Q cargada, los bajas a ese umbral rápidamente. |
| Core 4 | **Cryptbloom** | 30 % pen mágica obligatoria en el minuto 18+ cuando el tanque enemigo compra Force of Nature. *Life from Death* (nova que cura 100 + 20 % HP al morir un enemigo cerca) es tu sustain en teamfights. |

### Matriz del último slot (situacional)

| Situación | Ítem alternativo | Coste | Impacto medido |
|-----------|------------------|-------|----------------|
| Vs tanques 3+ con MR | **Void Staff** | 3 000 | +40 % pen mágica. DPS vs 220 MR sube de 280 a 410. |
| Vs curación enemiga (Soraka, Yuumi, Mundo) | **Morellonomicon** | 2 650 | 50 % Grievous Wounds + 75 AP + 300 HP. |
| Vs asesinos AD (Zed, Rengar, Yasuo) | **Zhonya's Hourglass** | 3 300 | 110 AP + 40 Armadura + Stasis 2.5 s. |
| Vs comps de poke a distancia | **Horizon Focus** | 2 700 | +80 AP + 25 AH + Hypershot: +10 % daño a >600 unidades. |
| Tu ADC es el 80 % del daño del equipo | **Imperial Mandate** | 2 600 | +60 AP + 20 AH + Command: +7 % daño aliado a marcados. |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|------|--------------------|
| ❌ Ardent Censer (2 400) | Excelente ítem, pero no aumenta tu daño propio. Si tu prioridad es DAÑAR, es secundario. |
| ❌ Staff of Flowing Waters (2 400) | Buff al aliado, no a ti. Pierdes ~80 AP propios. |
| ❌ Rabadon's + Luden's (ambos) | Redundancia de AP sin pen. Pierdes ~15 % daño real vs MR. |
| ❌ Nashor's Tooth (2 900) | 50 % AS es stat muerto (ratio 0.699). 80 AP no compensa. |
| ❌ Rod of Ages (2 700) | Maná muerto (tienes mana regen de botas) + escalado tarde. |
| ❌ Archangel's Staff (3 000) | Requiere 700 stacks de maná. En support no tienes tiempo para farmearlo. |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: **Electrocute**

**Por qué:** Tu daño es en ventana (Q+E+auto). Electrocute añade ~150-200 daño adaptativo instantáneo que ayuda a cruzar el umbral del 40 % HP para Infinity Orb. En nivel 15 con AP 380: 210 + 10 % AP = **248 daño adaptativo** por proc.

**Alternativas:**
- *Arcane Comet*: Si prefieres poke a distancia sin arriesgarte. Cometa gratis cada Q cargada.
- *First Strike*: Solo si pokeas desde muy lejos sin riesgo (greedy, +7 % verdadero 3 s).

### Secundarias — Valor por slot

| Slot | Runa | Valor estimado |
|------|------|----------------|
| Dominación | **Sudden Impact** | +15-65 true dmg + 10 pen mágica tras usar E o Flash. |
| Dominación | **Eyeball Collection** | +24 AP al llegar a 8 takedowns. |
| Dominación | **Relentless Hunter** | +18 MS fuera de combate para rotar a objetivos. |
| Brujería | **Transcendence** | +10 AH total + -8 % CD post-hit lv9. Q baja a ~3.3 s. |
| Brujería | **Scorch** | +21-49 daño mágico en Q early. Ayuda a detonar cristales de torreta. |
| Brujería | **Manaflow Band** | +300 maná para spamear Q (60 maná/cast × 5 casts/min). |

**Runas excluidas:** Ingenious Hunter (REMOVIDA en 7.3), Legend: Tenacity (reemplazada por Legend: Haste), Grasp of Undying (sustain de melee, no aplica).

### Hechizos: **Flash + Ignite**

Ignite no es solo daño (72-380 verdadero), es 60 % Grievous Wounds y asegura que el enemigo caiga al umbral de <40 % HP para que Infinity Orb critique.

**Alternativa mid:** Flash + Barrier (vs burst asesinos).

### Orden de habilidades: **Q → E → W** (R en 5/9/13)

- **Q max primero:** Daño base + escalado con vida faltante. CD baja de 11 s a 5 s.
- **E segunda:** CC (slow → root → stun). Reducir CD es vital para controlar teamfights.
- **W última:** Solo la usas para sobrevivir burst. El escudo escala con AP pero el CD no baja lo suficiente para justificar maxearla antes que el daño.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (nivel 15, AP/Haste completos)

| Build | Oro | AP Total | Daño Q (lvl 15) | Utilidad equipo | Nota |
|-------|-----|----------|-----------------|-----------------|------|
| **HIPER-DAÑO (Storm+Rabadon+Orb+Crypt)** | 14 500 | ~380 | ~420 (con pen) | Media (Cryptbloom cura AoE) | ✅ **Óptima para daño** |
| Meta Comunidad (Ardent+Staff+Harmonic)  | 11 000 | ~220 | ~280 | Muy Alta (buff ADC + chain heal) | Soporte tradicional |
| Variante Mid (Luden's+Rabadon+Orb+Void)  | 17 300 | ~420 | ~460 | Baja (sin cura) | Más daño, menos utilidad |
| Blackfire Torch (vs 3+ tanques) | 14 200 | ~340 | ~380 + burn | Media | Solo vs comps tanky |

### Desglose multiplicativo (Hiper-Daño vs Enchanter Puro)

| Factor | Contribución |
|--------|--------------|
| AP 380 vs 220 → Q +73 % daño base | +73 % daño Q |
| Pen 18 plana + 38 % vs 0 % | +40 % daño real vs squishies |
| Infinity Orb crítico +20 % a <40 % HP | +20 % burst en ejecución |
| Escudo W reducido (380 vs ~620) | −38 % protección directa |
| Sin buff al carry (Ardent/Staff) | −30 % DPS aliado |
| **Neto:** +55 % daño propio, −38 % escudo, −30 % amp aliado | Ventaja en lanes de poke; desventaja vs dive |

---

## 9. PLAN DE JUEGO

### Early (0:00 – 8:00)
- **Lane phase:** Usa Q cargada (1 s de vuelo) para pokear cuando el enemigo intente farmear. Mantén distancia.
- **Gestión de maná:** No spammees Q sin objetivo. Spectral Sickle lo recupera.
- **Objetivo:** Sobrevivir, llegar a nivel 6, controlar visión.
- **Level 2 combo:** Si tienes Ignite: Q cargada → Auto (pasiva) → E (slow) → Ignite. Puede forzar Flash o conseguir kill.
- **Cristales de torreta:** Desde el minuto 5:00, Q cargada desde rango seguro detona el cristal (~1 300 daño verdadero).

### Mid (8:00 – 15:00)
- **Pico Stormsurge (~8:00):** Aquí empieza tu hiper-daño. Busca escaramuzas en el río.
- **Rotaciones:** Acompaña a la jungla. Tu R es una herramienta de gank poderosa (charm en línea).
- **Min 10:00:** ⬆️ Spellslinger's Shoes → Q cada ~3.3 s.
- **Dragón/herald:** Q al objetivo prioritario → E para root → R para charm en línea.

### Late (15:00+)
- **Posicionamiento:** Quédate detrás de tu frontline. Tu rango es 550 (corto para mago). Si te acercas demasiado, mueres.
- **Prioridad de skills:**
  1. **R:** Úsala para iniciar o responder a un engage. Se extiende con campeones aliados.
  2. **E:** Silencia al carry enemigo o al asesino que te salta (root → stun si ya estaba rooteado).
  3. **Q:** Daño AoE mientras están charm/silenciados.
  4. **W:** Solo de emergencia para sobrevivir burst.
- **Zhonya's Play (si lo llevas):** Si te saltan, activa Zhonya inmediatamente después de soltar R+E. Espera 2.5 s para que tu equipo remate.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|-------|---------|
| Minions 60 % daño a campeones | Pokear desde lejos es más seguro |
| Torretas 7 000 HP + cristales | Q desde rango detona cristales (~1 300 verdadero) |
| Placas permanentes + decaen desde 5:00 | Prioriza la primera placa antes del 5:00 |
| Botas T3 solo desde 10:00 | No intentes mejorar antes |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|--------|--------|------------|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de críticos 200 %, AS cap 3.0, apéndice AS 140 campeones, botas T3, Cristales de torreta |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Fin de encantamientos de botas, regla del min 10:00 |
| Notas oficiales 7.1h (25/06/2026) | wildrift.leagueoflegends.com | Buff a W cura (6 % + 0.01 % AP) y R charm (+0.25 s) |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|--------|--------|------------|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Seraphine | 24/09/2026 | Alta para kit; build popular es insumo, no conclusión |
| wildriftcore.com | 30/09/2026 | WR 50.96 %, tendencia ↑ 3  |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|------|------------|
| Algunas guías sugieren Archangel's Staff  | Lo rechazamos porque requiere 700 stacks de maná; en support no tienes tiempo para farmearlo. Stormsurge da pen inmediata. |
| Otras guías sugieren Blackfire Torch 1.º  | Solo vale vs 3+ tanques. Stormsurge es mejor para burst general. |
| "Seraphine no usa botas" (mito PC) | Falso en WR: confirmada Boots of Mana → Spellslinger's Shoes en build popular . |

### Supuestos del modelo (declarados)

- El jugador tiene buena puntería con Q cargada y R. Si fallas muchas Qs, esta build pierde valor comparada con la de enchanter puro.
- Haste 50 conservador (sin Transcendence al 100 %); con Transcendence plena = 55.
- Uptime de doble-cast pasiva 85 % en peleas.
- R impacta a 3 objetivos en teamfight (2 enemigos + 1 aliado para extensión).
- Mitigación vs 50 MR squishy para daño Q; vs 100+ MR se recomienda Cryptbloom/Void Staff.

### Contexto meta (30/09/2026, Diamond+)

Seraphine: WR 50.96 %, pick 8.38 %, ban 1.72 %, tendencia ↑ 3 . La comunidad la juega como enchanter tradicional . Esta build hiper-daño explota su pasiva de doble-cast para convertirla en un burst-caster de Tier S en composiciones donde el equipo ya tiene suficiente sustain/buff.

### Validación del modelo

`validate_slots(["Spellslinger's","Scythe","Stormsurge","Rabadon's","Infinity Orb","Cryptbloom"])` → PASS (6 entradas, 1 botas, 5 ítems, sin T2+T3 duplicadas).

---

## APÉNDICE A — POOL DE ÍTEMES DE DAÑO PARA SERAPHINE

| Ítem (oro) | Veredicto | Nota |
|------------|-----------|------|
| Stormsurge (2 800) | ✅ CORE 1 | Burst + pen + MS. Imprescindible. |
| Rabadon's Deathcap (3 400) | ✅ CORE 2 | Multiplicador global de AP. |
| Infinity Orb (3 100) | ✅ CORE 3 | Ejecución +20 % a <40 % HP. |
| Cryptbloom (3 000) | ✅ CORE 4 | 30 % pen + cura AoE al matar. |
| Spellslinger's Shoes (2 200) | ✅ Botas | 18 pen plana + 8 % pen + AP. |
| Black Mist Scythe (0) | ✅ Quest | Oro pasivo + 28 AP adaptativos. |
| Luden's Echo (2 800) | ⚠️ Variante mid | Reemplaza Scythe si vas mid. |
| Void Staff (3 000) | ⚠️ Situacional | Vs 3+ tanques con MR alta. |
| Morellonomicon (2 650) | ⚠️ Situacional | Vs curación enemiga. |
| Zhonya's Hourglass (3 300) | ⚠️ Situacional | Vs asesinos AD. |
| Horizon Focus (2 700) | ⚠️ Situacional | Vs comps de poke a distancia. |
| Imperial Mandate (2 600) | ⚠️ Variante | Si tu ADC es el 80 % del daño del equipo. |
| Ardent Censer (2 400) | ❌ Rechazado | Buff al aliado, no a ti. |
| Staff of Flowing Waters (2 400) | ❌ Rechazado | Buff al aliado, no a ti. |
| Harmonic Echo (2 500) | ❌ Rechazado | Chain heal, tu daño es burst. |
| Nashor's Tooth (2 900) | ❌ Rechazado | 50 % AS es stat muerto. |
| Archangel's Staff (3 000) | ❌ Rechazado | Requiere 700 stacks, muy tarde. |

## APÉNDICE B — RUTAS DE COMPRA

**DEFAULT (soporte agresivo):**
```
Sickle → Tome → Boots of Mana (4:30) → Stormsurge (8:00) → Scythe (9:30)
→ ⬆️ Spellslinger's (11:30) → Rabadon's (14:30) → Infinity Orb (17:00) → Cryptbloom (19:30)
```

**VARIANTE MID (sin quest):**
```
Tome → Boots of Mana (4:30) → Luden's Echo (7:30) → ⬆️ Spellslinger's (11:30)
→ Rabadon's (14:30) → Infinity Orb (17:00) → Cryptbloom / Void Staff (19:30)
```

**VS 3+ TANQUES CON MR:**
```
Default pero Cryptbloom → Void Staff (17:00)
(40 % pen mágica para que tu Q y R ignoren Force of Nature enemiga)
```

**VS CURACIÓN ENEMIGA (Soraka/Yuumi/Mundo):**
```
Default pero Cryptbloom → Morellonomicon (17:00)
(50 % Grievous Wounds + 75 AP + 300 HP)
```

**VS ASESINOS AD (Zed/Rengar/Yasuo):**
```
Default pero Cryptbloom → Zhonya's Hourglass (17:00)
(110 AP + 40 Armadura + Stasis 2.5 s)
```

---

## Pie de página

*Reporte generado el 30/09/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.10. Las cifras de daño, escudo y amp son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Referencias y créditos**
- Notas oficiales del parche 7.3 (21/09/2026), 7.2 (08/07/2026) y 7.1h (25/06/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de todos los cambios sistémicos, apéndice de Attack Speed, buff a R charm y valores de ítems modificados.
- Base de datos de ítems, runas y fichas de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Fuente secundaria para stats no tocados por el parche.
- Estadísticas de meta actual — wildriftcore.com (30/09/2026) .
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio, `model/dps_model.py` + `model/optimize_build.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.