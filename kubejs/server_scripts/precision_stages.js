// 精密构件阶段控制系统
// 这个脚本可以根据玩家进度动态控制配方的可用性

ServerEvents.recipes(event => {
    
    // ============ 阶段性解锁系统 ============
    // 你可以配合GameStages模组使用，这里提供基础框架
    
    // 定义阶段常量
    const STAGES = {
        BASIC: 'precision_basic',
        IMPROVED: 'precision_improved', 
        ADVANCED: 'precision_advanced',
        EXPERT: 'precision_expert',
        MASTER: 'precision_master',
        LEGENDARY: 'precision_legendary'
    }
    
// ============ 玩家进度跟踪 ============
PlayerEvents.inventoryChanged(event => {
    const { player, item } = event
    
    if (!player || !item) return
    
    // 跟踪玩家获得精密构件的进度
    const precisionItems = [
        'kubejs:basic_precision_component',
        'kubejs:improved_precision_component',
        'kubejs:advanced_precision_component',
        'kubejs:expert_precision_component',
        'kubejs:master_precision_component',
        'kubejs:legendary_precision_component'
    ]
    
    if (precisionItems.includes(item.id)) {
        // 记录玩家进度（可以用于统计或成就系统）
        const playerData = player.persistentData
        if (!playerData.precisionProgress) {
            playerData.precisionProgress = {}
        }
        
        // 防止重复消息 - 只在首次获得时显示
        if (!playerData.precisionProgress[item.id]) {
            playerData.precisionProgress[item.id] = true
            
            // 发送进度消息 - 使用直接的中文名称（颜色代码与物品定义一致）
            const itemNameMap = {
                'kubejs:basic_precision_component': '§a基础精密构件',
                'kubejs:improved_precision_component': '§b改良精密构件',
                'kubejs:advanced_precision_component': '§d高级精密构件',
                'kubejs:expert_precision_component': '§6专家级精密构件',
                'kubejs:master_precision_component': '§c大师级精密构件',
                'kubejs:legendary_precision_component': '§4§l传奇精密构件'
            }
            const itemName = itemNameMap[item.id] || '精密构件'
            player.tell(`§a[精密构件系统] §f你获得了 ${itemName}！`)
            
            // 检查是否解锁新阶段
            checkStageUnlock(player, item.id)
        }
    }
})

// 阶段解锁检查函数
function checkStageUnlock(player, itemId) {
    const messages = {
        'kubejs:basic_precision_component': '§e基础阶段已解锁！你现在可以制作基础Create机械了。',
        'kubejs:improved_precision_component': '§b改良阶段已解锁！机械合成器等中级机械现在可用。',
        'kubejs:advanced_precision_component': '§d高级阶段已解锁！转速控制器等高级机械现在可用。',
        'kubejs:expert_precision_component': '§6专家阶段已解锁！发条轴承等顶级机械现在可用。',
        'kubejs:master_precision_component': '§c大师阶段已解锁！你已达到工艺的巅峰！',
        'kubejs:legendary_precision_component': '§4§l传奇阶段已解锁！你获得了传说中的完美构件！'
    }
    
    if (messages[itemId]) {
        player.tell(messages[itemId])
        
        // 播放音效
        player.playSound('minecraft:entity.player.levelup', 1.0, 1.0)
        
        // 发送全服消息（对于高阶构件）
        if (itemId === 'kubejs:master_precision_component' || itemId === 'kubejs:legendary_precision_component') {
            // 使用player.username获取纯字符串玩家名
            const playerName = player.username || player.name.string
            const itemDisplayName = itemId === 'kubejs:master_precision_component' ? '§c大师级精密构件' : '§4§l传奇精密构件'
            player.server.runCommandSilent(`say §6[服务器] §f玩家 §b${playerName} §f获得了 ${itemDisplayName}§f！`)
        }
    }
}

// ============ 配置文件支持 ============
// 服务器启动时读取配置
ServerEvents.loaded(event => {
    // 初始化全局配置 - 使用Utils.server来存储配置
    const server = event.server
    if (server) {
        server.persistentData.put('precisionConfig', {
            easyMode: false,      // 简化模式
            hardMode: true,       // 困难模式
            enableStages: true,   // 启用阶段系统
            enableMessages: true  // 启用进度消息
        })
    }
    
    // 移除console.log以避免聊天乱码
    // console.log('§a[精密构件系统] 配置加载完成')
})
