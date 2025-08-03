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
    
    // ============ 动态配方生成 ============
    // 根据不同阶段生成不同的配方变体
    
    // 简化版配方（适用于新手服务器）
    if (global.serverConfig && global.serverConfig.easyMode) {
        // 简化的基础精密构件配方
        event.shaped('kubejs:basic_precision_component', [
            'ABA',
            'BCB', 
            'ABA'
        ], {
            A: 'minecraft:iron_ingot',
            B: 'create:andesite_alloy',
            C: 'create:cogwheel'
        })
    }
    
    // 困难版配方（适用于硬核服务器）
    if (global.serverConfig && global.serverConfig.hardMode) {
        // 移除所有简化配方，要求完整的工艺链
        event.remove({ output: 'kubejs:basic_precision_component' })
        
        // 只能通过序列装配制作基础精密构件
        event.recipes.create.sequenced_assembly([
            'kubejs:basic_precision_component'
        ], 'create:andesite_alloy', [
            event.recipes.create.deploying('create:andesite_alloy', ['create:andesite_alloy', 'minecraft:iron_ingot']),
            event.recipes.create.pressing('create:andesite_alloy', 'create:andesite_alloy'),
            event.recipes.create.deploying('create:andesite_alloy', ['create:andesite_alloy', 'create:cogwheel']),
            event.recipes.create.cutting('create:andesite_alloy', 'create:andesite_alloy')
        ]).transitionalItem('create:andesite_alloy').loops(3)
    }
    
    // ============ 条件配方系统 ============
    // 基于玩家成就或物品解锁新配方
    
    // 当玩家获得钻石时解锁高级配方
    event.custom({
        type: 'minecraft:crafting_shaped',
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            A: { item: 'kubejs:refined_precision_alloy' },
            B: { item: 'create:rotation_speed_controller' },
            C: { item: 'kubejs:improved_precision_component' },
            D: { item: 'kubejs:precision_gear_assembly' },
            E: { item: 'create:shadow_steel' }
        },
        result: {
            item: 'kubejs:advanced_precision_component',
            count: 1
        },
        conditions: [
            {
                type: 'forge:item_exists',
                item: 'minecraft:diamond'
            }
        ]
    })
    
})

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
        let playerData = player.persistentData
        if (!playerData.precisionProgress) {
            playerData.precisionProgress = {}
        }
        
        playerData.precisionProgress[item.id] = true
        
        // 发送进度消息
        const itemName = item.displayName
        player.tell(`§a[精密构件系统] §f你获得了 ${itemName}！`)
        
        // 检查是否解锁新阶段
        checkStageUnlock(player, item.id)
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
            player.server.runCommandSilent(`tellraw @a {"text":"§6[服务器] §f玩家 ${player.name} 获得了 ${player.getHeldItem('main_hand').displayName}§f！","color":"gold"}`)
        }
    }
}

// ============ 配置文件支持 ============
// 服务器启动时读取配置
ServerEvents.loaded(event => {
    // 初始化全局配置
    global.serverConfig = {
        easyMode: false,      // 简化模式
        hardMode: true,       // 困难模式
        enableStages: true,   // 启用阶段系统
        enableMessages: true  // 启用进度消息
    }
    
    console.log('§a[精密构件系统] 配置加载完成')
    console.log(`§7简化模式: ${global.serverConfig.easyMode}`)
    console.log(`§7困难模式: ${global.serverConfig.hardMode}`)
    console.log(`§7阶段系统: ${global.serverConfig.enableStages}`)
})
