<!-- lang:zh-CN -->
# 特兰泽洛 / Trenzalore

![Trenzalore.png](assets/images/Trenzalore.png)

> **类型：** 星球
> **维度 ID：** `doctor_m:trenzalore`  
> **显示名称：** §3特兰泽洛  
> **加入版本：** v2.1 — 过去的历史...与尚未发生的...  
> **环境：** 永夜、大雪、有天空光、有自然生物生成  
> **相关生物群系：** 雪原、雪坡、雪林、冰刺之地、冰封山峰、禁区  
> **相关结构：** 博士之墓  
> **相关进度：** 时候要到了？

---

## 概述

**特兰泽洛**是 DOCTOR M 中的一个维度。

从进度文本来看，特兰泽洛被描述为：

> 在大雪飞扬的城镇，一位年老的战士即将迎来他的钟声，他荣耀的旧躯即将迎来新的篇章。

这段描述指向一个被大雪覆盖的城镇，以及某种与“钟声”“旧躯”“新篇章”有关的重大事件。整体氛围偏向终局、轮回与告别。

特兰泽洛是一个**永夜维度**。它的时间固定在夜晚，环境光极低，天空光仍然存在，但整体非常昏暗。维度内以雪地生物群系为主，同时包含一个特殊生物群系——**禁区**。禁区中极低概率生成**博士之墓**。

---

## 环境参数

| 项目 | 值 | 说明              |
|---|---|-----------------|
| 自然维度 | 是 | 自然维度。           |
| 环境光 | 0.05 | 极低，整体非常昏暗。      |
| 固定时间 | 18000 | 永夜，时间固定在夜晚。     |
| 天空光 | 有 | 存在天空光，但时间固定在夜晚。 |
| 天花板 | 无 | 维度不封闭。          |
| 坐标比例 | 1.0 | 与主世界相同，不缩放。     |
| 逻辑高度 | 256 | 维度逻辑高度。         |
| 最低点 | -64 | 可建造/生成的最低 Y 坐标。 |
| 总高度 | 384 | 从 -64 到 320。    |
| 床可用 | 是 | 可以正常使用床。        |
| 重生锚 | 不可用 | 重生锚无法使用。        |
| 袭击 | 无 | 不会发生袭击。         |
| 怪物自然生成 | 是 | 维度会自然生成怪物。      |
| 维度效果 | `minecraft:the_end` | 使用末地维度效果。       |

---

## 永夜

特兰泽洛最显著的特征是**永夜**。

- 时间固定在 **18000**，对应 Minecraft 的夜晚。
- 天空光仍然存在，但时间不会自然流逝到白天。
- 环境光为 **0.05**，比普通夜晚更暗。
- 整体氛围偏暗、偏冷，配合大雪与雪地群系，呈现出一种终局感。

> 💡 特兰泽洛的永夜与进度描述中的“钟声”“年老的战士”相互呼应，营造出一种时间停滞、终局将至的氛围。

---

## 生物群系

特兰泽洛共有六种已登记生物群系。

| 生物群系 ID | 显示名称 | 类型 |
|---|---|---|
| `minecraft:snowy_plains` | 雪原 | 原版雪地 |
| `minecraft:snowy_slopes` | 雪坡 | 原版雪地 |
| `minecraft:snowy_taiga` | 雪林 | 原版雪地 |
| `minecraft:ice_spikes` | 冰刺之地 | 原版雪地 |
| `minecraft:frozen_peaks` | 冰封山峰 | 原版雪地 |
| `doctor_m:forbidden_zone` | 禁区 | DOCTOR M 特殊群系 |

### 雪地群系

特兰泽洛的大部分区域由原版雪地生物群系组成：

- 雪原
- 雪坡
- 雪林
- 冰刺之地
- 冰封山峰

这些群系使用主世界雪地地表规则：草方块、泥土、石头。整体表现为大雪覆盖的寒冷地形，与进度描述中的“大雪飞扬的城镇”一致。

