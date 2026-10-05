---
tags:
  - ADC
version: 1
Status: Beta
champion: Kalista
slug: kalista
role: adc
patch: "7.3"
engine: onhit
custom: false
generate: manual
mode: sr
published_at: "2026-09-27"
updated_at: "2026-10-04"
verification: ANOTAR
verified_patch: "7.3a"
---
**Fecha del análisis:** 27/09/2026  
**Parche:** 7.3 (Lanzamiento: 21/09/2026)

<!-- WRLAB-VERIF:7.3a:START — generado por model/update_reports.py · no editar a mano -->
> [!NOTE] ✅ ANOTAR Verificación automática (04/10/2026) — **NO requiere regeneración — hotfix 7.3a**
> **Cambios directos a Kalista:** ninguno en 7.3a.
> **Δ del modelo:** 0 % — ningún input del campeón/build cambió en el motor.
> **Build publicada (6 slots, Ley 0):** Gunmetal Greaves + Guinsoo's Rageblade + Wit's End + Terminus + Bloodthirster (BotRK) + Runaan's Hurricane — **sin cambios**.
> **Sistema (7.3a):** Nexus: 5 500 → **4 000 HP** → Partidas terminan antes tras inhibidores
> **Sistema (7.3a):** Placas de torreta: Al perder placa: +30→**+20** arm/MR y 20→**10 s** → **Siege más fácil** → sube el valor de Jinx/Kalista/Yunara (siege) y de Runaan's/Energized
> **Nota del lab (diff 7.3a):** Yun Tal buffeada sigue RECHAZADA para Kalista (sin on-hit, ramp de crit); para **Yunara** (reporte externo) es buff relevante → re-verificar ese reporte → Anotado
> **Veredicto:** ✅ ANOTAR — build, ruta de compra y veredictos siguen vigentes; este bloque es la constancia de verificación.
<!-- WRLAB-VERIF:7.3a:END -->

> [!NOTE]
> **Estado Meta Actual (Diamond+):**
> 
> Win Rate ~51% | Pick Rate Alto | Rol: ADC Bot Lane / Duo Support.


## 0. RESUMEN EJECUTIVO

| Slot  | Ítem                                       | Coste Oro | Justificación Clave                                                                                  |
| :---- | :----------------------------------------- | :-------- | :--------------------------------------------------------------------------------------------------- |
| **1** | Berserker's Greaves → **Gunmetal Greaves** | 2200      | +50% AS final, mejora el dash pasivo (Martial Poise).                                                |
| **2** | Guinsoo's Rageblade                        | 3000      | Multiplicador global: cada 3º golpe aplica On-Hit x2. Es el motor del build.                         |
| **3** | **Wit's End**                              | 2800      | Sinergia directa con Guinsoo (On-Hit mágico) + MR + Tenacidad vital para sobrevivir al foco enemigo. |
| **4** | **Terminus**                               | 3000      | Penetración híbrida (física/mágica) y On-Hit flat. Escala con stacks Light/Dark.                     |
| **5** | **Bloodthirster (BotRK)**                  | 3100      | % Vida Actual en On-Hit (x2 con Guinsoo). Sustain masivo contra tanques.                             |
| **6** | **Runaan's Hurricane**                     | 2650      | AoE puro. Sus rayos aplican On-Hit, explotando la sinergia con Guinsoo/Wit's End/BotRK.              |

>**Oro Total:** ~16,750 g (Sin contar consumibles iniciales).

*   **Veredicto:** Kalista es un campeón **"On-Hit Hyper-Carrier"**.

* No depende del crítico tradicional (IE/C44 son ineficientes en ella porque su **E** no da criticos y sus autos escalan mal con AD plano comparado con On-Hit). La clave es maximizar la frecuencia de golpes (AS) y multiplicar el efecto de cada golpe mediante Guinsoo.

---

## 1. ANÁLISIS DEL PRIMER ÍTEM Y RUTA

**Inicio Estándar:** Espada Larga (Long Sword) + Poción.

