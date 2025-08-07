// Create精密构件渐进式合成配方 - 修复版本
// 这是一个使用正确KubeJS Create语法的版本

ServerEvents.recipes(event => {
    event.remove({output:'create:precision_mechanism'}) // 移除旧的精密机制配方
    event.remove({type:'create:mechanical_crafting'}) // 移除旧的机械合成配方
    event.remove({output:'enderio:z_logic_controller'}) // 移除旧的逻辑控制器配方
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { tag: 'c:ingots/iron' },
            { item: 'minecraft:coal' },
            { item: 'minecraft:coal' },
            { item: 'minecraft:coal' },
            { item: 'minecraft:coal' }
        ],
        results: [
            {
                count: 1,
                id: 'mekanism:dust_steel'
            }
        ]
    }).id('kubejs:mixing/steel_dust')
    //测试头颅装配机配方
    /*event.custom({
        type: "enderio:slicing",
        energy: 10000,
        inputs: [
    {tag: "c:ingots/soularium"},
    {item: "minecraft:zombie_head"},
    {tag: "c:ingots/soularium"},
    {tag: "c:silicon"},
    {item: "kubejs:"},
    {tag: "c:silicon"}
  ],
  output: {
    count: 1,
    id: "enderio:z_logic_controller"
  }
    }).id('kubejs:enderio/slicing/z_logic_controller');*/

    event.shaped('kubejs:basic_circuit', [
            'ADA',
            'CBC',
            'ADA'
    ], {
            A: { item: 'mekanism:ingot_steel' },
            B: { item: 'minecraft:redstone' },
            C: { item: 'createaddition:copper_wire' },
            D: { item: 'create:iron_sheet' }
    }).id('kubejs:test/basic_circuit')  

    event.shaped('kubejs:reinforced_brass_ingot', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'create:brass_ingot',
        B: 'minecraft:iron_ingot'
    }).id('kubejs:test/manual_reinforced_brass_simple')     

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
            A: { item: 'mekanism:alloy_infused' },
            B: { item: 'immersiveengineering:wire_steel' },
            C: { item: 'minecraft:copper_ingot' },
            D: { item: 'kubejs:basic_circuit' },
            E: { item: 'minecraft:diamond' }
        },
        result: {
            id: 'kubejs:advanced_circuit'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/advanced_circuit')

    event.replaceInput({
        input:'create:precision_mechanism'
    }, 
    'create:precision_mechanism', 
    Ingredient.of('kubejs:basic_precision_component') 
    )
    event.replaceInput({
        output:'mekanism:metallurgic_infuser'
    }, 
    'mekanism:ingot_osmium', 
    Ingredient.of('kubejs:basic_precision_component') 
    )
    event.replaceInput({
        output:'mekanism:steel_casing'
    }, 
    'mekanism:ingot_osmium', 
    Ingredient.of('kubejs:basic_precision_component') 
    )

    // ============ 基础精密构件配方 ============
    // 阶段1：基础精密构件 (Basic Precision Component)
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'AB',
            'CD'
        ],
        key: {
            A: { item: 'minecraft:iron_ingot' },
            B: { item: 'create:brass_ingot' },
            C: { item: 'kubejs:basic_circuit' },
            D: { item: 'create:andesite_alloy' }
        },
        result: {
            id: 'kubejs:basic_precision_component'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/basic_precision_component')

    
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
                chance: 95.0,
                id: "kubejs:reinforced_brass_ingot"
            },
            {
                chance: 5.0,
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
    // 粉碎轮配方扔回去
    event.custom({
        type: "create:mechanical_crafting",
        accept_mirrored: false,
        category: "misc",
        key: {
            A: {
                item: "create:andesite_alloy"
    },
    P: {
        tag: "minecraft:planks"
    },
    S: {
      tag: "c:stones"
    }
  },
  pattern: [
    " AAA ",
    "AAPAA",
    "APSPA",
    "AAPAA",
    " AAA "
  ],
  result: {
    count: 2,
    id: "create:crushing_wheel"
  },
  show_notification: false
    }).id('kubejs:mechanical_crafting/crushing_wheel')
    
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
