// Create精密构件阶段性物品定义 - 完全中文嵌入版本
StartupEvents.registry('item', event => {
    
    // 阶段1：基础精密构件
    event.create('basic_precision_component')
        .displayName('§a基础精密构件')
        .tooltip('§7精密构件系统的起点')
        .tooltip('§7用于制作更高级的精密构件')
        .tooltip('§8在机械装配台中制作')
        .rarity('common')
        .texture('kubejs:item/basic_precision_component')
    
    // 阶段2：改良精密构件
    event.create('improved_precision_component')
        .displayName('§b改良精密构件')
        .tooltip('§7经过改良的精密构件')
        .tooltip('§7精度比基础构件更高')
        .tooltip('§8需要基础精密构件作为前置')
        .rarity('uncommon')
        .texture('kubejs:item/improved_precision_component')
    
    // 阶段3：高级精密构件
    event.create('advanced_precision_component')
        .displayName('§d高级精密构件')
        .tooltip('§7高精度的机械构件')
        .tooltip('§7可用于制作复杂机械')
        .tooltip('§8需要改良精密构件作为前置')
        .rarity('rare')
        .texture('kubejs:item/advanced_precision_component')
    
    // 阶段4：专家级精密构件
    event.create('expert_precision_component')
        .displayName('§6专家级精密构件')
        .tooltip('§7极高精度的专业构件')
        .tooltip('§7专家级工艺的产物')
        .tooltip('§8需要高级精密构件作为前置')
        .rarity('epic')
        .texture('kubejs:item/expert_precision_component')
    
    // 阶段5：大师级精密构件
    event.create('master_precision_component')
        .displayName('§c大师级精密构件')
        .tooltip('§7完美精度的顶级构件')
        .tooltip('§7代表了工艺的巅峰')
        .tooltip('§8需要专家级精密构件作为前置')
        .rarity('epic')
        .texture('kubejs:item/master_precision_component')
    
    // 阶段6：传奇精密构件
    event.create('legendary_precision_component')
        .displayName('§4§l传奇精密构件')
        .tooltip('§6传说中的完美构件')
        .tooltip('§6超越了常规工艺的极限')
        .tooltip('§8需要大师级精密构件作为前置')
        .rarity('epic')
        .glow(true)
        .texture('kubejs:item/legendary_precision_component')
    
    // 精密工具组件
    event.create('precision_gear')
        .displayName('§7精密齿轮')
        .tooltip('§7高精度的齿轮')
        .tooltip('§7通过序列装配制作')
        .tooltip('§8需要黄铜板和精密机械')
        .rarity('uncommon')
        .texture('kubejs:item/precision_gear')
    
    event.create('precision_gear_assembly')
        .displayName('§7精密齿轮组件')
        .tooltip('§7高精度齿轮组合')
        .tooltip('§7用于制作精密机械')
        .tooltip('§8需要改良精密构件制作')
        .rarity('rare')
        .texture('kubejs:item/precision_gear_assembly')
    
    event.create('precision_shaft_core')
        .displayName('§7精密轴心核心')
        .tooltip('§7超精密的轴心构件')
        .tooltip('§7保证完美的转动精度')
        .tooltip('§8需要高级精密构件制作')
        .rarity('epic')
        .texture('kubejs:item/precision_shaft_core')
    
    // 特殊合金材料
    event.create('refined_precision_alloy')
        .displayName('§7精炼精密合金')
        .tooltip('§7经过特殊处理的合金')
        .tooltip('§7具有优异的机械性能')
        .tooltip('§8用于制作专家级构件')
        .rarity('rare')
        .texture('kubejs:item/refined_precision_alloy')
    
    event.create('crystalline_precision_matrix')
        .displayName('§d§l晶化精密基质')
        .tooltip('§6蕴含神秘力量的材料')
        .tooltip('§6能够完美传递机械能')
        .tooltip('§8用于制作大师级构件')
        .rarity('epic')
        .glow(true)
        .texture('kubejs:item/crystalline_precision_matrix')
    // ============ 电路板注册 ============
    event.create('basic_circuit')
        .displayName('基础电路板')
        .tooltip('§7最基础的电路核心，适用于初级机械')
        .rarity('common')
        .texture('kubejs:item/basic_circuit')
    event.create('advanced_circuit')
        .displayName('高级电路板')
        .tooltip('§b经过升级的电路板，性能更强')
        .rarity('uncommon')
        .texture('kubejs:item/advanced_circuit')
    event.create('atomic_circuit')
        .displayName('原子电路板')
        .tooltip('§d原子级精度的电路板，适用于高端设备')
        .rarity('rare')
        .texture('kubejs:item/atomic_circuit')
    event.create('quantum_circuit')
        .displayName('量子电路板')
        .tooltip('§6量子科技的结晶，突破传统极限')
        .rarity('epic')
        .texture('kubejs:item/quantum_circuit')
    event.create('hyper_circuit')
        .displayName('超能电路板')
        .tooltip('§e超能级电路，驱动顶级机械')
        .rarity('epic')
        .texture('kubejs:item/hyper_circuit')
    event.create('cosmic_circuit')
        .displayName('宇宙电路板')
        .tooltip('§c宇宙级科技产物，终极电路板')
        .rarity('epic')
        .glow(true)
        .texture('kubejs:item/cosmic_circuit')
    
    // ============ 序列合成中间物品 ============
    event.create('incomplete_crystalline_precision_matrix')
        .displayName('未完成的晶化精密基质')
        .texture('kubejs:item/incomplete_crystalline_precision_matrix')
    
    event.create('incomplete_precision_shaft')
        .displayName('未完成的精密轴心核心')
        .texture('kubejs:item/incomplete_precision_shaft')
    
    event.create('incomplete_crystal_matrix')
        .displayName('未完成的晶体基质')
        .texture('kubejs:item/incomplete_crystal_matrix')

    // ============ 序列装配示例物品 ============
    event.create('reinforced_brass_ingot')
        .displayName('§6强化黄铜锭')
        .tooltip('§7通过序列装配制作的强化黄铜')
        .tooltip('§7比普通黄铜更加坚固')
        .tooltip('§8序列装配配方示例')
        .rarity('uncommon')
        .texture('kubejs:item/reinforced_brass_ingot')

    // ============ 高级精密机械装置及其中间物品 ============
    event.create('advanced_precision_mechanism')
        .displayName('§d高级精密机械装置')
        .tooltip('§7通过序列装配制作的高级机械装置')
        .tooltip('§7比普通精密机械装置更加精确')
        .tooltip('§8在序列装配台中制作')
        .rarity('rare')
        .texture('kubejs:item/advanced_precision_mechanism')

    // ============ 精密处理单元及其相关物品 ============
    event.create('precision_processing_unit')
        .displayName('§6精密处理单元')
        .tooltip('§7高精度的处理单元')
        .tooltip('§7能够执行复杂的精密操作')
        .tooltip('§8通过序列装配制作')
        .rarity('epic')
        .texture('kubejs:item/precision_processing_unit')
    
    event.create('incomplete_precision_processing_unit')
        .displayName('未完成的精密处理单元')
        .tooltip('§7序列装配过程中的中间产物')
        .texture('kubejs:item/incomplete_precision_processing_unit')
    
    event.create('damaged_precision_component')
        .displayName('§c损坏的精密构件')
        .tooltip('§7制作失败的副产品')
        .tooltip('§7可以回收部分材料')
        .rarity('common')
        .texture('kubejs:item/damaged_precision_component')

    // ============ 序列装配半成品物品 ============
    // 强化黄铜锭制作过程的半成品
    event.create('incomplete_reinforced_brass')
        .displayName('未完成的强化黄铜锭')
        .tooltip('§7序列装配过程中的中间产物')
        .tooltip('§8在序列装配台中使用')
        .texture('kubejs:item/incomplete_reinforced_brass')
    
    // 精密齿轮制作过程的半成品
    event.create('incomplete_precision_gear')
        .displayName('未完成的精密齿轮')
        .tooltip('§7序列装配过程中的中间产物')
        .tooltip('§8在序列装配台中使用')
        .texture('kubejs:item/incomplete_precision_gear')
    
    // 高级精密机械制作过程的半成品
    event.create('incomplete_advanced_precision_mechanism')
        .displayName('未完成的高级精密机械')
        .tooltip('§7序列装配过程中的中间产物')
        .tooltip('§8在序列装配台中使用')
        .texture('kubejs:item/incomplete_advanced_precision_mechanism')

})

// 验证物品注册完成
console.log('[精密构件物品系统] 物品注册验证：')
console.log('- 基础精密构件系列：basic_precision_component, improved_precision_component')
console.log('- 电路板系列：basic_circuit, advanced_circuit')
console.log('- 合金材料：refined_precision_alloy')
console.log('- 精密装置：precision_gear_assembly, advanced_precision_mechanism')
console.log('- 序列装配成品：reinforced_brass_ingot, precision_gear')
console.log('- 序列装配半成品：incomplete_reinforced_brass, incomplete_precision_gear, incomplete_advanced_precision_mechanism')
console.log('[精密构件物品系统] 完全中文嵌入版本已加载完成，包含序列装配支持')