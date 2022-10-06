# Kaholo JSON Plugin
This plugin allows JSON files processing. Reading their contents and saving JSONs to files.

## Prerequisites
This plugin works both with Kaholo v4 and v5.

## Plugin Installation
For download, installation, upgrade, downgrade and troubleshooting of plugins in general, see [INSTALL.md](./INSTALL.md).

## Method: Read JSON file
This method reads JSON file content and returns it in the action's output

### Parameters
Required parameters have an asterisk (*) next to their names.
* File path * - path pointing to the file to read from

## Method: Write JSON file
This method saves a JSON object to a file.

### Parameters
Required parameters have an asterisk (*) next to their names.
* File path * - path pointing to the file to write the JSON to
* JSON * - string containing JSON object to be saved in the file
