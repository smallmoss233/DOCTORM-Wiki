<!-- lang:zh-CN -->
# DOCTOR M 塔迪斯建造指令 / `/doctor_m build`

![doctor_m_build.png](assets/images/doctor_m_build.png)

> **类型：** 管理指令  
> **权限：** 需要权限等级 2（OP）  
> **用途：** 创建一台塔迪斯，并可指定内饰、外观、主人、名称、子系统模式、生成位置与执行玩家。  
> **相关指令：** `/doctor_m config`

## 概述

`/doctor_m build` 是 DOCTOR M 中用于创建塔迪斯的指令。它可以根据参数生成一台新的塔迪斯，并自动完成燃料、主人、忠诚、名称、子系统等初始化设置。

如果未指定内饰或外观，系统会使用随机默认主题。  
如果未指定主人，默认以执行玩家为主人。  
如果未指定名称，塔迪斯会命名为 `<主人名>'s TARDIS`。

---

## 语法

最基础的用法：

```text
/doctor_m build
```

完整参数可组合使用：

```text
/doctor_m build <desktop> <exterior> <owner> [name <名称>] [<subsystem>] [<pos>] [<executor>]
```

也可直接指定坐标：

```text
/doctor_m build <desktop> <exterior> <owner> <pos> <executor>
```

常见形式：

```text
/doctor_m build
/doctor_m build <desktop>
/doctor_m build <desktop> <exterior>
/doctor_m build <desktop> <exterior> <owner>
/doctor_m build <desktop> <exterior> <owner> name <名称>
/doctor_m build <desktop> <exterior> <owner> <subsystem>
/doctor_m build <desktop> <exterior> <owner> <subsystem> <pos>
/doctor_m build <desktop> <exterior> <owner> <subsystem> <pos> <executor>
```

> 实际输入时，内饰、外观、主人、子系统、名称、执行玩家等参数都支持自动补全。

---

## 参数说明

| 参数 | 是否必填 | 说明 | 默认值 |
|---|---|---|---|
| `<desktop>` | 否 | 塔迪斯内饰主题。支持自动补全。 | 随机默认主题 |
| `<exterior>` | 否 | 塔迪斯外观变体。支持自动补全。 | 随机默认主题 |
| `<owner>` | 否 | 塔迪斯主人。支持玩家名、`me` 和部分预设名称。 | 执行玩家 |
| `name <名称>` | 否 | 设置塔迪斯名称。需要先写 `name` 关键字。 | `<主人名>'s TARDIS` |
| `<subsystem>` | 否 | 子系统模式。可选 `full`、`essential`、`only_engine`、`none`。 | `full` |
| `<pos>` | 否 | 塔迪斯生成坐标。 | 执行玩家上方 2 格 |
| `<executor>` | 否 | 指定执行玩家。控制台执行时必填。 | 命令发送者玩家 |

---

## 子系统模式

| 模式 ID | 显示名称 | 效果 |
|---|---|---|
| `full` | 全满 | 所有子系统启用，并保持满耐久。 |
| `essential` | 基础配置 | 仅启用基础子系统，例如引擎、生命维持、稳定器、去物质化、变色龙等。 |
| `only_engine` | 只有引擎 | 仅启用引擎。 |
| `none` | 无 | 关闭所有子系统。 |

切换或创建时，成功提示会显示当前搭载的子系统模式。

---

## 主人参数

`<owner>` 支持以下写法：

- 乱写
- 在线玩家名
- `me`：以执行玩家为主人
- 预设补全名称，例如：
    - `Doctor`
    - `Master`
    - `Mary.Jin`
    - `Marian.jin`
    - `Evereye`
    - `SmallMoss`
    - `Mobius`

如果指定的玩家在线，塔迪斯会以该玩家为主人。  
如果指定的是名称但玩家不在线，则会以该名称作为主人名记录。

---

## 执行玩家与坐标

### 执行玩家

如果未指定 `<executor>`：

- 玩家亲自执行指令时，默认执行玩家就是该玩家。
- 控制台执行时，必须指定 `<executor>`，否则会报错。

### 生成坐标

如果未指定 `<pos>`：

- 塔迪斯会生成在执行玩家上方 2 格的位置。
- 朝向会根据执行玩家的身体朝向决定。

如果指定了坐标，则使用该坐标作为塔迪斯生成位置。

---

## 默认创建行为

使用 `/doctor_m build` 创建塔迪斯时，系统会自动：

- 将燃料补满并启用供电。
- 根据子系统模式启用或关闭对应子系统。
- 将指定主人设为塔迪斯主人。
- 记录玩家创建者名称。
- 如果未指定内饰和外观，则应用随机默认主题。
- 如果未指定名称，则命名为 `<主人名>'s TARDIS`。

