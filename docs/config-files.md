# Config Files

- The main way you'll customize a modpack is through config files. Not every mod has one, but the majority will
- You will mostly encounter configs in the following format `.toml`, `.txt`, or `.json`

## Example Config

```toml
#Hornet Attack Settings
["Hornet Attack Settings"]
  #Hornets Attack Monsters
  hornet_should_attack_monsters = false
  #Hornets Attack Everything (Except Hornets)
  hornet_should_attack_all = false
  #Hornets Drop Cake
  hornet_drops_cake = true

#Hornet Spawn Settings
["Hornet Spawn Settings"]
  #Hornet Spawn Group Maximum Size
  #Range: > 1
  hornet_max_spawn_size = 1
  #Hornet Spawn Chance Probability
  #Range: > 1
  hornet_chance = 3
  #Hornet Spawn Group Minimum Size
  #Range: > 1
  hornet_min_spawn_size = 1
  #Hornet Spawn Dimension Blacklist
  hornet_dimensions = []
```

- Often you will find configs to be simple to edit
- Many times configs will have simple `true` or `false` options
- Other times you'll have a bit more customization to set how often something happens like spawn chance probabilities

```toml

#With default value every difficulty perk maxes out at difficulty 250
[general]
  #Disable/Enables the whole difficulty scaling of this mod. Requires a mc restart
  "Enable difficulty scaling" = false
  #Time in ticks for which the difficulty shouldnt increase at the beginning. One full minecraft day is 24000 ticks
  "Difficulty Delay" = 0
  #Wether difficulty should only increase with at least one online players or not
  "Ignore Players" = false
  #Mobs to include for the new light spawning rules.
  "Light list" = []
  #Turn the list list whitelist to blacklist
  "Light list blacklist" = false
  #Light level >= x will prevent mob spawning for defined mobs.
  #Range: 0 ~ 16
  Light = 7
  #Should punish time skipping with e.g. bed, commands? If false, difficulty will increase by 0.1 regardless of skipped time.
  "Punish Time Skip" = true
  #Disable/Enable friendly fire for owned pets.
  FriendlyFire = false
  #Blacklist for pet you should't be able to give armor to. Pets from mods, which have custom armor should be included here.
  "Pet Blacklist" = []
  #Treat pet blacklist as whitelist
  "Pet Whitelist" = false
  #Increase difficulty with time
  #Here untill its back as a gamerule
  "Difficulty toggle" = true

#Black/Whitelist for various stuff
[list]
  #By default the mod only modifies EntityMobs. Add other entities here if you want to apply modifications to them. Usage:
  #<entity registry name> followed by any of:
  #[ALL,ATTRIBUTES,ARMOR,HELDITEMS,BLOCKBREAK,USEITEM,LADDER,STEAL,SWIMMRIDE,TARGETVILLAGER,REVERSE].
  #Leave empty to apply them all and REVERSE to reverse all flags. Some flags do nothing for certain mobs!
  #example: minecraft:sheep|REVERSE|ATTRIBUTES will add sheep to attributes modification (since default is a blacklist)
  #or minecraft:sheep|ATTRIBUTES will add sheep to everything except attributes
  "More Entities" = ["diregoo:goospreadentity|ALL", "eyesinthedarkness:eyes|ALL", "goopers:gooper|REVERSE|SWIMMRIDE"]
  #Treat ATTRIBUTES flags as whitelist
  "Attribute Whitelist" = false
  #Treat ARMOR flags as whitelist
  "Armor Equip Whitelist" = false
  #Treat HELDITEMS flags as whitelist
  "Held Equip Whitelist" = false
  #Treat BLOCKBREAK flags as whitelist
  "Breaker Whitelist" = false
  #Treat USEITEM flags as whitelist
  "Item Use Whitelist" = false
  #Treat LADDER flags as whitelist
  "Ladder Whitelist" = false
  #Treat STEAL flags as whitelist
  "Steal Whitelist" = false
  #Treat SWIMMRIDE flags as whitelist
  "Boat Whitelist" = false
  #Treat TARGETVILLAGER flags as whitelist
  "Villager Whitelist" = false
```

- Mods that have debug options are a great resource to help locate any issues or bugs you encounter. This one will visualize where mobs are walking (pathing) to

```toml
#Debugging
[debug]
  #Enable showing of entity paths
  "Path Debugging" = false
```

- In most cases, if a mod config file included an integration to a mod I do not use in the pack I will disable the integration. This does not always have an effect but is worth it for stability and bug-finding

```toml
#Settings for mod integration
[integration]
  #Should the scaling health mods difficulty system be used instead of this ones. (Requires scaling health mod)
  "Use Scaling Health Mod" = false
  #Should mobs be able to use techguns weapons. (Requires techguns mod)
  "Use Techguns Mod" = false
  #Should mobs be able to use weapons from the reforged mod. (Requires reforged mod)
  "Use Reforged Mod" = false
  #Should the coroutils repair block be used. (Requires coroutils mod)
  "Use CoroUtils Mod" = false
```

