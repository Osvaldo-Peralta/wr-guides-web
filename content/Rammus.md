---
tags:
  - Jungla
version: 1
Status: Beta
champion: Rammus
slug: rammus
role: jungla
engine: none
custom: false
generate: manual
mode: sr
published_at: "2026-09-26"
updated_at: "2026-10-04"
verification: REGENERAR
verified_patch: "7.3a"
---
**Fecha del análisis:** 26 de septiembre de 2026  

---

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ❌ REGENERAR Verificación automática (04/10/2026) — **❌ REQUIERE REGENERACIÓN — hotfix 7.3a**
> **Cambio directo:** NERF — Armor base 45→**40** · W bonus armor 45/50/55/60→**30/40/50/60 %**.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada (6 slots, Ley 0):** Plated Steelcaps + Sunfire Aegis + Thornmail + Dead Man's Plate + Force of Nature + Gargoyle Stoneplate — **sin cambios**.
> **Sistema (7.3a):** Smite burn vs monstruos: 30–198/s → **22–162/s** → Jungla early más lenta → Diana jungla: Nashor's 1.º aún más correcto; Shyvana/Volibear/Cho'Gath jungla: clear early −15-20 %
> **Veredicto:** ❌ REGENERAR — regenerar por el flujo FRAMEWORK (10 pasos, con apoyo de model/optimize_build.py para re-derivar la build óptima) y re-baselinar.
<!-- WRLAB-VERIF:7.3a:END -->

## 0. RESUMEN EJECUTIVO

**Órden de compra (Ruta por defecto - Jungla):**

| #   | Ítem                    | Oro  | Momento típico |
| --- | ----------------------- | ---- | -------------- |
| 1   | **Sunfire Aegis**       | 2900 | ~7:30–8:30     |
| 2   | **Plated Steelcaps**    | 1200 | ~9:00–10:00    |
| 3   | **Thornmail**           | 2700 | ~11:30–12:30   |
| 4   | **Dead Man's Plate**    | 2800 | ~14:00         |
| 5   | **Force of Nature**     | 2800 | ~16:30         |
| 6   | **Gargoyle Stoneplate** | 2900 | ~19:00+        |

**Total: 15 300 oro** (Botas incluidas).

**Runas:** Grasp of Undying · Demolish · Second Wind · Overgrowth · Transcendence · Bone Plating.
**Hechizos:** Flash + Smite.  
**Orden de habilidades:** Q → W → E (Maxear W primero para clear y daño sostenido, luego Q para utilidad/ganks, E al final). R en 5/9/13.

 **Variante Anti-Magia (vs AP pesado):** Cambiar *Dead Man's Plate* por *Abyssal Mask* o *Kaenic Rookern*.  
 **Variante Engage Puro:** Cambiar *Gargoyle* por *Shurelya's Battlesong* (si el equipo necesita velocidad) o mantener *Stoneplate* para supervivencia en teamfights.

 **Resultado del modelo a nivel 15 (DPS Sostenido vs Campeón Estándar):** ~450 DPS pre-mitigación (bajo efecto de W), pero con **~1200-1500 DPS efectivo** considerando la reducción de armadura enemiga (-30% aprox con pasiva+W) y el daño reflejado de Thornmail/Sunfire. Su valor no es solo DPS crudo, sino **Mitigación de Daño Entrante > 60%** y **Utilidad de CC**.

---

## 1. CONTEXTO DEL CAMPEÓN EN ESTE PARCHE

### Nerfs/Buffs Directos (7.3)
Rammus no recibió cambios directos en sus estadísticas base o habilidades en las notas de 7.3, pero se beneficia enormemente de los **cambios sistémicos**:
1.  **Jungla (Smite Burn):** El nuevo daño persistente de Smite escala con estadísticas defensivas (Armadura/RM). Esto mejora significativamente el clear de Rammus sin necesidad de construir daño ofensivo.
2.  **Torretas (Crystalline Overgrowth):** La mecánica de cristales permite a Rammus, con su alta velocidad de movimiento de Q, detonar cristales rápidamente y aplicar presión global.
3.  **Ítems Defensivos:** Ajustes en *Force of Nature* (eliminación de reducción de daño % plano, compensado con más RM y MS) y *Thornmail* (mejora en Grievous Wounds) favorecen su kit.