---

## 成功提示

创建成功后，会依次显示：

```text
塔迪斯创建成功！
塔迪斯UUID：<uuid>
塔迪斯名字：<name>
塔迪斯内饰：<desktop>
塔迪斯外观：<exterior>
塔迪斯主人：<owner>
搭载子系统：<subsystem_mode>
所处位置：<position>
```

---

## 错误提示

| 提示 | 说明 |
|---|---|
| `未知的执行玩家：%s` | 指定的执行玩家不存在。 |
| `无效的内饰 ID 格式：%s` | 内饰 ID 格式不正确。 |
| `未知的内饰：%s（解析为 %s）` | 找不到对应内饰。 |
| `无效的外观 ID 格式：%s` | 外观 ID 格式不正确。 |
| `未知的外观：%s（解析为 %s）` | 找不到对应外观。 |
| `创建失败：可能已达到最大塔迪斯数量限制` | 服务器塔迪斯数量已达上限。 |
| `无效的子系统模式：%s。可用选项：full, essential, engine_only, none` | 子系统模式填写错误。 |

---

## 自动补全

| 参数 | 补全内容 |
|---|---|
| `<desktop>` | 所有已注册内饰 |
| `<exterior>` | 所有已注册外观 |
| `<owner>` | 在线玩家、`me`、部分预设名称 |
| `<subsystem>` | `full`、`essential`、`only_engine`、`none` |
| `name <名称>` | `Lolita`、`Marian`、`Marian.jin`、`Evereye`、`Mobius`、`Sexy`、`Idris`、`Watcher` |
| `<executor>` | 在线玩家、`me` |

---

## 示例

以下示例仅展示格式，实际内饰、外观 ID 以游戏内自动补全为准。

```text
/doctor_m build
```

为执行玩家创建一台默认塔迪斯。

```text
/doctor_m build evereye
```

指定内饰为 `evereye`。

```text
/doctor_m build evereye evereyebox
```

指定内饰与外观。

```text
/doctor_m build evereye evereyebox me
```

以执行玩家为主人。

```text
/doctor_m build evereye evereyebox me name Lolita
```

设置塔迪斯名称为 `Lolita`。

```text
/doctor_m build evereye evereyebox me essential
```

使用基础子系统配置创建。

```text
/doctor_m build evereye evereyebox me full 100 64 100
```

在指定坐标创建塔迪斯。

```text
/doctor_m build evereye evereyebox me none 100 64 100 Steve
```

指定坐标，并让 `Steve` 作为执行玩家。

---

## 冷知识

- `/doctor_m build` 这个指令是为了永恒的旅行制作出来的~

<!-- lang:en -->
# DOCTOR M TARDIS Build Command / `/doctor_m build`

![doctor_m_build.png](assets/images/doctor_m_build.png)

> **Type:** Admin command  
> **Permission:** Requires permission level 2 (OP)  
> **Purpose:** Creates a TARDIS, with optional desktop, exterior, owner, name, subsystem mode, spawn position, and executor.  
> **Related command:** `/doctor_m config`

## Overview

`/doctor_m build` is the DOCTOR M command for creating a TARDIS. It spawns a new TARDIS based on the given parameters and automatically handles initialization for fuel, owner, loyalty, name, and subsystems.

If no desktop or exterior is specified, a random default theme is used.  
If no owner is specified, the executing player becomes the owner.  
If no name is specified, the TARDIS is named `<owner>'s TARDIS`.

---

## Syntax

The most basic usage:

```text
/doctor_m build
```

The full set of parameters can be combined:

```text
/doctor_m build <desktop> <exterior> <owner> [name <name>] [<subsystem>] [<pos>] [<executor>]
```

Coordinates can also be specified directly:

```text
/doctor_m build <desktop> <exterior> <owner> <pos> <executor>
```

Common forms:

```text
/doctor_m build
/doctor_m build <desktop>
/doctor_m build <desktop> <exterior>
/doctor_m build <desktop> <exterior> <owner>
/doctor_m build <desktop> <exterior> <owner> name <name>
/doctor_m build <desktop> <exterior> <owner> <subsystem>
/doctor_m build <desktop> <exterior> <owner> <subsystem> <pos>
/doctor_m build <desktop> <exterior> <owner> <subsystem> <pos> <executor>
```

> Autocomplete is supported for desktop, exterior, owner, subsystem, name, and executor parameters while typing.

---

## Parameters

