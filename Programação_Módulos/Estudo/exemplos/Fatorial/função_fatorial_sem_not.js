function factorial(n) {
    let factorial = BigInt(n);
    result = BigInt(1);
    for (let i = factorial; i > 1; i--) {
        result *= i;
    }
    return (result.toString());
}

console.log(factorial(100));



