var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// experimentalDecorators 2 
function Audit1(target, propertyName) {
    console.log('Property decorator');
    console.log(target, propertyName.name);
}
// function AccessorDemo(target : any ,accessorpropertyname:string, descripty : propertyDescriptor)
function AccessorDemo1(target, accessorpropertyname) {
    console.log('---Accessor Decorator -----');
    console.log(target);
    console.log(accessorpropertyname.name);
    //      //console.log(descriptor)
}
// using tsc  filedecorator.ts
//  function functioname(target : any , objname : any)
//   objname.name  for name of property or accessor propertyname
// target will undefined 
function MethodDecoratorDemo1(target, name) {
    console.log('Method Decorator');
    console.log(target);
    console.log(name.name);
    //         console.log(descriptor)
}
function ParamDecoratorDemo1(target, name, position) {
    console.log('Param Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
    //        // position of parameter it starts with 0
}
var Bottle1 = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _brandname_decorators;
    var _brandname_initializers = [];
    var _brandname_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    var _showDetails_decorators;
    return _a = /** @class */ (function () {
            // multiple constructors are not allowed in a single in typescript similar to js 
            function Bottle1(bn, p) {
                this.brandname = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _brandname_initializers, void 0));
                this.price = (__runInitializers(this, _brandname_extraInitializers), __runInitializers(this, _price_initializers, void 0));
                __runInitializers(this, _price_extraInitializers);
                this.brandname = bn;
                this.price = p;
            }
            Bottle1.prototype.showDetails = function (msg, msg2) {
                console.log(" ".concat(msg, "  ").concat(this.brandname, " bottle  cost ").concat(this.price));
            };
            return Bottle1;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _brandname_decorators = [Audit1];
            _price_decorators = [AccessorDemo1];
            _showDetails_decorators = [MethodDecoratorDemo1];
            __esDecorate(_a, null, _showDetails_decorators, { kind: "method", name: "showDetails", static: false, private: false, access: { has: function (obj) { return "showDetails" in obj; }, get: function (obj) { return obj.showDetails; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _brandname_decorators, { kind: "field", name: "brandname", static: false, private: false, access: { has: function (obj) { return "brandname" in obj; }, get: function (obj) { return obj.brandname; }, set: function (obj, value) { obj.brandname = value; } }, metadata: _metadata }, _brandname_initializers, _brandname_extraInitializers);
            __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
//   const b = new Bottle('Adidas',1000)
//   b.showDetails('Drink water and have a great health')
