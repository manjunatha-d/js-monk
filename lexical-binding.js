const double = (function IIFE() {
  const a = 15;
  return function() {
    console.log(a * 2); // the value of `a` will be lexically bound to 15 here.
    // Anywhere you run this function, the value of `a` will remain the same.
  };
})();

function boom() {
  const a = 10;
  double(); // the value of `a` in double() is lexically bound to 15 inside IIFE (line 2) during compile time.
}

boom(); // logs 10, not 15
