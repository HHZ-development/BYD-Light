//如果您需要更多信息，可以查看维基百科
//https://wikis.degrassi.es/docs/modular-machinery-reborn

/*
您可以为您的配方指定更多要求

对于其他区块，你有以下需求（需要区块）：
- chunkload -> 如果有另外两个参数，允许加载 X 数量的块、
               在配方查看器上显示 X 和 Y 文字

- 生物群落 -> 允许指定是否可以在某些生物群落中运行配方
            需要生物群落列表（["biome_here", "biome_here"]）。
            如果在列表后传递的参数为 true，则这些生物群落将成为黑名单
            如果传入 3 个或 4 个参数，后 2 个参数将被视为 JEI 上的 X 和 Y 参数

- dimensions -> 与生物群落类似，但针对的是维度

- 天气 -> 允许在特定天气（"雨"、"晴"、"雪"、"雷"）下运行配方
             如果通过另外 2 个参数，最后 2 个参数将被视为济上的 X 和 Y 值。

- 时间 -> 允许您指定可以执行配方的范围（它是相对的，从 0 到 24000），更多信息请参见 https://wikis.degrassi.es/docs/modular-machinery-reborn/section/misc/article/range。
          如果再传入 2 个参数，则最后 2 个参数将被认为是井上的 X 和 Y 值。

- requieredHeight -> 与时间类似，但针对的是高度（范围从 -64 到 320）
范围
值的范围
一些配方要求（如时间和高度）需要一个范围才能正常运行。
范围可以是一个唯一的数字（在这种情况下只需指定即可），也可以是一个从负无穷大（-2147483648）到正无穷大（2147483647）的数值范围。
也可以指定多个范围，在这种情况下，测试值必须至少与指定范围中的一个匹配才能通过。
语法
必须使用以下语法指定范围：
1. 以 [ （包含下限）或 ( （不包含下限）开头。
2. 一个作为范围下限的数字，如果不需要下限，则为空。
3. 一个 ，用来分隔下限和上限。
4. 作为范围上限的数字，如果不需要上限，则不输入任何数字。
5. 以 ]（包含上限）或 ) （不包含上限）结束。
6. 6. 如果要指定另一个范围，添加 ，并重复上述过程。
- lootTable -> 允许你指定一个 lootTable（如 minecraft:chests/ancient_city）
               如果在 loottable 之后传递一个参数，则会获得运气（类似于掠夺，但适用于所有 lootTable）
               如果传入 3 个或 4 个参数，最后 2 个参数将被视为 JEI 上的 X 和 Y

- damageItem / repairItem -> 允许改变某些物品的耐久度
                             如果物品在 nbt 中很容易损坏，比如一把剑，那么可以使用一个函数来更好地处理这些问题。
*/
ServerEvents.recipes(event => {
    const time = 20 //in ticks (20 ticks = 1 second)
    const machine_id = "mmr:lcr6"
    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .requireItem("minecraft:dark_oak_boat")
    .chunkload(3)
})


/*
比方说，你有一堆重复的配方，但有些东西发生了变化。
发生了变化，比如小船产生了原木，而小船和铁砧
生产原木

您可以指定先考虑哪个配方
*/
ServerEvents.recipes(event => {
    const time = 20 //in ticks (20 ticks = 1 second)
    const machine_id = "mmr:lcr6"
    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .requireItem("minecraft:spruce_boat", 10, 10)
    .produceItem("minecraft:oak_log", 0.1, 40, 10)

    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .requireItem("minecraft:spruce_boat", 10, 10)
    .requireItem("minecraft:anvil", 10, 20)
    .produceItem("minecraft:oak_log", 0.1, 40, 10)
    .priority(2) //正比
})

/*
隐藏
*/
ServerEvents.recipes(event => {
    const time = 20 //in ticks (20 ticks = 1 second)
    const machine_id = "mmr:lcr6"
    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .requireItem("minecraft:spruce_boat", 10, 10)
    .produceItem("minecraft:oak_log", 0.1, 40, 10)

    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .requireItem("minecraft:spruce_boat", 10, 10)
    .requireItem("minecraft:anvil", 10, 20)
    .produceItem("minecraft:oak_log", 0.1, 40, 10)
    .hide()
    .priority(2) //正比
})

/*
现在，假设我们有一台标准机器，它总是有 5 个插槽
但你不想放置 5 件物品，那么你可以这样做！

- emptyItem -> 如果通过 2 个参数，则在配方查看器中充当 X 和 Y 的角色
- emptyFluid -> 如果通过 2 个参数，则在配方查看器中充当 X 和 Y 的角色
- emptyEnergy -> 如果通过 2 个参数，则在配方查看器上作为 X 和 Y 动作

如果没有传递任何参数，如 emptyItem()，默认值为 0,0
*/
ServerEvents.recipes(event => {
    const time = 20 //in ticks (20 ticks = 1 second)
    const machine_id = "mmr:lcr6"
    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .requireItem("minecraft:spruce_boat", 10, 10)
    .emptyItem(10, 20)
    .produceItem("minecraft:oak_log", 0.1, 40, 10)
})

/*
现在，假设您想进一步定制您的配方

您可以这样做
*/
ServerEvents.recipes(event => {
    const time = 20 //in ticks (20 ticks = 1 second)
    const machine_id = "mmr:lcr6"
    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .requireItem("minecraft:spruce_boat", 10, 10)
    .produceItem("minecraft:oak_log", 0.1, 40, 10)
    .jei() //如果 jei() 之后没有任何内容，它将使用真正的配方
    //如果没有 jei()，它将使用真正的配方

    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .requireItem("minecraft:spruce_boat", 10, 10)
    .requireItem("minecraft:anvil", 10, 20)
    .produceItem("minecraft:oak_log", 0.1, 40, 10)
    .jei()
    //jei将显示橡木船，但实际物品是云杉船
    //您可以在此进行更多定制
    .requireItem("minecraft:oak_boat", 10, 10)
    .produceItem("minecraft:oak_log", 0.1, 40, 10)
})