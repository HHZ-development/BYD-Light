// 高级自定义稀有度系统配置
StartupEvents.init(event => {
    // 定义自定义稀有度配置
    global.customRarities = {
        legendary: {
            name: '传奇',
            color: '§6§l', // 金色粗体
            symbol: '★',
            baseRarity: 'epic',
            glow: true,
            description: '传奇品质'
        },
        mythic: {
            name: '神话',
            color: '§d§l§o', // 粉色粗体斜体
            symbol: '◆',
            baseRarity: 'epic',
            glow: true,
            description: '神话品质'
        },
        divine: {
            name: '神圣',
            color: '§f§l§k§r§e§l', // 闪烁金色效果
            symbol: '✦',
            baseRarity: 'epic',
            glow: true,
            description: '神圣品质'
        },
        cosmic: {
            name: '宇宙',
            color: '§5§l§k§r§b§l', // 紫色闪烁青色
            symbol: '✧',
            baseRarity: 'epic',
            glow: true,
            description: '宇宙品质'
        }
    }
    
    console.log('自定义稀有度系统已初始化')
})

// 应用自定义稀有度的通用函数
global.applyCustomRarity = function(itemBuilder, rarityKey, itemName) {
    let rarity = global.customRarities[rarityKey]
    if (rarity) {
        return itemBuilder
            .displayName(rarity.color + itemName)
            .rarity(rarity.baseRarity)
            .glow(rarity.glow)
    }
    return itemBuilder
}

// 获取稀有度信息的函数
global.getRarityInfo = function(rarityKey) {
    return global.customRarities[rarityKey] || null
}
