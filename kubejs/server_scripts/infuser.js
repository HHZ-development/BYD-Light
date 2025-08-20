/*
灌注配方示例
event.custom({                                                             注册事件
    type: "mekanism:metallurgic_infusing",                                 配方类型
    chemical_input: {                                                      化学品输入
      amount: 40,                                                          化学品数量（mb）
      chemical: "kubejs:common_alloy_gas"                                  化学品ID（仅能用chemical）
    },
    item_input: {                                                          物品输入
      count: 1,                                                            物品数量
      item: "kubejs:unfinished_improved_precision_component"             物品ID（仅能用item）
    },
    output: {                                                              输出
      id: "kubejs:improved_precision_component"                          输出物品ID（仅能用id）
    },
    per_tick_usage: false                                                  是否每tick消耗化学品
  }).id("kubejs:metallurgic_infusing/improved_precision_component")        配方ID

*/
ServerEvents.recipes(event => {
  // 灌注配方
  event.custom({
    type: "mekanism:metallurgic_infusing",
    chemical_input: {
      amount: 40,
      chemical: "kubejs:common_alloy_gas"
    },
    item_input: {
      count: 1,
      item: "kubejs:unfinished_improved_precision_component"
    },
    output: {
      id: "kubejs:improved_precision_component"
    },
    per_tick_usage: false
  }).id("kubejs:metallurgic_infusing/improved_precision_component")

  // 普通合金 -> 灌注类型
  event.custom({
    type: "mekanism:chemical_conversion",
    input: {
        count: 1,
        item: "kubejs:common_alloy"
    },
    output: {
      amount: 10,
      id: "kubejs:common_alloy_gas"
    }
  }).id("kubejs:chemical_conversion/common_alloy_to_gas")
})
