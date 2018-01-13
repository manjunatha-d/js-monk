function sinkingSort(array) {
  length = array.length;
  if (length < 2) return array;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] > array[j]) {
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

// Space complexity
