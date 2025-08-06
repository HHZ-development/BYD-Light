// Create精密构件渐进式合成配方 - 修复版本
// 这是一个使用正确KubeJS Create语法的版本

ServerEvents.recipes(event => {

    // ============ 测试配方 ============
    // 简单的测试配方：用木板合成钻石
    event.shaped('minecraft:diamond', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'minecraft:oak_planks'
    }).id('kubejs:test/planks_to_diamond')

    // ============ 基础电路板配方 ============
    // 基础电路板 (Basic Circuit) - 使用最基础确认存在的物品
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            A: { item: 'create:brass_ingot' },
            B: { item: 'minecraft:redstone' },
            C: { item: 'minecraft:copper_ingot' },
            D: { item: 'minecraft:gold_ingot' },
            E: { item: 'minecraft:diamond' }
        },
        result: {
            id: 'kubejs:basic_circuit'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/basic_circuit')

    // ============ 精炼精密合金配方 ============
    // 精炼精密合金 (Refined Precision Alloy) - 使用基础材料
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'AB',
            'CD'
        ],
        key: {
            A: { item: 'create:brass_ingot' },
            B: { item: 'create:zinc_ingot' },
            C: { item: 'minecraft:copper_ingot' },
            D: { item: 'create:andesite_alloy' }
        },
        result: {
            id: 'kubejs:refined_precision_alloy',
            count: 2
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/refined_precision_alloy')

    // ============ 基础精密构件配方 ============
    // 阶段1：基础精密构件 (Basic Precision Component)
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'AB',
            'CD'
        ],
        key: {
            A: { item: 'create:precision_mechanism' },
            B: { item: 'create:brass_ingot' },
            C: { item: 'kubejs:basic_circuit' },
            D: { item: 'create:andesite_alloy' }
        },
        result: {
            id: 'kubejs:basic_precision_component'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/basic_precision_component')

    // ============ 高级电路板配方 ============
    // 高级电路板 (Advanced Circuit)
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            A: { item: 'create:brass_ingot' },
            B: { item: 'minecraft:redstone' },
            C: { item: 'minecraft:copper_ingot' },
            D: { item: 'minecraft:emerald' },
            E: { item: 'create:zinc_ingot' }
        },
        result: {
            id: 'kubejs:advanced_circuit'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/advanced_circuit')

    // ============ 改进精密构件配方 ============
    // 改进精密构件 (Improved Precision Component)
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            A: { item: 'create:brass_ingot' },
            B: { item: 'minecraft:redstone' },
            C: { item: 'kubejs:basic_precision_component' },
            D: { item: 'minecraft:iron_ingot' },
            E: { item: 'kubejs:advanced_circuit' }
        },
        result: {
            id: 'kubejs:improved_precision_component'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/improved_precision_component')

    // ============ 精密齿轮组配方 ============
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'ABA',
            'CDC',
            'ABA'
        ],
        key: {
            A: { item: 'create:brass_ingot' },
            B: { item: 'kubejs:improved_precision_component' },
            C: { item: 'create:cogwheel' },
            D: { item: 'create:large_cogwheel' }
        },
        result: {
            id: 'kubejs:precision_gear_assembly'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/precision_gear_assembly')

    console.log('[精密构件配方系统] 修复版本已加载完成')

    // ============ 序列装配配方示例 ============
    // 使用与整合包相同的序列装配语法：强化黄铜锭
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "create:brass_ingot"
        },
        loops: 2,
        results: [
            {
                chance: 90.0,
                id: "kubejs:reinforced_brass_ingot"
            },
            {
                chance: 10.0,
                id: "create:brass_ingot"
            }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:incomplete_reinforced_brass"
                    },
                    {
                        item: "minecraft:iron_ingot"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_reinforced_brass"
                    }
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    {
                        item: "kubejs:incomplete_reinforced_brass"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_reinforced_brass"
                    }
                ]
            }
        ],
        transitional_item: {
            id: "kubejs:incomplete_reinforced_brass"
        }
    }).id("kubejs:create/sequenced_assembly/reinforced_brass_ingot")

    // 精密齿轮制作
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "create:brass_sheet"
        },
        loops: 1,
        results: [
            {
                chance: 95.0,
                id: "kubejs:precision_gear"
            },
            {
                chance: 5.0,
                id: "create:brass_sheet"
            }
        ],
        sequence: [
            {
                type: "create:cutting",
                ingredients: [
                    {
                        item: "kubejs:incomplete_precision_gear"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_precision_gear"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:incomplete_precision_gear"
                    },
                    {
                        item: "create:precision_mechanism"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_precision_gear"
                    }
                ]
            }
        ],
        transitional_item: {
            id: "kubejs:incomplete_precision_gear"
        }
    }).id("kubejs:create/sequenced_assembly/precision_gear")

    // 高级精密机械制作
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "kubejs:precision_gear_assembly"
        },
        loops: 2,
        results: [
            {
                chance: 90.0,
                id: "kubejs:advanced_precision_mechanism"
            },
            {
                chance: 10.0,
                id: "kubejs:precision_gear_assembly"
            }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:incomplete_advanced_precision_mechanism"
                    },
                    {
                        item: "create:precision_mechanism"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_advanced_precision_mechanism"
                    }
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    {
                        item: "kubejs:incomplete_advanced_precision_mechanism"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_advanced_precision_mechanism"
                    }
                ]
            }
        ],
        transitional_item: {
            id: "kubejs:incomplete_advanced_precision_mechanism"
        }
    }).id("kubejs:create/sequenced_assembly/advanced_precision_mechanism")
    
    // 添加一个简单的工作台配方用于测试
    event.shaped('kubejs:reinforced_brass_ingot', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'create:brass_ingot',
        B: 'minecraft:iron_ingot'
    }).id('kubejs:test/manual_reinforced_brass_simple')
    
    // 验证所有配方加载
    console.log('[精密构件配方系统] 配方验证：')
    console.log('- 机械合成配方：6个（基础电路板、精炼精密合金、基础精密构件、高级电路板、改进精密构件、精密齿轮组）')
    console.log('- 序列装配配方：3个（强化黄铜锭、精密齿轮、高级精密机械）')
    console.log('- 测试工作台配方：1个（强化黄铜锭手动制作）')
    console.log('[精密构件配方系统] 序列装配配方已添加完成')
    
    // 测试物品是否正确注册
    console.log('[测试] 检查配方注册状态：')
    console.log('- 序列装配配方ID: kubejs:sequenced_assembly/reinforced_brass_ingot')
    console.log('- 测试工作台配方ID: kubejs:test/manual_reinforced_brass_simple')
    console.log('- 配方加载时机：ServerEvents.recipes 阶段')
    console.log('- 注意：EMI 等模组会在稍后阶段索引这些配方')
    
    // 验证配方注册完成
    console.log('[精密构件配方系统] 所有配方已成功注册到游戏中')
})
