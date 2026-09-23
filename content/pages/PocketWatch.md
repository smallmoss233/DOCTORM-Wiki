<!-- lang:zh-CN -->
# 怀表 / Pocket Watch

![pocket_watch.png](assets/images/pocket_watch.png)  ![pocket_watch_open.png](assets/images/pocket_watch_open.png)

> **类型：** 保命道具 / 时间钥匙碎片 / 重生容器
> **物品 ID：** `doctor_m:pocket_watch`  
> **名称颜色：** 金色  
> **兼容模组：** TimelordRegen（可选）  
> **触发位置：** 主物品栏、副手、饰品槽

## 概述

**怀表**是 DOCTOR M 中的一件保命道具。它看起来只是一块旧怀表，但在持有者受到致命伤害时，会发出干涩的咔哒声，将致命伤倒转，并让周围生物受到冲击。

怀表与 **[Timelord Regeneration](https://github.com/amblelabs/regeneration)** 模组存在兼容交互：安装后，它可以存储和转移时间领主的再生次数。  
即使没有安装 TimelordRegen，怀表的复活保命机制仍然可以生效；转移再生次数功能需要 TimelordRegen 。

---

## 基础信息

| 属性 | 说明 |
|---|---|
| 物品名称 | 怀表 |
| 名称颜色 | 金色 |
| 类型 | 物品 / 保命道具 |
| 所属 | DOCTOR M |
| 兼容 | TimelordRegen |
| 可触发复活的位置 | 主物品栏、副手 |
| 复活冷却 | 1 游戏日，约 20 分钟现实时间 |
| 主动使用冷却 | 潜行转移再生次数后 5 秒 |

---

## 主动使用

### 右键：打开 / 关闭怀表

- 右键可以切换怀表的打开 / 关闭状态。

### 联动附加功能

- 第一次打开怀表时，会绑定当前玩家为主人。
- - **潜行右键使用**怀表可存储 TimelordRegen 的最大再生次数。
- 打开怀表后，如果怀表内存储了再生次数，且当前玩家是时间领主，则会尝试把怀表中的次数转移给玩家，直到达到上限。

> **注意：** 如果未安装 TimelordRegen，右键只能打开怀表哦~

---

## 打开状态与时间 HUD

当怀表处于打开状态，并且被拿在主手或副手时，屏幕底部中央上方会显示时间 HUD。

显示内容包括：

```text
☀ 时间 · 时段
```

例如：

```text
☀ 6:00 AM · 上午
```

时段分为：

| 时段 | 游戏内时间范围 |
|---|---|
| 上午 | 0 – 6000 |
| 下午 | 6000 – 11000 |
| 傍晚 | 11000 – 13000 |
| 夜晚 | 13000 – 24000 |

HUD 文字为金色。  
如果怀表放在饰品栏，即使处于打开状态，也不会显示这个 HUD；但复活保命机制仍然可以触发。

---

## 复活机制

怀表最核心的能力是自动保命。

### 触发条件

当玩家受到伤害，并且这次伤害会导致玩家死亡时，如果满足以下条件，怀表会触发复活：

- 玩家主物品栏、副手或饰品槽中拥有怀表。
- 怀表不在复活冷却中。

### 复活效果

触发后，玩家不会死亡，并立即获得以下效果：

| 效果 | 说明 |
|---|---|
| **生命值恢复** | 恢复到最大生命值的一半 |
| **清除状态效果** | 清除玩家身上所有状态效果 |
| **范围伤害** | 对周围 10 格内除自己外的所有存活生物造成 25 点魔法伤害 |
| **饥饿 IV** | 持续 3 秒 |
| **黑暗** | 持续 15 秒 |
| **粒子效果** | 生成反向传送门粒子 |
| **音效** | 播放钟声 |
| **动作栏消息** | 显示“你的旅途尚未到达终点，六重神注视着你，期待着你的旅途最终通往何方...” |
| **冷却** | 怀表进入 1 游戏日冷却，约 20 分钟现实时间 |

> **注意：** 复活后不是满血，而是恢复到最大生命值的一半。  
> 同时会获得饥饿 IV 和黑暗效果，所以复活后并不是完全无代价。

### 冷却

复活冷却为 **1 游戏日**，即 24000 tick × 50ms = 1,200,000ms，约 **20 分钟现实时间**。

冷却期间：

- 无法再次触发复活。
- 物品栏中的怀表会显示金色冷却条。
- Tooltip 会显示剩余冷却时间，格式为“距离下次能拧动发条还有 X分X秒”。

---

## 物品提示

怀表的 Tooltip 会根据状态显示不同信息：

- 打开 / 关闭状态：
    - `[已打开]`
    - `[已关闭]`

- 如果安装了 TimelordRegen：
    - 显示怀表充能 / 最大充能。
    - 显示怀表主人。
- 如果处于复活冷却中：
    - 显示剩余冷却时间。
- 始终显示怀表描述文本。
- 按住 Shift 查看详细说明。

怀表描述文本：

> 一块旧怀表，黄铜外壳却崭新发亮，新得宛如昨天它才刚被铸造出来……

Shift 详情文本：

> 这不过是一块被人遗忘的旧表……  
> 当你本该撑不住的时候，表盘里会传来一声干涩的咔哒。  
> 等你回过神，那道致命的伤口已经不见了，仿佛刚才只是走了一瞬的神。  
> 周围的生物似乎也被这阵异响震得七荤八素。  
> 发条有些问题，每次倒转之后都要等上好一阵子才能重新走动。

---

## 冷知识

- 这块怀表是属于**玛丽.谨**的，她将在未来加入 DOCTOR M 。

<!-- lang:en -->
# Pocket Watch / 怀表

![pocket_watch.png](assets/images/pocket_watch.png)  ![pocket_watch_open.png](assets/images/pocket_watch_open.png)

> **Type:** Life-saving item / Key to Time fragment / Regeneration container
> **Item ID:** `doctor_m:pocket_watch`  
> **Name color:** Gold  
> **Compatible mod:** TimelordRegen (optional)  
> **Trigger slots:** Main inventory, off-hand, curio slot

## Overview

The **Pocket Watch** is a life-saving item in DOCTOR M. It looks like nothing more than an old pocket watch, but when its holder takes fatal damage, it emits a dry click, rewinds the fatal wound, and sends a shockwave through nearby creatures.

The Pocket Watch interacts with the **[Timelord Regeneration](https://github.com/amblelabs/regeneration)** mod: once installed, it can store and transfer a Time Lord's regeneration count.  
Even without TimelordRegen installed, the Pocket Watch's revival life-saving mechanic still works; transferring regeneration counts requires TimelordRegen.

---

## Basic Info

| Attribute | Description |
|---|---|
| Item name | Pocket Watch |
| Name color | Gold |
| Type | Item / Life-saving item |
| Belongs to | DOCTOR M |
| Compatible with | TimelordRegen |
| Slots that can trigger revival | Main inventory, off-hand |
| Revival cooldown | 1 in-game day, about 20 minutes of real time |
| Active-use cooldown | 5 seconds after sneak-transferring regeneration counts |

---

## Active Use

### Right-click: Open / close the Pocket Watch

- Right-click toggles the Pocket Watch's open / closed state.

### Linked Additional Features

- The first time you open the Pocket Watch, it binds the current player as its owner.
- **Sneak + right-click** the Pocket Watch to store TimelordRegen's maximum regeneration count.
- After opening the Pocket Watch, if regeneration counts are stored inside it and the current player is a Time Lord, it will try to transfer the stored counts to the player, up to the cap.

> **Note:** Without TimelordRegen installed, right-clicking can only open the watch~

---

## Open State & Time HUD

When the Pocket Watch is open and held in the main hand or off-hand, a time HUD appears above the bottom center of the screen.

The display contains:

```text
☀ Time · Period
```

For example:

```text
☀ 6:00 AM · Morning
```

The periods are:

| Period | In-game time range |
|---|---|
| Morning | 0 – 6000 |
| Afternoon | 6000 – 11000 |
| Evening | 11000 – 13000 |
| Night | 13000 – 24000 |

The HUD text is gold.  
If the Pocket Watch is in a curio slot, this HUD is not shown even when the watch is open; the revival life-saving mechanic still triggers.

---

## Revival Mechanic

The Pocket Watch's core ability is automatic life-saving.

### Trigger Conditions

When a player takes damage that would kill them, the Pocket Watch triggers revival if the following conditions are met:

- The Pocket Watch is in the player's main inventory, off-hand, or curio slot.
- The Pocket Watch is not on revival cooldown.

### Revival Effects

On trigger, the player does not die and immediately gains the following:

| Effect | Description |
|---|---|
| **Health restore** | Restores to half of max health |
| **Clear status effects** | Removes all status effects from the player |
| **Area damage** | Deals 25 magic damage to every living entity within 10 blocks except the player |
| **Hunger IV** | Lasts 3 seconds |
| **Darkness** | Lasts 15 seconds |
| **Particles** | Spawns reverse portal particles |
| **Sound** | Plays a bell toll |
| **Action bar message** | Shows "Your journey has not yet reached its end. The Six-Fold Gods watch over you, awaiting where your journey will finally lead..." |
| **Cooldown** | The Pocket Watch enters a 1 in-game day cooldown, about 20 minutes of real time |

> **Note:** You revive at half of max health, not at full health.  
> You also gain Hunger IV and Darkness, so revival is not entirely cost-free.

### Cooldown

Revival cooldown is **1 in-game day**, i.e. 24000 ticks × 50ms = 1,200,000ms, roughly **20 minutes of real time**.

During cooldown:

- Revival cannot trigger again.
- The Pocket Watch in your inventory shows a gold cooldown bar.
- The tooltip shows the remaining cooldown, formatted as "The gears in the dial are still turning idly... X min X sec until the spring can be wound again".

---

## Item Tooltip

The Pocket Watch's tooltip shows different information depending on state:

- Open / closed state:
    - `[Opened]`
    - `[Closed]`

- If TimelordRegen is installed:
    - Shows Pocket Watch charge / max charge.
    - Shows the Pocket Watch's owner.
- If on revival cooldown:
    - Shows remaining cooldown.
- Always shows the Pocket Watch's description text.
- Hold Shift for detailed description.

Pocket Watch description text:

> An old pocket watch, yet its brass casing is bright and new — as if it had just been cast yesterday…

Shift detail text:

> It's nothing but a forgotten old watch…  
> When you should have fallen, a dry click comes from inside the dial.  
> By the time you come to your senses, the fatal wound is gone, as if you had merely lost focus for an instant.  
> The creatures around you seem to have been shaken silly by that strange sound.  
> Something is off with the winding mechanism — after each rewind it takes quite a while before it can run again.

---

## Trivia

- This Pocket Watch belongs to **Marian.Jin**; she will join DOCTOR M in the future.