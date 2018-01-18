function selectionSort(array) {
  const length = array.length;

  if (length < 2) return array;

  console.log(
    "\n Elements swapped in the current pass are suffixed with '*'\n"
  );
  for (let i = 0; i < length; i++) {
    let minIndex = i;

    // find the index of the min element
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    [array[i], array[minIndex]] = [array[minIndex], array[i]];

    // Add * to the end of swapped elements and log the array to the console
    let newArray = array.map(element => {
      return array.indexOf(element) === minIndex || array.indexOf(element) === i
        ? element + "*"
        : element;
    });

    console.log(newArray);
  }

  return array;
}

selectionSort([45, 12, 32, 67, 83, 23]);
// selectionSort([5, 4, 3, 2, 1, 0]);
// selectionSort([1231, 384, 878, 87]);
// selectionSort([0, 1, 2, 3, 4, 5]);
