<!-- lang:zh-CN -->
# 塔迪斯自毁增强 / Self-Destruct Enhancement

**DOCTOR M** 重写了塔迪斯的自毁序列。原本自毁只是**一次大爆炸**，现在变成了一场**逐步扩散的毁灭浪潮**——从塔迪斯中心开始，一圈一圈地向外吞噬整个世界。

> ⚠️ **警告：** 这是模组中**最暴力的功能**。启用后，塔迪斯自毁会摧毁**周围 80~100 格内的一切方块和生物**。在多人服务器上使用前请三思。

---

## 启用条件

自毁增强由**配置开关**控制：

| 配置项 | 默认值 |
|--------|--------|
| **总开关** | 开 |

关闭后，塔迪斯自毁会退化回 AIT 原版的普通爆炸。

---

## 毁灭序列

整个自毁过程分为**三个阶段**，从触发到结束约 **30~60 秒**。

### 阶段 0：核心坍缩

塔迪斯触发自毁的**瞬间**：

| 效果 | 说明 |
|------|------|
| **核心清除** | 半径 **2 格**内的方块立即消失 |
| **屏幕震动** | 附近玩家获得**反胃**效果（10 格内） |
| **视觉** | 大量烟雾粒子从中心向外喷发 + 一次闪光 |
| **音效** | 信标充能音效 |

### 阶段 1~N：逐步扩散

核心坍缩后，毁灭波**一圈一圈地向外扩散**。

**扩散节奏**：

| 参数 | 默认值 | 说明 |
|------|--------|------|
| **扩散步数** | 20 步 | 从半径 2 到最大半径的过渡次数 |
| **每步间隔** | 40 tick（2 秒） | 每步之间的等待 |
| **最大半径** | **80 格** | 毁灭波的最大范围 |

**扩散曲线**（缓动）：

半径的增长**不是线性的**——它使用了 `1 - (1-p)³` 的缓动函数，所以：

- **前几步**：半径增长快（视觉冲击强）
- **后几步**：半径增长慢（最后一圈维持更久）

**每一步的效果**：

| 效果 | 说明 |
|------|------|
| **球体清除** | 清除当前半径内的所有方块 |
| **击退** | 半径外围 2 格内的生物被击飞（向上 + 向外） |
| **屏幕震动** | 附近玩家反胃（越近持续越久） |
| **粒子** | 球面上生成灵魂火 + 白色灰烬粒子 |
| **音效** | 信标关闭音（音量/音调随进度变化）+ 每 5 步一次声波尖啸 |

### 终极阶段：完全湮灭

最后一步，毁灭波达到 **100 格**（比扩散阶段更大），并执行**最终清算**：

| 效果 | 说明 |
|------|------|
| **清除方块** | 半径 100 格内所有方块（除基岩/屏障） |
| **抹杀生物** | 半径 100 格内所有生物**直接死亡**（创造/旁观模式玩家除外） |
| **大爆炸** | 播放极响的爆炸音 + 塔迪斯呻吟音 + 声波尖啸 |
| **盛大谢幕** | 大量闪光、声波、烟柱、电火花粒子 |

**"盛大谢幕"的细节**：

| 粒子 | 数量（约） |
|------|-----------|
| 爆炸发射器 | 50 个 |
| 闪光 | 100 个 |
| 声波 | 200 个 |
| 篝火烟雾（烟柱） | 100 格高 |
| 电火花 | 数百个 |

附近 **200 格**内的所有玩家都会获得**反胃 II** 效果。

---

## 毁灭范围对照

| 阶段 | 半径 | 影响 |
|------|------|------|
| **核心坍缩** | 2 格 | 塔迪斯本身 |
| **扩散阶段** | 2 → 80 格 | 逐渐扩大的球形区域 |
| **终极清算** | 100 格 | 超大范围 |

**整个毁灭序列**最终会清空一个**直径约 200 格的球形区域**——这是 DOCTOR M 中最大的破坏行为。

---

## 保护机制

毁灭波**不会**清除以下内容：

| 保留对象 | 原因 |
|---------|------|
| **基岩** | 世界边界 |
| **屏障方块** | 特殊保护方块 |
| **创造模式玩家** | 不会被终极清算杀死 |
| **旁观模式玩家** | 同上 |

> 也就是说，如果你在创造模式里自毁塔迪斯，**你会活着看到世界被清空**。

---

## 性能优化

