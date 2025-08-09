//Módulos com CommonJS (importando com module.exports)

function sum_1(a, b) {
    return a + b;
}
function sub_2(a, b) {
    return a - b;
}

//module.exports = { sum_1, sub_2, Animal: 'Dog' }; (Exportando as funções e o objeto Animal)


//Módulos com ES6 (importando com import/export) sem o default

    // export function sum(a, b) {
    //     return a + b;
    // }  
    // export function sub(a, b) {
    //     return a - b;
    // }

//Exportando com default

function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}

export default { sum, sub, Animal: { Gato: "Felino" } }; // Exportando as funções e o objeto Animal


//import "Arquivo.js": Importando o arquivo inteiro
//import { } from "Arquivo.js": Importando funções específicas
//import (nome) from "Arquivo.js": Importando o arquivo inteiro com um nome específico e com função de objeto