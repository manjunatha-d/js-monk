function selectionSort(array) {
  const length = array.length;

  if (length < 2) return array;

  for (let i = 0; i < length; i++) {
    let minIndex = i;

    // find the index of the min element
    for (let j = i + 1; j < length; j++) {
      // Earlier I wrote this incorrectly as `array[j] < array[i]`. Writing test cases in testSort.js helped me figure out this bug
      // Lesson => Always write test cases
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }

  return array;
}

const test = require("./testSort");
test.verifySorting(selectionSort);
