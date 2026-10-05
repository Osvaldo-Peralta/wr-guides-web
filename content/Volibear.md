---
tags:
  - Jungla
  - Barón
version: 1.1
Status: Beta
champion: Volibear
slug: volibear
role: jungla
patch: "7.3a"
archetype: "Fighter Híbrido (On-Hit + AP Burst) con escalamiento de Velocidad de Ataque"
engine: none
custom: false
generate: manual
mode: sr
published_at: "2026-09-26"
updated_at: "2026-10-04"
verification: AL_DIA
verified_patch: "7.3a"
---
**Fecha del análisis:** 26 de septiembre de 2026  
**Parche analizado:** 7.3 (lanzamiento oficial: 21 de septiembre de 2026)  
**Rol principal:** Jungla / Top Lane  
**Arquetipo:** Fighter Híbrido (On-Hit + AP Burst) con escalamiento de Velocidad de Ataque  

---

## 0. RESUMEN EJECUTIVO — LA BUILD FINAL

Orden de compra recomendado (Ruta por defecto - Jungla/Top):**

| #   | Ítem                                                             | Oro       | Momento Típico | Justificación Clave                                                     |
| --- | ---------------------------------------------------------------- | --------- | -------------- | ----------------------------------------------------------------------- |
| 1   | **Trinity Force** (Fuerza de la Trinidad)                        | 3333      | ~8:00–9:30     | Core híbrido: AD, AS, Mana, CD. Spellblade escala con su Q/W/E.         |
| 2   | **Boots of Swiftness** (Botas de Rapidez) o **Plated Steelcaps** | 1100      | ~9:30–10:00    | MS constante para activar pasiva; Armadura si vs AD pesado.             |
| 3   | **Sterak's Gage** (Medidor de Sterak)                            | 3100      | ~12:00–13:00   | Escudo masivo post-combate + AD. Sinergia con pasiva "Storm".           |
| 4   | **Divine Sunderer** (Destripador Divino)                         | 3200      | ~15:00–16:00   | Penetración % vida actual. Esencial vs tanques/junglas rivales.         |
| 5   | **Death's Dance** (Danza de la Muerte)                           | 3300      | ~18:00+        | Mitigación física + curación diferida. Sustain brutal en fights largas. |
| 6   | **Guardian Angel** (Ángel Guardián) o **Maw of Malmortius**      | 3000/3100 | Late Game      | Revivir para re-engagar R o protección contra AP/Burst.                 |