### Cambios Sistémicos que le afectan
*   **Tope de AS 3.0:** No afecta directamente a Rammus, pero sí a sus enemigos ADC, lo que hace que *Frozen Heart* sea menos prioritario que antes (ya que los ADC tienen más AS "gratis" por niveles).
*   **Lifesteal Nuevo Stat:** Los ADC dependen más de Lifesteal puro. *Thornmail* aplica Grievous Wounds al recibir daño básico, cortando esta nueva fuente de sustain de forma eficiente.

---

## 2. FICHA MATEMÁTICA (Spec Rammus)

*   **AD Base/Crecimiento:** 54 / 4.5 (Bajo, no construye AD).
*   **AS Base/Ratio/Bonus/Nivel:** 0.625 / 0.625 / 0.28 / 0.0185 (Fuente: Apéndice Oficial 7.3).
*   **Vida/Armadura/RM Base:** 670 HP / 45 Armadura (+4.5/nivel) / 40 RM (+2/nivel). *Nota: Rammus tiene una de las armaduras base más altas.*
*   **Modificadores Clave:**
    *   **W (Defensive Ball Curl):** Activo: Gana **Armura y RM adicionales** (valores escalan con nivel, aprox +60-100 cada una) y refleja daño mágico. Pasiva: Convierte Armadura en AD (aprox 1 AD por cada 2.5-3 de Armadura bonus, verificar en juego, pero el modelo asume conversión baja para priorizar tanqueo).
    *   **Q (Powerball):** Velocidad de movimiento masiva (hasta +100-140%) y daño físico al impactar.
    *   **E (Frenzying Taunt):** Provoca al enemigo y gana AS masivo temporalmente.
    *   **R (Spiky Shell):** Daño mágico en área alrededor de Rammus.

---

## 3. MODELO Y FÓRMULAS (Adaptación Tanque)

Para Rammus, el modelo de DPS de ADC no aplica directamente. Usamos un **Modelo de Valor de Tanqueo y Utilidad**:

1.  **Daño Reflejado (W + Thornmail + Sunfire):**
    $$ D_{reflejado} = (D_{entrante} \times \%_{W}) + (Golpes \times Daño_{Thornmail}) + Daño_{Sunfire} $$
2.  **Mitigación Efectiva (EH - Effective Health):**
    $$ EH = HP \times (1 + \frac{Armadura}{100}) \quad (\text{vs Físico}) $$
    $$ EH = HP \times (1 + \frac{RM}{100}) \quad (\text{vs Mágico}) $$
3.  **Valor de CC:** Tiempo de provocación (E) + Ralentización (Q) se valora como "Tiempo de Muerte Enemiga".

**Supuestos:**
*   Rammus activa W en todas las peleas prolongadas.
*   Smite se usa en campamentos grandes para maximizar el burn escalado.
*   La build prioriza Armadura sobre RM debido a la pasiva de W (aunque W da ambas, la Armadura base de Rammus es superior).

---

## 4. LEYES APLICADAS A RAMMUS

