# Command Executor - VS Code Extension

The Command Executor extension enables the execution of commands within Visual Studio Code and its extensions through clickable links, which can be accessed from outside the editor environment or Markdown previews.

## Features

- Execute commands directly from links.
- Supports passing arguments to the commands.
- Supports commands that take multiple arguments.

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

## Passing multiple arguments

Some commands take more than one argument. Use `args0`, `args1`, `args2`, ... instead of `args` to pass them by position:

```md
[Set a context key](vscode://eliostruyf.execcommand?command=setContext&args0=myExtension.enabled&args1=true)
```

Leave out an index to skip that argument. For example, the Claude Code extension exposes `claude-vscode.editor.open` with a session id as its first argument and a prompt as its second. To open a new session with a prompt, omit `args0`:

```md
[Ask Claude](vscode://eliostruyf.execcommand?command=claude-vscode.editor.open&args1=Explain%20this%20repository)
```

A few notes:

- `args` takes precedence. When it is present, the numbered arguments are ignored.
- Indexes start at `0` and go up to `63`.
- Values are parsed as JSON when possible, so `args0=42` passes the number `42` and `args0={"key":"value"}` passes an object. Anything that is not valid JSON is passed as a string.
- An empty value such as `args0=` passes an empty string. To pass nothing at all, leave the index out.

## Where to get the command id?

1. Open the command palette (`ctrl+shift+p` or `cmd+shift+p`).
2. Search for the command you want to execute.
3. Hover over the command, and click on the gear icon.
4. Right-click on the command and select "Copy Command ID".

