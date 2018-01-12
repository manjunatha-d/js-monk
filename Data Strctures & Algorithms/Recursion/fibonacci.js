function recursiveFibonacci(n = -1) {
    if (n < 0) return null;
    if (n < 3) return 1;

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

function iterativeFibonacci(n = -1) {
    if (n < 1) return null;
    if (n < 3) return 1;

    // destructuring arrays
    let [a, b] = [0, 1];

    while (n-- > 0) {
        [a, b] = [b + a, a];
    }

    return a;
}

console.log(recursiveFibonacci(10));
console.log(iterativeFibonacci(10));