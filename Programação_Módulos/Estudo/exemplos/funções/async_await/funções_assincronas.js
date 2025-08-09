//async/await

//=======================================================================================================

//Esperando motorista

function requestDriver () {
    return new Promise ( resolve => {
        setTimeout( () => {
            resolve("Aguardando motorista")
        }, 1000 )}
    )
}

async function result() {
    const result = await requestDriver()
    console.log(result)
}
// result()



//=======================================================================================================

//desafio UBER do CHATGPT

function requestDriver_2 (Driver, Disponible) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (Driver > 0 && Disponible === true) {
                return resolve(true)
            }
            return reject(false) 
        }, 2000)
    })
}

function playDrive () {
    return new Promise ( resolve => {
        setTimeout( () => {
            resolve("Corrida iniciada")
        }, 1000)
    })
}

function finishDrive () {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve("Corrida finalizada")
        }, 3000)
    })
}

async function Driver() {
    let driver = 1;
    let disponible = Math.random() < 0.6
    console.log("Aguardando motorista...")

    const request = await requestDriver_2(driver, disponible).catch( () => null)
    if (request == true){
        const play = await playDrive()
        const finish = await finishDrive()

        console.log("Motorista aceitou a corrida");
        console.log(play);
        console.log(finish)
        return
    } else if (driver < 1){
        console.log("Não há motoristas trabalhando no momento, tente novamente mais tarde!")
    } else if (disponible != true ) {
        console.log("Nenhum motorista aceitou sua solicitação, tente novamente mais tarde!")
    }
}
// Driver()



//=======================================================================================================

//Dá um valor aleatório, espera o tempo do setTimeout e printa logo após

import { setTimeout } from "node:timers/promises"

function getNumber() {
    return new Promise ( value => {
        setTimeout( 2000,
            value(parseInt(Math.random() * 10)))
    })
};

async function main () {
    console.log("Função iniciada");
    const value = await getNumber();
    console.log(value);
    console.log("Função finalizada");
}
// main();



//=======================================================================================================

//Perguntar e printar o nome, semelhante ao input do python

import { text } from "@clack/prompts"

async function name() {
    const name = await text({ message: "Digite o seu nome: " })
    
    console.log("Seja bem vindo " + name)
}
// name()