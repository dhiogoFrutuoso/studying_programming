const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});

prompt.question("Qual número você quer ver da tabuada? ", (answer) => {
    const number = Number. parseInt(answer);

    if (Number.isNaN(number)) {
        console.log("Por favor, insira um número válido.");
    } else {
        console.log(`A tabuada do número ${number} é: `);
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
    prompt.close();
})