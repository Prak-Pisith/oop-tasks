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
var VehicleType;
(function (VehicleType) {
    VehicleType["CAR"] = "Car";
    VehicleType["MOTORCYCLE"] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
var BaseVehicleProduct = /** @class */ (function () {
    function BaseVehicleProduct(type) {
        this.type = type;
    }
    BaseVehicleProduct.prototype.setupProduct = function (model, year) {
        this.model = model;
        this.year = year;
    };
    BaseVehicleProduct.prototype.getProductDetails = function () {
        return "This is a ".concat(this.type, " model ").concat(this.model, " and year ").concat(this.year);
    };
    return BaseVehicleProduct;
}());
var CarVehicleProduct = /** @class */ (function (_super) {
    __extends(CarVehicleProduct, _super);
    function CarVehicleProduct() {
        return _super.call(this, VehicleType.CAR) || this;
    }
    return CarVehicleProduct;
}(BaseVehicleProduct));
var MotorcycleProduct = /** @class */ (function (_super) {
    __extends(MotorcycleProduct, _super);
    function MotorcycleProduct() {
        return _super.call(this, VehicleType.MOTORCYCLE) || this;
    }
    return MotorcycleProduct;
}(BaseVehicleProduct));
// Factory Class
var VehicleProductFactory = /** @class */ (function () {
    function VehicleProductFactory() {
    }
    VehicleProductFactory.prototype.buildProduct = function (type) {
        switch (type) {
            case VehicleType.CAR:
                return new CarVehicleProduct();
                break;
            case VehicleType.MOTORCYCLE:
                return new MotorcycleProduct();
                break;
        }
    };
    return VehicleProductFactory;
}());
var vehicleProductFactory = new VehicleProductFactory();
var car1 = vehicleProductFactory.buildProduct(VehicleType.CAR);
car1.setupProduct('BMW', 2022);
var motor1 = vehicleProductFactory.buildProduct(VehicleType.MOTORCYCLE);
motor1.setupProduct('Honda MSX', 2019);
console.log(car1.getProductDetails());
console.log(motor1.getProductDetails());
