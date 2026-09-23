<!-- lang:zh-CN -->
# 太空大改 2.0 / Space Overhaul 2.0

> **类型：** 太空生存
> **相关物品：** 宇航服、氧气罐、氧气补充机、水下制氧机、制氧机、呼吸器  
> **相关配置：** `oxygenTankMaxOxygen`、`spacesuitMaxOxygen`、`oxygenatorMaxRadius` 等  
> **相关进度：** 这真的不是保温杯...、你把这玩意吃了？！

---

## 概述

**DOCTOR M** 对 AIT 的太空系统做了一次彻底重写：**氧气管理**、**宇航服**、**氧气罐**、**制氧设备**、**真空进食**全部整合成一套统一系统。

> 💡 **核心思路：** AIT 原有的氧气逻辑被 DOCTOR M 完整接管。所有氧气存储、消耗、恢复都走同一套 `OxygenSystem`，不同物品只是容量不同。

| 模块         | 作用 |
|------------|---|
| **宇航服增强**  | 太空探索的核心装备，自带氧气储备。 |
| **氧气罐**    | 可携带的氧气储备，用来给宇航服补氧。 |
| **氧气补充机**  | 方块，瞬间给氧气装备充满。 |
| **水下制氧机**  | 方块，为周围玩家提供水下呼吸。 |
| **制氧机增强**  | 方块，为整个封闭房间供氧。 |
| **真空进食惩罚** | 无氧环境中吃东西会消耗氧气。 |
| **呼吸器增强**  | 减缓氧气消耗。 |

---

## 氧气系统

### 宇航服氧气

![htf.png](assets/images/htf.png)

**宇航服胸甲**在 DOCTOR M 当中最大的改动就是删除了自动恢复氧气的功能。

| 属性 | 数值 |
|---|---|
| **最大容量** | 1200 L。 |
| **水下消耗** | 每 **2 秒**消耗 0.5 L。 |
| **太空消耗** | 每 **3 秒**消耗 1 L。 |

**无氧环境下**宇航服氧气耗尽 → 获得**凋零**效果。  
**有氧环境**下宇航服停止消耗并自动去除凋零。

> 相比于AIT原版， DOCTOR M 其实是给宇航服削弱了😈

### 屏幕 HUD

![guihud.png](assets/images/guihud.png)

和 AIT 原版相比，现在佩戴宇航服头盔 + 胸甲时，屏幕左上角显示两个信息更有用：

| 位置 | 内容 |
|---|---|
| **第 1 行** | 环境状态（绿色“有氧”/ 红色“无氧”）。 |
| **第 2 行** | 当前宇航服氧气量（如 `842.3L / 1200L`）。 |

**环境判定**考虑了以下因素：

| 因素 | 判定 |
|---|---|
| **普通维度** | 默认有氧。 |
| **无氧星球** | 无氧。 |
| **塔迪斯维度** | 始终有氧。 |
| **氧合器效果** | 临时提供有氧环境。 |
| **溺水 / 头部卡方块** | **强制判定为无氧**。 |
| **水下** | 强制判定为无氧。 |

> 💡 “头部卡方块”会强制判定为无氧。

### 氧气警告

宇航服氧气不足时，会在**动作栏**发出分级别警告：

| 氧气占比 | 警告间隔 |
|---|---|
| **< 50%** | 每 30 秒一次。 |
| **< 20%** | 每 5 秒一次。 |
| **< 5%** | 每 1 秒一次。 |
| **= 0%** | 只发一次。 |

**氧气回升时**警告会自动重置——回到 50% 以上就彻底安静，即使之后再次下降也会重新开始警告。

---

## 氧气罐

![oxygen_tank.png](assets/images/oxygen_tank.png)

**氧气罐**是可携带的氧气储备，用来给宇航服补氧，也是原版 AIT 太空当中所缺失的重要内容。

### 四种型号

| 型号 | 容量 | 相对基础 | 特点 |
|---|---|---|---|
| **普通氧气罐** | 1200 L | ×1 | 基础型号。 |
| **高级氧气罐** | **3600 L** | ×3 | 体积更小，容量更大。 |
| **超级氧气罐** | **18000 L** | ×15 | 太空中最奢侈的氧气瓶。 |
| **喷气氧气罐** | 1200 L | ×1 | 可以当喷气背包使用。 |

> 高级氧气罐容量 = 普通 × 3。  
> 超级氧气罐容量 = 高级 × 5 = 普通 × 15。

