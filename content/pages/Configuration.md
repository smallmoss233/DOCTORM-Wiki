<!-- lang:zh-CN -->
# 配置系统 / Configuration

![Configuration.png](assets/images/Configuration.png)

**DOCTOR M** 提供了**近百项可配置项**，覆盖模组绝大部分功能。伤害数值、能力参数、燃料消耗、搜索范围……几乎所有能想到的数值都能改。

> 💡 **配置文件位置：** `config/doctor_m.json`  
> 💡 **配置界面命令：** `/doctor_m config`

---

## 打开配置界面

有两种方式打开图形化配置界面。

### 方式 1：游戏内命令

```text
/doctor_m config
```

**任何玩家**都能使用，不需要 OP 权限。

### 方式 2：ModMenu

如果你安装了 **Mod Menu**，可以在模组列表里找到 DOCTOR M，点击右侧的**齿轮图标**直接打开配置界面。

> 推荐用 ModMenu——不用记命令，还能看到模组信息。

---

## 界面操作

配置界面是**深色主题**，支持以下操作：

| 控件 | 操作 |
|---|---|
| **开关按钮** | 点击切换“开 / 关” |
| **数值步进器** | 点击 ◀ / ▶ 调整数值 |
| **Shift + 点击** | 步长 **×10**（快速调整） |
| **Ctrl + 点击** | 步长 **×100**（超大跨度调整） |
| **每行 ↻ 按钮** | 重置该项为默认值 |
| **底部“重置”** | **按住 Shift** 点击，重置所有配置 |
| **底部“保存”** | 写入配置文件并立即生效 |
| **底部“取消”** | 丢弃改动，恢复上次保存的配置 |

> ⚠️ **点击“保存”后配置立即生效**——大部分功能不需要重启游戏。

---

## 配置项分类

以下按模块分类列出所有可配置项。

> 💡 配置项会随着模组更新增加。新版本可能引入新项，旧配置文件会自动使用新项的默认值。

---

### 🎬 界面 / 渲染

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **涡旋标题背景** | 开 | 是否显示涡旋背景图。 |
| **无缝传送 (STP)** | 开 | 进出塔迪斯、使用涡旋操纵器、时间钥匙跨维度时，是否使用无加载屏幕传送。 |

> ⚠️ **装了沉浸式传送门（Immersive Portals）的玩家建议关闭 STP**——两者渲染管线冲突。

---

### 🛡️ 防御装备

#### TT 护盾

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **半边长** | 4.0 | 护盾立方体半边长（总边长 = 2 × 此值）。 |

#### 力场盾牌

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **能量上限** | 1500 | 力场能量最大值。 |
| **开启耗能 / tick** | 2 | 力场展开期间每 tick 消耗。 |
| **恢复 / tick** | 1 | 未使用时每 tick 恢复。 |
| **推开力度** | 0.25 | 力场内实体的持续推力。 |
| **释放弹开半径** | 5.0 | 松开右键的爆发半径。 |
| **释放弹开力度** | 1.2 | 爆发水平击退。 |
| **释放向上击飞** | 0.4 | 爆发垂直击飞。 |
| **冷却 (tick)** | 40 | 松开后的冷却时间。 |
| **环境伤害系数** | 0.1 | 环境伤害保留比例（10%）。 |
| **完全格挡非环境伤害** | 开 | 是否完全免疫非环境伤害。 |

#### 护盾生成器

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **能量上限** | 1000 | 护盾能量最大值。 |
| **恢复 / tick** | 1 | 每 tick 恢复量。 |
| **每点伤害耗能** | 5 | 吸收每点伤害消耗的能量。 |

---

### ⚔️ 武器

#### 时间钥匙

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **冷却 (tick)** | 1 | 百分比扣血触发间隔。 |
| **扣血倍率** | 2.0 | 扣血强度。 |
| **最低扣血 (%)** | 15.0 | 至少扣除的最大生命值百分比。 |

#### 永恒水晶

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **冷却 (tick)** | 100 | 百分比扣血触发间隔。 |
| **扣血倍率** | 0.5 | 扣血强度。 |
| **最低扣血 (%)** | 2.5 | 至少扣除的最大生命值百分比。 |

