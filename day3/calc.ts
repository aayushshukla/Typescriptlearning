// import {nameoffunction1, function2} from modulename
// named import
// renaming of import 
// renaming div to division

import { addition , substraction,div as division,equal} from "./functiondemo1";
//import {equal} from "./test" //will not work as duplicate 
// default import 
// can import multiple value from default
import multiply from "./functiondemo1";
//namespace imports 

console.log (addition(10,20))
console.log(substraction(100,20))
console.log(multiply(10,50))
console.log(division(10,3))
console.log(equal(200,100))