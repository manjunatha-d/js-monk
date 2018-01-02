// import Animal from './Animal' ==> ES6 syntax

// Animal is a module which contains two classes - Dog and Cat
const Animal = require('./Animal');

const doggy = new Animal.Dog('Doggy');

const caty = new Animal.Cat('Caty');

console.log(doggy.bark());

console.log(caty.meow());
