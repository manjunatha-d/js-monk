function insertionSort(array) {
  const length = array.length;

  if (length < 2) return array;

  for (let i = 1; i < length; i++) {
    // start from the element just before the current element
    let j = i - 1;

    // figure out the correct position of the current element
    while (array[i] < array[j]) {
      j--;
    }
    j++;

    // Remove the current element, and put it in its correct position
    array.splice(j, 0, ...array.splice(i, 1));
  }

  return array;
}

console.log(insertionSort([5, 4, 3, 2, 1, 0]));
console.log(insertionSort([0, 1, 2, 3, 4, 5]));
console.log(insertionSort([1231, 384, 878, 87]));