毁灭一个 100 格半径的球体涉及**数百万个方块**——直接一次性清除会**卡死服务器**。DOCTOR M 做了以下优化：

### 分帧处理

大的球体清除会**自动分帧**——每 tick 只处理 **5 层 Y 高度**，避免单 tick 卡顿。

**举例**：
- 半径 10 以内：单 tick 完成
- 半径 80：需要约 **32 tick**（1.6 秒）完成
- 半径 100：需要约 **40 tick**（2 秒）完成

### 区块加载检查

清除方块前会**检查区块是否已加载**——不会为了清空未加载区块而强制加载它们。

**结果**：远处的区块如果没加载，**不会被破坏**，直到玩家靠近才会暴露成空。

### 提前剪枝

球体清除使用**数学剪枝**——如果某个 X 偏移已经超出球体范围，整个 Z 循环都会被跳过。

---

## 使用场景

自毁增强适合以下场景：

- **PVP 终局**：追踪敌人到塔迪斯，自毁把整片战场清空
- **极限生存**：塔迪斯被怪物围攻，自毁清场
- **剧情演出**：录制视频时制造震撼的毁灭特效
- **拆除建筑**：用塔迪斯自毁快速清空一大块区域

> ⚠️ **不推荐在服务器上随意使用**——毁掉 100 格半径会永久改变地形。

---

## 冷知识

- **自毁增强是从 AIT 原版自毁"扩展"出来的**——关闭开关后完全回到原版行为。
- **扩散曲线是非线性的**——前几步快、后几步慢，视觉上像"引力波"。
- **击退只影响"扩散边缘"**——已经在球体内的生物直接消失，不会被击退。
- **屏幕震动是反胃效果**——不是真正的屏幕抖动，但视觉上类似。
- **终极清算的音效组合**——爆炸 + 塔迪斯呻吟 + 声波尖啸，营造"世界末日"感。
- **塔迪斯会在序列开始前从管理器移除**——防止序列进行中塔迪斯数据被其他逻辑引用。
- **毁灭序列执行时如果服务器关闭**——延迟任务队列会**自动清理**，不会在下次启动时复活。
- **配置值有极端警告**——如果 `maxRadius > 50` 或 `finalRadius > 80`，会在日志里警告"这可能造成长时间湮灭序列"。

<!-- lang:en -->
# Self-Destruct Enhancement / 塔迪斯自毁增强

**DOCTOR M** rewrites the TARDIS self-destruct sequence. Originally the self-destruct was just **one big explosion**; now it becomes a **spreading wave of destruction** — starting from the TARDIS core, sweeping outward ring by ring and devouring the world.

> ⚠️ **Warning:** This is the **most destructive feature** in the mod. Once enabled, TARDIS self-destruct destroys **every block and entity within 80–100 blocks**. Think twice before using it on a multiplayer server.

---

## Activation Conditions

The self-destruct enhancement is controlled by a **config toggle**:

| Config option | Default |
|--------|--------|
| **Master switch** | On |

When turned off, TARDIS self-destruct reverts to AIT's original ordinary explosion.

---

## Destruction Sequence

The entire self-destruct process is divided into **three phases**, lasting about **30–60 seconds** from trigger to end.

### Phase 0: Core Collapse

The **moment** the TARDIS triggers self-destruct:

| Effect | Description |
|------|------|
| **Core clearing** | Blocks within a **2-block** radius vanish instantly. |
| **Screen shake** | Nearby players get the **Nausea** effect (within 10 blocks). |
| **Visuals** | A large burst of smoke particles erupts from the center + one flash. |
| **Sound** | Beacon charge sound. |

### Phases 1~N: Expanding Spread

After core collapse, the destruction wave **spreads outward ring by ring**.

**Spread rhythm**:

| Parameter | Default | Description |
|------|--------|------|
| **Spread steps** | 20 steps | Number of transitions from radius 2 to max radius. |
| **Interval per step** | 40 ticks (2 seconds) | Wait between steps. |
| **Max radius** | **80 blocks** | Maximum range of the destruction wave. |

**Spread curve** (easing):

Radius growth is **not linear** — it uses a `1 - (1-p)³` easing function, so:

- **First few steps**: radius grows fast (strong visual impact).
- **Last few steps**: radius grows slow (the final ring lingers longer).

**Effects of each step**:

