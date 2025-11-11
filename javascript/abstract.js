class Animal {
    constructor(name) { }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof-woof!");
    }
}
const dog = new Dog("Fresh");
dog.makeSound();
export {};
