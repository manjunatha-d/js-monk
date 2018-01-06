/* 
    If the string contains odd number of characters, return the middle char.
    If the string contains even number of characters, return 2 characters in the middle.
*/

function getMiddleChar(word) {
  let length = word.length;
  let middle = Math.floor(length / 2);
  console.log(middle);

  if (length % 2 === 0) return word.slice(middle - 1, middle + 1);

  return word.slice(middle, middle + 1);
}

console.log(getMiddleChar("boom"));
console.log(getMiddleChar("anush"));

// We have 3 methods to do the same thing in JS => slice, substr, substring. => Poor design
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
// https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
