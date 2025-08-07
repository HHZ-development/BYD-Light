// Avaritia调试脚本 - 测试最简单的配方

ServerEvents.recipes(event => {
    console.log('[Avaritia调试] 开始测试最简单的配方...');
    
    // 测试1: 最简单的3x3模式（应该可以工作）
    event.custom({
        type: 'avaritia:extreme_shaped',
        pattern: [
            'AAA',
            'AAA', 
            'AAA'
        ],
        key: {
            A: { item: 'minecraft:diamond' }
        },
        result: {
            id: 'minecraft:diamond_block',
            count: 1
        }
    }).id('kubejs:test_3x3');
    
    // 测试2: 简单的5x5模式
    event.custom({
        type: 'avaritia:extreme_shaped',
        pattern: [
            'AAAAA',
            'AAAAA',
            'AAAAA',
            'AAAAA',
            'AAAAA'
        ],
        key: {
            A: { item: 'minecraft:diamond' }
        },
        result: {
            id: 'minecraft:emerald_block',
            count: 1
        }
    }).id('kubejs:test_5x5');
    
    // 测试3: 准确的9x9模式（无空格）
    event.custom({
        type: 'avaritia:extreme_shaped',
        pattern: [
            'AAAAAAAAA',
            'AAAAAAAAA',
            'AAAAAAAAA',
            'AAAAAAAAA',
            'AAAAAAAAA',
            'AAAAAAAAA',
            'AAAAAAAAA',
            'AAAAAAAAA',
            'AAAAAAAAA'
        ],
        key: {
            A: { item: 'minecraft:diamond' }
        },
        result: {
            id: 'minecraft:netherite_block',
            count: 1
        }
    }).id('kubejs:test_9x9_full');
    
    // 测试4: 带空格的模式（可能导致问题）
    event.custom({
        type: 'avaritia:extreme_shaped',
        pattern: [
            '   AAA   ',  // 正好9个字符
            '  AAAAA  ',  // 正好9个字符
            ' AAAAAAA ',  // 正好9个字符
            'AAAAAAAAA',  // 正好9个字符
            'AAAAAAAAA',  // 正好9个字符
            'AAAAAAAAA',  // 正好9个字符
            ' AAAAAAA ',  // 正好9个字符
            '  AAAAA  ',  // 正好9个字符
            '   AAA   '   // 正好9个字符
        ],
        key: {
            A: { item: 'minecraft:diamond' }
        },
        result: {
            id: 'minecraft:gold_block',
            count: 1
        }
    }).id('kubejs:test_9x9_spaces');
    
    // 测试5: 简单的压缩机配方
    event.custom({
        type: 'avaritia:compressor',
        ingredient: { item: 'minecraft:diamond' },
        inputCount: 81,
        result: {
            id: 'minecraft:diamond_block',
            count: 9
        }
    }).id('kubejs:test_compressor');
    
    console.log('[Avaritia调试] 所有测试配方已加载');
});
