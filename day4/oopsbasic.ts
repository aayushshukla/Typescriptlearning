
// OOPS -  true  : primitive data type  : int , float  exaple java
// and pure  everything is object example  small talk 

// object : it is an instance of class
//  is a real entity that have state (properties ) and behaviour
// object may show polymorphic  behaviour  
// object may use another object (inheritance or agreegation) 
// object stores data (state )

// class is a blueprint or a template
// it have logical existence not phyical 

// class name should start with uppercase
// class variable : a variable that is declared inside a class but outside any method
class Student
  {
    name :string ='' 
    rollNo : number =0
    subject : string[]=[]

    //method
    studentDetails():void {
        // this refers to current class object
         console.log(`${this.name} roll no is ${this.rollNo} subject taken ${this.subject} `)
    }

  }
// object of Student class
//  
   const student1 :Student = new Student()
   // attibute = method/ variable
   // objectrefbname. attribute   objectref.method()/ objectref.variable
  //console.log('Student roll no is ',new Student().rollNo)
  student1.name='Rohan'
  student1.rollNo=12
  student1.subject.push('Typescript')
  student1.studentDetails()
  const student2 = new Student()
  student2.name ='Aayush'
  student2.rollNo=1
  student2.subject.push('Java')
  student2.studentDetails()

