/*
* Demonstrates the case sensitivity of key names in an object.
*
* The property names of an object are case sensitive.
* You can have multiple property names with same spelling, but different case.
*/

var object = {
    A: "Uppercase A",
    a: "Lowercase a",
    B: "Uppercase B"
};

console.log("object.A: ", object.A); // logs Uppercase A
console.log("object.a: ", object.a); // logs Lowercase a
console.log("object.B: ", object.B); // logs Uppercase B
console.log("object.b: ", object.b); // logs undefined as b is not a valid property of object