### 使用方式

**手持氧气罐 + 右键** → 松开：

| 情况 | 结果 |
|---|---|
| **穿宇航服胸甲 + 短按** | 从氧气罐向宇航服转移氧气。 |
| **穿宇航服胸甲 + 长按 5 秒** | ⚠️ 尝试食用氧气罐（见下方彩蛋）。 |
| **没穿宇航服** | 提示“请先穿上宇航服胸甲”。 |
| **氧气罐为空** | 提示“氧气罐已空”。 |
| **宇航服已满** | 提示“宇航服氧气已满”。 |

**每次转移量**：100 L（可配置）。

### 🥚 彩蛋：食用氧气罐

如果你在**极度饥饿**（饱食度 ≤ 6）、**或**处于**力量**效果下、**或**处于**饥饿**效果下，同时**长按右键 5 秒**，你会……

**把这罐压缩空气当压缩饼干吞下去。**

效果：

| 效果 | 时长 |
|---|---|
| **抗性提升 II** | 30 秒。 |
| **饥饿 II** | 30 秒。 |
| **虚弱 I** | 30 秒。 |
| **恢复 10 点饱食度** | 立即。 |

同时解锁成就 **“你把这玩意吃了？！”**。

> 如果你只是长按 5 秒但没有满足条件，会解锁另一个成就 **“这真的不是保温杯...”**。

### 喷气氧气罐

**喷气氧气罐**是一个会消耗氧气来推动你的特殊氧气罐。

| 属性 | 数值 |
|---|---|
| **前摇** | 0.5 秒（10 tick）。 |
| **推力强度** | 0.5。 |
| **惯性保留** | 72%。 |
| **重力补偿** | 0.12。 |
| **最大水平速度** | 8。 |
| **最大垂直速度** | 6。 |
| **氧气消耗** | 每 tick 1 L。 |

**操作方式**：按住右键持续飞行，松开停止。

- 飞行中会生成火焰 + 烟雾粒子，每 0.5 秒播放一次烈焰人发射音效。
- 松开右键时播放烟花音效。
- **前摇阶段**（前 10 tick）会缓慢减速并蓄力，之后才正式开始加速。

> 喷气氧气罐把宝贵的氧气当助推剂烧——在太空作为一个氧气瓶，这本身就是一种奢侈。

---

## 制氧设备

### 氧气补充机

![oxygen_charger_front.png](assets/images/oxygen_charger_front.png)

**氧气补充机**是一台可以瞬间给氧气装备充满氧气的方块。

| 属性 | 数值 |
|---|---|
| **冷却时间** | **32 秒**。 |
| **支持物品** | 氧气罐、高级氧气罐、超级氧气罐、喷气氧气罐、宇航服胸甲。 |

**使用方式**：手持可充氧物品 + 右键 → **立即充满**。

冷却期间再次使用会提示剩余秒数。

### 水下制氧机

![underwater_oxygen_generator_front.png](assets/images/underwater_oxygen_generator_front.png)

**水下制氧机**有两种工作模式。

#### 水下模式

当方块周围 6 面**至少有 1 面是水**时，自动为周围 **5 格**内的玩家提供**水下呼吸**效果。

**无需消耗任何资源。**

#### 陆地模式

当方块周围**没有水**时，需要**手动加水**：

| 操作 | 效果 |
|---|---|
| **手持水桶右键** | 加水，获得 **4 次充能配额**。 |
| **最大配额** | 16 次。 |
| **每次充能消耗** | 1 次配额。 |

陆地模式下充能：

- **满充**（氧气瓶直接充满）：消耗 **1 次配额**。
- **部分充能**（补充 25%）：也是消耗 **1 次配额**。

> 水下模式全免费，陆地模式要花水。**能放水下就放水下**。

### 制氧机增强

**制氧机**现在不再能给墙外的生物供氧，它的算法被优化了！

| 属性 | 数值 |
|---|---|
| **最大供氧半径** | 48 格。 |
| **开放空间有效半径** | 3 格。 |
| **最小有效房间体积** | 10 个空气方块。 |

**工作原理：**

1. 制氧机对相邻的空气方块做**洪泛填充**，找出整个**连通空间**。
2. 如果空间在 **48 格半径内完全封闭** → 判定为**房间**，给房间内所有生物供氧。
3. 如果空间**超出 48 格仍未封闭** → 判定为**开放空间**，只保留制氧机周围 **3 格**的小范围供氧。

