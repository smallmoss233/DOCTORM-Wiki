<!-- lang:zh-CN -->
# 音速起子扩展 / Sonic Screwdriver Plus

> **类型：** 物品扩展系统  
> **适用物品：** 音速起子（Sonic Screwdriver）  
> **来源：** DOCTOR M  
> **获取方式：** 103 型塔迪斯交易、玛丽安交易  
> **相关进度：** 非比寻常的科技、震耳欲聋、怎么会这样呢...

---

## 概述

**DOCTOR M** 对 AIT 的音速起子做了一套深度扩展：**晶体系统**和**升级模块**。

你可以通过替换起子前端的晶体改变它的模式组合，或安装模块调整它的能量特性。

> 💡 **核心概念：** 装上晶体后，起子原有的 **4 个模式**会被**替换掉 3 个**，组成新的模式组合。不是新增模式，而是“换一套武功”。

| 系统 | 作用 | 是否互斥 |
|---|---|---|
| **晶体系统** | 替换起子的模式组。 | 同时只能装一个晶体。 |
| **升级模块** | 改变起子的能量特性。 | 两个模块互斥，只能装一个。 |

> 💡你可以同时安装新模块和新水晶的。

---

## 音速起子模块获取方式

模块都只能通过以下渠道获得：

- **103 型塔迪斯交易**
- **玛丽安交易**

---

## 晶体系统

音速起子默认自带**泽顿碎片**作为晶体。你可以用其他晶体**替换**它，让起子切换模式组。

| 晶体 | 效果 |
|---|---|
| **泽顿碎片**（默认） | 保留 AIT 原生模式。 |
| **紫水晶碎片** | 切换为**引力模式组**。 |
| **充能泽顿水晶** | 切换为**激光模式组**。 |

### 安装方式

| 步骤 | 操作 |
|---|---|
| 1 | **副手**持晶体。 |
| 2 | **主手**持音速起子。 |
| 3 | **潜行 + 右键**。 |

安装成功后动作栏会显示“已安装晶体：XXX”。

> 💡 安装新晶体时，旧晶体会掉出来还给你，晶体本身**不会消耗**。

---

## 引力模式（紫水晶）

用**紫水晶碎片**替换晶体后，起子的模式变成：

| AIT 原模式 | 紫水晶模式 |
|---|---|
| 交互 | **引力牵引** |
| 过载 | **引力护盾** |
| 扫描 | **引力拖拽** |
| 塔迪斯 | *（不变）* |

### 引力牵引

**抓取一个实体，把它拉到你的面前。**

| 属性 | 数值 |
|---|---|
| **射程** | 10 格。 |
| **操作** | 对准一个实体右键。 |
| **行为** | 远距离直接瞬移到面前；近距离平滑拉过来。 |
| **朝向** | 目标保持朝向，不会翻滚。 |

### 引力护盾

**持续推开周围所有实体。**

| 属性 | 数值 |
|---|---|
| **范围** | 半径 3 格。 |
| **操作** | 按住右键持续生效。 |
| **行为** | 范围内生物被持续推离，保留一部分原有动量。 |

### 引力拖拽

**把自己朝视角方向拉过去。**

| 属性 | 数值 |
|---|---|
| **前摇** | 1.5 秒（30 tick）。 |
| **操作** | 按住右键。 |
| **前摇表现** | 缓慢减速、原地蓄力，伴随末地烛粒子。 |
| **后摇** | 以平滑速度被拉向视线方向，**没有摔落伤害**。 |

> 这个模式非常适合**跨越峡谷、翻越高墙或逃离敌人**。

---

## 激光模式（充能泽顿水晶）

用**充能泽顿水晶**替换晶体后，起子的模式变成：

| AIT 原模式 | 充能泽顿模式 |
|---|---|
| 交互 | **脉冲** |
| 过载 | **激光** |
| 扫描 | **冲击波** |
| 塔迪斯 | *（不变）* |

### 脉冲

**间歇性发射激光束。**

| 属性 | 数值 |
|---|---|
| **射程** | 48 格。 |
| **频率** | 每 **3 秒**发射一发。 |
| **伤害** | 10 点魔法伤害。 |
| **冷却** | 松开右键后 **3 秒**才能再次使用。 |
| **粒子** | 金黄色蜡光粒子。 |

> 冷却期间无法重新发射，动作栏会显示剩余时间。

### 激光

**持续发射光束。**

