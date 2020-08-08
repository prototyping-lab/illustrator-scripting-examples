# Adobe Illustrator Scripting Examples

This is a template for developing Adobe Illustrator Scripts in Visual Studio Code ...

![](https://user-images.githubusercontent.com/720669/89570895-196b2d80-d827-11ea-8f4d-2b1665c15164.png)

## Script Folders

- [sample-scripts](sample-scripts) — examples provided by Adobe
- [scripts](scripts) — examples from various sources
- [my-scripts](my-scripts) — add your scripts here

## Using the Debugger

- Install the `Extended Script Debugger` Plugin for VS-Code
- With the debugger you can walk through your scripts in a step-by-step fashion, or just run them as you would from Illustrator.
-  A couple of debug configurations are defined in `.vscode/launch.json`.  
 Feel free to add your own.

## Using Intellisense

- This repo uses the typings provided [here](https://github.com/ten-A/Types-for-Adobe)

## Using the Sample Scripts

- To play with the sample scripts folder provided by Adobe, copy the Illustrator example scripts to this project folder.
- On OSX this folder can be found at `"/Applications/Adobe Illustrator 2020/Scripting.localized/Sample Scripts.localized/"`

## Create your own Scripts

- You can use the `my-scripts/Javascript` folder to add your own `.jsx` files.
- Use the `Current Script` run configuration to debug the selected script.
- You can also write and compile Typescript inside the `my-scripts/Typescript` folder.

## Distribute your Script

- To use the scripts from Illustrator just drop them into your Script folder. On OSX the scripts folder can be found at `"/Applications/Adobe Illustrator 2020/Presets.localized/en_US/Scripts"`
- Once the scripts work just zip and distribute them ...

## Resources

Here are some resources to get you started with scripting for Illustrator:

### Official
- [Adobe Illustrator Scripting Guide](https://www.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/AI_ScriptGd_2017.pdf) (PDF)
- [Javascript Scripting Reference](https://www.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/Illustrator_JavaScript_Scripting_Reference_2017.pdf) (PDF)

### Inofficial
- [Illustrator Scripting Guide](https://illustrator-scripting-guide.readthedocs.io)
- [ScriptUI Dialog Builder](https://scriptui.joonas.me/)

## Scripts on Github

Here are some nice examples of Illustrator scripts hosted on github:

- [Illustrator Scripts by Hiroyuki Sato](https://github.com/shspage/illustrator-scripts)
- [Integrating Paper.js into Illustrator](https://github.com/shspage/plainCanvas)
- [Draw Outlines and AnchorPoints](https://github.com/Inventsable/Outliner)
- [Circle Packing Example](https://github.com/shspage/illustrator-circlepacking)

### More Resources

- [Illustrator Scripting with Python](https://github.com/lohriialo/illustrator-scripting-python)
- [Creating Plugins with Adobe CEP](https://github.com/Adobe-CEP/Getting-Started-guides)
