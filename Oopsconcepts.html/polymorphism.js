
class Animal {
  sound() {
      console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  sound() {
      console.log("Dog barks");
  }
}

class Cat extends Animal {
  sound() {
      console.log("Cat meows");
  }
}

const animals = [new Animal(), new Dog(), new Cat()];

animals.forEach(animal => animal.sound());
