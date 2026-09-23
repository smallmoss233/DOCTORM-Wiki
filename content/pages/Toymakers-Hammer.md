<!-- lang:zh-CN -->
# 玩具匠的锤子 / Toymaker's Hammer

![toymaker_hammer.png](assets/images/toymaker_hammer.png)

> **类型：** 神器
> **来源：** DOCTOR WHO / AIT
> **相关配置：** `toymakerHammerCopyChunkRadius`、`toymakerHammerCopyEntities` 等  
> **相关结构：** 塔迪斯

---

## 概述

**玩具匠的锤子**是一件神器，能完成一项“不可能”的任务：**完整复制一台现存的塔迪斯**——彻底、独立、没有任何关联。

> ⚠️ **警告：** 这不是玩具。好吧，它确实是玩具匠的锤子，但它会复制一整个塔迪斯。多人服务器上请自重。因为它非常的变态。

---

## 获取方式

*暂无。*

---

## 使用方法

### 操作步骤

| 步骤 | 操作 |
|---|---|
| 1 | **按住右键**对准塔迪斯外壳方块，开始蓄力。 |
| 2 | **持续按住至少 2 秒**（40 tick）。提前松手会静默取消。 |
| 3 | **松手**。如果对准的是有效、已绑定的塔迪斯外壳，复制流程启动。 |

> 💡 物品使用**弓的动作动画**，所以玩家看起来像是把锤子当弓拉。

### 目标规则

- 必须**直接看向外壳方块**。
- 外壳必须**已绑定到一台塔迪斯**。未绑定的外壳会被忽略。
- 复制体生成在**你面前的塔迪斯的后方 2 格**（按你的水平朝向计算）。

---

## 复制效果

成功后，你会得到一台**全新的、完全独立的塔迪斯**。

| 项目 | 说明 |
|---|---|
| **位置** | 生成在你面前的原塔迪斯的后方 2 格，朝向与原塔迪斯一致。 |
| **内部空间** | 完整复制原塔迪斯内部——方块、容器、怪物、展示框、盔甲架等全部保留。 |
| **状态** | 内饰方案、外观变体、忠诚度、飞行数据、燃料、统计、名字全部保留。 |
| **归属** | 使用锤子的玩家会被添加为**旅伴**（不是主人）。 |

**复制体与原塔迪斯完全独立**——改一个不影响另一个。

> ⚠️ **注意：** 内部空间只复制**中心点半径 48 格**内的内容。球体范围外的任何东西都不会被复制。

### 视觉反馈

成功后，源塔迪斯和复制体位置都会播放震撼特效：

| 位置 | 特效 |
|---|---|
| **源位置** | 铁砧落地音效、爆炸 + 闪光 + 云粒子、末地烛、暴击火花。 |
| **复制体** | 末地传送门生成音效、传送门粒子、附魔粒子、末地烛、女巫魔法。 |

> 原塔迪斯**完全无损**，只是特效看起来很爆炸。

---

## 限制与失败

| 情况 | 结果 |
|---|---|
| **蓄力 < 2 秒** | 静默取消，什么都不发生。 |
| **没看准方块** | 静默取消。 |
| **目标不是塔迪斯外壳** | 聊天栏提示：*“那不是塔迪斯。”* |
| **外壳未绑定** | 静默取消。 |
| **塔迪斯管理器已满** | 聊天栏提示：*“塔迪斯管理器已满。”* |
| **复制过程中出错** | 聊天栏提示：*“复制失败。”* + 服务端日志。 |

---

## 配置项

玩具匠的锤子的部分数值可在 `config/doctor_m.json` 中调整：

| 键 | 默认值 | 说明 |
|---|---|---|
| `toymakerHammerCopyChunkRadius` | 20 | 复制塔迪斯时的区块半径。 |
| `toymakerHammerSpawnOffsetBlocks` | 2 | 复制塔迪斯的生成偏移。 |
| `toymakerHammerReachDistance` | 5.0 | 锤子的触及距离。 |
| `toymakerHammerBlockUpdateFlags` | 2 \| 16 | 方块更新 flags。 |
| `toymakerHammerCopyEntities` | 开 | 是否复制实体。 |
| `toymakerHammerCopyBlockEntities` | 开 | 是否复制方块实体。 |

---