### 禁区 / Forbidden Zone

**禁区**是特兰泽洛的特殊生物群系。

| 属性 | 值 |
|---|---|
| 温度 | 2.0 |
| 降水 | 无 |
| 天空颜色 | 0（纯黑） |
| 雾颜色 | 0（纯黑） |
| 水颜色 | 0（纯黑） |
| 水雾颜色 | 0（纯黑） |
| 草颜色 | 0（纯黑） |
| 树叶颜色 | 0（纯黑） |
| 生物生成 | 无 |
| 结构特征 | 无 |
| 雕刻器 | 无 |

禁区的视觉表现极为特殊：

- 天空、雾、水、草、树叶全部为**纯黑**。
- 没有降水。
- 没有任何生物自然生成。
- 没有任何地表特征。

禁区的地表由**岩浆块、黑石、黑曜石、石头**组成，整体呈现出一片黑暗、灼热、荒芜的景象，与特兰泽洛其他雪地群系形成强烈对比。

> ⚠️ 禁区虽然温度参数为 2.0，但地表由岩浆块和黑石构成，实际环境仍然危险。

---

## 结构

### 博士之墓 / Doctor's Tomb

> **类型：** 巨型建筑  
> **生成地：** 禁区  
> **生成概率：** 极低

**博士之墓**是特兰泽洛中最重要的结构。

更新日志描述：

> 禁区！与博士之墓！目前为止 DOCTOR M 最大的建筑！

博士之墓具有以下特征：

- 只生成在**禁区**生物群系。
- 生成概率**极低**。
- 是 DOCTOR M 目前为止**最大的建筑**。
- 与博士、时间领主、塔迪斯等主题直接相关。

由于博士之墓只生成在禁区，而禁区本身就是一个特殊且危险的生物群系，寻找博士之墓需要先在特兰泽洛中找到禁区，再在禁区中寻找极低概率生成的博士之墓。

> 💡 博士之墓是特兰泽洛的核心探索目标之一。

---

## 进入方式

特兰泽洛可以通过塔迪斯前往。

具体导航方式请参考塔迪斯相关 Wiki。

---

## 探索建议

- **准备光源**：特兰泽洛是永夜维度，环境光极低，需要自带照明。
- **保暖准备**：大部分区域为雪地群系，环境寒冷。
- **注意怪物**：特兰泽洛会自然生成怪物，且永夜环境下怪物生成不受白天限制。
- **寻找禁区**：禁区是博士之墓的唯一生成地，需要先找到禁区。
- **耐心寻找博士之墓**：博士之墓在禁区中生成概率极低，需要大量探索。
- **禁区环境危险**：禁区地表由岩浆块、黑石、黑曜石组成，探索时需谨慎。

---

## 相关进度

| 进度 | 标题 | 描述 |
|---|---|---|
| `advancements.doctor_m.enter_trenzalore` | 时候要到了？ | 在大雪飞扬的城镇，一位年老的战士即将迎来他的钟声，他荣耀的旧躯即将迎来新的篇章。 |

---

## 冷知识 / 备注

- 特兰泽洛是 v2.1 新增维度。
- 特兰泽洛是**永夜维度**，时间固定在 18000。
- 特兰泽洛的环境光只有 **0.05**，比普通夜晚更暗。
- 特兰泽洛以雪地群系为主，同时包含特殊群系**禁区**。
- 禁区的天空、雾、水、草、树叶全部为**纯黑**。
- 禁区没有任何生物自然生成。
- **博士之墓**只生成在禁区，且概率极低。
- 博士之墓是 DOCTOR M 目前为止**最大的建筑**。
- 特兰泽洛的维度 ID 是 `doctor_m:trenzalore`。
- 特兰泽洛的维度效果使用 `minecraft:overworld`。
- 特兰泽洛可以正常使用床，但**不能使用重生锚**。
- 特兰泽洛会自然生成怪物，怪物生成光照范围为 0–7。

<!-- lang:en -->
# Trenzalore / 特兰泽洛