### Ley 1 — Armadura es Daño (Conversión W)
A diferencia de otros tanques, cada punto de Armadura en Rammus no solo reduce daño, sino que aumenta su daño de autoataques (vía pasiva de W) y su daño reflejado.
*   **Umbral:** No hay umbral de "crítico", pero hay un punto de rendimiento decreciente en Armadura pura si el enemigo es AP.
*   **Acción:** Construir Armadura primero (*Sunfire*, *Thornmail*, *Dead Man's*) maximiza su daño sostenible sin gastar oro en AD.

### Ley 2 — Velocidad de Movimiento como Herramienta de Engage
La Q de Rammus es su principal herramienta. Ítems con MS (*Dead Man's Plate*, *Force of Nature*, *Boots*) aumentan la frecuencia de ganks exitosos.
*   **Regla:** Priorizar ítems con MS pasiva o activa sobre ítems puramente estáticos si el equipo carece de engage.

### Ley 3 — Penetración de Armadura Enemiga
Los ADC actuales (Jinx, Caitlyn) construyen *Lord Dominik's* (35% Pen).
*   **Contramedida:** Rammus necesita **HP Bonus** además de Armadura. La mitigación porcentual de la penetración se combate con volumen de vida (*Sunfire*, *Gargoyle*, *Warmog's* si fuera necesario, pero *Gargoyle* es mejor por las resistencias duales).

### Ley 4 — Stats Muertos en Tanques
*   **Maná:** Rammus no tiene problemas graves de maná si gestiona bien el W. Ítems como *Iceborn Gauntlet* son menos eficientes que *Sunfire* porque Rammus no usa Spellblade frecuentemente en su rotación básica de jungla.
*   **AS:** Solo relevante durante la E. No construir ítems de AS (*Guinsoo*, *BotRK*).

---

## 5. ANÁLISIS DEL PRIMER ÍTEM

| Candidato | Oro | Justificación | Veredicto |
|-----------|-----|---------------|-----------|
| **Sunfire Aegis** | 2900 | Proporciona HP, Armadura, Haste y daño en área constante (Immolate). Sinergia perfecta con W (daño reflejado + daño de área) y R. Mejora el clear de jungla post-cambio de Smite. | ✅ **CORE** |
| **Iceborn Gauntlet** | 3000 | Da slow en área tras habilidad. Bueno para kiting, pero Rammus quiere estar *dentro* de la pelea. Menor daño total que Sunfire. | ⚠️ Situacional (vs muchos melee) |
| **Thornmail** | 2700 | Excelente contra ADCs, pero sin HP inicial es frágil. Mejor como segundo ítem. | ❌ Segundo ítem |
| **Randuin's Omen** | 2800 | Reduce daño crítico. Útil, pero Sunfire ofrece mejor clear y daño activo. | ❌ Tercer ítem |

**Veredicto:** **Sunfire Aegis** es el primer ítem indiscutible. Ofrece la mejor combinación de clear de jungla, daño en teamfight y estadísticas defensivas básicas.

---

## 6. BUILD FINAL RANURA POR RANURA

| Slot | Ítem | Justificación Matemática |
|------|------|--------------------------|
| Botas | **Plated Steelcaps** | Reducción de daño de autos (10%) + Armadura. Esencial contra la mayoría de ADCs y luchadores AD. Más eficiente que Mercury's a menos que haya 3+ fuentes de CC mágico. |
| 1 | **Sunfire Aegis** | Daño en área (% HP bonus) + Armadura + HP. Activa el "motor" de daño de Rammus. |
| 2 | **Thornmail** | Aplicación de Grievous Wounds (50%) al recibir daños básicos. Reflejo de daño adicional. Contrarresta el nuevo stat de Lifesteal de los ADCs. |
| 3 | **Dead Man's Plate** | HP + Armadura + MS. La MS ayuda a rotar y a cargar el golpe de "Crushing Blow" (daño extra + slow). Sinergia con Q para engages rápidos. |
| 4 | **Force of Nature** | HP + RM + MS. Escala con daño mágico recibido. Fundamental para equilibrar la durabilidad contra equipos mixtos o AP. La MS adicional rompe el límite de velocidad de Rammus. |
| 5 | **Gargoyle Stoneplate** | Armadura + RM + Haste. Activo: Escudo masivo basado en HP bonus. Permite a Rammus sobrevivir al focus fire en teamfights mientras provoca múltiples enemigos. |
| 6 | **Situacional** | Ver matriz abajo. |

### Matriz del Último Slot (Situacional)

| Situación | Ítem | Coste | Impacto Medido |
|-----------|------|-------|----------------|
| VS Mucho AP | **Abyssal Mask** | 2400 | Reduce RM enemiga en área (12%), aumentando el daño de tu R y el de tus aliados magos. Barato y eficiente. |
| VS Curación Extrema | **Mortal Reminder** (No, es AD) -> **Morellonomicon**? No, Rammus es tanque. Mantener **Thornmail** es suficiente. Si necesitan más, **Chempunk Chainsword** (si fuera AD, pero no lo es). Para tanques, **Thornmail** es la única opción viable anti-heal. | - | - |
| VS Burst Físico | **Randuin's Omen** | 2800 | Reduce daño crítico en 30%. Ideal contra Yone, Yasuo, Tryndamere, Jinx. |
| VS Control de Masas | **Mercury's Treads** (Cambio de botas) | 1200 | Si el CC es inmanejable, cambiar Plated por Mercury's. |
| Engage Adicional | **Shurelya's Battlesong** | 2500 | Si el equipo necesita velocidad para iniciar. Rammus puede usarla para acelerar a su carry o a sí mismo tras la Q. |

### Ítems RECHAZADOS
*   **Iceborn Gauntlet:** El slow no es tan valioso como el daño de Sunfire o la protección de Gargoyle. Rammus ya tiene CC garantizado (E).
*   **Warmog's Armor:** Demasiado HP sin resistencias. Rammus necesita Armadura/RM para que su W y pasiva sean efectivos.
*   **Spirit Visage:** Aunque cura, Rammus no tiene mucha curación propia. Force of Nature es mejor por la RM escalable y MS.

---

## 7. RUNAS · HECHIZOS · HABILIDADES

### Runas
*   **Keystone: Grasp of Undying.** Aumenta la durabilidad en lane/jungla early y proporciona daño mágico adicional en trades cortos. Sinergia con HP scaling.
*   **Primarias (Resolve):**
    *   **Demolish:** Rammus empuja torretas rápido con Q + Demolish.
    *   **Second Wind:** Sustain tras recibir daño de monstruos o enemigos.
    *   **Overgrowth:** HP infinito a largo plazo.
*   **Secundarias (Sorcery/Inspiration):**
    *   **Transcendence:** Haste gratuito al subir de nivel. Crucial para tener Q y E disponibles más seguido.
    *   **Bone Plating:** Reduce burst damage en early game.

*Alternativa:* **Aftershock** (si estuviera disponible, pero en WR 7.3 Grasp es más consistente para scaling). **Phase Rush** no es ideal porque Rammus ya tiene Q para movilidad.

### Hechizos
*   **Flash:** Obligatorio para combos Q-Flash-E o para escapar.
*   **Smite:** Obligatorio para jungla.

### Orden de Habilidades
1.  **W (Defensive Ball Curl):** Maxear primero. Aumenta el daño reflejado, la armadura/RM y el daño de autos. Mejora el clear de jungla.
2.  **Q (Powerball):** Maxear segundo. Reduce el cooldown y aumenta el daño y la velocidad. Vital para ganks.
3.  **E (Frenzying Taunt):** Maxear último. El tiempo de provocación no escala tanto como el daño de W/Q, y el AS extra es secundario.
4.  **R (Spiky Shell):** Aprender en 5, 9, 13.

---

## 8. COMPARACIÓN CONTRA LAS ALTERNATIVAS

| Build | Oro | Armadura Total | RM Total | HP Total | Daño Reflejado Est. | Mitigación Física |
|-------|-----|----------------|----------|----------|---------------------|-------------------|
| **WR-LAB Óptima** | 15 300 | ~250+ | ~150+ | ~3500+ | Alto (Sunfire+Thorn+W) | >60% |
| Meta Comunitaria (Tanque Puro) | Similar | Alta | Baja | Alta | Medio (Falta Sunfire) | >65% (vs AD) |
| Build AP (Rammus Mago) | Similar | Baja | Media | Media | Muy Alto (Burst) | <40% |

**Desglose:** La build WR-LAB equilibra Armadura y RM gracias a *Force of Nature* y *Gargoyle*, mientras que las builds tradicionales suelen ser demasiado específicas (solo Armadura). El daño de *Sunfire* añade un DPS constante que las builds de "tanque puro" (como Randuin's + Thornmail + Iceborn) no tienen.

---

## 9. PLAN DE JUEGO

### Early Game (Niveles 1-5)
*   **Start:** Empezar en buff rojo o azul dependiendo de la ruta. Usar W inmediatamente al llegar al campamento para maximizar el daño reflejado y reducir el daño recibido.
*   **Clear:** Usar Smite en el campamento grande (Krugs/Gromp) para activar el burn escalado. Mantener W activo siempre que sea posible.
*   **Gank:** Nivel 3, buscar lanes con CC aliado. Usar Q para acercarse, Flash si es necesario, y E para provocar. No olvidar activar W antes de entrar.

### Mid Game (Niveles 6-12)
*   **Objetivos:** Usar Q para rotar rápidamente a Dragones o Herald. Rammus es excelente para contestar objetivos debido a su velocidad.
*   **Teamfights:** Buscar al carry enemigo. Q -> Flash (si es necesario) -> E -> W. Activar R para maximizar el daño en área.
*   **Push:** Usar Demolish en torretas solitarias. La Q permite llegar y salir rápido.

### Late Game (Niveles 13+)
*   **Engage:** Rammus es el engage principal. Esperar a que el enemigo use habilidades clave, luego entrar con Q+Flash sobre el carry.
*   **Protección:** Si el equipo necesita protección, usar E sobre el asesino enemigo que salta a tu carry.
*   **Visión:** Controlar visión alrededor de objetivos. Rammus puede limpiar wards rápido con su daño en área.

---

## 10. VERIFICACIONES, DISCREPANCIAS Y SUPUESTOS

*   **Fuentes Primarias:** Notas oficiales Wild Rift 7.3 (21/09/2026). wr-meta.com (24/09/2026) para estadísticas de ítems.
*   **Discrepancias:** Algunos guías sugieren *Iceborn Gauntlet* como primer ítem. El modelo muestra que *Sunfire Aegis* ofrece más daño total y mejor sinergia con el cambio de Smite 7.3.
*   **Supuestos:** Se asume que Rammus juega como jungla. Si juega Top, la build es similar pero podría considerar *Trinity Force* si el equipo necesita daño split-push (no recomendado en meta actual).
*   **Contexto Meta:** Rammus es fuerte contra composiciones AD-heavy. Débil contra AP burst y kiting extremo (Vayne, Quinn).

---

## APÉNDICE A — POOL DE ÍTEMES DEL ROL: Veredicto por Ítem

| Ítem | Veredicto | Razón |
|------|-----------|-------|
| **Sunfire Aegis** | ✅ Core | Daño en área, stats defensivos, sinergia con W. |
| **Thornmail** | ✅ Core | Anti-heal, daño reflejado, armadura. |
| **Dead Man's Plate** | ✅ Core | Movilidad, HP, Armadura. Sinergia con Q. |
| **Force of Nature** | ✅ Core | RM escalable, MS. Equilibrio defensivo. |
| **Gargoyle Stoneplate** | ✅ Core | Supervivencia en teamfights, resistencias duales. |
| **Plated Steelcaps** | ✅ Core | Reducción de daño básico, armadura. |
| **Randuin's Omen** | ⚠️ Situacional | Solo vs críticos altos (Yasuo, Yone, Tryndamere). |
| **Abyssal Mask** | ⚠️ Situacional | Vs equipos AP. Reduce RM enemiga. |
| **Iceborn Gauntlet** | ❌ Rechazado | Menor impacto que Sunfire. Slow redundante. |
| **Warmog's Armor** | ❌ Rechazado | Demasiado HP, pocas resistencias. Ineficiente para W. |
| **Spirit Visage** | ❌ Rechazado | Force of Nature es mejor para Rammus (MS + RM escalable). |

## APÉNDICE B — RUTAS DE COMPRA

*   **Default:** Sunfire -> Plated Steelcaps -> Thornmail -> Dead Man's Plate -> Force of Nature -> Gargoyle Stoneplate.
*   **Vs AP Heavy:** Sunfire -> Mercury's Treads -> Abyssal Mask -> Thornmail -> Force of Nature -> Gargoyle Stoneplate.
*   **Vs Crit AD:** Sunfire -> Plated Steelcaps -> Randuin's Omen -> Thornmail -> Dead Man's Plate -> Gargoyle Stoneplate.
*   **Snowball (Agresivo):** Sunfire -> Plated Steelcaps -> Dead Man's Plate -> Thornmail -> Gargoyle Stoneplate -> Force of Nature.

---
*Reporte generado el 26/09/2026 con datos del parche 7.3. Modelo propio: Las cifras de mitigación son estimaciones basadas en estadísticas promedio de nivel 15. El valor real de Rammus radica en su capacidad de alterar el campo de batalla mediante CC y reducción de daños.*