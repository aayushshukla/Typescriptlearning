let name ='Test case 1'
function equal(n1:number , n2:number):boolean
  {
    if(n1===n2)
          {
             return true;
          }
    else
       {
          return false;
       }
  }


  function printResult(num:boolean):void
     {
        console.log(num)
     }

     printResult(equal(100,200))

     // Function type 
let myValues : Function ;
myValues =equal;
// myValues =10; it can not have this value because it of Function type
console.log('myvalues runs',myValues(400,400))
  export
    {
        equal,
        printResult,
        name

    }