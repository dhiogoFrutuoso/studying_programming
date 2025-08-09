//Tratamento de erros:

//Colocando um texto em maiúsculo, retornando o erro caso o parâmetro não seja uma string!

function upper(text) {
    if (typeof text !== "string"){
        throw new Error("O parâmetro esperado deve ser uma string!")
    }
    return text.toUpperCase();
}

try {
    console.log(upper("dhiogo"))
} catch (error) {
    console.log("Não foi possível executar a função: ", error);
} finally {
    console.log("Fim do programa!")
}



//======================================================================================================



//Somando dois números, throw atribui o erro ao catch, se trocar + por , o erro é printado no terminal sem 
//parar a execução do código.

function number(a, b) {
    if (a && b < 0) {
        throw new Error("Digite números acima de zero!")
    }
    return console.log(a + b);
}

try {
    number(1, -1)
} catch (error) {
    console.log("Não foi possível executar a função: " + error)
} finally {
    console.log("Fim do programa!")
}