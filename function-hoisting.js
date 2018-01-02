// Throws ReferenceError: sayHi is not defined
// This happens because when you use a function expression, only the name of the variable is hoisted, not the function assigned to it.

// sayHi('Sarasu'); // At this point, sayHi is undefined.

sayViola('Sarasu'); // This works as function declarations are hoisted

// function expression => assigning a function to a variable
const sayHi = name => console.log('Hi', name);

// function declaration
function sayViola(name) {
  console.log('Viola', name);
}

// Gist => use function declaration instead of function expression if you plan to use the function before it is declared.
// Use function expression if you want to bind 'this' to the function.
// example: const sayHi = name => alert(name).bind(obj);
// calling bind() on function declaration is syntax error
// Apparently, there is no way of calling bind() to a function declaration

// Example for binding 'this' through call() to a function declaration => doesn't work
const person = {
  name: 'Person Boom'
};

this.name = 'window boom';

function sayBoom() {
  console.log(this.name);
}

sayBoom.bind(person);
sayBoom(); // logs undefined => which means, calling bind() after function declaration is not working
sayBoom.call(person); // logs Person Boom
sayBoom.apply(person); // logs Person Boom
