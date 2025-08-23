
//如果您需要更多信息，可以查看维基百科
//https://wikis.degrassi.es/docs/modular-machinery-reborn

/*
要开始创建自定义机械，您需要创建
控制器，可以这样做。
这是最基本的
*/
MMREvents.machines(event => {
    event.create("测试机器") //可以是任何东西，比如minecraft:oxygen
})


/*
在游戏中（使用 /reload 重载后），您可以放置
控制器，以及您想要的外观、
比如一个 3x3x3 的空心立方体，或者一个有 500 个方块的超大型多方块。

有了结构后，您需要使用
结构创建器（可在创意中使用）选中它，然后偷偷右键单击控制器
单击控制器以获取聊天信息

选择 Kubejs 选项获取结构并粘贴
*/

/*
如果需要，可以写得漂亮一些
有两个字母，a 和 m，其中 m 是控制器，而
a 是机器外壳

结构垂直分层，所以第一列是
第一层，...
*/
MMREvents.machines(event => {
    event.create("mmr:lcr2")
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