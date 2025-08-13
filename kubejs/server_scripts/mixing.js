 ServerEvents.recipes(event => {
 //钢粉配方
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
                id: 'mekanism:dust_steel'
            }
        ]
    }).id('kubejs:mixing/steel_dust')
 //高效玫瑰石英   
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { tag: '2x ae2:all_quartz' },
            { item: 'minecraft:redstone' },
            { item: 'minecraft:redstone' },
            { item: 'minecraft:redstone' },
            { item: 'minecraft:redstone' }
        ],
        results: [
            {
                id: '2x create:rose_quartz'
            }
        ]
    }).id('kubejs:mixing/rose_quartz')
})