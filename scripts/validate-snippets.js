"use strict";

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const packagePath = path.join(rootDir, "package.json");
const packageJson = readJson(packagePath);

const contributed = packageJson.contributes && Array.isArray(packageJson.contributes.snippets)
    ? packageJson.contributes.snippets
    : [];

const uniqueSnippetPaths = new Set();

for (const item of contributed) {
    if (!item.language || !item.path) {
        throw new Error("Every contributed snippet must include language and path.");
    }

    const snippetPath = path.resolve(rootDir, item.path);
    if (!fs.existsSync(snippetPath)) {
        throw new Error(`Snippet file not found: ${item.path}`);
    }

    uniqueSnippetPaths.add(snippetPath);
}

for (const snippetPath of uniqueSnippetPaths) {
    const snippets = readJson(snippetPath);
    for (const [name, snippet] of Object.entries(snippets)) {
        if (!snippet.prefix) throw new Error(`${name} has no prefix in ${path.relative(rootDir, snippetPath)}`);
        if (!Array.isArray(snippet.body)) throw new Error(`${name} body must be an array in ${path.relative(rootDir, snippetPath)}`);
    }
}

console.log(`Validated ${uniqueSnippetPaths.size} snippet files and ${contributed.length} language contributions.`);

function readJson(filePath) {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}
