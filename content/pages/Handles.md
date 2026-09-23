<!-- lang:zh-CN -->
# 二把手中文指令 / Handles 中文支持

![Handles.png](assets/images/Handles.png)

> **类型：** 聊天指令扩展  
> **适用物品：** 二把手（Handles）  
> **来源：** DOCTOR M
> **依赖：** AIT（Adventures in Time）  
> **原版行为：** 仅支持英文指令

---

## 概述

**二把手（Handles）** 是 AIT 中一件可以通过**聊天指令**控制的物品。

在原版 AIT 里，你必须用**英文**发指令才能让二把手响应。**DOCTOR M** 为二把手加入了一套**完整的中文指令系统**——你可以直接用中文说话，二把手会**听懂并执行**。

> 💡 **原版二把手：** 打字 `handles help` → 显示帮助  
> 💡 **DOCTOR M：** 打字 `二把手 帮助` → 一样的帮助

中文指令是 DOCTOR M 的**独有扩展**。原版 AIT 只支持英文，而 DOCTOR M 在你说话和它听到之间加了一层“翻译”——你说中文，它执行英文指令。

---

## 使用方法

### 基本格式

```text
<前缀> <指令>
```

**前缀**（任意选一个）：

| 前缀 | 说明 |
|---|---|
| `二把手` | 最常用。 |
| `驾驶员` | 备选。 |
| `手柄` | 简短。 |
| `小手柄` | 最短。 |

**示例**：

```text
二把手 起飞
驾驶员 开门
手柄 降落
```

四个前缀功能完全等价，选顺口的即可。

---

## 中文指令对照表

### 🛫 飞行控制

| 中文 | 效果 |
|---|---|
| 起飞 / 出发 / 启动飞行 | 塔迪斯起飞。 |
| 飞 | 进入飞行状态。 |
| 降落 / 着陆 | 降落。 |
| 停飞 / 停止飞行 | 停止飞行。 |
| 走你 | 起飞（法语 "allons-y" 梗）。 |
| 冲啊 | 起飞（德语 "geronimo" 梗）。 |
| 去物质化 / 解物质化 | 去物质化。 |
| 传送 | 传送到别处。 |
| 进度 / 飞行状态 / 飞行进度 | 报告飞行进度。 |

### 🚪 门与锁

| 中文 | 效果 |
|---|---|
| 开门 / 打开门 / 打开 / 开门吧 | 开门。 |
| 关门 / 关闭门 / 关闭 | 关门。 |
| 切换锁 / 锁门 | 切换锁定状态。 |
| 解锁 | 解锁。 |
| 门锁 | 报告门锁状态。 |

### 🛡️ 防御系统

| 中文 | 效果 |
|---|---|
| 护盾 / 切换护盾 | 切换力场护盾。 |
| 警报 / 切换警报 | 切换敌对警报。 |
| 钟声 / 教堂钟 | 钟声警报。 |
| 反重力 / 重力 / 切换反重力 | 切换反重力系统。 |
| 隐身 / 切换隐身 | 切换光学隐形。 |
| 协议3 | 协议 3（隐形协议）。 |

### ⛽ 能源

| 中文 | 效果 |
|---|---|
| 加油 / 开始加油 / 启动加油 / 加油开 / 打开加油 | 启动加油。 |
| 停止加油 / 加油关 / 禁用加油 / 关闭加油 | 停止加油。 |

### 🧭 导航

| 中文 | 效果 |
|---|---|
| 航点 / 前往航点 / 飞往航点 | 前往航点。 |

### 🔧 手刹

| 中文 | 效果 |
|---|---|
| 拉手刹 / 手刹开 / 开启手刹 | 拉起手刹。 |
| 放手刹 / 手刹关 / 关闭手刹 | 放下手刹。 |

### ⚙️ 其他

| 中文 | 效果 |
|---|---|
| 帮助 | 显示帮助信息。 |
| 笑话 | 讲个笑话。 |
| 冷知识 | 讲个冷知识。 |

---

## 支持的英文指令

如果你懒得切中文输入法，也可以用**原版英文指令**：

| 英文 | 效果 |
|---|---|
| `handles help` | 帮助。 |
| `handles tell me a joke` | 讲笑话。 |
| `handles tell me a fun fact` | 冷知识。 |
| `handles take off` | 起飞。 |
| `handles land` | 降落。 |
| `handles open doors` | 开门。 |
| `handles close doors` | 关门。 |
| `handles toggle shields` | 切换护盾。 |
| `handles activate handbrake` | 拉手刹。 |
| `handles enable refuelling` | 加油。 |

> 中英文指令**可以混用**——二把手不在乎你说什么语言，只在乎指令内容。

---

## 与 AIT 原版的对比

| 项目 | AIT 原版 | DOCTOR M |
|---|---|---|
| 英文指令 | 支持 | 支持 |
| 中文指令 | 不支持 | 支持 |
| 中文前缀 | 无 | 二把手 / 驾驶员 / 手柄 / 小手柄 |
| 中英混用 | 不适用 | 支持 |
| 指令翻译层 | 无 | 有 |

---

## 冷知识

- **中文指令是 DOCTOR M 独有的扩展**——原版 AIT 只支持英文。
- **“走你”对应 “allons-y”**——这是《神秘博士》第十任博士的名言（法语“出发吧”）。
- **“冲啊”对应 “geronimo”**——第十一任博士跳飞机前必喊的口号。
- **多个中文前缀可选**——“二把手”、“驾驶员”、“手柄”、“小手柄”，你可以选顺口的。
- **中文指令会自动被转换成对应的英文指令**——二把手内部只认识英文，但 DOCTOR M 在你说话和它听到之间加了一层“翻译”。
- **“飞”和“起飞”是两个不同指令**——前者是“进入飞行状态”，后者是“启动起飞序列”。