**多台制氧机可以合并**：如果两台制氧机的房间**共享空气方块**，它们会合并成一个大房间，共享供氧范围。

> 依然是对比 AIT 原版，氧气机算是被狠狠砍了一刀。

---

## 真空进食

在**无氧环境**中吃东西 → **会消耗宇航服氧气**。

| 属性 | 数值 |
|---|---|
| **每次进食消耗** | **100 L 氧气**。 |
| **判定窗口** | 10 秒（从开始进食算起）。 |

> “孩子，谁告诉你太空可以打开面罩吃东西的？！”

**触发条件**：你在无氧环境 + 没有氧合器效果 + 不是创造模式 + 吃的东西是**食物或饮料**。

进食动作开始时记录时间，实际完成进食时扣氧气。如果中间被打断超过 10 秒则不扣。

---

## 呼吸器

**呼吸器被增强为**一件可以**减缓氧气消耗**的装备。

> 呼吸器的实现细节暂未在本文档中展开。

---

## 配置项

太空系统的部分数值可在 `config/doctor_m.json` 中调整：

### 氧气罐

| 键 | 默认值 | 说明 |
|---|---|---|
| `oxygenTankMaxOxygen` | 1200.0 | 普通氧气罐容量。 |
| `oxygenTankTransferRate` | 100.0 | 每次给宇航服补氧的转移量。 |
| `oxygenTankFoodThreshold` | 6 | 饱食度阈值（≤ 此值视为极低）。 |
| `oxygenTankHoldTicksForAchievement` | 100 | 触发食用彩蛋所需长按 tick。 |
| `advancedOxygenTankCapacityMultiplier` | 3.0 | 高级氧气罐容量倍率。 |
| `superOxygenTankCapacityMultiplier` | 5.0 | 超级氧气罐基于高级的容量倍率。 |
| `jetOxygenTankThrustStrength` | 0.5 | 喷气推力强度。 |
| `jetOxygenTankInertia` | 0.72 | 喷气惯性保留。 |
| `jetOxygenTankGravityCompensation` | 0.12 | 喷气重力补偿。 |
| `jetOxygenTankMaxSpeed` | 8.0 | 喷气最大水平速度。 |
| `jetOxygenTankMaxVerticalSpeed` | 6.0 | 喷气最大垂直速度。 |

### 氧气补充机

| 键 | 默认值 | 说明 |
|---|---|---|
| `oxygenChargerCooldownSeconds` | 32 | 每次充能后的冷却时间。 |

### 宇航服

| 键 | 默认值 | 说明 |
|---|---|---|
| `spacesuitMaxOxygen` | 1200.0 | 宇航服最大氧气容量。 |
| `spacesuitOxygenConsumeUnderwater` | 0.5 | 水下每 2 秒消耗的氧气量。 |
| `spacesuitOxygenConsumeSpace` | 1.0 | 太空无氧环境每 3 秒消耗的氧气量。 |

### 制氧机

| 键 | 默认值 | 说明 |
|---|---|---|
| `oxygenatorMaxRadius` | 48 | 最大供氧半径。 |
| `oxygenatorOpenSpaceRadius` | 3 | 开放空间有效半径。 |
| `oxygenatorCacheExpireTicks` | 100 | 缓存过期时间。 |
| `oxygenatorMinAirBlocks` | 10 | 最小有效房间体积。 |

### 真空进食

| 键 | 默认值 | 说明 |
|---|---|---|
| `vacuumEatingOxygenCost` | 100.0 | 真空环境吃一次食物扣多少氧。 |
| `vacuumEatingPendingTimeoutSeconds` | 10 | 进食 pending 超时。 |

## 相关进度

| 进度 | 标题 | 描述 |
|---|---|---|
| `advancement.doctor_m.not_thermos` | 这真的不是保温杯... | 你在干什么？？喝氧气瓶里头的氧气吗？？ |
| `advancement.doctor_m.you_ate_this` | 你把这玩意吃了？！ | 人在极度饥饿的状态下真的会力大无穷——比如你，你徒手拧开了氧气瓶的阀门，把里面的压缩空气当成压缩饼干，连瓶带气吞了下去，胃在抗议，但你的意志赢了。 |

---

## 冷知识

- DOCTOR M 一切Mixin的起点都是从Mixin这个太空开始的😈

