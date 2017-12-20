//---------------------------------------------------------------------------------------------------------------------
// Characteristics of var
//---------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------
// 1. Can be reassigned/updated
//---------------------------------------------------------------------------------------------------------------------

var name = "John";
console.log(`Name: ${name}`);

name = "Reese";
console.log(`New name: ${name}`);

//---------------------------------------------------------------------------------------------------------------------
// 2. Can be redefined
//     ==> declaring multiple vars with same name doesn't throw an error
//---------------------------------------------------------------------------------------------------------------------

var weight = 100;
console.log(`Weight: ${weight}`);

var weight = 200;
console.log(`Redefined weight: ${weight}`);

//---------------------------------------------------------------------------------------------------------------------
// 3. Scoped to the function in which they are declared
//---------------------------------------------------------------------------------------------------------------------

function logHours() {
  var hours = 200;
  console.log(`Hours: ${hours}`); // logs hours because `hours` is available here
}

logHours();

// throws ReferenceError: hours is not defined ==> because `hours` is scoped to the function `logHours()` in which is it defined
console.log(`Hours: ${hours}`);

//---------------------------------------------------------------------------------------------------------------------
// 4. Globally scoped if not declared within a function
//      To test this ==> type `globallyScoped` in the console
//---------------------------------------------------------------------------------------------------------------------
var globallyScoped;

//---------------------------------------------------------------------------------------------------------------------
// =>  Always keep your vars local.
// =>  Global vars are bad because they might be changed in any part of the application and you can't be confident about your code.
// =>  Using vars is error prone. Developers might leak vars into global scope unintentionally
// =>  `dogYears` here is supposed to be just local temporary var.
//     But since it is not defined inside any function, it is available in global scope.
//     To test this => type `dogYears` in the console. (Wrap this code inside a `script` tag and run in the browser)
//---------------------------------------------------------------------------------------------------------------------

var age = 100;

if (age > 12) {
  var dogYears = age * 7;
  console.log(`You are ${dogYears} dog years old`);
}

//---------------------------------------------------------------------------------------------------------------------
// =>  `let` and `const` solve the issues with `var`. They are block scoped.
// =>  Block scope? ==> Anything between { }
// =>  If you declare `dogYears` as `let`, it will be available only inside the if block. It won't be available in the global scope.
// =>  var ==> function scoped
// =>  const and let ==> block scoped
//---------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------
// If you assign value to a undeclared variable, it will be treated as a var. It doesn't throw any error in non strict mode.
// => In 'use strict' mode, it will throw reference error
//---------------------------------------------------------------------------------------------------------------------

// works fine
height = 169;
console.log(height);

//---------------------------------------------------------------------------------------------------------------------
// Two approaches of using variable types in ES6:
// I. Mathias
//    =>  Use const by default
//    =>  Use let for reassignable variables
//    =>  Do not use var
//
// II. Kyle Simpson
//    =>  Use var for variables that are shared across different scopes
//    =>  Use let for local variables
//    =>  Refactor let into const only after some code has been written and you're reasonably sure that its value doesn't change.
//
// I prefer Mathia's approach.
//---------------------------------------------------------------------------------------------------------------------
