<!-- lang:zh-CN -->
# 特莉波卡的镰刀 / Tlipoca's Scythe

![tlipoca_scythe.png](assets/images/tlipoca_scythe.png)

> **类型：** 彩蛋武器
> **来源：** 尤格索托斯的庭院
> **获取方式：** 隐藏，需自行探索  
> **相关进度：** 一把镰刀？  
> **相关配置：** `tlipocaScytheDamage`、`tlipocaScytheAoeRadius`、`tlipocaScytheExecuteHealRatio` 等  
> **相关物品：** 时间钥匙（Slash 模式）

---

## 概述

> 🥚 **这是一把彩蛋武器。**
>
> 它不会出现在合成表里，也不会从战利品箱掉落。获得它？——**你得自己探索这个世界。**

**特莉波卡的镰刀**是一把收割灵魂的终极武器。延长攻击距离、强制百分比扣血、对亡灵造成毁灭性打击，还可以蓄力释放大范围的“灵魂收割”斩击。

> §c死与恶衔接黑暗之环。生与善敲响末日之钟。  
> §c我手持镰刀将万物收割。繁荣国土终将归于虚空。

---

## 基础属性

| 属性 | 数值 |
|---|---|
| **基础攻击伤害** | 20。 |
| **攻击速度** | 极慢（-3.6）。 |
| **攻击距离** | **+1.5 格**（比普通武器更远）。 |

---

## 被动效果

持有镰刀时，你的每一次攻击都会附带以下效果。

### 伤害加成

| 目标类型 | 伤害倍率 |
|---|---|
| **亡灵生物** | **×5.0**。 |
| **其他生物** | **×1.5**。 |

### 强制百分比扣血

每次攻击都会**额外**按目标的最大生命值扣除一定百分比，**无视护甲和减伤**。攻击力越高，扣血越多。敌人生命值上限越高，扣的也越多。

> 这个效果有 **1.5 秒冷却**，避免一次攻击重复触发。

### 处决机制

如果目标满足以下任一条件，会**直接处决**（血量归零）：

- 当前血量 **≤ 35% 最大生命值**。
- 单次攻击伤害 **≥ 目标当前血量**。

处决时的额外效果：

| 效果 | 说明 |
|---|---|
| **范围溅射** | 目标周围 **5 格**内的其他生物受到**等量强制伤害**（默认无视护甲）。 |
| **回复生命** | 恢复本次伤害 **60%** 的生命值。 |
| **回复饱食度** | 按回复量补充食物和饱和度。 |

普通命中（未处决）则恢复 **25%** 的生命值。

### 灵魂牵引

攻击命中后，目标周围 **3.5 格**内的其他生物会被**拉向玩家的方向**，力度随距离衰减。这让你可以“聚怪”，然后一刀全部收割。

### 击杀特效

用镰刀击杀任何生物时，会在尸体位置爆出**灵魂粒子和灵魂火粒子**，并播放凋灵死亡音效。

---

## 主动技能：灵魂收割

**右键**开始蓄力，松开右键释放。

### 蓄力过程

| 阶段 | 时长 | 效果 |
|---|---|---|
| **开始蓄力** | — | 播放信标充能音效，开始出现黑红粒子。 |
| **每 2 秒** | — | 提升一层蓄力等级（最高 **5 层**）。 |
| **每升一层** | — | 播放经验球拾取音效 + 环形火焰爆发。 |
| **蓄力期间** | — | **完全无敌**（免疫一切伤害）。 |
| **满层（5 层）** | 10 秒 | 屏幕出现**反色效果**。 |

蓄力期间动作栏会显示：

```text
§c☠ 灵魂收割 蓄力中... [ X / 5 ]
```

> ⚠️ 满层反色效果**可能会被优化模组创飞**，2.2 版本将会修复。

### 释放斩击

松开右键后，按当前蓄力层数释放：

| 层数 | 范围 | 伤害倍率 | 冷却 |
|---|---|---|---|
| **1 层** | 6 格 | ×1.8 | 5 秒。 |
| **2 层** | 12 格 | ×2.6 | 10 秒。 |
| **3 层** | 18 格 | ×3.4 | 20 秒。 |
| **4 层** | 24 格 | ×4.2 | 40 秒。 |
| **5 层** | **30 格** | **×5.0** | **60 秒**。 |

斩击形态是一个**前方扇形**（约 120 度），范围内的所有生物都会受到伤害并被击退。

### 释放反馈

- **粒子**：扇形黑红冲击波 + 地面环形烟雾。
- **音效**：凋灵生成音 + 凋灵死亡音。
- **突进**：释放瞬间角色会朝视线方向**猛冲一段距离**（层数越高越远）。

动作栏显示：

