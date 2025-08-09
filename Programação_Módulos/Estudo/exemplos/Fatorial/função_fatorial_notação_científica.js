function factorial(n) {
    let factorial = n;
    for (let i = (n - 1); i > 1; i--) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(100));

