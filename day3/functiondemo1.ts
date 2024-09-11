// named function - declare , define and call
// function functionname (arg1,arg2...argn) : returntype { defination}
export function addition(n1:number,n2:number): void {
    console.log(n1+n2)

}

export function substraction(n1:number,n2:number): number {
    return n1-n2;

}

 function multiply(n1:number,n2:number): number {
    return n1*n2;

}

function div(n1:number,n2:number): number  {
    if(n1!=0){
      return n1/n2;
    }
    else 
      {
         return -1;
      }

}
function eq(n1:number , n2:number):boolean
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
// export statement
export 
   {

      div,
      eq as equal  // alias name , rename export
      // renaming eq as equal
   }
// default export : export default functionname/value 
// default export will be a single value or function 
export default multiply


// optional argument =  argumentname ?: type
// required parameter should be writter first 
// optional parameter follows required parameter
function generateUserName(fn:string,md:string,ln ?:string):string
    {
        return fn+''+md+''+ln
    }

// default parameter  argumentname : type = defaultvalue
// same parameter can not be default and optional at a same time 
function generateUserName1(fn:string,ln:string='Doe'):string
    {
        return fn+''+ln
    }


// type interference 
// anonymous function
let sumoftwonumbers = function(x:number, y: number)
   {
            return x+y
   }

// rest parameters ...parametername: type
// A rest parameter must be last in a parameter list
function showUser(firstuser:string,...userlist:string[])
   {
    console.log('---------First Users------------------')
    console.log(firstuser)
    console.log('---------Printing Users------------------')
     for(let i:number=0;i<userlist.length;i++)
           {
               console.log(userlist[i])
           }
   }

addition(10,20)
let fullname =generateUserName('Sachin','Ramesh','Tendulkar')
console.log('Username is',fullname)

console.log(generateUserName('Aayush','Shukla'))

console.log(generateUserName1('John'))

showUser('Adithya')
showUser('akash','alden')
showUser('arshad','kavya','swaroop','kausthubh')