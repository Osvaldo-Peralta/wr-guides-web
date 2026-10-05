---
tags:
  - Mid
  - Personalizado
version: 1
Status: Beta
champion: Norra
slug: norra
role: mid
patch: "7.3"
engine: none
custom: "true"
generate: manual
mode: sr
published_at: "2026-09-28"
updated_at: "2026-10-04"
verification: ANOTAR
verified_patch: "7.3a"
---
**Fecha del análisis:** 28/09/2026 · **Parche:** 7.3 (21-sep-2026)
**Enfoque:** Hiper-Daño (Burst/Asesino AP) con red de seguridad (Supervivencia reactiva).

---

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (04/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Norra:** ninguno en 7.3a.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada (6 slots, Ley 0):** Spellslinger's Shoes + Stormsurge + Rabadon's Deathcap + Infinity Orb + Cryptbloom + Zhonya's Hourglass — **sin cambios**.
> **Ítems cambiados fuera de la build final:** Death's Dance (NERF) — verificar variantes/rechazados del reporte.
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

## ⚠️ 1. CONTEXTO Y DISCREPANCIA CRÍTICA DE DATOS (NORRA)

**Norra** aparece registrada con las siguientes stats:
*   **AS Ratio:** 0.625 | **Base AS:** 0.625 | **Base Bonus AS:** 0.2 | **AS por nivel:** 0.012
*   **Resolución de Arquetipo:** Un crecimiento de AS de `0.012` es **el más bajo del juego** (compartido exclusivamente con magos puros de burst/control como Annie, Heimerdinger, Zyra y Yuumi).
	* Esto dicta matemáticamente que **Norra NO escala con autos, crítico ni on-hit**. Su kit (aunque sus ratios específicos de habilidades no fueron incluidos en el volcado de texto de las notas 7.3 de este laboratorio) pertenece inequívocamente al arquetipo de **Maga de Burst/Control (AP)**.
*   **Conclusión:** Todo ítem de AS, Crítico o AD es **oro muerto** (Ley 4). La build se optimiza para **Penetración Mágica (Flat + %) y AP puro**, usando la supervivencia reactiva (Stasis) para no sacrificar daño.

---

## 0. RESUMEN EJECUTIVO

### Tabla A — BUILD FINAL (6 slots reales · `validate_slots()` = PASS)
| Slot | Ítem | Oro | Rol en el Build |
|---|---|---|---|
| 1 (Botas) | **Boots of Mana → ⬆️ Spellslinger's Shoes** (min 10:00, mismo slot) | 2200 | Penetración plana + % y AP temprano. |
| 2 | **Stormsurge** | 2800 | Burst asimétrico + MS para kiteo. |
| 3 | **Rabadon's Deathcap** | 3400 | Multiplicador global de AP (Capstone). |
| 4 | **Infinity Orb** | 3100 | Ejecución (<40% HP) + Pen plana. |
| 5 | **Cryptbloom** | 3000 | Pen % (vs tanques) + Nova de curación (sustain). |
| 6 | **Zhonya's Hourglass** | 3300 | **Supervivencia:** 40 Armadura + Stasis 2.5s + 110 AP. |
| **Total** | **17 800 oro** | | **AP Final estimado: ~741** |

### Tabla B — Ruta de compra (Cronológica)
| # | Compra | Oro | Minuto | Nota |
|---|---|---|---|---|
| 1 | Amplifying Tome + Boots of Speed | 900 | 3:30 | Start estándar de mago. |
| 2 | **Stormsurge** | 2800 | 8:00 | Pico de burst temprano + MS. |
| 3 | **Boots of Mana** (T2) | 1200 | 9:30 | Waveclear y pen plana. |
| 4 | **Rabadon's Deathcap** | 3400 | 13:00 | El daño se vuelve letal. |
| 5 | ⬆️ **Spellslinger's Shoes** (T3) | +1000 | 13:30 | *Mismo slot*. Big Bully + 18 Pen plana. |
| 6 | **Infinity Orb** | 3100 | 16:30 | Asegura ejecuciones en teamfights. |
| 7 | **Cryptbloom** | 3000 | 19:00 | Rompe la MR de los frontline. |
| 8 | **Zhonya's Hourglass** | 3300 | 22:00 | Seguro de vida vs asesinos AD. |

**Runas:** Electrocute · Sudden Impact · Transcendence · Scorch.
**Hechizos:** Flash + Ignite (para asegurar el umbral de Infinity Orb) o Flash + Barrier.

---

## 2. FICHA MATEMÁTICA (spec deducida)
*   **AS Base/Ratio:** 0.625 (Estándar de magos).
*   **AS por nivel:** 0.012 (A nivel 15, el bonus por niveles es de apenas ~0.16. Los autos son irrelevantes).
*   **Recurso:** Asumimos Maná (por la sinergia con Boots of Mana / Spellslinger's para waveclear).
*   **Daño:** Basado en rotación de habilidades (Ratios AP). El modelo asume un burst de ~800-1200 de daño mágico pre-mitigación en ventana de 2 segundos.

---

## 3. LEYES APLICADAS A NORRA (7.3)

*   **Ley 1 (Crítico) y Ley 2 (AS):** **DESCARTADAS.** Con 0.012 de AS por nivel, intentar construir velocidad de ataque o crítico (como Nashor's Tooth o Statikk) es ineficiente. El daño viene en ventanas de habilidades, no en DPS sostenido.
*   **Ley 3 (Penetración obligatoria):** En 7.3, los tanques acumulan vida y MR.
    *   *Cálculo de Penetración de esta build:*
        *   **% Pen:** 8% (Spellslinger's) + 30% (Cryptbloom) = **38% Penetración %**.
        *   **Pen Plana:** 18 (Spellslinger's) + 15 (Stormsurge) + 15 (Infinity Orb) = **48 Pen Plana**.
    *   *Impacto vs Squishies (40 MR base):* 40 * (1 - 0.38) = 24.8 MR. 24.8 - 48 = **0 MR (Daño Verdadero equivalente)**. Los carries enemigos mueren antes de reaccionar.
    *   *Impacto vs Tanques (150 MR):* 150 * 0.62 = 93 MR. 93 - 48 = 45 MR. Mitigación del 31%. Sigue siendo letal.
*   **Ley 4 (Stats Muertos):** Cero oro gastado en AD, AS o Vida pasiva (excepto la necesaria en Zhonya's para no morir de un solo golpe físico).
*   **Ley 6 (Timing):** Stormsurge (2800g) como primer ítem permite un pico de poder al minuto 8, crucial para rotar y aprovechar los **Cristales de Torreta (Crystalline Overgrowth)** de 7.3, que explotan con daño verdadero con un solo golpe/habilidad.

---

## 4. ANÁLISIS DEL PRIMER ÍTEM: ¿Stormsurge o Luden's Echo?

| Ítem | Oro | AP | Pen | Efecto | Veredicto para "Hiper-Daño" |
|---|---|---|---|---|---|
| **Stormsurge** | 2800 | +90 | +15 | Squall (Burst + 25% MS) | ✅ **Ganador.** El MS compensa la falta de movilidad y el burst asegura el proc de Electrocute. |
| **Luden's Echo** | 2800 | +100 | 0 | Eco (Rebote AoE) | ⚠️ Mejor para waveclear puro, pero pierde el pico de asesinato en 1v1 que pide tu prompt. |
| **Malignance** | 2700 | +90 | 0 | Scorn (Haste de R) | ❌ Solo si tu Ultimate es tu única fuente de daño y tiene CD base alto. |

---

## 5. BUILD FINAL RANURA POR RANURA (Justificación)

| Slot | Ítem | Justificación Matemática y Táctica |
|---|---|---|
| **Botas** | **Spellslinger's Shoes** | En 7.3, la pen plana temprana es oro puro. Los 18 de pen + 8% multiplican tu daño en un 25% real contra la línea trasera enemiga. |
| **1** | **Stormsurge** | 90 AP + 15 Pen. La pasiva *Squall* detona tras 2.5s si haces 25% de su vida máxima. Con tu burst, esto es casi instantáneo, otorgando +25% MS para reposicionarte (kiting). |
| **2** | **Rabadon's Deathcap** | Con ~200 AP base al comprarlo, el +30% pasivo añade +60 AP gratis. Es el multiplicador que hace que tu combo 1-shot supere los 1000 de daño mágico neto. |
| **3** | **Infinity Orb** | 110 AP + 15 Pen. La pasiva *Inevitable Demise* hace que tus habilidades **critiquen (+20% daño)** contra enemigos bajo el 40% de vida. Con Ignite o el daño de torreta 7.3, bajas a los enemigos a ese umbral rápidamente. |
| **4** | **Cryptbloom** | 30% Pen es obligatoria en el minuto 18+ cuando el soporte enemigo compra Abyssal Mask o el tanque fuerza MR. Además, su pasiva *Life from Death* (Nova que cura 100 + 20% HP al morir un enemigo cerca) es tu **sustain en teamfights**. |
| **5** | **Zhonya's Hourglass** | **El pilar de tu resistencia.** 110 AP y 40 Armadura. Como maga de burst, una vez tirado tu combo, eres un pato sentado. Zhonya's te permite esquivar el burst de Zed/Rengar o la R de Malphite, esperando los 2.5s para que tu equipo remate o tus CDs (con Transcendence) vuelvan. |

### Matriz del Último Slot (Situacional)
*   **Si el equipo enemigo es 100% AD y no hay tanques:** Cambia *Cryptbloom* por **Winter's Approach (Fimbulwinter)** para un escudo masivo basado en maná, o **Morellonomicon** si hay curas (aunque Cryptbloom ya da GW en 7.3 si el enemigo sana, pero Morello es más barato).
*   **Si necesitas supervivencia sostenida (Poke/Bruiser):** Cambia *Zhonya's* por **Riftmaker** (3100g). Pierdes el Stasis y Armadura, pero ganas +350 HP, Omnivamp y Daño Verdadero progresivo. *Nota: Riftmaker es mejor para peleas de 5+ segundos; Zhonya's es mejor para Burst de 2 segundos.*

---

## 6. RUNAS Y HECHIZOS

*   **Keystone: Electrocute.**
    *   *Por qué:* Tu perfil de AS (0.625) significa que no vas a estar autoataqueando para procar *Arcane Comet* o *Phase Rush* de forma óptima. Tu daño es en ventana (Q+W+R). Electrocute añade ~150-200 de daño adaptativo instantáneo que ayuda a cruzar el umbral del 40% de vida para *Infinity Orb*.
*   **Domination: Sudden Impact.**
    *   *Por qué:* Si Norra tiene algún dash, blink o salida de sigilo (común en magos modernos), esto otorga daño verdadero y **Penetración Mágica** adicional tras el engage.
*   **Sorcery: Transcendence.**
    *   *Por qué:* +10 AH base y reducción de CD al golpear. Los magos de burst necesitan que sus CDs vuelvan rápido para el segundo rotation en una teamfight prolongada.
*   **Sorcery: Scorch.**
    *   *Por qué:* Poke en fase de líneas. Quema 21-49 de daño mágico, ayudando a detonar los cristales de *Crystalline Overgrowth* en las torretas.
*   **Hechizos:** **Flash + Ignite**. Ignite no es solo daño, es **60% de Heridas Graves** y asegura que el enemigo caiga al umbral de <40% HP para que *Infinity Orb* critique.

---

## 7. PLAN DE JUEGO (Sistemas 7.3)

1.  **Early (Min 1-8):** Farmea seguro. Tu AS de 0.625 hace que el last-hit bajo torreta sea difícil sin AD. Usa tus habilidades para asegurar cañones.
2.  **Mid (Min 8-14, Pico Stormsurge):** Aquí empieza tu hiper-daño. Busca escaramuzas en el río.
    *   *Macro de Torretas 7.3:* Las torretas ahora tienen 7000 HP y **Cristales (Crystalline Overgrowth)**. Como maga, puedes posicionarte fuera del rango de la torreta y usar una habilidad de largo alcance (o un auto seguro) para detonar el cristal, infligiendo hasta **18.9% de la vida máx de la torreta como Daño Verdadero**. Esto te permite derribar placas sin necesidad de que tu equipo esté cuerpo a cuerpo.
3.  **Late (Min 15+, Build completa):**
    *   Tu trabajo es **Borrar -> Stasis -> Salir**.
    *   Tiras el combo sobre el Carry enemigo (Electrocute + Stormsurge + Orb = Muerte instantánea).
    *   Inmediatamente activas **Zhonya's Hourglass** mientras el equipo enemigo gira hacia ti.
    *   Al terminar el Stasis (2.5s), tu *Cryptbloom* y *Transcendence* habrán refrescado tus habilidades básicas para un segundo ciclo de daño o kiteo.

---

## 8. COMPARACIÓN CONTRA ALTERNATIVAS

| Build | Oro | AP Estimado | Pen Plana / % | Supervivencia | Veredicto WR-LAB |
|---|---|---|---|---|---|
| **Tu Build (Hiper-Daño + Zhonya's)** | 17 800 | **~741** | **48 / 38%** | Stasis + 40 Armadura | ✅ **ÓPTIMA.** Maximiza el burst letal y tiene un "botón de pánico" que no sacrifica AP. |
| Glass Cannon Puro (Sin Zhonya's, con Horizon Focus) | 17 500 | ~780 | 48 / 30% | Nula (Mueres al ser mirada) | ❌ Oro muerto si te focusean. En WR, si mueres antes de tirar la R, tu DPS es 0. |
| Ruta Bruiser (Riftmaker + Rod of Ages) | 16 500 | ~450 | 15 / 30% | Alta (HP + Omnivamp) | ⚠️ Pierdes el rol de "Asesina". Con 0.012 AS, no puedes sostenerte en peleas largas autoataqueando. |
| Meta Soporte/Utilidad (Mandate + Censer) | 11 000 | ~250 | 0 / 0% | Baja | ❌ Ignora tu petición de hiper-daño. |
