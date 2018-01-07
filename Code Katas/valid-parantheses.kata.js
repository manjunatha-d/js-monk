/* 
    Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

    Examples
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true
    Constraints
    0 <= input.length <= 100

    You may assume that the input string will only contain opening and closing parenthesis and will not be an empty string.
*/

function validParentheses(parens) {
  if (parens[0] !== "(" || parens.length % 2 !== 0) return false;

  let stack = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") stack.push(parens[i]);
    else if (parens[i] === ")") if (!stack.pop()) return false;
  }

  return stack.length === 0;
}

console.log("(())", validParentheses("(())"));
console.log("(())))", validParentheses("(())))"));

// While solving this kind of problems, think of all the conditions in which it will return false and handle them first
