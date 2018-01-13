/**
 * sorts an array of integers
 * @param {Array} array an array of unsorted integers (only integers for now)
 */
function bubbleSort(array = []) {
  const length = array.length;
  if (length < 2) return array;

  for (let i = length; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[i] < array[j]) {
        // swap numbers
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
}

console.log(bubbleSort([0, 1, 2, 3, 4, 5]));
console.log(bubbleSort([5, 4, 3, 2, 1, 0]));
console.log(bubbleSort([54, 12, 4343, 123]));

// Time complexity

// Space complexity
