/* 
    A program to show all the 4 ways in which `this` keyword is bound during runtime.

    1. Default Binding (to global object in non-strict mode, to undefined in strict mode)
    2. Implicit Binding (to the object that owns the function reference when it is invoked)
    3. Explicit Binding (to the object passed via call(), apply(), or bind())
    4. `new` Binding (to the newly constructed object)

    `this` is a runtime thing. Its value depends on how the function is called. You need to examine the call site to figure out its value.
    More info => https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md
*/

function foo() {
  var a = "`a` inside foo";
  console.log("this === global:", this === global);
  console.log("this.a`:", this.a);
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

// Hard Binding

/* 
    function foo(something) {
      console.log( this.a, something );
      return this.a + something;
    }

    var obj = {
      a: 2
    };

    // hard binding function. Passes through the arguments passed, and returns the value received
    var bar = function() {
      return foo.apply( obj, arguments );
    };

    var b = bar( 3 ); // 2 3
    console.log( b ); // 5 
*/

// Since hard binding is a commonly used pattern, ES5 provided a built in utility => Function.prototype.bind

// Explicit vs Implicit binding
const explicitBindObj = {
  message: "Explicit binding"
};

const func = function() {
  console.log(this.message);
}.bind(explicitBindObj);

const implicitBindObj = {
  message: "Implicit binding",
  func
};

implicitBindObj.func(); // logs 'Explicit binding'

func().bind(implicitBindObj); // TypeError: Cannot read property 'bind' of undefined
