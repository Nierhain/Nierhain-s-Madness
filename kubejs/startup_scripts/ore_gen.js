WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            "/^mekanism:.+_ore$/",
            "/^minecraft:.+_ore$/",
            "minecraft:copper_ore",
            "/^thermal:.+_ore$/",
            "/^elementalcraft:.+_ore$/",
            "/^occultism:.+_ore$/",
            "/^xycraft_world:.+_ore$/",
            "/^xycraft_world:.+_ore_.+$/",
            "rftoolsbase:dimensionalshard_overworld",
            "/^occultism:.+_ore_.+$/"
        ];
    })
})