#### 特莉波卡的镰刀

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **冷却 (tick)** | 30 | 百分比扣血触发间隔。 |
| **扣血倍率** | 1.0 | 扣血强度。 |
| **最低扣血 (%)** | 25.0 | 至少扣除的最大生命值百分比。 |
| **右键斩击伤害** | 500.0 | 灵魂收割基础伤害。 |
| **AoE 半径** | 5.0 | 伤害溅射范围。 |
| **饥饿回复基础值** | 1 | 处决回血时同步回复的饱食度。 |
| **饱和度系数** | 0.5 | 处决回血时同步回复的饱和度。 |
| **处决吸血比例** | 0.6 | 处决回血占伤害的百分比。 |
| **普通吸血比例** | 0.25 | 普通命中回血占比。 |
| **处决 AoE 无视护甲** | 开 | 处决溅射是否无视减伤。 |

#### STCS

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **格挡最低能量消耗** | 1 | 剑封锁时的最低能耗。 |
| **范围伤害半径** | 3.0 | AoE 溅射范围。 |

---

### 🚀 塔迪斯

#### 自毁

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **总开关** | 开 | 是否启用自毁增强。 |
| **最大扩散半径** | 80 | 爆炸波的最大范围。 |
| **扩散步数** | 20 | 扩散动画的步数。 |
| **每步间隔 (tick)** | 40 | 每步之间的 tick 间隔。 |
| **最终清除半径** | 100 | 最终清除范围。 |
| **击退半径** | 2 | 击退影响范围。 |
| **击退力度** | 0.5 | 击退强度。 |

---

### 🌌 太空系统

#### 氧气瓶

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **最大容量** | 1200.0 | 普通氧气瓶容量。 |
| **每次转移量** | 100.0 | 给宇航服补氧时每次转移量。 |
| **饱食度阈值** | 6 | 低于此值视为“极度饥饿”（可用于触发食用彩蛋）。 |
| **成就长按时长** | 100 | 触发成就所需的长按 tick。 |
| **高级容量倍率** | 3.0 | 高级氧气瓶容量 = 普通 × 3。 |
| **超级容量倍率** | 5.0 | 超级氧气瓶容量 = 普通 × 5。 |
| **喷气推力强度** | 0.5 | 喷气氧气瓶推力。 |
| **喷气惯性保留** | 0.72 | 喷气氧气瓶惯性保留比例。 |
| **喷气重力补偿** | 0.12 | 喷气氧气瓶重力补偿。 |
| **喷气最大水平速度** | 8.0 | 喷气氧气瓶最大水平速度。 |
| **喷气最大垂直速度** | 6.0 | 喷气氧气瓶最大垂直速度。 |

#### 氧气补充机

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **冷却 (秒)** | 32 | 每次使用后的制氧等待时间。 |

#### 宇航服

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **最大氧气** | 1200.0 | 宇航服最大氧气容量。 |
| **水下耗氧** | 0.5 | 水下每 2 秒消耗的氧气量。 |
| **太空耗氧** | 1.0 | 太空无氧环境每 3 秒消耗的氧气量。 |

#### 制氧机

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **最大供氧半径** | 48 | 制氧机最大供氧半径。 |
| **开放空间半径** | 3 | 开放空间有效半径。 |
| **缓存过期 (tick)** | 100 | 制氧机缓存过期时间。 |
| **最小有效房间体积** | 10 | 最小有效房间大小。 |

#### 真空进食

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **每次耗氧** | 100.0 | 真空环境吃一次食物扣多少氧。 |
| **超时 (秒)** | 10 | pending 状态超时。 |

---

### 🔧 道具

#### 玩具匠的锤子

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **复制区块半径** | 20 | 复制塔迪斯时的区块半径。 |
| **生成偏移 (格)** | 2 | 复制塔迪斯的生成偏移。 |
| **触及距离** | 5.0 | 锤子的触及距离。 |
| **方块更新 flags** | 2 \| 16 | 方块更新 flags。 |
| **复制实体** | 开 | 是否复制实体。 |
| **复制方块实体** | 开 | 是否复制方块实体。 |

