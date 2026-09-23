<!-- lang:zh-CN -->
# 土卫六-泰坦 / Titan

![titan.png](assets/images/titan.png)

> **类型：** 星球
> **维度 ID：** `doctor_m:titan`  
> **显示名称：** 土卫六-泰坦  
> **加入版本：** v2.1 — 过去的历史...与尚未发生的...  
> **环境：** 无氧、低重力、极寒、无自然光照  
> **相关生物群系：** 泰坦平原、泰坦甲烷湖、泰坦沙丘  
> **相关结构：** 回廊废墟

---

## 概述

**土卫六-泰坦**是 DOCTOR M 在 v2.1 版本中加入的太空维度。

它对应现实中的土星卫星“泰坦”，是一个**没有大气、重力极低、极度寒冷**的异星世界。这里没有氧气，也没有自然光照，玩家必须穿戴宇航服才能生存。

泰坦不是一片空地。它拥有自己的生物群系、地表材质、气候表现与结构。目前可确认的生物群系有三种：**泰坦平原**、**泰坦甲烷湖**和**泰坦沙丘**。泰坦平原上极低概率生成一座塔迪斯废墟教堂——**回廊废墟**。

---

## 环境参数

土卫六-泰坦的维度参数如下：

| 项目 | 值 | 说明 |
|---|---|---|
| 自然维度 | 否 | 不是自然生成的维度。 |
| 环境光 | 0 | 没有基础环境光照。 |
| 天空光 | 无 | 没有天空光，维度整体偏暗。 |
| 天花板 | 无 | 维度不封闭。 |
| 坐标比例 | 1 | 与主世界相同，不缩放。 |
| 逻辑高度 | 384 | 维度逻辑高度。 |
| 最低点 | -64 | 可建造/生成的最低 Y 坐标。 |
| 总高度 | 384 | 从 -64 到 320。 |
| 床可用 | 是 | 可以正常使用床。 |
| 重生锚可用 | 是 | 重生锚可以正常使用。 |
| 袭击 | 无 | 不会发生袭击。 |
| 怪物自然生成 | 禁用 | 维度本身不生成怪物。 |
| 温度 | 94K（-179°C） | 现实土卫六的表面温度，极寒。 |
| 重力 | 地球的 14% | 低重力环境，跳跃和坠落表现与主世界不同。 |
| 氧气 | 无 | 没有可呼吸大气，必须穿宇航服。 |

---

## 生存要求

泰坦是一个**无氧、低重力、极寒**的维度，不能像主世界一样直接生存。

前往泰坦前，建议准备：

- **宇航服**：提供氧气供应，防止窒息。
- **氧气瓶或氧气补充设备**：维持宇航服氧气。
- **光源**：泰坦没有环境光，需要自带照明。
- **保暖与生存物资**：温度极低，环境严酷。
- **防止坠落的手段**：低重力下移动方式与主世界不同。

> 💡 泰坦没有氧气，必须穿宇航服。没有宇航服就进入泰坦，会很快陷入缺氧状态。

---

## 生物群系

泰坦共有三种已登记生物群系。

| 生物群系 ID | 显示名称 | 特征 |
|---|---|---|
| `doctor_m:titan_plains` | 泰坦平原 | 冰面与粗泥地表，是泰坦最常见的区域。 |
| `doctor_m:titan_methane_lakes` | 泰坦甲烷湖 | 蓝冰与玄武岩地表，水色深暗，对应甲烷湖。 |
| `doctor_m:titan_dunes` | 泰坦沙丘 | 红沙与红砂岩地表，沙丘地形。 |

### 泰坦平原 / Titan Plains

泰坦平原是泰坦的基础生物群系。

地表材质以**冰**和**粗泥**为主，向下过渡为石头。整体地形较为开阔，是泰坦中最适合作为探索起点的区域。

泰坦平原也是**回廊废墟**的生成地。

环境表现：

- 温度：-0.5
- 降水：无
- 粒子：灰烬，概率 0.02
- 天空颜色：11053224
- 雾颜色：12638463
- 草色：11184810
- 树叶色：10592673
- 水色：16445670
- 水雾色：13355979
- 地表特征：冰刺、砾石圆盘

### 泰坦甲烷湖 / Titan Methane Lakes

泰坦甲烷湖对应现实中土卫六的液态甲烷湖。

地表材质以**蓝冰**为主，向下过渡为**玄武岩**和**深板岩**。水色深暗，接近黑色，配合极低的温度，整体呈现出一种异星的寒冷感。

环境表现：

- 温度：-0.8
- 降水：无
- 粒子：灰烬，概率 0.01
- 天空颜色：11053224
- 雾颜色：12638463
- 水色：394758
- 水雾色：1973790
- 地表特征：冰刺、玄武岩柱

### 泰坦沙丘 / Titan Dunes

