"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// namespace imports
// import * / function as namespace from modulename 
var mycalc = require("./functiondemo1");
var testing = require("./test");
console.log(mycalc);
console.log(mycalc.substraction(10, 3));
console.log(mycalc.equal(1900, 1000));
console.log('Test name is', testing.name);
console.log(testing.equal(200, 200));
console.log(testing.printResult(testing.equal(100, 500)));
