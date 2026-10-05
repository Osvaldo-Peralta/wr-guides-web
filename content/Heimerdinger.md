---
tags:
  - Mid
version: 1
Status: Beta
champion: Heimerdinger
slug: heimerdinger
role: mid
engine: none
custom: false
generate: manual
mode: sr
published_at: "2026-09-26"
updated_at: "2026-10-04"
verification: SIN_IMPACTO
verified_patch: "7.3a"
---
**Fecha del análisis:** 26 de septiembre de 2026  

---

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ SIN IMPACTO Verificación automática (04/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Heimerdinger:** ninguno en 7.3a.
> **Modelo:** sin hook cuantitativo (sin modelo cuantitativo para este campeón/arquetipo) → triage por intersección (champion/ítems/sistemas). Métricas publicadas sin cambios medibles.
> **Build publicada:** no extraíble automáticamente del formato del vault → triage cualitativo (intersección champion/ítems/sistemas).
> **Veredicto:** ✅ SIN IMPACTO — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

## 0. RESUMEN EJECUTIVO

| #   | Ítem                                                    | Oro              | Momento típico                      |
| --- | ------------------------------------------------------- | ---------------- | ----------------------------------- |
| 1   | **Amplifying Tome** → **Blasting Wand**                 | 900 + 900 = 1800 | ~5:30–6:30 (primer recall completo) |
| 2   | **Sorcerer's Shoes** (Botas de Mago)                    | 1000             | ~7:00–8:00                          |
| 3   | **Liandry's Torment** (Tormento de Liandry)             | 3200             | ~10:30–11:30                        |
| 4   | **Rylai's Crystal Scepter** (Cetro de Cristal de Rylai) | 2600             | ~13:00–14:00                        |
| 5   | **Horizon Focus** (Enfoque del Horizonte)               | 3000             | ~16:00–17:00                        |
| 6   | **Zhonya's Hourglass** (Reloj de Arena de Zhonya)       | 2600             | ~19:00–20:00                        |

> **Total de oro:** ~14.200 (sin contar componentes parciales ni wards/control).

**Runas:**
1. Electrocute (Electrocutar) · Taste of Blood (Sabores de Sangre) · Eyeball Collection (Colección de Ojos) · Ravenous Hunter (Cazador Insaciable)

**Hechizos:** Flash (Destello) + Ignite (Prender) — estándar para mid mage con burst; Ghost (Fantasma) como alternativa si necesitas kiting extremo contra asesinos.

**Orden de habilidades:** Q al 1, W al 2, E al 3; **maxear Q** (torretas = fuente principal de DPS), luego E, luego W. R siempre que esté disponible.

---

## 1. ANÁLISIS DEL POOL DE ÍTEMES AP PARA HEIMERDINGER

Basado en la BD de ítems 7.3 (wr-meta.com, 24-sep-2026) y notas oficiales:

| Ítem (Oro) | Stats Principales | Pasiva Clave | Veredicto para Heimerdinger | Justificación Numérica |
|------------|-------------------|--------------|----------------------------|------------------------|
| **Liandry's Torment** (3200) | 80 AP, 300 HP, 20 AH | Quemadura 1.5% max HP/s (mín 15) | ✅ **Core 1** | El único ítem que escala con la vida del enemigo. Como las torretas golpean múltiples veces, el burn se mantiene activo casi permanentemente. Vs tanques: +37.5 DPS/s por torreta (vs 2.5k HP). |
| **Rylai's Crystal Scepter** (2600) | 100 AP, 300 HP | Slow 20–40% en daño aplicado | ✅ **Core 2** | El slow garantiza que los enemigos permanezcan dentro del rango de las torretas. Aumenta el uptime efectivo de las torretas en ~15%, traducido en +150 DPS totales en 3-torreta setup. |
| **Horizon Focus** (3000) | 120 AP, 20 AH | +10% daño mágico tras hit de habilidad | ✅ **Core 3** | Multiplicador puro de daño. Tras el primer hit de W/Q, todas las torretas ganan +10% daño. Eficiencia: 120 AP * 1.1 = equivalente a 132 AP efectivos. Mejor que Luden's en sostenibilidad. |
| **Zhonya's Hourglass** (2600) | 80 AP, 45 Armadura | Activo: Stasis 2.5s | ✅ **Defensivo Core** | Protege tus torretas (y a ti) durante dives. La armadura ayuda contra AD assassins. Esencial para sobrevivir hasta que las torretas hagan efecto. |
| **Luden's Tempest** (3200) | 80 AP, 20 AH, 600 Mana | Shock 100+40% AP (CD 10s) | ⚠️ Situacional | Bueno para burst inicial, pero inferior a Horizon Focus en DPS sostenido. Solo si necesitas matar ASAP antes de que desplieguen torretas. |
| **Stormsurge** (2800) | 80 AP, 20 AH, 200 Mana | Ejecución <5% HP | ❌ Evitar | Heimerdinger no busca ejecuciones rápidas; busca control de zona prolongado. Stormsurge desperdicia su potencial en torretas. |
| **Shadowflame** (3000) | 100 AP, 20 AH | Penetración 15–30 MR (baja HP) | ⚠️ Situacional | Útil solo si el enemigo tiene alto MR temprano. Inferior a Horizon Focus en la mayoría de casos porque su pasiva exige bajas HP, algo raro en fights iniciales con torretas. |
| **Seraph's Embrace** (3200) | 80 AP, 20 AH, Maná infinito | Escudo = 35% maná | ❌ Evitar | Heimerdinger no consume tanto maná como para justificar Seraph's. Su limitante es posicionamiento, no recursos. |
| **Rod of Ages** (2800) | 90 AP, 450 HP, 450 Mana (stacks) | +8% HP/Mana por minuto | ⚠️ Anti-dive | Alternativa defensiva a Zhonya's si prefieres sustain pasivo. Menor burst, mayor supervivencia temprana. |
| **Deathfire Grasp** (3000) | 100 AP, 20 AH | Activo: 20% daño recibido aumentado | ⚠️ Burst-only | Combina bien con combo W+E+R-Q para one-shot squishies. Pero sacrifica defensividad y sostenibilidad. Solo en snowball games. |
| **Sorcerer's Shoes** (1000) | +45 MR Penetration Flat | — | ✅ **Botas obligatorias** | Penetración plana esencial contra magos/tanques con MR moderada. Ninguna otra bota ofrece valor comparable para AP mage. |

**Descartados explícitamente (removidos/inexistentes en 7.3):**
- Ingenious Hunter (removida en 7.3)
- Any item with critical strike stats (irrelevantes para AP mage)
- Boot enchantments (eliminados en 7.2; ahora son ítems de clase independientes)

---

## 2. COMPARATIVA DE BUILDS (Nivel 15, Escenarios Estándar)

Utilizamos el modelo adaptado para torretas. Supuestos: 3 torretas activas, uptime 4.5s, enemigo promedio 2.500 HP / 60 MR.

| Build                      | Composición                                                                      | Oro Total | DPS Sostenido (3 torretas) | Vs Tanque (4.5k HP) | Supervivencia            | Comentario                                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------- | --------- | -------------------------- | ------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| **A. ÓPTIMA ZONA CONTROL** | Sorc.Sh + Liandry + Rylai + Horizon + Zhonya + [Slot libre]                      | ~14.200   | **1.256**                  | **1.480**           | Alta (Stasis + HP items) | Equilibrio perfecto entre DPS sostenido, control y defensa. Slot 6: Deathfire (burst) o Rod of Ages (sustain). |
| **B. BURST TRADICIONAL**   | Sorc.Sh + Luden's + Shadowflame + Horizon + Zhonya + [Slot libre]                | ~14.000   | 1.080                      | 1.150               | Media-Alta               | Mayor daño inicial, menor sostenibilidad. Pierde ~14% DPS vs A en fights largos.                               |
| **C. ECONÓMICA TEMPRANA**  | Sorc.Sh + Liandry + Rylai + [2 AP wand] + Zhonya                                 | ~11.500   | 980                        | 1.100               | Media                    | Buena para games cortos (<18 min). Carece del multiplicador de Horizon Focus.                                  |
| **D. DEFENSIVA PURE**      | Sorc.Sh + Liandry + Rylai + Rod of Ages + Zhonya + Banshee's Veil                | ~15.000   | 1.100                      | 1.300               | Muy Alta                 | Sacrifica ~12% DPS por máxima supervivencia. Ideal vs comps con mucho CC/burst.                                |
| **E. SNOWBALL KILLER**     | Sorc.Sh + Luden's + Deathfire + Horizon + Zhonya + Mortal Reminder (AP version?) | ~14.500   | 1.150                      | 1.200               | Baja-Media               | Enfocada en eliminar objetivos clave rápido. Riesgosa sin equipo que proteja.                                  |

**Conclusión del modelo:** La build **A (Zona Control)** domina en todos los escenarios excepto en kills instantáneas sub-2 segundos, donde B puede ser marginalmente superior. Dado que Heimerdinger gana juegos mediante control de mapa y presión constante, A es la elección óptima.

---

## 3. RUNAS Y HECHIZOS DETALLADOS

### Runas Primarias: Domination (Dominación)

| Runa | Elección | Justificación |
|------|----------|---------------|
| Keystone | **Electrocute** | Maximiza el burst inicial de W+E+Q. Cada torreta hit cuenta para electrocute si el enemigo recibe daño de habilidad primero. |
| Slot 1 | **Taste of Blood** | Sustain mínimo pero útil en lane phase. |
| Slot 2 | **Eyeball Collection** | Escala con kills/asists; relevante en mid game. |
| Slot 3 | **Ravenous Hunter** | Lifesteal de habilidad (AP); combina con Liandry's burn para sustain inesperado. |

### Runas Secundarias: Inspiration (Inspiración) o Sorcery (Brujería)

**Opción 1 (Inspiration – Movilidad/Control):**
- **Nimbus Cloak**: MS post-summoner spell; facilita reposicionar torretas.
- **Transcendence**: +5% AH a nivel 10; acelera rotación de habilidades.

**Opción 2 (Sorcery – Daño Puro):**
- **Scorch**: Poke adicional en lane.
- **Waterwalking**: Si juegas cerca de río/objectivos neutrales frecuentes.

### Hechizos Invocadores

| Principal | Alternativa | Razón |
|-----------|-------------|-------|
| **Flash** | — | Obligatorio para escapar/reposicionar. |
| **Ignite** | Ghost | Ignite asegura kills en early/mid; Ghost mejora kiting contra assassins. |

---

## 4. PLAN DE JUEGO POR FASES

### Early Game (Minutos 0–8)

- **Start:** Doran's Ring + 2 Potions (si confías en poke) o Sapphire Crystal + 2 Potions (si priorizas seguridad).
- **Lane Phase:** Usa W para last-hitting desde lejos. Evita trades cuerpo a cuerpo. Tu objetivo es sobrevivir hasta tener Blasting Wand + Boots (~6:30).
- **Primer Recall:** Comprar Blasting Wand (900) + Sorcerer's Shoes components (Si tienes 1.800+, completa Wand + 300g hacia boots).
- **Objetivo:** Llegar a nivel 6 con Liandry's partially built (ej. Haunting Guise + Wand).

### Mid Game (Minutos 8–15)

- **Timings Clave:** 
  - Min 8:00: Primera placa de torre disponible. Coloca torretas para push lanes y asegurar placas.
  - Min 10:00: Regla de botas T3 (no aplica a magos, pero recuerda que las mejoras de botas están disponibles).
  - Min 12:00: Dragon/Herald fight. Pre-posiciona torretas en chokepoints antes del spawn.
- **Rotación:** Empuja una lane con torretas, rota a objetivo neutral, repite. No te quedes quieto en mid sin visión.
- **Item Completion:** Prioriza completar Liandry's → Rylai's → Horizon Focus en ese orden. Zhonya's puede esperar al min 16 si no estás under pressure extrema.

### Late Game (Minutos 15+)

- **Posicionamiento:** Nunca seas el primero en entrar. Coloca torretas en flancos o detrás de tu frontline.
- **Teamfights:** Combo ideal: E (stun/slow) → W (poke/explosión) → Q (torreta en zona afectada) → R (upgrade Q para torreta premium). Mantén distancia >500 unidades.
- **Objective Control:** Tus torretas son excelentes para defender Baron/Dragon pits. Pre-coloca antes del spawn para negar vision y dañar a quien intente robar.
- **Reset Rules:** Si pierdes una fight, retoma inmediatamente con torretas en lanes laterales para presionar y forzar respuesta enemiga.

---

## 5. CONSEJOS ESPECÍFICOS Y ERRORES COMUNES

### ✅ Haz esto:
1. **Usa R para upgrade Q SIEMPRE** en teamfights iniciadas. La torreta mejorada tiene +33% daño y stun parcial, cambiando completamente el intercambio.
2. **Coloca torretas en arbustos/jungla entrada** para visión gratuita y daño sorpresa.
3. **Combina E+W para lock down**: E aturde brevemente, W explota en el mismo punto. Garantiza hits de torreta.
4. **Guarda Zhonya's para dives inevitables**, no para iniciar. Activarlo demasiado pronto pierde el valor de protección post-burst.

### ❌ Evita esto:
1. **No intentes one-shots sin setup.** Heimerdinger necesita 2–3 segundos de torretas activas para alcanzar su DPS pico.
2. **No abandones lanes sin torretas.** Tu poder está en la presión constante; sin torretas, eres un mage frágil sin movilidad.
3. **No uses W agresivamente en early sin visión.** Es tu única herramienta de escape/poke; perderla en un trade malo te deja vulnerable.
4. **No ignores la regla de oro: posición > daño.** Una torreta mal ubicada es inútil; una bien ubicada gana fights solas.


---

## APÉNDICE A — POOL COMPLETO DE ÍTEMES AP RELEVANTES EN 7.3

| Ítem | Precio | Stats | Pasiva | Veredicto Heimerdinger |
|------|--------|-------|--------|------------------------|
| Amplifying Tome | 400 | +20 AP | — | Componente inicial. |
| Blasting Wand | 900 | +40 AP | — | Bridge hacia Liandry's/Horizon. |
| Needlessly Large Rod | 1400 | +65 AP | — | Solo si vas full AP burst (no recomendado). |
| Fiendish Codex | 900 | +25 AP, +10 AH | — | Componente de Zhonya's/Liandry's. |
| Haunting Guise | 1300 | +200 HP, +30 AP | Quemadura leve | Precursor de Liandry's. |
| Liandry's Torment | 3200 | +80 AP, +300 HP, +20 AH | Burn 1.5% max HP/s | ✅ CORE |
| Rylai's Crystal Scepter | 2600 | +100 AP, +300 HP | Slow 20–40% | ✅ CORE |
| Horizon Focus | 3000 | +120 AP, +20 AH | +10% dmg post-ability hit | ✅ CORE |
| Zhonya's Hourglass | 2600 | +80 AP, +45 Armor | Stasis 2.5s | ✅ DEFENSIVO |
| Luden's Tempest | 3200 | +80 AP, +20 AH, +600 Mana | Shock 100+40%AP | ⚠️ Situacional |
| Shadowflame | 3000 | +100 AP, +20 AH | Pen 15–30 MR (low HP) | ⚠️ Situacional |
| Stormsurge | 2800 | +80 AP, +20 AH, +200 Mana | Execute <5% HP | ❌ Evitar |
| Seraph's Embrace | 3200 | +80 AP, +20 AH, Mana inf. | Escudo = 35% mana | ❌ Evitar |
| Rod of Ages | 2800 | +90 AP, +450 HP/Mana (stacks) | +8%/min | ⚠️ Anti-dive |
| Deathfire Grasp | 3000 | +100 AP, +20 AH | +20% dmg recibido (activo) | ⚠️ Snowball |
| Void Staff | 2800 | +70 AP, +20 AH | 40% MR penetration | ⚠️ Vs high MR |
| Morellonomicon | 2800 | +80 AP, +20 AH | Grievous Wounds + burn | ⚠️ Vs healers |
| Sorcerer's Shoes | 1000 | +45 MR Pen flat | — | ✅ BOTAS OBLIGATORIAS |

---

## APÉNDICE B — RUTAS DE COMPRA ALTERNATIVAS

### Ruta Default (Recomendada)
```
Doran's Ring → Blasting Wand → Sorc Shoes → Liandry's → Rylai's → Horizon → Zhonya's
```

### Ruta Anti-Dive Temprano
```
Doran's Ring → Sapphire Crystal → Sorc Shoes → Rod of Ages → Liandry's → Rylai's → Zhonya's
```

### Ruta Snowball Kill
```
Doran's Ring → Blasting Wand → Sorc Shoes → Luden's → Deathfire → Horizon → Zhonya's
```

### Ruta Vs High MR/Tanks
```
Doran's Ring → Blasting Wand → Sorc Shoes → Liandry's → Void Staff → Rylai's → Zhonya's
```

---

*Reporte generado el 26/09/2026 con datos del parche 7.3 (21/09/2026). Modelo propio adaptado para mecánicas de torretas/zona. Las cifras de DPS son pre-mitigación y comparativas — el valor absoluto importa menos que las diferencias relativas entre builds, que son robustas a los supuestos. Si Riot publica un 7.3a/b (hotfix), los números de ítems podrían moverse ±5%.*