泰坦沙丘是沙丘地形。

地表材质以**红沙**为主，向下过渡为**红砂岩**和**石头**。与平原和甲烷湖相比，沙丘区域显得更干燥、更荒凉。

环境表现：

- 温度：-0.6
- 降水：无
- 粒子：灰烬，概率 0.03
- 天空颜色：11053224
- 雾颜色：12638463
- 草色：11184810
- 树叶色：10592673
- 水色：16445670
- 水雾色：13355979
- 地表特征：沙漠水井

---

## 结构

### 回廊废墟 / Coister Ruins

> **类型：** 塔迪斯废墟  
> **生成地：** 泰坦平原  
> **生成概率：** 极低

**回廊废墟**是坐落在泰坦平原上的一座**塔迪斯废墟**，外观是一座**破败的教堂**。

它的关键词是：

- 回廊 / Coister
- 教堂
- 塔迪斯废墟
- 泰坦平原
- 极低生成概率

回廊废墟是目前泰坦上可确认的唯一结构。它是一座与塔迪斯相关的废墟，意味着它可能包含塔迪斯残骸、旧日文明的痕迹或相关战利品。

由于生成概率极低，回廊废墟并不容易遇到。探索泰坦平原时需要一定的耐心与运气。

---

## 探索建议

- **必须穿宇航服**：泰坦没有氧气，没有宇航服会很快缺氧。
- **带足氧气**：提前准备氧气瓶或氧气补充设备。
- **自带光源**：泰坦环境光为 0，没有自然光照。
- **注意低重力**：重力只有地球的 14%，跳跃和坠落手感与主世界不同。
- **防寒准备**：温度约 -179°C，环境极寒。
- **寻找回廊废墟**：回廊废墟只生成在泰坦平原，且概率极低，需要耐心探索。

---

## 冷知识 / 备注

- 泰坦是 v2.1 新增维度。
- 泰坦的重力是地球的 **14%**，属于低重力环境。
- 泰坦没有氧气，必须穿宇航服。
- 泰坦的温度约为 **94K（-179°C）**。
- 泰坦没有环境光，维度整体偏暗。
- 泰坦的粒子效果是**灰烬**，不同生物群系的灰烬概率不同。
- 泰坦平原、甲烷湖、沙丘三种生物群系的地表材质各不相同。
- 甲烷湖使用**蓝冰 + 玄武岩**作为地表。
- 沙丘使用**红沙 + 红砂岩**作为地表。
- 平原使用**冰 + 粗泥**作为地表。
- 回廊废墟只生成在泰坦平原，且概率极低。

<!-- lang:en -->
# Titan / 土卫六-泰坦

![titan.png](assets/images/titan.png)

> **Type:** Planet
> **Dimension ID:** `doctor_m:titan`  
> **Display name:** Titan  
> **Added in:** v2.1 — history of the past... and of what has yet to come...  
> **Environment:** Anoxic, low gravity, extreme cold, no natural light  
> **Related biomes:** Titan Plains, Titan Methane Lakes, Titan Dunes  
> **Related structure:** Coister Ruins

---

## Overview

**Titan** is a space dimension added to DOCTOR M in v2.1.

It corresponds to Saturn's real-life moon, Titan — an alien world with **no atmosphere, extremely low gravity, and extreme cold**. There is no oxygen and no natural light here; players must wear a spacesuit to survive.

Titan isn't an empty void. It has its own biomes, surface materials, weather behavior, and structures. Three biomes are currently confirmed: **Titan Plains**, **Titan Methane Lakes**, and **Titan Dunes**. Titan Plains has an extremely rare chance to spawn a ruined TARDIS church — the **Coister Ruins**.

---

## Environment Parameters

Titan's dimension parameters are as follows:

| Item | Value | Description |
|---|---|---|
| Natural dimension | No | Not a naturally generated dimension. |
| Ambient light | 0 | No base ambient lighting. |
| Sky light | None | No sky light; the dimension is overall dark. |
| Ceiling | None | The dimension is not enclosed. |
| Coordinate scale | 1 | Same as the Overworld; no scaling. |
| Logical height | 384 | The dimension's logical height. |
| Min Y | -64 | Minimum Y coordinate for building/generation. |
| Total height | 384 | From -64 to 320. |
| Bed usable | Yes | Beds work normally. |
| Respawn anchor usable | Yes | Respawn anchors work normally. |
| Raids | None | No raids occur. |
| Natural mob spawning | Disabled | The dimension itself spawns no mobs. |
| Temperature | 94K (-179°C) | Real Titan's surface temperature; extremely cold. |
| Gravity | 14% of Earth's | Low-gravity environment; jumping and falling behave differently from the Overworld. |
| Oxygen | None | No breathable atmosphere; a spacesuit is required. |

---

