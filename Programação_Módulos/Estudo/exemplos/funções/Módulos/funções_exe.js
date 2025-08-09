//importando as funções com o CommonJS:

    // const { sum, sub, Animal } = require("./funções.js");

    // console.log(sum(5, 3));
    // console.log(sub(10, 4));
    // console.log(Animal.Gato);


//importando as funções com o ES6 e sem o default:

    // import { sum, sub, Animal } from "./funções.js";

    // console.log(sum(5, 3));
    // console.log(sub(10, 4));
    // console.log(Animal.Gato);

//importando com default:

import funções from "./funções.js";

console.log(funções.sum(5, 3));
console.log(funções.sub(10, 4));
console.log(funções.Animal.Gato);