## 冷知识

- “玩具匠（Toymaker）”是经典《神秘博士》反派——他视现实为一场游戏，而这把锤子来自《神秘博士-60周年特辑》的最后一集。

<!-- lang:en -->
# Toymaker's Hammer / 玩具匠的锤子

![toymaker_hammer.png](assets/images/toymaker_hammer.png)

> **Type:** Artifact
> **Source:** DOCTOR WHO / AIT
> **Related config:** `toymakerHammerCopyChunkRadius`, `toymakerHammerCopyEntities`, etc.  
> **Related structure:** TARDIS

---

## Overview

**Toymaker's Hammer** is an artifact capable of an "impossible" task: **fully duplicating an existing TARDIS** — completely, independently, with no ties whatsoever.

> ⚠️ **Warning:** This is not a toy. Well, it is the Toymaker's hammer, but it duplicates an entire TARDIS. Be responsible on multiplayer servers. Because it is absolutely absurd.

---

## Obtaining

*None yet.*

---

## Usage

### Steps

| Step | Action |
|---|---|
| 1 | **Hold right-click** aimed at a TARDIS exterior block to begin charging. |
| 2 | **Keep holding for at least 2 seconds** (40 ticks). Releasing early cancels silently. |
| 3 | **Release.** If you're aiming at a valid, bound TARDIS exterior, the duplication process starts. |

> 💡 The item uses the **bow's action animation**, so the player appears to draw the hammer like a bow.

### Targeting Rules

- You must **look directly at the exterior block**.
- The exterior must be **bound to a TARDIS**. Unbound exteriors are ignored.
- The duplicate spawns **2 blocks behind the TARDIS in front of you** (based on your horizontal facing).

---

## Duplication Effects

On success, you get a **brand-new, fully independent TARDIS**.

| Item | Description |
|---|---|
| **Position** | Spawns 2 blocks behind the original TARDIS in front of you, facing the same direction as the original. |
| **Interior** | Fully copies the original TARDIS interior — blocks, containers, mobs, item frames, armor stands, everything is preserved. |
| **State** | Desktop scheme, exterior variant, loyalty, flight data, fuel, statistics, and name are all preserved. |
| **Ownership** | The player who used the hammer is added as a **companion** (not the owner). |

**The duplicate is fully independent of the original** — changing one doesn't affect the other.

> ⚠️ **Note:** Only content within a **48-block radius from the center point** is copied. Anything outside that sphere is not duplicated.

### Visual Feedback

On success, both the source TARDIS and the duplicate play dramatic effects:

| Location | Effects |
|---|---|
| **Source position** | Anvil land sound, explosion + flash + cloud particles, end rods, crit sparks. |
| **Duplicate** | End portal spawn sound, portal particles, enchantment particles, end rods, witch magic. |

> The original TARDIS is **completely unharmed** — the effects just look explosive.

---

## Limitations & Failures

| Situation | Result |
|---|---|
| **Charge < 2 seconds** | Silently cancelled, nothing happens. |
| **Not aiming at a block** | Silently cancelled. |
| **Target isn't a TARDIS exterior** | Chat message: *"That's not a TARDIS."* |
| **Exterior is unbound** | Silently cancelled. |
| **TARDIS manager is full** | Chat message: *"The TARDIS manager is full."* |
| **Error during duplication** | Chat message: *"Duplication failed."* + server log. |

---

## Config Options

Some values of Toymaker's Hammer can be adjusted in `config/doctor_m.json`:

| Key | Default | Description |
|---|---|---|
| `toymakerHammerCopyChunkRadius` | 20 | Chunk radius when copying the TARDIS. |
| `toymakerHammerSpawnOffsetBlocks` | 2 | Spawn offset when copying the TARDIS. |
| `toymakerHammerReachDistance` | 5.0 | Reach distance of the hammer. |
| `toymakerHammerBlockUpdateFlags` | 2 \| 16 | Block update flags. |
| `toymakerHammerCopyEntities` | On | Whether to copy entities. |
| `toymakerHammerCopyBlockEntities` | On | Whether to copy block entities. |

---

## Trivia

- "The Toymaker" is a classic *Doctor Who* villain — he treats reality as a game, and this hammer comes from the final episode of the *Doctor Who 60th Anniversary Specials*.