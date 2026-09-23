<!-- lang:zh-CN -->
# 追踪器 / Tracer

![tracer.png](assets/images/tracer.png)

> **类型：** 时间钥匙相关 / 心灵感应增强
> **来源：** DOCTOR WHO
> **获取方式：** 博士之墓  
> **相关配置：** `tracerScanRange`、`tracerTelepathicScanRange`、`tracerStructureSearchRadius` 等  
> **相关物品：** 时间钥匙

---

## 概述

**追踪器**是一件专门用来**搜寻时间钥匙碎片**的探测装置。

它有两种使用方式：

| 模式 | 位置 | 作用 |
|---|---|---|
| **手持模式** | 主手 / 副手 | 自动扫描附近的碎片。 |
| **控制台模式** | 塔迪斯音速端口 | 与心灵感应电路联动，成为远程探测雷达。 |

> 💡 **核心概念：** 追踪器扫描的目标是**时间钥匙相关的一切**——掉在地上的碎片、展示框里的碎片、怪物携带的碎片、箱子里的碎片，甚至**远古结构**。

---

## 获取方式

追踪器可以在**博士之墓**中找到。

> 💡 博士之墓只生成在特兰泽洛的**禁区**生物群系，且概率极低。

---

## 手持模式

### 自动扫描

**手持追踪器**（主手或副手）时，它会自动扫描周围 **45 格**内的碎片。

**工作方式：**

- 检测到附近的碎片时，会以**微妙脉冲音效**回应。
- **距离越近，音效越急促、音调越高**。
- 距离 **6 格以内**时，会在你头顶生成**末地烛粒子**。

**探测范围**覆盖：

| 位置 | 自动模式是否检测 |
|---|---|
| 掉落在地上的碎片 | 是。 |
| 展示框里的碎片 | 是。 |
| 生物携带的碎片 | 是。 |
| 容器内的碎片 | **否**。 |

> 这是一种“雷达”式被动反馈——不需要主动操作，只要拿着它走动就能感知附近碎片。

### 右键扫描

**右键**追踪器 → 对周围进行一次**定向扫描**。

**扫描范围**：45 格。

**扫描优先级**（取最近的目标）：

| 位置 | 结果提示 |
|---|---|
| **容器内** | `容器内检测到碎片回响 \| X 格` |
| **展示框内** | `展示框内发现碎片信号 \| X 格` |
| **生物携带** | `生物携带碎片信号 \| X 格` |
| **地面** | `地表发现碎片信号 \| X 格` |

如果范围内**没有任何碎片** → 提示 `扫描范围内未发现碎片痕迹`。

> 💡 手动扫描会检测**容器内容**，而自动扫描不会。想找箱子里的碎片，必须主动右键。

---

## 心灵感应电路扩展

把追踪器**插入塔迪斯控制台的音速端口**后，追踪器会与**心灵感应电路**联动，成为远程探测工具。

### 使用方式

| 操作 | 效果 |
|---|---|
| **右键控制台** | 搜索并锁定最近的时间钥匙碎片或远古结构。 |
| **潜行 + 右键控制台** | 标记当前区域结构为“已探索”，跳过它。 |

### 搜索并锁定

**右键**控制台后，追踪器会进行一次**超远距离扫描**：

| 项目 | 数值 |
|---|---|
| **扫描半径** | **5120 格**（相当于 320 区块）。 |
| **扫描对象** | 碎片（掉落物 / 展示框 / 生物 / 容器）+ **远古结构**。 |

**搜索流程：**

1. 先搜**实时目标**——掉落物、展示框、生物携带、容器。
2. 找到最近的碎片 → **锁定航线**，消耗 **300 燃料**。
3. 没找到碎片 → **异步搜索远古结构**，找到后锁定航线，消耗 **600 燃料**。

**反馈：**

| 情况 | 提示 |
|---|---|
| 锁定碎片 | 播放信标音效 + `容器信号已锁定` / `地表信号已锁定`。 |
| 锁定结构 | `远古结构信号已锁定！` |
| 附近没找到 | `X 格范围内未检测到远古结构回响`。 |
| 所有结构已标记 | `搜索半径内所有远古结构均已被标记。请移动塔迪斯至其他区域。` |

**航线特点：**

- 目标位置会**随机偏移 ±40 格**——你会在目标附近着陆，而不是精确落在结构内部。
- 这样避免了“塔迪斯直接卡在建筑里”的问题。

### 标记并排除

**潜行 + 右键**控制台 → 追踪器会**标记附近的结构为已探索**。

| 属性 | 数值 |
|---|---|
| **搜索半径** | 5120 格。 |
| **标记容差** | 128 格（避免重复标记同一结构）。 |
| **标记归属** | 每台塔迪斯独立记录。 |

