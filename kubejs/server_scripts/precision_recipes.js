// Create精密构件渐进式合成配方
ServerEvents.recipes(event => {

    // 移除原版精密构件配方（如果需要完全控制进程）
    event.remove({ output: 'create:precision_mechanism' })

    // ============ 六种循序渐进科幻电路板配方 ============
    // 基础电路板 Basic Circuit
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:basic_circuit').toJson(),
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            'A': { item: 'mekanism:hdpe_sheet' },
            'B': { item: 'ae2:printed_silicon' },
            'C': { item: 'enderio:electrical_steel_ingot' },
            'D': { item: 'industrialforegoing:plastic' },
            'E': { item: 'ae2:logic_processor' }
        },
        acceptMirrored: false
    }).id('kubejs:basic_circuit')
    // 高级电路板 Advanced Circuit
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:advanced_circuit').toJson(),
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            'A': { item: 'mekanism:alloy_basic' },
            'B': { item: 'ae2:engineering_processor' },
            'C': { item: 'enderio:capacitor_double_layer' },
            'D': { item: 'industrialforegoing:machine_frame_pity' },
            'E': { item: 'ae2:calculation_processor' }
        },
        acceptMirrored: false
    }).id('kubejs:advanced_circuit')
    // 原子电路板 Atomic Circuit
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:atomic_circuit').toJson(),
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            'A': { item: 'mekanism:alloy_advanced' },
            'B': { item: 'ae2:quantum_ring' },
            'C': { item: 'enderio:capacitor_octadic' },
            'D': { item: 'industrialforegoing:machine_frame_advanced' },
            'E': { item: 'ae2:engineering_processor' }
        },
        acceptMirrored: false
    }).id('kubejs:atomic_circuit')
    // 量子电路板 Quantum Circuit
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:quantum_circuit').toJson(),
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            'A': { item: 'mekanism:alloy_reinforced' },
            'B': { item: 'ae2:controller' },
            'C': { item: 'enderio:capacitor_infinity' },
            'D': { item: 'industrialforegoing:machine_frame_supreme' },
            'E': { item: 'ae2:calculation_processor' }
        },
        acceptMirrored: false
    }).id('kubejs:quantum_circuit')
    // 超能电路板 Hyper Circuit
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:hyper_circuit').toJson(),
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            'A': { item: 'mekanism:alloy_atomic' },
            'B': { item: 'ae2:quantum_link' },
            'C': { item: 'enderio:capacitor_infinity' },
            'D': { item: 'industrialforegoing:machine_frame_supreme' },
            'E': { item: 'ae2:logic_processor' }
        },
        acceptMirrored: false
    }).id('kubejs:hyper_circuit')
    // 宇宙电路板 Cosmic Circuit
    event.custom({
        type: 'create:mechanical_crafting',
        result: Item.of('kubejs:cosmic_circuit').toJson(),
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            'A': { item: 'mekanism:pellet_antimatter' },
            'B': { item: 'ae2:singularity' },
            'C': { item: 'enderio:capacitor_infinity' },
            'D': { item: 'industrialforegoing:machine_frame_supreme' },
            'E': { item: 'ae2:engineering_processor' }
        },
        acceptMirrored: false
    }).id('kubejs:cosmic_circuit')

    // ============ 阶段1：基础精密构件 ============
    event.shapeless(
        Item.of('kubejs:basic_precision_component'),
        [
            'create:precision_mechanism',
            'create:brass_sheet',
            'kubejs:basic_circuit',
            'mekanism:alloy_basic'
        ]
    ).id('kubejs:basic_precision_component')
    // ============ 阶段2：改良精密构件 ============
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
            'B': { item: 'ae2:engineering_processor' },
            'C': { item: 'kubejs:basic_precision_component' },
            'D': { item: 'enderio:capacitor_double_layer' },
            'E': { item: 'kubejs:advanced_circuit' }
        },
        acceptMirrored: false
    }).id('kubejs:improved_precision_component')
    // ============ 阶段3：高级精密构件 ============
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
            'B': { item: 'mekanism:alloy_advanced' },
            'C': { item: 'kubejs:improved_precision_component' },
            'D': { item: 'ae2:quantum_ring' },
            'E': { item: 'kubejs:atomic_circuit' }
        },
        acceptMirrored: false
    }).id('kubejs:advanced_precision_component')
    // ============ 阶段4：专家级精密构件 ============
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
            'B': { item: 'mekanism:alloy_reinforced' },
            'C': { item: 'kubejs:advanced_precision_component' },
            'D': { item: 'ae2:controller' },
            'E': { item: 'kubejs:quantum_circuit' }
        },
        acceptMirrored: false
    }).id('kubejs:expert_precision_component')
    // ============ 阶段5：大师级精密构件 ============
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
            'B': { item: 'mekanism:alloy_atomic' },
            'C': { item: 'ae2:quantum_link' },
            'D': { item: 'kubejs:expert_precision_component' },
            'E': { item: 'enderio:capacitor_infinity' },
            'F': { item: 'industrialforegoing:machine_frame_supreme' },
            'G': { item: 'kubejs:hyper_circuit' }
        },
        acceptMirrored: false
    }).id('kubejs:master_precision_component')
    // ============ 阶段6：传奇精密构件 ============
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
            'L': { item: 'minecraft:nether_star' },
            'Z': { item: 'kubejs:cosmic_circuit' }
        },
        acceptMirrored: false
    }).id('kubejs:legendary_precision_component')
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
