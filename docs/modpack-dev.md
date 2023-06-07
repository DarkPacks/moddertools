# How to make modpacks

## [**Setup a Developer Environment**](/ide)

## Launcher to play packs

[MultiMC](https://multimc.org/){:target="\_blank"} - MultiMC is a launcher that will easily allow settings per instance

## Launcher for downloading and updating mods (either of these launchers will work fine, it’s preference)

- [GDLauncher](https://gdevs.io/){:target="\_blank"}
- [Curseforge](https://curseforge.overwolf.com/){:target="\_blank"}

## Sites to use for mods

- [Curseforge](https://www.curseforge.com/minecraft/mc-mods){:target="\_blank"}
- **DO NOT** use sites like 9minecraft. These sites not only steal mods but they are not always safe to download from. Frequently they are advertised as mod files but are actually malware or viruses

## [**Version Control and How to Setup a File Repository aka Repo**](/version-control)

## [**Config Files**](/config-files)

## Crash Logs

- Most often, when the game crashes it will generate a crash log. Crash logs will be in the “crash-reports” folder located in the Root folder of your instance
  Crash logs can seem pretty daunting at first, but once you get the hang of reading them you can solve your issues much more effectively
- TODO - dive further into crashlog sections to point out useful information
- [Breakdown of a Crash Log - thanks to 04Slash for the resource!](https://github.com/04Slash/Breaking-Down-Minecraft-Forge-Crash-Reports/wiki/Reading-Crash-Reports){:target="\_blank"}

## Playtesting

- Most bad modpacks out there have never been played by the developer or testers. It's impossible to know how a feature or setting will work if you have never experienced it before
- If you don't have people to play the pack for you, that's fine. Playtest it yourself. You'll be much better off having played it yourself than just posting it and hoping it works or that someone finds bugs. All it takes is one really bad bug and that person will be turned off from the pack and possible any future projects you work on

## Tools

- [Recipe Maker](https://muddrdev.com/minecraft/recipemaker.html) A tool made by Muddr that allows quick and easy creation of multiple recipe files simultaneously
- [MC UUID Converter](https://www.soltoder.com/mc-uuid-converter/)
- [Datapack Generator](https://misode.github.io/) this site will help create datapacks in the correct file structure and syntax. Datapack are extremely powerful and a great tool to learn when making maps and packs
- [NBT Cleaner](https://muddrdev.com/minecraft/itemcleaner.html) this tool allows you to paste in an items full nbt and then easily strip it of all the data you don't want. I will typically use this when adding Tinkers' Construct tools to a config or datapack and I only need the relevant nbt data
- [Json Generator](https://json-generator.com/) json generator allows you to create json files with random text and other variables and also can output multiples json entries. This is very handy when having to generate configs for mods needing multiple entries and can save a lot of time. For example, the Delivery Quests mod has 1 json entry per quest. You would be able to output many quests at once instead of making them one at a time.
- [CraftTweaker to DataPack Converter](https://muddrdev.com/minecraft/convertcrafttweaker.html) This is a tool made by Muddr to convert Craftweaker recipes to datapack json recipes. This is very handy when updating from CrT to Datapacks without having to do all of the copy/pasting manually.
- [Link Shell Extension](https://schinagl.priv.at/nt/hardlinkshellext/linkshellextension.html) is a Symlink tool allowing you to use MultiMC as your modpack launcher but still use GDLauncher or Curseforge to easily update mods. [Click here for more information](/sym-link)
- [Region Locator Coordinate Tool](https://dinnerbone.com/minecraft/tools/coordinates/){:target="\_blank"} You will often need to locate a region file. This will make that process much easier.
- [NBT Explorer](https://github.com/jaquadro/NBTExplorer/releases){:target="\_blank"} (sometimes you’ll need to edit files like level.dat and NBT Explorer will open and allow editing)

## [**Optimization**](/optimization)

## [**Performance Mods**](/performance_mods)

## [**Useful Mods for Development**](/development_mods)

## [**Useful Commands**](/commands)

## [**Java Arguments**](/java-args)

## [**Glossary**](/glossary)

## [**Special Thanks**](/thanks)
