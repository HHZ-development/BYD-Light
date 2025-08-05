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
})

console.log('[精密构件物品系统] 完全中文嵌入版本已加载完成')