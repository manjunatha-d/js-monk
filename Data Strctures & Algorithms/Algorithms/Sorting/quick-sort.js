const test = require("./testSort");

/**
 * Steps:
 *
 * 1. Select a pivot => Any element is fine, usually the last element
 * 2. Create an array of all the elements less than the pivot
 * 3. Create an array of all the elements greater than the pivot
 * 4. Recursively sort the left and the right arrays
 * 5. Construct the sorted array => [leftArray, pivot, rightArray]
 */

function quickSort(array) {
  const length = array.length;
  if (length < 2) return array;

  const pivot = array[length - 1];
  let leftArray = [],
    rightArray = [];

  for (let i = 0; i < length - 1; i++) {
    array[i] < pivot ? leftArray.push(array[i]) : rightArray.push(array[i]);
  }

  leftArray = quickSort(leftArray);
  rightArray = quickSort(rightArray);

  return [...leftArray, pivot, ...rightArray];
}

test.verifySorting(quickSort);
