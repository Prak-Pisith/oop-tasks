class Vehicle {
  private make: string;
  private model: string;
  private year: number;

  constructor(
    make: string,
    model: string,
    year: number
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInformation(): void {
    console.log(`This is ${this.make} model ${this.model} and make in ${this.year}`);
  }

}

class Car extends Vehicle {
  private type: string;

  constructor(
    make: string,
    model: string,
    year: number,
    type: string,
  ) {
    super(make, model, year);
    this.type = type;
  }

  getType(): string {
    return this.type;
  }
}

class Motorcycle extends Vehicle {
  private edition: number;

  constructor(
    make: string,
    model: string,
    year: number,
    edition: number,
  ) {
    super(make, model, year);
    this.edition = edition;
  }

  getEdition(): number {
    return this.edition;
  }
}

// Objects
const standardCar = new Car('Car', 'BMW M4', 2009, 'Standard');
standardCar.getInformation();
console.log(standardCar.getType());

const secondEtMotor = new Motorcycle('Motorcycle', 'Haley Division', 1991, 2);
secondEtMotor.getInformation();
secondEtMotor.getEdition();


// ==> Move to Task 03