**用途**：当你不想再被“引导”到某个已经搜刮过的结构时，标记它，之后追踪器就会**跳过**它。

**反馈：**

- 标记成功 → `已将坐标 X, Y, Z 处的远古结构标记为已探索。`
- 附近没有可标记结构 → `当前区域未检测到可标记的远古结构。`

### 结构搜索的智能重试

追踪器在搜索结构时有一套**链式重试**逻辑：

| 情况 | 处理 |
|---|---|
| **找到的结构已在黑名单** | 以该结构为新中心，继续搜索下一个。 |
| **找到的结构在原始半径外** | 视为没找到。 |
| **重试次数用尽（5 次）** | 提示 `搜索半径内所有远古结构均已被标记`。 |

> 这套逻辑确保你不会被反复引导到同一堆已探索的结构里。

---

## 隐藏功能：心灵感应电路治疗

当控制台的音速端口里**没有插入追踪器**时，心灵感应电路提供一项隐藏功能：

**潜行 + 空手右键控制台** → 治疗自己：

| 效果 | 数值 |
|---|---|
| **回血** | **8 HP**（4 颗心）。 |
| **饱食度** | +4。 |
| **饱和度** | +0.5。 |

> 这是 DOCTOR M 藏在控制台里的小福利——空手潜行右键就能回血，无需任何消耗品。

---

## 燃料消耗对照

使用追踪器锁定目标会消耗塔迪斯燃料：

| 目标类型 | 燃料消耗 |
|---|---|
| **碎片**（掉落物 / 展示框 / 生物 / 容器） | **300**。 |
| **远古结构** | **600**。 |

> 结构搜索比碎片搜索贵一倍——毕竟结构通常距离更远、价值更高。

---

## 结构标签与黑名单

追踪器搜索的远古结构由数据包标签控制。

### 结构标签

**标签路径**：`data/doctor_m/tags/worldgen/structure/ktt_fragment_structures.json`

默认包含 KTT（时间钥匙）相关结构。你可以通过数据包**添加或移除**结构，让追踪器搜索你想要的目标。

### 星图黑名单

**黑名单路径**：`data/doctor_m/tags/worldgen/structure/astral_map_blacklist.json`

默认无法搜索到 KTT 有关的结构。你可以在黑名单中新增结构 ID，**支持标签和单结构 ID 嵌套**。

> 💡 标签决定“追踪器能找什么”，黑名单决定“追踪器不能找什么”。两者配合使用。

---

## 配置项

追踪器的部分数值可在 `config/doctor_m.json` 中调整：

| 键 | 默认值 | 说明 |
|---|---|---|
| `tracerScanRange` | 45.0 | 手持自动扫描半径。 |
| `tracerContainerScanRange` | 45 | 右键扫描容器半径。 |
| `tracerTelepathicScanRange` | 5120 | 心灵感应电路远程搜索半径。 |
| `tracerStructureSearchRadius` | 51200 | 结构搜索半径。 |
| `tracerBlacklistTolerance` | 128 | 黑名单容差半径。 |
| `tracerMaxChainAttempts` | 5 | 结构搜索最大重试次数。 |
| `tracerFragmentFuelCost` | 300 | 锁定碎片消耗的塔迪斯燃料。 |
| `tracerStructureFuelCost` | 600 | 锁定结构消耗的塔迪斯燃料。 |
| `tracerLandingOffset` | 40 | 塔迪斯着陆随机偏移。 |
| `tracerHealAmount` | 8.0 | 心灵感应电路空手潜行右键的回血量。 |
| `tracerHealFood` | 4 | 心灵感应电路空手潜行右键的饱食度回复。 |
| `tracerHealSaturation` | 0.5 | 心灵感应电路空手潜行右键的饱和度回复。 |

---

## 冷知识

- **追踪器是唯一能“锁定塔迪斯航线”的道具**——你不需要手动输入坐标，它会自动帮你把塔迪斯引导到碎片或结构附近。
- **5120 格的搜索范围**是普通扫描（45 格）的 100 多倍——这是为了让你在探索新区域时不用瞎转。
- **黑名单是每台塔迪斯独立的**——你用 A 塔迪斯标记的结构，不会影响 B 塔迪斯。
- **“标记”功能需要潜行触发**——因为普通右键是搜索，所以想排除结构必须潜行。
- **结构锁定后随机偏移 ±40 格**——这是防止塔迪斯撞进建筑内部，也让你落地后需要自己走一段路。
- **心灵感应电路的治疗功能需要空手**——手里拿着东西右键不会触发，只有空手才行。
- **追踪器的音效是音符盒音色**——自动扫描用的是“钟琴”（chime），手动扫描用的是“叮”（pling），两者音色不同。
- **自动扫描不检测容器**——想找箱子里的碎片，必须主动右键。
- **追踪器可以在博士之墓中找到**——而博士之墓只生成在特兰泽洛的禁区生物群系，概率极低。