<!-- lang:en -->
# Space Overhaul 2.0 / 太空大改 2.0

> **Type:** Space survival
> **Related items:** Spacesuit, Oxygen Tank, Oxygen Charger, Underwater Oxygen Generator, Oxygenator, Respirator  
> **Related config:** `oxygenTankMaxOxygen`, `spacesuitMaxOxygen`, `oxygenatorMaxRadius`, etc.  
> **Related advancements:** This Really Isn't a Thermos..., You Ate This Thing?!

---

## Overview

**DOCTOR M** gives AIT's space system a complete rewrite: **oxygen management**, **spacesuit**, **oxygen tanks**, **oxygen generation devices**, and **vacuum eating** are all consolidated into one unified system.

> 💡 **Core idea:** AIT's original oxygen logic is fully taken over by DOCTOR M. All oxygen storage, consumption, and recovery go through the same `OxygenSystem` — different items just have different capacities.

| Module | Function |
|------------|---|
| **Spacesuit enhancements** | The core gear for space exploration, with its own oxygen reserve. |
| **Oxygen tanks** | Portable oxygen reserves used to refill the spacesuit. |
| **Oxygen Charger** | A block that instantly refills oxygen gear. |
| **Underwater Oxygen Generator** | A block that provides underwater breathing to nearby players. |
| **Oxygenator enhancements** | A block that supplies oxygen to an entire enclosed room. |
| **Vacuum eating penalty** | Eating in an oxygen-free environment consumes oxygen. |
| **Respirator enhancements** | Slows down oxygen consumption. |

---

## Oxygen System

### Spacesuit Oxygen

![htf.png](assets/images/htf.png)

The biggest change to the **spacesuit chestplate** in DOCTOR M is that automatic oxygen regeneration has been removed.

| Attribute | Value |
|---|---|
| **Max capacity** | 1200 L. |
| **Underwater drain** | 0.5 L every **2 seconds**. |
| **Space drain** | 1 L every **3 seconds**. |

**In an oxygen-free environment**, once the spacesuit runs out of oxygen → you gain the **Wither** effect.  
**In an oxygenated environment**, the spacesuit stops draining and automatically removes the Wither effect.

> Compared to vanilla AIT, DOCTOR M actually nerfed the spacesuit 😈

### Screen HUD

![guihud.png](assets/images/guihud.png)

Compared to vanilla AIT, wearing a spacesuit helmet + chestplate now shows two much more useful lines in the top-left of the screen:

| Line | Content |
|---|---|
| **Line 1** | Environment status (green "Oxygenated" / red "Deoxygenated"). |
| **Line 2** | Current spacesuit oxygen (e.g. `842.3L / 1200L`). |

**Environment detection** considers the following factors:

| Factor | Result |
|---|---|
| **Normal dimensions** | Oxygenated by default. |
| **Anoxic planets** | Deoxygenated. |
| **TARDIS dimension** | Always oxygenated. |
| **Oxygenator effect** | Temporarily provides an oxygenated environment. |
| **Drowning / head stuck in a block** | **Forced to deoxygenated**. |
| **Underwater** | Forced to deoxygenated. |

> 💡 "Head stuck in a block" forces the environment to count as deoxygenated.

### Oxygen Warnings

When the spacesuit's oxygen is low, tiered warnings appear on the **action bar**:

| Oxygen ratio | Warning interval |
|---|---|
| **< 50%** | Once every 30 seconds. |
| **< 20%** | Once every 5 seconds. |
| **< 5%** | Once every second. |
| **= 0%** | Only once. |

**When oxygen recovers**, warnings reset automatically — once it's back above 50%, everything goes quiet, and if it drops again later, warnings start over.

---

## Oxygen Tanks

![oxygen_tank.png](assets/images/oxygen_tank.png)

An **Oxygen Tank** is a portable oxygen reserve used to refill the spacesuit — a piece of content vanilla AIT's space gameplay was missing.

### Four Models

| Model | Capacity | Relative to base | Features |
|---|---|---|---|
| **Oxygen Tank** | 1200 L | ×1 | The base model. |
| **Advanced Oxygen Tank** | **3600 L** | ×3 | Smaller, yet bigger capacity. |
| **Super Oxygen Tank** | **18000 L** | ×15 | The most extravagant oxygen tank in space. |
| **Jet Oxygen Tank** | 1200 L | ×1 | Can be used as a jetpack. |

