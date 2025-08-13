ServerEvents.recipes(event => {
 // 精炼精密合金 (Refined Precision Alloy)
     event.shaped('kubejs:reinforced_precision_alloy', 
      ['AB',
       'CD'], 
     {
            A: { item: 'minecraft:iron_ingot' },
            B: { item: 'create:zinc_ingot' },
            C: { item: 'minecraft:copper_ingot' },
            D: { item: 'mekanism:alloy_infused' }
    }).id('kubejs:test/refined_precision_alloy')
 // 基础电路板 basic_circuit    
    event.shaped('kubejs:basic_circuit', [
            'ADA',
            'CBC',
            'ADA'
    ], {
            A: { item: 'mekanism:ingot_steel' },
            B: { item: 'mekanism:basic_control_circuit' },
            C: { item: 'createaddition:copper_wire' },
            D: { item: 'create:iron_sheet' }
    }).id('kubejs:test/basic_circuit')  
 // 强化黄铜锭
    event.shaped('kubejs:reinforced_brass_ingot', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'create:brass_ingot',
        B: 'minecraft:iron_ingot'
    }).id('kubejs:test/manual_reinforced_brass_simple')
//褐铁与铁转换
    event.smelting('minecraft:iron_ingot', 'aoa3:limonite_ingot').id('kubejs:test/smelting_limonite_ingot')
    event.smelting('aoa3:limonite_ingot', 'minecraft:iron_ingot').id('kubejs:test/smelting_iron_ingot')
})