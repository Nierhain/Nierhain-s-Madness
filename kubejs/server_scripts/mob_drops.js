const drops = [
    {
        input: "madness:bone_chunks",
        result: "minecraft:bone",
        count: 5,
    },
    {
        input: ["madness:enderheart"],
        result: "minecraft:ender_pearl",
        count: 3,
    },
    {
        input: ["madness:creeper_gall_bladder"],
        result: "minecraft:gunpowder",
        count: 6,
    },
    {
        input: ["3x madness:creeper_gall_bladder"],
        result: "minecraft:ghast_tear",
        count: 1,
    },
    {
        input: ["madness:squid_droppings"],
        result: "minecraft:ink_sac",
        count: 6,
    },
    { input: ["madness:magma_goo"], result: "minecraft:magma_cream", count: 3 },
    {
        input: ["madness:guardian_scales"],
        result: "minecraft:prismarine_shard",
        count: 5,
    },
    {
        input: ["2x madness:guardian_scales"],
        result: "minecraft:prismarine_crystals",
        count: 10,
    },
    {
        input: ["madness:zombie_liver"],
        result: "minecraft:rotten_flesh",
        count: 6,
    },
    { input: ["madness:spider_gland"], result: "minecraft:string", count: 6 },
    {
        input: ["2x madness:spider_gland"],
        result: "minecraft:spider_eye",
        count: 2,
    },
    {
        input: ["madness:witching_jar"],
        result: "minecraft:glass_bottle",
        count: 6,
    },
    { input: ["madness:wither_flesh"], result: "minecraft:coal", count: 8 },
    { input: ["madness:slime_rib"], result: "minecraft:slime_ball", count: 6 },
    {
        input: ["madness:shulker_gristle"],
        result: "minecraft:shulker_shell",
        count: 3,
    },
    { input: ["madness:piglin_hide"], result: "minecraft:leather", count: 6 },
    {
        input: ["madness:phantom_hide"],
        result: "minecraft:phantom_membrane",
        count: 3,
    },
    {
        input: ["madness:hoglin_tallow"],
        result: "minecraft:porkchop",
        count: 6,
    },
    {
        input: ["3x madness:hoglin_tallow"],
        result: "minecraft:leather",
        count: 6,
    },
    {
        input: ["madness:piglin_hide", "madness:zombie_liver"],
        result: "minecraft:gold_nugget",
        count: 6,
    },
];

const witchingJar = [
    {
        pattern: ["W  ", "W  ", "W  "],
        result: "minecraft:redstone",
        count: 6,
    },
    {
        pattern: ["  W", "  W", "  W"],
        result: "minecraft:glowstone_dust",
        count: 6,
    },
    { pattern: [" W ", " W ", " W "], result: "minecraft:gunpowder", count: 6 },
    { pattern: ["   ", "WWW", "   "], result: "minecraft:sugar", count: 6 },
];

ServerEvents.recipes((event) => {
    drops.forEach((drop) => {
        console.info(drop);
        event.shapeless(Item.of(drop.result, drop.count), drop.input);
    });
    witchingJar.forEach((jar) => {
        console.info(jar);
        event.shaped(Item.of(jar.result, jar.count), jar.pattern, {
            W: "madness:witching_jar",
        });
    });
    event.shaped(
        Item.of("minecraft:wither_skeleton_skull"),
        [" W ", "WSW", " W "],
        {
            W: "madness:wither_flesh",
            S: "mysticalagriculture:blank_skull",
        }
    );
});

// onEvent("lootjs", (event) => {
//     global.customMobDrops.forEach((drop) => {
//         drop.entities.forEach((entity) => {
//             event
//                 .addEntityLootModifier(entity)
//                 .addWeightedLoot([
//                     Item.of(drop.name).withChance(drop.dropChance),
//                 ]);
//         });
//     });
// });

LootJS.modifiers((event) => {
    global.customMobDrops.forEach((drop) => {
        drop.entities.forEach((entity) => {
            event
                .addEntityLootModifier(entity)
                .addWeightedLoot([
                    Item.of(drop.name).withChance(drop.dropChance),
                ]);
        });
    });
});
