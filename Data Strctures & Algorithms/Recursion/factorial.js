/* 
    Recursive solution for finding the factorial of a number
    Provide a default parameter to prevent stack overflow if the function is called without a parameter
*/
function recursiveFactorial(n = -1) {
    // if (n < 0) return null; // This clutters the code, but it is more robust.
    if (n < 2) return 1;

    return n * recursiveFactorial(n - 1);
}

/* 
    Iterative solution for finding the factorial of a number
    Provide a default parameter to prevent stack overflow if the function is called without a parameter
*/
function iterativeFactorial(n = -1) {
    if (n < 0) return null;
    
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}

console.log('recursiveFactorial(0)', recursiveFactorial(0));
console.log('recursiveFactorial(1)', recursiveFactorial(1));
console.log('recursiveFactorial(5)', recursiveFactorial(5));
console.log('recursiveFactorial(10)', recursiveFactorial(10));
console.log('recursiveFactorial()', recursiveFactorial());
console.log('recursiveFactorial(-5)', recursiveFactorial(-5));

console.log('iterativeFactorial(0)', iterativeFactorial(0));
console.log('iterativeFactorial(1)', iterativeFactorial(1));
console.log('iterativeFactorial(5)', iterativeFactorial(5));
console.log('iterativeFactorial(10)', iterativeFactorial(10));
console.log('iterativeFactorial()', iterativeFactorial());
console.log('iterativeFactorial(-5)', iterativeFactorial(-5));