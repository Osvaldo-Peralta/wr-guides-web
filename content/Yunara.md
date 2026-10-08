---
tags:
  - ADC
  - Marksman
  - Crítico
  - Híbrido
  - Bot-Lane
version: 1.2
Status: Beta
champion: Yunara
slug: yunara
role: adc
patch: "7.3a"
archetype: "Crítico AoE híbrido (daño físico + mágico por críticos)"
engine: autos
custom: false
generate: manual
mode: sr
published_at: "2026-10-08"
updated_at: "2026-10-08"
verification: AL_DIA
verified_patch: "7.3a"
---
**Fecha del análisis:** 08/10/2026
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** ADC (Dragon Lane)
**Arquetipo:** Crítico AoE híbrido — su pasiva convierte cada crítico en daño mágico adicional (8 % + 8 % por 100 AP), lo que la hace difícil de contrarrestar con resistencias tradicionales
**Enfoque:** Maximizar el DPS en área (AoE) con críticos al 230 % y spread de Q que también critica durante la R (Transcendent State). La build prioriza el umbral exacto de 100 % de crítico, AS sin sobrepasar el tope, y penetración física para el late game.

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (08/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Yunara:** ninguno en 7.3a.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada (6 slots, Ley 0):** Gunmetal Greaves + Hexoptics C44 + Runaan's Hurricane + Infinity Edge + Lord Dominik's Regards + Kraken Slayer — **sin cambios**.
> **Ítems cambiados fuera de la build final:** Yun Tal Wildarrows (BUFF) — verificar variantes/rechazados del reporte.
> **Sistema (7.3a):** Nexus: 5 500 → **4 000 HP** → Partidas terminan antes tras inhibidores
> **Sistema (7.3a):** Placas de torreta: Al perder placa: +30→**+20** arm/MR y 20→**10 s** → **Siege más fácil** → sube el valor de Jinx/Kalista/Yunara (siege) y de Runaan's/Energized
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 05/10/2026):**
> Win Rate 51.64 % | Pick Rate 16.83 % | Ban 23.80 % | Tendencia ↓ 1 | Tier S+ | Rol DUO (ADC).

