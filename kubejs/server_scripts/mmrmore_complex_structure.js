//如果您需要更多信息，可以查看维基百科
//https://wikis.degrassi.es/docs/modular-machinery-reborn

/*
使用 basic_structure.js 中的机器，我们可以修改它
使其变得有用

例如，我们需要添加舱口和总线，用于放置物品
和液体
*/
MMREvents.machines(event => {
    event.create("mmr:lcr3")
    .structure(
        MMRStructureBuilder.create()
        .pattern([
            ["baa","aaa","aac"],
            ["ama","a a","aaa"],
            ["aaa","aaa","aaa"]
        ])
        .keys({
            "a":["modular_machinery_reborn:casing_plain"],
            //它只能是一条极小的输入总线和一条极小的输出总线
            "b":["modular_machinery_reborn:inputbus_tiny"],
            "c":["modular_machinery_reborn:outputbus_tiny"]
        })
    )
})

/*
如果我们不想对特定舱口或总线进行硬编码怎么办？
您可以使用标签！
*/
MMREvents.machines(event => {
    event.create("mmr:lcr4")
    .structure(
        MMRStructureBuilder.create()
        .pattern([
            ["baa","aaa","aac"],
            ["ama","a a","aaa"],
            ["aaa","aaa","aaa"]
        ])
        .keys({
            "a":["modular_machinery_reborn:casing_plain"],
            "b":["#modular_machinery_reborn:inputbus"], //任意输入
            "c":["#modular_machinery_reborn:outputbus"] //任意输出
        })
    )
})

/*
好吧，但如果我们想让用户选择
放在哪里呢？

那么，key（a、b、c、m）是一个方块列表，所以你可以
在列表中添加更多的方块
*/
MMREvents.machines(event => {
    event.create("mmr:lcr5")
    .structure(
        MMRStructureBuilder.create()
        .pattern([
            ["baa","aaa","aab"],
            ["ama","a a","aaa"],
            ["aaa","aaa","aaa"]
        ])
        .keys({
            "a":["modular_machinery_reborn:casing_plain"],
            "b":[
                "#modular_machinery_reborn:inputbus",
                "#modular_machinery_reborn:outputbus"
            ], //allows any input bus and output bus on b
        })
    )
})

/*
想象一下，您想添加一块板或一些块
可以改变位置，比如楼梯

使用结构创建器，您可以做到这一点
*/
MMREvents.machines(event => {
    event.create("mmr:lcr6")
    .structure(
        MMRStructureBuilder.create()
        .pattern([
            ["baa","aaa","aab"],
            ["ama","a a","aaa"],
            ["aaa","aaa","aaa"]
        ])
        .keys({
            "a":[
                //allows the user to choose from the casing
                //or a slab that is on the bottom side of a block
                "modular_machinery_reborn:casing_plain",
                "minecraft:deepslate_brick_slab[type=bottom]"
            ],
            "b":[
                "#modular_machinery_reborn:inputbus",
                "#modular_machinery_reborn:outputbus"
            ], //allows any input bus and output bus
        })
    )
})

/*
颜色和名称也很重要
颜色有点麻烦，因为它遵循以下模式 #aarrggbb、
其中，a 表示 alpha 或亮度，rgb 表示颜色，均为十六进制。
通常，选择你想要的颜色，然后在开头加上 ff（全亮度）
开头

至于名称，就简单多了，只需输入您希望用户看到的名称即可。
你希望用户看到的名称。
您也可以使用语言文件，但需要用
使用数据包或 kubejs
*/
MMREvents.machines(event => {
    event.create("mmr:lcr7")
    .color("#ff0080ff") 
    .name("Large Chemical Reactor") //or .color("namespace.machine.name") to use the lang file
    .structure(
        MMRStructureBuilder.create()
        .pattern([
            ["aaa","aaa","aaa"],
            ["ama","a a","aaa"],
            ["aaa","aaa","aaa"]
        ])
        .keys({
            "a":["modular_machinery_reborn:casing_plain"]
        })
    )
})
