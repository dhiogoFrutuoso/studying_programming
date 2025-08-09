//CALLBACK: CRIAR UMA FUNÇÃO COMO PARÂMETRO PARA UMA FUNÇÃO

function performe(name, exec){
    console.log(name + " está executando uma função");
    exec();     
}

performe("Dhiogo", () => {
    console.log("Olá!");
});





//OUTRA FUNÇÃO

const numbers = [1, 2, 3, 4, 5];

const filtering_1 = numbers.filter( (number) => number > 1 );
console.log(filter);

function filtering(exec) {
    const numbers = [10, 20, 30, 40, 50];
    for (const number of numbers) {
        exec(number);
    }
};

filtering(number => console.log("item atual: " + number) );





//OUTRA FUNÇÃO

const array = [10, 11, 15, 40, 78, 90, 201, 454, 2343];

function filtered(array, callback) {
    for (const number of array) {
        if (callback(number)) {
            console.log("Número: " + number);
        }
    }
}

filtered(array, number => {
    return number > 100
});





//OUTRA FUNÇÃO

const names = ["João", "Dhiogo", "Maria", "Ana"];

function filter(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            console.log("Nome: " + array[i]);
        }
    }
}

filter(names, name => {
    if (name.endsWith("o")) {
        return true
    }
});





//OUTRA FUNÇÃO

function filterNames2(name) {
    return name.endsWith("a")
}

const filtering2 = filter(names, filterNames2)





//OUTRA FUNÇÃO

