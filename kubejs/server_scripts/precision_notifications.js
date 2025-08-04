// 精密构件通知系统 - 完全中文版本
// 直接使用中文消息，完全不依赖翻译文件

// ============ 玩家获得精密构件时的通知 ============
PlayerEvents.inventoryChanged(event => {
    const player = event.player
    const item = event.item
    
    if (!player || !item) return
    
    let message = ''
    let tip = ''
    
    // 根据物品ID设置具体的中文消息
    switch (item.id) {
        case 'kubejs:basic_precision_component':
            message = '§a[阶段解锁] §f基础阶段完成！现在可以制作改良精密构件了！'
            tip = '§7提示: 改良精密构件需要在基础构件的基础上添加更多材料'
            break
        case 'kubejs:improved_precision_component':
            message = '§b[阶段解锁] §f改良阶段完成！高级精密构件现已解锁！'
            tip = '§7提示: 高级构件需要精密机械部件和特殊合金'
            break
        case 'kubejs:advanced_precision_component':
            message = '§d[阶段解锁] §f高级阶段完成！专家级构件等待你的挑战！'
            tip = '§7提示: 专家级构件需要复杂的组装流程'
            break
        case 'kubejs:expert_precision_component':
            message = '§6[阶段解锁] §f专家阶段完成！大师级构件已开放！'
            tip = '§7提示: 大师级构件是真正的挑战，需要完美的精度'
            break
        case 'kubejs:master_precision_component':
            message = '§c[阶段解锁] §f大师阶段完成！传奇构件等待着真正的大师！'
            tip = '§7提示: 传奇构件是最终挑战，需要所有前置构件'
            break
        case 'kubejs:legendary_precision_component':
            message = '§4§l[传奇成就] §f恭喜！你已经掌握了精密构件系统的全部奥秘！'
            tip = '§e你现在是真正的精密构件大师！'
            break
        default:
            return // 不是精密构件，退出
    }
    
    // 延迟2秒显示通知，避免与其他消息冲突
    event.server.scheduleInTicks(40, () => {
        player.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
        player.tell(message)
        player.tell(tip)
        player.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
    })
})

// ============ 玩家登录欢迎消息 ============
PlayerEvents.loggedIn(event => {
    const player = event.player
    
    if (!player) return
    
    // 延迟3秒显示欢迎消息
    event.server.scheduleInTicks(60, () => {
        player.tell('§6===========================================')
        player.tell('§e       欢迎来到 HongHuCraft 精密构件系统')
        player.tell('§6===========================================')
        player.tell('§a这是一个基于 Create 模组的进阶制作系统')
        player.tell('§b• 使用 §e/precision help §b查看调试命令')
        player.tell('§b• 在机械装配台中制作精密构件')
        player.tell('§b• 从基础阶段开始，逐步解锁更高级的构件')
        player.tell('§6===========================================')
        
        // 新手提示
        if (!player.persistentData.precisionProgress || Object.keys(player.persistentData.precisionProgress).length === 0) {
            player.tell('§7[新手提示] 从制作 §a基础精密构件 §7开始你的旅程！')
        } else {
            // 直接在tell中计算完成的阶段数量，避免变量声明冲突
            player.tell(`§a[欢迎回来] §f你已经完成了 §e${Object.keys(player.persistentData.precisionProgress || {}).filter(key => (player.persistentData.precisionProgress || {})[key]).length}§f/6 个精密构件阶段！`)
        }
    })
})

console.log('[精密构件通知系统] 完全中文版本已加载完成')
