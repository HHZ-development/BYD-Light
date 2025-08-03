// 自定义稀有度系统
StartupEvents.init(event => {
    // 定义自定义稀有度配置
    global.customRarities = {
        legendary: {
            color: '§6§l', // 金色粗体
            baseRarity: 'epic',
            glintOverride: true // 强制发光效果
        },
        mythic: {
            color: '§d§l§o', // 粉色粗体斜体
            baseRarity: 'epic',
            glintOverride: true
        },
        divine: {
            color: '§f§l§k§r§e§l', // 闪烁金色效果
            baseRarity: 'epic',
            glintOverride: true
        }
    }
})

// 辅助函数：应用自定义稀有度
function applyCustomRarity(itemBuilder, customRarityName, baseName) {
    let rarityConfig = global.customRarities[customRarityName]
    if (rarityConfig) {
        return itemBuilder
            .displayName(rarityConfig.color + baseName)
            .rarity(rarityConfig.baseRarity)
            .glow(rarityConfig.glintOverride || false)
    }
    return itemBuilder
}

// 导出函数供其他脚本使用
global.applyCustomRarity = applyCustomRarity