| 属性 | 数值 |
|---|---|
| **射程** | 48 格。 |
| **伤害** | 6 点魔法伤害（**每 tick 生效**）。 |
| **操作** | 按住右键持续输出。 |
| **能量消耗** | 每 tick 8 点。 |

**伤害极高**——连续照射 1 秒就是 120 点伤害。但能量消耗也很快，低容量起子撑不了多久。

### 冲击波

**瞬间推开周围所有生物。**

| 属性 | 数值 |
|---|---|
| **范围** | 半径 5 格。 |
| **力度** | 强击退 + 上抬。 |
| **冷却** | **5 秒**。 |
| **能量消耗** | **25 点**。 |
| **音效** | 爆炸声。 |

> 被围住时的脱身技能。冷却期间使用会提示剩余秒数。

---

## 升级模块

升级模块会**改变音速起子的能量特性**。两个模块**互斥**，只能装一个。

| 模块 | 效果 |
|---|---|
| **能量扩容模块** | 能量上限翻倍（**2000 点**）。 |
| **能量再生核心** | 能量上限降至 **500 点**，但**每 tick 恢复 0.5 点**（约每秒 10 点）。 |

### 选择建议

| 场景 | 推荐 |
|---|---|
| **爆发输出**（激光扫射、引力护盾） | **扩容模块**——更多能量，一鼓作气。 |
| **长期使用**（日常扫描、偶尔用） | **再生核心**——上限虽低，但基本不会用完。 |

### 安装 / 卸载方式

**安装：**

1. **副手**持升级模块。
2. **主手**持音速起子。
3. **潜行 + 右键**。

**卸载：**

1. **副手**持一个处于**交互模式**的音速起子。
2. **主手**持要卸载模块的音速起子。
3. **潜行 + 右键**。

> 卸载后旧模块会自动回到背包。如果背包满了会掉到地上。

---

## AIT 原生模式增强

DOCTOR M 对 AIT 原有的扫描、过载、塔迪斯、交互四个模式做了增强。

### 扫描模式

扫描模式现在能提供**三个维度的信息**。

#### 扫描方块（墙后探测）

扫描时，如果前方有实体方块，起子会**穿透它**探测后方：

| 结果 | 含义 |
|---|---|
| **空气** | 墙后是空气。 |
| **液体** | 墙后是水 / 岩浆。 |
| **空间（含植物）** | 墙后是可穿过的方块（草、藤蔓、火把等）。 |
| **空间** | 墙后是其他非固体。 |

#### 扫描区域（坐标 + 维度 + 时间）

扫描时会同时显示：

- 当前**方块坐标**（X Y Z）。
- 当前**维度 ID**。
- 当前**游戏内时间**（HH:MM 格式）。

#### 扫描实体（生物分类）

扫描生物时会显示它的**类别**：

| 类别 | 举例 |
|---|---|
| 幼年 / 亡灵 / 节肢 / 灾厄 | 僵尸、蜘蛛、掠夺者。 |
| 猫科 / 狼 / 马科 / 狐狸 / 熊猫 | 各自动物。 |
| 猪 / 羊 / 牛 / 鸡 / 兔 | 家畜。 |
| 村民 / 傀儡 / 雪傀儡 | 友善 NPC。 |
| 苦力怕 / 末影人 / 烈焰人 / 岩浆怪 / 史莱姆 | 敌对。 |
| 恶魂 / 潜影贝 / 末影龙 / 凋灵 / 守卫者 | Boss 及特殊。 |
| 敌对生物 / 友好生物 / 飞行生物 | 通用兜底。 |
| **塔迪斯** | 103 型塔迪斯会显示为“塔迪斯”。 |

#### 🥚 扫描彩蛋：过载玛丽安

**用扫描模式对准玛丽安·谨扫描**时，会触发一个特殊效果：

- 大量电火花 + 音波 + 火焰粒子。
- 故障音效。
- 动作栏显示：`§kacd悖论das因果asdw结合体`。
- 解锁成就 **“怎么会这样呢...”**。
- 起子进入 **3 秒冷却**。

> 玛丽安是模组里唯一能触发扫描过载的生物。

### 过载模式

DOCTOR M 增强了过载模式，对**坚守者**有特殊效果：

| 效果 | 数值 |
|---|---|
| **瞬间伤害** | 50 点。 |
| **硬控时长** | **10 秒**（禁用 AI）。 |
| **起子冷却** | **15 秒**。 |