![Trenzalore.png](assets/images/Trenzalore.png)

> **Type:** Planet
> **Dimension ID:** `doctor_m:trenzalore`  
> **Display name:** §3Trenzalore  
> **Added in:** v2.1 — history of the past... and of what has yet to come...  
> **Environment:** Endless night, heavy snow, sky light present, natural mob spawning enabled  
> **Related biomes:** Snowy Plains, Snowy Slopes, Snowy Taiga, Ice Spikes, Frozen Peaks, Forbidden Zone  
> **Related structure:** Doctor's Tomb  
> **Related advancement:** Is the Time Coming?

---

## Overview

**Trenzalore** is a dimension in DOCTOR M.

Judging from the advancement text, Trenzalore is described as:

> In a town beneath the falling snow, an old warrior is about to meet his bell; his glorious old body is about to greet a new chapter.

This description points to a snow-covered town and some major event tied to a "bell", an "old body", and a "new chapter". The overall atmosphere leans toward finality, cycles, and farewells.

Trenzalore is an **endless night dimension**. Its time is fixed at night, ambient light is extremely low, and sky light still exists, but the whole place is very dim. The dimension is dominated by snowy biomes and also contains one special biome — the **Forbidden Zone**. The **Doctor's Tomb** generates in the Forbidden Zone at an extremely low chance.

---

## Environment Parameters

| Item | Value | Description |
|---|---|---|
| Natural dimension | Yes | A natural dimension. |
| Ambient light | 0.05 | Extremely low; overall very dim. |
| Fixed time | 18000 | Endless night; time is fixed at night. |
| Sky light | Yes | Sky light exists, but time is fixed at night. |
| Ceiling | None | The dimension is not enclosed. |
| Coordinate scale | 1.0 | Same as the Overworld; no scaling. |
| Logical height | 256 | The dimension's logical height. |
| Min Y | -64 | Minimum Y coordinate for building/generation. |
| Total height | 384 | From -64 to 320. |
| Bed usable | Yes | Beds work normally. |
| Respawn anchor | Not usable | Respawn anchors do not work. |
| Raids | None | No raids occur. |
| Natural mob spawning | Yes | The dimension spawns mobs naturally. |
| Dimension effect | `minecraft:the_end` | Uses the End dimension effect. |

---

## Endless Night

The most defining feature of Trenzalore is its **endless night**.

- Time is fixed at **18000**, which corresponds to Minecraft's night.
- Sky light still exists, but time never naturally advances to day.
- Ambient light is **0.05** — darker than a normal night.
- The overall mood is dark and cold, and combined with the heavy snow and snowy biomes, it conveys a sense of finality.

> 💡 Trenzalore's endless night echoes the "bell" and the "old warrior" from the advancement description, creating an atmosphere of time standing still and the end drawing near.

---

## Biomes

Trenzalore has six registered biomes.

| Biome ID | Display name | Type |
|---|---|---|
| `minecraft:snowy_plains` | Snowy Plains | Vanilla snowy |
| `minecraft:snowy_slopes` | Snowy Slopes | Vanilla snowy |
| `minecraft:snowy_taiga` | Snowy Taiga | Vanilla snowy |
| `minecraft:ice_spikes` | Ice Spikes | Vanilla snowy |
| `minecraft:frozen_peaks` | Frozen Peaks | Vanilla snowy |
| `doctor_m:forbidden_zone` | Forbidden Zone | DOCTOR M special biome |

### Snowy Biomes

Most of Trenzalore is made up of vanilla snowy biomes:

- Snowy Plains
- Snowy Slopes
- Snowy Taiga
- Ice Spikes
- Frozen Peaks

These biomes use Overworld snowy surface rules: grass block, dirt, stone. The overall look is cold terrain covered in heavy snow, matching the "town beneath the falling snow" from the advancement description.

### Forbidden Zone

The **Forbidden Zone** is Trenzalore's special biome.

