---
tags:
  - ADC
  - Marksman
  - Crítico
  - AoE
  - Bot-Lane
version: 1
Status: Beta
champion: Xayah
slug: xayah
role: adc
variant: dps-max
patch: "7.3a"
archetype: "Crítico AoE con escalado de crítico en E (Bladecaller)"
engine: autos
custom: false
generate: manual
mode: sr
published_at: "2026-10-08"
updated_at: "2026-10-09"
verification: AL_DIA
verified_patch: "7.3a"
---
**Fecha del análisis:** 08/10/2026
**Parche:** 7.3 (21-sep-2026) + hotfix 7.3a (29-sep-2026)
**Rol principal:** ADC (Dragon Lane)
**Arquetipo:** Crítico AoE
**DPS máximo sin compensaciones defensivas**: cada slot compra daño puro.
**Enfoque:** **Maximizar el DPS al límite.** 100 % crit con IE (×2.30).

> [!NOTE]
> **Estado Meta Actual (Diamond+, 05/10/2026):**
> Win Rate 49.87 % | Pick Rate 3.24 % | Ban 1.83 % | Tendencia ↑ 1 | Tier A | Rol DUO (ADC).

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (DPS Máximo · óptima del optimizador, 91.6 %)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** (min 10:00, MISMO slot) | 2 200 | 50 % AS, 5 % LS, Blessed 12 HP/golpe, Noxian Gait (+7 % MS al atacar) |
| 2 | **Yun Tal Wildarrows** | 3 100 | 50 AD, 35 % AS (7.3a), crítico por stacks hasta 25 %, Flurry +35 % AS/6 s |
| 3 | **Runaan's Hurricane** | 2 650 | 40 % AS, 25 % crit, 2 rayos 55 % AD que **critican ×2.30 y aplican on-hit** |
| 4 | **Infinity Edge** | 3 400 | 75 AD, 25 % crit, daño crítico 200 % → **230 %**; E ×1.50 → **×1.65** |
| 5 | **Blade of the Ruined King** | 3 100 | 40 AD, 30 % AS, 12 % LS, **Ruined Strike 6-7 % vida actual** (+381 DPS vs 2 200 HP) |
| 6 | **Lord Dominik's Regards** | 3 300 | 35 AD, 25 % crit, **35 % pen**, Giant Slayer +12 % vs ≥1 200 HP bonus |

> **Oro total: 17 750 g** (+500 start = 18 250 acum.) · **AD 319** · **AS 2.89** (96 % del tope; 3.0 cap en ventana W+Flurry) · **Crit 100 % exacto** · **Pen 35 %** · **LS 17 % → 498 HP/s** · **DPS 1v1 3 146 · 3v3 AoE 5 929 · vs tanque 1 582** · **validate_slots() → PASS (1, 5)** ✅

### Tabla A2 — VARIANTE "ANTI-BURST" (Guardian Angel por BotRK)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** | 2 200 | Ídem |
| 2 | **Yun Tal Wildarrows** | 3 100 | Core 1 |
| 3 | **Runaan's Hurricane** | 2 650 | Core AoE |
| 4 | **Infinity Edge** | 3 400 | Capstone |
| 5 | **Guardian Angel** | 3 200 | 45 AD + 40 armadura + revivir (180 s CD) |
| 6 | **Lord Dominik's Regards** | 3 300 | Pen + cierre de 100 % crit |

> **Oro total: 17 850 g** · AD 324 · AS 2.69 · **DPS 1v1 2 587 (−558, −17.7 %)** · 3v3 5 241 · **Coste medido del seguro de vida: −17.7 % de DPS.**

### Tabla A3 — VARIANTE "ANTI-CURACIÓN" (Mortal Reminder por LDR — Ley 3b: nunca conviven)

| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Berserker's → ⬆️ Gunmetal Greaves** | 2 200 | Ídem |
| 2 | **Yun Tal Wildarrows** | 3 100 | Core 1 |
| 3 | **Runaan's Hurricane** | 2 650 | Core AoE |
| 4 | **Infinity Edge** | 3 400 | Capstone |
| 5 | **Blade of the Ruined King** | 3 100 | On-hit %vida + AS |
| 6 | **Mortal Reminder** | 3 000 | 35 AD, 30 % pen, **Grievous Wounds 50 %** |

> **Oro total: 17 450 g** · Crit 100 % · Pen 30 % · **DPS 1v1 3 146 (±0)** · vs 120 arm −57 (−3.2 %) · vs tanque −175 (−11.1 %) · +GW 50 % vs Soraka/Yuumi/Sylas/BT enemigos.

### Tabla B — Ruta de compra cronológica (DPS Máximo)

| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Long Sword + Poción (Start) | 500 | 0:00 |
| 2 | Noonquiver + Pickaxe + Kircheis Shard → **Yun Tal Wildarrows** | 3 600 | ~6:00 |
| 3 | Botas + Daga → **Berserker's Greaves** (T2) | 4 800 | ~7:30 |
| 4 | Zeal + Kircheis Shard → **Runaan's Hurricane** | 7 450 | ~10:15 |
| 5 | ⬆️ **Gunmetal Greaves** (MISMO slot, +1 000 g, post min 10:00) | 8 450 | ~11:30 |
| 6 | B. F. Sword + Pickaxe + Brawler's Gloves → **Infinity Edge** | 11 850 | ~14:15 |
| 7 | Vampiric Scepter + Pickaxe + Recurve Bow → **Blade of the Ruined King** | 14 950 | ~17:00 |
| 8 | Last Whisper + Noonquiver → **Lord Dominik's Regards** | 18 250 | ~20:15 |

*(Minutos de `sim_timings.py --rol adc` — curva de 48 anclas de 6 reportes ADC del vault — con la mejora T3 colocada post-10:00 por convención del vault; el pico final 6 slots cae ~19:30-20:15 según income.)*

### Runas · Hechizos · Habilidades

