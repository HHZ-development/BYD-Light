//如果您需要更多信息，可以查看维基百科
//https://wikis.degrassi.es/docs/modular-machinery-reborn

/*
如果我们想为我们的多方块添加一个配方怎么办？
很简单，如下所示

输入）：

- requireItem
- requireFluid -> 以 mB 为单位，而不是以 Buckets 为单位
- requireEnergy -> 每tick
- requireExperience -> 以 XP 点数为单位（在配方查看器中会转换为等级）
- requireChemical -> 以毫升为单位，而不是以桶为单位（需要 "模块化机械重生 "插件）
- requireKinetic -> 以 SU 为单位（需要模块化机械重生创造插件）
- requireSource -> 在 source 中（需要模块化机械重生 Ars 附加组件）

您可以执行以下操作（输出）：

- produceItem
- produceFluid -> 以 mB 为单位，不是 Buckets
- produceEnergy -> 以总能量为单位
- produceExperience -> 以 XP 点数为单位（在配方查看器中将转换为等级）
- produceChemical -> 以毫升为单位，而不是以桶为单位（需要 "模块化机械重生 "插件）
- produceKinetic -> 以 SU 为单位（需要模块化机械重生创造插件）
- produceSource -> 在 source 中（需要模块化机械重生 Ars 附加组件）

*/
ServerEvents.recipes(event => {
    const time = 20 //in ticks (20 ticks = 1 second)
    const machine_id = "mmr:lcr6"
    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .requireItem("minecraft:acacia_boat")
    .produceItem("minecraft:oak_log")
})

/*
但这些物品相互重叠，我们该如何解决？
其实，require 和 produce 函数都支持可选参数，你可以根据需要传入参数

如果传入 1 个参数 -> 指定的项目以 100% 比例和 (0,0) 位置显示
如果传入 2 个参数 -> 指定的项目以 Z% 比例和 (0,0) 位置显示
如果传递3个参数 -> 您指定的项目，100% 权重，位置 X,Y
如果传递4个参数 -> 您指定的项目，Z% 权重，位置 X,Y

其中 Z 是 0.0 到 1.0 范围内的概率值，X 和 Y 是整数
项目、概率、X、Y 的顺序依次排列
*/
ServerEvents.recipes(event => {
    const time = 20 //in ticks (20 ticks = 1 second)
    const machine_id = "mmr:lcr6"
    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .requireItem("minecraft:spruce_boat", 10, 10)
    .produceItem("minecraft:oak_log", 0.1, 40, 10)
})

/*
但箭头也没有居中...
您可以在进度 X 和进度 Y 中输入整数
并自定义箭头的位置

或者禁用它*/
ServerEvents.recipes(event => {
    const time = 20 //in ticks (20 ticks = 1 second)
    const machine_id = "mmr:lcr6"
    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .progressX(20)
    .progressY(20)
    .requireItem("minecraft:cherry_boat", 10, 10)
    .produceItem("minecraft:oak_log", 40, 10)

    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    //.progressX(20)
    //.progressY(20)
    .renderProgress(false) //or you can disable it
    .requireItem("minecraft:oak_boat", 10, 10)
    .produceItem("minecraft:oak_log", 40, 10)
})

/*
您还可以自定义配方查看器选项卡的大小

默认为 256，256
*/

ServerEvents.recipes(event => {
    const time = 20 //in ticks (20 ticks = 1 second)
    const machine_id = "mmr:lcr6"
    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .width(110)
    .height(60)
    .requireItem("minecraft:jungle_boat", 10, 10)
    .produceItem("minecraft:oak_log", 40, 10)
})