## Survival Requirements

Titan is an **anoxic, low-gravity, extremely cold** dimension — you can't survive there the way you do in the Overworld.

Before heading to Titan, prepare:

- **Spacesuit**: Provides oxygen and prevents suffocation.
- **Oxygen tank or oxygen refill device**: Keeps the spacesuit topped up.
- **Light source**: Titan has no ambient light; bring your own.
- **Warmth and survival supplies**: The temperature is brutal.
- **Fall-prevention gear**: Movement works differently under low gravity.

> 💡 Titan has no oxygen — you must wear a spacesuit. Entering Titan without one quickly leads to suffocation.

---

## Biomes

Titan has three registered biomes.

| Biome ID | Display name | Features |
|---|---|---|
| `doctor_m:titan_plains` | Titan Plains | Ice and coarse dirt surface; the most common region on Titan. |
| `doctor_m:titan_methane_lakes` | Titan Methane Lakes | Blue ice and basalt surface; dark, deep water corresponding to methane lakes. |
| `doctor_m:titan_dunes` | Titan Dunes | Red sand and red sandstone surface; dune terrain. |

### Titan Plains

Titan Plains is Titan's base biome.

The surface is primarily **ice** and **coarse dirt**, transitioning down into stone. The terrain is fairly open — the best area on Titan to start exploring from.

Titan Plains is also where the **Coister Ruins** generate.

Environment details:

- Temperature: -0.5
- Precipitation: None
- Particles: Ash, chance 0.02
- Sky color: 11053224
- Fog color: 12638463
- Grass color: 11184810
- Foliage color: 10592673
- Water color: 16445670
- Water fog color: 13355979
- Surface features: Ice spikes, gravel disks

### Titan Methane Lakes

Titan Methane Lakes corresponds to the real Titan's liquid methane lakes.

The surface is primarily **blue ice**, transitioning down into **basalt** and **deepslate**. The water color is dark, near black, and combined with the extreme cold, it gives off an alien sense of chill.

Environment details:

- Temperature: -0.8
- Precipitation: None
- Particles: Ash, chance 0.01
- Sky color: 11053224
- Fog color: 12638463
- Water color: 394758
- Water fog color: 1973790
- Surface features: Ice spikes, basalt pillars

### Titan Dunes

Titan Dunes is dune terrain.

The surface is primarily **red sand**, transitioning down into **red sandstone** and **stone**. Compared to the plains and methane lakes, the dunes feel drier and more desolate.

Environment details:

- Temperature: -0.6
- Precipitation: None
- Particles: Ash, chance 0.03
- Sky color: 11053224
- Fog color: 12638463
- Grass color: 11184810
- Foliage color: 10592673
- Water color: 16445670
- Water fog color: 13355979
- Surface features: Desert wells

---

## Structures

### Coister Ruins

> **Type:** TARDIS ruins  
> **Generates in:** Titan Plains  
> **Spawn chance:** Extremely low

The **Coister Ruins** is a **TARDIS ruin** sitting on Titan Plains, appearing as a **dilapidated church**.

Its keywords are:

- Coister / Cloister
- Church
- TARDIS ruins
- Titan Plains
- Extremely low spawn chance

The Coister Ruins is currently the only confirmed structure on Titan. It's a TARDIS-related ruin, meaning it may contain TARDIS wreckage, traces of an old civilization, or related loot.

Because its spawn chance is extremely low, the Coister Ruins is not easy to find. Exploring Titan Plains takes patience and a bit of luck.

---

## Exploration Tips

- **Wear a spacesuit**: Titan has no oxygen; without a spacesuit you suffocate fast.
- **Bring plenty of oxygen**: Prepare oxygen tanks or refill devices ahead of time.
- **Bring your own light**: Titan's ambient light is 0; there is no natural lighting.
- **Mind the low gravity**: Gravity is only 14% of Earth's; jumping and falling feel different from the Overworld.
- **Prepare for the cold**: The temperature is about -179°C — extreme cold.
- **Search for the Coister Ruins**: They only generate on Titan Plains, and only at an extremely low chance, so patience is required.

---

## Trivia / Notes

- Titan is a dimension added in v2.1.
- Titan's gravity is **14%** of Earth's — a low-gravity environment.
- Titan has no oxygen; a spacesuit is mandatory.
- Titan's temperature is about **94K (-179°C)**.
- Titan has no ambient light; the dimension is overall dark.
- Titan's particle effect is **ash**, with different ash chances per biome.
- Titan Plains, Methane Lakes, and Dunes each have distinct surface materials.
- The Methane Lakes use **blue ice + basalt** as their surface.
- The Dunes use **red sand + red sandstone** as their surface.
- The Plains use **ice + coarse dirt** as their surface.
- The Coister Ruins only generate on Titan Plains, and only at an extremely low chance.