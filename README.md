# Command Executor - VS Code Extension

The Command Executor extension enables the execution of commands within Visual Studio Code and its extensions through clickable links, which can be accessed from outside the editor environment or Markdown previews.

## Features

- Execute commands directly from links.
- Supports passing arguments to the commands.

## Getting Started

1. Install the extension from the VS Code marketplace.
2. Once installed, commands can be executed by clicking on links formatted as `vscode://eliostruyf.execcommand?command=<command id>&args=<args>`.

## Example

Execute the command to create a new untitled file:

```md
[New untitled file](vscode://eliostruyf.execcommand?command=workbench.action.files.newUntitledFile)
```

Execute the command to open the simple browser with a specific URL:

```md
[Show simple browser](vscode://eliostruyf.execcommand?command=simpleBrowser.show&args=https://frontmatter.codes/)
```

## Where to get the command id?

1. Open the command palette (`ctrl+shift+p` or `cmd+shift+p`).
2. Search for the command you want to execute.
3. Hover over the command, and click on the gear icon.
4. Right-click on the command and select "Copy Command ID".

