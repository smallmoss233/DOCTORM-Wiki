<!-- lang:zh-CN -->
# 103 型塔迪斯 / Type-103 TARDIS

![103tarids.png](assets/images/103tarids.png)

> **类型：** 人形塔迪斯 / 中立生物  
> **实体 ID：** `doctor_m:103_tardis`  
> **来源：** DOCTOR WHO 悖论派系衍生小说
> **生成地：** 主世界雪地生物群系、特兰泽洛维度  
> **相关进度：** 跨时空贸易、好的！成交！  
> **相关配置：** `103tardis_trade.json`

---

## 概述

**103 型塔迪斯**是一种人形化的塔迪斯。下文简称为 **103**。

在 **DOCTOR M** 中，103 生成于**雪地生物群系**，在**特兰泽洛维度**中生成概率更高。如果你想遇见这些有趣的人形塔迪斯，可以去**雪原**或**特兰泽洛维度**碰碰运气。

| 属性 | 数值 |
|---|---|
| **生命值** | 20 HP（10 颗心）。 |
| **移动速度** | 0.25。 |
| **攻击伤害** | 2 HP（1 颗心）。 |
| **跟随范围** | 24 格。 |
| **皮肤** | 生成时从列表中**随机抽取**。 |

---

## 生成机制

103 的生成由以下条件控制。

### 维度与概率

| 维度 | 生成概率 | 备注 |
|---|---|---|
| **主世界** | 8%。 | 仅限非海洋生物群系。 |
| **特兰泽洛** | 20%。 | 仅限非海洋生物群系。 |

### 生成限制

- **不在海洋生成**——所有海洋生物群系（含深海、冻洋等）均被排除。
- **必须在可站立的地面上**——使用 `MOTION_BLOCKING_NO_LEAVES` 高度图。
- **每次生成 1 只**——权重 2，数量 1~1。

### 皮肤

每只 103 生成时从皮肤列表中**随机抽取**一套：

- 每套皮肤自带**独立的显示名**。
- 支持 **Steve**（标准）和 **Alex**（纤细）模型。

---

## 通用机制

无论哪种性格，所有 103 都共享以下机制。

### 伤害减免

所有来袭伤害**减半**。

### 自然恢复

- 受到伤害 **5 秒**后开始回血。
- 每 **2 秒**恢复 **1 颗心**。

### 记忆系统

- 103 会记住攻击者的身份。
- 记忆持续 **30 秒**。

---

## 五种性格

每只 103 生成时**均匀随机**获得一种性格，决定它的行为模式、对话风格和反击方式。

| 性格 | 概率 | 简介 |
|---|---|---|
| **交易者（TRADER）** | **20%** | 中立友好；支持交易。 |
| **激进（AGGRESSIVE）** | **20%** | 主动攻击玩家；极度危险。 |
| **防御（DEFENSIVE）** | **20%** | 优先回避；被逼急才反击。 |
| **胆小（TIMID）** | **20%** | 极度懦弱；被动逃跑。 |
| **勇敢（BRAVE）** | **20%** | 保护玩家；主动攻击敌对生物。 |

> 💡 **提示：** 性格在生成时就已固定，不会随时间改变。你可以通过观察行为或对话来判断它的性格。

---

## 战斗输出

所有会主动战斗的 103（除胆小外）都用同一套战斗 AI：

| 情境 | 输出手段 |
|---|---|
| **目标在近战范围** | 直接近战攻击。 |
| **目标在远处，有视线** | 蓄力 10 tick → **连续发射 2 发 staser bolt（弹射物）**。 |

> 也就是说，**103 的主要输出来自弹射物**——只要你被它锁定，它就会一路追着你，边跑边朝你发射弹射物。

---

## 特殊反击

除了常规输出，103 被攻击时还会**执行一次特殊反击**。这才是它的“惩罚手段”：

| 特殊反击 | 效果 |
|---|---|
| **近战** | 直接对攻击者造成近战伤害。 |
| **高空抛掷** | 把玩家传送到空中 Y+60~100 处，附加**缓降**（5 秒）和**反胃**（8 秒）。 |
| **特兰泽洛传送** | 强制把玩家传送到 **doctor_m:trenzalore** 维度。 |
| **漩涡传送** | 把玩家传送到 **ait:time_vortex** 维度，附加**凋零**（5 秒）、**缓慢**（10 秒）、**虚弱**（10 秒）、**失明**（3 秒）。 |

