// 使用自定义稀有度的示例物品
StartupEvents.registry('item', event => {
    
    // 使用自定义legendary稀有度
    let legendaryItem = event.create('example_legendary_item')
        .tooltip('§6这是一个传奇物品的示例')
        .tooltip('§8使用了自定义稀有度系统')
        .texture('kubejs:item/example_legendary_item')
    
    // 应用自定义稀有度（需要在custom_rarity.js加载后）
    if (global.applyCustomRarity) {
        global.applyCustomRarity(legendaryItem, 'legendary', '传奇示例物品')
    } else {
        legendaryItem.displayName('§6§l传奇示例物品').rarity('epic')
    }
    
    // 使用mythic稀有度
    let mythicItem = event.create('example_mythic_item')
        .tooltip('§d这是一个神话物品的示例')
        .tooltip('§8更高级的自定义稀有度')
        .texture('kubejs:item/example_mythic_item')
    
    if (global.applyCustomRarity) {
        global.applyCustomRarity(mythicItem, 'mythic', '神话示例物品')
    } else {
        mythicItem.displayName('§d§l§o神话示例物品').rarity('epic')
    }
})