触发时：音波 + 电火花粒子爆发，播放音效，解锁成就 **“震耳欲聋”**。

> 硬控期间坚守者不会做任何事——是脱身或输出的黄金窗口。

### 塔迪斯模式

**召唤塔迪斯失败时**，起子会报告：

- 你的当前位置（坐标 + 维度）。
- 塔迪斯的位置和**相对距离**。
- **方向箭头**（↑↗→↘↓↙←↖）告诉你塔迪斯在哪个方向。

如果塔迪斯**在其他维度**，会显示塔迪斯的维度 ID。

### 交互模式

**对准损坏的塔迪斯子系统**时，交互模式可以**修复它的耐久**：

| 项目 | 说明 |
|---|---|
| **单次修复量** | 最大耐久的 **2%~10%**。 |
| **触发条件** | 子系统耐久未满。 |
| **反馈** | 音效 + 附魔粒子。 |
| **耐久已满** | 播放提示音，不消耗。 |

> 不消耗起子耐久，但常规使用会消耗起子的能量。

---

## 模式替换规则

这是理解晶体系统的关键。

| 晶体 | 模式 1 | 模式 2 | 模式 3 | 模式 4 |
|---|---|---|---|---|
| **泽顿碎片** | 交互 | 过载 | 扫描 | 塔迪斯 |
| **紫水晶碎片** | 引力牵引 | 引力护盾 | 引力拖拽 | 塔迪斯 |
| **充能泽顿水晶** | 脉冲 | 激光 | 冲击波 | 塔迪斯 |

> **塔迪斯模式在所有晶体下都保留**——无论装什么晶体，第 4 个模式始终是塔迪斯模式。

---

## 相关进度

| 进度 | 标题 | 描述 |
|---|---|---|
| `advancements.doctor_m.deafening` | 震耳欲聋 | 用音速起子过载模式痛击坚守者！ |
| `advancements.doctor_m.scan_overload` | 怎么会这样呢... | 扫描到一个让音速起子难以理解的存在。 |
| `advancements.doctor_m.vortex_manipulator` | 非比寻常的科技 | 小心使用，不要成为第二个安德森少校。 |

---

## 冷知识

- 晶体系统是 AIT2 的功能，所以 DOCTOR M 能让你提前玩到 AIT2 （bushi）。

<!-- lang:en -->
# Sonic Screwdriver Plus / 音速起子扩展

> **Type:** Item expansion system  
> **Applies to:** Sonic Screwdriver  
> **Source:** DOCTOR M  
> **Obtaining:** Type-103 TARDIS trade, Marian trade  
> **Related advancements:** Unusual Technology, Deafening, How Did This Happen...

---

## Overview

**DOCTOR M** gives AIT's Sonic Screwdriver a deep expansion: a **crystal system** and **upgrade modules**.

You can swap the crystal in the screwdriver's tip to change its mode set, or install modules to tune its energy profile.

> 💡 **Core concept:** Once a crystal is installed, **3 of the screwdriver's 4 modes** are **replaced**, forming a new mode set. It's not adding modes — it's swapping out the whole moveset.

| System | Function | Mutually exclusive? |
|---|---|---|
| **Crystal system** | Replaces the screwdriver's mode set. | Only one crystal can be installed at a time. |
| **Upgrade modules** | Changes the screwdriver's energy profile. | The two modules are mutually exclusive; only one can be installed. |

> 💡 You can install a new module and a new crystal at the same time.

---

## Obtaining Sonic Screwdriver Modules

Modules can only be obtained from the following sources:

- **Type-103 TARDIS trade**
- **Marian trade**

---

## Crystal System

The Sonic Screwdriver comes with a **Zeiton Shard** as its default crystal. You can **replace** it with other crystals to switch the screwdriver's mode set.

| Crystal | Effect |
|---|---|
| **Zeiton Shard** (default) | Keeps AIT's vanilla modes. |
| **Amethyst Shard** | Switches to the **gravitational mode set**. |
| **Charged Zeiton Crystal** | Switches to the **laser mode set**. |

### Installation

| Step | Action |
|---|---|
| 1 | Hold the crystal in your **off-hand**. |
| 2 | Hold the Sonic Screwdriver in your **main hand**. |
| 3 | **Sneak + Right-click**. |

On success, the action bar shows "Crystal installed: XXX".

> 💡 When installing a new crystal, the old one pops out and is returned to you. The crystal itself is **not consumed**.

---

## Gravitational Mode (Amethyst)

