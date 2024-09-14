var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function InfoFactory(msg) {
    console.log('---Info -----');
    return function (myargs) {
        console.log(msg);
        console.log(myargs);
    };
}
function MyTemplate(template, id) {
    console.log('--MyTemplate------');
    return function (constructor) {
        var divid = document.getElementById(id);
        divid.innerHTML = template;
        divid.querySelector('h1').textContent = 'Typescript class';
    };
}
var NewEmployee1 = /** @class */ (function () {
    function NewEmployee1(ename) {
        this.empName = ename;
    }
    NewEmployee1 = __decorate([
        MyTemplate('<h1> My Class Decorator  </h1>', 'mydiv'),
        InfoFactory('Person1 -Logging')
    ], NewEmployee1);
    return NewEmployee1;
}());
