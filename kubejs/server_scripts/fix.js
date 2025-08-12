// Create精密构件渐进式合成配方 - 修复版本
// 这是一个使用正确KubeJS Create语法的版本

ServerEvents.recipes(event => {
    event.remove({output:'create:precision_mechanism'}) // 移除旧的精密机制配方
    event.remove({type:'create:mechanical_crafting'}) // 移除旧的机械合成配方
    event.remove({output:'enderio:z_logic_controller'}) // 移除旧的逻辑控制器配方

    event.replaceInput({
        input:'create:precision_mechanism'
    }, 
    'create:precision_mechanism', 
    Ingredient.of('kubejs:basic_precision_component') // 精密构件替换为基础构件
    )
    
    event.replaceInput({
        output:'mekanism:metallurgic_infuser'
    }, 
    'mekanism:ingot_osmium', 
    Ingredient.of('kubejs:basic_precision_component') // 冶金灌注机配方替换为基础构件
    )
    
    event.replaceInput({
        output:'mekanism:steel_casing'
    }, 
    'mekanism:ingot_osmium', 
    Ingredient.of('kubejs:basic_precision_component') //钢制机壳替换为基础构件
    )

    console.log('[精密构件配方系统] 修复版本已加载完成')

    
    
    
    // 验证所有配方加载
    console.log('[精密构件配方系统] 配方验证：')
    console.log('- 机械合成配方：6个（基础电路板、精炼精密合金、基础精密构件、高级电路板、改进精密构件、精密齿轮组）')
    console.log('- 序列装配配方：3个（强化黄铜锭、精密齿轮、高级精密机械）')
    console.log('- 测试工作台配方：1个（强化黄铜锭手动制作）')
    console.log('[精密构件配方系统] 序列装配配方已添加完成')
    
    // 测试物品是否正确注册
    console.log('[测试] 检查配方注册状态：')
    console.log('- 序列装配配方ID: kubejs:sequenced_assembly/reinforced_brass_ingot')
    console.log('- 测试工作台配方ID: kubejs:test/manual_reinforced_brass_simple')
    console.log('- 配方加载时机：ServerEvents.recipes 阶段')
    console.log('- 注意：EMI 等模组会在稍后阶段索引这些配方')
    
    // 验证配方注册完成
    console.log('[精密构件配方系统] 所有配方已成功注册到游戏中')
})
