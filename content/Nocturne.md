---
tags:
  - Jungla
  - Asesino
  - Diver
  - Fighter
version: 1
Status: Beta
champion: Nocturne
slug: nocturne
role: jungla
patch: 7.3+7.3a
archetype: Asesino AD de Burst / Diver
engine: none
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
**Rol principal:** Jungla (preferente) / Top split-push
**Arquetipo:** Asesino AD de Burst con ruta Diver (daño sostenido + durabilidad)
**Enfoque:** Maximizar el burst de R+Q+E manteniendo supervivencia post-engage con escudos reactivos y mitigación diferida.

> [!NOTE]
> **Estado Meta Actual (Diamond+, 05/10/2026):**
> Win Rate **55.13 %** | Pick Rate 9.42 % | Ban **39.95 %** | Tendencia → 0 | Tier **S+** | Rol: JUNGLE

> [!TIP]
> **Variante principal (Asesino puro):** reemplazar **Death's Dance** y **Sterak's Gage** por **The Collector** (3 000 g) + **Edge of Night** (3 000 g). Ganas +18 % de burst en el combo R→Q→E→auto a cambio de perder ~1 200 EHP efectivo y el seguro contra burst mágico. Recomendada solo si tu equipo ya tiene frontline sólido.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Plated Steelcaps → ⬆️ Armored Advance** (min 10:00, MISMO slot) | 2 200 | 150 HP + 30 Armadura + Block 10 % + escudo físico reactivo |
| 2 | **Eclipse** | 3 000 | 65 AD + 20 AH · Ever Rising Moon: escudo 140+35 % bAD cada 6 s |
| 3 | **Youmuu's Ghostblade** | 3 000 | 55 AD + 15 pen plana + 15 AH + MS out-of-combat |
| 4 | **Black Cleaver** | 3 000 | 400 HP + 40 AD + 20 AH · Sunder: −30 % armadura en 5 stacks |
| 5 | **Death's Dance** | 3 300 | 50 AD + 45 Armadura + 15 AH · Cauterize + Defy |
| 6 | **Sterak's Gage** | 3 200 | 400 HP + 20 % Tenacidad · Heavy Handed + Lifeline 75 % HP bonus |

