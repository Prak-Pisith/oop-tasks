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
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Vehicle.prototype.getInformation = function () {
        console.log("This is ".concat(this.make, " model ").concat(this.model, " and make in ").concat(this.year));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, type) {
        var _this = _super.call(this, make, model, year) || this;
        _this.type = type;
        return _this;
    }
    Car.prototype.getType = function () {
        return this.type;
    };
    return Car;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, edition) {
        var _this = _super.call(this, make, model, year) || this;
        _this.edition = edition;
        return _this;
    }
    Motorcycle.prototype.getEdition = function () {
        return this.edition;
    };
    return Motorcycle;
}(Vehicle));
// Objects
var standardCar = new Car('Car', 'BMW M4', 2009, 'Standard');
standardCar.getInformation();
console.log(standardCar.getType());
var secondEtMotor = new Motorcycle('Motorcycle', 'Haley Division', 1991, 2);
secondEtMotor.getInformation();
secondEtMotor.getEdition();
// ==> Move to Task 03
