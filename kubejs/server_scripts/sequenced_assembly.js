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
    //铜背包
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "sophisticatedbackpacks:backpack"
        },
        loops: 2,
        results: [
            {
                chance: 100.0,
                id: "sophisticatedbackpacks:copper_backpack"
            }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:incomplete_copper_backpack"
                    },
                    {
                        item: "create:brass_ingot"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_copper_backpack"
                    }
                ]
            },
             {
                type: "create:pressing",
                ingredients: [
                    {
                        item: "kubejs:incomplete_copper_backpack"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_copper_backpack"
                    }
                ]
            }
        ],
        transitional_item: {
            id: "kubejs:incomplete_copper_backpack"
        }
    }).id("kubejs:create/sequenced_assembly/copper_backpack")
    //铁背包
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "sophisticatedbackpacks:copper_backpack"
        },
        loops: 2,
        results: [
            {
                chance: 100.0,
                id: "sophisticatedbackpacks:iron_backpack"
            }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:incomplete_iron_backpack"
                    },
                    {
                        item: "mekanism:ingot_steel"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_iron_backpack"
                    }
                ]
            },
             {
                type: "create:pressing",
                ingredients: [
                    {
                        item: "kubejs:incomplete_iron_backpack"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_iron_backpack"
                    }
                ]
            }
        ],
        transitional_item: {
            id: "kubejs:incomplete_iron_backpack"
        }
    }).id("kubejs:create/sequenced_assembly/iron_backpack")
    //基础精密构件
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'immersiveengineering:plate_steel'
        },
        loops: 1,
        results: [
            {
                chance: 100.0,
                id: 'kubejs:basic_precision_component'
            }
        ],
        sequence: [
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'kubejs:incomplete_basic_precision_component'
                    }
                ],
                results: [
                    {
                        id: 'kubejs:incomplete_basic_precision_component'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'kubejs:incomplete_basic_precision_component'
                    },
                    {
                        item: 'industrialforegoing:iron_gear'
                    }
                ],
                results: [
                    {
                        id: 'kubejs:incomplete_basic_precision_component'
                    }
                ]
            }
        ],
        transitional_item: {
            id: 'kubejs:incomplete_basic_precision_component'
        }
    }).id('kubejs:create/sequenced_assembly/basic_precision_component')
    //先进构件半成品
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'kubejs:basic_precision_component'
        },
        loops: 1,
        results: [
            {
                chance: 100.0,
                id: 'kubejs:unfinished_improved_precision_component'
            }
        ],
        sequence: [
             {
                type: "create:filling",     //注液
                ingredients: [
                    {
                        item: "kubejs:incomplete_improved_precision_component"
                    },
                    {
                        type: "fluid_stack",
                        amount: 500,
                        fluid: "kubejs:molten_redstone"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_improved_precision_component"
                    }
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'kubejs:incomplete_improved_precision_component'
                    }
                ],
                results: [
                    {
                        id: 'kubejs:incomplete_improved_precision_component'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'kubejs:incomplete_improved_precision_component'
                    },
                    {
                        item: 'kubejs:basic_circuit'
                    }
                ],
                results: [
                    {
                        id: 'kubejs:incomplete_improved_precision_component'
                    }
                ]
            }
        ],
        transitional_item: {
            id: 'kubejs:incomplete_improved_precision_component'
        }
    }).id('kubejs:create/sequenced_assembly/improved_precision_component')
    
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'kubejs:wood_sheet'
        },
        loops: 1,
        results: [
            {
                chance: 100.0,
                id: 'kubejs:basic_circuit'
            }
        ],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'kubejs:incomplete_basic_circuit'
                    },
                    {
                        item: 'createaddition:copper_wire'
                    }
                ],
                results: [
                    {
                        id: 'kubejs:incomplete_basic_circuit'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'kubejs:incomplete_basic_circuit'
                    },
                    {
                        item: 'createaddition:copper_wire'
                    }
                ],
                results: [
                    {
                        id: 'kubejs:incomplete_basic_circuit'
                    }
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'kubejs:incomplete_basic_circuit'
                    }
                ],
                results: [
                    {
                        id: 'kubejs:incomplete_basic_circuit'
                    }
                ]
            },
             {
                type: "create:filling",     //注液
                ingredients: [
                    {
                        item: "kubejs:incomplete_basic_circuit"
                    },
                    {
                        type: "fluid_stack",
                        amount: 50,
                        fluid: "kubejs:molten_redstone"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_basic_circuit"
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'kubejs:incomplete_basic_circuit'
                    },
                    {
                        item: 'mekanism:basic_control_circuit'
                    }
                ],
                results: [
                    {
                        id: 'kubejs:incomplete_basic_circuit'
                    }
                ]
            },
            {
                type: "create:filling",     //注液
                ingredients: [
                    {
                        item: "kubejs:incomplete_basic_circuit"
                    },
                    {
                        type: "fluid_stack",
                        amount: 50,
                        fluid: "immersiveengineering:ethanol"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_basic_circuit"
                    }
                ]
            },
            
        ],
        transitional_item: {
            id: 'kubejs:incomplete_basic_circuit'
        }
    }).id('kubejs:create/sequenced_assembly/basic_circuit')
 
    
})