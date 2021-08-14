// Memoization;
// JS object, key will be arg to fn, value will the be return value

const fib = (n, memo= {}) => {
    if (n in memo) return memo[n];

    if (n <= 2) return n;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);

    console.log("memo =>", memo);
    return memo[n];
}

console.log(fib(6));
// console.log(fib(8));
// console.log(fib(10));
// console.log(fib(50));