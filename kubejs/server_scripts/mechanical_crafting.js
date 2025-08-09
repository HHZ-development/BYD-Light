ServerEvents.recipes(event => {
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
    //基础构件 (Basic Precision Component)
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'AB',
            'CD'
        ],
        key: {
            A: { item: 'minecraft:iron_ingot' },
            B: { item: 'create:brass_ingot' },
            C: { item:   'mekanism:ingot_steel' },
            D: { item: 'create:andesite_alloy' }
        },
        result: {
            id: 'kubejs:basic_precision_component'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/basic_precision_component')
     // 先进精密构件 (Advanced Precision Component)
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            A: { item: 'kubejs:reinforced_precision_alloy' },
            B: { item: 'minecraft:redstone' },
            C: { item: 'minecraft:iron_ingot' },
            D: { item: 'kubejs:basic_precision_component' },
            E: { item: 'kubejs:advanced_circuit' }
        },
        result: {
            id: 'kubejs:improved_precision_component'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/improved_precision_component')
})