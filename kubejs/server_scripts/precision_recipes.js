// Create精密构件渐进式合成配方
ServerEvents.recipes(event => {
    
    // 移除原版精密构件配方（如果需要完全控制进程）
    event.remove({ output: 'create:precision_mechanism' })
    
    // ============ 阶段1：基础精密构件 ============
    // 使用基础材料制作
    event.shaped('kubejs:basic_precision_component', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'create:cogwheel',
        B: 'minecraft:iron_ingot',
        C: 'create:shaft',
        D: 'create:andesite_alloy'
    })
    
    // ============ 阶段2：改良精密构件 ============
    // 需要基础精密构件
    event.shaped('kubejs:improved_precision_component', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'create:brass_ingot',
        B: 'create:large_cogwheel',
        C: 'kubejs:basic_precision_component',
        D: 'create:electron_tube',
        E: 'create:brass_sheet'
    })
    
    // ============ 阶段3：高级精密构件 ============
    // 需要改良精密构件
    event.shaped('kubejs:advanced_precision_component', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'create:refined_radiance',
        B: 'create:rotation_speed_controller',
        C: 'kubejs:improved_precision_component',
        D: 'kubejs:precision_gear_assembly',
        E: 'create:shadow_steel'
    })
    
    // ============ 精密齿轮组件配方 ============
    event.shaped('kubejs:precision_gear_assembly', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'create:precision_mechanism',
        B: 'create:large_cogwheel',
        C: 'kubejs:improved_precision_component'
    })
    
    // ============ 阶段4：专家级精密构件 ============
    // 需要高级精密构件和特殊材料
    event.shaped('kubejs:expert_precision_component', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'kubejs:refined_precision_alloy',
        B: 'create:clockwork_bearing',
        C: 'kubejs:advanced_precision_component',
        D: 'kubejs:precision_shaft_core',
        E: 'create:sturdy_sheet'
    })
    
    // ============ 精密轴心核心配方 ============
    event.shaped('kubejs:precision_shaft_core', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'create:shadow_steel',
        B: 'create:refined_radiance',
        C: 'create:shaft',
        D: 'kubejs:advanced_precision_component'
    })
    
    // ============ 精炼精密合金配方 ============
    // 使用机械合成器制作
    event.recipes.create.mechanical_crafting('kubejs:refined_precision_alloy', [
        'ABCBA',
        'BDEDB',
        'CEFEC',
        'BDEDB',
        'ABCBA'
    ], {
        A: 'create:brass_ingot',
        B: 'create:zinc_ingot',
        C: 'minecraft:copper_ingot',
        D: 'create:andesite_alloy',
        E: 'minecraft:iron_ingot',
        F: 'minecraft:redstone'
    })
    
    // ============ 阶段5：大师级精密构件 ============
    // 需要专家级精密构件和特殊工艺
    event.recipes.create.mechanical_crafting('kubejs:master_precision_component', [
        '  ABA  ',
        ' CDCDC ',
        'AEFGFEA',
        'BCFHFCB',
        'AEFGFEA',
        ' CDCDC ',
        '  ABA  '
    ], {
        A: 'kubejs:refined_precision_alloy',
        B: 'create:refined_radiance',
        C: 'create:shadow_steel',
        D: 'kubejs:expert_precision_component',
        E: 'create:clockwork_bearing',
        F: 'kubejs:precision_shaft_core',
        G: 'kubejs:crystalline_precision_matrix',
        H: 'create:rotation_speed_controller'
    })
    
    // ============ 晶化精密基质配方 ============
    // 需要复杂的合成工艺
    event.recipes.create.sequenced_assembly([
        'kubejs:crystalline_precision_matrix'
    ], 'minecraft:diamond', [
        event.recipes.create.deploying('minecraft:diamond', ['minecraft:diamond', 'create:refined_radiance']),
        event.recipes.create.pressing('minecraft:diamond', 'minecraft:diamond'),
        event.recipes.create.deploying('minecraft:diamond', ['minecraft:diamond', 'create:shadow_steel']),
        event.recipes.create.cutting('minecraft:diamond', 'minecraft:diamond')
    ]).transitionalItem('minecraft:diamond').loops(3)
    
    // ============ 阶段6：传奇精密构件 ============
    // 最终阶段，需要所有前置材料
    event.recipes.create.mechanical_crafting('kubejs:legendary_precision_component', [
        '   ABCBA   ',
        '  DEFGFED  ',
        ' DHIJKJIHD ',
        'AELMNOPNMLEA',
        'BFKQRSRQKFB',
        'CGOTPUPTOGC',
        'BFKQRSRQKFB',
        'AELMNOPNMLEA',
        ' DHIJKJIHD ',
        '  DEFGFED  ',
        '   ABCBA   '
    ], {
        A: 'kubejs:refined_precision_alloy',
        B: 'create:refined_radiance',
        C: 'create:shadow_steel',
        D: 'kubejs:crystalline_precision_matrix',
        E: 'kubejs:master_precision_component',
        F: 'create:clockwork_bearing',
        G: 'kubejs:precision_shaft_core',
        H: 'kubejs:precision_gear_assembly',
        I: 'create:rotation_speed_controller',
        J: 'create:mechanical_bearing',
        K: 'create:large_cogwheel',
        L: 'create:cogwheel',
        M: 'create:shaft',
        N: 'create:electron_tube',
        O: 'create:precision_mechanism',
        P: 'minecraft:nether_star',
        Q: 'create:brass_ingot',
        R: 'minecraft:diamond',
        S: 'minecraft:emerald',
        T: 'create:sturdy_sheet',
        U: 'create:chromatic_compound'
    })
    
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
    
    // 高级机械使用高级精密构件
    event.replaceInput(
        { output: 'create:rotation_speed_controller' },
        'create:precision_mechanism',
        'kubejs:advanced_precision_component'
    )
    
    event.replaceInput(
        { output: 'create:mechanical_bearing' },
        'create:precision_mechanism',
        'kubejs:advanced_precision_component'
    )
    
    // 顶级机械使用专家级或更高精密构件
    event.replaceInput(
        { output: 'create:clockwork_bearing' },
        'create:precision_mechanism',
        'kubejs:expert_precision_component'
    )
    
    // ============ 序列装配配方示例 ============
    // 改良精密构件的另一种制作方法（需要装配线）
    event.recipes.create.sequenced_assembly([
        'kubejs:improved_precision_component'
    ], 'kubejs:basic_precision_component', [
        event.recipes.create.deploying('kubejs:basic_precision_component', ['kubejs:basic_precision_component', 'create:brass_sheet']),
        event.recipes.create.pressing('kubejs:basic_precision_component', 'kubejs:basic_precision_component'),
        event.recipes.create.deploying('kubejs:basic_precision_component', ['kubejs:basic_precision_component', 'create:electron_tube']),
        event.recipes.create.cutting('kubejs:basic_precision_component', 'kubejs:basic_precision_component')
    ]).transitionalItem('kubejs:basic_precision_component').loops(2)
    
})