| 情况 | 提示 |
|---|---|
| 命中 | `§c☠ 灵魂收割 [层数:X] — 命中 Y 个目标` |
| 未命中 | `§7灵魂收割 [层数:X] — 未命中目标` |
| 冷却中 | `§c灵魂收割冷却中：X秒` |

> 💡 未命中时冷却**照常生效**。

---

## 使用技巧

- **满层释放是关键**：5 层的 30 格范围能覆盖整个屏幕视野，配合无敌蓄力可以硬吃 Boss 伤害后反打。
- **蓄力期间走位**：虽然无敌，但移动会打断蓄力吗？——**不会**。你可以边跑边蓄力。
- **对亡灵特攻**：亡灵生物受到 5 倍伤害 + 更高概率触发处决，对骷髅 / 僵尸 / 凋灵骷髅几乎是一刀一个。
- **聚怪再收割**：普通攻击的灵魂牵引可以把远处的怪拉到一起，然后一刀满层斩击全部清掉。
- **注意冷却**：5 层斩击冷却 60 秒，用之前想清楚值不值得。
- **处决回血**：被怪围住时故意压低血量打处决，可以瞬间回满血。

---

## 配置项

特莉波卡的镰刀的部分数值可在 `config/doctor_m.json` 中调整：

| 键 | 默认值 | 说明 |
|---|---|---|
| `tlipocaScytheDamage` | 30 | 百分比扣血触发间隔（tick）。 |
| `tlipocaScytheMultiplier` | 1.0 | 扣血倍率。 |
| `tlipocaScytheExtra` | 25.0 | 最低扣血（%）。 |
| `slashDamage` | 500.0 | 右键斩击基础伤害。 |
| `tlipocaScytheAoeRadius` | 5.0 | 伤害共享 / AoE 半径。 |
| `tlipocaScytheFoodBase` | 1 | 饥饿回复基础值。 |
| `tlipocaScytheSaturationMultiplier` | 0.5 | 饱和度系数。 |
| `tlipocaScytheExecuteHealRatio` | 0.6 | 处决吸血比例。 |
| `tlipocaScytheNormalHealRatio` | 0.25 | 普通吸血比例。 |
| `tlipocaScytheExecuteAoEDamageIgnoresArmor` | true | 处决 AoE 是否无视护甲 / 减伤。 |

---

## 相关进度

| 进度 | 标题 | 描述 |
|---|---|---|
| `advancements.doctor_m.tlipoca_scythe` | 一把镰刀？ | 现在我成为了死神，世间灵魂的收割者。 |

---

## 冷知识

- **彩蛋性质**：作为一把隐藏武器，它的强度刻意被设计得相当“越界”。

<!-- lang:en -->
# Tlipoca's Scythe / 特莉波卡的镰刀

![tlipoca_scythe.png](assets/images/tlipoca_scythe.png)

> **Type:** Easter egg weapon
> **Source:** Yog-Sothoth's Yard
> **Obtaining:** Hidden; you must find it yourself  
> **Related advancement:** A Scythe?  
> **Related config:** `tlipocaScytheDamage`, `tlipocaScytheAoeRadius`, `tlipocaScytheExecuteHealRatio`, etc.  
> **Related item:** Key to Time (Slash mode)

---

## Overview

> 🥚 **This is an easter egg weapon.**
>
> It won't show up in a crafting table, and it won't drop from loot chests. Getting it? — **You'll have to explore the world yourself.**

**Tlipoca's Scythe** is the ultimate soul-reaping weapon. It extends attack range, forces percentage-based damage, deals devastating blows to the undead, and can be charged to unleash a wide-area "Soul Harvest" slash.

> §cDeath and evil link the dark ring. Life and good toll the bell of doom.  
> §cI hold the scythe and reap all things. Prosperous lands shall all return to the void.

---

## Base Stats

| Attribute | Value |
|---|---|
| **Base attack damage** | 20. |
| **Attack speed** | Extremely slow (-3.6). |
| **Attack range** | **+1.5 blocks** (farther than normal weapons). |

---

## Passive Effects

While holding the scythe, every attack applies the following.

### Damage Bonus

| Target type | Damage multiplier |
|---|---|
| **Undead mobs** | **×5.0**. |
| **Other mobs** | **×1.5**. |

### Forced Percentage Damage

Every attack **additionally** drains a percentage of the target's max health, **ignoring armor and damage reduction**. The higher your attack damage, the more it drains. The higher the enemy's max health, the more it drains.

> This effect has a **1.5-second cooldown**, preventing it from triggering repeatedly from a single hit.

### Execution Mechanic

If a target meets either of the following, it is **executed outright** (health to zero):

- Current health **≤ 35% of max health**.
- Single-hit damage **≥ target's current health**.

Extra effects on execution:

