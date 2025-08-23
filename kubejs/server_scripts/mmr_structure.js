MMREvents.machines(event => {
    event.create("mmr:industrial_blast_furnace")
    .name("工业高炉")
    .structure(
MMRStructureBuilder.create()
.pattern(
    [["medc","abba","abba","aaaa"],
    [" gg ","giig","giig"," gg "],
    ["gllg","l  l","l  l","gllg"],
    ["gbbg","b  b","b  b","gbbg"],
    ["gbbg","b  b","b  b","gbbg"],
    ["gbbg","b  b","b  b","gbbg"],
    ["gbbg","b  b","b  b","gbbg"],
    [" oo ","o  o","o  o"," oo "],
    [" gg ","g  g","g  g"," gg "],
    [" uu ","uuuu","uuuu"," uu "]
])
.keys({"a":["modular_machinery_reborn:casing_plain"],
    "b":["factory_blocks:sturdy"],
    "c":["modular_machinery_reborn:energyinputhatch_tiny"],
    "d":["modular_machinery_reborn:outputbus_normal"],
    "e":["modular_machinery_reborn:inputbus_normal"],
    "g":["minecraft:iron_bars"],
    "i":["modular_machinery_reborn:casing_firebox"],
    "l":["factory_blocks:hazard"],"n":["factory_blocks:fan_four_on[facing=east]"],
    "o":["factory_blocks:fan_four_on"],
    "u":["factory_blocks:exhaust"]}))
})