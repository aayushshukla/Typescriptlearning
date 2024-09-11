// namespace imports
// import * / function as namespace from modulename 
import * as mycalc from "./functiondemo1"
import * as testing from "./test"
console.log(mycalc)
console.log(mycalc.substraction(10,3))
console.log(mycalc.equal(1900,1000))
console.log('Test name is',testing.name)
console.log(testing.equal(200,200))

console.log(testing.printResult(testing.equal(100,500)))

