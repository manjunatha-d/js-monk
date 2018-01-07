/* 
  https://en.wikipedia.org/wiki/Immutable_object#JavaScript
  
  Primitive values in JS are immutable. Objects are mutable. 
  To make objects immutable, use Object.freeze()
  To make a property of an object immutable, use Object.defineProperty(object, property, {value: objectValue, writable: false})
*/

var a = "global a";
var obj = {
  a: "global object a"
};

console.log("\n*****Before mutating*****\n");
console.log("a: ", a); // logs global a
console.log("obj.a: ", obj.a); // logs global object a

function mutateValues(param1, param2) {
  param1 = "mutated global a";
  param2.a = "mutated global object a";
}

// Object.freeze(obj); // makes object immutable.

mutateValues(a, obj);

console.log("\n*****After mutating*****\n");
console.log("a: ", a); // logs global a
console.log("obj.a: ", obj.a); // logs mutated global object a.
// If you call Object.freeze(obj), this logs global object a.

// After Object.freeze() is called on an object, if you try to change the properties, it silently ignores them, no errors are thrown.