> Advanced oxygen tank capacity = normal × 3.  
> Super oxygen tank capacity = advanced × 5 = normal × 15.

### Usage

**Hold the oxygen tank + right-click** → release:

| Situation | Result |
|---|---|
| **Wearing spacesuit chestplate + short press** | Transfers oxygen from the tank to the spacesuit. |
| **Wearing spacesuit chestplate + hold 5 seconds** | ⚠️ Attempt to eat the oxygen tank (see the easter egg below). |
| **Not wearing the spacesuit** | Shows "Please put on the spacesuit chestplate first." |
| **Oxygen tank empty** | Shows "Oxygen tank is empty." |
| **Spacesuit full** | Shows "Spacesuit oxygen is full." |

**Transfer amount per use**: 100 L (configurable).

### 🥚 Easter Egg: Eating the Oxygen Tank

If you're **extremely hungry** (hunger ≤ 6), **or** under a **Strength** effect, **or** under a **Hunger** effect, and **hold right-click for 5 seconds**, you will…

**Swallow the whole can of compressed air like a compressed biscuit.**

Effects:

| Effect | Duration |
|---|---|
| **Resistance II** | 30 seconds. |
| **Hunger II** | 30 seconds. |
| **Weakness I** | 30 seconds. |
| **Restore 10 hunger** | Immediate. |

Also unlocks the achievement **"You Ate This Thing?!"**.

> If you just hold for 5 seconds without meeting the conditions, you unlock a different achievement: **"This Really Isn't a Thermos..."**.

### Jet Oxygen Tank

The **Jet Oxygen Tank** is a special oxygen tank that consumes oxygen to propel you.

| Attribute | Value |
|---|---|
| **Wind-up** | 0.5 seconds (10 ticks). |
| **Thrust strength** | 0.5. |
| **Inertia retention** | 72%. |
| **Gravity compensation** | 0.12. |
| **Max horizontal speed** | 8. |
| **Max vertical speed** | 6. |
| **Oxygen drain** | 1 L per tick. |

**Controls**: Hold right-click to keep flying; release to stop.

- While flying, flame + smoke particles are generated, and a blaze shoot sound plays every 0.5 seconds.
- Releasing right-click plays a firework sound.
- During the **wind-up phase** (first 10 ticks) you slow down and charge up, and only then does acceleration begin.

> The jet oxygen tank burns precious oxygen as propellant — using one as an oxygen tank in space is itself a kind of extravagance.

---

## Oxygen Generation Devices

### Oxygen Charger

![oxygen_charger_front.png](assets/images/oxygen_charger_front.png)

The **Oxygen Charger** is a block that instantly fills oxygen gear to full.

| Attribute | Value |
|---|---|
| **Cooldown** | **32 seconds**. |
| **Supported items** | Oxygen Tank, Advanced Oxygen Tank, Super Oxygen Tank, Jet Oxygen Tank, Spacesuit Chestplate. |

**Usage**: Hold a chargeable oxygen item + right-click → **instantly fills**.

Using it during cooldown shows the remaining seconds.

### Underwater Oxygen Generator

![underwater_oxygen_generator_front.png](assets/images/underwater_oxygen_generator_front.png)

The **Underwater Oxygen Generator** has two operating modes.

#### Underwater Mode

When **at least 1 of the block's 6 sides is water**, it automatically grants **Water Breathing** to players within **5 blocks**.

**Consumes no resources.**

#### Land Mode

When **no water** surrounds the block, you must **manually add water**:

| Action | Effect |
|---|---|
| **Right-click with a water bucket** | Adds water and grants **4 charge quotas**. |
| **Max quota** | 16. |
| **Cost per charge** | 1 quota. |

Charging in land mode:

- **Full charge** (oxygen tank directly to full): costs **1 quota**.
- **Partial charge** (refill 25%): also costs **1 quota**.

> Underwater mode is completely free; land mode costs water. **Put it underwater if you can.**

### Oxygenator Enhancements

The **Oxygenator** no longer supplies oxygen to creatures outside the walls — its algorithm has been optimized!

| Attribute | Value |
|---|---|
| **Max supply radius** | 48 blocks. |
| **Open-space effective radius** | 3 blocks. |
| **Minimum valid room volume** | 10 air blocks. |

**How it works:**

