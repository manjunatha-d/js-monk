const _ = require("lodash");

const assertEquals = function(actual, expected, arrayType) {
  if (_.isEqual(actual, expected)) {
    console.log(`::OK:: for ${arrayType}`);
  } else {
    console.error(
      `::NOT OK:: for ${arrayType} => Assertion Error: expected ${expected} but got ${actual}`
    );
  }
}.bind(this);

function verifySorting(sortFunction) {
  console.log(typeof sortFunction);
  this.sortFunction = sortFunction;

  // empty array
  assertEquals(this.sortFunction([]), [], "Empty arrays");

  // array with single element
  assertEquals(this.sortFunction([3]), [3], "Arrays with single element");

  // array with two elements
  assertEquals(this.sortFunction([12, 6]), [6, 12], "Arrays with two elements");

  // sorted array with odd number of elements
  assertEquals(
    this.sortFunction([1, 2, 3, 4, 5]),
    [1, 2, 3, 4, 5],
    "Sorted arrays with odd number of elements"
  );

  // sorted array with even number of elements
  assertEquals(
    this.sortFunction([1, 2, 3, 4, 5, 6]),
    [1, 2, 3, 4, 5, 6],
    "Sorted arrays with even number of elements"
  );

  // reverse sorted array with odd number of elements
  assertEquals(
    this.sortFunction([4, 3, 2, 1, 0]),
    [0, 1, 2, 3, 4],
    "Reverse sorted array with odd number of elements"
  );

  // reverse sorted array with even number of elements
  assertEquals(
    this.sortFunction([4, 3, 2, 1]),
    [1, 2, 3, 4],
    "Reverse sorted array with even number of elements"
  );

  // mixed array with odd number of elements
  assertEquals(
    this.sortFunction([45, 12, 32, 67, 23]),
    [12, 23, 32, 45, 67],
    "Mixed array with odd number of elements"
  );

  // mixed array with even number of elements
  assertEquals(
    this.sortFunction([45, 12, 32, 67, 83, 23]),
    [12, 23, 32, 45, 67, 83],
    "Mixed array with even number of elements"
  );
}

module.exports = {
  verifySorting
};
