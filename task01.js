// Class 
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.getInformation = function () {
        console.log("This is ".concat(this.name, " gender: ").concat(this.gender, " and ").concat(this.age, " years old."));
    };
    return Person;
}());
// Objects
var david = new Person('David', 25, 'Male');
var riya = new Person('Riya', 22, 'Female');
var matt = new Person('Matt', 19, 'Transgender');
// Displays information
david.getInformation();
riya.getInformation();
matt.getInformation();
