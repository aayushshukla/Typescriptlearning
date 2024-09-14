
interface foodoption
  {
      jainOption : boolean
  }
interface menu extends foodoption
  {
     itemName : string,
     price : number
  }

let m1 : menu  = { itemName: 'Dosa' , price:50 , jainOption : false}
let m2 : menu = {itemName : 'Idly' ,price: 20 , jainOption: true}

interface newMenu
  {
     (item:string , price : number) : void
  }
 function addNewItem(it : string , p : number)
    {
        console.log(`$new item add ${it}  price is ${p}`)
    }
  let m3 : newMenu = addNewItem
  m3('Momos',50)

  interface MyEmployee
  {

    empId ?: number, // id is optional
    empName : string ,
    getSalary: (n :number) => string ,
    getManagerName(id:number) :string,
    readonly assestNo : number
  }

  let emp3 : MyEmployee = 
    {
       empId:1,
        empName :'John',
        getSalary : (id:number) =>{
              return '1000$'
        },
        getManagerName : function(id:number)
          {
             return 'KVR'
          },
          assestNo:12345
    }
emp3.empName ='David'
console.log('Employee name',emp3.empName)
console.log(emp3.getManagerName(1))
console.log(emp3.getSalary(1))
// emp3.assestNo =6688  error it is read only property
console.log('AssestNo',emp3.assestNo)
// class Childclassname implements Interfacename1,interfacename2..n
class Employee implements MyEmployee
   {
    empId ?: number // id is optional
    empName : string 
    readonly assestNo: number
      constructor(id:number, name: string ,ano:number )
         {
            this.empId=id
            this.empName=name
            this.assestNo =ano
         }

    getSalary(id:number) {
            return '1000$'
      }
      getManagerName(id:number) 
        {
           return 'KVR'
        }
   }

   const emp4 = new Employee(101,'Swastik',11223)
   console.log(emp4.getManagerName(1))
   console.log(emp4.getSalary(1))
