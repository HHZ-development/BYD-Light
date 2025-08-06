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
})
