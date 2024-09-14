class Student2
  {
    // static members(variable as well as methods) can be access by Classname
    //  it makes program memory efficient
    static  collegeName : string ='NMIMS'
    name :string ='' 
   public rollNo : number =0
    subject : string[]=[]

    constructor(n: string , r: number,s:string[])
      {
            this.name =n
            this.rollNo = r
            this.subject =s
      }

    static welcomeMsg()
       {
            console.log('Welcome In New Journey Of Learning')
       }
    //method
    studentDetails():void {
        // this refers to current class object
         console.log(`${this.name} roll no is ${this.rollNo} subject taken ${this.subject} `)
     }


  }
  // Only public and protected methods of the base class are accessible via the 'super' keyword.
  class CSStudent extends Student2
    {
        rollNo: number=10
        //static cname = super.collegeName

        constructor(public n :string , public r : number , public s :string[])
        {
            
          super(n,r,s)
         
        }
        static welcomeMsg(): void {
            super.welcomeMsg()
            console.log('Welcome In Worlds CPUS and JARS')
        }
// this and static will not be used together
       getRollNo()
          {
              
               console.log('Roll enrolled in cs',this.rollNo) 
               // super keyword : it refers to parent class object 
               super.studentDetails()
          }
    }

  //Student2.welcomeMsg()
  console.log('College Name is',Student2.collegeName)
  const s1 = new Student2('John',11,['C++','ReactJs'])
  s1.studentDetails()
  CSStudent.welcomeMsg()
  const s2 = new CSStudent('Rohan',10,['C'])
  s2.getRollNo()
  

  
