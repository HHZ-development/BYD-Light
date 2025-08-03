// 自定义稀有度系统 - 客户端部分
// 暂时注释掉工具提示功能，等确认正确的语法

/*
// 客户端工具提示处理
ItemEvents.tooltip(event => {
    let itemId = event.itemStack.id
    
    // 为传奇物品添加特殊工具提示样式
    if (itemId.includes('legendary_precision_component')) {
        // 清除原有工具提示
        let lines = event.text
        for (let i = lines.size() - 1; i >= 0; i--) {
            if (lines.get(i).toString().includes('传说中的完美构件') || 
                lines.get(i).toString().includes('超越了常规工艺的极限')) {
                lines.remove(i)
            }
        }
        
        // 添加自定义工具提示
        event.add('')
        event.add('§6传说中的完美构件')
        event.add('§8超越了常规工艺的极限')
        event.add('')
        event.add('§e§l★ 传奇品质 ★')
        event.add('§7稀有度等级: §6传奇')
    }
    
    if (itemId.includes('crystalline_precision_matrix')) {
        // 清除原有工具提示
        let lines = event.text
        for (let i = lines.size() - 1; i >= 0; i--) {
            if (lines.get(i).toString().includes('蕴含神秘力量的材料') || 
                lines.get(i).toString().includes('能够完美传递机械能')) {
                lines.remove(i)
            }
        }
        
        // 添加自定义工具提示
        event.add('')
        event.add('§6蕴含神秘力量的材料')
        event.add('§8能够完美传递机械能')
        event.add('')
        event.add('§d§l◆ 神话品质 ◆')
        event.add('§7稀有度等级: §d神话')
    }
})
*/
