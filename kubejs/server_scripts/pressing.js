 ServerEvents.recipes(event => {
    event.custom({
        type: 'create:pressing',
        ingredients: [
            {tag:'minecraft:planks'}
        ],
        results: [
            {
                id: 'kubejs:wood_sheet'
            }
        ]
    }).id('kubejs:pressing/wood_sheet')
})