> ⚠️ **注意：** **能量束不在特殊反击中**——权重表里有，但代码把它排除在抽取范围外。所以实际会触发的是上面四种。

> 特殊反击有 **5 秒冷却**。执行时 103 周围会出现传送门粒子，并播放末影人传送音效。

---

## 交易者（TRADER） — 20%

最常见的 103 形态之一，也是**唯一拥有交易系统**的性格。

### 行为

- **中立**：不会主动攻击任何生物。
- **交易**：右键查看每日交易列表；潜行 + 右键直接交易。
- **逃跑**：会从敌对生物身边缓慢逃离。
- **漫游**：活动范围大，会到处游荡。

### 被攻击时的反应链

| 攻击次数 | 反应 |
|---|---|
| 第 1 次 | 受伤反应 + 请求停战。 |
| 第 2 次 | **警告**（最后通牒）。 |
| 第 3 次 | **锁定玩家为目标**，追杀 60 秒（开始近战 + 弹射物输出）。 |

### 特殊反击偏好

| 反击方式 | 概率 |
|---|---|
| 近战 | 57%。 |
| 高空抛掷 | 29%。 |
| 特兰泽洛传送 | 11%。 |
| 漩涡传送 | 3%。 |

> 原权重表里还有能量束，但被代码排除了，所以实际概率按剩下的归一化。

> 🛒 **交易提示：** 交易者 103 每游戏日刷新一次交易列表。成功交易可获得成就 **“跨时空贸易”**。

---

## 激进（AGGRESSIVE） — 20%

最危险的 103 形态，极度敌对。

### 行为

- **主动索敌**：优先把玩家和敌对生物作为攻击目标。
- **无警告**：被攻击立刻锁定你。
- **漫游**：活动范围大，速度快。

### 被攻击时的反应链

| 攻击次数 | 反应 |
|---|---|
| 第 1 次 | **立即锁定目标**，追杀 60 秒。 |

> ⚠️ **警告：** 激进 103 **没有警告阶段**。第一下就会追着你打。

### 特殊反击偏好

| 反击方式 | 概率 |
|---|---|
| 高空抛掷 | 38%。 |
| 近战 | 31%。 |
| 漩涡传送 | 23%。 |
| 特兰泽洛传送 | 8%。 |

---

## 防御（DEFENSIVE） — 20%

防御型 103，更倾向于躲避威胁，而不是正面交锋。

### 行为

- **回避优先**：主动逃离敌对生物。
- **不主动攻击玩家**：只在被玩家攻击时反击。
- **保守**：漫游速度慢，活动范围小。

### 被攻击时的反应链

| 攻击次数 | 反应 |
|---|---|
| 第 1 次 | 受伤反应 + 请求停战。 |
| 第 2 次 | **警告**。 |
| 第 3 次 | **锁定目标**，追杀 60 秒。 |

### 特殊反击偏好

| 反击方式 | 概率 |
|---|---|
| 特兰泽洛传送 | 43%。 |
| 近战 | 29%。 |
| 高空抛掷 | 21%。 |
| 漩涡传送 | 7%。 |

> 🛡️ 防御型 103 最喜欢把敌人传送到**特兰泽洛维度**，利用环境困住对手。

---

## 胆小（TIMID） — 20%

极度懦弱的 103，对任何威胁的第一反应就是逃跑。

### 行为

- **见谁都跑**：玩家靠近 12 格内会逃跑；敌对生物靠近 10 格内也会逃。
- **最慢漫游**：移动速度只有 0.4；几乎不怎么移动。
- **无主动攻击**：不会锁定任何目标。

### 被攻击时的反应

| 攻击次数 | 反应 |
|---|---|
| 第 1 次 | 受伤反应 + **立即还击两发 staser bolt**。 |

> 😰 胆小 103 是唯一**只还击一次**的性格。它既不会锁定你，也不会用特殊反击——还你两发弹射物后就继续逃命。

---

## 勇敢（BRAVE） — 20%

正义感驱动的 103，会主动保护玩家免受敌对生物伤害。

### 行为

- **保护者**：主动攻击敌对生物，但不会无缘无故攻击玩家。
- **复仇**：被玩家攻击时会反击，但优先锁定怪物。
- **活跃**：漫游速度最快，非常活跃。

### 被攻击时的反应链

