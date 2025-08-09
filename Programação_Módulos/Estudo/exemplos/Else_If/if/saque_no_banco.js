const rl = require('node:readline');

const prompt = rl.createInterface({
  input: process.stdin, output: process.stdout
}); 

let bank = 3000;

prompt.question('Digite o valor que você deseja sacar: ', (answer) => {
  let amount = Number.parseInt(answer);
  if (amount > bank) {
    console.log('Você não possui saldo suficiente para realizar este saque');
  } else if (amount <= 0) {
    console.log(`Digite um valor válido para saque`);
  } else if (amount > 0 && amount <= bank) {
    bank -= amount;
    console.log(`Saque realizado com sucesso! Seu novo saldo é: ${bank}`);
  } else if (Number.isNaN(amount)) {
    console.log(`Digite um valor válido para saque`);
  }
  prompt.close();
});