class MyClass<T,U=string>
  {
     private _myname : T | undefined
     private  _val  : U 
     // _ , res =  functionname(10,20)

     constructor(n: T , v: U)
       {
         this._myname = n
         this._val = v
       }

       public setData(myname:T, val:U)
         {
            this._myname = myname
            this._val =val
         }

         public getValue() : T | U | undefined 
            {
                 return this._myname

            }

        public toString() :string  
           {
             return `${this._myname} value is ${this._val} `
           }
  }

  let myobj = new MyClass('Aayush',1)
  console.log(myobj.toString())
  myobj.setData('John',10)
  console.log(myobj.toString())

  let myobj1 = new MyClass(300,333)
  console.log(myobj1.toString())
  myobj1.setData(500,10)
  
  console.log(myobj1.getValue())