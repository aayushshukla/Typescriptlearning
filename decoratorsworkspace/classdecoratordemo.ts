// decorators are simple fucntion that are written @decorator
// it is a special kind of declaration that can be applied on 
// class , property , param , accessor and methods.

//compile decorator :  tsc --experimentalDecorator filename.ts

// ts config target  version : should equal or above es5 
//  "experimentalDecorators": true,                     /* Enable experimental support for legacy experimental decorators. */
// "emitDecoratorMetadata": true, 

function info(myargs: Function)
  {
      console.log('Employee logged in ')
      console.log(myargs)
  }

@info
class NewEmployee
  {
    empName :string

    constructor(ename:string)
      {
         this.empName = ename
      }
  }