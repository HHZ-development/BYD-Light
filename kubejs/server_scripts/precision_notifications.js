// 精密构件通知系统 - 零翻译依赖版本
// 完全不使用任何翻译相关功能

console.log('[精密构件通知] 开始加载零翻译依赖版本...')

// ============ 玩家获得精密构件时的通知 ============
PlayerEvents.inventoryChanged(inventoryEvent => {
    const thePlayer = inventoryEvent.player
    const theItem = inventoryEvent.item
    
    if (!thePlayer || !theItem) return
    
    // 直接检查物品ID并显示消息，避免任何变量声明
    if (theItem.id === 'kubejs:basic_precision_component') {
        inventoryEvent.server.scheduleInTicks(40, () => {
            thePlayer.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
            thePlayer.tell('§a[阶段解锁] §f基础阶段完成！现在可以制作改良精密构件了！')
            thePlayer.tell('§7提示: 改良精密构件需要在基础构件的基础上添加更多材料')
            thePlayer.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
        })
    } else if (theItem.id === 'kubejs:improved_precision_component') {
        inventoryEvent.server.scheduleInTicks(40, () => {
            thePlayer.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
            thePlayer.tell('§b[阶段解锁] §f改良阶段完成！高级精密构件现已解锁！')
            thePlayer.tell('§7提示: 高级构件需要精密机械部件和特殊合金')
            thePlayer.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
        })
    } else if (theItem.id === 'kubejs:advanced_precision_component') {
        inventoryEvent.server.scheduleInTicks(40, () => {
            thePlayer.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
            thePlayer.tell('§d[阶段解锁] §f高级阶段完成！专家级构件等待你的挑战！')
            thePlayer.tell('§7提示: 专家级构件需要复杂的组装流程')
            thePlayer.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
        })
    } else if (theItem.id === 'kubejs:expert_precision_component') {
        inventoryEvent.server.scheduleInTicks(40, () => {
            thePlayer.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
            thePlayer.tell('§6[阶段解锁] §f专家阶段完成！大师级构件已开放！')
            thePlayer.tell('§7提示: 大师级构件是真正的挑战，需要完美的精度')
            thePlayer.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
        })
    } else if (theItem.id === 'kubejs:master_precision_component') {
        inventoryEvent.server.scheduleInTicks(40, () => {
            thePlayer.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
            thePlayer.tell('§c[阶段解锁] §f大师阶段完成！传奇构件等待着真正的大师！')
            thePlayer.tell('§7提示: 传奇构件是最终挑战，需要所有前置构件')
            thePlayer.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
        })
    } else if (theItem.id === 'kubejs:legendary_precision_component') {
        inventoryEvent.server.scheduleInTicks(40, () => {
            thePlayer.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
            thePlayer.tell('§4§l[传奇成就] §f恭喜！你已经掌握了精密构件系统的全部奥秘！')
            thePlayer.tell('§e你现在是真正的精密构件大师！')
            thePlayer.tell('§6◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆')
        })
    }
})

// ============ 玩家登录欢迎消息 ============
PlayerEvents.loggedIn(loginEvent => {
    const welcomePlayer = loginEvent.player
    
    if (!welcomePlayer) return
    
    // 延迟3秒显示欢迎消息
    loginEvent.server.scheduleInTicks(60, () => {
        welcomePlayer.tell('§6===========================================')
        welcomePlayer.tell('§e       欢迎来到 HongHuCraft 精密构件系统')
        welcomePlayer.tell('§6===========================================')
        welcomePlayer.tell('§a这是一个基于 Create 模组的进阶制作系统')
        welcomePlayer.tell('§b• 使用 /precision help 查看调试命令')
        welcomePlayer.tell('§b• 在机械装配台中制作精密构件')
        welcomePlayer.tell('§b• 从基础阶段开始，逐步解锁更高级的构件')
        welcomePlayer.tell('§6===========================================')
        
        // 新手提示 - 完全避免任何变量声明
        if (!welcomePlayer.persistentData.precisionProgress) {
            welcomePlayer.tell('§7[新手提示] 从制作基础精密构件开始你的旅程！')
        } else {
            welcomePlayer.tell('§a[欢迎回来] §f你已经在精密构件系统中取得了进展！')
        }
    })
})

console.log('[精密构件通知系统] 零变量声明版本已加载完成')
