abstract class Animal {
  constructor(name: string) {}

  abstract makeSound(): void
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof-woof!")
  }
}

const dog = new Dog("Fresh")
dog.makeSound()
