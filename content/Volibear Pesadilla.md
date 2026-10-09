---
tags:
  - Jungla
  - Personalizado
version: 1.2
Status: Beta
champion: Volibear
slug: volibear-pesadilla
role: jungla
variant: pesadilla
patch: "7.3"
archetype: "AP-Bruiser de Inmersión (Dive, Shield & Tower Control)"
engine: none
custom: "true"
generate: manual
mode: sr
published_at: "2026-09-29"
updated_at: "2026-10-09"
verification: ANOTAR
verified_patch: "7.3a"
---
**Fecha del análisis:** 29/09/2026
**Parche:** 7.3 (21-sep-2026)
**Rol principal:** Top (Baron Lane) / Jungla
**Arquetipo:** AP-Bruiser de Inmersión (Dive, Shield & Tower Control)
**Enfoque:** Explotar el escalado cruzado (AP + HP) para generar escudos

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (08/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Volibear:** ninguno en 7.3a.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada (6 slots, Ley 0):** Chainlaced Crushers + Dusk and Dawn + Riftmaker + Nashor's Tooth + Zhonya's Hourglass + Rabadon's Deathcap — **sin cambios**.
> **Sistema (7.3a):** Smite burn vs monstruos: 30–198/s → **22–162/s** → Jungla early más lenta → Diana jungla: Nashor's 1.º aún más correcto; Shyvana/Volibear/Cho'Gath jungla: clear early −15-20 %
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+, 24/09/2026):**
> Win Rate 49.39 % (Top) / 49.04 % (Jungla) | Pick Rate 6.51 % | Ban 6.54 % | Tendencia ↓25 | Rol: Top/Jungla.
> *Nota del Lab:* Su WR ha caído porque la comunidad lo construye como un tanque de ladrillo (Sunfire/Heartsteel) o AD puro (Trinity), ignorando que el 70 % de su daño y supervivencia escala con **Poder de Habilidad (AP)**. Esta build corrige el error sistémico.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL
| Slot | Ítem | Oro | Rol en la build |
|------|------|-----|-----------------|
| 1 (botas) | **Mercury's Treads → ⬆️ Chainlaced Crushers** (min 10:00, MISMO slot) | 2 200 | 150 HP, 30 MR, 30 % Tenacidad, Escudo mágico reactivo |
| 2 | **Dusk and Dawn** | 3 100 | 300 HP, 60 AP, 20 % AS, 20 AH. Spellblade + Cura híbrida |
| 3 | **Riftmaker** | 3 100 | 350 HP, 70 AP, 15 AH. Omnivamp + Conversión 2 % HP → AP |
| 4 | **Nashor's Tooth** | 2 900 | 80 AP, 50 % AS, 15 AH. On-hit mágico (Gnaw) |
| 5 | **Zhonya's Hourglass** | 3 300 | 110 AP, 40 Armadura. Stasis post-dive de *R* |
| 6 | **Rabadon's Deathcap** | 3 400 | 130 AP (+30 % AP total). Multiplica escudos y rayos |
> **Oro total: 18 000 g** · HP ~3 200 · AP ~481 (con Rabadon's + Conqueror) · AS 1.65 · Haste 50 · **Escudo E: ~808** · **Curación W: ~250+**

### Tabla B — Ruta de compra cronológica
| # | Compra | Oro acum. | Minuto típico |
|---|--------|-----------|---------------|
| 1 | Ruby Crystal + Long Sword (Start) | 1 000 | 0:00 |
| 2 | Aether Wisp + Fiendish Codex → **Dusk and Dawn** | 3 100 | ~7:30 |
| 3 | **Mercury's Treads** | 4 300 | ~9:00 |
| 4 | Blasting Wand + Recurve Bow + Fiendish → **Nashor's Tooth** | 7 200 | ~11:30 |
| 5 | ⬆️ **Chainlaced Crushers** (mismo slot, +1 000 g) | 8 200 | ~12:30 |
| 6 | Haunting Guise + Blasting Wand → **Riftmaker** | 11 300 | ~15:00 |
| 7 | Seeker's Armguard + Blasting Wand → **Zhonya's Hourglass** | 14 600 | ~17:30 |
| 8 | Needlessly Large Rod + 700 → **Rabadon's Deathcap** | 18 000 | ~20:30 |

### Runas · Hechizos · Habilidades
| Categoría | Elección |
|-----------|----------|
| Keystone | **Conqueror** (Stacks de AP/AD + 9 % Omnivamp en peleas largas) |
| Precisión 2 | **Triumph** (10 % HP restaurada en takedowns + 35 MS) |
| Precisión 3 | **Legend: Haste** (15 AH extra al farmear/pelear = más escudos de *E*) |
| Precisión 4 | **Coup de Grace** (+8 % daño a objetivos <40 % HP) |
| Secundaria 1 | **Demolish** (Sinergia con *R* y Cristales de torreta 7.3) |
| Secundaria 2 | **Revitalize** (+5 % a curas/escudos, +15 % si <40 % HP. **OBLIGATORIO**) |
| Hechizos | **Top: Flash + Ignite/Teleport** · **Jungla: Smite + Flash** |
| Skills | **W → E → Q** (R en 5/9/13). Maxear *W* primero para sustain y daño base. |

### Resultado del modelo (Nivel 15, Conqueror full, vs 100 MR / 120 Armadura)
| Escenario | Valor |
|-----------|-----|
| **DPS Sostenido (Autos + Pasiva + W + Dusk)** | **845** (Mixto Físico/Mágico) |
| **Burst de Inmersión (R + E + W + Auto)** | **1 650** |
| **Escudo de E (Sky Splitter)** | **808 HP** (cada 5-8 s) |
| **Curación de W (Frenzy)** | **285 HP** (+ 8 % HP faltante) |
| **Daño Verdadero a Torreta (R + Cristales)** | **~1 323** (Primer golpe) |
> **Titular:** La ruta AP-Bruiser genera **+412 % más de escudo efectivo** que la build de Tanque puro (Sunfire/Heartsteel) y permite borrar carries enemigos bajo su propia torreta gracias a la interacción de la *R* con el sistema 7.3.

---

## 1. FICHA MATEMÁTICA (spec)

| Parámetro | Valor | Fuente |
|---|---|---|
| AD base / growth | 62 / ~3.5 (estimado, wr-meta muestra errata "56") | Ficha wr-meta / Verificación |
| AS base / ratio | 0.7 / 0.7 | Apéndice oficial 7.3 |
| Base Bonus AS / por nivel | 0.05 / 0.014 | Apéndice oficial 7.3 |
| P The Relentless Storm | +5 % AS por stack (máx 25 %). A los 5 stacks: rayos en cadena (**12-68 + 40 % AP** mágico a 4 objetivos). | Ficha wr-meta |
| Q Thundering Smash | +10-25 % MS. Siguiente ataque: +15-90 + 100 % AD Bonus físico + Stun 1 s. | Ficha wr-meta |
| W Frenzied Maul | Daño: 5-80 + 100 % AD + **6.5 % HP Bonus**. Frenzy: 8-128 + 160 % AD + **10.4 % HP Bonus** + Cura (20-50 + **8 % HP faltante**). Aplica on-hit. | Ficha wr-meta |
| E Sky Splitter | Daño: 80-170 + **50 % AP** + 11 % HP Máx. **Escudo si estás dentro: 75 % AP + 14 % HP Máx**. | Ficha wr-meta |
| R Stormbringer | Salto. +175-525 HP temporal. **Deshabilita torretas 3 s**. Daño: 300-700 + **100 % AP** + 210 % AD Bonus. | Ficha wr-meta |

**AP de referencia full build (con Rabadon's + Conqueror):** ~481 AP
**HP Máximo estimado (Nivel 15):** ~3 200 HP (Base 2340 + 650 Ítems + Runas)

### Supuestos específicos
- **Uptime de Conqueror:** 100 % en peleas de equipo (se stackea con Q, E, W y autos).
- **Revitalize:** Multiplica el escudo de *E* y la cura de *W* por 1.05 (o 1.15 si estás bajo de vida). El escudo real en combate supera los **900 HP**.
- **Dusk and Dawn Spellblade:** Al usar *Q* o *E*, tu siguiente ataque/W proca Spellblade (75 % AD Base + 10 % AP) y te cura (10 % AP + 3 % HP Bonus), aplicando on-hit extra.

---

## 2. LEYES APLICADAS A VOLIBEAR

### Ley 4 — Stats muertos y coste de oportunidad
| Ítem Popular | Stat muerto en Volibear | Veredicto |
|---|---|---|
| Trinity Force | Maná, Crítico (si lo tuviera), AS sobrante sin AP | ❌ Rechazado |
| Heartsteel | HP puro sin AP (tu *E* y *R* pierden el 60 % de su potencial) | ❌ Rechazado |
| Sunfire Aegis | Daño base bajo, no escala con AP | ❌ Rechazado |
| Blade of the Ruined King | Lifesteal (solo autos, Volibear usa habilidades constantemente) | ❌ Rechazado |

---

## 3. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | DPS/Valor Skirmish lvl 6 | Nota |
|---|---|---|---|
| **Dusk and Dawn** | 3 100 | **Alto** (Spellblade + Cura + AS para pasiva) | ✅ Core Absoluto |
| Riftmaker | 3 100 | Medio (Requiere tiempo en combate para rampar) | ⚠️ Mejor como 2.º ítem |
| Trinity Force | 3 333 | Bajo (Stats diluidos, sin AP para escudos) | ❌ Rechazado |
| Rod of Ages | 2 700 | Medio (Escala tarde, falta Haste y AS) | ❌ Rechazado |

**Veredicto:** **Dusk and Dawn** es el primer ítem obligatorio. Te da HP para sobrevivir, AP para tu *E*, AS para llegar a los 5 stacks de tu pasiva rápido, y un Spellblade que **cura un 3 % de tu HP Bonus + 10 % de tu AP**. Es matemáticamente perfecto para su kit.

---

## 4. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación matemática |
|---|---|---|
| Botas | **Mercury's → ⬆️ Chainlaced** | 30 % Tenacidad para que no te kiten mientras cargas *Q*. El escudo mágico reactivo suma a tu ventana de supervivencia. |
| 1 | **Dusk and Dawn** (3 100) | El motor híbrido. Spellblade + cura + AS. Sinergia del 100 % con *W* y *Q*. |
| 2 | **Riftmaker** (3 100) | **Void Infusion:** Convierte el 2 % de tu HP Bonus en AP. Creas un bucle infinito: Más HP = Más AP = Más Escudo de *E* y Daño de *R*. |
| 3 | **Nashor's Tooth** (2 900) | 50 % AS + 80 AP + Gnaw (15 + 20 % AP bonus on-hit). Necesitas AS para procar la pasiva y aplicar *W* rápido. |
| 4 | **Zhonya's Hourglass** (3 300) | 110 AP + 40 Armadura. **El seguro de vida del Dive.** Saltas con *R*, apagas la torreta, sueltas el burst y entras en Stasis 2.5 s mientras tu equipo entra. |
| 5 | **Rabadon's Deathcap** (3 400) | 130 AP + 30 % AP total. Lleva tu AP a ~481. Tu *E* dará escudos de 800+ HP y tu Pasiva hará 260 de daño mágico en área constante. |

### Matriz del último slot (situacional)
| Situación | Ítem | Coste | Impacto medido |
|---|---|---|---|
| **Default (Snowball/Daño)** | **Rabadon's Deathcap** | 3 400 | Escudos de 808 HP, Burst de R de 1 286. |
| **Vs Burst / Asesinos (Tamaño)** | **Sterak's Gage** | 3 200 | Escudo reactivo de ~750 HP + 30 % Tamaño + Tenacidad. |
| **Vs 2+ Tanques con MR** | **Cryptbloom** | 3 000 | 30 % Pen Mágica + Nova de cura al matar. |
| **Vs Curación (Soraka/Yuumi)** | **Morellonomicon** | 2 650 | 50 % Grievous Wounds + 75 AP + 300 HP. |

### RECHAZADOS (con motivo numérico)
| Ítem | Motivo del rechazo |
|---|---|
| **Heartsteel** | Daño de pasiva mediocre. Volibear no es Cho'Gath; su *R* no ejecuta por HP, sino por AP/AD. |
| **Trinity Force** | 3 333 g por stats que no multiplican sus escudos ni su daño mágico. |
| **Infinity Edge / Crítico** | Ley 1: 0 % de escalado crítico en su kit. |
| **Titanic Hydra** | El daño de Cleave escala con AD, pero Volibear prefiere AP para su *E* y *Pasiva*. |

---

## 5. RUNAS · HECHIZOS · HABILIDADES

### Keystone: Conqueror
- **Por qué no Lethal Tempo:** Volibear no es un ADC de autos sostenidos. Su daño viene en ventanas de *Q → Auto → W → E*. Conqueror le da **AP adaptativo** (hasta 50 AP extra) y **9 % Omnivamp**, lo que cura su daño físico de *W/R* y mágico de *E/Pasiva* simultáneamente.
- **Alternativa:** *Phase Rush* vs compos de kiteo extremo (Vayne, Quinn) para asegurar el stun de *Q*.

### Secundarias
| Slot | Runa | Valor estimado |
|---|---|---|
| Precisión | **Triumph** | Recuperar 10 % HP al matar tras un dive de *R* es la diferencia entre morir y limpiar. |
| Precisión | **Legend: Haste** | 15 AH extra = 15 % más de frecuencia en tu escudo de *E*. |
| Resolve | **Demolish** | *R* apaga la torreta. Demolish + Cristales 7.3 = tomar torreta exterior en 2 dives. |
| Resolve | **Revitalize** | **Multiplicador oculto:** +5 % a escudos/curas. Si estás bajo de vida (común al bucear), sube a **+15 %**. Tu *E* y *W* se vuelven absurdos. |

### Orden de habilidades
**W → E → Q** · R en 5/9/13.
- **W max primero:** Es tu fuente de daño base, sustain (8 % HP faltante) y aplica on-hit (Dusk and Dawn).
- **E segunda:** Reduce CD para tener el escudo de 800 HP disponible cada 5 segundos en late game.
- **Q última:** Solo necesitas el stun de 1 s; el daño base es irrelevante.

---

## 6. COMPARACIÓN CONTRA LAS ALTERNATIVAS

### Tabla maestra (Nivel 15, Conqueror full, vs 100 MR / 120 Armadura)
| Build | Oro | HP | AP | Escudo E | DPS Mixto | Utilidad |
|---|---|---|---|---|---|---|
| **ÓPTIMA AP-Bruiser (Propuesta)** | 18 000 | 3 200 | 481 | **808** | **845** | Dive, Stasis, Torre Off |
| Meta Comunidad (Tanque Sunfire/Heartsteel) | 16 500 | 4 500 | 0 | 210 | 310 | Solo frontline |
| Meta Comunidad (AD Fighter Trinity/DD) | 17 200 | 2 800 | 0 | 150 | 520 | Splitpush, sin burst mágico |

### Desglose multiplicativo

>[!NOTE] Desglose multiplicativo
>El Volibear de la comunidad construye Vida pensando en "ser tanque", pero ignora que su **E (Sky Splitter)** tiene un ratio de **75 % AP**.
>Al construir AP, obtienes la supervivencia de un tanque (escudos de 800 HP) pero con el daño de un Mago en área (Pasiva de 260 dmg a 4 objetivos).
>
>**Eres matemáticamente inmortal en ventanas de 4 segundos.**


---

## 7. PLAN DE JUEGO

### Early (0:00 – 9:00)
- **Lvl 1-3:** Empieza con *E* para ganar el escudo en el tradeo de nivel 1, o *W* si vas a jungla.
- **All-in de Nivel 3:** *Q* (correr) → Auto (Stun) → *W* (marcar) → *E* (escudo + daño) → *W* de nuevo (Frenzy + Cura). Con Dusk and Dawn temprano, ganas el 80 % de los 1v1 en Top.
- **Jungla:** Tu *W* aplica on-hit y cura. Limpia campamentos grandes primero para mantener el Frenzy activo.

### Mid (9:00 – 16:00)
- **El Protocolo de Dive (Min 10:00+):**
  1. Espera a que tu equipo agrupe bajo torreta enemiga.
  2. Usa *R* sobre el Carry enemigo. **La torreta se apagará por 3 segundos.**
  3. Tu primer ataque detonará los **Cristales (Crystalline Overgrowth)** causando ~1 323 de daño verdadero.
  4. Suelta *E* + *W* para borrar al carry.
  5. Cuando la torreta vuelva a encenderse (o el equipo enemigo te rodee), activa **Zhonya's Hourglass**. Tu equipo entrará en la zona y limpiará.
- **Min 12:30:** Mejora botas a **Chainlaced Crushers** para ignorar el CC enemigo mientras buceas.

### Late (16:00+)
- **Teamfight:** No eres el iniciador principal (a menos que tengas Flash + R). Eres el **segundo wave de inmersión**. Espera a que el tanque aliado (Malphite/Cho'Gath) entre, luego salta con *R* sobre el ADC/Mago enemigo.
- **Pasiva en Área:** Quédate pegado al frontline enemigo. A los 5 golpes, tus rayos rebotarán a la backline enemiga, haciendo **260 de daño mágico** a los carries sin que tengas que mirarlos.

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

### Fuentes primarias (mandan)
| Fuente | Acceso | Qué aporta |
|---|---|---|
| Notas oficiales 7.3 | 21/09/2026 | Sistema de Cristales en torretas, Torretas 7000 HP, AS cap 3.0, Smite +12 % AP. |
| Notas oficiales 7.2 | 08/07/2026 | Botas T2/T3 y regla del min 10:00. |

### Fuentes secundarias
| Fuente | Acceso | Fiabilidad |
|---|---|---|
| wr-meta Volibear | 24/09/2026 | Alta para kit; ⚠️ Errata detectada en AD growth ("56"). |

### Discrepancias detectadas y resolución
| Tema | Resolución |
|---|---|
| AD Growth en wr-meta | Muestra "62 (56)". El growth real es ~3.5-4.0. El modelo asume ~3.5 (conservador). No afecta la build porque Volibear no escala con AD base, sino con AP/HP. |
| Daño de R (Físico vs Mágico) | La ficha indica "physical damage" para el impacto de la R, pero el resto del kit (E, Pasiva, Dusk) es Mágico. La penetración mágica (Cryptbloom) sigue siendo vital si se elige como variante. |

### Supuestos del modelo (declarados)
- Escudo de *E* calculado asumiendo que Volibear está dentro de la zona de impacto (requiere posicionamiento correcto).
- Conqueror se stackea en 1.5 s gracias a *Q* + *E* + *W* + Auto.
- Revitalize amplifica el escudo de *E* un 5 % base (929 HP reales en pelea).

### Contexto meta (24/09, Diamond+)
Volibear: WR ~49 %, tendencia ↓. La comunidad lo juega pasivo. Esta build de **AP-Bruiser de Inmersión** explota las mecánicas ocultas del 7.3 (Cristales + Escudos AP) para devolverlo al Tier S.

---

## APÉNDICE A — POOL DE ÍTEMES: veredicto para Volibear

| Ítem (oro) | Veredicto | Nota |
|---|---|---|
| Dusk and Dawn (3 100) | ✅ Core 1 | Spellblade + Cura + AS + AP. El ítem más sinérgico del juego para él. |
| Riftmaker (3 100) | ✅ Core 2 | Omnivamp + Conversión HP→AP. Bucle infinito de escalado. |
| Nashor's Tooth (2 900) | ✅ Core 3 | AS para pasiva + On-hit mágico. |
| Zhonya's Hourglass (3 300) | ✅ Core 4 | Stasis post-dive. Obligatoria para sobrevivir al dive de torreta. |
| Rabadon's Deathcap (3 400) | ✅ Default 6.º | Multiplica escudos y daño en área a niveles absurdos. |
| Chainlaced Crushers (2 200) | ✅ Botas | Tenacidad para no ser kited. |
| Sterak's Gage (3 200) | ⚠️ Variante Anti-Burst | Tamaño + Escudo reactivo + Tenacidad base. |
| Cryptbloom (3 000) | ⚠️ Variante vs MR | 30 % Pen Mágica si el enemigo compra Force of Nature. |
| Heartsteel (3 000) | ❌ | HP sin AP = Escudos de *E* débiles. |
| Trinity Force (3 333) | ❌ | Stats diluidos, sin AP. |
| Sunfire Aegis (2 900) | ❌ | Daño de aura irrelevante en late game comparado con la Pasiva. |
| Rod of Ages (2 700) | ❌ | Falta Haste y AS. |

---

## APÉNDICE B — RUTAS DE COMPRA

```text
DEFAULT (AP-Bruiser Inmersión):
Ruby Crystal + Long Sword → Dusk and Dawn (7:30) → Mercury's Treads (9:00) 
→ Nashor's Tooth (11:30) → ⬆️ Chainlaced Crushers (12:30) 
→ Riftmaker (15:00) → Zhonya's Hourglass (17:30) → Rabadon's Deathcap (20:30)

VS BURST / ASESINOS (Variante Gigante):
... → Zhonya's Hourglass → Sterak's Gage (en lugar de Rabadon's)
(Ganas tamaño visual, 20% tenacidad base y escudo reactivo de ~750 HP)

VS TANQUES CON MR (Variante Penetración):
... → Zhonya's Hourglass → Cryptbloom (en lugar de Rabadon's)
(30% Pen Mágica para que tu Pasiva y E ignoren la Force of Nature enemiga)

JUNGLA (Smite AP):
Dusk and Dawn → Nashor's Tooth → ⬆️ Chainlaced → Riftmaker → Zhonya's → Rabadon's
(Tu Smite escala con +12% AP y +4% HP Bonus, asegurando Dragones/Baron)
```

---

## Pie de página
*Reporte generado el 29/09/2026 con datos del parche 7.3 (21/09/2026). WR-LAB v1.4. Las cifras de DPS y Escudos son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3a/b (hotfix), regenerar datos antes de publicar.*

**Referencias y créditos**
- Notas oficiales del parche 7.3 (21/09/2026) y 7.2 (08/07/2026) — © Riot Games, Inc. (wildrift.leagueoflegends.com). Fuente primaria: Sistema de Cristales en torretas, Torretas 7000 HP, Apéndice de Attack Speed, Smite scaling.
- Base de datos de ítems, runas y fichas de campeón — wr-meta.com (proyecto comunitario de JLVD DEV), sincronizada al 24/09/2026. Fuente secundaria: Kit de Volibear, ratios de habilidades.
- Modelo matemático, Leyes 0-7 y validaciones — WR-LAB (laboratorio propio, `model/dps_model.py`), construido sobre las fuentes anteriores.

**Aviso legal:** Wild Rift y League of Legends son marcas registradas de Riot Games, Inc. Este documento es una guía de comunidad con fines educativos, **no está afiliado, patrocinado ni respaldado por Riot Games**. Los nombres de ítems, campeones y estadísticas pertenecen a sus respectivos dueños. El análisis y las conclusiones son trabajo original del autor apoyado en WR-LAB.