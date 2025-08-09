const rl = require('node:readline');

const prompt = rl.createInterface({
  input: process.stdin, output: process.stdout
}); 

const salario = 1000;
let bonus = 0;

prompt.question("Qual foi a performance do funcionário? ", (perf) => {
  const performance = perf;

  if (performance === "Excelente") {
    bonus = salario * 0.2;
  } else if (performance === "Bom") {
    bonus = salario * 0.1;
  } else if (performance === "Regular") {
    bonus = salario * 0.05;
  } else if (performance === "Ruim") {
    bonus = 0;
  } else {
    console.log("Desculpe, não entendi sua resposta.");
    prompt.close();
    return;
  }

  console.log(`O bônus do funcionário é: R$ ${bonus.toFixed(2)}, logo, seu novo salário é: R$ ${(salario + bonus).toFixed(2)}`);
  prompt.close();
});
