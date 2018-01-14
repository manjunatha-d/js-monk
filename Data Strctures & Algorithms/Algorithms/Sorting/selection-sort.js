function selectionSort(array) {
  const length = array.length;

  if (length < 2) return array;

  for (let i = 0; i < length; i++) {
    let minIndex = i;

    // find the index of the min element
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[i]) {
        minIndex = j;
      }
    }

    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }

  return array;
}

console.log(selectionSort([5, 4, 3, 2, 1, 0]));
console.log(selectionSort([0, 1, 2, 3, 4, 5]));
console.log(selectionSort([1231, 384, 878, 87]));
