const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});

prompt.question("Qual número você quer calcular o fatorial?", (answer) => {
    let factorial = BigInt(answer);
    let result = BigInt(1);
    for (let i = factorial; i > 1; i--) {
        result *= i;
    }
    console.log(result.toString());
    prompt.close();
});