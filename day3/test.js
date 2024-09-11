"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = void 0;
exports.equal = equal;
exports.printResult = printResult;
var name = 'Test case 1';
exports.name = name;
function equal(n1, n2) {
    if (n1 === n2) {
        return true;
    }
    else {
        return false;
    }
}
function printResult(num) {
    console.log(num);
}
printResult(equal(100, 200));
// Function type 
var myValues;
myValues = equal;
// myValues =10; it can not have this value because it of Function type
console.log('myvalues runs', myValues(400, 400));
