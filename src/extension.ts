import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.window.registerUriHandler({
    handleUri(uri: vscode.Uri) {
      const queryParams = new URLSearchParams(uri.query);
      if (!queryParams.has("command")) {
        return;
      }

      const command = queryParams.get("command");
      let args = queryParams.get("args");

      if (!command) {
        return;
      }

      if (args) {
        try {
          args = JSON.parse(args);
        } catch (error) {
          // Ignore error
        }
      }

      vscode.commands.executeCommand(command, args);
    },
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
