
class Students
  {
    // access specifier : public , private , protected 
    // private access only inside a class can not access outside class
   // private variable or methods can not be inherited
    // public access to everywhere with in class , outside class , within namespace , outside namespace
    private  name :string ='' 
   // public rollno : number =0
     subject : string[]=[]

    // constructor : it is special method
    // it is used to intialise an object 
    // there are default constructor and user defined constructor
    // userdefined constructor : parameterized and non permeters
    // constructor will be invoked automitacally at time of object creatio
    // constructor( public name:string , private rollno:number , public subject :string[])
    //   {
    //        console.log('Constructor executes')
    //        this.name = name
    //        this.rollno = rollno
    //        this.subject =subject
    //   }

    // default constructor will be created only when there is not user defined constructor
    // creating user defined constructor 
    // readonly :  accesspecifier readonly variablename : type
    constructor(  name:string ,public readonly rollno: number,  subject :string[])
    {
         console.log('Constructor executes')
         this.name = name
         this.rollno = rollno
         this.subject =subject
    }


    //method
    studentDetails():void {
        // this refers to current class object
         console.log(`${this.name} roll no is ${this.rollno} subject taken ${this.subject} `)
    }

  }

  const student3 : Students = new Students('Swaroop',23,['java','c++'])
  const student4 : Students = new Students('Kavya',11,['uidesign','react'])
  // student3.rollno =32 show error  because it is readonly
   student3.studentDetails()
   student4.studentDetails()
   