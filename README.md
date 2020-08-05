# Adobe Illustrator Scripting Examples

- this is a template for developing Adobe Illustrator Scripts in Visual Studio Code

## Script Folders

- [sample-scripts](sample-scripts) — examples provided by Adobe
- [scripts](scripts) — examples from various sources
- [my-scripts](my-scripts) — add your scripts here

## Using the Debugger

- Install the `Extended Script Debugger` Plugin for VS-Code
- With the debugger you can walk through your scripts in a step-by-step fashion, or just run them as you would from Illustrator.
-  A couple of debug configurations are defined in `.vscode/launch.json`.  
 Feel free to add your own.

## Using the Sample Scripts

- To play with the sample scripts folder provided by Adobe, copy the Illustrator example scripts to this project folder.
- On OSX this folder can be found at `"/Applications/Adobe Illustrator 2020/Scripting.localized/Sample Scripts.localized/"`

## Create your own Scripts

- You can use the `my-scripts/Javascript` folder to add your own `.jsx` files.
- Use the `Current Script` run configuration to debug the selected script.
- You can also write and compile Typescript inside the `my-scripts/Typescript` folder.

## Deploy your Script

- Once the scripts work just distribute them ...
- Drop them into your Script folder.  
  On OSX the scripts folder can be found at `"/Applications/Adobe Illustrator 2020/Presets.localized/en_US/Scripts"`

