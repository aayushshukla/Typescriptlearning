var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student2 = /** @class */ (function () {
    function Student2(n, r, s) {
        this.name = '';
        this.rollNo = 0;
        this.subject = [];
        this.name = n;
        this.rollNo = r;
        this.subject = s;
    }
    Student2.welcomeMsg = function () {
        console.log('Welcome In New Journey Of Learning');
    };
    //method
    Student2.prototype.studentDetails = function () {
        // this refers to current class object
        console.log("".concat(this.name, " roll no is ").concat(this.rollNo, " subject taken ").concat(this.subject, " "));
    };
    // static members(variable as well as methods) can be access by Classname
    //  it makes program memory efficient
    Student2.collegeName = 'NMIMS';
    return Student2;
}());
var CSStudent = /** @class */ (function (_super) {
    __extends(CSStudent, _super);
    function CSStudent(n, r, s) {
        var _this = _super.call(this, n, r, s) || this;
        _this.n = n;
        _this.r = r;
        _this.s = s;
        _this.rollNo = 10;
        return _this;
    }
    CSStudent.welcomeMsg = function () {
        _super.welcomeMsg.call(this);
        console.log('Welcome In Worlds CPUS and JARS');
    };
    // this and static will not be used together
    CSStudent.prototype.getRollNo = function () {
        console.log('Roll enrolled in cs', this.rollNo);
        // super keyword : it refers to parent class object 
        _super.prototype.studentDetails.call(this);
    };
    CSStudent.cname = _super.collegeName;
    return CSStudent;
}(Student2));
//Student2.welcomeMsg()
console.log('College Name is', Student2.collegeName);
var s1 = new Student2('John', 11, ['C++', 'ReactJs']);
s1.studentDetails();
CSStudent.welcomeMsg();
var s2 = new CSStudent('Rohan', 10, ['C']);
s2.getRollNo();
console.log('CS collegename', CSStudent.cname);
