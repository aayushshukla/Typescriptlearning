function InfoFactory(msg:string)
   {
    console.log('---Info -----')
      return function(myargs:Function)
        {
           
           console.log(msg)
           console.log(myargs)
        }
   }

function MyTemplate(template:string , id : string)
   {
      console.log('--MyTemplate------')
      return function(constructor : Function)
         {
         
           let divid =  document.getElementById(id)
           divid.innerHTML = template
           divid.querySelector('h1')!.textContent = 'Typescript class'
         }
   }
 
@MyTemplate('<h1> My Class Decorator  </h1>','mydiv')
@InfoFactory('Person1 -Logging')
class NewEmployee1
  {
    empName :string

    constructor(ename:string)
      {
         this.empName = ename
      }
  }