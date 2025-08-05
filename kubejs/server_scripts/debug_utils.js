// 调试工具脚本
// 用于清除精密构件系统的进度数据，方便测试

ServerEvents.command(event => {
    const { command, level, sender } = event;

    // 检查 command 是否存在
    if (!command) return;

    // 确保发送者是玩家
    if (!sender.isPlayer()) return;
    
    const player = sender;

    // 将带参数的命令和不带参数的分开处理
    if (command.startsWith('precision give ')) {
        const args = command.split(' ');
        if (args.length >= 3) {
            const tier = args[2];
            const itemMap = {
                'basic': 'kubejs:basic_precision_component',
                'improved': 'kubejs:improved_precision_component',
                'advanced': 'kubejs:advanced_precision_component',
                'expert': 'kubejs:expert_precision_component',
                'master': 'kubejs:master_precision_component',
                'legendary': 'kubejs:legendary_precision_component',
                'gear': 'kubejs:precision_gear_assembly',
                'shaft': 'kubejs:precision_shaft_core',
                'alloy': 'kubejs:refined_precision_alloy',
                'matrix': 'kubejs:crystalline_precision_matrix'
            };
            if (itemMap[tier]) {
                const itemName = tier === 'basic' ? '§a基础精密构件' :
                               tier === 'improved' ? '§b改良精密构件' :
                               tier === 'advanced' ? '§d高级精密构件' :
                               tier === 'expert' ? '§6专家级精密构件' :
                               tier === 'master' ? '§c大师级精密构件' :
                               tier === 'legendary' ? '§4§l传奇精密构件' :
                               tier === 'gear' ? '§7精密齿轮组件' :
                               tier === 'shaft' ? '§7精密轴心核心' :
                               tier === 'alloy' ? '§7精炼精密合金' :
                               tier === 'matrix' ? '§d§l晶化精密基质' : tier;
                player.give(itemMap[tier]);
                player.tell(`§6[精密构件系统] §a你获得了 ${itemName}！`);
            } else {
                player.tell('§c[调试] §f未知的构件类型！');
                player.tell('§7可用类型: basic, improved, advanced, expert, master, legendary, gear, shaft, alloy, matrix');
            }
        } else {
            player.tell('§c[调试] §f用法: /precision give <类型>');
        }
        event.cancel();
        return; // 处理完带参数命令后提前返回
    }

    // 使用 switch 处理不带参数的命令
    switch (command) {
        case 'precision reset':
            {
                const playerData = player.persistentData;
                if (playerData.precisionProgress) {
                    playerData.remove('precisionProgress');
                    player.tell('§a[调试] §f精密构件进度已重置！');
                    player.tell('§7你现在可以重新体验整个进度系统。');
                } else {
                    player.tell('§c[调试] §f你没有需要重置的进度数据。');
                }
                event.cancel();
                break;
            }

        case 'precision status':
            {
                const statusData = player.persistentData;
                player.tell('§6=== 精密构件进度状态 ===');
                if (statusData.precisionProgress) {
                    const progress = statusData.precisionProgress;
                    const unlocked = [];
                    if (progress['kubejs:basic_precision_component']) unlocked.push('§a基础');
                    if (progress['kubejs:improved_precision_component']) unlocked.push('§b改良');
                    if (progress['kubejs:advanced_precision_component']) unlocked.push('§d高级');
                    if (progress['kubejs:expert_precision_component']) unlocked.push('§6专家');
                    if (progress['kubejs:master_precision_component']) unlocked.push('§c大师');
                    if (progress['kubejs:legendary_precision_component']) unlocked.push('§4§l传奇');
                    if (unlocked.length > 0) {
                        player.tell('§f已解锁阶段: ' + unlocked.join('§f, '));
                    } else {
                        player.tell('§7还没有解锁任何阶段。');
                    }
                } else {
                    player.tell('§7还没有解锁任何阶段。');
                }
                event.cancel();
                break;
            }

        case 'precision giveall':
            {
                const items = [
                    'kubejs:basic_precision_component',
                    'kubejs:improved_precision_component',
                    'kubejs:advanced_precision_component',
                    'kubejs:expert_precision_component',
                    'kubejs:master_precision_component',
                    'kubejs:legendary_precision_component',
                    'kubejs:precision_gear_assembly',
                    'kubejs:precision_shaft_core',
                    'kubejs:refined_precision_alloy',
                    'kubejs:crystalline_precision_matrix'
                ];
                items.forEach(item => {
                    player.give(item);
                });
                player.tell('§a[调试] §f已给予你所有精密构件！');
                event.cancel();
                break;
            }
            
        case 'precision help':
            player.tell('§6=== 精密构件调试命令 ===');
            player.tell('§f/precision reset §7- 重置进度');
            player.tell('§f/precision status §7- 查看当前进度');
            player.tell('§f/precision give <类型> §7- 给予指定构件');
            player.tell('§f/precision giveall §7- 给予所有构件');
            player.tell('§f/precision help §7- 显示此帮助');
            player.tell('§8构件类型: basic, improved, advanced, expert, master, legendary, gear, shaft, alloy, matrix');
            event.cancel();
            break;
    }
});
