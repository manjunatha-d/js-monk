/* 
    Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

    Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
    const bitString = Number(n).toString(2);
    
    return Array.from(bitString)
              .reduce((oneBits, value) => Number(value) ? oneBits + 1: oneBits, 0);
  };

  // good solution

  countBits = n => n.toString(2).split('0').join('').length;