**Primer Item Grande (Slot 2 tras botas):**
*   **Candidato A: Furia de Guinsoo (Guinsoo's Rageblade).**
    *   *Coste:* 3000g.
    *   *Impacto Nivel 9:* +35% AS (base) + On-Hit doble. Inmediatamente transforma los autos débiles en amenazas letales.
    *   *Veredicto:* **Obligatorio.** Sin Guinsoo, los siguientes ítems On-Hit rinden la mitad.

---

## 2. DESGLOSE RANURA POR RANURA (BUILD FINAL)

| Ranura | Ítem | Stats Principales | ¿Por qué este? (Matemática) |
| :--- | :--- | :--- | :--- |
| **1** | **Gunmetal Greaves**<br>(Evolution de Berserker's) | +50% AS<br>+5% LS<br>**Dash Mejorado** | El dash escala con tier de botas. Gunmetal es T3. Mayor alcance de kite = mayor supervivencia y oportunidad de aplicar W Passive (Sentinel). |
| **2** | **Guinsoo's Rageblade** | +35% AS<br>+30 AD<br>+30 AP<br>**On-Hit x2 cada 3º golpe** | Motor central. Convierte Wit's End, BotRK y Runaan's en armas devastadoras. Sin esto, la build pierde ~40% de eficiencia. |
| **3** | **Wit's End** | +50% AS<br>+40 Magic DMG/hit<br>+45 MR<br>+20% Tenacity | Mitiga el daño mágico (común en supports/enemies focus). La tenacidad permite romper roots lentos. El daño mágico ignora armadura física de tanques. |
| **4** | **Terminus** | +30% Pen Física<br>+30% Pen Mágica<br>+30 On-Hit Flat<br>+Resistencias | Kalista hace daño mixto (Auto=Físico, W=E.Mágico/Físico, E=Físico, On-Hits=Mixtos). Terminus penetra ambos tipos. Sus stacks Light/Dark añaden stats defensivos/ofensivos dinámicos. |
| **5** | **Bloodthirster (BotRK)** | +40 AD<br>+30% AS<br>+12% LS<br>**6% Vida Actual On-Hit** | Contra tanques (Cho'Gath, Malphite, Ornn), el 6% de vida actual aplicado dos veces (por Guinsoo) es brutal. Ejemplo: Tanque 4000 HP → 240 dmg/golpe x2 = 480 dmg efectivo en golpes alternos. El lifesteal mantiene viva a Kalista en peleas largas. |
| **6** | **Runaan's Hurricane** | +40% AS<br>+25% Crit<br>+4% MS<br>**Rayos 55% AD** | AoE Teamfight. Los rayos **aplican On-Hit**. Con Guinsoo, los rayos pueden beneficiarse de la duplicación (dependiendo de implementación exacta de procs, pero generalmente amplifican el output total). Permite limpiar waves y golpear múltiples enemigos en peleas caóticas. |


> [!NOTE] NOTA
> Si el juego va muy ventajoso y necesitas cerrar rápido, se puede intercambiar Terminus por Lord Dominik's Regards si hay mucho tank físico, pero Terminus es más versátil en 7.3


---

## 3. ÍTEMS RECHAZADOS Y POR QUÉ

1.  **Infinity Edge (IE):**
    *   *Motivo:* Kalista no escala bien con Crit Chance puro porque su E no critica. IE da mucho AD, pero ese AD se diluye frente a la potencia de los On-Hits porcentuales y planos potenciados por Guinsoo. Pierdes ~20-30% de DPS teórico comparado con BotRK/Terminus.
2.  **Hexoptics C44:**
    *   *Motivo:* Similar a IE. Excelente para Jinx/Caitlyn, inútil para Kalista. El bonus de rango y kill-streak no compensa la falta de On-Hit synergy.
3.  **Kraken Slayer:**
    *   *Motivo:* Su pasiva de "tres disparos" es buena, pero compite directamente con la pasiva de Guinsoo (cada 3 golpes). Al tener ambos, la sincronización es imperfecta y pierdes valor. Además, Kraken no ofrece la defensa (MR/Tenacity) de Wit's End ni la penetración híbrida de Terminus.
4.  **Statikk Shiv:**
    *   *Motivo:* Buena alternativa para waveclear temprano/jungla, pero en Bot Lane, la consistencia de Runaan's + Guinsoo es superior en teamfights prolongados. Statikk es situacional (mejor si juegas jungla Kalista, algo raro pero posible).

---

## 4. RUNAS, HECHIZOS Y HABILIDADES

### Runas (Reforged System 7.3)
*   **Principal: Precisión (Precision)**
    *   **Lethal Tempo (Tiempo Letal):** *Discutido.* En 7.3, Lethal Tempo ha sido rebalanceado. Para Kalista, **Conqueror (Conquistador)** suele ser superior debido a la naturaleza de peleas largas y stacking de capas con sus múltiples hits rápidos.
        *   *Recomendación:* **Conqueror**. Cada hit aplica stack. Con Guinsoo, llegas a full stacks en 2-3 segundos. El heal y adaptive damage son vitales.
    *   **Triumph (Triunfo):** Sustain en kills/asists.
    *   **Legend: Alacrity (Alacridad):** Más AS = más dashes = más lanzas de E. Crucial.
    *   **Last Stand (Última Resistencia) o Coup de Grace (Golpe de Gracia):** Last Stand si te focusean mucho; Coup de Grace si ejecutas bajas.
*   **Secundaria: Inspiración (Inspiration)**
    *   **Magical Footwear:** Ahorra oro para comprar Guinsoo antes.
    *   **Cosmic Insight:** Reducción de CDs para usar E más seguido (reset de CD en kill).

*(Alternativa Anti-Dive: Resolver -> Bone Plating + Revitalize si el enemigo tiene mucho burst instantáneo).*

### Hechizos Invocadores
*   **Flash + Heal (Curación):** Estándar. Heal salva de bursts de assassins.
*   **Flash + Exhaust (Extenuación):** Si vas contra Vayne, Draven o campeones con mucha movilidad/sustain. Reduce su AS y daño.
*   **Ghost (Fantasma):** Situacional. Combina bien con la pasiva de reseteo de E si consigues kills, permitiéndote perseguir o escapar del repositioning. Pero Flash+Heal es más seguro para error humano.

### Orden de Habilidades
1.  **Q (Pierce):** Maxear primero. Es tu herramienta de poke, last hit y limpieza de waves. El daño crece significativamente.
2.  **E (Rend):** Maxear segundo. Es tu fuente principal de daño爆发 (burst) y slow.
3.  **W (Sentinel):** Punto al nivel 3 o 4 según necesidad de visión/passive proc.
4.  **R (Fate's Call):** Siempre al nivel disponible (6, 11, 16).

---

## 5. ESTILO DE JUEGO Y SINERGIAS

### Early Game (Nivel 1-5)
*   Usa **Q** para pokear al enemigo mientras farmeas minions.
*   Mantén la posición detrás de los minions aliados.
*   **Objetivo:** Llegar al nivel 6 con ventaja de oro para comprar componentes de Guinsoo.
*   **Cuidado:** Kalista es débil antes de tener ítems. Evita trades largos sin apoyo de tu support.

### Mid/Late Game (Teamfights)
*   **Posicionamiento:** Quédate al borde del rango máximo. Tu dash (Martial Poise) te permite entrar y salir constantemente.
*   **Prioridad de Objetivo:** Busca al Carry enemigo o al Assassin. Si están protegidos, usa **E** para ralentizarlos y acumular lanzas.
*   **Activación de W Pasiva:** Intenta que tu Oathsworn (aliado vinculado, usualmente Support o Top/Jungle que entra a pelear) golpee al mismo objetivo que tú. El 19% de vida máxima mágico es devastador contra tanques.
*   **Reset de E:** Si matas a alguien con E, recupera CD inmediatamente. Úsalo para saltar al siguiente objetivo o huir.

### Sinergias Clave con Suports
*   **Yuumi (Support):** Yuumi montada en Kalista proporciona sustain infinito y AS extra, potenciando aún más la velocidad de acumulación de lanzas de E y stacks de Guinsoo.
*   **Diana/Malphite (Frontline):** Sus ultimates agrupan enemigos. Kalista puede detonar E en todos ellos simultáneamente para un AoE masivo de daño y slow.

---

## 6. SUPUESTOS Y VERIFICACIÓN DE DATOS

*   **Fuente de Datos:** Parche 7.3 Oficial (21/09/2026) y wr-meta.com (25/09/2026).
*   **Modelo de DPS:** Calculado pre-mitigación. El daño real dependerá de la armadura/resistencias enemigas.