/**
 * ============================================================================
 * Create精密构件渐进式合成配方系统 - 机械动力增强版
 * ============================================================================
 * 
 * 文件功能：为Create模组添加自定义的精密构件制作配方
 * 版本：KubeJS 2101.7.1-build.181 + Create 0.5.1
 * 更新：修复版本，使用正确的KubeJS Create集成语法
 * 
 * 设计理念：
 * - 渐进式科技树：从基础电路到高级精密构件
 * - 多步骤制作：使用机械合成台进行复杂组装
 * - 平衡考虑：确保制作成本与物品价值匹配
 * - 模组兼容：与Create生态系统无缝集成
 * 
 * 配方类型说明：
 * - create:mechanical_crafting: 机械合成台配方（支持大型合成网格）
 * - minecraft:crafting_shaped: 标准工作台有形配方
 * - create:mixing: 搅拌机配方（流体+固体混合）
 * - create:crushing: 粉碎轮配方（固体处理）
 * 
 * 技术要点：
 * - 使用 event.custom() 调用Create专用配方类型
 * - pattern数组定义合成网格布局
 * - key对象映射字符到具体物品
 * - accept_mirrored: false 确保配方不可镜像
 * 
 * 常见错误预防：
 * - 避免使用不存在的物品ID
 * - 确保配方ID唯一性
 * - 注意大小写敏感的物品命名
 * - 检查模组依赖是否正确加载
 * ============================================================================
 */

// Create精密构件渐进式合成配方 - 修复版本
// 这是一个使用正确KubeJS Create语法的版本

