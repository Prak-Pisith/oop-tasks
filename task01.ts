// Class 
class Person {
  private name: string;
  private age: number;
  private gender: string;

  constructor(
    name: string,
    age: number,
    gender: string
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getInformation(): void {
    console.log(`This is ${this.name} gender: ${this.gender} and ${this.age} years old.`);
  }
}

// Objects
const david = new Person('David', 25, 'Male');
const riya = new Person('Riya', 22, 'Female');
const matt = new Person('Matt', 19, 'Transgender');

// Displays information
david.getInformation();
riya.getInformation();
matt.getInformation();