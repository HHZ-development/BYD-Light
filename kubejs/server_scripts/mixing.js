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
    { item: 'minecraft:quartz' },
    { item: 'minecraft:redstone' },
    { item: 'minecraft:redstone' }
  ],
  result: [
    {
      item: 'create:rose_quartz'
    }
  ]
}).id('kubejs:mixing/rose_quartz')
})