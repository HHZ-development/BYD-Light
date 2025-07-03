### Bug反馈


经验球召回(掉落经验直接导致服务器崩溃)

### 涉及模组：经验球召回
根据提供的崩溃报告，问题核心在于 经验球召回模组 (ExpOrbRecall) 的实体逻辑错误。以下是详细分析和解决方案：

崩溃原因分析
关键错误：

text
java.lang.IllegalStateException: Cannot get config value before config is loaded.
at com.jinqinxixi.exporbrecall.entity.EntityExpOrb.tick(EntityExpOrb.java:48)
在经验球实体 (EntityExpOrb) 的 tick() 方法中（代码第48行），尝试读取配置值前未检查配置是否已加载。

当经验球生成时，模组配置可能尚未初始化（尤其是服务器启动阶段），导致游戏崩溃。
环境信息：

Minecraft 版本：1.21.1

NeoForge 版本：21.1.186

涉及模组：经验球召回 (exporbrecall-1.0.0.jar)
### 经验球召回解决方法
方案一：临时修复（适合玩家）
移除问题模组：

删除 mods 文件夹中的 exporbrecall-1.0.0.jar。

注意：这将禁用经验球召回功能。

方案二：修复模组代码（适合开发者）
需修改模组源码，确保在读取配置前检查配置状态。以下是关键修改：

修改位置：
com.jinqinxixi.exporbrecall.entity.EntityExpOrb.tick()

修复代码示例：

java
public void tick() {
    // 添加配置检查：仅在配置加载后执行逻辑
    if (ModConfigManager.getConfigState().isLoaded()) {
        // 原第48行代码（例如读取配置值）
        boolean shouldRecall = Config.RECALL_ENABLED.get(); 
        if (shouldRecall) {
            // 召回逻辑
        }
    }
    super.tick(); // 确保调用父类tick()
}
补充建议：

使用 @SubscribeEvent 监听 ModConfigEvent.Loading 事件，确保配置初始化完成前不生成实体。

在 onConfigLoaded 事件中设置安全标志（如 configLoaded = true），实体 tick 时检查该标志。