<!-- lang:en -->
# Chinese Commands for Handles / Handles Chinese Support

![Handles.png](assets/images/Handles.png)

> **Type:** Chat command extension  
> **Applies to:** Handles  
> **Source:** DOCTOR M  
> **Dependency:** AIT (Adventures in Time)  
> **Vanilla behavior:** English commands only

---

## Overview

**Handles** is an item in AIT that can be controlled via **chat commands**.

In vanilla AIT, you have to speak **English** for Handles to respond. **DOCTOR M** adds a **complete Chinese command system** to Handles — you can simply speak Chinese, and Handles will **understand and execute** it.

> 💡 **Vanilla Handles:** type `handles help` → shows help  
> 💡 **DOCTOR M:** type `二把手 帮助` → the same help

Chinese commands are a **DOCTOR M exclusive**. Vanilla AIT only supports English, whereas DOCTOR M inserts a "translator" between what you say and what Handles hears — you speak Chinese, it runs the English command.

---

## Usage

### Basic Format

```text
<prefix> <command>
```

**Prefix** (pick any one):

| Prefix | Notes |
|---|---|
| `二把手` | Most common. |
| `驾驶员` | Alternative. |
| `手柄` | Short. |
| `小手柄` | Shortest. |

**Examples**:

```text
二把手 起飞
驾驶员 开门
手柄 降落
```

All four prefixes are functionally identical — pick whichever rolls off the tongue.

---

## Chinese Command Reference

### 🛫 Flight Control

| Chinese | Effect |
|---|---|
| 起飞 / 出发 / 启动飞行 | TARDIS takes off. |
| 飞 | Enter flight state. |
| 降落 / 着陆 | Land. |
| 停飞 / 停止飞行 | Stop flying. |
| 走你 | Take off (French "allons-y" reference). |
| 冲啊 | Take off (German "geronimo" reference). |
| 去物质化 / 解物质化 | Dematerialize. |
| 传送 | Teleport elsewhere. |
| 进度 / 飞行状态 / 飞行进度 | Report flight progress. |

### 🚪 Doors & Locks

| Chinese | Effect |
|---|---|
| 开门 / 打开门 / 打开 / 开门吧 | Open the doors. |
| 关门 / 关闭门 / 关闭 | Close the doors. |
| 切换锁 / 锁门 | Toggle the lock state. |
| 解锁 | Unlock. |
| 门锁 | Report the door lock state. |

### 🛡️ Defense Systems

| Chinese | Effect |
|---|---|
| 护盾 / 切换护盾 | Toggle the force field shield. |
| 警报 / 切换警报 | Toggle the hostile alert. |
| 钟声 / 教堂钟 | Cloister bell alert. |
| 反重力 / 重力 / 切换反重力 | Toggle the anti-gravity system. |
| 隐身 / 切换隐身 | Toggle optical cloaking. |
| 协议3 | Protocol 3 (cloaking protocol). |

### ⛽ Energy

| Chinese | Effect |
|---|---|
| 加油 / 开始加油 / 启动加油 / 加油开 / 打开加油 | Start refuelling. |
| 停止加油 / 加油关 / 禁用加油 / 关闭加油 | Stop refuelling. |

### 🧭 Navigation

| Chinese | Effect |
|---|---|
| 航点 / 前往航点 / 飞往航点 | Travel to a waypoint. |

### 🔧 Handbrake

| Chinese | Effect |
|---|---|
| 拉手刹 / 手刹开 / 开启手刹 | Engage the handbrake. |
| 放手刹 / 手刹关 / 关闭手刹 | Release the handbrake. |

### ⚙️ Miscellaneous

| Chinese | Effect |
|---|---|
| 帮助 | Show help. |
| 笑话 | Tell a joke. |
| 冷知识 | Tell a fun fact. |

---

## Supported English Commands

If you can't be bothered to switch to a Chinese IME, the **vanilla English commands** still work:

| English | Effect |
|---|---|
| `handles help` | Help. |
| `handles tell me a joke` | Tell a joke. |
| `handles tell me a fun fact` | Fun fact. |
| `handles take off` | Take off. |
| `handles land` | Land. |
| `handles open doors` | Open the doors. |
| `handles close doors` | Close the doors. |
| `handles toggle shields` | Toggle shields. |
| `handles activate handbrake` | Engage the handbrake. |
| `handles enable refuelling` | Refuel. |

> Chinese and English commands **can be mixed** — Handles doesn't care what language you speak, only what the command means.

---

## Comparison with Vanilla AIT

| Item | Vanilla AIT | DOCTOR M |
|---|---|---|
| English commands | Supported | Supported |
| Chinese commands | Not supported | Supported |
| Chinese prefixes | None | 二把手 / 驾驶员 / 手柄 / 小手柄 |
| Mixed Chinese/English | N/A | Supported |
| Command translation layer | None | Yes |

---

## Trivia

- **Chinese commands are a DOCTOR M exclusive extension** — vanilla AIT only supports English.
- **"走你" maps to "allons-y"** — the Tenth Doctor's catchphrase in *Doctor Who* (French for "let's go").
- **"冲啊" maps to "geronimo"** — the Eleventh Doctor's shout before jumping out of a plane.
- **Multiple Chinese prefixes are available** — "二把手", "驾驶员", "手柄", "小手柄" — pick whichever you like.
- **Chinese commands are automatically converted to their English equivalents** — Handles itself only understands English, but DOCTOR M inserts a "translator" between what you say and what it hears.
- **"飞" and "起飞" are two different commands** — the former is "enter flight state", the latter is "start the takeoff sequence".