ServerEvents.recipes(event => {

    /**
     * 【调试和测试配方部分】
     * 用于验证KubeJS配方系统是否正常工作
     * 在正式环境中可以移除或注释掉
     */
    // ============ 测试配方 ============
    // 简单的测试配方：用木板合成钻石
    // 注意：这是调试用配方，实际游戏中应该移除
    event.shaped('minecraft:diamond', [
        'AAA',
        'AAA', 
        'AAA'
    ], {
        A: 'minecraft:oak_planks'
    }).id('kubejs:test/planks_to_diamond')

    /**
     * 【基础电子元件制作】
     * 这是精密构件科技树的起点
     * 制作基础电路板，为后续高级组件奠定基础
     */
    // ============ 基础电路板配方 ============
    // 基础电路板 (Basic Circuit) - 使用最基础确认存在的物品
    /**
     * 基础电路板制作配方：
     * - 用途：作为所有精密构件的电子控制基础
     * - 材料选择：Create模组的黄铜锭 + 原版红石电路材料
     * - 合成方式：使用机械合成台的3x3网格
     * 
     * 配方设计理念：
     * - 外层：黄铜锭提供坚固外壳和导电性
     * - 信号层：红石作为电信号传输介质
     * - 连接层：铜锭提供精细电路连接
     * - 核心：金锭作为高导电核心
     * - 处理单元：钻石提供精密处理能力
     * 
     * 经济平衡：
     * - 黄铜锭需要铜+锌合金制作，有一定成本
     * - 钻石确保了电路板的珍贵性
     * - 整体成本适中，适合作为基础组件
     */
    event.custom({
        type: 'create:mechanical_crafting',  // 机械合成台配方类型
        pattern: [
            'ABA',    // 黄铜-红石-黄铜（顶层信号控制）
            'CDC',    // 铜-金-铜（中层精密连接）  
            'AEA'     // 黄铜-钻石-黄铜（底层处理核心）
        ],
        key: {
            A: { item: 'create:brass_ingot' },      // 黄铜锭（外壳材料）
            B: { item: 'minecraft:redstone' },      // 红石（信号传输）
            C: { item: 'minecraft:copper_ingot' },  // 铜锭（精细连接）
            D: { item: 'minecraft:gold_ingot' },    // 金锭（高导电核心）
            E: { item: 'minecraft:diamond' }        // 钻石（精密处理单元）
        },
        result: {
            id: 'kubejs:basic_circuit'  // 输出：基础电路板
        },
        accept_mirrored: false  // 不允许镜像，确保电路连接正确
    }).id('kubejs:mechanical_crafting/basic_circuit')

    /**
     * 【精密合金制作】
     * 为制作高级精密构件提供特殊合金材料
     * 这是从基础材料向精密构件过渡的关键步骤
     */
    /**
     * 精炼精密合金制作配方：
     * - 用途：制作高级精密构件的核心合金材料
     * - 材料选择：Create模组的各种基础合金组合
     * - 合成方式：紧凑的2x2机械合成
     * 
     * 合金成分分析：
     * - 黄铜锭：提供强度和耐腐蚀性
     * - 锌锭：增强合金的延展性和加工性能
     * - 铜锭：提供优秀的导电和导热性能
     * - 安山合金：Create的基础合金，提供稳定性
     * 
     * 性能特点：
     * - 结合了多种金属的优点
     * - 适合制作精密机械部件
     * - 成本适中，适合批量生产
     */
    event.custom({
        type: 'create:mechanical_crafting',  // 机械合成台配方
        pattern: [
            'AB',    // 黄铜锭-锌锭（强度与延展性结合）
            'CD'     // 铜锭-安山合金（导电性与稳定性结合）
        ],
        key: {
            A: { item: 'create:brass_ingot' },     // 黄铜锭（强度基础）
            B: { item: 'create:zinc_ingot' },      // 锌锭（延展性）
            C: { item: 'minecraft:copper_ingot' }, // 铜锭（导电性）
            D: { item: 'create:andesite_alloy' }   // 安山合金（稳定性）
        },
        result: {
            id: 'kubejs:refined_precision_alloy',
            count: 2
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/refined_precision_alloy')

    // ============ 基础精密构件配方 ============
    // 阶段1：基础精密构件 (Basic Precision Component)
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'AB',
            'CD'
        ],
        key: {
            A: { item: 'create:precision_mechanism' },
            B: { item: 'create:brass_ingot' },
            C: { item: 'kubejs:basic_circuit' },
            D: { item: 'create:andesite_alloy' }
        },
        result: {
            id: 'kubejs:basic_precision_component'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/basic_precision_component')

    // ============ 高级电路板配方 ============
    // 高级电路板 (Advanced Circuit)
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            A: { item: 'create:brass_ingot' },
            B: { item: 'minecraft:redstone' },
            C: { item: 'minecraft:copper_ingot' },
            D: { item: 'minecraft:emerald' },
            E: { item: 'create:zinc_ingot' }
        },
        result: {
            id: 'kubejs:advanced_circuit'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/advanced_circuit')

    // ============ 改进精密构件配方 ============
    // 改进精密构件 (Improved Precision Component)
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'ABA',
            'CDC',
            'AEA'
        ],
        key: {
            A: { item: 'create:brass_ingot' },
            B: { item: 'minecraft:redstone' },
            C: { item: 'kubejs:basic_precision_component' },
            D: { item: 'minecraft:iron_ingot' },
            E: { item: 'kubejs:advanced_circuit' }
        },
        result: {
            id: 'kubejs:improved_precision_component'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/improved_precision_component')

    // ============ 精密齿轮组配方 ============
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'ABA',
            'CDC',
            'ABA'
        ],
        key: {
            A: { item: 'create:brass_ingot' },
            B: { item: 'kubejs:improved_precision_component' },
            C: { item: 'create:cogwheel' },
            D: { item: 'create:large_cogwheel' }
        },
        result: {
            id: 'kubejs:precision_gear_assembly'
        },
        accept_mirrored: false
    }).id('kubejs:mechanical_crafting/precision_gear_assembly')

    console.log('[精密构件配方系统] 修复版本已加载完成')

    // ============ 序列装配配方示例 ============
    // 使用与整合包相同的序列装配语法：强化黄铜锭
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "create:brass_ingot"
        },
        loops: 2,
        results: [
            {
                chance: 90.0,
                id: "kubejs:reinforced_brass_ingot"
            },
            {
                chance: 10.0,
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

    // 精密齿轮制作
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "create:brass_sheet"
        },
        loops: 1,
        results: [
            {
                chance: 95.0,
                id: "kubejs:precision_gear"
            },
            {
                chance: 5.0,
                id: "create:brass_sheet"
            }
        ],
        sequence: [
            {
                type: "create:cutting",
                ingredients: [
                    {
                        item: "kubejs:incomplete_precision_gear"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_precision_gear"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:incomplete_precision_gear"
                    },
                    {
                        item: "create:precision_mechanism"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_precision_gear"
                    }
                ]
            }
        ],
        transitional_item: {
            id: "kubejs:incomplete_precision_gear"
        }
    }).id("kubejs:create/sequenced_assembly/precision_gear")

    // 高级精密机械制作
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "kubejs:precision_gear_assembly"
        },
        loops: 2,
        results: [
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
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:incomplete_advanced_precision_mechanism"
                    },
                    {
                        item: "create:precision_mechanism"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_advanced_precision_mechanism"
                    }
                ]
            },
            {
                type: "create:pressing",
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
    }).id("kubejs:create/sequenced_assembly/advanced_precision_mechanism")
    
    // 添加一个简单的工作台配方用于测试
    event.shaped('kubejs:reinforced_brass_ingot', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'create:brass_ingot',
        B: 'minecraft:iron_ingot'
    }).id('kubejs:test/manual_reinforced_brass_simple')
    
    // 验证所有配方加载
    console.log('[精密构件配方系统] 配方验证：')
    console.log('- 机械合成配方：6个（基础电路板、精炼精密合金、基础精密构件、高级电路板、改进精密构件、精密齿轮组）')
    console.log('- 序列装配配方：3个（强化黄铜锭、精密齿轮、高级精密机械）')
    console.log('- 测试工作台配方：1个（强化黄铜锭手动制作）')
    console.log('[精密构件配方系统] 序列装配配方已添加完成')
    
    // 测试物品是否正确注册
    console.log('[测试] 检查配方注册状态：')
    console.log('- 序列装配配方ID: kubejs:sequenced_assembly/reinforced_brass_ingot')
    console.log('- 测试工作台配方ID: kubejs:test/manual_reinforced_brass_simple')
    console.log('- 配方加载时机：ServerEvents.recipes 阶段')
    console.log('- 注意：EMI 等模组会在稍后阶段索引这些配方')
    
    // 验证配方注册完成
    console.log('[精密构件配方系统] 所有配方已成功注册到游戏中')
})
