// 物品注册验证 - startup脚本
StartupEvents.postInit(event => {
    console.log('[物品调试] 验证所有精密构件物品是否正确注册')
    
    const precisionItems = [
        'kubejs:basic_precision_component',
        'kubejs:improved_precision_component', 
        'kubejs:advanced_precision_component',
        'kubejs:expert_precision_component',
        'kubejs:master_precision_component',
        'kubejs:legendary_precision_component',
        'kubejs:basic_circuit',
        'kubejs:advanced_circuit',
        'kubejs:atomic_circuit',
        'kubejs:quantum_circuit',
        'kubejs:hyper_circuit',
        'kubejs:cosmic_circuit',
        'kubejs:refined_precision_alloy',
        'kubejs:crystalline_precision_matrix',
        'kubejs:precision_gear_assembly',
        'kubejs:precision_shaft_core'
    ]
    
    console.log(`[物品调试] 验证 ${precisionItems.length} 个自定义物品`)
    
    // 验证物品是否存在
    let successCount = 0
    let failCount = 0
    
    for (let i = 0; i < precisionItems.length; i++) {
        let itemId = precisionItems[i]
        try {
            // 简单的存在性检查
            let testItem = Item.of(itemId)
            if (testItem && testItem.id !== 'minecraft:air') {
                console.log(`[物品调试] ✓ ${itemId} 已正确注册`)
                successCount++
            } else {
                console.warn(`[物品调试] ✗ ${itemId} 未找到或注册失败`)
                failCount++
            }
        } catch (e) {
            console.error(`[物品调试] ✗ ${itemId} 检查失败: ${e}`)
            failCount++
        }
    }
    
    console.log(`[物品调试] 验证完成：成功 ${successCount} 个，失败 ${failCount} 个`)
})
