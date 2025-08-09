//Classes:

//Nome, gênero e idade de uma pessoa.

class Person {
    #name;
    #gener
    #age;
    #money = 0;
    constructor(name, gener, age) {
        this.#name = name;
        this.#gener = gener;
        this.#age = age;
    }
    intro() {
        return `Características: ${this.#name}, ${this.#gener}, ${this.#age} anos.`
    }
    getName() {
        return this.#name;
    }
    getMoney() {
        return this.#money;
    }
    setMoney(value) {
        return this.#money = value; //adiciona um valor a uma propriedade privada
    }
    incrementMoney(value) {
        this.setMoney(this.#money + value); //Expressa o valor que deve ser adicionado para setMoney()
    }
}

const person = new Person("Dhiogo", "Homem", 17);

//person.name = "Débora" //Provando que não é possível mudar uma propriedade privada (#propriedade)

console.log(person.intro());

person.incrementMoney(500);
person.incrementMoney(1400);

console.log(`${person.getName()} possui ${person.getMoney()}R$`)



//=========================================================================================================

//Criando uma classe com jogos e usando o método static:

class game {
    static games = []; 
    name;
    time;
    difficulty;
    constructor(name, time, difficulty) {
        this.name = name;
        this.time = time;
        this.difficulty = difficulty;
        game.games.push(this);
    }
    getName() {
        return this.name;
    }
    getTime() {
        return this.time;
    }
    getDifficulty() {
        return this.difficulty;
    }
    Delete() {
        game.games = game.games.filter(game => game.name !== this.name)
    }
}

const Game = new game("Free fire", 300, "Hard")
const Game_2 = new game("Fortnite", 400, "Easy")

Game_2.Delete();

console.log(game.games)