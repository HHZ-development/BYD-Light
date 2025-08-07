// ============ 精密构件系统 - 阶段性进度跟踪 v2 (Tick-based) ============

// 定义所有精密构件
const PRECISION_ITEMS = [
    'kubejs:basic_precision_component',
    'kubejs:improved_precision_component',
    'kubejs:advanced_precision_component',
    'kubejs:expert_precision_component',
    'kubejs:master_precision_component',
    'kubejs:legendary_precision_component'
];

// 定义每个构件对应的消息和名称
const ITEM_DETAILS = {
    'kubejs:basic_precision_component': { name: '§a基础精密构件', message: '§a▶ 解锁阶段：基础精密构件制作' },
    'kubejs:improved_precision_component': { name: '§b改良精密构件', message: '§b▶ 解锁阶段：改良精密构件制作' },
    'kubejs:advanced_precision_component': { name: '§d高级精密构件', message: '§d▶ 解锁阶段：高级精密构件制作' },
    'kubejs:expert_precision_component': { name: '§6专家级精密构件', message: '§6▶ 解锁阶段：专家级精密构件制作' },
    'kubejs:master_precision_component': { name: '§c大师级精密构件', message: '§c▶ 解锁阶段：大师级精密构件制作' },
    'kubejs:legendary_precision_component': { name: '§4§l传奇精密构件', message: '§4§l▶ 解锁阶段：传奇精密构件制作' }
};

/**
 * 检查并更新玩家的精密构件解锁进度。
 * @param {Internal.Player} player - 要检查的玩家对象。
 */
function checkPlayerPrecisionProgress(player) {
    const playerData = player.persistentData;

    // 遍历所有定义的精密构件
    PRECISION_ITEMS.forEach(itemId => {
        const unlockKey = 'precision_' + itemId.replace(':', '_');
        
        // 检查玩家是否已经解锁了这个阶段
        if (!playerData.getBoolean(unlockKey)) {
            // 检查玩家背包中是否包含该物品
            if (player.inventory.contains(itemId)) {
                // 标记为已解锁
                playerData.putBoolean(unlockKey, true);
                
                const details = ITEM_DETAILS[itemId];
                if (details) {
                    // 发送进度消息和解锁消息
                    player.tell("§a[精密构件系统] §f你获得了 " + details.name + "！");
                    player.tell(details.message);

                    // 播放音效
                    player.playSound('minecraft:entity.player.levelup', 1.0, 1.0);

                    // 对高阶构件发送全服广播
                    if (itemId === 'kubejs:master_precision_component' || itemId === 'kubejs:legendary_precision_component') {
                        const playerName = player.username || player.name.string;
                        player.server.runCommandSilent('tellraw @a {"text":"§6[服务器] §f玩家 §b' + playerName + ' §f获得了 ' + details.name + '§f！"}');
                    }
                    
                    // 调试信息
                    console.log("玩家 " + (player.username || player.name.string) + " 解锁了: " + details.name);
                }
            }
        }
    });
}

// ============ 唯一检测事件 - 背包变化时检查 ============
PlayerEvents.inventoryChanged(event => {
    const { player } = event;
    
    // 当玩家背包发生变化时，检查精密构件进度
    checkPlayerPrecisionProgress(player);
});

// 注释掉不可用的 ItemEvents.pickUp 事件
// ItemEvents.pickUp 在当前版本中不可用，已移除
/*
ItemEvents.pickUp(event => {
    const { player, item } = event;
    
    // 如果拾取的是精密构件，立即检查
    if (PRECISION_ITEMS.includes(item.id)) {
        // 延迟一个 tick 执行，确保物品已经进入背包
        player.server.scheduleInTicks(1, () => {
            checkPlayerPrecisionProgress(player);
        });
    }
});
*/

// ============ 服务器启动配置 ============
ServerEvents.loaded(event => {
    console.log('精密构件进度跟踪系统 (Tick-based) 已加载。');

    // 设置服务器级别的配置
    const server = event.server;
    server.persistentData.put('precisionConfig', {
        easyMode: false,
        disableStagedProgression: true,
        logProgression: true,
        hardMode: true,
        enableStages: true,
        enableMessages: true
    });

    console.log('§a[精密构件系统] 配置加载完成');
});

// ============ 玩家加入服务器事件 ============
PlayerEvents.loggedIn(event => {
    const { player } = event;
    
    // 玩家登录时检查一次，以防离线时获得物品
    checkPlayerPrecisionProgress(player);
});

// ============ 调试命令 ============
// 暂时禁用命令功能，专注于核心检测功能
// 核心功能：PlayerEvents.inventoryChanged 和 checkPlayerPrecisionProgress
console.log('精密构件调试命令暂时禁用，核心检测功能正常运行');