<!-- lang:en -->
# Tracer / 追踪器

![tracer.png](assets/images/tracer.png)

> **Type:** Key to Time related / Telepathic enhancement
> **Source:** DOCTOR WHO
> **Obtaining:** Doctor's Tomb  
> **Related config:** `tracerScanRange`, `tracerTelepathicScanRange`, `tracerStructureSearchRadius`, etc.  
> **Related item:** Key to Time

---

## Overview

The **Tracer** is a detection device built specifically for **finding Key to Time fragments**.

It has two ways to be used:

| Mode | Slot | Function |
|---|---|---|
| **Held mode** | Main hand / off-hand | Automatically scans for nearby fragments. |
| **Console mode** | TARDIS sonic port | Links with the Telepathic Circuit to become a long-range detection radar. |

> 💡 **Core concept:** The Tracer scans for **anything related to the Key to Time** — fragments dropped on the ground, in item frames, carried by mobs, inside containers, and even **ancient structures**.

---

## Obtaining

The Tracer can be found in the **Doctor's Tomb**.

> 💡 The Doctor's Tomb only generates in Trenzalore's **Forbidden Zone** biome, and only at an extremely low chance.

---

## Held Mode

### Auto Scanning

While **holding the Tracer** (main hand or off-hand), it automatically scans for fragments within **45 blocks**.

**How it works:**

- When a nearby fragment is detected, it responds with a **subtle pulsing sound**.
- **The closer the distance, the faster and higher-pitched the sound**.
- Within **6 blocks**, **end rod particles** spawn above your head.

**Detection coverage:**

| Location | Detected in auto mode |
|---|---|
| Fragments dropped on the ground | Yes. |
| Fragments in item frames | Yes. |
| Fragments carried by mobs | Yes. |
| Fragments in containers | **No**. |

> This is a "radar"-style passive feedback — no active input needed; just walking around with it in hand lets you sense nearby fragments.

### Right-click Scan

**Right-click** the Tracer → performs a **directional scan** of the surroundings.

**Scan range**: 45 blocks.

**Scan priority** (nearest target is picked):

| Location | Result message |
|---|---|
| **In a container** | `Fragment echo detected inside container \| X blocks` |
| **In an item frame** | `Fragment signal found inside item frame \| X blocks` |
| **Carried by a mob** | `Fragment signal carried by mob \| X blocks` |
| **On the ground** | `Fragment signal found on the surface \| X blocks` |

If there is **no fragment** in range → shows `No fragment trace found within scan range`.

> 💡 Manual scanning detects **container contents**, while auto scanning does not. If you want fragments inside chests, you must right-click actively.

---

## Telepathic Circuit Extension

After **inserting the Tracer into a TARDIS console's sonic port**, it links with the **Telepathic Circuit** and becomes a long-range detection tool.

### Usage

| Action | Effect |
|---|---|
| **Right-click the console** | Searches for and locks onto the nearest Key to Time fragment or ancient structure. |
| **Sneak + Right-click the console** | Marks the current region's structure as "explored", skipping it. |

### Search & Lock On

After **right-clicking** the console, the Tracer performs a **very long-range scan**:

| Item | Value |
|---|---|
| **Scan radius** | **5120 blocks** (equivalent to 320 chunks). |
| **Scan targets** | Fragments (drops / item frames / mobs / containers) + **ancient structures**. |

**Search flow:**

1. First searches **live targets** — drops, item frames, mob-carried, containers.
2. Finds the nearest fragment → **locks the flight path**, costing **300 fuel**.
3. No fragment found → **asynchronously searches ancient structures**; on finding one, locks the flight path, costing **600 fuel**.

**Feedback:**

| Situation | Message |
|---|---|
| Fragment locked | Beacon sound plays + `Container signal locked` / `Surface signal locked`. |
| Structure locked | `Ancient structure signal locked!` |
| Nothing found nearby | `No ancient structure echo detected within X blocks`. |
| All structures marked | `All ancient structures within search radius have been marked. Please move the TARDIS to another area.` |

**Flight path features:**

- The target position gets a **random offset of ±40 blocks** — you land near the target, not precisely inside the structure.
- This avoids "the TARDIS getting stuck in a building".

### Mark & Exclude

**Sneak + Right-click** the console → the Tracer **marks the nearby structure as explored**.

| Attribute | Value |
|---|---|
| **Search radius** | 5120 blocks. |
| **Mark tolerance** | 128 blocks (avoids marking the same structure repeatedly). |
| **Mark ownership** | Recorded per TARDIS. |

