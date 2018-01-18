require("console.table");

/**
 * sorts an array of integers
 * It's called bubble sort as the lighter elements kind of bubble up after every pass
 * @param {Array} array an array of unsorted integers (only integers for now)
 */
function bubbleSort(array = []) {
  let visualizeSort = [];
  visualizeSort.push([...array]); // push the initial unsorted array

  const length = array.length;
  if (length < 2) return array;

  // (n - 1) passes
  for (let i = 0; i < length - 1; i++) {
    // Start from first position, if any of the remaining elements in the array are lesser than the element, swap them.
    for (let j = i + 1; j < length; j++) {
      // bubble the lighter one
      if (array[j] < array[i]) {
        // swap numbers
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    visualizeSort.push([...array]);
  }
  log(visualizeSort);
  return array;
}

function log(array) {
  var columnNames = [];
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(
      array.reduce((accumulator, element) => {
        // return accumulator.push(element[i]); // IMPORTANT: array.push() returns the length of the array. So this line of code will return the length instead of an array as you would expect.
        return accumulator.concat(element[i]);
      }, [])
    );
    columnNames.push(`Pass ${i}`);
  }
  array = newArray;
  console.table(columnNames, array);
}
// console.log(bubbleSort([0, 1, 2, 3, 4, 5]));
// console.log(bubbleSort([5, 4, 3, 2, 1, 0]));
// console.log(bubbleSort([54, 12, 4343, 123]));

bubbleSort([5, 4, 3, 2, 1, 0]);
// Time complexity

// The outer loop runs (n - 1) times, and the inner loop runs n-1 + n-2 + n-3 + ... + 1
// Time complexity is O(n^2)