After replacing the crystal with an **Amethyst Shard**, the screwdriver's modes become:

| AIT vanilla mode | Amethyst mode |
|---|---|
| Interact | **Gravitational Drag** |
| Overload | **Gravitational Shielding** |
| Scan | **Gravitational Swap** |
| TARDIS | *(unchanged)* |

### Gravitational Drag

**Grabs an entity and pulls it right in front of you.**

| Attribute | Value |
|---|---|
| **Range** | 10 blocks. |
| **Action** | Right-click on a target entity. |
| **Behavior** | At long range the target teleports straight to you; at close range it's pulled in smoothly. |
| **Facing** | The target keeps its orientation — no tumbling. |

### Gravitational Shielding

**Continuously pushes all nearby entities away.**

| Attribute | Value |
|---|---|
| **Range** | 3-block radius. |
| **Action** | Hold right-click to keep it active. |
| **Behavior** | Mobs inside the radius are continuously pushed away, retaining some of their existing momentum. |

### Gravitational Swap

**Pulls yourself toward where you're looking.**

| Attribute | Value |
|---|---|
| **Wind-up** | 1.5 seconds (30 ticks). |
| **Action** | Hold right-click. |
| **Wind-up visual** | Slow down, charge in place, with end-rod particles. |
| **Launch** | You're pulled smoothly in your view direction — **no fall damage**. |

> This mode is excellent for **crossing ravines, scaling walls, or escaping enemies**.

---

## Laser Mode (Charged Zeiton Crystal)

After replacing the crystal with a **Charged Zeiton Crystal**, the screwdriver's modes become:

| AIT vanilla mode | Charged Zeiton mode |
|---|---|
| Interact | **Pulse** |
| Overload | **Laser** |
| Scan | **Push** |
| TARDIS | *(unchanged)* |

### Pulse

**Fires a laser bolt intermittently.**

| Attribute | Value |
|---|---|
| **Range** | 48 blocks. |
| **Rate** | One shot every **3 seconds**. |
| **Damage** | 10 magic damage. |
| **Cooldown** | **3 seconds** after releasing right-click before it can be used again. |
| **Particles** | Golden wax-light particles. |

> During cooldown you can't re-fire, and the action bar shows the remaining time.

### Laser

**Fires a continuous beam.**

| Attribute | Value |
|---|---|
| **Range** | 48 blocks. |
| **Damage** | 6 magic damage (**applied every tick**). |
| **Action** | Hold right-click to keep firing. |
| **Energy drain** | 8 points per tick. |

**Extremely high damage** — one full second of sustained fire is 120 damage. But the drain is heavy, and low-capacity screwdrivers can't keep up for long.

### Push

**Instantly shoves all nearby mobs away.**

| Attribute | Value |
|---|---|
| **Range** | 5-block radius. |
| **Force** | Strong knockback + upward lift. |
| **Cooldown** | **5 seconds**. |
| **Energy cost** | **25 points**. |
| **Sound** | Explosion. |

> A panic button for when you're surrounded. Using it during cooldown shows the remaining seconds.

---

## Upgrade Modules

Upgrade modules **change the Sonic Screwdriver's energy profile**. The two modules are **mutually exclusive**; only one can be installed.

| Module | Effect |
|---|---|
| **Energy Upgrade Module** | Doubles the energy cap (**2000 points**). |
| **Regeneration Core** | Drops the energy cap to **500 points**, but regenerates **0.5 points per tick** (about 10 per second). |

### Choosing Between Them

| Situation | Recommendation |
|---|---|
| **Burst output** (laser sweeping, gravitational shielding) | **Upgrade Module** — more energy, go all-out in one go. |
| **Long-term use** (daily scanning, occasional use) | **Regeneration Core** — lower cap, but you'll basically never run dry. |

### Install / Uninstall

**Install:**

1. Hold the upgrade module in your **off-hand**.
2. Hold the Sonic Screwdriver in your **main hand**.
3. **Sneak + Right-click**.

**Uninstall:**

1. Hold a Sonic Screwdriver in **Interact mode** in your **off-hand**.
2. Hold the Sonic Screwdriver you want to remove the module from in your **main hand**.
3. **Sneak + Right-click**.

> After uninstalling, the old module automatically returns to your inventory. If your inventory is full it drops on the ground.

---

## Enhancements to AIT's Vanilla Modes

DOCTOR M enhances AIT's four original modes: Scan, Overload, TARDIS, and Interact.

