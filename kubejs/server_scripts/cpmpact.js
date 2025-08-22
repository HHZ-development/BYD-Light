 ServerEvents.recipes(event => {
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {tag:'c:seeds'}
        ],
        results: [
            {
                amount: 50,
                id: 'createaddition:seed_oil'
            }
        ]
    }).id('kubejs:compacting/seed_oil')
})