| Categoría | Elección |
|-----------|----------|
| Keystone | **Lethal Tempo** (38.4 % AS + bala 78/golpe — verify #1 del buscador de runas; Conqueror −9.2 %) |
| Menor 1 | **Legend: Alacrity** (+21 % AS — parte del baseline ganador del motor de runas) |
| Menor 2 | **Brutal** (5 + 6 % AD bonus = **+17/auto ≈ +49 DPS**; la comunidad la usa — números del catálogo 7.3) |
| Menor 3 | **Cut Down** (+6.57 % vs >60 % HP — #2 del buscador; meta de tanques) / **Coup de Grace** (+8 % vs <40 % — cierra las ejecuciones de E) |
| Secundaria | **Gathering Storm** (AD creciente desde min 6: 2/5/9/14… — hiper-carry late) / **Bone Plating** (vs poke Caitlyn/Jhin) |
| Hechizos | **Flash + Heal** (default) / **Flash + Barrier** (vs burst AD/AP) / **Flash + Exhaust** (vs dive) |
| Skills | **Q → E → W** (R en 5/9/13). Q = poke/plumas/waveclear; E 2.ª = ejecutor ×1.65; alternativa Q→W→E = +0.9 % DPS sostenido, −8 % burst de E (§7). |

### Resultado del modelo (nivel 15, LT+Alacrity full, W activo, 100 % crit — verificado en engine)

| Escenario | Valor | Desglose |
|-----------|-------|----------|
| **1v1** (vs 2 200 HP, pre-mit) | **3 146** | autos 2 118 + bala LT 227 + BotRK 381 = 2 726 engine ×1.071 (W) + E 165 + Q 32 + R 28 |
| **3v3** (AoE teamfight) | **5 929** | +2 332 de rayos Runaan's (404 ×2 objetivos ×AS) + cleave pasiva 287 |
| **vs 120 armadura** | **1 767** | mitigación ×0.562 con 35 % pen |
| **vs Tanque** (220 arm, 4 500 HP) | **1 582** | ×0.412 mitigación + Giant Slayer ×1.12 + BotRK 270/golpe |
| **Burst E** (5 plumas, ×1.65 con IE) | **1 320** pre-mit (949 vs squishy 60 arm · 742 vs 120 arm) | 330 la 1.ª pluma, −10 % por pluma siguiente (piso 10 %) |
| **Burst E** (3 plumas = **root 1.25 s**) | **891** pre-mit | el CC que habilita el combo completo |
| **Burst E** (8 plumas, teamfight con alfombra) | **1 716** pre-mit | R→E instantáneo: 5 plumas de R + 3 de pasiva |
| **R (Featherstorm)** | **1 650** (3 de 5 plumas) / 2 750 (5) pre-mit | +1.5 s intargeteable — la única defensa |
| **Auto crítico** | **734** (319 × 2.30) | +132 BotRK por golpe (154 con el 7 % oficial — §10) |
| **Rayos de Runaan's** | **404 por rayo ×2** | critican ×2.30 y aplican on-hit (el engine NO les suma BotRK: +~760 DPS 3v3 reales sin modelar, conservador) |
| **Heal/s sostenido** | **498** | LS 17 % (BotRK 12 + Gunmetal 5) + Blessed 12/golpe |

> **Titular:** Con **AS 2.89 + 319 AD + 100 % crit ×2.30**, Xayah sostiene **3 146 DPS en 1v1 y 5 929 en teamfight 3v3** — **+11.6 % y +7.1 % sobre la build Beta publicada, +23.8 % vs tanques y +101 % 3v3 sobre la build de comunidad** (que no lleva Runaan's). Su E con 5 plumas revienta a cualquier squishy (**1 320** → 949 tras armadura) y enroota con 3. Este es el techo de daño verificado de Xayah en 7.3a: **cero defensa comprada, todo el oro en multiplicadores.**

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### 1.1 Cambios directos (Xayah) — Parche 7.3

| Stat/Habilidad | Antes (7.2) | Ahora (7.3) | Impacto |
|----------------|-------------|-------------|---------|
| **AD base** | 54 | **60** | ✅ +6 (+11.1 %) early |
| **AD growth** | 5.0 | **4.2** | ⚠️ −11.2 AD a lvl 15 · **neto: −5.2 AD late** |
| **AS (apéndice oficial)** | — | **0.658 / 0.658 / 0.22 / 0.034** (ratio/base/bonus/nivel) | La sección XAYAH dice 0.03 → discrepancia resuelta en §10 (display in-game 0.022 = 0.658×0.034) |
| **W (Deadly Plumage)** — AS | 45/50/55/60 % | **40/45/50/55 %** | ⚠️ −5 % por rank |
| **W — pluma adicional** | 20 % del daño del ataque | **25 %** | ✅ +25 % al multiplicador de ventana (×1.25 en 4 s) |
| **W — MS** | 25/30/35/40 % | **30 % flat** (1.5 s) | ⚠️/✅ neutro en rank 4 |
| **E (Bladecaller)** | 60/70/80/90 + 90 % bAD | **(70/80/90/100 + 50 % bAD) × (1 + 50 %·crit + 50 %·(critDmg−2)·crit)** | ✅ **BUFF ESTRUCTURAL**: a 100 % crit + IE el multiplicador es **×1.65** — E pasa a escalar con la build |
| **R (Featherstorm)** | 125/250/375 + 100 % bAD | **150/250/350 + 100 % bAD** | ✅ +25 base rank 1 (early) |
| **Hotfix 7.3a** | — | **Sin cambios a Xayah** | ✅ El kit de 7.3 sigue vigente; 7.3a sí buffea su core 1 (Yun Tal AS 25→35 %, Flurry 35 %) |

**Efecto neto 7.3:** Xayah deja de ser "ADC de utilidad sin burst" y gana un **ejecutor de área escalado al crítico** (E ×1.65 + root). El crítico pasa de valer solo en autos a valer en **4 fuentes**: autos, pluma de W (copia el ataque), E y rayos de Runaan's.

### 1.2 Cambios sistémicos que le afectan (7.3 + 7.3a)

| Sistema | Cambio | Efecto en Xayah |
|---------|--------|-----------------|
| **Crítico base** | 175 % → **200 %** | ✅ ×2.00 sin IE, ×2.30 con IE — E lo hereda vía fórmula |
| **AS cap** | 2.5 → **3.0** | ✅ Build de 155 % AS de ítems llega al 96 % del tope (2.89) sin desperdicio |
| **Runaan's Hurricane** | 2 900→**2 650**; path Zeal+Kircheis; rayos 55 % AD **critican y aplican on-hit** | ✅ El mejor AoE por oro del juego para ella: 404×2 por auto (y en la realidad también procan BotRK — upside sin modelar) |
| **Yun Tal Wildarrows** (nuevo 7.3, buff 7.3a) | AD 50 + AS **35 %** + crit ramp 25 % + Flurry **+35 % AS/6 s** | ✅ Diseñado por Riot como "first item de alta eficiencia" — converge al óptimo del lab |
| **Botas T3 desde min 10:00** | Gunmetal = +1 000 g en el MISMO slot | 50 % AS + 5 % LS + Blessed 12/golpe (+35 HP/s) |
| **Torretas 7 000 HP + placas** | Placas permanentes; 7.3a: buff de placa +20 arm/MR 10 s (era +30/20 s) | Siege con W+Runaan's; menos castigo al divear placas |
| **Crystalline Overgrowth** | Primer ataque detona 3.3-18.9 % vida de torreta como daño verdadero (~50 s) | ✅ Q/auto desde 575 de rango = ~1 300 verdadero por ciclo, gratis |
| **Nexus 4 000 HP** (7.3a) | 5 500 → 4 000 | Partidas ~1-2 min más cortas: el 6.º ítem (LDR, 20:15) sí llega |
| **Minions 60 % daño** (7.3) | Nuevo | Lane más segura para farmear con Q y stackear Yun Tal |

### 1.3 ¿Sus habilidades escalan con crítico?

**Sí — desde 7.3 es la identidad del campeón:**

| Fuente de daño | ¿Escala con crit? | Multiplicador a 100 % crit + IE |
|-----------|----------|---------------------------------|
| **Autos** | ✅ directo | **×2.30** (734 con AD 319) |
| **W — pluma adicional** | ✅ copia el daño del ataque (que critica) | ×2.30 × 0.25 = **+57.5 % AD efectivo por golpe en ventana** |
| **E (Bladecaller)** | ✅ **fórmula nueva 7.3** | (100 + 50 % bAD) × **1.65** por pluma (con decaimiento −10 %/pluma, piso 10 %) |
| **Rayos de Runaan's** | ✅ critican | 0.55 × 319 × 2.30 = **404 por rayo** |
| **Q / R / cleave de pasiva** | ❌ (AD plano) | Q 225/daga · R 550/pluma · pasiva 45 % AD |
| **BotRK Ruined Strike** | ❌ (% vida actual, on-hit) | 132/golpe (6 % engine; **7 % oficial = 154**) |

**Conclusión (Ley 1):** el crítico alimenta 4 de 8 fuentes y el 87 % del DPS sostenido → **umbral útil = 100 % exacto**. La build lo cierra con Yun Tal(25)+Runaan's(25)+IE(25)+LDR(25) y **ningún slot más trae crit**.

---

## 2. FICHA MATEMÁTICA (spec — YA en `model/champspecs.py` desde 09/10)

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| AD base / growth | **60 / 4.2** → 118.8 @15 | Notas 7.3 (sección XAYAH) — fuente primaria |
| AS ratio / base | **0.658 / 0.658** | Apéndice oficial 7.3 (CSV del lab) |
| Base Bonus AS / por nivel | **0.22 / 0.034** → +0.476 @15 | Apéndice oficial; la sección XAYAH dice 0.03 → §10 discrepancia D1 (display in-game wr-meta 0.022 ≈ 0.658×0.034 corrobora el apéndice) |
| HP base / growth | **630 / 120** → 2 310 @15 | Ficha wr-meta (08/10) + wiki oficial (630-2310) ✅ ya NO es estimación |
| Armadura / MR | **40 (4) / 30 (1.4)** → 96 / 49.6 @15 | Ficha wr-meta + wiki (40-96, 30-49.6) ✅ |
| Maná / MS / rango | 435 (41) / 335 / **575** | Ficha wr-meta; rango confirmado en wiki.leagueoflegends.com (WR:Xayah) |
| `self_as_buff` | **0.55** (W rank 4: +55 % AS, 4 s / CD 14 s) | Convención engine "buff propio activo en pelea"; uptime sostenido real = 4/14 ≈ 29 % → sensibilidad −13.3 % (§3) |
| `aa_mult` / `aa_aoe` | 1.0 / False | El +25 % de W va como término explícito (×1.0714 sostenido); el AoE propio es cleave de pasiva (45 % AD, término aparte) |
| `crit_dmg_mod` | 1.0 | Sin modificador |
| `uses_magnification` | True (rango 575 ≥ 550) | **Irrelevante en la build óptima** (no lleva C44) → la build no depende de este supuesto |

**Kit 7.3 (valores rank 4 / rank 3 de R):**
- **P — Clean Cuts:** casteo → 3 stacks (cap 5, 7.5 s). Auto empoderado = pluma: daño del auto al principal **+ 45 % AD físico a todos en la línea**. Plumas plantadas duran **6 s**.
- **Q — Double Daggers:** 2 dagas, **(125 + 50 % bAD)** c/u (2.º+ objetivo 50 %), CD **7 s**, rango 1 000, deja **2 plumas**.
- **W — Deadly Plumage:** 4 s de **+55 % AS** y autos que disparan pluma extra = **25 % del daño del ataque** (hereda crit); +30 % MS 1.5 s al golpear campeón; CD **14 s**.
- **E — Bladecaller:** recupera todas las plumas clavadas: **(100 + 50 % bAD) × (1 + 50 %·crit + 50 %·(critDmg−2)·crit)** por pluma, **−10 % por cada pluma previa sobre el mismo objetivo (piso 10 %)**; **3+ plumas = root 1.25 s**; minions 50 %; CD **8 s**.
- **R — Featherstorm:** 1.5 s **intargeteable** (sin autos/casteos, puede moverse), **5 plumas en cono (350 + 100 % bAD)** c/u, CD 60 s, rango 1 000.

---

## 3. MODELO Y FÓRMULAS

Motor: `dps_model.eval_build()` (engine **autos** del lab) + términos de habilidades a mano. Convenciones idénticas al reporte canónico de Jinx.

```
AS_total = min(3.0, 0.658 + 0.658 × B)
B = 0.22 (base) + 0.476 (niveles, growth 0.034) + 1.55 (ítems: 50+40+30+35… ver Tabla A)
    + 0.384 (LT 6×6.4 %) + 0.21 (Alacrity) + 0.55 (W rank 4)
B = 3.39  →  AS = 0.658 × 4.39 = 2.889  (96.3 % del tope; cruda W+Flurry = 3.12 → cap 3.0)

Auto crítico = AD × 2.30 = 318.8 × 2.30 = 733.7  (sin Magnification: la build no lleva C44)
DPS_autos = 2.889 × 733.7 = 2 119
Bala LT = 24 × (1 + 0.0067 × 339) = 78.5/golpe × 2.889 = 227/s
BotRK = max(15, 6 % × HP_enemigo) × AS = 132 × 2.889 = 381/s   (vs 2 200 HP; 7 % oficial → 154 → 445/s)
ENGINE 1v1 = 2 119 + 227 + 381 = 2 726 ✓ (salida literal de eval_build)

W (ventana): autos ×1.25 durante 4 s; sostenido ×(1 + 0.25 × 4/14) = ×1.0714 → 2 921
E (5 plumas, 100 % crit + IE): (100 + 0.5×200) × 1.65 × Σ(1.0+0.9+0.8+0.7+0.6 = 4.0) = 1 320 por casteo
   E-DPS = 1 320 / 8 s = 165   ·   E(3, root) = 891   ·   E(8, post-R) = 1 716
Q = (125 + 100) / 7 = 32/s    R = 3 × (350+200) / 60 = 28/s    (3 de 5 plumas al principal)
Cleave pasiva (3v3) = ~1 auto empoderado/s × 0.45 × 319 × 2 objetivos = 287/s
TOTAL 1v1 = 2 921 + 165 + 32 + 28 = 3 146   ·   TOTAL 3v3 = 5 056×1.0714 + skills + cleave = 5 929

Rayos Runaan's (3v3) = AS × 0.55 × AD × 2.30 × 2 = 2 332/s   (engine; SIN on-hit de BotRK en rayos → conservador)
vs 120 arm: mit = 100/(100+120×0.65) = ×0.562   ·   vs 220 arm + GS: ×0.412 × 1.12
```

### Supuestos específicos (declarados)

- **W activo durante la ventana de pelea** (convención del engine con Jinx/Yunara): sostenido real = 29 % de uptime → **sin W el DPS cae −13.3 %** (2 726→2 362 engine). Las 3 fuentes de W (AS, pluma 25 %, MS) se activan juntas al pelear: supuesto razonable en peleas de ≥4 s.
- **E con 5 plumas por casteo sobre el objetivo principal** (3 de pasiva + 2 de Q en 6 s de plumas en el suelo; root garantizado con 3). Teamfight con alfombra: 8 (E = 1 716).
- **R: 3 de 5 plumas** al objetivo principal (cono a quemarropa = 5). CD 60 s → término sostenido pequeño; su valor real es defensivo/setup.
- **Q: 1 daga por objetivo** (la 2.ª solo pega a objetivos detrás).
- **BotRK al 6 % (valor del engine)**: la nota oficial 7.3 dice **7 %** → números del reporte son el piso conservador (+64 DPS 1v1, +130 vs tanque con 7 %; §10 D3).
- **Rayos de Runaan's SIN aplicar on-hit** (postura conservadora del engine): el texto oficial dice que SÍ lo aplican → el 3v3 real con BotRK es ~**+760 DPS** mayor (6 700 vs 5 929). No se publica como cifra principal.
- **Yun Tal a stacks completos** (25 % crit = 125 ataques ≈ 2-3 min de lane): cierto desde ~min 8-9; antes, la build rinde −7 % de crit efectivo (~−3.5 % DPS).
- **LT + Alacrity a cargas máximas** (uptime ~85 % real en pelea sostenida).
- **Flurry de Yun Tal NO modelado** (+35 % AS/6 s, CD 25 s reducido por ataques): en ventana W+Flurry la AS cruda es 3.12 → **cap 3.0** (upside sin contar).
- Enemy HP default 2 200 (1v1/3v3/vs120) y 4 500 + 220 arm + ≥1 200 HP bonus (tanque) — escenarios estándar del lab.

---

## 4. LEYES APLICADAS A XAYAH (formato compacto — estándar v1.13.1)

- **Ley 0 — Slots:** 6 entradas = 1 botas (⬆️ Gunmetal T3, mismo slot que Berserker's desde min 10:00) + 5 ítems · `validate_slots(["Gunmetal","Yun Tal","Runaan's","BotRK","LDR","IE"]) → PASS (1, 5)` ✅ — **ahora sí corre en el engine** (Xayah añadida a `champspecs.py`; la v1 Beta solo podía validar a mano).
- **Ley 1 — Crítico exacto:** 25+25+25+25 = **100.0 %** con Yun Tal+Runaan's+IE+LDR; cualquier 5.º ítem con crit (Fiendhunter/Galeforce/PD/Navori+Runaan's) deja **125 % → 25 % muerto = 1 250 g** ❌. Umbral = 100 % porque 4 fuentes escalan con crit (§1.3) y no hay conversión de sobrante.
- **Ley 2 — AS al tope sin pasarse:** AS de ítems para cap con W = **171.9 %**; la build lleva **155 %** → 2.889 (96.3 % del cap); en ventana W+Flurry cruda 3.12 → cap (0.12 de overshoot ≈ 3.9 %, amortizado por el uptime ~60 % de Flurry). La v1 Beta se quedaba en 2.46 (82 %) con 90 % AS de ítems: **46 puntos de AS desperdiciados en oro** — aquí está la mitad de la diferencia de DPS.
- **Ley 3 — Pen % obligatoria:** LDR 35 % → vs 120 arm +23.5 % daño real, vs 220 arm +32 %, vs tanque full (220 arm + ≥1 200 HP bonus) **+47.9 % con Giant Slayer**. Meta de tanques 7.3a (Cho'Gath 50.9 % WR jungla, Malphite S+ 55.4 % top): sin pen, vsTanque cae de 1 582 a ~1 070 (−32 %) ❌.
- **Ley 3b — Exclusividades:** LDR es el ÚNICO del grupo `pen_pct` en la build (Mortal/Terminus la reemplazan, nunca conviven) · `violaciones_exclusividad() → []` ✅.
- **Ley 4 — Stats muertos:** 0 % crit muerto (100 exacto) · 0 AH comprado (Q/E/W no lo necesitan: maná 1 009 basta, CD se cubre con Navori-cambio NO tomado) · LS 17 % = sustain real (498 HP/s) · MS de Runaan's/Yun Tal/Noxian = kiting. Muertos en rechazados: 25 % crit de Fiendhunter/Galeforce/PD, AP de Statikk/Nashor, maná de Manamune/ER.
- **Ley 5 — Eficiencia de oro:** Yun Tal ≥145 % (stats) + Flurry · Runaan's ~106 % stats + rayos (+2 332 DPS AoE = el ítem que más DPS total añade por oro en 3v3) · BotRK ~106 % stats + Ruined Strike (+381 DPS vs 2 200 HP ≈ +57 AD equivalentes = +2 300 g de valor) · IE ~128 % stats + ×2.30 (capstone) · LDR ~140 % + GS. Detalle en §6.
- **Ley 6 — Timing:** Yun Tal 6:00 (componentes que pegan: Noonquiver 1 300 = AD+crit, Kircheis = AS) → Runaan's 10:15 → IE 14:15 (spike de E ×1.65) → BotRK 17:00 → LDR 20:15. Power curve: lvl 9 565 → lvl 12 901 → lvl 14 1 719 → lvl 15 3 146 (1v1). La ruta de comunidad (Navori) gana +3.7 % en lvl 12 y +2.9 % en lvl 14 pero pierde −8.6 % en lvl 15 y −38 % de 3v3 en el camino (§5/§8).
- **Ley 7 — Sistemas:** Crystalline Overgrowth desde 575 de rango (~1 300 verdadero/50 s con Q) · placas +20/10 s (7.3a) = siege barato con Runaan's · Nexus 4 000 → el pico 6 slots (20:15) sí llega a importar · minions 60 % = lane segura para el ramp de Yun Tal.

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

Checkpoint nivel 9 (Berserker's + 1 ítem, ranks reales: Q4/E2/W1, crit/IE de cada build, E con 4 plumas):

| Candidato | Oro | 1v1 total | 3v3 engine | AS | AD | Crit | Convergencia (lvl 15) |
|---|---|---|---|---|---|---|---|
| **Yun Tal Wildarrows** | 3 100 | **565** | 695 | 2.17 | 144 | 25 % | ✅ **3 146 — la óptima** (el optimizador la re-encuentra de primero) |
| Stormrazor | 3 000 | 576 (+1.9 %) | 705 | 2.07 | 144 | 25 % | ⚠️ 3 090 (−1.8 %): Energized se solapa con Runaan's, sin ramp |
| Kraken Slayer | 2 900 | 570 (+0.9 %) | 695 | 2.17 | 139 | **0 %** | ⚠️ 3 063 vía ruta propia (−2.6 %): 0 crit retrasa E ×1.65 y fuerza IE temprano |
| Hexoptics C44 | 2 900 | 557 (−1.4 %) | 691 | 1.94 | 149 | 25 % | ✅ 3 144 como OPT2 (−0.1 % 1v1, −2.7 % 3v3) — alternativa legítima |
| The Collector | 3 000 | 507 (−10.3 %) | 636 | 1.94 | 144 | 25 % | ❌ pen plana muerta al llegar LDR; ejecuta <5 % situacional |
| Rapid Firecannon | 2 650 | 445 (−21.2 %) | 529 | 2.21 | 94 | 25 % | ❌ 0 AD: E y autos sufren |
| Navori Quickblades | 2 650 | 438 (−22.5 %) | 522 | 2.21 | 94 | 25 % | ⚠️ ruta comunidad: +3.7 % lvl 12 / +2.9 % lvl 14 (CDR de E) pero **−8.6 % lvl 15 y −38 % 3v3 lvl 12** |

**Veredicto:** **Yun Tal primero.** En lvl 9 empata técnico con Storm/Kraken (±2 %) pero es el único que **converge a la build óptima** sin oro muerto: sus 3 componentes pegan desde el minuto 2 (Noonquiver = AD+crit, Kircheis = AS), el ramp de crit se completa en ~2-3 min de lane (minions incluidos), y Riot lo diseñó explícitamente como first-item de eficiencia (nota oficial 7.3). **C44 es la alternativa anti-poke/Magnification** (−0.1 % 1v1): válida si peleas siempre a ≥550 de rango; pierde −7.3 % si el enemigo te cierra la distancia. **Navori-first es la trampa de la comunidad**: gana mid-game 1v1 (CDR) y colapsa en teamfights (sin Runaan's, 3v3 = 1 075 vs 1 735 en lvl 12).

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Berserker's → ⬆️ Gunmetal** (2 200) | 50 % AS (⅓ del camino al cap) + 5 % LS + Blessed 12/golpe (+35 HP/s) + Noxian Gait. Chainlaced/Armored cuestan −355 DPS (−11.3 %) c/u — solo situacionales. |
| 1 | **Yun Tal Wildarrows** (3 100) | AD 50 + AS 35 % (7.3a) + 25 % crit (ramp) + Flurry. Eficiencia ≥145 % solo en stats; en el optimizador mueve el objetivo +1.1 pts sobre C44 (91.6 % vs 90.5 %). |
| 2 | **Runaan's Hurricane** (2 650) | El multiplicador AoE: +2 332 DPS en 3v3 (rayos 404 ×2 que critican ×2.30). Sin él, el 3v3 cae −46 % (caso comunidad). AS 40 % = ⅓ del cap-path. |
| 3 | **Infinity Edge** (3 400) | ×2.00→×2.30 = **+13.5 % a todo el daño crítico** (autos, rayos, pluma de W) y E ×1.50→×1.65 (+10 %). A 100 % crit es el ítem de mayor valor marginal del juego (Ley 5: ~160 % de eficiencia). |
| 4 | **Blade of the Ruined King** (3 100) | El 6.º slot de DPS: 6 % vida actual (7 % oficial) = **+381 DPS vs 2 200 HP y +780 vs 4 500** + 30 % AS (cierra 96 % del cap) + 12 % LS. Gana a BT por **+343 (+10.9 %)** — el AD plano de BT (75) no paga lo que la AS+on-hit. |
| 5 | **Lord Dominik's Regards** (3 300) | Cierra el 100 % exacto + 35 % pen + GS 12 %: vs tanque full **+47.9 %** de daño real (Ley 3). Sin él: vsTanque −32 %. |

### Matriz del último slot (situacional — Δ medidos sobre 3 146/5 929/1 767/1 582)

| Situación | Cambio | Coste DPS | Qué compras |
|---|---|---|---|
| **Default (DPS máximo)** | — | — | BotRK: +381 on-hit, +343 vs BT |
| Vs 2+ tanques/frankenstein | LDR → **Mortal Reminder** | −0 1v1 · −57 vs120 · −175 vsTanque | GW 50 % (−40 % de curación enemiga; obligado vs Soraka/Yuumi/Sylas/Mundo) · Ley 3b: nunca con LDR |
| Vs burst AD / asesinos (Zed, Rengar) | BotRK → **Guardian Angel** | −558 (−17.7 %) | Revivir (180 s) + 40 armadura: el seguro contra one-shot |
| Vs CC en cadena + AP (Leona/Morgana/Annie) | BotRK → **Mercurial Scimitar** | −558 (−17.7 %) | QSS activo + 40 MR + 12 % LS |
| Vs poke sostenido (sin dive) | BotRK → **Immortal Shieldbow** | −487 (−15.5 %) | Lifeline 300-550 + 12 % LS |
| Sustain puro (sin amenaza) | BotRK → **Bloodthirster** | −343 (−10.9 %) | 75 AD + Ichorshield 165-345: NUNCA es la opción de más DPS (ver §8) |
| Vs CC de botas (Ashe/Caitlyn trap) | Gunmetal → **Chainlaced Crushers** | −355 (−11.3 %) | 30 % tenacidad + escudo mágico |
| Vs dive AD puro | Gunmetal → **Armored Advance** | −355 (−11.3 %) | 30 armadura + escudo físico |
| Vs 4 squishies (60-100 arm, sin tanque) | Gunmetal → **Armorcrusher Boots** | −184 1v1 · **+22 vs120** | Pen plana 12+6 % + 25 AD (optimizador #5: 89.2 %) |
| 0 tanques y comp de duelo (splitpush) | Runaan's+LDR → **Terminus+C44** (OPT4) | **+72 1v1 (+2.3 %) · +233 3v3 (+3.9 %)** · −315 vsTanque (−19.9 %) | Máximo DPS crudo; heal cae a 174 y pierdes GS — solo con tanque 0 confirmado |

### RECHAZADOS (con motivo numérico)

| Ítem | Motivo del rechazo |
|---|---|
| ❌ **Bloodthirster** (6.º slot) | −343 DPS 1v1 (−10.9 %), −227 3v3, −313 vsTanque vs BotRK. El "máximo AD plano" (75) pierde contra 30 % AS + 6-7 % vida actual: Xayah tiene AS-base baja (0.658) y la AS multiplica TODAS sus fuentes. **Corrige la conclusión de la v1 Beta.** |
| ❌ **Terminus** (como default) | −19.9 % vsTanque (pen 30 sin GS, cap 40 %) + heal 174. Solo glass-cannon declarado (matriz). |
| ❌ **Navori Quickblades** | +74 E-DPS (165→239) y +14 Q-DPS NO compensan: 1v1 −272 (−8.6 %), 3v3 −2 737 (−46.2 %) porque desplaza Runaan's o rompe el 100 % crit (con Runaan's = 125 % → 25 % muerto). |
| ❌ **Kraken Slayer** | −98 1v1 (−3.1 %), −213 vsTanque (−13.5 %). El proc (168 cada 3er golpe) no escala con crit ni alimenta E. |
| ❌ **Fiendhunter Bolts** | Crit 25 % → **125 % = 25 % muerto (1 250 g, Ley 1)**. Su post-R (+50 % AS ×3 autos, crit garantizado) es real pero ya vas al cap en ventana. |
| ❌ **Galeforce** | 125 % crit (25 % muerto) + dash que R ya cubre. |
| ❌ **Phantom Dancer** | 0 AD en 7.3 + 125 % crit; stacks de MS/AS redundantes con Noxian Gait. |
| ❌ **Rapid Firecannon / Statikk Shiv** | 0 AD (RFC: −21.2 % lvl 9) / ruta Energized-on-hit que no alimenta E ni crit-multiplicadores. |
| ❌ **Essence Reaver** | Spellblade 135 % AD BASE (~160/proc, ICD 1.5 s ≈ +107 DPS) < BotRK (+381); maná inútil (pool 1 009, coste Q50/E40/W50). Optimizador #7: 88.3 %. |
| ❌ **The Collector** | −10.3 % lvl 9; pen plana 10 % muerta junto a LDR 35 %; ejecuta <5 % no acelera objetivos. |
| ❌ **Manamune / Nashor's Tooth / Wit's End / Guinsoo** | Maná/AP/on-hit-mágico sin conversión en el kit (E y autos son 100 % físicos-AD). |
| ❌ **Doble pen (LDR + Mortal)** | ILEGAL — Ley 3b (`items_exclusivos.csv`, grupo pen_pct). |

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Lethal Tempo

**Por qué (verificado con `optimize_runes.py xayah`):** Xayah tiene AS-base baja (0.658) y NUNCA sobra AS en esta build (96 % del cap). LT da 38.4 % AS (6×6.4 % ranged) **+ bala adaptativa 78.5/golpe que escala con B total (3.39)** = +227 DPS. Score del buscador: **LT × Alacrity = baseline #1 (99.8 %)**; sin LT el DPS cae −16.3 %. La bala + la AS alimentan además las plumas (más autos = más stacks de pasiva consumidos = más plumas para E).

*Alternativas:* **Conqueror** −9.2 % (25.5 AD + omnivamp; la comunidad lo usa — stackea más lento que LT y no llega al cap de AS). **Fleet Footwork** solo vs poke extremo (Caitlyn/Jhin): sustain+MS, −15 % DPS. **First Strike** −? (poke de Q lo proca, +0.84 % sostenido — inferior).

### Menores + secundaria

| Slot | Runa | Valor estimado |
|------|------|----------------|
| Menor 1 | **Legend: Alacrity** | +21 % AS = +0.138 AS = **+101 DPS en autos** + bala/bolts — #1 del buscador, nunca sobra (96 % cap) |
| Menor 2 | **Brutal** | 5 + 6 % × 200 bAD = **+17/auto = +49 DPS** constante (números del catálogo 7.3; el engine de runas la excluye por fuente rasgada — cálculo manual declarado) |
| Menor 3 | **Cut Down** (default) | +6.57 % vs >60 % HP (mitad del tiempo de pelea + 100 % vs tanques) ≈ **+60-90 DPS promedio** — #2 del buscador |
| Menor 3 alt | **Coup de Grace** | +8 % vs <40 % HP (ventana 25 %) ≈ +55 DPS — **sinergia con E-ejecutor y root** (el burst de E vive en esa ventana) |
| Secundaria | **Gathering Storm** | AD creciente desde min 6 (2/5/9/14…): +14-20 AD a min 18-20 ≈ +45-65 DPS late — gratis en hiper-carry |
| Secundaria alt | **Bone Plating** | vs poke de lane (Caitlyn/Jhin/Varus): −? DPS, +supervivencia early (la build no tiene defensa) |
| Secundaria alt | **Sudden Impact** | 15-65 verdadero post-R (la R cuenta como leap) ×4 s — ~+20-40 DPS en peleas con R; excluida del engine (sin flag de dash en spec) |

### Hechizos: Flash + Heal (default)

- **Flash + Heal:** el estándar ADC — heal salva del burst que la build no tanka (2 310 HP, 96 arm).
- **Flash + Barrier:** vs 2+ fuentes de burst (Zed+Ahri, Syndra R) — la build dps-max NO tiene ningún activo defensivo propio.
- **Flash + Exhaust:** vs dive de AD melee (Rengar/Kha'Zix/Draven enemy bot).
- *Ghost* descartado: Noxian Gait + W MS + R ya cubren reposicionamiento.

### Orden de habilidades — **Q → E → W** (R en 5/9/13)

- **Q (Double Daggers) 1.ª:** ratio 50 % bAD ×2 dagas, CD 10→7 s, 2 plumas por casteo: poke, waveclear y el motor de plumas de E. +? por rank: 50→125 base (+150 %).
- **E (Bladecaller) 2.ª:** el ejecutor 7.3 — cada rank +10 base ×1.65 ×Σ4.0 plumas = **+66 de burst por casteo** (+8.3 DPS sostenido) y baja el CD 11→8 s (+37.5 % de casteos). Es la win-condition de la build: a rank 4 con IE, E(5) = 1 320.
- **W (Deadly Plumage) última:** +5 % AS por rank = +0.033 AS ≈ +35 DPS sostenido por rank — la alternativa **Q→W→E gana +0.9 % de DPS sostenido** en el mid-game (lvl 12-14) pero pierde −8 % de burst de E y el root-ejecutor temprano. Para daño total puro son casi empate; para **presión de kills** (CdG/Cut Down/root) Q→E→W es superior.
- **R:** siempre en 5/9/13.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (nivel 15, LT+Alacrity full, W activo — engine + términos de §3)

| Build | Oro | AD | AS | Crit | Pen | 1v1 | 3v3 | vs 120 | vs Tanque | Heal/s | Fuente |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Gunmetal Greaves + Yun Tal Wildarrows + Runaan's Hurricane + Blade of the Ruined King + Lord Dominik's Regards + Infinity Edge** | 17 750 | 319 | **2.89** | 100 % | 35 % | **3 146** | **5 929** | **1 767** | **1 582** | 498 | ⭐ LAB (óptima · 91.6 %) |
| Gunmetal Greaves + Yun Tal Wildarrows + Runaan's Hurricane + Blade of the Ruined King + Lord Dominik's Regards + Infinity Edge → **Hexoptics C44 por Yun Tal** | 17 550 | 324 | 2.66 | 100 % | 35 % | 3 144 | 5 769 | 1 766 | 1 571 | 495 | 🔬 LAB top-2 (90.5 %) |
| Gunmetal Greaves + Yun Tal Wildarrows + Runaan's Hurricane + Hexoptics C44 + Terminus + Infinity Edge | 17 250 | 334 | 2.92 | 100 % | 30 % | 3 218 | 6 162 | 1 749 | 1 267 | 174 | 🔬 LAB top-4 (89.4 % · glass cannon) |
| Gunmetal Greaves + Hexoptics C44 + Runaan's Hurricane + Infinity Edge + Lord Dominik's Regards + Bloodthirster | 17 650 | **359** | 2.46 | 100 % | 35 % | 2 819 | 5 535 | 1 584 | 1 278 | 510 | 📌 publicada v1 (Beta 08/10) |
| Gunmetal Greaves + Hexoptics C44 + Runaan's Hurricane + Infinity Edge + Lord Dominik's Regards + Kraken Slayer | 17 350 | 329 | 2.69 | 100 % | 35 % | 3 063 | 5 758 | 1 721 | 1 379 | 165 | 🔬 LAB (análoga a la óptima de Jinx) |
| Gunmetal Greaves + Yun Tal Wildarrows + Navori Quickblades + Infinity Edge + Lord Dominik's Regards + Guardian Angel | 17 850 | 324 | 2.69 | 100 % | 35 % | 2 654 | 2 945 | 1 491 | 1 198 | 142 | 🌐 comunidad (wr-meta 08/10) |

*(Cifras = engine `eval_build` × amplificador de W + E/Q/R/cleave de §3, mitigadas por escenario. Nombres completos según estándar v1.13.1.)*

### Desglose multiplicativo de la diferencia — ⭐ óptima vs 📌 publicada v1 (1v1 engine: 2 726 vs 2 401 = +13.5 %)

| Factor | Multiplicador | Contribución |
|---|---|---|
| AS de ítems 155 % vs 90 % (Yun Tal+BotRK vs C44+BT) | ×1.174 sobre autos/bala/rayos | **+372 DPS** |
| AD 319 vs 359 (BotRK 40+30 %AS vs BT 75) | ×0.889 sobre autos | −250 DPS |
| BotRK Ruined Strike (6 % engine; 7 % oficial) | +132/golpe × 2.889 AS | **+381 DPS** (vs 2 200 HP) · +780 vs 4 500 |
| Magnification de C44 (solo v1) | ×1.10 sobre autos de v1 | +204 DPS para v1 (y depende de rango ≥550) |
| Bala LT (B 3.39 vs 2.74) | 78.5 vs 68.1/golpe | +59 DPS |
| E más grande en v1 (bAD 240 vs 200) | 181.5 vs 165/s | +16 DPS para v1 |
| **Neto 1v1** | | **⭐ +327 (+11.6 % total con skills)** |
| **Neto vs tanque** | BotRK 270/golpe + GS vs nada | **⭐ +304 (+23.8 %)** |
| **Neto 3v3** | +0.23 AS × rayos 404×2 | **⭐ +394 (+7.1 %)** |

**Lectura:** la v1 Beta maximizaba AD plano (359) con AS famélica (2.46 = 82 % del cap). En un campeón de AS-base 0.658 con 4 fuentes que multiplican la cadencia (autos, rayos, balas LT, plumas), **la AS es el multiplicador del multiplicador**: 155 % AS + on-hit %vida > 40 AD extra. Contra la build de comunidad (Navori+GA, sin Runaan's): **+18.5 % 1v1 y +101.3 % 3v3** — su CDR de E (+74 E-DPS) no paga ni la mitad del AoE perdido.

---

## 9. PLAN DE JUEGO

### Early (0:00 – 9:00)

- **Start:** Long Sword + Poción. Rush **Yun Tal (~6:00)**: componentes Noonquiver (1 300 — AD+crit que ya pega) → Pickaxe → Kircheis. El ramp de crit (125 ataques) se completa farmeando: al ~8:00 tienes 25 % reales.
- **Trade pattern (nivel 2-5):** Q (2 plumas) → auto ×2-3 (plumas de pasiva) → **E con 3+ plumas = root 1.25 s** → W y remate. El root es tu CC de lane: castígalos cuando crucen la línea de plumas.
- **W es tu all-in de 4 s:** actívala SOLO cuando vayas a pelear (uptime 29 % — cada W gastada en farmeo es −13 % de DPS en el trade).
- **Nivel 5 (R):** Featherstorm = anti-gank (intargeteable 1.5 s sobre la R de Zed, el hook de Thresh, el CC de Leona) + 5 plumas para E instantáneo.
- **Min 6:00+:** Crystalline Overgrowth — Q/auto a torreta desde 575 detona 3.3-18.9 % de su vida como daño verdadero (~50 s de ciclo): placa gratis sin exponerte.

### Mid (9:00 – 16:00)

- **Runaan's (~10:15) + ⬆️Gunmetal (~11:30):** spike de waveclear y AoE — con minions al 60 % de daño puedes pushear y rotatear seguro.
- **IE (~14:15) = EL spike:** E pasa a ×1.65 (5 plumas = 1 320) y todo critica ×2.30. De aquí al min 17 eres de los carries más peligrosos del mapa en teamfight.
- **Teamfight pattern:** antes del engage, carga el suelo (Q + autos = 5 plumas en 6 s) → pelea sobre TU alfombra → E multi-root (3+ plumas por enemigo) → R defensivo o para reposicionar + 5 plumas extra → E otra vez (8 plumas = 1 716).
- **Objetivos:** Herald/Dragón se contestan con alfombra de plumas en el foso (wildriftcore: las zonas estrechas maximizan E). No face-checkees: sin defensivos, un CC inesperado = muerte.

### Late (16:00+)

- **BotRK (~17:00) y LDR (~20:15):** pico completo 3 146/5 929. Contra tanques: GS+pen+6-7 % vida actual = los matas más rápido que ellos a ti (1 582 DPS vs 4 500 HP+220 arm).
- **Posicionamiento front-to-back:** NUNCA inicies tú (wildriftcore: Xayah castiga engages, no los crea). R se guarda para el dive enemigo — gastarla en daño = quedarte sin la única defensa 60 s.
- **Nexus 4 000 HP (7.3a):** tras inhibidor, el Nexus cae en ~2 sieges con W+Runaan's. La partida promedio termina antes → tu pico SÍ llega.
- **Split push:** Runaan's + W = torreta en 4 autos bajo cristal; si vienen 2, R+E root y sales por el recall de Rakan (Lover's Leap si duo-queue).

### Reglas del parche que cambian el macro

| Regla | Impacto |
|---|---|
| Botas T3 solo desde min 10:00 | Gunmetal a los ~11:30 (no antes) — la Tabla B lo respeta |
| Torretas 7 000 HP + placas (+20 arm/MR 10 s en 7.3a) | Siege más lento pero más seguro: Runaan's + cristal |
| Crystalline Overgrowth (~50 s) | +~1 300 verdadero gratis por ciclo desde rango |
| Nexus 4 000 (7.3a) | Cierre más rápido: el 6.º ítem importa |
| Minions 60 % daño a campeones | Lane estable para el ramp de Yun Tal |
| Yun Tal buff 7.3a (Flurry 35 %/25 s) | Ventanas de pelea: W+Flurry → AS 3.0 cap por ~6 s |

**Sinergias (wildriftcore 09/10):** **Rakan** (ideal — Lover's Leap + W compartida), **Nautilus/Leona/Jarvan IV** (CC lineal que mete enemigos en la alfombra de plumas). **Counters:** Jhin y Caitlyn (poke > tu rango antes de colocar plumas → Bones+Barrier+Fleet), comps de dive doble (→ variante GA/Scimitar).

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)

| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 (21/09/2026) | wildrift.leagueoflegends.com (`data/raw/patch73.txt`) | AD 60/4.2 · W 40-55 %/+25 %/30 % MS · **fórmula E con crit** · R 150/250/350 · crítico 200 % · AS cap 3.0 · apéndice AS (0.658/0.658/0.22/**0.034**) · paths y stats de Yun Tal/Runaan's/IE/LDR/BotRK |
| Notas oficiales 7.3a (29/09/2026) | ídem (`cambios_7.3a.md`) | Yun Tal AS 35 %/Flurry 35 %-25 s · Nexus 4 000 · placas +20/10 s · **Xayah sin cambios** |
| Notas oficiales 7.2 (08/07/2026) | ídem | Fin de encantamientos de botas · T2/T3 mismo slot · min 10:00 |

### Fuentes secundarias

| Fuente | Acceso | Fiabilidad / qué aporta |
|---|---|---|
| wr-meta.com/165-xayah (ficha viva) | 08-09/10/2026 (`data/raw/campeones/xayah.html` → ficha + `champion_base_stats.json`) | Alta para HP/armor/MR/mana/rango y build+runas de comunidad; **desactualizada en W (45-60 %) y E (90 % bAD)** → mandan las notas (D2) |
| wiki.leagueoflegends.com/en-us/WR:Xayah + templates | 09/10/2026 | **Rango 575** confirmado · mecánica E (−10 %/pluma, piso 10 %, root 3) · pasiva (3 stacks/casteo, cap 5, plumas 6 s, cleave 45 % AD) · R (5 plumas, 1.5 s intargeteable) · HP 630-2 310/armadura 40-96. Stats AD/AS desactualizadas (54-124, ratio 0.625, loadouts con ítems removidos en 7.2 — "las guías viejas mienten") |
| champion_winrates.csv (vigía, Diamond+) | 08/10/2026 00:00 UTC | WR 50.17 % · pick 4.74 % · ban 0.17 % · Tier A · ↑2 — fuente del callout §0 |
| wildriftcore.com/champions/xayah | 09/10/2026 (fetch vivo) | WR 49.89 % (30 d) · pick 4.91 % · ban 0.19 % · efecto 7.3: +0.40 pts WR/+2.68 pts pick en 10 d · core comunidad (Navori+IE+LDR+Fiendhunter+Yun Tal) · sinergias/counters |
| wildriftfire.com/tier-list | 09/10/2026 | Contexto 7.3a: Senna S+ en Duo; S+ dominado por jungla/mid (Ambessa, Zed, Gwen…) |

### Discrepancias detectadas y resolución

| # | Tema | Resolución |
|---|---|---|
| D1 | **AS growth: apéndice oficial 0.034 vs sección XAYAH 0.03** | Se usa **0.034**: el display in-game (ficha wr-meta viva: AS "0.8 (0.022)") solo cuadra con 0.658×0.034 = 0.0224 (con 0.03 daría 0.020). Desviación documentada de la regla D.6 de FRAMEWORK (que prioriza la sección del campeón) por evidencia in-game de tercera fuente. Δ en build final: +0.037 AS (+1.5 %) — no cambia rankings. **Verificar en juego.** |
| D2 | **Ficha wr-meta muestra W 45/50/55/60 % y E +90 % bAD (valores 7.2)** | Mandan las notas 7.3: W **40/45/50/55 %** y E **+50 % bAD × mult-crítico**. La ficha mezcla datos vievos (W/E ratio) con nuevos (+25 % pluma, MS 30 %) — registrada aquí y en el spec (`champspecs.py`). |
| D3 | **BotRK: engine del lab modela 6 % vida actual (valor 7.2); la nota oficial 7.3 dice 7 %** (wr-meta ficha también muestra 35 % AS viejo y 6 %) | Reporte publica el valor del **engine (6 %) = piso conservador**. Con 7 % oficial: +64 DPS 1v1 (3 210) y +130 vsTanque (1 712) — la build óptima NO cambia (BotRK ya gana por +343 a 6 %). ⚠️ **Queda señalado al autor**: actualizar `dps_model.ITEMS["botrk"].onhit_pct_current` 6→7 y correr triage de reportes (fuera del alcance de este chat). |
| D4 | **Mecánica de decaimiento de E** (no está en las notas oficiales) | Wiki oficial: −10 % por pluma previa sobre el mismo objetivo, piso 10 %. La v1 Beta modelaba "10-15 plumas ≈ 766-1 950" sin decaimiento real. Corregido: E(5) = 1 320, E(8) = 1 716, E(15) = 6.0× base (no 15×). |
| D5 | **AD de la v1 Beta: "348" (118.8+240 = 348.8)** | Error aritmético de la v1: 118.8+240 = **358.8**. Con la build nueva: **318.8** (menos AD plano, +27.9 % más AS — el trade que gana). |
| D6 | **Yun Tal: crit real = 0 → 25 % en 125 ataques** | Engine lo cuenta al 25 % pleno (convención del item DB). Válido desde ~min 8-9 (farmeo incluido); antes, −3.5 % DPS transitorio. Declarado en §3. |
| D7 | **Uptime de W** (v1 Beta asumía "70 % efectivo → 30 % AS") | Real: 4 s/14 s = **29 % de uptime sostenido**. Engine usa la convención del lab (buff activo en ventana de pelea = 55 % pleno); sensibilidad publicada: −13.3 % sin W (§3). La v1 mezclaba ambos criterios (0.30 fijo) sin declarar la convención. |
| D8 | **Navori "Deft Strikes"** (15 % del CD restante por auto — mecánica exacta sin verificar) | Modelado conservador: CD efectivo ×0.75 para E/Q. Aun así Navori pierde −8.6 % (ver §6). **Verificar en juego** si se quiere reabrir el caso. |
| D9 | **Win rate: 49.87 % (callout v1, 05/10) vs 50.17 % (vigía 08/10) vs 49.89 % (wildriftcore 30 d)** | Banda consistente (±0.3 pts). El callout usa `champion_winrates.csv` (fuente canónica del lab, TEMPLATE §A.1). El ban 1.83 % de la v1 no cuadra con ninguna fuente viva (0.17-0.19 %) — probable errata de la v1. |
| D10 | **HP/armadura/MR/rango: la v1 los marcaba "⚠️ estimado"** | Ya son oficiales de ficha: 630(120)/40(4)/30(1.4) + rango 575 (wiki). Xayah NO está en `champion_durability_7.3.csv` porque 7.3 no tocó su durabilidad. |

### Supuestos del modelo (declarados)

- W activo en ventana de pelea (convención del engine); Flurry de Yun Tal NO modelado (conservador); rayos de Runaan's SIN aplicar on-hit de BotRK (conservador: el texto oficial dice que sí → +~760 DPS 3v3 reales sin publicar).
- E: 5 plumas/casteo 1v1 (8 en teamfight con alfombra) · R: 3 de 5 plumas al principal · Q: 1 daga/objetivo · cleave de pasiva ~1 auto empoderado/s (3 stacks por casteo, ~3.3 casteos/10 s), 45 % AD sin crit.
- LT/Alacrity full stacks (uptime ~85 %) · Yun Tal stackeado · enemigos: 2 200 HP default / tanque 4 500 HP + 220 arm + ≥1 200 bonus · BotRK 6 % (engine; D3).
- Checkpoints (lvl 9/12/14) con `self_as_buff` 0.55 constante (W real es rank 1-3 ahí: sobreestima ~0.03-0.10 AS en mid — igual para todas las rutas, no altera el orden).

### Contexto meta (09/10/2026, Diamond+ — muestra del vigía, confianza Med)

Bot lane 7.3a: **Yunara S+** (51.62 % WR, 16.28 % pick, 23.95 % ban — la ADC que define el parche), **Jinx S** (50.83 %), **Kalista A** (50.49 %), **Xayah A ↑2** (50.17 %, pick 4.74 %), **Caitlyn A** (49.64 % pero 20.51 % pick y 11.62 % ban), **Sivir A** (48.85 %); wildriftfire pone a **Senna S+ en Duo** y 7.3a buffeó a Samira/Tristana/Draven (ascendentes). Xayah es un **A-tier en ascenso post-buff** (+0.40 pts WR y +2.68 pts pick en 10 días según wildriftcore): no compite con Yunara/Jinx en prioridad de draft, pero es un pick fuerte en comps de teamfight estructurado con soporte de engage (Nautilus/Leona/Rakan), que es exactamente donde esta build AoE-crit maximiza. Muestra Diamond+ con confianza Med: leer el WR ±0.5 pts.

### Validación del modelo

- **`validate_slots(["Gunmetal","Yun Tal","Runaan's","BotRK","LDR","IE"]) → PASS (1, 5)`** ✅ — y las 10 candidatas de §8/§5 pasaron el validador estricto (Ley 0 + 3b).
- **Xayah YA está en el motor** (`model/champspecs.py`, añadida 09/10 con datos de ficha+apéndice): la limitación declarada por la v1 Beta ("validate_slots no puede correr") queda resuelta; el registry ahora resuelve `build_keys` y el gancho cuantitativo de `update_reports.py` funciona para futuros hotfixes.
- **Desglose manual = engine:** autos 2 119 + bala 227 + BotRK 381 = **2 726** = salida de `eval_build` ✅.
- **Optimizador:** `optimize_build.py xayah --crit-min 100 --pen-min 30 --validar` → 48 355 hojas legales, embudo 2 800: **top-1 = la build de Tabla A (91.6 %)**; top-2/top-4 reproducidos en §8. Sin restricciones el top-1 diverge (Gunmetal+Runaan's+C44+Yun Tal+BotRK+IE, 0 pen, 88.3 %): +13.2 % de 1v1 crudo pero **−8.5 % vs 120 y −21.8 % vs tanque** (viola Ley 3 — pen obligatoria contra el meta de vida 7.3a) y depende de Magnification (−7.3 % a <550 de rango). Las restricciones Ley 1/Ley 3 son las que declara el FRAMEWORK §A paso 5.
- **Runas:** `optimize_runes.py xayah --build …` → LT×Alacrity baseline #1; Conqueror −9.2 %; Cut Down/CdG/Triumph rankeados (§7).
- **Suite del lab:** 153 tests OK (2 skipped), incluido el test oficial de Caitlyn (AS 1.48125 pre-7.3a / 1.35 post-7.3a) que valida la fórmula de AS que usa este reporte.
- **Timings:** Tabla B derivada de `sim_timings.py --rol adc` (48 anclas, 6 reportes ADC del vault).

---

## APÉNDICE A — POOL DE ÍTEMES DEL ROL: veredicto para Xayah

| Ítem (oro) | Veredicto | Nota numérica |
|---|---|---|
| Yun Tal Wildarrows (3 100) | ✅ **Core 1** | AD 50 + AS 35 % + crit ramp 25 % + Flurry; ≥145 % eficiencia; convergente al óptimo |
| Runaan's Hurricane (2 650) | ✅ **Core 2** | +2 332 DPS AoE (3v3); rayos critican ×2.30 y aplican on-hit |
| Infinity Edge (3 400) | ✅ **Capstone** | ×2.30 (+13.5 % al daño crítico total) + E ×1.65 |
| Blade of the Ruined King (3 100) | ✅ **Core 4 (6.º slot DPS)** | +381 DPS on-hit (2 200 HP) / +780 (4 500); gana a BT +343 |
| Lord Dominik's Regards (3 300) | ✅ **Core 5** | +47.9 % vs tanque full (pen 35 % + GS 12 %); cierra 100 % crit |
| Gunmetal Greaves (2 200) | ✅ **Botas** | 50 % AS + 5 % LS + Blessed 12 (+35 HP/s); T3 mismo slot min 10:00 |
| Hexoptics C44 (2 900) | ⚠️ Alternativa cercana | OPT2: −0.1 % 1v1, −2.7 % 3v3, −7.3 % si peleas a <550 (Magnification); +8 % burst E |
| Mortal Reminder (3 000) | ⚠️ Anti-heal | Reemplaza LDR (Ley 3b): −175 vsTanque, +GW 50 % |
| Guardian Angel (3 200) | ⚠️ Anti-burst | −558 (−17.7 %); revivir + 40 arm |
| Mercurial Scimitar (3 100) | ⚠️ Anti-CC | −558 (−17.7 %); QSS + 40 MR |
| Immortal Shieldbow (3 000) | ⚠️ Anti-poke | −487 (−15.5 %); Lifeline 300-550 |
| Stormrazor (3 000) | ⚠️ First-item alt | +1.9 % lvl 9, −1.8 % lvl 15; Energized 120 anti-poke |
| Terminus (3 000) | ⚠️ Glass cannon | +2.3 % 1v1/+3.9 % 3v3, −19.9 % vsTanque; exclusivo con LDR/Mortal |
| Armorcrusher Boots (2 200) | ⚠️ Vs 60-120 arm | +22 vs120, −184 1v1; optimizador #5 (89.2 %) |
| Chainlaced Crushers / Armored Advance (2 200) | ⚠️ Situacional | −355 (−11.3 %) c/u; tenacidad+escudo / armadura+escudo |
| Bloodthirster (3 200) | ❌ DPS | −343 (−10.9 %) vs BotRK; el AD plano no paga en AS-base 0.658 |
| Kraken Slayer (2 900) | ❌ | −98 1v1 / −213 vsTanque; proc no critica ni alimenta E |
| Navori Quickblades (2 650) | ❌ DPS máx | +74 E-DPS no paga −272 1v1 y −2 737 3v3; o rompe crit (125 %) |
| Fiendhunter Bolts (2 650) | ❌ | 125 % crit → 25 % muerto (1 250 g); post-R redundante con cap |
| Galeforce (3 100) / Phantom Dancer (2 650) | ❌ | 125 % crit (25 % muerto); PD sin AD en 7.3 |
| The Collector (3 000) | ❌ | −10.3 % lvl 9; pen plana muerta con LDR |
| Rapid Firecannon (2 650) / Statikk Shiv (3 000) | ❌ | 0 AD (−21.2 % lvl 9) / ruta on-hit-AP que no alimenta E |
| Essence Reaver (3 000) | ❌ | Spellblade +107 DPS < BotRK +381; maná inútil |
| Manamune / Nashor's Tooth / Wit's End / Guinsoo's Rageblade | ❌ | Maná/AP/on-hit mágico sin conversión en el kit |
| Crimson Lucidity / Ionian Boots (2 000/1 000) | ❌ | 25 AH ≈ +25 E-DPS pero −0.36 AS vs Gunmetal ≈ −260 DPS autos |

---

## APÉNDICE B — RUTAS DE COMPRA

```text
DEFAULT DPS MÁXIMO (⭐ Tabla A):
Long Sword + Poción → Yun Tal (6:00) → Berserker's (7:30) → Runaan's (10:15)
→ ⬆️ Gunmetal (11:30, mismo slot) → IE (14:15) → BotRK (17:00) → LDR (20:15)
Pico 6 slots: ~20:15 · 18 250 g acumulados (con start)

SNOWBALL (feedeada / placas abundantes):
Long Sword → Yun Tal (5:30) → Berserker's (6:45) → IE (10:30, salta Runaan's)
→ Runaan's (13:00) → ⬆️ Gunmetal (13:30) → BotRK (16:30) → LDR (19:30)
(IE 2.º = E ×1.65 en el minuto 10; cuesta −3 % de AS transitorio)

ANTI-BURST (Zed/Rengar/Syndra feedeados):
Default pero BotRK → Guardian Angel (17:00): −558 DPS, +revivir +40 arm
Y considerar Chainlaced/Armored en botas (−355) si el CC es el problema

ANTI-HEAL (Soraka/Yuumi/Mundo/Sylas):
Default pero LDR → Mortal Reminder (20:15): −175 vsTanque, +GW 50 % (Ley 3b: nunca ambos)

GLASS CANNON (0 tanques confirmados, duelo/splitpush):
Yun Tal (6:00) → Berserker's (7:30) → Runaan's (10:15) → ⬆️ Gunmetal (11:30)
→ C44 (14:30) → IE (17:30) → Terminus (20:30, reemplaza BotRK+LDR… 6 slots:
Gunmetal+YunTal+Runaan's+C44+Terminus+IE): +2.3 % 1v1 / +3.9 % 3v3 / −19.9 % vsTanque

COMUNIDAD (wr-meta/wildriftcore — para comparar, NO óptima):
Yun Tal → Berserker's → Navori → ⬆️ Gunmetal → IE → LDR → GA
Gana +3.7 % 1v1 en lvl 12 y +2.9 % en lvl 14 (CDR de E); pierde −8.6 % lvl 15
y −38 % de 3v3 en el camino (sin Runaan's). Veredicto: ❌ para DPS máximo.
```

---

## Resumen de cambios vs versión publicada (v1 Beta → v2 engine)

| Aspecto | v1 Beta (08/10) | v2 engine (09/10) | Δ |
|---|---|---|---|
| Motor | **Fuera del motor** ("validate_slots no puede correr") | Xayah en `champspecs.py` + engine autos + optimizador + buscador de runas | ✅ verificación completa |
| Slot 2 | Hexoptics C44 | **Yun Tal Wildarrows** | 3v3 +2.8 % · 1v1 +0.1 % · sin dependencia de Magnification |
| Slot 6 | Bloodthirster | **Blade of the Ruined King** | **+343 (+10.9 %) 1v1 · +313 vsTanque** |
| AS @15 | 2.26 (W al "30 % efectivo") | **2.89** (engine, W4 55 %; 2.53 sin W) | +27.9 % (96 % del cap vs 82 %) |
| AD @15 | "348" (error: 348.8 ≠ 118.8+240) | 319 (318.8) | −8.3 % AD, +11.6 % DPS neto |
| E model | "10-15 plumas ≈ 766-1 950" sin decaimiento | **−10 %/pluma (piso 10 %)**: E(3) 891 · E(5) 1 320 · E(8) 1 716 | corregido (wiki oficial) |
| DPS 1v1 | ~3 020 (estimación sin verificar) | **3 146** (engine+skills, desglose auditado) | +4.2 % y verificado |
| DPS 3v3 | ~9 200 ("posicionamiento óptimo") | **5 929** conservador (6 700 con on-hit de rayos) | −35.6 % (cifra honesta) |
| vs Tanque | ~1 500 | **1 582** | +5.5 % |
| HP/arm/MR/rango | ⚠️ estimados | Oficiales de ficha wr-meta + wiki (630/120 · 40/4 · 30/1.4 · 575) | confirmados |
| AS growth | 0.03 | **0.034** (apéndice + display in-game 0.022) | +1.5 % AS @15 (D1) |
| Runas | 6+ runas estilo PC (ilegal en WR) | Keystone + 3 menores + 1 secundaria (sistema WR real) | corregido |
| Meta callout | 49.87 %/3.24 %/1.83 % (05/10) | **50.17 %/4.74 %/0.17 % (08/10, vigía)** + cross-check wildriftcore | actualizado (D9) |
| Status | Beta | **Espera de verificación** (re-derivada; el autor aprueba) | flujo §C |

---

## Pie de página

*Reporte generado el 09/10/2026 con datos del parche 7.3 (21/09/2026) + hotfix 7.3a (29/09/2026). WR-LAB v1.15.2. Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3b/7.4, regenerar datos antes de publicar.*

**Aviso específico para Xayah (DPS Máximo):** esta build **no incluye ningún ítem defensivo** (2 310 HP, 96 armadura, 49.6 MR a nivel 15, sin escudos ni revivir): es la opción de **máximo daño verificado** y exige posicionamiento front-to-back y R guardada. Con dive doble o CC en cadena, usar la matriz de §6 (GA/Scimitar/Shieldbow cuestan −487 a −558 DPS, medido).

**Aviso específico de modelado:** Xayah fue añadida al motor del lab el 09/10/2026 (`model/champspecs.py`, spec derivado de notas oficiales 7.3 + apéndice AS + ficha wr-meta + wiki oficial). El engine de autos NO modela E/Q/pasiva/W: esos términos se calculan a mano en §3 con supuestos declarados (5 plumas por E, 3 de 5 en R, W en ventana). BotRK se reporta al 6 % del engine (la nota oficial 7.3 dice 7 % → +64/+130 DPS; discrepancia D3 señalada al autor). Cifras conservadoras donde el texto oficial admite upside (rayos de Runaan's con on-hit: +~760 DPS 3v3 no publicado).

**Referencias y créditos**

- Notas oficiales del parche 7.3 (21/09/2026), hotfix 7.3a (29/09/2026) y 7.2 (08/07/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria: cambios de Xayah (AD, W, E, R), sistema de críticos/AS, apéndice AS de 140 campeones, ítems (Yun Tal, Runaan's, IE, LDR, BotRK, Navori).
- Base de datos de ítems, runas y ficha de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026 (ítems) y 08/10/2026 (ficha Xayah + win rates Diamond+ del vigía). Aporta stats base (HP/arm/MR), build y runas de comunidad.
- League of Legends Wiki (wiki.leagueoflegends.com, WR:Xayah + templates de habilidades, 09/10/2026) — mecánica de plumas/decaimiento de E/pasiva/R y rango 575.
- wildriftcore.com y wildriftfire.com (09/10/2026) — cross-check de win rate (49.89 %, 30 d), efecto del buff 7.3 (+0.40 pts), sinergias/counters y tier list 7.3a.
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio, `model/dps_model.py` + `model/optimize_build.py` + `model/optimize_runes.py` + `model/sim_timings.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliada, patrocinada ni respaldada por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.

---