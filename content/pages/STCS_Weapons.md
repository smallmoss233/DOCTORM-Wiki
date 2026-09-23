<!-- lang:zh-CN -->
# STCS 系列 / STCS Weapons

> **类型：** 能量-近战武器
> **来源：** DOCTOR M  
> **相关物品：** STC-07H“巨妖”、STC-08A“天图”、STC-09L“游侠”  
> **相关配置：** `stcsMinEnergyCost`、`stcsAoeRadius`  
> **完成度：** 🚧 模块系统将在 v2.2 实装

---

## 概述

**STCS** 是 DOCTOR M 中一套**武器体系**。三把武器共享同一套底层框架——**能量槽、剑核心、剑封锁**——但各自的技能和战斗风格完全不同。

| 型号 | 代号 | 定位 | 特点 |
|---|---|---|---|
| **STC-07H** | 巨妖 | 重装型 | 最重、最慢，但防御和伤害最强。 |
| **STC-08A** | 天图 | 标准型 | 各方面平衡，是三把中最通用的。 |
| **STC-09L** | 游侠 | 突袭型 | 最轻、最快，靠机动性取胜。 |

> 🚧 **本条目尚未完成。** STCS 系列武器的**模块系统**将在 **v2.2** 中更新。当前版本只包含基础框架和三个可用的核心型号。

---

## 基础属性对比

| 属性 | 巨妖 | 天图 | 游侠 |
|---|---|---|---|
| **基础攻击伤害** | 30 | 24 | 20 |
| **攻击速度** | 1.2 | 2.0 | 2.8 |
| **能量上限** | 10000 | 10000 | 10000 |
| **剑封锁减伤** | **90%** | 85% | 80% |
| **格挡能耗倍率** | 10 / 伤害 | 30 / 伤害 | **50 / 伤害** |

> 💡 **格挡能耗倍率越低，格挡越划算。** 巨妖每点伤害只消耗 10 能量，是三者中最省能量的；游侠每点伤害消耗 50 能量，格挡代价最高，所以非常考验操作。

---

## 通用机制

三把武器共享以下底层框架。

### 能量系统

| 项目 | 数值 |
|---|---|
| **最大能量** | 10000。 |
| **被动回复** | 每秒 **80** 点（未激活核心且未格挡时）。 |
| **核心消耗** | 每秒 **400** 点（激活剑核心时）。 |

能量槽通过**动作栏**实时显示：一条绿色进度条 + 当前数值。

动作栏信息包括：

```text
§b[STCS] §f<武器名>
§a●核心 §7●就绪
```

核心 / 技能状态会显示：

| 状态 | 显示 |
|---|---|
| 核心就绪 | `§7●就绪` |
| 核心激活 | `§a●核心` |
| 核心冷却 | `§c●核心<秒>s` |
| 技能就绪 | `§a●就绪` |
| 技能冷却 | `§c●技能<秒>s` |
| 正在格挡 | `§b[格挡]` |

### 剑核心

**按键激活 / 关闭剑核心**。开启后：

| 效果 | 数值 |
|---|---|
| **额外攻击伤害** | **+6**。 |
| **移动速度** | **+20%**（乘算）。 |
| **能量消耗** | 每秒 400 点。 |
| **激活条件** | 能量至少 **800** 点。 |

**核心激活时**，剑封锁的减伤直接拉满到 **100%**——你可以在核心持续期间完全免疫伤害，只要能量撑得住。

**能量耗尽时**核心自动关闭，并进入 **4 分钟冷却**。冷却结束后才能再次激活。

**未手持时核心自动关闭**——想用核心必须一直拿在手上（主手或副手）。

能量不足时尝试激活会显示：

```text
能量不足以维持剑核心，至少需要 800 能量
```

### 剑封锁

**潜行时自动生效**。受到伤害时，STCS 会**消耗能量抵消部分或全部伤害**。

| 步骤 | 说明 |
|---|---|
| 1 | 按 `伤害 × 能耗倍率` 计算能量消耗。 |
| 2 | 检查当前能量是否足够。 |
| 3 | 扣除能量。 |
| 4 | 计算实际减伤（核心激活 = 100%，否则 = 各自的剑封锁减伤）。 |
| 5 | 应用减伤后的伤害。 |

**减伤 ≥ 80% 时**会播放**盾牌格挡音效** + 暴击粒子 + 蜡光粒子。

**以下伤害无法被剑封锁抵挡**：

- `/kill` 类指令伤害。
- 虚空伤害。
- 任何标记为“绕过无敌”的伤害。

### AoE 伤害共享

**用 STCS 攻击任何敌人时**，被击中的敌人周围 **3 格**内的其他生物会受到**等量伤害**。

> 这意味着你打一个怪，旁边的怪也会跟着掉血——**聚怪后一把武器可以砍一片**。
> 这其实是为了弥补 STCS 系列武器没有横扫加上的：P

