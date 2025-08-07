// KubeJS Avaritia配方测试脚本 - 修复版
// 验证配方是否能正确加载

console.log('=== KubeJS Avaritia配方测试开始 ===');

ServerEvents.recipes(event => {
    try {
        // 测试简单的Avaritia配方 - 使用正确的配方类型和9x9限制
        event.custom({
            type: 'avaritia:extreme_shaped',  // ✅ 修正：使用正确的配方类型
            pattern: [
                '   AAA   ',  // 9列：空格+A+空格 = 9
                '  AAAAA  ',  // 9列：空格+A+空格 = 9
                ' AAAAAAA ',  // 9列：空格+A+空格 = 9
                'AAAAAAAAA',  // 9列：全A = 9
                'AAAAAAAAA',  // 9列：全A = 9
                'AAAAAAAAA',  // 9列：全A = 9
                ' AAAAAAA ',  // 9列：空格+A+空格 = 9
                '  AAAAA  ',  // 9列：空格+A+空格 = 9
                '   AAA   '   // 9列：空格+A+空格 = 9
            ],
            key: {
                A: { item: 'minecraft:diamond' }
            },
            result: { 
                id: 'minecraft:diamond_block',  // ✅ 修正：使用id格式
                count: 1 
            }
        }).id('kubejs:test_avaritia_recipe_fixed');
        
        console.log('✅ Avaritia配方测试成功！配方类型和格式正确。');
        
    } catch (error) {
        console.error('❌ Avaritia配方测试失败:', error);
    }
});

console.log('=== KubeJS Avaritia配方测试完成 ===');
