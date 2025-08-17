 ServerEvents.recipes(event => {
 //钢粉配方
 event.custom({
        type: 'create:mixing',
        ingredients: [
            { tag: 'c:ingots/iron' },
            { tag: 'c:coal' },
            { tag: 'c:coal' },
            { tag: 'c:coal' },
            { tag: 'c:coal' }
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
            { tag: 'ae2:all_quartz' },
            { tag: 'ae2:all_quartz' },
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