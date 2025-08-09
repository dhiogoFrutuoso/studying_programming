//Spread e Rest:

const player = {
    nickname: "Rickizx",
    level : 10,
    health: 100,
    alive: true,
    nickname1: "Rickizx",
    potions: [
        {Força: 10, Raridade: "Comum"},
        {Velocidade: 20, Raridade: "Raro"},
    ]
};

function Spread_Rest(player, newPlayer) {
    return { ...player, ...newPlayer }; //Pega um objeto já existente ou cria um(...player)
    // depois adiciona itens ou substitui itens já existentes
};

const newObject = Spread_Rest(player, { //Pegando o objeto já existente
    nickname: "Dhiogo", Coins: 100 //Substituindo nickname e adicionando coins.
});

console.log(newObject);



console.log(`\n===================================================================================================\n`)
//===================================================================================================

//Nova prática:

const person = { name: "Dhiogo"};
const newPerson = {...person, name: "Rickizx", age: 17} //Substitui name e adiciona age

console.log(newPerson);



console.log(`\n===================================================================================================\n`)
//===================================================================================================

//Spread e Rest com array:

const umCinco = [1, 2, 3, 4, 5];
const seisDez = [6, 7, 8, 9, 10];

const numbers = [...umCinco, ...seisDez];

umCinco.push(6) //Não altera no spread, pois foi adicionado depois de espalhar a array

console.log(numbers);

const [one, two, ...others] = numbers; //Operador rest, cria uma array tirando os dois primeiros números.(One, Two)

console.log(one, two);
console.log(others);



console.log(`\n===================================================================================================\n`)
//===================================================================================================

//Rest com objetos:

const player_1 = {
    nickname: "Rickizx",
    level : 10,
    health: 100,
    alive: true,
    nickname1: "Rickizx",
    potions: [
        {Força: 10, Raridade: "Comum"},
        {Velocidade: 20, Raridade: "Raro"},
    ]
};

const playerInfo = { ...player_1, nickname: "Dhiogo", health: 1000 }; //Altera o valor do nickname e do health
const { nickname, level, ...othersInfos } = player_1; //Pegando todos os itens de player_1, menos nickname e level

console.log(nickname, level);
console.log(othersInfos);