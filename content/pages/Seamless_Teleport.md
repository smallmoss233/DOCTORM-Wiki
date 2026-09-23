<!-- lang:zh-CN -->
# STP 无缝传送 / Seamless Teleport

> **类型：** 技术 / 渲染 / 传送
> **来源：** 移植自 AIT 的废弃分支 [Seamless Teleport](https://github.com/amblelabs/ait/tree/DrTheodor/seamless-teleport)  
> **配置项：** `seamlessTeleportEnabled`  
> **默认状态：** 开启  
> **冲突模组：** Immersive Portals（沉浸式传送门）

---

## 概述

**STP（Seamless Teleport，无缝传送）** 是 DOCTOR M 中负责消除维度切换加载屏幕的系统。

在原版 Minecraft 中，当玩家跨越维度时，客户端会触发一次完整的 `ClientWorld` 重建，期间会显示加载地形界面。STP 的目标就是让这个过程**尽可能无感**——玩家不会看到加载屏幕，画面会尽量平滑地过渡到目标维度。

STP 并非 DOCTOR M 从零开始研究，而是从 **AIT（Adventures in Time）** 的废弃分支 [Seamless Teleport](https://github.com/amblelabs/ait/tree/DrTheodor/seamless-teleport) 中逆向研究原理并重新实现。原分支由 DrTheodor 开发，DOCTOR M 在此基础上做了适配、优化与稳定性修复。

---

## 适用范围

STP 目前在以下场景中生效：

| 场景 | 说明 |
|---|---|
| **塔迪斯门进出** | 玩家从塔迪斯外部走进内部，或从内部走到外部。 |
| **塔迪斯碰撞传送** | 玩家碰到塔迪斯外框或门口时触发的传送。 |
| **涡旋操纵器传送** | 使用涡旋操纵器进行维度跳跃。 |
| **时间钥匙跨维度传送** | 时间钥匙相关的跨维度传送。 |

以上场景都会尝试走 STP 流程，而不是原版加载屏幕流程。

---

## 工作原理

> 以下为简化后的原理说明，不涉及完整实现细节。

STP 的核心思路是：

> **在真正切换世界之前，先把目标维度的周边区块数据推给客户端，让客户端提前缓存。等到传送发生时，客户端直接用缓存重建世界，从而绕过加载屏幕。**

具体分为两个阶段。

### 阶段一：预加载

当玩家即将进入某个维度时（例如打开塔迪斯门、碰到门口、使用涡旋操纵器），服务端会：

1. 确定目标维度的目标区块中心。
2. 异步加载该中心周围的区块（默认半径 1，即 3×3 = 9 个区块）。
3. 把这些区块的数据通过自定义包发送给客户端。
4. 客户端把区块数据缓存在内存中。

同一中心在 5 秒内重复触发时，会复用已有的预加载任务，避免重复加载。

### 阶段二：传送

当真正需要传送时，服务端会：

1. 等待预加载完成。
2. 发送一个元信息包，告诉客户端目标维度、坐标、朝向等信息。
3. 客户端手动重建 `ClientWorld`。
4. 客户端从缓存中把预加载的区块直接灌入新世界。
5. 玩家在新维度中继续游戏，全程不显示加载屏幕。

如果预加载尚未完成，传送会等待预加载完成后再执行。如果预加载失败，会回退到原版传送流程。

---

## 关键处理

STP 在实现中处理了一些容易被忽略的问题。

### 世界切换通知

跨维度时，STP 会主动通知其他模组“世界已切换”。

这一步非常重要。AIT 的音效系统、和谐之眼渲染器等模块会监听世界切换事件。如果不通知，会出现：

- 塔迪斯音效持续播放
- 和谐之眼渲染跑到其他维度

### 玩家状态继承

STP 重建 `ClientPlayerEntity` 时，会继承旧玩家的：

- 位置
- 视角
- 头部朝向
- 身体朝向
- 渲染插值历史

这样做的目的是避免传送后的第一帧出现位置跳变或手部/摄像机突变。

### 区块渲染重建

世界切换时，STP 会快速替换 `ChunkBuilder` 和 `BuiltChunkStorage`，并强制所有已加载区块重新构建渲染数据。旧资源会在后台异步释放，避免阻塞主线程。

---

## 配置

STP 由配置项控制：

| 配置项 | 默认值 | 说明 |
|---|---|---|
| **无缝传送 (STP)** | 开 | 是否启用 STP。 |

关闭后，所有传送都会回退到原版流程，会出现加载屏幕。

配置位置：

- 游戏内：`/doctor_m config`
- 配置文件：`config/doctor_m.json` 中的 `seamlessTeleportEnabled`

修改配置后，下次传送即生效，不需要重启游戏。

---

## 与沉浸式传送门的冲突

STP 与 **Immersive Portals（沉浸式传送门）** 存在渲染管线冲突。

### 冲突原因

STP 和沉浸式传送门都试图接管维度切换时的世界重建与渲染流程。两者同时启用时，可能会出现：

- 渲染异常
- 区块显示错误
- 传送后画面异常

### 自动提示

如果你安装了沉浸式传送门，并且 STP 处于开启状态，进入游戏时客户端会显示提示：

> §e[DOCTOR M] 检测到沉浸式传送门（Immersive Portals）。无缝传送（STP） 功能与其渲染管线冲突，请禁用STP。

以及：

> §7想关闭此提示？在 config/doctor_m.json 或输入/doctor_m config ，在设置里把 STP 禁用即可。

### 建议

| 情况 | 建议 |
|---|---|
| 安装了沉浸式传送门 | 关闭 STP |
| 没安装沉浸式传送门 | 保持 STP 开启 |
| 不确定 | 保持 STP 开启，如果出现渲染异常再关闭 |

---

## 回退机制

STP 不是“强制走自己的流程”。如果任何一步失败，都会回退到原版传送。

| 失败点 | 行为 |
|---|---|
| STP 被配置禁用 | 直接走原版传送 |
| 预加载失败 | 回退到原版传送 |
| 传送过程中抛出异常 | 回退到原版 `WorldUtil.teleportToWorld` |
| 玩家在等待期间断线 | 不再发包，传送取消 |

回退机制保证即使 STP 出问题，玩家也不会卡在传送过程中。

---

## 冷知识 / 备注

- STP 在 AIT 1.2.0 beta 时期曾有过一个测试版本，SmallMoss很喜欢那个功能，这就是为什么现在它出现在了 DOCTOR M 里。

<!-- lang:en -->
# STP Seamless Teleport / 无缝传送

> **Type:** Technical / Rendering / Teleport
> **Source:** Ported from AIT's abandoned branch [Seamless Teleport](https://github.com/amblelabs/ait/tree/DrTheodor/seamless-teleport)  
> **Config option:** `seamlessTeleportEnabled`  
> **Default state:** On  
> **Conflicting mod:** Immersive Portals

---

## Overview

**STP (Seamless Teleport)** is the system in DOCTOR M responsible for eliminating the loading screen during dimension transitions.

In vanilla Minecraft, when a player crosses dimensions, the client triggers a full `ClientWorld` rebuild, during which a "Loading terrain" screen is shown. STP's goal is to make this process **as seamless as possible** — the player never sees a loading screen, and the visuals transition as smoothly as possible into the target dimension.

STP was not researched from scratch by DOCTOR M. It was reverse-engineered and re-implemented from **AIT (Adventures in Time)**'s abandoned branch [Seamless Teleport](https://github.com/amblelabs/ait/tree/DrTheodor/seamless-teleport). The original branch was developed by DrTheodor; DOCTOR M adapted, optimized, and stability-fixed it on top of that.

---

## Scope

STP currently applies to the following scenarios:

| Scenario | Description |
|---|---|
| **TARDIS door entry/exit** | A player walking into or out of the TARDIS. |
| **TARDIS collision teleport** | Teleport triggered when a player touches the TARDIS exterior shell or doorway. |
| **Vortex Manipulator teleport** | Dimension jumps performed with the Vortex Manipulator. |
| **Key to Time cross-dimension teleport** | Key to Time related cross-dimension teleports. |

All of the above attempt the STP flow instead of the vanilla loading screen flow.

---

## How It Works

> The following is a simplified explanation of the principles, without the full implementation details.

STP's core idea is:

> **Before actually switching worlds, push the target dimension's surrounding chunk data to the client so it can cache ahead of time. When the teleport happens, the client rebuilds the world directly from cache, bypassing the loading screen.**

This breaks down into two phases.

### Phase 1: Preload

When a player is about to enter a dimension (e.g. opening a TARDIS door, touching the doorway, using the Vortex Manipulator), the server will:

1. Determine the target chunk center in the target dimension.
2. Asynchronously load chunks around that center (default radius 1, i.e. 3×3 = 9 chunks).
3. Send that chunk data to the client via a custom packet.
4. The client caches the chunk data in memory.

If the same center is triggered again within 5 seconds, the existing preload task is reused to avoid duplicate loading.

### Phase 2: Teleport

When the teleport actually needs to happen, the server will:

1. Wait for the preload to finish.
2. Send a meta packet telling the client the target dimension, coordinates, facing, and other info.
3. The client manually rebuilds `ClientWorld`.
4. The client feeds the preloaded chunks directly from cache into the new world.
5. The player continues playing in the new dimension, with no loading screen at any point.

If the preload hasn't finished yet, the teleport waits for it to complete. If the preload fails, it falls back to the vanilla teleport flow.

---

## Key Handling

STP handles a few easily overlooked issues in its implementation.

### World Switch Notification

When crossing dimensions, STP actively notifies other mods that "the world has switched."

This step is very important. AIT's sound system, the Eye of Harmony renderer, and other modules listen for world switch events. Without notification, you'd get:

- TARDIS sounds continuing to play
- Eye of Harmony rendering bleeding into other dimensions

### Player State Inheritance

When STP rebuilds `ClientPlayerEntity`, it inherits the old player's:

- Position
- View angle
- Head yaw
- Body yaw
- Render interpolation history

The purpose is to avoid position jumps or hand/camera pops on the first frame after teleport.

### Chunk Render Rebuild

On world switch, STP quickly swaps out `ChunkBuilder` and `BuiltChunkStorage` and forces all loaded chunks to rebuild their render data. Old resources are released asynchronously in the background to avoid blocking the main thread.

---

## Configuration

STP is controlled by a config option:

| Option | Default | Description |
|---|---|---|
| **Seamless Teleport (STP)** | On | Whether to enable STP. |

When disabled, all teleports fall back to the vanilla flow and the loading screen appears.

Config locations:

- In-game: `/doctor_m config`
- Config file: `seamlessTeleportEnabled` in `config/doctor_m.json`

Changes take effect on the next teleport — no game restart needed.

---

## Conflict with Immersive Portals

STP has a rendering pipeline conflict with **Immersive Portals**.

### Cause of the Conflict

Both STP and Immersive Portals try to take over the world rebuild and rendering flow during dimension switches. With both enabled at once, you may see:

- Rendering glitches
- Chunk display errors
- Visual anomalies after teleporting

### Automatic Warning

If you have Immersive Portals installed and STP is on, the client shows a warning on entering the game:

> §e[DOCTOR M] Immersive Portals detected. Seamless Teleport (STP) conflicts with its rendering pipeline. Please disable STP.

And:

> §7Want to hide this message? Disable STP in `config/doctor_m.json`, or run `/doctor_m config` and turn it off in the settings.

### Recommendations

| Situation | Recommendation |
|---|---|
| Immersive Portals installed | Disable STP |
| Immersive Portals not installed | Keep STP on |
| Not sure | Keep STP on, and disable it if rendering anomalies appear |

---

## Fallback Mechanism

STP doesn't "force its own flow." If any step fails, it falls back to vanilla teleport.

| Failure point | Behavior |
|---|---|
| STP disabled by config | Goes straight to vanilla teleport |
| Preload fails | Falls back to vanilla teleport |
| Exception thrown during teleport | Falls back to vanilla `WorldUtil.teleportToWorld` |
| Player disconnects while waiting | Packet is no longer sent, teleport is cancelled |

The fallback mechanism ensures that even if STP has problems, players never get stuck mid-teleport.

---

## Trivia / Notes

- STP had a test version back in the AIT 1.2.0 beta days. SmallMoss really liked that feature — which is why it now appears in DOCTOR M.