| 攻击次数 | 反应 |
|---|---|
| 第 1 次 | 受伤反应 + 请求停战。 |
| 第 2 次 | **警告**。 |
| 第 3 次 | **锁定目标**，追杀 60 秒。 |

### 特殊反击偏好

| 反击方式 | 概率 |
|---|---|
| 近战 | 46%。 |
| 高空抛掷 | 38%。 |
| 特兰泽洛传送 | 15%。 |
| 漩涡传送 | 8%。 |

> 🦁 勇敢 103 的特殊反击里近战占比最高——它更喜欢直接揍你。

---

## 交易系统

只有**交易者（TRADER）**拥有交易系统。

| 项目 | 说明 |
|---|---|
| **每日刷新** | 交易列表每游戏日自动刷新。 |
| **数据来源** | 从 `103tardis_trade.json` 数据包加载。 |
| **右键** | 查看欢迎消息和交易列表。 |
| **潜行 + 右键** | 提交手持物品进行交易。 |
| **成就奖励** | 首次成功交易可获得成就 **“跨时空贸易”**。 |

---

## 对话系统

每种性格都有**独立的对话文本**，会针对不同情境说不同的话：

| 情境 | 触发条件 |
|---|---|
| **受伤** | 被打时随机 30% 概率吐槽。 |
| **请求停战** | 第一次被玩家攻击时。 |
| **警告** | 第二次被玩家攻击时。 |
| **互动** | 非交易者性格被右键时。 |
| **欢迎** | 交易者被右键时。 |
| **反击** | 执行反击时（近战 / 高空 / 传送各有一句）。 |

> 103 说话时会带上自己的名字（皮肤显示名），比如 `[某某] 你完了！`

---

## 冷知识 / 备注

- 103 的**皮肤是随机抽取的**，每套皮肤自带独立显示名。
- 103 的**性格在生成时固定**，不会随时间改变。
- **激进 103 没有警告阶段**——第一下就会追着你打。
- **胆小 103 只还击一次**——还你两发弹射物后就继续逃命。
- **能量束虽然写在权重表里，但被代码排除了**，所以实际不会触发。
- **特殊反击有 5 秒冷却**，执行时会有传送门粒子和末影人传送音效。
- **交易者 103 是唯一有交易系统的性格**，交易列表每游戏日刷新。
- **103 的名字来自皮肤显示名**，所以每只 103 的名字都不一样。

<!-- lang:en -->
# Type-103 TARDIS / 103 型塔迪斯

![103tarids.png](assets/images/103tarids.png)

> **Type:** Humanoid TARDIS / Neutral creature  
> **Entity ID:** `doctor_m:103_tardis`  
> **Source:** DOCTOR WHO — Faction Paradox spin-off novels
> **Spawns in:** Overworld snowy biomes, Trenzalore dimension  
> **Related advancements:** Cross-Time Trade, Alright! Deal!  
> **Related config:** `103tardis_trade.json`

---

## Overview

The **Type-103 TARDIS** is a humanoid form of TARDIS. It's referred to below as **103** for short.

In **DOCTOR M**, 103s spawn in **snowy biomes**, and spawn more frequently in the **Trenzalore dimension**. If you want to meet these curious humanoid TARDISes, try your luck in a **Snowy Plains** or in the **Trenzalore dimension**.

| Attribute | Value |
|---|---|
| **Health** | 20 HP (10 hearts). |
| **Movement speed** | 0.25. |
| **Attack damage** | 2 HP (1 heart). |
| **Follow range** | 24 blocks. |
| **Skin** | **Randomly picked** from a list at spawn. |

---

## Spawn Mechanics

103 spawning is governed by the following conditions.

### Dimension & Chance

| Dimension | Spawn chance | Notes |
|---|---|---|
| **Overworld** | 8%. | Non-ocean biomes only. |
| **Trenzalore** | 20%. | Non-ocean biomes only. |

### Spawn Restrictions

- **Never spawns in oceans** — all ocean biomes (including deep ocean, frozen ocean, etc.) are excluded.
- **Must be on standable ground** — uses the `MOTION_BLOCKING_NO_LEAVES` heightmap.
- **Spawns 1 at a time** — weight 2, count 1~1.

### Skins

Each 103 picks a skin set **at random** from a list when it spawns:

- Each skin set comes with its **own display name**.
- Supports both **Steve** (classic) and **Alex** (slim) models.

