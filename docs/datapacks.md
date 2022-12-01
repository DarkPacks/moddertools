# Datapacks



- Datapacks in Minecraft have been available for a while now and are another way you can customize a mod for your modpack. Generally, you'll find recipes, tags, and other useful files you can edit. In 1.16.5 and beyond, most mods will be "data driven" and have some form of a datapack available to make use of. There is one downside in comparison to a mod like CraftTweaker or KubeJS, every recipe or functionality will generally have 1 file each. A mod with 10 recipes will require 10 separate files in most cases. An easier way to work with this is to use a text editor that allows you to open an entire folder at once and have access to every file on a sidebar

- For many, the most difficulty is with knowing how to begin working with datapacks. The folder structure is important or else the game will not read it

## Datapack File Structure

+ A datapack can be read as either a folder or a zip file. Working with a folder is helpful while building the datapack but eventually you may want to consider making it a zip when finished

1. Create a new folder and give it any name you want. It's a good idea to give it a unique name so you can easily locate it and identify
2. Inside that folder you will need an `pack.mcmeta` file and a folder named `data`. This step is where you will have to make a change based on what version of Minecraft you are using. For certain versions, the `mcmeta` file requires a `pack_format` entry. That list is as follows:

  - `4` for versions 1.13 - 1.14.4
  - `5` for versions 1.15 - 1.16.1
  - `6` for versions 1.16.2 - 1.16.5
  - `7` for versions 1.17 - 1.17.1
  - `8` for versions 1.18 - 1.18.1
  - `9` for versions 1.18.2
  - `10` for versions 1.19+

  For example, if you are making a datapack for Minecraft `1.18.2` your entire `mcmeta` file should look like this:

  ```json
{
  "pack": {
    "pack_format": 9,
    "description": "You can add any description you like here. It will appear in the Datapack information"
    }
}
  ```
That's it, that's the entire `mcmeta` file!

3. Inside the data folder is where you can now create or drag-and-drop a mod datapack to begin customizing


- A datapack will need to be added to the world during world creation or you can use a mod to always load it. There are a handful of mods available, but one example is: [Global Packs](https://www.curseforge.com/minecraft/mc-mods/drp-global-datapack) With this mod, all you have to do is:
1. Add it to your mods folder
2. Generate the config file and folders by loading the game once
3. Now you can use the generated folders to place your datapacks in. You can use any number of datapacks so don't feel like you have to put everything into a single pack

- Something to note: Using a mod to load datapacks, it will load it last so it has the final say on any changes you make. Running the `/datapack list` command in-game will show you all of the datapacks being run currently. Minecraft should appear first, next will be all of the mods, and then finally your own datapack








## [**Main Page**](/modpack-dev)
