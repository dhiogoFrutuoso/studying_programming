//FUNÇÃO RECURSIVA

// function countdown(number) { //exemplo a ser usado
//     for (let i = number; i > 0; i--) {
//         console.log(i)
//     }
// }

// countdown(10)

//Que chama a si mesma na função

function countdownRecursive(number) {
    if (number < 1) return;
    setTimeout(() => { //Coloca um tempo para executar a função
        // console.log(number)
        countdownRecursive(number - 1)},
    1000);
}

countdownRecursive(5)





//OUTRA FUNÇÃO

function sum(number, result=0) {
    if (number < 0) {
        return result;
    };
    return sum(number - 1, result + number)    
}

console.log(sum(5))