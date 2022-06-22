"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var readline_sync_1 = __importDefault(require("readline-sync"));
var inputQueue = [];
function nextLine(promptText) {
    if (promptText === void 0) { promptText = ''; }
    var input;
    while (true) {
        input = readline_sync_1["default"].question(promptText);
        if (input === '\u0003') {
            process.exit();
        }
        else if (input.trim() !== '') {
            return input.trim();
        }
    }
}
exports.nextLine = nextLine;
function prompt(promptText) {
    return nextLine(promptText);
}
exports.prompt = prompt;
function next() {
    if (hasNext()) {
        return inputQueue.splice(0, 1)[0];
    }
    var input = nextLine();
    var strings = input.split(/\s+/);
    for (var i = 1; i < strings.length; i++) {
        inputQueue.push(strings[i]);
    }
    return strings[0];
}
exports.next = next;
function hasNext() {
    return inputQueue.length !== 0;
}
exports.hasNext = hasNext;
function nextInt(radix) {
    if (radix === void 0) { radix = 10; }
    var num = parseInt(next(), radix);
    if (isNaN(num)) {
        throw new Error('Expected Integer');
    }
    return num;
}
exports.nextInt = nextInt;
function nextFloat() {
    var num = parseFloat(next());
    if (isNaN(num)) {
        throw new Error('Expected Float');
    }
    return num;
}
exports.nextFloat = nextFloat;
exports["default"] = {
    nextLine: nextLine,
    prompt: prompt,
    next: next,
    hasNext: hasNext,
    nextInt: nextInt,
    nextFloat: nextFloat
};
