function Audit(target :any , propertyName : string | symbol )
  {
     console.log('Property decorator')
     console.log(target, propertyName)
  }
// function AccessorDemo(target : any ,accessorpropertyname:string, descripty : propertyDescriptor)
function AccessorDemo(target : any ,accessorpropertyname:string)
  {
     console.log('---Accessor Decorator -----')
     console.log(target)
     console.log(accessorpropertyname)
     //console.log(descriptor)
  }
// using tsc  filedecorator.ts
//  function functioname(target : any , objname : any)
//   objname.name  for name of property or accessor propertyname
// target will undefined 
  function MethodDecoratorDemo(target:any , name : string | symbol , descriptor : PropertyDescriptor)
    {
        console.log('Method Decorator')
        console.log(target)
        console.log(name)
        console.log(descriptor)
    }

    function ParamDecoratorDemo(target:any,name:string|symbol , position : number)
       {
           console.log('Param Decorator')
           console.log(target)
           console.log(name)
           console.log(position)
           // position of parameter it starts with 0
       }

class Bottle
  {
    @Audit  
     brandname :string
     @AccessorDemo
     private price :number

   
    // multiple constructors are not allowed in a single in typescript similar to js 
     constructor(bn:string,p :number)
       {
         this.brandname = bn
         this.price =p
       }

      @MethodDecoratorDemo
       showDetails( msg:string , @ParamDecoratorDemo msg2:string)
         {
            console.log(` ${msg}  ${this.brandname} bottle  cost ${this.price}`)
         }
  }

//   const b = new Bottle('Adidas',1000)
//   b.showDetails('Drink water and have a great health')


