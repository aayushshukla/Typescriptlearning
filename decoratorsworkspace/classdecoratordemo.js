// decorators are simple fucntion that are written @decorator
// it is a special kind of declaration that can be applied on 
// class , property , param , accessor and methods.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//compile decorator :  tsc --experimentalDecorator filename.ts
// ts config target  version : should equal or above es5 
//  "experimentalDecorators": true,                     /* Enable experimental support for legacy experimental decorators. */
// "emitDecoratorMetadata": true, 
function info(myargs) {
    console.log('Employee logged in ');
    console.log(myargs);
}
var NewEmployee = /** @class */ (function () {
    function NewEmployee(ename) {
        this.empName = ename;
    }
    NewEmployee = __decorate([
        info
    ], NewEmployee);
    return NewEmployee;
}());
