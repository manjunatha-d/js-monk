//---------------------------------------------------------------------------------------------------------------------
// Characteristics of let and const
//---------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------
// 1. let and const are block scoped ==> available only inside the block in which they are declared.
//		=> If you declare const or let variables on top (not inside any function), they are scoped to the window object.
// 2. Cannot be redeclared ==> throws syntax error
//---------------------------------------------------------------------------------------------------------------------

let weight = 20;
console.log(`My dog weighs ${weight} kilos`);

let weight = 100; // throws SyntaxError: Identifier 'weight' has already been declared

//---------------------------------------------------------------------------------------------------------------------
// let vs const
// =>  let can be reassigned. const cannot be reassigned
//---------------------------------------------------------------------------------------------------------------------

let runs = 100;
runs = 200; // works fine

const wickets = 3;
wickets = 4; // throws TypeError: Assignment to constant variable.

//---------------------------------------------------------------------------------------------------------------------
// NOTE: const it not immutable. The properties of const object are mutable.
//---------------------------------------------------------------------------------------------------------------------

const person = {
  name: "John Wick",
  age: 23
};

// throws TypeError: Assignment to constant variable.
// Entire object cannot be reassigned
person = {
  name: "Harold Finch"
};

// The entire object cannot be reassigned. However, the properties can be reassigned.
// Think of it as like this ==> the person will remain constant, but his characteristics will change over time.
person.age = 24;
console.log(`${person.name} is ${person.age} years old`);

//---------------------------------------------------------------------------------------------------------------------
// To keep the properties of an object unchanged, use Object.freeze() ==> This is an old feature, not something new in ES6.
// Object.freeze doesn't throw any error. It just doesn't update the values in the object.
// 	=> From the docs: It prevents the modification of existing properties and values of an object and the addition of new properties
//---------------------------------------------------------------------------------------------------------------------

const john = Object.freeze(person);

john.age = 30; // doesn't thow an error. However, it doesn't update the value in the object either.

console.log(`${person.name} is ${person.age} years old`); // prints 'John Wick is 24 years old'

//---------------------------------------------------------------------------------------------------------------------
// Applications of let and const in real world:
// 	=>  Removes the need of IIFE (it creates a scope so that none of the variables don't escape to the parent scope.
//			TODO: Read the article by Ben Alman on IIFE.)
//  => use let in for loops. If you use var, it escapes to the parent scope / global scope.
//  => let and const are not hoisted ==> force developer to declare the variables before using them. Prevents potential erros.
//---------------------------------------------------------------------------------------------------------------------

// This is scoped to the window object. The problem here is it overrides the existing name property of the window object.
// 3rd party libs depending on the name property of the window might fail.

var name = "Reese";

// To prevent it, enclose this inside an IIFE. The var `name` is now now scoped to the function and won't override the name of window object

(function() {
  var name = "Reese";
})();

// To achieve the same effect in ES6, just declare the variables inside a block i.e. curly braces.
// The variable `name` here doesn't override the name of the window as it is scoped to the block.

{
  const name = "Sameen";
}

//---------------------------------------------------------------------------------------------------------------------
// Not a good for loop. Problems with this loop:
// 1. var i escapes to the global scope unintentionally. What we need is just a variable to process inside the loop.
//    we don't want it on the global scope.
// ==>  Use let to prevent that
//---------------------------------------------------------------------------------------------------------------------

for (var i = 0; i < 10; i++) {
  // The var i is global scoped
  console.log(`i: ${i}`);
}

//---------------------------------------------------------------------------------------------------------------------
// 2. The other problem with the above for loop occurs when there is some asynchronous operation inside the loop.
// When you run the following code, it prints 10 ten times instead of the expected 0 1 2 ... 10 output.
// This happens because the var i here is global scoped. And every time the loop runs, its value is overwritten.
// By the time the setTimeout() executes the function (i.e. after 1 sec),
// the value of i will be 10.
//---------------------------------------------------------------------------------------------------------------------

for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(`var i: ${i}`);
  }, 1000);
}

// To prevent this, use let instead of var. Since let is block scoped, every time the loops runs,
// a new variable is created instead of overwriting the same variable.

for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(`let i: ${i}`);
  }, 1000);
}

// We can also use IIFE to achieve the same effect.
// TODO: Understand how IIFE works thoroghly. I feel like I'm missing some pieces here.
for (let i = 0; i < 10; i++) {
  (function() {
    setTimeout(function() {
      console.log(`IIFE i: ${i}`);
    }, 1000);
  })();
}

//---------------------------------------------------------------------------------------------------------------------
// Temporal dead zone ==> Refers to the space above let and const declations where they cannot be used.
// You can use variables before they are declared ==> JS hoists the variable declarations. It's called hoisting.
//---------------------------------------------------------------------------------------------------------------------

console.log(boom); // Doesn't thow an error because the variable declaration is hoisted. Prints 'undefined' because the variable initialization is not hoisted.
var boom = "boom";

console.log(shhhh); // throws ReferenceError: shhhh is not defined as let and const are not hoisted.
const shhhh = "shhhh";

//---------------------------------------------------------------------------------------------------------------------
// NOTE: only var is hoisted. let and const are not hoisted.
//---------------------------------------------------------------------------------------------------------------------
