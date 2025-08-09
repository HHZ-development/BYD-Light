ServerEvents.recipes(event => {
 // 精炼精密合金 (Refined Precision Alloy)
    event.shaped(Item.of('kubejs:reinforced_precision_alloy',2), 
      ['AB',
       'CD'], 
     {
            A: { item: 'minecraft:iron_ingot' },
            B: { item: 'create:zinc_ingot' },
            C: { item: 'minecraft:copper_ingot' },
            D: { item: 'mekanism:alloy_infused' }
    }).id('kubejs:mechanical_crafting/refined_precision_alloy')
 // 基础电路板 basic_circuit    
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
 // 强化黄铜锭
    event.shaped('kubejs:reinforced_brass_ingot', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'create:brass_ingot',
        B: 'minecraft:iron_ingot'
    }).id('kubejs:test/manual_reinforced_brass_simple')
})