<!-- lang:zh-CN -->
# 去物质枪 / De-Mat Gun

![dmg.png](assets/images/dmg.png)

> **类型：** 时间领主科技
> **来源：** DOCTOR WHO
> **授权方式：** 拉斯隆之钥  
> **相关进度：** 过去的，古老的，黑暗的，被迫捡起来的

---

## 概述

**去物质枪**是一把源自时间领主科技的单发、高后果能量武器。

它不以传统方式造成伤害——它**抹除**目标。扣下扳机时没有火光，也没有声响，只有一道苍白的闪光，和随后令人不安的寂静。被那道光触碰的东西不会死去，它们只是**不再存在**了。

> ⚠️ **警告：** 这把武器为时间领主的终极武器。对玩家会执行**角色清除**，对 Boss 则是**彻底抹除存在**。

来自时间领主的忠告：

> 毁了这把枪，毁掉它的所有资料，不要被强大的力量蛊惑心智……

---

## 获取方式

### 蓝图制作

| 材料 | 数量 |
|---|---|
| 超离子核心轴 | ×4 |
| 光子加速器 | 6~8 |
| 去物质化移形电路 | ×1 |
| 阿特隆能量流体连接器 | ×1 |
| 数据流体连接器 | ×1 |
| 涡流流体连接器 | ×1 |
| 阿特隆能量汞连接器 | ×1 |
| 数据汞连接器 | ×1 |
| 涡流汞连接器 | ×1 |
| 阿特隆能量收集单元 | 1~2 |
| 下界合金锭 | 5~8 |
| 石头按钮 | ×1 |
| 红石 | 8~12 |
| 充能泽顿水晶 | ×1 |
| 等离子材料 | 10~20 |
| 阿特隆能量线缆 | 15~18 |
| 超跃共振器 | 10~12 |
| 信标 | ×1 |

### 拉斯隆之钥授权

去物质枪需要授权后才能开火。

| 步骤 | 操作 |
|---|---|
| 1 | **副手**持去物质枪。 |
| 2 | **主手**持拉斯隆之钥。 |
| 3 | **潜行 + 右键**切换授权状态。 |

授权成功后会显示：

```text
去物质枪已激活！
```

未授权时尝试开火会显示：

```text
去物质枪未激活！
```

---

## 武器数据

| 属性 | 数值 |
|---|---|
| **最大弹药** | 无限 |
| **有效射程** | 无限 |
| **冷却** | 60 tick（3 秒） |
| **开镜散布** | 0.15 |
| **腰射散布** | 1.2 |

---

## 开火机制

开火时，枪械会从射手的眼睛位置发出**瞬时射线**。

处理流程：

1. 沿射线路径绘制金色粒子光束。
2. 无论命中与否，都会播放开火音效。
3. 若射线击中实体，则开始抹除击中的实体。

射线会**忽略**以下目标：

- 射手自己
- 旁观者模式实体
- 已经死亡的实体

---

## 不同目标的抹除效果

| 目标类型 | 结果 |
|---|---|
| **掉落物实体** | 立即清除。**但**如果是**时间钥匙相关物品**，则受到保护。 |
| **玩家** | **彻底抹除**：状态效果、经验、物品栏、末影箱、成就、配方、统计全部清零，随后玩家被处决。 |
| **末影龙** | 强制 `kill()`（触发死亡动画和传送门）。 |
| **其他实体** | 立即 `discard()`。无掉落物、无死亡动画、无痕迹。 |

> 💡 “不再存在”意味着：被抹除的东西不会留下尸体、掉落物或死亡动画，它只是从时间线上被轻轻擦去了。

---

## 时间钥匙保护

玩家的**主物品栏**或**末影箱**中拥有任何**时间钥匙（Key to Time）相关的物品**时，会获得**部分保护**：

- **物品栏和末影箱不会被清除。**
- 玩家会被**使用如 kill 等方法处死**，但不会从世界中被抹除。
- 复活后仍保有原本的物品和进度。

> 这就是为什么时间钥匙被认为是抵御去物质枪的**唯一护身符**。

---

## 兼容性

| 模组 | 交互 |
|---|---|
| **Timelord Regeneration** | 若存在，会在玩家被处决前将重生次数清零。 |

---

## 冷知识

- 去物质枪是《神秘博士》中时间领主的终极的武器——能够从时间本身中抹除目标。

