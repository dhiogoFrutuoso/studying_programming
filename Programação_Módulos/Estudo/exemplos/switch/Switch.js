const rl = require('node:readline');

const prompt = rl.createInterface({
  input: process.stdin, output: process.stdout
});

console.log("Bem vindo a boca:");
console.log("[1] Pó de 10");
console.log("[2] Pó de 20");
console.log("[3] Pó de 30");
console.log("[4] Pó de 40");

prompt.question("> Digite o número do pó: ", (input) => {
  switch (input) {
    case "1": {
      console.log("Você escolheu Pó de 10");
      break;
    }
    case "2": {
      console.log("Você escolheu Pó de 20");
      break;
    }
    case "3": {
      console.log("Você escolheu Pó de 30");
      break;
    }
    case "4": {
      console.log("Você escolheu Pó de 40");
      break;
    }
  }
  prompt.close();
});