| Effect | Description |
|---|---|
| **Area splash** | Other mobs within **5 blocks** of the target take **equal forced damage** (ignores armor by default). |
| **Health restore** | Restores **60%** of the damage dealt as health. |
| **Hunger restore** | Restores food and saturation based on the amount healed. |

A normal hit (not an execution) restores **25%** of the damage as health.

### Soul Pull

On a successful hit, other mobs within **3.5 blocks** of the target are **pulled toward the player**, with the force decaying by distance. This lets you "gather" mobs and then reap them all in one swing.

### Kill Effect

Killing any mob with the scythe bursts **soul particles and soul fire particles** at the corpse location and plays the Wither death sound.

---

## Active Skill: Soul Harvest

**Right-click** to begin charging; release right-click to fire.

### Charging Process

| Stage | Duration | Effect |
|---|---|---|
| **Begin charging** | — | Beacon charge sound plays; black and red particles begin to appear. |
| **Every 2 seconds** | — | Gains one charge level (max **5 levels**). |
| **Each level up** | — | XP orb pickup sound + ring of fire burst. |
| **While charging** | — | **Fully invulnerable** (immune to all damage). |
| **Max level (5)** | 10 seconds | A **color inversion effect** appears on screen. |

While charging, the action bar shows:

```text
§c☠ Soul Harvest charging... [ X / 5 ]
```

> ⚠️ The max-level color inversion **may be broken by optimization mods**; will be fixed in v2.2.

### Releasing the Slash

On releasing right-click, it fires based on the current charge level:

| Level | Range | Damage multiplier | Cooldown |
|---|---|---|---|
| **Level 1** | 6 blocks | ×1.8 | 5 seconds. |
| **Level 2** | 12 blocks | ×2.6 | 10 seconds. |
| **Level 3** | 18 blocks | ×3.4 | 20 seconds. |
| **Level 4** | 24 blocks | ×4.2 | 40 seconds. |
| **Level 5** | **30 blocks** | **×5.0** | **60 seconds**. |

The slash is a **forward fan** (about 120 degrees); all mobs inside take damage and are knocked back.

### Release Feedback

- **Particles**: A fan-shaped black and red shockwave + a ring of smoke on the ground.
- **Sound**: Wither spawn sound + Wither death sound.
- **Lunge**: On release, the character **lunges a short distance** in the view direction (farther at higher levels).

Action bar shows:

| Situation | Message |
|---|---|
| Hit | `§c☠ Soul Harvest [Level:X] — hit Y targets` |
| Miss | `§7Soul Harvest [Level:X] — no targets hit` |
| On cooldown | `§cSoul Harvest on cooldown: Xs` |

> 💡 The cooldown applies **normally even on a miss**.

---

## Tips

- **Max-level release is key**: Level 5's 30-block range covers the entire screen view, and with invulnerable charging you can eat boss damage and counterattack.
- **Move while charging**: Though invulnerable, does movement interrupt the charge? — **No.** You can run and charge at the same time.
- **Undead specialist**: Undead mobs take 5× damage + have a higher chance to trigger execution — against skeletons, zombies, and wither skeletons it's practically one-shot per swing.
- **Gather first, reap second**: Normal attacks' Soul Pull drags distant mobs together, then one max-level slash clears them all.
- **Watch the cooldown**: A level 5 slash has a 60-second cooldown — think before you commit.
- **Execution heals**: When surrounded, deliberately fight at low health to land an execution and instantly heal back to full.

---

## Config Options

Some values of Tlipoca's Scythe can be adjusted in `config/doctor_m.json`:

| Key | Default | Description |
|---|---|---|
| `tlipocaScytheDamage` | 30 | Percentage damage trigger interval (ticks). |
| `tlipocaScytheMultiplier` | 1.0 | Damage multiplier. |
| `tlipocaScytheExtra` | 25.0 | Minimum damage (%). |
| `slashDamage` | 500.0 | Right-click slash base damage. |
| `tlipocaScytheAoeRadius` | 5.0 | Damage sharing / AoE radius. |
| `tlipocaScytheFoodBase` | 1 | Hunger restore base value. |
| `tlipocaScytheSaturationMultiplier` | 0.5 | Saturation factor. |
| `tlipocaScytheExecuteHealRatio` | 0.6 | Execution lifesteal ratio. |
| `tlipocaScytheNormalHealRatio` | 0.25 | Normal lifesteal ratio. |
| `tlipocaScytheExecuteAoEDamageIgnoresArmor` | true | Whether execution AoE ignores armor / damage reduction. |

---

## Related Advancement

| Advancement | Title | Description |
|---|---|---|
| `advancements.doctor_m.tlipoca_scythe` | A Scythe? | Now I am become Death, the reaper of souls in the world. |

---

## Trivia

- **Easter egg nature**: As a hidden weapon, its power is deliberately designed to be rather "over the line".