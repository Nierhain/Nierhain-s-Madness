ServerEvents.recipes((event) => {
        mysticalAgriculture.forEach((seed) => {
            event.custom({
                type: "extendedcrafting:shaped_table",
                pattern: ["  A  ", " BCB ", "ACDCA", " BCB ", "  A  "],
                key: {
                    A: {
                        item: seed.essence,
                    },
                    B: seed.nbt
                        ? {
                              item: seed.material,
                              nbt: seed.nbt,
                              type: "forge:nbt",
                              count: 1,
                          }
                        : seed.isTag
                        ? {
                              tag: seed.material,
                          }
                        : {
                              item: seed.material,
                          },
                    C: {
                        item: "mysticalagriculture:prosperity_shard",
                    },
                    D: {
                        item: "mysticalagriculture:prosperity_seed_base",
                    },
                },
                result: {
                    item: seed.result,
                },
            });
        });
})

const essence = {
    inferium: "mysticalagriculture:inferium_essence",
    prudentium: "mysticalagriculture:prudentium_essence",
    tertium: "mysticalagriculture:tertium_essence",
    imperium: "mysticalagriculture:imperium_essence",
    supremium: "mysticalagriculture:supremium_essence",
    insanium: "mysticalagradditions:insanium_essence",
};

const mysticalAgriculture = [
    {
        essence: essence.inferium,
        material: "mysticalagriculture:air_agglomeratio",
        result: "mysticalagriculture:air_seeds",
    },
    {
        essence: essence.inferium,
        material: "mysticalagriculture:earth_agglomeratio",
        result: "mysticalagriculture:earth_seeds",
    },
    {
        essence: essence.inferium,
        material: "mysticalagriculture:fire_agglomeratio",
        result: "mysticalagriculture:fire_seeds",
    },
    {
        essence: essence.inferium,
        material: "mysticalagriculture:water_agglomeratio",
        result: "mysticalagriculture:water_seeds",
    },
    {
        essence: essence.inferium,
        material: "minecraft:stone",
        result: "mysticalagriculture:stone_seeds",
    },
    {
        essence: essence.inferium,
        material: "minecraft:dirt",
        result: "mysticalagriculture:dirt_seeds",
    },
    {
        essence: essence.inferium,
        material: "minecraft:logs",
        result: "mysticalagriculture:wood_seeds",
        isTag: true,
    },
    {
        essence: essence.inferium,
        material: "minecraft:ice",
        result: "mysticalagriculture:ice_seeds",
    },
    {
        essence: essence.inferium,
        material: "minecraft:deepslate",
        result: "mysticalagriculture:deepslate_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:nature_agglomeratio",
        result: "mysticalagriculture:nature_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:dye_agglomeratio",
        result: "mysticalagriculture:dye_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:nether_agglomeratio",
        result: "mysticalagriculture:nether_seeds",
    },
    {
        essence: essence.prudentium,
        material: "minecraft:coal",
        result: "mysticalagriculture:coal_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:coral_agglomeratio",
        result: "mysticalagriculture:coral_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:honey_agglomeratio",
        result: "mysticalagriculture:honey_seeds",
    },
    {
        essence: essence.prudentium,
        material: "minecraft:amethyst_shard",
        result: "mysticalagriculture:amethyst_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:pig"}',
        result: "mysticalagriculture:pig_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:chicken"}',
        result: "mysticalagriculture:chicken_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:cow"}',
        result: "mysticalagriculture:cow_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:sheep"}',
        result: "mysticalagriculture:sheep_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:squid"}',
        result: "mysticalagriculture:squid_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:fish"}',
        result: "mysticalagriculture:fish_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:slime"}',
        result: "mysticalagriculture:slime_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:turtle"}',
        result: "mysticalagriculture:turtle_seeds",
    },
    {
        essence: essence.prudentium,
        material: "integrateddynamics:menril_berries",
        result: "mysticalagriculture:menril_seeds",
    },
    {
        essence: essence.prudentium,
        material: "create:limestone",
        result: "mysticalagriculture:limestone_seeds",
    },
    {
        essence: essence.prudentium,
        material: "mysticalagriculture:mystical_flower_agglomeratio",
        result: "mysticalagriculture:mystical_flower_seeds",
    },
    {
        essence: essence.prudentium,
        material: "thermal:apatite",
        result: "mysticalagriculture:apatite_seeds",
    },
    {
        essence: essence.prudentium,
        material: "forge:dusts/niter",
        result: "mysticalagriculture:saltpeter_seeds",
        isTag: true,
    },
    {
        essence: essence.prudentium,
        material: "forge:ingots/aluminum",
        result: "mysticalagriculture:aluminum_seeds",
        isTag: true,
    },
    {
        essence: essence.prudentium,
        material: "thermal:sulfur_dust",
        result: "mysticalagriculture:sulfur_seeds",
    },
    {
        essence: essence.prudentium,
        material: "ae2:silicon",
        result: "mysticalagriculture:silicon_seeds",
    },
    {
        essence: essence.tertium,
        material: "ae2:all_certus_quartz",
        result: "mysticalagriculture:certus_quartz_seeds",
        isTag: true,
    },
    {
        essence: essence.tertium,
        material: "ae2:sky_stone_block",
        result: "mysticalagriculture:sky_stone_seeds",
    },
    {
        essence: essence.tertium,
        material: "botania:manasteel_ingot",
        result: "mysticalagriculture:manasteel_seeds",
    },
    {
        essence: essence.tertium,
        material: "biggerreactors:graphite_ingot",
        result: "mysticalagriculture:graphite_seeds",
    },
    {
        essence: essence.tertium,
        material: "thermal:tin_ingot",
        result: "mysticalagriculture:tin_seeds",
    },
    {
        essence: essence.tertium,
        material: "thermal:bronze_ingot",
        result: "mysticalagriculture:bronze_seeds",
    },
    {
        essence: essence.tertium,
        material: "create:zinc_ingot",
        result: "mysticalagriculture:zinc_seeds",
    },
    {
        essence: essence.tertium,
        material: "create:brass_ingot",
        result: "mysticalagriculture:brass_seeds",
    },
    {
        essence: essence.tertium,
        material: "thermal:silver_ingot",
        result: "mysticalagriculture:silver_seeds",
    },
    {
        essence: essence.tertium,
        material: "thermal:lead_ingot",
        result: "mysticalagriculture:lead_seeds",
    },
    {
        essence: essence.tertium,
        material: "mysticalagriculture:prismarine_agglomeratio",
        result: "mysticalagriculture:prismarine_seeds",
    },
    {
        essence: essence.tertium,
        material: "minecraft:obsidian",
        result: "mysticalagriculture:obsidian_seeds",
    },
    {
        essence: essence.tertium,
        material: "minecraft:redstone",
        result: "mysticalagriculture:redstone_seeds",
    },
    {
        essence: essence.tertium,
        material: "minecraft:glowstone",
        result: "mysticalagriculture:glowstone_seeds",
    },
    {
        essence: essence.tertium,
        material: "minecraft:quartz",
        result: "mysticalagriculture:nether_quartz_seeds",
    },
    {
        essence: essence.tertium,
        material: "minecraft:copper_ingot",
        result: "mysticalagriculture:copper_seeds",
    },
    {
        essence: essence.tertium,
        material: "minecraft:iron_ingot",
        result: "mysticalagriculture:iron_seeds",
    },
    {
        essence: essence.tertium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:basalz"}',
        result: "mysticalagriculture:basalz_seeds",
    },
    {
        essence: essence.tertium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:blitz"}',
        result: "mysticalagriculture:blitz_seeds",
    },
    {
        essence: essence.tertium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:blizz"}',
        result: "mysticalagriculture:blizz_seeds",
    },
    {
        essence: essence.tertium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:rabbit"}',
        result: "mysticalagriculture:rabbit_seeds",
    },
    {
        essence: essence.tertium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:spider"}',
        result: "mysticalagriculture:spider_seeds",
    },
    {
        essence: essence.tertium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:creeper"}',
        result: "mysticalagriculture:creeper_seeds",
    },
    {
        essence: essence.tertium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:skeleton"}',
        result: "mysticalagriculture:skeleton_seeds",
    },
    {
        essence: essence.tertium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:zombie"}',
        result: "mysticalagriculture:zombie_seeds",
    },
    {
        essence: essence.imperium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:enderman"}',
        result: "mysticalagriculture:enderman_seeds",
    },
    {
        essence: essence.imperium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:ghast"}',
        result: "mysticalagriculture:ghast_seeds",
    },
    {
        essence: essence.imperium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:blaze"}',
        result: "mysticalagriculture:blaze_seeds",
    },
    {
        essence: essence.imperium,
        material: "minecraft:gold_ingot",
        result: "mysticalagriculture:gold_seeds",
    },
    {
        essence: essence.imperium,
        material: "thermal:steel_ingot",
        result: "mysticalagriculture:steel_seeds",
    },
    {
        essence: essence.imperium,
        material: "thermal:nickel_ingot",
        result: "mysticalagriculture:nickel_seeds",
    },
    {
        essence: essence.imperium,
        material: "thermal:constantan_ingot",
        result: "mysticalagriculture:constantan_seeds",
    },
    {
        essence: essence.imperium,
        material: "thermal:electrum_ingot",
        result: "mysticalagriculture:electrum_seeds",
    },
    {
        essence: essence.imperium,
        material: "thermal:invar_ingot",
        result: "mysticalagriculture:invar_seeds",
    },
    {
        essence: essence.imperium,
        material: "chemlib:tungsten_ingot",
        result: "mysticalagriculture:tungsten_seeds",
    },
    {
        essence: essence.imperium,
        material: "chemlib:titanium_ingot",
        result: "mysticalagriculture:titanium_seeds",
    },
    {
        essence: essence.imperium,
        material: "mekanism:ingot_uranium",
        result: "mysticalagriculture:uranium_seeds",
    },
    {
        essence: essence.imperium,
        material: "thermal:signalum_ingot",
        result: "mysticalagriculture:signalum_seeds",
    },
    {
        essence: essence.imperium,
        material: "thermal:lumium_ingot",
        result: "mysticalagriculture:lumium_seeds",
    },
    {
        essence: essence.imperium,
        material: "botania:elementium_ingot",
        result: "mysticalagriculture:elementium_seeds",
    },
    {
        essence: essence.imperium,
        material: "mekanism:ingot_osmium",
        result: "mysticalagriculture:osmium_seeds",
    },
    {
        essence: essence.imperium,
        material: "mekanism:ingot_refined_glowstone",
        result: "mysticalagriculture:refined_glowstone_seeds",
    },
    {
        essence: essence.imperium,
        material: "mekanism:ingot_refined_obsidian",
        result: "mysticalagriculture:refined_obsidian_seeds",
    },
    {
        essence: essence.imperium,
        material: "powah:steel_energized",
        result: "mysticalagriculture:energized_steel_seeds",
    },
    {
        essence: essence.imperium,
        material: "minecraft:lapis_lazuli",
        result: "mysticalagriculture:lapis_lazuli_seeds",
    },
    {
        essence: essence.imperium,
        material: "mysticalagriculture:end_agglomeratio",
        result: "mysticalagriculture:end_seeds",
    },
    {
        essence: essence.imperium,
        material: "mysticalagriculture:experience_capsule",
        nbt: "{Experience:1200}",
        result: "mysticalagriculture:experience_seeds",
    },
    {
        essence: essence.imperium,
        material: "thermal:ruby",
        result: "mysticalagriculture:ruby_seeds",
    },
    {
        essence: essence.imperium,
        material: "thermal:sapphire",
        result: "mysticalagriculture:sapphire_seeds",
    },
    {
        essence: essence.imperium,
        material: "mekanism:fluorite_gem",
        result: "mysticalagriculture:fluorite_seeds",
    },
    {
        essence: essence.imperium,
        material: "ae2:fluix_crystal",
        result: "mysticalagriculture:fluix_seeds",
    },
    {
        essence: essence.imperium,
        material: "powah:crystal_blazing",
        result: "mysticalagriculture:blazing_crystal_seeds",
    },
    {
        essence: essence.supremium,
        material: "mysticalagriculture:soul_jar",
        nbt: '{Souls:8.0d,Type:"mysticalagriculture:wither_skeleton"}',
        result: "mysticalagriculture:wither_skeleton_seeds",
    },
    {
        essence: essence.supremium,
        material: "powah:uraninite",
        result: "mysticalagriculture:uraninite_seeds",
    },
    {
        essence: essence.supremium,
        material: "powah:crystal_spirited",
        result: "mysticalagriculture:spirited_crystal_seeds",
    },
    {
        essence: essence.supremium,
        material: "powah:crystal_niotic",
        result: "mysticalagriculture:niotic_crystal_seeds",
    },
    {
        essence: essence.supremium,
        material: "botania:terrasteel_ingot",
        result: "mysticalagriculture:terrasteel_seeds",
    },
    {
        essence: essence.supremium,
        material: "thermal:enderium_ingot",
        result: "mysticalagriculture:enderium_seeds",
    },
    {
        essence: essence.supremium,
        material: "chemlib:iridium_ingot",
        result: "mysticalagriculture:iridium_seeds",
    },
    {
        essence: essence.supremium,
        material: "chemlib:platinum_ingot",
        result: "mysticalagriculture:platinum_seeds",
    },
    {
        essence: essence.supremium,
        material: "minecraft:netherite_ingot",
        result: "mysticalagriculture:netherite_seeds",
    },
    {
        essence: essence.supremium,
        material: "minecraft:emerald",
        result: "mysticalagriculture:emerald_seeds",
    },
    {
        essence: essence.supremium,
        material: "minecraft:diamond",
        result: "mysticalagriculture:diamond_seeds",
    },
    {
        essence: essence.insanium,
        material: "minecraft:nether_star",
        result: "mysticalagriculture:nether_star_seeds",
    },
    {
        essence: essence.insanium,
        material: "mysticalagradditions:dragon_scale",
        result: "mysticalagriculture:dragon_egg_seeds",
    },
    {
        essence: essence.insanium,
        material: "botania:life_essence",
        result: "mysticalagriculture:gaia_spirit_seeds",
    },
    {
        essence: essence.insanium,
        material: "powah:crystal_nitro",
        result: "mysticalagriculture:nitro_crystal_seeds",
    },
];
