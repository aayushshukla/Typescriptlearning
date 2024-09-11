"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addition = addition;
exports.substraction = substraction;
exports.div = div;
exports.equal = eq;
// named function - declare , define and call
// function functionname (arg1,arg2...argn) : returntype { defination}
function addition(n1, n2) {
    console.log(n1 + n2);
}
function substraction(n1, n2) {
    return n1 - n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function div(n1, n2) {
    if (n1 != 0) {
        return n1 / n2;
    }
    else {
        return -1;
    }
}
function eq(n1, n2) {
    if (n1 === n2) {
        return true;
    }
    else {
        return false;
    }
}
// default export : export default functionname/value 
// default export will be a single value or function 
exports.default = multiply;
// optional argument =  argumentname ?: type
// required parameter should be writter first 
// optional parameter follows required parameter
function generateUserName(fn, md, ln) {
    return fn + '' + md + '' + ln;
}
// default parameter  argumentname : type = defaultvalue
// same parameter can not be default and optional at a same time 
function generateUserName1(fn, ln) {
    if (ln === void 0) { ln = 'Doe'; }
    return fn + '' + ln;
}
// type interference 
// anonymous function
var sumoftwonumbers = function (x, y) {
    return x + y;
};
// rest parameters ...parametername: type
// A rest parameter must be last in a parameter list
function showUser(firstuser) {
    var userlist = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        userlist[_i - 1] = arguments[_i];
    }
    console.log('---------First Users------------------');
    console.log(firstuser);
    console.log('---------Printing Users------------------');
    for (var i = 0; i < userlist.length; i++) {
        console.log(userlist[i]);
    }
}
addition(10, 20);
var fullname = generateUserName('Sachin', 'Ramesh', 'Tendulkar');
console.log('Username is', fullname);
console.log(generateUserName('Aayush', 'Shukla'));
console.log(generateUserName1('John'));
showUser('Adithya');
showUser('akash', 'alden');
showUser('arshad', 'kavya', 'swaroop', 'kausthubh');
