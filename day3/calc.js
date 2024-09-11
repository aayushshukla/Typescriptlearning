"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {nameoffunction1, function2} from modulename
// named import
// renaming div to division
var functiondemo1_1 = require("./functiondemo1");
// default import 
// can import multiple value from default
var functiondemo1_2 = require("./functiondemo1");
console.log((0, functiondemo1_1.addition)(10, 20));
console.log((0, functiondemo1_1.substraction)(100, 20));
console.log((0, functiondemo1_2.default)(10, 50));
console.log((0, functiondemo1_1.div)(10, 3));
console.log((0, functiondemo1_1.equal)(200, 100));
