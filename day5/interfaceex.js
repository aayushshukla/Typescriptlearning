var m1 = { itemName: 'Dosa', price: 50, jainOption: false };
var m2 = { itemName: 'Idly', price: 20, jainOption: true };
function addNewItem(it, p) {
    console.log("$new item add ".concat(it, "  price is ").concat(p));
}
var m3 = addNewItem;
m3('Momos', 50);
var emp3 = {
    empId: 1,
    empName: 'John',
    getSalary: function (id) {
        return '1000$';
    },
    getManagerName: function (id) {
        return 'KVR';
    },
    assestNo: 12345
};
emp3.empName = 'David';
console.log('Employee name', emp3.empName);
console.log(emp3.getManagerName(1));
console.log(emp3.getSalary(1));
// emp3.assestNo =6688  error it is read only property
console.log('AssestNo', emp3.assestNo);
var Employee = /** @class */ (function () {
    function Employee(id, name, ano) {
        this.empId = id;
        this.empName = name;
        this.assestNo = ano;
    }
    Employee.prototype.getSalary = function (id) {
        return '1000$';
    };
    Employee.prototype.getManagerName = function (id) {
        return 'KVR';
    };
    return Employee;
}());
var emp4 = new Employee(101, 'Swastik', 11223);
console.log(emp4.getManagerName(1));
console.log(emp4.getSalary(1));