<!-- lang:en -->
# De-Mat Gun / 去物质枪

![dmg.png](assets/images/dmg.png)

> **Type:** Time Lord technology
> **Source:** DOCTOR WHO  
> **Authorization:** Key of Rassilon  
> **Related advancement:** The past, the ancient, the dark, forced to be picked up

---

## Overview

The **De-Mat Gun** is a single-shot, high-consequence energy weapon built on Time Lord technology.

It doesn't deal damage the traditional way — it **erases** its target. There is no muzzle flash and no report when you pull the trigger, only a pale flash of light and the unsettling silence that follows. Whatever that light touches doesn't die; it simply **ceases to exist**.

> ⚠️ **Warning:** This is the Time Lords' ultimate weapon. Against players it performs a **character wipe**; against bosses it performs a **total erasure of existence**.

A piece of advice from the Time Lords:

> Destroy this gun. Destroy every record of it. Do not let its power beguile your mind…

---

## Obtaining

### Blueprint Crafting

| Material | Amount |
|---|---|
| Superionic Core Rod | ×4 |
| Photon Accelerator | 6~8 |
| Dematerialization Shift Circuit | ×1 |
| Artron Energy Fluid Connector | ×1 |
| Data Fluid Connector | ×1 |
| Vortex Fluid Connector | ×1 |
| Artron Energy Mercury Connector | ×1 |
| Data Mercury Connector | ×1 |
| Vortex Mercury Connector | ×1 |
| Artron Energy Collector Unit | 1~2 |
| Netherite Ingot | 5~8 |
| Stone Button | ×1 |
| Redstone | 8~12 |
| Charged Zeiton Crystal | ×1 |
| Plasma Material | 10~20 |
| Artron Energy Cable | 15~18 |
| Hyper-Resonator | 10~12 |
| Beacon | ×1 |

### Key of Rassilon Authorization

The De-Mat Gun must be authorized before it can fire.

| Step | Action |
|---|---|
| 1 | Hold the De-Mat Gun in your **off-hand**. |
| 2 | Hold the Key of Rassilon in your **main hand**. |
| 3 | **Sneak + Right-click** to toggle the authorization state. |

On success, you'll see:

```text
De-Mat Gun activated!
```

Attempting to fire while unauthorized will show:

```text
De-Mat Gun not activated!
```

---

## Weapon Stats

| Attribute | Value |
|---|---|
| **Max ammo** | Unlimited |
| **Effective range** | Unlimited |
| **Cooldown** | 60 ticks (3 seconds) |
| **ADS spread** | 0.15 |
| **Hip-fire spread** | 1.2 |

---

## Firing Mechanics

When fired, the gun emits an **instantaneous ray** from the shooter's eye position.

Processing flow:

1. Draw a golden particle beam along the ray's path.
2. Play the firing sound regardless of whether anything is hit.
3. If the ray strikes an entity, begin erasing the entity it struck.

The ray **ignores** the following targets:

- The shooter
- Spectator-mode entities
- Already-dead entities

---

## Erasure Effects by Target

| Target type | Result |
|---|---|
| **Dropped item entities** | Cleared immediately. **However**, if the item is **Key to Time related**, it is protected. |
| **Players** | **Total erasure:** status effects, XP, inventory, ender chest, advancements, recipes, and statistics are all zeroed out, then the player is executed. |
| **Ender Dragon** | Forced `kill()` (triggers the death animation and the portal). |
| **Other entities** | Immediate `discard()`. No drops, no death animation, no trace. |

> 💡 "Ceasing to exist" means: whatever is erased leaves behind no corpse, no drops, and no death animation. It is simply wiped gently off the timeline.

---

## Key to Time Protection

If a player has any **Key to Time related item** in their **main inventory** or **ender chest**, they receive **partial protection**:

- **The inventory and ender chest are not cleared.**
- The player is **executed by methods like kill**, but is not erased from the world.
- After respawning, the player keeps their original items and progress.

> This is why the Key to Time is regarded as the **only talisman** against the De-Mat Gun.

---

## Compatibility

| Mod | Interaction |
|---|---|
| **Timelord Regeneration** | If present, regeneration count is zeroed out before the player is executed. |

---

## Trivia

- The De-Mat Gun is the ultimate weapon of the Time Lords in *Doctor Who* — capable of erasing targets from time itself.