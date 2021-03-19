// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
// const fs = require('fs');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

// var command_flag = 0, run_flag = 0;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hexo-butterfly-snippets" is now active!');

	// context.subscriptions.push(disposable);
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((e) => {
        if (vscode.window.activeTextEditor.document.languageId == "markdown")
            if (e.contentChanges[0].text == ">")
                vscode.commands.executeCommand("editor.action.triggerSuggest");
    }))
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