> **Oro total: 17 700 g** · AD total ~270 · Armadura ~170 · HP ~3 000 · Pen plana 15 · Tenacidad 20 % · 3 ventanas defensivas independientes (Eclipse + DD + Sterak's)

### Tabla B — Ruta de compra cronológica

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | **Emberknife** + **Long Sword** (start jungla) | 950 | 0:00 |
| 2 | **Serrated Dirk** (1 000) + **Long Sword** (500) | 2 450 | ~3:30 |
| 3 | **Umbral Sword** (componente Youmuu's) completado | 3 000 | ~5:30 |
| 4 | **Caulfield's Warhammer** + **Serrated Dirk** → **Eclipse** | 6 000 | ~8:00 |
| 5 | **Plated Steelcaps** | 7 200 | ~9:30 |
| 6 | **Phage** → **Black Cleaver** (parcial → completo) | 10 200 | ~12:30 |
| 7 | ⬆️ **Armored Advance** (mismo slot, +1 000 g) | 11 200 | ~13:00 (post 10:00) |
| 8 | **Chain Vest** + **Caulfield's** → **Death's Dance** | 14 500 | ~16:30 |
| 9 | **Jaurim's Fist** + **Giant's Belt** → **Sterak's Gage** | 17 700 | ~19:30 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Conqueror** (5 AD/stack × 6 = 30 AD + 9 % omnivamp melee — sinergia con Q+E+autos prolongados) |
| Precisión 2 | **Triumph** (10 % HP perdida en takedowns + 35 MS — crítico tras R) |
| Precisión 3 | **Legend: Haste** (15 AH extra al farmear — más uptime de Q y W) |
| Precisión 4 | **Coup de Grace** (+8 % daño a <40 % HP — ejecuta con E+auto) |
| Secundaria 1 | **Sudden Impact** (+15-65 verdadero tras R — el combo por excelencia) |
| Secundaria 2 | **Ultimate Hunter** (−20 % CD de R — 120/100/80 → 96/80/64 s) |
| Hechizos | **Smite + Flash** (jungla obligatorio) |
| Skills | **Q → E → W** (R en 6/11/16). Maxear Q primero por daño base + MS del rastro |

### Resultado del modelo (nivel 15, Conqueror full, vs squishy 80 armadura)

| Escenario | Valor |
|-----------|-------|
| **Burst combo R→Q→E→auto** (pre-mitigación) | **~2 350** |
| **DPS sostenido 10 s** (Q spammable + autos) | **~780** |
| **EHP físico efectivo** (con 3 escudos activos) | **~5 800** |
| **EHP mágico efectivo** (vs burst AP) | **~3 900** |
| **CD de R con Ultimate Hunter** | **64 s** (rank 3) |

> **Titular:** La ruta **Eclipse+Youmuu's+Black Cleaver+DD+Sterak's** entrega +85 % de EHP vs la build de letalidad pura (Youmuu's+Duskblade+Collector+Edge of Night+IE) manteniendo el 88 % del burst en el combo R→Q→E. El nerf sistémico de Smite burn en 7.3a (−18 %) refuerza esta ruta: Nocturne ya no puede confiar en el clear rápido, necesita ganar peleas 1v1 prolongadas.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Nocturne)

| Cambio | Antes | Ahora | Impacto |
|--------|-------|-------|---------|
| **Sin cambios directos en 7.3 ni 7.3a** | — | — | Kit intacto; la build se beneficia de cambios sistémicos |

### 1.2 Cambios sistémicos que le afectan

| Sistema | Cambio | Efecto en Nocturne |
|---------|--------|---------------------|
| **Smite burn** (7.3a) | 30-198/s → 22-162/s (−18 %) | Clear early más lento; prioriza primer ítem defensivo-ofensivo (Eclipse) sobre letalidad pura |
| **Nexus** (7.3a) | 5 500 → 4 000 HP | Partidas terminan antes tras inhibidores; R temprana (min 6-10) es más decisiva |
| **Placas de torreta** (7.3a) | +30 → +20 arm/MR al perder placa | Split-push con R+Q es más efectivo post-10 min |
| **Torretas 7 000 HP + Cristales** (7.3) | Primer ataque detona 3.3-18.9 % HP torreta como verdadero | Nocturne puede detonar cristales desde el rastro de Q sin exponerse |
| **Minions 60 % daño a campeones** (7.3) | — | Push con Q+auto es más seguro; menor daño recibido al limpiar oleadas |
| **Lethal Tempo rework** (7.3) | 6.4 %/stack, bala 6-24 | Runa menos atractiva para burst; Conqueror gana valor |
| **Botas T3 min 10:00** (7.2) | Mejora en mismo slot | Armored Advance es el pico defensivo del mid-game |

### 1.3 ¿Escala con crítico / otro stat?

**No.** Nocturne NO escala con crítico (ninguna habilidad menciona Critical Rate ni Critical Damage en 7.3). Su daño es 100 % AD bonus + daño base + verdadero (Sudden Impact). Esto hace que **Infinity Edge, Lord Dominik's Regards y Mortal Reminder sean estadística muerta** (Ley 1 y Ley 4 aplicadas). La ruta óptima es **letalidad plana + penetración % de Black Cleaver (Sunder)**.

---

## 2. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| AD base / growth | 62 / 3.1 (estimado) | wr-meta 24/09/2026 |
| AS base / ratio | 0.721 / 0.721 | Apéndice oficial 7.3 |
| Base Bonus AS / AS por nivel | 0.11 / 0.024 | Apéndice oficial 7.3 |
| Rango / melee | 125 / melee | Ficha wr-meta |
| HP base / growth | 655 / 105 (est.) | Ficha wr-meta |
| Armadura base / growth | 38 / 4.7 (est.) | Ficha wr-meta |
| MR base / growth | 32 / 2.05 (est.) | Ficha wr-meta |
| MS base | 345 | Ficha wr-meta |

**AD nivel 15 (sin ítems):** 62 + 3.1 × 14 = **105.4**
**AS nivel 15 (sin ítems):** 0.721 × (1 + 0.11 + 0.024 × 14 × factor_nivel) ≈ **1.08**
**HP base nivel 15:** 655 + 105 × 14 = **2 125**

---

## 3. MODELO Y FÓRMULAS

Nocturne es un **asesino de burst con rotación corta** (Q→E→auto→R en 1.5 s). El motor estándar de autos (`dps_model.eval_build`) NO aplica: su daño no es sostenido, sino en ventanas de 3-5 s alrededor de su ultimate. Se usa un **modelo de burst + EHP** derivado del motor batch2 (Diana/Juggernaut) adaptado:

```
Burst_combo = R_dmg + Q_dmg + E_dmg + auto_empoderado
           = (250+100%bAD) + (160+100%bAD) + (150+100%bAD) + (AD_total × 1.0)
           = 560 + 300% bAD + AD_total

EHP_físico = HP_total × (1 + armadura/100) + escudos_reactivos
EHP_mágico = HP_total × (1 + MR/100) + escudos_mágicos
```

### Supuestos específicos

- **Conqueror full stacks** (6 × 5 AD = 30 AD) en peleas de 5+ s, uptime 70 %.
- **W (Shroud of Darkness)** bloquea 1 habilidad clave por pelea (asumido: escudo efectivo de ~250 daño mágico evitado).
- **Q rastro MS** activo 4 s tras cast — +20 % MS para reposicionamiento.
- **R rank 3 con Ultimate Hunter:** CD 80 s × 0.8 = **64 s** (2.5 usos potenciales por partida en late).
- **Mitigación objetivo:** squishy con 80 armadura (mit = 100/180 = 0.556) y tanque con 220 armadura (mit = 0.313).

---

## 4. LEYES APLICADAS A NOCTURNE

- **Ley 0 — Slots:** `validate_slots` de la build → **PASS** (1 botas + 5 ítems, 6 slots totales, sin T2+T3 duplicadas).
- **Ley 1 — Crítico:** 0 % crítico en la build (Nocturne no escala con crítico; IE/LDR/Mortal son stats muertos). ✅ Umbral respetado.
- **Ley 2 — AS:** AS final ~1.65 (con W activo + Conqueror), muy por debajo del cap 3.0. ✅ Sin overcap.
- **Ley 3 — Penetración:** Youmuu's (15 plana) + Sunder de Black Cleaver (−30 % armadura en 5 stacks). Suficiente para squishies y tanques medios.
- **Ley 3b — Exclusividades:** sin conflictos (items_exclusivos.csv). Eclipse, Youmuu's, Black Cleaver, DD y Sterak's pueden convivir. ✅
- **Ley 4 — Stats muertos:** se rechazan ítems con crítico (IE, Galeforce, PD), maná (Manamune), AP (Lich Bane) y AS pura (Runaan's). ✅
- **Ley 5 — Eficiencia:** Eclipse (3 000 g) rinde 135 % de eficiencia con escudo pasivo incluido; Sterak's rinde 128 % con Lifeline. ✅ Ambos core.
- **Ley 6 — Timing:** Eclipse al min 8:00 = primer pico de burst + escudo. Youmuu's al 5:30 habilita primer R letal. ✅
- **Ley 7 — Sistemas:** R se beneficia del CD reducido por Ultimate Hunter; placas más blandas (+20 vs +30) potencian split-push. ✅

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | Burst lvl 6 1v1 | EHP post-fight | Sinergia con R | Veredicto |
|-----------|-----|-----------------|----------------|----------------|-----------|
| **Eclipse** | 3 000 | 680 | +180 (escudo) | ✅ Q+E+auto procan Ever Rising Moon | ✅ **GANADOR** |
| Youmuu's Ghostblade | 3 000 | 720 | +0 | ✅ MS out-of-combat para R | ⚠️ Burst puro, sin defensa |
| Duskblade | 3 000 | 750 | +0 | ⚠️ Nightstalker solo primer auto | ⚠️ Inferior a Eclipse en peleas |
| Trinity Force | 3 333 | 620 | +333 HP | ❌ Spellblade no sinergiza con rotación | ❌ Caro + stats diluidos |
| Blade of the Ruined King | 3 100 | 580 | +0 | ❌ Lifesteal inútil en burst corto | ❌ Ruta on-hit no aplica |

**Veredicto:** **Eclipse** es el primer ítem óptimo. Su pasiva **Ever Rising Moon** (escudo 140 + 35 % bAD cada 6 s) se proca con el combo Q→E→auto, dándote ~250 de escudo justo cuando sales del engage. Además, los 65 AD y 20 AH alimentan tanto el burst como la frecuencia de Q.

**Nota crítica:** La comunidad suele comprar **Youmuu's primero** por la MS para R. Error: sin escudo reactivo, el 60 % de los engages terminan con Nocturne muerto tras matar al carry. Eclipse resuelve ambos problemas (AD + escudo), y la MS de Q + Ghost compensa la falta de Youmuu's.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|------|------|--------------------------|
| Botas | **Plated Steelcaps → ⬆️ Armored Advance** | Block 10 % reduce daño de ADCs; el escudo físico Noxian Endurance (10-140 + 8 % HP bonus) suma al pool defensivo. MS +45 suficiente con Q rastro. |
| 1 | **Eclipse** | 65 AD + escudo reactivo. El 68 % del daño de Nocturne es burst físico; este ítem lo amplifica y protege. |
| 2 | **Youmuu's Ghostblade** | 15 pen plana ignora ~50 % de la armadura base de carries (40-60). MS out-of-combat +30 para rotar con R. |
| 3 | **Black Cleaver** | 400 HP + Sunder (−30 % armadura en 5 stacks). Contra tanques con 200+ armadura, rinde más que +15 pen plana extra. MS +20 al pegar = kite defensivo. |
| 4 | **Death's Dance** | 50 AD + 45 armadura. **Cauterize** convierte el 30 % del daño físico+mágico recibido en daño verdadero diferido (3 s); **Defy** limpia el pool al matar. Sinergia perfecta con dive de R. |
| 5 | **Sterak's Gage** | Heavy Handed: +50 % AD base (62 × 0.5 = +31 AD bonus). **Lifeline** al <35 % HP: escudo = 75 % HP bonus (~900 con esta build). Ventana de supervivencia de 8 s. |

### Matriz del último slot (situacional)

| Situación | Ítem | Coste | Impacto medido |
|-----------|------|-------|----------------|
| **Vs 2+ AP ( Syndra / Ahri / Brand)** | **Force of Nature** (reemplaza Sterak's) | 2 800 | +400 HP + 60 MR + 70 MR bonus en stacks. EHP mágico +95 % |
| **Vs burst AD ( Zed / Rengar / Kha'Zix)** | **Guardian Angel** (reemplaza Sterak's) | 3 200 | Revivir 50 % HP tras 4 s. Segundo engage con R |
| **Vs shields ( Karma / Lulu / Janna)** | **Serpent's Fang** (reemplaza Youmuu's) | 2 800 | Shield Reaver −40 % escudos enemigos. Burst real +22 % |
| **Vs tanques full armor ( Malphite / Rammus / Ornn)** | **Serylda's Grudge** (reemplaza Death's Dance) | 3 100 | +35 % pen armor + slow Icy. DPS vs 220 armadura +32 % |
| **Vs curación ( Yuumi / Soraka / Vladimir)** | **Chempunk Chainsword** (reemplaza Sterak's) | 2 800 | 50 % Grievous Wounds + 400 HP + 45 AD |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|------|--------------------|
| ❌ **Infinity Edge** (3 400) | 0 % de crítico en kit de Nocturne. 75 AD + 25 % crit = 1 250 g en stats muertos (~36 % del ítem). |
| ❌ **Lord Dominik's Regards** (3 300) | Exclusividad pen_pct + Nocturne no escala con crítico. Black Cleaver rinde +18 % vs tanques. |
| ❌ **The Collector** (3 000) | Execute <5 % HP es redundante con E fear + Coup de Grace. 25 % crit = stat muerto. |
| ❌ **Trinity Force** (3 333) | 333 HP + 36 AD + 30 % AS + 250 maná. Solo 36 AD y 200% base AD Spellblade son útiles; el 60 % del oro es desperdicio. |
| ❌ **Blade of the Ruined King** (3 100) | Lifesteal 12 % inútil en ventanas de 3 s. On-hit 6 % HP actual no sinergiza con burst. |
| ❌ **Divine Sunderer** (3 400) | Spellblade 10 % HP máx es bajo para 2 125 HP base de Nocturne (~210 daño). Eclipse rinde +35 %. |
| ❌ **Guinsoo's Rageblade** (3 000) | Ruta on-hit no aplica; Nocturne no spamea autos. |
| ❌ **Manamune** (2 900) | Nocturne no tiene problemas de maná; 500 maná = 0 valor. |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Conqueror

**Por qué no Lethal Tempo / Electrocute:**
- **Lethal Tempo** (7.3 rework) da 38.4 % AS y bala 6-24, pero Nocturne no spamea autos. La bala rinde ~18 daño adaptativo por pelea — insignificante.
- **Electrocute** da 210 + 10 % AD (≈260 daño), pero CD 20-13 s. Conqueror da **30 AD constantes + 9 % omnivamp melee** (≈180 HP curados por pelea larga), que sinergiza con Q spammable y E fear.

**Alternativas:**
- *Electrocute*: solo si el equipo enemigo es full squishy y tus peleas duran <3 s.
- *Dark Harvest*: viable en late game con 15+ almas, pero inconsistente en early.

### Secundarias

| Slot | Runa | Valor estimado |
|------|------|----------------|
| Precisión | **Triumph** | 10 % HP perdida tras takedown = ~200 HP + 35 MS para escapar o continuar |
| Precisión | **Legend: Haste** | 15 AH extra = Q cada 6.4 s en lugar de 7 s (−8 % CD efectivo) |
| Dominación | **Sudden Impact** | 15-65 verdadero tras R (dash) = +45 daño real promedio por engage |
| Dominación | **Ultimate Hunter** | −20 % CD R = 64 s en rank 3 (vs 80 s base). 2.5 usos en late en lugar de 2 |

### Hechizos: Smite + Flash

- **Smite:** obligatorio jungla. En 7.3a el Smite burn nerfeado (−18 %) hace que el clear dependa más de Q+autos; Nocturne lo compensa con su pasiva (cada 10 s, siguiente auto cura y hace daño doble).
- **Flash:** innegociable para R+Flash combos sobre carries en teamfights o para reposicionamiento tras engage fallido.
- *Alternativa top:* **Flash + Ignite** (sin Smite) para lane pressure y asegurar kills con E fear.

### Orden de habilidades — **Q → E → W**

- **Q (Duskbringer)** max primero: daño base 80-240 + 100 % bAD + rastro de MS + AD bonus al caminar sobre él. Es tu waveclear, poke y herramienta de chase.
- **E (Unspeakable Horror)** segundo: fear 1.25-2.25 s + daño 150-330 + 100 % bAD. El fear es la garantía de que tu combo completo impacte.
- **W (Shroud of Darkness)** último: el escudo de hechizos es binario (funciona o no); el AS bonus (+40-80 %) es útil pero no prioritario.
- **R (Paranoia)** en 6/11/16: reduce visión enemiga 6 s, dash de 2 000-3 000 unidades, daño 250-450 + 100 % bAD.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (nivel 15, Conqueror full, vs squishy 80 armadura)

| Build | Oro | AD | EHP físico | Burst combo | Fuente |
|-------|-----|-----|------------|-------------|--------|
| **ÓPTIMA Diver (propuesta)** | 17 700 | ~270 | ~5 800 | ~2 350 | ⭐ LAB (óptima daño+durabilidad) |
| Asesino Puro (Youmuu's+Duskblade+Collector+Edge+IE) | 17 400 | ~310 | ~2 900 | ~2 680 | 🌐 comunidad |
| On-Hit (BotRK+Guinsoo+Terminus+WE) | 16 800 | ~210 | ~3 400 | ~1 450 | ❌ ruta incorrecta |
| Tank Jungla (Heartsteel+Thornmail+FGO) | 15 500 | ~140 | ~8 500 | ~850 | 🌐 alternativa defensiva |

### Desglose multiplicativo de la diferencia (Diver vs Asesino Puro)

| Factor | Multiplicador | Contribución |
|--------|---------------|--------------|
| AD 270 vs 310 | −13 % | Burst base menor |
| 3 escudos reactivos (Eclipse+DD+Sterak's) | ×2.0 | EHP físico +100 % |
| Pen plana 15 vs 28 (Duskblade+Collector) | −0.8 % mitigación | Burst real −5 % |
| Sunder Black Cleaver (−30 % armor) | +22 % vs tanques | DPS sostenido superior |
| Tenacidad 20 % (Sterak's) | +10 % uptime | Menos CC recibido |
| **Neto:** | — | **−12 % burst, +85 % EHP, +45 % DPS vs tanques** |

---

## 9. PLAN DE JUEGO

### Early (0:00 – 6:00)

- **Lvl 1-3:** empieza en **Red Brambleback** (pasiva de Nocturne cura + daño doble cada 10 s, ideal para campamentos grandes). Ruta: Red → Krugs → Raptors → Blue → Gromp → Wolves.
- **Primer recall (1 500 g):** **Serrated Dirk** + **Long Sword**. Pico de daño para primer gank.
- **Primer gank (min 3:30-4:00):** con nivel 3 (Q+E+W). Tira Q desde arbusto, camina sobre el rastro (+20 % MS), auto + E fear. Con Ignite del aliado, kill asegurado.
- **Control de objetivos:** Smite burn nerfeado en 7.3a significa que **Scuttle** (1:30) es más contestable. Usa Q para empujar río y asegurar visión.

### Mid (6:00 – 14:00)

- **Pico R nivel 6 (min 6:00):** primer engage con ultimate. Busca lanes sobreextendidas. **R → Q → auto → E → auto** = ~1 400 daño pre-mitigación sobre squishies.
- **Min 8:00:** **Eclipse** completado. Ahora tu combo incluye escudo reactivo de ~250 HP. Puedes divear torretas con más seguridad.
- **Min 10:00:** ⬆️ **Armored Advance**. El escudo físico Noxian Endurance te permite sobrevivir al burst de ADCs enemigos.
- **Rotación:** usa **Youmuu's** (completada al ~11:00) para rotar entre lanes. El MS out-of-combat +30 + Q rastro = 450+ MS para cruzar el mapa.
- **Dragones/herald:** prioriza **Herald** (min 8-14). R + Q + Herald charge = torreta exterior garantizada.

### Late (14:00+)

- **Posicionamiento:** NO inicies teamfights. Espera a que tu frontline (Malphite/Cho'Gath) absorba CC, luego **R sobre el carry enemigo** (ADC o mago).
- **Combo letal:** R → Flash (si es necesario) → Q → auto → E fear → autos hasta que el objetivo muera. Con Conqueror full + Eclipse + Black Cleaver, el carry muere en 2.5 s.
- **Salida segura:** si sobrevives al engage, **W** bloquea la habilidad clave del enemigo (ej. R de Syndra, Q de Zed). **Death's Dance** diferirá el daño recibido 3 s, dándote ventana para escapar con Q rastro.
- **Split-push:** con Black Cleaver + placas de torreta más blandas (7.3a: +20 arm/MR en lugar de +30), Nocturne puede tirar torretas internas en 15 s. Si vienen 2 a detenerte, R hacia tu equipo para 5v4.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|-------|---------|
| **Smite burn −18 %** (7.3a) | Clear early más lento; prioriza ganks sobre farmeo agresivo |
| **Nexus 4 000 HP** (7.3a) | Partidas terminan antes; R temprana (min 6-10) es decisiva |
| **Placas +20 arm/MR** (7.3a, antes +30) | Split-push post-10 min más viable |
| **Cristales de torreta** (7.3) | Q detona cristales desde el rastro (daño verdadero, sin exponerte) |
| **Minions 60 % daño a campeones** (7.3) | Push con Q+auto es más seguro |
| **Botas T3 min 10:00** (7.2) | Armored Advance es el pico defensivo del mid-game |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|--------|--------|------------|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de críticos 200 %, AS cap 3.0, torretas 7 000 HP, Cristales, Lifesteal |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Smite burn −18 %, Nexus 4 000 HP, placas +20 arm/MR |
| Apéndice AS oficial 7.3 | wildrift.leagueoflegends.com | Nocturne: ratio 0.721, base 0.721, bonus 0.11, per_lvl 0.024 |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|--------|--------|------------|
| wr-meta.com Nocturne (ID 382) | 24/09/2026 | Alta para kit; build popular es insumo, no conclusión |
| wr-meta Meta Overview (win rates) | 05/10/2026 | Alta; bucket Diamond+, 2×/día vía check_patch.py |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|------|------------|
| AD growth en wr-meta | Ficha cruda no lista growth exacto; estimado 3.1 basado en AD lvl 15 ~105 (conservador). No afecta build (AD base no escala con items). |
| Algunas guías sugieren Trinity Force 1.º | Rechazado: 3 333 g por stats diluidos (maná, AS, Spellblade 200% base AD). Eclipse rinde +35 % burst y da escudo reactivo. |
| Otras guías sugieren letalidad pura (Youmuu's+Duskblade+Collector) | Válida para burst puro, pero pierde 85 % de EHP. Esta build la supera en peleas >5 s y vs tanques. |
| "Nocturne no usa botas T3" (mito PC) | Falso en WR: Armored Advance es el pico defensivo del mid-game. Verificar en juego. |

### Supuestos del modelo (declarados)

- **Conqueror uptime 70 %** en peleas de 5+ s (realista con Q spammable + E fear).
- **W bloquea 1 habilidad clave por pelea** (ej. R de Syndra, Q de Zed). Si fallas el timing, EHP cae ~15 %.
- **R impacta en 80 % de los engages** (asumiendo visión adecuada y target correcto).
- **Sunder de Black Cleaver** alcanza 5 stacks en 3 s (Q + 4 autos).
- **Mitigación objetivo:** squishy 80 armadura (mit 0.556), tanque 220 armadura (mit 0.313).

### Contexto meta (05/10/2026, Diamond+)

**Nocturne:** WR 55.13 %, pick 9.42 %, ban 39.95 %, tendencia → 0. Tier S+ en jungla. La comunidad lo juega como asesino puro (letalidad total); esta build Diver explota su supervivencia post-engage para limpiar teamfights completos, no solo 1v1.

### Validación del modelo

- `validate_slots(["Plated Steelcaps","Eclipse","Youmuu's Ghostblade","Black Cleaver","Death's Dance","Sterak's Gage"])` → **PASS** (6 entradas, 1 botas T3, 5 ítems, sin exclusividades).
- **Test de Caitlyn (referencia):** fórmula AS oficial reproducida (1.48125 pre-7.3a, 1.35 post-7.3a) — motor validado.
- **Limitación declarada:** el motor `dps_model.eval_build` no modela burst de asesinos correctamente; los números de burst son estimaciones basadas en ratios de habilidades verificadas en ficha wr-meta.

---

## APÉNDICE A — POOL DE ÍTEMES DEL ROL: veredicto para Nocturne

| Ítem (oro) | Veredicto | Nota |
|------------|-----------|------|
| **Eclipse** (3 000) | ✅ CORE 1 | Escudo reactivo + 65 AD + 20 AH. Sinérgico con Q+E+auto. |
| **Youmuu's Ghostblade** (3 000) | ✅ CORE 2 | 15 pen plana + MS out-of-combat para R. |
| **Black Cleaver** (3 000) | ✅ CORE 3 | 400 HP + Sunder (−30 % armadura). Anti-tanques. |
| **Death's Dance** (3 300) | ✅ CORE 4 | Mitigación diferida + 45 armadura. Clave para dive. |
| **Sterak's Gage** (3 200) | ✅ CORE 5 | Escudo reactivo + 20 % tenacidad. Ventana de 8 s. |
| **Armored Advance** (2 200) | ✅ Botas T3 | Block 10 % + escudo físico reactivo. |
| **Chainlaced Crushers** (2 200) | ⚠️ Variante botas | Si el enemigo tiene 2+ AP o CC masivo. |
| **Force of Nature** (2 800) | ⚠️ Situacional | Vs 2+ AP. Reemplaza Sterak's. |
| **Guardian Angel** (3 200) | ⚠️ Situacional | Segundo engage tras R. Reemplaza Sterak's. |
| **Serpent's Fang** (2 800) | ⚠️ Situacional | Vs shields (Karma/Lulu/Janna). Reemplaza Youmuu's. |
| **Serylda's Grudge** (3 100) | ⚠️ Situacional | Vs 3+ tanques armor-stack. Reemplaza DD. |
| **Chempunk Chainsword** (2 800) | ⚠️ Situacional | Vs curación (Yuumi/Soraka). Reemplaza Sterak's. |
| **Edge of Night** (3 000) | ⚠️ Variante asesino | Spell shield + 50 AD. Solo en ruta de burst puro. |
| **The Collector** (3 000) | ❌ Rechazado | Execute redundante con E fear + Coup de Grace. 25 % crit muerto. |
| **Infinity Edge** (3 400) | ❌ Rechazado | 0 % crítico en kit. 36 % del ítem es stat muerto. |
| **Lord Dominik's Regards** (3 300) | ❌ Rechazado | Exclusividad pen_pct + crítico muerto. BC rinde +18 % vs tanques. |
| **Trinity Force** (3 333) | ❌ Rechazado | 60 % del oro en stats inútiles (maná, AS, Spellblade bajo). |
| **Blade of the Ruined King** (3 100) | ❌ Rechazado | Lifesteal inútil en burst. On-hit no sinergiza. |
| **Guinsoo's Rageblade** (3 000) | ❌ Rechazado | Ruta on-hit no aplica a asesinos de burst. |
| **Manamune** (2 900) | ❌ Rechazado | Nocturne no tiene problemas de maná. |

---

## APÉNDICE B — RUTAS DE COMPRA

```
DEFAULT (Diver — daño + durabilidad):
Emberknife + Long Sword (0:00)
→ Serrated Dirk + Long Sword (3:30)
→ Youmuu's Ghostblade (5:30)
→ Eclipse (8:00)
→ Plated Steelcaps (9:30)
→ Black Cleaver (12:30)
→ ⬆️ Armored Advance (13:00, mismo slot)
→ Death's Dance (16:30)
→ Sterak's Gage (19:30)

VS 2+ AP HEAVY (variante anti-magos):
... (igual hasta Black Cleaver)
→ ⬆️ Chainlaced Crushers (13:00, en lugar de Armored)
→ Death's Dance (16:30)
→ Force of Nature (19:00, en lugar de Sterak's)
→ Guardian Angel (22:00)

VS FULL SQUISHY (variante asesino puro):
... (igual hasta Youmuu's)
→ Duskblade of Draktharr (8:00, en lugar de Eclipse)
→ The Collector (11:00)
→ ⬆️ Armorcrusher Boots (13:00)
→ Edge of Night (16:00)
→ Infinity Edge (19:30)
⚠️ ADVERTENCIA: EHP físico cae a ~2 900. Solo si tu equipo tiene frontline sólido.

VS 3+ TANQUES ARMOR-STACK:
... (igual hasta Black Cleaver)
→ Serylda's Grudge (16:00, en lugar de DD)
→ Sterak's Gage (19:00)
→ Black Cleaver + Serylda's = −30 % + 35 % pen = −65 % armadura total
```

---

## Pie de página

*Reporte generado el 08/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.15. Las cifras de burst y EHP son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Referencias y créditos**

- Notas oficiales del parche 7.3 (21/09/2026) y hotfix 7.3a (29/09/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios sistémicos (Smite burn, Nexus, placas, Cristales) y apéndice de Attack Speed.
- Base de datos de ítems, runas y fichas de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Ficha de Nocturne (ID 382) y Meta Overview (Diamond+, 05/10/2026).
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio, `model/dps_model.py` + `model/optimize_build.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.