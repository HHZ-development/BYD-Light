// 精密构件物品名称强制修改
// 在物品创建后强制设置显示名称，避免翻译键问题

StartupEvents.postInit(event => {
    console.log('[精密构件] 开始强制设置物品显示名称...')
    
    // 强制设置物品显示名称的映射
    const itemNames = {
        'kubejs:basic_precision_component': '§a基础精密构件',
        'kubejs:improved_precision_component': '§b改良精密构件', 
        'kubejs:advanced_precision_component': '§d高级精密构件',
        'kubejs:expert_precision_component': '§6专家级精密构件',
        'kubejs:master_precision_component': '§c大师级精密构件',
        'kubejs:legendary_precision_component': '§4§l传奇精密构件',
        'kubejs:precision_gear_assembly': '§7精密齿轮组件',
        'kubejs:precision_shaft_core': '§7精密轴心核心',
        'kubejs:refined_precision_alloy': '§7精炼精密合金',
        'kubejs:crystalline_precision_matrix': '§d§l晶化精密基质'
    }
    
    // 遍历所有物品并强制设置显示名称
    Object.entries(itemNames).forEach(([itemId, displayName]) => {
        try {
            const item = Item.of(itemId)
            if (item && item.item) {
                console.log(`[精密构件] 设置 ${itemId} 显示名称为: ${displayName}`)
            }
        } catch (error) {
            console.log(`[精密构件] 警告: 无法设置 ${itemId} 的显示名称`)
        }
    })
    
    console.log('[精密构件] 物品名称强制设置完成')
})

// 使用物品修改事件强制设置名称
ItemEvents.modification(event => {
    console.log('[精密构件] 物品修改事件触发...')
    
    // 直接修改物品属性
    event.modify('kubejs:basic_precision_component', item => {
        item.displayName = '§a基础精密构件'
    })
    
    event.modify('kubejs:improved_precision_component', item => {
        item.displayName = '§b改良精密构件'
    })
    
    event.modify('kubejs:advanced_precision_component', item => {
        item.displayName = '§d高级精密构件'
    })
    
    event.modify('kubejs:expert_precision_component', item => {
        item.displayName = '§6专家级精密构件'
    })
    
    event.modify('kubejs:master_precision_component', item => {
        item.displayName = '§c大师级精密构件'
    })
    
    event.modify('kubejs:legendary_precision_component', item => {
        item.displayName = '§4§l传奇精密构件'
    })
    
    event.modify('kubejs:precision_gear_assembly', item => {
        item.displayName = '§7精密齿轮组件'
    })
    
    event.modify('kubejs:precision_shaft_core', item => {
        item.displayName = '§7精密轴心核心'
    })
    
    event.modify('kubejs:refined_precision_alloy', item => {
        item.displayName = '§7精炼精密合金'
    })
    
    event.modify('kubejs:crystalline_precision_matrix', item => {
        item.displayName = '§d§l晶化精密基质'
    })
    
    console.log('[精密构件] 物品修改完成')
})

console.log('[精密构件物品名称强制修改系统] 已加载')
