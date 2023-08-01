global.customItems = [
    {
        name: "blaze_core",
        displayName: "Blaze Core",
        stackSize: 64,
        entities: ["minecraft:blaze"],
        dropChange: 0.1,
    },
    {
        name: "bone_chunks",
        displayName: "Bone Chunks",
        stackSize: 64,
        entities: ["minecraft:skeleton", "minecraft:stray"],
        dropChange: 0.1,
    },
    {
        name: "creeper_gall_bladder",
        displayName: "Creeper Gall Bladder",
        stackSize: 64,
        entities: ["minecraft:creeper", "minecraft:ghast"],
        dropChange: 0.1,
    },
    {
        name: "enderheart",
        displayName: "Enderheart",
        stackSize: 64,
        entities: ["minecraft:enderman"],
        dropChange: 0.1,
    },
    {
        name: "guardian_scales",
        displayName: "Guardian Scales",
        stackSize: 64,
        entities: ["minecraft:guardian", "minecraft:elder_guardian"],
        dropChange: 0.1,
    },
    {
        name: "magma_goo",
        displayName: "Magma Goo",
        stackSize: 64,
        entities: ["minecraft:magma_cube"],
        dropChange: 0.1,
    },
    {
        name: "spider_gland",
        displayName: "Spider Gland",
        stackSize: 64,
        entities: ["minecraft:spider", "minecraft:cave_spider"],
        dropChange: 0.1,
    },
    {
        name: "squid_droppings",
        displayName: "Squid 'Droppings'",
        stackSize: 64,
        entities: ["minecraft:squid"],
        dropChange: 0.1,
    },
    {
        name: "witching_jar",
        displayName: "Witching Jar",
        stackSize: 64,
        entities: ["minecraft:witch"],
        dropChange: 0.1,
    },
    {
        name: "zombie_liver",
        displayName: "Zombie Liver",
        stackSize: 64,
        entities: ["minecraft:zombie", "minecraft:husk", "minecraft:zombified_piglin", "minecraft:zoglin", "minecraft:drowned"],
        dropChange: 0.1,
    },
    {
        name: "wither_flesh",
        displayName: "Wither Flesh",
        stackSize: 64,
        entities: ["minecraft:wither_skeleton"],
        dropChange: 0.1,
    },
    {
        name: "shulker_gristle",
        displayName: "Shulker Gristle",
        stackSize: 64,
        entities: ["minecraft:shulker"],
        dropChange: 0.1,
    },
    {
        name: "slime_rib",
        displayName: "Slime Rib",
        stackSize: 64,
        entities: ["minecraft:slime"],
        dropChange: 0.1,
    },
    {
        name: "piglin_hide",
        displayName: "Piglin Hide",
        stackSize: 64,
        entities: ["minecraft:piglin", "minecraft:piglin_brute"],
        dropChange: 0.1,
    },
    {
        name: "phantom_hide",
        displayName: "Phantom Hide",
        stackSize: 64,
        entities: ["minecraft:phantom"],
        dropChange: 0.1,
    },
    {
        name: "hoglin_tallow",
        displayName: "Hoglin Tallow",
        stackSize: 64,
        entities: ["minecraft:hoglin"],
        dropChange: 0.1,
    },
    {
        name: "ultimate_chemical",
        displayName: "Ultimate Chemical",
        stackSize: 16,
        glow: true,
    },
];

StartupEvents.registry("item", (event) => {
    customItems.forEach((item) => {
        event
            .create(item.name)
            .displayName(item.displayName)
            .texture("madness:item/" + item.name + ".png")
            .maxStackSize(item.stackSize)
            .glow(!!item.glow);
    });
});