| Attribute | Value |
|---|---|
| Temperature | 2.0 |
| Precipitation | None |
| Sky color | 0 (pure black) |
| Fog color | 0 (pure black) |
| Water color | 0 (pure black) |
| Water fog color | 0 (pure black) |
| Grass color | 0 (pure black) |
| Foliage color | 0 (pure black) |
| Mob spawning | None |
| Structure features | None |
| Carvers | None |

The Forbidden Zone's visual presentation is extremely distinctive:

- Sky, fog, water, grass, and foliage are all **pure black**.
- No precipitation.
- No mobs spawn naturally.
- No surface features.

The Forbidden Zone's surface is made of **magma blocks, blackstone, obsidian, and stone**, presenting a dark, scorching, barren landscape in stark contrast to Trenzalore's other snowy biomes.

> ⚠️ Even though the Forbidden Zone's temperature parameter is 2.0, its surface is made of magma blocks and blackstone — the environment is still dangerous.

---

## Structures

### Doctor's Tomb

> **Type:** Massive structure  
> **Generates in:** Forbidden Zone  
> **Spawn chance:** Extremely low

The **Doctor's Tomb** is the most important structure in Trenzalore.

Changelog description:

> Forbidden Zone! And the Doctor's Tomb! The largest structure in DOCTOR M so far!

The Doctor's Tomb has the following features:

- Only generates in the **Forbidden Zone** biome.
- Spawn chance is **extremely low**.
- Is the **largest structure** in DOCTOR M so far.
- Directly tied to the Doctor, Time Lords, the TARDIS, and related themes.

Since the Doctor's Tomb only generates in the Forbidden Zone, and the Forbidden Zone is itself a special and dangerous biome, finding the Doctor's Tomb requires first locating the Forbidden Zone in Trenzalore, then searching within it for a structure that spawns at an extremely low chance.

> 💡 The Doctor's Tomb is one of Trenzalore's core exploration objectives.

---

## Entering

Trenzalore can be reached via the TARDIS.

For navigation details, see the TARDIS-related Wiki page.

---

## Exploration Tips

- **Bring a light source**: Trenzalore is an endless night dimension with very low ambient light; bring your own lighting.
- **Prepare for the cold**: Most of the region is snowy biomes; the environment is cold.
- **Watch out for mobs**: Trenzalore spawns mobs naturally, and under endless night, mob spawning isn't limited by daytime.
- **Find the Forbidden Zone**: The Forbidden Zone is the only place the Doctor's Tomb generates; you must find it first.
- **Be patient hunting the Doctor's Tomb**: The Doctor's Tomb has an extremely low spawn chance in the Forbidden Zone, and requires extensive exploration.
- **The Forbidden Zone is dangerous**: Its surface is made of magma blocks, blackstone, and obsidian — explore carefully.

---

## Related Advancement

| Advancement | Title | Description |
|---|---|---|
| `advancements.doctor_m.enter_trenzalore` | Is the Time Coming? | In a town beneath the falling snow, an old warrior is about to meet his bell; his glorious old body is about to greet a new chapter. |

---

## Trivia / Notes

- Trenzalore is a dimension added in v2.1.
- Trenzalore is an **endless night dimension**; time is fixed at 18000.
- Trenzalore's ambient light is only **0.05** — darker than a normal night.
- Trenzalore is dominated by snowy biomes, and also contains the special biome **Forbidden Zone**.
- The Forbidden Zone's sky, fog, water, grass, and foliage are all **pure black**.
- No mobs spawn naturally in the Forbidden Zone.
- The **Doctor's Tomb** only generates in the Forbidden Zone, and only at an extremely low chance.
- The Doctor's Tomb is the **largest structure** in DOCTOR M so far.
- Trenzalore's dimension ID is `doctor_m:trenzalore`.
- Trenzalore's dimension effect uses `minecraft:overworld`.
- Beds work normally in Trenzalore, but **respawn anchors do not**.
- Trenzalore spawns mobs naturally, with a mob spawning light range of 0–7.