配置项：

| 键 | 默认值 | 说明 |
|---|---|---|
| `stcsAoeRadius` | 3.0 | STCS 范围伤害半径。 |
| `stcsMinEnergyCost` | 1 | 格挡最低能量消耗。 |

### 动态名称

三把武器的名字都有**动态颜色**循环：

| 型号 | 颜色循环 |
|---|---|
| **巨妖** | 紫 → 紫 → 橙。 |
| **天图** | 紫 → 紫 → 蓝。 |
| **游侠** | 紫 → 紫 → 红。 |

### Tooltip

STCS 武器的 Tooltip 会显示以下信息：

```text
§b[STCS] §f<武器名>
§7伤害：§c<数值>
§7攻速：§e<数值>
§7能量上限：§a<数值>
§7剑封锁减伤：§b<百分比>
§d套件：<套件名>
§5特殊：<特殊名>
```

未实装的模块槽位会在 Tooltip 里显示为空或缺省。

---

## STC-07H “巨妖” — 重装型

![stch.png](assets/images/stch.png)

**三把中最重、最慢，但防御和伤害最强的一把。**

> §7STC-08A 支援型，更重，更慢，但强防御与伤害。

### 技能：横扫斩

**按下技能键**释放一次大范围横扫。

| 属性 | 数值 |
|---|---|
| **范围** | 半径 **6 格**。 |
| **伤害** | **120 点**。 |
| **能量消耗** | **2000**。 |
| **冷却** | **15 秒**（核心激活时 -2 秒）。 |

**效果**：

- 周围所有敌人受到重伤。
- 每次命中都会**重置目标的受击无敌帧**（可以连续打）。
- 敌人身上爆出横扫 + 暴击粒子。
- 你周围 **36 个方向**生成一圈横扫粒子。
- 播放玩家横扫攻击音效。

> 巨妖的剑封锁减伤高达 90%，配合核心几乎是无敌状态。适合正面硬刚和 Boss 战。

---

## STC-08A “天图” — 标准型

![stca.png](assets/images/stca.png)

**各方面平衡，是三把中最通用的一把。**

> §7STCS 系列标准型号 STC-08A，各方面平衡，是 STC-09L 和 STC-07H 使用的标准平台，备受好评。

### 技能：冲击波

**按下技能键**释放一次范围击退。

| 属性 | 数值 |
|---|---|
| **范围** | 半径 **8 格**。 |
| **伤害** | **12 点**。 |
| **击退** | 水平 2.0 + 垂直 0.5。 |
| **能量消耗** | **400**。 |
| **冷却** | **20 秒**（核心激活时 -2 秒）。 |

**效果**：

- 周围所有敌人被击退 + 挑飞。
- 每个被击中的敌人爆出白色烟雾。
- 你自己周围出现爆炸 + 大量烟雾粒子。
- 播放爆炸音效。

> 天图的范围最大（8 格），是清场和脱身的最佳选择。虽然伤害低，但可以把整片敌人推开。

---

## STC-09L “游侠” — 突袭型

![stcl.png](assets/images/stcl.png)

**三把中最轻、最快，靠机动性取胜。**

> §7STC-08A 突袭型，轻量而不失强度。使用时牢记：专注，计划，攻击。

### 技能：瞬移突进

**按下技能键**向视线方向突进。

| 属性 | 数值 |
|---|---|
| **突进距离** | **6 格**。 |
| **能量消耗** | **200**。 |
| **冷却** | **1 秒**（核心激活时 -1 秒 → 几乎无冷却）。 |

**效果**：

- 瞬间传送到视线方向 6 格处（如果撞墙则停在墙前）。
- 起点 + 终点各爆出一圈**末地烛粒子** + 闪光 + 大量烟雾。
- 路径上绘制**传送门粒子 + 末地烛 + 云粒子**的拖尾。
- 屏幕触发**反色效果**（0.5 秒）。
- 播放末影人传送音效。
- **无摔落伤害**。

> 游侠的核心是**位移**。配合核心激活时几乎无冷却（1 秒 → 0 秒），可以实现连续闪现。适合风筝和拉扯。

---

## 模块系统（v2.2 预告）

模块系统的**框架已建**（套件 / 特殊 / 普通模块槽位），但具体内容将在 **v2.2** 实装。

预计将允许玩家：

| 模块类型 | 作用 |
|---|---|
| **套件模块** | 改变武器整体风格。 |
| **特殊模块** | 提供独特被动。 |
| **常规模块** | 最多安装 **4 个**，叠加小加成。 |

具体内容待 v2.2 更新后补充。

---

## 当前已知的未完成内容

