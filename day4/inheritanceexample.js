// two types of relationships is -a  and has -a
//  is- a  : inheritance and has- a : agrregation
//  c1________c2   
// animal ___________ mammal
// tyre _______ panel
// why inheritance : reusebility of code , overriding of method
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
var Movie = /** @class */ (function () {
    // constructor are not inherited they are invoked by super()
    function Movie(msg) {
        this.year = 1886;
        console.log('Movies world......', msg);
    }
    Movie.prototype.welcomeMsg = function () {
        console.log('Welcome in world of movies');
    };
    return Movie;
}());
// class Childclassname extends ParentName
var Hollywood = /** @class */ (function (_super) {
    __extends(Hollywood, _super);
    function Hollywood() {
        return _super.call(this, 'Welcome in hollywood movies') || this;
    }
    Hollywood.prototype.action = function () {
        console.log('Action scenes make viewer excited');
    };
    return Hollywood;
}(Movie));
var Bollwood = /** @class */ (function (_super) {
    __extends(Bollwood, _super);
    function Bollwood() {
        // typescript super() constructor is required in child class constructor
        return _super.call(this, 'Welcome in bollywood movies') || this; // super() constructor invokes immediate  parent class constructor
    }
    Bollwood.prototype.songs = function () {
        console.log('Songs are musical to ears ');
    };
    // overriding welcomeMsg
    Bollwood.prototype.welcomeMsg = function () {
        console.log('Bollywood Movies Era....');
    };
    return Bollwood;
}(Movie));
var johnwick = new Hollywood();
//console.log('Movies starting year',johnwick.year) private  members can not be inherited
johnwick.welcomeMsg();
johnwick.action();
var kgf = new Bollwood();
kgf.welcomeMsg();
kgf.songs();
var movie = new Movie('My Movie world');
movie.welcomeMsg();
