# What is functional programming?

* A programming paradigm, like imperative programming, OO programming. => It's
  all about functions here
* A coding styles
* A mindset
* Do everything with functions. Think in terms of functions taking input, giving
  output, and piping them, instead of objects and how they interact.

## Non functional

```javascript
var name = "Anjana";
var greeting = "Hi I am";

console.log(greeting + name);
```

### Functional

```javascript
function greet(name) {
  return `I'm ${name}`;
}

console.log(greet("Anjana"));
```

## Pure Functions

* Avoid _side effects_, use **pure functions**
* _Side effect_ => Anything that a function does apart from computing an output
  using its parameters, like accessing/modifying a global variable, printing
  something to a console, alert, etc
* _Pure function_ => take input, compute the output using **only** the input,
  and return the output (shouldn't this be optional?).

## Higher Order Functions

* Functions that take other functions as input or return a function as output
* Example => map, reduce, filter, etc

## Avoid mutability

* Use immutable data
* Mutation => changing object in place

### Mutation

```javascript
var rooms = ["R1", "R2", "R3"];
rooms[2] = "R4"; // mutation
```

### Immutable way:

```javascript
var rooms = ["R1", "R2", "R3"];
var newRooms = rooms;
newRooms[2] = "R4";
// You can use filter to achieve the same effect
// something like, var newRooms = rooms.filter(a function that returns 'R4' if the element is 'R3')
```

* The problem with using immutable structures is you end up making copies of
  things whenever you want to change something. This results in performance
  issues. To fix these issues, use **_Persistent data structures_**

* Structural sharing => watch 19:00

* Mori, Immutable JS (released by Facebook)

## Remember

* Don't loop through, use higher order functions like map, reduce, filter, etc

## Links

* https://www.youtube.com/watch?v=e-5obm1G_FY

* https://slidr.io/vakila/learning-functional-programming-with-javascript#1

* https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming
