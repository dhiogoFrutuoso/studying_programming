//Maps:

const users = new Map(); //Uma lista de objetos que não pode repetir a chave.

users.set( "Dhiogo", { age: 20, money: 1000 }); //Adicionando um item no Map (Objeto).
users.delete(""); //Deleta um item expecificado por (" ").
users.forEach( () => {} ); //Serve para criar uma callback com o Map.
users.entries(); //Retorna a chave e o valor da chave, Ex: 'Dhiogo' (Chave), { age: 20, money: 1000 } (Valor).
users.keys; //Serve para usar no for, users in users.keys, verificar um por um e etc.
users.values; //Serve para usar no for, users in users.values, verificar um por um e etc.
//users.clear; //Deleta todos os itens de um Map.

console.log(users.get("Dhiogo")); //Retorna as propriedades de um item expecificado com (" ").
console.log(users.size); //Retorna o tamanho do Map.
console.log(users.has("Dhiogo")); //Retorna um valor booleano, verificando se há um certo item no Map.


console.log(`\n`, users);



console.log(`\n===================================================================================================\n`)
//===================================================================================================

//Verificando número primo com o Map:

const Prime_Numbers = new Map();

for (let i = 1; i <= 10; i++) {
    Prime_Numbers.set(`Número_${ i }`, i);
}
for (const Prime of Prime_Numbers.values()) {
    const Prime_Number = Number.parseInt(Prime);
    const Primes = [];
    for (let i = 1; i <= Prime_Number; i++) {
        if (Prime_Number % i == 0) {
            Primes.push(Prime_Number);
        }
    };
    if (Primes.length > 2 || Primes.length === 1) {
        console.log(`O número ${ Prime_Number } não é primo!`);
    } else {
        console.log(`O número ${ Prime_Number } é primo!`)
    };
};



console.log(`\n===================================================================================================\n`)
//===================================================================================================

//Algumas práticas com Map:

const map = new Map([
    ["Primeiro", { Número: 1 }],
    ["Segundo", { Número: 2 }]
]);

for (const entrie of map.entries()) { //Printa todos os objetos no Map.
    console.log(entrie)
}

console.log(`\n`)

for (const [ key, value ] of map.entries()) { //Roda por uma desestruturação de todas as chaves e valores
    console.log(key, value); //Printa a chave e o valor
    console.log("A chave é: ", key); //Printa a chave
    console.log("O valor é: ", value); //Printa o valor
}

console.log(`\n`)

for (const key of map.keys()) { //Roda por apenas todas as chaves
    console.log(key) 
}

console.log(`\n`)

for (const { Número } of map.values()) { //Roda por apenas todos os valores
    console.log(Número)
}