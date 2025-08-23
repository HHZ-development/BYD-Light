//如果您需要更多信息，可以查看维基百科
//https://wikis.degrassi.es/docs/modular-machinery-reborn

/*
现在，你还想进一步定制你的机器吗？
那就让我们从控制器开始吧
*/
MMREvents.machines(event => {
    event.create("mmr:lcr8")
    .color("#ff000000")
    .name("Large Chemical Reactor")
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
            ],
        })
    )
    /*
    在这种情况下，我们希望控制器具有化学输液器
    为 Mekanism

    可以是 assets/mod/model（例如：minecraft:block/grass）或 blockid（modid:blockid）。
    */
    .controllerModel(ControllerModel.of('minecraft:stone'))
})

/*
如果我们想更改舱室的纹理怎么办？
我们可以这样做！
*/
MMREvents.machines(event => {
    event.create("mmr:lcr9")
    .color("#ff000000")
    .name("Large Chemical Reactor")
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
            ],
        })
    )
    /*
    在本例中，我们希望小输入总线具有自定义纹理

    可以是 assets/mod/model （例如：minecraft:block/grass）或 blockid （modid:blockid）。
    有关总线和舱口的更多信息，请访问：https://wikis.degrassi.es/docs/modular-machinery-reborn/section/misc/article/texture-types

    如果您有 FTB 任务且可以编辑任务，请右键单击章节
    添加图像，然后您就可以检查纹理了，或者您也可以去 MOD 资源库
    手动检查
    */
    .texture("modular_machinery_reborn:item_input_bus_tiny", //this is not the same as the item
            true, //Should the texture be colored? true or false
            //If true, your texture might not show
            "mekanism:block/cardboard_box_side", //the Machine Casing part
            null //Null means "Do nothing"
    )
    .texture("modular_machinery_reborn:item_output_bus_tiny",
            false,
            null,
            "mekanism:block/cardboard_box_side" //The circle above the Machine casing
    )
})

/*
如果我们想在工作时为机器添加声音怎么办？
或者出现错误时怎么办？

您也可以这样做！
*/
MMREvents.machines(event => {
    event.create("mmr:lcr10")
    .color("#ff000000")
    .name("Large Chemical Reactor")
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
            ],
        })
    )
    /*
    有 5 种可能性：
    "错误"、"空闲"、"缺少结构"、"暂停"、"运行"
    */
    .sound("idle", {
        "ambient": "actuallyadditions:coffee_machine",
        "interaction": { //all are optionals, but allows for more customization
            "volume": 100, //a whole number from 0 to 100
            "pitch": 0,//a number from 0.0 to 2.0
            "break": "actuallyadditions:coffee_machine",//if you want a custom sound for breaking the machine
            "step": "actuallyadditions:coffee_machine",//if you want a custom sound when you walk on the machine
            "place": "actuallyadditions:coffee_machine",//if you want a custom sound for placing the machine
            "hit": "actuallyadditions:coffee_machine",//if you want a custom sound when you hit the machine
            "fall": "actuallyadditions:coffee_machine"//if you want a custom sound when you fall on the machine
        }
    })
})

/*
最复杂的东西是修改器，又称升级。
这些区块是制作结构的可选项，但允许
你可以对它们进行更多定制

例如，将钻石块放在中心位置会降低速度
而在中间放一个下届合金块则会加快机器的速度
这些都是相对于控制器而言的
*/
MMREvents.machines(event => {
    event.create("mmr:lcr11")
    .color("#ff000000")
    .name("Large Chemical Reactor")
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
            ],
        })
    )
    .addModifier(
        MMRModifierReplacement.create()
        .ingredient("minecraft:diamond_block")
        /*
        0,0,0 是控制器
        第一个参数是 X（或控制器的左侧和右侧）
        第二个参数是 Y（或控制器的顶部和底部）
        第三个参数是 Z（或深度）

        这更像是一个透视图

        在这种情况下，我们希望在控制器旁边的正侧（X 轴）有一个菱形块。
        在控制器旁边，高度（Y 轴）和深度（Z 轴）相同。
        */
        .position(1, 0, 0)
        .addModifier( //here we do what we want to do
            MMRRecipeModifier.create()
            //更多的可以查看wikihttps://wikis.degrassi.es/docs/modular-machinery-reborn/section/misc/article/recipe-modifier-target
            .target("modular_machinery_reborn:speed") //required
            .addition() //加法是默认设置，您可以将其更改为 .multiply()
            .modifier(0.1) //必修的
            //输入为默认值，您可以更改 .output() (output is required by loot_table target)
            //input is required by speed
            .input()
        )
        //你也可以让修改器赋予更多物品或其他东西
        //自己玩这些
    )
    .addModifier(
        MMRModifierReplacement.create()
        .ingredient("minecraft:netherite_block")
        .position(1, 0, 0)
        .addModifier(
            MMRRecipeModifier.create()
            .target("modular_machinery_reborn:speed")
            .multiply()
            .modifier(1.2)
            .min(0.1) //lowest possible number, by default has no limit
            .max(1.2) //maximum possible number, by default has no limit
            //.chance(0.5) //for other things, you can add a chance base (0.0 up to 1.0)
            //in this example, you have a 50% chance to get more item if the target was item
        )   
    )
})