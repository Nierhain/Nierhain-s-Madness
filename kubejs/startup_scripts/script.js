StartupEvents.registry("item", (event) => {
    global.customItems.forEach((item) => {
        event
            .create("madness:" + item.name)
            .displayName(item.displayName)
            .texture("madness:item/" + item.name)
            .maxStackSize(item.stackSize)
            .glow(!!item.glow);
    });
    global.customMobDrops.forEach((item) => {
        event
            .create("madness:" + item.name)
            .displayName(item.displayName)
            .texture("madness:item/" + item.name)
            .maxStackSize(item.stackSize)
            .glow(!!item.glow);
    });

    event
        .create("madness:ultimate_pickaxe", "pickaxe")
        .displayName("Ultimate Pickaxe")
        .texture("madness:item/ultimate_pickaxe")
        .tier("creative")
        .speed(10)
        .glow(true);
});
