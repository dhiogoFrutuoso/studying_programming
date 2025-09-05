const backpack = {
    caderno: 'Caderno',
    estojo: [
        'caneta', 'lápis', 'borracha', {caneta_1: 'azul', caneta_2: 'preta'}
    ],
    pasta: {
        atividade: 'matemática',
        livro: 'português'
    }
};

console.log(backpack.estojo[1]); //lápis
console.log(backpack.pasta.livro); //português

const caderno = 'Valor de exemplo'

const { estojo, pasta } = backpack;
const {caderno: caderno_2 } = backpack;
console.log(caderno_2); //caderno
console.log(estojo); //array estojo
console.log(estojo[2]); //borracha
console.log(pasta); //objeto pasta
console.log(pasta.livro); //português
console.log(estojo[3].caneta_1); //azul

//Outras formas de desestruturação:

//import { nomeDaFuncao } from './caminhoDoArquivo.js';
//import * as MeuModulo from './caminhoDoArquivo.js'; //Importa tudo do arquivo e coloca dentro do objeto MeuModulo
//import MeuModulo from './caminhoDoArquivo.js'; //Importa o export default do arquivo e coloca dentro da variável MeuModulo
