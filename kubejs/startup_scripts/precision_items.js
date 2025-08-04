// Create精密构件阶段性物品定义
StartupEvents.registry('item', event => {
    
    // 阶段1：基础精密构件 (Basic Precision Component)
    event.create('basic_precision_component')
        .displayName('基础精密构件')
        .tooltip('§7Create机械的基础精密构件')
        .tooltip('§8用于制作更高级的精密构件')
        .rarity('common')
        .texture('kubejs:item/basic_precision_component')
    
    // 阶段2：改良精密构件 (Improved Precision Component)
    event.create('improved_precision_component')
        .displayName('改良精密构件')
        .tooltip('§7经过改良的精密构件')
        .tooltip('§8精度比基础构件更高')
        .rarity('uncommon')
        .texture('kubejs:item/improved_precision_component')
    
    // 阶段3：高级精密构件 (Advanced Precision Component)
    event.create('advanced_precision_component')
        .displayName('高级精密构件')
        .tooltip('§7高精度的机械构件')
        .tooltip('§8可用于制作复杂机械')
        .rarity('rare')
        .texture('kubejs:item/advanced_precision_component')
    
    // 阶段4：专家级精密构件 (Expert Precision Component)
    event.create('expert_precision_component')
        .displayName('专家级精密构件')
        .tooltip('§7极高精度的专业构件')
        .tooltip('§8专家级工艺的产物')
        .rarity('epic')
        .texture('kubejs:item/expert_precision_component')
    
    // 阶段5：大师级精密构件 (Master Precision Component)
    event.create('master_precision_component')
        .displayName('大师级精密构件')
        .tooltip('§7完美精度的顶级构件')
        .tooltip('§8代表了工艺的巅峰')
        .rarity('epic')
        .texture('kubejs:item/master_precision_component')
    
    // 阶段6：传奇精密构件 (Legendary Precision Component)
    event.create('legendary_precision_component')
        .displayName('§6§l传奇精密构件') // 金色粗体
        .tooltip('§6传说中的完美构件')
        .tooltip('§8超越了常规工艺的极限')
        .rarity('epic')
        .glow(true) // 添加附魔光芒
        .texture('kubejs:item/legendary_precision_component')
    
    // 精密工具组件
    event.create('precision_gear_assembly')
        .displayName('精密齿轮组件')
        .tooltip('§7高精度齿轮组合')
        .tooltip('§8用于制作精密机械')
        .rarity('rare')
        .texture('kubejs:item/precision_gear_assembly')
    
    event.create('precision_shaft_core')
        .displayName('精密轴心核心')
        .tooltip('§7超精密的轴心构件')
        .tooltip('§8保证完美的转动精度')
        .rarity('epic')
        .texture('kubejs:item/precision_shaft_core')
    
    // 特殊合金材料
    event.create('refined_precision_alloy')
        .displayName('精炼精密合金')
        .tooltip('§7经过特殊处理的合金')
        .tooltip('§8具有优异的机械性能')
        .rarity('rare')
        .texture('kubejs:item/refined_precision_alloy')
    
    event.create('crystalline_precision_matrix')
        .displayName('§d§l§o晶化精密基质') // 粉色粗体斜体
        .tooltip('§6蕴含神秘力量的材料')
        .tooltip('§8能够完美传递机械能')
        .rarity('epic')
        .glow(true) // 添加附魔光芒
        .texture('kubejs:item/crystalline_precision_matrix')
})
