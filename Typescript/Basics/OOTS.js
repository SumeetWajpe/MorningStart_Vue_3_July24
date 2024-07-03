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
var person = { name: "Djokovic", sport: "Tennis" };
// class
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.play = function () {
        console.log("Playing..");
    };
    return Person;
}());
// class Car {
//   name: string = "BMW";
//   speed: number = 200;
// }
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 200; }
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        //return "The car " + this.name + " is running @ " + this.speed + " kmph !";
        return "The car ".concat(this.name, " is running @ ").concat(this.speed, " kmph !");
    };
    return Car;
}());
// var carObj = new Car("AUDI", 300);
// console.log(carObj.accelerate());
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(name, speed, isArmed) {
        var _this = _super.call(this, name, speed) || this;
        _this.isArmed = isArmed;
        return _this;
    }
    JamesBondCar.prototype.accelerate = function () {
        return _super.prototype.accelerate.call(this) + "Is it armed ? " + this.isArmed;
    };
    return JamesBondCar;
}(Car));
var jbc = new JamesBondCar("Aston Martin", 400, true);
console.log(jbc.accelerate());
var p = {
    name: "Federer",
    sport: "Tennis",
    age: 41,
    play: function () { },
};
// Enhanced class Synatx
var EnhancedCar = /** @class */ (function () {
    function EnhancedCar(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 200; }
        this.name = name;
        this.speed = speed;
    }
    return EnhancedCar;
}());
var eCar = new EnhancedCar();
// Generics
function Swap(x, y) {
    var temp;
    temp = x;
    x = y;
    y = temp;
}
Swap(10, 20);
// Swap<string>(100, 200);
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point = new Point();
