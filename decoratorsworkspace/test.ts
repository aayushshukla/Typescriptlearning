// experimentalDecorators 2 
function Audit1(target :any , propertyName : any )
  {
     console.log('Property decorator')
     console.log(target, propertyName.name)
  }
// function AccessorDemo(target : any ,accessorpropertyname:string, descripty : propertyDescriptor)
 function AccessorDemo1(target : any ,accessorpropertyname:any)
  {
    console.log('---Accessor Decorator -----')
    console.log(target)
    console.log(accessorpropertyname.name)
//      //console.log(descriptor)
 }
// using tsc  filedecorator.ts
//  function functioname(target : any , objname : any)
//   objname.name  for name of property or accessor propertyname
// target will undefined 
  function MethodDecoratorDemo1(target:any , name : any)
   {
       console.log('Method Decorator')
       console.log(target)
        console.log(name.name)
//         console.log(descriptor)
    }

    function ParamDecoratorDemo1(target:any,name:string|symbol , position : number)
      {
          console.log('Param Decorator')
         console.log(target)
         console.log(name)
        console.log(position)
    //        // position of parameter it starts with 0
      }

class Bottle1
  {
    @Audit1  
     brandname :string
     @AccessorDemo1
     private price :number

   
    // multiple constructors are not allowed in a single in typescript similar to js 
     constructor(bn:string,p :number)
       {
         this.brandname = bn
         this.price =p
       }

      @MethodDecoratorDemo1
       showDetails( msg:string , 
         msg2:string)
         {
            console.log(` ${msg}  ${this.brandname} bottle  cost ${this.price}`)
         }
  }

//   const b = new Bottle('Adidas',1000)
//   b.showDetails('Drink water and have a great health')

