/**
 * sorts an array of integers
 * It's called sinking sort as the heavier elements kind of sink to the bottom after every pass
 * @param {Array} array an array of unsorted integers (only integers for now)
 */
function sinkingSort(array = []) {
  length = array.length;
  if (length < 2) return array;

  // (n - 1) passes
  for (let i = length; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > array[i]) {
        // swap numbers
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
}

console.log(sinkingSort([0, 1, 2, 3, 4, 5]));
console.log(sinkingSort([5, 4, 3, 2, 1, 0]));
console.log(sinkingSort([54, 12, 4343, 123]));

// Time complexity

// The outer loop runs (n - 1) times, and the inner loop runs n-1 + n-2 + n-3 + ... + 1
// Time complexity is O(n^2)
