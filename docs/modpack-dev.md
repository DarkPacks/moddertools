# How to make modpacks

## Environment (what you need to make a modpack)
- Text Editor / IDE (These programs will allow you to open and change config files)
    - [Sublime Text 3](https://www.sublimetext.com/3){:target="_blank"}
    - [Notepad++](https://notepad-plus-plus.org/){:target="_blank"}
    - [VSCode](https://code.visualstudio.com/){:target="_blank"}
    - [Atom](https://atom.io/){:target="_blank"}

## Launcher to play packs
[MultiMC](https://multimc.org/){:target="_blank"} - MultiMC is a launcher that will easily allow settings per instance

## Launcher for downloading and updating mods (either of these launchers will work fine, it’s preference)
- [GDLauncher](https://gdevs.io/){:target="_blank"}
- [Curseforge](https://curseforge.overwolf.com/){:target="_blank"}
- [NBT Explorer](https://github.com/jaquadro/NBTExplorer/releases){:target="_blank"} (sometimes you’ll need to edit files like level.dat and NBT Explorer will open and allow editing)
- [Region Locator Coordinate Tool](https://dinnerbone.com/minecraft/tools/coordinates/){:target="_blank"}
    - You will often need to locate a region file

## Sites to use for mods
- [Curseforge](https://www.curseforge.com/minecraft/mc-mods){:target="_blank"}

Version Control (While working on your project, it will be much easier to have a location you can host files for a variety of reasons.
Working with multiple people
Add more to list
Hosting an issue tracker and being able to easily reference while making commits. Helps keep track of everything


## Why should you have an issue tracker?!
- Makes it easy for users to let you know about any problems they encounter
- You should definitely have an issue template
    - Why? Because you will never know what version people are referring to
    - People will ignore the template. It happens. I try to give people the benefit of the doubt and assume they are unaware of how helpful the template information is

## How to setup a repo (will add a cursory list of how to get started)
- Readme file
- .gitignore
    - this will be helpful so you do not commit files like options.txt (TODO - expand more on this)
    - Public or Private? What works best?
    - This is your preference. I personally prefer to start projects privately and mark them as public once the pack goes live
    - Mod files (or .jar files) cannot be redistributed in most cases outside of their original post location (Curseforge, for example). Most every mod has a license that dictates what can be done with the mod. If you decide to use a public repository then you can not host mods. You will have to keep track of them in another way
    - List out ways of tracking mods (This doesn't really exist so you may just want to keep track of version numbers in your changelog)

## Changelogs
- To save yourself a lot of headaches later on, you should keep track of all your changes. 
- This changelog is not only to help you as the development process occurs, but also to keep players notified of what’s happening
- TODO - Elaborate further on where to post changelogs

## Crash Logs
- Most often, when the game crashes it will generate a crash log. Crash logs will be in the “crash-reports” folder located in the Root folder of your instance
Crash logs can seem pretty daunting at first, but once you get the hang of reading them you can solve your issues much more effectively
- TODO - dive further into crashlog sections to point out useful information
- [Breakdown of a Crash Log - thanks to 04Slash for the resource!](https://github.com/04Slash/Breaking-Down-Minecraft-Forge-Crash-Reports/wiki/Reading-Crash-Reports){:target="_blank"}

## Playtesting
- Most bad modpacks out there have never been played by the developer or testers. It's impossible to know how a feature or setting will work if you have never experienced it before
- If you don't have people to play the pack for you, that's fine. Playtest it yourself. You'll be much better off having played it yourself than just posting it and hoping it works or that someone finds bugs. All it takes is one really bad bug and that person will be turned off from the pack and possible any future projects you work on

## [**Useful Commands**](/commands)
## [**Glossary**](/glossary)