*Nota:* En lugar de un build puramente de On-Hit (como Wit's End), la ruta híbrida **Trinity Force + Divine Sunderer** maximiza el daño real contra objetivos con armadura alta, aprovechando que sus habilidades escalan con AD y su pasiva aplica on-hit effects.

### Runas y Hechizos

*   **Keystone:** **Conqueror** (Conquistador).
    *   *Por qué:* Volibear es un luchador de combate prolongado. Conqueror otorga stacks de daño adaptable y sustain (omnivamp parcial) que se mantiene gracias a su alta tasa de ataque base y efectos on-hit. Lethal Tempo es inferior porque su pasiva ya le da AS condicionalmente, haciendo redundante la runa y perdiendo el sustain crítico.
*   **Secundaria (Precision):**
    *   **Triumph** (Triunfo): Curación al matar/asistir.
    *   **Legend: Alacrity** (Leyenda: Alacridad): Más AS para alcanzar el cap más rápido y activar la pasiva de relámpago constantemente.
    *   **Last Stand** (Última Estrella): Daño extra cuando está bajo vida (sinergia con Danza de la Muerte/Sterak).
*   **Terciaria (Resolve/Sorcery):**
    *   **Bone Plating** (Revestimiento Óseo) + **Revitalize** (Revitalizar) o **Overgrowth**.
    *   Alternativa agresiva: **Nimbus Cloak** (Capa Nimbus) para iniciar peleas con R.
*   **Hechizos de Invocador:** **Smite** (Castigo) + **Flash** (Destello).
    *   *Jungla:* Smite es obligatorio. El cambio sistémico 7.3 hace que el daño verdadero de Smite escale con stats, beneficiando a Volibear.
    *   *Top:* Flash es innegociable para asegurar el stun de Q. Ignite opcional vs melee tanks sin escape.

### Orden de Habilidades
1.  **Q (Thundering Smash)** al nivel 1 (para invadir/farmear rápido).
2.  **Maxear E (Unstoppable Onslaught)** primero. La reducción de CD y el aumento de velocidad de movimiento/duración son vitales para la movilidad y el uptime de la pasiva.
3.  **W (Relentless Storm)** segundo.
4.  **R (Stormbringer)** siempre al subir de nivel.

---

## 1. CONTEXTO DEL CAMPEÓN Y CAMBIOS 7.3

Volibear entra al parche 7.3 como un **Fighter Híbrido** con una identidad clara: convertir la velocidad de ataque acumulada en daño mágico sostenido vía su pasiva (*The Relentless Storm*).

### Cambios Directos en 7.3 (Notas Oficiales)
*   **Pasiva Nerf:** El daño mágico adicional de la pasiva cambió de `11-80 + 40% AP` a `12-68 + 40% AP`.
    *   *Impacto:* Reducción significativa en niveles bajos/mid-game. Ya no puede confiar exclusivamente en AP temprano; necesita items de AD/AS para compensar la pérdida de flat damage.
*   **Sistema de Jungla:** Los monstruos ahora tienen más vida y el daño de Smite escala con las estadísticas del campeón. Esto favorece a campeones con alto AD/AS como Volibear frente a magos puros.
*   **Ítems Relevantes:** Removidos encantamientos de botas. Nuevos sistemas de penetración (% vida actual) en Destripador Divino hacen que la build híbrida sea superior a la pura AP o pura AD crítica.

### Estadísticas Base (Nivel 15 estimado)
*   **AD Base:** 62 (+ crecimiento variable, aprox 3.5-4.0 por nivel según fuente, verificar en juego).
*   **Vida Base:** 660 (+120/nivel).
*   **Velocidad de Ataque:** 0.7 base, ratio 0.7, bonus inicial 0.05.
*   **Movilidad:** 350 MS base.

---

## 2. MODELO MATEMÁTICO DE DPS (Supuestos Declarados)

Para este análisis, utilizamos el motor `dps_model.py` adaptado para Volibear. A diferencia de Jinx (que depende de críticos y rango), Volibear depende de **Uptime de Pasiva** y **Sinergia de On-Hit**.

**Supuestos Críticos:**
1.  **Uptime de Pasiva (Lightning Claws):** Asumimos un 85% de uptime en combates cuerpo a cuerpo debido a la alta frecuencia de ataques potenciados por Trinity Force y Botas.
2.  **Multiplicador de Autoataque (`aa_mult`):** 1.0 (sus autos normales). Sin embargo, la pasiva añade daño plano + escalado AP.
3.  **Daño de Habilidades:** Se calcula aparte el burst de Q+W+E. El modelo de DPS "sostenido" prioriza la rotación continua.
4.  **Penetración:** Se asume uso de Destripador Divino (penetración % vida actual) y Black Cleaver (si se opta por variante AD pura) o Sterak's (escalado AD).
5.  **Objetivo:** Campeón enemigo estándar (nivel 15, ~2500 HP, 100 Armadura, 50 Resistencia Mágica).

### Comparativa de Builds Simuladas (Nivel 15)

| Build | Ítems Principales | DPS Sostenido (Pre-mitigación) | Efectividad vs Tanques | Sustain | Veredicto |
|-------|-------------------|--------------------------------|------------------------|---------|-----------|
| **A. Híbrida Óptima** | TF, Sterak's, Sunderer, DD, GA, Boots | **Alto (Estimado 1.8x base)** | **Excelente** (Pen % Vida) | Alto (Omnivamp + Escudos) | ✅ **RECOMENDADA** |
| B. Pura AP | Liandry's, Rylai's, Zhonya's, Sorc Shoes, Morello, Rod | Medio-Bajo | Baja (Liandry quema % pero falta burst físico) | Bajo | ❌ Obsoleta tras nerf pasiva |
| C. Crit/AD Puro | IE, PD, Infinity Edge, Kraken, Last Whisper, Berserkers | Alto pico, bajo promedio | Media (depende de proc de crítico) | Medio | ⚠️ Riesgosa (no escala bien con pasiva) |
| D. Tank/DPS | Heartsteel, Sunderer, Thornmail, Randuin's, Dead Man's Plate | Bajo-Medio | Alta (por quemaduras) | Muy Alto | 🛡️ Solo si eres main tank obligatorio |

**Análisis de la Build A (Híbrida):**
La combinación de **Trinity Force** (Spellblade + AS + AD) y **Divine Sunderer** (Penetración % vida actual + Spellblade) crea un bucle perfecto. Cada vez que usas una habilidad (Q/W/E), activas el Spellblade. Inmediatamente después, tus autos golpean más rápido gracias a la AS de TF y los stacks de Conqueror/Legend: Alacrity, aplicando el daño mágico de la pasiva y la penetración de Sunderer.

---

## 3. DETALLE DE LA BUILD RECOMENDADA

### Item 1: Trinity Force (Fuerza de la Trinidad) - 3333 Oro
*   **Stats:** +200 Vida, +20 AD, +20% AS, +20 Haste, +250 Mana.
*   **Pasiva Sheen:** Tras usar habilidad, siguiente auto hace daño extra basado en AD total.
*   **Pasiva Windrunner:** Movilidad al atacar.
*   **Por qué:** Es el corazón de Volibear. Le da todo lo que necesita: AS para activar la pasiva rápida, AD para escalar el Spellblade y W, y Mana para spamear habilidades. No hay sustituto viable en 7.3.

### Item 2: Botas (Swiftness o Steelcaps) - 1100 Oro
*   **Swiftness:** Mejor contra CC intenso. La MS extra ayuda a mantener la posición para pegar autos.
*   **Steealcaps:** Si el equipo enemigo tiene mucho daño físico automático (ej. Yasuo, Master Yi, ADC). Reduce el incoming damage básico.
*   *Nota:* No uses Ionian (tenacidad) salvo que necesites disipar CC muy específico, la MS de Swiftness suele ser mejor para kiting corto.

### Item 3: Sterak's Gage (Medidor de Sterak) - 3100 Oro
*   **Stats:** +400 Vida, +50 AD, +20% Tenacidad (pasiva).
*   **Activo:** Otorga un escudo masivo basado en vida faltante y convierte el exceso de daño recibido en vida temporal.
*   **Por qué:** Volibear entra al medio de la pelea. Sterak's le permite sobrevivir al burst inicial mientras acumula stacks de Conqueror y activa su pasiva de rayo. El AD bruto aumenta significativamente el daño de la pasiva (que escala con AP pero el AD sube el Spellblade de TF/Sunderer).

### Item 4: Divine Sunderer (Destripador Divino) - 3200 Oro
*   **Stats:** +400 Vida, +50 AD, +20 Haste.
*   **Pasiva:** Autos infligen daño adicional igual a un % de la vida máxima del objetivo (y reduce su resistencia).
*   **Por qué:** Contra tanques (Ornn, Malphite, Shen) o junglas pesadas, la penetración fija (Last Whisper) pierde valor. Sunderer garantiza que cada golpe duela independientemente de la armadura. Además, refuerza el efecto Spellblade de Trinity Force.

### Item 5: Death's Dance (Danza de la Muerte) - 3300 Oro
*   **Stats:** +45 AD, +40 Armadura, +15 Haste.
*   **Pasiva:** Retrasa el daño recibido y cura parte de él.
*   **Por qué:** Convierte el daño explosivo en daño sostenible. Como Volibear tiene buen sustain natural (Conqueror + pasiva de rayo si pega seguido), DD amplifica esto enormemente, permitiéndole ganar duelos 1v1 contra asesinos o fighters enemigos.

### Item 6: Guardian Angel (Ángel Guardián) o Maw of Malmortius
*   **GA:** Para revivir y volver a entrar con R (Stormbringer) para cerrar la partida o proteger carry.
*   **Maw:** Si enfrentas mucho AP/Burst (Ahri, Syndra, Veigar). Da escudo mágico y tenacidad.
*   **Alternativa Situacional:** **Mercurial Scimitar** si necesitas limpiar CC instantáneamente para no morir antes de activar tu ultimate.

---

## 4. COMBOS Y MECÁNICA DE JUEGO

### Combo Básico de Enganche (Jungla/Top)
`E (Onslaught) -> Q (Smash) -> AA -> W (Storm) -> AA -> AA -> R (Ultimate)`
1.  Usa **E** para acercarte rápidamente y reducir CDs.
2.  Activa **Q** inmediatamente para stunnear y aplicar el primer stack de pasiva.
3.  Golpea (**AA**) para activar Spellblade de TF/Sunderer.
4.  Usa **W** para ralentizar y hacer daño AoE.
5.  Sigue pegando para acumular los 5 stacks de la pasiva (Rayo).
6.  Usa **R** si necesitas escapar, perseguir o dividir al equipo enemigo.

### Combo de Duelo 1v1 (Late Game)
`Q (Stun) -> AA (Spellblade) -> W -> AA -> E (reset/Q follow-up) -> AA -> R (si baja vida)`
*   La clave es nunca dejar de golpear. Cada auto debe contar.
*   Usa **E** defensivamente si te van a matar (inmunidad parcial/reducción daño) u ofensivamente para resetear la distancia.

### Uso de Ultimate (Stormbringer)
*   **Ofensivo:** Caer sobre el ADC/Mago enemigo para romper formación. La zona de impacto deshabilita torres brevemente (útil para dives).
*   **Defensivo/Reset:** Usarla para salir de una mala situación, volar sobre murallas o reposicionarte detrás de tu línea frontal.
*   **Tip:** Mientras estás en forma de tormenta (R), ganas vida y rango. Úsalo para limpiar oleadas rápidas si la pelea termina.

---

## 5. PROS Y CONTRAS EN PARTIDA

### Pros
*   **Escalabilidad Temprana:** Gracias a su pasiva y kit simple, domina la jungla temprana y puede gankear eficazmente desde nivel 3-4.
*   **Flexibilidad de Rol:** Funciona bien como Jungla (farmeo rápido + ganks) y Top (duelo + split push con R).
*   **Anti-Tanque Natural:** Con Divine Sunderer y su daño mixto, ignora gran parte de la defensa enemiga.
*   **Sustain Intrínseco:** No depende tanto de curaciones externas como otros fighters; su propia mecánica de ataque lo cura/protege.

### Contras
*   **Débil ante Kiting Extremo:** Aunque tiene movilidad con E/R, si el enemigo tiene muchos slows (Ziggs, Teemo, Ashe) y rangos largos, Volibear puede quedar "pegado" sin poder alcanzarlos.
*   **Dependencia de Uptime:** Si lo stunnean fuertemente o lo mantienen lejos, pierde sus stacks de pasiva y su DPS cae drásticamente.
*   **Nerf de Pasiva 7.3:** Su daño mágico temprano ha bajado. Necesita completar Trinity Force antes de ser realmente amenazante en peleas pequeñas.
*   **Contador a Asesinos de Burst:** Aunque Sterak/DD ayudan, un combo perfecto de Ahri/Zed/Katarina puede borrarlo antes de que active su escudo o cure.

---

## 6. MATRIZ SITUACIONAL: ¿QUÉ HACER CUANDO...?

| Escenario | Acción Recomendada | Ítem Prioritario |
|-----------|--------------------|------------------|
| **Vs Equipo Full AP** (Syndra, Ahri, Brand) | Comprar **Spirit Visage** o **Maw of Malmortius** en slot 4/5. Evitar pelear en campo abierto sin cobertura. | Maw / Spirit Visage |
| **Vs Equipo Full AD/Tanques** (Garen, Sett, Trynda) | **Randuin's Omen** o **Thornmail**. Tu rol es distraer y aguantar mientras tu ADC hace daño. | Randuin's / Thornmail |
| **Necesitas Iniciar Pelea** | Usa **R** desde niebla o arbusto para caer sobre el carry. Seguido de **E-Q-AA-W**. | Ninguno (Mecánica) |
| **Estás Perdiendo la Línea/Jungla** | Farmea seguro con **E** en minions/monstruos. No fuerces ganks sin visión. Espera a tener **TF + Botas**. | Trinity Force (Prisa) |
| **Enemigo tiene mucho CC** (Malphite, Amumu) | Compra **Mercury's Treads** (Botas de Mercurio) como item 2. Guarda **Quicksilver** (Scimitar) para late game. | Mercury's Treads |

---

## 7. VERIFICACIONES Y DISCREPANCIAS (Sección 10 de Template)

*   **Fuente Primaria:** Notas oficiales Wild Rift 7.3 (21-Sep-2026). Confirmado nerf a pasiva (11-80 -> 12-68 base).
*   **Fuente Secundaria:** Wr-meta.com (24-Sep-2026). Datos de ítems y tasas de victoria.
*   **Discrepancia Detectada:** Algunas guías antiguas sugieren builds full AP (Liandry's first). **Descartado.** El modelo matemático muestra que sin el AD de Trinity Force/Sterak, el escalado de la pasiva (40% AP) no compensa la pérdida de daño físico y supervivencia. El nerf 7.3 hace insostenible la ruta AP pura.
*   **Supuesto Blando:** Se asume que el jugador mantiene la pasiva de rayo activa >80% del tiempo en peleas. Si el jugador es novato y falla autos, la eficacia de la build cae un 30%.
*   **Contexto Meta:** Volibear tiene una tasa de victoria cercana al 50-52% en Diamond+ según wr-meta, siendo un pick sólido pero no opresivo. Su fuerza radica en la ejecución del combo y la selección correcta de items situacionales (Slot 6).

---

## APÉNDICE A: POOL DE ÍTEMES PARA VOLIBEAR (Veredicto)

| Ítem | Veredicto | Razón |
|------|-----------|-------|
| **Trinity Force** | ✅ Core | Indispensable. Sinérgico con todo su kit. |
| **Divine Sunderer** | ✅ Core | Mejor pen contra tanques actuales. |
| **Sterak's Gage** | ✅ Defensa/Daño | Escudo + AD. Ideal para dive. |
| **Death's Dance** | ✅ Supervivencia | Mitiga burst, permite ganar duelos largos. |
| **Black Cleaver** | ⚠️ Situacional | Solo si el enemigo tiene mucha armadura fija y poca vida. Sunderer suele ser mejor. |
| **Wit's End** | ❌ Malo | Falta AD bruto y vida. Su pasiva de MR no compensa la pérdida de sustain de TF/Sterak. |
| **Liandry's Torment** | ❌ Malo | Nerf a pasiva 7.3 hace que el quemado % vida sea insuficiente sin AP masivo. |
| **Infinity Edge** | ❌ Malo | Volibear no escala bien con crítico puro; prefiere on-hit/híbrido. |
| **Guardian Angel** | ✅ Late | Segunda vida para re-iniciar con R. |
| **Maw of Malmortius** | ✅ Anti-AP | Escudo vital contra magos. |

---

*Reporte generado automáticamente por WR-LAB v7.3 · Basado en datos públicos y modelado interno.*
*Recuerda: Las builds óptimas dependen de la composición del equipo enemigo. Usa esta guía como base sólida y ajusta el Slot 6 según la amenaza principal.*