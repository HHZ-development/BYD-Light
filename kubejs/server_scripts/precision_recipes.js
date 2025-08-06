// 精密构件递进式配方
ServerEvents.recipes(event => {
    // 基础精密构件
    event.shaped('kubejs:basic_precision_component', [
        'III',
        'IRI',
        'III'
    ], {
        I: 'minecraft:iron_ingot',
        R: 'minecraft:redstone'
    })
    // 改良精密构件
    event.shaped('kubejs:improved_precision_component', [
        'BBB',
        'GRG',
        'BBB'
    ], {
        B: 'kubejs:basic_precision_component',
        G: 'minecraft:gold_ingot',
        R: 'minecraft:redstone'
    })
    // 高级精密构件
    event.shaped('kubejs:advanced_precision_component', [
        'III',
        'BGB',
        'III'
    ], {
        I: 'minecraft:iron_block',
        B: 'kubejs:improved_precision_component',
        G: 'minecraft:diamond'
    })
    // 专家级精密构件
    event.shaped('kubejs:expert_precision_component', [
        'AAA',
        'RGR',
        'AAA'
    ], {
        A: 'kubejs:advanced_precision_component',
        R: 'minecraft:redstone_block',
        G: 'kubejs:refined_precision_alloy'
    })
    // 大师级精密构件
    event.shaped('kubejs:master_precision_component', [
        'EEE',
        'CMC',
        'EEE'
    ], {
        E: 'kubejs:expert_precision_component',
        C: 'kubejs:crystalline_precision_matrix',
        M: 'minecraft:nether_star'
    })
    // 传奇精密构件
    event.shaped('kubejs:legendary_precision_component', [
        'MMM',
        'QCQ',
        'MMM'
    ], {
        M: 'kubejs:master_precision_component',
        Q: 'kubejs:quantum_circuit',
        C: 'minecraft:dragon_egg'
    })
    // ================== 电路板递进式配方 ==================
    // 基础电路板：红石+铁锭
    event.shaped('kubejs:basic_circuit', [
        'RRR',
        'IRI',
        'RRR'
    ], {
        R: 'minecraft:redstone',
        I: 'minecraft:iron_ingot'
    })
    // 改良电路板：基础电路板+金锭+红石
    event.shaped('kubejs:advanced_circuit', [
        'BBB',
        'GRG',
        'BBB'
    ], {
        B: 'kubejs:basic_circuit',
        G: 'minecraft:gold_ingot',
        R: 'minecraft:redstone'
    })
    // 高级电路板：改良电路板+钻石+高级精密构件
    event.shaped('kubejs:atomic_circuit', [
        'AAA',
        'DED',
        'AAA'
    ], {
        A: 'kubejs:advanced_circuit',
        D: 'minecraft:diamond',
        E: 'kubejs:advanced_precision_component'
    })
    // 专家电路板：高级电路板+高级精密构件+末影珍珠
    event.shaped('kubejs:quantum_circuit', [
        'QQQ',
        'AEA',
        'QQQ'
    ], {
        Q: 'kubejs:atomic_circuit',
        A: 'kubejs:advanced_precision_component',
        E: 'minecraft:ender_pearl'
    })
    // 大师电路板：专家电路板+晶化精密基质+下界之星
    event.shaped('kubejs:hyper_circuit', [
        'HHH',
        'QMQ',
        'HHH'
    ], {
        H: 'kubejs:quantum_circuit',
        Q: 'kubejs:crystalline_precision_matrix',
        M: 'minecraft:nether_star'
    })
    // 传奇电路板：大师电路板+传奇精密构件+龙息
    event.shaped('kubejs:cosmic_circuit', [
        'CCC',
        'HGH',
        'CCC'
    ], {
        C: 'kubejs:hyper_circuit',
        H: 'kubejs:legendary_precision_component',
        G: 'minecraft:dragon_breath'
    })
    // 晶化精密基质配方修正：专家级精密构件+钻石块+末影之眼+玻璃
    event.shaped('kubejs:crystalline_precision_matrix', [
        'GDG',
        'ESE',
        'GGG'
    ], {
        G: 'minecraft:glass',
        D: 'minecraft:diamond_block',
        E: 'minecraft:ender_eye',
        S: 'kubejs:expert_precision_component'
    })
})