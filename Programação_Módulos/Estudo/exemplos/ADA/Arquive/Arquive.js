import path from 'node:path';
import fs from 'node:fs';
//Importando os métodos


const filePath = path.join(process.cwd(), 'src', 'texto.txt'); //Caminho do arquivo texto.txt
const fileOutPath = path.join(process.cwd(), 'src', 'other_text.txt');
console.log(filePath);

fs.readFile(filePath, {}, (erro, data) => {
    if (erro) {
        console.log('Erro ao ler o arquivo:', erro);
        return;
    }
    const texto = data.toString();
    const linhas = texto.split('\n'); //Dividindo o texto em linhas

    const linhasAjustadas = linhas.map((linha, index, arrayDeLinhas) =>
        `${index + 1} - ${linha}`
    ); //Pegando cada linha do texto e printando no console com sua posição

    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (erro) => {
        if (erro) {
            console.log('Erro na escrita do arquivo:', fileOutPath);
            return;
        }
    }) 
//Retorna uma callback com erro (if, se houver erro) e data (conteúdo do arquivo)
//Retorna um valor hexadecimal, toString() serve para coverter para string
});

