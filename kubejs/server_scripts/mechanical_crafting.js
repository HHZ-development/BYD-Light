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
   //特斯拉线圈
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            ' AAA ',
            'AAAAA',
            'B C B',
            'BECEB',
            ' DDD '
        ],
        key: {
            A: { item: 'immersiveengineering:wirecoil_electrum' },
            B: { item: 'create:brass_sheet' },
            C: { item: 'immersiveengineering:stick_steel' },
            D: { item: 'mekanism:steel_casing' },
            E: { item: 'minecraft:redstone' }
        },
        result: {
            id: 'createaddition:tesla_coil'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/tesla_coil')
    //交流发电机
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            ' AAA ',
            'ABCBA',
            'ACDCA',
            'ABCBA',
            ' AAA '
        ],
        key: {
            A: { item: 'immersiveengineering:plate_steel' },
            B: { item: 'minecraft:redstone' },
            C: { item: 'immersiveengineering:wirecoil_copper' },
            D: { item: 'mekanism:steel_casing' }
        },
        result: {
            id: 'createaddition:alternator'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/alternator')
})