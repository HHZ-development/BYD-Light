//如果您需要更多信息，可以查看维基百科
//https://wikis.degrassi.es/docs/modular-machinery-reborn

/*
函数是一种按需更改配方而非硬编码的方法
共有 4 个函数：

.requireFunctionToStart("id") -> 决定是否可以启动配方
.requireFunctionOnStart("id") -> 用于检查项目以提高效率
.requireFunctionEachTick("id") -> 当你想检查项目以修改配方时间或停止配方时
.requireFunctionOnEnd("id") -> 决定是否得到结果。
*/
let IOType = Java.loadClass("es.degrassi.mmreborn.common.machine.IOType");

ServerEvents.recipes(event => {
    const time = 20 //in ticks (20 ticks = 1 second)
    const machine_id = "mmr:lcr6"
    event.recipes.modular_machinery_reborn.machine_recipe(machine_id, time)
    .progressX(54)
    .progressY(20)
    .width(110)
    .height(60)
    .requireEnergy(10000, 0, 4)
    .requireItem("minecraft:birch_boat")
    .produceItem("minecraft:oak_log")
    .requireFunctionOnEachTick("boat_chooser")
})

MMREvents.recipeFunction("boat_chooser", event => {
    let controller = event.machine; //This has more useful functions, more can be found here https://wikis.degrassi.es/docs/modular-machinery-reborn/section/creating-a-new-recipe/article/machine
    let level = event.getTile().getLevel(); //Allows to get to the Level class, useful to do commands or more
    let pos = event.getTile().getBlockPos(); //Controller position
    let speed = event.baseSpeed; //speed of the recipe
    let time_remaining = event.remainingTime; //Time remaining for the recipe
    event.setBaseSpeed(2) //min is 0.1

    let inputItems = controller.getItemsStored(IOType.INPUT); //Get a list with all items
    let outputItems = controller.getItemsStored(IOType.OUTPUT);
    controller.setPaused(true) //To pause the recipe
    
    //if you want to specify an error, use event.error("Text here")
    //If not, dont specify something
})