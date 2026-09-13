# DOCTOR M 塔迪斯建造指令 / `/doctor_m build`

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

## 相关指令

### `/doctor_m config`

打开 DOCTOR M 配置界面。

该界面用于调整 DOCTOR M 的各项配置，包括但不限于：

- 涡旋标题背景
- 无缝传送 STP
- 护盾与力场盾
- 时间钥匙
- 永恒水晶
- 特莉波卡的镰刀
- STCS
- 塔迪斯自毁
- 氧气瓶、宇航服、制氧机
- 追踪器与涡旋操纵器

具体配置项会在后续“配置文件参考”页面中展开。

---

## 备注

- `/doctor_m build` 需要权限等级 2。
- 控制台执行时必须指定 `<executor>`。
- 未指定内饰和外观时，会使用随机默认主题。
- 未指定名称时，塔迪斯名称默认为 `<主人名>'s TARDIS`。
- 创建失败时，最常见原因是服务器已达到最大塔迪斯数量限制。
- 本页面为指令 Wiki 草稿，后续可继续补充内饰、外观、子系统、配置文件等独立页面。