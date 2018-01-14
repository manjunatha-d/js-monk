/**
 * sorts an array of integers
 * Simplest sort. You would never really use it outside of academic world.
 * @param {Array} array an array of integers to b sorted (only integers for now)
 */
function bubbleSort(array = []) {
  const length = array.length;
  if (length < 2) return array;

  // (n - 1) passes
  for (let i = 0; i < length - 1; i++) {
    // start with the first element. If the any of the element in the remaining array is lighter, swap them.
    // After every pass, the lightest element will bubble up
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[i]) {
        // swap numbers
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
}

const test = require("./testSort");
test.verifySorting(bubbleSort);

// Time complexity => O(n^2)