---

## Shared Mechanics

Regardless of personality, all 103s share the following.

### Damage Reduction

All incoming damage is **halved**.

### Natural Regeneration

- Begins regenerating **5 seconds** after taking damage.
- Restores **1 heart** every **2 seconds**.

### Memory System

- 103s remember the identity of their attacker.
- The memory lasts **30 seconds**.

---

## The Five Personalities

Each 103 is assigned a personality **uniformly at random** when it spawns, determining its behavior, dialogue style, and counterattack method.

| Personality | Chance | Summary |
|---|---|---|
| **Trader (TRADER)** | **20%** | Neutral and friendly; supports trading. |
| **Aggressive (AGGRESSIVE)** | **20%** | Actively attacks players; extremely dangerous. |
| **Defensive (DEFENSIVE)** | **20%** | Prefers avoidance; only fights back when cornered. |
| **Timid (TIMID)** | **20%** | Extremely cowardly; passively flees. |
| **Brave (BRAVE)** | **20%** | Protects players; actively attacks hostile mobs. |

> 💡 **Tip:** Personality is fixed at spawn and never changes. You can figure out its personality by watching its behavior or dialogue.

---

## Combat Output

Every 103 that fights actively (except Timid) uses the same combat AI:

| Situation | Output |
|---|---|
| **Target in melee range** | Direct melee attack. |
| **Target far away, line of sight** | Charges 10 ticks → **fires 2 staser bolts in a row (projectiles)**. |

> In other words, **103's main damage comes from projectiles** — once it locks onto you, it will chase you down, firing bolts on the run.

---

## Special Counterattacks

Besides regular output, when a 103 is attacked it also performs a **special counterattack**. This is its real "punishment":

| Special counter | Effect |
|---|---|
| **Melee** | Deals melee damage directly to the attacker. |
| **High-altitude throw** | Teleports the player to Y+60~100 in the air, with **Slow Falling** (5 seconds) and **Nausea** (8 seconds). |
| **Trenzalore teleport** | Force-teleports the player to the **doctor_m:trenzalore** dimension. |
| **Vortex teleport** | Teleports the player to the **ait:time_vortex** dimension, with **Wither** (5 seconds), **Slowness** (10 seconds), **Weakness** (10 seconds), and **Blindness** (3 seconds). |

> ⚠️ **Note:** **Energy beam is not part of the special counterattack** — it's in the weight table, but the code excludes it from the draw. So the four above are what actually trigger.

> Special counterattacks have a **5-second cooldown**. When executed, portal particles appear around the 103, and the enderman teleport sound plays.

---

## Trader (TRADER) — 20%

One of the most common 103 forms, and the **only personality with a trading system**.

### Behavior

- **Neutral**: Never attacks any mob on its own.
- **Trading**: Right-click to view the daily trade list; sneak + right-click to trade directly.
- **Flees**: Slowly runs from hostile mobs.
- **Wanders**: Wide roaming range; wanders all over.

### Reaction Chain When Attacked

| Hits | Reaction |
|---|---|
| Hit 1 | Hurt reaction + requests a ceasefire. |
| Hit 2 | **Warning** (final ultimatum). |
| Hit 3 | **Locks onto the player**, chases for 60 seconds (melee + projectile output begins). |

### Special Counter Preferences

| Counter | Chance |
|---|---|
| Melee | 57%. |
| High-altitude throw | 29%. |
| Trenzalore teleport | 11%. |
| Vortex teleport | 3%. |

> The original weight table also included energy beam, but the code excludes it, so the actual probabilities are normalized across what remains.

> 🛒 **Trading tip:** A Trader 103 refreshes its trade list once per in-game day. A successful trade grants the achievement **"Cross-Time Trade"**.

---

## Aggressive (AGGRESSIVE) — 20%

The most dangerous 103 form, extremely hostile.

### Behavior

- **Actively hunts**: Prioritizes players and hostile mobs as targets.
- **No warning**: Locks onto you the moment it's attacked.
- **Wanders**: Wide roaming range, fast.

### Reaction Chain When Attacked

| Hits | Reaction |
|---|---|
| Hit 1 | **Immediately locks on**, chases for 60 seconds. |

> ⚠️ **Warning:** Aggressive 103 has **no warning stage**. It comes after you from the very first hit.

### Special Counter Preferences

