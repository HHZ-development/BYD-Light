// 自定义稀有度使用示例
StartupEvents.registry('item', event => {
    
    // 演示传奇稀有度
    let legendaryDemo = event.create('demo_legendary_item')
        .tooltip('§7这是传奇稀有度的演示物品')
        .texture('kubejs:item/demo_legendary_item')
    
    if (global.applyCustomRarity) {
        global.applyCustomRarity(legendaryDemo, 'legendary', '传奇演示物品')
    }
    
    // 演示神话稀有度
    let mythicDemo = event.create('demo_mythic_item')
        .tooltip('§7这是神话稀有度的演示物品')
        .texture('kubejs:item/demo_mythic_item')
    
    if (global.applyCustomRarity) {
        global.applyCustomRarity(mythicDemo, 'mythic', '神话演示物品')
    }
    
    // 演示神圣稀有度
    let divineDemo = event.create('demo_divine_item')
        .tooltip('§7这是神圣稀有度的演示物品')
        .texture('kubejs:item/demo_divine_item')
    
    if (global.applyCustomRarity) {
        global.applyCustomRarity(divineDemo, 'divine', '神圣演示物品')
    }
    
    // 演示宇宙稀有度
    let cosmicDemo = event.create('demo_cosmic_item')
        .tooltip('§7这是宇宙稀有度的演示物品')
        .texture('kubejs:item/demo_cosmic_item')
    
    if (global.applyCustomRarity) {
        global.applyCustomRarity(cosmicDemo, 'cosmic', '宇宙演示物品')
    }
})