### Scan Mode

Scan mode now provides information across **three dimensions**.

#### Scan Blocks (Wall Detection)

When scanning, if there's a solid block in front of you, the screwdriver **penetrates it** and probes what's behind:

| Result | Meaning |
|---|---|
| **Air** | Air behind the wall. |
| **Liquid** | Water / lava behind the wall. |
| **Space (with plants)** | A passable block behind the wall (grass, vines, torches, etc.). |
| **Space** | Other non-solid blocks behind the wall. |

#### Scan Region (Coordinates + Dimension + Time)

Scanning also shows:

- The current **block coordinates** (X Y Z).
- The current **dimension ID**.
- The current **in-game time** (HH:MM format).

#### Scan Entities (Mob Classification)

Scanning a mob shows its **category**:

| Category | Examples |
|---|---|
| Baby / Undead / Arthropod / Illager | Zombies, spiders, pillagers. |
| Feline / Wolf / Equine / Fox / Panda | Various animals. |
| Pig / Sheep / Cow / Chicken / Rabbit | Livestock. |
| Villager / Golem / Snow Golem | Friendly NPCs. |
| Creeper / Enderman / Blaze / Magma Cube / Slime | Hostile. |
| Ghast / Shulker / Ender Dragon / Wither / Guardian | Bosses and specials. |
| Hostile mob / Passive mob / Flying mob | Generic fallbacks. |
| **TARDIS** | The Type-103 TARDIS shows as "TARDIS". |

#### 🥚 Scan Easter Egg: Overloading Marian

**Scanning Marian.Jin with Scan mode** triggers a special effect:

- A burst of electric sparks + sonic + fire particles.
- Glitch sound.
- Action bar shows: `§kacd悖论das因果asdw结合体`.
- Unlocks the achievement **"How Did This Happen..."**.
- The screwdriver enters a **3-second cooldown**.

> Marian is the only creature in the mod that can trigger a scan overload.

### Overload Mode

DOCTOR M enhances Overload mode with a special effect against the **Warden**:

| Effect | Value |
|---|---|
| **Instant damage** | 50 points. |
| **Hard CC duration** | **10 seconds** (AI disabled). |
| **Screwdriver cooldown** | **15 seconds**. |

On trigger: a burst of sonic + electric spark particles, a sound effect, and unlocking the achievement **"Deafening"**.

> While the Warden is hard-CC'd it does nothing at all — a golden window to escape or unload damage.

### TARDIS Mode

**When TARDIS summoning fails**, the screwdriver reports:

- Your current position (coordinates + dimension).
- The TARDIS's position and **relative distance**.
- A **direction arrow** (↑↗→↘↓↙←↖) pointing toward the TARDIS.

If the TARDIS is **in another dimension**, its dimension ID is shown.

### Interact Mode

**When pointed at a damaged TARDIS subsystem**, Interact mode can **repair its durability**:

| Item | Description |
|---|---|
| **Repair per use** | **2%–10%** of max durability. |
| **Trigger condition** | Subsystem durability is not full. |
| **Feedback** | Sound effect + enchantment particles. |
| **Durability full** | Plays a notify sound; nothing is consumed. |

> Doesn't consume the screwdriver's durability, but regular use does consume the screwdriver's energy.

---

## Mode Replacement Rules

This is the key to understanding the crystal system.

| Crystal | Mode 1 | Mode 2 | Mode 3 | Mode 4 |
|---|---|---|---|---|
| **Zeiton Shard** | Interact | Overload | Scan | TARDIS |
| **Amethyst Shard** | Gravitational Drag | Gravitational Shielding | Gravitational Swap | TARDIS |
| **Charged Zeiton Crystal** | Pulse | Laser | Push | TARDIS |

> **TARDIS mode is preserved across all crystals** — no matter which crystal is installed, the 4th mode is always TARDIS mode.

---

## Related Advancements

| Advancement | Title | Description |
|---|---|---|
| `advancements.doctor_m.deafening` | Deafening | Smash the Warden with the Sonic Screwdriver's Overload mode! |
| `advancements.doctor_m.scan_overload` | How Did This Happen... | Scanned an existence the Sonic Screwdriver cannot comprehend. |
| `advancements.doctor_m.vortex_manipulator` | Unusual Technology | Use it carefully — don't become the second Major Anderson. |

---

## Trivia

- The crystal system is an AIT2 feature, so DOCTOR M lets you play AIT2 early (not really).