| 功能 | 状态 |
|---|---|
| **模块系统** | 框架已建（套件 / 特殊 / 普通模块槽位），v2.2 实装。 |
| **格挡能耗倍率的配置化** | 目前硬编码在各自类里。 |
| **能量消耗的具体展示** | 动作栏只显示百分比进度条，不显示精确数值。 |

---

## 冷知识

- **STCS 是贡献者 TC-020 的创意哦~

<!-- lang:en -->
# STCS Series / STCS Weapons

> **Type:** Energy-melee weapons
> **Source:** DOCTOR M  
> **Related items:** STC-07H "Kraken", STC-08A "Sky Chart", STC-09L "Ranger"  
> **Related config:** `stcsMinEnergyCost`, `stcsAoeRadius`  
> **Completion:** 🚧 Module system arrives in v2.2

---

## Overview

**STCS** is a **weapon system** in DOCTOR M. All three weapons share the same underlying framework — **energy bar, blade core, blade lock** — but each has a completely different skill set and combat style.

| Model | Codename | Role | Features |
|---|---|---|---|
| **STC-07H** | Kraken | Heavy | Heaviest, slowest, but strongest defense and damage. |
| **STC-08A** | Sky Chart | Standard | Balanced all around; the most versatile of the three. |
| **STC-09L** | Ranger | Assault | Lightest, fastest; wins through mobility. |

> 🚧 **This entry is not yet complete.** The STCS series' **module system** will be added in **v2.2**. The current version only includes the base framework and three usable core models.

---

## Base Stat Comparison

| Attribute | Kraken | Sky Chart | Ranger |
|---|---|---|---|
| **Base attack damage** | 30 | 24 | 20 |
| **Attack speed** | 1.2 | 2.0 | 2.8 |
| **Max energy** | 10000 | 10000 | 10000 |
| **Blade lock damage reduction** | **90%** | 85% | 80% |
| **Block energy cost multiplier** | 10 / damage | 30 / damage | **50 / damage** |

> 💡 **The lower the block energy cost multiplier, the more efficient blocking is.** Kraken spends only 10 energy per point of damage — the most energy-efficient of the three. Ranger spends 50 energy per point of damage — the most expensive to block with, so it demands real skill.

---

## Shared Mechanics

All three weapons share the following underlying framework.

### Energy System

| Item | Value |
|---|---|
| **Max energy** | 10000. |
| **Passive regen** | **80** points per second (while the core is inactive and not blocking). |
| **Core drain** | **400** points per second (while the blade core is active). |

The energy bar is shown in real time on the **action bar**: a green progress bar + current value.

Action bar info includes:

```text
§b[STCS] §f<weapon name>
§a●Core §7●Ready
```

Core / skill states show as:

| State | Display |
|---|---|
| Core ready | `§7●Ready` |
| Core active | `§a●Core` |
| Core cooldown | `§c●Core<sec>s` |
| Skill ready | `§a●Ready` |
| Skill cooldown | `§c●Skill<sec>s` |
| Currently blocking | `§b[Blocking]` |

### Blade Core

**Press the keybind to activate / deactivate the blade core.** Once on:

| Effect | Value |
|---|---|
| **Bonus attack damage** | **+6**. |
| **Movement speed** | **+20%** (multiplicative). |
| **Energy drain** | 400 points per second. |
| **Activation requirement** | At least **800** energy. |

**While the core is active**, blade lock damage reduction is pushed straight to **100%** — you can be fully immune to damage for as long as the core lasts, as long as energy holds out.

**When energy runs out**, the core shuts off automatically and enters a **4-minute cooldown**. It can only be activated again after the cooldown ends.

**Unequipping the weapon also deactivates the core** — you must keep it in hand (main hand or off-hand) to use the core.

Trying to activate it without enough energy shows:

```text
Not enough energy to sustain the blade core. At least 800 energy is required.
```

### Blade Lock

**Activates automatically while sneaking.** When you take damage, STCS **consumes energy to offset part or all of the damage**.

