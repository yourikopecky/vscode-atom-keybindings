'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "test" is now active!');
    let config = vscode.workspace.getConfiguration('editor');
    config.update('formatOnPaste', true);
    config.update('minimap.enabled', true);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map