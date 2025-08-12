// 高级精密机械制作
    //这段用来当example
    /*event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "kubejs:precision_gear_assembly"   //输入
        },
        loops: 2,
        results: [    // 概率输出
            {
                chance: 90.0,
                id: "kubejs:advanced_precision_mechanism"
            },
            {
                chance: 10.0,
                id: "kubejs:precision_gear_assembly"
            }
        ],
        sequence: [
            {
                type: "create:filling",     //注液
                ingredients: [
                    {
                        item: "kubejs:incomplete_advanced_precision_mechanism"
                    },
                    {
                        type: "fluid_stack",
                        amount: 50,
                        fluid: "kubejs:molten_redstone"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_advanced_precision_mechanism"
                    }
                ]
            },
            {
                type: "create:deploying",  //组装
                ingredients: [
                    {
                        item: "kubejs:incomplete_advanced_precision_mechanism"
                    },
                    {
                        item: "kubejs:basic_precision_component"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_advanced_precision_mechanism"
                    }
                ]
            },
            {
                type: "create:pressing",  //挤压
                ingredients: [
                    {
                        item: "kubejs:incomplete_advanced_precision_mechanism"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_advanced_precision_mechanism"
                    }
                ]
            }
        ],
        transitional_item: {
            id: "kubejs:incomplete_advanced_precision_mechanism"
        }
    }).id("kubejs:create/sequenced_assembly/advanced_precision_mechanism")*/
// ============ 序列装配配方示例 ============
    ServerEvents.recipes(event => {
//强化黄铜锭
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "create:brass_ingot"
        },
        loops: 2,
        results: [
            {
                chance: 95.0,
                id: "kubejs:reinforced_brass_ingot"
            },
            {
                chance: 5.0,
                id: "create:brass_ingot"
            }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:incomplete_reinforced_brass"
                    },
                    {
                        item: "minecraft:iron_ingot"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_reinforced_brass"
                    }
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    {
                        item: "kubejs:incomplete_reinforced_brass"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_reinforced_brass"
                    }
                ]
            }
        ],
        transitional_item: {
            id: "kubejs:incomplete_reinforced_brass"
        }
    }).id("kubejs:create/sequenced_assembly/reinforced_brass_ingot")
})