1. The oxygenator performs a **flood fill** over adjacent air blocks to find the entire **connected space**.
2. If the space is **fully enclosed within a 48-block radius** → it's treated as a **room**, and all creatures inside are supplied with oxygen.
3. If the space **extends past 48 blocks without being enclosed** → it's treated as **open space**, and only a small **3-block** radius around the oxygenator is supplied.

**Multiple oxygenators can merge**: if two oxygenators' rooms **share air blocks**, they merge into one larger room and share the supply area.

> Again, compared to vanilla AIT, the oxygenator got hit hard.

---

## Vacuum Eating

Eating in an **oxygen-free environment** → **consumes spacesuit oxygen**.

| Attribute | Value |
|---|---|
| **Oxygen cost per meal** | **100 L of oxygen**. |
| **Detection window** | 10 seconds (from the start of eating). |

> "Kid, who told you it was fine to open your visor and eat in space?!"

**Trigger conditions**: You're in a deoxygenated environment + no Oxygenator effect + not in Creative mode + the item you're eating is **food or a drink**.

The timer starts when the eating action begins, and oxygen is deducted when eating actually completes. If the action is interrupted for more than 10 seconds, no oxygen is deducted.

---

## Respirator

The **Respirator** has been enhanced into a piece of equipment that **slows down oxygen consumption**.

> The Respirator's implementation details are not covered in this document yet.

---

## Config Options

Some values of the space system can be adjusted in `config/doctor_m.json`:

### Oxygen Tanks

| Key | Default | Description |
|---|---|---|
| `oxygenTankMaxOxygen` | 1200.0 | Normal oxygen tank capacity. |
| `oxygenTankTransferRate` | 100.0 | Amount transferred per spacesuit refill. |
| `oxygenTankFoodThreshold` | 6 | Hunger threshold (≤ this counts as extremely low). |
| `oxygenTankHoldTicksForAchievement` | 100 | Hold ticks required to trigger the eating easter egg. |
| `advancedOxygenTankCapacityMultiplier` | 3.0 | Advanced oxygen tank capacity multiplier. |
| `superOxygenTankCapacityMultiplier` | 5.0 | Super oxygen tank capacity multiplier based on advanced. |
| `jetOxygenTankThrustStrength` | 0.5 | Jet thrust strength. |
| `jetOxygenTankInertia` | 0.72 | Jet inertia retention. |
| `jetOxygenTankGravityCompensation` | 0.12 | Jet gravity compensation. |
| `jetOxygenTankMaxSpeed` | 8.0 | Jet max horizontal speed. |
| `jetOxygenTankMaxVerticalSpeed` | 6.0 | Jet max vertical speed. |

### Oxygen Charger

| Key | Default | Description |
|---|---|---|
| `oxygenChargerCooldownSeconds` | 32 | Cooldown after each charge. |

### Spacesuit

| Key | Default | Description |
|---|---|---|
| `spacesuitMaxOxygen` | 1200.0 | Spacesuit max oxygen capacity. |
| `spacesuitOxygenConsumeUnderwater` | 0.5 | Oxygen consumed every 2 seconds underwater. |
| `spacesuitOxygenConsumeSpace` | 1.0 | Oxygen consumed every 3 seconds in vacuum. |

### Oxygenator

| Key | Default | Description |
|---|---|---|
| `oxygenatorMaxRadius` | 48 | Max supply radius. |
| `oxygenatorOpenSpaceRadius` | 3 | Open-space effective radius. |
| `oxygenatorCacheExpireTicks` | 100 | Cache expiry time. |
| `oxygenatorMinAirBlocks` | 10 | Minimum valid room volume. |

### Vacuum Eating

| Key | Default | Description |
|---|---|---|
| `vacuumEatingOxygenCost` | 100.0 | Oxygen drained per meal eaten in vacuum. |
| `vacuumEatingPendingTimeoutSeconds` | 10 | Eating pending timeout. |

## Related Advancements

| Advancement | Title | Description |
|---|---|---|
| `advancement.doctor_m.not_thermos` | This Really Isn't a Thermos... | What are you doing?? Drinking the oxygen inside the oxygen tank?? |
| `advancement.doctor_m.you_ate_this` | You Ate This Thing?! | People really do become incredibly strong when starving — like you. You twisted open the valve of the oxygen tank with your bare hands, treated the compressed air inside as a compressed biscuit, and swallowed it can and all. Your stomach is protesting, but your willpower won. |

---

## Trivia

- The starting point of every Mixin in DOCTOR M was this Mixin about space 😈