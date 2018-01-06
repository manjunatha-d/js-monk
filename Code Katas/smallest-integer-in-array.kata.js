/* 
    Given an array of integers your solution should find the smallest integer.

    For example:
    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345
    You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

function findSmallestInt(array) {
  return Math.min(...array);
}

console.log(findSmallestInt([12, 3, 45, 1]));

// https://davidwalsh.name/spread-operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
