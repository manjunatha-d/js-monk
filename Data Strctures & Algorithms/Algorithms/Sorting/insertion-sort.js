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

const test = require("./testSort");
test.verifySorting(insertionSort);
