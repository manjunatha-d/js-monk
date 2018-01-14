/**
 * Steps:
 *  1. Divide the input array into 2 halves
 *  2. Sort the left array
 *  3. Sort the right array
 *  4. Merge the sorted arrays into a single sorted array
 * @param {Array} array
 */
function mergeSort(array) {
  const length = array.length;
  if (length < 2) return array;

  const mid = Math.floor(length / 2);

  const leftArray = mergeSort(array.slice(0, mid)); // slice(beginIndex, endIndex + 1)
  const rightArray = mergeSort(array.slice(mid, length));

  return mergeSortedArrays(leftArray, rightArray);
}

// merge 2 sorted arrays into a single sorted array
function mergeSortedArrays(leftArray, rightArray) {
  //   console.log("\nLeft Array: ", leftArray);
  //   console.log("Right Array", rightArray);
  let mergedArray = [];
  let i = 0,
    j = 0;

  // compare and push the smaller elements, until one of the arrays exhaust
  while (i < leftArray.length && j < rightArray.length) {
    leftArray[i] <= rightArray[j]
      ? mergedArray.push(leftArray[i++])
      : mergedArray.push(rightArray[j++]);
  }

  // push the left over elements in left array, if any
  while (i < leftArray.length) {
    mergedArray.push(leftArray[i++]);
  }

  // push the left over elements in right array, if any
  while (j < rightArray.length) {
    mergedArray.push(rightArray[j++]);
  }

  return mergedArray;
}

const test = require("./testSort");
test.verifySorting(mergeSort);
// console.log("\nSorted Array: ", mergeSort([6, 5, 4, 3, 2, 1, 0]));
// console.log(mergeSort([0, 1, 2, 3, 4, 5]));
// console.log(mergeSort([1231, 384, 878, 87]));

// Output for [5, 4, 3, 2, 1, 0] = An array containing even number of elements

/* 
    Left Array:  [ 4 ]
    Right Array [ 3 ]

    Left Array:  [ 5 ]
    Right Array [ 3, 4 ]

    Left Array:  [ 1 ]
    Right Array [ 0 ]

    Left Array:  [ 2 ]
    Right Array [ 0, 1 ]

    Left Array:  [ 3, 4, 5 ]
    Right Array [ 0, 1, 2 ]

    Sorted Array:  [ 0, 1, 2, 3, 4, 5 ] 
*/

// Output for [6, 5, 4, 3, 2, 1, 0] = An array containing odd number of elements

/* 
    Left Array:  [ 5 ]
    Right Array [ 4 ]

    Left Array:  [ 6 ]
    Right Array [ 4, 5 ]

    Left Array:  [ 3 ]
    Right Array [ 2 ]

    Left Array:  [ 1 ]
    Right Array [ 0 ]

    Left Array:  [ 2, 3 ]
    Right Array [ 0, 1 ]

    Left Array:  [ 4, 5, 6 ]
    Right Array [ 0, 1, 2, 3 ]

    Sorted Array:  [ 0, 1, 2, 3, 4, 5, 6 ]
*/
