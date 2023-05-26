# Kaholo JSON Plugin
This plugin extends Kaholo's capabilities to parsing JSON documents, reading and writing JSON files, and exposing them to the code layer.

## Plugin Installation
For download, installation, upgrade, downgrade and troubleshooting of plugins in general, see [INSTALL.md](./INSTALL.md).

## Method: Read JSON file
This method reads JSON file content and returns it in the action's Final Result in the Kaholo executions view. This also exposes the document in the code layer to downstream actions in the pipeline as `kaholo.actions.json1.result`, where `json1` is the ID of the specific action in the pipeline.

### Parameter: File Path
Path on the Kaholo agent to a file containing text parseable as a JSON document.

## Method: Write JSON file
This method saves a JSON document or object to a file.

### Parameter: File Path
Path to a file on the Kaholo agent where the JSON file will be written in single-line format.

### Parameter: JSON Document
A text document that is parseable as JSON or a JavaScript object if using the code layer.
 
### Parameter: Return Document As Final Result
If enabled, the JSON Document written to file will also be returned as the action's Final Result in the Kaholo executions view. This also exposes the document in the code layer to downstream actions in the pipeline as `kaholo.actions.json1.result`, where `json1` is the ID of the specific action in the pipeline.
