# Useful In-Game Commands

## Useful commands

# MCStacker is a great site to create Minecraft commands [MCStacker](https://mcstacker.net/versions.php)
# Tool to generate a number of features [Minecraft.tools](https://minecraft.tools/en/)

### Command breakdown

- `/effect give @p minecraft:night_vision 999`
  - `/effect` -
  - 'give` -
  - `@p` - Targets nearest player (Which includes the person running the command)
  - `minecraft:night_vision` - effect to give the target, you can use tab auto-complete to see the full list in-game
  - `999` how long, in seconds, the effect will last

### Commands

- `/forge generate <location> <chunkCount> [dimensionID]`
  - Pregenerate terrain, location can take the form of X Y Z for absolute or ~ ~ ~ for relative to your location, chunkCount is the total number of chunks to generate (dimensionID is optional)
- `/forge dimensions` - List registered dimensions and their ID
- `/forge entity list`
- `/effect give @p minecraft:night_vision 999`
- `/time set <day / night>`
- `/time set <amount: int>`
  - Used to set the time in-game (TODO list out other options within command)
- `/tp <> <> <>`
  - TODO give breakdown of command
- `/kill @e[type=!player]` 
  - Kills all entities besides the player
- `/gamerule` [Minecraft Wiki Gamerule List](https://minecraft.gamepedia.com/Game_rule){:target="\_blank"}
  - doDaylightCycle (true/false) - leave out true or false to see the current setting
  - doWeatherCycle (true/false)
  - randomTickSpeed (default: 3) - How often a random block [tick](/glossary 'Measure of time in minecraft. 1 second = 20 ticks') occurs (such as plant growth, leaf decay, etc.) per chunk section per game tick. 0 disables random ticks [needs testing], higher numbers increase random ticks. Setting to a high integer results in high speeds of decay and growth
- `/locate <structure>` - Displays the coordinates for the closest generated structure
- `/locatebiome <biome>` - Displays the coordinates for the closest biome of a given biome ID or a biome tag‌
- `/summon <entity> [pos]` - Summons an entity (pos is optional)

### `F3` Debug keys

- `F3+Q` - Gives help and shows all F3 + key combinations
- `F3+F4` - Change game modes
- `F3+G` - View [chunk](/glossary 'A chunk is a 256-block tall 16×16 segment of a Minecraft world') borders
- `F3+H` - Enable advanced tooltips. Will allow to see Item ID's and other useful information
- `F3+I` - Copies server-sided block or entity data you're looking at to the clipboard
- `F3+Shift+I` - Copies client-sided block or entity data you're looking at to the clipboard

### Spawn loot chests

- `/loot give @p loot <TAB>` - view the list of registered loottables, use TAB for autocomplete.
- `setblock ~2 ~ ~ minecraft:chest{LootTable:"minecraft:chests/nether_bridge"} replace` - Creates a chest from the loot table specified in quotes. The following is a list of existing Minecraft chest loot tables. This is not all of the available loot tables in the game. Consult the Minecraft wiki for the full list.
  - minecraft:chests/village
  - minecraft:chests/abandoned_mineshaft
  - minecraft:chests/bastion_bridge
  - minecraft:chests/bastion_hoglin_stable
  - minecraft:chests/bastion_other
  - minecraft:chests/bastion_treasure
  - minecraft:chests/buried_treasure
  - minecraft:chests/desert_pyramid
  - minecraft:chests/end_city_treasure
  - minecraft:chests/igloo_chest
  - minecraft:chests/jungle_temple
  - minecraft:chests/jungle_temple_dispenser
  - minecraft:chests/nether_bridge
  - minecraft:chests/pillager_outpost
  - minecraft:chests/ruined_portal
  - minecraft:chests/shipwreck_map
  - minecraft:chests/shipwreck_supply
  - minecraft:chests/shipwreck_treasure
  - minecraft:chests/simple_dungeon
  - minecraft:chests/spawn_bonus_chest
  - minecraft:chests/stronghold_corridor
  - minecraft:chests/stronghold_crossing
  - minecraft:chests/stronghold_library
  - minecraft:chests/underwater_ruin_big
  - minecraft:chests/underwater_ruin_small
  - minecraft:chests/woodland_mansion







## [**Main Page**](/modpack-dev)
