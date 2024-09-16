var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Audit(target, propertyName) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
// function AccessorDemo(target : any ,accessorpropertyname:string, descripty : propertyDescriptor)
function AccessorDemo(target, accessorpropertyname) {
    console.log('---Accessor Decorator -----');
    console.log(target);
    console.log(accessorpropertyname);
    //console.log(descriptor)
}
// using tsc  filedecorator.ts
//  function functioname(target : any , objname : any)
//   objname.name  for name of property or accessor propertyname
// target will undefined 
function MethodDecoratorDemo(target, name, descriptor) {
    console.log('Method Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function ParamDecoratorDemo(target, name, position) {
    console.log('Param Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
var Bottle = /** @class */ (function () {
    // multiple constructors are not allowed in a single in typescript similar to js 
    function Bottle(bn, p) {
        this.brandname = bn;
        this.price = p;
    }
    Bottle.prototype.showDetails = function (msg, msg2) {
        console.log(" ".concat(msg, "  ").concat(this.brandname, " bottle  cost ").concat(this.price));
    };
    __decorate([
        Audit
    ], Bottle.prototype, "brandname", void 0);
    __decorate([
        AccessorDemo
    ], Bottle.prototype, "price", void 0);
    __decorate([
        MethodDecoratorDemo,
        __param(1, ParamDecoratorDemo)
    ], Bottle.prototype, "showDetails", null);
    return Bottle;
}());
//   const b = new Bottle('Adidas',1000)
//   b.showDetails('Drink water and have a great health')