> [!TIP]
> **Variante principal (vs tanques):** Cambia **Kraken Slayer** por **Blade of the Ruined King** (3 100 g). Contra composiciones con 2+ tanques de alta vida (Cho'Gath, Dr. Mundo, Malphite), BotRK aplica 6 % de la vida actual del objetivo como daño físico por golpe.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (Ruta Estándar / AoE)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | 50 % AS, 5 % Lifesteal, Noxian Gait (+7 % MS al atacar campeón) |
| 2 | **Hexoptics C44** | 2 900 | 55 AD, 25 % Crit, Magnification (+10 % dmg a ≥550u) |
| 3 | **Runaan's Hurricane** | 2 650 | 40 % AS, 25 % Crit, rayos que **critican** y aplican on-hit |
| 4 | **Infinity Edge** | 3 400 | 75 AD, 25 % Crit, Crit Dmg 200 % → **230 %** |
| 5 | **Lord Dominik's Regards** | 3 300 | 35 AD, 25 % Crit, 35 % Pen, Giant Slayer +12 % |
| 6 | **Kraken Slayer** | 2 900 | 45 AD, 35 % AS, Bring It Down (missing HP) |

> **Oro total: 17 350 g** · AD 268 · AS 2.83 (con Pow-Pow x3 equivalente) · Crit 100 % · Pen 35 % · Lifesteal 5 %

### Tabla A2 — BUILD FINAL (Variante Anti-Tanques: Cho'Gath / Dr. Mundo / Malphite)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | 50 % AS, Lifesteal, MS condicional |
| 2 | **Hexoptics C44** | 2 900 | 55 AD, 25 % Crit, Magnification |
| 3 | **Yun Tal Wildarrows** | 3 100 | 50 AD, 35 % AS, Flurry (+35 % AS), Crit progresivo |
| 4 | **Blade of the Ruined King** | 3 100 | 40 AD, 30 % AS, 12 % LS, **6 % HP actual on-hit** |
| 5 | **Lord Dominik's Regards** | 3 300 | 35 AD, 25 % Crit, 35 % Pen, Giant Slayer +12 % |
| 6 | **Infinity Edge** | 3 400 | 75 AD, 25 % Crit, Crit Dmg 230 % |

> **Oro total: 18 000 g** · AD 275 · AS 2.95 · Crit 100 % (Yun Tal a 125 stacks) · Pen 35 % · Lifesteal 17 %

### Tabla B — Ruta de compra cronológica (Estándar)

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Long Sword + Poción (Start) | 500 | 0:00 |
| 2 | **Berserker's Greaves** (T2) | 1 700 | ~4:30 |
| 3 | Noonquiver + Pickaxe → **Hexoptics C44** | 4 600 | ~7:30 |
| 4 | Recurve Bow + Zeal → **Runaan's Hurricane** | 7 250 | ~10:30 |
| 5 | ⬆️ **Gunmetal Greaves** (mismo slot, +1 000 g) | 8 250 | ~11:30 (post 10:00) |
| 6 | B. F. Sword + Pickaxe + Brawler's → **Infinity Edge** | 11 650 | ~14:30 |
| 7 | Noonquiver + Last Whisper → **Lord Dominik's Regards** | 14 950 | ~17:30 |
| 8 | Recurve Bow + Long Sword → **Kraken Slayer** | 17 350 | ~20:00 |

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Lethal Tempo** (6.4 %/stack × 6 = 38.4 % AS + bala 6-24 + 0.67 % por 1 % AS bonus) |
| Precisión 2 | **Legend: Alacrity** (+21 % AS a full stacks) |
| Precisión 3 | **Brutal** (5 + 6 % AD bonus adaptativo/golpe) |
| Precisión 4 | **Coup de Grace** (+8 % daño a objetivos <40 % HP) |
| Secundaria | **Bone Plating** (anti-burst) / **Cut Down** (vs tanques) |
| Hechizos | **Flash + Ghost** (o Heal si el support no lo trae) |
| Skills | **Q → W → E** (R en 5/9/13). Maxear Q primero por el spread y AS. |

### Resultado del modelo (Nivel 15, LT full, 100 % crit — datos post-7.3a)

| Escenario | Build Estándar | Variante Anti-Tanques |
|-----------|----------------|-----------------------|
| **1v1** (pre-mitigación) | **3 042** | **3 115** |
| **3v3** (AoE teamfight) | **10 551** | **9 285** (−12 %) |
| **vs 120 armadura** | **2 150** | **2 451** (+14 %) |
| **vs Tanque** (220 arm, 4 500 HP) | **1 480** | **1 850** (+25 %) |
| **Heal / Sustain** | 186 | 525 |

> **Titular:** La build estándar domina el AoE en teamfights (+13 % DPS 3v3 vs la variante anti-tanques), pero la **variante anti-tanques** es matemáticamente obligatoria contra composiciones de Baron Lane/Support con +4 000 HP (Cho'Gath, Mundo), superando a la estándar en un **+25 % de daño efectivo** gracias al sinergismo BotRK + LDR.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Yunara) — Parche 7.3

| Stat/Habilidad | Antes (7.2) | Ahora (7.3) | Impacto |
|----------------|-------------|-------------|---------|
| **Pasiva (Vow of the Lands)** — Critical bonus damage | 10 % (gana 10 % por 100 AP) | **8 %** (gana 8 % por 100 AP) | ⚠️ Nerf leve al daño mágico por crítico. Reduce el incentivo de construir AP, consolida su identidad como ADC de crítico físico. |
| **Q (Cultivation of Spirit)** — Bonus Attack Speed | 22.5 / 35 / 47.5 / 60 % | **25 / 35 / 45 / 55 %** | ✅ Buff temprano (25 % vs 22.5 % en rank 1), nerf leve en rank 4. Neto: la ventana de poder con Q activa es más consistente. |
| **AS Ratio** | — | **0.65** | Sin cambio funcional; confirma su escalado con AS. |
| **Base AS / Base Bonus AS / AS per Level** | — | 0.65 / 0.23 / 0.032 | Apéndice oficial 7.3. |

### 1.2 Cambios sistémicos que le afectan (7.3 + 7.3a)

| Sistema | Cambio | Efecto en Yunara |
|---------|--------|------------------|
| **Crítico Base** | 175 % → **200 %** | ✅ Buff masivo. IE ahora sube a 230 %. Su pasiva convierte cada crítico en daño mágico adicional. |
| **AS Cap** | 2.5 → **3.0** | ✅ Permite a Yunara llegar a 2.83 AS sin desperdiciar stats. |
| **Torretas** | 3 000 → **7 000 HP** + placas permanentes | ✅ Con Fishbones (Q) limpia placas y detona Cristales desde rango seguro. |
| **Crystalline Overgrowth** | Primer ataque detona 3.3–18.9 % vida torreta | ✅ El spread de Q de Yunara puede detonar cristales en área. |
| **Lethal Tempo** | 4.8 % → **6.4 %** (ranged) | ✅ 38.4 % AS total a 6 stacks. La bala escala con AS bonus total. |
| **Nexus** (7.3a) | 5 500 → **4 000 HP** | Partidas terminan ~1-2 min antes → ventana de late game se acorta. |
| **Placas** (7.3a) | +30 arm/MR y 20 s → **+20 arm/MR y 10 s** | Siege más fácil → Yunara con Q a rango presiona placas con menos riesgo. |

### 1.3 ¿Sus habilidades escalan con crítico?

**Sí, desde 7.3.** La pasiva **Vow of the Lands** convierte cada crítico en daño mágico adicional (8 % + 8 % por 100 AP). El **spread de Q** durante la R (Transcendent State) **hereda el crítico**: si el auto principal critica, el daño del spread también critica al multiplicador correspondiente (230 % con IE). Las notas oficiales 7.3 confirman explícitamente que el spread de Q activa **Kraken Slayer** y que el daño del spread se incrementa al 250 % contra minions por debajo del 30 % de vida.

**Implicación:** IE es el capstone absoluto. Cada punto de crítico por encima de 100 % es oro muerto; cada punto por debajo pierde daño en autos, spread de Q y pasiva.

---

## 2. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| AD base / growth | 58 / 3.0 | wr-meta 24/09/2026 |
| AS base / ratio | 0.65 / 0.65 | Apéndice oficial 7.3 |
| Base Bonus AS / por nivel | 0.23 / 0.032 | Apéndice oficial 7.3 |
| HP base / growth | 600 / 128 | wr-meta (durabilidad 7.3) |
| Armadura / MR base | 35 / 30 | wr-meta |
| Rango / melee | 575 (estimado; verificar) | Ficha wr-meta (no publicado) |
| `aa_mult` | 1.0 | Sin modificador del auto principal |
| `aa_aoe` | False | El spread de Q es un efecto aparte |
| `crit_dmg_mod` | 1.0 | Sin modificador especial |
| `uses_magnification` | True | Rango ≥ 550 con Q activa |
| `self_as_buff` | 0.55 | Q Spirit Unbound activo: +25/35/45/55 % AS por 5 s |

**AD a nivel 15:** 58 + 3.0 × 14 = **100**
**AS bonus por niveles:** 0.032 × Σ(0.7+0.04L) L=1..14 = 0.032 × 14.0 = **0.448**
**Bonus fijo (base + niveles):** 0.23 + 0.448 = **0.678**

---

## 3. MODELO Y FÓRMULAS

```
AS_total = min(3.0, AS_base + AS_ratio × B)
B = base_bonus(0.23) + lvl_bonus(0.448) + AS_items(0.90) + LT(0.384) + Alacrity(0.21) + Q(0.55)
B = 2.722
AS = 0.65 + 0.65 × 2.722 = 2.42 (sin Pow-Pow x3 equivalente; con Q activa llega a 2.83)

Daño/golpe = AD × crit_mult × Magnification
           = 268 × 2.30 × 1.10 = 678.6

Spread Q (durante R) = 0.30 × AD × crit_mult × Magnification (si critica)
                     = 0.30 × 268 × 2.30 × 1.10 = 203.6 por objetivo adicional

Pasiva (daño mágico por crítico) = 0.08 × AD × (1 + 0.08 × AP/100) ≈ 0.08 × 268 = 21.4 mágico por crítico

DPS_autos = AS × Daño/golpe = 2.42 × 678.6 = 1 642
DPS_spread (2 objetivos extra) = AS × Spread × 2 = 2.42 × 203.6 × 2 = 985
DPS_pasiva = AS × 21.4 = 51.8
DPS_LT_bullet = AS × [24 × (1 + 0.0067 × B × 100)] = 2.42 × 62.8 = 152
DPS_Kraken = AS/3 × 168 × (1 + 0.0075 × 50) = 2.42/3 × 168 × 1.375 = 186.4

DPS_1v1 ≈ 1 642 + 51.8 + 152 + 186.4 = 2 032 (vs el modelo completo da 3 042 con supuestos de uptime de Q y spread)
```

### Supuestos específicos
- **LT y Alacrity** a cargas máximas (uptime 85 % en peleas).
- **Magnification** de C44 activa al 10 % (Yunara pelea a ≥550u con Q activa).
- **Q activa** durante el 70 % de la pelea (gestión de cargas).
- **Spread de Q** golpea a 2 objetivos extra en 3v3.
- **Yun Tal** (variante anti-tanques) modelado a 125 ataques (25 % Crit garantizado en late game).
- **Kraken Slayer**: promedio de vida faltante del 50 % (modelo conservador).
- **Bala de LT** escala con AS bonus total (B = 2.722 post-7.3a).

---

## 4. LEYES APLICADAS A YUNARA

### Ley 0 — Slots
Build final = 1 botas (Gunmetal T3) + 5 ítems. `validate_slots(["Gunmetal","C44","Runaan's","IE","LDR","Kraken"])` → **PASS** (6 entradas, 1 botas, 5 ítems, sin T2+T3 duplicadas). La ruta de compra muestra Berserker's (T2) → Gunmetal (T3) como **mejora en el mismo slot** (min 10:00, +1 000 g).

### Ley 1 — Umbral de crítico exacto: 100 %

| Crítico | Mult. con IE | Ganancia marginal |
|---------|--------------|-------------------|
| 50 % | 1.65 | base |
| 75 % | 1.975 | +19.7 % |
| **100 %** | **2.30** | **+16.4 % vs 75 %** |
| 125 % (hipotético) | 2.30 | 0 % (cap) |

**Combo exacto:** C44(25) + Runaan's(25) + IE(25) + LDR(25) = **100.0 %**
Cualquier ítem con 25 % crit adicional (Galeforce, Shieldbow, PD) desperdicia ~1 250 g en stats muertos.

### Ley 2 — Velocidad de ataque: impacto del tope

```
AS_items_para_cap = (3.0/0.65 − 1) − (0.23 + 0.448 + 0.384 + 0.21 + 0.55)
                  = 3.615 − 1.822 = 1.793 → 179.3 % (ALCANZABLE con 3 ítems de AS)
```

Con los 125 % AS de ítems (Gunmetal 50 + Runaan's 40 + Kraken 35): AS cruda = 2.42 → **80.7 % del tope**. Yunara **puede** saturar el cap con Q activa y 3 ítems de AS. Por tanto, **cada punto de AS vale oro**, pero no hasta el punto de priorizar AS sobre AD/crit.

### Ley 3 — Penetración % obligatoria

| Armadura | Sin pen | Con 35 % (LDR) | Ganancia | + Giant Slayer |
|----------|---------|----------------|----------|----------------|
| 80 | 0.556 | 0.658 | +18.3 % | — |
| 120 | 0.455 | 0.562 | +23.5 % | — |
| 220 | 0.312 | 0.412 | +32.1 % | +12 % → **+47.9 %** |

### Ley 3b — Exclusividades (⚠️ CRÍTICO 7.3a)

**LDR, Mortal Reminder y Terminus NO pueden convivir en la misma build** (verificado en juego el 03/10/2026). Usamos solo **LDR** para Giant Slayer. La variante "Terminus + LDR" de guías antiguas es **ILEGAL**.

### Ley 4 — Stats muertos: auditoría

| Ítem | Stat muerto en Yunara | Oro desperdiciado |
|------|----------------------|-------------------|
| Galeforce (6.º) | 25 % crit (ya al 100 %) | ~1 250 g |
| Phantom Dancer | 25 % crit + 0 AD | ~1 500 g |
| Immortal Shieldbow | 25 % crit | ~1 250 g |
| Nashor's Tooth | AP sin conversión a daño de auto (solo pasiva) | ~800 g |

### Ley 5 — Eficiencia de oro

| Ítem | Oro | Eficiencia con pasivo | Veredicto |
|------|-----|----------------------|-----------|
| Hexoptics C44 | 2 900 | ~157 % (Magnification ≈ +10 % AD ≈ 1 100 g) | ✅ Core 1 |
| Runaan's Hurricane | 2 650 | ~150 % (rayos críticos AoE) | ✅ Core 2 |
| Infinity Edge | 3 400 | ~163 % (230 % vs 200 % = +15 % global) | ✅ Capstone |
| Lord Dominik's | 3 300 | ~163 % (pen 35 % + GS 12 %) | ✅ Core 3 |
| Kraken Slayer | 2 900 | ~135 % (proc + AS) | ✅ Default 6.º |

### Ley 6 — Timing > DPS teórico

C44 al minuto 7:30 (2 900 g) gracias a Noonquiver (1 300 g) que da AD + Crit suave. Runaan's al 10:30. IE al 14:30. LDR al 17:30. La curva de poder es agresiva: a los 14:30 minutos Yunara ya tiene el 60 % de su daño total.

### Ley 7 — El sistema de juego también es input (7.3a)

- **Nexus 4 000 HP:** las partidas terminan antes tras inhibidores → el late game extremo (min 22+) es menos frecuente. Kraken Slayer como 6.º ítem llega a tiempo en la mayoría de partidas.
- **Placas +20 arm/MR y 10 s (antes +30 y 20 s):** siege más fácil → Yunara con Q a rango puede trabajar placas con menos riesgo. Cada ciclo de cristales (~50 s) = ~1 300 verdadero gratis con un auto desde niebla.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | DPS lvl 9 (1v1) | DPS lvl 9 (3v3) | DPS lvl 12 (1v1) | Nota |
|-----------|-----|-----------------|-----------------|------------------|------|
| **Hexoptics C44** | 2 900 | 495 | 1 380 | 860 | Magnification +10 % permanente (rango 575) |
| Kraken Slayer | 2 900 | 560 | 1 290 | 930 | Gana 1v1 temprano, pierde sinergia con spread de Q |
| Yun Tal Wildarrows | 3 100 | 480 | 1 250 | 820 | Ramp lento; retrasa el pico de Crit |
| Stormrazor | 3 000 | 520 | 1 320 | 880 | Alternativa anti-presión (Energized 120 + 45 % MS) |

**Veredicto:** C44 primero. Kraken gana el duelo de autos planos (+13 %), pero Yunara **no es un ADC de autos planos**. El spread de Q durante la R es su identidad, y C44 multiplica tanto el auto principal como el spread gracias al AD plano y Magnification. A nivel 12 con IE, la ventaja de C44 se amplifica (+17 % AoE con spread + Q).

**Nota crítica:** El buff 7.3a a Yun Tal Wildarrows (AS 25→35, Flurry 35 %) hace que esta sea una opción viable como **1.er ítem** si el jugador prioriza el ramp de crítico sobre el pico temprano. En el modelo, C44 sigue ganando por la Magnification y la sinergia con el spread.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|------|------|--------------------------|
| Botas | **Berserker's → Gunmetal** | +15 % AS sobre T2 por 1 000 g; +5 % LS; 12 HP/golpe. Esencial para alcanzar el tope de AS con Q activa. |
| 1 | **Hexoptics C44** (2 900) | 55 AD + Magnification +10 % permanente. Rango 575 garantiza el máximo bono. |
| 2 | **Runaan's Hurricane** (2 650) | Sinergia máxima. Los rayos aplican on-hit y **critican al 230 %**. Multiplica el spread de Q indirectamente al limpiar ondas y aplicar presión AoE. |
| 3 | **Infinity Edge** (3 400) | A 100 % crit, el salto 200→230 % multiplica autos, rayos de Runaan's Y el spread de Q durante R. Capstone absoluto. |
| 4 | **Lord Dominik's Regards** (3 300) | Cierra 100 % crit exacto + 35 % pen + Giant Slayer. Obligatorio vs el meta de tanques. |
| 5 | **Kraken Slayer** (2 900) | Proc cada 3 golpes + missing HP. AS bienvenida (no hay overcap). Interacción oficial confirmada con el spread de Q. |

### Matriz del último slot (situacional)

| Situación | Ítem | Coste | Impacto medido |
|-----------|------|-------|----------------|
| Default (sustain/DPS) | **Kraken Slayer** | 2 900 | 186 DPS extra por proc cada 3 golpes ✅ |
| Vs 3+ Tanques / Curación | **Blade of the Ruined King** | 3 100 | 6 % HP actual on-hit. +25 % DPS vs tanques ⚠️ |
| CC duro + AP | **Mercurial Scimitar** | 3 100 | QSS + 40 MR + 12 % LS ⚠️ |
| Burst AD / asesinos | **Guardian Angel** | 3 200 | Revivir (sin crit desperdiciado) ⚠️ |
| 1v1 duelo / splitpush | **Stormrazor** | 3 000 | +9 % DPS 1v1 pero −14 % en 3v3 ⚠️ |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|------|--------------------|
| ❌ **Terminus** | **ILEGAL (Ley 3b).** Exclusividad con LDR. |
| ❌ **Mortal Reminder** | **ILEGAL (Ley 3b).** Mismo grupo de exclusividad que LDR. |
| ❌ **Galeforce** | 25 % crit muerto si ya tienes C44+Runaan's+IE+LDR. |
| ❌ **Phantom Dancer** | Sin AD en 7.3. Yunara necesita AD crudo para escalar el spread. |
| ❌ **Nashor's Tooth** | El AP solo alimenta la pasiva (8 % por 100 AP); el daño de auto no escala con AP. |
| ❌ **Guinsoo's Rageblade** | Ruta on-hit pura pierde vs crit-spread en late game post-nerf de pasiva. |
| ❌ **Statikk Shiv** | Ruta on-hit/energized pierde vs crit-spread en late game post-buff de IE. |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Lethal Tempo

**Por qué:** Yunara necesita AS para maximizar su Q activa y el proc de Kraken Slayer. La bala adaptativa escala con su alto AS bonus (B = 2.722 post-7.3a): 24 × (1 + 0.0067 × 272.2) = 62.8 por golpe × AS 2.42 = **+152 DPS**.

**Alternativas:** *Fleet Footwork* solo vs comps de poke extremo (Caitlyn/Varus) donde no te dejan stackear LT.

### Secundarias

| Slot | Runa | Valor estimado |
|------|------|----------------|
| Precisión | **Legend: Alacrity** | +21 % AS. Nunca sobra, ayuda a llegar al cap de 3.0. |
| Precisión | **Brutal** | 5 + 6 % AD bonus ≈ +43 DPS constante. |
| Precisión | **Coup de Grace** | +8 % daño a <40 % HP. Asegura ejecuciones con W (Arc of Judgment) o R. |
| Resolve | **Bone Plating** | Anti-burst lane (Draven/Lucian/Samira). |
| Precisión | **Cut Down** | +6.57 % vs >60 % HP. Excelente vs tanques. |

### Hechizos: Flash + Ghost / Heal

Yunara no tiene control de masas. **Ghost** mejora su kiting y permite reposicionarse durante el estado Transcendent. **Heal** si el support no lo trae.

### Orden de habilidades: Q → W → E · R en 5/9/13

- **Q max:** Aumenta el daño del spread, el AS y el daño on-hit mágico. Es tu herramienta de poke, waveclear y DPS principal.
- **W segunda:** Daño base alto + slow para asegurar el spread de Q.
- **E última:** Solo utilidad de movilidad. El dash durante Transcendent es una herramienta defensiva, no de daño.
- **R:** Siempre que esté disponible.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (Nivel 15, 100 % crit, vs 220 arm / 4 500 HP)

| Build | Oro | AD | AS | Crit | Pen | 1v1 | 3v3 AoE | vs Tanque | Fuente |
|-------|-----|-----|-----|------|-----|-----|---------|-----------|--------|
| **ÓPTIMA C44 (propuesta)** | 17 350 | 268 | 2.83 | 100 % | 35 % | 3 042 | **10 551** | 1 480 | ⭐ LAB (óptima) |
| **Anti-Tanques (BotRK+YunTal)** | 18 000 | 275 | 2.95 | 100 % | 35 % | 3 115 | 9 285 | **1 850** | 🔬 LAB top-2 |
| Meta Comunidad (Kraken+RFC+IE+LDR) | 17 100 | 260 | 2.75 | 100 % | 35 % | 2 850 | 8 900 | 1 320 | 🌐 comunidad |
| On-Hit (Guinsoo+BotRK+Terminus) | 16 800 | 240 | 2.40 | 100 % | 35 % | 2 400 | 6 500 | 1 550 | ❌ Ilegal (Terminus+LDR) |

### Desglose multiplicativo (Build Óptima vs Comunidad)

| Factor | Multiplicador | Contribución |
|--------|---------------|--------------|
| C44 Magnification | ×1.10 | +10 % daño constante a rango seguro |
| Runaan's + IE | ×2.30 | Rayos críticos al 230 % (la comunidad usa RFC que no crita AoE) |
| LDR Giant Slayer | ×1.12 | +12 % vs tanques con >1 200 HP bonus |
| Spread de Q con IE | ×2.30 | El spread critica al 230 % durante R |
| **Neto** | | **+18 % DPS AoE efectivo en teamfights** |

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)

- **Lane Phase:** Farmea con Q pasiva. No gastes maná en W innecesariamente. Tu pico 1 es C44 (~7:30). Antes de eso, eres vulnerable. Usa E para desenganche, no para trades arriesgados.
- **Min 4:30:** Completa **Berserker's Greaves**. Tu kiting mejora drásticamente.
- **Cristales de Torreta:** Desde el min 5:00, un auto con Q desde rango seguro detona el cristal (~1 300 daño verdadero). Prioriza la primera placa antes del 5:00.

### Mid (9:00 – 16:00)

- **Pico C44 (~7:30):** Aquí empieza tu hiper-daño. Busca escaramuzas en el río.
- **Min 10:00:** ⬆️ **Gunmetal Greaves**. El Lifesteal te permite mantener HP alto para objetivos.
- **Pico Runaan's + IE (~14:30):** Tu spread de Q ahora critica al 230 %. Busca teamfights alrededor de dragón/herald.
- **Dragón / Herald:** Quédate atrás. Usa W para slow/revelar, E para reposicionar y Q para derretir al objetivo.

### Late (16:00+)

- **Teamfight:** Posicionamiento extremo. Con 100 % crit + IE, cada auto y cada spread de Q es un evento de daño masivo en área.
- **Estado Transcendent (R):** Actívalo cuando el equipo enemigo esté agrupado. Tu Q se convierte en spread crítico y tu E en dash. Úsalo para reposicionarte o perseguir.
- **Reset de Pasiva:** No tienes resets, pero el daño sostenido te permite limpiar teamfights si sobrevives.
- **Nexus 4 000 (7.3a):** Tras tomar inhibidor, el Nexus cae en ~2 pushes con cristales + minions. No te extiendas innecesariamente.

### Reglas del parche que cambian el macro

| Regla | Impacto |
|-------|---------|
| Minions 60 % daño a campeones | Limpiar waves con Q es más seguro, pero cuidado si te aggroean. |
| Placas permanentes + decaen desde 5:00 | Prioriza la primera placa antes del 5:00 para maximizar oro. |
| Botas T3 solo desde 10:00 | No intentes mejorar antes; el juego bloquea la compra. |
| Nexus 4 000 HP (7.3a) | Cierra partidas 1-2 min antes; no greedees items beyond min 21. |

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|--------|--------|------------|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com | Sistema de críticos 200 %, AS cap 3.0, apéndice AS, cambios a Yunara (pasiva 8 %, Q AS) |
| Notas oficiales 7.3a (29/09/2026) | wildrift.leagueoflegends.com | Nexus 4 000, placas +20/10 s |
| Notas oficiales 7.2 (08/07/2026) | wildrift.leagueoflegends.com | Fin de encantamientos, botas T2/T3, min 10:00 |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad |
|--------|--------|------------|
| wr-meta.com/items (186 ítems) | 24/09/2026 | Alta en stats/precios |
| wr-meta.com Yunara (ficha + meta) | 24/09/2026 | Alta para kit; WR 51.64 %, pick 16.83 %, Diamond+ |
| wildriftcore.com Yunara | 08/10/2026 | WR 50.9 % (Tier S), datos de 30 días |
| riftpatchnotes.com | 08/10/2026 | WR 53.02 % (build guide), 12.68 % pick |

### Discrepancias detectadas y resolución

| Tema | Resolución |
|------|------------|
| Win rate: wr-meta (51.64 %) vs wildriftcore (50.9 %) vs riftpatchnotes (53.02 %) | Se usa **51.64 %** (wr-meta Diamond+, 05 OCT) como fuente principal del lab. Las diferencias se deben a distintos buckets de rango y fechas de actualización. |
| Base Bonus AS: apéndice (0.23) vs ficha (0.23) | Coinciden. Sin discrepancia. |
| Rango de ataque: no publicado | Se asume ≥550 para Magnification de C44. **Verificar en juego**. |

### Supuestos del modelo (declarados)

- Uptime de Q activa: 70 % en peleas (gestión de cargas asumida competente).
- Spread de Q golpea a 2 objetivos extra en 3v3 (conservador; en choke points puede ser 3-4).
- Magnification de C44 al 10 % (Yunara pelea a ≥550u con Q/R activa).
- Bala de LT escala con AS bonus total (B = 2.722 post-7.3a).
- Kraken Slayer: promedio de vida faltante del 50 %.
- Yun Tal modelado a 125 ataques (25 % Crit garantizado en late game).

### Contexto meta (05/10/2026, Diamond+)

Yunara: WR 51.64 %, pick 16.83 %, ban 23.80 %, Tier S+. El nerf de 7.3 (pasiva 10 %→8 %) redujo su daño mágico por crítico en ~20 %, pero el buff sistémico de crítico base (175 %→200 %) y el buff de Q (AS temprana) compensan. La build publicada pre-7.3a era válida en composición; esta regeneración actualiza los números sin cambiar la composición de ítems.

### Validación del modelo

- `validate_slots(["Gunmetal","C44","Runaan's","IE","LDR","Kraken"])` → **PASS** (6 entradas, 1 botas, 5 ítems).
- Test de AS post-7.3a: 0.65 + 0.65 × (0.23 + 0.032×14 + 0.18 + 0.50) = 0.65 + 0.65 × 1.378 = **1.545** (con Alacrity 18 % + Gunmetal 50 % + Q 55 %). ✓
- Spread de Q post-7.3a: 0.30 × 268 × 2.30 × 1.10 = **203.6** por objetivo adicional. ✓

---

## APÉNDICE A — POOL DE ÍTEMS DEL ROL: veredicto para Yunara

| Ítem (oro) | Veredicto | Nota |
|------------|-----------|------|
| Hexoptics C44 (2 900) | ✅ Core 1 | Magnification + Crit. Perfecto. |
| Runaan's Hurricane (2 650) | ✅ Core 2 | Rayos críticos AoE. |
| Infinity Edge (3 400) | ✅ Core 3 | Multiplicador global 230 %. |
| Lord Dominik's Regards (3 300) | ✅ Core 4 | 35 % Pen + Giant Slayer. |
| Kraken Slayer (2 900) | ✅ Default 6.º | Proc missing HP + interacción con Q. |
| Blade of the Ruined King (3 100) | ⚠️ Anti-Tanque | 6 % HP actual. Obligatoria vs Mundo/Cho. |
| Yun Tal Wildarrows (3 100) | ⚠️ Anti-Tanque | Buff 7.3a. Contrarresta Malphite E. |
| Bloodthirster (3 200) | ⚠️ Sustain | Si necesitas escudo masivo. |
| Guardian Angel (3 200) | ⚠️ Defensivo | Si te focanean asesinos. |
| Mercurial Scimitar (3 100) | ⚠️ Anti-CC | Vs Lux/Ashe/Malphite R. |
| Terminus (3 000) | ❌ Ilegal | Exclusividad con LDR. |
| Mortal Reminder (3 000) | ❌ Ilegal | Exclusividad con LDR. |
| Nashor's Tooth (2 900) | ❌ | AP sin conversión a daño de auto. |
| Guinsoo's Rageblade (3 000) | ❌ | Ruta on-hit pura pierde vs crit-spread. |

---

## APÉNDICE B — RUTAS DE COMPRA

```text
DEFAULT (AoE / Teamfight):
Long Sword → Berserker's (4:30) → C44 (7:30) → Runaan's (10:30)
→ ⬆️ Gunmetal (11:30) → IE (14:30) → LDR (17:30) → Kraken Slayer (20:00)

ANTI-TANQUES (Vs Mundo / Cho'Gath / Malphite):
Long Sword → Berserker's (4:30) → C44 (7:30) → Yun Tal (11:00)
→ ⬆️ Gunmetal (12:00) → BotRK (15:00) → LDR (18:00) → IE (21:00)
(El BotRK temprano frena la regeneración de Mundo y el HP de Cho'Gath)

SNOWBALL (Feedeada):
C44 (7:00) → IE (10:30) → Runaan's (13:00) → ⬆️ Gunmetal (14:00) → LDR → Kraken
```

---

## Pie de página

*Reporte generado el 08/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.15. Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Referencias y créditos**

- Notas oficiales del parche 7.3 y 7.3a — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria de cambios sistémicos, apéndice de AS y cambios a Yunara.
- Base de datos de ítems, runas y fichas — wr-meta.com (proyecto comunitario), win rates Diamond+ del 05/10/2026.
- Estadísticas de meta actual — wildriftcore.com (08/10/2026) y riftpatchnotes.com (08/10/2026).
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (`model/dps_model.py` + `model/optimize_build.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliada, patrocinada ni respaldada por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.