**Purpose**: When you don't want to be "guided" to a structure you've already looted, mark it, and the Tracer will **skip** it from then on.

**Feedback:**

- Mark successful → `Ancient structure at coordinates X, Y, Z has been marked as explored.`
- No markable structure nearby → `No markable ancient structure detected in the current area.`

### Smart Retry for Structure Search

The Tracer has a **chained retry** logic when searching for structures:

| Situation | Handling |
|---|---|
| **Found structure is already blacklisted** | Uses that structure as the new center and continues searching for the next one. |
| **Found structure is outside the original radius** | Treated as not found. |
| **Retries exhausted (5)** | Shows `All ancient structures within search radius have been marked`. |

> This logic ensures you won't be repeatedly guided back to the same pile of explored structures.

---

## Hidden Feature: Telepathic Circuit Healing

When the console's sonic port has **no Tracer inserted**, the Telepathic Circuit offers a hidden feature:

**Sneak + Empty-hand right-click the console** → heal yourself:

| Effect | Value |
|---|---|
| **Health restore** | **8 HP** (4 hearts). |
| **Hunger** | +4. |
| **Saturation** | +0.5. |

> This is a small perk DOCTOR M tucked into the console — sneak + right-click with an empty hand heals you with no consumable required.

---

## Fuel Cost Reference

Locking onto a target with the Tracer consumes TARDIS fuel:

| Target type | Fuel cost |
|---|---|
| **Fragment** (drop / item frame / mob / container) | **300**. |
| **Ancient structure** | **600**. |

> Structure searches cost twice as much as fragment searches — structures are usually farther away and more valuable.

---

## Structure Tags & Blacklist

The ancient structures the Tracer searches for are controlled by datapack tags.

### Structure Tag

**Tag path**: `data/doctor_m/tags/worldgen/structure/ktt_fragment_structures.json`

Contains KTT (Key to Time) related structures by default. You can **add or remove** structures via datapack so the Tracer searches for whatever targets you want.

### Astral Map Blacklist

**Blacklist path**: `data/doctor_m/tags/worldgen/structure/astral_map_blacklist.json`

By default, KTT-related structures cannot be searched. You can add new structure IDs to the blacklist — **both tags and individual structure IDs can be nested**.

> 💡 Tags decide "what the Tracer can find"; the blacklist decides "what the Tracer can't find". The two work together.

---

## Config Options

Some values of the Tracer can be adjusted in `config/doctor_m.json`:

| Key | Default | Description |
|---|---|---|
| `tracerScanRange` | 45.0 | Handheld auto-scan radius. |
| `tracerContainerScanRange` | 45 | Right-click container scan radius. |
| `tracerTelepathicScanRange` | 5120 | Telepathic Circuit long-range search radius. |
| `tracerStructureSearchRadius` | 51200 | Structure search radius. |
| `tracerBlacklistTolerance` | 128 | Blacklist tolerance radius. |
| `tracerMaxChainAttempts` | 5 | Max structure search retries. |
| `tracerFragmentFuelCost` | 300 | TARDIS fuel consumed to lock a fragment. |
| `tracerStructureFuelCost` | 600 | TARDIS fuel consumed to lock a structure. |
| `tracerLandingOffset` | 40 | TARDIS landing random offset. |
| `tracerHealAmount` | 8.0 | Health restored by sneak + right-click with empty hand on the Telepathic Circuit. |
| `tracerHealFood` | 4 | Hunger restored by sneak + right-click with empty hand on the Telepathic Circuit. |
| `tracerHealSaturation` | 0.5 | Saturation restored by sneak + right-click with empty hand on the Telepathic Circuit. |

---

## Trivia

- **The Tracer is the only item that can "lock a TARDIS flight path"** — you don't need to manually enter coordinates; it automatically guides the TARDIS to the vicinity of a fragment or structure.
- **The 5120-block search range** is over 100 times the normal scan (45 blocks) — so you don't have to wander around when exploring a new area.
- **The blacklist is per-TARDIS** — structures you mark with TARDIS A won't affect TARDIS B.
- **The "mark" feature requires sneaking** — because a plain right-click is the search, so excluding structures must go through sneaking.
- **Structures lock with a ±40-block random offset** — to prevent the TARDIS from crashing into a building, and to make you walk a bit after landing.
- **The Telepathic Circuit healing requires an empty hand** — holding something won't trigger it; only an empty hand will.
- **The Tracer's sounds are note block tones** — auto scanning uses "chime", manual scanning uses "pling". The two are different tones.
- **Auto scanning doesn't detect containers** — if you want fragments in chests, you must right-click actively.
- **The Tracer can be found in the Doctor's Tomb** — and the Doctor's Tomb only generates in Trenzalore's Forbidden Zone biome, at an extremely low chance.