var foo = (function IIFE() {
  return function() {
    console.log('foo');
  };
})();

foo();

// Throws ReferenceError because the function IIFE is defined in its own scope. It is not available outside.
let bar = IIFE();

bar();

// You can use IIFE to create a singleton object
// eg: var singleton = write the function that returns the singleton object. Wrap it in an IIFE.
// Since there is no way to invoke a IIFE later (presumably), there is no way of creating another instance of the singleton object.
