// Create精密构件渐进式合成配方
ServerEvents.recipes(event => {

    // 移除原版精密构件配方（如果需要完全控制进程）
    event.remove({ output: 'create:precision_mechanism' })

    // ============ 阶段1：基础精密构件 ============
    // 使用原版精密构件作为基础材料
    event.shapeless(
        Item.of('kubejs:basic_precision_component'),
        [
            'create:precision_mechanism',
            'create:brass_sheet'
        ]
    ).id('kubejs:basic_precision_component')

    // ============ 阶段2：改良精密构件 ============
    // 需要基础精密构件，在机械装配台制作
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:improved_precision_component').toJson(),
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            'A': { item: 'create:brass_ingot' },
            'B': { item: 'create:large_cogwheel' },
            'C': { item: 'kubejs:basic_precision_component' },
            'D': { item: 'create:electron_tube' },
            'E': { item: 'create:brass_sheet' }
        },
        acceptMirrored: false
    }).id('kubejs:improved_precision_component')

    // ============ 阶段3：高级精密构件 ============
    // 需要改良精密构件，在机械装配台制作
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:advanced_precision_component').toJson(),
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            'A': { item: 'create:refined_radiance' },
            'B': { item: 'create:mechanical_bearing' },
            'C': { item: 'kubejs:improved_precision_component' },
            'D': { item: 'kubejs:precision_gear_assembly' },
            'E': { item: 'create:shadow_steel' }
        },
        acceptMirrored: false
    }).id('kubejs:advanced_precision_component')

    // ============ 精密齿轮组件配方 ============
    // 在机械装配台制作
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:precision_gear_assembly').toJson(),
        pattern: [
            ' A ',
            'BCB',
            ' A '
        ],
        key: {
            'A': { item: 'create:precision_mechanism' },
            'B': { item: 'create:large_cogwheel' },
            'C': { item: 'kubejs:improved_precision_component' }
        },
        acceptMirrored: false
    }).id('kubejs:precision_gear_assembly')

    // ============ 阶段4：专家级精密构件 ============
    // 需要高级精密构件和特殊材料，在机械装配台制作
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:expert_precision_component').toJson(),
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            'A': { item: 'kubejs:refined_precision_alloy' },
            'B': { item: 'create:rotation_speed_controller' },
            'C': { item: 'kubejs:advanced_precision_component' },
            'D': { item: 'kubejs:precision_shaft_core' },
            'E': { item: 'create:sturdy_sheet' }
        },
        acceptMirrored: false
    }).id('kubejs:expert_precision_component')

    // ============ 精密轴心核心配方 ============
    // 在机械装配台制作
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:precision_shaft_core').toJson(),
        pattern: [
            'ABA',
            'CDC',
            'ABA'
        ],
        key: {
            'A': { item: 'create:shadow_steel' },
            'B': { item: 'create:refined_radiance' },
            'C': { item: 'create:shaft' },
            'D': { item: 'kubejs:advanced_precision_component' }
        },
        acceptMirrored: false
    }).id('kubejs:precision_shaft_core')

    // ============ 精炼精密合金配方 ============
    // 使用机械合成器制作
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:refined_precision_alloy').toJson(),
        pattern: [
            'ABCBA',
            'BDEDB',
            'CEFEC',
            'BDEDB',
            'ABCBA'
        ],
        key: {
            'A': { item: 'create:brass_ingot' },
            'B': { item: 'create:zinc_ingot' },
            'C': { item: 'minecraft:copper_ingot' },
            'D': { item: 'create:andesite_alloy' },
            'E': { item: 'minecraft:iron_ingot' },
            'F': { item: 'minecraft:redstone' }
        },
        acceptMirrored: false
    }).id('kubejs:refined_precision_alloy')

    // ============ 阶段5：大师级精密构件 ============
    // 需要专家级精密构件和特殊工艺
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:master_precision_component').toJson(),
        pattern: [
            '  ABA  ',
            ' CDCDC ',
            'AEFGFEA',
            'ACDCDCA',
            'AEFGFEA',
            ' CDCDC ',
            '  ABA  '
        ],
        key: {
            'A': { item: 'kubejs:refined_precision_alloy' },
            'B': { item: 'create:refined_radiance' },
            'C': { item: 'create:shadow_steel' },
            'D': { item: 'kubejs:expert_precision_component' },
            'E': { item: 'create:clockwork_bearing' },
            'F': { item: 'kubejs:precision_shaft_core' },
            'G': { item: 'kubejs:crystalline_precision_matrix' }
        },
        acceptMirrored: false
    }).id('kubejs:master_precision_component')

    // ============ 晶化精密基质配方 ============
    // 使用更简单的配方替代sequenced_assembly
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'minecraft:diamond' },
            { item: 'create:refined_radiance' },
            { item: 'create:shadow_steel' },
            { item: 'create:precision_mechanism' }
        ],
        results: [Item.of('kubejs:crystalline_precision_matrix').toJson()],
        heatRequirement: 'heated'
    }).id('kubejs:crystalline_precision_matrix')

    // ============ 阶段6：传奇精密构件 ============
    // 最终阶段，需要所有前置材料 (配方已缩小至9x9并修正)
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:legendary_precision_component').toJson(),
        pattern: [
            ' ABBCBBA ',
            'ADDEFEDDA',
            'BDGHIHGDB',
            'CEHJLJHEC',
            'BFILJLIFB',
            'CEHJLJHEC',
            'BDGHIHGDB',
            'ADDEFEDDA',
            ' ABBCBBA '
        ],
        key: {
            'A': { item: 'kubejs:refined_precision_alloy' },
            'B': { item: 'create:refined_radiance' },
            'C': { item: 'create:shadow_steel' },
            'D': { item: 'kubejs:crystalline_precision_matrix' },
            'E': { item: 'kubejs:master_precision_component' },
            'F': { item: 'create:clockwork_bearing' },
            'G': { item: 'kubejs:precision_shaft_core' },
            'H': { item: 'kubejs:precision_gear_assembly' },
            'I': { item: 'create:rotation_speed_controller' },
            'J': { item: 'create:mechanical_bearing' },
            'L': { item: 'minecraft:nether_star' }
        },
        acceptMirrored: false
    }).id('kubejs:legendary_precision_component')

    // ============ 使用新的精密构件替换原版配方 ============

    // 初级机械使用基础精密构件
    event.replaceInput(
        { output: 'create:mechanical_press' },
        'create:precision_mechanism',
        'kubejs:basic_precision_component'
    )

    event.replaceInput(
        { output: 'create:mechanical_mixer' },
        'create:precision_mechanism',
        'kubejs:basic_precision_component'
    )

    // 中级机械使用改良精密构件
    event.replaceInput(
        { output: 'create:mechanical_crafter' },
        'create:precision_mechanism',
        'kubejs:improved_precision_component'
    )

    event.replaceInput(
        { output: 'create:sequenced_gearshift' },
        'create:precision_mechanism',
        'kubejs:improved_precision_component'
    )

    // 高级机械使用高级精密构件 (注释掉避免循环依赖)
    // event.replaceInput(
    //     { output: 'create:rotation_speed_controller' },
    //     'create:precision_mechanism',
    //     'kubejs:advanced_precision_component'
    // )

    // event.replaceInput(
    //     { output: 'create:mechanical_bearing' },
    //     'create:precision_mechanism',
    //     'kubejs:advanced_precision_component'
    // )

    // 顶级机械使用专家级或更高精密构件 (注释掉避免循环依赖)
    // event.replaceInput(
    //     { output: 'create:clockwork_bearing' },
    //     'create:precision_mechanism',
    //     'kubejs:expert_precision_component'
    // )

    // ============ 序列装配配方示例 ============
    // 改良精密构件的另一种制作方法（简化为混合配方）
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'kubejs:basic_precision_component' },
            { item: 'create:brass_sheet' },
            { item: 'create:electron_tube' }
        ],
        results: [Item.of('kubejs:improved_precision_component').toJson()]
    }).id('kubejs:improved_precision_component_alt')
})
