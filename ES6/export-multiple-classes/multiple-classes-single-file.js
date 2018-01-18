// import Animal from './Animal' //==> ES6 syntax
// Using this throws SyntaxError: Unexpected token import in Node.js
// `import` is not supported in Node.js
// It will be supported in v10 of Node.js => https://stackoverflow.com/questions/37132031/nodejs-plans-to-support-import-export-es6-es2015-modules
// https://github.com/nodejs/node/wiki/ES6-Module-Detection-in-Node

// Animal is a module which contains two classes - Dog and Cat
const Animal = require('./Animal');

const doggy = new Animal.Dog('Doggy');

const caty = new Animal.Cat('Caty');

console.log(doggy.bark());

console.log(caty.meow());