| Effect | Description |
|------|------|
| **Sphere clearing** | Clears all blocks within the current radius. |
| **Knockback** | Entities within 2 blocks outside the radius are launched (upward + outward). |
| **Screen shake** | Nearby players get Nausea (the closer, the longer it lasts). |
| **Particles** | Soul fire + white ash particles generated on the sphere surface. |
| **Sound** | Beacon deactivate sound (volume/pitch vary with progress) + a sonic screech every 5 steps. |

### Final Phase: Total Annihilation

On the last step, the destruction wave reaches **100 blocks** (larger than the spread phase) and performs **final clearance**:

| Effect | Description |
|------|------|
| **Block clearing** | All blocks within a 100-block radius (except bedrock/barrier). |
| **Entity wipe** | All entities within 100 blocks **die instantly** (except Creative/Spectator players). |
| **Big explosion** | Plays an extremely loud explosion + TARDIS groan + sonic screech. |
| **Grand finale** | A large number of flash, sonic, smoke column, and electric spark particles. |

**"Grand finale" details**:

| Particle | Approx. count |
|------|-----------|
| Explosion emitters | 50 |
| Flashes | 100 |
| Sonic waves | 200 |
| Campfire smoke (column) | 100 blocks tall |
| Electric sparks | Hundreds |

All players within **200 blocks** gain **Nausea II**.

---

## Destruction Range Reference

| Phase | Radius | Impact |
|------|------|------|
| **Core collapse** | 2 blocks | The TARDIS itself. |
| **Spread phase** | 2 → 80 blocks | A gradually expanding spherical region. |
| **Final clearance** | 100 blocks | Very large range. |

**The full destruction sequence** ultimately clears a **sphere roughly 200 blocks in diameter** — the largest act of destruction in DOCTOR M.

---

## Protection Mechanism

The destruction wave **does not** clear the following:

| Preserved object | Reason |
|---------|------|
| **Bedrock** | World boundary. |
| **Barrier blocks** | Special protected blocks. |
| **Creative-mode players** | Not killed by the final clearance. |
| **Spectator-mode players** | Same as above. |

> In other words, if you self-destruct the TARDIS in Creative mode, **you'll be alive to watch the world get cleared**.

---

## Performance Optimization

Destroying a 100-block-radius sphere involves **millions of blocks** — clearing them all at once would **freeze the server**. DOCTOR M makes the following optimizations:

### Frame-sliced Processing

Large sphere clears are **automatically frame-sliced** — only **5 layers of Y height** are processed per tick, avoiding single-tick stutters.

**Examples**:
- Radius 10 or less: completes in a single tick.
- Radius 80: takes about **32 ticks** (1.6 seconds).
- Radius 100: takes about **40 ticks** (2 seconds).

### Chunk-Loaded Check

Before clearing blocks, it **checks whether the chunk is loaded** — it will not force-load unloaded chunks just to clear them.

**Result**: Distant chunks that aren't loaded **are not destroyed**; they only reveal themselves as empty when the player approaches.

### Early Pruning

Sphere clearing uses **mathematical pruning** — if an X offset is already outside the sphere's range, the entire Z loop is skipped.

---

## Use Cases

The self-destruct enhancement suits the following scenarios:

- **PVP endgame**: Chase enemies to the TARDIS, self-destruct and clear the whole battlefield.
- **Extreme survival**: The TARDIS is swarmed by mobs; self-destruct wipes the area.
- **Cinematic scenes**: Create a spectacular destruction effect when recording videos.
- **Building demolition**: Use TARDIS self-destruct to quickly clear a large region.

> ⚠️ **Not recommended for casual use on servers** — destroying a 100-block radius permanently alters the terrain.

---

## Trivia

- **The self-destruct enhancement is an "extension" of AIT's vanilla self-destruct** — turning the toggle off fully reverts to vanilla behavior.
- **The spread curve is non-linear** — fast at first, slow later; visually it looks like a "gravitational wave".
- **Knockback only affects the "spreading edge"** — entities already inside the sphere vanish directly and are not knocked back.
- **Screen shake is the Nausea effect** — not a real screen shake, but visually similar.
- **The final clearance sound stack** — explosion + TARDIS groan + sonic screech, creating an "end of the world" feel.
- **The TARDIS is removed from the manager before the sequence begins** — to prevent TARDIS data from being referenced by other logic during the sequence.
- **If the server shuts down during the destruction sequence** — the delayed task queue is **automatically cleaned up** and won't resurrect on the next startup.
- **Extreme config values trigger a warning** — if `maxRadius > 50` or `finalRadius > 80`, a log warning says "this may cause a prolonged annihilation sequence".