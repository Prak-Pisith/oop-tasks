// Interface
interface Animal {
  makeSound(): void;
}

// Classes
class Dog implements Animal {
  makeSound(): void {
    console.log('Woof Woof !!!');
  }
}

class Cat implements Animal {
  makeSound(): void {
    console.log('Meowwww Meow !!!');
  }
}

// Objects
const demoDog = new Dog();
const demoCat = new Cat();
demoDog.makeSound();
demoCat.makeSound();