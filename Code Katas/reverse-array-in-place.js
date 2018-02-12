// Reverse an array in place

Array.prototype.reverse = function(a) {
  let i = 0,
    j = this.length - 1;

  while (i < j) {
    [this[i], this[j]] = [this[j], this[i]];
    i++;
    j--;
  }

  return this;
};

let array = [];
console.log("\nArray: ", array);
array.reverse();
console.log("Reversed array", array);

array = [1];
console.log("\nArray: ", array);
array.reverse();
console.log("Reversed array", array);

array = [1, 2];
console.log("\nArray: ", array);
array.reverse();
console.log("Reversed array", array);

array = [1, 2, 3, 4];
console.log("\nArray: ", array);
array.reverse();
console.log("Reversed array", array);

array = [1, 2, 3, 4, 5];
console.log("\nArray: ", array);
array.reverse();
console.log("Reversed array", array);