#### 追踪器 / 心灵感应电路

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **手持扫描半径** | 45.0 | 拿着追踪器时的自动扫描范围。 |
| **右键扫描容器半径** | 45 | 右键扫描的容器检测范围。 |
| **心灵感应搜索半径** | 5120 | 心灵感应电路的远程搜索半径。 |
| **结构搜索半径** | 51200 | 结构搜索范围。 |
| **黑名单容差** | 128 | 同一结构在此距离内视为已标记。 |
| **结构搜索重试次数** | 5 | 搜索下一个结构时的最大重试。 |
| **锁定碎片燃料消耗** | 300 | 锁定碎片消耗的塔迪斯燃料。 |
| **锁定结构燃料消耗** | 600 | 锁定结构消耗的塔迪斯燃料。 |
| **着陆随机偏移** | 40 | 塔迪斯在目标附近 ±N 格着陆。 |
| **治疗回血量** | 8.0 | 心灵感应电路空手潜行右键回血。 |
| **治疗饱食度** | 4 | 心灵感应电路空手潜行右键回复的饱食度。 |
| **治疗饱和度** | 0.5 | 心灵感应电路空手潜行右键回复的饱和度。 |

#### 涡旋操纵器

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **最大燃料** | 1500 | 涡旋操纵器最大燃料。 |
| **最大过热** | 100 | 涡旋操纵器最大过热。 |
| **冷却 (tick)** | 1200 | 普通冷却，1200 tick = 60 秒。 |
| **损坏恢复 (tick)** | 72000 | 核心熔毁后的恢复时间，72000 tick = 3 游戏日。 |
| **散热间隔** | 80 | 每 80 tick 散热一次。 |
| **每次散热量** | 1 | 每次散热减少的过热量。 |

---

## 使用技巧

### Shift / Ctrl 加速调整

调整数值时按住修饰键：

| 修饰键 | 步长倍数 | 用途 |
|---|---|---|
| **无** | ×1 | 精细调整。 |
| **Shift** | ×10 | 快速调整。 |
| **Ctrl** | ×100 | 超大跨度（如 5120 → 512000）。 |

> 调整燃料上限、搜索半径这类大数值时特别有用。

### 重置功能

| 操作 | 效果 |
|---|---|
| **每行 ↻** | 只重置该项。 |
| **底部“重置”（需 Shift）** | 重置**所有**配置为默认值。 |

> “重置”按钮需要**按住 Shift 才能点击**——防止误触。

### 保存 vs 取消

| 按钮 | 行为 |
|---|---|
| **保存** | 写入 `doctor_m.json` + 立即生效。 |
| **取消** | 丢弃改动，恢复上次保存的值。 |

> ⚠️ 关闭界面时如果没点保存，**改动会丢失**。

### 手动编辑配置

如果你更喜欢直接改文件，可以打开 `config/doctor_m.json`，所有字段都是**英文键名**（如 `tracerScanRange`），修改后**重启游戏**生效。

---

## 冷知识

- **配置文件是 JSON 格式**——用文本编辑器打开就能改，语法简单。
- **配置界面实时刷新**——你改一个数值，相关的功能立刻用新值。
- **Shift / Ctrl 加速是配置界面独有的**——不影响游戏内其他地方。
- **追踪器的“治疗”功能也是可配置的**——如果觉得回血太强，可以把 `tracerHealAmount` 调低。
- **“重置”按钮需要 Shift 是故意的**——防止玩家不小心把辛苦调好的配置一键清空。
- **配置项会随着模组更新增加**——新版本可能会引入新的可配置项，旧配置文件会自动使用新项的默认值。
- **配置界面无需 OP 权限**——任何玩家都能打开，但改的是本地配置。
- **STP 与沉浸式传送门冲突**——装 IP 的玩家建议关闭 STP，避免渲染管线打架。

<!-- lang:en -->
# Configuration / 配置系统

![Configuration.png](assets/images/Configuration.png)

**DOCTOR M** ships with **nearly a hundred configurable options**, covering most of the mod's features. Damage values, ability parameters, fuel consumption, search ranges… just about every number you can think of can be tweaked.

> 💡 **Config file location:** `config/doctor_m.json`  
> 💡 **Config UI command:** `/doctor_m config`

---

## Opening the Config UI

There are two ways to open the graphical config screen.

### Option 1: In-game command

```text
/doctor_m config
```

**Any player** can use it — no OP permission required.

### Option 2: Mod Menu

If you have **Mod Menu** installed, find DOCTOR M in the mod list and click the **gear icon** on the right to open the config screen directly.

> Mod Menu is recommended — no need to remember commands, and you can see mod info at a glance.

---

## UI Controls

The config screen uses a **dark theme** and supports the following:

| Control | Action |
|---|---|
| **Toggle button** | Click to switch on / off |
| **Number stepper** | Click ◀ / ▶ to adjust the value |
| **Shift + Click** | Step **×10** (fast adjust) |
| **Ctrl + Click** | Step **×100** (large-jump adjust) |
| **↻ button on each row** | Reset that entry to default |
| **"Reset" at the bottom** | **Hold Shift** and click to reset all settings |
| **"Save" at the bottom** | Write to the config file and apply immediately |
| **"Cancel" at the bottom** | Discard changes and restore the last saved config |

> ⚠️ **Settings take effect immediately after clicking "Save"** — most features don't require a game restart.

---

## Config Categories

The following lists all configurable options grouped by module.

> 💡 Options grow with mod updates. New versions may introduce new entries, and old config files will automatically use the new defaults.

---

### 🎬 UI / Rendering

| Option | Default | Description |
|---|---|---|
| **Vortex title background** | On | Whether to display the vortex background image. |
| **Seamless Teleport (STP)** | On | Whether to use loading-screen-free teleport when entering/exiting the TARDIS, using the Vortex Manipulator, or crossing dimensions with the Key to Time. |

> ⚠️ **Players using Immersive Portals should disable STP** — the two rendering pipelines conflict.

---

### 🛡️ Defensive Gear

#### TT Shield

| Option | Default | Description |
|---|---|---|
| **Half side length** | 4.0 | Half side length of the shield cube (total side = 2 × this value). |

#### Force Field Shield

| Option | Default | Description |
|---|---|---|
| **Max energy** | 1500 | Maximum force field energy. |
| **Drain per tick (active)** | 2 | Energy consumed per tick while the field is deployed. |
| **Regen per tick** | 1 | Energy restored per tick while idle. |
| **Push strength** | 0.25 | Constant push force applied to entities inside the field. |
| **Release knockback radius** | 5.0 | Burst radius when releasing the right-click. |
| **Release knockback strength** | 1.2 | Horizontal knockback of the burst. |
| **Release upward launch** | 0.4 | Vertical launch of the burst. |
| **Cooldown (ticks)** | 40 | Cooldown after release. |
| **Environmental damage factor** | 0.1 | Fraction of environmental damage kept (10%). |
| **Fully block non-environmental damage** | On | Whether to become fully immune to non-environmental damage. |

#### Shield Generator

| Option | Default | Description |
|---|---|---|
| **Max energy** | 1000 | Maximum shield energy. |
| **Regen per tick** | 1 | Regen amount per tick. |
| **Energy per damage point** | 5 | Energy consumed per point of damage absorbed. |

---

### ⚔️ Weapons

#### Key to Time

| Option | Default | Description |
|---|---|---|
| **Cooldown (ticks)** | 1 | Interval between percentage-based damage triggers. |
| **Damage multiplier** | 2.0 | Damage strength. |
| **Minimum damage (%)** | 15.0 | Minimum percentage of max health that will be dealt. |

#### Eternal Crystal

| Option | Default | Description |
|---|---|---|
| **Cooldown (ticks)** | 100 | Interval between percentage-based damage triggers. |
| **Damage multiplier** | 0.5 | Damage strength. |
| **Minimum damage (%)** | 2.5 | Minimum percentage of max health that will be dealt. |

#### Tlipoca's Scythe

