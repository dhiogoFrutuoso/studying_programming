//Json: Javascript Object Notation

//É um objeto em formato de string que só armazena dados estáticos
//Pode ser usado com objetos e estruturas de objetos(classes).

import json from "./person.json" with { type: "json" };
import { writeFileSync, readFileSync } from "node:fs"

const { nickname, level, health } = json;
console.log(json)
console.log(nickname, level, health)

const player = JSON.parse("{\"name\": \"Dhiogo\"}") //Parsea uma string em JSON e retorna um objeto.
console.log(player) //Por o json ser em string, parse serve para pegar e transformar em objeto para ser alterado.

const Player = {
    nickname: "Rickizx",
    level: 10,

    print() {
        console.log(nickname, level)
    }
}

const stringJson = JSON.stringify(Player)
console.log(stringJson) //Transforma o objeto em um texto(string) para poder ser armazenado em um arquivo.
//Por isso remove a função print(), pois o json armazena apenas dados estáticos.

writeFileSync("./newPlayer.json", JSON.stringify(Player), "utf8"); //Cria um arquivo json com o nome newPlayer
//transformando assim o objeto Player em string e depois passa a string para o arquivo.

Player.nickname = "Dhiogo";
writeFileSync("./newPlayer.json", JSON.stringify(Player, null, 2), "utf8"); //fazendo isso, altera o nickname no arquivo
//Sem precisar criá-lo novamente. o (null, 2) serve para formatar o arquivo, pois ficava só em uma linha.

const readString = readFileSync("./newPlayer.json", "utf8");
console.log(readString); //Lê o arquivo e retorna uma string do objeto do arquivo.json

const parseString = JSON.parse(readString); //Transforma a string do arquivo em um objeto.
console.log(parseString);

const { nickname: nick } = parseString;
console.log(nick);


async function main() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1") //Analisa o site
    const data = await response.json() //Transforma em objeto as informações do site
    console.log(data);

}
main()

class person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const Person = new person("Dhiogo", 17);
const Person1 = new person("Débora", 16);

//writeFileSync("./newPerson.json", JSON.stringify(person, null, 2), "utf8"); //cria um arquivo com a classe person

writeFileSync("./newPerson.json", JSON.stringify([Person, Person1], null, 2), "utf8"); //Cria um arquivo com uma
//Array com as classes Person e Person1.