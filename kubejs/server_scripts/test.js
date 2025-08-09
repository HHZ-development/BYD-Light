ServerEvents.recipes(event => {
  //测试头颅装配机配方
    event.custom({
        type: "enderio:slicing",
        energy: 10000,
        inputs: [
    {tag: "c:ingots/soularium"},
    {item: "minecraft:zombie_head"},
    {tag: "c:ingots/soularium"},
    {tag: "c:silicon"},
    {item: "kubejs:"},
    {tag: "c:silicon"}
  ],
  output: {
    count: 1,
    id: "enderio:z_logic_controller"
  }
    }).id('kubejs:enderio/slicing/z_logic_controller');
})