| Option | Default | Description |
|---|---|---|
| **Cooldown (ticks)** | 30 | Interval between percentage-based damage triggers. |
| **Damage multiplier** | 1.0 | Damage strength. |
| **Minimum damage (%)** | 25.0 | Minimum percentage of max health that will be dealt. |
| **Right-click slash damage** | 500.0 | Base damage of the Soul Harvest. |
| **AoE radius** | 5.0 | Splash damage range. |
| **Hunger restore base** | 1 | Hunger restored alongside the execution heal. |
| **Saturation factor** | 0.5 | Saturation restored alongside the execution heal. |
| **Execution lifesteal ratio** | 0.6 | Percentage of damage healed back on execution. |
| **Normal lifesteal ratio** | 0.25 | Percentage of damage healed back on a normal hit. |
| **Execution AoE ignores armor** | On | Whether execution splash damage ignores damage reduction. |

#### STCS

| Option | Default | Description |
|---|---|---|
| **Blocking minimum energy cost** | 1 | Minimum energy cost while the sword is locked. |
| **Area damage radius** | 3.0 | AoE splash range. |

---

### 🚀 TARDIS

#### Self-Destruct

| Option | Default | Description |
|---|---|---|
| **Master switch** | On | Whether the enhanced self-destruct is enabled. |
| **Max spread radius** | 80 | Maximum range of the blast wave. |
| **Spread steps** | 20 | Number of steps in the spread animation. |
| **Tick interval per step** | 40 | Tick gap between steps. |
| **Final clear radius** | 100 | Final clear range. |
| **Knockback radius** | 2 | Knockback range. |
| **Knockback strength** | 0.5 | Knockback intensity. |

---

### 🌌 Space System

#### Oxygen Tank

| Option | Default | Description |
|---|---|---|
| **Max capacity** | 1200.0 | Normal oxygen tank capacity. |
| **Transfer amount per use** | 100.0 | Amount transferred each time you refill the spacesuit. |
| **Hunger threshold** | 6 | Below this value counts as "starving" (used for a food-related easter egg). |
| **Achievement hold duration** | 100 | Ticks of holding required to trigger the achievement. |
| **Advanced capacity multiplier** | 3.0 | Advanced oxygen tank capacity = normal × 3. |
| **Super capacity multiplier** | 5.0 | Super oxygen tank capacity = normal × 5. |
| **Jet thrust strength** | 0.5 | Thrust from the jetpack oxygen tank. |
| **Jet inertia retention** | 0.72 | Inertia retention ratio of the jetpack tank. |
| **Jet gravity compensation** | 0.12 | Gravity compensation of the jetpack tank. |
| **Jet max horizontal speed** | 8.0 | Maximum horizontal speed of the jetpack tank. |
| **Jet max vertical speed** | 6.0 | Maximum vertical speed of the jetpack tank. |

#### Oxygen Refiller

| Option | Default | Description |
|---|---|---|
| **Cooldown (seconds)** | 32 | Wait time between oxygen generation uses. |

#### Spacesuit

| Option | Default | Description |
|---|---|---|
| **Max oxygen** | 1200.0 | Maximum spacesuit oxygen capacity. |
| **Underwater oxygen drain** | 0.5 | Oxygen consumed every 2 seconds underwater. |
| **Space oxygen drain** | 1.0 | Oxygen consumed every 3 seconds in vacuum. |

#### Oxygen Generator

| Option | Default | Description |
|---|---|---|
| **Max supply radius** | 48 | Maximum oxygen supply radius. |
| **Open space radius** | 3 | Effective radius for open space. |
| **Cache expiry (ticks)** | 100 | Cache expiry time for the oxygen generator. |
| **Minimum valid room volume** | 10 | Minimum valid room size. |

#### Vacuum Eating

| Option | Default | Description |
|---|---|---|
| **Oxygen cost per use** | 100.0 | Oxygen drained each time you eat in a vacuum. |
| **Timeout (seconds)** | 10 | Timeout for the pending state. |

---

### 🔧 Gadgets

#### Toymaker's Hammer

