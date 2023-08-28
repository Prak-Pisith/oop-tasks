// Classes
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.makeSound = function () {
        console.log('Woof Woof !!!');
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.makeSound = function () {
        console.log('Meowwww Meow !!!');
    };
    return Cat;
}());
// Objects
var demoDog = new Dog();
var demoCat = new Cat();
demoDog.makeSound();
demoCat.makeSound();
