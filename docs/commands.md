# Useful In-Game Commands

## Useful commands

### Command breakdown

- `/effect give @p minecraft:night_vision 999`
  - `/effect` -
  - 'give` -
  - `@p` - Targets nearest player (Which includes the person running the command)
  - `minecraft:night_vision` - effect to give the target, you can use tab auto-complete to see the full list in-game
  - `999` how long, in seconds, the effect will last

### Commands

- `Forge pregen <> <> <>` - TODO
- Spawn loot chests
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
- `F3+F4` - Change game modes
- `F3+G` - View [chunk](/glossary 'A chunk is a 256-block tall 16×16 segment of a Minecraft world') borders
- `F3+H` - Enable advanced tooltips. Will allow to see Item ID's and other useful information

## [**Main Page**](/modpack-dev)