| Parameter | Required | Description | Default |
|---|---|---|---|
| `<desktop>` | No | TARDIS desktop theme. Supports autocomplete. | Random default theme |
| `<exterior>` | No | TARDIS exterior variant. Supports autocomplete. | Random default theme |
| `<owner>` | No | TARDIS owner. Accepts player names, `me`, and some preset names. | Executing player |
| `name <name>` | No | Sets the TARDIS name. The `name` keyword must come first. | `<owner>'s TARDIS` |
| `<subsystem>` | No | Subsystem mode. Options: `full`, `essential`, `only_engine`, `none`. | `full` |
| `<pos>` | No | TARDIS spawn coordinates. | 2 blocks above the executing player |
| `<executor>` | No | Specifies the executing player. Required when run from the console. | The command sender |

---

## Subsystem Modes

| Mode ID | Display name | Effect |
|---|---|---|
| `full` | Full | All subsystems enabled, and kept at full durability. |
| `essential` | Essential | Only essential subsystems enabled, such as engine, life support, stabilizers, dematerialization, chameleon circuit, etc. |
| `only_engine` | Engine only | Only the engine is enabled. |
| `none` | None | All subsystems disabled. |

When switching or creating, the success message shows the currently loaded subsystem mode.

---

## Owner Parameter

`<owner>` accepts the following:

- Arbitrary text
- An online player name
- `me`: uses the executing player as the owner
- Preset autocomplete names, for example:
    - `Doctor`
    - `Master`
    - `Mary.Jin`
    - `Marian.jin`
    - `Evereye`
    - `SmallMoss`
    - `Mobius`

If the specified player is online, the TARDIS takes that player as its owner.  
If a name is specified but the player is offline, that name is recorded as the owner name.

---

## Executor and Coordinates

### Executor

If `<executor>` is not specified:

- When a player runs the command directly, the executing player defaults to that player.
- When run from the console, `<executor>` must be specified, otherwise the command errors out.

### Spawn Coordinates

If `<pos>` is not specified:

- The TARDIS spawns 2 blocks above the executing player.
- Its facing is determined by the executing player's body orientation.

If coordinates are specified, that position is used as the TARDIS spawn location.

---

## Default Creation Behavior

When creating a TARDIS with `/doctor_m build`, the system automatically:

- Fills the fuel to max and enables power.
- Enables or disables subsystems according to the subsystem mode.
- Sets the specified owner as the TARDIS owner.
- Records the creating player's name.
- Applies a random default theme if no desktop or exterior is specified.
- Names it `<owner>'s TARDIS` if no name is specified.

---

## Success Message

After a successful creation, the following are shown in order:

```text
TARDIS created successfully!
TARDIS UUID: <uuid>
TARDIS name: <name>
TARDIS desktop: <desktop>
TARDIS exterior: <exterior>
TARDIS owner: <owner>
Loaded subsystems: <subsystem_mode>
Location: <position>
```

---

## Error Messages

| Message | Description |
|---|---|
| `Unknown executing player: %s` | The specified executing player does not exist. |
| `Invalid desktop ID format: %s` | The desktop ID format is incorrect. |
| `Unknown desktop: %s (parsed as %s)` | No matching desktop found. |
| `Invalid exterior ID format: %s` | The exterior ID format is incorrect. |
| `Unknown exterior: %s (parsed as %s)` | No matching exterior found. |
| `Creation failed: maximum TARDIS limit may have been reached` | The server's TARDIS count has hit the cap. |
| `Invalid subsystem mode: %s. Available options: full, essential, engine_only, none` | The subsystem mode is invalid. |

---

## Autocomplete

| Parameter | Completions |
|---|---|
| `<desktop>` | All registered desktops |
| `<exterior>` | All registered exteriors |
| `<owner>` | Online players, `me`, some preset names |
| `<subsystem>` | `full`, `essential`, `only_engine`, `none` |
| `name <name>` | `Lolita`, `Marian`, `Marian.jin`, `Evereye`, `Mobius`, `Sexy`, `Idris`, `Watcher` |
| `<executor>` | Online players, `me` |

---

## Examples

The examples below only show the format. Actual desktop and exterior IDs are subject to in-game autocomplete.

```text
/doctor_m build
```

Creates a default TARDIS for the executing player.

```text
/doctor_m build evereye
```

Specifies `evereye` as the desktop.

```text
/doctor_m build evereye evereyebox
```

Specifies both desktop and exterior.

```text
/doctor_m build evereye evereyebox me
```

Uses the executing player as the owner.

```text
/doctor_m build evereye evereyebox me name Lolita
```

Sets the TARDIS name to `Lolita`.

```text
/doctor_m build evereye evereyebox me essential
```

Creates the TARDIS with the essential subsystem configuration.

```text
/doctor_m build evereye evereyebox me full 100 64 100
```

Creates the TARDIS at the specified coordinates.

```text
/doctor_m build evereye evereyebox me none 100 64 100 Steve
```

Specifies coordinates and makes `Steve` the executing player.

---

## Trivia

- The `/doctor_m build` command was made for eternal travel~