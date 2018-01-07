/* 
    You have an array of numbers.
    Your task is to sort ascending odd numbers but even numbers must be on their places.

    Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

    Example

    sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
  if (array.length === 0) return array;

  // extract even numbers and their position in the array
  let evenArray = array
    .map((num, index) => {
      return {
        value: num,
        index: index
      };
    })
    .filter(element => element.value % 2 === 0);

  // extract odd numbers from the array
  array = array.filter(num => num % 2 !== 0);
  array.sort((a, b) => a - b);

  // insert back even numbers at their original positions
  evenArray.forEach(element => {
    array.splice(element.index, 0, element.value);
  });

  return array;
}

console.log(sortArray([7, 10, 3, 4, 5]));

// Clever solution

// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }
