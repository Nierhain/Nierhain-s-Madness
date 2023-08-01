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
});
