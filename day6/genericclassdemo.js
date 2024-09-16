var MyClass = /** @class */ (function () {
    // _ , res =  functionname(10,20)
    function MyClass(n, v) {
        this._myname = n;
        this._val = v;
    }
    MyClass.prototype.setData = function (myname, val) {
        this._myname = myname;
        this._val = val;
    };
    MyClass.prototype.getValue = function () {
        return this._myname;
    };
    MyClass.prototype.toString = function () {
        return "".concat(this._myname, " value is ").concat(this._val, " ");
    };
    return MyClass;
}());
var myobj = new MyClass('Aayush', 1);
console.log(myobj.toString());
myobj.setData('John', 10);
console.log(myobj.toString());
var myobj1 = new MyClass(300, 333);
console.log(myobj1.toString());
myobj1.setData(500, 10);
console.log(myobj1.getValue());
