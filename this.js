/* 
    A program to show all the 4 ways in which `this` keyword is bound during runtime.
*/

function foo() {
  var a = "`a` inside foo";
  console.log("this === global:", this === global); // logs true
  console.log("this.a`:", this.a); // logs undefined
}

// var a = "global `a`";
// apparently, the variables declared with `var` are not attached to `global` in nodejs, unlike what happens in browser env.
// when you run this file, it is wrapped inside a function and executed. So the variables are scoped to that function (guess it is an IIFE),
// instead of global object, like it happens in browser environment.
// console.log(global.a); // logs undefined

global.a = "global `a`";

// -------------------------------------------------------------------------------------------------------
// Default binding for `this` => `global` in nodejs, `window` in browser
// -------------------------------------------------------------------------------------------------------

foo();
// logs
// this === global: true
// this.a`: global `a`

// -------------------------------------------------------------------------------------------------------
// Implicit binding for `this` => the object which owns the context in which the function is executed
// -------------------------------------------------------------------------------------------------------

var obj1 = {
  a: "obj1 `a`",
  foo: foo
};

obj1.foo();
// logs
// this === global: false
// this.a`: obj1 `a`