```toml
#Settings regarding custom ai for mobs
[ai]
  #Whitelist for blocks, which can be actively broken. Usage: <registry name;classname;tag> put "!" infront to exclude blocks
  "Block Whitelist" = ["minecraft:grass_block", "minecraft:dirt", "minecraft:coarse_dirt", "minecraft:podzol"]
  #Treat Block Whitelist as Blocklist
  "Block as BlacklistBlock as Blacklist" = false
  #Use the block breaking sound instead of a knocking sound
  Sound = true
  #Chance for a mob to be able to break blocks
  #Range: 0.0 ~ 1.0
  "Breaker Chance" = 0.08
  #Chance for a mob to be able to steal items
  #Range: 0.0 ~ 1.0
  "Stealer Chance" = 0.1
  #Item which will be given to mobs who can break blocks. Set to nothing to not give any items.
  "Breaking item" = "minecraft:stone_axe"
  #Should mobs be able to break tile entities? Evaluated before the break list
  "Break Tiles" = true
  #Chance for neutral mobs to be aggressive
  #Range: 0.0 ~ 1.0
  "Neutral Aggressive Chance" = 0.001
  #List for of pairs containing which mobs auto target others. Syntax is [mob id]-[mob id] where second value is the target.
  # e.g. minecraft:zombie-minecraft:skeleton makes all zombies target skeletons
  "Auto Target List" = []
  #Delay for the coroutil repair block. Coroutil integration needs to be enabled
  "Repair Ticks" = 500
  #Difficulty at which mobs are able to break blocks
  "Difficulty Break AI" = 0.0
  #Difficulty at which mobs are able to steal items
  "Difficulty Steal AI" = 0.0

#Configs regarding mobs spawning with equipment
[equipment]
  #Blacklist for mods. Add modid to prevent items from that mod being used. (For individual items use the equipment.json)
  "Item Blacklist" = []
  #Use blacklist as whitelist
  "Item Whitelist" = false
  #Base chance that a mob can have one piece of armor
  #Range: 0.0 ~ 1.0
  "Equipment Chance" = 0.1
  #Base chance for each additional armor pieces
  #Range: 0.0 ~ 1.0
  "Additional Equipment Chance" = 0.3
  #Adds additional x*difficulty% to base equip chance
  "Equipment Addition" = 0.3
  #Chance for mobs to have a weapon
  #Range: 0.0 ~ 1.0
  "Weapon Chance" = 0.05
  #Adds additional x*difficulty% to base weapon chance
  "Weapon Chance Add" = 0.3
  #Base chance for each armor pieces to get enchanted
  #Range: 0.0 ~ 1.0
  "Enchanting Chance" = 0.2
  #Adds additional x*difficulty% to base enchanting chance
  "Enchanting Addition" = 0.2
  #Specify min and max enchanting levels according to difficulty. difficulty-minLevel-maxLevel
  "Enchanting Calc" = ["0-5-10", "25-5-15", "50-10-17", "100-15-25", "200-20-30", "250-30-35"]
  #Chance for mobs to have an item in offhand
  #Range: 0.0 ~ 1.0
  "Item Equip Chance" = 0.05
  #Adds additional x*difficulty% to base item chance
  "Item Chance add" = 0.2
  #Should mobs drop the armor equipped through this mod? (Other methods e.g. through vanilla is not included)
  "Should drop equipment" = false

#Settings for attribute modifiers
[attributes]
  #Health will be multiplied by difficulty*0.016*x. Set to 0 to disable
  "Health Increase Multiplier" = 1.0
  #Health will be multiplied by at maximum this. Set to 0 means no limit
  "Max Health Increase" = 5.0
  #Round health to the nearest x. Set to 0 to disable
  "Round HP" = 0.5
  #Damage will be multiplied by difficulty*0.008*x. Set to 0 to disable
  "Damage Increase Multiplier" = 1.0
  #Damage will be multiplied by at maximum this. Set to 0 means no limit
  "Max Damage Increase" = 3.0
  #Speed will be increased by difficulty*0.0008*x. Set to 0 to disable
  "Speed Increase" = 1.0
  #Maximum increase in speed
  #Range: 0.0 ~ 1.0
  "Max Speed" = 0.1
  #Knockback will be increased by difficulty*0.002*x. Set to 0 to disable
  "Knockback Increase" = 1.0
  #Maximum increase in knockback
  "Max Knockback" = 0.5
  #Magic resistance will be increased by difficulty*0.0016*x. Set to 0 to disable
  "Magic Resistance Increase" = 1.0
  #Maximum increase in magic resistance. Magic reduction is percentage
  #Range: 0.0 ~ 1.0
  "Max Magic Resistance" = 0.4
  #Projectile Damage will be multiplied by 1+difficulty*0.008*x. Set to 0 to disable
  "Projectile Damage Increase" = 0.0
  #Projectile damage will be multiplied by maximum of this
  "Max Projectile Damage" = 0.0
```

- The following `.json` entry is from the [inControl mod](https://www.curseforge.com/minecraft/mc-mods/in-control){:target="\_blank"} inControl is a extremely powerful mod that allows a ton of customization
- I strongly recommend using a syntax checker and a formatter while you work with `.json` files to make things much easier

  - Depending on your dev environment you can get a plugin

- The following entry has multiple functions:
  - The first entry stops `hornets:hornet` from spawning once there are 15 loaded in the world
  - The second entry completely blocks `minecraft:creeper` from spawning in the world

```json
[
  {
    "mob": "hornets:hornet",
    "mincount": {
      "amount": 15
    },
    "result": "deny"
  },
  {
    "mob": "minecraft:creeper",
    "result": "deny"
  }
]
```

## [**Modpack Developer Tools**](/modpack-dev)
