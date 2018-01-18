require("console.table");

/**
 * sorts an array of integers
 * It's called bubble sort as the lighter elements kind of bubble up after every pass
 * @param {Array} array an array of unsorted integers (only integers for now)
 */
function sinkingSort(array = []) {
  let visualizeSort = [];
  visualizeSort.push([...array]);

  const length = array.length;
  if (length < 2) return array;

  // (n - 1) passes
  for (let i = length - 1; i > 0; i--) {
    // start from the last element, if any of the elements in the remaining array are greater than the current element, swap them.
    // In the end, the heaviest element will sink to the bottom.
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > array[i]) {
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
  console.table(columnNames, newArray);
}
// console.log(sinkingSort([0, 1, 2, 3, 4, 5]));
// console.log(sinkingSort([5, 4, 3, 2, 1, 0]));
// console.log(sinkingSort([54, 12, 4343, 123]));

sinkingSort([5, 4, 3, 2, 1, 0]);