| Counter | Chance |
|---|---|
| High-altitude throw | 38%. |
| Melee | 31%. |
| Vortex teleport | 23%. |
| Trenzalore teleport | 8%. |

---

## Defensive (DEFENSIVE) — 20%

A defensive 103 that prefers dodging threats over facing them head-on.

### Behavior

- **Avoidance first**: Actively flees from hostile mobs.
- **Doesn't attack players unprompted**: Only fights back when attacked by a player.
- **Conservative**: Slow roaming speed, small roaming range.

### Reaction Chain When Attacked

| Hits | Reaction |
|---|---|
| Hit 1 | Hurt reaction + requests a ceasefire. |
| Hit 2 | **Warning**. |
| Hit 3 | **Locks on**, chases for 60 seconds. |

### Special Counter Preferences

| Counter | Chance |
|---|---|
| Trenzalore teleport | 43%. |
| Melee | 29%. |
| High-altitude throw | 21%. |
| Vortex teleport | 7%. |

> 🛡️ A Defensive 103 loves to send enemies to the **Trenzalore dimension** and trap them there with the environment.

---

## Timid (TIMID) — 20%

An extremely cowardly 103 whose first reaction to any threat is to flee.

### Behavior

- **Runs from everything**: Flees if a player comes within 12 blocks; flees if a hostile mob comes within 10 blocks.
- **Slowest roamer**: Movement speed only 0.4; barely moves at all.
- **No active attacks**: Never locks onto any target.

### Reaction When Attacked

| Hits | Reaction |
|---|---|
| Hit 1 | Hurt reaction + **immediately fires back two staser bolts**. |

> 😰 Timid 103 is the only personality that **retaliates just once**. It neither locks onto you nor uses a special counter — after two projectiles, it just keeps fleeing.

---

## Brave (BRAVE) — 20%

A justice-driven 103 that actively protects players from hostile mobs.

### Behavior

- **Protector**: Actively attacks hostile mobs, but won't attack players without cause.
- **Revenge**: Fights back when attacked by a player, but prioritizes mobs.
- **Active**: Fastest roaming speed; very active.

### Reaction Chain When Attacked

| Hits | Reaction |
|---|---|
| Hit 1 | Hurt reaction + requests a ceasefire. |
| Hit 2 | **Warning**. |
| Hit 3 | **Locks on**, chases for 60 seconds. |

### Special Counter Preferences

| Counter | Chance |
|---|---|
| Melee | 46%. |
| High-altitude throw | 38%. |
| Trenzalore teleport | 15%. |
| Vortex teleport | 8%. |

> 🦁 Among Brave 103's special counters, melee has the highest share — it prefers to just punch you.

---

## Trading System

Only the **Trader (TRADER)** personality has a trading system.

| Item | Description |
|---|---|
| **Daily refresh** | The trade list auto-refreshes every in-game day. |
| **Data source** | Loaded from the `103tardis_trade.json` datapack. |
| **Right-click** | View the welcome message and trade list. |
| **Sneak + Right-click** | Submit the held item for trading. |
| **Achievement reward** | The first successful trade grants the achievement **"Cross-Time Trade"**. |

---

## Dialogue System

Each personality has its **own dialogue lines**, saying different things depending on the situation:

| Situation | Trigger |
|---|---|
| **Hurt** | 30% random chance to quip when hit. |
| **Request ceasefire** | On the first attack from a player. |
| **Warning** | On the second attack from a player. |
| **Interact** | When a non-Trader personality is right-clicked. |
| **Welcome** | When a Trader is right-clicked. |
| **Counter** | When performing a counterattack (one line each for melee / high-altitude / teleport). |

> 103s speak with their own name (the skin display name), e.g. `[So-and-so] You're done for!`

---

## Trivia / Notes

- A 103's **skin is picked at random**, and each skin set comes with its own display name.
- A 103's **personality is fixed at spawn** and never changes over time.
- **Aggressive 103 has no warning stage** — it comes after you from the very first hit.
- **Timid 103 retaliates only once** — after two projectiles, it just keeps fleeing.
- **Energy beam is written into the weight table but excluded by the code**, so it never actually triggers.
- **Special counterattacks have a 5-second cooldown**, and portal particles + enderman teleport sound play when executed.
- **Trader 103 is the only personality with a trading system**, with a trade list that refreshes every in-game day.
- **A 103's name comes from its skin display name**, so every 103 has a different name.