| Step | Description |
|---|---|
| 1 | Compute energy cost as `damage × block cost multiplier`. |
| 2 | Check whether current energy is sufficient. |
| 3 | Deduct energy. |
| 4 | Compute the actual damage reduction (core active = 100%, otherwise = each weapon's blade lock reduction). |
| 5 | Apply the reduced damage. |

**When the reduction is ≥ 80%**, it plays a **shield block sound** + crit particles + wax-light particles.

**The following damage cannot be blocked by blade lock**:

- `/kill`-style command damage.
- Void damage.
- Any damage flagged as "bypasses invulnerability".

### AoE Damage Sharing

**When you attack any enemy with an STCS weapon**, other entities within **3 blocks** of the enemy hit take **equal damage**.

> This means hitting one mob also hurts the ones beside it — **gather mobs and one weapon clears the whole pack**.
> This was actually added to make up for the STCS series lacking a sweep attack :P

Config options:

| Key | Default | Description |
|---|---|---|
| `stcsAoeRadius` | 3.0 | STCS area damage radius. |
| `stcsMinEnergyCost` | 1 | Minimum block energy cost. |

### Dynamic Names

All three weapons have **dynamic color** cycles in their names:

| Model | Color cycle |
|---|---|
| **Kraken** | Purple → Purple → Orange. |
| **Sky Chart** | Purple → Purple → Blue. |
| **Ranger** | Purple → Purple → Red. |

### Tooltip

The STCS weapon tooltip shows the following info:

```text
§b[STCS] §f<weapon name>
§7Damage: §c<value>
§7Attack speed: §e<value>
§7Max energy: §a<value>
§7Blade lock reduction: §b<percent>
§dKit: <kit name>
§5Special: <special name>
```

Module slots that haven't been implemented show as blank or default in the tooltip.

---

## STC-07H "Kraken" — Heavy Type

![stch.png](assets/images/stch.png)

**The heaviest and slowest of the three, but strongest in defense and damage.**

> §7STC-08A support type — heavier, slower, but strong defense and damage.

### Skill: Sweeping Slash

**Press the skill key** to unleash a wide sweeping slash.

| Attribute | Value |
|---|---|
| **Range** | **6-block** radius. |
| **Damage** | **120**. |
| **Energy cost** | **2000**. |
| **Cooldown** | **15 seconds** (-2 seconds while the core is active). |

**Effects**:

- All nearby enemies take heavy damage.
- Each hit **resets the target's hit invulnerability frames** (so you can hit repeatedly).
- Sweep + crit particles burst from enemies.
- A ring of sweep particles is generated in **36 directions** around you.
- Plays the player sweep attack sound.

> Kraken's blade lock reduction is a hefty 90%, and paired with the core it's practically invincible. Ideal for head-on brawls and boss fights.

---

## STC-08A "Sky Chart" — Standard Type

![stca.png](assets/images/stca.png)

**Balanced all around; the most versatile of the three.**

> §7STCS standard model STC-08A — balanced on all fronts, and the standard platform used by both the STC-09L and STC-07H. Highly acclaimed.

### Skill: Shockwave

**Press the skill key** to unleash an area knockback.

| Attribute | Value |
|---|---|
| **Range** | **8-block** radius. |
| **Damage** | **12**. |
| **Knockback** | Horizontal 2.0 + Vertical 0.5. |
| **Energy cost** | **400**. |
| **Cooldown** | **20 seconds** (-2 seconds while the core is active). |

**Effects**:

- All nearby enemies are knocked back + launched.
- Each enemy hit bursts with white smoke.
- Explosion + a large cloud of smoke particles appears around you.
- Plays an explosion sound.

> Sky Chart has the largest range (8 blocks) — the best choice for clearing and escaping. The damage is low, but it can shove a whole crowd of enemies away.

---

## STC-09L "Ranger" — Assault Type

![stcl.png](assets/images/stcl.png)

**The lightest and fastest of the three, winning through mobility.**

> §7STC-08A assault type — light yet still strong. Remember when using it: Focus, Plan, Attack.

### Skill: Teleport Dash

**Press the skill key** to dash in your view direction.

| Attribute | Value |
|---|---|
| **Dash distance** | **6 blocks**. |
| **Energy cost** | **200**. |
| **Cooldown** | **1 second** (-1 second while the core is active → virtually no cooldown). |

**Effects**:

- Instantly teleport 6 blocks in your view direction (stops in front of a wall if you hit one).
- A ring of **end-rod particles** + flash + a burst of smoke at both the start and end points.
- A trail of **portal particles + end rods + cloud particles** is drawn along the path.
- The screen triggers a **color inversion effect** (0.5 seconds).
- Plays the enderman teleport sound.
- **No fall damage**.

> Ranger's core is **displacement**. With the core active, its cooldown is almost gone (1 second → 0), enabling chain blinking. Ideal for kiting and repositioning.

---

## Module System (v2.2 Preview)

The module system's **framework is in place** (kit / special / normal module slots), but the actual content will ship in **v2.2**.

It's expected to let players:

| Module type | Function |
|---|---|
| **Kit module** | Changes the weapon's overall style. |
| **Special module** | Provides a unique passive. |
| **Normal module** | Up to **4** can be installed, stacking small bonuses. |

Details will be added once v2.2 lands.

---

## Known Incomplete Content

| Feature | Status |
|---|---|
| **Module system** | Framework in place (kit / special / normal module slots); ships in v2.2. |
| **Configurable block cost multipliers** | Currently hardcoded in each weapon's class. |
| **Detailed energy display** | Action bar only shows a percentage bar, not exact values. |

---

## Trivia

- **STCS is contributor TC-020's idea~**