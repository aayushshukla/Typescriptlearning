var Students = /** @class */ (function () {
    // constructor : it is special method
    // it is used to intialise an object 
    // there are default constructor and user defined constructor
    // userdefined constructor : parameterized and non permeters
    // constructor will be invoked automitacally at time of object creatio
    // constructor( public name:string , public rollno:number , public subject :string[])
    //   {
    //        console.log('Constructor executes')
    //        this.name = name
    //        this.rollno = rollno
    //        this.subject =subject
    //   }
    function Students(name, rollno, subject) {
        // access specifier : public , private , protected 
        // private access only inside a class can not access outside class
        // public access to everywhere with in class , outside class , within namespace , outside namespace
        this.name = '';
        this.rollno = 0;
        this.subject = [];
        console.log('Constructor executes');
        this.name = name;
        this.rollno = rollno;
        this.subject = subject;
    }
    //method
    Students.prototype.studentDetails = function () {
        // this refers to current class object
        console.log("".concat(this.name, " roll no is ").concat(this.rollno, " subject taken ").concat(this.subject, " "));
    };
    return Students;
}());
var student3 = new Students('Swaroop', 23, ['java', 'c++']);
var student4 = new Students('Kavya', 11, ['uidesign', 'react']);
student3.rollno = 32;
student3.studentDetails();
student4.studentDetails();
