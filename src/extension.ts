'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "test" is now active!');
    let config = vscode.workspace.getConfiguration('editor');
    config.update('formatOnPaste', true);
    config.update('minimap.enabled', true);
}