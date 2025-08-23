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