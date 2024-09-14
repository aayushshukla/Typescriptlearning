// abstract class are incomplete classes 
// we can not create object for abstract classes
// They may or may not have abstract method
// abstract method : method have declaration no defination
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
var Shape = /** @class */ (function () {
    function Shape(side) {
        this.side = side;
    }
    return Shape;
}());
// Cannot create an instance of an abstract class
//let s : Shape = new Shape(10)
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(r) {
        // 'super' must be called before accessing 'this' in the constructor of a derived class.
        var _this = _super.call(this, r) || this;
        _this.radius = r;
        return _this;
    }
    Circle.prototype.area = function () {
        console.log(Math.PI * this.radius * this.radius);
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(s) {
        // 'super' must be called before accessing 'this' in the constructor of a derived class.
        var _this = _super.call(this, s) || this;
        _this.side = s;
        return _this;
    }
    Square.prototype.area = function () {
        console.log(this.side * this.side);
    };
    return Square;
}(Shape));
var c = new Circle(5);
c.area();
var sq = new Square(10);
console.log('Area of sq');
sq.area();
