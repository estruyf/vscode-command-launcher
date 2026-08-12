import * as vscode from "vscode";

const INDEXED_ARG = /^args(\d+)$/;
const MAX_ARG_INDEX = 63;

function parseValue(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch (error) {
    // Not JSON, use the raw value
    return value;
  }
}

function getArgs(queryParams: URLSearchParams): unknown[] {
  const args = queryParams.get("args");
  if (args !== null) {
    return [parseValue(args)];
  }

  const indexed: [number, string][] = [];
  for (const [key, value] of queryParams) {
    const match = INDEXED_ARG.exec(key);
    if (!match) {
      continue;
    }

    const index = Number(match[1]);
    if (index > MAX_ARG_INDEX) {
      continue;
    }

    indexed.push([index, value]);
  }

  if (indexed.length === 0) {
    return [];
  }

  // Missing indexes stay `undefined`, that is how you skip an argument
  const length = Math.max(...indexed.map(([index]) => index)) + 1;
  const positional: unknown[] = new Array(length).fill(undefined);
  for (const [index, value] of indexed) {
    positional[index] = parseValue(value);
  }

  return positional;
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.window.registerUriHandler({
    handleUri(uri: vscode.Uri) {
      const queryParams = new URLSearchParams(uri.query);

      const command = queryParams.get("command");
      if (!command) {
        return;
      }

      vscode.commands.executeCommand(command, ...getArgs(queryParams));
    },
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
