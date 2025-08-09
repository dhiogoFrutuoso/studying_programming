//sets:

const number = new Set([2, 1, 3, 3, 4, 5, 6, 6]); //Semelhante a uma array, mas não permite itens repetidos

//number.clear(); //Deleta todos os items do set
number.add(7);
number.add(7); //Adiciona um item ao set
number.delete(5); //Deleta um item do set
number.forEach( () => {} ); //Criar uma callback com os valores do set

console.log(number.entries()); //Retorna o index da propriedade e do lado seu valor, exemplo: ([0, 2])
console.log(number.has(2)); //Retorna um booleano, para ver se há um certo item no set
console.log(number.size); //Retorna o tamanho do set através da quantia de itens
console.log(number.keys); //Serve para usar no for, number in number.keys, verificar um por um e etc.
console.log(number.values); //Serve para usar no for, number in number.values, verificar um por um e etc.


console.log(number)



console.log(`\n===================================================================================================\n`)
//===================================================================================================

import { text } from "@clack/prompts"

async function set() {
    const input = await text({ message: "Digite números separados por espaço: "})
    const inputmessage = input.split(" ").map(Number);

    const set = new Set(inputmessage);

    console.log(inputmessage);
    console.log(set);
};
//set();