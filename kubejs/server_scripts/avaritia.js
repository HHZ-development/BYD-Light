/**
 * ===============================================================
 * 模组整合配方系统 - 生产版本
 * ===============================================================
 * 
 * 🎯 包含配方：Avaritia极限工作台 + Create搅拌机
 * 📅 创建时间：2025年8月7日
 * 🚀 状态：生产就绪 (Production Ready)
 * 
 * 📋 技术要点：
 * - Avaritia: 'avaritia:extreme_shaped'，9x9等长模式
 * - Create: 'create:mixing'，heat_requirement格式
 */

ServerEvents.recipes(event => {
    console.log('[模组配方] 🚀 开始加载配方...');
    
    // ========== Avaritia 极限工作台配方 ==========
    
    // 星光锭 - 无尽锭前置材料
    event.custom({
        type: 'avaritia:extreme_shaped',
        pattern: [
            'DDDDDDDDD',
            'DAAAAAAD ',
            'DAEEEAED ',
            'DAEABEAED',
            'DAEBBBAED',
            'DAEABEAED',
            'DAEEEAED ',
            'DAAAAAAD ',
            'DDDDDDDDD'
        ],
        key: {
            A: { item: 'ars_nouveau:source_gem' },
            B: { item: 'minecraft:nether_star' },
            D: { item: 'minecraft:diamond' },
            E: { item: 'minecraft:emerald' }
        },
        result: {
            id: 'avaritia:infinity_ingot',
            count: 1
        }
    }).id('kubejs:starlight_ingot');
    
    // 混沌核心 - 无尽催化剂组件
    event.custom({
        type: 'avaritia:extreme_shaped',
        pattern: [
            'AAAAAAAAA',
            'ABBBBBBBA',
            'ABCDCDCBA',
            'BCDEEECDB',
            'BCDEEEDCB',
            'BCDEEECDB',
            'ABCDCDCBA',
            'ABBBBBBBA',
            'AAAAAAAAA'
        ],
        key: {
            A: { item: 'avaritia:neutronium_ingot' },
            B: { item: 'minecraft:dragon_egg' },
            C: { item: 'cataclysm:witherite_ingot' },
            D: { item: 'minecraft:nether_star' },
            E: { item: 'ars_nouveau:drygmy_charm' }
        },
        result: {
            id: 'avaritia:infinity_catalyst',
            count: 1
        }
    }).id('kubejs:chaos_core');
    
    // 终极能量核心 - 高级能量存储
    event.custom({
        type: 'avaritia:extreme_shaped',
        pattern: [
            'ABBBBBBBA',
            'BCDDDDDCB',
            'BDEEEEEDB',
            'BDEFGHFEB',
            'BDEGHIGEB',
            'BDEFGHFEB',
            'BDEEEEEDB',
            'BCDDDDDCB',
            'ABBBBBBBA'
        ],
        key: {
            A: { item: 'minecraft:beacon' },
            B: { item: 'avaritia:crystal_matrix_ingot' },
            C: { item: 'avaritia:neutronium_ingot' },
            D: { item: 'minecraft:redstone_block' },
            E: { item: 'minecraft:diamond_block' },
            F: { item: 'minecraft:emerald_block' },
            G: { item: 'minecraft:gold_block' },
            H: { item: 'minecraft:iron_block' },
            I: { item: 'minecraft:nether_star' }
        },
        result: {
            id: 'avaritia:endest_pearl',
            count: 1
        }
    }).id('kubejs:ultimate_energy_core');
    
    // ========== Create 搅拌机配方 ==========
    
    // 铁煤合成钢锭 - 替代Mekanism制作方法
    event.custom({
        type: 'create:mixing',
        heat_requirement: 'heated',
        ingredients: [
            { item: 'minecraft:iron_ingot' },
            { item: 'minecraft:coal' }
        ],
        results: [
            {
                count: 1,
                item: { id: 'mekanism:ingot_steel' }
            }
        ]
    }).id('kubejs:steel_mixing');
    
    console.log('[模组配方] ✅ 加载完成 - 4个配方已注册');
});
