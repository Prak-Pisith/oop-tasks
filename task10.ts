interface VehicleFactory {
  getProductDetails(): string;
}

enum VehicleType {
  CAR = 'Car',
  MOTORCYCLE = 'Motorcycle'
}

class BaseVehicleProduct implements VehicleFactory {
  private type: VehicleType;
  private model: string;
  private year: number;

  constructor(
    type: VehicleType
  ) {
    this.type = type;
  }

  setupProduct(
    model: string,
    year: number
  ) {
    this.model = model;
    this.year = year;
  }

  getProductDetails(): string {
    return `This is a ${this.type} model ${this.model} and year ${this.year}`;
  }
}

class CarVehicleProduct extends BaseVehicleProduct {
  constructor() { super(VehicleType.CAR); }
}

class MotorcycleProduct extends BaseVehicleProduct {
  constructor() { super(VehicleType.MOTORCYCLE); }
}

// Factory Class

class VehicleProductFactory {
  buildProduct (type: VehicleType) {
    switch (type) {
      case VehicleType.CAR:
        return new CarVehicleProduct();
        break;
      case VehicleType.MOTORCYCLE:
        return new MotorcycleProduct();
        break;
    }
  }
}

const vehicleProductFactory = new VehicleProductFactory();

const car1 = vehicleProductFactory.buildProduct(VehicleType.CAR);
car1.setupProduct('BMW', 2022);

const motor1 = vehicleProductFactory.buildProduct(VehicleType.MOTORCYCLE);
motor1.setupProduct('Honda MSX', 2019);

console.log(car1.getProductDetails());
console.log(motor1.getProductDetails());