| Option | Default | Description |
|---|---|---|
| **Copy chunk radius** | 20 | Chunk radius when copying the TARDIS. |
| **Spawn offset (blocks)** | 2 | Spawn offset when copying the TARDIS. |
| **Reach distance** | 5.0 | Reach distance of the hammer. |
| **Block update flags** | 2 \| 16 | Block update flags. |
| **Copy entities** | On | Whether to copy entities. |
| **Copy block entities** | On | Whether to copy block entities. |

#### Tracer / Telepathic Circuit

| Option | Default | Description |
|---|---|---|
| **Held scan radius** | 45.0 | Auto-scan range while holding the tracer. |
| **Right-click container scan radius** | 45 | Container detection range for the right-click scan. |
| **Telepathic search radius** | 5120 | Remote search radius of the telepathic circuit. |
| **Structure search radius** | 51200 | Structure search range. |
| **Blacklist tolerance** | 128 | Structures within this distance are considered already marked. |
| **Structure search retries** | 5 | Max retries when searching for the next structure. |
| **Lock fragment fuel cost** | 300 | TARDIS fuel consumed to lock a fragment. |
| **Lock structure fuel cost** | 600 | TARDIS fuel consumed to lock a structure. |
| **Landing random offset** | 40 | TARDIS lands within ±N blocks of the target. |
| **Heal amount** | 8.0 | Health restored by sneak + right-click with an empty hand on the telepathic circuit. |
| **Heal hunger** | 4 | Hunger restored by sneak + right-click with an empty hand on the telepathic circuit. |
| **Heal saturation** | 0.5 | Saturation restored by sneak + right-click with an empty hand on the telepathic circuit. |

#### Vortex Manipulator

| Option | Default | Description |
|---|---|---|
| **Max fuel** | 1500 | Maximum Vortex Manipulator fuel. |
| **Max overheat** | 100 | Maximum Vortex Manipulator overheat. |
| **Cooldown (ticks)** | 1200 | Normal cooldown; 1200 ticks = 60 seconds. |
| **Damage recovery (ticks)** | 72000 | Recovery time after core meltdown; 72000 ticks = 3 in-game days. |
| **Heat dissipation interval** | 80 | Dissipates heat every 80 ticks. |
| **Heat dissipated per tick** | 1 | Overheat reduced per dissipation. |

---

## Tips & Tricks

### Shift / Ctrl Speed Adjust

Hold a modifier key while adjusting values:

| Modifier | Step multiplier | Use case |
|---|---|---|
| **None** | ×1 | Fine tuning. |
| **Shift** | ×10 | Quick adjust. |
| **Ctrl** | ×100 | Huge jumps (e.g. 5120 → 512000). |

> Especially handy for large values like fuel caps or search radii.

### Reset Features

| Action | Effect |
|---|---|
| **↻ on each row** | Reset just that entry. |
| **"Reset" at the bottom (Shift required)** | Reset **all** settings to default. |

> The "Reset" button requires **holding Shift to click** — to prevent accidental wipes.

### Save vs Cancel

| Button | Behavior |
|---|---|
| **Save** | Writes to `doctor_m.json` + takes effect immediately. |
| **Cancel** | Discards changes and restores the last saved values. |

> ⚠️ If you close the UI without saving, **your changes will be lost**.

### Editing the Config Manually

If you prefer editing the file directly, open `config/doctor_m.json`. All fields use **English key names** (e.g. `tracerScanRange`), and changes take effect after a **game restart**.

---

## Trivia

- **The config file is plain JSON** — open it with any text editor; the syntax is simple.
- **The config UI refreshes in real time** — change a value and the related feature uses the new value instantly.
- **Shift / Ctrl speed adjust is unique to the config UI** — it doesn't affect anything else in-game.
- **The tracer's "heal" is configurable too** — if the healing feels too strong, lower `tracerHealAmount`.
- **"Reset" requiring Shift is intentional** — so players don't accidentally wipe a carefully tuned config.
- **Options grow with mod updates** — new versions may introduce new entries, and old config files will automatically use the new defaults.
- **The config UI needs no OP permission** — any player can open it, but it edits local settings.
- **STP conflicts with Immersive Portals** — IP users should disable STP to avoid rendering pipeline clashes.